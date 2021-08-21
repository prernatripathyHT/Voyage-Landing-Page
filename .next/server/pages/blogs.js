(function() {
var exports = {};
exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 1144:
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
// EXTERNAL MODULE: ./components/css/blogPageTagFilteringBlock.module.css
var blogPageTagFilteringBlock_module = __webpack_require__(8804);
var blogPageTagFilteringBlock_module_default = /*#__PURE__*/__webpack_require__.n(blogPageTagFilteringBlock_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "lodash.debounce"
var external_lodash_debounce_namespaceObject = require("lodash.debounce");;
var external_lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(external_lodash_debounce_namespaceObject);
;// CONCATENATED MODULE: ./components/BlogPageTagFilteringBlock.js






function BlogPageFilteringBlock({
  posts,
  handleTagClick,
  handleSearch
}) {
  const {
    0: filteredTitles,
    1: setFilteredTitles
  } = (0,external_react_.useState)([]);
  const {
    0: searchValue,
    1: setSearchValue
  } = (0,external_react_.useState)(''); //debouncing the search term displayed 
  // const debouncedSave = debounce(() => setSearchValue(searchVal), 1000 )

  const debouncedSave = (0,external_react_.useCallback)(external_lodash_debounce_default()(searchVal => setSearchValue(searchVal), 500), []);

  const filterTitles = searchVal => {
    //console.log("search val is", searchVal);
    debouncedSave(searchVal);
    const filteredTitles = posts.posts.filter(val => {
      return val.title.toLowerCase().includes(searchVal.toLowerCase());
    });

    if (searchVal == "") {
      setFilteredTitles([]);
    } else {
      setFilteredTitles(filteredTitles);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: (blogPageTagFilteringBlock_module_default()).tagFilteringSection,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `container ${(blogPageTagFilteringBlock_module_default()).filterSearchDiv}`,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (blogPageTagFilteringBlock_module_default()).SearchDiv,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (blogPageTagFilteringBlock_module_default()).searchIcon,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z",
              fill: "black"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M19.7617 18.6121L15.1005 13.9509C14.7829 13.6332 14.2685 13.6332 13.9509 13.9509C13.6332 14.2682 13.6332 14.7831 13.9509 15.1005L18.6121 19.7617C18.7709 19.9205 18.9788 19.9999 19.1869 19.9999C19.3948 19.9999 19.6029 19.9205 19.7617 19.7617C20.0794 19.4444 20.0794 18.9295 19.7617 18.6121Z",
              fill: "black"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          placeholder: "Search by title or any keyword",
          onChange: e => filterTitles(e.target.value)
        }), filteredTitles.length != 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (blogPageTagFilteringBlock_module_default()).searchBoxTitles,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: (blogPageTagFilteringBlock_module_default()).searchBoxHeader,
            children: ["Showing Blogs related to ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: ["\"", searchValue, "\""]
            })]
          }), filteredTitles.slice(0, 10).map((post, index) => {
            return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/blog/[slug]",
              as: `/blog/${post.slug}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: (blogPageTagFilteringBlock_module_default()).postTitles,
                  children: post.title
                })
              })
            }, index);
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (blogPageTagFilteringBlock_module_default()).FilterDiv,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (blogPageTagFilteringBlock_module_default()).postTags,
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            onClick: () => handleTagClick(null),
            children: "All"
          })
        }), posts.posts.map((post, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (blogPageTagFilteringBlock_module_default()).postTags,
          children: post.tags.map((tag, index) => /*#__PURE__*/jsx_runtime_.jsx("p", {
            onClick: () => handleTagClick(tag.slug),
            children: tag.name
          }, index))
        }, index))]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./data/BlogPageHeroBanner.js
const BlogPageHeroBannerData = {
  titleText: "SMS Marketing Resources",
  subHeading: "BLOG"
};
// EXTERNAL MODULE: ./components/css/blogPageHeroBanner.module.css
var blogPageHeroBanner_module = __webpack_require__(31);
var blogPageHeroBanner_module_default = /*#__PURE__*/__webpack_require__.n(blogPageHeroBanner_module);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(9015);
;// CONCATENATED MODULE: ./components/BlogPageHeroBanner.js







function BlogPageHeroBanner({
  posts
}) {
  //console.log("voyage posts", {posts})
  const post = {
    posts
  };
  const featuredPost = post.posts.posts[1]; //console.log("featured post", featuredPost)

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    id: (blogPageHeroBanner_module_default()).heroBanner,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `container ${(blogPageHeroBanner_module_default()).heroBannerContainer}`,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (blogPageHeroBanner_module_default()).leftBlock,
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          id: "homePageSubtext",
          className: (blogPageHeroBanner_module_default()).bannerText,
          "data-scroll": true,
          children: BlogPageHeroBannerData.subHeading
        }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
          id: "homePageTitle",
          className: (blogPageHeroBanner_module_default()).bannerTitle,
          "data-scroll": true,
          children: BlogPageHeroBannerData.titleText
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (blogPageHeroBanner_module_default()).rightBlock,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/blog/[slug]",
          as: `/blog/${featuredPost.slug}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: (blogPageHeroBanner_module_default()).featuredLink,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (blogPageHeroBanner_module_default()).featuredImage,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: `https://sms-marketing-resources.ghost.io/${featuredPost.feature_image}`
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (blogPageHeroBanner_module_default()).featuredBlogDetails,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (blogPageHeroBanner_module_default()).featuredTagAndTime,
                children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Thought Leadership"
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
                  children: [featuredPost.reading_time, " min read"]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                className: (blogPageHeroBanner_module_default()).featuredTitle,
                children: featuredPost.title
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                className: (blogPageHeroBanner_module_default()).featuredExcerpt,
                children: [" ", featuredPost.excerpt, " "]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                className: (blogPageHeroBanner_module_default()).featuredReadMore,
                children: ["READ MORE", /*#__PURE__*/jsx_runtime_.jsx("svg", {
                  width: "7",
                  height: "12",
                  viewBox: "0 0 7 12",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                    opacity: "0.5",
                    d: "M6.3441 6.3293L0.793749 11.8643C0.611898 12.0455 0.317478 12.0452 0.135932 11.8634C-0.0454738 11.6815 -0.0450051 11.3869 0.136869 11.2055L5.35685 5.99998L0.136682 0.794436C-0.0451692 0.613031 -0.045638 0.318633 0.135744 0.136759C0.226752 0.0455875 0.345978 1.90735e-06 0.465204 1.90735e-06C0.584125 1.90735e-06 0.702883 0.0452824 0.793726 0.135821L6.3441 5.67068C6.43169 5.75782 6.48084 5.87642 6.48084 5.99998C6.48084 6.12354 6.43155 6.24199 6.3441 6.3293Z",
                    fill: "white"
                  })
                })]
              })]
            })]
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (blogPageHeroBanner_module_default()).heroBannerBgElements,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
        width: "50",
        height: "110",
        viewBox: "0 0 50 110",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M0.583553 2.70299e-06L-47.9998 55L49.1669 55L0.583553 2.70299e-06Z",
          fill: "#02D9FC"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M0.583553 55L-47.9998 110L49.1669 110L0.583553 55Z",
          fill: "#02D9FC"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        width: "467",
        height: "504",
        viewBox: "0 0 467 504",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
          opacity: "0.5",
          children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
            x: "86",
            y: "403",
            width: "381",
            height: "101",
            fill: "#405CFB"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M85.9946 429V504.246H-0.000244141L85.9946 429Z",
            fill: "white"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M404.618 156.88L466.402 207.598V-5H212V156.88H404.618Z",
            fill: "#02D9FC"
          }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
            width: "169.601",
            height: "50.1637",
            transform: "matrix(-1 0 0 1 255.591 322.435)",
            fill: "#162740"
          }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
            rx: "26.8734",
            ry: "26.2762",
            transform: "matrix(-1 0 0 1 136.75 296.159)",
            fill: "#5BEBC1"
          }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
            width: "76.4399",
            height: "15.5269",
            transform: "matrix(-1 0 0 1 160.041 254.355)",
            fill: "#02D9FC"
          })]
        })
      })]
    })]
  });
}
// EXTERNAL MODULE: ./components/css/blogPageFeaturedPosts.module.css
var blogPageFeaturedPosts_module = __webpack_require__(8810);
var blogPageFeaturedPosts_module_default = /*#__PURE__*/__webpack_require__.n(blogPageFeaturedPosts_module);
// EXTERNAL MODULE: ./components/css/blogItem.module.css
var blogItem_module = __webpack_require__(5619);
var blogItem_module_default = /*#__PURE__*/__webpack_require__.n(blogItem_module);
;// CONCATENATED MODULE: ./components/BlogItem.js





