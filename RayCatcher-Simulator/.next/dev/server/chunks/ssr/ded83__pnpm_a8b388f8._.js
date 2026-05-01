module.exports = [
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
        }, [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect(function() {
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
            return subscribe(function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            });
        }, [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = ("TURBOPACK compile-time truthy", 1) ? useSyncExternalStore$1 : "TURBOPACK unreachable";
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.0/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), shim = __turbopack_context__.r("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.0/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
            var inst = {
                hasValue: !1,
                value: null
            };
            instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function() {
            function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                    hasMemo = !0;
                    memoizedSnapshot = nextSnapshot;
                    nextSnapshot = selector(nextSnapshot);
                    if (void 0 !== isEqual && inst.hasValue) {
                        var currentSelection = inst.value;
                        if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                    }
                    return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
            }
            var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
                function() {
                    return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                }
            ];
        }, [
            getSnapshot,
            getServerSnapshot,
            selector,
            isEqual
        ]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function() {
            inst.hasValue = !0;
            inst.value = value;
        }, [
            value
        ]);
        useDebugValue(value);
        return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.0/node_modules/use-sync-external-store/shim/with-selector.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/zustand@5.0.8_@types+react@_bfbce9e1114fcf2d2e4c3b516d615df6/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStore",
    ()=>createStore
]);
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
;
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/zustand@5.0.8_@types+react@_bfbce9e1114fcf2d2e4c3b516d615df6/node_modules/zustand/esm/traditional.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWithEqualityFn",
    ()=>createWithEqualityFn,
    "useStoreWithEqualityFn",
    ()=>useStoreWithEqualityFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.0/node_modules/use-sync-external-store/shim/with-selector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$8_$40$types$2b$react$40$_bfbce9e1114fcf2d2e4c3b516d615df6$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/zustand@5.0.8_@types+react@_bfbce9e1114fcf2d2e4c3b516d615df6/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)");
