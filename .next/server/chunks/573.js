exports.id = 573;
exports.ids = [573];
exports.modules = {

/***/ 5075:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ HomePageIntegrationBlock; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_HomePageIntegrationBlock_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2266);
/* harmony import */ var _css_HomePageIntegrationBlock_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_HomePageIntegrationBlock_module_css__WEBPACK_IMPORTED_MODULE_1__);



function HomePageIntegrationBlock() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
    className: (_css_HomePageIntegrationBlock_module_css__WEBPACK_IMPORTED_MODULE_1___default().integrationBlock),
    "data-scroll-section": true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: `container ${(_css_HomePageIntegrationBlock_module_css__WEBPACK_IMPORTED_MODULE_1___default().integrationWrapper)}`,
      "data-scroll": true,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        children: "Seamlessly integrates with your existing eCommerce tech stack"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_css_HomePageIntegrationBlock_module_css__WEBPACK_IMPORTED_MODULE_1___default().imageWrapper)
      })]
    })
  });
}

/***/ }),

/***/ 7081:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ RequestForm; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./data/requestForm.js
const requestFormData = {
  referralBlock: [{
    name: "Google",
    val: "Google"
  }, {
    name: "LinkedIn",
    val: "LinkedIn"
  }, {
    name: "Other",
    val: "Other"
  }, {
    name: "Referral",
    val: "Referral"
  }, {
    name: "Facebook/IG",
    val: "Facebook/IG"
  }],
  monthlyVisitorsBlock: [{
    name: "Less than 10k",
    val: "10000"
  }, {
    name: "10k - 50k",
    val: "50000"
  }, {
    name: "50k - 250k",
    val: "250000"
  }, {
    name: "250k - 1m",
    val: "1000000"
  }, {
    name: "1m+",
    val: "1000001"
  }, {
    name: "Not sure",
    val: "-1"
  }]
};
// EXTERNAL MODULE: ./services/index.js
var services = __webpack_require__(7482);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(9015);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
;// CONCATENATED MODULE: ./components/RequestForm.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function RequestForm({
  formState,
  setFormState
}) {
  const {
    0: registerData,
    1: setRegisterData
  } = (0,external_react_.useState)({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    // companySize,
    // emailSubscriberSize,
    websiteVisitors: "",
    website: "",
    referralSource: "",
    referralSourceName: "",
    utm: {}
  }); //   const [hasError,setHasError] = useState(false);

  const nameRef = (0,external_react_.useRef)();
  const phoneRef = (0,external_react_.useRef)();
  const emailRef = (0,external_react_.useRef)();
  const emailRecordRef = (0,external_react_.useRef)();
  const webRef = (0,external_react_.useRef)();
  const companyRef = (0,external_react_.useRef)();
  const referralRef = (0,external_react_.useRef)();
  const referralSourceName = (0,external_react_.useRef)();
  const visitorRef = (0,external_react_.useRef)();
  const emailErrorRef = (0,external_react_.useRef)();
  const nameErrorRef = (0,external_react_.useRef)();
  const phoneErrorRef = (0,external_react_.useRef)();
  const webErrorRef = (0,external_react_.useRef)();
  const companyErrorRef = (0,external_react_.useRef)();
  const webVisitorErrorRef = (0,external_react_.useRef)();
  const referralErrorRef = (0,external_react_.useRef)();

  const updatePhone = e => {
    const key = e.charCode || e.keyCode || 0;
    let value = e.target.value;

    if (![109, 189, 8, 9].includes(key)) {
      if (value.length === 3) value = value + "-";
      if (value.length === 7) value = value + "-";
      setRegisterData(_objectSpread(_objectSpread({}, registerData), {}, {
        phone: value
      }));
    }
  }; // utils


  const snakeToCamel = s => s.replace(/(_\w)/g, k => k[1].toUpperCase());

  const capitalize = s => s.replace(/(^\w|\s\w)/g, m => m.toUpperCase());

  const ePattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  const urlPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

  const normalizePhoneNumber = v => v && v.length >= 10 && `+1${v.replace(/[^\d]/g, "").slice(-10)}`;

  const isFormValid = ({
    firstName,
    lastName,
    email,
    phone,
    website,
    referralSource,
    referralSourceName
  }) => (firstName || lastName) && (referralSource || referralSourceName) && website && email && phone.length == 12; // form submission


  const getFormData = () => {
    const utm = (0,services/* getUtm */.PB)();
    var name = capitalize(registerData.name.trim());
    var phone = normalizePhoneNumber(registerData.phone);
    var email = registerData.email.trim();
    var companyName = capitalize(registerData.companyName.trim()); // var companySize = +(document.getElementById('company-size').getAttribute('v-value'));
    // var emailSubscriberSize = +(document.getElementById('subscribers').getAttribute('v-value'));

    var websiteVisitors = +registerData.websiteVisitors;
    var website = registerData.website.trim();
    var referralSource = registerData.referralSource;
    var referralSourceName = registerData.referralSourceName;
    const [firstName, ...lastName] = name.split(" ");

    const data = _objectSpread({
      firstName,
      lastName: lastName.join(" "),
      companyName,
      email,
      phone,
      // companySize,
      // emailSubscriberSize,
      websiteVisitors,
      website,
      referralSource,
      referralSourceName
    }, utm);

    return data;
  }; // close function
  // step 1 form submit handler


  const formStepOneSubmit = e => {
    e.preventDefault();
    let hasError = false;
    const formData = getFormData(); // const { email } = formData;

    const {
      email,
      phone,
      firstName,
      lastName,
      website,
      referralSource
    } = formData;

    if (email.length == 0) {
      emailErrorRef.current.textContent = "Please enter your work email";
      external_gsap_default().to("#email-error", {
        opacity: 1,
        display: "block"
      });
      hasError = true;
    } else {
      emailErrorRef.current.textContent = "";
      external_gsap_default().to("#email-error", {
        opacity: 0,
        display: "none"
      });
    }

    if (!ePattern.test(email)) {
      emailErrorRef.current.textContent = "Please enter a valid work email";
      external_gsap_default().to("#email-error", {
        opacity: 1,
        display: "block"
      });
      hasError = true;
    }

    if (phone.length == 0) {
      phoneErrorRef.current.textContent = "Please enter a valid US phone number";
      external_gsap_default().to("#phone_error", {
        opacity: 1,
        display: "block"
      });
      hasError = true;
    } else if (phone.length !== 12) {
      phoneErrorRef.current.textContent = "Please enter a valid US phone number";
      external_gsap_default().to("#phone_error", {
        opacity: 1,
        display: "block"
      });
      hasError = true;
    } else {
      phoneErrorRef.current.textContent = "";
      external_gsap_default().to("#phone_error", {
        opacity: 0,
        display: "none"
      });
    }

    if (`${firstName}${lastName}`.length == 0) {
      nameErrorRef.current.textContent = "Please enter your name";
      external_gsap_default().to("#name_error", {
        opacity: 1,
        display: "block"
      });
      hasError = true;
    } else {
      nameErrorRef.current.textContent = "Please enter your name";
      external_gsap_default().to("#name_error", {
        opacity: 0,
        display: "none"
      });
    }

    if (website.length == 0) {
      webErrorRef.current.textContent = "Please enter E-commerce website";
      external_gsap_default().to("#website-error", {
        opacity: 1,
        display: "block"
      });
      hasError = true;
    } else {
      webErrorRef.current.textContent = "";
      external_gsap_default().to("#website-error", {
        opacity: 0,
        display: "none"
      });
    }

    if (!urlPattern.test(website) && website.length != 0) {
      webErrorRef.current.textContent = "Please enter a valid website";
      external_gsap_default().to("#website-error", {
        opacity: 1,
        display: "block"
      });
      hasError = true;
    }

    if (!referralSource) {
      referralErrorRef.current.textContent = "Please select an option";
      external_gsap_default().to("#referral_error", {
        opacity: 1,
        display: "block"
      });
    } else {
      referralErrorRef.current.textContent = "";
      external_gsap_default().to("#referral_error", {
        opacity: 0,
        display: "none"
      });
    }

    if (isFormValid(formData)) {
      document.getElementById("form-container-s1").style.display = "none";

      if (window.innerWidth < 769) {
        document.getElementsByClassName("registration-wrapper")[0].classList.remove("extra-margin");
      }

      document.getElementById("greeting-block").style.display = "flex";
      (0,services/* subscribePhone */.YR)(phone);
      (0,services/* createOrUpdateRegistration */.jt)(formData).then(() => (0,services/* createOrUpdateRegistration */.jt)(formData));
      (0,services/* trackFormSubmission */.Pv)();
    }
  };

  const referralDropDown = () => {
    document.getElementById("dropdown-icon-blue").classList.add("rotate");
    external_gsap_default().to("#referral-value", {
      duration: 0.3,
      opacity: 1,
      autoAlpha: 1
    });
  };

  const referralDropDownBlur = () => {
    document.getElementById("dropdown-icon-blue").classList.remove("rotate");
    external_gsap_default().to("#referral-value", {
      duration: 0.3,
      opacity: 0,
      autoAlpha: 0
    });
  };

  const referralDropDownSelection = e => {
    let val = e.target.getAttribute("val");
    setRegisterData(_objectSpread(_objectSpread({}, registerData), {}, {
      referralSource: val
    }));
    external_gsap_default().to("#referral-value", {
      opacity: 0,
      autoAlpha: 0
    });
    const referralSource = val;

    if (referralSource === "Referral" || referralSource === "Other") {
      external_gsap_default().to("#referral-name", {
        display: "block"
      });
      external_gsap_default().to("#referral", {
        width: "115px"
      });
      referralSourceName.current.value = "";
      referralSourceName.current.focus();
    } else {
      external_gsap_default().to("#referral-name", {
        display: "none"
      });
      external_gsap_default().to("#referral", {
        width: "100%"
      });
      referralSourceName.current.value = "";
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: formState == "open" && /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "registration-form-modal",
      onClick: () => setFormState("close"),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "registration-wrapper",
        onClick: e => e.stopPropagation(),
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          id: "close-registration-modal",
          onClick: () => setFormState("close"),
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            width: "21",
            height: "21",
            viewBox: "0 0 21 21",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
              width: "21",
              height: "21",
              fill: "#162740"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M7.18194 16.1384L11.105 12.2154L15.028 16.1384L16.1602 15.0062L12.2371 11.0832L16.1602 7.16017L15.028 6.02802L11.105 9.95105L7.18194 6.02802L6.04979 7.16017L9.97283 11.0832L6.04979 15.0062L7.18194 16.1384Z",
              fill: "white"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "inner-block-wrap",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            id: "left-form-wrap",
            style: {
              backgroundImage: `url("/images/voyage-form-left-banner.jpeg")`
            }
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            id: "right-form-wrap",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "email-check-wrapper",
              id: "form-container-s1",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Get started"
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                id: "email-check-form",
                className: "registration",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "email",
                    children: "Work Email"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    onChange: e => setRegisterData(_objectSpread(_objectSpread({}, registerData), {}, {
                      email: e.target.value
                    })),
                    value: registerData.email,
                    ref: emailRef,
                    type: "email",
                    name: "email",
                    id: "email",
                    placeholder: "phil@nike.com",
                    autoComplete: "on"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    ref: emailErrorRef,
                    className: "error-response",
                    id: "email-error"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "website",
                    children: "Website"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    onChange: e => setRegisterData(_objectSpread(_objectSpread({}, registerData), {}, {
                      website: e.target.value
                    })),
                    ref: webRef,
                    type: "text",
                    value: registerData.website,
                    name: "website",
                    id: "website",
                    placeholder: "https://www.nike.com",
                    autoComplete: "on"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    ref: webErrorRef,
                    className: "error-response",
                    id: "website-error"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "name",
                    children: "Name"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    onChange: e => setRegisterData(_objectSpread(_objectSpread({}, registerData), {}, {
                      name: e.target.value
                    })),
                    ref: nameRef,
                    type: "text",
                    name: "name",
                    id: "name",
                    value: registerData.name,
                    placeholder: "Phil Smith",
                    autoComplete: "on"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    ref: nameErrorRef,
                    className: "error-response",
                    id: "name_error"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "phone",
                    children: "Phone Number"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    onChange: updatePhone,
                    ref: phoneRef,
                    type: "text",
                    value: registerData.phone,
                    name: "phone",
                    id: "phone",
                    placeholder: "415-497-3732",
                    autoComplete: "on",
                    maxLength: "12"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    ref: phoneErrorRef,
                    className: "error-response",
                    id: "phone_error"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "referral",
                    children: "Where did you hear about us?"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "input-wrap",
                    style: {
                      display: "flex"
                    },
                    children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                      onBlur: referralDropDownBlur,
                      onFocus: referralDropDown,
                      ref: referralRef,
                      type: "text",
                      name: "referral",
                      defaultValue: registerData.referralSource,
                      id: "referral",
                      className: "dropdown-input",
                      placeholder: "Select an option",
                      readOnly: true
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                      onChange: e => setRegisterData(_objectSpread(_objectSpread({}, registerData), {}, {
                        referralSourceName: e.target.value
                      })),
                      ref: referralSourceName,
                      type: "text",
                      value: registerData.referralSourceName,
                      name: "referral-name",
                      id: "referral-name",
                      autoComplete: "on"
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      ref: referralErrorRef,
                      className: "error-response",
                      id: "referral_error"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "dropdown-icon",
                      id: "dropdown-icon-blue",
                      children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                        width: "8",
                        height: "6",
                        viewBox: "0 0 8 6",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                          d: "M1 1L4.2 5L7.4 1",
                          stroke: "white",
                          strokeWidth: "1.5",
                          strokeLinejoin: "round"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                      id: "referral-value",
                      className: "dropdown-option",
                      children: requestFormData.referralBlock.map((option, i) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                        onClick: referralDropDownSelection,
                        val: option.val,
                        children: option.name
                      }, i))
                    })]
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  onClick: e => formStepOneSubmit(e),
                  type: "submit",
                  id: "form-submit-s1",
                  "data-track": "lead-form-next",
                  children: "Request Demo"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "instrinsic-layout",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/backfade.png",
                  alt: "voyage form"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              id: "greeting-block",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "underline",
                  children: "Thank you,"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "we\u2019ll be in touch!"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "mobile-icon-greet",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  width: "19",
                  height: "25",
                  viewBox: "0 0 19 25",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "M16.7692 17.6925C16.7692 21.7284 13.4974 25.0001 9.4615 25.0001C5.42557 25.0001 2.15381 21.7284 2.15381 17.6925C2.15381 13.6565 5.42557 10.3848 9.4615 10.3848C13.4974 10.3848 16.7692 13.6565 16.7692 17.6925Z",
                    fill: "#4262F7"
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "M18.3076 10.3848L0.230713 10.3848L9.26917 0.000151239L18.3076 10.3848Z",
                    fill: "#5BEBC1"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "instrinsic-layout",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/backfade.png",
                  alt: "voyage form"
                })
              })]
            })]
          })]
        })]
      })
    })
  });
}

