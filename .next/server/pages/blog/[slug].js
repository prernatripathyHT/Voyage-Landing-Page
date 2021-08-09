/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/blog/[slug]";
exports.ids = ["pages/blog/[slug]"];
exports.modules = {

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; },\n/* harmony export */   \"default\": function() { return /* binding */ BlogPostPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/Prernat/Documents/HOUNDSTOOTH - GUILD CAPITAL/DEV-PROJECTS/voyage-web-updated/pages/blog/[slug].js\";\n\n\n\nconst {\n  CONTENT_API_KEY,\n  BLOG_URL\n} = process.env;\n\nasync function getPost(slug) {\n  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`).then(res => res.json());\n  const posts = res.posts;\n  return posts[0];\n}\n\nconst getStaticProps = async ({\n  params\n}) => {\n  const currentPost = await getPost(params.slug);\n  return {\n    props: {\n      currentPost\n    }\n  };\n};\nconst getStaticPaths = async () => {\n  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`);\n  const posts = await res.json();\n  const ids = posts.posts.map(post => post.slug);\n  const paths = ids.map(slug => ({\n    params: {\n      slug: slug.toString()\n    }\n  }));\n  return {\n    paths,\n    fallback: false\n  };\n};\nfunction BlogPostPage({\n  currentPost\n}) {\n  const post = {\n    currentPost\n  }; //console.log(\"current post object is\", post);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      marginTop: '50vh',\n      textAlign: 'center'\n    },\n    className: \"aos-init\",\n    \"data-aos\": \"fade-up\",\n    \"data-aos-duration\": \"1000\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      \"data-aos\": \"fade-up\",\n      \"data-aos-duration\": \"1000\",\n      children: post.currentPost.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: post.currentPost.html\n      },\n      \"data-aos\": \"fade-up\",\n      \"data-aos-duration\": \"1000\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b3lhZ2UvLi9wYWdlcy9ibG9nL1tzbHVnXS5qcz8yOTM0Il0sIm5hbWVzIjpbIkNPTlRFTlRfQVBJX0tFWSIsIkJMT0dfVVJMIiwicHJvY2VzcyIsImVudiIsImdldFBvc3QiLCJzbHVnIiwicmVzIiwiZmV0Y2giLCJ0aGVuIiwianNvbiIsInBvc3RzIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJjdXJyZW50UG9zdCIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJpZHMiLCJtYXAiLCJwb3N0IiwicGF0aHMiLCJ0b1N0cmluZyIsImZhbGxiYWNrIiwiQmxvZ1Bvc3RQYWdlIiwibWFyZ2luVG9wIiwidGV4dEFsaWduIiwidGl0bGUiLCJfX2h0bWwiLCJodG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU07QUFBQ0EsaUJBQUQ7QUFBa0JDO0FBQWxCLElBQThCQyxPQUFPLENBQUNDLEdBQTVDOztBQUdBLGVBQWVDLE9BQWYsQ0FBdUJDLElBQXZCLEVBQTRCO0FBQ3hCLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQ2xCLEdBQUVOLFFBQVMsb0NBQW1DSSxJQUFLLFFBQU9MLGVBQWdCLHlCQUR4RCxDQUFMLENBRVpRLElBRlksQ0FFTkYsR0FBRCxJQUFTQSxHQUFHLENBQUNHLElBQUosRUFGRixDQUFsQjtBQUlJLFFBQU1DLEtBQUssR0FBR0osR0FBRyxDQUFDSSxLQUFsQjtBQUVBLFNBQU9BLEtBQUssQ0FBQyxDQUFELENBQVo7QUFDUDs7QUFLTSxNQUFNQyxjQUFjLEdBQUcsT0FBTztBQUFDQztBQUFELENBQVAsS0FBb0I7QUFDOUMsUUFBTUMsV0FBVyxHQUFHLE1BQU1ULE9BQU8sQ0FBQ1EsTUFBTSxDQUFDUCxJQUFSLENBQWpDO0FBRUEsU0FBTztBQUNMUyxTQUFLLEVBQUU7QUFBQ0Q7QUFBRDtBQURGLEdBQVA7QUFHRCxDQU5JO0FBU0EsTUFBTUUsY0FBYyxHQUFHLFlBQVk7QUFDdEMsUUFBTVQsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFTixRQUFTLG9DQUFtQ0QsZUFBZ0IsRUFBaEUsQ0FBdkI7QUFFQSxRQUFNVSxLQUFLLEdBQUcsTUFBTUosR0FBRyxDQUFDRyxJQUFKLEVBQXBCO0FBQ0EsUUFBTU8sR0FBRyxHQUFHTixLQUFLLENBQUNBLEtBQU4sQ0FBWU8sR0FBWixDQUFnQkMsSUFBSSxJQUFJQSxJQUFJLENBQUNiLElBQTdCLENBQVo7QUFDQSxRQUFNYyxLQUFLLEdBQUdILEdBQUcsQ0FBQ0MsR0FBSixDQUFRWixJQUFJLEtBQUs7QUFBQ08sVUFBTSxFQUFFO0FBQUNQLFVBQUksRUFBR0EsSUFBSSxDQUFDZSxRQUFMO0FBQVI7QUFBVCxHQUFMLENBQVosQ0FBZDtBQUVBLFNBQU87QUFDSEQsU0FERztBQUVIRSxZQUFRLEVBQUM7QUFGTixHQUFQO0FBSUgsQ0FYTTtBQWVRLFNBQVNDLFlBQVQsQ0FBc0I7QUFBQ1Q7QUFBRCxDQUF0QixFQUFxQztBQUdoRCxRQUFNSyxJQUFJLEdBQUc7QUFBQ0w7QUFBRCxHQUFiLENBSGdELENBS2hEOztBQUdBLHNCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUNVLGVBQVMsRUFBQyxNQUFYO0FBQW1CQyxlQUFTLEVBQUM7QUFBN0IsS0FBWjtBQUFvRCxhQUFTLEVBQUMsVUFBOUQ7QUFBeUUsZ0JBQVMsU0FBbEY7QUFBNEYseUJBQWtCLE1BQTlHO0FBQUEsNEJBQ0k7QUFBSyxrQkFBUyxTQUFkO0FBQXdCLDJCQUFrQixNQUExQztBQUFBLGdCQUFrRE4sSUFBSSxDQUFDTCxXQUFMLENBQWlCWTtBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLDZCQUF1QixFQUFFO0FBQUNDLGNBQU0sRUFBRVIsSUFBSSxDQUFDTCxXQUFMLENBQWlCYztBQUExQixPQUE5QjtBQUFnRSxrQkFBUyxTQUF6RTtBQUFtRiwyQkFBa0I7QUFBckc7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0giLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5jb25zdCB7Q09OVEVOVF9BUElfS0VZLCBCTE9HX1VSTH0gPSBwcm9jZXNzLmVudjtcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRQb3N0KHNsdWcpe1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHtCTE9HX1VSTH0vZ2hvc3QvYXBpL3YzL2NvbnRlbnQvcG9zdHMvc2x1Zy8ke3NsdWd9P2tleT0ke0NPTlRFTlRfQVBJX0tFWX0mZmllbGRzPXRpdGxlLHNsdWcsaHRtbGBcbiAgICAgICAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgXG4gICAgICAgIGNvbnN0IHBvc3RzID0gcmVzLnBvc3RzO1xuICAgIFxuICAgICAgICByZXR1cm4gcG9zdHNbMF1cbn1cblxuXG5cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHtwYXJhbXN9KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFBvc3QgPSBhd2FpdCBnZXRQb3N0KHBhcmFtcy5zbHVnKVxuICBcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtjdXJyZW50UG9zdH1cbiAgICB9XG4gIH1cblxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QkxPR19VUkx9L2dob3N0L2FwaS92My9jb250ZW50L3Bvc3RzLz9rZXk9JHtDT05URU5UX0FQSV9LRVl9YClcblxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zdCBpZHMgPSBwb3N0cy5wb3N0cy5tYXAocG9zdCA9PiBwb3N0LnNsdWcpO1xuICAgIGNvbnN0IHBhdGhzID0gaWRzLm1hcChzbHVnID0+ICh7cGFyYW1zOiB7c2x1ZyA6IHNsdWcudG9TdHJpbmcoKX19KSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjazpmYWxzZSxcbiAgICB9XG59XG5cbiAgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dQb3N0UGFnZSh7Y3VycmVudFBvc3R9KSB7XG5cblxuICAgIGNvbnN0IHBvc3QgPSB7Y3VycmVudFBvc3R9O1xuXG4gICAgLy9jb25zb2xlLmxvZyhcImN1cnJlbnQgcG9zdCBvYmplY3QgaXNcIiwgcG9zdCk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6JzUwdmgnLCB0ZXh0QWxpZ246J2NlbnRlcid9fSBjbGFzc05hbWU9XCJhb3MtaW5pdFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPlxuICAgICAgICAgICAgPGgxICBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj57cG9zdC5jdXJyZW50UG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcG9zdC5jdXJyZW50UG9zdC5odG1sIH19IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/blog/[slug].js"); });
module.exports = __webpack_exports__;

})();