;
;
;
const { useSyncExternalStoreWithSelector } = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const identity = (arg)=>arg;
function useStoreWithEqualityFn(api, selector = identity, equalityFn) {
    const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getInitialState, selector, equalityFn);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useDebugValue(slice);
    return slice;
}
const createWithEqualityFnImpl = (createState, defaultEqualityFn)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$8_$40$types$2b$react$40$_bfbce9e1114fcf2d2e4c3b516d615df6$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn)=>useStoreWithEqualityFn(api, selector, equalityFn);
    Object.assign(useBoundStoreWithEqualityFn, api);
    return useBoundStoreWithEqualityFn;
};
const createWithEqualityFn = (createState, defaultEqualityFn)=>createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl;
;
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/suspend-react@0.1.3_react@19.2.0/node_modules/suspend-react/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clear",
    ()=>clear,
    "peek",
    ()=>peek,
    "preload",
    ()=>preload,
    "suspend",
    ()=>suspend
]);
const isPromise = (promise)=>typeof promise === 'object' && typeof promise.then === 'function';
const globalCache = [];
function shallowEqualArrays(arrA, arrB, equal = (a, b)=>a === b) {
    if (arrA === arrB) return true;
    if (!arrA || !arrB) return false;
    const len = arrA.length;
    if (arrB.length !== len) return false;
    for(let i = 0; i < len; i++)if (!equal(arrA[i], arrB[i])) return false;
    return true;
}
function query(fn, keys = null, preload = false, config = {}) {
    // If no keys were given, the function is the key
    if (keys === null) keys = [
        fn
    ];
    for (const entry of globalCache){
        // Find a match
        if (shallowEqualArrays(keys, entry.keys, entry.equal)) {
            // If we're pre-loading and the element is present, just return
            if (preload) return undefined; // If an error occurred, throw
            if (Object.prototype.hasOwnProperty.call(entry, 'error')) throw entry.error; // If a response was successful, return
            if (Object.prototype.hasOwnProperty.call(entry, 'response')) {
                if (config.lifespan && config.lifespan > 0) {
                    if (entry.timeout) clearTimeout(entry.timeout);
                    entry.timeout = setTimeout(entry.remove, config.lifespan);
                }
                return entry.response;
            } // If the promise is still unresolved, throw
            if (!preload) throw entry.promise;
        }
    } // The request is new or has changed.
    const entry = {
        keys,
        equal: config.equal,
        remove: ()=>{
            const index = globalCache.indexOf(entry);
            if (index !== -1) globalCache.splice(index, 1);
        },
        promise: (isPromise(fn) ? fn : fn(...keys) // When it resolves, store its value
        ).then((response)=>{
            entry.response = response; // Remove the entry in time if a lifespan was given
            if (config.lifespan && config.lifespan > 0) {
                entry.timeout = setTimeout(entry.remove, config.lifespan);
            }
        }) // Store caught errors, they will be thrown in the render-phase to bubble into an error-bound
        .catch((error)=>entry.error = error)
    }; // Register the entry
    globalCache.push(entry); // And throw the promise, this yields control back to React
    if (!preload) throw entry.promise;
    return undefined;
}
const suspend = (fn, keys, config)=>query(fn, keys, false, config);
const preload = (fn, keys, config)=>void query(fn, keys, true, config);
const peek = (keys)=>{
    var _globalCache$find;
    return (_globalCache$find = globalCache.find((entry)=>shallowEqualArrays(keys, entry.keys, entry.equal))) == null ? void 0 : _globalCache$find.response;
};
const clear = (keys)=>{
    if (keys === undefined || keys.length === 0) globalCache.splice(0, globalCache.length);
    else {
        const entry = globalCache.find((entry)=>shallowEqualArrays(keys, entry.keys, entry.equal));
        if (entry) entry.remove();
    }
};
;
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/scheduler@0.25.0/node_modules/scheduler/cjs/scheduler.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
    function performWorkUntilDeadline() {
        if (isMessageLoopRunning) {
            var currentTime = exports.unstable_now();
            startTime = currentTime;
            var hasMoreWork = !0;
            try {
                a: {
                    isHostCallbackScheduled = !1;
                    isHostTimeoutScheduled && (isHostTimeoutScheduled = !1, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
                    isPerformingWork = !0;
                    var previousPriorityLevel = currentPriorityLevel;
                    try {
                        b: {
                            advanceTimers(currentTime);
                            for(currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost());){
                                var callback = currentTask.callback;
                                if ("function" === typeof callback) {
                                    currentTask.callback = null;
                                    currentPriorityLevel = currentTask.priorityLevel;
                                    var continuationCallback = callback(currentTask.expirationTime <= currentTime);
                                    currentTime = exports.unstable_now();
                                    if ("function" === typeof continuationCallback) {
                                        currentTask.callback = continuationCallback;
                                        advanceTimers(currentTime);
                                        hasMoreWork = !0;
                                        break b;
                                    }
                                    currentTask === peek(taskQueue) && pop(taskQueue);
                                    advanceTimers(currentTime);
                                } else pop(taskQueue);
                                currentTask = peek(taskQueue);
                            }
                            if (null !== currentTask) hasMoreWork = !0;
                            else {
                                var firstTimer = peek(timerQueue);
                                null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                                hasMoreWork = !1;
                            }
                        }
                        break a;
                    } finally{
                        currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = !1;
                    }
                    hasMoreWork = void 0;
                }
            } finally{
                hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = !1;
            }
        }
    }
    function push(heap, node) {
        var index = heap.length;
        heap.push(node);
        a: for(; 0 < index;){
            var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
            if (0 < compare(parent, node)) heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
            else break a;
        }
    }
    function peek(heap) {
        return 0 === heap.length ? null : heap[0];
    }
    function pop(heap) {
        if (0 === heap.length) return null;
        var first = heap[0], last = heap.pop();
        if (last !== first) {
            heap[0] = last;
            a: for(var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength;){
                var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
                if (0 > compare(left, last)) rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
                else if (rightIndex < length && 0 > compare(right, last)) heap[index] = right, heap[rightIndex] = last, index = rightIndex;
                else break a;
            }
        }
        return first;
    }
    function compare(a, b) {
        var diff = a.sortIndex - b.sortIndex;
        return 0 !== diff ? diff : a.id - b.id;
    }
    function advanceTimers(currentTime) {
        for(var timer = peek(timerQueue); null !== timer;){
            if (null === timer.callback) pop(timerQueue);
            else if (timer.startTime <= currentTime) pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
            else break;
            timer = peek(timerQueue);
        }
    }
    function handleTimeout(currentTime) {
        isHostTimeoutScheduled = !1;
        advanceTimers(currentTime);
        if (!isHostCallbackScheduled) if (null !== peek(taskQueue)) isHostCallbackScheduled = !0, requestHostCallback();
        else {
            var firstTimer = peek(timerQueue);
            null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }
    }
    function shouldYieldToHost() {
        return exports.unstable_now() - startTime < frameInterval ? !1 : !0;
    }
    function requestHostCallback() {
        isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline());
    }
    function requestHostTimeout(callback, ms) {
        taskTimeoutID = localSetTimeout(function() {
            callback(exports.unstable_now());
        }, ms);
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    exports.unstable_now = void 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var localPerformance = performance;
        exports.unstable_now = function() {
            return localPerformance.now();
        };
    } else {
        var localDate = Date, initialTime = localDate.now();
        exports.unstable_now = function() {
            return localDate.now() - initialTime;
        };
    }
    var taskQueue = [], timerQueue = [], taskIdCounter = 1, currentTask = null, currentPriorityLevel = 3, isPerformingWork = !1, isHostCallbackScheduled = !1, isHostTimeoutScheduled = !1, localSetTimeout = "function" === typeof setTimeout ? setTimeout : null, localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null, localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null, isMessageLoopRunning = !1, taskTimeoutID = -1, frameInterval = 5, startTime = -1;
    if ("function" === typeof localSetImmediate) var schedulePerformWorkUntilDeadline = function() {
        localSetImmediate(performWorkUntilDeadline);
    };
    else if ("undefined" !== typeof MessageChannel) {
        var channel = new MessageChannel(), port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;
        schedulePerformWorkUntilDeadline = function() {
            port.postMessage(null);
        };
    } else schedulePerformWorkUntilDeadline = function() {
        localSetTimeout(performWorkUntilDeadline, 0);
    };
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(task) {
        task.callback = null;
    };
    exports.unstable_continueExecution = function() {
        isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, requestHostCallback());
    };
    exports.unstable_forceFrameRate = function(fps) {
        0 > fps || 125 < fps ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
        return currentPriorityLevel;
    };
    exports.unstable_getFirstCallbackNode = function() {
        return peek(taskQueue);
    };
    exports.unstable_next = function(eventHandler) {
        switch(currentPriorityLevel){
            case 1:
            case 2:
            case 3:
                var priorityLevel = 3;
                break;
            default:
                priorityLevel = currentPriorityLevel;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_pauseExecution = function() {};
    exports.unstable_requestPaint = function() {};
    exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
        switch(priorityLevel){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                priorityLevel = 3;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
        var currentTime = exports.unstable_now();
        "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
        switch(priorityLevel){
            case 1:
                var timeout = -1;
                break;
            case 2:
                timeout = 250;
                break;
            case 5:
                timeout = 1073741823;
                break;
            case 4:
                timeout = 1e4;
                break;
            default:
                timeout = 5e3;
        }
        timeout = options + timeout;
        priorityLevel = {
            id: taskIdCounter++,
            callback: callback,
            priorityLevel: priorityLevel,
            startTime: options,
            expirationTime: timeout,
            sortIndex: -1
        };
        options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = !0, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, requestHostCallback()));
        return priorityLevel;
    };
    exports.unstable_shouldYield = shouldYieldToHost;
    exports.unstable_wrapCallback = function(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function() {
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = parentPriorityLevel;
            try {
                return callback.apply(this, arguments);
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        };
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/scheduler@0.25.0/node_modules/scheduler/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/scheduler@0.25.0/node_modules/scheduler/cjs/scheduler.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxRuntime; //# sourceMappingURL=react-jsx-runtime.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/its-fine@2.0.0_@types+react@19.2.7_react@19.2.0/node_modules/its-fine/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FiberProvider",
    ()=>m,
    "traverseFiber",
    ()=>i,
    "useContainer",
    ()=>w,
    "useContextBridge",
    ()=>x,
    "useContextMap",
    ()=>h,
    "useFiber",
    ()=>c,
    "useNearestChild",
    ()=>v,
    "useNearestParent",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const f = /* @__PURE__ */ (()=>{
    var e, t;
    return ("TURBOPACK compile-time value", "undefined") != "undefined" && (((e = window.document) == null ? void 0 : e.createElement) || ((t = window.navigator) == null ? void 0 : t.product) === "ReactNative");
})() ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
function i(e, t, r) {
    if (!e) return;
    if (r(e) === !0) return e;
    let n = t ? e.return : e.child;
    for(; n;){
        const u = i(n, t, r);
        if (u) return u;
        n = t ? null : n.sibling;
    }
}
function l(e) {
    try {
        return Object.defineProperties(e, {
            _currentRenderer: {
                get () {
                    return null;
                },
                set () {}
            },
            _currentRenderer2: {
                get () {
                    return null;
                },
                set () {}
            }
        });
    } catch (t) {
        return e;
    }
}
const a = /* @__PURE__ */ l(/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null));
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
    render() {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](a.Provider, {
            value: this._reactInternals
        }, this.props.children);
    }
}
function c() {
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](a);
    if (e === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        for (const n of [
            e,
            e == null ? void 0 : e.alternate
        ]){
            if (!n) continue;
            const u = i(n, !1, (d)=>{
                let s = d.memoizedState;
                for(; s;){
                    if (s.memoizedState === t) return !0;
                    s = s.next;
                }
            });
            if (u) return u;
        }
    }, [
        e,
        t
    ]);
}
function w() {
    const e = c(), t = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>i(e, !0, (r)=>{
            var n;
            return ((n = r.stateNode) == null ? void 0 : n.containerInfo) != null;
        }), [
        e
    ]);
    return t == null ? void 0 : t.stateNode.containerInfo;
}
function v(e) {
    const t = c(), r = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](void 0);
    return f(()=>{
        var n;
        r.current = (n = i(t, !1, (u)=>typeof u.type == "string" && (e === void 0 || u.type === e))) == null ? void 0 : n.stateNode;
    }, [
        t
    ]), r;
}
function y(e) {
    const t = c(), r = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](void 0);
    return f(()=>{
        var n;
        r.current = (n = i(t, !0, (u)=>typeof u.type == "string" && (e === void 0 || u.type === e))) == null ? void 0 : n.stateNode;
    }, [
        t
    ]), r;
}
const p = Symbol.for("react.context"), b = (e)=>e !== null && typeof e == "object" && "$$typeof" in e && e.$$typeof === p;
function h() {
    const e = c(), [t] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>/* @__PURE__ */ new Map());
    t.clear();
    let r = e;
    for(; r;){
        const n = r.type;
        b(n) && n !== a && !t.has(n) && t.set(n, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"](l(n))), r = r.return;
    }
    return t;
}
function x() {
    const e = h();
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>Array.from(e.keys()).reduce((t, r)=>(n)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](t, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](r.Provider, {
                    ...n,
                    value: e.get(r)
                })), (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](m, {
                ...t
            })), [
        e
    ]);
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/react-use-measure@2.1.7_rea_b2f4c483be7d180e36aca7072c23f1b3/node_modules/react-use-measure/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>j
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function g(n, t) {
    let o;
    return (...i)=>{
        window.clearTimeout(o), o = window.setTimeout(()=>n(...i), t);
    };
}
function j({ debounce: n, scroll: t, polyfill: o, offsetSize: i } = {
    debounce: 0,
    scroll: !1,
    offsetSize: !1
}) {
    const a = o || (("TURBOPACK compile-time truthy", 1) ? class {
    } : "TURBOPACK unreachable");
    if (!a) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
    const [c, h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0
    }), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        element: null,
        scrollContainers: null,
        resizeObserver: null,
        lastBounds: c,
        orientationHandler: null
    }), d = n ? typeof n == "number" ? n : n.scroll : null, f = n ? typeof n == "number" ? n : n.resize : null, w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(!1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>(w.current = !0, ()=>void (w.current = !1)));
    const [z, m, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const r = ()=>{
            if (!e.current.element) return;
            const { left: y, top: C, width: H, height: O, bottom: S, right: x, x: B, y: R } = e.current.element.getBoundingClientRect(), l = {
                left: y,
                top: C,
                width: H,
                height: O,
                bottom: S,
                right: x,
                x: B,
                y: R
            };
            e.current.element instanceof HTMLElement && i && (l.height = e.current.element.offsetHeight, l.width = e.current.element.offsetWidth), Object.freeze(l), w.current && !D(e.current.lastBounds, l) && h(e.current.lastBounds = l);
        };
        return [
            r,
            f ? g(r, f) : r,
            d ? g(r, d) : r
        ];
    }, [
        h,
        i,
        d,
        f
    ]);
    function v() {
        e.current.scrollContainers && (e.current.scrollContainers.forEach((r)=>r.removeEventListener("scroll", s, !0)), e.current.scrollContainers = null), e.current.resizeObserver && (e.current.resizeObserver.disconnect(), e.current.resizeObserver = null), e.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", e.current.orientationHandler));
    }
    function b() {
        e.current.element && (e.current.resizeObserver = new a(s), e.current.resizeObserver.observe(e.current.element), t && e.current.scrollContainers && e.current.scrollContainers.forEach((r)=>r.addEventListener("scroll", s, {
                capture: !0,
                passive: !0
            })), e.current.orientationHandler = ()=>{
            s();
        }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", e.current.orientationHandler));
    }
    const L = (r)=>{
        !r || r === e.current.element || (v(), e.current.element = r, e.current.scrollContainers = E(r), b());
    };
    return X(s, !!t), W(m), (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        v(), b();
    }, [
        t,
        s,
        m
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>v, []), [
        L,
        c,
        z
    ];
}
function W(n) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = n;
        return window.addEventListener("resize", t), ()=>void window.removeEventListener("resize", t);
    }, [
        n
    ]);
}
function X(n, t) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (t) {
            const o = n;
            return window.addEventListener("scroll", o, {
                capture: !0,
                passive: !0
            }), ()=>void window.removeEventListener("scroll", o, !0);
        }
    }, [
        n,
        t
    ]);
}
function E(n) {
    const t = [];
    if (!n || n === document.body) return t;
    const { overflow: o, overflowX: i, overflowY: a } = window.getComputedStyle(n);
    return [
        o,
        i,
        a
    ].some((c)=>c === "auto" || c === "scroll") && t.push(n), [
        ...t,
        ...E(n.parentElement)
    ];
}
const k = [
    "x",
    "y",
    "top",
    "bottom",
    "left",
    "right",
    "width",
    "height"
], D = (n, t)=>k.every((o)=>n[o] === t[o]);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/three-stdlib@2.36.1_three@0.181.2/node_modules/three-stdlib/controls/EventDispatcher.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventDispatcher",
    ()=>EventDispatcher
]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
class EventDispatcher {
    constructor(){
        // not defined in @types/three
        __publicField(this, "_listeners");
    }
    /**
   * Adds a listener to an event type.
   * @param type The type of event to listen to.
   * @param listener The function that gets called when the event is fired.
   */ addEventListener(type, listener) {
        if (this._listeners === void 0) this._listeners = {};
        const listeners = this._listeners;
        if (listeners[type] === void 0) {
            listeners[type] = [];
        }
        if (listeners[type].indexOf(listener) === -1) {
            listeners[type].push(listener);
        }
    }
    /**
      * Checks if listener is added to an event type.
      * @param type The type of event to listen to.
      * @param listener The function that gets called when the event is fired.
      */ hasEventListener(type, listener) {
        if (this._listeners === void 0) return false;
        const listeners = this._listeners;
        return listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1;
    }
    /**
      * Removes a listener from an event type.
      * @param type The type of the listener that gets removed.
      * @param listener The listener function that gets removed.
      */ removeEventListener(type, listener) {
        if (this._listeners === void 0) return;
        const listeners = this._listeners;
        const listenerArray = listeners[type];
        if (listenerArray !== void 0) {
            const index = listenerArray.indexOf(listener);
            if (index !== -1) {
                listenerArray.splice(index, 1);
            }
        }
    }
    /**
      * Fire an event type.
      * @param event The event that gets fired.
      */ dispatchEvent(event) {
        if (this._listeners === void 0) return;
        const listeners = this._listeners;
        const listenerArray = listeners[event.type];
        if (listenerArray !== void 0) {
            event.target = this;
            const array = listenerArray.slice(0);
            for(let i = 0, l = array.length; i < l; i++){
                array[i].call(this, event);
            }
            event.target = null;
        }
    }
}
;
 //# sourceMappingURL=EventDispatcher.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/three-stdlib@2.36.1_three@0.181.2/node_modules/three-stdlib/controls/OrbitControls.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapControls",
    ()=>MapControls,
    "OrbitControls",
    ()=>OrbitControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/three@0.181.2/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$EventDispatcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/three-stdlib@2.36.1_three@0.181.2/node_modules/three-stdlib/controls/EventDispatcher.js [app-ssr] (ecmascript)");
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
;
;
const _ray = /* @__PURE__ */ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ray"]();
const _plane = /* @__PURE__ */ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Plane"]();
const TILT_LIMIT = Math.cos(70 * (Math.PI / 180));
const moduloWrapAround = (offset, capacity)=>(offset % capacity + capacity) % capacity;
class OrbitControls extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$EventDispatcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventDispatcher"] {
    constructor(object, domElement){
        super();
        __publicField(this, "object");
        __publicField(this, "domElement");
        // Set to false to disable this control
        __publicField(this, "enabled", true);
        // "target" sets the location of focus, where the object orbits around
        __publicField(this, "target", new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
        // How far you can dolly in and out ( PerspectiveCamera only )
        __publicField(this, "minDistance", 0);
        __publicField(this, "maxDistance", Infinity);
        // How far you can zoom in and out ( OrthographicCamera only )
        __publicField(this, "minZoom", 0);
        __publicField(this, "maxZoom", Infinity);
        // How far you can orbit vertically, upper and lower limits.
        // Range is 0 to Math.PI radians.
        __publicField(this, "minPolarAngle", 0);
        // radians
        __publicField(this, "maxPolarAngle", Math.PI);
        // radians
        // How far you can orbit horizontally, upper and lower limits.
        // If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )
        __publicField(this, "minAzimuthAngle", -Infinity);
        // radians
        __publicField(this, "maxAzimuthAngle", Infinity);
        // radians
        // Set to true to enable damping (inertia)
        // If damping is enabled, you must call controls.update() in your animation loop
        __publicField(this, "enableDamping", false);
        __publicField(this, "dampingFactor", 0.05);
        // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
        // Set to false to disable zooming
        __publicField(this, "enableZoom", true);
        __publicField(this, "zoomSpeed", 1);
        // Set to false to disable rotating
        __publicField(this, "enableRotate", true);
        __publicField(this, "rotateSpeed", 1);
        // Set to false to disable panning
        __publicField(this, "enablePan", true);
        __publicField(this, "panSpeed", 1);
        __publicField(this, "screenSpacePanning", true);
        // if false, pan orthogonal to world-space direction camera.up
        __publicField(this, "keyPanSpeed", 7);
        // pixels moved per arrow key push
        __publicField(this, "zoomToCursor", false);
        // Set to true to automatically rotate around the target
        // If auto-rotate is enabled, you must call controls.update() in your animation loop
        __publicField(this, "autoRotate", false);
        __publicField(this, "autoRotateSpeed", 2);
        // 30 seconds per orbit when fps is 60
        __publicField(this, "reverseOrbit", false);
        // true if you want to reverse the orbit to mouse drag from left to right = orbits left
        __publicField(this, "reverseHorizontalOrbit", false);
        // true if you want to reverse the horizontal orbit direction
        __publicField(this, "reverseVerticalOrbit", false);
        // true if you want to reverse the vertical orbit direction
        // The four arrow keys
        __publicField(this, "keys", {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
        });
        // Mouse buttons
        __publicField(this, "mouseButtons", {
            LEFT: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOUSE"].ROTATE,
            MIDDLE: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOUSE"].DOLLY,
            RIGHT: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOUSE"].PAN
        });
        // Touch fingers
        __publicField(this, "touches", {
            ONE: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOUCH"].ROTATE,
            TWO: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOUCH"].DOLLY_PAN
        });
        __publicField(this, "target0");
        __publicField(this, "position0");
        __publicField(this, "zoom0");
        // the target DOM element for key events
        __publicField(this, "_domElementKeyEvents", null);
        __publicField(this, "getPolarAngle");
        __publicField(this, "getAzimuthalAngle");
        __publicField(this, "setPolarAngle");
        __publicField(this, "setAzimuthalAngle");
        __publicField(this, "getDistance");
        // Not used in most scenarios, however they can be useful for specific use cases
        __publicField(this, "getZoomScale");
        __publicField(this, "listenToKeyEvents");
        __publicField(this, "stopListenToKeyEvents");
        __publicField(this, "saveState");
        __publicField(this, "reset");
        __publicField(this, "update");
        __publicField(this, "connect");
        __publicField(this, "dispose");
        // Dolly in programmatically
        __publicField(this, "dollyIn");
        // Dolly out programmatically
        __publicField(this, "dollyOut");
        // Get the current scale
        __publicField(this, "getScale");
        // Set the current scale (these are not used in most scenarios, however they can be useful for specific use cases)
        __publicField(this, "setScale");
        this.object = object;
        this.domElement = domElement;
        this.target0 = this.target.clone();
        this.position0 = this.object.position.clone();
        this.zoom0 = this.object.zoom;
        this.getPolarAngle = ()=>spherical.phi;
        this.getAzimuthalAngle = ()=>spherical.theta;
        this.setPolarAngle = (value)=>{
            let phi = moduloWrapAround(value, 2 * Math.PI);
            let currentPhi = spherical.phi;
            if (currentPhi < 0) currentPhi += 2 * Math.PI;
            if (phi < 0) phi += 2 * Math.PI;
            let phiDist = Math.abs(phi - currentPhi);
            if (2 * Math.PI - phiDist < phiDist) {
                if (phi < currentPhi) {
                    phi += 2 * Math.PI;
                } else {
                    currentPhi += 2 * Math.PI;
                }
            }
            sphericalDelta.phi = phi - currentPhi;
            scope.update();
        };
        this.setAzimuthalAngle = (value)=>{
            let theta = moduloWrapAround(value, 2 * Math.PI);
            let currentTheta = spherical.theta;
            if (currentTheta < 0) currentTheta += 2 * Math.PI;
            if (theta < 0) theta += 2 * Math.PI;
            let thetaDist = Math.abs(theta - currentTheta);
            if (2 * Math.PI - thetaDist < thetaDist) {
                if (theta < currentTheta) {
                    theta += 2 * Math.PI;
                } else {
                    currentTheta += 2 * Math.PI;
                }
            }
            sphericalDelta.theta = theta - currentTheta;
            scope.update();
        };
        this.getDistance = ()=>scope.object.position.distanceTo(scope.target);
        this.listenToKeyEvents = (domElement2)=>{
            domElement2.addEventListener("keydown", onKeyDown);
            this._domElementKeyEvents = domElement2;
        };
        this.stopListenToKeyEvents = ()=>{
            this._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
            this._domElementKeyEvents = null;
        };
        this.saveState = ()=>{
            scope.target0.copy(scope.target);
            scope.position0.copy(scope.object.position);
            scope.zoom0 = scope.object.zoom;
        };
        this.reset = ()=>{
            scope.target.copy(scope.target0);
            scope.object.position.copy(scope.position0);
            scope.object.zoom = scope.zoom0;
            scope.object.updateProjectionMatrix();
            scope.dispatchEvent(changeEvent);
            scope.update();
            state = STATE.NONE;
        };
        this.update = (()=>{
            const offset = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
            const up = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0);
            const quat = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]().setFromUnitVectors(object.up, up);
            const quatInverse = quat.clone().invert();
            const lastPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
            const lastQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
            const twoPI = 2 * Math.PI;
            return function update() {
                const position = scope.object.position;
                quat.setFromUnitVectors(object.up, up);
                quatInverse.copy(quat).invert();
                offset.copy(position).sub(scope.target);
                offset.applyQuaternion(quat);
                spherical.setFromVector3(offset);
                if (scope.autoRotate && state === STATE.NONE) {
                    rotateLeft(getAutoRotationAngle());
                }
                if (scope.enableDamping) {
                    spherical.theta += sphericalDelta.theta * scope.dampingFactor;
                    spherical.phi += sphericalDelta.phi * scope.dampingFactor;
                } else {
                    spherical.theta += sphericalDelta.theta;
                    spherical.phi += sphericalDelta.phi;
                }
                let min = scope.minAzimuthAngle;
                let max = scope.maxAzimuthAngle;
                if (isFinite(min) && isFinite(max)) {
                    if (min < -Math.PI) min += twoPI;
                    else if (min > Math.PI) min -= twoPI;
                    if (max < -Math.PI) max += twoPI;
                    else if (max > Math.PI) max -= twoPI;
                    if (min <= max) {
                        spherical.theta = Math.max(min, Math.min(max, spherical.theta));
                    } else {
                        spherical.theta = spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta);
                    }
                }
                spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
                spherical.makeSafe();
                if (scope.enableDamping === true) {
                    scope.target.addScaledVector(panOffset, scope.dampingFactor);
                } else {
                    scope.target.add(panOffset);
                }
                if (scope.zoomToCursor && performCursorZoom || scope.object.isOrthographicCamera) {
                    spherical.radius = clampDistance(spherical.radius);
                } else {
                    spherical.radius = clampDistance(spherical.radius * scale);
                }
                offset.setFromSpherical(spherical);
                offset.applyQuaternion(quatInverse);
                position.copy(scope.target).add(offset);
                if (!scope.object.matrixAutoUpdate) scope.object.updateMatrix();
                scope.object.lookAt(scope.target);
                if (scope.enableDamping === true) {
                    sphericalDelta.theta *= 1 - scope.dampingFactor;
                    sphericalDelta.phi *= 1 - scope.dampingFactor;
                    panOffset.multiplyScalar(1 - scope.dampingFactor);
                } else {
                    sphericalDelta.set(0, 0, 0);
                    panOffset.set(0, 0, 0);
                }
                let zoomChanged = false;
                if (scope.zoomToCursor && performCursorZoom) {
                    let newRadius = null;
                    if (scope.object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"] && scope.object.isPerspectiveCamera) {
                        const prevRadius = offset.length();
                        newRadius = clampDistance(prevRadius * scale);
                        const radiusDelta = prevRadius - newRadius;
                        scope.object.position.addScaledVector(dollyDirection, radiusDelta);
                        scope.object.updateMatrixWorld();
                    } else if (scope.object.isOrthographicCamera) {
                        const mouseBefore = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](mouse.x, mouse.y, 0);
                        mouseBefore.unproject(scope.object);
                        scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
                        scope.object.updateProjectionMatrix();
                        zoomChanged = true;
                        const mouseAfter = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](mouse.x, mouse.y, 0);
                        mouseAfter.unproject(scope.object);
                        scope.object.position.sub(mouseAfter).add(mouseBefore);
                        scope.object.updateMatrixWorld();
                        newRadius = offset.length();
                    } else {
                        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.");
                        scope.zoomToCursor = false;
                    }
                    if (newRadius !== null) {
                        if (scope.screenSpacePanning) {
                            scope.target.set(0, 0, -1).transformDirection(scope.object.matrix).multiplyScalar(newRadius).add(scope.object.position);
                        } else {
                            _ray.origin.copy(scope.object.position);
                            _ray.direction.set(0, 0, -1).transformDirection(scope.object.matrix);
                            if (Math.abs(scope.object.up.dot(_ray.direction)) < TILT_LIMIT) {
                                object.lookAt(scope.target);
                            } else {
                                _plane.setFromNormalAndCoplanarPoint(scope.object.up, scope.target);
                                _ray.intersectPlane(_plane, scope.target);
                            }
                        }
                    }
                } else if (scope.object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrthographicCamera"] && scope.object.isOrthographicCamera) {
                    zoomChanged = scale !== 1;
                    if (zoomChanged) {
                        scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
                        scope.object.updateProjectionMatrix();
                    }
                }
                scale = 1;
                performCursorZoom = false;
                if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
                    scope.dispatchEvent(changeEvent);
                    lastPosition.copy(scope.object.position);
                    lastQuaternion.copy(scope.object.quaternion);
                    zoomChanged = false;
                    return true;
                }
                return false;
            };
        })();
        this.connect = (domElement2)=>{
            scope.domElement = domElement2;
            scope.domElement.style.touchAction = "none";
            scope.domElement.addEventListener("contextmenu", onContextMenu);
            scope.domElement.addEventListener("pointerdown", onPointerDown);
            scope.domElement.addEventListener("pointercancel", onPointerUp);
            scope.domElement.addEventListener("wheel", onMouseWheel);
        };
        this.dispose = ()=>{
            var _a, _b, _c, _d, _e, _f;
            if (scope.domElement) {
                scope.domElement.style.touchAction = "auto";
            }
            (_a = scope.domElement) == null ? void 0 : _a.removeEventListener("contextmenu", onContextMenu);
            (_b = scope.domElement) == null ? void 0 : _b.removeEventListener("pointerdown", onPointerDown);
            (_c = scope.domElement) == null ? void 0 : _c.removeEventListener("pointercancel", onPointerUp);
            (_d = scope.domElement) == null ? void 0 : _d.removeEventListener("wheel", onMouseWheel);
            (_e = scope.domElement) == null ? void 0 : _e.ownerDocument.removeEventListener("pointermove", onPointerMove);
            (_f = scope.domElement) == null ? void 0 : _f.ownerDocument.removeEventListener("pointerup", onPointerUp);
            if (scope._domElementKeyEvents !== null) {
                scope._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
            }
        };
        const scope = this;
        const changeEvent = {
            type: "change"
        };
        const startEvent = {
            type: "start"
        };
        const endEvent = {
            type: "end"
        };
        const STATE = {
            NONE: -1,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2,
            TOUCH_ROTATE: 3,
            TOUCH_PAN: 4,
            TOUCH_DOLLY_PAN: 5,
            TOUCH_DOLLY_ROTATE: 6
        };
        let state = STATE.NONE;
        const EPS = 1e-6;
        const spherical = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spherical"]();
        const sphericalDelta = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spherical"]();
        let scale = 1;
        const panOffset = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        const rotateStart = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        const rotateEnd = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        const rotateDelta = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        const panStart = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        const panEnd = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        const panDelta = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        const dollyStart = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        const dollyEnd = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        const dollyDelta = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        const dollyDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        const mouse = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        let performCursorZoom = false;
        const pointers = [];
        const pointerPositions = {};
        function getAutoRotationAngle() {
            return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
        }
        function getZoomScale() {
            return Math.pow(0.95, scope.zoomSpeed);
        }
        function rotateLeft(angle) {
            if (scope.reverseOrbit || scope.reverseHorizontalOrbit) {
                sphericalDelta.theta += angle;
            } else {
                sphericalDelta.theta -= angle;
            }
        }
        function rotateUp(angle) {
            if (scope.reverseOrbit || scope.reverseVerticalOrbit) {
                sphericalDelta.phi += angle;
            } else {
                sphericalDelta.phi -= angle;
            }
        }
        const panLeft = (()=>{
            const v = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
            return function panLeft2(distance, objectMatrix) {
                v.setFromMatrixColumn(objectMatrix, 0);
                v.multiplyScalar(-distance);
                panOffset.add(v);
            };
        })();
        const panUp = (()=>{
            const v = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
            return function panUp2(distance, objectMatrix) {
                if (scope.screenSpacePanning === true) {
                    v.setFromMatrixColumn(objectMatrix, 1);
                } else {
                    v.setFromMatrixColumn(objectMatrix, 0);
                    v.crossVectors(scope.object.up, v);
                }
                v.multiplyScalar(distance);
                panOffset.add(v);
            };
        })();
        const pan = (()=>{
            const offset = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
            return function pan2(deltaX, deltaY) {
                const element = scope.domElement;
                if (element && scope.object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"] && scope.object.isPerspectiveCamera) {
                    const position = scope.object.position;
                    offset.copy(position).sub(scope.target);
                    let targetDistance = offset.length();
                    targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180);
                    panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
                    panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
                } else if (element && scope.object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrthographicCamera"] && scope.object.isOrthographicCamera) {
                    panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
                    panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
                } else {
                    console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");
                    scope.enablePan = false;
                }
            };
        })();
        function setScale(newScale) {
            if (scope.object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"] && scope.object.isPerspectiveCamera || scope.object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrthographicCamera"] && scope.object.isOrthographicCamera) {
                scale = newScale;
            } else {
                console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
                scope.enableZoom = false;
            }
        }
        function dollyOut(dollyScale) {
            setScale(scale / dollyScale);
        }
        function dollyIn(dollyScale) {
            setScale(scale * dollyScale);
        }
        function updateMouseParameters(event) {
            if (!scope.zoomToCursor || !scope.domElement) {
                return;
            }
            performCursorZoom = true;
            const rect = scope.domElement.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const w = rect.width;
            const h = rect.height;
            mouse.x = x / w * 2 - 1;
            mouse.y = -(y / h) * 2 + 1;
            dollyDirection.set(mouse.x, mouse.y, 1).unproject(scope.object).sub(scope.object.position).normalize();
        }
        function clampDistance(dist) {
            return Math.max(scope.minDistance, Math.min(scope.maxDistance, dist));
        }
        function handleMouseDownRotate(event) {
            rotateStart.set(event.clientX, event.clientY);
        }
        function handleMouseDownDolly(event) {
            updateMouseParameters(event);
            dollyStart.set(event.clientX, event.clientY);
        }
        function handleMouseDownPan(event) {
            panStart.set(event.clientX, event.clientY);
        }
        function handleMouseMoveRotate(event) {
            rotateEnd.set(event.clientX, event.clientY);
            rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
            const element = scope.domElement;
            if (element) {
                rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
                rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
            }
            rotateStart.copy(rotateEnd);
            scope.update();
        }
        function handleMouseMoveDolly(event) {
            dollyEnd.set(event.clientX, event.clientY);
            dollyDelta.subVectors(dollyEnd, dollyStart);
            if (dollyDelta.y > 0) {
                dollyOut(getZoomScale());
            } else if (dollyDelta.y < 0) {
                dollyIn(getZoomScale());
            }
            dollyStart.copy(dollyEnd);
            scope.update();
        }
        function handleMouseMovePan(event) {
            panEnd.set(event.clientX, event.clientY);
            panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
            pan(panDelta.x, panDelta.y);
            panStart.copy(panEnd);
            scope.update();
        }
        function handleMouseWheel(event) {
            updateMouseParameters(event);
            if (event.deltaY < 0) {
                dollyIn(getZoomScale());
            } else if (event.deltaY > 0) {
                dollyOut(getZoomScale());
            }
            scope.update();
        }
        function handleKeyDown(event) {
            let needsUpdate = false;
            switch(event.code){
                case scope.keys.UP:
                    pan(0, scope.keyPanSpeed);
                    needsUpdate = true;
                    break;
                case scope.keys.BOTTOM:
                    pan(0, -scope.keyPanSpeed);
                    needsUpdate = true;
                    break;
                case scope.keys.LEFT:
                    pan(scope.keyPanSpeed, 0);
                    needsUpdate = true;
                    break;
                case scope.keys.RIGHT:
                    pan(-scope.keyPanSpeed, 0);
                    needsUpdate = true;
                    break;
            }
            if (needsUpdate) {
                event.preventDefault();
                scope.update();
            }
        }
        function handleTouchStartRotate() {
            if (pointers.length == 1) {
                rotateStart.set(pointers[0].pageX, pointers[0].pageY);
            } else {
                const x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
                const y = 0.5 * (pointers[0].pageY + pointers[1].pageY);
                rotateStart.set(x, y);
            }
        }
        function handleTouchStartPan() {
            if (pointers.length == 1) {
                panStart.set(pointers[0].pageX, pointers[0].pageY);
            } else {
                const x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
                const y = 0.5 * (pointers[0].pageY + pointers[1].pageY);
                panStart.set(x, y);
            }
        }
        function handleTouchStartDolly() {
            const dx = pointers[0].pageX - pointers[1].pageX;
            const dy = pointers[0].pageY - pointers[1].pageY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            dollyStart.set(0, distance);
        }
        function handleTouchStartDollyPan() {
            if (scope.enableZoom) handleTouchStartDolly();
            if (scope.enablePan) handleTouchStartPan();
        }
        function handleTouchStartDollyRotate() {
            if (scope.enableZoom) handleTouchStartDolly();
            if (scope.enableRotate) handleTouchStartRotate();
        }
        function handleTouchMoveRotate(event) {
            if (pointers.length == 1) {
                rotateEnd.set(event.pageX, event.pageY);
            } else {
                const position = getSecondPointerPosition(event);
                const x = 0.5 * (event.pageX + position.x);
                const y = 0.5 * (event.pageY + position.y);
                rotateEnd.set(x, y);
            }
            rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
            const element = scope.domElement;
            if (element) {
                rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
                rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
            }
            rotateStart.copy(rotateEnd);
        }
        function handleTouchMovePan(event) {
            if (pointers.length == 1) {
                panEnd.set(event.pageX, event.pageY);
            } else {
                const position = getSecondPointerPosition(event);
                const x = 0.5 * (event.pageX + position.x);
                const y = 0.5 * (event.pageY + position.y);
                panEnd.set(x, y);
            }
            panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
            pan(panDelta.x, panDelta.y);
            panStart.copy(panEnd);
        }
        function handleTouchMoveDolly(event) {
            const position = getSecondPointerPosition(event);
            const dx = event.pageX - position.x;
            const dy = event.pageY - position.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            dollyEnd.set(0, distance);
            dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
            dollyOut(dollyDelta.y);
            dollyStart.copy(dollyEnd);
        }
        function handleTouchMoveDollyPan(event) {
            if (scope.enableZoom) handleTouchMoveDolly(event);
            if (scope.enablePan) handleTouchMovePan(event);
        }
        function handleTouchMoveDollyRotate(event) {
            if (scope.enableZoom) handleTouchMoveDolly(event);
            if (scope.enableRotate) handleTouchMoveRotate(event);
        }
        function onPointerDown(event) {
            var _a, _b;
            if (scope.enabled === false) return;
            if (pointers.length === 0) {
                (_a = scope.domElement) == null ? void 0 : _a.ownerDocument.addEventListener("pointermove", onPointerMove);
                (_b = scope.domElement) == null ? void 0 : _b.ownerDocument.addEventListener("pointerup", onPointerUp);
            }
            addPointer(event);
            if (event.pointerType === "touch") {
                onTouchStart(event);
            } else {
                onMouseDown(event);
            }
        }
        function onPointerMove(event) {
            if (scope.enabled === false) return;
            if (event.pointerType === "touch") {
                onTouchMove(event);
            } else {
                onMouseMove(event);
            }
        }
        function onPointerUp(event) {
            var _a, _b, _c;
            removePointer(event);
            if (pointers.length === 0) {
                (_a = scope.domElement) == null ? void 0 : _a.releasePointerCapture(event.pointerId);
                (_b = scope.domElement) == null ? void 0 : _b.ownerDocument.removeEventListener("pointermove", onPointerMove);
                (_c = scope.domElement) == null ? void 0 : _c.ownerDocument.removeEventListener("pointerup", onPointerUp);
            }
            scope.dispatchEvent(endEvent);
            state = STATE.NONE;
        }
        function onMouseDown(event) {
            let mouseAction;
            switch(event.button){
                case 0:
                    mouseAction = scope.mouseButtons.LEFT;
                    break;
                case 1:
                    mouseAction = scope.mouseButtons.MIDDLE;
                    break;
                case 2:
                    mouseAction = scope.mouseButtons.RIGHT;
                    break;
                default:
                    mouseAction = -1;
            }
            switch(mouseAction){
                case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOUSE"].DOLLY:
                    if (scope.enableZoom === false) return;
                    handleMouseDownDolly(event);
                    state = STATE.DOLLY;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOUSE"].ROTATE:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) {
                        if (scope.enablePan === false) return;
                        handleMouseDownPan(event);
                        state = STATE.PAN;
                    } else {
                        if (scope.enableRotate === false) return;
                        handleMouseDownRotate(event);
                        state = STATE.ROTATE;
                    }
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOUSE"].PAN:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) {
                        if (scope.enableRotate === false) return;
                        handleMouseDownRotate(event);
                        state = STATE.ROTATE;
                    } else {
                        if (scope.enablePan === false) return;
                        handleMouseDownPan(event);
                        state = STATE.PAN;
                    }
                    break;
                default:
                    state = STATE.NONE;
            }
            if (state !== STATE.NONE) {
                scope.dispatchEvent(startEvent);
            }
        }
        function onMouseMove(event) {
            if (scope.enabled === false) return;
            switch(state){
                case STATE.ROTATE:
                    if (scope.enableRotate === false) return;
                    handleMouseMoveRotate(event);
                    break;
                case STATE.DOLLY:
                    if (scope.enableZoom === false) return;
                    handleMouseMoveDolly(event);
                    break;
                case STATE.PAN:
                    if (scope.enablePan === false) return;
                    handleMouseMovePan(event);
                    break;
            }
        }
        function onMouseWheel(event) {
            if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) {
                return;
            }
            event.preventDefault();
            scope.dispatchEvent(startEvent);
            handleMouseWheel(event);
            scope.dispatchEvent(endEvent);
        }
        function onKeyDown(event) {
            if (scope.enabled === false || scope.enablePan === false) return;
            handleKeyDown(event);
        }
        function onTouchStart(event) {
            trackPointer(event);
            switch(pointers.length){
                case 1:
                    switch(scope.touches.ONE){
                        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOUCH"].ROTATE:
                            if (scope.enableRotate === false) return;
                            handleTouchStartRotate();
                            state = STATE.TOUCH_ROTATE;
                            break;
                        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOUCH"].PAN:
                            if (scope.enablePan === false) return;
                            handleTouchStartPan();
                            state = STATE.TOUCH_PAN;
                            break;
                        default:
                            state = STATE.NONE;
                    }
                    break;
                case 2:
                    switch(scope.touches.TWO){
                        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOUCH"].DOLLY_PAN:
                            if (scope.enableZoom === false && scope.enablePan === false) return;
                            handleTouchStartDollyPan();
                            state = STATE.TOUCH_DOLLY_PAN;
                            break;
                        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOUCH"].DOLLY_ROTATE:
                            if (scope.enableZoom === false && scope.enableRotate === false) return;
                            handleTouchStartDollyRotate();
                            state = STATE.TOUCH_DOLLY_ROTATE;
                            break;
                        default:
                            state = STATE.NONE;
                    }
                    break;
                default:
                    state = STATE.NONE;
            }
            if (state !== STATE.NONE) {
                scope.dispatchEvent(startEvent);
            }
        }
        function onTouchMove(event) {
            trackPointer(event);
            switch(state){
                case STATE.TOUCH_ROTATE:
                    if (scope.enableRotate === false) return;
                    handleTouchMoveRotate(event);
                    scope.update();
                    break;
                case STATE.TOUCH_PAN:
                    if (scope.enablePan === false) return;
                    handleTouchMovePan(event);
                    scope.update();
                    break;
                case STATE.TOUCH_DOLLY_PAN:
                    if (scope.enableZoom === false && scope.enablePan === false) return;
                    handleTouchMoveDollyPan(event);
                    scope.update();
                    break;
                case STATE.TOUCH_DOLLY_ROTATE:
                    if (scope.enableZoom === false && scope.enableRotate === false) return;
                    handleTouchMoveDollyRotate(event);
                    scope.update();
                    break;
                default:
                    state = STATE.NONE;
            }
        }
        function onContextMenu(event) {
            if (scope.enabled === false) return;
            event.preventDefault();
        }
        function addPointer(event) {
            pointers.push(event);
        }
        function removePointer(event) {
            delete pointerPositions[event.pointerId];
            for(let i = 0; i < pointers.length; i++){
                if (pointers[i].pointerId == event.pointerId) {
                    pointers.splice(i, 1);
                    return;
                }
            }
        }
        function trackPointer(event) {
            let position = pointerPositions[event.pointerId];
            if (position === void 0) {
                position = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
                pointerPositions[event.pointerId] = position;
            }
            position.set(event.pageX, event.pageY);
        }
        function getSecondPointerPosition(event) {
            const pointer = event.pointerId === pointers[0].pointerId ? pointers[1] : pointers[0];
            return pointerPositions[pointer.pointerId];
        }
        this.dollyIn = (dollyScale = getZoomScale())=>{
            dollyIn(dollyScale);
            scope.update();
        };
        this.dollyOut = (dollyScale = getZoomScale())=>{
            dollyOut(dollyScale);
            scope.update();
        };
        this.getScale = ()=>{
            return scale;
        };
        this.setScale = (newScale)=>{
            setScale(newScale);
            scope.update();
        };
        this.getZoomScale = ()=>{
            return getZoomScale();
        };
        if (domElement !== void 0) this.connect(domElement);
        this.update();
    }
}
class MapControls extends OrbitControls {
    constructor(object, domElement){
        super(object, domElement);
        this.screenSpacePanning = false;
        this.mouseButtons.LEFT = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOUSE"].PAN;
        this.mouseButtons.RIGHT = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOUSE"].ROTATE;
        this.touches.ONE = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOUCH"].PAN;
        this.touches.TWO = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOUCH"].DOLLY_ROTATE;
    }
}
;
 //# sourceMappingURL=OrbitControls.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/three-stdlib@2.36.1_three@0.181.2/node_modules/three-stdlib/_polyfill/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/three@0.181.2/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
