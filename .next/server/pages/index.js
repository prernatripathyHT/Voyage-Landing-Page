(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3789:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(5284);
// EXTERNAL MODULE: ./components/Footer.js + 1 modules
var Footer = __webpack_require__(9183);
// EXTERNAL MODULE: ./components/css/homePageClientBlock.module.css
var homePageClientBlock_module = __webpack_require__(9625);
var homePageClientBlock_module_default = /*#__PURE__*/__webpack_require__.n(homePageClientBlock_module);
;// CONCATENATED MODULE: ./data/HomePageClientBlock.js
// width is in vw unit
const clientBlockData = {
  title: "Leading eCommerce brands get unparalleled results with Voyage",
  clientLogos: [{
    name: "dragun.svg",
    alt: "dragun-beauty",
    width: '9.467vw',
    height: '10.155vw',
    id: 'ruggable'
  }, {
    name: "zinsticka.png",
    alt: "Zinsticka",
    width: '11.093vw',
    height: '4.437vw',
    id: 'zinsticka'
  }, {
    name: "dosenrose.png",
    alt: "Dose Of Roses",
    width: '16.309vw',
    height: '6.077vw',
    id: 'dosenrose'
  }, {
    name: "birthday_co.png",
    alt: "Birthday co",
    width: '8.897vw',
    height: '4.951vw',
    id: 'birthday'
  }, {
    name: "fresh_clean_tees.png",
    alt: "Fresh Clean Tees",
    width: '14.227vw',
    height: '5.3vw',
    id: 'freshclean'
  }, {
    name: "tovala.png",
    alt: "Tovala",
    width: '7.634vw',
    height: '8.31vw',
    id: 'tovala'
  }, {
    name: "honeybum.png",
    alt: "Hobeybum",
    width: '10.282vw',
    height: '4.35vw',
    id: 'honeybum'
  }, {
    name: "lokai.png",
    alt: "Lokai",
    width: '8.467vw',
    height: '6.648vw',
    id: 'lokai'
  }, {
    name: "cameron.png",
    alt: "Cameron's Seafood",
    width: '7.148vw',
    height: '11.284vw',
    id: 'cameron'
  }, {
    name: "dailysale.png",
    alt: "Dailysale",
    width: '9.022vw',
    height: '6.925vw',
    id: 'dailysale'
  }, {
    name: "flo.png",
    alt: "Flo Vitamins",
    width: '6.716vw',
    height: '7.69vw',
    id: 'flo'
  }, {
    name: "moonpod.png",
    alt: "Moonpod",
    width: '8.744vw',
    height: '9.91vw',
    id: 'moonpod'
  }, {
    name: "lumin.png",
    alt: "Lumin",
    width: '9.994vw',
    height: '8.13vw',
    id: 'lumin'
  }]
};
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(9015);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(1498);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@artsy/fresnel"
var fresnel_ = __webpack_require__(5136);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./components/HomePageClientBlock.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










external_gsap_default().registerPlugin(ScrollTrigger_.ScrollTrigger);
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
const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "80px",
  cssEase: `cubic-bezier(.51,.11,.44,.96)`
};
let logoNumber = clientBlockData.clientLogos.length;
let dataLength = logoNumber % 3;
dataLength == 0 ? dataLength = Math.floor(logoNumber / 3) : dataLength = Math.floor(logoNumber / 3) + 1;
function HomePageClientBlock() {
  (0,external_react_.useEffect)(() => {
    external_gsap_default().from('.clientAnimate', {
      duration: 0.4,
      y: "30%",
      opacity: 0,
      stagger: 0.1,
      ease: 'ease.in',
      scrollTrigger: {
        trigger: '.clientContainer',
        start: 'top 75%'
      }
    });
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(MediaContextProvider, {
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: (homePageClientBlock_module_default()).clientBlock,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `clientContainer container ${(homePageClientBlock_module_default()).innerClientBlock}`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "clientTitleBlock",
          children: clientBlockData.title
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (homePageClientBlock_module_default()).clientLogoWrapper,
          "data-scroll": true,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Media, {
            greaterThanOrEqual: "md",
            children: clientBlockData.clientLogos.map(data => /*#__PURE__*/jsx_runtime_.jsx("div", {
              id: data.id,
              style: {
                width: data.width
              },
              className: `clientAnimate ${(homePageClientBlock_module_default()).logoBlock}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: `/images/client_logos/${data.name}`,
                alt: data.alt
              })
            }, data.alt))
          }), /*#__PURE__*/jsx_runtime_.jsx(Media, {
            lessThan: "md",
            children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
              children: [...Array(dataLength).keys()].map((item, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (homePageClientBlock_module_default()).clientThreeBox,
                children: clientBlockData.clientLogos.slice(3 * i, 3 + 3 * i).map(data => /*#__PURE__*/jsx_runtime_.jsx("div", {
                  id: data.id,
                  className: `clientAnimate ${(homePageClientBlock_module_default()).logoBlock}`,
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: `/images/client_logos/${data.name}`,
                    alt: data.alt,
                    style: {
                      height: data.height
                    }
                  })
                }, data.alt))
              }, i))
            }))
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          id: (homePageClientBlock_module_default()).bleachTriangle
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./data/HomePageHeroBanner.js
const HomePageHeroBannerData = {
  titleText: "Text better, not more.",
  subHeading: "Our flexible, full-stack SMS marketing and message commerce platform empowers brands to drive revenue and grow + engage community through personalized text messaging – at scale.",
  bannerCtaText: "FREE 30-DAY TRIAL",
  videoTitleText: "Watch Demo",
  videoDuration: 4,
  rating: 5,
  ratingText: "Rated 4.9 on Capterra"
};
// EXTERNAL MODULE: ./components/css/heroBanner.module.css
var heroBanner_module = __webpack_require__(8954);
var heroBanner_module_default = /*#__PURE__*/__webpack_require__.n(heroBanner_module);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
;// CONCATENATED MODULE: ./components/HomePageHeroBanner.js







const VideoModal = dynamic_default()(() => __webpack_require__.e(/* import() */ 110).then(__webpack_require__.bind(__webpack_require__, 110)), {
  loading: () => null,
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(110)],
    modules: ["../components/HomePageHeroBanner.js -> " + "./HomePageVideoModal"]
  }
});
function HeroBanner({
  setFormState
}) {
  const {
    0: videoModalState,
    1: setVideoModalState
  } = (0,external_react_.useState)('close');

  const openForm = () => {
    setFormState('open');
  };

  const openVideoModal = e => {
    e.stopPropagation();
    setVideoModalState('open');
  };

  (0,external_react_.useEffect)(() => {
    const timeline = external_gsap_default().timeline();
    timeline.from('#leftHomeBanner', {
      duration: 0.4,
      y: '30%',
      opacity: 0
    }).from('.mainHeroBanner', {
      duration: 0.7,
      opacity: 0,
      y: '30%'
    }).from('.messageSendAnimate', {
      duration: 0.5,
      opacity: 0,
      y: '50%'
    }).from('.animateRing', {
      duration: 1,
      scale: 0.3,
      rotate: 320
    });
    external_gsap_default().from('.messageAnimationOne', {
      duration: 1.5,
      opacity: 0,
      y: '60%',
      ease: 'elastic',
      delay: 2.8
    });
    external_gsap_default().from('.messageAnimationTwo', {
      duration: 1.5,
      opacity: 0,
      y: '40%',
      delay: 3.4,
      ease: 'elastic'
    });
    external_gsap_default().from('.messageAnimationThree', {
      duration: 1.5,
      opacity: 0,
      y: '40%',
      delay: 3.8,
      ease: 'elastic'
    });
    external_gsap_default().from('.messageAnimationFour', {
      duration: 1.5,
      opacity: 0,
      y: '50%',
      delay: 4.6,
      ease: 'elastic'
    }); // gsap.from('#homePageTitle',{duration:0.4,y:'20%',opacity:0});
    // gsap.from('#homePageSubtext',{duration:0.4,y:'20%',opacity:0});
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    id: (heroBanner_module_default()).heroBanner,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (heroBanner_module_default()).heroBanner_innerWrapper,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        id: "leftHomeBanner",
        className: (heroBanner_module_default()).leftBlock,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          id: "homePageTitle",
          className: (heroBanner_module_default()).bannerTitle,
          "data-scroll": true,
          children: HomePageHeroBannerData.titleText
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          id: "homePageSubtext",
          className: (heroBanner_module_default()).bannerText,
          "data-scroll": true,
          children: HomePageHeroBannerData.subHeading
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (heroBanner_module_default()).btnWrapper,
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            onClick: openForm,
            className: `form-popup ${(heroBanner_module_default()).trialBtn}`,
            "data-scroll": true,
            children: HomePageHeroBannerData.bannerCtaText
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (heroBanner_module_default()).videoPopup,
            "data-scroll": true,
            onClick: e => openVideoModal(e),
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              viewBox: "0 0 31 31",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/jsx_runtime_.jsx("circle", {
                cx: "15.5",
                cy: "15.5",
                r: "15.5",
                fill: "#7E7E7E"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M20.9706 13.9208C22.1863 14.6227 22.1863 16.3774 20.9706 17.0793L14.1324 21.0274C12.9167 21.7292 11.3971 20.8519 11.3971 19.4481L11.3971 11.552C11.3971 10.1483 12.9167 9.27091 14.1324 9.97279L20.9706 13.9208Z",
                fill: "white"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (heroBanner_module_default()).spanText,
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                "data-scroll": true,
                children: HomePageHeroBannerData.videoTitleText
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                "data-scroll": true,
                children: [HomePageHeroBannerData.videoDuration, " min"]
              })]
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (heroBanner_module_default()).rating,
          "data-scroll": true,
          children: [...Array(HomePageHeroBannerData.rating).keys()].map(i => /*#__PURE__*/jsx_runtime_.jsx("svg", {
            viewBox: "0 0 18 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M13.8092 10.2941L17.4533 7.43759C17.9688 7.03194 17.7022 6.23753 17.0267 6.20373L12.3337 5.93329C12.0493 5.91639 11.8005 5.74737 11.6938 5.49384L9.96951 1.30208C9.72064 0.710504 8.84961 0.710504 8.60074 1.30208L6.87645 5.47693C6.76979 5.73047 6.52092 5.89949 6.2365 5.91639L1.5258 6.18683C0.850302 6.22063 0.583658 7.01504 1.09917 7.42069L4.7433 10.2603C4.95661 10.4293 5.06327 10.7166 4.99216 10.9702L3.80116 15.314C3.64117 15.9225 4.33444 16.4127 4.90328 16.0746L8.86738 13.6576C9.11625 13.5055 9.41845 13.5055 9.64954 13.6576L13.6314 16.0746C14.2003 16.4127 14.8935 15.9225 14.7335 15.314L13.5425 10.9871C13.4892 10.7335 13.5781 10.4631 13.8092 10.2941Z",
              fill: "#E9B531",
              fillOpacity: "0.9"
            })
          }, i))
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          id: (heroBanner_module_default()).ratedText,
          "data-scroll": true,
          children: HomePageHeroBannerData.ratingText
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (heroBanner_module_default()).rightBlock,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (heroBanner_module_default()).messageEmitterBlock,
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            "data-scroll": true,
            className: "messageAnimationOne",
            id: (heroBanner_module_default()).user_one,
            src: "/images/user1_text.png",
            alt: "User text message illustration"
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            "data-scroll": true,
            className: "messageAnimationTwo",
            id: (heroBanner_module_default()).user_two,
            src: "/images/user2_text.png",
            alt: "User text message illustration"
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            "data-scroll": true,
            className: "messageAnimationThree",
            id: (heroBanner_module_default()).user_two_text_two,
            src: "/images/user2_text2.png",
            alt: "User text message illustration"
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            "data-scroll": true,
            className: "messageAnimationFour",
            id: (heroBanner_module_default()).final_voyage_message,
            src: "/images/final_voyage_sms.png",
            alt: "voyage sms"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          "data-scroll": true,
          id: (heroBanner_module_default()).dottedImage,
          src: "/images/hero_dotted.jpeg",
          alt: "illustration"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (heroBanner_module_default()).rightBlockBoundary,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            "data-scroll": true,
            className: `animateRing ${(heroBanner_module_default()).boundaryRing}`
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            "data-scroll": true,
            className: `messageSendAnimate ${(heroBanner_module_default()).triangleBox}`,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              viewBox: "0 0 98 98",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M48.7781 22.8467L25.9315 48.7108L71.6248 48.7108L48.7781 22.8467Z",
                fill: "#162740"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M48.7789 48.8467L25.9322 74.7108L71.6255 74.7108L48.7789 48.8467Z",
                fill: "#162740"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            "data-scroll": true,
            className: (heroBanner_module_default()).messageIconBox,
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              viewBox: "0 0 207 181",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M154.051 137.82L207 181V0H0V137.82H154.051Z",
                fill: "#162740"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            "data-scroll": true,
            id: (heroBanner_module_default()).mainImage,
            className: "mainHeroBanner",
            src: "/images/banner-right-block-banner.png",
            alt: "home page banner"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            "data-scroll": true,
            className: (heroBanner_module_default()).baseBlockImage,
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              viewBox: "0 0 207 181",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M154.051 137.82L207 181V0H0V137.82H154.051Z",
                fill: "#02D9FC"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            "data-scroll": true,
            id: (heroBanner_module_default()).darkBlueBlock
          })]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(VideoModal, {
      videoModalState: videoModalState,
      setVideoModalState: setVideoModalState
    })]
  });
}
;// CONCATENATED MODULE: ./data/HomePageStatsBlock.js
const homePageStats = [{
  statTitle: "Avg ROAS",
  // icon: "average_return.svg",
  data: "40x",
  iconWidth: "3.955vw",
  iconData: `<svg  viewBox="0 0 58 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.4685 0L0.260357 32.5787C0.0486166 32.8444 -0.0400498 33.1758 0.0168555 33.5C0.0750842 33.8253 0.270944 34.1141 0.564734 34.303L26.4685 51V0Z" fill="#D8D7E6"/>
        <path d="M57.0889 32.5795L30.8795 0V51L56.7832 34.3038C57.077 34.115 57.2728 33.8249 57.3311 33.5008C57.388 33.1778 57.3006 32.8452 57.0889 32.5795Z" fill="#5454D4"/>
        </svg>`
}, {
  statTitle: "Deliverability Rate",
  // icon: "deliverability_rate.svg",
  data: "99%+",
  iconWidth: "3.1924vw",
  iconData: `<svg viewBox="0 0 46 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.827 30.7161H1.11419C0.499156 30.7161 0 30.1869 0 29.5347V1.18139C0 0.529262 0.499156 0 1.11419 0H17.827C18.442 0 18.9412 0.529262 18.9412 1.18139V29.5347C18.9412 30.1869 18.442 30.7161 17.827 30.7161Z" fill="#1BB0F0"/>
        <path d="M17.827 53.4194H1.11419C0.499156 53.4194 0 52.8638 0 52.1793V37.2982C0 36.6137 0.499156 36.0581 1.11419 36.0581H17.827C18.442 36.0581 18.9412 36.6137 18.9412 37.2982V52.1793C18.9412 52.8638 18.442 53.4194 17.827 53.4194Z" fill="#54EBBF"/>
        <path d="M44.8824 17H28.1176C27.5007 17 27 16.456 27 15.7857V1.21429C27 0.544 27.5007 0 28.1176 0H44.8824C45.4993 0 46 0.544 46 1.21429V15.7857C46 16.456 45.4993 17 44.8824 17Z" fill="#54EBBF"/>
        <path d="M44.8824 53H28.1176C27.5007 53 27 52.4831 27 51.8462V24.1538C27 23.5169 27.5007 23 28.1176 23H44.8824C45.4993 23 46 23.5169 46 24.1538V51.8462C46 52.4831 45.4993 53 44.8824 53Z" fill="#1BB0F0"/>
        </svg>`
}, {
  statTitle: "CTR",
  // icon: "clickthrough_rates.svg",
  data: "30%+",
  iconWidth: "4.302vw",
  iconData: `<svg viewBox="0 0 63 79" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32.1396" cy="30.6373" r="26.1043" fill="#1BB0F0"/>
        <circle cx="32.1395" cy="30.6371" r="13.7391" fill="#54EBBF"/>
        <path d="M33.5843 36.3272C33.5303 36.8512 33.482 37.3751 33.4321 37.8999L33.4099 38.1204L33.1884 38.1098C32.6632 38.0812 32.1366 38.041 31.6092 37.998C31.1142 43.3274 30.6637 48.6584 30.1956 53.989L30.1755 54.2184L29.9458 54.2013C29.5029 54.1672 29.0572 54.1324 28.6111 54.105L28.3696 54.0897L28.3936 53.8489C28.4483 53.3287 28.4899 52.8079 28.5242 52.289C26.7169 52.1156 24.9074 51.948 23.0961 51.8199C22.9408 53.6218 22.7774 55.4223 22.6233 57.2243C23.1467 57.2802 23.6751 57.3511 24.2091 57.3601L24.5013 57.3652L24.4326 57.6489C24.3111 58.1625 24.3158 58.6934 24.2722 59.215C24.7703 59.285 25.2737 59.334 25.7795 59.379L25.9944 59.3978L25.993 59.6143C25.9795 60.7354 25.8401 61.8501 25.7608 62.9708C26.2787 63.0375 26.8011 63.0918 27.323 63.1426L27.5492 63.1653L27.5323 63.3921C27.4429 64.5102 27.3427 65.6267 27.2624 66.7454C27.7862 66.7996 28.3122 66.8724 28.8448 66.8867L29.1132 66.8956L29.0698 67.1581C28.8839 68.2672 28.8618 69.3999 28.7552 70.5191C29.2653 70.5739 29.775 70.6258 30.2868 70.6736L30.5162 70.6937L30.499 70.9233C30.3706 72.6504 30.2085 74.376 30.0809 76.1042C33.0554 76.4078 36.0358 76.6726 39.0156 76.9298C42.0664 77.192 45.1139 77.4844 48.1707 77.6781C48.2724 75.953 48.5771 74.2465 48.657 72.5207L48.6699 72.2731L48.9162 72.3005C49.4269 72.3598 49.9406 72.3945 50.4505 72.4231C50.6192 70.7132 50.7712 68.9994 50.9232 67.2879L50.9418 67.0759L51.1526 67.0739C51.6768 67.0697 52.2015 67.1117 52.728 67.162C52.9085 65.246 53.0404 63.3271 53.2659 61.4151L53.2664 61.4093L53.2669 61.4035C53.4048 59.0952 53.6514 56.7942 53.8251 54.4879C53.3081 54.4467 52.7931 54.3962 52.281 54.344L52.0576 54.3215L52.0714 54.0974C52.1055 53.5884 52.1437 53.0768 52.1966 52.5663C51.6677 52.5044 51.1394 52.4749 50.6164 52.3987L50.4142 52.3693L50.4174 52.1648C50.4264 51.6332 50.4914 51.1012 50.531 50.5653C49.4075 50.4626 48.2838 50.3735 47.1634 50.259L46.9371 50.2363L46.954 50.0095C46.9897 49.5014 47.0281 48.9934 47.0787 48.4841C45.3626 48.242 43.6287 48.1498 41.9055 47.9788L41.685 47.9566L41.6954 47.7381C41.7175 47.2136 41.7538 46.6888 41.8011 46.1613C40.68 46.0577 39.558 45.9687 38.4401 45.8468L38.217 45.8214L38.2336 45.5975C38.4145 43.2747 38.6303 40.9541 38.8254 38.6322C38.5266 38.6031 38.2277 38.5747 37.9286 38.5479C37.7056 38.528 37.4834 38.5095 37.2604 38.4924L37.022 38.4744L37.0458 38.2366C37.1004 37.7046 37.1461 37.1716 37.1417 36.6385C35.9554 36.5382 34.7697 36.438 33.5843 36.3272L33.5843 36.3272Z" fill="white"/>
        <path d="M33.5829 36.326C34.7682 36.4368 35.9544 36.5382 37.1407 36.6385C37.1456 37.2382 37.091 37.8362 37.0272 38.4311C35.8204 38.3372 34.6172 38.2167 33.4101 38.1264C33.4673 37.5262 33.521 36.9258 33.5829 36.326Z" fill="#1C1C1C"/>
        <path d="M31.608 37.9966C32.2077 38.0455 32.8081 38.0992 33.4097 38.1261C32.8307 44.7578 32.261 51.3903 31.6738 58.0213C31.0686 57.9824 30.4645 57.9295 29.8616 57.8639C29.9019 57.2693 29.954 56.6746 30.0141 56.0805C29.4156 56.0048 28.8148 55.9557 28.214 55.9055C28.2473 55.2974 28.2958 54.6895 28.3721 54.0852C28.9734 54.1155 29.5734 54.175 30.1747 54.2183C30.6501 48.8112 31.1058 43.4025 31.608 37.9966Z" fill="#1C1C1C"/>
        <path d="M37.0309 38.4733C37.6298 38.5175 38.2277 38.5733 38.8254 38.6315C38.6238 41.0297 38.3977 43.427 38.2135 45.8268C39.4072 45.9628 40.6052 46.0501 41.8011 46.1606C41.7476 46.7587 41.6964 47.357 41.6789 47.9583C43.4769 48.1448 45.2871 48.2307 47.0781 48.4833C47.02 49.067 46.9724 49.6516 46.9341 50.237C48.1309 50.3639 49.3321 50.455 50.5316 50.5646C50.4872 51.1659 50.396 51.7665 50.4075 52.3704C50.9989 52.4748 51.5998 52.4957 52.1954 52.5654C52.1349 53.15 52.0883 53.7359 52.0522 54.3227C52.6414 54.3847 53.2322 54.4411 53.825 54.4883C53.6512 56.7965 53.4041 59.0983 53.2664 61.4085C53.0404 63.3224 52.9074 65.2444 52.7267 67.1623C52.1324 67.1056 51.5379 67.0512 50.9414 67.0728C50.783 68.8557 50.6258 70.6398 50.45 72.4211C49.856 72.3879 49.2607 72.3557 48.672 72.2749C48.7633 70.4546 48.9537 68.6406 49.1299 66.8265C49.7253 66.8845 50.3224 66.9367 50.9198 66.9843C51.2899 62.7678 51.6622 58.5526 52.0334 54.3362C51.4382 54.276 50.8422 54.225 50.2457 54.1798C50.2634 53.5903 50.3533 53.0035 50.3569 52.4139C49.7756 52.2484 49.1655 52.2652 48.5686 52.2106C48.3976 54.0181 48.2731 55.8297 48.0787 57.6363C47.4885 57.5859 46.8973 57.5341 46.3071 57.4837C46.4775 55.0675 46.7304 52.6585 46.9264 50.2445C45.7178 50.1318 44.5082 50.0294 43.2999 49.9272C43.1417 51.7347 43.0022 53.5438 42.8232 55.3482C42.2227 55.3086 41.6245 55.2562 41.0273 55.1923C41.2266 52.7809 41.4352 50.3692 41.6751 47.9615C40.4653 47.8498 39.2561 47.7428 38.0445 47.6508C37.8211 50.0577 37.6325 52.4677 37.4125 54.8748C36.8058 54.8393 36.1993 54.7874 35.5957 54.7171C36.0693 49.3028 36.5466 43.8878 37.0309 38.4733Z" fill="#1C1C1C"/>
        <path d="M23.0967 51.8187C24.908 51.9467 26.7169 52.1143 28.5242 52.2877C28.4846 52.8882 28.4427 53.4873 28.3728 54.0852C27.1705 54.0081 25.9723 53.8822 24.7728 53.7866C24.6241 54.9769 24.6274 56.1839 24.4417 57.3698C23.8316 57.3866 23.227 57.2869 22.6228 57.2224C22.7769 55.4204 22.9414 53.6205 23.0967 51.8187Z" fill="#1C1C1C"/>
        <path d="M24.487 57.4146C25.0757 57.376 25.6628 57.4613 26.2468 57.5288C26.2069 58.1328 26.1552 58.7369 26.0965 59.3404C26.7003 59.3967 27.3032 59.4483 27.9066 59.5093C27.8153 60.7128 27.6962 61.9138 27.598 63.1167C28.1942 63.1653 28.7911 63.2187 29.3875 63.2791C29.2739 64.4841 29.2535 65.7067 29.0254 66.8959C28.433 66.8979 27.8477 66.8045 27.2619 66.7439C27.3476 65.5505 27.4542 64.3589 27.548 63.1662C26.9512 63.1104 26.3551 63.0477 25.7602 62.9711C25.8443 61.7822 26.0064 60.5978 26.0019 59.4047C25.4244 59.3565 24.8469 59.2955 24.2734 59.2149C24.3237 58.6129 24.2981 57.995 24.487 57.4146Z" fill="#1C1C1C"/>
        <path d="M29.1064 66.911C29.7006 66.9162 30.2917 66.996 30.8838 67.0513C30.7951 68.2526 30.675 69.4513 30.5736 70.6503C31.1755 70.7007 31.7796 70.7535 32.3806 70.8272C32.2872 72.0281 32.1601 73.2273 32.0725 74.4287C36.8817 74.8612 41.6921 75.2797 46.5025 75.6982C46.6262 74.4987 46.708 73.2956 46.826 72.0945C47.4423 72.1402 48.0587 72.1859 48.6713 72.2746C48.6113 74.0837 48.2772 75.8699 48.1705 77.6771C45.1138 77.4834 42.0657 77.1899 39.015 76.9276C36.0352 76.6704 33.056 76.4063 30.0814 76.1027C30.2146 74.299 30.385 72.4984 30.5158 70.6956C29.9281 70.643 29.3412 70.5823 28.7544 70.5193C28.869 69.3167 28.8786 68.0967 29.1064 66.911Z" fill="#1C1C1C"/>
        </svg>`
}, {
  statTitle: "Relative List Growth",
  // icon: "relative_list_growth.svg",
  data: "2-5X",
  iconWidth: "3.817vw",
  iconData: `<svg viewBox="0 0 55 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M55 14.756V2.45933C55 1.10055 53.9299 0 52.6087 0H2.39177C1.07059 0 0.000488281 1.10055 0.000488281 2.45933V14.756H55Z" fill="#5454D4"/>
        <path d="M16.0974 16.0974H0V47.2383C0 48.5617 1.02909 49.6337 2.29963 49.6337H16.0974V16.0974Z" fill="#D8D7E6"/>
        <path d="M18.7798 16.0974V49.6337H52.5844C53.9184 49.6337 54.999 48.5617 54.999 47.2383V16.0974H18.7798Z" fill="#D8D7E6"/>
        </svg>`
}];
// EXTERNAL MODULE: ./components/css/homePageStatsBlock.module.css
var homePageStatsBlock_module = __webpack_require__(5739);
var homePageStatsBlock_module_default = /*#__PURE__*/__webpack_require__.n(homePageStatsBlock_module);
;// CONCATENATED MODULE: ./components/HomePageStatsBlock.js







external_gsap_default().registerPlugin(ScrollTrigger_.ScrollTrigger);
function HomePageStatsBlock() {
  (0,external_react_.useEffect)(() => {
    external_gsap_default().from('.statAnimate', {
      duration: 0.5,
      y: "30%",
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.statsContainer',
        start: 'top 75%'
      }
    });
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: (homePageStatsBlock_module_default()).statsBlock,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `statsContainer container ${(homePageStatsBlock_module_default()).innerStatsBlock}`,
      "data-scroll": true,
      children: homePageStats.map((stats, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `statAnimate ${(homePageStatsBlock_module_default()).keyStats}`,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (homePageStatsBlock_module_default()).iconDataBlock,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            style: {
              width: stats.iconWidth
            },
            className: (homePageStatsBlock_module_default()).imgIcon,
            dangerouslySetInnerHTML: {
              __html: stats.iconData
            }
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: stats.data
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: stats.statTitle
        })]
      }, index))
    })
  });
}
;// CONCATENATED MODULE: ./data/HomePageServiceBlock.js
const serviceBlockData = [{
  title: "Build customer relationships and focus on performance",
  description: `Voyage SMS powers personalized micro-marketing at scale. This means eCommerce brands can feel confident sending the right message to the right customer at the right time – with the right CTA. Our hand-ons Client Success Team focuses on performance over message volume, maximizing brand ROAs.`,
  bannerImage: "customer-relation.png",
  cornerImage: "customer-relation-corner.png",
  position: "leftBottom",
  bgColor: "#162740"
}, {
  title: "Drive revenue with versatile campaigns & automations",
  description: `Whether you want to send a product launch campaign to your entire list, with our proprietary Click to Buy link technology, or start a conversation with a customer who abandoned their cart, Voyage SMS has your back. Choose among a predefined list of trigger events or create your own to build fully-flexible marketing automations that convert.`,
  bannerImage: "revenue.png",
  cornerImage: "revenue-corner.png",
  position: "rightBottom",
  bgColor: "#3F5CFB"
}, {
  title: "Quickly scale your SMS subscriber list",
  description: `Voyage SMS enables you to quickly grow your SMS audience wherever your traffic lives. Our custom-designed modals align with client brands and can be swiftly launched during onboarding. We also integrate with social platforms like Instagram, offer unlimited segmentable keyword opt-ins, and enable opt-in at checkout.`,
  bannerImage: "sms-subscriber.png",
  cornerImage: "sms-subscriber-corner.png",
  position: "leftBottom",
  bgColor: "#162740"
}];
// EXTERNAL MODULE: ./components/css/homePageServiceBlock.module.css
var homePageServiceBlock_module = __webpack_require__(4997);
var homePageServiceBlock_module_default = /*#__PURE__*/__webpack_require__.n(homePageServiceBlock_module);
;// CONCATENATED MODULE: ./components/HomePageServiceBlock.js







 // import dynamic from 'next/dynamic';
// import ReactSnapScroll from 'react-snap-scroll';
// import debounce from 'debounce';

external_gsap_default().registerPlugin(ScrollTrigger_.ScrollTrigger);
const {
  MediaContextProvider: HomePageServiceBlock_MediaContextProvider,
  Media: HomePageServiceBlock_Media
} = (0,fresnel_.createMedia)({
  breakpoints: {
    sm: 0,
    md: 769,
    lg: 1024,
    xl: 1192
  }
});
function HomePageServiceBlock() {
  (0,external_react_.useEffect)(() => {}, []);
  return (
    /*#__PURE__*/
    // d="serviceBoxParent"
    jsx_runtime_.jsx(HomePageServiceBlock_MediaContextProvider, {
      children: /*#__PURE__*/jsx_runtime_.jsx("section", {
        id: "serviceBlockId",
        className: (homePageServiceBlock_module_default()).serviceBlock,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `panel container ${(homePageServiceBlock_module_default()).innerServiceBlock}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (homePageServiceBlock_module_default()).serviceProgressBlock,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: `slideState ${(homePageServiceBlock_module_default()).serviceProgressBar}`
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            id: "fullpage",
            className: `${(homePageServiceBlock_module_default()).serviceWrapper}`,
            "data-scroll": true,
            children: serviceBlockData.map((service, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `commonSlideBox slide${index} ${(homePageServiceBlock_module_default()).serviceBox} ${index == 0 ? 'active' : ''}`,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (homePageServiceBlock_module_default()).lefttextBox,
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: service.title
                }), /*#__PURE__*/jsx_runtime_.jsx(HomePageServiceBlock_Media, {
                  greaterThanOrEqual: "md",
                  children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: service.description
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (homePageServiceBlock_module_default()).rightImageBlock,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: (homePageServiceBlock_module_default()).imageWrap,
                  style: {
                    backgroundColor: service.bgColor
                  },
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    className: `mainBannerAnimation ${(homePageServiceBlock_module_default()).mainImage}`,
                    src: `/images/${service.bannerImage}`
                  }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                    className: `cornerImageAnimation ${service.position} ${(homePageServiceBlock_module_default()).cornerImage}`,
                    src: `/images/${service.cornerImage}`
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx(HomePageServiceBlock_Media, {
                  lessThan: "md",
                  children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: (homePageServiceBlock_module_default()).mobileOnly,
                    children: service.description
                  })
                })]
              })]
            }, index))
          })]
        })
      })
    })
  );
}
;// CONCATENATED MODULE: ./data/HomePageFeatureBlock.js
const features = {
  title: "Innovators in message commerce",
  description: `Voyage SMS brands gain access to the future of text message engagement – right now. Proprietary features like Click to Buy and Live Conversions are only the beginning`,
  featureData: [{
    featureTitle: "Marketing Campaigns",
    featureSubtitle: "Schedule one-time campaigns for product launches, sales and more",
    featureIcon: "marketing-icon.svg",
    featureVideo: "marketing-campaign.mp4",
    featurePoster: "marketing-campaign.jpeg"
  }, {
    featureTitle: "Automated Drips",
    featureSubtitle: "Create multi-message drip campaigns with powerful filtering.",
    featureIcon: "automated-drips.svg",
    featureVideo: "automated-drips.mp4",
    featurePoster: "automated-drips.jpeg"
  }, {
    featureTitle: "SMS List Building",
    featureSubtitle: "Custom-designed modals, Voyage Two-Tap Anywhere, and more.",
    featureIcon: "custom-list.svg",
    featureVideo: "sms-list-building.mp4",
    featurePoster: "custom-list-building.jpeg"
  }, {
    featureTitle: "Advanced Segmentation",
    featureSubtitle: "Micro-market at scale based on customer attributes and event history.",
    featureIcon: "advance-segmentation.svg",
    featureVideo: "advance-segmentation.mp4",
    featurePoster: "advance-segmentation.jpeg"
  }, {
    featureTitle: "Click to Buy",
    featureSubtitle: "Take customers straight to checkout with dynamic message links.",
    featureIcon: "click-to-buy.svg",
    featureVideo: "click-to-buy.mp4",
    featurePoster: "click-to-buy.jpeg"
  }, {
    featureTitle: "Live Conversions",
    featureSubtitle: "Convert customers at bottom-of-funnel with 1:1 conversations – at scale.",
    featureIcon: "live-conversation.svg",
    featureVideo: "live-conversation-new.mp4",
    featurePoster: "live-conversation.jpeg"
  }, {
    featureTitle: "Custom Event Triggers",
    featureSubtitle: "Create any event trigger for automated drips right on the Voyage UI.",
    featureIcon: "custom-event.svg",
    featureVideo: "custom-event-trigger.mp4",
    featurePoster: "custom-event-trigger.jpeg"
  }, {
    featureTitle: "Open API",
    featureSubtitle: "Push and pull data in and out of Voyage from and to any data source.",
    featureIcon: "open-api.svg",
    featureVideo: "open-api.mp4",
    featurePoster: "open-api.jpeg"
  }, {
    featureTitle: "Performance Analytics",
    featureSubtitle: "Track key metrics like attributed revenue and ROAS right on our dashboard.",
    featureIcon: "open-api.svg",
    featureVideo: "performance-analytics.mp4",
    featurePoster: "analytics-dashboard.jpeg"
  }]
};
// EXTERNAL MODULE: ./components/css/homePageFeatureBlock.module.css
var homePageFeatureBlock_module = __webpack_require__(1873);
var homePageFeatureBlock_module_default = /*#__PURE__*/__webpack_require__.n(homePageFeatureBlock_module);
;// CONCATENATED MODULE: ./components/HomePageFeatureBlock.js







