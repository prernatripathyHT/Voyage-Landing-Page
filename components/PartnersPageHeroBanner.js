
import styles from "./css/partnersPageHeroBanner.module.css";



export default function PartnersPageHeroBanner() {



  return (
    <section id={styles.heroBanner}>
    <div className={styles.mainDiv}>
    <div className={`container ${styles.heroBannerContainer}`}>
      <div className={styles.leftBlock}>
        <p id="homePageSubtext" className={styles.bannerText} data-scroll>
            PARTNERS PAGE
        </p>
        <h1 id="homePageTitle" className={styles.bannerTitle} data-scroll>
            Lorem Ipsum dolor sit
        </h1>
      </div> 
    </div>

    <div className={styles.heroBannerBgElements}>
      <svg width="50" height="110" viewBox="0 0 50 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.583675 2.70299e-06L-47.9997 55L49.167 55L0.583675 2.70299e-06Z" fill="#02D9FC"/>
        <path d="M0.583675 55L-47.9997 110L49.167 110L0.583675 55Z" fill="#02D9FC"/>
      </svg> 

      <svg width="271" height="292" viewBox="0 0 271 292" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
        <rect x="49.9058" y="232.762" width="221.094" height="58.6102" fill="#405CFB"/>
        <path d="M49.9027 247.85V291.515H0L49.9027 247.85Z" fill="white"/>
        <path d="M234.8 89.9389L270.653 119.371V-4H123.024V89.9389H234.8Z" fill="#02D9FC"/>
        <rect width="98.4193" height="29.1099" transform="matrix(-1 0 0 1 148.319 185.01)" fill="#162740"/>
        <ellipse rx="15.5946" ry="15.2481" transform="matrix(-1 0 0 1 79.3561 169.762)" fill="#5BEBC1"/>
        <rect width="44.358" height="9.01022" transform="matrix(-1 0 0 1 92.8718 145.504)" fill="#02D9FC"/>
        </g>
      </svg>
    </div>
    </div>
    </section>
  );
}
