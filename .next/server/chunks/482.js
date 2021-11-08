exports.id = 482;
exports.ids = [482];
exports.modules = {

/***/ 7482:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YR": function() { return /* binding */ subscribePhone; },
/* harmony export */   "jt": function() { return /* binding */ createOrUpdateRegistration; },
/* harmony export */   "TE": function() { return /* binding */ saveUtmFromParams; },
/* harmony export */   "PB": function() { return /* binding */ getUtm; },
/* harmony export */   "Pv": function() { return /* binding */ trackFormSubmission; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const TRACKER_HOST_URL = 'https://localhost:6001'; // Local Environment
// const TRACKER_HOST_URL = 'https://tst.vyg.mobi'; // Test Environment
// const TRACKER_HOST_URL = 'https://stg.vyg.mobi'; // Staging Environment
const TRACKER_HOST_URL = 'https://vyg.mobi'; // Production Environment

const REGISTRATION_API_URL = `${TRACKER_HOST_URL}/api/registration`; // Local Environment

const SUBSCRIBE_API_URL = `${TRACKER_HOST_URL}/api/TrackingEvents/SubscribeNumber`;
const REGISTRATION_STORAGE_KEY = 'voyage_registration';
const SUBSCRIBE_STORAGE_KEY = 'voyage_s';
const SUBSCRIBE_CAMPAIGN_ID = 4199; //Campaign ID of API Opt-in

const UTM_STORAGE_KEY = 'voyage_utm';

const snakeToCamel = s => s.replace(/(_\w)/g, k => k[1].toUpperCase());

const subscribePhone = PhoneIn => {
  fetch(SUBSCRIBE_API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      PhoneIn,
      CampaignId: SUBSCRIBE_CAMPAIGN_ID
    })
  }).then(response => response.json()).then(({
    subscriberId
  }) => {
    if (subscriberId) localStorage.setItem(SUBSCRIBE_STORAGE_KEY, subscriberId);
  }).catch(error => {
    console.error('Error:', error);
  });
}; // form submission

const createOrUpdateRegistration = data => {
  return new Promise((resolve, reject) => {
    var _ref, _data$referralSourceN;

    const {
      publicId
    } = JSON.parse(localStorage.getItem(REGISTRATION_STORAGE_KEY)) || {};

    const body = _objectSpread(_objectSpread({}, data), {}, {
      publicId,
      referralSource: data.referralSource && ((_ref = data.referralSource + (data !== null && data !== void 0 && (_data$referralSourceN = data.referralSourceName) !== null && _data$referralSourceN !== void 0 && _data$referralSourceN.length ? ` - ${data === null || data === void 0 ? void 0 : data.referralSourceName}` : '')) === null || _ref === void 0 ? void 0 : _ref.trim())
    });

    const isUpdate = !!publicId;
    fetch(REGISTRATION_API_URL, {
      method: isUpdate ? 'PUT' : 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(response => response.json()).then(resData => {
      if (resData.publicId) localStorage.setItem(REGISTRATION_STORAGE_KEY, JSON.stringify(resData));

      if (isUpdate) {
        localStorage.removeItem(REGISTRATION_STORAGE_KEY);
      }

      console.log('Success:', resData);
      resolve();
    }).catch(error => {
      console.error('Error:', error);
      resolve();
    });
  });
};
const saveUtmFromParams = () => {
  let result = '';

  try {
    const search = location.search.substring(1);
    result = '{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}';
    sessionStorage.setItem(UTM_STORAGE_KEY, result);
  } catch {}

  return result;
};
const getUtm = () => {
  let result = {};

  try {
    result = JSON.parse(sessionStorage.getItem(UTM_STORAGE_KEY));
    result = Object.entries(result).reduce((x, [k, v]) => (x[snakeToCamel(k)] = v) && x, {});
  } catch {}

  return result;
};
const trackFormSubmission = () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'leadFormSubmitSuccess'
  });

  if (window && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-739656360/M9BLCNKKkdABEKiF2eAC'
    });
  }
};

/***/ })

};
;