"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar inputElement = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), inputText = ref[0], setInputText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), historyList = ref1[0], setHistoryList = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Johnny\\\\Desktop\\\\reactHooks\\\\pages\\\\index.js\",\n            lineNumber: 7,\n            columnNumber: 10\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                onChange: function(e) {\n                    setInputText(e.target.value);\n                    setHistoryList(_toConsumableArray(historyList).concat([\n                        e.target.value\n                    ]));\n                },\n                placeholder: \"Enter some Text\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Johnny\\\\Desktop\\\\reactHooks\\\\pages\\\\index.js\",\n                    lineNumber: 7,\n                    columnNumber: 15\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Johnny\\\\Desktop\\\\reactHooks\\\\pages\\\\index.js\",\n                    lineNumber: 11,\n                    columnNumber: 4\n                },\n                __self: _this\n            }),\n            inputText,\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"hr\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Johnny\\\\Desktop\\\\reactHooks\\\\pages\\\\index.js\",\n                    lineNumber: 13,\n                    columnNumber: 3\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Johnny\\\\Desktop\\\\reactHooks\\\\pages\\\\index.js\",\n                    lineNumber: 13,\n                    columnNumber: 8\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Johnny\\\\Desktop\\\\reactHooks\\\\pages\\\\index.js\",\n                    lineNumber: 14,\n                    columnNumber: 3\n                },\n                __self: _this,\n                children: historyList.map(function(rec) {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Johnny\\\\Desktop\\\\reactHooks\\\\pages\\\\index.js\",\n                            lineNumber: 16,\n                            columnNumber: 16\n                        },\n                        __self: _this1,\n                        children: rec\n                    }));\n                })\n            }),\n            historyList\n        ]\n    }));\n};\n_s(inputElement, \"/YxVmfZku2946ChKMnddCR+VCYM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (inputElement);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxHQUFLLENBQUNFLFlBQVksR0FBRyxRQUFRLEdBQUYsQ0FBQzs7O0lBQzFCLEdBQUssQ0FBNkJELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQXRDRSxTQUFTLEdBQWtCRixHQUFZLEtBQTVCRyxZQUFZLEdBQUlILEdBQVk7SUFDOUMsR0FBSyxDQUFpQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUExQ0ksV0FBVyxHQUFvQkosSUFBWSxLQUE5QkssY0FBYyxHQUFJTCxJQUFZO0lBRWxELE1BQU0sdUVBQUVNLENBQUc7Ozs7Ozs7O2lGQUFFQyxDQUFLO2dCQUFDQyxRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztvQkFDakNOLFlBQVksQ0FBQ00sQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7b0JBQzNCTixjQUFjLG9CQUFLRCxXQUFXLFNBQWYsQ0FBQzt3QkFBZ0JLLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO29CQUFBLENBQUM7Z0JBQ25ELENBQUM7Z0JBQUVDLFdBQVcsRUFBQyxDQUFpQjs7Ozs7Ozs7aUZBQzlCQyxDQUFFOzs7Ozs7OztZQUNIWCxTQUFTO2lGQUNUWSxDQUFFOzs7Ozs7OztpRkFBR0QsQ0FBRTs7Ozs7Ozs7aUZBQ1BFLENBQUU7Ozs7Ozs7MEJBQ0FYLFdBQVcsQ0FBQ1ksR0FBRyxDQUFDLFFBQVEsQ0FBUEMsR0FBRyxFQUFLLENBQUM7b0JBQ3ZCLE1BQU0sc0VBQUVYLENBQUc7Ozs7Ozs7a0NBQUVXLEdBQUc7O2dCQUNwQixDQUFDOztZQUVGYixXQUFXOzs7QUFFZCxDQUFDO0dBbEJLSCxZQUFZO0FBb0JsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBpbnB1dEVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lucHV0VGV4dCwgc2V0SW5wdXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtoaXN0b3J5TGlzdCwgc2V0SGlzdG9yeUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICByZXR1cm4gPGRpdj48aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgIHNldElucHV0VGV4dChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgc2V0SGlzdG9yeUxpc3QoWy4uLmhpc3RvcnlMaXN0LCBlLnRhcmdldC52YWx1ZV0pXHJcbiAgfX0gcGxhY2Vob2xkZXI9XCJFbnRlciBzb21lIFRleHRcIj48L2lucHV0PlxyXG4gICA8YnIvPlxyXG4gIHtpbnB1dFRleHR9XHJcbiAgPGhyLz48YnIvPlxyXG4gIDx1bD5cclxuICAgIHtoaXN0b3J5TGlzdC5tYXAoKHJlYykgPT4ge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PntyZWN9PC9kaXY+XHJcbiAgICB9ICl9XHJcbiAgPC91bD5cclxuICB7aGlzdG9yeUxpc3R9XHJcbiAgPC9kaXY+XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnB1dEVsZW1lbnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiaW5wdXRFbGVtZW50IiwiaW5wdXRUZXh0Iiwic2V0SW5wdXRUZXh0IiwiaGlzdG9yeUxpc3QiLCJzZXRIaXN0b3J5TGlzdCIsImRpdiIsImlucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImJyIiwiaHIiLCJ1bCIsIm1hcCIsInJlYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});