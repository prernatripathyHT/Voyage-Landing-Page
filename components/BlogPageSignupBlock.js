import styles from "./css/blogPageSignupBlock.module.css";
import { useRef, useState, useEffect } from "react";
import { createOrUpdateRegistration, getUtm } from "../services";

export default function BlogPageSignupBlock() {
  const emailRef = useRef();
  const emailErrorRef = useRef();

  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      const utm = getUtm() || {};
      createOrUpdateRegistration({ email, ...utm });
    } catch (error) {
      console.error(error);
    }
    setIsSubmitted(true);
  };

  useEffect(() => {
    emailErrorRef.current.textContent = "";
  }, [email]);

  return (
    <section className={styles.signupBlock}>
      <div className={`container ${styles.signupWrapper}`}>
        <div className={styles.signupBlockBgElements}>
            <svg width="42" height="62" viewBox="0 0 42 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.59404 15.0484L19.6185 0.0239234L34.6424 15.0478L4.59404 15.0484Z" fill="#02D9FC"/>
                <path d="M4.35771 29.9996L19.3822 14.9751L34.4061 29.999L4.35771 29.9996Z" fill="#02D9FC"/>
                <circle cx="20.037" cy="45.5094" r="15.5716" fill="#5AEBC0"/>
            </svg>
            <svg width="53" height="45" viewBox="0 0 53 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.1285 34.2646L53 45V0H0V34.2646H40.1285Z" fill="#02D9FC"/>
            </svg>
            <svg width="66" height="34" viewBox="0 0 66 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-0.000122137 33.2474L33.2474 -7.66688e-05L66.4936 33.2461L-0.000122137 33.2474Z" fill="#58EDC0"/>
            </svg>
            <img src={`/images/blog-signup-vector-2.svg`}/>
            <img src={`/images/blog-signup-vector-1.svg`}/>
           
        </div>
        <div className={styles.blogPageSignupBox} data-scroll>
          <h3>Subscribe to the SMS Marketing Resources news letter</h3>
          <div className={styles.blogPageInputBox}>
            {isSubmitted && (
              <p className={styles.thankYou}>
                <span>
                  Great! Thanks so much for filling out our form. One of our
                  amazing team members will reach out to you shortly!
                </span>
              </p>
            )}
            <span
              id="smailSignUpError"
              ref={emailErrorRef}
              className={styles.emailError}
            ></span>
            <div id={styles.inputWrapper}>
              <input
                ref={emailRef}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                id="emailSignUp"
                autoComplete="off"
                placeholder="ENTER YOUR EMAIL"
              />
              <button onClick={() => emailSignUp()} id="emailSubmit">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
