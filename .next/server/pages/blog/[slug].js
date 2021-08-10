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

/***/ "./components/BlogPageMainArticle.js":
/*!*******************************************!*\
  !*** ./components/BlogPageMainArticle.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogPostPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_blogPageMainArticle_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/blogPageMainArticle.module.css */ \"./components/css/blogPageMainArticle.module.css\");\n/* harmony import */ var _css_blogPageMainArticle_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_blogPageMainArticle_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/Prernat/Documents/HOUNDSTOOTH - GUILD CAPITAL/DEV-PROJECTS/voyage-web-updated/components/BlogPageMainArticle.js\";\n\nfunction BlogPostPage({\n  currentPost\n}) {\n  const post = {\n    currentPost\n  }; //console.log(\"current post object is\", post);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    className: (_css_blogPageMainArticle_module_css__WEBPACK_IMPORTED_MODULE_1___default().articlePage),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: ` container ${(_css_blogPageMainArticle_module_css__WEBPACK_IMPORTED_MODULE_1___default().mainArticle)}`,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_blogPageMainArticle_module_css__WEBPACK_IMPORTED_MODULE_1___default().mainArticleImage),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: post.feature_image\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `${(_css_blogPageMainArticle_module_css__WEBPACK_IMPORTED_MODULE_1___default().mainArticleData)}`,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_css_blogPageMainArticle_module_css__WEBPACK_IMPORTED_MODULE_1___default().topBar),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_css_blogPageMainArticle_module_css__WEBPACK_IMPORTED_MODULE_1___default().articleTag),\n            children: \"Thought Leadership\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Published on 18 Jun, 21\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            width: \"3\",\n            height: \"4\",\n            viewBox: \"0 0 3 4\",\n            fill: \"none\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n              cx: \"1.5\",\n              cy: \"2\",\n              r: \"1.5\",\n              fill: \"#CBCBCB\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 33\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [post.currentPost.reading_time, \" min read\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 29\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_css_blogPageMainArticle_module_css__WEBPACK_IMPORTED_MODULE_1___default().bodyContent),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_css_blogPageMainArticle_module_css__WEBPACK_IMPORTED_MODULE_1___default().bodyTitle),\n            children: post.currentPost.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            dangerouslySetInnerHTML: {\n              __html: post.currentPost.html\n            },\n            className: `aos-init ${(_css_blogPageMainArticle_module_css__WEBPACK_IMPORTED_MODULE_1___default().bodyHTML)}`,\n            \"data-aos\": \"fade-up\",\n            \"data-aos-duration\": \"1000\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 29\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 13\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b3lhZ2UvLi9jb21wb25lbnRzL0Jsb2dQYWdlTWFpbkFydGljbGUuanM/NmY0OCJdLCJuYW1lcyI6WyJCbG9nUG9zdFBhZ2UiLCJjdXJyZW50UG9zdCIsInBvc3QiLCJzdHlsZXMiLCJmZWF0dXJlX2ltYWdlIiwicmVhZGluZ190aW1lIiwidGl0bGUiLCJfX2h0bWwiLCJodG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxZQUFULENBQXNCO0FBQUNDO0FBQUQsQ0FBdEIsRUFBcUM7QUFFaEQsUUFBTUMsSUFBSSxHQUFHO0FBQUNEO0FBQUQsR0FBYixDQUZnRCxDQUloRDs7QUFDQSxzQkFDUTtBQUFTLGFBQVMsRUFBRUUsd0ZBQXBCO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUcsY0FBYUEsd0ZBQW1CLEVBQWpEO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFQSw2RkFBaEI7QUFBQSwrQkFDSTtBQUFLLGFBQUcsRUFBRUQsSUFBSSxDQUFDRTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSTtBQUFLLGlCQUFTLEVBQUcsR0FBRUQsNEZBQXVCLEVBQTFDO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFFQSxtRkFBaEI7QUFBQSxrQ0FDSTtBQUFHLHFCQUFTLEVBQUVBLHVGQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSTtBQUFLLGlCQUFLLEVBQUMsR0FBWDtBQUFlLGtCQUFNLEVBQUMsR0FBdEI7QUFBMEIsbUJBQU8sRUFBQyxTQUFsQztBQUE0QyxnQkFBSSxFQUFDLE1BQWpEO0FBQXdELGlCQUFLLEVBQUMsNEJBQTlEO0FBQUEsbUNBQ0k7QUFBUSxnQkFBRSxFQUFDLEtBQVg7QUFBaUIsZ0JBQUUsRUFBQyxHQUFwQjtBQUF3QixlQUFDLEVBQUMsS0FBMUI7QUFBZ0Msa0JBQUksRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixlQU1JO0FBQUEsdUJBQUlELElBQUksQ0FBQ0QsV0FBTCxDQUFpQkksWUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVNJO0FBQUssbUJBQVMsRUFBRUYsd0ZBQWhCO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFFQSxzRkFBaEI7QUFBQSxzQkFBbUNELElBQUksQ0FBQ0QsV0FBTCxDQUFpQks7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUssbUNBQXVCLEVBQUU7QUFBQ0Msb0JBQU0sRUFBRUwsSUFBSSxDQUFDRCxXQUFMLENBQWlCTztBQUExQixhQUE5QjtBQUFnRSxxQkFBUyxFQUFHLFlBQVdMLHFGQUFnQixFQUF2RztBQUEwRyx3QkFBUyxTQUFuSDtBQUE2SCxpQ0FBa0I7QUFBL0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURSO0FBeUJIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CbG9nUGFnZU1haW5BcnRpY2xlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jc3MvYmxvZ1BhZ2VNYWluQXJ0aWNsZS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dQb3N0UGFnZSh7Y3VycmVudFBvc3R9KSB7XG5cbiAgICBjb25zdCBwb3N0ID0ge2N1cnJlbnRQb3N0fTtcblxuICAgIC8vY29uc29sZS5sb2coXCJjdXJyZW50IHBvc3Qgb2JqZWN0IGlzXCIsIHBvc3QpO1xuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlUGFnZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2AgY29udGFpbmVyICR7c3R5bGVzLm1haW5BcnRpY2xlfWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5BcnRpY2xlSW1hZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QuZmVhdHVyZV9pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWFpbkFydGljbGVEYXRhfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BCYXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVUYWd9PlRob3VnaHQgTGVhZGVyc2hpcDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QdWJsaXNoZWQgb24gMTggSnVuLCAyMTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiM1wiIGhlaWdodD1cIjRcIiB2aWV3Qm94PVwiMCAwIDMgNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjJcIiByPVwiMS41XCIgZmlsbD1cIiNDQkNCQ0JcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QuY3VycmVudFBvc3QucmVhZGluZ190aW1lfSBtaW4gcmVhZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5Q29udGVudH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5VGl0bGV9Pntwb3N0LmN1cnJlbnRQb3N0LnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHBvc3QuY3VycmVudFBvc3QuaHRtbCB9fSBjbGFzc05hbWU9e2Bhb3MtaW5pdCAke3N0eWxlcy5ib2R5SFRNTH1gfSBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BlogPageMainArticle.js\n");

