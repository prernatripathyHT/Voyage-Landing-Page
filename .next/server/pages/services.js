(function() {
var exports = {};
exports.id = 54;
exports.ids = [54];
exports.modules = {

/***/ 3807:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ About; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(5284);
// EXTERNAL MODULE: ./components/Footer.js + 1 modules
var Footer = __webpack_require__(9183);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/css/servicesPageHeroBanner.module.css
var servicesPageHeroBanner_module = __webpack_require__(2857);
var servicesPageHeroBanner_module_default = /*#__PURE__*/__webpack_require__.n(servicesPageHeroBanner_module);
// EXTERNAL MODULE: external "@artsy/fresnel"
var fresnel_ = __webpack_require__(5136);
;// CONCATENATED MODULE: ./components/ServicesPageHeroBanner.js





const {
  MediaContextProvider,
  Media
} = (0,fresnel_.createMedia)({
  breakpoints: {
    sm: 0,
    md: 769,
    lg: 1024,
    xl: 1192
  }
});
function ServicesPageHeroBanner() {
  const {
    0: offsetY,
    1: setOffsetY
  } = (0,external_react_.useState)(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  (0,external_react_.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(MediaContextProvider, {
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: (servicesPageHeroBanner_module_default()).servicesPageHeroBanner,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `${(servicesPageHeroBanner_module_default()).heroBanner_innerWrapper}`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (servicesPageHeroBanner_module_default()).textBlock,
          style: {
            transform: `translateY(${offsetY * -.15}px)`
          },
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
            className: (servicesPageHeroBanner_module_default()).heroTitle,
            children: ["Voyage ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Compass"]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Media, {
          greaterThanOrEqual: "md",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (servicesPageHeroBanner_module_default()).designBlock,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              width: "159",
              height: "177",
              viewBox: "0 0 159 177",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
                x: "0.775391",
                y: "79.4914",
                width: "157.252",
                height: "96.5799",
                fill: "#162740"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M0.775391 79.119L79.2912 32.7709L158.027 79.4911L79.5115 125.839L0.775391 79.119Z",
                fill: "#5BEBC1"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/services-dots-circle.svg",
              alt: "services-dots-1"
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/services-dots-dark-blue.svg",
              alt: "services-dots-2"
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/services-dots-light-blue.svg",
              alt: "services-dots-3"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              width: "58",
              height: "52",
              viewBox: "0 0 58 52",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M57.8672 25.5594L28.932 -3.46965e-06L28.932 51.1188L57.8672 25.5594Z",
                fill: "#02D9FC"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M28.9355 25.5594L0.000365601 -3.46965e-06L0.000366211 51.1188L28.9355 25.5594Z",
                fill: "#5BEBC1"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              width: "43",
              height: "60",
              viewBox: "0 0 43 60",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: {
                transform: `translateY(${offsetY * .1}px)`
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M21.5009 30L0.00178745 -7.15396e-07L43 3.8147e-06L21.5009 30Z",
                fill: "#5BEBC1"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M21.5009 60L0.00178745 30L43 30L21.5009 60Z",
                fill: "#405CFB"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              width: "91",
              height: "45",
              viewBox: "0 0 91 45",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M65.8203 22.0324L91.0007 1.15127e-05L91.0006 44.0648L65.8203 22.0324Z",
                fill: "#5BEBC1"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M39.7891 22.0324L64.9694 1.15127e-05L64.9694 44.0648L39.7891 22.0324Z",
                fill: "#3F5CFA"
              }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
                cx: "18",
                cy: "21.5648",
                rx: "18.5",
                ry: "18",
                transform: "rotate(-90 18 21.5648)",
                fill: "#162740"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              width: "278",
              height: "358",
              viewBox: "0 0 278 358",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/jsx_runtime_.jsx("circle", {
                r: "167.076",
                transform: "matrix(0.359412 -0.933179 -0.933179 -0.359412 168 167.37)",
                fill: "#1C345C"
              }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
                rx: "46",
                ry: "44.5",
                transform: "matrix(0.359412 -0.933179 -0.933179 -0.359412 59.0592 311.92)",
                fill: "#5BEBC1"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              width: "197",
              height: "267",
              viewBox: "0 0 197 267",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: {
                transform: `rotate(${offsetY * .3}deg)`,
                transformOrigin: `50% 50%`
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M165.032 228.268L125.825 123.622L81.0501 154.545L165.032 228.268Z",
                fill: "#5BEBC1"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M32.2433 39.6899L116.226 113.413L71.4508 144.337L32.2433 39.6899Z",
                fill: "#02D9FC"
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Media, {
          lessThan: "md",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (servicesPageHeroBanner_module_default()).designBlock,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              width: "206",
              height: "262",
              viewBox: "0 0 206 262",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/jsx_runtime_.jsx("circle", {
                r: "94.3515",
                transform: "matrix(0.359412 -0.933179 -0.933179 -0.359412 128.816 122.149)",
                fill: "#1C345C"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M167.799 174.047L145.657 114.95L120.372 132.413L167.799 174.047Z",
                fill: "#5BEBC1"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M92.8104 67.5523L140.237 109.185L114.952 126.649L92.8104 67.5523Z",
                fill: "#02D9FC"
              }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
                rx: "21.4566",
                ry: "20.757",
                transform: "matrix(0.359412 -0.933179 -0.933179 -0.359412 63.083 194.483)",
                fill: "#3F5CFB"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/services-dots-circle.svg",
              alt: "services-dots-1"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              width: "38",
              height: "34",
              viewBox: "0 0 38 34",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M37.6797 16.5594L18.9332 -3.59115e-06L18.9332 33.1188L37.6797 16.5594Z",
                fill: "#02D9FC"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M18.9346 16.5594L0.188068 -3.59115e-06L0.188068 33.1188L18.9346 16.5594Z",
                fill: "#5BEBC1"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/services-dots-light-blue-mob.svg",
              alt: "services-dots-2"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              width: "32",
              height: "66",
              viewBox: "0 0 32 66",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M16.0324 18.249L0.0648419 9.77715e-07L32 3.8147e-06L16.0324 18.249Z",
                fill: "#5BEBC1"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M16.0324 37.1154L0.0648419 18.8665L32 18.8665L16.0324 37.1154Z",
                fill: "#3F5CFA"
              }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
                cx: "15.694",
                cy: "52.9049",
                rx: "13.4075",
                ry: "13.0452",
                transform: "rotate(-180 15.694 52.9049)",
                fill: "#162740"
              })]
            })]
          })
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./data/ServicesPageConsultingBlock.js
const ServicesPageConsultingBlockData = {
  titleText: "Consulting Services for SMS Success",
  subText_1: "As your partner in smarter SMS marketing 🤝, Voyage SMS offers brands a full suite of services to ensure maximized channel optimization. ",
  subText_2: "With U.S. mobile commerce expected to reach $1 trillion by 2027, and 80% of consumers reporting a sub-optimal experience shopping on their mobile devices, it's time to take SMS seriously.",
  subText_3: "With the consulting services from our DTC eCommerce experts on board, your marketing team can drive revenue and cultivate customer delight for your brand through smarter, optimized SMS."
};
// EXTERNAL MODULE: ./components/css/servicesPageConsultingBlock.module.css
var servicesPageConsultingBlock_module = __webpack_require__(363);
var servicesPageConsultingBlock_module_default = /*#__PURE__*/__webpack_require__.n(servicesPageConsultingBlock_module);
;// CONCATENATED MODULE: ./components/ServicesPageConsultingBlock.js





const {
  MediaContextProvider: ServicesPageConsultingBlock_MediaContextProvider,
  Media: ServicesPageConsultingBlock_Media
} = (0,fresnel_.createMedia)({
  breakpoints: {
    sm: 0,
    md: 769,
    lg: 1024,
    xl: 1192
  }
});
function ServicesPageConsultingBlock() {
  return /*#__PURE__*/jsx_runtime_.jsx(ServicesPageConsultingBlock_MediaContextProvider, {
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: (servicesPageConsultingBlock_module_default()).servicesPageConsultingBlock,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `container ${(servicesPageConsultingBlock_module_default()).consultingBlock_innerWrapper}`,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (servicesPageConsultingBlock_module_default()).leftBlock,
          children: [/*#__PURE__*/jsx_runtime_.jsx(ServicesPageConsultingBlock_Media, {
            greaterThanOrEqual: "md",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
              children: ["Consulting ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Services for ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " SMS Success"]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(ServicesPageConsultingBlock_Media, {
            lessThan: "md",
            children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: "Consulting Services for SMS Success"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (servicesPageConsultingBlock_module_default()).rightBlock,
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: ServicesPageConsultingBlockData.subText_1
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: ServicesPageConsultingBlockData.subText_2
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: ServicesPageConsultingBlockData.subText_3
          })]
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./data/ServicesPageStrategyGuideBlock.js
const ServicesPageStrategyGuideBlockData = {
  mainBlockTitle: "Navigating Your Voyage: Strategy",
  mainBlockData: `<p>Voyage brands see ROAS of 100X or higher 📈. </p>
     <p><span>There's a reason for this runaway success. Unlike other SMS platforms ordered by executives, Voyage was</span> built by marketers<span> and technologists – </span>for today's sophisticated marketers.</p>
     <p><span>We love a coupon code, but that's just the start of what SMS can do.</span></p>
     <p><span>When you partner through Voyage Compass with our industry-proven, award-winning team of</span> strategists, engineers and creatives,<span> you gain the entirety of our digital marketing and SMS strategic expertise.</span></p>
    `,
  mainBlockImage: "images/services-strategy-guide-main.png",
  mainBlockImage_mob: "images/services-strategy-guide-main-mob.png",
  subBlockTitle_1: "Course Setting: 360° Digital Marketing Audit",
  subBlockData_1: `<p>As part of Voyage Compass, our digital marketing experts can perform an audit of your full digital marketing ecosystem. SMS works best when synced to your entire sales and marketing pipeline.</p>
     <p>Through this audit, our team will help you:</p>
     <ul>
        <li><span>Identify KPIs</span></li>
        <li><span>Analyze benchmarks, specific to your vertical(s)</span></li>
        <li><span>Provide a full view of opportunities and optimizations</span></li>
     </ul>
     <p>From this baseline, our SMS and eCommerce consulting team can help your brand formulate an incisive strategy for smarter SMS marketing.</p>
    `,
  subBlockImage_1: "images/service-strategy-guide-sub-1.png",
  subBlockImage_1_mob: "images/service-strategy-guide-sub-1-mob.png",
  subBlockTitle_2: "SMS Strategy: Foundational to Advanced",
  subBlockData_2: [{
    title: "List Building",
    text: `Our List Building consultations through Voyage Compass takes the sort of service you see with our custom, on-brand modals to the next logical step. With assists from our teams of developers and creatives, we'll set you up with A/B tests, benchmarks, and best practices to optimize your SMS lists.`,
    image: "images/service-strategy-guide-sub-2.1-new.png"
  }, {
    title: "Keyword Campaigns",
    text: `With unlimited keyword campaigns in your Voyage dash, it can seem daunting to begin unlocking the full potential of this SMS List Building and Segmentation tool. With proven examples from other client brands leading the way, the Compass team will guide you towards leveraging campaigns on the web, IRL, and in numerous creative ways, so that you can race ahead of the SMS competition.`,
    image: "images/service-strategy-guide-sub-2.2.png"
  }, {
    title: "Segmentation",
    text: `One thing we want to see more of out on the open seas of SMS marketing is smarter, and more precise segmentation. This is where your Voyage experience differs from what those other rudderless SMS marketing platforms offer. We'll get you started on ways both perfectly logical (see Automations below) and creative (ahoy, micro-marketing to VIP lists) to segment better.`,
    image: "images/service-strategy-guide-sub-2.3-new.png"
  }, {
    title: "Automations",
    text: `Voyage brands earn $97 per $1 spent on Automated Drip messaging.
         With the agility of our data structures and Voyage's deep integrations leading the way, your Voyage Compass team will consult with you on how to convert high-intent prospects through targeted, optimized Automated Browse, Automated Drip, and Custom Event triggered programmatic messaging. Your brand will earn more money, and create more happy customers, while you sleep.`,
    image: "images/service-strategy-guide-sub-2.4.png"
  }]
};
// EXTERNAL MODULE: ./components/css/servicesPageStrategyGuideBlock.module.css
var servicesPageStrategyGuideBlock_module = __webpack_require__(6177);
var servicesPageStrategyGuideBlock_module_default = /*#__PURE__*/__webpack_require__.n(servicesPageStrategyGuideBlock_module);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./components/ServicesPageStrategyGuideBlock.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function SampleNextArrow(props) {
  const {
    className,
    style,
    onClick
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `${className} custom-arrow-next`,
    style: _objectSpread(_objectSpread({}, style), {}, {
      display: "flex!important",
      background: "#fff",
      width: "32px",
      height: "32px",
      boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.08)",
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }),
    onClick: onClick,
    children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
      width: "8",
      height: "14",
      viewBox: "0 0 8 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M0.727273 13.8814L0.0948615 13.2802C-0.031621 13.122 -0.031621 12.8689 0.0948615 12.7424L5.81818 6.98418L0.0948615 1.25763C-0.031621 1.13107 -0.031621 0.877966 0.0948615 0.719774L0.727273 0.118644C0.885375 -0.039548 1.10672 -0.039548 1.26482 0.118644L7.90514 6.73107C8.03162 6.88927 8.03162 7.11073 7.90514 7.26893L1.26482 13.8814C1.10672 14.0395 0.885375 14.0395 0.727273 13.8814Z",
        fill: "black"
      })
    })
  });
}

function SamplePrevArrow(props) {
  const {
    className,
    style,
    onClick
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `${className} custom-arrow-prev`,
    style: _objectSpread(_objectSpread({}, style), {}, {
      display: "flex!important",
      background: "#fff",
      width: "32px",
      height: "32px",
      boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.08)",
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }),
    onClick: onClick,
    children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
      width: "8",
      height: "14",
      viewBox: "0 0 8 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M7.27273 13.8814L7.90514 13.2802C8.03162 13.122 8.03162 12.8689 7.90514 12.7424L2.18182 6.98418L7.90514 1.25763C8.03162 1.13107 8.03162 0.877966 7.90514 0.719774L7.27273 0.118644C7.11462 -0.039548 6.89328 -0.039548 6.73518 0.118644L0.0948617 6.73107C-0.0316206 6.88927 -0.0316206 7.11073 0.0948617 7.26893L6.73518 13.8814C6.89328 14.0395 7.11462 14.0395 7.27273 13.8814Z",
        fill: "black"
      })
    })
  });
}

