<<<<<<< HEAD
"use client"

import type React from "react"

import { useState, useRef, useEffect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sky } from "@react-three/drei"
import * as THREE from "three"
import { Play, Pause, RotateCcw, Sun, Sunrise, Sunset, TrendingUp, Clock, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

// Constants
const SUNRISE = 360 // 6:00 AM
const SUNSET = 1080 // 6:00 PM
const MAX_POWER = 200

function getSunPosition(minutes: number) {
  const dayProgress = Math.max(0, Math.min(1, (minutes - SUNRISE) / (SUNSET - SUNRISE)))
  const angle = dayProgress * Math.PI
  const elevation = Math.sin(angle) * 70
  const azimuth = -90 + dayProgress * 180
  return { elevation, azimuth, dayProgress }
}

function calculatePower(sunElevation: number, panelAngle: number) {
  if (sunElevation <= 0) return 0
  const incidenceAngle = Math.abs(sunElevation - panelAngle)
  const sunIntensity = Math.sin((sunElevation * Math.PI) / 180)
  const cosIncidence = Math.cos((incidenceAngle * Math.PI) / 180)
  return MAX_POWER * cosIncidence * sunIntensity
}

function minutesToTime(minutes: number) {
  const hours = Math.floor(minutes / 60)
  const mins = Math.floor(minutes % 60)
  const period = hours >= 12 ? "PM" : "AM"
  const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours
  return `${displayHours}:${mins.toString().padStart(2, "0")} ${period}`
}

// 3D Solar Panel Component
function SolarPanel({ panelAngle }: { panelAngle: number }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (-panelAngle * Math.PI) / 180,
        0.1,
      )
    }
  })

  return (
    <group position={[0, 0.5, 0]}>
      {/* Mount pole */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 1, 16]} />
        <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Base */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 0.1, 32]} />
        <meshStandardMaterial color="#1f2937" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Rotating panel group */}
      <group ref={groupRef}>
        {/* Panel frame */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.4, 0.08, 1.4]} />
          <meshStandardMaterial color="#1f2937" metalness={0.7} roughness={0.3} />
        </mesh>

        {/* Solar cells grid */}
        {Array.from({ length: 6 }).map((_, col) =>
          Array.from({ length: 3 }).map((_, row) => (
            <mesh key={`${col}-${row}`} position={[-0.95 + col * 0.38, 0.05, -0.45 + row * 0.45]}>
              <boxGeometry args={[0.35, 0.02, 0.42]} />
              <meshStandardMaterial color="#1e3a8a" metalness={0.4} roughness={0.1} envMapIntensity={1.5} />
            </mesh>
          )),
        )}

        {/* Cell grid lines */}
        {Array.from({ length: 6 }).map((_, col) =>
          Array.from({ length: 3 }).map((_, row) => (
            <lineSegments key={`line-${col}-${row}`} position={[-0.95 + col * 0.38, 0.065, -0.45 + row * 0.45]}>
              <edgesGeometry args={[new THREE.BoxGeometry(0.35, 0.02, 0.42)]} />
              <lineBasicMaterial color="#60a5fa" transparent opacity={0.6} />
            </lineSegments>
          )),
        )}
      </group>
    </group>
  )
}

// Animated Sun
function AnimatedSun({ elevation, azimuth }: { elevation: number; azimuth: number }) {
  const glowRef = useRef<THREE.Mesh>(null)

  const sunX = Math.sin((azimuth * Math.PI) / 180) * 8
  const sunY = Math.max(0.5, (elevation / 70) * 6 + 1)
  const sunZ = -Math.cos((azimuth * Math.PI) / 180) * 8

  useFrame((state) => {
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })

  if (elevation < 0) return null

  return (
    <group position={[sunX, sunY, sunZ]}>
      {/* Sun glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#ffd700" transparent opacity={0.3} />
      </mesh>
      {/* Sun core */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#ffd700" />
      </mesh>
      {/* Point light */}
      <pointLight color="#fff7ed" intensity={2} distance={20} />
    </group>
  )
}

// Ground with grid
function Ground() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      <gridHelper args={[30, 30, "#2d2d4a", "#1f1f3a"]} position={[0, -0.99, 0]} />
    </group>
  )
}

