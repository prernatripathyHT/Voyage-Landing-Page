import { CareersPageHeroBannerData } from '../data/CareersPageHeroBanner';
import styles from './css/careersPageHeroBanner.module.css';
import gsap from 'gsap';
import { useEffect } from 'react';

export default function CareersPageHeroBanner(){

    useEffect(() => {
        const timeline = gsap.timeline({defaults:{duration:1}});

        timeline.from('.title-anim', {y:'30%',stagger:.6,opacity:0})
        .from('.anim-down svg', {y:'-50%',stagger:.5, opacity:0}, "1.5")
        .from('.anim-right', {x:'-40%', opacity:0}, "0")
        .from('.anim-up', {y:'40%', opacity:0}, "1.2")
        
    })
    return (
        <section className={styles.careersPageHeroBanner}>
            <div className={` container ${styles.heroBanner_innerWrapper}`}>
                <div className={styles.leftBlock}>
                    <h1 className={`title-anim ${styles.careersPageTitle}`}>{CareersPageHeroBannerData.titleText}</h1>
                    <div className="title-anim">
                        <p className={`${styles.careersPageSubText}`}>{CareersPageHeroBannerData.subText_1}</p>
                        <p className={`${styles.careersPageSubText}`}>{CareersPageHeroBannerData.subText_2}</p>
                    </div>
                    <div className={styles.designElements}>
                        <img src="/images/careers-dots-1.svg" alt="careers-dots-1" />
                    </div>
                </div>
                <div className={styles.rightBlock}>
                    <div className={styles.staticAssets}>
                        <svg width="306" height="299" viewBox="0 0 306 299" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="149.708" cy="149.5" r="149.5" fill="#3F5CFB" fill-opacity="0.83"/>
                            <path d="M285.3 220.418L321 250V126H174V220.418H285.3Z" fill="#5BEBC1" fill-opacity="0.8"/>
                            <ellipse rx="26.8734" ry="26.2762" transform="matrix(-1 0 0 1 116.334 221.803)" fill="#5BEBC1"/>
                        </svg>

                        <img src="/images/careers-dots-2.svg" alt="careers-dots-2" />
                        <img src="/images/careers-dots-3.svg" alt="careers-dots-3" />
                    </div>
                    <div className={`anim-down ${styles.animmateDown}`}>
                        <svg width="55" height="32" viewBox="0 0 55 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.562 31.2627L0.207644 2.37748e-05L54.9164 2.86102e-05L27.562 31.2627Z" fill="#405CFB"/>
                        </svg>
                        <svg width="55" height="32" viewBox="0 0 55 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.562 31.2627L0.207644 2.37748e-05L54.9164 2.86102e-05L27.562 31.2627Z" fill="#405CFB"/>
                        </svg>
                        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="23.3623" cy="23.477" rx="23.1148" ry="22.6012" transform="rotate(-180 23.3623 23.477)" fill="#0E1D37"/>
                        </svg>
                    </div>
                    <div className={`anim-up ${styles.animmateUp}`}>
                        <svg width="55" height="90" viewBox="0 0 55 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.166 45L0.207401 89.5249L78.1246 89.5249L39.166 45Z" fill="#405CFB"/>
                            <path d="M39.166 3.40587e-06L0.207401 44.5249L78.1246 44.5249L39.166 3.40587e-06Z" fill="#405CFB"/>
                        </svg>
                    </div>
                    <div className={`anim-left ${styles.animateLeft}`}>
                        <svg width="92" height="29" viewBox="0 0 92 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M67.9306 29H91.2076V0H0.207642V29H67.9306Z" fill="#405CFB"/>
                        </svg>
                    </div>
                    <div className={`anim-right ${styles.animateRight}`}>
                        <svg width="67" height="60" viewBox="0 0 67 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M66.9269 29.5595L33.4634 7.28783e-05L33.4634 59.1189L66.9269 29.5595Z" fill="#02D9FC"/>
                            <path d="M33.4635 29.5595L1.83685e-05 7.28783e-05L1.90735e-05 59.1189L33.4635 29.5595Z" fill="#02D9FC"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}


