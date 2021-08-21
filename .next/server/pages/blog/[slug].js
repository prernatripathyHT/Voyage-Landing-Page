(function() {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 1201:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_BlogPostPage; },
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
// EXTERNAL MODULE: ./components/css/blogPageMainArticle.module.css
var blogPageMainArticle_module = __webpack_require__(7426);
var blogPageMainArticle_module_default = /*#__PURE__*/__webpack_require__.n(blogPageMainArticle_module);
;// CONCATENATED MODULE: external "dateformat"
var external_dateformat_namespaceObject = require("dateformat");;
var external_dateformat_default = /*#__PURE__*/__webpack_require__.n(external_dateformat_namespaceObject);
;// CONCATENATED MODULE: ./components/BlogPageMainArticle.js




function BlogPostPage({
  currentPost
}) {
  //console.log("currentPost", currentPost[0])
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: (blogPageMainArticle_module_default()).articlePage,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: ` container ${(blogPageMainArticle_module_default()).mainArticle}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (blogPageMainArticle_module_default()).mainArticleImage,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: `https://sms-marketing-resources.ghost.io/${currentPost[0].feature_image}`
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `${(blogPageMainArticle_module_default()).mainArticleData}`,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (blogPageMainArticle_module_default()).topBar,
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: (blogPageMainArticle_module_default()).articleTag,
            children: "Thought Leadership"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["Published on ", external_dateformat_default()(`${currentPost[0].published_at}`, "d mmmm, yy")]
          }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
            width: "3",
            height: "4",
            viewBox: "0 0 3 4",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
              cx: "1.5",
              cy: "2",
              r: "1.5",
              fill: "#CBCBCB"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [currentPost[0].reading_time, " min read"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (blogPageMainArticle_module_default()).bodyContent,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: ` aos-init ${(blogPageMainArticle_module_default()).bodyTitle}`,
            "data-aos": "fade-up",
            "data-aos-duration": "1000",
            children: currentPost[0].title
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            dangerouslySetInnerHTML: {
              __html: currentPost[0].html
            },
            className: `${(blogPageMainArticle_module_default()).bodyHTML}`,
            "data-aos": "fade-up",
            "data-aos-duration": "1500"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (blogPageMainArticle_module_default()).socialIcons,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `${(blogPageMainArticle_module_default()).socialIcon_fb} ${(blogPageMainArticle_module_default()).socialIcon}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: `/images/voyage-blog-fb-icon.png`
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `${(blogPageMainArticle_module_default()).socialIcon_tw} ${(blogPageMainArticle_module_default()).socialIcon}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: `/images/voyage-blog-tw-icon.png`
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `${(blogPageMainArticle_module_default()).socialIcon_li} ${(blogPageMainArticle_module_default()).socialIcon}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: `/images/voyage-blog-li-icon.png`
            })
          })
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/css/blogArticlePageSignupBlock.module.css
var blogArticlePageSignupBlock_module = __webpack_require__(5770);
var blogArticlePageSignupBlock_module_default = /*#__PURE__*/__webpack_require__.n(blogArticlePageSignupBlock_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./services/index.js
var services = __webpack_require__(7482);
;// CONCATENATED MODULE: ./components/BlogArticlePageSignupBlock.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function BlogArticlePageSignupBlock() {
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
      emailErrorRef.current.textContent = "Invalid Email Address";
      return false;
    }

    emailErrorRef.current.textContent = "";
    setEmail("");

    try {
      const utm = (0,services/* getUtm */.PB)() || {};
      (0,services/* createOrUpdateRegistration */.jt)(_objectSpread({
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
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: (blogArticlePageSignupBlock_module_default()).signupBlock,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `container ${(blogArticlePageSignupBlock_module_default()).signupWrapper}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (blogArticlePageSignupBlock_module_default()).signupBox,
        "data-scroll": true,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Subscribe to the SMS Marketing Resources news letter"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (blogArticlePageSignupBlock_module_default()).description,
          children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin purus sed odio dignissim tincidunt."
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (blogArticlePageSignupBlock_module_default()).inputBox,
          children: [isSubmitted && /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: (blogArticlePageSignupBlock_module_default()).thankYou,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Great! Thanks so much for filling out our form. One of our amazing team members will reach out to you shortly!"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            id: "smailSignUpError",
            ref: emailErrorRef,
            className: (blogArticlePageSignupBlock_module_default()).emailError
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            id: (blogArticlePageSignupBlock_module_default()).inputWrapper,
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
              children: "Subscribe"
            })]
          })]
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./components/BlogPageBottomBlock.js
var BlogPageBottomBlock = __webpack_require__(1563);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./pages/blog/[slug].js












 //const {CONTENT_API_KEY, BLOG_URL} = process.env;