// 3D Scene Component
function Scene({ timeMinutes }: { timeMinutes: number }) {
  const { elevation, azimuth } = getSunPosition(timeMinutes)
  const panelAngle = Math.max(5, Math.min(85, elevation))

  const isDaytime = elevation > 0
  const sunPosition: [number, number, number] = [
    Math.sin((azimuth * Math.PI) / 180) * 100,
    Math.max(1, elevation),
    -Math.cos((azimuth * Math.PI) / 180) * 100,
  ]

  return (
    <>
      <ambientLight intensity={isDaytime ? 0.4 : 0.1} />
      <directionalLight
        position={sunPosition}
        intensity={isDaytime ? 1.5 : 0.1}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />

      {isDaytime ? (
        <Sky sunPosition={sunPosition} turbidity={8} rayleigh={2} mieCoefficient={0.005} mieDirectionalG={0.8} />
      ) : (
        <color attach="background" args={["#0a0a1a"]} />
      )}

      <AnimatedSun elevation={elevation} azimuth={azimuth} />
      <SolarPanel panelAngle={panelAngle} />
      <Ground />

      <OrbitControls
        enablePan={false}
        minDistance={3}
        maxDistance={12}
        minPolarAngle={0.2}
        maxPolarAngle={Math.PI / 2.1}
      />
    </>
  )
}

// Stats Card Component
function StatCard({
  label,
  value,
  unit,
  icon: Icon,
  highlight = false,
}: {
  label: string
  value: string | number
  unit: string
  icon: React.ElementType
  highlight?: boolean
}) {
  return (
    <div className={`rounded-xl p-4 ${highlight ? "bg-orange-100 border border-orange-300" : "bg-orange-100"}`}>
      <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
        <Icon className="w-4 h-4" />
        <span>{label}</span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className={`text-2xl font-bold ${highlight ? "text-orange-600" : "text-gray-800"}`}>{value}</span>
        <span className="text-gray-500 text-sm">{unit}</span>
      </div>
    </div>
  )
}