function HomePageFeatureBlock() {
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
  const videoRefs = (0,external_react_.useRef)([]);
  const introRefs = (0,external_react_.useRef)([]);
  const buttonRefs = (0,external_react_.useRef)([]);
  const toggleHeightRef = (0,external_react_.useRef)();
  const textChange = (0,external_react_.useRef)();
  const buttonWrapperRef = (0,external_react_.useRef)();

  const slideHeight = e => {
    if (buttonWrapperRef.current.classList.contains("active")) {
      buttonWrapperRef.current.classList.remove("active");
      external_gsap_default().to(toggleHeightRef.current, {
        duration: 1,
        height: "211.614vw",
        ease: "ease-in"
      });
    } else {
      buttonWrapperRef.current.classList.add("active");
      external_gsap_default().to(toggleHeightRef.current, {
        duration: 1,
        height: "auto",
        ease: "ease-in"
      });
    }

    textChange.current.textContent = textChange.current.textContent == "All Features" ? "Hide Features" : "All Features";
  };

  const playVideo_removeIntro = (vref, iref, bref) => {
    iref.current.style.display = "none";
    bref.current.style.display = "none";
    vref.current.play();
  };

  const playPause = (vref, iref, bref) => {
    if (!vref.current.paused) {
      vref.current.pause();
      iref.current.style.display = "flex";
      bref.current.style.display = "block";
    } else {
      iref.current.style.display = "none";
      bref.current.style.display = "none";
      vref.current.play();
    }
  };

  features.featureData.map((element, i) => {
    var _videoRefs$current$i, _introRefs$current$i, _buttonRefs$current$i;

    return videoRefs.current.push((_videoRefs$current$i = videoRefs.current[i]) !== null && _videoRefs$current$i !== void 0 ? _videoRefs$current$i : /*#__PURE__*/(0,external_react_.createRef)()), introRefs.current.push((_introRefs$current$i = introRefs.current[i]) !== null && _introRefs$current$i !== void 0 ? _introRefs$current$i : /*#__PURE__*/(0,external_react_.createRef)()), buttonRefs.current.push((_buttonRefs$current$i = buttonRefs.current[i]) !== null && _buttonRefs$current$i !== void 0 ? _buttonRefs$current$i : /*#__PURE__*/(0,external_react_.createRef)());
  });
  return /*#__PURE__*/jsx_runtime_.jsx(MediaContextProvider, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      id: "featureBlockBox",
      className: (homePageFeatureBlock_module_default()).featureBlock,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (homePageFeatureBlock_module_default()).directionArrow,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
          viewBox: "0 0 104 98",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M104 48.5831L49 -0.000243485L49 97.1664L104 48.5831Z",
            fill: "#02D9FC"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M49 48.5831L-6 -0.000243485L-6 97.1664L49 48.5831Z",
            fill: "#02D9FC"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `container ${(homePageFeatureBlock_module_default()).innerFeatureWrapper}`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          "data-scroll": true,
          children: features.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          "data-scroll": true,
          children: features.description
        }), /*#__PURE__*/jsx_runtime_.jsx(Media, {
          lessThan: "md",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            className: (homePageFeatureBlock_module_default()).stickyTag,
            viewBox: "0 0 143 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M0 0H143V46H30C13.4315 46 0 32.5685 0 16V0Z",
              fill: "#58EDC0"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M32.152 28.21C33.538 28.21 34.504 27.79 35.19 27.146C35.862 26.516 36.24 25.662 36.296 24.78H34.308C34.182 25.83 33.342 26.544 32.152 26.544C30.472 26.544 29.408 25.074 29.408 23.03C29.408 21.042 30.29 19.502 32.138 19.502C33.314 19.502 34.07 20.16 34.252 21.168H36.268C36.058 19.264 34.602 17.794 32.138 17.794C29.184 17.794 27.336 20.062 27.336 23.03C27.336 26.04 29.338 28.21 32.152 28.21ZM38.0403 28H44.7743V26.306H40.0703V17.99H38.0403V28ZM46.5746 28H48.6046V17.99H46.5746V28ZM55.2383 28.21C56.6243 28.21 57.5903 27.79 58.2763 27.146C58.9483 26.516 59.3263 25.662 59.3823 24.78H57.3943C57.2683 25.83 56.4283 26.544 55.2383 26.544C53.5583 26.544 52.4943 25.074 52.4943 23.03C52.4943 21.042 53.3763 19.502 55.2243 19.502C56.4003 19.502 57.1563 20.16 57.3383 21.168H59.3543C59.1443 19.264 57.6883 17.794 55.2243 17.794C52.2703 17.794 50.4223 20.062 50.4223 23.03C50.4223 26.04 52.4243 28.21 55.2383 28.21ZM61.1266 28H63.1566V24.36L64.1786 23.324L67.3986 28H69.7786L65.6066 21.994L69.5266 17.99H67.0066L63.1566 21.98V17.99H61.1266V28ZM73.7938 19.698H76.8038V28H78.8338V19.698H81.8438V17.99H73.7938V19.698ZM87.4742 28.224C90.4282 28.224 92.2902 26.012 92.2902 23.016C92.2902 20.02 90.4282 17.794 87.4742 17.794C84.5202 17.794 82.6442 20.02 82.6442 23.016C82.6442 26.012 84.5202 28.224 87.4742 28.224ZM87.4882 26.558C85.6542 26.558 84.7162 25.004 84.7162 23.016C84.7162 21.014 85.6542 19.46 87.4882 19.46C89.3222 19.46 90.2182 21.014 90.2182 23.016C90.2182 25.004 89.3222 26.558 87.4882 26.558ZM97.152 28H99.252V24.374H101.716C103.816 24.374 105.062 23.1 105.062 21.21C105.062 20.286 104.726 19.502 104.166 18.928C103.578 18.326 102.71 17.99 101.548 17.99H97.152V28ZM99.252 19.754H101.38C102.388 19.754 102.976 20.286 102.976 21.224C102.976 22.134 102.416 22.722 101.352 22.722H99.252V19.754ZM106.766 28H113.5V26.306H108.796V17.99H106.766V28ZM114.627 28H116.685L117.343 25.872H120.955L121.627 28H123.741L120.213 17.99H118.113L114.627 28ZM118.715 21.434C118.883 20.902 119.135 19.894 119.135 19.894H119.163C119.163 19.894 119.401 20.902 119.569 21.434L120.465 24.318H117.819L118.715 21.434ZM126.643 28H128.673V24.136L132.005 17.99H129.877L128.393 20.958C128.099 21.56 127.721 22.386 127.721 22.386H127.693C127.693 22.386 127.343 21.56 127.035 20.958L125.523 17.99H123.311L126.643 24.136V28Z",
              fill: "#162740"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (homePageFeatureBlock_module_default()).featureGrid,
          ref: toggleHeightRef,
          "data-scroll": true,
          children: features.featureData.map((feature, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (homePageFeatureBlock_module_default()).featureVideoWrapper,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              ref: introRefs.current[index],
              className: (homePageFeatureBlock_module_default()).videoIntroBlock,
              style: {
                backgroundImage: `url('/images/video-posters/${feature.featurePoster}')`
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (homePageFeatureBlock_module_default()).iconBox,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: `/images/video-posters/${feature.featureIcon}`
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: feature.featureTitle
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: feature.featureTitle.split(" ")[0],
                children: feature.featureSubtitle
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("video", {
              onClick: () => playPause(videoRefs.current[index], introRefs.current[index], buttonRefs.current[index]),
              ref: videoRefs.current[index],
              preload: "auto",
              poster: `/images/video-posters/${feature.featurePoster}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("source", {
                src: `/videos/${feature.featureVideo}`,
                type: "video/mp4"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              ref: buttonRefs.current[index],
              onClick: () => playVideo_removeIntro(videoRefs.current[index], introRefs.current[index], buttonRefs.current[index]),
              className: (homePageFeatureBlock_module_default()).playBtn
            })]
          }, index))
        }), /*#__PURE__*/jsx_runtime_.jsx(Media, {
          lessThan: "md",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            onClick: slideHeight,
            ref: buttonWrapperRef,
            className: `toggleSwitch ${(homePageFeatureBlock_module_default()).toggleFeatureBlock}`,
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              ref: textChange,
              children: "All Features"
            }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
              viewBox: "0 0 13 8",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M5.66016 7.16797C5.76953 7.33203 5.93359 7.38672 6.125 7.38672C6.28906 7.38672 6.45312 7.33203 6.58984 7.16797L11.8945 1.86328C12.0039 1.75391 12.0859 1.58984 12.0859 1.39844C12.0859 1.23438 12.0039 1.07031 11.8945 0.933594L11.293 0.332031C11.1562 0.222656 10.9922 0.140625 10.8281 0.140625C10.6367 0.140625 10.4727 0.195312 10.3633 0.304688L6.125 4.54297L1.88672 0.304688C1.75 0.195312 1.58594 0.140625 1.42188 0.140625C1.23047 0.140625 1.06641 0.222656 0.957031 0.332031L0.355469 0.933594C0.21875 1.07031 0.164062 1.23438 0.164062 1.39844C0.164062 1.58984 0.21875 1.75391 0.355469 1.86328L5.66016 7.16797Z",
                fill: "white",
                fillOpacity: "0.5"
              })
            })]
          })
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/css/HomePageIntegrationBlock.module.css
var HomePageIntegrationBlock_module = __webpack_require__(2266);
var HomePageIntegrationBlock_module_default = /*#__PURE__*/__webpack_require__.n(HomePageIntegrationBlock_module);
;// CONCATENATED MODULE: ./components/HomePageIntegrationBlock.js



function HomePageIntegrationBlock() {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: (HomePageIntegrationBlock_module_default()).integrationBlock,
    "data-scroll-section": true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `container ${(HomePageIntegrationBlock_module_default()).integrationWrapper}`,
      "data-scroll": true,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Seamlessly integrates with your existing eCommerce tech stack"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (HomePageIntegrationBlock_module_default()).imageWrapper
      })]
    })
  });
}
;// CONCATENATED MODULE: ./data/HomePageTestimonialBlock.js
// width is in VW unit
const testimonialData = [{
  clientName: "Negative",
  clientLogo: "negative-logo.png",
  logoWidth: "16.586vw",
  testimonialTitle: `How we helped Negative Underwear`,
  testimonialText: `We’ve been clients for 1.5+ years and have been thrilled with the easy-to-use dashboard and excellent customer support. Voyage was an easy choice to make and an even easier reason to stay!`,
  reviewer: "Ellie Jarboe",
  reviewerDesignation: "Marketing & Operations Manager - Negative Underwear",
  rating: 5,
  modalImage: "negative-modal.png",
  summaryPoints: [{
    title: `Negative Underwear chose Voyage over Klaviyo to launch their SMS program.`
  }, {
    title: `Voyage helped Negative build their SMS list from scratch to 50K subscribers since 2019.`
  }, {
    title: `Negative has made $50+ for every dollar spent with Voyage.`
  }]
}, {
  clientName: "Birthday_co",
  clientLogo: "birthday_co-logo.png",
  logoWidth: "15.47vw",
  testimonialTitle: `How Birthdate Co leveraged segmentation to make the stars align`,
  testimonialText: `With Voyage’s powerful and user friendly segmentation tools, we can confidently target the right customer at the right time leading to increased engagement and maximized conversions.`,
  reviewer: "Ajay Mehta",
  reviewerDesignation: "CEO - Birthdate Co",
  rating: 5,
  modalImage: "birthday_co-modal.png",
  summaryPoints: [{
    title: `Birthdate Co adopted SMS to supplement existing channels.`
  }, {
    title: `Birthdate achieved 35% monthly subscriber growth through Voyage’s custom-designed opt-in modals.`
  }, {
    title: `Through highly-targeted weekly horoscope SMS campaigns, Birthdate Co has seen CTRs of over 20%.`
  }]
}, {
  clientName: "Moonpod",
  clientLogo: "moonpod-logo.png",
  logoWidth: "12.63vw",
  testimonialTitle: `How Moon Pod used Voyage to build community`,
  testimonialText: `Voyage has allowed us to unlock revenue while engaging our subscribers on every level. The platform grows with us, and SMS has quickly become a key driver of our marketing and growth strategies.`,
  reviewer: "Sunny Gosain",
  reviewerDesignation: "General Manager - Moon Pod",
  rating: 5,
  modalImage: "moonpod-modal.png",
  summaryPoints: [{
    title: `Moon Pod chose Voyage to begin their message commerce and SMS marketing journey.`
  }, {
    title: `In Q1, Moon Pod saw subscriber growth of over 65%.`
  }, {
    title: `Moon Pod has made over $185 for every dollar spent with Voyage.`
  }]
}];
// EXTERNAL MODULE: ./components/css/HomePageTestimonialBlock.module.css
var HomePageTestimonialBlock_module = __webpack_require__(777);
var HomePageTestimonialBlock_module_default = /*#__PURE__*/__webpack_require__.n(HomePageTestimonialBlock_module);
;// CONCATENATED MODULE: ./components/HomePageTestimonial.js



function HomePageTestimonial_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function HomePageTestimonial_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { HomePageTestimonial_ownKeys(Object(source), true).forEach(function (key) { HomePageTestimonial_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { HomePageTestimonial_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function HomePageTestimonial_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function HomePageTestimonial() {
  const topReviewBoxRef = (0,external_react_.useRef)();
  const reviewPopupRef = (0,external_react_.useRef)();
  const sliderRef = (0,external_react_.useRef)();
  const readMoreRef = (0,external_react_.useRef)();
  const plusArrow = (0,external_react_.useRef)();
  const minusArrow = (0,external_react_.useRef)();
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

  const slickPrev = () => {
    sliderRef.current.slickPrev();
  };

  const slickNext = () => {
    sliderRef.current.slickNext();
  };

  const hideShadow = () => {
    external_gsap_default().to('.slick-active .reviewTextBox', {
      opacity: 0,
      y: '-35%',
      duration: 0.4,
      autoAlpha: 0
    });
    external_gsap_default().to(topReviewBoxRef.current, {
      opacity: 0,
      duration: 0.3,
      autoAlpha: 0
    });
  };

  const openCloseReview = () => {
    let t1 = external_gsap_default().timeline();

    if (reviewPopupRef.current.classList.contains('active')) {
      t1.to('.reviewTextBox', {
        opacity: 0,
        autoAlpha: 0,
        display: 'none'
      }).to('.mobileSummary', {
        opacity: 1,
        autoAlpha: 1,
        display: 'block'
      });
      readMoreRef.current.textContent = 'Read More';
      minusArrow.current.style.display = 'none';
      plusArrow.current.style.display = 'block';
      reviewPopupRef.current.classList.remove('active');
    } else {
      t1.to('.mobileSummary', {
        opacity: 0,
        autoAlpha: 0,
        display: 'none'
      }).to('.reviewTextBox', {
        opacity: 1,
        autoAlpha: 1,
        display: 'block'
      });
      readMoreRef.current.textContent = 'Back';
      plusArrow.current.style.display = 'none';
      minusArrow.current.style.display = 'block';
      reviewPopupRef.current.classList.add('active');
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: `cubic-bezier(.51,.11,.44,.96)`
  };
  return /*#__PURE__*/jsx_runtime_.jsx(MediaContextProvider, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: `${(HomePageTestimonialBlock_module_default()).testimonialBlock}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Media, {
        lessThan: "md",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          onClick: hideShadow,
          className: `${(HomePageTestimonialBlock_module_default()).topTestimonialBlock}`,
          ref: topReviewBoxRef
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `container ${(HomePageTestimonialBlock_module_default()).testimonialWrapper}`,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `slickController ${(HomePageTestimonialBlock_module_default()).controller}`,
          onClick: slickPrev,
          "data-scroll": true,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Media, {
            greaterThanOrEqual: "md",
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              viewBox: "0 0 23 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M22.9998 10.0002C22.9998 9.63554 22.8549 9.2858 22.597 9.02794C22.3392 8.77008 21.9894 8.62521 21.6248 8.62521L5.69402 8.62522L11.5983 2.72372C11.7261 2.59587 11.8275 2.4441 11.8967 2.27707C11.9659 2.11004 12.0015 1.93101 12.0015 1.75022C12.0015 1.56942 11.9659 1.3904 11.8967 1.22336C11.8275 1.05633 11.7261 0.904557 11.5983 0.776715C11.4704 0.648873 11.3187 0.547463 11.1516 0.478276C10.9846 0.409089 10.8056 0.373481 10.6248 0.373481C10.444 0.373481 10.2649 0.409089 10.0979 0.478276C9.93088 0.547464 9.77911 0.648874 9.65127 0.776715L1.40127 9.02672C1.27322 9.15444 1.17163 9.30618 1.10231 9.47323C1.03299 9.64027 0.997314 9.81936 0.997314 10.0002C0.997314 10.1811 1.03299 10.3602 1.10231 10.5272C1.17163 10.6943 1.27322 10.846 1.40127 10.9737L9.65127 19.2237C9.90946 19.4819 10.2596 19.627 10.6248 19.627C10.9899 19.627 11.3401 19.4819 11.5983 19.2237C11.8565 18.9655 12.0015 18.6153 12.0015 18.2502C12.0015 17.8851 11.8565 17.5349 11.5983 17.2767L5.69402 11.3752L21.6248 11.3752C21.9894 11.3752 22.3392 11.2303 22.597 10.9725C22.8549 10.7146 22.9998 10.3649 22.9998 10.0002Z",
                fill: "black"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Media, {
            lessThan: "md",
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              viewBox: "0 0 12 22",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M10.8281 21.2188L11.7656 20.3281C11.9531 20.0938 11.9531 19.7188 11.7656 19.5312L3.28125 11L11.7656 2.51562C11.9531 2.32812 11.9531 1.95312 11.7656 1.71875L10.8281 0.828125C10.5938 0.59375 10.2656 0.59375 10.0312 0.828125L0.1875 10.625C0 10.8594 0 11.1875 0.1875 11.4219L10.0312 21.2188C10.2656 21.4531 10.5938 21.4531 10.8281 21.2188Z",
                fill: "white"
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `slickController ${(HomePageTestimonialBlock_module_default()).rightArrow} ${(HomePageTestimonialBlock_module_default()).controller}`,
          onClick: slickNext,
          "data-scroll": true,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Media, {
            greaterThanOrEqual: "md",
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              viewBox: "0 0 23 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.000231631 10.0002C0.000231663 9.63554 0.145095 9.2858 0.402959 9.02794C0.660821 8.77008 1.01056 8.62521 1.37523 8.62521L17.306 8.62522L11.4017 2.72372C11.2739 2.59587 11.1725 2.4441 11.1033 2.27707C11.0341 2.11004 10.9985 1.93101 10.9985 1.75022C10.9985 1.56942 11.0341 1.3904 11.1033 1.22336C11.1725 1.05633 11.2739 0.904557 11.4017 0.776715C11.5296 0.648873 11.6813 0.547463 11.8484 0.478276C12.0154 0.409089 12.1944 0.373481 12.3752 0.373481C12.556 0.373481 12.7351 0.409089 12.9021 0.478276C13.0691 0.547464 13.2209 0.648874 13.3487 0.776715L21.5987 9.02672C21.7268 9.15444 21.8284 9.30618 21.8977 9.47323C21.967 9.64027 22.0027 9.81936 22.0027 10.0002C22.0027 10.1811 21.967 10.3602 21.8977 10.5272C21.8284 10.6943 21.7268 10.846 21.5987 10.9737L13.3487 19.2237C13.0905 19.4819 12.7404 19.627 12.3752 19.627C12.0101 19.627 11.6599 19.4819 11.4017 19.2237C11.1435 18.9655 10.9985 18.6153 10.9985 18.2502C10.9985 17.8851 11.1435 17.5349 11.4017 17.2767L17.306 11.3752L1.37523 11.3752C1.01056 11.3752 0.660821 11.2303 0.402959 10.9725C0.145095 10.7146 0.000231599 10.3649 0.000231631 10.0002Z",
                fill: "black"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Media, {
            lessThan: "md",
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              viewBox: "0 0 12 22",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M1.125 0.828125L0.1875 1.71875C0 1.95312 0 2.32812 0.1875 2.51562L8.67188 11L0.1875 19.5312C0 19.7188 0 20.0938 0.1875 20.3281L1.125 21.2188C1.35938 21.4531 1.6875 21.4531 1.92188 21.2188L11.7656 11.4219C11.9531 11.1875 11.9531 10.8594 11.7656 10.625L1.92188 0.828125C1.6875 0.59375 1.35938 0.59375 1.125 0.828125Z",
                fill: "white"
              })
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (HomePageTestimonialBlock_module_default()).testimonialSlider,
          "data-scroll": true,
          children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), HomePageTestimonial_objectSpread(HomePageTestimonial_objectSpread({
            ref: sliderRef
          }, settings), {}, {
            children: testimonialData.map((testimonial, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (HomePageTestimonialBlock_module_default()).testimonialBox,
              "data-scroll": true,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: `slideLeft ${(HomePageTestimonialBlock_module_default()).testimonialTextBlock}`,
                "data-scroll": true,
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  id: testimonial.clientName,
                  className: (HomePageTestimonialBlock_module_default()).logoBlock,
                  style: {
                    width: testimonial.logoWidth
                  },
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: `/images/${testimonial.clientLogo}`,
                    alt: testimonial.clientName
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                  children: testimonial.testimonialTitle
                }), /*#__PURE__*/jsx_runtime_.jsx(Media, {
                  greaterThanOrEqual: "md",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (HomePageTestimonialBlock_module_default()).testimonialDetail,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                      className: (HomePageTestimonialBlock_module_default()).testimonialText,
                      children: testimonial.testimonialText
                    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                      className: (HomePageTestimonialBlock_module_default()).reviewer,
                      children: testimonial.reviewer
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      className: (HomePageTestimonialBlock_module_default()).designation,
                      children: ["(", testimonial.reviewerDesignation, ")"]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: (HomePageTestimonialBlock_module_default()).ratingBlock,
                      children: [...Array(testimonial.rating).keys()].map(i => /*#__PURE__*/jsx_runtime_.jsx("svg", {
                        viewBox: "0 0 18 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                          d: "M13.8094 9.43567L17.4536 6.5792C17.9691 6.17354 17.7024 5.37914 17.0269 5.34533L12.334 5.0749C12.0496 5.05799 11.8007 4.88897 11.694 4.63544L9.96976 0.443684C9.72089 -0.147895 8.84985 -0.147895 8.60098 0.443684L6.87669 4.61854C6.77003 4.87207 6.52117 5.04109 6.23675 5.05799L1.52604 5.32843C0.850546 5.36223 0.583902 6.15664 1.09941 6.56229L4.74354 9.40187C4.95686 9.57089 5.06351 9.85823 4.99241 10.1118L3.8014 14.4556C3.64141 15.0641 4.33469 15.5543 4.90353 15.2162L8.86763 12.7992C9.1165 12.6471 9.41869 12.6471 9.64978 12.7992L13.6317 15.2162C14.2005 15.5543 14.8938 15.0641 14.7338 14.4556L13.5428 10.1287C13.4895 9.87513 13.5783 9.6047 13.8094 9.43567Z",
                          fill: "#E9B531",
                          fillOpacity: "0.9"
                        })
                      }, i))
                    })]
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: `slideIn ${(HomePageTestimonialBlock_module_default()).sampleBlock}`,
                "data-scroll": true,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: `/images/${testimonial.modalImage}`,
                  alt: testimonial.clientName
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: `slideLeft mobileSummary ${(HomePageTestimonialBlock_module_default()).summaryBlock}`,
                "data-scroll": true,
                children: testimonial.summaryPoints.map((point, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: (HomePageTestimonialBlock_module_default()).stepBox,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: (HomePageTestimonialBlock_module_default()).counter,
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      children: ["0", index + 1]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: point.title
                  })]
                }, index))
              }), /*#__PURE__*/jsx_runtime_.jsx(Media, {
                lessThan: "md",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: `reviewTextBox ${(HomePageTestimonialBlock_module_default()).testimonialDetail}`,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: (HomePageTestimonialBlock_module_default()).testimonialText,
                    children: testimonial.testimonialText
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (HomePageTestimonialBlock_module_default()).mobileReviewBox,
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: (HomePageTestimonialBlock_module_default()).nameDesignationBlock,
                      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                        className: (HomePageTestimonialBlock_module_default()).reviewer,
                        children: testimonial.reviewer
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                        className: (HomePageTestimonialBlock_module_default()).designation,
                        children: ["(", testimonial.reviewerDesignation, ")"]
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: (HomePageTestimonialBlock_module_default()).ratingBlock,
                      children: [...Array(testimonial.rating).keys()].map(i => /*#__PURE__*/jsx_runtime_.jsx("svg", {
                        viewBox: "0 0 18 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                          d: "M13.8094 9.43567L17.4536 6.5792C17.9691 6.17354 17.7024 5.37914 17.0269 5.34533L12.334 5.0749C12.0496 5.05799 11.8007 4.88897 11.694 4.63544L9.96976 0.443684C9.72089 -0.147895 8.84985 -0.147895 8.60098 0.443684L6.87669 4.61854C6.77003 4.87207 6.52117 5.04109 6.23675 5.05799L1.52604 5.32843C0.850546 5.36223 0.583902 6.15664 1.09941 6.56229L4.74354 9.40187C4.95686 9.57089 5.06351 9.85823 4.99241 10.1118L3.8014 14.4556C3.64141 15.0641 4.33469 15.5543 4.90353 15.2162L8.86763 12.7992C9.1165 12.6471 9.41869 12.6471 9.64978 12.7992L13.6317 15.2162C14.2005 15.5543 14.8938 15.0641 14.7338 14.4556L13.5428 10.1287C13.4895 9.87513 13.5783 9.6047 13.8094 9.43567Z",
                          fill: "#E9B531",
                          fillOpacity: "0.9"
                        })
                      }, i))
                    })]
                  })]
                })
              })]
            }, index))
          }))
        }), /*#__PURE__*/jsx_runtime_.jsx(Media, {
          greaterThanOrEqual: "md",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (HomePageTestimonialBlock_module_default()).darkCircle,
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/green-dots.svg",
              alt: "green dotted illustrations"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Media, {
          lessThan: "md",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            onClick: openCloseReview,
            className: (HomePageTestimonialBlock_module_default()).reviewPopup,
            ref: reviewPopupRef,
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              id: "read-more",
              ref: readMoreRef,
              children: "READ MORE"
            }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
              ref: plusArrow,
              className: "plus",
              viewBox: "0 0 11 11",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M10.0625 4.875H6.125V0.9375C6.125 0.71875 5.90625 0.5 5.6875 0.5H4.8125C4.56641 0.5 4.375 0.71875 4.375 0.9375V4.875H0.4375C0.191406 4.875 0 5.09375 0 5.3125V6.1875C0 6.43359 0.191406 6.625 0.4375 6.625H4.375V10.5625C4.375 10.8086 4.56641 11 4.8125 11H5.6875C5.90625 11 6.125 10.8086 6.125 10.5625V6.625H10.0625C10.2812 6.625 10.5 6.43359 10.5 6.1875V5.3125C10.5 5.09375 10.2812 4.875 10.0625 4.875Z",
                fill: "#B2BEFD"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
              ref: minusArrow,
              className: `minus ${(HomePageTestimonialBlock_module_default()).minus}`,
              viewBox: "0 0 11 3",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M10.0625 0.875H0.4375C0.191406 0.875 0 1.09375 0 1.3125V2.1875C0 2.43359 0.191406 2.625 0.4375 2.625H10.0625C10.2812 2.625 10.5 2.43359 10.5 2.1875V1.3125C10.5 1.09375 10.2812 0.875 10.0625 0.875Z",
                fill: "#B2BEFD"
              })
            })]
          })
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/css/homePageCompliance.module.css
var homePageCompliance_module = __webpack_require__(6200);
var homePageCompliance_module_default = /*#__PURE__*/__webpack_require__.n(homePageCompliance_module);
;// CONCATENATED MODULE: ./data/HomePageComplianceBlock.js
const complianceData = {
  title: "Sleep at night, with a best-in-class compliance-verified platform",
  description: `The Voyage SMS platform complies with all policies published by the CTIA, TCPA and other governing bodies that regulate application to person ("A2P") text messaging. We continually monitor changes in the A2P and wireless carrier landscape to ensure you are always in compliance with your SMS program on Voyage.`
};
;// CONCATENATED MODULE: ./components/HomePageComplianceBlock.js