/***/ }),

/***/ 1192:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SignupBottomBlock; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2562);
/* harmony import */ var _css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1__);



function SignupBottomBlock() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().shapeBox),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().boxWrapper),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().circle)} ${(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().small)} ${(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().green)}`
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().circle)} ${(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().medium)} ${(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().lightBlue)}`
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().circle)} ${(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().large)} ${(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().lightBlue)}`
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().square)} ${(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().small)} ${(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().navyblue)}`
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().square)} ${(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().medium)} ${(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().navyblue)}`
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().square)} ${(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().large)} ${(_css_signupBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().skyblue)}`
      })]
    })
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

/***/ 2562:
/***/ (function(module) {

// Exports
module.exports = {
	"shapeBox": "signupBottom_shapeBox__2VGMm",
	"boxWrapper": "signupBottom_boxWrapper__2pgLc",
	"circle": "signupBottom_circle__1whez",
	"square": "signupBottom_square__3qvVu",
	"green": "signupBottom_green__1oqgf",
	"small": "signupBottom_small__23J2K",
	"medium": "signupBottom_medium__tBqSH",
	"large": "signupBottom_large__6Qq4f",
	"lightBlue": "signupBottom_lightBlue__7tl97",
	"skyblue": "signupBottom_skyblue__35Ke8",
	"navyblue": "signupBottom_navyblue__3d4Kh"
};


/***/ })

};
;