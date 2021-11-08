(function() {
var exports = {};
exports.id = 698;
exports.ids = [698];
exports.modules = {

/***/ 3649:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Careers; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(5284);
// EXTERNAL MODULE: ./components/Footer.js + 1 modules
var Footer = __webpack_require__(9183);
;// CONCATENATED MODULE: ./data/CareersPageHeroBanner.js
const CareersPageHeroBannerData = {
  titleText: "Careers",
  subText_1: "Voyage is trailblazing the market with the fastest product innovation in next-gen messaging commerce. We are growing exponentially and looking for passionate self-starters to join the team.",
  subText_2: "We embrace an ambitious roadmap while delivering the highest quality product available in the market. Your work will touch the hands of leading eCommerce marketers running $1B+ brands. You will be at the forefront of best-in-class marketing technology."
};
// EXTERNAL MODULE: ./components/css/careersPageHeroBanner.module.css
var careersPageHeroBanner_module = __webpack_require__(8483);
var careersPageHeroBanner_module_default = /*#__PURE__*/__webpack_require__.n(careersPageHeroBanner_module);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(9015);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/CareersPageHeroBanner.js






function CareersPageHeroBanner() {
  (0,external_react_.useEffect)(() => {
    const timeline = external_gsap_default().timeline({
      defaults: {
        duration: 1
      }
    });
    timeline.from('.title-anim', {
      y: '30%',
      stagger: .6,
      opacity: 0
    }).from('.anim-down svg', {
      y: '-50%',
      stagger: .5,
      opacity: 0
    }, "1.5").from('.anim-right', {
      x: '-40%',
      opacity: 0
    }, "0").from('.anim-up', {
      y: '40%',
      opacity: 0
    }, "1.2");
  });
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: (careersPageHeroBanner_module_default()).careersPageHeroBanner,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: ` container ${(careersPageHeroBanner_module_default()).heroBanner_innerWrapper}`,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (careersPageHeroBanner_module_default()).leftBlock,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: `title-anim ${(careersPageHeroBanner_module_default()).careersPageTitle}`,
          children: CareersPageHeroBannerData.titleText
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "title-anim",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: `${(careersPageHeroBanner_module_default()).careersPageSubText}`,
            children: CareersPageHeroBannerData.subText_1
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: `${(careersPageHeroBanner_module_default()).careersPageSubText}`,
            children: CareersPageHeroBannerData.subText_2
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (careersPageHeroBanner_module_default()).designElements,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/images/careers-dots-1.svg",
            alt: "careers-dots-1"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (careersPageHeroBanner_module_default()).rightBlock,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (careersPageHeroBanner_module_default()).staticAssets,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            width: "306",
            height: "299",
            viewBox: "0 0 306 299",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/jsx_runtime_.jsx("circle", {
              cx: "149.708",
              cy: "149.5",
              r: "149.5",
              fill: "#3F5CFB",
              fillOpacity: "0.83"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M285.3 220.418L321 250V126H174V220.418H285.3Z",
              fill: "#5BEBC1",
              fillOpacity: "0.8"
            }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
              rx: "26.8734",
              ry: "26.2762",
              transform: "matrix(-1 0 0 1 116.334 221.803)",
              fill: "#5BEBC1"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/images/careers-dots-2.svg",
            alt: "careers-dots-2"
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/images/careers-dots-3.svg",
            alt: "careers-dots-3"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `anim-down ${(careersPageHeroBanner_module_default()).animmateDown}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
            width: "55",
            height: "32",
            viewBox: "0 0 55 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M27.562 31.2627L0.207644 2.37748e-05L54.9164 2.86102e-05L27.562 31.2627Z",
              fill: "#405CFB"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
            width: "55",
            height: "32",
            viewBox: "0 0 55 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M27.562 31.2627L0.207644 2.37748e-05L54.9164 2.86102e-05L27.562 31.2627Z",
              fill: "#405CFB"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
            width: "47",
            height: "47",
            viewBox: "0 0 47 47",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
              cx: "23.3623",
              cy: "23.477",
              rx: "23.1148",
              ry: "22.6012",
              transform: "rotate(-180 23.3623 23.477)",
              fill: "#0E1D37"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `anim-up ${(careersPageHeroBanner_module_default()).animmateUp}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            width: "55",
            height: "90",
            viewBox: "0 0 55 90",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M39.166 45L0.207401 89.5249L78.1246 89.5249L39.166 45Z",
              fill: "#405CFB"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M39.166 3.40587e-06L0.207401 44.5249L78.1246 44.5249L39.166 3.40587e-06Z",
              fill: "#405CFB"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `anim-left ${(careersPageHeroBanner_module_default()).animateLeft}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            width: "92",
            height: "29",
            viewBox: "0 0 92 29",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M67.9306 29H91.2076V0H0.207642V29H67.9306Z",
              fill: "#405CFB"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `anim-right ${(careersPageHeroBanner_module_default()).animateRight}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            width: "67",
            height: "60",
            viewBox: "0 0 67 60",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M66.9269 29.5595L33.4634 7.28783e-05L33.4634 59.1189L66.9269 29.5595Z",
              fill: "#02D9FC"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M33.4635 29.5595L1.83685e-05 7.28783e-05L1.90735e-05 59.1189L33.4635 29.5595Z",
              fill: "#02D9FC"
            })]
          })
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./data/CareersPageCurrentOpenings.js
const CareersPageCurrentOpeningsData = [{
  department: "Client Success",
  position: "Client Success Manager",
  place: "Santa Monica, CA",
  link: "https://jobs.lever.co/voyagesms/915e0689-14c2-4f9a-8d87-918b2d0123f3",
  openings: []
}, {
  department: "HR",
  position: "Analyst / Executive Support (VC-backed Startup) ",
  place: "Santa Monica, CA",
  link: "https://jobs.lever.co/voyagesms/4ecb9116-85ba-410c-9925-01866b0152ec",
  openings: []
}, {
  department: "Operations",
  openings: [{
    position: "Business Operations Manager",
    place: "Santa Monica, CA",
    link: "https://jobs.lever.co/voyagesms/4788635a-a534-4f80-8ac5-4969b65f4741"
  }, {
    position: "eCommerce Solutions Expert (Technical AM)",
    place: "Santa Monica, CA",
    link: "https://jobs.lever.co/voyagesms/87b469d7-1e05-406e-86c7-f464f46e8908"
  }]
}];
// EXTERNAL MODULE: ./components/css/careersPageOpeningsBlock.module.css
var careersPageOpeningsBlock_module = __webpack_require__(1693);
var careersPageOpeningsBlock_module_default = /*#__PURE__*/__webpack_require__.n(careersPageOpeningsBlock_module);
;// CONCATENATED MODULE: ./components/CareersPageOpeningsBlock.js




