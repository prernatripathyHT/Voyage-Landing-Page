import {useState, useEffect} from 'react';
import styles from './css/servicesPageHeroBanner.module.css';
import { createMedia } from "@artsy/fresnel";

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      sm: 0,
      md: 769,
      lg: 1024,
      xl: 1192,
    },
  });


export default function ServicesPageHeroBanner(){
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    },[])


    return (
        <MediaContextProvider>
        <section className={styles.servicesPageHeroBanner}>
            <div className={`${styles.heroBanner_innerWrapper}`}>
                <div className={styles.textBlock} style={{transform: `translateY(${offsetY * -.15}px)`}}>
                    <h1 className={styles.heroTitle}>Voyage <br /> Compass</h1>
                </div>
                <Media greaterThanOrEqual="md">
                <div className={styles.designBlock}>

                    <svg width="159" height="177" viewBox="0 0 159 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.775391" y="79.4914" width="157.252" height="96.5799" fill="#162740"/>
                        <path d="M0.775391 79.119L79.2912 32.7709L158.027 79.4911L79.5115 125.839L0.775391 79.119Z" fill="#5BEBC1"/>
                    </svg>

                    <img src="/images/services-dots-circle.svg" alt="services-dots-1" />
                    <img src="/images/services-dots-dark-blue.svg" alt="services-dots-2" />
                    <img src="/images/services-dots-light-blue.svg" alt="services-dots-3" />

                    <svg width="58" height="52" viewBox="0 0 58 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M57.8672 25.5594L28.932 -3.46965e-06L28.932 51.1188L57.8672 25.5594Z" fill="#02D9FC"/>
                        <path d="M28.9355 25.5594L0.000365601 -3.46965e-06L0.000366211 51.1188L28.9355 25.5594Z" fill="#5BEBC1"/>
                    </svg>

                    <svg width="43" height="60" viewBox="0 0 43 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: `translateY(${offsetY * .1}px)`}}>
                        <path d="M21.5009 30L0.00178745 -7.15396e-07L43 3.8147e-06L21.5009 30Z" fill="#5BEBC1"/>
                        <path d="M21.5009 60L0.00178745 30L43 30L21.5009 60Z" fill="#405CFB"/>
                    </svg>

                    <svg width="91" height="45" viewBox="0 0 91 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M65.8203 22.0324L91.0007 1.15127e-05L91.0006 44.0648L65.8203 22.0324Z" fill="#5BEBC1"/>
                        <path d="M39.7891 22.0324L64.9694 1.15127e-05L64.9694 44.0648L39.7891 22.0324Z" fill="#3F5CFA"/>
                        <ellipse cx="18" cy="21.5648" rx="18.5" ry="18" transform="rotate(-90 18 21.5648)" fill="#162740"/>
                    </svg>

                    {/* <div className={styles.compassNeedle}> */}
                        <svg width="278" height="358" viewBox="0 0 278 358" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle r="167.076" transform="matrix(0.359412 -0.933179 -0.933179 -0.359412 168 167.37)" fill="#1C345C"/>
                            <ellipse rx="46" ry="44.5" transform="matrix(0.359412 -0.933179 -0.933179 -0.359412 59.0592 311.92)" fill="#5BEBC1"/>
                        </svg>
                        <svg width="197" height="267" viewBox="0 0 197 267" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform : `rotate(${offsetY * .3}deg)`, transformOrigin: `50% 50%`}}>
                            <path d="M165.032 228.268L125.825 123.622L81.0501 154.545L165.032 228.268Z" fill="#5BEBC1"/>
                            <path d="M32.2433 39.6899L116.226 113.413L71.4508 144.337L32.2433 39.6899Z" fill="#02D9FC"/>
                        </svg>
                    {/* </div> */}

                </div>
                </Media>
                <Media lessThan="md">
                    <div className={styles.designBlock}>
                        <svg width="100" height="182" viewBox="0 0 345 482" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle r="167.076" transform="matrix(0.359412 -0.933179 -0.933179 -0.359412 235 216.37)" fill="#1C345C"/>
                            <path d="M304.032 308.268L264.825 203.622L220.05 234.545L304.032 308.268Z" fill="#5BEBC1"/>
                            <path d="M171.243 119.69L255.226 193.413L210.451 224.337L171.243 119.69Z" fill="#02D9FC"/>
                            <ellipse rx="46" ry="44.5" transform="matrix(0.359412 -0.933179 -0.933179 -0.359412 126.059 360.92)" fill="#3F5CFB"/>
                        </svg>
                        <svg width="75" height="70" viewBox="0 0 159 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.775391" y="79.4914" width="157.252" height="96.5799" fill="#162740"/>
                            <path d="M0.775391 79.119L79.2912 32.7709L158.027 79.4911L79.5115 125.839L0.775391 79.119Z" fill="#5BEBC1"/>
                        </svg>
                        <svg width="40" height="52" viewBox="0 0 58 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M57.8672 25.5594L28.932 -3.46965e-06L28.932 51.1188L57.8672 25.5594Z" fill="#02D9FC"/>
                            <path d="M28.9355 25.5594L0.000365601 -3.46965e-06L0.000366211 51.1188L28.9355 25.5594Z" fill="#5BEBC1"/>
                        </svg>
                        <img src="/images/services-dots-dark-blue.svg" alt="services-dots-2" />

                    </div>
                </Media>
            </div>
        </section>
        </MediaContextProvider>
    )
}


