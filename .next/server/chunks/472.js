exports.id = 472;
exports.ids = [472];
exports.modules = {

/***/ 9183:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Footer; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/css/footer.module.css
var footer_module = __webpack_require__(7773);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
// EXTERNAL MODULE: ./data/headerFooterMenu.js
var headerFooterMenu = __webpack_require__(4013);
;// CONCATENATED MODULE: ./components/FooterMenuBlock.js




function FooterMenuBlock(props) {
  const {
    menuList,
    menuTitle
  } = props.menu;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (footer_module_default()).menuBlock,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
      children: menuTitle
    }), menuList.map(item => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: item.url,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: (footer_module_default()).menuItem,
        children: item.name
      })
    }, item.id))]
  });
}
;// CONCATENATED MODULE: ./components/Footer.js








function Footer({
  setFormState
}) {
  const footerProductMenu = {
    menuTitle: headerFooterMenu/* FooterProductMenu.menuTitle */.y$.menuTitle,
    menuList: headerFooterMenu/* FooterProductMenu.menuList */.y$.menuList
  };
  const footerLegalMenu = {
    menuTitle: headerFooterMenu/* FooterLegalMenu.menuTitle */.MJ.menuTitle,
    menuList: headerFooterMenu/* FooterLegalMenu.menuList */.MJ.menuList
  };
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("footer", {
      id: (footer_module_default()).footer_wrapper,
      "data-scroll-section": true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `container ${(footer_module_default()).footer}`,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `form-popup ${(footer_module_default()).connected}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            onClick: () => setFormState('open'),
            children: "Get Connected"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            className: (footer_module_default()).arrow,
            viewBox: "0 0 43 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M32.6226 1L40.6242 6.8657L32.6226 13.173",
              stroke: "#5F8ED3",
              strokeWidth: "2"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M0 7H39.6425",
              stroke: "#5F8ED3",
              strokeWidth: "2"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (footer_module_default()).footerMenuWrapper,
          children: [/*#__PURE__*/jsx_runtime_.jsx(FooterMenuBlock, {
            menu: footerProductMenu
          }), /*#__PURE__*/jsx_runtime_.jsx(FooterMenuBlock, {
            menu: footerLegalMenu
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (footer_module_default()).menuBlock,
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: headerFooterMenu/* OfficeAddress.menuTitle */.ly.menuTitle
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "1221 Ocean Ave"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "Suite 1605"
              }), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "Santa Monica, CA 90401"
              })]
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (footer_module_default()).footerBottom,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (footer_module_default()).footerLogoWrap,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/footer_logo.svg"
                })
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (footer_module_default()).footerContact,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "mailto:hello@voyagesms.com",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "hello@voyagesms.com"
              })
            })
          })]
        })]
      })
    })
  });
}

/***/ }),

/***/ 5284:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9365);
/* harmony import */ var _components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_headerFooterMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4013);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5136);
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9015);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1498);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__);











gsap__WEBPACK_IMPORTED_MODULE_6___default().registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__.ScrollTrigger);
const {
  MediaContextProvider,
  Media
} = (0,_artsy_fresnel__WEBPACK_IMPORTED_MODULE_5__.createMedia)({
  breakpoints: {
    sm: 0,
    md: 769,
    lg: 1024,
    xl: 1192
  }
});
function Header({
  setFormState
}) {
  const mobileMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  const overShadow = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();

  const openMenuDrawer = () => {
    gsap__WEBPACK_IMPORTED_MODULE_6___default().to(mobileMenuRef.current, {
      duration: 0.4,
      x: '0'
    });
    gsap__WEBPACK_IMPORTED_MODULE_6___default().to(overShadow.current, {
      duration: 0.3,
      opacity: 1,
      autoAlpha: 1
    });
  };

  const closeDrawer = () => {
    gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__.ScrollTrigger.matchMedia({
      // mobile
      "(max-width: 768px)": function () {
        gsap__WEBPACK_IMPORTED_MODULE_6___default().to(mobileMenuRef.current, {
          duration: 0.4,
          x: '100%'
        });
      }
    });
    gsap__WEBPACK_IMPORTED_MODULE_6___default().to(overShadow.current, {
      duration: 0.3,
      opacity: 0,
      autoAlpha: 0
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
        rel: "stylesheet",
        href: "https://use.typekit.net/fva8jii.css"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaContextProvider, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: (_components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8___default().header),
        "data-scroll-section": true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
          className: `container ${(_components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8___default().navbar)}`,
          "data-scroll": true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: (_components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8___default().logo_wrapper),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "/",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  className: (_components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8___default().logo),
                  src: "/images/voyage_header_logo.svg",
                  alt: "voyage logo"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Media, {
              lessThan: "md",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8___default().extra_menu),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  onClick: () => setFormState('open'),
                  className: `form-popup ${(_components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8___default().mobile_extra_menu)}`,
                  children: "Request Demo"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  onClick: openMenuDrawer,
                  className: (_components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8___default().hamburger),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    xmlns: "http://www.w3.org/1000/svg",
                    width: "21",
                    height: "17",
                    viewBox: "0 0 21 17",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                      fill: "none",
                      fillRule: "evenodd",
                      stroke: "#000",
                      strokeWidth: "2",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M0 .5L21 .5M0 7.5L21 7.5M0 14.5L21 14.5",
                        transform: "translate(0 1)"
                      })
                    })
                  })
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${(_components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8___default().active)} ${(_components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8___default().header_menu_box)}`,
            ref: mobileMenuRef,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: (_components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8___default().closeBtn),
              onClick: closeDrawer,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                xmlns: "http://www.w3.org/1000/svg",
                width: "17",
                height: "18",
                viewBox: "0 0 17 18",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                  fill: "none",
                  fillRule: "evenodd",
                  stroke: "#000",
                  strokeWidth: "2",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M-2 8.132L19 8.132",
                    transform: "translate(0 1) rotate(-46 8.5 8.132)"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M-2 8L19 8",
                    transform: "translate(0 1) rotate(46 8.5 8)"
                  })]
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: (_components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8___default().left_menu),
              children: _data_headerFooterMenu__WEBPACK_IMPORTED_MODULE_3__/* .HeaderMenu.map */ .y7.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                href: item.url,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: (_components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8___default().menu_item),
                  children: item.name
                })
              }, item.id))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: (_components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8___default().demo_login),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                onClick: () => (setFormState('open'), closeDrawer()),
                className: `form-popup ${(_components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8___default().demo_btn)}`,
                children: "Request Demo"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: (_components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8___default().login_btn),
                href: "https://app.voyagetext.com",
                children: "Login"
              })]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Media, {
            lessThan: "md",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              onClick: closeDrawer,
              className: `${(_components_css_header_module_css__WEBPACK_IMPORTED_MODULE_8___default().drawerShadow)}`,
              ref: overShadow
            })
          })]
        })
      })
    })]
  });
}