/***/ }),

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; },\n/* harmony export */   \"default\": function() { return /* binding */ BlogPostPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_RequestForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/RequestForm */ \"./components/RequestForm.js\");\n/* harmony import */ var _components_BlogPageMainArticle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/BlogPageMainArticle */ \"./components/BlogPageMainArticle.js\");\n/* harmony import */ var _components_BlogPageBottomBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/BlogPageBottomBlock */ \"./components/BlogPageBottomBlock.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/Prernat/Documents/HOUNDSTOOTH - GUILD CAPITAL/DEV-PROJECTS/voyage-web-updated/pages/blog/[slug].js\";\n\n\n\n\n\n\n\nconst {\n  CONTENT_API_KEY,\n  BLOG_URL\n} = process.env;\n\nasync function getPost(slug) {\n  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html,feature_image,reading_time,published_at`).then(res => res.json());\n  const posts = res.posts;\n  return posts[0];\n}\n\nconst getStaticProps = async ({\n  params\n}) => {\n  const currentPost = await getPost(params.slug);\n  return {\n    props: {\n      currentPost\n    }\n  };\n};\nconst getStaticPaths = async () => {\n  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`);\n  const posts = await res.json();\n  const ids = posts.posts.map(post => post.slug);\n  const paths = ids.map(slug => ({\n    params: {\n      slug: slug.toString()\n    }\n  }));\n  return {\n    paths,\n    fallback: false\n  };\n};\nfunction BlogPostPage({\n  currentPost\n}) {\n  const {\n    0: formState,\n    1: setFormState\n  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"close\");\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"SMS marketing and text messaging for your ecommerce business. Get 40%+ CTR and 90%+ open rates. Get a demo today!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"robots\",\n        content: \"index, follow\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:title\",\n        content: \"SMS Marketing for Ecommerce | Voyage Mobile\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Voyage SMS: Text Marketing for eCommerce\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 10\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"main\",\n      id: \"main-target\",\n      \"data-scroll-container\": true,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestForm__WEBPACK_IMPORTED_MODULE_4__.default, {\n        formState: formState,\n        setFormState: setFormState\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.default, {\n        setFormState: setFormState\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageMainArticle__WEBPACK_IMPORTED_MODULE_5__.default, {\n        currentPost: currentPost\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPageBottomBlock__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {\n        setFormState: setFormState\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b3lhZ2UvLi9wYWdlcy9ibG9nL1tzbHVnXS5qcz8yOTM0Il0sIm5hbWVzIjpbIkNPTlRFTlRfQVBJX0tFWSIsIkJMT0dfVVJMIiwicHJvY2VzcyIsImVudiIsImdldFBvc3QiLCJzbHVnIiwicmVzIiwiZmV0Y2giLCJ0aGVuIiwianNvbiIsInBvc3RzIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJjdXJyZW50UG9zdCIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJpZHMiLCJtYXAiLCJwb3N0IiwicGF0aHMiLCJ0b1N0cmluZyIsImZhbGxiYWNrIiwiQmxvZ1Bvc3RQYWdlIiwiZm9ybVN0YXRlIiwic2V0Rm9ybVN0YXRlIiwidXNlU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNO0FBQUNBLGlCQUFEO0FBQWtCQztBQUFsQixJQUE4QkMsT0FBTyxDQUFDQyxHQUE1Qzs7QUFHQSxlQUFlQyxPQUFmLENBQXVCQyxJQUF2QixFQUE0QjtBQUN4QixRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUNsQixHQUFFTixRQUFTLG9DQUFtQ0ksSUFBSyxRQUFPTCxlQUFnQixpRUFEeEQsQ0FBTCxDQUVaUSxJQUZZLENBRU5GLEdBQUQsSUFBU0EsR0FBRyxDQUFDRyxJQUFKLEVBRkYsQ0FBbEI7QUFJSSxRQUFNQyxLQUFLLEdBQUdKLEdBQUcsQ0FBQ0ksS0FBbEI7QUFFQSxTQUFPQSxLQUFLLENBQUMsQ0FBRCxDQUFaO0FBQ1A7O0FBS00sTUFBTUMsY0FBYyxHQUFHLE9BQU87QUFBQ0M7QUFBRCxDQUFQLEtBQW9CO0FBQzlDLFFBQU1DLFdBQVcsR0FBRyxNQUFNVCxPQUFPLENBQUNRLE1BQU0sQ0FBQ1AsSUFBUixDQUFqQztBQUVBLFNBQU87QUFDTFMsU0FBSyxFQUFFO0FBQUNEO0FBQUQ7QUFERixHQUFQO0FBR0QsQ0FOSTtBQVNBLE1BQU1FLGNBQWMsR0FBRyxZQUFZO0FBQ3RDLFFBQU1ULEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRU4sUUFBUyxvQ0FBbUNELGVBQWdCLEVBQWhFLENBQXZCO0FBRUEsUUFBTVUsS0FBSyxHQUFHLE1BQU1KLEdBQUcsQ0FBQ0csSUFBSixFQUFwQjtBQUNBLFFBQU1PLEdBQUcsR0FBR04sS0FBSyxDQUFDQSxLQUFOLENBQVlPLEdBQVosQ0FBZ0JDLElBQUksSUFBSUEsSUFBSSxDQUFDYixJQUE3QixDQUFaO0FBQ0EsUUFBTWMsS0FBSyxHQUFHSCxHQUFHLENBQUNDLEdBQUosQ0FBUVosSUFBSSxLQUFLO0FBQUNPLFVBQU0sRUFBRTtBQUFDUCxVQUFJLEVBQUdBLElBQUksQ0FBQ2UsUUFBTDtBQUFSO0FBQVQsR0FBTCxDQUFaLENBQWQ7QUFFQSxTQUFPO0FBQ0hELFNBREc7QUFFSEUsWUFBUSxFQUFDO0FBRk4sR0FBUDtBQUlILENBWE07QUFlUSxTQUFTQyxZQUFULENBQXNCO0FBQUNUO0FBQUQsQ0FBdEIsRUFBcUM7QUFHaEQsUUFBTTtBQUFBLE9BQUNVLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQywrQ0FBUSxDQUFDLE9BQUQsQ0FBMUM7QUFJQSxzQkFDSTtBQUFBLDRCQUNDLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0c7QUFDQSxZQUFJLEVBQUMsYUFETDtBQUVBLGVBQU8sRUFBQztBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxlQUtHO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBb0IsZUFBTyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSCxlQU1HO0FBQ0EsZ0JBQVEsRUFBQyxVQURUO0FBRUEsZUFBTyxFQUFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5ILGVBVUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQWVBO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBc0IsUUFBRSxFQUFDLGFBQXpCO0FBQXVDLG1DQUF2QztBQUFBLDhCQUNJLDhEQUFDLDREQUFEO0FBQWEsaUJBQVMsRUFBRUYsU0FBeEI7QUFBbUMsb0JBQVksRUFBRUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUksOERBQUMsdURBQUQ7QUFBUSxvQkFBWSxFQUFFQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSSw4REFBQyxvRUFBRDtBQUFxQixtQkFBVyxFQUFFWDtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFJSSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFLSSw4REFBQyx1REFBRDtBQUFRLG9CQUFZLEVBQUVXO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmQTtBQUFBLGtCQURKO0FBMEJIIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlcXVlc3RGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1JlcXVlc3RGb3JtXCI7XG5pbXBvcnQgQmxvZ1BhZ2VNYWluQXJ0aWNsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CbG9nUGFnZU1haW5BcnRpY2xlXCI7XG5pbXBvcnQgQmxvZ1BhZ2VCb3R0b21CbG9jayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CbG9nUGFnZUJvdHRvbUJsb2NrXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB7Q09OVEVOVF9BUElfS0VZLCBCTE9HX1VSTH0gPSBwcm9jZXNzLmVudjtcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRQb3N0KHNsdWcpe1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHtCTE9HX1VSTH0vZ2hvc3QvYXBpL3YzL2NvbnRlbnQvcG9zdHMvc2x1Zy8ke3NsdWd9P2tleT0ke0NPTlRFTlRfQVBJX0tFWX0mZmllbGRzPXRpdGxlLHNsdWcsaHRtbCxmZWF0dXJlX2ltYWdlLHJlYWRpbmdfdGltZSxwdWJsaXNoZWRfYXRgXG4gICAgICAgICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIFxuICAgICAgICBjb25zdCBwb3N0cyA9IHJlcy5wb3N0cztcbiAgICBcbiAgICAgICAgcmV0dXJuIHBvc3RzWzBdXG59XG5cblxuXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7cGFyYW1zfSkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQb3N0ID0gYXdhaXQgZ2V0UG9zdChwYXJhbXMuc2x1ZylcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7Y3VycmVudFBvc3R9XG4gICAgfVxuICB9XG5cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0JMT0dfVVJMfS9naG9zdC9hcGkvdjMvY29udGVudC9wb3N0cy8/a2V5PSR7Q09OVEVOVF9BUElfS0VZfWApXG5cbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc3QgaWRzID0gcG9zdHMucG9zdHMubWFwKHBvc3QgPT4gcG9zdC5zbHVnKTtcbiAgICBjb25zdCBwYXRocyA9IGlkcy5tYXAoc2x1ZyA9PiAoe3BhcmFtczoge3NsdWcgOiBzbHVnLnRvU3RyaW5nKCl9fSkpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRocyxcbiAgICAgICAgZmFsbGJhY2s6ZmFsc2UsXG4gICAgfVxufVxuXG4gIFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nUG9zdFBhZ2Uoe2N1cnJlbnRQb3N0fSkge1xuXG5cbiAgICBjb25zdCBbZm9ybVN0YXRlLCBzZXRGb3JtU3RhdGVdID0gdXNlU3RhdGUoXCJjbG9zZVwiKTtcbiAgIFxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJTTVMgbWFya2V0aW5nIGFuZCB0ZXh0IG1lc3NhZ2luZyBmb3IgeW91ciBlY29tbWVyY2UgYnVzaW5lc3MuIEdldCA0MCUrIENUUiBhbmQgOTAlKyBvcGVuIHJhdGVzLiBHZXQgYSBkZW1vIHRvZGF5IVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJpbmRleCwgZm9sbG93XCIgLz5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnRpdGxlXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJTTVMgTWFya2V0aW5nIGZvciBFY29tbWVyY2UgfCBWb3lhZ2UgTW9iaWxlXCJcbiAgICAgICAgICAgID48L21ldGE+XG4gICAgICAgICAgICA8dGl0bGU+Vm95YWdlIFNNUzogVGV4dCBNYXJrZXRpbmcgZm9yIGVDb21tZXJjZTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cblxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiIGlkPVwibWFpbi10YXJnZXRcIiBkYXRhLXNjcm9sbC1jb250YWluZXI+XG4gICAgICAgICAgICA8UmVxdWVzdEZvcm0gZm9ybVN0YXRlPXtmb3JtU3RhdGV9IHNldEZvcm1TdGF0ZT17c2V0Rm9ybVN0YXRlfSAvPlxuICAgICAgICAgICAgPEhlYWRlciBzZXRGb3JtU3RhdGU9e3NldEZvcm1TdGF0ZX0gLz5cbiAgICAgICAgICAgIDxCbG9nUGFnZU1haW5BcnRpY2xlIGN1cnJlbnRQb3N0PXtjdXJyZW50UG9zdH0gLz5cbiAgICAgICAgICAgIDxCbG9nUGFnZUJvdHRvbUJsb2NrIC8+XG4gICAgICAgICAgICA8Rm9vdGVyIHNldEZvcm1TdGF0ZT17c2V0Rm9ybVN0YXRlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ }),

