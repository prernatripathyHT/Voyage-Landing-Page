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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_BlogPageTagFilteringBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/BlogPageTagFilteringBlock */ \"./components/BlogPageTagFilteringBlock.js\");\n/* harmony import */ var _components_BlogPageHeroBanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/BlogPageHeroBanner */ \"./components/BlogPageHeroBanner.js\");\n/* harmony import */ var _components_BlogPageFeaturedPosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/BlogPageFeaturedPosts */ \"./components/BlogPageFeaturedPosts.js\");\n/* harmony import */ var _components_BlogPageSignupBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/BlogPageSignupBlock */ \"./components/BlogPageSignupBlock.js\");\n/* harmony import */ var _components_BlogPageAllPosts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/BlogPageAllPosts */ \"./components/BlogPageAllPosts.js\");\n/* harmony import */ var _components_BlogPageBottomBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/BlogPageBottomBlock */ \"./components/BlogPageBottomBlock.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_RequestForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/RequestForm */ \"./components/RequestForm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/Prernat/Documents/HOUNDSTOOTH - GUILD CAPITAL/DEV-PROJECTS/voyage-web-updated/pages/blogs/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n // const {CONTENT_API_KEY, BLOG_URL} = process.env;\n// const CONTENT_API_KEY = 'c7bafa2c2c579763b605f57fb6';\n// const BLOG_URL = 'https://sms-marketing-resources.ghost.io/';\n\nvar CONTENT_API_KEY = \"c7bafa2c2c579763b605f57fb6\";\nvar BLOG_URL = \"https://sms-marketing-resources.ghost.io\";\n\nvar getFeaturedPosts = function getFeaturedPosts() {\n  return fetch(\"\".concat(BLOG_URL, \"/ghost/api/v3/content/posts/?key=\").concat(CONTENT_API_KEY, \"&include=authors,tags&filter=featured:true\")).then(function (res) {\n    return res.json();\n  });\n};\n\nvar getFilteredPosts = /*#__PURE__*/function () {\n  var _ref = (0,_Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(key) {\n    var tagName, myURL, _res, newRes, res;\n\n    return _Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            tagName = key.queryKey[1].tag; //console.log(\"current tag name : \", tagName);\n\n            if (!tagName) {\n              _context.next = 8;\n              break;\n            }\n\n            //if tags are present - this is where we are going to filter the posts\n            // const myURL = `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags&filter=tag:[${tagName}]&limit=all`;\n            myURL = \"\".concat(BLOG_URL, \"/ghost/api/v3/content/posts/?key=\").concat(CONTENT_API_KEY, \"&include=authors,tags&filter=tag:[blog]&limit=all\"); //console.log(\"URL \", myURL)\n\n            _context.next = 5;\n            return fetch(myURL);\n\n          case 5:\n            _res = _context.sent;\n            newRes = _res.json();\n            return _context.abrupt(\"return\", newRes);\n\n          case 8:\n            _context.next = 10;\n            return fetch(\"\".concat(BLOG_URL, \"/ghost/api/v3/content/posts/?key=\").concat(CONTENT_API_KEY, \"&include=authors,tags&filter=tag:blog&limit=all\"));\n\n          case 10:\n            res = _context.sent;\n            return _context.abrupt(\"return\", res.json());\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getFilteredPosts(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar getFilteredPostsWithSearch = /*#__PURE__*/function () {\n  var _ref2 = (0,_Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(key) {\n    var searchTitle, myURL, _res2, newRes, res;\n\n    return _Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            //console.log(\"current Key\", key);\n            searchTitle = key.queryKey[1].search;\n\n            if (!searchTitle) {\n              _context2.next = 8;\n              break;\n            }\n\n            myURL = \"\".concat(BLOG_URL, \"/ghost/api/v3/content/posts/?key=\").concat(CONTENT_API_KEY, \"&include=authors,tags&filter=slug:'\").concat(searchTitle, \"'\");\n            _context2.next = 5;\n            return fetch(myURL);\n\n          case 5:\n            _res2 = _context2.sent;\n            newRes = _res2.json();\n            return _context2.abrupt(\"return\", newRes);\n\n          case 8:\n            _context2.next = 10;\n            return fetch(\"\".concat(BLOG_URL, \"/ghost/api/v3/content/posts/?key=\").concat(CONTENT_API_KEY, \"&include=authors,tags\"));\n\n          case 10:\n            res = _context2.sent;\n            return _context2.abrupt(\"return\", res.json());\n\n          case 12:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function getFilteredPostsWithSearch(_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar __N_SSG = true;\nfunction Home(_ref3) {\n  _s();\n\n  var posts = _ref3.posts;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(\"close\"),\n      formState = _useState[0],\n      setFormState = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(''),\n      tagName = _useState2[0],\n      setTagName = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(''),\n      searchTerm = _useState3[0],\n      setSearchTerm = _useState3[1]; //REACT - QUERY : Featured Posts in the Hero Banner\n  //const {data:featuredPosts,error} = useQuery(['featured posts'], () => getFeaturedPosts());\n  //console.log(\"featuredPosts\", featuredPosts);\n  //For filtering with TAGS\n\n\n  var _useQuery = (0,react_query__WEBPACK_IMPORTED_MODULE_14__.useQuery)(['filtered posts', {\n    tag: tagName\n  }], getFilteredPosts, {\n    initialData: posts\n  }),\n      isLoading = _useQuery.isLoading,\n      filteredPosts = _useQuery.data,\n      status = _useQuery.status; //to remove the loading page add the initialdata value here\n  //console.log(\"filteredPosts are\", filteredPosts, \"status\", status);\n\n\n  var allPosts = filteredPosts;\n\n  if (isLoading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"App\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        style: {\n          width: \"100vw\",\n          height: \"100vh\",\n          opacity: \".5\",\n          display: \"flex\",\n          alignItems: \"center\",\n          justifyContent: \"center\"\n        },\n        children: \"fetching posts...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 10\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_11___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"SMS marketing and text messaging for your ecommerce business. Get 40%+ CTR and 90%+ open rates. Get a demo today!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"robots\",\n        content: \"index, follow\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:title\",\n        content: \"SMS Marketing for Ecommerce | Voyage Mobile\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        content: \"width=device-width, initial-scale=1.0,maximum-scale=1.0, viewport-fit=cover\",\n        name: \"viewport\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Voyage SMS: Text Marketing for eCommerce\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"main\",\n      id: \"main-target\",\n      \"data-scroll-container\": true,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestForm__WEBPACK_IMPORTED_MODULE_12__.default, {\n        formState: formState,\n        setFormState: setFormState\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {\n        setFormState: setFormState\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 144,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageHeroBanner__WEBPACK_IMPORTED_MODULE_6__.default, {\n        posts: posts\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageTagFilteringBlock__WEBPACK_IMPORTED_MODULE_5__.default, {\n        posts: posts,\n        handleTagClick: setTagName,\n        handleSearch: setSearchTerm\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 146,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageFeaturedPosts__WEBPACK_IMPORTED_MODULE_7__.default, {\n        posts: allPosts\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageSignupBlock__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 148,\n        columnNumber: 9\n      }, this), allPosts.posts.length > 6 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageAllPosts__WEBPACK_IMPORTED_MODULE_9__.default, {\n        posts: allPosts\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 39\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageBottomBlock__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {\n        setFormState: setFormState\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 151,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"MMkwYGf3O8OUzRhfHfzpmLWLez0=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_14__.useQuery];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3MvaW5kZXguanM/YzA0MCJdLCJuYW1lcyI6WyJDT05URU5UX0FQSV9LRVkiLCJwcm9jZXNzIiwiQkxPR19VUkwiLCJnZXRGZWF0dXJlZFBvc3RzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImdldEZpbHRlcmVkUG9zdHMiLCJrZXkiLCJ0YWdOYW1lIiwicXVlcnlLZXkiLCJ0YWciLCJteVVSTCIsIm5ld1JlcyIsImdldEZpbHRlcmVkUG9zdHNXaXRoU2VhcmNoIiwic2VhcmNoVGl0bGUiLCJzZWFyY2giLCJIb21lIiwicG9zdHMiLCJ1c2VTdGF0ZSIsImZvcm1TdGF0ZSIsInNldEZvcm1TdGF0ZSIsInNldFRhZ05hbWUiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInVzZVF1ZXJ5IiwiaW5pdGlhbERhdGEiLCJpc0xvYWRpbmciLCJmaWx0ZXJlZFBvc3RzIiwiZGF0YSIsInN0YXR1cyIsImFsbFBvc3RzIiwid2lkdGgiLCJoZWlnaHQiLCJvcGFjaXR5IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLDRCQUF4QjtBQUNBLElBQU1DLFFBQVEsR0FBR0QsMENBQWpCOztBQXFCQSxJQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsU0FBUUMsS0FBSyxXQUFJRixRQUFKLDhDQUFnREYsZUFBaEQsZ0RBQUwsQ0FBa0hLLElBQWxILENBQXVILFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEdBQTFILENBQVI7QUFDRCxDQUZEOztBQU9BLElB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RSw4REFBQyxzRUFBRDtBQUF1QixhQUFLLEVBQUVPO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixFQU9HQSxRQUFRLENBQUNiLEtBQVQsQ0FBZW9CLE1BQWYsR0FBd0IsQ0FBeEIsaUJBQTZCLDhEQUFDLGlFQUFEO0FBQWtCLGFBQUssRUFBRVA7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBoQyxlQVFFLDhEQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVNFLDhEQUFDLHVEQUFEO0FBQVEsb0JBQVksRUFBRVY7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGO0FBQUEsa0JBREY7QUE0QkQ7O0dBbkV1QkosSTtVQWM0QlEsa0Q7OztLQWQ1QlIsSSIsImZpbGUiOiIuL3BhZ2VzL2Jsb2dzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgQmxvZ1BhZ2VUYWdGaWx0ZXJpbmdCbG9jayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CbG9nUGFnZVRhZ0ZpbHRlcmluZ0Jsb2NrXCI7XG5pbXBvcnQgQmxvZ1BhZ2VIZXJvQmFubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jsb2dQYWdlSGVyb0Jhbm5lclwiO1xuaW1wb3J0IEJsb2dQYWdlRmVhdHVyZWRQb3N0cyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CbG9nUGFnZUZlYXR1cmVkUG9zdHNcIjtcbmltcG9ydCBCbG9nUGFnZVNpZ251cEJsb2NrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jsb2dQYWdlU2lnbnVwQmxvY2tcIjtcbmltcG9ydCBCbG9nUGFnZUFsbFBvc3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jsb2dQYWdlQWxsUG9zdHNcIjtcbmltcG9ydCBCbG9nUGFnZUJvdHRvbUJsb2NrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jsb2dQYWdlQm90dG9tQmxvY2tcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSZXF1ZXN0Rm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0Rm9ybVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlUXVlcmllcywgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50LCB1c2VRdWVyeUVycm9yUmVzZXRCb3VuZGFyeX0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vLyBjb25zdCB7Q09OVEVOVF9BUElfS0VZLCBCTE9HX1VSTH0gPSBwcm9jZXNzLmVudjtcblxuLy8gY29uc3QgQ09OVEVOVF9BUElfS0VZID0gJ2M3YmFmYTJjMmM1Nzk3NjNiNjA1ZjU3ZmI2Jztcbi8vIGNvbnN0IEJMT0dfVVJMID0gJ2h0dHBzOi8vc21zLW1hcmtldGluZy1yZXNvdXJjZXMuZ2hvc3QuaW8vJztcblxuY29uc3QgQ09OVEVOVF9BUElfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWTtcbmNvbnN0IEJMT0dfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkxPR19VUkw7XG5cblxuXG5cblxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0JMT0dfVVJMfS9naG9zdC9hcGkvdjMvY29udGVudC9wb3N0cy8/a2V5PSR7Q09OVEVOVF9BUElfS0VZfSZpbmNsdWRlPWF1dGhvcnMsdGFncyZmaWx0ZXI9dGFnOmJsb2cmb3JkZXI9cHVibGlzaGVkX2F0JTIwZGVzYyZsaW1pdD1hbGxgKTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xuXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge3Bvc3RzfVxuICB9XG59XG5cblxuXG5cbmNvbnN0IGdldEZlYXR1cmVkUG9zdHMgPSAoKSA9PiB7XG4gIHJldHVybiAgZmV0Y2goYCR7QkxPR19VUkx9L2dob3N0L2FwaS92My9jb250ZW50L3Bvc3RzLz9rZXk9JHtDT05URU5UX0FQSV9LRVl9JmluY2x1ZGU9YXV0aG9ycyx0YWdzJmZpbHRlcj1mZWF0dXJlZDp0cnVlYCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG59XG5cblxuXG5cbmNvbnN0IGdldEZpbHRlcmVkUG9zdHMgPSBhc3luYyhrZXkpID0+IHtcbiAgY29uc3QgdGFnTmFtZSA9IGtleS5xdWVyeUtleVsxXS50YWc7XG4gIC8vY29uc29sZS5sb2coXCJjdXJyZW50IHRhZyBuYW1lIDogXCIsIHRhZ05hbWUpO1xuICBpZih0YWdOYW1lKXsgICAvL2lmIHRhZ3MgYXJlIHByZXNlbnQgLSB0aGlzIGlzIHdoZXJlIHdlIGFyZSBnb2luZyB0byBmaWx0ZXIgdGhlIHBvc3RzXG4gICAgLy8gY29uc3QgbXlVUkwgPSBgJHtCTE9HX1VSTH0vZ2hvc3QvYXBpL3YzL2NvbnRlbnQvcG9zdHMvP2tleT0ke0NPTlRFTlRfQVBJX0tFWX0maW5jbHVkZT1hdXRob3JzLHRhZ3MmZmlsdGVyPXRhZzpbJHt0YWdOYW1lfV0mbGltaXQ9YWxsYDtcbiAgICBjb25zdCBteVVSTCA9IGAke0JMT0dfVVJMfS9naG9zdC9hcGkvdjMvY29udGVudC9wb3N0cy8/a2V5PSR7Q09OVEVOVF9BUElfS0VZfSZpbmNsdWRlPWF1dGhvcnMsdGFncyZmaWx0ZXI9dGFnOltibG9nXSZsaW1pdD1hbGxgO1xuXG4gICAgIC8vY29uc29sZS5sb2coXCJVUkwgXCIsIG15VVJMKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKG15VVJMKTtcbiAgICBjb25zdCBuZXdSZXMgPSByZXMuanNvbigpO1xuICAgIHJldHVybiBuZXdSZXM7XG4gIH1cblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtCTE9HX1VSTH0vZ2hvc3QvYXBpL3YzL2NvbnRlbnQvcG9zdHMvP2tleT0ke0NPTlRFTlRfQVBJX0tFWX0maW5jbHVkZT1hdXRob3JzLHRhZ3MmZmlsdGVyPXRhZzpibG9nJmxpbWl0PWFsbGApO1xuICByZXR1cm4gcmVzLmpzb24oKTtcblxufVxuXG5cblxuY29uc3QgZ2V0RmlsdGVyZWRQb3N0c1dpdGhTZWFyY2ggPSBhc3luYyhrZXkpID0+IHtcbiAgLy9jb25zb2xlLmxvZyhcImN1cnJlbnQgS2V5XCIsIGtleSk7XG4gIGNvbnN0IHNlYXJjaFRpdGxlID0ga2V5LnF1ZXJ5S2V5WzFdLnNlYXJjaDtcblxuICBpZihzZWFyY2hUaXRsZSl7ICAgXG4gICAgY29uc3QgbXlVUkwgPSBgJHtCTE9HX1VSTH0vZ2hvc3QvYXBpL3YzL2NvbnRlbnQvcG9zdHMvP2tleT0ke0NPTlRFTlRfQVBJX0tFWX0maW5jbHVkZT1hdXRob3JzLHRhZ3MmZmlsdGVyPXNsdWc6JyR7c2VhcmNoVGl0bGV9J2A7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gobXlVUkwpO1xuICAgIGNvbnN0IG5ld1JlcyA9IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIG5ld1JlcztcbiAgfVxuXG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QkxPR19VUkx9L2dob3N0L2FwaS92My9jb250ZW50L3Bvc3RzLz9rZXk9JHtDT05URU5UX0FQSV9LRVl9JmluY2x1ZGU9YXV0aG9ycyx0YWdzYCk7XG4gIHJldHVybiByZXMuanNvbigpO1xufVxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe3Bvc3RzfSkge1xuICBjb25zdCBbZm9ybVN0YXRlLCBzZXRGb3JtU3RhdGVdID0gdXNlU3RhdGUoXCJjbG9zZVwiKTtcbiAgY29uc3QgW3RhZ05hbWUsIHNldFRhZ05hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XG5cblxuXG4gICAgLy9SRUFDVCAtIFFVRVJZIDogRmVhdHVyZWQgUG9zdHMgaW4gdGhlIEhlcm8gQmFubmVyXG4gICAgLy9jb25zdCB7ZGF0YTpmZWF0dXJlZFBvc3RzLGVycm9yfSA9IHVzZVF1ZXJ5KFsnZmVhdHVyZWQgcG9zdHMnXSwgKCkgPT4gZ2V0RmVhdHVyZWRQb3N0cygpKTtcbiAgICAvL2NvbnNvbGUubG9nKFwiZmVhdHVyZWRQb3N0c1wiLCBmZWF0dXJlZFBvc3RzKTtcblxuXG5cbiAgICAvL0ZvciBmaWx0ZXJpbmcgd2l0aCBUQUdTXG4gICAgY29uc3Qge2lzTG9hZGluZywgZGF0YTpmaWx0ZXJlZFBvc3RzLCBzdGF0dXN9ID0gdXNlUXVlcnkoWydmaWx0ZXJlZCBwb3N0cycsIHt0YWc6IHRhZ05hbWV9XSwgZ2V0RmlsdGVyZWRQb3N0cywge2luaXRpYWxEYXRhOnBvc3RzfSkgLy90byByZW1vdmUgdGhlIGxvYWRpbmcgcGFnZSBhZGQgdGhlIGluaXRpYWxkYXRhIHZhbHVlIGhlcmVcbiAgICAgLy9jb25zb2xlLmxvZyhcImZpbHRlcmVkUG9zdHMgYXJlXCIsIGZpbHRlcmVkUG9zdHMsIFwic3RhdHVzXCIsIHN0YXR1cyk7XG5cblxuXG4gICAgXG4gICAgdmFyIGFsbFBvc3RzID0gZmlsdGVyZWRQb3N0cztcblxuXG5cbiAgICBcblxuICAgICBcblxuICAgIGlmKGlzTG9hZGluZyl7XG4gICAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgIDxoMiBzdHlsZT17e3dpZHRoOlwiMTAwdndcIixoZWlnaHQ6XCIxMDB2aFwiLG9wYWNpdHk6XCIuNVwiLGRpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PmZldGNoaW5nIHBvc3RzLi4uPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJTTVMgbWFya2V0aW5nIGFuZCB0ZXh0IG1lc3NhZ2luZyBmb3IgeW91ciBlY29tbWVyY2UgYnVzaW5lc3MuIEdldCA0MCUrIENUUiBhbmQgOTAlKyBvcGVuIHJhdGVzLiBHZXQgYSBkZW1vIHRvZGF5IVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiaW5kZXgsIGZvbGxvd1wiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzp0aXRsZVwiXG4gICAgICAgICAgY29udGVudD1cIlNNUyBNYXJrZXRpbmcgZm9yIEVjb21tZXJjZSB8IFZveWFnZSBNb2JpbGVcIlxuICAgICAgICA+PC9tZXRhPlxuICAgICAgICA8bWV0YSBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCxtYXhpbXVtLXNjYWxlPTEuMCwgdmlld3BvcnQtZml0PWNvdmVyXCIgbmFtZT1cInZpZXdwb3J0XCIvPlxuICAgICAgICA8dGl0bGU+Vm95YWdlIFNNUzogVGV4dCBNYXJrZXRpbmcgZm9yIGVDb21tZXJjZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIiBpZD1cIm1haW4tdGFyZ2V0XCIgZGF0YS1zY3JvbGwtY29udGFpbmVyPlxuICAgICAgICA8UmVxdWVzdEZvcm0gZm9ybVN0YXRlPXtmb3JtU3RhdGV9IHNldEZvcm1TdGF0ZT17c2V0Rm9ybVN0YXRlfSAvPlxuICAgICAgICA8SGVhZGVyIHNldEZvcm1TdGF0ZT17c2V0Rm9ybVN0YXRlfSAvPlxuICAgICAgICA8QmxvZ1BhZ2VIZXJvQmFubmVyIHBvc3RzPXtwb3N0c30gLz5cbiAgICAgICAgPEJsb2dQYWdlVGFnRmlsdGVyaW5nQmxvY2sgcG9zdHM9e3Bvc3RzfSBoYW5kbGVUYWdDbGljaz17c2V0VGFnTmFtZX0gaGFuZGxlU2VhcmNoPXtzZXRTZWFyY2hUZXJtfS8+XG4gICAgICAgIDxCbG9nUGFnZUZlYXR1cmVkUG9zdHMgcG9zdHM9e2FsbFBvc3RzfSAvPlxuICAgICAgICA8QmxvZ1BhZ2VTaWdudXBCbG9jayAvPlxuICAgICAgICB7YWxsUG9zdHMucG9zdHMubGVuZ3RoID4gNiAmJiA8QmxvZ1BhZ2VBbGxQb3N0cyBwb3N0cz17YWxsUG9zdHN9IC8+fVxuICAgICAgICA8QmxvZ1BhZ2VCb3R0b21CbG9jayAvPlxuICAgICAgICA8Rm9vdGVyIHNldEZvcm1TdGF0ZT17c2V0Rm9ybVN0YXRlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blogs/index.js\n");

/***/ })

});