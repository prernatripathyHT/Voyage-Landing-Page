import { AboutPageHeroBannerData } from '../data/AboutPageHeroBanner';
import styles from './css/aboutPageHeroBanner.module.css';

export default function AboutPageHeroBanner(){
    return (
        <section className={styles.aboutPageHeroBanner}>
            <div className={` container ${styles.heroBanner_innerWrapper}`}>
                <div className={styles.leftBlock}>
                    <h1 className={styles.aboutPageTitle}>{AboutPageHeroBannerData.titleText}</h1>
                    <p className={styles.aboutPageSubText}>{AboutPageHeroBannerData.subText_1}</p>
                    <p className={styles.aboutPageSubText}>{AboutPageHeroBannerData.subText_2}</p>
                </div>
                <div className={styles.rightBlock}>
                    svg goes here... <br/>
                    <svg width="68" height="60" viewBox="0 0 68 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M67.7187 29.5595L34.2553 7.28783e-05L34.2553 59.1189L67.7187 29.5595Z" fill="#02D9FC"/>
                        <path d="M34.2559 29.5595L0.792377 7.28783e-05L0.792377 59.1189L34.2559 29.5595Z" fill="#02D9FC"/>
                    </svg>
                </div>
            </div>
        </section>
    )
}