// Energy Bar Chart
function EnergyChart({ trackingEnergy, fixedEnergy }: { trackingEnergy: number; fixedEnergy: number }) {
  const maxEnergy = Math.max(trackingEnergy, fixedEnergy, 1)

  return (
    <div className="bg-orange-100 rounded-xl p-4">
      <h3 className="text-sm font-medium text-gray-500 mb-4">Daily Energy Output</h3>
      <div className="flex items-end gap-6 h-32">
        <div className="flex-1 flex flex-col items-center gap-2">
          <div className="w-full bg-orange-200 rounded-t-md relative" style={{ height: "100%" }}>
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-gray-400 to-gray-500 rounded-t-md transition-all duration-500"
              style={{ height: `${(fixedEnergy / maxEnergy) * 100}%` }}
            />
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800">{fixedEnergy.toFixed(1)}</div>
            <div className="text-xs text-gray-500">kWh</div>
            <div className="text-xs text-gray-500 mt-1">Fixed Panel</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-2">
          <div className="w-full bg-orange-200 rounded-t-md relative" style={{ height: "100%" }}>
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-md transition-all duration-500"
              style={{ height: `${(trackingEnergy / maxEnergy) * 100}%` }}
            />
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-orange-600">{trackingEnergy.toFixed(1)}</div>
            <div className="text-xs text-gray-500">kWh</div>
            <div className="text-xs text-gray-500 mt-1">Tracking</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SolarSimulator() {
  const [timeMinutes, setTimeMinutes] = useState(720)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(10)
  const animationRef = useRef<number | null>(null)

  const { elevation } = getSunPosition(timeMinutes)
  const panelAngle = Math.max(5, Math.min(85, elevation))
  const trackingPower = calculatePower(elevation, panelAngle)
  const fixedPower = calculatePower(elevation, 30)
  const efficiencyGain = fixedPower > 0 ? Math.min(26, ((trackingPower - fixedPower) / fixedPower) * 100) : 0

  // Simulated daily totals
  const trackingDailyEnergy = 5.1
  const fixedDailyEnergy = 3.2

  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        setTimeMinutes((prev) => {
          const next = prev + speed / 10
          return next > 1440 ? 0 : next
        })
        animationRef.current = requestAnimationFrame(animate)
      }
      animationRef.current = requestAnimationFrame(animate)
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, speed])

  const handleReset = () => {
    setTimeMinutes(720)
    setIsPlaying(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-orange-400">RayCatcher</span> Simulator
          </h1>
        </header>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* 3D Canvas */}
          <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden border border-gray-200 h-[400px] md:h-[500px]">
            <Canvas shadows camera={{ position: [5, 3, 5], fov: 50 }}>
              <Suspense fallback={null}>
                <Scene timeMinutes={timeMinutes} />
              </Suspense>
            </Canvas>
          </div>

          {/* Stats Panel */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Live Metrics</h2>

            <div className="grid grid-cols-2 gap-3">
              <StatCard label="Current Time" value={minutesToTime(timeMinutes)} unit="" icon={Clock} />
              <StatCard label="Sun Elevation" value={Math.max(0, elevation).toFixed(1)} unit="°" icon={Sun} />
              <StatCard label="Panel Angle" value={panelAngle.toFixed(1)} unit="°" icon={Gauge} />
              <StatCard
                label="Efficiency Gain"
                value={`+${efficiencyGain.toFixed(0)}`}
                unit="%"
                icon={TrendingUp}
                highlight={efficiencyGain > 0}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-orange-100 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">Tracking Power</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-orange-600">{trackingPower.toFixed(0)}</span>
                  <span className="text-gray-500 text-sm">W</span>
                </div>
              </div>
              <div className="bg-orange-100 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">Fixed Power</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-gray-500">{fixedPower.toFixed(0)}</span>
                  <span className="text-gray-500 text-sm">W</span>
                </div>
              </div>
            </div>

            <EnergyChart trackingEnergy={trackingDailyEnergy} fixedEnergy={fixedDailyEnergy} />
          </div>
        </div>

        {/* Controls Panel */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6">
          <h2 className="text-lg font-semibold">Controls</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Time Control */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Time of Day</span>
                <span className="font-medium">{minutesToTime(timeMinutes)}</span>
              </div>
              <Slider
                value={[timeMinutes]}
                onValueChange={([v]) => setTimeMinutes(v)}
                min={0}
                max={1440}
                step={1}
                className="w-full"
              />
            </div>

            {/* Speed Control */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Animation Speed</span>
                <span className="font-medium">{speed}x</span>
              </div>
              <Slider
                value={[speed]}
                onValueChange={([v]) => setSpeed(v)}
                min={1}
                max={50}
                step={1}
                className="w-full"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => setIsPlaying(!isPlaying)} className="flex-1 min-w-[120px]">
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 mr-2" /> Pause
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" /> Play
                </>
              )}
            </Button>
            <Button variant="ghost" onClick={handleReset} className="flex-1 min-w-[120px] border border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100 hover:text-orange-800">
              <RotateCcw className="w-4 h-4 mr-2" /> Reset
            </Button>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="ghost" onClick={() => setTimeMinutes(SUNRISE)} className="flex-1 min-w-[100px] border border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100 hover:text-orange-800">
              <Sunrise className="w-4 h-4 mr-2" /> Sunrise
            </Button>
            <Button variant="ghost" onClick={() => setTimeMinutes(720)} className="flex-1 min-w-[100px] border border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100 hover:text-orange-800">
              <Sun className="w-4 h-4 mr-2" /> Noon
            </Button>
            <Button variant="ghost" onClick={() => setTimeMinutes(SUNSET)} className="flex-1 min-w-[100px] border border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100 hover:text-orange-800">
              <Sunset className="w-4 h-4 mr-2" /> Sunset
            </Button>
          </div>
        </div>
"use client"

import type React from "react"

import { useState, useRef, useEffect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sky } from "@react-three/drei"
import * as THREE from "three"
import { Play, Pause, RotateCcw, Sun, Sunrise, Sunset, TrendingUp, Clock, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

// Constants
const SUNRISE = 360 // 6:00 AM
const SUNSET = 1080 // 6:00 PM
const MAX_POWER = 200

function getSunPosition(minutes: number) {
  const dayProgress = Math.max(0, Math.min(1, (minutes - SUNRISE) / (SUNSET - SUNRISE)))
  const angle = dayProgress * Math.PI
  const elevation = Math.sin(angle) * 70
  const azimuth = -90 + dayProgress * 180
  return { elevation, azimuth, dayProgress }
}

function calculatePower(sunElevation: number, panelAngle: number) {
  if (sunElevation <= 0) return 0
  const incidenceAngle = Math.abs(sunElevation - panelAngle)
  const sunIntensity = Math.sin((sunElevation * Math.PI) / 180)
  const cosIncidence = Math.cos((incidenceAngle * Math.PI) / 180)
  return MAX_POWER * cosIncidence * sunIntensity
}

function minutesToTime(minutes: number) {
  const hours = Math.floor(minutes / 60)
  const mins = Math.floor(minutes % 60)
  const period = hours >= 12 ? "PM" : "AM"
  const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours
  return `${displayHours}:${mins.toString().padStart(2, "0")} ${period}`
}

// 3D Solar Panel Component
function SolarPanel({ panelAngle }: { panelAngle: number }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (-panelAngle * Math.PI) / 180,
        0.1,
      )
    }
  })

  return (
    <group position={[0, 0.5, 0]}>
      {/* Mount pole */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 1, 16]} />
        <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Base */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 0.1, 32]} />
        <meshStandardMaterial color="#1f2937" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Rotating panel group */}
      <group ref={groupRef}>
        {/* Panel frame */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.4, 0.08, 1.4]} />
          <meshStandardMaterial color="#1f2937" metalness={0.7} roughness={0.3} />
        </mesh>

        {/* Solar cells grid */}
        {Array.from({ length: 6 }).map((_, col) =>
          Array.from({ length: 3 }).map((_, row) => (
            <mesh key={`${col}-${row}`} position={[-0.95 + col * 0.38, 0.05, -0.45 + row * 0.45]}>
              <boxGeometry args={[0.35, 0.02, 0.42]} />
              <meshStandardMaterial color="#1e3a8a" metalness={0.4} roughness={0.1} envMapIntensity={1.5} />
            </mesh>
          )),
        )}

        {/* Cell grid lines */}
        {Array.from({ length: 6 }).map((_, col) =>
          Array.from({ length: 3 }).map((_, row) => (
            <lineSegments key={`line-${col}-${row}`} position={[-0.95 + col * 0.38, 0.065, -0.45 + row * 0.45]}>
              <edgesGeometry args={[new THREE.BoxGeometry(0.35, 0.02, 0.42)]} />
              <lineBasicMaterial color="#60a5fa" transparent opacity={0.6} />
            </lineSegments>
          )),
        )}
      </group>
    </group>
  )
}

