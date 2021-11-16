(function() {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 530:
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
;// CONCATENATED MODULE: ./data/AboutPageHeroBanner.js
const AboutPageHeroBannerData = {
  titleText: "Our Story",
  subText_1: "We saw how SMS was changing the way brands communicated with their customers, but the platforms were not built for long term success. Introducing Voyage Text - the best SMS messaging platform for eCom businesses.",
  subText_2: "We are a team built by finding solutions to the pain points we noticed working on our own DTC eCom brands. SMS has been the most powerful and successful ways of reaching customers, but we wanted to do it better."
};
// EXTERNAL MODULE: ./components/css/aboutPageHeroBanner.module.css
var aboutPageHeroBanner_module = __webpack_require__(531);
var aboutPageHeroBanner_module_default = /*#__PURE__*/__webpack_require__.n(aboutPageHeroBanner_module);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(9015);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/AboutPageHeroBanner.js






function AboutPageHeroBanner() {
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
      opacity: 0
    }, "1.5").from('.anim-left', {
      x: '30%',
      opacity: 0
    }, "-=2.2").from('.anim-right', {
      x: '-40%',
      opacity: 0
    }, "-=2.2");
  });
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: (aboutPageHeroBanner_module_default()).aboutPageHeroBanner,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: ` container ${(aboutPageHeroBanner_module_default()).heroBanner_innerWrapper}`,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (aboutPageHeroBanner_module_default()).leftBlock,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          id: "aboutPageTitle",
          className: `title-anim ${(aboutPageHeroBanner_module_default()).aboutPageTitle}`,
          children: AboutPageHeroBannerData.titleText
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "title-anim",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: `${(aboutPageHeroBanner_module_default()).aboutPageSubText}`,
            children: AboutPageHeroBannerData.subText_1
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: `${(aboutPageHeroBanner_module_default()).aboutPageSubText}`,
            children: AboutPageHeroBannerData.subText_2
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (aboutPageHeroBanner_module_default()).rightBlock,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (aboutPageHeroBanner_module_default()).staticAssets,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            width: "432",
            height: "299",
            viewBox: "0 0 432 299",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/jsx_runtime_.jsx("circle", {
              cx: "282.5",
              cy: "149.5",
              r: "149.5",
              fill: "#5864F9",
              "fill-opacity": "0.3"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M137.974 246.403L168.375 271.594V166H43.1953V246.403H137.974Z",
              fill: "#02D9FC"
            }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
              rx: "22.8845",
              ry: "22.3759",
              transform: "matrix(-1 0 0 1 22.8841 247.583)",
              fill: "#5BEBC1"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/images/about-dots-1.svg",
            alt: "about-dots-1"
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/images/about-dots-2.svg",
            alt: "about-dots-2"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            width: "114",
            height: "72",
            viewBox: "0 0 114 72",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M20.5164 54.4265L0.000747681 71.4262V0.167725H84.4766V54.4265H20.5164Z",
              fill: "#5BEBC1"
            }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
              cx: "98.1815",
              cy: "55.2226",
              rx: "15.4432",
              ry: "15.1",
              fill: "#162740"
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `anim-down ${(aboutPageHeroBanner_module_default()).animmateDown}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            width: "79",
            height: "79",
            viewBox: "0 0 79 79",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M39.3395 60.2527L57.7649 39.3937L20.9141 39.3937L39.3395 60.2527Z",
              fill: "#405CFB"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M39.3395 39.2839L57.7649 18.425L20.9141 18.425L39.3395 39.2839Z",
              fill: "#405CFB"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `anim-left ${(aboutPageHeroBanner_module_default()).animateLeft}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            width: "292",
            height: "46",
            viewBox: "0 0 292 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/jsx_runtime_.jsx("rect", {
              width: "381",
              height: "46",
              fill: "#1021F7",
              "fill-opacity": "0.7"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `anim-right ${(aboutPageHeroBanner_module_default()).animateRight}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            width: "70",
            height: "55",
            viewBox: "0 0 70 55",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/jsx_runtime_.jsx("ellipse", {
              rx: "26.8734",
              ry: "26.2762",
              transform: "matrix(-1 0 0 1 42.15 27.8031)",
              fill: "#5BEBC1"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M30.9512 27.0818L8.01086e-05 8.01086e-05L8.01086e-05 54.1636L30.9512 27.0818Z",
              fill: "#405CFB"
            })]
          })
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/css/aboutPageLeaders.module.css
var aboutPageLeaders_module = __webpack_require__(6347);
var aboutPageLeaders_module_default = /*#__PURE__*/__webpack_require__.n(aboutPageLeaders_module);
;// CONCATENATED MODULE: ./data/AboutPageLeaders.js
const AboutPageLeadersData = [{
  name: "Rev Reddy",
  designation: "CEO and Head of Product",
  description: `Rev Reddy brings his experience as a founder at WaveAudio and on the founding board of Appriza Pay to his leadership of Voyage SMS. His greatest motivation at Voyage is helping our clients engage, convert and delight their customers through smarter SMS marketing. Rev is a graduate of Wharton Business School and gets his creative engine running through music and photography.`,
  linkedin: "https://www.linkedin.com/in/rev-reddy/",
  email: "rev@voyagesms.com",
  image: "about-rev@2x.png"
}, {
  name: "Corey Epstein",
  designation: "Founder and Chief Innovation Officer",
  description: `Voyage founder Corey Epstein is no stranger to startup success, having previously founded and served as CMO and Creative Director at DSTLD (NASDAQ: DBGI). A former consultant at Deloitte, Corey graduated with an MBA in Strategy from the UCLA Anderson School of Management. As a musician and photographer as well, Corey loves to travel and play music in his off-time.`,
  linkedin: "https://www.linkedin.com/in/coreyepstein/",
  email: "corey@voyagesms.com",
  image: "about-corey@2x.png"
}, {
  name: "Sean Milliken",
  designation: "CTO",
  description: `Prior to joining Voyage SMS as Chief Technology Officer, Sean honed his eCommerce development expertise at places like RPA and Onestop. A graduate of UC Santa Barbara, Sean thrives on leading the cutting-edge eCommerce technological innovations at Voyage, which enable us to maintain and grow our best-in-class SMS marketing SaaS platform. Outside of work, Sean's hobbies include outdoor mainstays like surfing and backpacking, as well as an avid interest in the latest in AI.`,
  linkedin: "https://www.linkedin.com/in/milliken/",
  email: "sean@voyagesms.com",
  image: "about-sean@2x.png"
}, {
  name: "Scott Cooperstein",
  designation: "VP Sales",
  description: `With deep experience in sales, strategy, partnerships and overall digital marketing; after stints at Wunderkind, Breas, and Vitamin Shoppe, Scott's mission at Voyage is to lead clients current and new to a deeper understanding of the power of optimized SMS. After growing up in Cold Springs Harbor, NY, he attended college at the University of Wisconsin. Scott is more than two-thirds of the way through his goal to watch a game in all 30 MLB ballparks across the US and Canada.`,
  linkedin: "https://www.linkedin.com/in/scott-cooperstein-9592b170/",
  email: "scott@voyagesms.com",
  image: "about-scott@2x.png"
}];
;// CONCATENATED MODULE: ./components/AboutPageLeaders.js


