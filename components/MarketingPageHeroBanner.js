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

  // step 1 form submit handler
  const formStepOneSubmit = (e) => {
    e.preventDefault();

    let hasError = false;
    const formData = getFormData();
    // const { email } = formData;
    const { email, phone, firstName, lastName, website } = formData;
    if (email.length == 0) {
      emailErrorRef.current.textContent = "Required";
      gsap.to("#email-error", { opacity: 1, display: "block" });
      hasError = true;
    } else {
      emailErrorRef.current.textContent = "";
      gsap.to("#email-error", { opacity: 0, display: "none" });
    }
    if (!ePattern.test(email)) {
      emailErrorRef.current.textContent = "Invalid";
      gsap.to("#email-error", { opacity: 1, display: "block" });
      hasError = true;
    }

    if (phone.length == 0) {
      phoneErrorRef.current.textContent =
        "Required";
      gsap.to("#phone_error", { opacity: 1, display: "block" });
      hasError = true;
    } else if (phone.length !== 12) {
      phoneErrorRef.current.textContent =
        "Invalid";
      gsap.to("#phone_error", { opacity: 1, display: "block" });
      hasError = true;
    } else {
      phoneErrorRef.current.textContent = "";
      gsap.to("#phone_error", { opacity: 0, display: "none" });
    }

    if (firstName.length == 0) {
      firstnameErrorRef.current.textContent = "Required";
      gsap.to("#firstname_error", { opacity: 1, display: "block" });
      hasError = true;
    } else {
      firstnameErrorRef.current.textContent = "";
      gsap.to("#firstname_error", { opacity: 0, display: "none" });
    }
    if (lastName.length == 0) {
      lastnameErrorRef.current.textContent = "Required";
      gsap.to("#lastname_error", { opacity: 1, display: "block" });
      hasError = true;
    } else {
      lastnameErrorRef.current.textContent = "";
      gsap.to("#lastname_error", { opacity: 0, display: "none" });
    }

    if (website.length == 0) {
      webErrorRef.current.textContent = "Required";
      gsap.to("#website-error", { opacity: 1, display: "block" });
      hasError = true;
    } else {
      webErrorRef.current.textContent = "";
      gsap.to("#website-error", { opacity: 0, display: "none" });
    }
    if (!urlPattern.test(website) && website.length != 0) {
      webErrorRef.current.textContent = "Invalid";
      gsap.to("#website-error", { opacity: 1, display: "block" });
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
      .from("#marketingBanner-1", { duration: 0.5, y: "30%", opacity: 0 })
      .from("#marketingBanner-2", { duration: 1, y: "30%", opacity: 0 })
      .from("#leftHomeBanner", { duration: 0.4, y: "30%", opacity: 0 });
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
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        firstname: e.target.value,
                      })
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
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        lastname: e.target.value,
                      })
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
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        email: e.target.value,
                      })
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
                    onChange={updatePhone}
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
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        website: e.target.value,
                      })
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
