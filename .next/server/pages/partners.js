(function() {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 3973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(5284);
// EXTERNAL MODULE: ./components/Footer.js + 1 modules
var Footer = __webpack_require__(9183);
// EXTERNAL MODULE: ./components/css/partnersPageHeroBanner.module.css
var partnersPageHeroBanner_module = __webpack_require__(9112);
var partnersPageHeroBanner_module_default = /*#__PURE__*/__webpack_require__.n(partnersPageHeroBanner_module);
;// CONCATENATED MODULE: ./components/PartnersPageHeroBanner.js



function PartnersPageHeroBanner() {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: (partnersPageHeroBanner_module_default()).heroBanner,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (partnersPageHeroBanner_module_default()).mainDiv,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `container ${(partnersPageHeroBanner_module_default()).heroBannerContainer}`,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (partnersPageHeroBanner_module_default()).leftBlock,
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            id: "homePageSubtext",
            className: (partnersPageHeroBanner_module_default()).bannerText,
            "data-scroll": true,
            children: "PARTNERS PAGE"
          }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
            id: "homePageTitle",
            className: (partnersPageHeroBanner_module_default()).bannerTitle,
            "data-scroll": true,
            children: "Lorem Ipsum dolor sit"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (partnersPageHeroBanner_module_default()).heroBannerBgElements,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
          width: "50",
          height: "110",
          viewBox: "0 0 50 110",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M0.583675 2.70299e-06L-47.9997 55L49.167 55L0.583675 2.70299e-06Z",
            fill: "#02D9FC"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M0.583675 55L-47.9997 110L49.167 110L0.583675 55Z",
            fill: "#02D9FC"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
          width: "271",
          height: "292",
          viewBox: "0 0 271 292",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
            opacity: "0.5",
            children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
              x: "49.9058",
              y: "232.762",
              width: "221.094",
              height: "58.6102",
              fill: "#405CFB"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M49.9027 247.85V291.515H0L49.9027 247.85Z",
              fill: "white"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M234.8 89.9389L270.653 119.371V-4H123.024V89.9389H234.8Z",
              fill: "#02D9FC"
            }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
              width: "98.4193",
              height: "29.1099",
              transform: "matrix(-1 0 0 1 148.319 185.01)",
              fill: "#162740"
            }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
              rx: "15.5946",
              ry: "15.2481",
              transform: "matrix(-1 0 0 1 79.3561 169.762)",
              fill: "#5BEBC1"
            }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
              width: "44.358",
              height: "9.01022",
              transform: "matrix(-1 0 0 1 92.8718 145.504)",
              fill: "#02D9FC"
            })]
          })
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/css/partnersPageFeaturedPosts.module.css
var partnersPageFeaturedPosts_module = __webpack_require__(9132);
var partnersPageFeaturedPosts_module_default = /*#__PURE__*/__webpack_require__.n(partnersPageFeaturedPosts_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/css/partnerItem.module.css
var partnerItem_module = __webpack_require__(3855);
var partnerItem_module_default = /*#__PURE__*/__webpack_require__.n(partnerItem_module);
;// CONCATENATED MODULE: ./components/PartnerItem.js





const PartnerItem = ({
  post
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/partner/[slug]",
    as: `/partner/${post.slug}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      className: `aos-init ${(partnerItem_module_default()).partnerItemLink}`,
      "data-aos": "fade-up",
      "data-aos-duration": "1000",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (partnerItem_module_default()).partnerItemImage,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: `${post.feature_image}`
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (partnerItem_module_default()).partnerItemDetails,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: (partnerItem_module_default()).partnerItemTitle,
          children: "AspireIQ"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: (partnerItem_module_default()).partnerItemExcerpt,
          children: [" ", post.excerpt, " "]
        })]
      })]
    })
  });
};

/* harmony default export */ var components_PartnerItem = (PartnerItem);
;// CONCATENATED MODULE: ./components/PartnersPageFeaturedPosts.js





function PartnersPageFeaturedPosts({
  posts
}) {
  // const [items, setItems] = useState([]);
  const {
    0: visible,
    1: setVisible
  } = (0,external_react_.useState)(5); // const featuredPosts = {posts};

  const noOfPosts = {
    posts
  }.posts.posts.length; // console.log("no. of all posts", noOfPosts)

  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 9);
  }; // useEffect(() => {
  //     setItems(featuredPosts.posts.posts);
  // }, []);
  // console.log("no. of visible blogs",visible)


  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: (partnersPageFeaturedPosts_module_default()).allPosts,
    className: (partnersPageFeaturedPosts_module_default()).allPosts,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `container ${(partnersPageFeaturedPosts_module_default()).sectionContainer}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (partnersPageFeaturedPosts_module_default()).allPostsContainer,
        children: {
          posts
        }.posts.posts.slice(0, visible).map(post => /*#__PURE__*/jsx_runtime_.jsx(components_PartnerItem, {
          post: post
        }, post.id))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (partnersPageFeaturedPosts_module_default()).buttonContainer,
        children: visible < 18 && /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: (partnersPageFeaturedPosts_module_default()).showMoreButton,
          onClick: showMoreItems,
          children: "Load More"
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/css/partnerPageTags.module.css
var partnerPageTags_module = __webpack_require__(7767);
var partnerPageTags_module_default = /*#__PURE__*/__webpack_require__.n(partnerPageTags_module);
;// CONCATENATED MODULE: ./components/PartnersPageTags.js




function PartnerPageTags() {
  const {
    0: tagActive,
    1: setTagActive
  } = (0,external_react_.useState)("technology");

  const handleTagClick = tag => {
    setTagActive(tag);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: (partnerPageTags_module_default()).tagFilteringSection,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `container ${(partnerPageTags_module_default()).sectionContainer}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (partnerPageTags_module_default()).tagContainer,
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: `${(partnerPageTags_module_default()).partnerTag} ${tagActive == "technology" ? (partnerPageTags_module_default()).tagActive : null} `,
          onClick: () => handleTagClick("technology"),
          children: "Technology partners"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: `${(partnerPageTags_module_default()).partnerTag} ${tagActive == "agency" ? (partnerPageTags_module_default()).tagActive : null} `,
          onClick: () => handleTagClick("agency"),
          children: "Agency partners"
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./components/css/partnersPageFilterSection.module.css
var partnersPageFilterSection_module = __webpack_require__(9664);
var partnersPageFilterSection_module_default = /*#__PURE__*/__webpack_require__.n(partnersPageFilterSection_module);
;// CONCATENATED MODULE: ./components/PartnersPageFilterSection.js



function PartnersPageFilterSection() {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: (partnersPageFilterSection_module_default()).filterSection,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `container ${(partnersPageFilterSection_module_default()).sectionContainer}`,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (partnersPageFilterSection_module_default()).topSection,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (partnersPageFilterSection_module_default()).filterHeader,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: "Filter"
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: (partnersPageFilterSection_module_default()).filterResetBtn,
            children: "Reset"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (partnersPageFilterSection_module_default()).searchDiv,
          children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
            width: "18",
            height: "19",
            viewBox: "0 0 18 19",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M17.8594 16.7383L13.6055 12.4844C13.5 12.4141 13.3945 12.3438 13.2891 12.3438H12.832C13.9219 11.0781 14.625 9.39062 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9.14062 14.875 10.793 14.207 12.0938 13.1172V13.5742C12.0938 13.6797 12.1289 13.7852 12.1992 13.8906L16.4531 18.1445C16.6289 18.3203 16.9102 18.3203 17.0508 18.1445L17.8594 17.3359C18.0352 17.1953 18.0352 16.9141 17.8594 16.7383ZM7.3125 13.1875C4.18359 13.1875 1.6875 10.6914 1.6875 7.5625C1.6875 4.46875 4.18359 1.9375 7.3125 1.9375C10.4062 1.9375 12.9375 4.46875 12.9375 7.5625C12.9375 10.6914 10.4062 13.1875 7.3125 13.1875Z",
              fill: "black"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            placeholder: "Search by title or any keyword",
            onChange: e => filterTitles(e.target.value)
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (partnersPageFilterSection_module_default()).categoryDiv,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: "Category"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (partnersPageFilterSection_module_default()).filterCategories,
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              id: "test",
              type: "checkbox",
              name: "test",
              value: "test"
            }), /*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "test",
              children: " E-commerce Platform "
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (partnersPageFilterSection_module_default()).bottomSection,
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Can't find the integration you're looking for?"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Request an Integration"
          }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
            width: "25",
            height: "12",
            viewBox: "0 0 25 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z",
              fill: "#3F5CFB"
            })
          })]
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/RequestForm.js + 1 modules
var RequestForm = __webpack_require__(7081);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./pages/partners/index.js












 // const {CONTENT_API_KEY, BLOG_URL} = process.env;

const CONTENT_API_KEY = 'c7bafa2c2c579763b605f57fb6';
const BLOG_URL = 'https://sms-marketing-resources.ghost.io/'; //partners - test....
// const CONTENT_API_KEY = 'aaa306c021fcc68977d6d9b03f';
// const BLOG_URL = 'https://yash-dev-2k21.ghost.io/';

const getStaticProps = async () => {
  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags`);
  const posts = await res.json();
  return {
    props: {
      posts
    }
  };
};

const getFeaturedPosts = () => {
  return fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags&filter=featured:true`).then(res => res.json());
};

const getFilteredPosts = async key => {
  const tagName = key.queryKey[1].tag; // console.log("current tag name : ", tagName);

  if (tagName) {
    //if tags are present - this is where we are going to filter the posts
    const myURL = `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags&filter=tag:[${tagName}]`; //console.log("URL ", myURL)

    const res = await fetch(myURL);
    const newRes = res.json();
    return newRes;
  }

  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags`);
  return res.json();
};

const getFilteredPostsWithSearch = async key => {
  console.log("current Key", key);
  const searchTitle = key.queryKey[1].search;

  if (searchTitle) {
    const myURL = `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags&filter=slug:'${searchTitle}'`;
    const res = await fetch(myURL);
    const newRes = res.json();
    return newRes;
  }

  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags`);
  return res.json();
};

function Home({
  posts
}) {
  const {
    0: formState,
    1: setFormState
  } = (0,external_react_.useState)("close");
  const {
    0: tagName,
    1: setTagName
  } = (0,external_react_.useState)('');
  const {
    0: searchTerm,
    1: setSearchTerm
  } = (0,external_react_.useState)(''); //For filtering with TAGS

  const queryClient = (0,external_react_query_.useQueryClient)();
  const {
    isLoading,
    data: filteredPosts,
    status
  } = (0,external_react_query_.useQuery)(['filtered posts', {
    tag: tagName
  }], getFilteredPosts, {
    initialData: posts
  }); //to remove the loading page add the initialdata value here
  // console.log("filteredPosts are", filteredPosts, "status", status);

  if (isLoading) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "App",
      children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
        style: {
          width: "100vw",
          height: "100vh",
          opacity: ".5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: "fetching posts..."
      })
    });
  }

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
      }), /*#__PURE__*/jsx_runtime_.jsx(PartnersPageHeroBanner, {}), /*#__PURE__*/jsx_runtime_.jsx(PartnersPageFilterSection, {}), /*#__PURE__*/jsx_runtime_.jsx(PartnerPageTags, {}), /*#__PURE__*/jsx_runtime_.jsx(PartnersPageFeaturedPosts, {
        posts: posts
      }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {
        setFormState: setFormState
      })]
    })]
  });
}

/***/ }),

/***/ 3855:
/***/ (function(module) {

// Exports
module.exports = {
	"partnerItemLink": "partnerItem_partnerItemLink__1ktB7",
	"partnerItemImage": "partnerItem_partnerItemImage__3gno2",
	"partnerItemDetails": "partnerItem_partnerItemDetails__20LYb",
	"partnerItemTitle": "partnerItem_partnerItemTitle__1oZfx",
	"partnerItemExcerpt": "partnerItem_partnerItemExcerpt__13TNA"
};


/***/ }),

/***/ 7767:
/***/ (function(module) {

// Exports
module.exports = {
	"sectionContainer": "partnerPageTags_sectionContainer__2l47k",
	"tagContainer": "partnerPageTags_tagContainer__23XRq",
	"partnerTag": "partnerPageTags_partnerTag__3aWhl",
	"tagActive": "partnerPageTags_tagActive__WhGli"
};


/***/ }),

/***/ 9132:
/***/ (function(module) {

// Exports
module.exports = {
	"allPosts": "partnersPageFeaturedPosts_allPosts__rxO6h",
	"sectionContainer": "partnersPageFeaturedPosts_sectionContainer__2E_E0",
	"allPostsContainer": "partnersPageFeaturedPosts_allPostsContainer__BvkiW",
	"buttonContainer": "partnersPageFeaturedPosts_buttonContainer__BB92h",
	"showMoreButton": "partnersPageFeaturedPosts_showMoreButton__11ZuJ"
};


/***/ }),

/***/ 9664:
/***/ (function(module) {

// Exports
module.exports = {
	"filterSection": "partnersPageFilterSection_filterSection__1_QJV",
	"topSection": "partnersPageFilterSection_topSection__39Cqt",
	"filterHeader": "partnersPageFilterSection_filterHeader__fAMPy",
	"filterResetBtn": "partnersPageFilterSection_filterResetBtn__32uEu",
	"searchDiv": "partnersPageFilterSection_searchDiv__3UdWp",
	"categoryDiv": "partnersPageFilterSection_categoryDiv__LBgRW",
	"filterCategories": "partnersPageFilterSection_filterCategories__14KTM",
	"bottomSection": "partnersPageFilterSection_bottomSection__2RZb0"
};


/***/ }),

/***/ 9112:
/***/ (function(module) {

// Exports
module.exports = {
	"heroBanner": "partnersPageHeroBanner_heroBanner__35d3O",
	"mainDiv": "partnersPageHeroBanner_mainDiv__rPc7f",
	"heroBannerBgElements": "partnersPageHeroBanner_heroBannerBgElements__3nz8q",
	"heroBannerContainer": "partnersPageHeroBanner_heroBannerContainer__3XEtD",
	"leftBlock": "partnersPageHeroBanner_leftBlock__31AA2",
	"bannerText": "partnersPageHeroBanner_bannerText__2UH6T",
	"bannerTitle": "partnersPageHeroBanner_bannerTitle__3Xe06"
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

/***/ 2585:
/***/ (function(module) {

"use strict";
module.exports = require("react-query");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,472,482,81], function() { return __webpack_exec__(3973); });
module.exports = __webpack_exports__;

})();