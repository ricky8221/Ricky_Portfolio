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

/***/ "./components/Hero.tsx":
/*!*****************************!*\
  !*** ./components/Hero.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-simple-typewriter */ \"./node_modules/react-simple-typewriter/dist/index.js\");\n/* harmony import */ var _BackgroundCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackgroundCircle */ \"./components/BackgroundCircle.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Hero(param) {\n    let {} = param;\n    _s();\n    const [text, count] = (0,react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__.useTypewriter)({\n        words: [\n            \"Hi! My name is Ricky Chen\",\n            \"Guy who love Next.js & TypeScript\",\n            \"<And always ready for the next challenge!!!/>\"\n        ],\n        loop: true,\n        delaySpeed: 2000\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen flex flex-col space-y-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BackgroundCircle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Rickychen/Documents/Coding/project/Ricky_Portfolio/components/Hero.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-5xl\",\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"/Users/Rickychen/Documents/Coding/project/Ricky_Portfolio/components/Hero.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__.Cursor, {\n                        cursorColor: \"#F7AB0A\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Rickychen/Documents/Coding/project/Ricky_Portfolio/components/Hero.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Rickychen/Documents/Coding/project/Ricky_Portfolio/components/Hero.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Rickychen/Documents/Coding/project/Ricky_Portfolio/components/Hero.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Hero, \"5sW9Ip2qqu+oy/44fHx9diYcHGg=\", false, function() {\n    return [\n        react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__.useTypewriter\n    ];\n});\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm8udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNrRDtBQUMxQjtBQUtsQyxTQUFTSSxLQUFLLEtBQVMsRUFBRTtRQUFYLEVBQVMsR0FBVDs7SUFDekIsTUFBTSxDQUFDQyxNQUFNQyxNQUFNLEdBQUdKLHNFQUFhQSxDQUFDO1FBQ2hDSyxPQUFPO1lBQUM7WUFBNkI7WUFBcUM7U0FBZ0Q7UUFDMUhDLE1BQUssSUFBSTtRQUNUQyxZQUFXO0lBQ2Y7SUFDRixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNSLHlEQUFnQkE7Ozs7OzBCQUNqQiw4REFBQ1M7O2tDQUNELDhEQUFDQzt3QkFBS0YsV0FBVTtrQ0FBWU47Ozs7OztrQ0FDNUIsOERBQUNKLDJEQUFNQTt3QkFBQ2EsYUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVCLENBQUM7R0FmdUJWOztRQUNFRixrRUFBYUE7OztLQURmRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlcm8udHN4P2U3NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ3Vyc29yLCBUeXBld3JpdGVyLCB1c2VUeXBld3JpdGVyIH0gZnJvbSAncmVhY3Qtc2ltcGxlLXR5cGV3cml0ZXInXG5pbXBvcnQgQmFja2dyb3VuZENpcmNsZSBmcm9tICcuL0JhY2tncm91bmRDaXJjbGUnXG5cblxudHlwZSBQcm9wcyA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8oe306IFByb3BzKSB7XG4gICAgY29uc3QgW3RleHQsIGNvdW50XSA9IHVzZVR5cGV3cml0ZXIoe1xuICAgICAgICB3b3JkczogW1wiSGkhIE15IG5hbWUgaXMgUmlja3kgQ2hlblwiLCBcIkd1eSB3aG8gbG92ZSBOZXh0LmpzICYgVHlwZVNjcmlwdFwiLCBcIjxBbmQgYWx3YXlzIHJlYWR5IGZvciB0aGUgbmV4dCBjaGFsbGVuZ2UhISEvPlwiXSxcbiAgICAgICAgbG9vcDp0cnVlLFxuICAgICAgICBkZWxheVNwZWVkOjIwMDBcbiAgICB9KVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdoLXNjcmVlbiBmbGV4IGZsZXgtY29sIHNwYWNlLXktOCc+XG4gICAgICAgIDxCYWNrZ3JvdW5kQ2lyY2xlIC8+XG4gICAgICAgIDxoMT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LTV4bCc+e3RleHR9PC9zcGFuPlxuICAgICAgICA8Q3Vyc29yIGN1cnNvckNvbG9yPScjRjdBQjBBJy8+XG4gICAgICAgIDwvaDE+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJDdXJzb3IiLCJ1c2VUeXBld3JpdGVyIiwiQmFja2dyb3VuZENpcmNsZSIsIkhlcm8iLCJ0ZXh0IiwiY291bnQiLCJ3b3JkcyIsImxvb3AiLCJkZWxheVNwZWVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwiY3Vyc29yQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Hero.tsx\n"));

/***/ })

});