const {
  MediaContextProvider: ServicesPageStrategyGuideBlock_MediaContextProvider,
  Media: ServicesPageStrategyGuideBlock_Media
} = (0,fresnel_.createMedia)({
  breakpoints: {
    sm: 0,
    md: 769,
    lg: 1024,
    xl: 1192
  }
});
const settings = {
  dots: true,
  infinite: false,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: false,
  adaptiveHeight: true,
  cssEase: `cubic-bezier(.51,.11,.44,.96)`,
  nextArrow: /*#__PURE__*/jsx_runtime_.jsx(SampleNextArrow, {}),
  prevArrow: /*#__PURE__*/jsx_runtime_.jsx(SamplePrevArrow, {})
};
function ServicesPageStrategyGuideBlock() {
  const {
    0: selected,
    1: setSelected
  } = (0,external_react_.useState)(ServicesPageStrategyGuideBlockData.subBlockData_2[0]);

  const toggle = item => {
    setSelected(item);
  };

  const accordianOpen = /*#__PURE__*/jsx_runtime_.jsx("svg", {
    width: "20",
    height: "12",
    viewBox: "0 0 20 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M19.7556 11.1724C19.4298 11.4982 18.9031 11.4982 18.5773 11.1724L9.99997 2.59507L1.42266 11.1724C1.09684 11.4982 0.570173 11.4982 0.24436 11.1724C-0.0814533 10.8466 -0.0814533 10.3199 0.24436 9.99409L9.41084 0.827608C9.57334 0.665112 9.78666 0.583435 10 0.583435C10.2134 0.583435 10.4267 0.665112 10.5892 0.827608L19.7557 9.99409C20.0814 10.3199 20.0814 10.8466 19.7556 11.1724Z",
      fill: "#405CFB"
    })
  });

  const accordianClosed = /*#__PURE__*/jsx_runtime_.jsx("svg", {
    width: "20",
    height: "12",
    viewBox: "0 0 20 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M19.7556 0.827612C19.4298 0.501799 18.9031 0.501799 18.5773 0.827612L9.99997 9.40493L1.42266 0.827612C1.09684 0.501799 0.570173 0.501799 0.24436 0.827612C-0.0814533 1.15343 -0.0814533 1.68009 0.24436 2.00591L9.41084 11.1724C9.57334 11.3349 9.78666 11.4166 10 11.4166C10.2134 11.4166 10.4267 11.3349 10.5892 11.1724L19.7557 2.00591C20.0814 1.68009 20.0814 1.15343 19.7556 0.827612Z",
      fill: "black"
    })
  });

  return /*#__PURE__*/jsx_runtime_.jsx(ServicesPageStrategyGuideBlock_MediaContextProvider, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: (servicesPageStrategyGuideBlock_module_default()).servicesPageStrategyGuideBlock,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (servicesPageStrategyGuideBlock_module_default()).section_1,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `container ${(servicesPageStrategyGuideBlock_module_default()).section_1_innerWrapper}`,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (servicesPageStrategyGuideBlock_module_default()).leftBlock,
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: ServicesPageStrategyGuideBlockData.mainBlockTitle
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (servicesPageStrategyGuideBlock_module_default()).mainBlockData,
              dangerouslySetInnerHTML: {
                __html: ServicesPageStrategyGuideBlockData.mainBlockData
              }
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (servicesPageStrategyGuideBlock_module_default()).rightBlock,
            children: [/*#__PURE__*/jsx_runtime_.jsx(ServicesPageStrategyGuideBlock_Media, {
              greaterThanOrEqual: "md",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: ServicesPageStrategyGuideBlockData.mainBlockImage,
                alt: ServicesPageStrategyGuideBlockData.mainBlockTitle
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(ServicesPageStrategyGuideBlock_Media, {
              lessThan: "md",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: ServicesPageStrategyGuideBlockData.mainBlockImage_mob,
                alt: ServicesPageStrategyGuideBlockData.mainBlockTitle
              })
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ServicesPageStrategyGuideBlock_Media, {
        greaterThanOrEqual: "md",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (servicesPageStrategyGuideBlock_module_default()).section_2,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `container ${(servicesPageStrategyGuideBlock_module_default()).section_2_innerWrapper}`,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (servicesPageStrategyGuideBlock_module_default()).leftBlock,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: ServicesPageStrategyGuideBlockData.subBlockImage_1,
                alt: ServicesPageStrategyGuideBlockData.subBlockTitle_1
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (servicesPageStrategyGuideBlock_module_default()).rightBlock,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: ServicesPageStrategyGuideBlockData.subBlockTitle_1
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (servicesPageStrategyGuideBlock_module_default()).subBlockData_1,
                dangerouslySetInnerHTML: {
                  __html: ServicesPageStrategyGuideBlockData.subBlockData_1
                }
              })]
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ServicesPageStrategyGuideBlock_Media, {
        lessThan: "md",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (servicesPageStrategyGuideBlock_module_default()).section_2,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `container ${(servicesPageStrategyGuideBlock_module_default()).section_2_innerWrapper}`,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (servicesPageStrategyGuideBlock_module_default()).leftBlock,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: ServicesPageStrategyGuideBlockData.subBlockTitle_1
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (servicesPageStrategyGuideBlock_module_default()).imageWrapper,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: ServicesPageStrategyGuideBlockData.subBlockImage_1_mob,
                  alt: ServicesPageStrategyGuideBlockData.subBlockTitle_1
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (servicesPageStrategyGuideBlock_module_default()).rightBlock,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (servicesPageStrategyGuideBlock_module_default()).subBlockData_1,
                dangerouslySetInnerHTML: {
                  __html: ServicesPageStrategyGuideBlockData.subBlockData_1
                }
              })
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ServicesPageStrategyGuideBlock_Media, {
        greaterThanOrEqual: "md",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (servicesPageStrategyGuideBlock_module_default()).section_3,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `container ${(servicesPageStrategyGuideBlock_module_default()).section_3_innerWrapper}`,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (servicesPageStrategyGuideBlock_module_default()).leftBlock,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: ServicesPageStrategyGuideBlockData.subBlockTitle_2
              }), ServicesPageStrategyGuideBlockData.subBlockData_2.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: `${(servicesPageStrategyGuideBlock_module_default()).accordianItem} ${selected === item ? (servicesPageStrategyGuideBlock_module_default()).selected : null} `,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: `${(servicesPageStrategyGuideBlock_module_default()).itemTitle} ${selected === item ? (servicesPageStrategyGuideBlock_module_default()).selected : null}`,
                  onClick: () => toggle(item),
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                    children: item.title
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: selected === item ? accordianOpen : accordianClosed
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: `${(servicesPageStrategyGuideBlock_module_default()).itemText} ${selected === item ? (servicesPageStrategyGuideBlock_module_default()).show : null}`,
                  children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: item.text
                  })
                })]
              }, index))]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (servicesPageStrategyGuideBlock_module_default()).rightBlock,
              children: ServicesPageStrategyGuideBlockData.subBlockData_2.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: `${(servicesPageStrategyGuideBlock_module_default()).accordianImage} ${selected === item ? (servicesPageStrategyGuideBlock_module_default()).show : null}`,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: item.image,
                  alt: item.title
                })
              }, index))
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ServicesPageStrategyGuideBlock_Media, {
        lessThan: "md",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (servicesPageStrategyGuideBlock_module_default()).section_3,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "container",
            children: ServicesPageStrategyGuideBlockData.subBlockTitle_2
          }), /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
            className: `container ${(servicesPageStrategyGuideBlock_module_default()).innerStatsBlock}`,
            "data-scroll": true,
            children: ServicesPageStrategyGuideBlockData.subBlockData_2.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (servicesPageStrategyGuideBlock_module_default()).accordianItem,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: item.image,
                alt: item.title
              }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
                children: item.title
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: item.text
              })]
            }, index))
          }))]
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./data/ServicesPageManagedServiceBlock.js
const ServicesPageManagedServiceBlockData = {
  mainBlockTitle: "Managed Service: Charter Your Voyage",
  mainBlockData: `<p>If all of the above sounds like smooth sailing, but you want more guidance on your SMS journey, Voyage Compass can also be utilized as a managed service.</p>
     <p>Raise the flag for help anytime, and our team of DTC and marcom experts will be there to work with your existing team and/or infrastructure to:</p>
     <ul>
        <li><span>Build and maintain your SMS marketing calendar</span></li>
        <li><span>Create and execute campaigns</span></li>
        <li><span>Measure, analyze, iterate and optimize</span></li>
     </ul>
     <p>Prefer a more flexible approach? Break out whatever services you might need by choosing from the below options.</p>
    `,
  mainBlockImage: "images/services-managed-service-main.png",
  mainBlockImage_mob: "images/services-managed-service-main-mob.png"
};
// EXTERNAL MODULE: ./components/css/servicesPageManagedServiceBlock.module.css
var servicesPageManagedServiceBlock_module = __webpack_require__(8459);
var servicesPageManagedServiceBlock_module_default = /*#__PURE__*/__webpack_require__.n(servicesPageManagedServiceBlock_module);
;// CONCATENATED MODULE: ./components/ServicesPageManagedServiceBlock.js





