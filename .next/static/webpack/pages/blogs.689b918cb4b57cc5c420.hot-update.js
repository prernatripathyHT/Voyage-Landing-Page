/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blogs",{

/***/ "./components/BlogPageAllPosts.js":
/*!****************************************!*\
  !*** ./components/BlogPageAllPosts.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogPageAllPosts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_blogPageAllPosts_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/blogPageAllPosts.module.css */ \"./components/css/blogPageAllPosts.module.css\");\n/* harmony import */ var _css_blogPageAllPosts_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_blogPageAllPosts_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _BlogItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlogItem */ \"./components/BlogItem.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/Prernat/Documents/HOUNDSTOOTH - GUILD CAPITAL/DEV-PROJECTS/voyage-web-updated/components/BlogPageAllPosts.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction BlogPageAllPosts(_ref) {\n  _s();\n\n  var _this = this;\n\n  var posts = _ref.posts;\n  // const [items, setItems] = useState([]);\n  var noOfPosts = {\n    posts: posts\n  }.posts.posts.length; //console.log(\"no. of all posts\", noOfPosts)\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(9),\n      visible = _useState[0],\n      setVisible = _useState[1]; // const featuredPosts = {posts};\n\n\n  var showMoreItems = function showMoreItems() {\n    setVisible(function (prevValue) {\n      return prevValue + 9;\n    });\n  }; // useEffect(() => {\n  //     setItems(featuredPosts.posts.posts);\n  // }, []);\n  // console.log(\"no. of visible blogs\",visible)\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    id: (_css_blogPageAllPosts_module_css__WEBPACK_IMPORTED_MODULE_3___default().allPosts),\n    className: (_css_blogPageAllPosts_module_css__WEBPACK_IMPORTED_MODULE_3___default().allPosts),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container \".concat((_css_blogPageAllPosts_module_css__WEBPACK_IMPORTED_MODULE_3___default().sectionContainer)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_blogPageAllPosts_module_css__WEBPACK_IMPORTED_MODULE_3___default().allPostsContainer),\n        children: {\n          posts: posts\n        }.posts.posts.slice(6, visible).map(function (post) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BlogItem__WEBPACK_IMPORTED_MODULE_2__.default, {\n            post: post\n          }, post.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 17\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 14\n      }, this), visible < noOfPosts && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_css_blogPageAllPosts_module_css__WEBPACK_IMPORTED_MODULE_3___default().showMoreButton),\n        onClick: showMoreItems,\n        children: \"Load More\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 36\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, this);\n}\n\n_s(BlogPageAllPosts, \"gaPuXb61SdfIaz1JU7eVI4HcH+M=\");\n\n_c = BlogPageAllPosts;\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogPageAllPosts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUGFnZUFsbFBvc3RzLmpzPzNjNDYiXSwibmFtZXMiOlsiQmxvZ1BhZ2VBbGxQb3N0cyIsInBvc3RzIiwibm9PZlBvc3RzIiwibGVuZ3RoIiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInNob3dNb3JlSXRlbXMiLCJwcmV2VmFsdWUiLCJzdHlsZXMiLCJzbGljZSIsIm1hcCIsInBvc3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJZSxTQUFTQSxnQkFBVCxPQUFtQztBQUFBOztBQUFBOztBQUFBLE1BQVJDLEtBQVEsUUFBUkEsS0FBUTtBQUM5QztBQUVBLE1BQU1DLFNBQVMsR0FBRztBQUFDRCxTQUFLLEVBQUxBO0FBQUQsSUFBUUEsS0FBUixDQUFjQSxLQUFkLENBQW9CRSxNQUF0QyxDQUg4QyxDQUk3Qzs7QUFKNkMsa0JBS2hCQywrQ0FBUSxDQUFDLENBQUQsQ0FMUTtBQUFBLE1BS3ZDQyxPQUx1QztBQUFBLE1BSzlCQyxVQUw4QixpQkFNOUM7OztBQUdBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUN4QkQsY0FBVSxDQUFDLFVBQUFFLFNBQVM7QUFBQSxhQUFJQSxTQUFTLEdBQUcsQ0FBaEI7QUFBQSxLQUFWLENBQVY7QUFDSCxHQUZELENBVDhDLENBYTlDO0FBRUE7QUFFQTtBQUdBOzs7QUFFQSxzQkFDSTtBQUFTLE1BQUUsRUFBRUMsa0ZBQWI7QUFBOEIsYUFBUyxFQUFFQSxrRkFBekM7QUFBQSwyQkFDSTtBQUFLLGVBQVMsc0JBQWVBLDBGQUFmLENBQWQ7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUVBLDJGQUFoQjtBQUFBLGtCQUNJO0FBQUNSLGVBQUssRUFBTEE7QUFBRCxVQUFRQSxLQUFSLENBQWNBLEtBQWQsQ0FBb0JTLEtBQXBCLENBQTBCLENBQTFCLEVBQTZCTCxPQUE3QixFQUFzQ00sR0FBdEMsQ0FBMEMsVUFBQUMsSUFBSTtBQUFBLDhCQUMvQyw4REFBQyw4Q0FBRDtBQUF3QixnQkFBSSxFQUFFQTtBQUE5QixhQUFlQSxJQUFJLENBQUNDLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRCtDO0FBQUEsU0FBOUM7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsRUFNQVIsT0FBTyxHQUFHSCxTQUFWLGlCQUF1QjtBQUFRLGlCQUFTLEVBQUVPLHdGQUFuQjtBQUEwQyxlQUFPLEVBQUVGLGFBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVlIOztHQWxDdUJQLGdCOztLQUFBQSxnQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQmxvZ1BhZ2VBbGxQb3N0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jc3MvYmxvZ1BhZ2VBbGxQb3N0cy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQmxvZ0l0ZW0gZnJvbSBcIi4vQmxvZ0l0ZW1cIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dQYWdlQWxsUG9zdHMoe3Bvc3RzfSkge1xuICAgIC8vIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3Qgbm9PZlBvc3RzID0ge3Bvc3RzfS5wb3N0cy5wb3N0cy5sZW5ndGg7XG4gICAgIC8vY29uc29sZS5sb2coXCJuby4gb2YgYWxsIHBvc3RzXCIsIG5vT2ZQb3N0cylcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSg5KTtcbiAgICAvLyBjb25zdCBmZWF0dXJlZFBvc3RzID0ge3Bvc3RzfTtcblxuXG4gICAgY29uc3Qgc2hvd01vcmVJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgc2V0VmlzaWJsZShwcmV2VmFsdWUgPT4gcHJldlZhbHVlICsgOSk7XG4gICAgfSAgIFxuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgXG4gICAgLy8gICAgIHNldEl0ZW1zKGZlYXR1cmVkUG9zdHMucG9zdHMucG9zdHMpO1xuICAgICAgIFxuICAgIC8vIH0sIFtdKTtcblxuXG4gICAgLy8gY29uc29sZS5sb2coXCJuby4gb2YgdmlzaWJsZSBibG9nc1wiLHZpc2libGUpXG4gXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gaWQ9e3N0eWxlcy5hbGxQb3N0c30gY2xhc3NOYW1lPXtzdHlsZXMuYWxsUG9zdHN9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb250YWluZXIgJHtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lcn1gfT5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFsbFBvc3RzQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICB7e3Bvc3RzfS5wb3N0cy5wb3N0cy5zbGljZSg2LCB2aXNpYmxlKS5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICAgICAgPEJsb2dJdGVtIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4gXG4gICAgICAgICAgICAgICAgKSl9ICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICB7dmlzaWJsZSA8IG5vT2ZQb3N0cyAmJiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnNob3dNb3JlQnV0dG9ufSBvbkNsaWNrPXtzaG93TW9yZUl0ZW1zfT5Mb2FkIE1vcmU8L2J1dHRvbj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BlogPageAllPosts.js\n");

/***/ })

});