const BlogItem = ({
  post
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/blog/[slug]",
    as: `/blog/${post.slug}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      className: `aos-init ${(blogItem_module_default()).blogItemLink}`,
      "data-aos": "fade-up",
      "data-aos-duration": "1000",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (blogItem_module_default()).blogItemImage,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: `https://sms-marketing-resources.ghost.io/${post.feature_image}`
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (blogItem_module_default()).blogItemDetails,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (blogItem_module_default()).blogItemTagAndTime,
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Thought Leadership"
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
            children: [post.reading_time, " min read"]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: (blogItem_module_default()).blogItemTitle,
          children: post.title
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: (blogItem_module_default()).blogItemExcerpt,
          children: [" ", post.excerpt, " "]
        })]
      })]
    })
  });
};

/* harmony default export */ var components_BlogItem = (BlogItem);
;// CONCATENATED MODULE: ./components/BlogPageFeaturedPosts.js



function BlogPageFeaturedPosts({
  posts
}) {
  //console.log("posts inside featured component", posts)
  const featuredPosts = {
    posts
  };
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: (blogPageFeaturedPosts_module_default()).featuredPosts,
    className: (blogPageFeaturedPosts_module_default()).featuredPosts,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (blogPageFeaturedPosts_module_default()).featuredPostsContainer,
        children: featuredPosts.posts.posts.slice(0, 6).map(post => /*#__PURE__*/jsx_runtime_.jsx(components_BlogItem, {
          post: post
        }, post.id))
      })
    })
  });
}
// EXTERNAL MODULE: ./components/css/blogPageSignupBlock.module.css
var blogPageSignupBlock_module = __webpack_require__(4050);
var blogPageSignupBlock_module_default = /*#__PURE__*/__webpack_require__.n(blogPageSignupBlock_module);
// EXTERNAL MODULE: ./services/index.js
var services = __webpack_require__(7482);
;// CONCATENATED MODULE: ./components/BlogPageSignupBlock.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function BlogPageSignupBlock() {
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
    className: (blogPageSignupBlock_module_default()).signupBlock,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `container ${(blogPageSignupBlock_module_default()).signupWrapper}`,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (blogPageSignupBlock_module_default()).signupBlockBgElements,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
          width: "42",
          height: "62",
          viewBox: "0 0 42 62",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M4.59404 15.0484L19.6185 0.0239234L34.6424 15.0478L4.59404 15.0484Z",
            fill: "#02D9FC"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M4.35771 29.9996L19.3822 14.9751L34.4061 29.999L4.35771 29.9996Z",
            fill: "#02D9FC"
          }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
            cx: "20.037",
            cy: "45.5094",
            r: "15.5716",
            fill: "#5AEBC0"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
          width: "53",
          height: "45",
          viewBox: "0 0 53 45",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M40.1285 34.2646L53 45V0H0V34.2646H40.1285Z",
            fill: "#02D9FC"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
          width: "66",
          height: "34",
          viewBox: "0 0 66 34",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M-0.000122137 33.2474L33.2474 -7.66688e-05L66.4936 33.2461L-0.000122137 33.2474Z",
            fill: "#58EDC0"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: `/images/blog-signup-vector-2.svg`
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: `/images/blog-signup-vector-1.svg`
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (blogPageSignupBlock_module_default()).blogPageSignupBox,
        "data-scroll": true,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Subscribe to the SMS Marketing Resources news letter"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (blogPageSignupBlock_module_default()).blogPageInputBox,
          children: [isSubmitted && /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: (blogPageSignupBlock_module_default()).thankYou,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Great! Thanks so much for filling out our form. One of our amazing team members will reach out to you shortly!"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            id: "smailSignUpError",
            ref: emailErrorRef,
            className: (blogPageSignupBlock_module_default()).emailError
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            id: (blogPageSignupBlock_module_default()).inputWrapper,
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
              children: "SUBSCRIBE"
            })]
          })]
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/css/blogPageAllPosts.module.css
var blogPageAllPosts_module = __webpack_require__(6874);
var blogPageAllPosts_module_default = /*#__PURE__*/__webpack_require__.n(blogPageAllPosts_module);
;// CONCATENATED MODULE: ./components/BlogPageAllPosts.js





