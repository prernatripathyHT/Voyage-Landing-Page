(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7021:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./services/index.js
var services = __webpack_require__(7482);
;// CONCATENATED MODULE: ./components/Layout.js





function Layout({
  children
}) {
  (0,services/* saveUtmFromParams */.TE)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: "SMS Marketing for Ecommerce | Voyage Mobile"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Voyage SMS: Text Marketing for eCommerce | Privacy policy"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/images/fevicon32.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        dangerouslySetInnerHTML: {
          __html: `
                     (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                     })(window,document,'script','dataLayer','GTM-MZSHGDP');
                 `
        }
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        async: true,
        src: `https://www.googletagmanager.com/gtag/js?id=739656360`
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        dangerouslySetInnerHTML: {
          __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '739656360', {
                    page_path: window.location.pathname,
                    });
                `
        }
      })]
    }), children]
  });
}
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [482], function() { return __webpack_exec__(7021); });
module.exports = __webpack_exports__;

})();