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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-simple-typewriter */ \"./node_modules/react-simple-typewriter/dist/index.js\");\n/* harmony import */ var _BackgroundCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackgroundCircle */ \"./components/BackgroundCircle.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Hero(param) {\n    let {} = param;\n    _s();\n    const [text, count] = (0,react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__.useTypewriter)({\n        words: [\n            \"Hi! My name is Ricky Chen\",\n            \"Guy who love Next.js & TypeScript\",\n            \"<And always ready for the next challenge!!!/>\"\n        ],\n        loop: true,\n        delaySpeed: 2000\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            scale: [\n                1,\n                2,\n                2,\n                3,\n                1\n            ]\n        },\n        transition: {\n            duration: 2.5\n        },\n        className: \"h-screen flex flex-col space-y-8 justify-center text-center overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BackgroundCircle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Rickychen/Documents/Coding/project/Ricky_Portfolio/components/Hero.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"/Users/Rickychen/Documents/Coding/project/Ricky_Portfolio/components/Hero.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__.Cursor, {\n                        cursorColor: \"#F7AB0A\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Rickychen/Documents/Coding/project/Ricky_Portfolio/components/Hero.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Rickychen/Documents/Coding/project/Ricky_Portfolio/components/Hero.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Rickychen/Documents/Coding/project/Ricky_Portfolio/components/Hero.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Hero, \"5sW9Ip2qqu+oy/44fHx9diYcHGg=\", false, function() {\n    return [\n        react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__.useTypewriter\n    ];\n});\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm8udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDYjtBQUNrRDtBQUMxQjtBQUlsQyxTQUFTSyxLQUFLLEtBQVMsRUFBRTtRQUFYLEVBQVMsR0FBVDs7SUFDekIsTUFBTSxDQUFDQyxNQUFNQyxNQUFNLEdBQUdKLHNFQUFhQSxDQUFDO1FBQ2hDSyxPQUFPO1lBQUM7WUFBNkI7WUFBcUM7U0FBZ0Q7UUFDMUhDLE1BQUssSUFBSTtRQUNUQyxZQUFXO0lBQ2Y7SUFDRixxQkFDRSw4REFBQ1YscURBQVU7UUFDWFksU0FBUztZQUNMQyxTQUFRO1FBRVo7UUFDQUMsU0FBUztZQUNMQyxPQUFNO2dCQUFDO2dCQUFFO2dCQUFFO2dCQUFFO2dCQUFFO2FBQUU7UUFDckI7UUFDQUMsWUFBWTtZQUNSQyxVQUFTO1FBQ2I7UUFDQUMsV0FBVTs7MEJBQ04sOERBQUNkLHlEQUFnQkE7Ozs7OzBCQUNqQiw4REFBQ2U7O2tDQUNELDhEQUFDQztrQ0FBTWQ7Ozs7OztrQ0FDUCw4REFBQ0osMkRBQU1BO3dCQUFDbUIsYUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVCLENBQUM7R0ExQnVCaEI7O1FBQ0VGLGtFQUFhQTs7O0tBRGZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVyby50c3g/ZTc3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ3Vyc29yLCBUeXBld3JpdGVyLCB1c2VUeXBld3JpdGVyIH0gZnJvbSAncmVhY3Qtc2ltcGxlLXR5cGV3cml0ZXInXG5pbXBvcnQgQmFja2dyb3VuZENpcmNsZSBmcm9tICcuL0JhY2tncm91bmRDaXJjbGUnXG5cbnR5cGUgUHJvcHMgPSB7fVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvKHt9OiBQcm9wcykge1xuICAgIGNvbnN0IFt0ZXh0LCBjb3VudF0gPSB1c2VUeXBld3JpdGVyKHtcbiAgICAgICAgd29yZHM6IFtcIkhpISBNeSBuYW1lIGlzIFJpY2t5IENoZW5cIiwgXCJHdXkgd2hvIGxvdmUgTmV4dC5qcyAmIFR5cGVTY3JpcHRcIiwgXCI8QW5kIGFsd2F5cyByZWFkeSBmb3IgdGhlIG5leHQgY2hhbGxlbmdlISEhLz5cIl0sXG4gICAgICAgIGxvb3A6dHJ1ZSxcbiAgICAgICAgZGVsYXlTcGVlZDoyMDAwXG4gICAgfSlcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBcbiAgICBpbml0aWFsPXt7XG4gICAgICAgIG9wYWNpdHk6MCxcblxuICAgIH19XG4gICAgYW5pbWF0ZT17e1xuICAgICAgICBzY2FsZTpbMSwyLDIsMywxXVxuICAgIH19XG4gICAgdHJhbnNpdGlvbj17e1xuICAgICAgICBkdXJhdGlvbjoyLjUsXG4gICAgfX1cbiAgICBjbGFzc05hbWU9J2gtc2NyZWVuIGZsZXggZmxleC1jb2wgc3BhY2UteS04IGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIG92ZXJmbG93LWhpZGRlbic+XG4gICAgICAgIDxCYWNrZ3JvdW5kQ2lyY2xlIC8+XG4gICAgICAgIDxoMT5cbiAgICAgICAgPHNwYW4+e3RleHR9PC9zcGFuPlxuICAgICAgICA8Q3Vyc29yIGN1cnNvckNvbG9yPScjRjdBQjBBJy8+XG4gICAgICAgIDwvaDE+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApXG59Il0sIm5hbWVzIjpbIm1vdGlvbiIsIlJlYWN0IiwiQ3Vyc29yIiwidXNlVHlwZXdyaXRlciIsIkJhY2tncm91bmRDaXJjbGUiLCJIZXJvIiwidGV4dCIsImNvdW50Iiwid29yZHMiLCJsb29wIiwiZGVsYXlTcGVlZCIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInNjYWxlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwiY3Vyc29yQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Hero.tsx\n"));

/***/ })

});