const {
  MediaContextProvider: ServicesPageManagedServiceBlock_MediaContextProvider,
  Media: ServicesPageManagedServiceBlock_Media
} = (0,fresnel_.createMedia)({
  breakpoints: {
    sm: 0,
    md: 769,
    lg: 1024,
    xl: 1192
  }
});
function ServicesPageManagedServiceBlock() {
  return /*#__PURE__*/jsx_runtime_.jsx(ServicesPageManagedServiceBlock_MediaContextProvider, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: (servicesPageManagedServiceBlock_module_default()).servicesPageManagedServiceBlock,
      children: [/*#__PURE__*/jsx_runtime_.jsx(ServicesPageManagedServiceBlock_Media, {
        greaterThanOrEqual: "md",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `${(servicesPageManagedServiceBlock_module_default()).section_1}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `container ${(servicesPageManagedServiceBlock_module_default()).managedService_innerWrapper}`,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (servicesPageManagedServiceBlock_module_default()).leftBlock,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: ServicesPageManagedServiceBlockData.mainBlockImage,
                alt: ServicesPageManagedServiceBlockData.mainBlockTitle
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (servicesPageManagedServiceBlock_module_default()).rightBlock,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: ServicesPageManagedServiceBlockData.mainBlockTitle
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (servicesPageManagedServiceBlock_module_default()).mainBlockData,
                dangerouslySetInnerHTML: {
                  __html: ServicesPageManagedServiceBlockData.mainBlockData
                }
              })]
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ServicesPageManagedServiceBlock_Media, {
        lessThan: "md",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `${(servicesPageManagedServiceBlock_module_default()).section_1}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `container ${(servicesPageManagedServiceBlock_module_default()).managedService_innerWrapper}`,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (servicesPageManagedServiceBlock_module_default()).leftBlock,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: ServicesPageManagedServiceBlockData.mainBlockTitle
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: ServicesPageManagedServiceBlockData.mainBlockImage_mob,
                alt: ServicesPageManagedServiceBlockData.mainBlockTitle
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (servicesPageManagedServiceBlock_module_default()).rightBlock,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (servicesPageManagedServiceBlock_module_default()).mainBlockData,
                dangerouslySetInnerHTML: {
                  __html: ServicesPageManagedServiceBlockData.mainBlockData
                }
              })
            })]
          })
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./data/ServicesPageCreativeServicesBlock.js
const ServicesPageCreativeServicesBlockData = {
  mainBlockTitle: "SMS Shipbuild: Creative and Developer Services",
  mainBlockData: `<p>At Voyage, we don't leave you to row it alone with your SMS marketing. Development resourcing should never block your brand from capitalizing on the highest-quality channel of SMS. Our team has built and managed over 200 eCommerce stores, collectively. Our  engineering leaders are plugged into talent pipelines that your brand can leverage to ramp up quickly. </p>
     <p>And when it comes to creative, don't forgot the human in the loop, when focusing on SMS campaign structure and targeting. With data leading the way, Voyage's creative team can steer you towards messaging and imagery that engages, converts, and delights. Hello, ROAS.</p>
    `,
  subBlockTitle_1: "Creative",
  subBlockData_1: [{
    title: "Design: From Our Award-Winning In-House Team",
    text: `List building often starts (but definitely doesn't end) with on-brand subscription modals. 
            Through Voyage Compass, our expert design team 🖌️, account managers 👔, and in-house developers 👨‍💻 will create these for and with you.`,
    image: "images/service-creative-service-sub-1.1.png"
  }, {
    title: "Messaging: Our D2C Creatives Craft Your Copy",
    text: `With detailed data and benchmarks informing optimized messaging, our copywriters will get you started with One-Time Campaign and Automated Drip copy that converts .
            Some messages work better with images than others. At other times, GIFs might convert better. We can help with these assets, too .`,
    image: "images/service-creative-service-sub-1.2.png"
  }],
  subBlockTitle_2: "Development",
  subBlockData_2: [{
    title: "Custom SMS Development Services",
    text: `Voyage is flexible at its core, integrating easily with leading and custom ECPs and other data architectures and software. This flexibility also means we can develop custom SMS solutions for any business need, including for any integrations your brand requires that we don't already support.`,
    image: "images/service-creative-service-sub-2.1.png"
  }, {
    title: "eCommerce Development Support",
    text: `If other eCommerce pipeline challenges are holding you back from fully realizing the possibilities of optimized SMS, our Senior Engineers can help you correct course here, too. With extensive experience in major eCommerce platforms (Shopify, BigCommerce, Magento, WooCommerce, etc.) let us know anytime that the Voyage Compass consulting team can assist with backlogged eCommerce development tasks.`,
    image: "images/service-creative-service-sub-2.2.png"
  }, {
    title: "Customer Data Architecture and Custom Event Development",
    text: `Your Voyage Compass data team pairs acquisition experts with our engineers. Together, they can assist in building Data Architectures and Custom Events to help customize your customer journey, based on your brand's unique business needs. This further enables personalized 1:1 messaging at scale, which is what Voyage marketing is all about.`,
    image: "images/service-creative-service-sub-2.3.png"
  }]
};
// EXTERNAL MODULE: ./components/css/servicesPageCreativeServicesBlock.module.css
var servicesPageCreativeServicesBlock_module = __webpack_require__(6311);
var servicesPageCreativeServicesBlock_module_default = /*#__PURE__*/__webpack_require__.n(servicesPageCreativeServicesBlock_module);
;// CONCATENATED MODULE: ./components/ServicesPageCreativeServicesBlock.js