function HomePageComplianceBlock() {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: (homePageCompliance_module_default()).complianceBlock,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `container ${(homePageCompliance_module_default()).complianceWrapper}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (homePageCompliance_module_default()).innerContent,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (homePageCompliance_module_default()).iconBox,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (homePageCompliance_module_default()).innerIconBox,
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              viewBox: "0 0 65 63",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M65 37.6861C60.4816 39.9925 55.3592 41.2941 49.9311 41.2941C31.6792 41.2941 16.8831 26.5784 16.8831 8.4257C16.8831 5.51312 17.2641 2.68903 17.979 0C7.3041 5.44886 0 16.5063 0 29.2604C0 47.4131 14.7961 62.1288 33.048 62.1288C48.3714 62.1288 61.2589 51.7565 65 37.6861Z",
                fill: "#5BEBC1"
              })
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (homePageCompliance_module_default()).complianceTextBlock,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: complianceData.title
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: complianceData.description
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (homePageCompliance_module_default()).logoBlock,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/images/compliance-with.png",
            alt: "compliance image"
          })
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./components/css/HomePageSignup.module.css
var HomePageSignup_module = __webpack_require__(1924);
var HomePageSignup_module_default = /*#__PURE__*/__webpack_require__.n(HomePageSignup_module);
// EXTERNAL MODULE: ./components/SignupBottomBlock.js
var SignupBottomBlock = __webpack_require__(1192);
// EXTERNAL MODULE: ./services/index.js
var services = __webpack_require__(7482);
;// CONCATENATED MODULE: ./components/HomePageSignupBlock.js



function HomePageSignupBlock_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function HomePageSignupBlock_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { HomePageSignupBlock_ownKeys(Object(source), true).forEach(function (key) { HomePageSignupBlock_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { HomePageSignupBlock_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function HomePageSignupBlock_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function HomePageSignupBlock() {
  const emailRef = (0,external_react_.useRef)();
  const emailErrorRef = (0,external_react_.useRef)();
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)("");
  const {
    0: isSubmitted,
    1: setIsSubmitted
  } = (0,external_react_.useState)(false);
  const ePattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

  const emailSignUp = () => {
    let email = emailRef.current.value;

    if (email.length == 0 || !ePattern.test(email)) {
      emailErrorRef.current.textContent = "Invalid email";
      return false;
    }

    emailErrorRef.current.textContent = "";
    setEmail("");

    try {
      const utm = (0,services/* getUtm */.PB)() || {};
      (0,services/* createOrUpdateRegistration */.jt)(HomePageSignupBlock_objectSpread({
        email
      }, utm));
    } catch (error) {
      console.error(error);
    }

    setIsSubmitted(true);
  };

  (0,external_react_.useEffect)(() => {
    emailErrorRef.current.textContent = "";
  }, [email]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: (HomePageSignup_module_default()).signupBlock,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `container ${(HomePageSignup_module_default()).signupWrapper}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (HomePageSignup_module_default()).signupBox,
        "data-scroll": true,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Your Voyage to SMS Growth Starts Today"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (HomePageSignup_module_default()).description,
          children: "Sign up now to access the most powerful full-stack message commerce platform in the world. We\u2019ll reply before the day is done. Then it\u2019s a free month of messages for your brand \u2013 on us."
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (HomePageSignup_module_default()).inputBox,
          children: [isSubmitted && /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: (HomePageSignup_module_default()).thankYou,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Great! Thanks so much for filling out our form. One of our amazing team members will reach out to you shortly!"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            id: "smailSignUpError",
            ref: emailErrorRef,
            className: (HomePageSignup_module_default()).emailError
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            id: (HomePageSignup_module_default()).inputWrapper,
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              ref: emailRef,
              value: email,
              onChange: e => setEmail(e.target.value),
              type: "text",
              name: "email",
              id: "emailSignUp",
              autoComplete: "off",
              placeholder: "ENTER YOUR EMAIL"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: () => emailSignUp(),
              id: "emailSubmit",
              children: "Start my Voyage \xA0 \uD83D\uDE80"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: (HomePageSignup_module_default()).extraInfo,
          children: ["or Text ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "DEMO"
          }), " to ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "(323) 370-0977"
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(SignupBottomBlock/* default */.Z, {})]
  });
}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/RequestForm.js + 1 modules
var RequestForm = __webpack_require__(7081);
;// CONCATENATED MODULE: ./pages/index.js















 // import { SmoothScrollProvider } from '../utils/smooth-scroll';

 // const RequestForm = dynamic(() => import("../components/RequestForm"), {