// Animated Sun
function AnimatedSun({ elevation, azimuth }: { elevation: number; azimuth: number }) {
  const glowRef = useRef<THREE.Mesh>(null)

  const sunX = Math.sin((azimuth * Math.PI) / 180) * 8
  const sunY = Math.max(0.5, (elevation / 70) * 6 + 1)
  const sunZ = -Math.cos((azimuth * Math.PI) / 180) * 8

  useFrame((state) => {
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })

  if (elevation < 0) return null

  return (
    <group position={[sunX, sunY, sunZ]}>
      {/* Sun glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#ffd700" transparent opacity={0.3} />
      </mesh>
      {/* Sun core */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#ffd700" />
      </mesh>
      {/* Point light */}
      <pointLight color="#fff7ed" intensity={2} distance={20} />
    </group>
  )
}

// Ground with grid
function Ground() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      <gridHelper args={[30, 30, "#2d2d4a", "#1f1f3a"]} position={[0, -0.99, 0]} />
    </group>
  )
}

// 3D Scene Component
function Scene({ timeMinutes }: { timeMinutes: number }) {
  const { elevation, azimuth } = getSunPosition(timeMinutes)
  const panelAngle = Math.max(5, Math.min(85, elevation))

  const isDaytime = elevation > 0
  const sunPosition: [number, number, number] = [
    Math.sin((azimuth * Math.PI) / 180) * 100,
    Math.max(1, elevation),
    -Math.cos((azimuth * Math.PI) / 180) * 100,
  ]

  return (
    <>
      <ambientLight intensity={isDaytime ? 0.4 : 0.1} />
      <directionalLight
        position={sunPosition}
        intensity={isDaytime ? 1.5 : 0.1}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />

      {isDaytime ? (
        <Sky sunPosition={sunPosition} turbidity={8} rayleigh={2} mieCoefficient={0.005} mieDirectionalG={0.8} />
      ) : (
        <color attach="background" args={["#0a0a1a"]} />
      )}

      <AnimatedSun elevation={elevation} azimuth={azimuth} />
      <SolarPanel panelAngle={panelAngle} />
      <Ground />

      <OrbitControls
        enablePan={false}
        minDistance={3}
        maxDistance={12}
        minPolarAngle={0.2}
        maxPolarAngle={Math.PI / 2.1}
      />
    </>
  )
}