function CareersPageOpeningsBlock({
  openings
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: (careersPageOpeningsBlock_module_default()).careersPageOpeningsBlock,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: ` container ${(careersPageOpeningsBlock_module_default()).currentOpenings_innerWrapper}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: `${(careersPageOpeningsBlock_module_default()).careersPageTitle}`,
        children: "Current Openings"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (careersPageOpeningsBlock_module_default()).jobOpeningsSection,
        children: openings.map((opening, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (careersPageOpeningsBlock_module_default()).currentOpening,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: opening.categories.team
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (careersPageOpeningsBlock_module_default()).openingDetails,
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              children: opening.text
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: opening.categories.location
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: (careersPageOpeningsBlock_module_default()).detailsBtn,
            href: opening.hostedUrl,
            target: "_blank",
            children: "View Details"
          })]
        }, index))
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/AboutPageSignupBlock.js
var AboutPageSignupBlock = __webpack_require__(2618);
// EXTERNAL MODULE: ./components/AboutPageBottomBlock.js
var AboutPageBottomBlock = __webpack_require__(6699);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/RequestForm.js + 1 modules
var RequestForm = __webpack_require__(7081);
;// CONCATENATED MODULE: ./pages/careers/index.js












const LEVER_URL = process.env.LEVER_URL;
const LEVER_API_KEY = process.env.LEVER_API_KEY;
const getStaticProps = async () => {
  const res = await fetch(`${LEVER_URL}?key=${LEVER_API_KEY}`);
  const openings = await res.json();
  return {
    props: {
      openings
    }
  };
};
function Careers({
  openings
}) {
  const {
    0: formState,
    1: setFormState
  } = (0,external_react_.useState)("close"); //console.log("job openings", {openings});

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "SMS marketing and text messaging for your ecommerce business. Get 40%+ CTR and 90%+ open rates. Get a demo today!"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "robots",
        content: "index, follow"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: "SMS Marketing for Ecommerce | Voyage Mobile"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        content: "width=device-width, initial-scale=1.0,maximum-scale=1.0, viewport-fit=cover",
        name: "viewport"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Voyage SMS: Text Marketing for eCommerce"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "main",
      id: "main-target",
      "data-scroll-container": true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(RequestForm/* default */.Z, {
        formState: formState,
        setFormState: setFormState
      }), /*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {
        setFormState: setFormState
      }), /*#__PURE__*/jsx_runtime_.jsx(CareersPageHeroBanner, {}), /*#__PURE__*/jsx_runtime_.jsx(CareersPageOpeningsBlock, {
        openings: openings
      }), /*#__PURE__*/jsx_runtime_.jsx(AboutPageSignupBlock/* default */.Z, {
        setFormState: setFormState
      }), /*#__PURE__*/jsx_runtime_.jsx(AboutPageBottomBlock/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {
        setFormState: setFormState
      })]
    })]
  });
}

/***/ }),

/***/ 8483:
/***/ (function(module) {

// Exports
module.exports = {
	"careersPageHeroBanner": "careersPageHeroBanner_careersPageHeroBanner__13dbQ",
	"heroBanner_innerWrapper": "careersPageHeroBanner_heroBanner_innerWrapper__2V3jb",
	"leftBlock": "careersPageHeroBanner_leftBlock__1vtst",
	"designElements": "careersPageHeroBanner_designElements__1TkYd",
	"careersPageTitle": "careersPageHeroBanner_careersPageTitle__3cleG",
	"careersPageSubText": "careersPageHeroBanner_careersPageSubText__2X554",
	"staticAssets": "careersPageHeroBanner_staticAssets__1M8O4",
	"animmateDown": "careersPageHeroBanner_animmateDown__2gui3",
	"animmateUp": "careersPageHeroBanner_animmateUp__1krEL",
	"animateLeft": "careersPageHeroBanner_animateLeft__sgC6j",
	"animateRight": "careersPageHeroBanner_animateRight__1mPLR",
	"rightBlock": "careersPageHeroBanner_rightBlock__3_TiZ"
};


/***/ }),

/***/ 1693:
/***/ (function(module) {

// Exports
module.exports = {
	"careersPageOpeningsBlock": "careersPageOpeningsBlock_careersPageOpeningsBlock__sEWIt",
	"careersPageTitle": "careersPageOpeningsBlock_careersPageTitle__UTqZK",
	"currentOpening": "careersPageOpeningsBlock_currentOpening__1rCQV",
	"currentOpenings": "careersPageOpeningsBlock_currentOpenings__3yAqm",
	"currentJobs": "careersPageOpeningsBlock_currentJobs__3PU0-",
	"jobs": "careersPageOpeningsBlock_jobs__2qXES",
	"openingDetails": "careersPageOpeningsBlock_openingDetails__2C8Ia",
	"detailsBtn": "careersPageOpeningsBlock_detailsBtn__rHqXb"
};


/***/ }),

/***/ 5136:
/***/ (function(module) {

"use strict";
module.exports = require("@artsy/fresnel");;

/***/ }),

/***/ 9015:
/***/ (function(module) {

"use strict";
module.exports = require("gsap");;

/***/ }),

/***/ 1498:
/***/ (function(module) {

"use strict";
module.exports = require("gsap/dist/ScrollTrigger");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,472,482,81,699,618], function() { return __webpack_exec__(3649); });
module.exports = __webpack_exports__;

})();