function ServicesPageCreativeServicesBlock_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ServicesPageCreativeServicesBlock_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ServicesPageCreativeServicesBlock_ownKeys(Object(source), true).forEach(function (key) { ServicesPageCreativeServicesBlock_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ServicesPageCreativeServicesBlock_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ServicesPageCreativeServicesBlock_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function ServicesPageCreativeServicesBlock_SampleNextArrow(props) {
  const {
    className,
    style,
    onClick
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `${className} custom-arrow-next`,
    style: ServicesPageCreativeServicesBlock_objectSpread(ServicesPageCreativeServicesBlock_objectSpread({}, style), {}, {
      display: "flex!important",
      background: "#fff",
      width: "32px",
      height: "32px",
      boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.08)",
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }),
    onClick: onClick,
    children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
      width: "8",
      height: "14",
      viewBox: "0 0 8 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M0.727273 13.8814L0.0948615 13.2802C-0.031621 13.122 -0.031621 12.8689 0.0948615 12.7424L5.81818 6.98418L0.0948615 1.25763C-0.031621 1.13107 -0.031621 0.877966 0.0948615 0.719774L0.727273 0.118644C0.885375 -0.039548 1.10672 -0.039548 1.26482 0.118644L7.90514 6.73107C8.03162 6.88927 8.03162 7.11073 7.90514 7.26893L1.26482 13.8814C1.10672 14.0395 0.885375 14.0395 0.727273 13.8814Z",
        fill: "black"
      })
    })
  });
}

