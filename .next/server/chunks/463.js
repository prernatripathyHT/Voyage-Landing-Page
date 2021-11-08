exports.id = 463;
exports.ids = [463];
exports.modules = {

/***/ 7463:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _css_blogItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5619);
/* harmony import */ var _css_blogItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_blogItem_module_css__WEBPACK_IMPORTED_MODULE_2__);





const BlogItem = ({
  post
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/blog/[slug]",
    as: `/blog/${post.slug}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
      className: `aos-init ${(_css_blogItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().blogItemLink)}`,
      "data-aos": "fade-up",
      "data-aos-duration": "1000",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_css_blogItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().blogItemImage),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: `${post.feature_image}`
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_css_blogItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().blogItemDetails),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_css_blogItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().blogItemTagAndTime),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: post.tags.length > 0 ? post.tags[0].name : "Voyage"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            width: "3",
            height: "4",
            viewBox: "0 0 3 4",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
              cx: "1.5",
              cy: "2",
              r: "1.5",
              fill: "#CBCBCB"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            children: [post.reading_time, " min read"]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
          className: (_css_blogItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().blogItemTitle),
          children: post.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
          className: (_css_blogItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().blogItemExcerpt),
          children: [" ", post.excerpt, " "]
        })]
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (BlogItem);

/***/ }),

/***/ 5619:
/***/ (function(module) {

// Exports
module.exports = {
	"blogItemLink": "blogItem_blogItemLink__2Sv8u",
	"blogItemImage": "blogItem_blogItemImage__1mAD9",
	"blogItemDetails": "blogItem_blogItemDetails__eUaGT",
	"blogItemTagAndTime": "blogItem_blogItemTagAndTime__1zG2y",
	"blogItemTitle": "blogItem_blogItemTitle__2QcJ5",
	"blogItemExcerpt": "blogItem_blogItemExcerpt__3F_oH"
};


/***/ })

};
;