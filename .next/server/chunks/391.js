exports.id = 391;
exports.ids = [391];
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

/***/ 1563:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SignupBottomBlock; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_blogPageBottomBlock_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1433);
/* harmony import */ var _css_blogPageBottomBlock_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_blogPageBottomBlock_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5136);
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_1__);




const {
  MediaContextProvider,
  Media
} = (0,_artsy_fresnel__WEBPACK_IMPORTED_MODULE_1__.createMedia)({
  breakpoints: {
    sm: 0,
    md: 769,
    lg: 1024,
    xl: 1192
  }
});
function SignupBottomBlock() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaContextProvider, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
      id: (_css_blogPageBottomBlock_module_css__WEBPACK_IMPORTED_MODULE_2___default().blogPageBottomBlock),
      className: (_css_blogPageBottomBlock_module_css__WEBPACK_IMPORTED_MODULE_2___default().blogPageBottomBlock),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_css_blogPageBottomBlock_module_css__WEBPACK_IMPORTED_MODULE_2___default().shapeBox),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_css_blogPageBottomBlock_module_css__WEBPACK_IMPORTED_MODULE_2___default().boxWrapper),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: "1184",
            height: "600",
            viewBox: "0 0 1184 600",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
              x: "74.8376",
              y: "122.275",
              width: "187.302",
              height: "218.811",
              transform: "rotate(20 74.8376 122.275)",
              fill: "#3F5CFB"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ellipse", {
              cx: "400.185",
              cy: "351.792",
              rx: "247.949",
              ry: "247.542",
              fill: "#219AFB"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
              x: "619.094",
              y: "261.808",
              width: "277.901",
              height: "277.901",
              transform: "rotate(-70 619.094 261.808)",
              fill: "#02D9FC"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
              x: "558.668",
              y: "328.095",
              width: "277.901",
              height: "277.901",
              transform: "rotate(-80 558.668 328.095)",
              fill: "#3C55FF"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
              cx: "161.208",
              cy: "188.26",
              r: "73.4061",
              fill: "#5BEBC1"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
              d: "M103.298 114.854H219.117L161.208 60.2068L103.298 114.854Z",
              fill: "#1C345C"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
              d: "M103.298 60.2068H219.117L161.208 5.56006L103.298 60.2068Z",
              fill: "#1C345C"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ellipse", {
              cx: "1036.78",
              cy: "217.622",
              rx: "147.22",
              ry: "146.812",
              fill: "#219AFB"
            })]
          })
        })
      })
    })
  });
}

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


/***/ }),

/***/ 1433:
/***/ (function(module) {

// Exports
module.exports = {
	"blogPageBottomBlock": "blogPageBottomBlock_blogPageBottomBlock__26I54",
	"shapeBox": "blogPageBottomBlock_shapeBox__wIZtp",
	"boxWrapper": "blogPageBottomBlock_boxWrapper__3i9Ql"
};


/***/ })

};
;