exports.id = 110;
exports.ids = [110];
exports.modules = {

/***/ 110:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomePageVideoModal; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_homePageVideoModal_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8448);
/* harmony import */ var _css_homePageVideoModal_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_homePageVideoModal_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9015);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);





function HomePageVideoModal({
  videoModalState,
  setVideoModalState
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (videoModalState == 'open') {
      gsap__WEBPACK_IMPORTED_MODULE_2___default().to('.videoContainer', {
        duration: 0.35,
        opacity: 1,
        autoAlpha: 1,
        display: 'block'
      });
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_2___default().to('.videoContainer', {
        duration: 0.35,
        opacity: 0,
        autoAlpha: 0,
        display: 'none'
      });
    }
  }, [videoModalState]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: `videoContainer ${(_css_homePageVideoModal_module_css__WEBPACK_IMPORTED_MODULE_3___default().VideoModalBlock)}`,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_css_homePageVideoModal_module_css__WEBPACK_IMPORTED_MODULE_3___default().shadowBox),
      onClick: () => setVideoModalState('close')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (_css_homePageVideoModal_module_css__WEBPACK_IMPORTED_MODULE_3___default().videoModalWrapper),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_css_homePageVideoModal_module_css__WEBPACK_IMPORTED_MODULE_3___default().closeVideo),
        onClick: () => setVideoModalState('close'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
          viewBox: "0 0 52 52",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
            cx: "26",
            cy: "26",
            r: "26",
            fill: "white",
            fillOpacity: "0.2"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M28.7031 26L33.7656 20.9844C34.0469 20.7031 34.0469 20.1875 33.7656 19.9062L32.5938 18.7344C32.3125 18.4531 31.7969 18.4531 31.5156 18.7344L26.5 23.7969L21.4375 18.7344C21.1562 18.4531 20.6406 18.4531 20.3594 18.7344L19.1875 19.9062C18.9062 20.1875 18.9062 20.7031 19.1875 20.9844L24.25 26L19.1875 31.0625C18.9063 31.3438 18.9063 31.8594 19.1875 32.1406L20.3594 33.3125C20.6406 33.5938 21.1563 33.5938 21.4375 33.3125L26.5 28.25L31.5156 33.3125C31.7969 33.5938 32.3125 33.5938 32.5938 33.3125L33.7656 32.1406C34.0469 31.8594 34.0469 31.3437 33.7656 31.0625L28.7031 26Z",
            fill: "white"
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_css_homePageVideoModal_module_css__WEBPACK_IMPORTED_MODULE_3___default().videoContainer)
      })]
    })]
  });
}

/***/ }),

/***/ 8448:
/***/ (function(module) {

// Exports
module.exports = {
	"VideoModalBlock": "homePageVideoModal_VideoModalBlock__3svLl",
	"shadowBox": "homePageVideoModal_shadowBox__1obcL",
	"videoModalWrapper": "homePageVideoModal_videoModalWrapper__3-vqh",
	"closeVideo": "homePageVideoModal_closeVideo__1lhW0",
	"videoContainer": "homePageVideoModal_videoContainer__3WlQj"
};


/***/ })

};
;