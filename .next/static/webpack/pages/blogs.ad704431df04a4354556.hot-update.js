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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_BlogPageTagFilteringBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/BlogPageTagFilteringBlock */ \"./components/BlogPageTagFilteringBlock.js\");\n/* harmony import */ var _components_BlogPageHeroBanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/BlogPageHeroBanner */ \"./components/BlogPageHeroBanner.js\");\n/* harmony import */ var _components_BlogPageFeaturedPosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/BlogPageFeaturedPosts */ \"./components/BlogPageFeaturedPosts.js\");\n/* harmony import */ var _components_BlogPageSignupBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/BlogPageSignupBlock */ \"./components/BlogPageSignupBlock.js\");\n/* harmony import */ var _components_BlogPageAllPosts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/BlogPageAllPosts */ \"./components/BlogPageAllPosts.js\");\n/* harmony import */ var _components_BlogPageBottomBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/BlogPageBottomBlock */ \"./components/BlogPageBottomBlock.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_RequestForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/RequestForm */ \"./components/RequestForm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/Prernat/Documents/HOUNDSTOOTH - GUILD CAPITAL/DEV-PROJECTS/voyage-web-updated/pages/blogs/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n // const {CONTENT_API_KEY, BLOG_URL} = process.env;\n// const CONTENT_API_KEY = 'c7bafa2c2c579763b605f57fb6';\n// const BLOG_URL = 'https://sms-marketing-resources.ghost.io/';\n\nvar CONTENT_API_KEY = \"c7bafa2c2c579763b605f57fb6\";\nvar BLOG_URL = \"https://sms-marketing-resources.ghost.io\";\n\nvar getFeaturedPosts = function getFeaturedPosts() {\n  return fetch(\"\".concat(BLOG_URL, \"/ghost/api/v3/content/posts/?key=\").concat(CONTENT_API_KEY, \"&include=authors,tags&filter=featured:true\")).then(function (res) {\n    return res.json();\n  });\n};\n\nvar getFilteredPosts = /*#__PURE__*/function () {\n  var _ref = (0,_Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(key) {\n    var tagName, myURL, _res, newRes, res;\n\n    return _Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            tagName = key.queryKey[1].tag; //console.log(\"current tag name : \", tagName);\n\n            if (!tagName) {\n              _context.next = 8;\n              break;\n            }\n\n            //if tags are present - this is where we are going to filter the posts\n            // const myURL = `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags&filter=tag:[blog,${tagName}]&limit=all`;\n            myURL = \"\".concat(BLOG_URL, \"/ghost/api/v3/content/posts/?key=\").concat(CONTENT_API_KEY, \"&include=authors,tags&filter=tag:[\").concat(tagName, \"]&limit=all\"); //console.log(\"URL \", myURL)\n\n            _context.next = 5;\n            return fetch(myURL);\n\n          case 5:\n            _res = _context.sent;\n            newRes = _res.json();\n            return _context.abrupt(\"return\", newRes);\n\n          case 8:\n            _context.next = 10;\n            return fetch(\"\".concat(BLOG_URL, \"/ghost/api/v3/content/posts/?key=\").concat(CONTENT_API_KEY, \"&include=authors,tags&filter=tag:blog&limit=all\"));\n\n          case 10:\n            res = _context.sent;\n            return _context.abrupt(\"return\", res.json());\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getFilteredPosts(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar getFilteredPostsWithSearch = /*#__PURE__*/function () {\n  var _ref2 = (0,_Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(key) {\n    var searchTitle, myURL, _res2, newRes, res;\n\n    return _Users_Prernat_Documents_HOUNDSTOOTH_GUILD_CAPITAL_DEV_PROJECTS_voyage_web_updated_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            //console.log(\"current Key\", key);\n            searchTitle = key.queryKey[1].search;\n\n            if (!searchTitle) {\n              _context2.next = 8;\n              break;\n            }\n\n            myURL = \"\".concat(BLOG_URL, \"/ghost/api/v3/content/posts/?key=\").concat(CONTENT_API_KEY, \"&include=authors,tags&filter=slug:'\").concat(searchTitle, \"'\");\n            _context2.next = 5;\n            return fetch(myURL);\n\n          case 5:\n            _res2 = _context2.sent;\n            newRes = _res2.json();\n            return _context2.abrupt(\"return\", newRes);\n\n          case 8:\n            _context2.next = 10;\n            return fetch(\"\".concat(BLOG_URL, \"/ghost/api/v3/content/posts/?key=\").concat(CONTENT_API_KEY, \"&include=authors,tags\"));\n\n          case 10:\n            res = _context2.sent;\n            return _context2.abrupt(\"return\", res.json());\n\n          case 12:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function getFilteredPostsWithSearch(_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar __N_SSG = true;\nfunction Home(_ref3) {\n  _s();\n\n  var posts = _ref3.posts;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(\"close\"),\n      formState = _useState[0],\n      setFormState = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(''),\n      tagName = _useState2[0],\n      setTagName = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(''),\n      searchTerm = _useState3[0],\n      setSearchTerm = _useState3[1]; //REACT - QUERY : Featured Posts in the Hero Banner\n  //const {data:featuredPosts,error} = useQuery(['featured posts'], () => getFeaturedPosts());\n  //console.log(\"featuredPosts\", featuredPosts);\n  //For filtering with TAGS\n\n\n  var _useQuery = (0,react_query__WEBPACK_IMPORTED_MODULE_14__.useQuery)(['filtered posts', {\n    tag: tagName\n  }], getFilteredPosts, {\n    initialData: posts\n  }),\n      isLoading = _useQuery.isLoading,\n      filteredPosts = _useQuery.data,\n      status = _useQuery.status; //to remove the loading page add the initialdata value here\n  //console.log(\"filteredPosts are\", filteredPosts, \"status\", status);\n\n\n  var allPosts = filteredPosts;\n\n  if (isLoading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"App\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        style: {\n          width: \"100vw\",\n          height: \"100vh\",\n          opacity: \".5\",\n          display: \"flex\",\n          alignItems: \"center\",\n          justifyContent: \"center\"\n        },\n        children: \"fetching posts...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 10\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_11___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"SMS marketing and text messaging for your ecommerce business. Get 40%+ CTR and 90%+ open rates. Get a demo today!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"robots\",\n        content: \"index, follow\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:title\",\n        content: \"SMS Marketing for Ecommerce | Voyage Mobile\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        content: \"width=device-width, initial-scale=1.0,maximum-scale=1.0, viewport-fit=cover\",\n        name: \"viewport\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Voyage SMS: Text Marketing for eCommerce\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"main\",\n      id: \"main-target\",\n      \"data-scroll-container\": true,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestForm__WEBPACK_IMPORTED_MODULE_12__.default, {\n        formState: formState,\n        setFormState: setFormState\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {\n        setFormState: setFormState\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 144,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageHeroBanner__WEBPACK_IMPORTED_MODULE_6__.default, {\n        posts: posts\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageTagFilteringBlock__WEBPACK_IMPORTED_MODULE_5__.default, {\n        posts: posts,\n        handleTagClick: setTagName,\n        handleSearch: setSearchTerm\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 146,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageFeaturedPosts__WEBPACK_IMPORTED_MODULE_7__.default, {\n        posts: allPosts\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageSignupBlock__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 148,\n        columnNumber: 9\n      }, this), allPosts.posts.length > 6 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageAllPosts__WEBPACK_IMPORTED_MODULE_9__.default, {\n        posts: allPosts\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 39\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageBottomBlock__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {\n        setFormState: setFormState\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 151,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"MMkwYGf3O8OUzRhfHfzpmLWLez0=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_14__.useQuery];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3MvaW5kZXguanM/YzA0MCJdLCJuYW1lcyI6WyJDT05URU5UX0FQSV9LRVkiLCJwcm9jZXNzIiwiQkxPR19VUkwiLCJnZXRGZWF0dXJlZFBvc3RzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImdldEZpbHRlcmVkUG9zdHMiLCJrZXkiLCJ0YWdOYW1lIiwicXVlcnlLZXkiLCJ0YWciLCJteVVSTCIsIm5ld1JlcyIsImdldEZpbHRlcmVkUG9zdHNXaXRoU2VhcmNoIiwic2VhcmNoVGl0bGUiLCJzZWFyY2giLCJIb21lIiwicG9zdHMiLCJ1c2VTdGF0ZSIsImZvcm1TdGF0ZSIsInNldEZvcm1TdGF0ZSIsInNldFRhZ05hbWUiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInVzZVF1ZXJ5IiwiaW5pdGlhbERhdGEiLCJpc0xvYWRpbmciLCJmaWx0ZXJlZFBvc3RzIiwiZGF0YSIsInN0YXR1cyIsImFsbFBvc3RzIiwid2lkdGgiLCJoZWlnaHQiLCJvcGFjaXR5IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLDRCQUF4QjtBQUNBLElBQU1DLFFBQVEsR0FBR0QsMENBQWpCOztBQXFCQSxJQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsU0FBUUMsS0FBSyxXQUFJRixRQUFKLDhDQUFnREYsZUFBaEQsZ0RBQUwsQ0FBa0hLLElBQWxILENBQXVILFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEdBQTFILENBQVI7QUFDRCxDQUZEOztBQU9BLElB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O0FBQUEsY0FKRixlQUtFLDhEQUFDLHNFQUFEO0FBQXVCLGFBQUssRUFBRU87QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBTUUsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLEVBT0dBLFFBQVEsQ0FBQ2IsS0FBVCxDQUFlb0IsTUFBZixHQUF3QixDQUF4QixpQkFBNkIsOERBQUMsaUVBQUQ7QUFBa0IsYUFBSyxFQUFFUDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUGhDLGVBUUUsOERBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLGVBU0UsOERBQUMsdURBQUQ7QUFBUSxvQkFBWSxFQUFFVjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEY7QUFBQSxrQkFERjtBQTRCRDs7R0FuRXVCSixJO1VBYzRCUSxrRDs7O0tBZDVCUixJIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZ3MvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBCbG9nUGFnZVRhZ0ZpbHRlcmluZ0Jsb2NrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jsb2dQYWdlVGFnRmlsdGVyaW5nQmxvY2tcIjtcbmltcG9ydCBCbG9nUGFnZUhlcm9CYW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvZ1BhZ2VIZXJvQmFubmVyXCI7XG5pbXBvcnQgQmxvZ1BhZ2VGZWF0dXJlZFBvc3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jsb2dQYWdlRmVhdHVyZWRQb3N0c1wiO1xuaW1wb3J0IEJsb2dQYWdlU2lnbnVwQmxvY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvZ1BhZ2VTaWdudXBCbG9ja1wiO1xuaW1wb3J0IEJsb2dQYWdlQWxsUG9zdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvZ1BhZ2VBbGxQb3N0c1wiO1xuaW1wb3J0IEJsb2dQYWdlQm90dG9tQmxvY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvZ1BhZ2VCb3R0b21CbG9ja1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlcXVlc3RGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1JlcXVlc3RGb3JtXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VRdWVyaWVzLCB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQsIHVzZVF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5fSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8vIGNvbnN0IHtDT05URU5UX0FQSV9LRVksIEJMT0dfVVJMfSA9IHByb2Nlc3MuZW52O1xuXG4vLyBjb25zdCBDT05URU5UX0FQSV9LRVkgPSAnYzdiYWZhMmMyYzU3OTc2M2I2MDVmNTdmYjYnO1xuLy8gY29uc3QgQkxPR19VUkwgPSAnaHR0cHM6Ly9zbXMtbWFya2V0aW5nLXJlc291cmNlcy5naG9zdC5pby8nO1xuXG5jb25zdCBDT05URU5UX0FQSV9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZO1xuY29uc3QgQkxPR19VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CTE9HX1VSTDtcblxuXG5cblxuXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiBcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QkxPR19VUkx9L2dob3N0L2FwaS92My9jb250ZW50L3Bvc3RzLz9rZXk9JHtDT05URU5UX0FQSV9LRVl9JmluY2x1ZGU9YXV0aG9ycyx0YWdzJmZpbHRlcj10YWc6YmxvZyZvcmRlcj1wdWJsaXNoZWRfYXQlMjBkZXNjJmxpbWl0PWFsbGApO1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7cG9zdHN9XG4gIH1cbn1cblxuXG5cblxuY29uc3QgZ2V0RmVhdHVyZWRQb3N0cyA9ICgpID0+IHtcbiAgcmV0dXJuICBmZXRjaChgJHtCTE9HX1VSTH0vZ2hvc3QvYXBpL3YzL2NvbnRlbnQvcG9zdHMvP2tleT0ke0NPTlRFTlRfQVBJX0tFWX0maW5jbHVkZT1hdXRob3JzLHRhZ3MmZmlsdGVyPWZlYXR1cmVkOnRydWVgKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbn1cblxuXG5cblxuY29uc3QgZ2V0RmlsdGVyZWRQb3N0cyA9IGFzeW5jKGtleSkgPT4ge1xuICBjb25zdCB0YWdOYW1lID0ga2V5LnF1ZXJ5S2V5WzFdLnRhZztcbiAgLy9jb25zb2xlLmxvZyhcImN1cnJlbnQgdGFnIG5hbWUgOiBcIiwgdGFnTmFtZSk7XG4gIGlmKHRhZ05hbWUpeyAgIC8vaWYgdGFncyBhcmUgcHJlc2VudCAtIHRoaXMgaXMgd2hlcmUgd2UgYXJlIGdvaW5nIHRvIGZpbHRlciB0aGUgcG9zdHNcbiAgICAvLyBjb25zdCBteVVSTCA9IGAke0JMT0dfVVJMfS9naG9zdC9hcGkvdjMvY29udGVudC9wb3N0cy8/a2V5PSR7Q09OVEVOVF9BUElfS0VZfSZpbmNsdWRlPWF1dGhvcnMsdGFncyZmaWx0ZXI9dGFnOltibG9nLCR7dGFnTmFtZX1dJmxpbWl0PWFsbGA7XG4gICAgY29uc3QgbXlVUkwgPSBgJHtCTE9HX1VSTH0vZ2hvc3QvYXBpL3YzL2NvbnRlbnQvcG9zdHMvP2tleT0ke0NPTlRFTlRfQVBJX0tFWX0maW5jbHVkZT1hdXRob3JzLHRhZ3MmZmlsdGVyPXRhZzpbJHt0YWdOYW1lfV0mbGltaXQ9YWxsYDtcblxuICAgICAvL2NvbnNvbGUubG9nKFwiVVJMIFwiLCBteVVSTClcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChteVVSTCk7XG4gICAgY29uc3QgbmV3UmVzID0gcmVzLmpzb24oKTtcbiAgICByZXR1cm4gbmV3UmVzO1xuICB9XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QkxPR19VUkx9L2dob3N0L2FwaS92My9jb250ZW50L3Bvc3RzLz9rZXk9JHtDT05URU5UX0FQSV9LRVl9JmluY2x1ZGU9YXV0aG9ycyx0YWdzJmZpbHRlcj10YWc6YmxvZyZsaW1pdD1hbGxgKTtcbiAgcmV0dXJuIHJlcy5qc29uKCk7XG5cbn1cblxuXG5cbmNvbnN0IGdldEZpbHRlcmVkUG9zdHNXaXRoU2VhcmNoID0gYXN5bmMoa2V5KSA9PiB7XG4gIC8vY29uc29sZS5sb2coXCJjdXJyZW50IEtleVwiLCBrZXkpO1xuICBjb25zdCBzZWFyY2hUaXRsZSA9IGtleS5xdWVyeUtleVsxXS5zZWFyY2g7XG5cbiAgaWYoc2VhcmNoVGl0bGUpeyAgIFxuICAgIGNvbnN0IG15VVJMID0gYCR7QkxPR19VUkx9L2dob3N0L2FwaS92My9jb250ZW50L3Bvc3RzLz9rZXk9JHtDT05URU5UX0FQSV9LRVl9JmluY2x1ZGU9YXV0aG9ycyx0YWdzJmZpbHRlcj1zbHVnOicke3NlYXJjaFRpdGxlfSdgO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKG15VVJMKTtcbiAgICBjb25zdCBuZXdSZXMgPSByZXMuanNvbigpO1xuICAgIHJldHVybiBuZXdSZXM7XG4gIH1cblxuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0JMT0dfVVJMfS9naG9zdC9hcGkvdjMvY29udGVudC9wb3N0cy8/a2V5PSR7Q09OVEVOVF9BUElfS0VZfSZpbmNsdWRlPWF1dGhvcnMsdGFnc2ApO1xuICByZXR1cm4gcmVzLmpzb24oKTtcbn1cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtwb3N0c30pIHtcbiAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IHVzZVN0YXRlKFwiY2xvc2VcIik7XG4gIGNvbnN0IFt0YWdOYW1lLCBzZXRUYWdOYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xuXG5cblxuICAgIC8vUkVBQ1QgLSBRVUVSWSA6IEZlYXR1cmVkIFBvc3RzIGluIHRoZSBIZXJvIEJhbm5lclxuICAgIC8vY29uc3Qge2RhdGE6ZmVhdHVyZWRQb3N0cyxlcnJvcn0gPSB1c2VRdWVyeShbJ2ZlYXR1cmVkIHBvc3RzJ10sICgpID0+IGdldEZlYXR1cmVkUG9zdHMoKSk7XG4gICAgLy9jb25zb2xlLmxvZyhcImZlYXR1cmVkUG9zdHNcIiwgZmVhdHVyZWRQb3N0cyk7XG5cblxuXG4gICAgLy9Gb3IgZmlsdGVyaW5nIHdpdGggVEFHU1xuICAgIGNvbnN0IHtpc0xvYWRpbmcsIGRhdGE6ZmlsdGVyZWRQb3N0cywgc3RhdHVzfSA9IHVzZVF1ZXJ5KFsnZmlsdGVyZWQgcG9zdHMnLCB7dGFnOiB0YWdOYW1lfV0sIGdldEZpbHRlcmVkUG9zdHMsIHtpbml0aWFsRGF0YTpwb3N0c30pIC8vdG8gcmVtb3ZlIHRoZSBsb2FkaW5nIHBhZ2UgYWRkIHRoZSBpbml0aWFsZGF0YSB2YWx1ZSBoZXJlXG4gICAgIC8vY29uc29sZS5sb2coXCJmaWx0ZXJlZFBvc3RzIGFyZVwiLCBmaWx0ZXJlZFBvc3RzLCBcInN0YXR1c1wiLCBzdGF0dXMpO1xuXG5cblxuICAgIFxuICAgIHZhciBhbGxQb3N0cyA9IGZpbHRlcmVkUG9zdHM7XG5cblxuXG4gICAgXG5cbiAgICAgXG5cbiAgICBpZihpc0xvYWRpbmcpe1xuICAgICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgICA8aDIgc3R5bGU9e3t3aWR0aDpcIjEwMHZ3XCIsaGVpZ2h0OlwiMTAwdmhcIixvcGFjaXR5OlwiLjVcIixkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJ9fT5mZXRjaGluZyBwb3N0cy4uLjwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiU01TIG1hcmtldGluZyBhbmQgdGV4dCBtZXNzYWdpbmcgZm9yIHlvdXIgZWNvbW1lcmNlIGJ1c2luZXNzLiBHZXQgNDAlKyBDVFIgYW5kIDkwJSsgb3BlbiByYXRlcy4gR2V0IGEgZGVtbyB0b2RheSFcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cImluZGV4LCBmb2xsb3dcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dGl0bGVcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJTTVMgTWFya2V0aW5nIGZvciBFY29tbWVyY2UgfCBWb3lhZ2UgTW9iaWxlXCJcbiAgICAgICAgPjwvbWV0YT5cbiAgICAgICAgPG1ldGEgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsbWF4aW11bS1zY2FsZT0xLjAsIHZpZXdwb3J0LWZpdD1jb3ZlclwiIG5hbWU9XCJ2aWV3cG9ydFwiLz5cbiAgICAgICAgPHRpdGxlPlZveWFnZSBTTVM6IFRleHQgTWFya2V0aW5nIGZvciBlQ29tbWVyY2U8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCIgaWQ9XCJtYWluLXRhcmdldFwiIGRhdGEtc2Nyb2xsLWNvbnRhaW5lcj5cbiAgICAgICAgPFJlcXVlc3RGb3JtIGZvcm1TdGF0ZT17Zm9ybVN0YXRlfSBzZXRGb3JtU3RhdGU9e3NldEZvcm1TdGF0ZX0gLz5cbiAgICAgICAgPEhlYWRlciBzZXRGb3JtU3RhdGU9e3NldEZvcm1TdGF0ZX0gLz5cbiAgICAgICAgPEJsb2dQYWdlSGVyb0Jhbm5lciBwb3N0cz17cG9zdHN9IC8+XG4gICAgICAgIDxCbG9nUGFnZVRhZ0ZpbHRlcmluZ0Jsb2NrIHBvc3RzPXtwb3N0c30gaGFuZGxlVGFnQ2xpY2s9e3NldFRhZ05hbWV9IGhhbmRsZVNlYXJjaD17c2V0U2VhcmNoVGVybX0vPlxuICAgICAgICA8QmxvZ1BhZ2VGZWF0dXJlZFBvc3RzIHBvc3RzPXthbGxQb3N0c30gLz5cbiAgICAgICAgPEJsb2dQYWdlU2lnbnVwQmxvY2sgLz5cbiAgICAgICAge2FsbFBvc3RzLnBvc3RzLmxlbmd0aCA+IDYgJiYgPEJsb2dQYWdlQWxsUG9zdHMgcG9zdHM9e2FsbFBvc3RzfSAvPn1cbiAgICAgICAgPEJsb2dQYWdlQm90dG9tQmxvY2sgLz5cbiAgICAgICAgPEZvb3RlciBzZXRGb3JtU3RhdGU9e3NldEZvcm1TdGF0ZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blogs/index.js\n");

/***/ })

});