;
const version = /* @__PURE__ */ (()=>parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REVISION"].replace(/\D+/g, "")))();
;
 //# sourceMappingURL=constants.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/three-stdlib@2.36.1_three@0.181.2/node_modules/three-stdlib/objects/Sky.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sky",
    ()=>Sky
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/three@0.181.2/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$_polyfill$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/three-stdlib@2.36.1_three@0.181.2/node_modules/three-stdlib/_polyfill/constants.js [app-ssr] (ecmascript)");
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
;
;
const Sky = /* @__PURE__ */ (()=>{
    const SkyShader = {
        uniforms: {
            turbidity: {
                value: 2
            },
            rayleigh: {
                value: 1
            },
            mieCoefficient: {
                value: 5e-3
            },
            mieDirectionalG: {
                value: 0.8
            },
            sunPosition: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]()
            },
            up: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0)
            }
        },
        vertexShader: /* glsl */ `
      uniform vec3 sunPosition;
      uniform float rayleigh;
      uniform float turbidity;
      uniform float mieCoefficient;
      uniform vec3 up;

      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      // constants for atmospheric scattering
      const float e = 2.71828182845904523536028747135266249775724709369995957;
      const float pi = 3.141592653589793238462643383279502884197169;

      // wavelength of used primaries, according to preetham
      const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
      // this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
      // (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
      const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

      // mie stuff
      // K coefficient for the primaries
      const float v = 4.0;
      const vec3 K = vec3( 0.686, 0.678, 0.666 );
      // MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
      const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

      // earth shadow hack
      // cutoffAngle = pi / 1.95;
      const float cutoffAngle = 1.6110731556870734;
      const float steepness = 1.5;
      const float EE = 1000.0;

      float sunIntensity( float zenithAngleCos ) {
        zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
        return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
      }

      vec3 totalMie( float T ) {
        float c = ( 0.2 * T ) * 10E-18;
        return 0.434 * c * MieConst;
      }

      void main() {

        vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
        vWorldPosition = worldPosition.xyz;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        gl_Position.z = gl_Position.w; // set z to camera.far

        vSunDirection = normalize( sunPosition );

        vSunE = sunIntensity( dot( vSunDirection, up ) );

        vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

        float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

      // extinction (absorbtion + out scattering)
      // rayleigh coefficients
        vBetaR = totalRayleigh * rayleighCoefficient;

      // mie coefficients
        vBetaM = totalMie( turbidity ) * mieCoefficient;

      }
    `,
        fragmentShader: /* glsl */ `
      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      uniform float mieDirectionalG;
      uniform vec3 up;

      const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

      // constants for atmospheric scattering
      const float pi = 3.141592653589793238462643383279502884197169;

      const float n = 1.0003; // refractive index of air
      const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

      // optical length at zenith for molecules
      const float rayleighZenithLength = 8.4E3;
      const float mieZenithLength = 1.25E3;
      // 66 arc seconds -> degrees, and the cosine of that
      const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

      // 3.0 / ( 16.0 * pi )
      const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
      // 1.0 / ( 4.0 * pi )
      const float ONE_OVER_FOURPI = 0.07957747154594767;

      float rayleighPhase( float cosTheta ) {
        return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
      }

      float hgPhase( float cosTheta, float g ) {
        float g2 = pow( g, 2.0 );
        float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
        return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
      }

      void main() {

        vec3 direction = normalize( vWorldPosition - cameraPos );

      // optical length
      // cutoff angle at 90 to avoid singularity in next formula.
        float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
        float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
        float sR = rayleighZenithLength * inverse;
        float sM = mieZenithLength * inverse;

      // combined extinction factor
        vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

      // in scattering
        float cosTheta = dot( direction, vSunDirection );

        float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
        vec3 betaRTheta = vBetaR * rPhase;

        float mPhase = hgPhase( cosTheta, mieDirectionalG );
        vec3 betaMTheta = vBetaM * mPhase;

        vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
        Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

      // nightsky
        float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
        float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
        vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
        vec3 L0 = vec3( 0.1 ) * Fex;

      // composition + solar disc
        float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
        L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

        vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

        vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

        gl_FragColor = vec4( retColor, 1.0 );

      #include <tonemapping_fragment>
      #include <${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$_polyfill$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"] >= 154 ? "colorspace_fragment" : "encodings_fragment"}>

      }
    `
    };
    const material = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
        name: "SkyShader",
        fragmentShader: SkyShader.fragmentShader,
        vertexShader: SkyShader.vertexShader,
        uniforms: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UniformsUtils"].clone(SkyShader.uniforms),
        side: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackSide"],
        depthWrite: false
    });
    class Sky2 extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"] {
        constructor(){
            super(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](1, 1, 1), material);
        }
    }
    __publicField(Sky2, "SkyShader", SkyShader);
    __publicField(Sky2, "material", material);
    return Sky2;
})();
;
 //# sourceMappingURL=Sky.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@react-three+drei@10.7.7_@r_01b746e61a1e5f9ceefed04ad5e9b08a/node_modules/@react-three/drei/core/OrbitControls.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrbitControls",
    ()=>OrbitControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_b2hejhq4o23naejl3vvmynoznu$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@react-three+fiber@9.4.0_b2hejhq4o23naejl3vvmynoznu/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_b2hejhq4o23naejl3vvmynoznu$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@react-three+fiber@9.4.0_b2hejhq4o23naejl3vvmynoznu/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/three-stdlib@2.36.1_three@0.181.2/node_modules/three-stdlib/controls/OrbitControls.js [app-ssr] (ecmascript)");
