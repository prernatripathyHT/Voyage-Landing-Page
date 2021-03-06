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
                        <svg width="206" height="262" viewBox="0 0 206 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle r="94.3515" transform="matrix(0.359412 -0.933179 -0.933179 -0.359412 128.816 122.149)" fill="#1C345C"/>
                            <path d="M167.799 174.047L145.657 114.95L120.372 132.413L167.799 174.047Z" fill="#5BEBC1"/>
                            <path d="M92.8104 67.5523L140.237 109.185L114.952 126.649L92.8104 67.5523Z" fill="#02D9FC"/>
                            <ellipse rx="21.4566" ry="20.757" transform="matrix(0.359412 -0.933179 -0.933179 -0.359412 63.083 194.483)" fill="#3F5CFB"/>
                        </svg>
                        <img src="/images/services-dots-circle.svg" alt="services-dots-1" />
                        <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.6797 16.5594L18.9332 -3.59115e-06L18.9332 33.1188L37.6797 16.5594Z" fill="#02D9FC"/>
                            <path d="M18.9346 16.5594L0.188068 -3.59115e-06L0.188068 33.1188L18.9346 16.5594Z" fill="#5BEBC1"/>
                        </svg>
                        <img src="/images/services-dots-light-blue-mob.svg" alt="services-dots-2" />
                        <svg width="32" height="66" viewBox="0 0 32 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0324 18.249L0.0648419 9.77715e-07L32 3.8147e-06L16.0324 18.249Z" fill="#5BEBC1"/>
                            <path d="M16.0324 37.1154L0.0648419 18.8665L32 18.8665L16.0324 37.1154Z" fill="#3F5CFA"/>
                            <ellipse cx="15.694" cy="52.9049" rx="13.4075" ry="13.0452" transform="rotate(-180 15.694 52.9049)" fill="#162740"/>
                        </svg>
                    </div>
                </Media>
            </div>
        </section>
        </MediaContextProvider>
    )
}


