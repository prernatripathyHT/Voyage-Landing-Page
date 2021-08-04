import { MarketingPageHeroBannerData } from "../data/MarketingPageHeroBanner";
import styles from "./css/marketingPageHeroBanner.module.css";
import gsap from "gsap";
import { useEffect, useState, useRef } from "react";

import {
  createOrUpdateRegistration,
  getUtm,
  trackFormSubmission,
  subscribePhone,
} from "../services";

export default function MarketingPageHeroBanner() {
  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    companyName: "",
    email: "",
    phone: "",
    // companySize,
    // emailSubscriberSize,
    websiteVisitors: "",
    website: "",
    referralSource: "",
    referralSourceName: "",
    utm: {},
  });

  //   const [hasError,setHasError] = useState(false);
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const webRef = useRef();

  const emailErrorRef = useRef();
  const lastnameErrorRef = useRef();
  const firstnameErrorRef = useRef();
  const phoneErrorRef = useRef();
  const webErrorRef = useRef();

  const updatePhone = (e) => {
    const key = e.charCode || e.keyCode || 0;
    let value = e.target.value;
    if (![109, 189, 8, 9].includes(key)) {
      if (value.length === 3) value = value + "-";
      if (value.length === 7) value = value + "-";
      setRegisterData({
        ...registerData,
        phone: value,
      });
    }
  };

  // utils
  const snakeToCamel = (s) => s.replace(/(_\w)/g, (k) => k[1].toUpperCase());
  const capitalize = (s) => s.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
  const ePattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  const urlPattern =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  const normalizePhoneNumber = (v) =>
    v && v.length >= 10 && `+1${v.replace(/[^\d]/g, "").slice(-10)}`;
  const isFormValid = ({ firstName, lastName, email, phone, website }) =>
    (firstName || lastName) && website && email && phone.length == 12;

  // form submission
  const getFormData = () => {
    const utm = getUtm();
    var firstname = capitalize(registerData.firstname.trim());
    var lastname = capitalize(registerData.lastname.trim());
    var phone = normalizePhoneNumber(registerData.phone);
    var email = registerData.email.trim();
    var companyName = capitalize(registerData.companyName.trim());
    // var companySize = +(document.getElementById('company-size').getAttribute('v-value'));
    // var emailSubscriberSize = +(document.getElementById('subscribers').getAttribute('v-value'));
    var websiteVisitors = +registerData.websiteVisitors;
    var website = registerData.website.trim();
    var referralSource = registerData.referralSource;
    var referralSourceName = registerData.referralSourceName;

    const [firstName, ...lastName] = name.split(" ");
    const data = {
      firstName: firstname,
      lastName: lastname,
      companyName,
      email,
      phone,
      // companySize,
      // emailSubscriberSize,
      websiteVisitors,
      website,
      referralSource,
      referralSourceName,
      ...utm,
    };
    return data;
  };

  const formError = `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 0.6875C2.78906 0.6875 0.1875 3.3125 0.1875 6.5C0.1875 9.71094 2.78906 12.3125 6 12.3125C9.1875 12.3125 11.8125 9.71094 11.8125 6.5C11.8125 3.3125 9.1875 0.6875 6 0.6875ZM6 11.1875C3.39844 11.1875 1.3125 9.10156 1.3125 6.5C1.3125 3.92188 3.39844 1.8125 6 1.8125C8.57812 1.8125 10.6875 3.92188 10.6875 6.5C10.6875 9.10156 8.57812 11.1875 6 11.1875ZM6.98438 8.75C6.98438 8.21094 6.53906 7.76562 6 7.76562C5.4375 7.76562 5.01562 8.21094 5.01562 8.75C5.01562 9.3125 5.4375 9.73438 6 9.73438C6.53906 9.73438 6.98438 9.3125 6.98438 8.75ZM5.0625 3.80469L5.22656 6.99219C5.22656 7.13281 5.36719 7.25 5.50781 7.25H6.46875C6.60938 7.25 6.75 7.13281 6.75 6.99219L6.91406 3.80469C6.91406 3.64062 6.79688 3.5 6.63281 3.5H5.34375C5.17969 3.5 5.0625 3.64062 5.0625 3.80469Z" fill="#AE2B2B"/>
  </svg>`;

  // step 1 form submit handler
  const formStepOneSubmit = (e) => {
    e.preventDefault();

    let hasError = false;
    const formData = getFormData();
    // const { email } = formData;
    const { email, phone, firstName, lastName, website } = formData;
    if (email.length == 0) {
      emailErrorRef.current.innerHTML = `Required ${formError}`;
      gsap.to("#email-error", { opacity: 1, display: "flex" });
      hasError = true;
    } else {
      emailErrorRef.current.innerHTML = "";
      gsap.to("#email-error", { opacity: 0, display: "none" });
    }
    if (!ePattern.test(email)) {
      emailErrorRef.current.innerHTML = `Invalid ${formError}`;
      gsap.to("#email-error", { opacity: 1, display: "flex" });
      hasError = true;
    }

    if (phone.length == 0) {
      phoneErrorRef.current.innerHTML =
      `Required ${formError}`;
      gsap.to("#phone_error", { opacity: 1, display: "flex" });
      hasError = true;
    } else if (phone.length !== 12) {
      phoneErrorRef.current.innerHTML =
      `Invalid ${formError}`;
      gsap.to("#phone_error", { opacity: 1, display: "flex" });
      hasError = true;
    } else {
      phoneErrorRef.current.innerHTML = "";
      gsap.to("#phone_error", { opacity: 0, display: "none" });
    }

    if (firstName.length == 0) {
      firstnameErrorRef.current.innerHTML = `Required ${formError}`;
      gsap.to("#firstname_error", { opacity: 1, display: "flex" });
      hasError = true;
    } else {
      firstnameErrorRef.current.innerHTML = "";
      gsap.to("#firstname_error", { opacity: 0, display: "none" });
    }
    if (lastName.length == 0) {
      lastnameErrorRef.current.innerHTML = `Required ${formError}`;
      gsap.to("#lastname_error", { opacity: 1, display: "flex" });
      hasError = true;
    } else {
      lastnameErrorRef.current.innerHTML = "";
      gsap.to("#lastname_error", { opacity: 0, display: "none" });
    }

    if (website.length == 0) {
      webErrorRef.current.innerHTML = `Required ${formError}`;
      gsap.to("#website-error", { opacity: 1, display: "flex" });
      hasError = true;
    } else {
      webErrorRef.current.innerHTML = "";
      gsap.to("#website-error", { opacity: 0, display: "none" });
    }
    if (!urlPattern.test(website) && website.length != 0) {
      webErrorRef.current.innerHTML = `Invalid ${formError}`;
      gsap.to("#website-error", { opacity: 1, display: "flex" });
      hasError = true;
    }

    if (isFormValid(formData)) {
      document.getElementById("form-container-s1").style.display = "none";
      if (window.innerWidth < 769) {
        document
          .getElementsByClassName("registration-wrapper")[0]
          .classList.remove("extra-margin");
      }
      document.getElementById("greeting-block").style.display = "block";
      subscribePhone(phone);
      createOrUpdateRegistration(formData).then(() =>
        createOrUpdateRegistration(formData)
      );
      trackFormSubmission();
    }
  };

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .from("#marketingBanner-1", { duration: 0.5, y: "30%", opacity: 0})
      .from("#marketingBanner-2", { duration: 0.5, y: "30%", opacity: 0})
      .from("#leftHomeBanner", { duration: 0.3, y: "10%", opacity: 0 });
  }, []);

  return (
    <section id={styles.heroBanner}>
      <div className={styles.heroBanner_innerWrapper}>
        <div id="leftHomeBanner" className={styles.leftBlock}>
          <h1 id="homePageTitle" className={styles.bannerTitle} data-scroll>
            {MarketingPageHeroBannerData.titleText}
          </h1>
          <p id="homePageSubtext" className={styles.bannerText} data-scroll>
            {MarketingPageHeroBannerData.subHeading}
          </p>
          <div className="registration-wrapper">
            {/* step 1 */}

            <div id="greeting-block" className={`${styles.successState}`}>
              <div className={styles.requestFormSuccessImage}>
                <img src={`/images/${MarketingPageHeroBannerData.requestFormSuccessImage}`} alt="success-state-img" />
              </div>
              <h1 className={styles.requestFormSuccessHeader1}>Thanks!</h1>
              <p className={styles.requestFormSuccessHeader2}>We’ll reach out to you soon</p>
            </div>
            <div className="email-check-wrapper" id="form-container-s1">
              <form id="email-check-form" className="registration_m">
                <div className="form-group common-name">
                  <input
                    onChange={(e) =>{
                      setRegisterData({
                        ...registerData,
                        firstname: e.target.value,
                      });
                      firstnameErrorRef.current.innerHTML = "";
                      gsap.to("#firstname_error", { opacity: 0, display: "none" });
                    }
                    }
                    ref={firstnameRef}
                    type="text"
                    name="name"
                    id="firstname"
                    value={registerData.firstname}
                    placeholder="First Name"
                    autoComplete="on"
                  />
                  <span
                    ref={firstnameErrorRef}
                    className="error-response"
                    id="firstname_error"
                  ></span>
                </div>

                <div className="form-group common-name">
                  <input
                    onChange={(e) =>{
                      setRegisterData({
                        ...registerData,
                        lastname: e.target.value,
                      });
                      lastnameErrorRef.current.innerHTML = "";
                      gsap.to("#lastname_error", { opacity: 0, display: "none" });
                    }
                    }
                    ref={lastnameRef}
                    type="text"
                    name="name"
                    id="lastname"
                    value={registerData.lastname}
                    placeholder="Last Name"
                    autoComplete="on"
                  />
                  <span
                    ref={lastnameErrorRef}
                    className="error-response"
                    id="lastname_error"
                  ></span>
                </div>

                <div className="form-group">
                  <input
                    onChange={(e) =>{
                      setRegisterData({
                        ...registerData,
                        email: e.target.value,
                      });
                      emailErrorRef.current.innerHTML = "";
                      gsap.to("#email-error", { opacity: 0, display: "none" });
                    }
                    }
                    value={registerData.email}
                    ref={emailRef}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Work Email"
                    autoComplete="on"
                  />
                  <span
                    ref={emailErrorRef}
                    className="error-response"
                    id="email-error"
                  ></span>
                </div>

                <div className="form-group">
                  <input
                    onChange={(e) => {updatePhone(e);
                      phoneErrorRef.current.innerHTML = "";
                      gsap.to("#phone_error", { opacity: 0, display: "none" });
                    }}
                    ref={phoneRef}
                    type="text"
                    value={registerData.phone}
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    autoComplete="on"
                    maxLength="12"
                  />
                  <span
                    ref={phoneErrorRef}
                    className="error-response"
                    id="phone_error"
                  ></span>
                </div>

                <div className="form-group">
                  <input
                    onChange={(e) =>{
                      setRegisterData({
                        ...registerData,
                        website: e.target.value,
                      });
                      webErrorRef.current.innerHTML = "";
                      gsap.to("#website-error", { opacity: 0, display: "none" });
                    }
                    }
                    ref={webRef}
                    type="text"
                    value={registerData.website}
                    name="website"
                    id="website"
                    placeholder="Your Ecommerce Store URL"
                    autoComplete="on"
                  />
                  <span
                    ref={webErrorRef}
                    className="error-response"
                    id="website-error"
                  ></span>
                </div>

                <button
                  onClick={(e) => formStepOneSubmit(e)}
                  type="submit"
                  id="form-submit-s1"
                  data-track="lead-form-next"
                >
                  Request Demo
                </button>
              </form>
            </div>
            {/* step 2 */}
          </div>
        </div>
      </div>

      <div className={styles.rightBlock}>
        <img
          data-scroll
          id="marketingBanner-1"
          className={styles.marketingBanner1}
          src="/images/marketing-hero-banner-1.png"
          alt="marketing-banner-dashboard"
        />
        <img
          data-scroll
          id="marketingBanner-2"
          className={styles.marketingBanner2}
          src="/images/marketing-hero-banner-2.png"
          alt="marketing-banner-mobile"
        />
      </div>
    </section>
  );
}