;
;
;
;
const OrbitControls = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ makeDefault, camera, regress, domElement, enableDamping = true, keyEvents = false, onChange, onStart, onEnd, ...restProps }, ref)=>{
    const invalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_b2hejhq4o23naejl3vvmynoznu$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((state)=>state.invalidate);
    const defaultCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_b2hejhq4o23naejl3vvmynoznu$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((state)=>state.camera);
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_b2hejhq4o23naejl3vvmynoznu$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((state)=>state.gl);
    const events = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_b2hejhq4o23naejl3vvmynoznu$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((state)=>state.events);
    const setEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_b2hejhq4o23naejl3vvmynoznu$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((state)=>state.setEvents);
    const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_b2hejhq4o23naejl3vvmynoznu$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((state)=>state.set);
    const get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_b2hejhq4o23naejl3vvmynoznu$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((state)=>state.get);
    const performance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_b2hejhq4o23naejl3vvmynoznu$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((state)=>state.performance);
    const explCamera = camera || defaultCamera;
    const explDomElement = domElement || events.connected || gl.domElement;
    const controls = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitControls"](explCamera), [
        explCamera
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_b2hejhq4o23naejl3vvmynoznu$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(()=>{
        if (controls.enabled) controls.update();
    }, -1);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (keyEvents) {
            controls.connect(keyEvents === true ? explDomElement : keyEvents);
        }
        controls.connect(explDomElement);
        return ()=>void controls.dispose();
    }, [
        keyEvents,
        explDomElement,
        regress,
        controls,
        invalidate
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const callback = (e)=>{
            invalidate();
            if (regress) performance.regress();
            if (onChange) onChange(e);
        };
        const onStartCb = (e)=>{
            if (onStart) onStart(e);
        };
        const onEndCb = (e)=>{
            if (onEnd) onEnd(e);
        };
        controls.addEventListener('change', callback);
        controls.addEventListener('start', onStartCb);
        controls.addEventListener('end', onEndCb);
        return ()=>{
            controls.removeEventListener('start', onStartCb);
            controls.removeEventListener('end', onEndCb);
            controls.removeEventListener('change', callback);
        };
    }, [
        onChange,
        onStart,
        onEnd,
        controls,
        invalidate,
        setEvents
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (makeDefault) {
            const old = get().controls;
            // @ts-ignore https://github.com/three-types/three-ts-types/pull/1398
            set({
                controls
            });
            return ()=>set({
                    controls: old
                });
        }
    }, [
        makeDefault,
        controls
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        object: controls,
        enableDamping: enableDamping
    }, restProps));
});
;
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@react-three+drei@10.7.7_@r_01b746e61a1e5f9ceefed04ad5e9b08a/node_modules/@react-three/drei/core/Sky.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sky",
    ()=>Sky,
    "calcPosFromAngles",
    ()=>calcPosFromAngles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$objects$2f$Sky$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/three-stdlib@2.36.1_three@0.181.2/node_modules/three-stdlib/objects/Sky.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/three@0.181.2/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
