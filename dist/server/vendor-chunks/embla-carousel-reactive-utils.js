"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/embla-carousel-reactive-utils";
exports.ids = ["vendor-chunks/embla-carousel-reactive-utils"];
exports.modules = {

/***/ "(ssr)/./node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   areOptionsEqual: () => (/* binding */ areOptionsEqual),\n/* harmony export */   arePluginsEqual: () => (/* binding */ arePluginsEqual),\n/* harmony export */   canUseDOM: () => (/* binding */ canUseDOM),\n/* harmony export */   sortAndMapPluginToOptions: () => (/* binding */ sortAndMapPluginToOptions)\n/* harmony export */ });\nfunction isObject(subject) {\n  return Object.prototype.toString.call(subject) === '[object Object]';\n}\nfunction isRecord(subject) {\n  return isObject(subject) || Array.isArray(subject);\n}\nfunction canUseDOM() {\n  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);\n}\nfunction areOptionsEqual(optionsA, optionsB) {\n  const optionsAKeys = Object.keys(optionsA);\n  const optionsBKeys = Object.keys(optionsB);\n  if (optionsAKeys.length !== optionsBKeys.length) return false;\n  const breakpointsA = JSON.stringify(Object.keys(optionsA.breakpoints || {}));\n  const breakpointsB = JSON.stringify(Object.keys(optionsB.breakpoints || {}));\n  if (breakpointsA !== breakpointsB) return false;\n  return optionsAKeys.every(key => {\n    const valueA = optionsA[key];\n    const valueB = optionsB[key];\n    if (typeof valueA === 'function') return `${valueA}` === `${valueB}`;\n    if (!isRecord(valueA) || !isRecord(valueB)) return valueA === valueB;\n    return areOptionsEqual(valueA, valueB);\n  });\n}\nfunction sortAndMapPluginToOptions(plugins) {\n  return plugins.concat().sort((a, b) => a.name > b.name ? 1 : -1).map(plugin => plugin.options);\n}\nfunction arePluginsEqual(pluginsA, pluginsB) {\n  if (pluginsA.length !== pluginsB.length) return false;\n  const optionsA = sortAndMapPluginToOptions(pluginsA);\n  const optionsB = sortAndMapPluginToOptions(pluginsB);\n  return optionsA.every((optionA, index) => {\n    const optionB = optionsB[index];\n    return areOptionsEqual(optionA, optionB);\n  });\n}\n\n\n//# sourceMappingURL=embla-carousel-reactive-utils.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwtcmVhY3RpdmUtdXRpbHMvZXNtL2VtYmxhLWNhcm91c2VsLXJlYWN0aXZlLXV0aWxzLmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUUsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU8sU0FBUyxPQUFPO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFa0Y7QUFDbEYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9neW1yYXRhcHAvLi9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwtcmVhY3RpdmUtdXRpbHMvZXNtL2VtYmxhLWNhcm91c2VsLXJlYWN0aXZlLXV0aWxzLmVzbS5qcz8yZTBmIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGlzT2JqZWN0KHN1YmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzdWJqZWN0KSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5mdW5jdGlvbiBpc1JlY29yZChzdWJqZWN0KSB7XG4gIHJldHVybiBpc09iamVjdChzdWJqZWN0KSB8fCBBcnJheS5pc0FycmF5KHN1YmplY3QpO1xufVxuZnVuY3Rpb24gY2FuVXNlRE9NKCkge1xuICByZXR1cm4gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGFyZU9wdGlvbnNFcXVhbChvcHRpb25zQSwgb3B0aW9uc0IpIHtcbiAgY29uc3Qgb3B0aW9uc0FLZXlzID0gT2JqZWN0LmtleXMob3B0aW9uc0EpO1xuICBjb25zdCBvcHRpb25zQktleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zQik7XG4gIGlmIChvcHRpb25zQUtleXMubGVuZ3RoICE9PSBvcHRpb25zQktleXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGJyZWFrcG9pbnRzQSA9IEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKG9wdGlvbnNBLmJyZWFrcG9pbnRzIHx8IHt9KSk7XG4gIGNvbnN0IGJyZWFrcG9pbnRzQiA9IEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKG9wdGlvbnNCLmJyZWFrcG9pbnRzIHx8IHt9KSk7XG4gIGlmIChicmVha3BvaW50c0EgIT09IGJyZWFrcG9pbnRzQikgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gb3B0aW9uc0FLZXlzLmV2ZXJ5KGtleSA9PiB7XG4gICAgY29uc3QgdmFsdWVBID0gb3B0aW9uc0Fba2V5XTtcbiAgICBjb25zdCB2YWx1ZUIgPSBvcHRpb25zQltrZXldO1xuICAgIGlmICh0eXBlb2YgdmFsdWVBID09PSAnZnVuY3Rpb24nKSByZXR1cm4gYCR7dmFsdWVBfWAgPT09IGAke3ZhbHVlQn1gO1xuICAgIGlmICghaXNSZWNvcmQodmFsdWVBKSB8fCAhaXNSZWNvcmQodmFsdWVCKSkgcmV0dXJuIHZhbHVlQSA9PT0gdmFsdWVCO1xuICAgIHJldHVybiBhcmVPcHRpb25zRXF1YWwodmFsdWVBLCB2YWx1ZUIpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNvcnRBbmRNYXBQbHVnaW5Ub09wdGlvbnMocGx1Z2lucykge1xuICByZXR1cm4gcGx1Z2lucy5jb25jYXQoKS5zb3J0KChhLCBiKSA9PiBhLm5hbWUgPiBiLm5hbWUgPyAxIDogLTEpLm1hcChwbHVnaW4gPT4gcGx1Z2luLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gYXJlUGx1Z2luc0VxdWFsKHBsdWdpbnNBLCBwbHVnaW5zQikge1xuICBpZiAocGx1Z2luc0EubGVuZ3RoICE9PSBwbHVnaW5zQi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgY29uc3Qgb3B0aW9uc0EgPSBzb3J0QW5kTWFwUGx1Z2luVG9PcHRpb25zKHBsdWdpbnNBKTtcbiAgY29uc3Qgb3B0aW9uc0IgPSBzb3J0QW5kTWFwUGx1Z2luVG9PcHRpb25zKHBsdWdpbnNCKTtcbiAgcmV0dXJuIG9wdGlvbnNBLmV2ZXJ5KChvcHRpb25BLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbkIgPSBvcHRpb25zQltpbmRleF07XG4gICAgcmV0dXJuIGFyZU9wdGlvbnNFcXVhbChvcHRpb25BLCBvcHRpb25CKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGFyZU9wdGlvbnNFcXVhbCwgYXJlUGx1Z2luc0VxdWFsLCBjYW5Vc2VET00sIHNvcnRBbmRNYXBQbHVnaW5Ub09wdGlvbnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVtYmxhLWNhcm91c2VsLXJlYWN0aXZlLXV0aWxzLmVzbS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js\n");

/***/ })

};
;