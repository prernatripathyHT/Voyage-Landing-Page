/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blogs",{

/***/ "./components/BlogPageTagFilteringBlock.js":
/*!*************************************************!*\
  !*** ./components/BlogPageTagFilteringBlock.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogPageFilteringBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/blogPageTagFilteringBlock.module.css */ \"./components/css/blogPageTagFilteringBlock.module.css\");\n/* harmony import */ var _css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_BlogPageTagFilteringBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/BlogPageTagFilteringBlock */ \"./data/BlogPageTagFilteringBlock.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/Prernat/Documents/HOUNDSTOOTH - GUILD CAPITAL/DEV-PROJECTS/voyage-web-updated/components/BlogPageTagFilteringBlock.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction BlogPageFilteringBlock(_ref) {\n  _s();\n\n  var _this = this;\n\n  var posts = _ref.posts,\n      handleTagClick = _ref.handleTagClick,\n      handleSearch = _ref.handleSearch;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      filteredTitles = _useState[0],\n      setFilteredTitles = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      searchValue = _useState2[0],\n      setSearchValue = _useState2[1]; //debouncing the search term displayed \n  // const debouncedSave = debounce(() => setSearchValue(searchVal), 1000 )\n\n\n  var debouncedSave = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(function (searchVal) {\n    return setSearchValue(searchVal);\n  }, 500), []);\n\n  var filterTitles = function filterTitles(searchVal) {\n    //console.log(\"search val is\", searchVal);\n    debouncedSave(searchVal);\n    var filteredTitles = posts.posts.filter(function (val) {\n      return val.title.toLowerCase().includes(searchVal.toLowerCase());\n    });\n\n    if (searchVal == \"\") {\n      setFilteredTitles([]);\n    } else {\n      setFilteredTitles(filteredTitles);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().tagFilteringSection),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container \".concat((_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().filterSearchDiv)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().SearchDiv),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().searchIcon),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            width: \"20\",\n            height: \"20\",\n            viewBox: \"0 0 20 20\",\n            fill: \"none\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n              d: \"M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z\",\n              fill: \"black\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 25\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n              d: \"M19.7617 18.6121L15.1005 13.9509C14.7829 13.6332 14.2685 13.6332 13.9509 13.9509C13.6332 14.2682 13.6332 14.7831 13.9509 15.1005L18.6121 19.7617C18.7709 19.9205 18.9788 19.9999 19.1869 19.9999C19.3948 19.9999 19.6029 19.9205 19.7617 19.7617C20.0794 19.4444 20.0794 18.9295 19.7617 18.6121Z\",\n              fill: \"black\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 25\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Search by title or any keyword\",\n          onChange: function onChange(e) {\n            return filterTitles(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, this), filteredTitles.length != 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().searchBoxTitles),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().searchBoxHeader),\n            children: [\"Showing Blogs related to \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              children: [\"\\\"\", searchValue, \"\\\"\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 88\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 25\n          }, this), filteredTitles.slice(0, 10).map(function (post, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: \"/blog/[slug]\",\n              as: \"/blog/\".concat(post.slug),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().postTitles),\n                  children: post.title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 51,\n                  columnNumber: 103\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 100\n              }, _this)\n            }, index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 36\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().FilterDiv),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().postTags),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            onClick: function onClick() {\n              return handleTagClick(null);\n            },\n            children: \"All\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 58\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 25\n        }, this), _data_BlogPageTagFilteringBlock__WEBPACK_IMPORTED_MODULE_4__.BlogPageCategoriesData.map(function (category, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().postTags),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              onClick: function onClick() {\n                return handleTagClick(category.slug);\n              },\n              children: category.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 33\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 29\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 14\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, this);\n}\n\n_s(BlogPageFilteringBlock, \"pufZnpRTqy91jhiosqnzdrQ7vlI=\");\n\n_c = BlogPageFilteringBlock;\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogPageFilteringBlock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUGFnZVRhZ0ZpbHRlcmluZ0Jsb2NrLmpzPzJkYTUiXSwibmFtZXMiOlsiQmxvZ1BhZ2VGaWx0ZXJpbmdCbG9jayIsInBvc3RzIiwiaGFuZGxlVGFnQ2xpY2siLCJoYW5kbGVTZWFyY2giLCJ1c2VTdGF0ZSIsImZpbHRlcmVkVGl0bGVzIiwic2V0RmlsdGVyZWRUaXRsZXMiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwiZGVib3VuY2VkU2F2ZSIsInVzZUNhbGxiYWNrIiwiZGVib3VuY2UiLCJzZWFyY2hWYWwiLCJmaWx0ZXJUaXRsZXMiLCJmaWx0ZXIiLCJ2YWwiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzdHlsZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJzbGljZSIsIm1hcCIsInBvc3QiLCJpbmRleCIsInNsdWciLCJCbG9nUGFnZUNhdGVnb3JpZXNEYXRhIiwiY2F0ZWdvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxzQkFBVCxPQUF1RTtBQUFBOztBQUFBOztBQUFBLE1BQXRDQyxLQUFzQyxRQUF0Q0EsS0FBc0M7QUFBQSxNQUEvQkMsY0FBK0IsUUFBL0JBLGNBQStCO0FBQUEsTUFBZkMsWUFBZSxRQUFmQSxZQUFlOztBQUFBLGtCQUN0Q0MsK0NBQVEsQ0FBQyxFQUFELENBRDhCO0FBQUEsTUFDM0VDLGNBRDJFO0FBQUEsTUFDM0RDLGlCQUQyRDs7QUFBQSxtQkFFNUNGLCtDQUFRLENBQUMsRUFBRCxDQUZvQztBQUFBLE1BRTNFRyxXQUYyRTtBQUFBLE1BRTlEQyxjQUY4RCxrQkFJbEY7QUFDQTs7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHQyxrREFBVyxDQUFDQyxzREFBUSxDQUFDLFVBQUNDLFNBQUQ7QUFBQSxXQUFlSixjQUFjLENBQUNJLFNBQUQsQ0FBN0I7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LGNBQWMsQ0FBQyxJQUFELENBQWxCO0FBQUEsYUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURSLEVBRVMyQix1RkFBQSxDQUEyQixVQUFDQyxRQUFELEVBQVVILEtBQVY7QUFBQSw4QkFDeEI7QUFBaUIscUJBQVMsRUFBRVIsMkZBQTVCO0FBQUEsbUNBQ0k7QUFBRyxxQkFBTyxFQUFFO0FBQUEsdUJBQUlqQixjQUFjLENBQUM0QixRQUFRLENBQUNGLElBQVYsQ0FBbEI7QUFBQSxlQUFaO0FBQUEsd0JBQWlERSxRQUFRLENBQUNkO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixhQUFVVyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHdCO0FBQUEsU0FBM0IsQ0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0NIOztHQTdEdUIzQixzQjs7S0FBQUEsc0IiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jsb2dQYWdlVGFnRmlsdGVyaW5nQmxvY2suanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2Nzcy9ibG9nUGFnZVRhZ0ZpbHRlcmluZ0Jsb2NrLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XG5pbXBvcnQgeyBCbG9nUGFnZUNhdGVnb3JpZXNEYXRhIH0gZnJvbSBcIi4uL2RhdGEvQmxvZ1BhZ2VUYWdGaWx0ZXJpbmdCbG9ja1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dQYWdlRmlsdGVyaW5nQmxvY2soe3Bvc3RzLCBoYW5kbGVUYWdDbGljaywgaGFuZGxlU2VhcmNofSkge1xuICAgIGNvbnN0IFtmaWx0ZXJlZFRpdGxlcywgc2V0RmlsdGVyZWRUaXRsZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgLy9kZWJvdW5jaW5nIHRoZSBzZWFyY2ggdGVybSBkaXNwbGF5ZWQgXG4gICAgLy8gY29uc3QgZGVib3VuY2VkU2F2ZSA9IGRlYm91bmNlKCgpID0+IHNldFNlYXJjaFZhbHVlKHNlYXJjaFZhbCksIDEwMDAgKVxuICAgIGNvbnN0IGRlYm91bmNlZFNhdmUgPSB1c2VDYWxsYmFjayhkZWJvdW5jZSgoc2VhcmNoVmFsKSA9PiBzZXRTZWFyY2hWYWx1ZShzZWFyY2hWYWwpLCA1MDAgKSwgW10pXG5cbiAgICBjb25zdCBmaWx0ZXJUaXRsZXMgPSAoc2VhcmNoVmFsKSA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzZWFyY2ggdmFsIGlzXCIsIHNlYXJjaFZhbCk7XG5cblxuICAgICAgICBcbiAgICAgICAgZGVib3VuY2VkU2F2ZShzZWFyY2hWYWwpO1xuXG5cbiAgICAgICAgY29uc3QgZmlsdGVyZWRUaXRsZXMgPSBwb3N0cy5wb3N0cy5maWx0ZXIoKHZhbCkgPT4ge1xuICAgICAgICAgICByZXR1cm4gdmFsLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZihzZWFyY2hWYWwgPT0gXCJcIil7XG4gICAgICAgICAgICBzZXRGaWx0ZXJlZFRpdGxlcyhbXSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICBzZXRGaWx0ZXJlZFRpdGxlcyhmaWx0ZXJlZFRpdGxlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy50YWdGaWx0ZXJpbmdTZWN0aW9ufT4gXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb250YWluZXIgJHtzdHlsZXMuZmlsdGVyU2VhcmNoRGl2fWB9PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZWFyY2hEaXZ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEljb259PlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC44MDc1OCAwQzMuOTUxMjEgMCAwIDMuOTUxMjEgMCA4LjgwNzU4QzAgMTMuNjY0MiAzLjk1MTIxIDE3LjYxNTIgOC44MDc1OCAxNy42MTUyQzEzLjY2NDIgMTcuNjE1MiAxNy42MTUyIDEzLjY2NDIgMTcuNjE1MiA4LjgwNzU4QzE3LjYxNTIgMy45NTEyMSAxMy42NjQyIDAgOC44MDc1OCAwWk04LjgwNzU4IDE1Ljk4OTJDNC44NDc3IDE1Ljk4OTIgMS42MjYwMiAxMi43Njc1IDEuNjI2MDIgOC44MDc2MkMxLjYyNjAyIDQuODQ3NzMgNC44NDc3IDEuNjI2MDIgOC44MDc1OCAxLjYyNjAyQzEyLjc2NzUgMS42MjYwMiAxNS45ODkxIDQuODQ3NyAxNS45ODkxIDguODA3NThDMTUuOTg5MSAxMi43Njc1IDEyLjc2NzUgMTUuOTg5MiA4LjgwNzU4IDE1Ljk4OTJaXCIgZmlsbD1cImJsYWNrXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOS43NjE3IDE4LjYxMjFMMTUuMTAwNSAxMy45NTA5QzE0Ljc4MjkgMTMuNjMzMiAxNC4yNjg1IDEzLjYzMzIgMTMuOTUwOSAxMy45NTA5QzEzLjYzMzIgMTQuMjY4MiAxMy42MzMyIDE0Ljc4MzEgMTMuOTUwOSAxNS4xMDA1TDE4LjYxMjEgMTkuNzYxN0MxOC43NzA5IDE5LjkyMDUgMTguOTc4OCAxOS45OTk5IDE5LjE4NjkgMTkuOTk5OUMxOS4zOTQ4IDE5Ljk5OTkgMTkuNjAyOSAxOS45MjA1IDE5Ljc2MTcgMTkuNzYxN0MyMC4wNzk0IDE5LjQ0NDQgMjAuMDc5NCAxOC45Mjk1IDE5Ljc2MTcgMTguNjEyMVpcIiBmaWxsPVwiYmxhY2tcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgdGl0bGUgb3IgYW55IGtleXdvcmRcIiBvbkNoYW5nZT17KGUpID0+IGZpbHRlclRpdGxlcyhlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgeyBmaWx0ZXJlZFRpdGxlcy5sZW5ndGggIT0wICYmKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJveFRpdGxlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCb3hIZWFkZXJ9PlNob3dpbmcgQmxvZ3MgcmVsYXRlZCB0byA8c3Bhbj5cIntzZWFyY2hWYWx1ZX1cIjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyZWRUaXRsZXMuc2xpY2UoMCwxMCkubWFwKChwb3N0LGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaW5rIGhyZWY9XCIvYmxvZy9bc2x1Z11cIiBhcz17YC9ibG9nLyR7cG9zdC5zbHVnfWB9IGtleT17aW5kZXh9PjxhPjxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RUaXRsZXN9Pntwb3N0LnRpdGxlfTwvZGl2PjwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9ICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZpbHRlckRpdn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RUYWdzfT48cCBvbkNsaWNrPXsoKT0+aGFuZGxlVGFnQ2xpY2sobnVsbCl9PkFsbDwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtCbG9nUGFnZUNhdGVnb3JpZXNEYXRhLm1hcCgoY2F0ZWdvcnksaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RUYWdzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17KCk9PmhhbmRsZVRhZ0NsaWNrKGNhdGVnb3J5LnNsdWcpfSA+e2NhdGVnb3J5LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BlogPageTagFilteringBlock.js\n");

/***/ })

});