//   loading: () => null,
//   ssr: false,
// });


function Home() {
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
      }), /*#__PURE__*/jsx_runtime_.jsx(HeroBanner, {
        setFormState: setFormState
      }), /*#__PURE__*/jsx_runtime_.jsx(HomePageClientBlock, {}), /*#__PURE__*/jsx_runtime_.jsx(HomePageStatsBlock, {}), /*#__PURE__*/jsx_runtime_.jsx(HomePageServiceBlock, {}), /*#__PURE__*/jsx_runtime_.jsx(HomePageFeatureBlock, {}), /*#__PURE__*/jsx_runtime_.jsx(HomePageIntegrationBlock, {}), /*#__PURE__*/jsx_runtime_.jsx(HomePageTestimonial, {}), /*#__PURE__*/jsx_runtime_.jsx(HomePageComplianceBlock, {}), /*#__PURE__*/jsx_runtime_.jsx(HomePageSignupBlock, {}), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {
        setFormState: setFormState
      })]
    })]
  });
}

/***/ }),

/***/ 2266:
/***/ (function(module) {

// Exports
module.exports = {
	"integrationBlock": "HomePageIntegrationBlock_integrationBlock__1KDIB",
	"integrationWrapper": "HomePageIntegrationBlock_integrationWrapper__3NbKK",
	"imageWrapper": "HomePageIntegrationBlock_imageWrapper__2FX24"
};


/***/ }),