function BlogPageAllPosts({
  posts
}) {
  const {
    0: items,
    1: setItems
  } = (0,external_react_.useState)([]);
  const {
    0: visible,
    1: setVisible
  } = (0,external_react_.useState)(9);
  const featuredPosts = {
    posts
  };

  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 9);
  };

  (0,external_react_.useEffect)(() => {
    setItems(featuredPosts.posts.posts);
  }, []); // console.log("no. of visibke blogs",visible)

  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: (blogPageAllPosts_module_default()).allPosts,
    className: (blogPageAllPosts_module_default()).allPosts,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `container ${(blogPageAllPosts_module_default()).sectionContainer}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (blogPageAllPosts_module_default()).allPostsContainer,
        children: items.slice(6, visible).map(post => /*#__PURE__*/jsx_runtime_.jsx(components_BlogItem, {
          post: post
        }, post.id))
      }), visible < 18 && /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: (blogPageAllPosts_module_default()).showMoreButton,
        onClick: showMoreItems,
        children: "Load More"
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/BlogPageBottomBlock.js
var BlogPageBottomBlock = __webpack_require__(1563);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/RequestForm.js + 1 modules
var RequestForm = __webpack_require__(7081);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./pages/blogs/index.js














 //const {CONTENT_API_KEY, BLOG_URL} = process.env;

const CONTENT_API_KEY = 'c7bafa2c2c579763b605f57fb6';
const BLOG_URL = 'https://sms-marketing-resources.ghost.io/';
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
  const tagName = key.queryKey[1].tag; //console.log("current tag name : ", key);

  if (tagName) {
    //if tags are present - this is where we are going to filter the posts
    const myURL = `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags&filter=tag:${tagName}`;
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
  } = (0,external_react_.useState)(''); //REACT - QUERY : Featured Posts in the Hero Banner
  //const {data:featuredPosts,error} = useQuery(['featured posts'], () => getFeaturedPosts());
  //console.log("featuredPosts", featuredPosts);
  //For filtering with TAGS

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
  //console.log("filteredPosts are", filteredPosts.posts.length, "status", status);
  //For filtering with SEARCH
  // const {data:filteredPostsWithSearch} = useQuery(['search filter', {search: searchTitle},], getFilteredPostsWithSearch)
  // console.log("search posts with new search", filteredPostsWithSearch);

  var allPosts = filteredPosts; // Filter the posts based on SEARCH-TERM
  //  allPosts = filteredPosts.posts.filter(val => {
  //   if(searchTerm === ""){
  //     return val
  //   } else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
  //     return val
  //   }
  // })
  //console.log("all posts after search", allPosts);

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
      }), /*#__PURE__*/jsx_runtime_.jsx(BlogPageHeroBanner, {
        posts: posts
      }), /*#__PURE__*/jsx_runtime_.jsx(BlogPageFilteringBlock, {
        posts: posts,
        handleTagClick: setTagName,
        handleSearch: setSearchTerm
      }), /*#__PURE__*/jsx_runtime_.jsx(BlogPageFeaturedPosts, {
        posts: allPosts
      }), /*#__PURE__*/jsx_runtime_.jsx(BlogPageSignupBlock, {}), allPosts.posts.length > 6 && /*#__PURE__*/jsx_runtime_.jsx(BlogPageAllPosts, {
        posts: allPosts
      }), /*#__PURE__*/jsx_runtime_.jsx(BlogPageBottomBlock/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {
        setFormState: setFormState
      })]
    })]
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

/***/ 6874:
/***/ (function(module) {

// Exports
module.exports = {
	"allPosts": "blogPageAllPosts_allPosts__1JL0M",
	"sectionContainer": "blogPageAllPosts_sectionContainer__2WGNU",
	"allPostsContainer": "blogPageAllPosts_allPostsContainer__3uipj",
	"showMoreButton": "blogPageAllPosts_showMoreButton__1GwQF"
};


/***/ }),

/***/ 8810:
/***/ (function(module) {

// Exports
module.exports = {
	"featuredPosts": "blogPageFeaturedPosts_featuredPosts__mk8jR",
	"featuredPostsContainer": "blogPageFeaturedPosts_featuredPostsContainer__3ZLsG"
};


/***/ }),

/***/ 31:
/***/ (function(module) {

// Exports
module.exports = {
	"heroBanner": "blogPageHeroBanner_heroBanner__1LbO6",
	"heroBannerBgElements": "blogPageHeroBanner_heroBannerBgElements__165Iy",
	"heroBannerContainer": "blogPageHeroBanner_heroBannerContainer__2zOgH",
	"leftBlock": "blogPageHeroBanner_leftBlock__3Dft_",
	"rightBlock": "blogPageHeroBanner_rightBlock__3WvwG",
	"featuredLink": "blogPageHeroBanner_featuredLink__2D6SY",
	"bannerText": "blogPageHeroBanner_bannerText__2RxZI",
	"bannerTitle": "blogPageHeroBanner_bannerTitle__pZwC0",
	"featuredImage": "blogPageHeroBanner_featuredImage__BiUl9",
	"featuredBlogDetails": "blogPageHeroBanner_featuredBlogDetails__9JC84",
	"featuredTagAndTime": "blogPageHeroBanner_featuredTagAndTime__3G9Bz",
	"featuredTitle": "blogPageHeroBanner_featuredTitle__11D5U",
	"featuredExcerpt": "blogPageHeroBanner_featuredExcerpt__10Wym",
	"featuredReadMore": "blogPageHeroBanner_featuredReadMore__3Jxxi"
};


/***/ }),

/***/ 4050:
/***/ (function(module) {

// Exports
module.exports = {
	"signupWrapper": "blogPageSignupBlock_signupWrapper__2L9Sl",
	"signupBlockBgElements": "blogPageSignupBlock_signupBlockBgElements__2Mjm7",
	"blogPageSignupBox": "blogPageSignupBlock_blogPageSignupBox__3JkYI",
	"blogPageInputBox": "blogPageSignupBlock_blogPageInputBox__3_vml",
	"emailError": "blogPageSignupBlock_emailError__3w06G",
	"inputWrapper": "blogPageSignupBlock_inputWrapper__1x7SD",
	"thankYou": "blogPageSignupBlock_thankYou__24r-t"
};


/***/ }),

/***/ 8804:
/***/ (function(module) {

// Exports
module.exports = {
	"tagFilteringSection": "blogPageTagFilteringBlock_tagFilteringSection__vuVmF",
	"filterSearchDiv": "blogPageTagFilteringBlock_filterSearchDiv__3hp9J",
	"SearchDiv": "blogPageTagFilteringBlock_SearchDiv__ArapY",
	"searchIcon": "blogPageTagFilteringBlock_searchIcon__VSe5A",
	"closeIcon": "blogPageTagFilteringBlock_closeIcon__1MWOi",
	"searchBoxTitles": "blogPageTagFilteringBlock_searchBoxTitles__1zwvS",
	"searchBoxHeader": "blogPageTagFilteringBlock_searchBoxHeader__1za-b",
	"postTitles": "blogPageTagFilteringBlock_postTitles__3ade7",
	"FilterDiv": "blogPageTagFilteringBlock_FilterDiv__3p0e6",
	"postTags": "blogPageTagFilteringBlock_postTags__15lac"
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
var __webpack_exports__ = __webpack_require__.X(0, [664,472,482,81,563], function() { return __webpack_exec__(1144); });
module.exports = __webpack_exports__;

})();