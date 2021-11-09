
import styles from '../components/css/servicesPageSignUpBlock.module.css';
import {useState, useEffect} from 'react';
import { createMedia } from "@artsy/fresnel";

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      sm: 0,
      md: 769,
      lg: 1024,
      xl: 1192,
    },
  });


export default function ServicesPageSignupBlock({setFormState}) {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    return(
        <MediaContextProvider>
        <section className={`animate ${styles.servicePageSignupBlock}`}>
            <div className={`container ${styles.signupContainer}`}>
          

                <div className={styles.topBlock}>
                    <Media greaterThanOrEqual="md">
                    <div className={styles.designBlock}>
                    <svg width="1046" height="129" viewBox="0 0 1046 129" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: `translateY(${offsetY * .07}px)`}}>
                        <circle cx="438.277" cy="23.4213" r="5.64008" fill="#5BEBC1"/>
                        <circle cx="694.64" cy="46.6401" r="5.64008" fill="#5BEBC1"/>
                        <circle cx="4.43149" cy="124.431" r="4.43149" fill="#5BEBC1"/>
                        <circle cx="254.956" cy="44.9557" r="3.9557" fill="#02D9FC"/>
                        <circle cx="85.7057" cy="9.76624" r="3.9557" fill="#5BEBC1"/>
                        <circle cx="913.956" cy="17.9557" r="3.9557" fill="#02D9FC"/>
                    </svg>

                    <svg width="31" height="139" viewBox="0 0 31 139" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: `translateY(${offsetY * .1}px)`}}>
                        <circle cx="26.7057" cy="4.76624" r="3.9557" fill="#5BEBC1"/>
                        <circle cx="4.43149" cy="134.431" r="4.43149" fill="#5BEBC1"/>
                    </svg>

                    <svg width="1280" height="83" viewBox="0 0 1280 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1280 19.0154L1076.07 46.2299C892.402 70.7411 705.664 66.3968 523.311 33.4838C306.786 -5.5971 85.0311 -10.5315 -133 19.0154V379H1280V19.0154Z" fill="#02D9FC"/>
                    </svg>

                    <svg width="219" height="210" viewBox="0 0 219 210" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: `translate(${offsetY * .08}px, ${offsetY * .01}px)`}}>
                        <path d="M204.161 122.762L122.135 14.8796L89.0727 124.448L204.161 122.762Z" fill="#5BEBC1"/>
                        <path d="M25.7886 89.1393L90.3255 44.2771L72.6515 110.362L25.7886 89.1393Z" fill="#02D9FC"/>
                        <path d="M199.286 153.441L8.89453 123.197L38.9429 185.38L155.774 203.939L199.286 153.441Z" fill="white"/>
                    </svg>

                    <svg width="1280" height="95" viewBox="0 0 1280 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 21.5179L212.989 43.6346C452.954 68.5523 697.979 63.3277 934.953 28.2405C1170.76 -6.67419 1415.07 -9.24332 1652.48 20.6951L1659 21.5179V298H0V21.5179Z" fill="#3F5CFB"/>
                    </svg>

                    </div>
                    </Media>
                    <Media lessThan="md">
                        <div className={styles.designBlock}>
                            <svg width="300" height="49" viewBox="0 0 1046 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="438.277" cy="23.4213" r="5.64008" fill="#5BEBC1"/>
                                <circle cx="694.64" cy="46.6401" r="5.64008" fill="#5BEBC1"/>
                                <circle cx="4.43149" cy="124.431" r="4.43149" fill="#5BEBC1"/>
                                <circle cx="254.956" cy="44.9557" r="3.9557" fill="#02D9FC"/>
                                <circle cx="85.7057" cy="9.76624" r="3.9557" fill="#5BEBC1"/>
                                <circle cx="913.956" cy="17.9557" r="3.9557" fill="#02D9FC"/>
                            </svg>
                            <svg width="31" height="49" viewBox="0 0 31 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26.7057" cy="4.76624" r="3.9557" fill="#5BEBC1"/>
                                <circle cx="4.43149" cy="134.431" r="4.43149" fill="#5BEBC1"/>
                            </svg>
                            <svg width="1280" height="83" viewBox="0 0 1280 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1280 19.0154L1076.07 46.2299C892.402 70.7412 705.664 66.3968 523.311 33.4838C306.786 -5.5971 85.0311 -10.5315 -133 19.0154V379H1280V19.0154Z" fill="#02D9FC"/>
                            </svg>
                            <svg width="100" height="210" viewBox="0 0 219 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M204.161 122.762L122.135 14.8796L89.0727 124.448L204.161 122.762Z" fill="#5BEBC1"/>
                                <path d="M25.7886 89.1393L90.3255 44.2771L72.6515 110.362L25.7886 89.1393Z" fill="#02D9FC"/>
                                <path d="M199.286 153.441L8.89453 123.197L38.9429 185.38L155.774 203.939L199.286 153.441Z" fill="white"/>
                            </svg>
                            <svg width="1280" height="69" viewBox="0 0 1280 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 21.5179L212.989 43.6346C452.954 68.5523 697.979 63.3277 934.953 28.2405C1170.76 -6.67419 1415.07 -9.24332 1652.48 20.6951L1659 21.5179V298H0V21.5179Z" fill="#3F5CFB"/>
                            </svg>


                        </div>
                    </Media>
                    <div className={styles.textBlock}>
                        <div className={styles.leftSegment}>
                            <h4>Voyage Together:<br /> Our Crew is Your Crew</h4>
                        </div>
                        <div className={styles.rightSegment}>
                            <p><span>At Voyage, our True North is empowering brands to build greater LTV through continued customer delight. We know SMS marketing is just the first phase of the future of message commerce 🚢.</span></p>
                            <p><span>With the </span>highest open rates<span> around, and subscriber lists that have proven at least </span>3X more valuable<span> 👑 than any other channel, we believe we have a responsibility to truly partner with brands to </span>text better<span> – and to protect and respect the value of SMS as a channel</span>.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBlock}>
                    <h1>Your Voyage to SMS success starts today.</h1>
                    <p>Sign up now to access the most powerful full-stack message commerce <br /> platform in the world. We’ll reply before the day is done. Then it’s a free month of <br/>messages for your brand – on us.</p>

                    <div className={styles.buttonBlock}>
                        <button className={styles.signupButton} onClick={() => setFormState('open')} >Let's talk</button>
                    </div>
                </div>  
            </div>
        </section>
        </MediaContextProvider>
    )

}