/***/ 1924:
/***/ (function(module) {

// Exports
module.exports = {
	"signupBlock": "HomePageSignup_signupBlock__32sFd",
	"signupWrapper": "HomePageSignup_signupWrapper__wSLvC",
	"signupBox": "HomePageSignup_signupBox__nHjLD",
	"description": "HomePageSignup_description__5g-gJ",
	"inputBox": "HomePageSignup_inputBox__2Jo04",
	"emailError": "HomePageSignup_emailError__3hQ-9",
	"inputWrapper": "HomePageSignup_inputWrapper__2joNE",
	"extraInfo": "HomePageSignup_extraInfo__1BBru",
	"thankYou": "HomePageSignup_thankYou__YjJ9q"
};


/***/ }),

/***/ 777:
/***/ (function(module) {

// Exports
module.exports = {
	"testimonialBlock": "HomePageTestimonialBlock_testimonialBlock__kP1O2",
	"testimonialWrapper": "HomePageTestimonialBlock_testimonialWrapper__19RkW",
	"controller": "HomePageTestimonialBlock_controller__GC3KD",
	"rightArrow": "HomePageTestimonialBlock_rightArrow__l12xP",
	"testimonialSlider": "HomePageTestimonialBlock_testimonialSlider__3nwuf",
	"testimonialBox": "HomePageTestimonialBlock_testimonialBox__3kkuV",
	"testimonialTextBlock": "HomePageTestimonialBlock_testimonialTextBlock__28WOQ",
	"testimonialDetail": "HomePageTestimonialBlock_testimonialDetail__22fuO",
	"testimonialText": "HomePageTestimonialBlock_testimonialText__BPnbQ",
	"reviewer": "HomePageTestimonialBlock_reviewer__1XagR",
	"designation": "HomePageTestimonialBlock_designation__21xo4",
	"ratingBlock": "HomePageTestimonialBlock_ratingBlock__3ejLn",
	"logoBlock": "HomePageTestimonialBlock_logoBlock__3KIKf",
	"sampleBlock": "HomePageTestimonialBlock_sampleBlock__1HiYL",
	"summaryBlock": "HomePageTestimonialBlock_summaryBlock__3Sy0K",
	"stepBox": "HomePageTestimonialBlock_stepBox__cSheU",
	"counter": "HomePageTestimonialBlock_counter__3M3Li",
	"darkCircle": "HomePageTestimonialBlock_darkCircle__DZ-IU",
	"topTestimonialBlock": "HomePageTestimonialBlock_topTestimonialBlock__1lnsy",
	"Moonpod": "HomePageTestimonialBlock_Moonpod__FpwDD",
	"minus": "HomePageTestimonialBlock_minus__2dIeS",
	"mobileReviewBox": "HomePageTestimonialBlock_mobileReviewBox__1BCHS",
	"nameDesignationBlock": "HomePageTestimonialBlock_nameDesignationBlock__2Ufpv",
	"reviewPopup": "HomePageTestimonialBlock_reviewPopup__3Djas"
};


/***/ }),