;
;
;
;
function calcPosFromAngles(inclination, azimuth, vector = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]()) {
    const theta = Math.PI * (inclination - 0.5);
    const phi = 2 * Math.PI * (azimuth - 0.5);
    vector.x = Math.cos(phi);
    vector.y = Math.sin(theta);
    vector.z = Math.sin(phi);
    return vector;
}
const Sky = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ inclination = 0.6, azimuth = 0.1, distance = 1000, mieCoefficient = 0.005, mieDirectionalG = 0.8, rayleigh = 0.5, turbidity = 10, sunPosition = calcPosFromAngles(inclination, azimuth), ...props }, ref)=>{
    const scale = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]().setScalar(distance), [
        distance
    ]);
    const [sky] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$objects$2f$Sky$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sky"]());
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        object: sky,
        ref: ref,
        "material-uniforms-mieCoefficient-value": mieCoefficient,
        "material-uniforms-mieDirectionalG-value": mieDirectionalG,
        "material-uniforms-rayleigh-value": rayleigh,
        "material-uniforms-sunPosition-value": sunPosition,
        "material-uniforms-turbidity-value": turbidity,
        scale: scale
    }, props));
});
;
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Play
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Play", [
    [
        "polygon",
        {
            points: "6 3 20 12 6 21 6 3",
            key: "1oa8hb"
        }
    ]
]);
;
 //# sourceMappingURL=play.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Play",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript)");
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/pause.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Pause
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Pause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Pause", [
    [
        "rect",
        {
            x: "14",
            y: "4",
            width: "4",
            height: "16",
            rx: "1",
            key: "zuxfzm"
        }
    ],
    [
        "rect",
        {
            x: "6",
            y: "4",
            width: "4",
            height: "16",
            rx: "1",
            key: "1okwgv"
        }
    ]
]);
;
 //# sourceMappingURL=pause.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/pause.js [app-ssr] (ecmascript) <export default as Pause>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pause",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/pause.js [app-ssr] (ecmascript)");
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>RotateCcw
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const RotateCcw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("RotateCcw", [
    [
        "path",
        {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3"
        }
    ],
    [
        "path",
        {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }
    ]
]);
;
 //# sourceMappingURL=rotate-ccw.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RotateCcw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript)");
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Sun
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Sun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Sun", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }
    ],
    [
        "path",
        {
            d: "M2 12h2",
            key: "1t8f8n"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ]
]);
;
 //# sourceMappingURL=sun.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sun",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript)");
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/sunrise.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Sunrise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Sunrise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Sunrise", [
    [
        "path",
        {
            d: "M12 2v8",
            key: "1q4o3n"
        }
    ],
    [
        "path",
        {
            d: "m4.93 10.93 1.41 1.41",
            key: "2a7f42"
        }
    ],
    [
        "path",
        {
            d: "M2 18h2",
            key: "j10viu"
        }
    ],
    [
        "path",
        {
            d: "M20 18h2",
            key: "wocana"
        }
    ],
    [
        "path",
        {
            d: "m19.07 10.93-1.41 1.41",
            key: "15zs5n"
        }
    ],
    [
        "path",
        {
            d: "M22 22H2",
            key: "19qnx5"
        }
    ],
    [
        "path",
        {
            d: "m8 6 4-4 4 4",
            key: "ybng9g"
        }
    ],
    [
        "path",
        {
            d: "M16 18a4 4 0 0 0-8 0",
            key: "1lzouq"
        }
    ]
]);
;
 //# sourceMappingURL=sunrise.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/sunrise.js [app-ssr] (ecmascript) <export default as Sunrise>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sunrise",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sunrise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sunrise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/sunrise.js [app-ssr] (ecmascript)");
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/sunset.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Sunset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Sunset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Sunset", [
    [
        "path",
        {
            d: "M12 10V2",
            key: "16sf7g"
        }
    ],
    [
        "path",
        {
            d: "m4.93 10.93 1.41 1.41",
            key: "2a7f42"
        }
    ],
    [
        "path",
        {
            d: "M2 18h2",
            key: "j10viu"
        }
    ],
    [
        "path",
        {
            d: "M20 18h2",
            key: "wocana"
        }
    ],
    [
        "path",
        {
            d: "m19.07 10.93-1.41 1.41",
            key: "15zs5n"
        }
    ],
    [
        "path",
        {
            d: "M22 22H2",
            key: "19qnx5"
        }
    ],
    [
        "path",
        {
            d: "m16 6-4 4-4-4",
            key: "6wukr"
        }
    ],
    [
        "path",
        {
            d: "M16 18a4 4 0 0 0-8 0",
            key: "1lzouq"
        }
    ]
]);
;
 //# sourceMappingURL=sunset.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/sunset.js [app-ssr] (ecmascript) <export default as Sunset>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sunset",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sunset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sunset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/sunset.js [app-ssr] (ecmascript)");
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>TrendingUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const TrendingUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("TrendingUp", [
    [
        "polyline",
        {
            points: "22 7 13.5 15.5 8.5 10.5 2 17",
            key: "126l90"
        }
    ],
    [
        "polyline",
        {
            points: "16 7 22 7 22 13",
            key: "kwv8wd"
        }
    ]
]);
;
 //# sourceMappingURL=trending-up.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendingUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript)");
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Clock", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }
    ]
]);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)");
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/gauge.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Gauge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Gauge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Gauge", [
    [
        "path",
        {
            d: "m12 14 4-4",
            key: "9kzdfg"
        }
    ],
    [
        "path",
        {
            d: "M3.34 19a10 10 0 1 1 17.32 0",
            key: "19p75a"
        }
    ]
]);
;
 //# sourceMappingURL=gauge.js.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/gauge.js [app-ssr] (ecmascript) <export default as Gauge>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Gauge",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/gauge.js [app-ssr] (ecmascript)");
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-compose-ref_35cf6528c895778d9fc6596d488dfd70/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/compose-refs/src/composeRefs.tsx
__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@19.2.7_react@19.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/slot/src/Slot.tsx
__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-compose-ref_35cf6528c895778d9fc6596d488dfd70/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
var Slot = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child)=>{
            if (child === slottable) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(null);
                return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
            } else {
                return child;
            }
        });
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
        ...slotProps,
        ref: forwardedRef,
        children
    });
});
Slot.displayName = "Slot";
var SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
        const childrenRef = getElementRef(children);
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](children, {
            ...mergeProps(slotProps, children.props),
            // @ts-ignore
            ref: forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children })=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children
    });
};
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    childPropValue(...args);
                    slotPropValue(...args);
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
var Root = Slot;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ __turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTailwindMerge",
    ()=>createTailwindMerge,
    "extendTailwindMerge",
    ()=>extendTailwindMerge,
    "fromTheme",
    ()=>fromTheme,
    "getDefaultConfig",
    ()=>getDefaultConfig,
    "mergeConfigs",
    ()=>mergeConfigs,
    "twJoin",
    ()=>twJoin,
    "twMerge",
    ()=>twMerge,
    "validators",
    ()=>validators
]);
const CLASS_PART_SEPARATOR = '-';
const createClassGroupUtils = (config)=>{
    const classMap = createClassMap(config);
    const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
    const getClassGroupId = (className)=>{
        const classParts = className.split(CLASS_PART_SEPARATOR);
        // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
        if (classParts[0] === '' && classParts.length !== 1) {
            classParts.shift();
        }
        return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    };
    const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier)=>{
        const conflicts = conflictingClassGroups[classGroupId] || [];
        if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
            return [
                ...conflicts,
                ...conflictingClassGroupModifiers[classGroupId]
            ];
        }
        return conflicts;
    };
    return {
        getClassGroupId,
        getConflictingClassGroupIds
    };
};
const getGroupRecursive = (classParts, classPartObject)=>{
    if (classParts.length === 0) {
        return classPartObject.classGroupId;
    }
    const currentClassPart = classParts[0];
    const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
    if (classGroupFromNextClassPart) {
        return classGroupFromNextClassPart;
    }
    if (classPartObject.validators.length === 0) {
        return undefined;
    }
    const classRest = classParts.join(CLASS_PART_SEPARATOR);
    return classPartObject.validators.find(({ validator })=>validator(classRest))?.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = (className)=>{
    if (arbitraryPropertyRegex.test(className)) {
        const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
        const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
        if (property) {
            // I use two dots here because one dot is used as prefix for class groups in plugins
            return 'arbitrary..' + property;
        }
    }
};
/**
 * Exported for testing only
 */ const createClassMap = (config)=>{
    const { theme, prefix } = config;
    const classMap = {
        nextPart: new Map(),
        validators: []
    };
    const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
    prefixedClassGroupEntries.forEach(([classGroupId, classGroup])=>{
        processClassesRecursively(classGroup, classMap, classGroupId, theme);
    });
    return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme)=>{
    classGroup.forEach((classDefinition)=>{
        if (typeof classDefinition === 'string') {
            const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
            classPartObjectToEdit.classGroupId = classGroupId;
            return;
        }
        if (typeof classDefinition === 'function') {
            if (isThemeGetter(classDefinition)) {
                processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
                return;
            }
            classPartObject.validators.push({
                validator: classDefinition,
                classGroupId
            });
            return;
        }
        Object.entries(classDefinition).forEach(([key, classGroup])=>{
            processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
        });
    });
};
const getPart = (classPartObject, path)=>{
    let currentClassPartObject = classPartObject;
    path.split(CLASS_PART_SEPARATOR).forEach((pathPart)=>{
        if (!currentClassPartObject.nextPart.has(pathPart)) {
            currentClassPartObject.nextPart.set(pathPart, {
                nextPart: new Map(),
                validators: []
            });
        }
        currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
    });
    return currentClassPartObject;
};
const isThemeGetter = (func)=>func.isThemeGetter;
const getPrefixedClassGroupEntries = (classGroupEntries, prefix)=>{
    if (!prefix) {
        return classGroupEntries;
    }
    return classGroupEntries.map(([classGroupId, classGroup])=>{
        const prefixedClassGroup = classGroup.map((classDefinition)=>{
            if (typeof classDefinition === 'string') {
                return prefix + classDefinition;
            }
            if (typeof classDefinition === 'object') {
                return Object.fromEntries(Object.entries(classDefinition).map(([key, value])=>[
                        prefix + key,
                        value
                    ]));
            }
            return classDefinition;
        });
        return [
            classGroupId,
            prefixedClassGroup
        ];
    });
};
// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
const createLruCache = (maxCacheSize)=>{
    if (maxCacheSize < 1) {
        return {
            get: ()=>undefined,
            set: ()=>{}
        };
    }
    let cacheSize = 0;
    let cache = new Map();
    let previousCache = new Map();
    const update = (key, value)=>{
        cache.set(key, value);
        cacheSize++;
        if (cacheSize > maxCacheSize) {
            cacheSize = 0;
            previousCache = cache;
            cache = new Map();
        }
    };
    return {
        get (key) {
            let value = cache.get(key);
            if (value !== undefined) {
                return value;
            }
            if ((value = previousCache.get(key)) !== undefined) {
                update(key, value);
                return value;
            }
        },
        set (key, value) {
            if (cache.has(key)) {
                cache.set(key, value);
            } else {
                update(key, value);
            }
        }
    };
};
const IMPORTANT_MODIFIER = '!';
const createParseClassName = (config)=>{
    const { separator, experimentalParseClassName } = config;
    const isSeparatorSingleCharacter = separator.length === 1;
    const firstSeparatorCharacter = separator[0];
    const separatorLength = separator.length;
    // parseClassName inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
    const parseClassName = (className)=>{
        const modifiers = [];
        let bracketDepth = 0;
        let modifierStart = 0;
        let postfixModifierPosition;
        for(let index = 0; index < className.length; index++){
            let currentCharacter = className[index];
            if (bracketDepth === 0) {
                if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
                    modifiers.push(className.slice(modifierStart, index));
                    modifierStart = index + separatorLength;
                    continue;
                }
                if (currentCharacter === '/') {
                    postfixModifierPosition = index;
                    continue;
                }
            }
            if (currentCharacter === '[') {
                bracketDepth++;
            } else if (currentCharacter === ']') {
                bracketDepth--;
            }
        }
        const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
        const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
        const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
        const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
        return {
            modifiers,
            hasImportantModifier,
            baseClassName,
            maybePostfixModifierPosition
        };
    };
    if (experimentalParseClassName) {
        return (className)=>experimentalParseClassName({
                className,
                parseClassName
            });
    }
    return parseClassName;
};
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */ const sortModifiers = (modifiers)=>{
    if (modifiers.length <= 1) {
        return modifiers;
    }
    const sortedModifiers = [];
    let unsortedModifiers = [];
    modifiers.forEach((modifier)=>{
        const isArbitraryVariant = modifier[0] === '[';
        if (isArbitraryVariant) {
            sortedModifiers.push(...unsortedModifiers.sort(), modifier);
            unsortedModifiers = [];
        } else {
            unsortedModifiers.push(modifier);
        }
    });
    sortedModifiers.push(...unsortedModifiers.sort());
    return sortedModifiers;
};
const createConfigUtils = (config)=>({
        cache: createLruCache(config.cacheSize),
        parseClassName: createParseClassName(config),
        ...createClassGroupUtils(config)
    });
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils)=>{
    const { parseClassName, getClassGroupId, getConflictingClassGroupIds } = configUtils;
    /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */ const classGroupsInConflict = [];
    const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    let result = '';
    for(let index = classNames.length - 1; index >= 0; index -= 1){
        const originalClassName = classNames[index];
        const { modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
        let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
        let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        if (!classGroupId) {
            if (!hasPostfixModifier) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            classGroupId = getClassGroupId(baseClassName);
            if (!classGroupId) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            hasPostfixModifier = false;
        }
        const variantModifier = sortModifiers(modifiers).join(':');
        const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
        const classId = modifierId + classGroupId;
        if (classGroupsInConflict.includes(classId)) {
            continue;
        }
        classGroupsInConflict.push(classId);
        const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
        for(let i = 0; i < conflictGroups.length; ++i){
            const group = conflictGroups[i];
            classGroupsInConflict.push(modifierId + group);
        }
        // Tailwind class not in conflict
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
    }
    return result;
};
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */ function twJoin() {
    let index = 0;
    let argument;
    let resolvedValue;
    let string = '';
    while(index < arguments.length){
        if (argument = arguments[index++]) {
            if (resolvedValue = toValue(argument)) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
}
const toValue = (mix)=>{
    if (typeof mix === 'string') {
        return mix;
    }
    let resolvedValue;
    let string = '';
    for(let k = 0; k < mix.length; k++){
        if (mix[k]) {
            if (resolvedValue = toValue(mix[k])) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
        const config = createConfigRest.reduce((previousConfig, createConfigCurrent)=>createConfigCurrent(previousConfig), createConfigFirst());
        configUtils = createConfigUtils(config);
        cacheGet = configUtils.cache.get;
        cacheSet = configUtils.cache.set;
        functionToCall = tailwindMerge;
        return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
        const cachedResult = cacheGet(classList);
        if (cachedResult) {
            return cachedResult;
        }
        const result = mergeClassList(classList, configUtils);
        cacheSet(classList, result);
        return result;
    }
    return function callTailwindMerge() {
        return functionToCall(twJoin.apply(null, arguments));
    };
}
const fromTheme = (key)=>{
    const themeGetter = (theme)=>theme[key] || [];
    themeGetter.isThemeGetter = true;
    return themeGetter;
};
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /*#__PURE__*/ new Set([
    'px',
    'full',
    'screen'
]);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isLength = (value)=>isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
const isArbitraryLength = (value)=>getIsArbitraryValue(value, 'length', isLengthOnly);
const isNumber = (value)=>Boolean(value) && !Number.isNaN(Number(value));
const isArbitraryNumber = (value)=>getIsArbitraryValue(value, 'number', isNumber);
const isInteger = (value)=>Boolean(value) && Number.isInteger(Number(value));
const isPercent = (value)=>value.endsWith('%') && isNumber(value.slice(0, -1));
const isArbitraryValue = (value)=>arbitraryValueRegex.test(value);
const isTshirtSize = (value)=>tshirtUnitRegex.test(value);
const sizeLabels = /*#__PURE__*/ new Set([
    'length',
    'size',
    'percentage'
]);
const isArbitrarySize = (value)=>getIsArbitraryValue(value, sizeLabels, isNever);
const isArbitraryPosition = (value)=>getIsArbitraryValue(value, 'position', isNever);
const imageLabels = /*#__PURE__*/ new Set([
    'image',
    'url'
]);
const isArbitraryImage = (value)=>getIsArbitraryValue(value, imageLabels, isImage);
const isArbitraryShadow = (value)=>getIsArbitraryValue(value, '', isShadow);
const isAny = ()=>true;
const getIsArbitraryValue = (value, label, testValue)=>{
    const result = arbitraryValueRegex.exec(value);
    if (result) {
        if (result[1]) {
            return typeof label === 'string' ? result[1] === label : label.has(result[1]);
        }
        return testValue(result[2]);
    }
    return false;
};
const isLengthOnly = (value)=>// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = ()=>false;
const isShadow = (value)=>shadowRegex.test(value);
const isImage = (value)=>imageRegex.test(value);
const validators = /*#__PURE__*/ Object.defineProperty({
    __proto__: null,
    isAny,
    isArbitraryImage,
    isArbitraryLength,
    isArbitraryNumber,
    isArbitraryPosition,
    isArbitraryShadow,
    isArbitrarySize,
    isArbitraryValue,
    isInteger,
    isLength,
    isNumber,
    isPercent,
    isTshirtSize
}, Symbol.toStringTag, {
    value: 'Module'
});
const getDefaultConfig = ()=>{
    const colors = fromTheme('colors');
    const spacing = fromTheme('spacing');
    const blur = fromTheme('blur');
    const brightness = fromTheme('brightness');
    const borderColor = fromTheme('borderColor');
    const borderRadius = fromTheme('borderRadius');
    const borderSpacing = fromTheme('borderSpacing');
    const borderWidth = fromTheme('borderWidth');
    const contrast = fromTheme('contrast');
    const grayscale = fromTheme('grayscale');
    const hueRotate = fromTheme('hueRotate');
    const invert = fromTheme('invert');
    const gap = fromTheme('gap');
    const gradientColorStops = fromTheme('gradientColorStops');
    const gradientColorStopPositions = fromTheme('gradientColorStopPositions');
    const inset = fromTheme('inset');
    const margin = fromTheme('margin');
    const opacity = fromTheme('opacity');
    const padding = fromTheme('padding');
    const saturate = fromTheme('saturate');
    const scale = fromTheme('scale');
    const sepia = fromTheme('sepia');
    const skew = fromTheme('skew');
    const space = fromTheme('space');
    const translate = fromTheme('translate');
    const getOverscroll = ()=>[
            'auto',
            'contain',
            'none'
        ];
    const getOverflow = ()=>[
            'auto',
            'hidden',
            'clip',
            'visible',
            'scroll'
        ];
    const getSpacingWithAutoAndArbitrary = ()=>[
            'auto',
            isArbitraryValue,
            spacing
        ];
    const getSpacingWithArbitrary = ()=>[
            isArbitraryValue,
            spacing
        ];
    const getLengthWithEmptyAndArbitrary = ()=>[
            '',
            isLength,
            isArbitraryLength
        ];
    const getNumberWithAutoAndArbitrary = ()=>[
            'auto',
            isNumber,
            isArbitraryValue
        ];
    const getPositions = ()=>[
            'bottom',
            'center',
            'left',
            'left-bottom',
            'left-top',
            'right',
            'right-bottom',
            'right-top',
            'top'
        ];
    const getLineStyles = ()=>[
            'solid',
            'dashed',
            'dotted',
            'double',
            'none'
        ];
    const getBlendModes = ()=>[
            'normal',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity'
        ];
    const getAlign = ()=>[
            'start',
            'end',
            'center',
            'between',
            'around',
            'evenly',
            'stretch'
        ];
    const getZeroAndEmpty = ()=>[
            '',
            '0',
            isArbitraryValue
        ];
    const getBreaks = ()=>[
            'auto',
            'avoid',
            'all',
            'avoid-page',
            'page',
            'left',
            'right',
            'column'
        ];
    const getNumberAndArbitrary = ()=>[
            isNumber,
            isArbitraryValue
        ];
    return {
        cacheSize: 500,
        separator: ':',
        theme: {
            colors: [
                isAny
            ],
            spacing: [
                isLength,
                isArbitraryLength
            ],
            blur: [
                'none',
                '',
                isTshirtSize,
                isArbitraryValue
            ],
            brightness: getNumberAndArbitrary(),
            borderColor: [
                colors
            ],
            borderRadius: [
                'none',
                '',
                'full',
                isTshirtSize,
                isArbitraryValue
            ],
            borderSpacing: getSpacingWithArbitrary(),
            borderWidth: getLengthWithEmptyAndArbitrary(),
            contrast: getNumberAndArbitrary(),
            grayscale: getZeroAndEmpty(),
            hueRotate: getNumberAndArbitrary(),
            invert: getZeroAndEmpty(),
            gap: getSpacingWithArbitrary(),
            gradientColorStops: [
                colors
            ],
            gradientColorStopPositions: [
                isPercent,
                isArbitraryLength
            ],
            inset: getSpacingWithAutoAndArbitrary(),
            margin: getSpacingWithAutoAndArbitrary(),
            opacity: getNumberAndArbitrary(),
            padding: getSpacingWithArbitrary(),
            saturate: getNumberAndArbitrary(),
            scale: getNumberAndArbitrary(),
            sepia: getZeroAndEmpty(),
            skew: getNumberAndArbitrary(),
            space: getSpacingWithArbitrary(),
            translate: getSpacingWithArbitrary()
        },
        classGroups: {
            // Layout
            /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */ aspect: [
                {
                    aspect: [
                        'auto',
                        'square',
                        'video',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */ container: [
                'container'
            ],
            /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */ columns: [
                {
                    columns: [
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */ 'break-after': [
                {
                    'break-after': getBreaks()
                }
            ],
            /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */ 'break-before': [
                {
                    'break-before': getBreaks()
                }
            ],
            /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */ 'break-inside': [
                {
                    'break-inside': [
                        'auto',
                        'avoid',
                        'avoid-page',
                        'avoid-column'
                    ]
                }
            ],
            /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */ 'box-decoration': [
                {
                    'box-decoration': [
                        'slice',
                        'clone'
                    ]
                }
            ],
            /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */ box: [
                {
                    box: [
                        'border',
                        'content'
                    ]
                }
            ],
            /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */ display: [
                'block',
                'inline-block',
                'inline',
                'flex',
                'inline-flex',
                'table',
                'inline-table',
                'table-caption',
                'table-cell',
                'table-column',
                'table-column-group',
                'table-footer-group',
                'table-header-group',
                'table-row-group',
                'table-row',
                'flow-root',
                'grid',
                'inline-grid',
                'contents',
                'list-item',
                'hidden'
            ],
            /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */ float: [
                {
                    float: [
                        'right',
                        'left',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */ clear: [
                {
                    clear: [
                        'left',
                        'right',
                        'both',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */ isolation: [
                'isolate',
                'isolation-auto'
            ],
            /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */ 'object-fit': [
                {
                    object: [
                        'contain',
                        'cover',
                        'fill',
                        'none',
                        'scale-down'
                    ]
                }
            ],
            /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */ 'object-position': [
                {
                    object: [
                        ...getPositions(),
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */ overflow: [
                {
                    overflow: getOverflow()
                }
            ],
            /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-x': [
                {
                    'overflow-x': getOverflow()
                }
            ],
            /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-y': [
                {
                    'overflow-y': getOverflow()
                }
            ],
            /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ overscroll: [
                {
                    overscroll: getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-x': [
                {
                    'overscroll-x': getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-y': [
                {
                    'overscroll-y': getOverscroll()
                }
            ],
            /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */ position: [
                'static',
                'fixed',
                'absolute',
                'relative',
                'sticky'
            ],
            /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ inset: [
                {
                    inset: [
                        inset
                    ]
                }
            ],
            /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-x': [
                {
                    'inset-x': [
                        inset
                    ]
                }
            ],
            /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-y': [
                {
                    'inset-y': [
                        inset
                    ]
                }
            ],
            /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ start: [
                {
                    start: [
                        inset
                    ]
                }
            ],
            /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ end: [
                {
                    end: [
                        inset
                    ]
                }
            ],
            /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ top: [
                {
                    top: [
                        inset
                    ]
                }
            ],
            /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ right: [
                {
                    right: [
                        inset
                    ]
                }
            ],
            /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ bottom: [
                {
                    bottom: [
                        inset
                    ]
                }
            ],
            /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ left: [
                {
                    left: [
                        inset
                    ]
                }
            ],
            /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */ visibility: [
                'visible',
                'invisible',
                'collapse'
            ],
            /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */ z: [
                {
                    z: [
                        'auto',
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            // Flexbox and Grid
            /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */ basis: [
                {
                    basis: getSpacingWithAutoAndArbitrary()
                }
            ],
            /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */ 'flex-direction': [
                {
                    flex: [
                        'row',
                        'row-reverse',
                        'col',
                        'col-reverse'
                    ]
                }
            ],
            /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */ 'flex-wrap': [
                {
                    flex: [
                        'wrap',
                        'wrap-reverse',
                        'nowrap'
                    ]
                }
            ],
            /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */ flex: [
                {
                    flex: [
                        '1',
                        'auto',
                        'initial',
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */ grow: [
                {
                    grow: getZeroAndEmpty()
                }
            ],
            /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */ shrink: [
                {
                    shrink: getZeroAndEmpty()
                }
            ],
            /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */ order: [
                {
                    order: [
                        'first',
                        'last',
                        'none',
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */ 'grid-cols': [
                {
                    'grid-cols': [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start-end': [
                {
                    col: [
                        'auto',
                        {
                            span: [
                                'full',
                                isInteger,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start': [
                {
                    'col-start': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-end': [
                {
                    'col-end': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */ 'grid-rows': [
                {
                    'grid-rows': [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start-end': [
                {
                    row: [
                        'auto',
                        {
                            span: [
                                isInteger,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start': [
                {
                    'row-start': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-end': [
                {
                    'row-end': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */ 'grid-flow': [
                {
                    'grid-flow': [
                        'row',
                        'col',
                        'dense',
                        'row-dense',
                        'col-dense'
                    ]
                }
            ],
            /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */ 'auto-cols': [
                {
                    'auto-cols': [
                        'auto',
                        'min',
                        'max',
                        'fr',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */ 'auto-rows': [
                {
                    'auto-rows': [
                        'auto',
                        'min',
                        'max',
                        'fr',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */ gap: [
                {
                    gap: [
                        gap
                    ]
                }
            ],
            /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-x': [
                {
                    'gap-x': [
                        gap
                    ]
                }
            ],
            /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-y': [
                {
                    'gap-y': [
                        gap
                    ]
                }
            ],
            /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */ 'justify-content': [
                {
                    justify: [
                        'normal',
                        ...getAlign()
                    ]
                }
            ],
            /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */ 'justify-items': [
                {
                    'justify-items': [
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */ 'justify-self': [
                {
                    'justify-self': [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */ 'align-content': [
                {
                    content: [
                        'normal',
                        ...getAlign(),
                        'baseline'
                    ]
                }
            ],
            /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */ 'align-items': [
                {
                    items: [
                        'start',
                        'end',
                        'center',
                        'baseline',
                        'stretch'
                    ]
                }
            ],
            /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */ 'align-self': [
                {
                    self: [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch',
                        'baseline'
                    ]
                }
            ],
            /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */ 'place-content': [
                {
                    'place-content': [
                        ...getAlign(),
                        'baseline'
                    ]
                }
            ],
            /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */ 'place-items': [
                {
                    'place-items': [
                        'start',
                        'end',
                        'center',
                        'baseline',
                        'stretch'
                    ]
                }
            ],
            /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */ 'place-self': [
                {
                    'place-self': [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            // Spacing
            /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */ p: [
                {
                    p: [
                        padding
                    ]
                }
            ],
            /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */ px: [
                {
                    px: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */ py: [
                {
                    py: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */ ps: [
                {
                    ps: [
                        padding
                    ]
                }
            ],
            /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */ pe: [
                {
                    pe: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */ pt: [
                {
                    pt: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */ pr: [
                {
                    pr: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */ pb: [
                {
                    pb: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */ pl: [
                {
                    pl: [
                        padding
                    ]
                }
            ],
            /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */ m: [
                {
                    m: [
                        margin
                    ]
                }
            ],
            /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */ mx: [
                {
                    mx: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */ my: [
                {
                    my: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */ ms: [
                {
                    ms: [
                        margin
                    ]
                }
            ],
            /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */ me: [
                {
                    me: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */ mt: [
                {
                    mt: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */ mr: [
                {
                    mr: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */ mb: [
                {
                    mb: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ ml: [
                {
                    ml: [
                        margin
                    ]
                }
            ],
            /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */ 'space-x': [
                {
                    'space-x': [
                        space
                    ]
                }
            ],
            /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */ 'space-x-reverse': [
                'space-x-reverse'
            ],
            /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */ 'space-y': [
                {
                    'space-y': [
                        space
                    ]
                }
            ],
            /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */ 'space-y-reverse': [
                'space-y-reverse'
            ],
            // Sizing
            /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */ w: [
                {
                    w: [
                        'auto',
                        'min',
                        'max',
                        'fit',
                        'svw',
                        'lvw',
                        'dvw',
                        isArbitraryValue,
                        spacing
                    ]
                }
            ],
            /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */ 'min-w': [
                {
                    'min-w': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit'
                    ]
                }
            ],
            /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */ 'max-w': [
                {
                    'max-w': [
                        isArbitraryValue,
                        spacing,
                        'none',
                        'full',
                        'min',
                        'max',
                        'fit',
                        'prose',
                        {
                            screen: [
                                isTshirtSize
                            ]
                        },
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */ h: [
                {
                    h: [
                        isArbitraryValue,
                        spacing,
                        'auto',
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */ 'min-h': [
                {
                    'min-h': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */ 'max-h': [
                {
                    'max-h': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */ size: [
                {
                    size: [
                        isArbitraryValue,
                        spacing,
                        'auto',
                        'min',
                        'max',
                        'fit'
                    ]
                }
            ],
            // Typography
            /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */ 'font-size': [
                {
                    text: [
                        'base',
                        isTshirtSize,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */ 'font-smoothing': [
                'antialiased',
                'subpixel-antialiased'
            ],
            /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */ 'font-style': [
                'italic',
                'not-italic'
            ],
            /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */ 'font-weight': [
                {
                    font: [
                        'thin',
                        'extralight',
                        'light',
                        'normal',
                        'medium',
                        'semibold',
                        'bold',
                        'extrabold',
                        'black',
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */ 'font-family': [
                {
                    font: [
                        isAny
                    ]
                }
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-normal': [
                'normal-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-ordinal': [
                'ordinal'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-slashed-zero': [
                'slashed-zero'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-figure': [
                'lining-nums',
                'oldstyle-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-spacing': [
                'proportional-nums',
                'tabular-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-fraction': [
                'diagonal-fractions',
                'stacked-fractions'
            ],
            /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */ tracking: [
                {
                    tracking: [
                        'tighter',
                        'tight',
                        'normal',
                        'wide',
                        'wider',
                        'widest',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */ 'line-clamp': [
                {
                    'line-clamp': [
                        'none',
                        isNumber,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */ leading: [
                {
                    leading: [
                        'none',
                        'tight',
                        'snug',
                        'normal',
                        'relaxed',
                        'loose',
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */ 'list-image': [
                {
                    'list-image': [
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */ 'list-style-type': [
                {
                    list: [
                        'none',
                        'disc',
                        'decimal',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */ 'list-style-position': [
                {
                    list: [
                        'inside',
                        'outside'
                    ]
                }
            ],
            /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */ 'placeholder-color': [
                {
                    placeholder: [
                        colors
                    ]
                }
            ],
            /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */ 'placeholder-opacity': [
                {
                    'placeholder-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */ 'text-alignment': [
                {
                    text: [
                        'left',
                        'center',
                        'right',
                        'justify',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */ 'text-color': [
                {
                    text: [
                        colors
                    ]
                }
            ],
            /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */ 'text-opacity': [
                {
                    'text-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */ 'text-decoration': [
                'underline',
                'overline',
                'line-through',
                'no-underline'
            ],
            /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */ 'text-decoration-style': [
                {
                    decoration: [
                        ...getLineStyles(),
                        'wavy'
                    ]
                }
            ],
            /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */ 'text-decoration-thickness': [
                {
                    decoration: [
                        'auto',
                        'from-font',
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */ 'underline-offset': [
                {
                    'underline-offset': [
                        'auto',
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */ 'text-decoration-color': [
                {
                    decoration: [
                        colors
                    ]
                }
            ],
            /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */ 'text-transform': [
                'uppercase',
                'lowercase',
                'capitalize',
                'normal-case'
            ],
            /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */ 'text-overflow': [
                'truncate',
                'text-ellipsis',
                'text-clip'
            ],
            /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */ 'text-wrap': [
                {
                    text: [
                        'wrap',
                        'nowrap',
                        'balance',
                        'pretty'
                    ]
                }
            ],
            /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */ indent: [
                {
                    indent: getSpacingWithArbitrary()
                }
            ],
            /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */ 'vertical-align': [
                {
                    align: [
                        'baseline',
                        'top',
                        'middle',
                        'bottom',
                        'text-top',
                        'text-bottom',
                        'sub',
                        'super',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */ whitespace: [
                {
                    whitespace: [
                        'normal',
                        'nowrap',
                        'pre',
                        'pre-line',
                        'pre-wrap',
                        'break-spaces'
                    ]
                }
            ],
            /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */ break: [
                {
                    break: [
                        'normal',
                        'words',
                        'all',
                        'keep'
                    ]
                }
            ],
            /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */ hyphens: [
                {
                    hyphens: [
                        'none',
                        'manual',
                        'auto'
                    ]
                }
            ],
            /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */ content: [
                {
                    content: [
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            // Backgrounds
            /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */ 'bg-attachment': [
                {
                    bg: [
                        'fixed',
                        'local',
                        'scroll'
                    ]
                }
            ],
            /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */ 'bg-clip': [
                {
                    'bg-clip': [
                        'border',
                        'padding',
                        'content',
                        'text'
                    ]
                }
            ],
            /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */ 'bg-opacity': [
                {
                    'bg-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */ 'bg-origin': [
                {
                    'bg-origin': [
                        'border',
                        'padding',
                        'content'
                    ]
                }
            ],
            /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */ 'bg-position': [
                {
                    bg: [
                        ...getPositions(),
                        isArbitraryPosition
                    ]
                }
            ],
            /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */ 'bg-repeat': [
                {
                    bg: [
                        'no-repeat',
                        {
                            repeat: [
                                '',
                                'x',
                                'y',
                                'round',
                                'space'
                            ]
                        }
                    ]
                }
            ],
            /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */ 'bg-size': [
                {
                    bg: [
                        'auto',
                        'cover',
                        'contain',
                        isArbitrarySize
                    ]
                }
            ],
            /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */ 'bg-image': [
                {
                    bg: [
                        'none',
                        {
                            'gradient-to': [
                                't',
                                'tr',
                                'r',
                                'br',
                                'b',
                                'bl',
                                'l',
                                'tl'
                            ]
                        },
                        isArbitraryImage
                    ]
                }
            ],
            /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */ 'bg-color': [
                {
                    bg: [
                        colors
                    ]
                }
            ],
            /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from-pos': [
                {
                    from: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via-pos': [
                {
                    via: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to-pos': [
                {
                    to: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from': [
                {
                    from: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via': [
                {
                    via: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to': [
                {
                    to: [
                        gradientColorStops
                    ]
                }
            ],
            // Borders
            /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */ rounded: [
                {
                    rounded: [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-s': [
                {
                    'rounded-s': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-e': [
                {
                    'rounded-e': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-t': [
                {
                    'rounded-t': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-r': [
                {
                    'rounded-r': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-b': [
                {
                    'rounded-b': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-l': [
                {
                    'rounded-l': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ss': [
                {
                    'rounded-ss': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-se': [
                {
                    'rounded-se': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ee': [
                {
                    'rounded-ee': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-es': [
                {
                    'rounded-es': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tl': [
                {
                    'rounded-tl': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tr': [
                {
                    'rounded-tr': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-br': [
                {
                    'rounded-br': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-bl': [
                {
                    'rounded-bl': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w': [
                {
                    border: [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-x': [
                {
                    'border-x': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-y': [
                {
                    'border-y': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-s': [
                {
                    'border-s': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-e': [
                {
                    'border-e': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-t': [
                {
                    'border-t': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-r': [
                {
                    'border-r': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-b': [
                {
                    'border-b': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-l': [
                {
                    'border-l': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */ 'border-opacity': [
                {
                    'border-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */ 'border-style': [
                {
                    border: [
                        ...getLineStyles(),
                        'hidden'
                    ]
                }
            ],
            /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-x': [
                {
                    'divide-x': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-x-reverse': [
                'divide-x-reverse'
            ],
            /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-y': [
                {
                    'divide-y': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-y-reverse': [
                'divide-y-reverse'
            ],
            /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */ 'divide-opacity': [
                {
                    'divide-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */ 'divide-style': [
                {
                    divide: getLineStyles()
                }
            ],
            /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color': [
                {
                    border: [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-x': [
                {
                    'border-x': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-y': [
                {
                    'border-y': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-s': [
                {
                    'border-s': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-e': [
                {
                    'border-e': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-t': [
                {
                    'border-t': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-r': [
                {
                    'border-r': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-b': [
                {
                    'border-b': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-l': [
                {
                    'border-l': [
                        borderColor
                    ]
                }
            ],
            /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */ 'divide-color': [
                {
                    divide: [
                        borderColor
                    ]
                }
            ],
            /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */ 'outline-style': [
                {
                    outline: [
                        '',
                        ...getLineStyles()
                    ]
                }
            ],
            /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */ 'outline-offset': [
                {
                    'outline-offset': [
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */ 'outline-w': [
                {
                    outline: [
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */ 'outline-color': [
                {
                    outline: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */ 'ring-w': [
                {
                    ring: getLengthWithEmptyAndArbitrary()
                }
            ],
            /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */ 'ring-w-inset': [
                'ring-inset'
            ],
            /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */ 'ring-color': [
                {
                    ring: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */ 'ring-opacity': [
                {
                    'ring-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */ 'ring-offset-w': [
                {
                    'ring-offset': [
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */ 'ring-offset-color': [
                {
                    'ring-offset': [
                        colors
                    ]
                }
            ],
            // Effects
            /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */ shadow: [
                {
                    shadow: [
                        '',
                        'inner',
                        'none',
                        isTshirtSize,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */ 'shadow-color': [
                {
                    shadow: [
                        isAny
                    ]
                }
            ],
            /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */ opacity: [
                {
                    opacity: [
                        opacity
                    ]
                }
            ],
            /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */ 'mix-blend': [
                {
                    'mix-blend': [
                        ...getBlendModes(),
                        'plus-lighter',
                        'plus-darker'
                    ]
                }
            ],
            /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */ 'bg-blend': [
                {
                    'bg-blend': getBlendModes()
                }
            ],
            // Filters
            /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */ filter: [
                {
                    filter: [
                        '',
                        'none'
                    ]
                }
            ],
            /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */ blur: [
                {
                    blur: [
                        blur
                    ]
                }
            ],
            /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */ brightness: [
                {
                    brightness: [
                        brightness
                    ]
                }
            ],
            /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */ contrast: [
                {
                    contrast: [
                        contrast
                    ]
                }
            ],
            /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */ 'drop-shadow': [
                {
                    'drop-shadow': [
                        '',
                        'none',
                        isTshirtSize,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */ grayscale: [
                {
                    grayscale: [
                        grayscale
                    ]
                }
            ],
            /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */ 'hue-rotate': [
                {
                    'hue-rotate': [
                        hueRotate
                    ]
                }
            ],
            /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */ invert: [
                {
                    invert: [
                        invert
                    ]
                }
            ],
            /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */ saturate: [
                {
                    saturate: [
                        saturate
                    ]
                }
            ],
            /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */ sepia: [
                {
                    sepia: [
                        sepia
                    ]
                }
            ],
            /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */ 'backdrop-filter': [
                {
                    'backdrop-filter': [
                        '',
                        'none'
                    ]
                }
            ],
            /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */ 'backdrop-blur': [
                {
                    'backdrop-blur': [
                        blur
                    ]
                }
            ],
            /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */ 'backdrop-brightness': [
                {
                    'backdrop-brightness': [
                        brightness
                    ]
                }
            ],
            /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */ 'backdrop-contrast': [
                {
                    'backdrop-contrast': [
                        contrast
                    ]
                }
            ],
            /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */ 'backdrop-grayscale': [
                {
                    'backdrop-grayscale': [
                        grayscale
                    ]
                }
            ],
            /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */ 'backdrop-hue-rotate': [
                {
                    'backdrop-hue-rotate': [
                        hueRotate
                    ]
                }
            ],
            /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */ 'backdrop-invert': [
                {
                    'backdrop-invert': [
                        invert
                    ]
                }
            ],
            /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */ 'backdrop-opacity': [
                {
                    'backdrop-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */ 'backdrop-saturate': [
                {
                    'backdrop-saturate': [
                        saturate
                    ]
                }
            ],
            /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */ 'backdrop-sepia': [
                {
                    'backdrop-sepia': [
                        sepia
                    ]
                }
            ],
            // Tables
            /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */ 'border-collapse': [
                {
                    border: [
                        'collapse',
                        'separate'
                    ]
                }
            ],
            /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing': [
                {
                    'border-spacing': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-x': [
                {
                    'border-spacing-x': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-y': [
                {
                    'border-spacing-y': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */ 'table-layout': [
                {
                    table: [
                        'auto',
                        'fixed'
                    ]
                }
            ],
            /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */ caption: [
                {
                    caption: [
                        'top',
                        'bottom'
                    ]
                }
            ],
            // Transitions and Animation
            /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */ transition: [
                {
                    transition: [
                        'none',
                        'all',
                        '',
                        'colors',
                        'opacity',
                        'shadow',
                        'transform',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */ duration: [
                {
                    duration: getNumberAndArbitrary()
                }
            ],
            /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ ease: [
                {
                    ease: [
                        'linear',
                        'in',
                        'out',
                        'in-out',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */ delay: [
                {
                    delay: getNumberAndArbitrary()
                }
            ],
            /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */ animate: [
                {
                    animate: [
                        'none',
                        'spin',
                        'ping',
                        'pulse',
                        'bounce',
                        isArbitraryValue
                    ]
                }
            ],
            // Transforms
            /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */ transform: [
                {
                    transform: [
                        '',
                        'gpu',
                        'none'
                    ]
                }
            ],
            /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */ scale: [
                {
                    scale: [
                        scale
                    ]
                }
            ],
            /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-x': [
                {
                    'scale-x': [
                        scale
                    ]
                }
            ],
            /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-y': [
                {
                    'scale-y': [
                        scale
                    ]
                }
            ],
            /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */ rotate: [
                {
                    rotate: [
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-x': [
                {
                    'translate-x': [
                        translate
                    ]
                }
            ],
            /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-y': [
                {
                    'translate-y': [
                        translate
                    ]
                }
            ],
            /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-x': [
                {
                    'skew-x': [
                        skew
                    ]
                }
            ],
            /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-y': [
                {
                    'skew-y': [
                        skew
                    ]
                }
            ],
            /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */ 'transform-origin': [
                {
                    origin: [
                        'center',
                        'top',
                        'top-right',
                        'right',
                        'bottom-right',
                        'bottom',
                        'bottom-left',
                        'left',
                        'top-left',
                        isArbitraryValue
                    ]
                }
            ],
            // Interactivity
            /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */ accent: [
                {
                    accent: [
                        'auto',
                        colors
                    ]
                }
            ],
            /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */ appearance: [
                {
                    appearance: [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */ cursor: [
                {
                    cursor: [
                        'auto',
                        'default',
                        'pointer',
                        'wait',
                        'text',
                        'move',
                        'help',
                        'not-allowed',
                        'none',
                        'context-menu',
                        'progress',
                        'cell',
                        'crosshair',
                        'vertical-text',
                        'alias',
                        'copy',
                        'no-drop',
                        'grab',
                        'grabbing',
                        'all-scroll',
                        'col-resize',
                        'row-resize',
                        'n-resize',
                        'e-resize',
                        's-resize',
                        'w-resize',
                        'ne-resize',
                        'nw-resize',
                        'se-resize',
                        'sw-resize',
                        'ew-resize',
                        'ns-resize',
                        'nesw-resize',
                        'nwse-resize',
                        'zoom-in',
                        'zoom-out',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */ 'caret-color': [
                {
                    caret: [
                        colors
                    ]
                }
            ],
            /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */ 'pointer-events': [
                {
                    'pointer-events': [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */ resize: [
                {
                    resize: [
                        'none',
                        'y',
                        'x',
                        ''
                    ]
                }
            ],
            /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */ 'scroll-behavior': [
                {
                    scroll: [
                        'auto',
                        'smooth'
                    ]
                }
            ],
            /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-m': [
                {
                    'scroll-m': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mx': [
                {
                    'scroll-mx': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-my': [
                {
                    'scroll-my': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ms': [
                {
                    'scroll-ms': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-me': [
                {
                    'scroll-me': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mt': [
                {
                    'scroll-mt': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mr': [
                {
                    'scroll-mr': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mb': [
                {
                    'scroll-mb': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ml': [
                {
                    'scroll-ml': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-p': [
                {
                    'scroll-p': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-px': [
                {
                    'scroll-px': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-py': [
                {
                    'scroll-py': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-ps': [
                {
                    'scroll-ps': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pe': [
                {
                    'scroll-pe': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pt': [
                {
                    'scroll-pt': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pr': [
                {
                    'scroll-pr': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pb': [
                {
                    'scroll-pb': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pl': [
                {
                    'scroll-pl': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */ 'snap-align': [
                {
                    snap: [
                        'start',
                        'end',
                        'center',
                        'align-none'
                    ]
                }
            ],
            /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */ 'snap-stop': [
                {
                    snap: [
                        'normal',
                        'always'
                    ]
                }
            ],
            /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-type': [
                {
                    snap: [
                        'none',
                        'x',
                        'y',
                        'both'
                    ]
                }
            ],
            /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-strictness': [
                {
                    snap: [
                        'mandatory',
                        'proximity'
                    ]
                }
            ],
            /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */ touch: [
                {
                    touch: [
                        'auto',
                        'none',
                        'manipulation'
                    ]
                }
            ],
            /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-x': [
                {
                    'touch-pan': [
                        'x',
                        'left',
                        'right'
                    ]
                }
            ],
            /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-y': [
                {
                    'touch-pan': [
                        'y',
                        'up',
                        'down'
                    ]
                }
            ],
            /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-pz': [
                'touch-pinch-zoom'
            ],
            /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */ select: [
                {
                    select: [
                        'none',
                        'text',
                        'all',
                        'auto'
                    ]
                }
            ],
            /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */ 'will-change': [
                {
                    'will-change': [
                        'auto',
                        'scroll',
                        'contents',
                        'transform',
                        isArbitraryValue
                    ]
                }
            ],
            // SVG
            /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */ fill: [
                {
                    fill: [
                        colors,
                        'none'
                    ]
                }
            ],
            /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */ 'stroke-w': [
                {
                    stroke: [
                        isLength,
                        isArbitraryLength,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */ stroke: [
                {
                    stroke: [
                        colors,
                        'none'
                    ]
                }
            ],
            // Accessibility
            /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */ sr: [
                'sr-only',
                'not-sr-only'
            ],
            /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */ 'forced-color-adjust': [
                {
                    'forced-color-adjust': [
                        'auto',
                        'none'
                    ]
                }
            ]
        },
        conflictingClassGroups: {
            overflow: [
                'overflow-x',
                'overflow-y'
            ],
            overscroll: [
                'overscroll-x',
                'overscroll-y'
            ],
            inset: [
                'inset-x',
                'inset-y',
                'start',
                'end',
                'top',
                'right',
                'bottom',
                'left'
            ],
            'inset-x': [
                'right',
                'left'
            ],
            'inset-y': [
                'top',
                'bottom'
            ],
            flex: [
                'basis',
                'grow',
                'shrink'
            ],
            gap: [
                'gap-x',
                'gap-y'
            ],
            p: [
                'px',
                'py',
                'ps',
                'pe',
                'pt',
                'pr',
                'pb',
                'pl'
            ],
            px: [
                'pr',
                'pl'
            ],
            py: [
                'pt',
                'pb'
            ],
            m: [
                'mx',
                'my',
                'ms',
                'me',
                'mt',
                'mr',
                'mb',
                'ml'
            ],
            mx: [
                'mr',
                'ml'
            ],
            my: [
                'mt',
                'mb'
            ],
            size: [
                'w',
                'h'
            ],
            'font-size': [
                'leading'
            ],
            'fvn-normal': [
                'fvn-ordinal',
                'fvn-slashed-zero',
                'fvn-figure',
                'fvn-spacing',
                'fvn-fraction'
            ],
            'fvn-ordinal': [
                'fvn-normal'
            ],
            'fvn-slashed-zero': [
                'fvn-normal'
            ],
            'fvn-figure': [
                'fvn-normal'
            ],
            'fvn-spacing': [
                'fvn-normal'
            ],
            'fvn-fraction': [
                'fvn-normal'
            ],
            'line-clamp': [
                'display',
                'overflow'
            ],
            rounded: [
                'rounded-s',
                'rounded-e',
                'rounded-t',
                'rounded-r',
                'rounded-b',
                'rounded-l',
                'rounded-ss',
                'rounded-se',
                'rounded-ee',
                'rounded-es',
                'rounded-tl',
                'rounded-tr',
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-s': [
                'rounded-ss',
                'rounded-es'
            ],
            'rounded-e': [
                'rounded-se',
                'rounded-ee'
            ],
            'rounded-t': [
                'rounded-tl',
                'rounded-tr'
            ],
            'rounded-r': [
                'rounded-tr',
                'rounded-br'
            ],
            'rounded-b': [
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-l': [
                'rounded-tl',
                'rounded-bl'
            ],
            'border-spacing': [
                'border-spacing-x',
                'border-spacing-y'
            ],
            'border-w': [
                'border-w-s',
                'border-w-e',
                'border-w-t',
                'border-w-r',
                'border-w-b',
                'border-w-l'
            ],
            'border-w-x': [
                'border-w-r',
                'border-w-l'
            ],
            'border-w-y': [
                'border-w-t',
                'border-w-b'
            ],
            'border-color': [
                'border-color-s',
                'border-color-e',
                'border-color-t',
                'border-color-r',
                'border-color-b',
                'border-color-l'
            ],
            'border-color-x': [
                'border-color-r',
                'border-color-l'
            ],
            'border-color-y': [
                'border-color-t',
                'border-color-b'
            ],
            'scroll-m': [
                'scroll-mx',
                'scroll-my',
                'scroll-ms',
                'scroll-me',
                'scroll-mt',
                'scroll-mr',
                'scroll-mb',
                'scroll-ml'
            ],
            'scroll-mx': [
                'scroll-mr',
                'scroll-ml'
            ],
            'scroll-my': [
                'scroll-mt',
                'scroll-mb'
            ],
            'scroll-p': [
                'scroll-px',
                'scroll-py',
                'scroll-ps',
                'scroll-pe',
                'scroll-pt',
                'scroll-pr',
                'scroll-pb',
                'scroll-pl'
            ],
            'scroll-px': [
                'scroll-pr',
                'scroll-pl'
            ],
            'scroll-py': [
                'scroll-pt',
                'scroll-pb'
            ],
            touch: [
                'touch-x',
                'touch-y',
                'touch-pz'
            ],
            'touch-x': [
                'touch'
            ],
            'touch-y': [
                'touch'
            ],
            'touch-pz': [
                'touch'
            ]
        },
        conflictingClassGroupModifiers: {
            'font-size': [
                'leading'
            ]
        }
    };
};
/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */ const mergeConfigs = (baseConfig, { cacheSize, prefix, separator, experimentalParseClassName, extend = {}, override = {} })=>{
    overrideProperty(baseConfig, 'cacheSize', cacheSize);
    overrideProperty(baseConfig, 'prefix', prefix);
    overrideProperty(baseConfig, 'separator', separator);
    overrideProperty(baseConfig, 'experimentalParseClassName', experimentalParseClassName);
    for(const configKey in override){
        overrideConfigProperties(baseConfig[configKey], override[configKey]);
    }
    for(const key in extend){
        mergeConfigProperties(baseConfig[key], extend[key]);
    }
    return baseConfig;
};
const overrideProperty = (baseObject, overrideKey, overrideValue)=>{
    if (overrideValue !== undefined) {
        baseObject[overrideKey] = overrideValue;
    }
};
const overrideConfigProperties = (baseObject, overrideObject)=>{
    if (overrideObject) {
        for(const key in overrideObject){
            overrideProperty(baseObject, key, overrideObject[key]);
        }
    }
};
const mergeConfigProperties = (baseObject, mergeObject)=>{
    if (mergeObject) {
        for(const key in mergeObject){
            const mergeValue = mergeObject[key];
            if (mergeValue !== undefined) {
                baseObject[key] = (baseObject[key] || []).concat(mergeValue);
            }
        }
    }
};
const extendTailwindMerge = (configExtension, ...createConfig)=>typeof configExtension === 'function' ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(()=>mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
const twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);
;
 //# sourceMappingURL=bundle-mjs.mjs.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+number@1.1.0/node_modules/@radix-ui/number/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/core/number/src/number.ts
__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
function clamp(value, [min, max]) {
    return Math.min(max, Math.max(min, value));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+primitive@1.1.1/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/core/primitive/src/primitive.tsx
__turbopack_context__.s([
    "composeEventHandlers",
    ()=>composeEventHandlers
]);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
        originalEventHandler?.(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) {
            return ourEventHandler?.(event);
        }
    };
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-context@1.1_88cce187a70e5166492f1ae6ab05d36b/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/context/src/createContext.tsx
__turbopack_context__.s([
    "createContext",
    ()=>createContext2,
    "createContextScope",
    ()=>createContextScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
function createContext2(rootComponentName, defaultContext) {
    const Context = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
    const Provider = (props)=>{
        const { children, ...context } = props;
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>context, Object.values(context));
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value,
            children
        });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName) {
        const context = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](Context);
        if (context) return context;
        if (defaultContext !== void 0) return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [
        Provider,
        useContext2
    ];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext3(rootComponentName, defaultContext) {
        const BaseContext = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = (props)=>{
            const { scope, children, ...context } = props;
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>context, Object.values(context));
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
                value,
                children
            });
        };
        Provider.displayName = rootComponentName + "Provider";
        function useContext2(consumerName, scope) {
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](Context);
            if (context) return context;
            if (defaultContext !== void 0) return defaultContext;
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        return [
            Provider,
            useContext2
        ];
    }
    const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        });
        return function useScope(scope) {
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
                    [`__scope${scopeName}`]: {
                        ...scope,
                        [scopeName]: contexts
                    }
                }), [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        createContext3,
        composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = ()=>{
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return function useComposedScopes(overrideScopes) {
            const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName })=>{
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, {});
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
                    [`__scope${baseScope.scopeName}`]: nextScopes
                }), [
                nextScopes
            ]);
        };
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-use-callbac_4d6c5c4efaca0d3a69705d78fa164487/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-callback-ref/src/useCallbackRef.tsx
__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useCallbackRef(callback) {
    const callbackRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](callback);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        callbackRef.current = callback;
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(...args)=>callbackRef.current?.(...args), []);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-use-control_f00bb4f5c1b5fb44e10c3440317ba2f6/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-controllable-state/src/useControllableState.tsx
__turbopack_context__.s([
    "useControllableState",
    ()=>useControllableState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_4d6c5c4efaca0d3a69705d78fa164487$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-use-callbac_4d6c5c4efaca0d3a69705d78fa164487/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
;
;
function useControllableState({ prop, defaultProp, onChange = ()=>{} }) {
    const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
        defaultProp,
        onChange
    });
    const isControlled = prop !== void 0;
    const value = isControlled ? prop : uncontrolledProp;
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_4d6c5c4efaca0d3a69705d78fa164487$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onChange);
    const setValue = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((nextValue)=>{
        if (isControlled) {
            const setter = nextValue;
            const value2 = typeof nextValue === "function" ? setter(prop) : nextValue;
            if (value2 !== prop) handleChange(value2);
        } else {
            setUncontrolledProp(nextValue);
        }
    }, [
        isControlled,
        prop,
        setUncontrolledProp,
        handleChange
    ]);
    return [
        value,
        setValue
    ];
}
function useUncontrolledState({ defaultProp, onChange }) {
    const uncontrolledState = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](value);
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_4d6c5c4efaca0d3a69705d78fa164487$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onChange);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (prevValueRef.current !== value) {
            handleChange(value);
            prevValueRef.current = value;
        }
    }, [
        value,
        prevValueRef,
        handleChange
    ]);
    return uncontrolledState;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-direction@1_b0bf9efd14898f7e8c57bcd3e76f6446/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/direction/src/Direction.tsx
__turbopack_context__.s([
    "DirectionProvider",
    ()=>DirectionProvider,
    "Provider",
    ()=>Provider,
    "useDirection",
    ()=>useDirection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
var DirectionContext = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](void 0);
var DirectionProvider = (props)=>{
    const { dir, children } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DirectionContext.Provider, {
        value: dir,
        children
    });
};
function useDirection(localDir) {
    const globalDir = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](DirectionContext);
    return localDir || globalDir || "ltr";
}
var Provider = DirectionProvider;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-use-previou_ed4d245b740cb5e4c0bdef21fe81b970/node_modules/@radix-ui/react-use-previous/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-previous/src/usePrevious.tsx
__turbopack_context__.s([
    "usePrevious",
    ()=>usePrevious
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function usePrevious(value) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]({
        value,
        previous: value
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (ref.current.value !== value) {
            ref.current.previous = ref.current.value;
            ref.current.value = value;
        }
        return ref.current.previous;
    }, [
        value
    ]);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-use-layout-_f9810f0c41fda93e666581f7e3be4a0e/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-layout-effect/src/useLayoutEffect.tsx
__turbopack_context__.s([
    "useLayoutEffect",
    ()=>useLayoutEffect2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var useLayoutEffect2 = Boolean(globalThis?.document) ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"] : ()=>{};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-use-size@1._afb71f3101c1b412d334b1841e05a832/node_modules/@radix-ui/react-use-size/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-size/src/useSize.tsx
__turbopack_context__.s([
    "useSize",
    ()=>useSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_f9810f0c41fda93e666581f7e3be4a0e$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-use-layout-_f9810f0c41fda93e666581f7e3be4a0e/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
;
;
function useSize(element) {
    const [size, setSize] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](void 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_f9810f0c41fda93e666581f7e3be4a0e$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (element) {
            setSize({
                width: element.offsetWidth,
                height: element.offsetHeight
            });
            const resizeObserver = new ResizeObserver((entries)=>{
                if (!Array.isArray(entries)) {
                    return;
                }
                if (!entries.length) {
                    return;
                }
                const entry = entries[0];
                let width;
                let height;
                if ("borderBoxSize" in entry) {
                    const borderSizeEntry = entry["borderBoxSize"];
                    const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
                    width = borderSize["inlineSize"];
                    height = borderSize["blockSize"];
                } else {
                    width = element.offsetWidth;
                    height = element.offsetHeight;
                }
                setSize({
                    width,
                    height
                });
            });
            resizeObserver.observe(element, {
                box: "border-box"
            });
            return ()=>resizeObserver.unobserve(element);
        } else {
            setSize(void 0);
        }
    }, [
        element
    ]);
    return size;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-primitive@2_dada66e1624d5ca0fc4e85c0f13e246b/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/primitive/src/Primitive.tsx
__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@19.2.7_react@19.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : node;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-collection@_1877836e0c774bb5579767fada183f64/node_modules/@radix-ui/react-collection/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCollection",
    ()=>createCollection
]);
// packages/react/collection/src/Collection.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$context$40$1$2e$1_88cce187a70e5166492f1ae6ab05d36b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-context@1.1_88cce187a70e5166492f1ae6ab05d36b/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-compose-ref_35cf6528c895778d9fc6596d488dfd70/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@19.2.7_react@19.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function createCollection(name) {
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$context$40$1$2e$1_88cce187a70e5166492f1ae6ab05d36b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
            current: null
        },
        itemMap: /* @__PURE__ */ new Map()
    });
    const CollectionProvider = (props)=>{
        const { scope, children } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const itemMap = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(/* @__PURE__ */ new Map()).current;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionProviderImpl, {
            scope,
            itemMap,
            collectionRef: ref,
            children
        });
    };
    CollectionProvider.displayName = PROVIDER_NAME;
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlot = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"], {
            ref: composedRefs,
            children
        });
    });
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlot = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
        const { scope, children, ...itemData } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
            context.itemMap.set(ref, {
                ref,
                ...itemData
            });
            return ()=>void context.itemMap.delete(ref);
        });
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"], {
            ...{
                [ITEM_DATA_ATTR]: ""
            },
            ref: composedRefs,
            children
        });
    });
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useCollection(scope) {
        const context = useCollectionContext(name + "CollectionConsumer", scope);
        const getItems = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>{
            const collectionNode = context.collectionRef.current;
            if (!collectionNode) return [];
            const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
            const items = Array.from(context.itemMap.values());
            const orderedItems = items.sort((a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current));
            return orderedItems;
        }, [
            context.collectionRef,
            context.itemMap
        ]);
        return getItems;
    }
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
    ];
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-slider@1.2._752defe9ebc58bbd475885926605221b/node_modules/@radix-ui/react-slider/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Range",
    ()=>Range,
    "Root",
    ()=>Root,
    "Slider",
    ()=>Slider,
    "SliderRange",
    ()=>SliderRange,
    "SliderThumb",
    ()=>SliderThumb,
    "SliderTrack",
    ()=>SliderTrack,
    "Thumb",
    ()=>Thumb,
    "Track",
    ()=>Track,
    "createSliderScope",
    ()=>createSliderScope
]);
// packages/react/slider/src/Slider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$number$40$1$2e$1$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+number@1.1.0/node_modules/@radix-ui/number/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+primitive@1.1.1/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-compose-ref_35cf6528c895778d9fc6596d488dfd70/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$context$40$1$2e$1_88cce187a70e5166492f1ae6ab05d36b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-context@1.1_88cce187a70e5166492f1ae6ab05d36b/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$control_f00bb4f5c1b5fb44e10c3440317ba2f6$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-use-control_f00bb4f5c1b5fb44e10c3440317ba2f6/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$direction$40$1_b0bf9efd14898f7e8c57bcd3e76f6446$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-direction@1_b0bf9efd14898f7e8c57bcd3e76f6446/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$previou_ed4d245b740cb5e4c0bdef21fe81b970$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$previous$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-use-previou_ed4d245b740cb5e4c0bdef21fe81b970/node_modules/@radix-ui/react-use-previous/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$size$40$1$2e$_afb71f3101c1b412d334b1841e05a832$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-use-size@1._afb71f3101c1b412d334b1841e05a832/node_modules/@radix-ui/react-use-size/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_dada66e1624d5ca0fc4e85c0f13e246b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-primitive@2_dada66e1624d5ca0fc4e85c0f13e246b/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$collection$40$_1877836e0c774bb5579767fada183f64$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/@radix-ui+react-collection@_1877836e0c774bb5579767fada183f64/node_modules/@radix-ui/react-collection/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/ray-sim/RayCatcher-Simulator/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_bee0859f7711b6a89d6d3b28e5ff59fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
var PAGE_KEYS = [
    "PageUp",
    "PageDown"
];
var ARROW_KEYS = [
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight"
];
var BACK_KEYS = {
    "from-left": [
        "Home",
        "PageDown",
        "ArrowDown",
        "ArrowLeft"
    ],
    "from-right": [
        "Home",
        "PageDown",
        "ArrowDown",
        "ArrowRight"
    ],
    "from-bottom": [
        "Home",
        "PageDown",
        "ArrowDown",
        "ArrowLeft"
    ],
    "from-top": [
        "Home",
        "PageDown",
        "ArrowUp",
        "ArrowLeft"
    ]
};
var SLIDER_NAME = "Slider";
var [Collection, useCollection, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$collection$40$_1877836e0c774bb5579767fada183f64$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCollection"])(SLIDER_NAME);
var [createSliderContext, createSliderScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$context$40$1$2e$1_88cce187a70e5166492f1ae6ab05d36b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(SLIDER_NAME, [
    createCollectionScope
]);
var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
var Slider = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { name, min = 0, max = 100, step = 1, orientation = "horizontal", disabled = false, minStepsBetweenThumbs = 0, defaultValue = [
        min
    ], value, onValueChange = ()=>{}, onValueCommit = ()=>{}, inverted = false, form, ...sliderProps } = props;
    const thumbRefs = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](/* @__PURE__ */ new Set());
    const valueIndexToChangeRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const isHorizontal = orientation === "horizontal";
    const SliderOrientation = isHorizontal ? SliderHorizontal : SliderVertical;
    const [values = [], setValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$control_f00bb4f5c1b5fb44e10c3440317ba2f6$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: value,
        defaultProp: defaultValue,
        onChange: (value2)=>{
            const thumbs = [
                ...thumbRefs.current
            ];
            thumbs[valueIndexToChangeRef.current]?.focus();
            onValueChange(value2);
        }
    });
    const valuesBeforeSlideStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](values);
    function handleSlideStart(value2) {
        const closestIndex = getClosestValueIndex(values, value2);
        updateValues(value2, closestIndex);
    }
    function handleSlideMove(value2) {
        updateValues(value2, valueIndexToChangeRef.current);
    }
    function handleSlideEnd() {
        const prevValue = valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];
        const nextValue = values[valueIndexToChangeRef.current];
        const hasChanged = nextValue !== prevValue;
        if (hasChanged) onValueCommit(values);
    }
    function updateValues(value2, atIndex, { commit } = {
        commit: false
    }) {
        const decimalCount = getDecimalCount(step);
        const snapToStep = roundValue(Math.round((value2 - min) / step) * step + min, decimalCount);
        const nextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$number$40$1$2e$1$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(snapToStep, [
            min,
            max
        ]);
        setValues((prevValues = [])=>{
            const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
            if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
                valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
                const hasChanged = String(nextValues) !== String(prevValues);
                if (hasChanged && commit) onValueCommit(nextValues);
                return hasChanged ? nextValues : prevValues;
            } else {
                return prevValues;
            }
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SliderProvider, {
        scope: props.__scopeSlider,
        name,
        disabled,
        min,
        max,
        valueIndexToChangeRef,
        thumbs: thumbRefs.current,
        values,
        orientation,
        form,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
            scope: props.__scopeSlider,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
                scope: props.__scopeSlider,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SliderOrientation, {
                    "aria-disabled": disabled,
                    "data-disabled": disabled ? "" : void 0,
                    ...sliderProps,
                    ref: forwardedRef,
                    onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(sliderProps.onPointerDown, ()=>{
                        if (!disabled) valuesBeforeSlideStartRef.current = values;
                    }),
                    min,
                    max,
                    inverted,
                    onSlideStart: disabled ? void 0 : handleSlideStart,
                    onSlideMove: disabled ? void 0 : handleSlideMove,
                    onSlideEnd: disabled ? void 0 : handleSlideEnd,
                    onHomeKeyDown: ()=>!disabled && updateValues(min, 0, {
                            commit: true
                        }),
                    onEndKeyDown: ()=>!disabled && updateValues(max, values.length - 1, {
                            commit: true
                        }),
                    onStepKeyDown: ({ event, direction: stepDirection })=>{
                        if (!disabled) {
                            const isPageKey = PAGE_KEYS.includes(event.key);
                            const isSkipKey = isPageKey || event.shiftKey && ARROW_KEYS.includes(event.key);
                            const multiplier = isSkipKey ? 10 : 1;
                            const atIndex = valueIndexToChangeRef.current;
                            const value2 = values[atIndex];
                            const stepInDirection = step * multiplier * stepDirection;
                            updateValues(value2 + stepInDirection, atIndex, {
                                commit: true
                            });
                        }
                    }
                })
            })
        })
    });
});
Slider.displayName = SLIDER_NAME;
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
    startEdge: "left",
    endEdge: "right",
    size: "width",
    direction: 1
});
var SliderHorizontal = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { min, max, dir, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
    const [slider, setSlider] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setSlider(node));
    const rectRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](void 0);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$direction$40$1_b0bf9efd14898f7e8c57bcd3e76f6446$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    const isDirectionLTR = direction === "ltr";
    const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
    function getValueFromPointer(pointerPosition) {
        const rect = rectRef.current || slider.getBoundingClientRect();
        const input = [
            0,
            rect.width
        ];
        const output = isSlidingFromLeft ? [
            min,
            max
        ] : [
            max,
            min
        ];
        const value = linearScale(input, output);
        rectRef.current = rect;
        return value(pointerPosition - rect.left);
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SliderOrientationProvider, {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromLeft ? "left" : "right",
        endEdge: isSlidingFromLeft ? "right" : "left",
        direction: isSlidingFromLeft ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SliderImpl, {
            dir: direction,
            "data-orientation": "horizontal",
            ...sliderProps,
            ref: composedRefs,
            style: {
                ...sliderProps.style,
                ["--radix-slider-thumb-transform"]: "translateX(-50%)"
            },
            onSlideStart: (event)=>{
                const value = getValueFromPointer(event.clientX);
                onSlideStart?.(value);
            },
            onSlideMove: (event)=>{
                const value = getValueFromPointer(event.clientX);
                onSlideMove?.(value);
            },
            onSlideEnd: ()=>{
                rectRef.current = void 0;
                onSlideEnd?.();
            },
            onStepKeyDown: (event)=>{
                const slideDirection = isSlidingFromLeft ? "from-left" : "from-right";
                const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
                onStepKeyDown?.({
                    event,
                    direction: isBackKey ? -1 : 1
                });
            }
        })
    });
});
var SliderVertical = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { min, max, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
    const sliderRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, sliderRef);
    const rectRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](void 0);
    const isSlidingFromBottom = !inverted;
    function getValueFromPointer(pointerPosition) {
        const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
        const input = [
            0,
            rect.height
        ];
        const output = isSlidingFromBottom ? [
            max,
            min
        ] : [
            min,
            max
        ];
        const value = linearScale(input, output);
        rectRef.current = rect;
        return value(pointerPosition - rect.top);
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SliderOrientationProvider, {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromBottom ? "bottom" : "top",
        endEdge: isSlidingFromBottom ? "top" : "bottom",
        size: "height",
        direction: isSlidingFromBottom ? 1 : -1,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SliderImpl, {
            "data-orientation": "vertical",
            ...sliderProps,
            ref,
            style: {
                ...sliderProps.style,
                ["--radix-slider-thumb-transform"]: "translateY(50%)"
            },
            onSlideStart: (event)=>{
                const value = getValueFromPointer(event.clientY);
                onSlideStart?.(value);
            },
            onSlideMove: (event)=>{
                const value = getValueFromPointer(event.clientY);
                onSlideMove?.(value);
            },
            onSlideEnd: ()=>{
                rectRef.current = void 0;
                onSlideEnd?.();
            },
            onStepKeyDown: (event)=>{
                const slideDirection = isSlidingFromBottom ? "from-bottom" : "from-top";
                const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
                onStepKeyDown?.({
                    event,
                    direction: isBackKey ? -1 : 1
                });
            }
        })
    });
});
var SliderImpl = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSlider, onSlideStart, onSlideMove, onSlideEnd, onHomeKeyDown, onEndKeyDown, onStepKeyDown, ...sliderProps } = props;
    const context = useSliderContext(SLIDER_NAME, __scopeSlider);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_dada66e1624d5ca0fc4e85c0f13e246b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
        ...sliderProps,
        ref: forwardedRef,
        onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
            if (event.key === "Home") {
                onHomeKeyDown(event);
                event.preventDefault();
            } else if (event.key === "End") {
                onEndKeyDown(event);
                event.preventDefault();
            } else if (PAGE_KEYS.concat(ARROW_KEYS).includes(event.key)) {
                onStepKeyDown(event);
                event.preventDefault();
            }
        }),
        onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDown, (event)=>{
            const target = event.target;
            target.setPointerCapture(event.pointerId);
            event.preventDefault();
            if (context.thumbs.has(target)) {
                target.focus();
            } else {
                onSlideStart(event);
            }
        }),
        onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, (event)=>{
            const target = event.target;
            if (target.hasPointerCapture(event.pointerId)) onSlideMove(event);
        }),
        onPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerUp, (event)=>{
            const target = event.target;
            if (target.hasPointerCapture(event.pointerId)) {
                target.releasePointerCapture(event.pointerId);
                onSlideEnd(event);
            }
        })
    });
});
var TRACK_NAME = "SliderTrack";
var SliderTrack = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSlider, ...trackProps } = props;
    const context = useSliderContext(TRACK_NAME, __scopeSlider);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_dada66e1624d5ca0fc4e85c0f13e246b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
        "data-disabled": context.disabled ? "" : void 0,
        "data-orientation": context.orientation,
        ...trackProps,
        ref: forwardedRef
    });
});
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderRange";
var SliderRange = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSlider, ...rangeProps } = props;
    const context = useSliderContext(RANGE_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const valuesCount = context.values.length;
    const percentages = context.values.map((value)=>convertValueToPercentage(value, context.min, context.max));
    const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
    const offsetEnd = 100 - Math.max(...percentages);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_dada66e1624d5ca0fc4e85c0f13e246b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
        "data-orientation": context.orientation,
        "data-disabled": context.disabled ? "" : void 0,
        ...rangeProps,
        ref: composedRefs,
        style: {
            ...props.style,
            [orientation.startEdge]: offsetStart + "%",
            [orientation.endEdge]: offsetEnd + "%"
        }
    });
});
SliderRange.displayName = RANGE_NAME;
var THUMB_NAME = "SliderThumb";
var SliderThumb = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const getItems = useCollection(props.__scopeSlider);
    const [thumb, setThumb] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setThumb(node));
    const index = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>thumb ? getItems().findIndex((item)=>item.ref.current === thumb) : -1, [
        getItems,
        thumb
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SliderThumbImpl, {
        ...props,
        ref: composedRefs,
        index
    });
});
var SliderThumbImpl = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSlider, index, name, ...thumbProps } = props;
    const context = useSliderContext(THUMB_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(THUMB_NAME, __scopeSlider);
    const [thumb, setThumb] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setThumb(node));
    const isFormControl = thumb ? context.form || !!thumb.closest("form") : true;
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$size$40$1$2e$_afb71f3101c1b412d334b1841e05a832$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSize"])(thumb);
    const value = context.values[index];
    const percent = value === void 0 ? 0 : convertValueToPercentage(value, context.min, context.max);
    const label = getLabel(index, context.values.length);
    const orientationSize = size?.[orientation.size];
    const thumbInBoundsOffset = orientationSize ? getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (thumb) {
            context.thumbs.add(thumb);
            return ()=>{
                context.thumbs.delete(thumb);
            };
        }
    }, [
        thumb,
        context.thumbs
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
        style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
        },
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.ItemSlot, {
                scope: props.__scopeSlider,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_dada66e1624d5ca0fc4e85c0f13e246b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
                    role: "slider",
                    "aria-label": props["aria-label"] || label,
                    "aria-valuemin": context.min,
                    "aria-valuenow": value,
                    "aria-valuemax": context.max,
                    "aria-orientation": context.orientation,
                    "data-orientation": context.orientation,
                    "data-disabled": context.disabled ? "" : void 0,
                    tabIndex: context.disabled ? void 0 : 0,
                    ...thumbProps,
                    ref: composedRefs,
                    style: value === void 0 ? {
                        display: "none"
                    } : props.style,
                    onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, ()=>{
                        context.valueIndexToChangeRef.current = index;
                    })
                })
            }),
            isFormControl && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(BubbleInput, {
                name: name ?? (context.name ? context.name + (context.values.length > 1 ? "[]" : "") : void 0),
                form: context.form,
                value
            }, index)
        ]
    });
});
SliderThumb.displayName = THUMB_NAME;
var BubbleInput = (props)=>{
    const { value, ...inputProps } = props;
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const prevValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$previou_ed4d245b740cb5e4c0bdef21fe81b970$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$previous$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePrevious"])(value);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, "value");
        const setValue = descriptor.set;
        if (prevValue !== value && setValue) {
            const event = new Event("input", {
                bubbles: true
            });
            setValue.call(input, value);
            input.dispatchEvent(event);
        }
    }, [
        prevValue,
        value
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_bee0859f7711b6a89d6d3b28e5ff59fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
        style: {
            display: "none"
        },
        ...inputProps,
        ref,
        defaultValue: value
    });
};
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
    const nextValues = [
        ...prevValues
    ];
    nextValues[atIndex] = nextValue;
    return nextValues.sort((a, b)=>a - b);
}
function convertValueToPercentage(value, min, max) {
    const maxSteps = max - min;
    const percentPerStep = 100 / maxSteps;
    const percentage = percentPerStep * (value - min);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$ray$2d$sim$2f$RayCatcher$2d$Simulator$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$number$40$1$2e$1$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(percentage, [
        0,
        100
    ]);
}
function getLabel(index, totalValues) {
    if (totalValues > 2) {
        return `Value ${index + 1} of ${totalValues}`;
    } else if (totalValues === 2) {
        return [
            "Minimum",
            "Maximum"
        ][index];
    } else {
        return void 0;
    }
}
function getClosestValueIndex(values, nextValue) {
    if (values.length === 1) return 0;
    const distances = values.map((value)=>Math.abs(value - nextValue));
    const closestDistance = Math.min(...distances);
    return distances.indexOf(closestDistance);
}
function getThumbInBoundsOffset(width, left, direction) {
    const halfWidth = width / 2;
    const halfPercent = 50;
    const offset = linearScale([
        0,
        halfPercent
    ], [
        0,
        halfWidth
    ]);
    return (halfWidth - offset(left) * direction) * direction;
}
function getStepsBetweenValues(values) {
    return values.slice(0, -1).map((value, index)=>values[index + 1] - value);
}
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
    if (minStepsBetweenValues > 0) {
        const stepsBetweenValues = getStepsBetweenValues(values);
        const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
        return actualMinStepsBetweenValues >= minStepsBetweenValues;
    }
    return true;
}
function linearScale(input, output) {
    return (value)=>{
        if (input[0] === input[1] || output[0] === output[1]) return output[0];
        const ratio = (output[1] - output[0]) / (input[1] - input[0]);
        return output[0] + ratio * (value - input[0]);
    };
}
function getDecimalCount(value) {
    return (String(value).split(".")[1] || "").length;
}
function roundValue(value, decimalCount) {
    const rounder = Math.pow(10, decimalCount);
    return Math.round(value * rounder) / rounder;
}
var Root = Slider;
var Track = SliderTrack;
var Range = SliderRange;
var Thumb = SliderThumb;
;
 //# sourceMappingURL=index.mjs.map
}),
];

//# sourceMappingURL=ded83__pnpm_a8b388f8._.js.map