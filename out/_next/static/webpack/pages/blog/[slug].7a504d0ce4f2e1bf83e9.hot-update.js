/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[slug]",{

/***/ "./components/BlogPageRelatedArticles.js":
/*!***********************************************!*\
  !*** ./components/BlogPageRelatedArticles.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogPageRelatedArticles; }\n/* harmony export */ });\n/* harmony import */ var _Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_blogPageRelatedArticles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/blogPageRelatedArticles.module.css */ \"./components/css/blogPageRelatedArticles.module.css\");\n/* harmony import */ var _css_blogPageRelatedArticles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_blogPageRelatedArticles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _BlogItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlogItem */ \"./components/BlogItem.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/Prernat/Documents/HOUNDSTOOTH - GUILD CAPITAL/DEV-PROJECTS/voyage-web-updated/components/BlogPageRelatedArticles.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction BlogPageRelatedArticles(_ref) {\n  var _this = this;\n\n  var relatedPosts = _ref.relatedPosts;\n  var settings = {\n    dots: false,\n    infinite: true,\n    autoplay: true,\n    autoplaySpeed: 2500,\n    slidesToShow: 3,\n    slidesToScroll: 1,\n    cssEase: \"cubic-bezier(.51,.11,.44,.96)\",\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 3,\n        slidesToScroll: 3,\n        infinite: true,\n        dots: false\n      }\n    }, {\n      breakpoint: 600,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1\n      }\n    }, {\n      breakpoint: 480,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1\n      }\n    }]\n  }; //console.log(\"all posts\", relatedPosts)\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n    id: (_css_blogPageRelatedArticles_module_css__WEBPACK_IMPORTED_MODULE_6___default().blogPageRelatedArticles),\n    className: (_css_blogPageRelatedArticles_module_css__WEBPACK_IMPORTED_MODULE_6___default().blogPageRelatedArticles),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"container blogPageRelatedItemsContainer \".concat((_css_blogPageRelatedArticles_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionContainer)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        className: \"aos-init \".concat((_css_blogPageRelatedArticles_module_css__WEBPACK_IMPORTED_MODULE_6___default().relatedArticlesHeading)),\n        \"data-aos\": \"fade-up\",\n        \"data-aos-duration\": \"500\",\n        children: \"Related Articles\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 15\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, settings), {}, {\n        className: (_css_blogPageRelatedArticles_module_css__WEBPACK_IMPORTED_MODULE_6___default().relatedPostsContainer),\n        children: relatedPosts.map(function (post) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"relatedArticleItem\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_BlogItem__WEBPACK_IMPORTED_MODULE_2__.default, {\n              post: post\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 17\n            }, _this)\n          }, post.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 19\n          }, _this);\n        })\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 14\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 7\n  }, this);\n}\n_c = BlogPageRelatedArticles;\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogPageRelatedArticles\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUGFnZVJlbGF0ZWRBcnRpY2xlcy5qcz8wZDE2Il0sIm5hbWVzIjpbIkJsb2dQYWdlUmVsYXRlZEFydGljbGVzIiwicmVsYXRlZFBvc3RzIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImNzc0Vhc2UiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInN0eWxlcyIsIm1hcCIsInBvc3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtlLFNBQVNBLHVCQUFULE9BQWlEO0FBQUE7O0FBQUEsTUFBZkMsWUFBZSxRQUFmQSxZQUFlO0FBSzlELE1BQU1DLFFBQVEsR0FBRztBQUNmQyxRQUFJLEVBQUUsS0FEUztBQUVmQyxZQUFRLEVBQUUsSUFGSztBQUdmQyxZQUFRLEVBQUUsSUFISztBQUlmQyxpQkFBYSxFQUFFLElBSkE7QUFLZkMsZ0JBQVksRUFBRSxDQUxDO0FBTWZDLGtCQUFjLEVBQUUsQ0FORDtBQU9mQyxXQUFPLGlDQVBRO0FBUWZDLGNBQVUsRUFBRSxDQUNWO0FBQ0VDLGdCQUFVLEVBQUUsSUFEZDtBQUVFVCxjQUFRLEVBQUU7QUFDUkssb0JBQVksRUFBRSxDQUROO0FBRVJDLHNCQUFjLEVBQUUsQ0FGUjtBQUdSSixnQkFBUSxFQUFFLElBSEY7QUFJUkQsWUFBSSxFQUFFO0FBSkU7QUFGWixLQURVLEVBVVY7QUFDRVEsZ0JBQVUsRUFBRSxHQURkO0FBRUVULGNBQVEsRUFBRTtBQUNSSyxvQkFBWSxFQUFFLENBRE47QUFFUkMsc0JBQWMsRUFBRTtBQUZSO0FBRlosS0FWVSxFQWlCVjtBQUNFRyxnQkFBVSxFQUFFLEdBRGQ7QUFFRVQsY0FBUSxFQUFFO0FBQ1JLLG9CQUFZLEVBQUUsQ0FETjtBQUVSQyxzQkFBYyxFQUFFO0FBRlI7QUFGWixLQWpCVTtBQVJHLEdBQWpCLENBTDhELENBNEM5RDs7QUFFRSxzQkFDRTtBQUFTLE1BQUUsRUFBRUksd0dBQWI7QUFBNkMsYUFBUyxFQUFFQSx3R0FBeEQ7QUFBQSwyQkFDTTtBQUFLLGVBQVMsb0RBQTZDQSxpR0FBN0MsQ0FBZDtBQUFBLDhCQUNFO0FBQUksaUJBQVMscUJBQWNBLHVHQUFkLENBQWI7QUFBNEQsb0JBQVMsU0FBckU7QUFBK0UsNkJBQWtCLEtBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFQyw4REFBQyxnREFBRCxrQ0FBWVYsUUFBWjtBQUF1QixpQkFBUyxFQUFFVSxzR0FBbEM7QUFBQSxrQkFDSVgsWUFBWSxDQUFDWSxHQUFiLENBQWlCLFVBQUFDLElBQUk7QUFBQSw4QkFDcEI7QUFBbUIscUJBQVMsRUFBQyxvQkFBN0I7QUFBQSxtQ0FDRiw4REFBQyw4Q0FBRDtBQUFXLGtCQUFJLEVBQUVBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERSxhQUFVQSxJQUFJLENBQUNDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEb0I7QUFBQSxTQUFyQjtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjSDtLQTVEdUJmLHVCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CbG9nUGFnZVJlbGF0ZWRBcnRpY2xlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jc3MvYmxvZ1BhZ2VSZWxhdGVkQXJ0aWNsZXMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEJsb2dJdGVtIGZyb20gXCIuL0Jsb2dJdGVtXCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ1BhZ2VSZWxhdGVkQXJ0aWNsZXMoe3JlbGF0ZWRQb3N0c30pIHtcblxuXG5cblxuICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBhdXRvcGxheVNwZWVkOiAyNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBjc3NFYXNlOmBjdWJpYy1iZXppZXIoLjUxLC4xMSwuNDQsLjk2KWAsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICBkb3RzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgXG5cblxuXG5cbiAgLy9jb25zb2xlLmxvZyhcImFsbCBwb3N0c1wiLCByZWxhdGVkUG9zdHMpXG4gXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGlkPXtzdHlsZXMuYmxvZ1BhZ2VSZWxhdGVkQXJ0aWNsZXN9IGNsYXNzTmFtZT17c3R5bGVzLmJsb2dQYWdlUmVsYXRlZEFydGljbGVzfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29udGFpbmVyIGJsb2dQYWdlUmVsYXRlZEl0ZW1zQ29udGFpbmVyICR7c3R5bGVzLnNlY3Rpb25Db250YWluZXJ9YH0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2Bhb3MtaW5pdCAke3N0eWxlcy5yZWxhdGVkQXJ0aWNsZXNIZWFkaW5nfWB9IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiNTAwXCIgPlJlbGF0ZWQgQXJ0aWNsZXM8L2gxPlxuICAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfSAgY2xhc3NOYW1lPXtzdHlsZXMucmVsYXRlZFBvc3RzQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICB7cmVsYXRlZFBvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwb3N0LmlkfSBjbGFzc05hbWU9XCJyZWxhdGVkQXJ0aWNsZUl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8QmxvZ0l0ZW0gIHBvc3Q9e3Bvc3R9IC8+IFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgXG4gICAgICAgICAgICAgICAgKSl9ICAgICAgXG4gICAgICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BlogPageRelatedArticles.js\n");

/***/ })

});