import { AboutPageHeroBannerData } from '../data/AboutPageHeroBanner';
import styles from './css/aboutPageHeroBanner.module.css';
import gsap from 'gsap';
import { useEffect } from 'react';

export default function AboutPageHeroBanner(){

    useEffect(() => {
        const timeline = gsap.timeline({defaults:{duration:1}});

        timeline.from('.title-anim', {y:'30%',stagger:.6,opacity:0})
        .from('.anim-down svg', {y:'-50%', opacity:0}, "1.5")
        .from('.anim-left', {x:'30%', opacity:0}, "-=2.2")
        .from('.anim-right', {x:'-40%', opacity:0}, "-=2.2")
        
    })
    return (
        <section className={styles.aboutPageHeroBanner}>
            <div className={` container ${styles.heroBanner_innerWrapper}`}>
                <div className={styles.leftBlock}>
                    <h1 id="aboutPageTitle" className={`title-anim ${styles.aboutPageTitle}`}>{AboutPageHeroBannerData.titleText}</h1>
                    <div className="title-anim">
                    <p className={`${styles.aboutPageSubText}`}>{AboutPageHeroBannerData.subText_1}</p>
                    <p className={`${styles.aboutPageSubText}`}>{AboutPageHeroBannerData.subText_2}</p>
                    </div>
                </div>
                <div className={styles.rightBlock}>
                    <div className={styles.staticAssets}>
                        <svg width="432" height="299" viewBox="0 0 432 299" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="282.5" cy="149.5" r="149.5" fill="#5864F9" fill-opacity="0.3"/>
                            <path d="M137.974 246.403L168.375 271.594V166H43.1953V246.403H137.974Z" fill="#02D9FC"/>
                            <ellipse rx="22.8845" ry="22.3759" transform="matrix(-1 0 0 1 22.8841 247.583)" fill="#5BEBC1"/>
                        </svg>

                        <img src="/images/about-dots-1.svg" alt="about-dots-1" />
                        <img src="/images/about-dots-2.svg" alt="about-dots-2" />

                        <svg width="114" height="72" viewBox="0 0 114 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5164 54.4265L0.000747681 71.4262V0.167725H84.4766V54.4265H20.5164Z" fill="#5BEBC1"/>
                            <ellipse cx="98.1815" cy="55.2226" rx="15.4432" ry="15.1" fill="#162740"/>
                        </svg>
                    </div>
                    <div className={`anim-down ${styles.animmateDown}`}>
                        <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.3395 60.2527L57.7649 39.3937L20.9141 39.3937L39.3395 60.2527Z" fill="#405CFB"/>
                            <path d="M39.3395 39.2839L57.7649 18.425L20.9141 18.425L39.3395 39.2839Z" fill="#405CFB"/>
                        </svg>
                    </div>
                    <div className={`anim-left ${styles.animateLeft}`}>
                        <svg width="292" height="46" viewBox="0 0 292 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="381" height="46" fill="#1021F7" fill-opacity="0.7"/>
                        </svg>
                    </div>
                    <div className={`anim-right ${styles.animateRight}`}>
                        <svg width="70" height="55" viewBox="0 0 70 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse rx="26.8734" ry="26.2762" transform="matrix(-1 0 0 1 42.15 27.8031)" fill="#5BEBC1"/>
                            <path d="M30.9512 27.0818L8.01086e-05 8.01086e-05L8.01086e-05 54.1636L30.9512 27.0818Z" fill="#405CFB"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}


