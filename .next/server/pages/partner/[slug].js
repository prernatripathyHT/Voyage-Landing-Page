(function() {
var exports = {};
exports.id = 49;
exports.ids = [49];
exports.modules = {

/***/ 971:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ BlogPostPage; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(5284);
// EXTERNAL MODULE: ./components/Footer.js + 1 modules
var Footer = __webpack_require__(9183);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/RequestForm.js + 1 modules
var RequestForm = __webpack_require__(7081);
// EXTERNAL MODULE: ./components/css/partnerPageMainArticle.module.css
var partnerPageMainArticle_module = __webpack_require__(7011);
var partnerPageMainArticle_module_default = /*#__PURE__*/__webpack_require__.n(partnerPageMainArticle_module);
;// CONCATENATED MODULE: ./components/PartnerPageMainArticle.js



function PartnerPageMainArticle({
  currentPost
}) {
  //console.log("currentPost", currentPost[0])
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: (partnerPageMainArticle_module_default()).articlePage,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: ` container ${(partnerPageMainArticle_module_default()).mainArticle}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (partnerPageMainArticle_module_default()).leftBlock,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          dangerouslySetInnerHTML: {
            __html: currentPost[0].html
          },
          className: `${(partnerPageMainArticle_module_default()).mainArticleBody}`
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (partnerPageMainArticle_module_default()).rightBlock,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          dangerouslySetInnerHTML: {
            __html: currentPost[0].codeinjection_foot
          },
          className: `${(partnerPageMainArticle_module_default()).codeInjectionFoot}`
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/css/partnerPageHeroBanner.module.css
var partnerPageHeroBanner_module = __webpack_require__(2514);
var partnerPageHeroBanner_module_default = /*#__PURE__*/__webpack_require__.n(partnerPageHeroBanner_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/PartnerPageHeroBanner.js




function PartnerPageHeroBanner({
  currentPost
}) {
  //console.log("partner hero banner post: ", currentPost)
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: (partnerPageHeroBanner_module_default()).heroBanner,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (partnerPageHeroBanner_module_default()).mainDiv,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `container ${(partnerPageHeroBanner_module_default()).heroBannerContainer}`,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (partnerPageHeroBanner_module_default()).leftBlock,
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/partners",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: (partnerPageHeroBanner_module_default()).backToDirectoryLink,
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                  width: "18",
                  height: "10",
                  viewBox: "0 0 18 10",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "M17 5.65C17.359 5.65 17.65 5.35899 17.65 5C17.65 4.64101 17.359 4.35 17 4.35V5.65ZM0.54038 4.54038C0.286539 4.79422 0.286539 5.20578 0.54038 5.45962L4.67696 9.59619C4.9308 9.85003 5.34235 9.85003 5.59619 9.59619C5.85003 9.34235 5.85003 8.9308 5.59619 8.67696L1.91924 5L5.59619 1.32304C5.85003 1.0692 5.85003 0.657647 5.59619 0.403806C5.34235 0.149965 4.9308 0.149965 4.67696 0.403806L0.54038 4.54038ZM17 4.35L1 4.35V5.65L17 5.65V4.35Z",
                    fill: "white"
                  })
                })
              }), "Back to directory"]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (partnerPageHeroBanner_module_default()).partnerInfo,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (partnerPageHeroBanner_module_default()).partnerLogo,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: `${currentPost[0].feature_image}`
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (partnerPageHeroBanner_module_default()).partnerDetails,
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                children: currentPost[0].title
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                dangerouslySetInnerHTML: {
                  __html: currentPost[0].codeinjection_head
                },
                className: `${(partnerPageHeroBanner_module_default()).codeInjectionHead}`,
                "data-aos": "fade-up",
                "data-aos-duration": "1500"
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (partnerPageHeroBanner_module_default()).heroBannerBgElements,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
          width: "50",
          height: "110",
          viewBox: "0 0 50 110",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M0.583187 2.70299e-06L-48.0002 55L49.1665 55L0.583187 2.70299e-06Z",
            fill: "#02D9FC"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M0.583187 55L-48.0002 110L49.1665 110L0.583187 55Z",
            fill: "#02D9FC"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
          width: "398",
          height: "419",
          viewBox: "0 0 398 419",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
            opacity: "0.5",
            children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
              x: "73.9312",
              y: "332.913",
              width: "323.956",
              height: "85.878",
              fill: "#405CFB"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M73.9261 355.02V419H0.806641L73.9261 355.02Z",
              fill: "white"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M344.543 127.16L397 167V0H181V127.16H344.543Z",
              fill: "#02D9FC"
            }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
              width: "144.208",
              height: "42.653",
              transform: "matrix(-1 0 0 1 218.129 264.411)",
              fill: "#162740"
            }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
              rx: "22.8498",
              ry: "22.3421",
              transform: "matrix(-1 0 0 1 117.083 242.068)",
              fill: "#5BEBC1"
            }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
              width: "64.9951",
              height: "13.2021",
              transform: "matrix(-1 0 0 1 136.886 206.525)",
              fill: "#02D9FC"
            })]
          })
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/BlogPageBottomBlock.js
var BlogPageBottomBlock = __webpack_require__(1563);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./pages/partner/[slug].js











 //const {CONTENT_API_KEY, BLOG_URL} = process.env;

const CONTENT_API_KEY = 'c7bafa2c2c579763b605f57fb6';
const BLOG_URL = 'https://sms-marketing-resources.ghost.io/'; //partners - test....
// const CONTENT_API_KEY = 'aaa306c021fcc68977d6d9b03f';
// const BLOG_URL = 'https://yash-dev-2k21.ghost.io/';

function getPost(slug) {
  const urls = [`${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&include=authors,tags`, `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags`];
  const allRequest = urls.map(url => fetch(url).then(response => response.json()));
  return Promise.all(allRequest);
}

const getStaticProps = async ({
  params
}) => {
  // const {allPosts, currentPost} = getPost(params.slug);
  const allPosts = await getPost(params.slug).then(responses => {
    return responses;
  });
  return {
    props: {
      posts: allPosts[1].posts,
      currentPost: allPosts[0].posts
    }
  };
};
const getStaticPaths = async () => {
  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`);
  const posts = await res.json();
  const ids = posts.posts.map(post => post.slug);
  const paths = ids.map(slug => ({
    params: {
      slug: slug.toString()
    }
  }));
  return {
    paths,
    fallback: false
  };
};

const getRelatedPosts = async key => {
  const currentPostTags = key.queryKey[1].tags; //console.log("current tag names : ", currentPostTags);
  //create a URL looping through all the tags

  const tagURL = currentPostTags.map(tag => `filter=tag:${tag}`);
  const tagQueryString = tagURL.join('&');
  const myURL = `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags&${tagQueryString}`;
  const res = await fetch(myURL);
  const newRes = res.json();
  return newRes;
};

function BlogPostPage({
  posts,
  currentPost
}) {
  const {
    0: allRelatedPosts,
    1: setAllPosts
  } = (0,external_react_.useState)({
    posts
  });
  const {
    0: formState,
    1: setFormState
  } = (0,external_react_.useState)("close"); //filter the posts based on the tag/category

  var currentPostTags = currentPost[0].tags.map(tag => {
    return tag.slug;
  }); //create a query to fetch Related posts based on tags

  const queryClient = (0,external_react_query_.useQueryClient)();
  const {
    isLoading,
    data: relatedPosts,
    status
  } = (0,external_react_query_.useQuery)(['filtered posts', {
    tags: currentPostTags
  }], getRelatedPosts, {
    initialData: allRelatedPosts
  }); //console.log("related Posts are", relatedPosts.posts.filter(post => post.id != currentPost[0].id), "status", status)

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
        children: "Loading Blog..."
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
      }), /*#__PURE__*/jsx_runtime_.jsx(PartnerPageHeroBanner, {
        currentPost: currentPost
      }), /*#__PURE__*/jsx_runtime_.jsx(PartnerPageMainArticle, {
        currentPost: currentPost
      }), /*#__PURE__*/jsx_runtime_.jsx(BlogPageBottomBlock/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {
        setFormState: setFormState
      })]
    })]
  });
}

