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

/***/ "./components/About.tsx":
/*!******************************!*\
  !*** ./components/About.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nfunction About(param) {\n    let {} = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl\",\n                children: \"About\"\n            }, void 0, false, {\n                fileName: \"/Users/Rickychen/Documents/Coding/project/Ricky_Portfolio/components/About.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.img, {\n                initial: {\n                    x: -200,\n                    opacity: 0\n                },\n                whileInView: {\n                    x: 0,\n                    opacity: 1\n                },\n                viewport: {\n                    once: true\n                },\n                transition: {\n                    duration: 1.2\n                },\n                src: \"https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/300630783_10227108152834683_3462862914510379183_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HQBt3diTDRwAX_gc24o&_nc_ht=scontent-sjc3-1.xx&oh=00_AfAMfCwaan4ZhvVIs56aZCbFQ1IwRFa9aN7RiiaqOIPR8Q&oe=63F82F93\",\n                alt: \"Ricky Picture with Bella\",\n                className: \"-mb-20 md:mb-0\"\n            }, void 0, false, {\n                fileName: \"/Users/Rickychen/Documents/Coding/project/Ricky_Portfolio/components/About.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Rickychen/Documents/Coding/project/Ricky_Portfolio/components/About.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fib3V0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzBCO0FBRVk7QUFJdkIsU0FBU0UsTUFBTSxLQUFTLEVBQUU7UUFBWCxFQUFTLEdBQVQ7SUFDNUIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBbUU7Ozs7OzswQkFJL0UsOERBQUNILHFEQUFVO2dCQUNYTSxTQUFTO29CQUNMQyxHQUFFLENBQUM7b0JBQ0hDLFNBQVE7Z0JBQ1o7Z0JBQ0FDLGFBQWE7b0JBQ1RGLEdBQUU7b0JBQ0ZDLFNBQVE7Z0JBQ1o7Z0JBQ0FFLFVBQVU7b0JBQ05DLE1BQUssSUFBSTtnQkFDYjtnQkFDQUMsWUFBWTtvQkFDUkMsVUFBUztnQkFDYjtnQkFDQUMsS0FBSTtnQkFDSkMsS0FBSTtnQkFDSlosV0FBVTs7Ozs7Ozs7Ozs7O0FBSWxCLENBQUM7S0E1QnVCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Fib3V0LnRzeD9lNTY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHBvcnRmb2xpb0ltYWdlIGZyb20gJy4uL2Fzc2V0L3BvcnRmb2xpby5qcGcnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG50eXBlIFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KHt9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBmbGV4LWNvbCByZWxhdGl2ZSB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgbWQ6ZmxleC1yb3cgbWF4LXctN3hsIHB4LTEwIGp1c3RpZnktZXZlbmx5XCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTI0IHVwcGVyY2FzZSB0cmFja2luZy1bMjBweF0gdGV4dC1ncmF5LTUwMCB0ZXh0LTJ4bFwiPlxuICAgICAgICBBYm91dFxuICAgICAgPC9oMz5cbiAgICAgIFxuICAgICAgICA8bW90aW9uLmltZyBcbiAgICAgICAgaW5pdGlhbD17e1xuICAgICAgICAgICAgeDotMjAwLFxuICAgICAgICAgICAgb3BhY2l0eTowXG4gICAgICAgIH19XG4gICAgICAgIHdoaWxlSW5WaWV3PXt7XG4gICAgICAgICAgICB4OjAsXG4gICAgICAgICAgICBvcGFjaXR5OjFcbiAgICAgICAgfX1cbiAgICAgICAgdmlld3BvcnQ9e3tcbiAgICAgICAgICAgIG9uY2U6dHJ1ZVxuICAgICAgICB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICBkdXJhdGlvbjoxLjJcbiAgICAgICAgfX1cbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9zY29udGVudC1zamMzLTEueHguZmJjZG4ubmV0L3YvdDM5LjMwODA4LTYvMzAwNjMwNzgzXzEwMjI3MTA4MTUyODM0NjgzXzM0NjI4NjI5MTQ1MTAzNzkxODNfbi5qcGc/X25jX2NhdD0xMTEmY2NiPTEtNyZfbmNfc2lkPTA5Y2JmZSZfbmNfb2hjPUhRQnQzZGlURFJ3QVhfZ2MyNG8mX25jX2h0PXNjb250ZW50LXNqYzMtMS54eCZvaD0wMF9BZkFNZkN3YWFuNFpodlZJczU2YVpDYkZRMUl3UkZhOWFON1JpaWFxT0lQUjhRJm9lPTYzRjgyRjkzXCJcbiAgICAgICAgYWx0PVwiUmlja3kgUGljdHVyZSB3aXRoIEJlbGxhXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiLW1iLTIwIG1kOm1iLTBcIlxuICAgICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiQWJvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImltZyIsImluaXRpYWwiLCJ4Iiwib3BhY2l0eSIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/About.tsx\n"));

/***/ })

});