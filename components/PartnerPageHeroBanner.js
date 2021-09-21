
import styles from "./css/partnerPageHeroBanner.module.css";
import Link from 'next/link';


export default function PartnerPageHeroBanner({currentPost}) {



  return (
    <section id={styles.heroBanner}>
    <div className={styles.mainDiv}>
    <div className={`container ${styles.heroBannerContainer}`}>
      <div className={styles.leftBlock}>
       
        <Link href="/partners"><a className={styles.backToDirectoryLink}>
            <span>
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 5.65C17.359 5.65 17.65 5.35899 17.65 5C17.65 4.64101 17.359 4.35 17 4.35V5.65ZM0.54038 4.54038C0.286539 4.79422 0.286539 5.20578 0.54038 5.45962L4.67696 9.59619C4.9308 9.85003 5.34235 9.85003 5.59619 9.59619C5.85003 9.34235 5.85003 8.9308 5.59619 8.67696L1.91924 5L5.59619 1.32304C5.85003 1.0692 5.85003 0.657647 5.59619 0.403806C5.34235 0.149965 4.9308 0.149965 4.67696 0.403806L0.54038 4.54038ZM17 4.35L1 4.35V5.65L17 5.65V4.35Z" fill="white"/>
                </svg>
            </span>
            Back to directory
        </a></Link>

        <div className={styles.partnerInfo}>
            <div className={styles.partnerLogo}>
                <img src={`${currentPost[0].feature_image}`} />
            </div>
            <div className={styles.partnerDetails}>
                <p>Emarsys</p>
                <a href="" target="_blank" className={styles.partnerLink}>
                    <span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1332 1.11954H14.0871L7.33394 7.87597C7.11525 8.09466 7.11525 8.45043 7.33394 8.66912C7.44165 8.77683 7.58526 8.83232 7.72888 8.83232C7.87249 8.83232 8.01611 8.77683 8.12382 8.66912L14.8802 1.91269V4.86659C14.8802 5.17666 15.1316 5.42799 15.4384 5.42799C15.7485 5.42799 15.9998 5.17666 15.9998 4.86659V0.561404C15.9998 0.251326 15.7485 0 15.4384 0H11.1332C10.8231 0 10.5718 0.251326 10.5718 0.561404C10.5751 0.868217 10.8231 1.11954 11.1332 1.11954Z" fill="white"/>
                            <path d="M3.35863 16H12.6381C14.492 16 15.9967 14.492 15.9967 12.6414V8.27091C15.9967 7.96083 15.7454 7.71277 15.4353 7.71277C15.1253 7.71277 14.8772 7.9641 14.8772 8.27091V12.6381C14.8772 13.8719 13.8719 14.8772 12.6381 14.8772H3.35863C2.12485 14.8772 1.11954 13.8719 1.11954 12.6381V5.26805V3.36189C1.11954 2.12811 2.12485 1.12281 3.35863 1.12281H7.68992C8 1.12281 8.24806 0.871481 8.24806 0.561404C8.24806 0.251326 7.99674 0 7.68992 0H3.35863C1.50469 0 0 1.50796 0 3.35863V5.26479V12.6381C0 14.492 1.50796 16 3.35863 16Z" fill="white"/>
                        </svg>
                    </span>
                    emarsys.com
                </a>
                <button className={styles.contactBtn}>Contact Tech Partner</button>
            </div>
        </div>
      </div> 
    </div>

    <div className={styles.heroBannerBgElements}>
      <svg width="50" height="110" viewBox="0 0 50 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.583187 2.70299e-06L-48.0002 55L49.1665 55L0.583187 2.70299e-06Z" fill="#02D9FC"/>
        <path d="M0.583187 55L-48.0002 110L49.1665 110L0.583187 55Z" fill="#02D9FC"/>
      </svg>

      <svg width="398" height="419" viewBox="0 0 398 419" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
        <rect x="73.9312" y="332.913" width="323.956" height="85.878" fill="#405CFB"/>
        <path d="M73.9261 355.02V419H0.806641L73.9261 355.02Z" fill="white"/>
        <path d="M344.543 127.16L397 167V0H181V127.16H344.543Z" fill="#02D9FC"/>
        <rect width="144.208" height="42.653" transform="matrix(-1 0 0 1 218.129 264.411)" fill="#162740"/>
        <ellipse rx="22.8498" ry="22.3421" transform="matrix(-1 0 0 1 117.083 242.068)" fill="#5BEBC1"/>
        <rect width="64.9951" height="13.2021" transform="matrix(-1 0 0 1 136.886 206.525)" fill="#02D9FC"/>
        </g>
      </svg>

    </div>
    </div>
    </section>
  );
}