const CONTENT_API_KEY = 'c7bafa2c2c579763b605f57fb6';
const BLOG_URL = 'https://sms-marketing-resources.ghost.io/';

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
  const currentPostTags = key.queryKey[1].tags;
  console.log("current tag names : ", currentPostTags); //create a URL looping through all the tags

  const tagURL = currentPostTags.map(tag => `filter=tag:${tag}`);
  const tagQueryString = tagURL.join('&');
  const myURL = `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags&${tagQueryString}`;
  const res = await fetch(myURL);
  const newRes = res.json();
  return newRes;
};

function _slug_BlogPostPage({
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
  }); //console.log("related Posts are", relatedPosts, "status", status)

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
      }), /*#__PURE__*/jsx_runtime_.jsx(BlogPostPage, {
        currentPost: currentPost
      }), /*#__PURE__*/jsx_runtime_.jsx(BlogArticlePageSignupBlock, {}), /*#__PURE__*/jsx_runtime_.jsx(BlogPageBottomBlock/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {
        setFormState: setFormState
      })]
    })]
  });
}

/***/ }),

/***/ 5770:
/***/ (function(module) {

// Exports
module.exports = {
	"signupBlock": "blogArticlePageSignupBlock_signupBlock__olo8y",
	"signupWrapper": "blogArticlePageSignupBlock_signupWrapper__2dsmd",
	"signupBox": "blogArticlePageSignupBlock_signupBox__293Z1",
	"description": "blogArticlePageSignupBlock_description__2IkJa",
	"inputBox": "blogArticlePageSignupBlock_inputBox__CWyGt",
	"emailError": "blogArticlePageSignupBlock_emailError__1mAJb",
	"inputWrapper": "blogArticlePageSignupBlock_inputWrapper__3cByA",
	"thankYou": "blogArticlePageSignupBlock_thankYou__2KybE",
	"extraInfo": "blogArticlePageSignupBlock_extraInfo__1kl6a"
};


/***/ }),

/***/ 7426:
/***/ (function(module) {

// Exports
module.exports = {
	"articlePage": "blogPageMainArticle_articlePage__1AQ4O",
	"mainArticle": "blogPageMainArticle_mainArticle__ZUmM1",
	"socialIcons": "blogPageMainArticle_socialIcons__3PBiB",
	"socialIcon": "blogPageMainArticle_socialIcon__2t1Cu",
	"socialIcon_fb": "blogPageMainArticle_socialIcon_fb__3LHEN",
	"socialIcon_tw": "blogPageMainArticle_socialIcon_tw__2bpmW",
	"socialIcon_li": "blogPageMainArticle_socialIcon_li__3cOBo",
	"mainArticleImage": "blogPageMainArticle_mainArticleImage__6ahsc",
	"mainArticleData": "blogPageMainArticle_mainArticleData__StTe4",
	"topBar": "blogPageMainArticle_topBar__2oHwB",
	"bodyContent": "blogPageMainArticle_bodyContent__3x9x8",
	"bodyTitle": "blogPageMainArticle_bodyTitle__2AR-m",
	"bodyHTML": "blogPageMainArticle_bodyHTML__3UTuT"
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
var __webpack_exports__ = __webpack_require__.X(0, [664,472,482,81,563], function() { return __webpack_exec__(1201); });
module.exports = __webpack_exports__;

})();