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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogPageFilteringBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/blogPageTagFilteringBlock.module.css */ \"./components/css/blogPageTagFilteringBlock.module.css\");\n/* harmony import */ var _css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_BlogPageTagFilteringBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/BlogPageTagFilteringBlock */ \"./data/BlogPageTagFilteringBlock.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/Prernat/Documents/HOUNDSTOOTH - GUILD CAPITAL/DEV-PROJECTS/voyage-web-updated/components/BlogPageTagFilteringBlock.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction BlogPageFilteringBlock(_ref) {\n  _s();\n\n  var _this = this;\n\n  var posts = _ref.posts,\n      handleTagClick = _ref.handleTagClick,\n      handleSearch = _ref.handleSearch;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      filteredTitles = _useState[0],\n      setFilteredTitles = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      searchValue = _useState2[0],\n      setSearchValue = _useState2[1]; //debouncing the search term displayed \n  // const debouncedSave = debounce(() => setSearchValue(searchVal), 1000 )\n\n\n  var debouncedSave = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(function (searchVal) {\n    return setSearchValue(searchVal);\n  }, 500), []);\n\n  var filterTitles = function filterTitles(searchVal) {\n    //console.log(\"search val is\", searchVal);\n    debouncedSave(searchVal);\n    var filteredTitles = posts.posts.filter(function (val) {\n      return val.title.toLowerCase().includes(searchVal.toLowerCase());\n    });\n\n    if (searchVal == \"\") {\n      setFilteredTitles([]);\n    } else {\n      setFilteredTitles(filteredTitles);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().tagFilteringSection),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container \".concat((_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().filterSearchDiv)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().SearchDiv),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().searchIcon),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            width: \"20\",\n            height: \"20\",\n            viewBox: \"0 0 20 20\",\n            fill: \"none\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n              d: \"M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z\",\n              fill: \"black\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 25\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n              d: \"M19.7617 18.6121L15.1005 13.9509C14.7829 13.6332 14.2685 13.6332 13.9509 13.9509C13.6332 14.2682 13.6332 14.7831 13.9509 15.1005L18.6121 19.7617C18.7709 19.9205 18.9788 19.9999 19.1869 19.9999C19.3948 19.9999 19.6029 19.9205 19.7617 19.7617C20.0794 19.4444 20.0794 18.9295 19.7617 18.6121Z\",\n              fill: \"black\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 25\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Search by title or any keyword\",\n          onChange: function onChange(e) {\n            return filterTitles(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, this), filteredTitles.length != 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().searchBoxTitles),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().searchBoxHeader),\n            children: [\"Showing Blogs related to \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              children: [\"\\\"\", searchValue, \"\\\"\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 88\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 25\n          }, this), filteredTitles.slice(0, 10).map(function (post, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: \"/blog/[slug]\",\n              as: \"/blog/\".concat(post.slug),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().postTitles),\n                  children: post.title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 51,\n                  columnNumber: 103\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 100\n              }, _this)\n            }, index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 36\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().FilterDiv),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().postTags),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            onClick: function onClick() {\n              return handleTagClick(null);\n            },\n            children: \"All\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 58\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 25\n        }, this), _data_BlogPageTagFilteringBlock__WEBPACK_IMPORTED_MODULE_4__.BlogPageCategoriesData.map(function (category, index) {\n          return (\n            /*#__PURE__*/\n            // <div key={index} className={styles.postTags}>{post.tags.map((tag, index)=> (\n            //     <p key={index} onClick={()=>handleTagClick(tag.slug)}>{tag.name}</p>\n            // ))}</div>\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: (_css_blogPageTagFilteringBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().postTags),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: function onClick() {\n                  return handleTagClick(category.slug);\n                },\n                children: category.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 33\n              }, _this)\n            }, index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 29\n            }, _this)\n          );\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 14\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, this);\n}\n\n_s(BlogPageFilteringBlock, \"pufZnpRTqy91jhiosqnzdrQ7vlI=\");\n\n_c = BlogPageFilteringBlock;\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogPageFilteringBlock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUGFnZVRhZ0ZpbHRlcmluZ0Jsb2NrLmpzPzJkYTUiXSwibmFtZXMiOlsiQmxvZ1BhZ2VGaWx0ZXJpbmdCbG9jayIsInBvc3RzIiwiaGFuZGxlVGFnQ2xpY2siLCJoYW5kbGVTZWFyY2giLCJ1c2VTdGF0ZSIsImZpbHRlcmVkVGl0bGVzIiwic2V0RmlsdGVyZWRUaXRsZXMiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwiZGVib3VuY2VkU2F2ZSIsInVzZUNhbGxiYWNrIiwiZGVib3VuY2UiLCJzZWFyY2hWYWwiLCJmaWx0ZXJUaXRsZXMiLCJmaWx0ZXIiLCJ2YWwiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzdHlsZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJzbGljZSIsIm1hcCIsInBvc3QiLCJpbmRleCIsInNsdWciLCJCbG9nUGFnZUNhdGVnb3JpZXNEYXRhIiwiY2F0ZWdvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxzQkFBVCxPQUF1RTtBQUFBOztBQUFBOztBQUFBLE1BQXRDQyxLQUFzQyxRQUF0Q0EsS0FBc0M7QUFBQSxNQUEvQkMsY0FBK0IsUUFBL0JBLGNBQStCO0FBQUEsTUFBZkMsWUFBZSxRQUFmQSxZQUFlOztBQUFBLGtCQUN0Q0MsK0NBQVEsQ0FBQyxFQUFELENBRDhCO0FBQUEsTUFDM0VDLGNBRDJFO0FBQUEsTUFDM0RDLGlCQUQyRDs7QUFBQSxtQkFFNUNGLCtDQUFRLENBQUMsRUFBRCxDQUZvQztBQUFBLE1BRTNFRyxXQUYyRTtBQUFBLE1BRTlEQyxjQUY4RCxrQkFJbEY7QUFDQTs7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHQyxrREFBVyxDQUFDQyxzREFBUSxDQUFDLFVBQUNDLFNBQUQ7QUFBQSxXQUFlSixjQUFjLENBQUNJLFNBQUQsQ0FBN0I7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LGNBQWMsQ0FBQyxJQUFELENBQWxCO0FBQUEsYUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURSLEVBRVMyQix1RkFBQSxDQUEyQixVQUFDQyxRQUFELEVBQVVILEtBQVY7QUFBQTtBQUFBO0FBQ3hCO0FBQ0E7QUFDQTtBQUVBO0FBQWlCLHVCQUFTLEVBQUVSLDJGQUE1QjtBQUFBLHFDQUNJO0FBQUcsdUJBQU8sRUFBRTtBQUFBLHlCQUFJakIsY0FBYyxDQUFDNEIsUUFBUSxDQUFDRixJQUFWLENBQWxCO0FBQUEsaUJBQVo7QUFBQSwwQkFBaURFLFFBQVEsQ0FBQ2Q7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGVBQVVXLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUx3QjtBQUFBLFNBQTNCLENBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNDSDs7R0FqRXVCM0Isc0I7O0tBQUFBLHNCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CbG9nUGFnZVRhZ0ZpbHRlcmluZ0Jsb2NrLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jc3MvYmxvZ1BhZ2VUYWdGaWx0ZXJpbmdCbG9jay5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuaW1wb3J0IHsgQmxvZ1BhZ2VDYXRlZ29yaWVzRGF0YSB9IGZyb20gXCIuLi9kYXRhL0Jsb2dQYWdlVGFnRmlsdGVyaW5nQmxvY2tcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nUGFnZUZpbHRlcmluZ0Jsb2NrKHtwb3N0cywgaGFuZGxlVGFnQ2xpY2ssIGhhbmRsZVNlYXJjaH0pIHtcbiAgICBjb25zdCBbZmlsdGVyZWRUaXRsZXMsIHNldEZpbHRlcmVkVGl0bGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIC8vZGVib3VuY2luZyB0aGUgc2VhcmNoIHRlcm0gZGlzcGxheWVkIFxuICAgIC8vIGNvbnN0IGRlYm91bmNlZFNhdmUgPSBkZWJvdW5jZSgoKSA9PiBzZXRTZWFyY2hWYWx1ZShzZWFyY2hWYWwpLCAxMDAwIClcbiAgICBjb25zdCBkZWJvdW5jZWRTYXZlID0gdXNlQ2FsbGJhY2soZGVib3VuY2UoKHNlYXJjaFZhbCkgPT4gc2V0U2VhcmNoVmFsdWUoc2VhcmNoVmFsKSwgNTAwICksIFtdKVxuXG4gICAgY29uc3QgZmlsdGVyVGl0bGVzID0gKHNlYXJjaFZhbCkgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwic2VhcmNoIHZhbCBpc1wiLCBzZWFyY2hWYWwpO1xuXG5cbiAgICAgICAgXG4gICAgICAgIGRlYm91bmNlZFNhdmUoc2VhcmNoVmFsKTtcblxuXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkVGl0bGVzID0gcG9zdHMucG9zdHMuZmlsdGVyKCh2YWwpID0+IHtcbiAgICAgICAgICAgcmV0dXJuIHZhbC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoc2VhcmNoVmFsID09IFwiXCIpe1xuICAgICAgICAgICAgc2V0RmlsdGVyZWRUaXRsZXMoW10pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgc2V0RmlsdGVyZWRUaXRsZXMoZmlsdGVyZWRUaXRsZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMudGFnRmlsdGVyaW5nU2VjdGlvbn0+IFxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29udGFpbmVyICR7c3R5bGVzLmZpbHRlclNlYXJjaERpdn1gfT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VhcmNoRGl2fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJY29ufT5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguODA3NTggMEMzLjk1MTIxIDAgMCAzLjk1MTIxIDAgOC44MDc1OEMwIDEzLjY2NDIgMy45NTEyMSAxNy42MTUyIDguODA3NTggMTcuNjE1MkMxMy42NjQyIDE3LjYxNTIgMTcuNjE1MiAxMy42NjQyIDE3LjYxNTIgOC44MDc1OEMxNy42MTUyIDMuOTUxMjEgMTMuNjY0MiAwIDguODA3NTggMFpNOC44MDc1OCAxNS45ODkyQzQuODQ3NyAxNS45ODkyIDEuNjI2MDIgMTIuNzY3NSAxLjYyNjAyIDguODA3NjJDMS42MjYwMiA0Ljg0NzczIDQuODQ3NyAxLjYyNjAyIDguODA3NTggMS42MjYwMkMxMi43Njc1IDEuNjI2MDIgMTUuOTg5MSA0Ljg0NzcgMTUuOTg5MSA4LjgwNzU4QzE1Ljk4OTEgMTIuNzY3NSAxMi43Njc1IDE1Ljk4OTIgOC44MDc1OCAxNS45ODkyWlwiIGZpbGw9XCJibGFja1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTkuNzYxNyAxOC42MTIxTDE1LjEwMDUgMTMuOTUwOUMxNC43ODI5IDEzLjYzMzIgMTQuMjY4NSAxMy42MzMyIDEzLjk1MDkgMTMuOTUwOUMxMy42MzMyIDE0LjI2ODIgMTMuNjMzMiAxNC43ODMxIDEzLjk1MDkgMTUuMTAwNUwxOC42MTIxIDE5Ljc2MTdDMTguNzcwOSAxOS45MjA1IDE4Ljk3ODggMTkuOTk5OSAxOS4xODY5IDE5Ljk5OTlDMTkuMzk0OCAxOS45OTk5IDE5LjYwMjkgMTkuOTIwNSAxOS43NjE3IDE5Ljc2MTdDMjAuMDc5NCAxOS40NDQ0IDIwLjA3OTQgMTguOTI5NSAxOS43NjE3IDE4LjYxMjFaXCIgZmlsbD1cImJsYWNrXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IHRpdGxlIG9yIGFueSBrZXl3b3JkXCIgb25DaGFuZ2U9eyhlKSA9PiBmaWx0ZXJUaXRsZXMoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgICAgIHsgZmlsdGVyZWRUaXRsZXMubGVuZ3RoICE9MCAmJihcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCb3hUaXRsZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQm94SGVhZGVyfT5TaG93aW5nIEJsb2dzIHJlbGF0ZWQgdG8gPHNwYW4+XCJ7c2VhcmNoVmFsdWV9XCI8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkVGl0bGVzLnNsaWNlKDAsMTApLm1hcCgocG9zdCxpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGluayBocmVmPVwiL2Jsb2cvW3NsdWddXCIgYXM9e2AvYmxvZy8ke3Bvc3Quc2x1Z31gfSBrZXk9e2luZGV4fT48YT48ZGl2ICBjbGFzc05hbWU9e3N0eWxlcy5wb3N0VGl0bGVzfT57cG9zdC50aXRsZX08L2Rpdj48L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfSAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5GaWx0ZXJEaXZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0VGFnc30+PHAgb25DbGljaz17KCk9PmhhbmRsZVRhZ0NsaWNrKG51bGwpfT5BbGw8L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7QmxvZ1BhZ2VDYXRlZ29yaWVzRGF0YS5tYXAoKGNhdGVnb3J5LGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5wb3N0VGFnc30+e3Bvc3QudGFncy5tYXAoKHRhZywgaW5kZXgpPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8cCBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKT0+aGFuZGxlVGFnQ2xpY2sodGFnLnNsdWcpfT57dGFnLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICkpfTwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5wb3N0VGFnc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpPT5oYW5kbGVUYWdDbGljayhjYXRlZ29yeS5zbHVnKX0gPntjYXRlZ29yeS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BlogPageTagFilteringBlock.js\n");

/***/ })

});