"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst inputElement = ()=>{\n    const { 0: inputText , 1: setInputText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: historyList , 1: setHistoryList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const random_boolean = Math.random() >= 0.5;\n    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(random_boolean === true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>{\n            setIsLoading(false);\n        }, 2000);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Johnny\\\\Desktop\\\\reactHooks\\\\pages\\\\index.js\",\n            lineNumber: 18,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                onChange: (e)=>{\n                    setInputText(e.target.value);\n                    setHistoryList([\n                        ...historyList,\n                        e.target.value\n                    ]);\n                },\n                placeholder: \"Enter some Text\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Johnny\\\\Desktop\\\\reactHooks\\\\pages\\\\index.js\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Johnny\\\\Desktop\\\\reactHooks\\\\pages\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: undefined\n            }),\n            inputText,\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"hr\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Johnny\\\\Desktop\\\\reactHooks\\\\pages\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Johnny\\\\Desktop\\\\reactHooks\\\\pages\\\\index.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Johnny\\\\Desktop\\\\reactHooks\\\\pages\\\\index.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: historyList.map((rec)=>{\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Johnny\\\\Desktop\\\\reactHooks\\\\pages\\\\index.js\",\n                            lineNumber: 32,\n                            columnNumber: 18\n                        },\n                        __self: undefined,\n                        children: rec\n                    }));\n                })\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputElement);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0Q7QUFFbEQsS0FBSyxDQUFDRyxZQUFZLE9BQVMsQ0FBQztJQUMxQixLQUFLLE1BQUVDLFNBQVMsTUFBRUMsWUFBWSxNQUFJSCwrQ0FBUSxDQUFDLENBQUU7SUFDN0MsS0FBSyxNQUFFSSxXQUFXLE1BQUVDLGNBQWMsTUFBSUwsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFFakQsS0FBSyxDQUFDTSxjQUFjLEdBQUdDLElBQUksQ0FBQ0MsTUFBTSxNQUFNLEdBQUc7SUFDM0MsS0FBSyxNQUFHQyxTQUFTLE1BQUVDLFlBQVksTUFBS1YsK0NBQVEsQ0FBQ00sY0FBYyxLQUFLLElBQUk7SUFHcEVQLGdEQUFTLEtBQU8sQ0FBQztRQUNiWSxVQUFVLEtBQU8sQ0FBQztZQUNkRCxZQUFZLENBQUMsS0FBSztRQUN0QixDQUFDLEVBQUUsSUFBSTtJQUNYLENBQUM7SUFFRCxNQUFNLHVFQUNIRSxDQUFHOzs7Ozs7OztpRkFDREMsQ0FBSztnQkFDSkMsUUFBUSxHQUFHQyxDQUFDLEdBQUssQ0FBQztvQkFDaEJaLFlBQVksQ0FBQ1ksQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7b0JBQzNCWixjQUFjLENBQUMsQ0FBQzsyQkFBR0QsV0FBVzt3QkFBRVcsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7b0JBQUEsQ0FBQztnQkFDakQsQ0FBQztnQkFDREMsV0FBVyxFQUFDLENBQWlCOzs7Ozs7OztpRkFFOUJDLENBQUU7Ozs7Ozs7O1lBQ0ZqQixTQUFTO2lGQUNUa0IsQ0FBRTs7Ozs7Ozs7aUZBQ0ZELENBQUU7Ozs7Ozs7O2lGQUNGRSxDQUFFOzs7Ozs7OzBCQUNBakIsV0FBVyxDQUFDa0IsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztvQkFDekIsTUFBTSxzRUFBRVgsQ0FBRzs7Ozs7OztrQ0FBRVcsR0FBRzs7Z0JBQ2xCLENBQUM7Ozs7QUFJVCxDQUFDO0FBRUQsaUVBQWV0QixZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdEhvb2tzLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgaW5wdXRFbGVtZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaGlzdG9yeUxpc3QsIHNldEhpc3RvcnlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgcmFuZG9tX2Jvb2xlYW4gPSBNYXRoLnJhbmRvbSgpID49IDAuNVxyXG4gIGNvbnN0IFsgaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmcgXSA9IHVzZVN0YXRlKHJhbmRvbV9ib29sZWFuID09PSB0cnVlKTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9LCAyMDAwKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIHNldElucHV0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICBzZXRIaXN0b3J5TGlzdChbLi4uaGlzdG9yeUxpc3QsIGUudGFyZ2V0LnZhbHVlXSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHNvbWUgVGV4dFwiXHJcbiAgICAgID48L2lucHV0PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAge2lucHV0VGV4dH1cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2hpc3RvcnlMaXN0Lm1hcCgocmVjKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPGRpdj57cmVjfTwvZGl2PjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnB1dEVsZW1lbnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW5wdXRFbGVtZW50IiwiaW5wdXRUZXh0Iiwic2V0SW5wdXRUZXh0IiwiaGlzdG9yeUxpc3QiLCJzZXRIaXN0b3J5TGlzdCIsInJhbmRvbV9ib29sZWFuIiwiTWF0aCIsInJhbmRvbSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNldFRpbWVvdXQiLCJkaXYiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJiciIsImhyIiwidWwiLCJtYXAiLCJyZWMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();