/***/ 8954:
/***/ (function(module) {

// Exports
module.exports = {
	"heroBanner": "heroBanner_heroBanner__VS4Cj",
	"heroBanner_innerWrapper": "heroBanner_heroBanner_innerWrapper__1DRmd",
	"leftBlock": "heroBanner_leftBlock__2J7rD",
	"bannerTitle": "heroBanner_bannerTitle__2hOUO",
	"bannerText": "heroBanner_bannerText__2_jSG",
	"rightBlock": "heroBanner_rightBlock__2syUo",
	"btnWrapper": "heroBanner_btnWrapper__391KO",
	"trialBtn": "heroBanner_trialBtn__SURxH",
	"videoPopup": "heroBanner_videoPopup__1kySp",
	"spanText": "heroBanner_spanText__14C8I",
	"rating": "heroBanner_rating__1uxAD",
	"ratedText": "heroBanner_ratedText__1P-vt",
	"rightBlockBoundary": "heroBanner_rightBlockBoundary__2Btrr",
	"boundaryRing": "heroBanner_boundaryRing__3Htnx",
	"mainImage": "heroBanner_mainImage__aAm6u",
	"dottedImage": "heroBanner_dottedImage__2yxCl",
	"baseBlockImage": "heroBanner_baseBlockImage__2tzG_",
	"triangleBox": "heroBanner_triangleBox__1p5N1",
	"messageIconBox": "heroBanner_messageIconBox__31Ybn",
	"darkBlueBlock": "heroBanner_darkBlueBlock__K0T2n",
	"messageEmitterBlock": "heroBanner_messageEmitterBlock__2N1l3",
	"user_one": "heroBanner_user_one__vQ-mE",
	"user_two": "heroBanner_user_two__1gi0O",
	"user_two_text_two": "heroBanner_user_two_text_two__1ytUS",
	"final_voyage_message": "heroBanner_final_voyage_message__1efkS"
};


/***/ }),