// import AboutPageMemberCard from "./AboutPageMemberCard";


function AboutPageLeaders() {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: (aboutPageLeaders_module_default()).aboutPageLeaders,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `container ${(aboutPageLeaders_module_default()).aboutPageLeadersData}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: (aboutPageLeaders_module_default()).teamHeading,
        children: "Leaders"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (aboutPageLeaders_module_default()).designElements,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/images/about-dots-1.svg",
          alt: "about-dots-1"
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/images/about-dots-3.svg",
          alt: "about-dots-3"
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/images/about-dots-4.svg",
          alt: "about-dots-4"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (aboutPageLeaders_module_default()).memberDetails,
        children: AboutPageLeadersData.map((member, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `animate ${(aboutPageLeaders_module_default()).memberCard}`,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (aboutPageLeaders_module_default()).memberImage,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: `/images/${member.image}`,
                alt: member.name
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (aboutPageLeaders_module_default()).memberData,
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                className: (aboutPageLeaders_module_default()).memberDesignation,
                children: member.designation
              }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: (aboutPageLeaders_module_default()).memberName,
                children: member.name
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: (aboutPageLeaders_module_default()).memberDescription,
                children: member.description
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (aboutPageLeaders_module_default()).memberSocials,
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: (aboutPageLeaders_module_default()).socialLink,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: member.linkedin,
                    target: "_blank",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                        d: "M19.9951 20V19.9992H20.0001V12.6642C20.0001 9.07581 19.2276 6.31165 15.0326 6.31165C13.0159 6.31165 11.6626 7.41831 11.1101 8.46748H11.0517V6.64665H7.07422V19.9992H11.2159V13.3875C11.2159 11.6467 11.5459 9.96332 13.7017 9.96332C15.8259 9.96332 15.8576 11.95 15.8576 13.4992V20H19.9951Z",
                        fill: "black"
                      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                        d: "M0.330078 6.64746H4.47674V20H0.330078V6.64746Z",
                        fill: "black"
                      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                        d: "M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0V0Z",
                        fill: "black"
                      })]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: (aboutPageLeaders_module_default()).socialLink,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: `mailto:${member.email}`,
                    target: "_blank",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                      width: "20",
                      height: "14",
                      viewBox: "0 0 20 14",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                        d: "M13.2578 7.10253L20.0003 11.365V2.66003L13.2578 7.10253Z",
                        fill: "black"
                      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                        d: "M0 2.66003V11.365L6.7425 7.10253L0 2.66003Z",
                        fill: "black"
                      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                        d: "M18.7496 0.125H1.24961C0.625859 0.125 0.130859 0.59 0.0371094 1.18875L9.99961 7.7525L19.9621 1.18875C19.8684 0.59 19.3734 0.125 18.7496 0.125Z",
                        fill: "black"
                      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                        d: "M12.1125 7.85745L10.3438 9.02245C10.2388 9.0912 10.12 9.12495 10 9.12495C9.88004 9.12495 9.76129 9.0912 9.65629 9.02245L7.88754 7.8562L0.0400391 12.82C0.136289 13.4137 0.628789 13.875 1.25004 13.875H18.75C19.3713 13.875 19.8638 13.4137 19.96 12.82L12.1125 7.85745Z",
                        fill: "black"
                      })]
                    })
                  })
                })]
              })]
            })]
          })
        }, index))
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/css/aboutPageTeamMembers.module.css
var aboutPageTeamMembers_module = __webpack_require__(9974);
var aboutPageTeamMembers_module_default = /*#__PURE__*/__webpack_require__.n(aboutPageTeamMembers_module);
;// CONCATENATED MODULE: ./data/AboutPageTeamMembers.js
const AboutPageMembersData = [{
  name: "Patrick Migliaccio",
  designation: "VP of Engineering",
  description: `Vice President of Engineering Pat Migliaccio previously worked at NewsCheck and IEEE before joining the Voyage crew. In addition to his dedications to engineering architectures, development, and bespoke client solutions, Pat also loves to spend his spare time practicing Jiu-Jitsu, skating, and reading. A graduate of Rutgers University, he additionally makes sure to volunteer in his local communities when not working or pursuing his other hobbies.`,
  linkedin: "",
  email: "",
  image: "about-patrick@2x.png"
}, {
  name: "Alice Pai",
  designation: "Head of Client Success",
  description: `A champion of the client-first mindset, Alice has deep experience in wireless, having worked with industry mainstays such as Motorola and HTC. Prior to joining Voyage, she oversaw national sales and partnerships at healthcare/SMS engagement firm mPulse Mobile. She also served on the sales leadership team for Chariot/Ford, helping develop enterprise strategy and execute regional marketing initiatives. Alice enjoys spending time outdoors when she's off the clock.`,
  linkedin: "",
  email: "",
  image: "about-alice@2x.png"
}, {
  name: "Max Wardaki",
  designation: "Director of Operations",
  description: `Max previously worked at Alphasights and L.E.K. Consulting before starting his Voyage as our Director of Operations. He brings his expertise in strategy, analytics, and financial modeling to his role as facilitator of the Voyage team. When he isn't optimizing business structures and helping steer the ship, Max's hobbies include sports, traveling and reading. Max is a graduate of Princeton University.`,
  linkedin: "",
  email: "",
  image: "about-max@2x.png"
}, {
  name: "Michael DiBiasio",
  designation: "Head of Marketing",
  description: `With parallel career experience in both B2C and B2B marketing, Michael feels at the top of his game when helping stakeholders and brands find the sweet spot between audience needs and values, and their own sales and service goals. He joined Voyage after several years at an NYC consulting firm, where he worked with organizations such as BMW, the University of California, and L3Harris. Michael is a graduate of Columbia University and directs independent films in his spare time.`,
  linkedin: "",
  email: "",
  image: "about-michael@2x.png"
}, // {
//     name: "Antoine Screve",
//     designation: "Director of Product and Growth",
//     description: "Designer of products, programs, and ventures across education, women's leadership, and menstrual health. Previously worked at IDEO.",
//     linkedin: "",
//     email: "",
//     image: "about-antoine.png"
// },
// {
//     name: "Paul Shanklin",
//     designation: "Head of Client Operations",
//     description: "Designer of products, programs, and ventures across education, women's leadership, and menstrual health. Previously worked at IDEO.",
//     linkedin: "",
//     email: "",
//     image: "about-paul.png"
// },
// {
//     name: "Kenan Muhovic",
//     designation: "Product Manager",
//     description: "Designer of products, programs, and ventures across education, women's leadership, and menstrual health. Previously worked at IDEO.",
//     linkedin: "",
//     email: "",
//     image: "about-kenan.png"
// },
// {
//     name: "Juan Rodriguez",
//     designation: "Senior Engineer",
//     description: "Designer of products, programs, and ventures across education, women's leadership, and menstrual health. Previously worked at IDEO.",
//     linkedin: "",
//     email: "",
//     image: "about-juan.png"
// },
// {
//     name: "Francisco Lara",
//     designation: "Senior Engineer",
//     description: "Designer of products, programs, and ventures across education, women's leadership, and menstrual health. Previously worked at IDEO.",
//     linkedin: "",
//     email: "",
//     image: "about-francisco.png"
// },
// {
//     name: "Nurul Huda",
//     designation: "Lead Customer Service Engineer",
//     description: "Designer of products, programs, and ventures across education, women's leadership, and menstrual health. Previously worked at IDEO.",
//     linkedin: "",
//     email: "",
//     image: "about-nurul.png"
// },
// {
//     name: "Carlos Vega",
//     designation: "QA Lead",
//     description: "Designer of products, programs, and ventures across education, women's leadership, and menstrual health. Previously worked at IDEO.",
//     linkedin: "",
//     email: "",
//     image: "about-carlos.png"
// },
// {
//     name: "Ruby Epstein",
//     designation: "Business Operations Analyst",
//     description: "Designer of products, programs, and ventures across education, women's leadership, and menstrual health. Previously worked at IDEO.",
//     linkedin: "",
//     email: "",
//     image: "about-ruby.png"
// },
// {
//     name: "Zach Sherrod",
//     designation: "Account Executive",
//     description: "Designer of products, programs, and ventures across education, women's leadership, and menstrual health. Previously worked at IDEO.",
//     linkedin: "",
//     email: "",
//     image: "about-zach.png"
// },
// {
//     name: "Ralles Liu",
//     designation: "Lead Client Service Engineer",
//     description: "Designer of products, programs, and ventures across education, women's leadership, and menstrual health. Previously worked at IDEO.",
//     linkedin: "",
//     email: "",
//     image: "about-ralles.png"
// },
// {
//     name: "Rushil Bhuptani",
//     designation: "Engineer",
//     description: "Designer of products, programs, and ventures across education, women's leadership, and menstrual health. Previously worked at IDEO.",
//     linkedin: "",
//     email: "",
//     image: "about-rushil.png"
// },
// {
//     name: "Aman Chaudhary",
//     designation: "Frontend Designer",
//     description: "Designer of products, programs, and ventures across education, women's leadership, and menstrual health. Previously worked at IDEO.",
//     linkedin: "",
//     email: "",
//     image: "about-aman.png"
// },
{
  name: "Shreya Gulati",
  designation: "Art Director",
  description: `Voyage Art Director Shreya Gulati graduated from the Institute of Design in Pune, India, before kicking off her career in graphic design and design implementation. Previously, Shreya has worked at Upstox, Trip Creative, and Channel V. When Shreya isn't creating art and managing her design team, she uses her free time to catch up on some reading and to practice some hand-drawn illustration.`,
  linkedin: "",
  email: "",
  image: "about-shreya@2x.png"
}];
;// CONCATENATED MODULE: ./components/AboutPageTeamMembers.js




