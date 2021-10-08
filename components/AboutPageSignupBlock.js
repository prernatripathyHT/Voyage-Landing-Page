
import styles from '../components/css/aboutPageSignupBlock.module.css';


export default function AboutPageSignupBlock({setFormState}) {

    return(
        <section className={`animate ${styles.aboutPageSignupBlock}`}>
            <div className={`container ${styles.signupContainer}`}>
                <h1>Ready to give growth a chance yet?</h1>
                <p>Get Started today for a free set up and implementation. Your first 500 messages are on us!</p>

                <div className={styles.buttonBlock}>
                    <button className={styles.signupButton} onClick={() => setFormState('open')} >Get Started</button>
                </div>
            </div>
        </section>
    )

}