/***/ 9625:
/***/ (function(module) {

// Exports
module.exports = {
	"clientBlock": "homePageClientBlock_clientBlock__17y9j",
	"innerClientBlock": "homePageClientBlock_innerClientBlock__2MLKX",
	"clientLogoWrapper": "homePageClientBlock_clientLogoWrapper__1r6-q",
	"logoBlock": "homePageClientBlock_logoBlock__10J0P",
	"bleachTriangle": "homePageClientBlock_bleachTriangle__2-Odq",
	"clientThreeBox": "homePageClientBlock_clientThreeBox__1OYer"
};


/***/ }),

/***/ 6200:
/***/ (function(module) {

// Exports
module.exports = {
	"complianceBlock": "homePageCompliance_complianceBlock__XPqiY",
	"complianceWrapper": "homePageCompliance_complianceWrapper__2BD9O",
	"innerContent": "homePageCompliance_innerContent__39Sf6",
	"complianceTextBlock": "homePageCompliance_complianceTextBlock__166Xx",
	"iconBox": "homePageCompliance_iconBox__2jFGl",
	"innerIconBox": "homePageCompliance_innerIconBox__27oZq",
	"logoBlock": "homePageCompliance_logoBlock__P9-qY"
};


/***/ }),

/***/ 1873:
/***/ (function(module) {

// Exports
module.exports = {
	"featureBlock": "homePageFeatureBlock_featureBlock__1DbwK",
	"innerFeatureWrapper": "homePageFeatureBlock_innerFeatureWrapper__Na6Xw",
	"directionArrow": "homePageFeatureBlock_directionArrow__34haZ",
	"featureGrid": "homePageFeatureBlock_featureGrid__A61N6",
	"featureVideoWrapper": "homePageFeatureBlock_featureVideoWrapper__fgbn8",
	"videoIntroBlock": "homePageFeatureBlock_videoIntroBlock__2_gFX",
	"iconBox": "homePageFeatureBlock_iconBox__ugBXZ",
	"playBtn": "homePageFeatureBlock_playBtn__1jrhW",
	"stickyTag": "homePageFeatureBlock_stickyTag__1J3Lz",
	"toggleFeatureBlock": "homePageFeatureBlock_toggleFeatureBlock__3QMLg"
};


/***/ }),