// Stats Card Component
function StatCard({
  label,
  value,
  unit,
  icon: Icon,
  highlight = false,
}: {
  label: string
  value: string | number
  unit: string
  icon: React.ElementType
  highlight?: boolean
}) {
  return (
    <div className={`rounded-xl p-4 ${highlight ? "bg-orange-100 border border-orange-300" : "bg-orange-100"}`}>
      <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
        <Icon className="w-4 h-4" />
        <span>{label}</span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className={`text-2xl font-bold ${highlight ? "text-orange-600" : "text-gray-800"}`}>{value}</span>
        <span className="text-gray-500 text-sm">{unit}</span>
      </div>
    </div>
  )
}

// Energy Bar Chart
function EnergyChart({ trackingEnergy, fixedEnergy }: { trackingEnergy: number; fixedEnergy: number }) {
  const maxEnergy = Math.max(trackingEnergy, fixedEnergy, 1)

  return (
    <div className="bg-orange-100 rounded-xl p-4">
      <h3 className="text-sm font-medium text-gray-500 mb-4">Daily Energy Output</h3>
      <div className="flex items-end gap-6 h-32">
        <div className="flex-1 flex flex-col items-center gap-2">
          <div className="w-full bg-orange-200 rounded-t-md relative" style={{ height: "100%" }}>
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-gray-400 to-gray-500 rounded-t-md transition-all duration-500"
              style={{ height: `${(fixedEnergy / maxEnergy) * 100}%` }}
            />
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800">{fixedEnergy.toFixed(1)}</div>
            <div className="text-xs text-gray-500">kWh</div>
            <div className="text-xs text-gray-500 mt-1">Fixed Panel</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-2">
          <div className="w-full bg-orange-200 rounded-t-md relative" style={{ height: "100%" }}>
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-md transition-all duration-500"
              style={{ height: `${(trackingEnergy / maxEnergy) * 100}%` }}
            />
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-orange-600">{trackingEnergy.toFixed(1)}</div>
            <div className="text-xs text-gray-500">kWh</div>
            <div className="text-xs text-gray-500 mt-1">Tracking</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SolarSimulator() {
  const [timeMinutes, setTimeMinutes] = useState(720)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(10)
  const animationRef = useRef<number | null>(null)

  const { elevation } = getSunPosition(timeMinutes)
  const panelAngle = Math.max(5, Math.min(85, elevation))
  const trackingPower = calculatePower(elevation, panelAngle)
  const fixedPower = calculatePower(elevation, 30)
  const efficiencyGain = fixedPower > 0 ? Math.min(26, ((trackingPower - fixedPower) / fixedPower) * 100) : 0

  // Simulated daily totals
  const trackingDailyEnergy = 5.1
  const fixedDailyEnergy = 3.2

  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        setTimeMinutes((prev) => {
          const next = prev + speed / 10
          return next > 1440 ? 0 : next
        })
        animationRef.current = requestAnimationFrame(animate)
      }
      animationRef.current = requestAnimationFrame(animate)
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, speed])

  const handleReset = () => {
    setTimeMinutes(720)
    setIsPlaying(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-orange-400">RayCatcher</span> Simulator
          </h1>
        </header>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* 3D Canvas */}
          <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden border border-gray-200 h-[400px] md:h-[500px]">
            <Canvas shadows camera={{ position: [5, 3, 5], fov: 50 }}>
              <Suspense fallback={null}>
                <Scene timeMinutes={timeMinutes} />
              </Suspense>
            </Canvas>
          </div>

          {/* Stats Panel */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Live Metrics</h2>

            <div className="grid grid-cols-2 gap-3">
              <StatCard label="Current Time" value={minutesToTime(timeMinutes)} unit="" icon={Clock} />
              <StatCard label="Sun Elevation" value={Math.max(0, elevation).toFixed(1)} unit="°" icon={Sun} />
              <StatCard label="Panel Angle" value={panelAngle.toFixed(1)} unit="°" icon={Gauge} />
              <StatCard
                label="Efficiency Gain"
                value={`+${efficiencyGain.toFixed(0)}`}
                unit="%"
                icon={TrendingUp}
                highlight={efficiencyGain > 0}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-orange-100 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">Tracking Power</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-orange-600">{trackingPower.toFixed(0)}</span>
                  <span className="text-gray-500 text-sm">W</span>
                </div>
              </div>
              <div className="bg-orange-100 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">Fixed Power</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-gray-500">{fixedPower.toFixed(0)}</span>
                  <span className="text-gray-500 text-sm">W</span>
                </div>
              </div>
            </div>

            <EnergyChart trackingEnergy={trackingDailyEnergy} fixedEnergy={fixedDailyEnergy} />
          </div>
        </div>

        {/* Controls Panel */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6">
          <h2 className="text-lg font-semibold">Controls</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Time Control */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Time of Day</span>
                <span className="font-medium">{minutesToTime(timeMinutes)}</span>
              </div>
              <Slider
                value={[timeMinutes]}
                onValueChange={([v]) => setTimeMinutes(v)}
                min={0}
                max={1440}
                step={1}
                className="w-full"
              />
            </div>

            {/* Speed Control */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Animation Speed</span>
                <span className="font-medium">{speed}x</span>
              </div>
              <Slider
                value={[speed]}
                onValueChange={([v]) => setSpeed(v)}
                min={1}
                max={50}
                step={1}
                className="w-full"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => setIsPlaying(!isPlaying)} className="flex-1 min-w-[120px]">
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 mr-2" /> Pause
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" /> Play
                </>
              )}
            </Button>
            <Button variant="ghost" onClick={handleReset} className="flex-1 min-w-[120px] border border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100 hover:text-orange-800">
              <RotateCcw className="w-4 h-4 mr-2" /> Reset
            </Button>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="ghost" onClick={() => setTimeMinutes(SUNRISE)} className="flex-1 min-w-[100px] border border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100 hover:text-orange-800">
              <Sunrise className="w-4 h-4 mr-2" /> Sunrise
            </Button>
            <Button variant="ghost" onClick={() => setTimeMinutes(720)} className="flex-1 min-w-[100px] border border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100 hover:text-orange-800">
              <Sun className="w-4 h-4 mr-2" /> Noon
            </Button>
            <Button variant="ghost" onClick={() => setTimeMinutes(SUNSET)} className="flex-1 min-w-[100px] border border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100 hover:text-orange-800">
              <Sunset className="w-4 h-4 mr-2" /> Sunset
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
