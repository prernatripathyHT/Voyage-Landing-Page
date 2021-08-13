import styles from "./css/blogArticlePageSignupBlock.module.css";
import { useRef, useState, useEffect } from "react";
import { createOrUpdateRegistration, getUtm } from "../services";

export default function BlogArticlePageSignupBlock() {
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
        <div className={styles.signupBox} data-scroll>
          <h3>Subscribe to the SMS Marketing Resources news letter</h3>
          <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin purus sed odio dignissim tincidunt.
          </p>
          <div className={styles.inputBox}>
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
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