function ServicesPageCreativeServicesBlock_SamplePrevArrow(props) {
  const {
    className,
    style,
    onClick
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `${className} custom-arrow-prev`,
    style: ServicesPageCreativeServicesBlock_objectSpread(ServicesPageCreativeServicesBlock_objectSpread({}, style), {}, {
      display: "flex!important",
      background: "#fff",
      width: "32px",
      height: "32px",
      boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.08)",
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }),
    onClick: onClick,
    children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
      width: "8",
      height: "14",
      viewBox: "0 0 8 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M7.27273 13.8814L7.90514 13.2802C8.03162 13.122 8.03162 12.8689 7.90514 12.7424L2.18182 6.98418L7.90514 1.25763C8.03162 1.13107 8.03162 0.877966 7.90514 0.719774L7.27273 0.118644C7.11462 -0.039548 6.89328 -0.039548 6.73518 0.118644L0.0948617 6.73107C-0.0316206 6.88927 -0.0316206 7.11073 0.0948617 7.26893L6.73518 13.8814C6.89328 14.0395 7.11462 14.0395 7.27273 13.8814Z",
        fill: "black"
      })
    })
  });
}

const {
  MediaContextProvider: ServicesPageCreativeServicesBlock_MediaContextProvider,
  Media: ServicesPageCreativeServicesBlock_Media
} = (0,fresnel_.createMedia)({
  breakpoints: {
    sm: 0,
    md: 769,
    lg: 1024,
    xl: 1192
  }
});
const ServicesPageCreativeServicesBlock_settings = {
  dots: true,
  infinite: false,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: false,
  adaptiveHeight: true,
  cssEase: `cubic-bezier(.51,.11,.44,.96)`,
  nextArrow: /*#__PURE__*/jsx_runtime_.jsx(ServicesPageCreativeServicesBlock_SampleNextArrow, {}),
  prevArrow: /*#__PURE__*/jsx_runtime_.jsx(ServicesPageCreativeServicesBlock_SamplePrevArrow, {})
};
function ServicesPageCreativeServicesBlock() {
  const {
    0: selected,
    1: setSelected
  } = (0,external_react_.useState)(ServicesPageCreativeServicesBlockData.subBlockData_1[0]);
  const {
    0: selected1,
    1: setSelected1
  } = (0,external_react_.useState)(ServicesPageCreativeServicesBlockData.subBlockData_2[0]);

  const toggle = item => {
    setSelected(item);
  };

  const toggle1 = item => {
    setSelected1(item);
  };

  const accordianOpen = /*#__PURE__*/jsx_runtime_.jsx("svg", {
    width: "20",
    height: "12",
    viewBox: "0 0 20 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M19.7556 11.1724C19.4298 11.4982 18.9031 11.4982 18.5773 11.1724L9.99997 2.59507L1.42266 11.1724C1.09684 11.4982 0.570173 11.4982 0.24436 11.1724C-0.0814533 10.8466 -0.0814533 10.3199 0.24436 9.99409L9.41084 0.827608C9.57334 0.665112 9.78666 0.583435 10 0.583435C10.2134 0.583435 10.4267 0.665112 10.5892 0.827608L19.7557 9.99409C20.0814 10.3199 20.0814 10.8466 19.7556 11.1724Z",
      fill: "#405CFB"
    })
  });

  const accordianClosed = /*#__PURE__*/jsx_runtime_.jsx("svg", {
    width: "20",
    height: "12",
    viewBox: "0 0 20 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M19.7556 0.827612C19.4298 0.501799 18.9031 0.501799 18.5773 0.827612L9.99997 9.40493L1.42266 0.827612C1.09684 0.501799 0.570173 0.501799 0.24436 0.827612C-0.0814533 1.15343 -0.0814533 1.68009 0.24436 2.00591L9.41084 11.1724C9.57334 11.3349 9.78666 11.4166 10 11.4166C10.2134 11.4166 10.4267 11.3349 10.5892 11.1724L19.7557 2.00591C20.0814 1.68009 20.0814 1.15343 19.7556 0.827612Z",
      fill: "black"
    })
  });

  return /*#__PURE__*/jsx_runtime_.jsx(ServicesPageCreativeServicesBlock_MediaContextProvider, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: (servicesPageCreativeServicesBlock_module_default()).servicesPageCreativeServicesBlock,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (servicesPageCreativeServicesBlock_module_default()).section_1,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `container ${(servicesPageCreativeServicesBlock_module_default()).section_1_innerWrapper}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (servicesPageCreativeServicesBlock_module_default()).leftBlock,
            children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: ServicesPageCreativeServicesBlockData.mainBlockTitle
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (servicesPageCreativeServicesBlock_module_default()).rightBlock,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (servicesPageCreativeServicesBlock_module_default()).mainBlockData,
              dangerouslySetInnerHTML: {
                __html: ServicesPageCreativeServicesBlockData.mainBlockData
              }
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ServicesPageCreativeServicesBlock_Media, {
        greaterThanOrEqual: "md",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (servicesPageCreativeServicesBlock_module_default()).section_2,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `container ${(servicesPageCreativeServicesBlock_module_default()).section_2_innerWrapper}`,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (servicesPageCreativeServicesBlock_module_default()).leftBlock,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: ServicesPageCreativeServicesBlockData.subBlockTitle_1
              }), ServicesPageCreativeServicesBlockData.subBlockData_1.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: `${(servicesPageCreativeServicesBlock_module_default()).accordianItem} ${selected === item ? (servicesPageCreativeServicesBlock_module_default()).selected : null} `,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: `${(servicesPageCreativeServicesBlock_module_default()).itemTitle} ${selected === item ? (servicesPageCreativeServicesBlock_module_default()).selected : null}`,
                  onClick: () => toggle(item),
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                    children: item.title
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: selected === item ? accordianOpen : accordianClosed
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: `${(servicesPageCreativeServicesBlock_module_default()).itemText} ${selected === item ? (servicesPageCreativeServicesBlock_module_default()).show : null}`,
                  children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: item.text
                  })
                })]
              }, index))]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (servicesPageCreativeServicesBlock_module_default()).rightBlock,
              children: ServicesPageCreativeServicesBlockData.subBlockData_1.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: `${(servicesPageCreativeServicesBlock_module_default()).accordianImage} ${selected === item ? (servicesPageCreativeServicesBlock_module_default()).show : null}`,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: item.image,
                  alt: item.title
                })
              }, index))
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (servicesPageCreativeServicesBlock_module_default()).section_3,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `container ${(servicesPageCreativeServicesBlock_module_default()).section_3_innerWrapper}`,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (servicesPageCreativeServicesBlock_module_default()).leftBlock,
              children: ServicesPageCreativeServicesBlockData.subBlockData_2.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: `${(servicesPageCreativeServicesBlock_module_default()).accordianImage} ${selected1 === item ? (servicesPageCreativeServicesBlock_module_default()).show : null}`,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: item.image,
                  alt: item.title
                })
              }, index))
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (servicesPageCreativeServicesBlock_module_default()).rightBlock,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: ServicesPageCreativeServicesBlockData.subBlockTitle_2
              }), ServicesPageCreativeServicesBlockData.subBlockData_2.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: `${(servicesPageCreativeServicesBlock_module_default()).accordianItem} ${selected1 === item ? (servicesPageCreativeServicesBlock_module_default()).selected : null} `,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: `${(servicesPageCreativeServicesBlock_module_default()).itemTitle} ${selected1 === item ? (servicesPageCreativeServicesBlock_module_default()).selected : null}`,
                  onClick: () => toggle1(item),
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                    children: item.title
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: selected1 === item ? accordianOpen : accordianClosed
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: `${(servicesPageCreativeServicesBlock_module_default()).itemText} ${selected1 === item ? (servicesPageCreativeServicesBlock_module_default()).show : null}`,
                  children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: item.text
                  })
                })]
              }, index))]
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ServicesPageCreativeServicesBlock_Media, {
        lessThan: "md",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (servicesPageCreativeServicesBlock_module_default()).section_2,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "container",
            children: ServicesPageCreativeServicesBlockData.subBlockTitle_1
          }), /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), ServicesPageCreativeServicesBlock_objectSpread(ServicesPageCreativeServicesBlock_objectSpread({}, ServicesPageCreativeServicesBlock_settings), {}, {
            className: `container ${(servicesPageCreativeServicesBlock_module_default()).innerStatsBlock}`,
            "data-scroll": true,
            children: ServicesPageCreativeServicesBlockData.subBlockData_1.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (servicesPageCreativeServicesBlock_module_default()).accordianItem,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: item.image,
                alt: item.title
              }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
                children: item.title
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: item.text
              })]
            }, index))
          }))]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (servicesPageCreativeServicesBlock_module_default()).section_3,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "container",
            children: ServicesPageCreativeServicesBlockData.subBlockTitle_2
          }), /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), ServicesPageCreativeServicesBlock_objectSpread(ServicesPageCreativeServicesBlock_objectSpread({}, ServicesPageCreativeServicesBlock_settings), {}, {
            className: `container ${(servicesPageCreativeServicesBlock_module_default()).innerStatsBlock}`,
            "data-scroll": true,
            children: ServicesPageCreativeServicesBlockData.subBlockData_2.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (servicesPageCreativeServicesBlock_module_default()).accordianItem,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: item.image,
                alt: item.title
              }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
                children: item.title
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: item.text
              })]
            }, index))
          }))]
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/css/servicesPageSignUpBlock.module.css
var servicesPageSignUpBlock_module = __webpack_require__(3936);
var servicesPageSignUpBlock_module_default = /*#__PURE__*/__webpack_require__.n(servicesPageSignUpBlock_module);
;// CONCATENATED MODULE: ./components/ServicesPageSignUpBlock.js





const {
  MediaContextProvider: ServicesPageSignUpBlock_MediaContextProvider,
  Media: ServicesPageSignUpBlock_Media
} = (0,fresnel_.createMedia)({
  breakpoints: {
    sm: 0,
    md: 769,
    lg: 1024,
    xl: 1192
  }
});
function ServicesPageSignupBlock({
  setFormState
}) {
  const {
    0: offsetY,
    1: setOffsetY
  } = (0,external_react_.useState)(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  (0,external_react_.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(ServicesPageSignUpBlock_MediaContextProvider, {
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: `animate ${(servicesPageSignUpBlock_module_default()).servicePageSignupBlock}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `container ${(servicesPageSignUpBlock_module_default()).signupContainer}`,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (servicesPageSignUpBlock_module_default()).topBlock,
          children: [/*#__PURE__*/jsx_runtime_.jsx(ServicesPageSignUpBlock_Media, {
            greaterThanOrEqual: "md",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (servicesPageSignUpBlock_module_default()).designBlock
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(ServicesPageSignUpBlock_Media, {
            lessThan: "md",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (servicesPageSignUpBlock_module_default()).designBlock,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                width: "309",
                height: "134",
                viewBox: "0 0 309 134",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/jsx_runtime_.jsx("circle", {
                  cx: "3",
                  cy: "18",
                  r: "3",
                  fill: "#02D9FC"
                }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                  cx: "98",
                  cy: "31",
                  r: "5",
                  fill: "#5BEBC1"
                }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                  cx: "190",
                  cy: "3",
                  r: "3",
                  fill: "#5BEBC1"
                }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                  cx: "246",
                  cy: "70",
                  r: "3",
                  fill: "#3F5CFB"
                }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                  cx: "308",
                  cy: "34",
                  r: "3",
                  fill: "#02D9FC"
                }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                  cx: "292",
                  cy: "131",
                  r: "3",
                  fill: "#5BEBC1"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                width: "335",
                height: "156",
                viewBox: "0 0 335 156",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M681 62.0154L477.073 89.2299C293.402 113.741 106.664 109.397 -75.6888 76.4838C-292.214 37.4029 -513.969 32.4685 -732 62.0154V422H681V62.0154Z",
                  fill: "#02D9FC"
                }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M206.182 69.964L132.835 0.211688L121.531 84.9384L206.182 69.964Z",
                  fill: "#5BEBC1"
                }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M70.6606 66.4555L112.89 25.6802L107.743 76.5114L70.6606 66.4555Z",
                  fill: "#02D9FC"
                }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M206.248 93.1648L62.2695 93.5815L91.8423 135.843L180.193 135.587L206.248 93.1648Z",
                  fill: "white"
                }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M-307 115.986L-188.245 128.307C-54.4488 142.187 82.1683 139.277 214.297 119.731C345.776 100.282 481.995 98.851 614.362 115.528L618 115.986V270H-307V115.986Z",
                  fill: "#3F5CFB"
                })]
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (servicesPageSignUpBlock_module_default()).textBlock,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (servicesPageSignUpBlock_module_default()).leftSegment,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                children: ["Voyage Together:", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Our Crew is Your Crew"]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (servicesPageSignUpBlock_module_default()).rightSegment,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "At Voyage, our True North is empowering brands to build greater LTV through continued customer delight. We know SMS marketing is just the first phase of the future of message commerce"
                }), " \uD83D\uDEA2."]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "With the "
                }), "highest open rates", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: " around, and subscriber lists that have proven at least "
                }), "3X more valuable", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: " \uD83D\uDC51 than any other channel, we believe we have a responsibility to truly partner with brands to "
                }), "text better", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: " \u2013 and to protect and respect the value of SMS as a channel"
                }), "."]
              })]
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (servicesPageSignUpBlock_module_default()).bottomBlock,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: "Your Voyage to SMS success starts today."
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["Sign up now to access the most powerful full-stack message commerce ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " platform in the world. We\u2019ll reply before the day is done. Then it\u2019s a free month of ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "messages for your brand \u2013 on us."]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (servicesPageSignUpBlock_module_default()).buttonBlock,
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              className: (servicesPageSignUpBlock_module_default()).signupButton,
              onClick: () => setFormState('open'),
              children: "Let's talk"
            })
          })]
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./components/AboutPageBottomBlock.js
var AboutPageBottomBlock = __webpack_require__(6699);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/RequestForm.js + 1 modules
var RequestForm = __webpack_require__(7081);
;// CONCATENATED MODULE: ./pages/services/index.js