/***/ }),

/***/ 4013:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y7": function() { return /* binding */ HeaderMenu; },
/* harmony export */   "y$": function() { return /* binding */ FooterProductMenu; },
/* harmony export */   "MJ": function() { return /* binding */ FooterLegalMenu; },
/* harmony export */   "ly": function() { return /* binding */ OfficeAddress; }
/* harmony export */ });
const HeaderMenu = [{
  id: "1",
  name: "product",
  url: "/product"
}, {
  id: "2",
  name: "pricing",
  url: "/pricing"
}, {
  id: "3",
  name: "blog",
  url: "https://blog.voyagesms.com"
}, {
  id: "4",
  name: "about",
  url: "/about"
}];
const FooterProductMenu = {
  menuTitle: "Product",
  menuList: [{
    id: "1",
    name: "why voyage",
    url: "/"
  }, {
    id: "2",
    name: "pricing",
    url: "/pricing"
  }, {
    id: "3",
    name: "blog",
    url: "https://blog.voyagesms.com"
  }, {
    id: "4",
    name: "about",
    url: "/about"
  }]
};
const FooterLegalMenu = {
  menuTitle: "Legal",
  menuList: [{
    id: "1",
    name: "Terms & Conditions",
    url: "/terms-and-conditions"
  }, // { id: "2", name: "Privacy Policy CCPA", url: "/privacy-policy-ccpa"},
  {
    id: "3",
    name: "Privacy Policy",
    url: "/privacy-policy"
  }]
};
const OfficeAddress = {
  menuTitle: "Office",
  name: "1221 Ocean Ave, Suite 1605, Santa Monica, CA 90401"
};

/***/ }),

/***/ 7773:
/***/ (function(module) {

// Exports
module.exports = {
	"footer_wrapper": "footer_footer_wrapper__fkCUS",
	"footer": "footer_footer__2bzqx",
	"connected": "footer_connected__1ZiBt",
	"footerMenuWrapper": "footer_footerMenuWrapper__2jNER",
	"menuBlock": "footer_menuBlock__3k40J",
	"footerBottom": "footer_footerBottom__365WT",
	"footerLogoWrap": "footer_footerLogoWrap__1-XEo",
	"footerContact": "footer_footerContact__rBIzg",
	"divider": "footer_divider__3xZW8"
};


/***/ }),

/***/ 9365:
/***/ (function(module) {

// Exports
module.exports = {
	"header": "header_header__3hPKr",
	"navbar": "header_navbar__szC9C",
	"logo_wrapper": "header_logo_wrapper__ZlHQo",
	"logo": "header_logo__1WG56",
	"header_menu_box": "header_header_menu_box__2BZm5",
	"left_menu": "header_left_menu__1_E8D",
	"menu_item": "header_menu_item__LV5f2",
	"demo_login": "header_demo_login__1DR9z",
	"demo_btn": "header_demo_btn__2_jY-",
	"login_btn": "header_login_btn__1MhNF",
	"drawerShadow": "header_drawerShadow__2mk1w",
	"closeBtn": "header_closeBtn__2GGFa",
	"extra_menu": "header_extra_menu__1RjU5",
	"mobile_extra_menu": "header_mobile_extra_menu__1ISbD",
	"hamburger": "header_hamburger__3wzzj"
};


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;