function AboutPageTeamMembers() {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: (aboutPageTeamMembers_module_default()).aboutPageTeamMembers,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `container ${(aboutPageTeamMembers_module_default()).aboutPageMembersData}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: (aboutPageTeamMembers_module_default()).teamHeading,
        children: "Team Members"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (aboutPageTeamMembers_module_default()).memberDetails,
        children: AboutPageMembersData.map((member, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `animate ${(aboutPageTeamMembers_module_default()).memberCard}`,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (aboutPageTeamMembers_module_default()).memberImage,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: `/images/${member.image}`,
                alt: member.name
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (aboutPageTeamMembers_module_default()).memberData,
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                className: (aboutPageTeamMembers_module_default()).memberDesignation,
                children: member.designation
              }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: (aboutPageTeamMembers_module_default()).memberName,
                children: member.name
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: (aboutPageTeamMembers_module_default()).memberDescription,
                children: member.description
              })]
            })]
          })
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
;// CONCATENATED MODULE: ./pages/about/index.js













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
      }), /*#__PURE__*/jsx_runtime_.jsx(AboutPageHeroBanner, {}), /*#__PURE__*/jsx_runtime_.jsx(AboutPageLeaders, {}), /*#__PURE__*/jsx_runtime_.jsx(AboutPageTeamMembers, {}), /*#__PURE__*/jsx_runtime_.jsx(AboutPageSignupBlock/* default */.Z, {
        setFormState: setFormState
      }), /*#__PURE__*/jsx_runtime_.jsx(AboutPageBottomBlock/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {
        setFormState: setFormState
      })]
    })]
  });
}

/***/ }),

/***/ 531:
/***/ (function(module) {

// Exports
module.exports = {
	"aboutPageHeroBanner": "aboutPageHeroBanner_aboutPageHeroBanner__1VbTW",
	"heroBanner_innerWrapper": "aboutPageHeroBanner_heroBanner_innerWrapper__29yy9",
	"leftBlock": "aboutPageHeroBanner_leftBlock__18f5x",
	"aboutPageTitle": "aboutPageHeroBanner_aboutPageTitle__PAF_0",
	"aboutPageSubText": "aboutPageHeroBanner_aboutPageSubText__3lMgM",
	"staticAssets": "aboutPageHeroBanner_staticAssets__2jxJX",
	"animmateDown": "aboutPageHeroBanner_animmateDown__3k7nM",
	"animateLeft": "aboutPageHeroBanner_animateLeft__3kpzF",
	"animateRight": "aboutPageHeroBanner_animateRight__2Cd3H",
	"rightBlock": "aboutPageHeroBanner_rightBlock__3ly2K"
};


/***/ }),

/***/ 6347:
/***/ (function(module) {

// Exports
module.exports = {
	"aboutPageLeaders": "aboutPageLeaders_aboutPageLeaders__2Zjgd",
	"aboutPageLeadersData": "aboutPageLeaders_aboutPageLeadersData__bnmfH",
	"teamHeading": "aboutPageLeaders_teamHeading__2tHEm",
	"designElements": "aboutPageLeaders_designElements__nvQ49",
	"memberDetails": "aboutPageLeaders_memberDetails__2Vrro",
	"memberCard": "aboutPageLeaders_memberCard__2agw4",
	"memberImage": "aboutPageLeaders_memberImage__jAEAi",
	"memberData": "aboutPageLeaders_memberData__2xb4n",
	"memberDesignation": "aboutPageLeaders_memberDesignation__3Tf8t",
	"memberName": "aboutPageLeaders_memberName__2UIzL",
	"memberDescription": "aboutPageLeaders_memberDescription__2HjnJ",
	"memberSocials": "aboutPageLeaders_memberSocials__3p_Dr",
	"socialLink": "aboutPageLeaders_socialLink__39oTA"
};


/***/ }),

/***/ 9974:
/***/ (function(module) {

// Exports
module.exports = {
	"aboutPageTeamMembers": "aboutPageTeamMembers_aboutPageTeamMembers__1plle",
	"aboutPageMembersData": "aboutPageTeamMembers_aboutPageMembersData__3iW9X",
	"teamHeading": "aboutPageTeamMembers_teamHeading__17Gv9",
	"memberDetails": "aboutPageTeamMembers_memberDetails__2R2tx",
	"memberCard": "aboutPageTeamMembers_memberCard__2Wxrg",
	"memberImage": "aboutPageTeamMembers_memberImage__34rSA",
	"memberData": "aboutPageTeamMembers_memberData__17aOd",
	"memberDesignation": "aboutPageTeamMembers_memberDesignation__8rddb",
	"memberName": "aboutPageTeamMembers_memberName__1vS12",
	"memberDescription": "aboutPageTeamMembers_memberDescription__2uVc5"
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
var __webpack_exports__ = __webpack_require__.X(0, [664,472,482,81,699,618], function() { return __webpack_exec__(530); });
module.exports = __webpack_exports__;

})();