function About() {
  const {
    0: formState,
    1: setFormState
  } = (0,external_react_.useState)("close");
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
      }), /*#__PURE__*/jsx_runtime_.jsx(ServicesPageHeroBanner, {}), /*#__PURE__*/jsx_runtime_.jsx(ServicesPageConsultingBlock, {}), /*#__PURE__*/jsx_runtime_.jsx(ServicesPageStrategyGuideBlock, {}), /*#__PURE__*/jsx_runtime_.jsx(ServicesPageManagedServiceBlock, {}), /*#__PURE__*/jsx_runtime_.jsx(ServicesPageCreativeServicesBlock, {}), /*#__PURE__*/jsx_runtime_.jsx(ServicesPageSignupBlock, {
        setFormState: setFormState
      }), /*#__PURE__*/jsx_runtime_.jsx(AboutPageBottomBlock/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {
        setFormState: setFormState
      })]
    })]
  });
}

/***/ }),

/***/ 363:
/***/ (function(module) {

// Exports
module.exports = {
	"servicesPageConsultingBlock": "servicesPageConsultingBlock_servicesPageConsultingBlock__2I6_0",
	"consultingBlock_innerWrapper": "servicesPageConsultingBlock_consultingBlock_innerWrapper__vO6Z9",
	"leftBlock": "servicesPageConsultingBlock_leftBlock__Cwho1",
	"rightBlock": "servicesPageConsultingBlock_rightBlock__rUtfs"
};


/***/ }),

