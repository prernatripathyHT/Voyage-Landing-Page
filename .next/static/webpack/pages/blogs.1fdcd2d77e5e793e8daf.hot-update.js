/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blogs",{

/***/ "./pages/blogs/index.js":
/*!******************************!*\
  !*** ./pages/blogs/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_BlogPageTagFilteringBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/BlogPageTagFilteringBlock */ \"./components/BlogPageTagFilteringBlock.js\");\n/* harmony import */ var _components_BlogPageHeroBanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/BlogPageHeroBanner */ \"./components/BlogPageHeroBanner.js\");\n/* harmony import */ var _components_BlogPageFeaturedPosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/BlogPageFeaturedPosts */ \"./components/BlogPageFeaturedPosts.js\");\n/* harmony import */ var _components_BlogPageSignupBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/BlogPageSignupBlock */ \"./components/BlogPageSignupBlock.js\");\n/* harmony import */ var _components_BlogPageAllPosts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/BlogPageAllPosts */ \"./components/BlogPageAllPosts.js\");\n/* harmony import */ var _components_BlogPageBottomBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/BlogPageBottomBlock */ \"./components/BlogPageBottomBlock.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_RequestForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/RequestForm */ \"./components/RequestForm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/Prernat/Documents/HOUNDSTOOTH - GUILD CAPITAL/DEV-PROJECTS/voyage-web-updated/pages/blogs/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n // const {CONTENT_API_KEY, BLOG_URL} = process.env;\n\nvar CONTENT_API_KEY = 'c7bafa2c2c579763b605f57fb6';\nvar BLOG_URL = 'https://sms-marketing-resources.ghost.io/';\n\nvar getFeaturedPosts = function getFeaturedPosts() {\n  return fetch(\"\".concat(BLOG_URL, \"/ghost/api/v3/content/posts/?key=\").concat(CONTENT_API_KEY, \"&include=authors,tags&filter=featured:true\")).then(function (res) {\n    return res.json();\n  });\n};\n\nvar getFilteredPosts = /*#__PURE__*/function () {\n  var _ref = (0,_Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(key) {\n    var tagName, myURL, _res, newRes, res;\n\n    return _Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            tagName = key.queryKey[1].tag; // console.log(\"current tag name : \", tagName);\n\n            if (!tagName) {\n              _context.next = 8;\n              break;\n            }\n\n            //if tags are present - this is where we are going to filter the posts\n            myURL = \"\".concat(BLOG_URL, \"/ghost/api/v3/content/posts/?key=\").concat(CONTENT_API_KEY, \"&include=authors,tags&filter=tag:[\").concat(tagName, \"]\"); //console.log(\"URL \", myURL)\n\n            _context.next = 5;\n            return fetch(myURL);\n\n          case 5:\n            _res = _context.sent;\n            newRes = _res.json();\n            return _context.abrupt(\"return\", newRes);\n\n          case 8:\n            _context.next = 10;\n            return fetch(\"\".concat(BLOG_URL, \"/ghost/api/v3/content/posts/?key=\").concat(CONTENT_API_KEY, \"&include=authors,tags\"));\n\n          case 10:\n            res = _context.sent;\n            return _context.abrupt(\"return\", res.json());\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getFilteredPosts(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar getFilteredPostsWithSearch = /*#__PURE__*/function () {\n  var _ref2 = (0,_Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(key) {\n    var searchTitle, myURL, _res2, newRes, res;\n\n    return _Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            console.log(\"current Key\", key);\n            searchTitle = key.queryKey[1].search;\n\n            if (!searchTitle) {\n              _context2.next = 9;\n              break;\n            }\n\n            myURL = \"\".concat(BLOG_URL, \"/ghost/api/v3/content/posts/?key=\").concat(CONTENT_API_KEY, \"&include=authors,tags&filter=slug:'\").concat(searchTitle, \"'\");\n            _context2.next = 6;\n            return fetch(myURL);\n\n          case 6:\n            _res2 = _context2.sent;\n            newRes = _res2.json();\n            return _context2.abrupt(\"return\", newRes);\n\n          case 9:\n            _context2.next = 11;\n            return fetch(\"\".concat(BLOG_URL, \"/ghost/api/v3/content/posts/?key=\").concat(CONTENT_API_KEY, \"&include=authors,tags\"));\n\n          case 11:\n            res = _context2.sent;\n            return _context2.abrupt(\"return\", res.json());\n\n          case 13:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function getFilteredPostsWithSearch(_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar __N_SSG = true;\nfunction Home(_ref3) {\n  _s();\n\n  var posts = _ref3.posts;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(\"close\"),\n      formState = _useState[0],\n      setFormState = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(''),\n      tagName = _useState2[0],\n      setTagName = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(''),\n      searchTerm = _useState3[0],\n      setSearchTerm = _useState3[1]; //REACT - QUERY : Featured Posts in the Hero Banner\n  //const {data:featuredPosts,error} = useQuery(['featured posts'], () => getFeaturedPosts());\n  //console.log(\"featuredPosts\", featuredPosts);\n  //For filtering with TAGS\n\n\n  var queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_14__.useQueryClient)();\n\n  var _useQuery = (0,react_query__WEBPACK_IMPORTED_MODULE_14__.useQuery)(['filtered posts', {\n    tag: tagName\n  }], getFilteredPosts, {\n    initialData: posts\n  }),\n      isLoading = _useQuery.isLoading,\n      filteredPosts = _useQuery.data,\n      status = _useQuery.status; //to remove the loading page add the initialdata value here\n  // console.log(\"filteredPosts are\", filteredPosts, \"status\", status);\n  //For filtering with SEARCH\n  // const {data:filteredPostsWithSearch} = useQuery(['search filter', {search: searchTitle},], getFilteredPostsWithSearch)\n  // console.log(\"search posts with new search\", filteredPostsWithSearch);\n\n\n  var allPosts = filteredPosts; // Filter the posts based on SEARCH-TERM\n  //  allPosts = filteredPosts.posts.filter(val => {\n  //   if(searchTerm === \"\"){\n  //     return val\n  //   } else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){\n  //     return val\n  //   }\n  // })\n  //console.log(\"all posts after search\", allPosts);\n\n  if (isLoading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"App\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        style: {\n          width: \"100vw\",\n          height: \"100vh\",\n          opacity: \".5\",\n          display: \"flex\",\n          alignItems: \"center\",\n          justifyContent: \"center\"\n        },\n        children: \"fetching posts...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 10\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 7\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_11___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"SMS marketing and text messaging for your ecommerce business. Get 40%+ CTR and 90%+ open rates. Get a demo today!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"robots\",\n        content: \"index, follow\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:title\",\n        content: \"SMS Marketing for Ecommerce | Voyage Mobile\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        content: \"width=device-width, initial-scale=1.0,maximum-scale=1.0, viewport-fit=cover\",\n        name: \"viewport\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 146,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Voyage SMS: Text Marketing for eCommerce\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"main\",\n      id: \"main-target\",\n      \"data-scroll-container\": true,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestForm__WEBPACK_IMPORTED_MODULE_12__.default, {\n        formState: formState,\n        setFormState: setFormState\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {\n        setFormState: setFormState\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 151,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageHeroBanner__WEBPACK_IMPORTED_MODULE_6__.default, {\n        posts: posts\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 152,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageTagFilteringBlock__WEBPACK_IMPORTED_MODULE_5__.default, {\n        posts: posts,\n        handleTagClick: setTagName,\n        handleSearch: setSearchTerm\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageFeaturedPosts__WEBPACK_IMPORTED_MODULE_7__.default, {\n        posts: allPosts\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 154,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageSignupBlock__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 155,\n        columnNumber: 9\n      }, this), allPosts.posts.length > 6 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageAllPosts__WEBPACK_IMPORTED_MODULE_9__.default, {\n        posts: allPosts\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 156,\n        columnNumber: 39\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageBottomBlock__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 157,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {\n        setFormState: setFormState\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"Wv1cnyxXxinmsz24+wpIDNfCpAA=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_14__.useQueryClient, react_query__WEBPACK_IMPORTED_MODULE_14__.useQuery];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3MvaW5kZXguanM/YzA0MCJdLCJuYW1lcyI6WyJDT05URU5UX0FQSV9LRVkiLCJCTE9HX1VSTCIsImdldEZlYXR1cmVkUG9zdHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZ2V0RmlsdGVyZWRQb3N0cyIsImtleSIsInRhZ05hbWUiLCJxdWVyeUtleSIsInRhZyIsIm15VVJMIiwibmV3UmVzIiwiZ2V0RmlsdGVyZWRQb3N0c1dpdGhTZWFyY2giLCJjb25zb2xlIiwibG9nIiwic2VhcmNoVGl0bGUiLCJzZWFyY2giLCJIb21lIiwicG9zdHMiLCJ1c2VTdGF0ZSIsImZvcm1TdGF0ZSIsInNldEZvcm1TdGF0ZSIsInNldFRhZ05hbWUiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInF1ZXJ5Q2xpZW50IiwidXNlUXVlcnlDbGllbnQiLCJ1c2VRdWVyeSIsImluaXRpYWxEYXRhIiwiaXNMb2FkaW5nIiwiZmlsdGVyZWRQb3N0cyIsImRhdGEiLCJzdGF0dXMiLCJhbGxQb3N0cyIsIndpZHRoIiwiaGVpZ2h0Iiwib3BhY2l0eSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsNEJBQXhCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLDJDQUFqQjs7QUFtQkEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFNBQVFDLEtBQUssV0FBSUYsUUFBSiw4Q0FBZ0RELGVBQWhELGdEQUFMLENBQWtISSxJQUFsSCxDQUF1SCxVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUEx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R0UsOERBQUMsbUVBQUQ7QUFBb0IsYUFBSyxFQUFFSDtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRSw4REFBQywwRUFBRDtBQUEyQixhQUFLLEVBQUVBLEtBQWxDO0FBQXlDLHNCQUFjLEVBQUVJLFVBQXpEO0FBQXFFLG9CQUFZLEVBQUVFO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFLDhEQUFDLHNFQUFEO0FBQXVCLGFBQUssRUFBRVM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBTUUsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLEVBT0dBLFFBQVEsQ0FBQ2YsS0FBVCxDQUFlc0IsTUFBZixHQUF3QixDQUF4QixpQkFBNkIsOERBQUMsaUVBQUQ7QUFBa0IsYUFBSyxFQUFFUDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUGhDLGVBUUUsOERBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLGVBU0UsOERBQUMsdURBQUQ7QUFBUSxvQkFBWSxFQUFFWjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEY7QUFBQSxrQkFERjtBQTRCRDs7R0FqRnVCSixJO1VBY0FTLHdELEVBQzRCQyxrRDs7O0tBZjVCVixJIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZ3MvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBCbG9nUGFnZVRhZ0ZpbHRlcmluZ0Jsb2NrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jsb2dQYWdlVGFnRmlsdGVyaW5nQmxvY2tcIjtcbmltcG9ydCBCbG9nUGFnZUhlcm9CYW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvZ1BhZ2VIZXJvQmFubmVyXCI7XG5pbXBvcnQgQmxvZ1BhZ2VGZWF0dXJlZFBvc3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jsb2dQYWdlRmVhdHVyZWRQb3N0c1wiO1xuaW1wb3J0IEJsb2dQYWdlU2lnbnVwQmxvY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvZ1BhZ2VTaWdudXBCbG9ja1wiO1xuaW1wb3J0IEJsb2dQYWdlQWxsUG9zdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvZ1BhZ2VBbGxQb3N0c1wiO1xuaW1wb3J0IEJsb2dQYWdlQm90dG9tQmxvY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvZ1BhZ2VCb3R0b21CbG9ja1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlcXVlc3RGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1JlcXVlc3RGb3JtXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VRdWVyaWVzLCB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQsIHVzZVF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5fSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8vIGNvbnN0IHtDT05URU5UX0FQSV9LRVksIEJMT0dfVVJMfSA9IHByb2Nlc3MuZW52O1xuXG5jb25zdCBDT05URU5UX0FQSV9LRVkgPSAnYzdiYWZhMmMyYzU3OTc2M2I2MDVmNTdmYjYnO1xuY29uc3QgQkxPR19VUkwgPSAnaHR0cHM6Ly9zbXMtbWFya2V0aW5nLXJlc291cmNlcy5naG9zdC5pby8nO1xuXG5cblxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0JMT0dfVVJMfS9naG9zdC9hcGkvdjMvY29udGVudC9wb3N0cy8/a2V5PSR7Q09OVEVOVF9BUElfS0VZfSZpbmNsdWRlPWF1dGhvcnMsdGFnc2ApO1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7cG9zdHN9XG4gIH1cbn1cblxuXG5cblxuY29uc3QgZ2V0RmVhdHVyZWRQb3N0cyA9ICgpID0+IHtcbiAgcmV0dXJuICBmZXRjaChgJHtCTE9HX1VSTH0vZ2hvc3QvYXBpL3YzL2NvbnRlbnQvcG9zdHMvP2tleT0ke0NPTlRFTlRfQVBJX0tFWX0maW5jbHVkZT1hdXRob3JzLHRhZ3MmZmlsdGVyPWZlYXR1cmVkOnRydWVgKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbn1cblxuXG5cblxuY29uc3QgZ2V0RmlsdGVyZWRQb3N0cyA9IGFzeW5jKGtleSkgPT4ge1xuICBjb25zdCB0YWdOYW1lID0ga2V5LnF1ZXJ5S2V5WzFdLnRhZztcbiAvLyBjb25zb2xlLmxvZyhcImN1cnJlbnQgdGFnIG5hbWUgOiBcIiwgdGFnTmFtZSk7XG4gIGlmKHRhZ05hbWUpeyAgIC8vaWYgdGFncyBhcmUgcHJlc2VudCAtIHRoaXMgaXMgd2hlcmUgd2UgYXJlIGdvaW5nIHRvIGZpbHRlciB0aGUgcG9zdHNcbiAgICBjb25zdCBteVVSTCA9IGAke0JMT0dfVVJMfS9naG9zdC9hcGkvdjMvY29udGVudC9wb3N0cy8/a2V5PSR7Q09OVEVOVF9BUElfS0VZfSZpbmNsdWRlPWF1dGhvcnMsdGFncyZmaWx0ZXI9dGFnOlske3RhZ05hbWV9XWA7XG4gICAgIC8vY29uc29sZS5sb2coXCJVUkwgXCIsIG15VVJMKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKG15VVJMKTtcbiAgICBjb25zdCBuZXdSZXMgPSByZXMuanNvbigpO1xuICAgIHJldHVybiBuZXdSZXM7XG4gIH1cblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtCTE9HX1VSTH0vZ2hvc3QvYXBpL3YzL2NvbnRlbnQvcG9zdHMvP2tleT0ke0NPTlRFTlRfQVBJX0tFWX0maW5jbHVkZT1hdXRob3JzLHRhZ3NgKTtcbiAgcmV0dXJuIHJlcy5qc29uKCk7XG5cbn1cblxuXG5cbmNvbnN0IGdldEZpbHRlcmVkUG9zdHNXaXRoU2VhcmNoID0gYXN5bmMoa2V5KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiY3VycmVudCBLZXlcIiwga2V5KTtcbiAgY29uc3Qgc2VhcmNoVGl0bGUgPSBrZXkucXVlcnlLZXlbMV0uc2VhcmNoO1xuXG4gIGlmKHNlYXJjaFRpdGxlKXsgICBcbiAgICBjb25zdCBteVVSTCA9IGAke0JMT0dfVVJMfS9naG9zdC9hcGkvdjMvY29udGVudC9wb3N0cy8/a2V5PSR7Q09OVEVOVF9BUElfS0VZfSZpbmNsdWRlPWF1dGhvcnMsdGFncyZmaWx0ZXI9c2x1ZzonJHtzZWFyY2hUaXRsZX0nYDtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChteVVSTCk7XG4gICAgY29uc3QgbmV3UmVzID0gcmVzLmpzb24oKTtcbiAgICByZXR1cm4gbmV3UmVzO1xuICB9XG5cblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtCTE9HX1VSTH0vZ2hvc3QvYXBpL3YzL2NvbnRlbnQvcG9zdHMvP2tleT0ke0NPTlRFTlRfQVBJX0tFWX0maW5jbHVkZT1hdXRob3JzLHRhZ3NgKTtcbiAgcmV0dXJuIHJlcy5qc29uKCk7XG59XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7cG9zdHN9KSB7XG4gIGNvbnN0IFtmb3JtU3RhdGUsIHNldEZvcm1TdGF0ZV0gPSB1c2VTdGF0ZShcImNsb3NlXCIpO1xuICBjb25zdCBbdGFnTmFtZSwgc2V0VGFnTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcblxuXG5cbiAgICAvL1JFQUNUIC0gUVVFUlkgOiBGZWF0dXJlZCBQb3N0cyBpbiB0aGUgSGVybyBCYW5uZXJcbiAgICAvL2NvbnN0IHtkYXRhOmZlYXR1cmVkUG9zdHMsZXJyb3J9ID0gdXNlUXVlcnkoWydmZWF0dXJlZCBwb3N0cyddLCAoKSA9PiBnZXRGZWF0dXJlZFBvc3RzKCkpO1xuICAgIC8vY29uc29sZS5sb2coXCJmZWF0dXJlZFBvc3RzXCIsIGZlYXR1cmVkUG9zdHMpO1xuXG5cblxuICAgIC8vRm9yIGZpbHRlcmluZyB3aXRoIFRBR1NcbiAgICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gICAgY29uc3Qge2lzTG9hZGluZywgZGF0YTpmaWx0ZXJlZFBvc3RzLCBzdGF0dXN9ID0gdXNlUXVlcnkoWydmaWx0ZXJlZCBwb3N0cycsIHt0YWc6IHRhZ05hbWV9XSwgZ2V0RmlsdGVyZWRQb3N0cywge2luaXRpYWxEYXRhOnBvc3RzfSkgLy90byByZW1vdmUgdGhlIGxvYWRpbmcgcGFnZSBhZGQgdGhlIGluaXRpYWxkYXRhIHZhbHVlIGhlcmVcbiAgICAvLyBjb25zb2xlLmxvZyhcImZpbHRlcmVkUG9zdHMgYXJlXCIsIGZpbHRlcmVkUG9zdHMsIFwic3RhdHVzXCIsIHN0YXR1cyk7XG5cblxuXG4gICAgLy9Gb3IgZmlsdGVyaW5nIHdpdGggU0VBUkNIXG4gICAgLy8gY29uc3Qge2RhdGE6ZmlsdGVyZWRQb3N0c1dpdGhTZWFyY2h9ID0gdXNlUXVlcnkoWydzZWFyY2ggZmlsdGVyJywge3NlYXJjaDogc2VhcmNoVGl0bGV9LF0sIGdldEZpbHRlcmVkUG9zdHNXaXRoU2VhcmNoKVxuICAgIC8vIGNvbnNvbGUubG9nKFwic2VhcmNoIHBvc3RzIHdpdGggbmV3IHNlYXJjaFwiLCBmaWx0ZXJlZFBvc3RzV2l0aFNlYXJjaCk7XG5cblxuICAgIFxuICAgIHZhciBhbGxQb3N0cyA9IGZpbHRlcmVkUG9zdHM7XG4gICAgLy8gRmlsdGVyIHRoZSBwb3N0cyBiYXNlZCBvbiBTRUFSQ0gtVEVSTVxuICAgIC8vICBhbGxQb3N0cyA9IGZpbHRlcmVkUG9zdHMucG9zdHMuZmlsdGVyKHZhbCA9PiB7XG4gICAgLy8gICBpZihzZWFyY2hUZXJtID09PSBcIlwiKXtcbiAgICAvLyAgICAgcmV0dXJuIHZhbFxuICAgIC8vICAgfSBlbHNlIGlmKHZhbC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkpe1xuICAgIC8vICAgICByZXR1cm4gdmFsXG4gICAgLy8gICB9XG4gICAgLy8gfSlcbiAgICAgLy9jb25zb2xlLmxvZyhcImFsbCBwb3N0cyBhZnRlciBzZWFyY2hcIiwgYWxsUG9zdHMpO1xuXG5cbiAgICBcblxuICAgICBcblxuICAgIGlmKGlzTG9hZGluZyl7XG4gICAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgIDxoMiBzdHlsZT17e3dpZHRoOlwiMTAwdndcIixoZWlnaHQ6XCIxMDB2aFwiLG9wYWNpdHk6XCIuNVwiLGRpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PmZldGNoaW5nIHBvc3RzLi4uPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJTTVMgbWFya2V0aW5nIGFuZCB0ZXh0IG1lc3NhZ2luZyBmb3IgeW91ciBlY29tbWVyY2UgYnVzaW5lc3MuIEdldCA0MCUrIENUUiBhbmQgOTAlKyBvcGVuIHJhdGVzLiBHZXQgYSBkZW1vIHRvZGF5IVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiaW5kZXgsIGZvbGxvd1wiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzp0aXRsZVwiXG4gICAgICAgICAgY29udGVudD1cIlNNUyBNYXJrZXRpbmcgZm9yIEVjb21tZXJjZSB8IFZveWFnZSBNb2JpbGVcIlxuICAgICAgICA+PC9tZXRhPlxuICAgICAgICA8bWV0YSBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCxtYXhpbXVtLXNjYWxlPTEuMCwgdmlld3BvcnQtZml0PWNvdmVyXCIgbmFtZT1cInZpZXdwb3J0XCIvPlxuICAgICAgICA8dGl0bGU+Vm95YWdlIFNNUzogVGV4dCBNYXJrZXRpbmcgZm9yIGVDb21tZXJjZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIiBpZD1cIm1haW4tdGFyZ2V0XCIgZGF0YS1zY3JvbGwtY29udGFpbmVyPlxuICAgICAgICA8UmVxdWVzdEZvcm0gZm9ybVN0YXRlPXtmb3JtU3RhdGV9IHNldEZvcm1TdGF0ZT17c2V0Rm9ybVN0YXRlfSAvPlxuICAgICAgICA8SGVhZGVyIHNldEZvcm1TdGF0ZT17c2V0Rm9ybVN0YXRlfSAvPlxuICAgICAgICA8QmxvZ1BhZ2VIZXJvQmFubmVyIHBvc3RzPXtwb3N0c30gLz5cbiAgICAgICAgPEJsb2dQYWdlVGFnRmlsdGVyaW5nQmxvY2sgcG9zdHM9e3Bvc3RzfSBoYW5kbGVUYWdDbGljaz17c2V0VGFnTmFtZX0gaGFuZGxlU2VhcmNoPXtzZXRTZWFyY2hUZXJtfS8+XG4gICAgICAgIDxCbG9nUGFnZUZlYXR1cmVkUG9zdHMgcG9zdHM9e2FsbFBvc3RzfSAvPlxuICAgICAgICA8QmxvZ1BhZ2VTaWdudXBCbG9jayAvPlxuICAgICAgICB7YWxsUG9zdHMucG9zdHMubGVuZ3RoID4gNiAmJiA8QmxvZ1BhZ2VBbGxQb3N0cyBwb3N0cz17YWxsUG9zdHN9IC8+fVxuICAgICAgICA8QmxvZ1BhZ2VCb3R0b21CbG9jayAvPlxuICAgICAgICA8Rm9vdGVyIHNldEZvcm1TdGF0ZT17c2V0Rm9ybVN0YXRlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blogs/index.js\n");

/***/ })

});