/***/ "./components/css/blogPageMainArticle.module.css":
/*!*******************************************************!*\
  !*** ./components/css/blogPageMainArticle.module.css ***!
  \*******************************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"articlePage\": \"blogPageMainArticle_articlePage__1AQ4O\",\n\t\"mainArticleImage\": \"blogPageMainArticle_mainArticleImage__6ahsc\",\n\t\"mainArticleData\": \"blogPageMainArticle_mainArticleData__StTe4\",\n\t\"topBar\": \"blogPageMainArticle_topBar__2oHwB\",\n\t\"bodyContent\": \"blogPageMainArticle_bodyContent__3x9x8\",\n\t\"bodyTitle\": \"blogPageMainArticle_bodyTitle__2AR-m\",\n\t\"bodyHTML\": \"blogPageMainArticle_bodyHTML__3UTuT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b3lhZ2UvLi9jb21wb25lbnRzL2Nzcy9ibG9nUGFnZU1haW5BcnRpY2xlLm1vZHVsZS5jc3M/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvY3NzL2Jsb2dQYWdlTWFpbkFydGljbGUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFydGljbGVQYWdlXCI6IFwiYmxvZ1BhZ2VNYWluQXJ0aWNsZV9hcnRpY2xlUGFnZV9fMUFRNE9cIixcblx0XCJtYWluQXJ0aWNsZUltYWdlXCI6IFwiYmxvZ1BhZ2VNYWluQXJ0aWNsZV9tYWluQXJ0aWNsZUltYWdlX182YWhzY1wiLFxuXHRcIm1haW5BcnRpY2xlRGF0YVwiOiBcImJsb2dQYWdlTWFpbkFydGljbGVfbWFpbkFydGljbGVEYXRhX19TdFRlNFwiLFxuXHRcInRvcEJhclwiOiBcImJsb2dQYWdlTWFpbkFydGljbGVfdG9wQmFyX18yb0h3QlwiLFxuXHRcImJvZHlDb250ZW50XCI6IFwiYmxvZ1BhZ2VNYWluQXJ0aWNsZV9ib2R5Q29udGVudF9fM3g5eDhcIixcblx0XCJib2R5VGl0bGVcIjogXCJibG9nUGFnZU1haW5BcnRpY2xlX2JvZHlUaXRsZV9fMkFSLW1cIixcblx0XCJib2R5SFRNTFwiOiBcImJsb2dQYWdlTWFpbkFydGljbGVfYm9keUhUTUxfXzNVVHVUXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/css/blogPageMainArticle.module.css\n");

/***/ }),

/***/ "@artsy/fresnel":
/*!*********************************!*\
  !*** external "@artsy/fresnel" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@artsy/fresnel");;

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("gsap");;

/***/ }),

/***/ "gsap/dist/ScrollTrigger":
/*!******************************************!*\
  !*** external "gsap/dist/ScrollTrigger" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("gsap/dist/ScrollTrigger");;

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","services_index_js","components_BlogPageBottomBlock_js-components_Footer_js-components_Header_js-components_Reques-a57e9c"], function() { return __webpack_exec__("./pages/blog/[slug].js"); });
module.exports = __webpack_exports__;

})();