/***/ 6311:
/***/ (function(module) {

// Exports
module.exports = {
	"servicesPageCreativeServicesBlock": "servicesPageCreativeServicesBlock_servicesPageCreativeServicesBlock__vHdcf",
	"section_1": "servicesPageCreativeServicesBlock_section_1__1E0yM",
	"section_1_innerWrapper": "servicesPageCreativeServicesBlock_section_1_innerWrapper__3Y4kj",
	"leftBlock": "servicesPageCreativeServicesBlock_leftBlock__3I12l",
	"rightBlock": "servicesPageCreativeServicesBlock_rightBlock__iClqh",
	"section_3": "servicesPageCreativeServicesBlock_section_3__3qhVG",
	"section_2_innerWrapper": "servicesPageCreativeServicesBlock_section_2_innerWrapper__tsVxu",
	"section_2": "servicesPageCreativeServicesBlock_section_2__1_qHd",
	"section_3_innerWrapper": "servicesPageCreativeServicesBlock_section_3_innerWrapper__2Yyhf",
	"accordianItem": "servicesPageCreativeServicesBlock_accordianItem__AMhI3",
	"selected": "servicesPageCreativeServicesBlock_selected__1GO2q",
	"itemTitle": "servicesPageCreativeServicesBlock_itemTitle__3vbMl",
	"itemText": "servicesPageCreativeServicesBlock_itemText__2JlZL",
	"show": "servicesPageCreativeServicesBlock_show__1Ja9s",
	"accordianImage": "servicesPageCreativeServicesBlock_accordianImage__38-Kt"
};


/***/ }),

