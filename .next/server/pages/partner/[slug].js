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
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (partnerPageMainArticle_module_default()).leftBlock,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: (partnerPageMainArticle_module_default()).partnerTitle,
          children: "About Emarsys"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (partnerPageMainArticle_module_default()).partnerDesc,
          children: "Emarsys delivers the only omnichannel customer engagement platform built to accelerate business outcomes. With our platform you can reduce time to value, deliver superior 1:1 experiences and produce measurable results ... fast. We are the partner of choice for more than 2,500 companies around the world."
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (partnerPageMainArticle_module_default()).partnerQuote,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("blockquote", {
              cite: "",
              children: "With all our data in Emarsys, we have all the segmentation that plugs straight into our Ad strategy. Automatically matching content to every audience has seriously boosted our revenue, especially with the increased reach and new streams."
            }), /*#__PURE__*/jsx_runtime_.jsx("figcaption", {
              children: "Alexandra Simion, Digital Marketing Manager at BrandAlley"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: (partnerPageMainArticle_module_default()).integrationTitle,
          children: "Emarsys and Voyage"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (partnerPageMainArticle_module_default()).integrationDesc,
          children: "Voyage focuses on growing a net new channel, and creating enhanced personalized experiences in one of the most used apps on a mobile device - the text messaging app. Emarsys builds on that channel and adds to it email, web, social and mobile push delivering the only omnichannel customer engagement platform built to accelerate business outcomes."
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (partnerPageMainArticle_module_default()).rightBlock,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          className: (partnerPageMainArticle_module_default()).partnerCategoryTitle,
          children: "Categories"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (partnerPageMainArticle_module_default()).partnerCategories,
          children: "Customer Relationship Management, Email Service Provider, Customer Data Platform, Customer Service Platform, Loyalty"
        }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
          className: (partnerPageMainArticle_module_default()).partnerResourceTitle,
          children: "Resources"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (partnerPageMainArticle_module_default()).partnerResourceList,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M12.5251 1.25949H15.8482L8.25092 8.86047C8.0049 9.10649 8.0049 9.50673 8.25092 9.75276C8.3721 9.87393 8.53366 9.93636 8.69523 9.93636C8.8568 9.93636 9.01836 9.87393 9.13954 9.75276L16.7405 2.15178V5.47491C16.7405 5.82375 17.0233 6.10649 17.3684 6.10649C17.7173 6.10649 18 5.82375 18 5.47491V0.631579C18 0.282742 17.7173 0 17.3684 0H12.5251C12.1763 0 11.8935 0.282742 11.8935 0.631579C11.8972 0.976744 12.1763 1.25949 12.5251 1.25949Z",
                fill: "#3F5CFB"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M3.77846 18H14.2179C16.3036 18 17.9963 16.3035 17.9963 14.2215V9.30477C17.9963 8.95594 17.7136 8.67687 17.3647 8.67687C17.0159 8.67687 16.7368 8.95961 16.7368 9.30477V14.2179C16.7368 15.6059 15.6059 16.7368 14.2179 16.7368H3.77846C2.39045 16.7368 1.25949 15.6059 1.25949 14.2179V5.92656V3.78213C1.25949 2.39412 2.39045 1.26316 3.77846 1.26316H8.65116C9 1.26316 9.27907 0.980416 9.27907 0.631579C9.27907 0.282742 8.99633 0 8.65116 0H3.77846C1.69278 0 0 1.69645 0 3.77846V5.92289V14.2179C0 16.3036 1.69645 18 3.77846 18Z",
                fill: "#3F5CFB"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Community Intelligence Marketing Report: Deconstructing the Consumer Engagement Gap"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M12.5251 1.25949H15.8482L8.25092 8.86047C8.0049 9.10649 8.0049 9.50673 8.25092 9.75276C8.3721 9.87393 8.53366 9.93636 8.69523 9.93636C8.8568 9.93636 9.01836 9.87393 9.13954 9.75276L16.7405 2.15178V5.47491C16.7405 5.82375 17.0233 6.10649 17.3684 6.10649C17.7173 6.10649 18 5.82375 18 5.47491V0.631579C18 0.282742 17.7173 0 17.3684 0H12.5251C12.1763 0 11.8935 0.282742 11.8935 0.631579C11.8972 0.976744 12.1763 1.25949 12.5251 1.25949Z",
                fill: "#3F5CFB"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M3.77846 18H14.2179C16.3036 18 17.9963 16.3035 17.9963 14.2215V9.30477C17.9963 8.95594 17.7136 8.67687 17.3647 8.67687C17.0159 8.67687 16.7368 8.95961 16.7368 9.30477V14.2179C16.7368 15.6059 15.6059 16.7368 14.2179 16.7368H3.77846C2.39045 16.7368 1.25949 15.6059 1.25949 14.2179V5.92656V3.78213C1.25949 2.39412 2.39045 1.26316 3.77846 1.26316H8.65116C9 1.26316 9.27907 0.980416 9.27907 0.631579C9.27907 0.282742 8.99633 0 8.65116 0H3.77846C1.69278 0 0 1.69645 0 3.77846V5.92289V14.2179C0 16.3036 1.69645 18 3.77846 18Z",
                fill: "#3F5CFB"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: " Why WE tv Prioritizes Brand Community"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M12.5251 1.25949H15.8482L8.25092 8.86047C8.0049 9.10649 8.0049 9.50673 8.25092 9.75276C8.3721 9.87393 8.53366 9.93636 8.69523 9.93636C8.8568 9.93636 9.01836 9.87393 9.13954 9.75276L16.7405 2.15178V5.47491C16.7405 5.82375 17.0233 6.10649 17.3684 6.10649C17.7173 6.10649 18 5.82375 18 5.47491V0.631579C18 0.282742 17.7173 0 17.3684 0H12.5251C12.1763 0 11.8935 0.282742 11.8935 0.631579C11.8972 0.976744 12.1763 1.25949 12.5251 1.25949Z",
                fill: "#3F5CFB"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M3.77846 18H14.2179C16.3036 18 17.9963 16.3035 17.9963 14.2215V9.30477C17.9963 8.95594 17.7136 8.67687 17.3647 8.67687C17.0159 8.67687 16.7368 8.95961 16.7368 9.30477V14.2179C16.7368 15.6059 15.6059 16.7368 14.2179 16.7368H3.77846C2.39045 16.7368 1.25949 15.6059 1.25949 14.2179V5.92656V3.78213C1.25949 2.39412 2.39045 1.26316 3.77846 1.26316H8.65116C9 1.26316 9.27907 0.980416 9.27907 0.631579C9.27907 0.282742 8.99633 0 8.65116 0H3.77846C1.69278 0 0 1.69645 0 3.77846V5.92289V14.2179C0 16.3036 1.69645 18 3.77846 18Z",
                fill: "#3F5CFB"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Wolverine: Why a Footwear Brand Recommends AspireIQ to Manage Influencer Marketing"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M12.5251 1.25949H15.8482L8.25092 8.86047C8.0049 9.10649 8.0049 9.50673 8.25092 9.75276C8.3721 9.87393 8.53366 9.93636 8.69523 9.93636C8.8568 9.93636 9.01836 9.87393 9.13954 9.75276L16.7405 2.15178V5.47491C16.7405 5.82375 17.0233 6.10649 17.3684 6.10649C17.7173 6.10649 18 5.82375 18 5.47491V0.631579C18 0.282742 17.7173 0 17.3684 0H12.5251C12.1763 0 11.8935 0.282742 11.8935 0.631579C11.8972 0.976744 12.1763 1.25949 12.5251 1.25949Z",
                fill: "#3F5CFB"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M3.77846 18H14.2179C16.3036 18 17.9963 16.3035 17.9963 14.2215V9.30477C17.9963 8.95594 17.7136 8.67687 17.3647 8.67687C17.0159 8.67687 16.7368 8.95961 16.7368 9.30477V14.2179C16.7368 15.6059 15.6059 16.7368 14.2179 16.7368H3.77846C2.39045 16.7368 1.25949 15.6059 1.25949 14.2179V5.92656V3.78213C1.25949 2.39412 2.39045 1.26316 3.77846 1.26316H8.65116C9 1.26316 9.27907 0.980416 9.27907 0.631579C9.27907 0.282742 8.99633 0 8.65116 0H3.77846C1.69278 0 0 1.69645 0 3.77846V5.92289V14.2179C0 16.3036 1.69645 18 3.77846 18Z",
                fill: "#3F5CFB"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Purple Mattress: How a Home Brand Differentiates Itself by Leveraging a Community of Diverse Content Creators"
            })]
          })]
        })]
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
                children: "Emarsys"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "",
                target: "_blank",
                className: (partnerPageHeroBanner_module_default()).partnerLink,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                      d: "M11.1332 1.11954H14.0871L7.33394 7.87597C7.11525 8.09466 7.11525 8.45043 7.33394 8.66912C7.44165 8.77683 7.58526 8.83232 7.72888 8.83232C7.87249 8.83232 8.01611 8.77683 8.12382 8.66912L14.8802 1.91269V4.86659C14.8802 5.17666 15.1316 5.42799 15.4384 5.42799C15.7485 5.42799 15.9998 5.17666 15.9998 4.86659V0.561404C15.9998 0.251326 15.7485 0 15.4384 0H11.1332C10.8231 0 10.5718 0.251326 10.5718 0.561404C10.5751 0.868217 10.8231 1.11954 11.1332 1.11954Z",
                      fill: "white"
                    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                      d: "M3.35863 16H12.6381C14.492 16 15.9967 14.492 15.9967 12.6414V8.27091C15.9967 7.96083 15.7454 7.71277 15.4353 7.71277C15.1253 7.71277 14.8772 7.9641 14.8772 8.27091V12.6381C14.8772 13.8719 13.8719 14.8772 12.6381 14.8772H3.35863C2.12485 14.8772 1.11954 13.8719 1.11954 12.6381V5.26805V3.36189C1.11954 2.12811 2.12485 1.12281 3.35863 1.12281H7.68992C8 1.12281 8.24806 0.871481 8.24806 0.561404C8.24806 0.251326 7.99674 0 7.68992 0H3.35863C1.50469 0 0 1.50796 0 3.35863V5.26479V12.6381C0 14.492 1.50796 16 3.35863 16Z",
                      fill: "white"
                    })]
                  })
                }), "emarsys.com"]
              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: (partnerPageHeroBanner_module_default()).contactBtn,
                children: "Contact Tech Partner"
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
	"partnerLink": "partnerPageHeroBanner_partnerLink__2U6WZ",
	"contactBtn": "partnerPageHeroBanner_contactBtn__OcG-C"
};


/***/ }),

/***/ 7011:
/***/ (function(module) {

// Exports
module.exports = {
	"mainArticle": "partnerPageMainArticle_mainArticle__GnBaI",
	"leftBlock": "partnerPageMainArticle_leftBlock__1EkKH",
	"partnerTitle": "partnerPageMainArticle_partnerTitle__3WunB",
	"integrationTitle": "partnerPageMainArticle_integrationTitle__27Lzy",
	"partnerDesc": "partnerPageMainArticle_partnerDesc__27ca6",
	"integrationDesc": "partnerPageMainArticle_integrationDesc__18UDx",
	"partnerQuote": "partnerPageMainArticle_partnerQuote__1SnCo",
	"rightBlock": "partnerPageMainArticle_rightBlock__3Ihsv",
	"partnerCategoryTitle": "partnerPageMainArticle_partnerCategoryTitle__dlegP",
	"partnerResourceTitle": "partnerPageMainArticle_partnerResourceTitle__22K91",
	"partnerCategories": "partnerPageMainArticle_partnerCategories__15Q-y",
	"partnerResourceList": "partnerPageMainArticle_partnerResourceList__hLnrm"
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