/***/ 4997:
/***/ (function(module) {

// Exports
module.exports = {
	"serviceBlock": "homePageServiceBlock_serviceBlock__2wejj",
	"innerServiceBlock": "homePageServiceBlock_innerServiceBlock__18lfY",
	"serviceProgressBlock": "homePageServiceBlock_serviceProgressBlock__2heTD",
	"serviceProgressBar": "homePageServiceBlock_serviceProgressBar__2yF5d",
	"serviceWrapper": "homePageServiceBlock_serviceWrapper__3Doq4",
	"serviceBox": "homePageServiceBlock_serviceBox__3cI6C",
	"lefttextBox": "homePageServiceBlock_lefttextBox__Mnw3I",
	"rightImageBlock": "homePageServiceBlock_rightImageBlock__2bTBf",
	"imageWrap": "homePageServiceBlock_imageWrap__1H6OL",
	"mainImage": "homePageServiceBlock_mainImage__660it",
	"cornerImage": "homePageServiceBlock_cornerImage__hB1GL",
	"rightBottom": "homePageServiceBlock_rightBottom__1OAmI",
	"mobileOnly": "homePageServiceBlock_mobileOnly__111-A"
};


/***/ }),

/***/ 5739:
/***/ (function(module) {

// Exports
module.exports = {
	"statsBlock": "homePageStatsBlock_statsBlock__2xpE0",
	"innerStatsBlock": "homePageStatsBlock_innerStatsBlock__VCGY5",
	"keyStats": "homePageStatsBlock_keyStats__G1gCi",
	"iconDataBlock": "homePageStatsBlock_iconDataBlock__AiXr6",
	"imgIcon": "homePageStatsBlock_imgIcon__1XLok"
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

/***/ 9639:
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,472,482,81,192], function() { return __webpack_exec__(3789); });
module.exports = __webpack_exports__;

})();