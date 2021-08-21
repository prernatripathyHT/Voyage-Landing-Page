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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogPageFilteringBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/blogPageTagFilteringBlock.module.css */ \"./components/css/blogPageTagFilteringBlock.module.css\");\n/* harmony import */ var _css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/Prernat/Documents/HOUNDSTOOTH - GUILD CAPITAL/DEV-PROJECTS/voyage-web-updated/components/BlogPageTagFilteringBlock.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction BlogPageFilteringBlock(_ref) {\n  _s();\n\n  var _this = this;\n\n  var posts = _ref.posts,\n      handleTagClick = _ref.handleTagClick,\n      handleSearch = _ref.handleSearch;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      filteredTitles = _useState[0],\n      setFilteredTitles = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      searchValue = _useState2[0],\n      setSearchValue = _useState2[1]; //debouncing the search term displayed \n  // const debouncedSave = debounce(() => setSearchValue(searchVal), 1000 )\n\n\n  var debouncedSave = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(function () {\n    return setSearchValue(searchVal);\n  }, 1000), []);\n\n  var filterTitles = function filterTitles(searchVal) {\n    //console.log(\"search val is\", searchVal);\n    debouncedSave();\n    var filteredTitles = posts.posts.filter(function (val) {\n      return val.title.toLowerCase().includes(searchVal.toLowerCase());\n    });\n\n    if (searchVal == \"\") {\n      setFilteredTitles([]);\n    } else {\n      setFilteredTitles(filteredTitles);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().tagFilteringSection),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container \".concat((_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterSearchDiv)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().SearchDiv),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().searchIcon),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            width: \"20\",\n            height: \"20\",\n            viewBox: \"0 0 20 20\",\n            fill: \"none\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n              d: \"M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z\",\n              fill: \"black\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 25\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n              d: \"M19.7617 18.6121L15.1005 13.9509C14.7829 13.6332 14.2685 13.6332 13.9509 13.9509C13.6332 14.2682 13.6332 14.7831 13.9509 15.1005L18.6121 19.7617C18.7709 19.9205 18.9788 19.9999 19.1869 19.9999C19.3948 19.9999 19.6029 19.9205 19.7617 19.7617C20.0794 19.4444 20.0794 18.9295 19.7617 18.6121Z\",\n              fill: \"black\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 25\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Search by title or any keyword\",\n          onChange: function onChange(e) {\n            return filterTitles(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, this), filteredTitles.length != 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().searchBoxTitles),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().searchBoxHeader),\n            children: [\"Showing Blogs related to \\\"\", searchValue, \"\\\"\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 25\n          }, this), filteredTitles.slice(0, 10).map(function (post, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: \"/blog/[slug]\",\n              as: \"/blog/\".concat(post.slug),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().postTitles),\n                  children: post.title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 51,\n                  columnNumber: 103\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 100\n              }, _this)\n            }, index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 36\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().FilterDiv),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().postTags),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            onClick: function onClick() {\n              return handleTagClick(null);\n            },\n            children: \"All\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 58\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 25\n        }, this), posts.posts.map(function (post, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().postTags),\n            children: post.tags.map(function (tag, index) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: function onClick() {\n                  return handleTagClick(tag.slug);\n                },\n                children: tag.name\n              }, index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 33\n              }, _this);\n            })\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 29\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 14\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, this);\n}\n\n_s(BlogPageFilteringBlock, \"pufZnpRTqy91jhiosqnzdrQ7vlI=\");\n\n_c = BlogPageFilteringBlock;\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogPageFilteringBlock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUGFnZVRhZ0ZpbHRlcmluZ0Jsb2NrLmpzPzJkYTUiXSwibmFtZXMiOlsiQmxvZ1BhZ2VGaWx0ZXJpbmdCbG9jayIsInBvc3RzIiwiaGFuZGxlVGFnQ2xpY2siLCJoYW5kbGVTZWFyY2giLCJ1c2VTdGF0ZSIsImZpbHRlcmVkVGl0bGVzIiwic2V0RmlsdGVyZWRUaXRsZXMiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwiZGVib3VuY2VkU2F2ZSIsInVzZUNhbGxiYWNrIiwiZGVib3VuY2UiLCJzZWFyY2hWYWwiLCJmaWx0ZXJUaXRsZXMiLCJmaWx0ZXIiLCJ2YWwiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzdHlsZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJzbGljZSIsIm1hcCIsInBvc3QiLCJpbmRleCIsInNsdWciLCJ0YWdzIiwidGFnIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLHNCQUFULE9BQXVFO0FBQUE7O0FBQUE7O0FBQUEsTUFBdENDLEtBQXNDLFFBQXRDQSxLQUFzQztBQUFBLE1BQS9CQyxjQUErQixRQUEvQkEsY0FBK0I7QUFBQSxNQUFmQyxZQUFlLFFBQWZBLFlBQWU7O0FBQUEsa0JBRXRDQywrQ0FBUSxDQUFDLEVBQUQsQ0FGOEI7QUFBQSxNQUUzRUMsY0FGMkU7QUFBQSxNQUUzREMsaUJBRjJEOztBQUFBLG1CQUc1Q0YsK0NBQVEsQ0FBQyxFQUFELENBSG9DO0FBQUEsTUFHM0VHLFdBSDJFO0FBQUEsTUFHOURDLGNBSDhELGtCQUtsRjtBQUNBOzs7QUFDQSxNQUFNQyxhQUFhLEdBQUdDLGtEQUFXLENBQUNDLHNEQUFRLENBQUM7QUFBQSxXQUFNSCxjQUFjLENBQUNJLFNBQUQsQ0FBcEI7QUFBQSxHQUFELEVBQWtDLElBQWxDLENBQVQsRUFBbUQs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RFIsRUFFU0QsS0FBSyxDQUFDQSxLQUFOLENBQVl3QixHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBTUMsS0FBTjtBQUFBLDhCQUNiO0FBQWlCLHFCQUFTLEVBQUVSLDJGQUE1QjtBQUFBLHNCQUE4Q08sSUFBSSxDQUFDRyxJQUFMLENBQVVKLEdBQVYsQ0FBYyxVQUFDSyxHQUFELEVBQU1ILEtBQU47QUFBQSxrQ0FDeEQ7QUFBZSx1QkFBTyxFQUFFO0FBQUEseUJBQUl6QixjQUFjLENBQUM0QixHQUFHLENBQUNGLElBQUwsQ0FBbEI7QUFBQSxpQkFBeEI7QUFBQSwwQkFBdURFLEdBQUcsQ0FBQ0M7QUFBM0QsaUJBQVFKLEtBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEd0Q7QUFBQSxhQUFkO0FBQTlDLGFBQVVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYTtBQUFBLFNBQWhCLENBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtDSDs7R0E5RHVCM0Isc0I7O0tBQUFBLHNCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CbG9nUGFnZVRhZ0ZpbHRlcmluZ0Jsb2NrLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jc3MvYmxvZ1BhZ2VUYWdGaWx0ZXJpbmdCbG9jay5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dQYWdlRmlsdGVyaW5nQmxvY2soe3Bvc3RzLCBoYW5kbGVUYWdDbGljaywgaGFuZGxlU2VhcmNofSkge1xuXG4gICAgY29uc3QgW2ZpbHRlcmVkVGl0bGVzLCBzZXRGaWx0ZXJlZFRpdGxlc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICAvL2RlYm91bmNpbmcgdGhlIHNlYXJjaCB0ZXJtIGRpc3BsYXllZCBcbiAgICAvLyBjb25zdCBkZWJvdW5jZWRTYXZlID0gZGVib3VuY2UoKCkgPT4gc2V0U2VhcmNoVmFsdWUoc2VhcmNoVmFsKSwgMTAwMCApXG4gICAgY29uc3QgZGVib3VuY2VkU2F2ZSA9IHVzZUNhbGxiYWNrKGRlYm91bmNlKCgpID0+IHNldFNlYXJjaFZhbHVlKHNlYXJjaFZhbCksIDEwMDAgKSwgW10pXG5cbiAgICBjb25zdCBmaWx0ZXJUaXRsZXMgPSAoc2VhcmNoVmFsKSA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzZWFyY2ggdmFsIGlzXCIsIHNlYXJjaFZhbCk7XG5cblxuICAgICAgICBcbiAgICAgICAgZGVib3VuY2VkU2F2ZSgpO1xuXG5cbiAgICAgICAgY29uc3QgZmlsdGVyZWRUaXRsZXMgPSBwb3N0cy5wb3N0cy5maWx0ZXIoKHZhbCkgPT4ge1xuICAgICAgICAgICByZXR1cm4gdmFsLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZihzZWFyY2hWYWwgPT0gXCJcIil7XG4gICAgICAgICAgICBzZXRGaWx0ZXJlZFRpdGxlcyhbXSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICBzZXRGaWx0ZXJlZFRpdGxlcyhmaWx0ZXJlZFRpdGxlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy50YWdGaWx0ZXJpbmdTZWN0aW9ufT4gXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb250YWluZXIgJHtzdHlsZXMuZmlsdGVyU2VhcmNoRGl2fWB9PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZWFyY2hEaXZ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEljb259PlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC44MDc1OCAwQzMuOTUxMjEgMCAwIDMuOTUxMjEgMCA4LjgwNzU4QzAgMTMuNjY0MiAzLjk1MTIxIDE3LjYxNTIgOC44MDc1OCAxNy42MTUyQzEzLjY2NDIgMTcuNjE1MiAxNy42MTUyIDEzLjY2NDIgMTcuNjE1MiA4LjgwNzU4QzE3LjYxNTIgMy45NTEyMSAxMy42NjQyIDAgOC44MDc1OCAwWk04LjgwNzU4IDE1Ljk4OTJDNC44NDc3IDE1Ljk4OTIgMS42MjYwMiAxMi43Njc1IDEuNjI2MDIgOC44MDc2MkMxLjYyNjAyIDQuODQ3NzMgNC44NDc3IDEuNjI2MDIgOC44MDc1OCAxLjYyNjAyQzEyLjc2NzUgMS42MjYwMiAxNS45ODkxIDQuODQ3NyAxNS45ODkxIDguODA3NThDMTUuOTg5MSAxMi43Njc1IDEyLjc2NzUgMTUuOTg5MiA4LjgwNzU4IDE1Ljk4OTJaXCIgZmlsbD1cImJsYWNrXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOS43NjE3IDE4LjYxMjFMMTUuMTAwNSAxMy45NTA5QzE0Ljc4MjkgMTMuNjMzMiAxNC4yNjg1IDEzLjYzMzIgMTMuOTUwOSAxMy45NTA5QzEzLjYzMzIgMTQuMjY4MiAxMy42MzMyIDE0Ljc4MzEgMTMuOTUwOSAxNS4xMDA1TDE4LjYxMjEgMTkuNzYxN0MxOC43NzA5IDE5LjkyMDUgMTguOTc4OCAxOS45OTk5IDE5LjE4NjkgMTkuOTk5OUMxOS4zOTQ4IDE5Ljk5OTkgMTkuNjAyOSAxOS45MjA1IDE5Ljc2MTcgMTkuNzYxN0MyMC4wNzk0IDE5LjQ0NDQgMjAuMDc5NCAxOC45Mjk1IDE5Ljc2MTcgMTguNjEyMVpcIiBmaWxsPVwiYmxhY2tcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgdGl0bGUgb3IgYW55IGtleXdvcmRcIiBvbkNoYW5nZT17KGUpID0+IGZpbHRlclRpdGxlcyhlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgeyBmaWx0ZXJlZFRpdGxlcy5sZW5ndGggIT0wICYmKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJveFRpdGxlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCb3hIZWFkZXJ9PlNob3dpbmcgQmxvZ3MgcmVsYXRlZCB0byBcIntzZWFyY2hWYWx1ZX1cIjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZFRpdGxlcy5zbGljZSgwLDEwKS5tYXAoKHBvc3QsaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpbmsgaHJlZj1cIi9ibG9nL1tzbHVnXVwiIGFzPXtgL2Jsb2cvJHtwb3N0LnNsdWd9YH0ga2V5PXtpbmRleH0+PGE+PGRpdiAgY2xhc3NOYW1lPXtzdHlsZXMucG9zdFRpdGxlc30+e3Bvc3QudGl0bGV9PC9kaXY+PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX0gICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRmlsdGVyRGl2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdFRhZ3N9PjxwIG9uQ2xpY2s9eygpPT5oYW5kbGVUYWdDbGljayhudWxsKX0+QWxsPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3RzLnBvc3RzLm1hcCgocG9zdCxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMucG9zdFRhZ3N9Pntwb3N0LnRhZ3MubWFwKCh0YWcsIGluZGV4KT0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpbmRleH0gb25DbGljaz17KCk9PmhhbmRsZVRhZ0NsaWNrKHRhZy5zbHVnKX0+e3RhZy5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BlogPageTagFilteringBlock.js\n");

/***/ })

});