/***/ 2857:
/***/ (function(module) {

// Exports
module.exports = {
	"servicesPageHeroBanner": "servicesPageHeroBanner_servicesPageHeroBanner__hS-4W",
	"heroBanner_innerWrapper": "servicesPageHeroBanner_heroBanner_innerWrapper__3d6rY",
	"heroTitle": "servicesPageHeroBanner_heroTitle__oltqU",
	"designBlock": "servicesPageHeroBanner_designBlock__2oXOd"
};


/***/ }),

/***/ 8459:
/***/ (function(module) {

// Exports
module.exports = {
	"servicesPageManagedServiceBlock": "servicesPageManagedServiceBlock_servicesPageManagedServiceBlock__1TXiv",
	"section_1": "servicesPageManagedServiceBlock_section_1__KT0HZ",
	"managedService_innerWrapper": "servicesPageManagedServiceBlock_managedService_innerWrapper__3ypz7",
	"leftBlock": "servicesPageManagedServiceBlock_leftBlock__1Zzz3",
	"rightBlock": "servicesPageManagedServiceBlock_rightBlock__3UICj"
};


/***/ }),

/***/ 3936:
/***/ (function(module) {

// Exports
module.exports = {
	"servicePageSignupBlock": "servicesPageSignUpBlock_servicePageSignupBlock__1dSht",
	"signupContainer": "servicesPageSignUpBlock_signupContainer__1plzU",
	"topBlock": "servicesPageSignUpBlock_topBlock__3akwm",
	"designBlock": "servicesPageSignUpBlock_designBlock__CNLpE",
	"textBlock": "servicesPageSignUpBlock_textBlock__w9FM5",
	"leftSegment": "servicesPageSignUpBlock_leftSegment__1Xk9t",
	"rightSegment": "servicesPageSignUpBlock_rightSegment__30Z59",
	"bottomBlock": "servicesPageSignUpBlock_bottomBlock__gyFHU",
	"buttonBlock": "servicesPageSignUpBlock_buttonBlock__TJMrM",
	"signupButton": "servicesPageSignUpBlock_signupButton__1EN9G"
};


/***/ }),

/***/ 6177:
/***/ (function(module) {

// Exports
module.exports = {
	"servicesPageStrategyGuideBlock": "servicesPageStrategyGuideBlock_servicesPageStrategyGuideBlock__OuYne",
	"section_1": "servicesPageStrategyGuideBlock_section_1__1xM1Z",
	"leftBlock": "servicesPageStrategyGuideBlock_leftBlock__1E-_g",
	"rightBlock": "servicesPageStrategyGuideBlock_rightBlock__2SsQG",
	"section_2": "servicesPageStrategyGuideBlock_section_2__1YCHP",
	"section_3": "servicesPageStrategyGuideBlock_section_3__rCTmo",
	"section_2_innerWrapper": "servicesPageStrategyGuideBlock_section_2_innerWrapper__19ztT",
	"fresnel-container": "servicesPageStrategyGuideBlock_fresnel-container__253J6",
	"fresnel-greaterThanOrEqual-md": "servicesPageStrategyGuideBlock_fresnel-greaterThanOrEqual-md__1_HrT",
	"section_3_innerWrapper": "servicesPageStrategyGuideBlock_section_3_innerWrapper__3vrUc",
	"accordianItem": "servicesPageStrategyGuideBlock_accordianItem__2e573",
	"selected": "servicesPageStrategyGuideBlock_selected__RceGS",
	"itemTitle": "servicesPageStrategyGuideBlock_itemTitle__-qO-_",
	"itemText": "servicesPageStrategyGuideBlock_itemText__ax83A",
	"show": "servicesPageStrategyGuideBlock_show__3HeIj",
	"accordianImage": "servicesPageStrategyGuideBlock_accordianImage__3at4t",
	"imageWrapper": "servicesPageStrategyGuideBlock_imageWrapper__2dUIi"
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

/***/ 9080:
/***/ (function(module) {

"use strict";
module.exports = require("react-slick");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,472,482,81,699], function() { return __webpack_exec__(3807); });
module.exports = __webpack_exports__;

})();