/***/ }),

/***/ 2514:
/***/ (function(module) {

// Exports
module.exports = {
	"heroBanner": "partnerPageHeroBanner_heroBanner__30zZ1",
	"mainDiv": "partnerPageHeroBanner_mainDiv__UEcom",
	"heroBannerBgElements": "partnerPageHeroBanner_heroBannerBgElements__2HoCG",
	"heroBannerContainer": "partnerPageHeroBanner_heroBannerContainer__2afA2",
	"leftBlock": "partnerPageHeroBanner_leftBlock__D5s1V",
	"backToDirectoryLink": "partnerPageHeroBanner_backToDirectoryLink__1NVso",
	"partnerInfo": "partnerPageHeroBanner_partnerInfo__2O8Dr",
	"partnerLogo": "partnerPageHeroBanner_partnerLogo__24bXf",
	"partnerDetails": "partnerPageHeroBanner_partnerDetails__Kjkc3",
	"codeInjectionHead": "partnerPageHeroBanner_codeInjectionHead__29JuB"
};


/***/ }),

/***/ 7011:
/***/ (function(module) {

// Exports
module.exports = {
	"mainArticle": "partnerPageMainArticle_mainArticle__GnBaI",
	"leftBlock": "partnerPageMainArticle_leftBlock__1EkKH",
	"mainArticleBody": "partnerPageMainArticle_mainArticleBody__2DmbC",
	"rightBlock": "partnerPageMainArticle_rightBlock__3Ihsv",
	"codeInjectionFoot": "partnerPageMainArticle_codeInjectionFoot__2ptZ4"
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,472,482,81,563], function() { return __webpack_exec__(971); });
module.exports = __webpack_exports__;

})();