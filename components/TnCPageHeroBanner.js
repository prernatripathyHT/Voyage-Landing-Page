import { TermsAndConditionsData } from '../data/TnCPageHeroBanner';
import styles from './css/tncPageHeroBanner.module.css';
import gsap from 'gsap';
import { useEffect } from 'react';

export default function TnCPageHeroBanner(){

    useEffect(() => {
        const timeline = gsap.timeline({defaults:{duration:1}});

        timeline.from('.title-anim', {y:'30%',stagger:.6,opacity:0})
        .from('.anim-down svg', {y:'-50%', opacity:0}, ".5")
        .from('.anim-right', {x:'-20%', opacity:0}, "-=1.5")
        .from('.anim-left', {x:'-40%', opacity:0}, "-=1")
        .from('.anim-up', {y:'40%', opacity:0}, "")
        .from('.anim-stagger svg', {y:'50%',stagger:.6,opacity:0})
        
    });



    return (
        <section className={styles.tncPageHeroBanner}>
            <div className={` container ${styles.heroBanner_innerWrapper}`}>
                <div className={styles.leftBlock}>

                    <div className={styles.designElements}>
                        <img src="/images/careers-dots-1.svg" alt="careers-dots-1" />
                    </div>


                    <h1 className={`title-anim ${styles.tncPageTitle}`}>{TermsAndConditionsData.titleText}</h1>
                    <div className={`title-anim ${styles.lastRevised}`}>
                        <p>Last Revised: {TermsAndConditionsData.lastRevised}</p>
                    </div>
                    <div className={`${styles.termsOfUse}`}>
                        <p>{TermsAndConditionsData.termsOfUse}</p>
                    </div>
                    <div className="">
                        <p className={`${styles.tncPageSubText}`}>{TermsAndConditionsData.subText_1}</p>
                        <p className={`${styles.tncPageSubText}`}>{TermsAndConditionsData.subText_2}</p>
                        <p className={`${styles.tncPageSubText}`}>{TermsAndConditionsData.subText_3}</p>
                    </div>
                    <div className={styles.terms}>
                        {TermsAndConditionsData.terms.map((term, index) => (
                            <div key={index} className={`${styles.termsDetails} ${term.highlight ? styles.highlight : null }`}>
                               <p>
                                    {term.id}. {term.title}
                                    {/* <span> {term.text}</span> */}
                                    {<span dangerouslySetInnerHTML={{ __html: term.text }} />}
                                    {term.bullets &&
                                        <span>
                                            <ul>
                                                {term.bullets.map((bullet, index) => (
                                                    <li>{bullet}</li>
                                                ))}
                                            </ul>
                                        </span>
                                    }
                                    {term.address &&
                                    <>
                                        { term.address.subText && <p>{term.address.subText}</p> }
                                        {/* <address>{term.address.address}</address> */}
                                       {<address dangerouslySetInnerHTML={{ __html: term.address.address }} />}
                                        {/* { term.address.note && <p>*NOTE: <span>{term.address.note}</span></p>} */}
                                        { term.address.note && <p>*NOTE: {<span dangerouslySetInnerHTML={{ __html: term.address.note }} />}</p>}
                                    </>
                                    }
                                </p>
                            </div>
                        ))}
                    </div>

                   
                </div>
                <div className={styles.rightBlock}>
                    <div className={styles.staticAssets}>
                        <svg width="289" height="299" viewBox="0 0 289 299" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="149.5" cy="149.5" r="149.5" fill="#3F5CFB" fill-opacity="0.83"/>
                        </svg>
                        <svg width="147" height="124" viewBox="0 0 147 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M112.024 94.4181L147.724 124V0H0.723633V94.4181H112.024Z" fill="#02D9FC"/>
                        </svg>
                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse rx="26.8734" ry="26.2762" transform="matrix(-1 0 0 1 27.1266 26.8031)" fill="#5BEBC1"/>
                        </svg>
                        <svg width="91" height="29" viewBox="0 0 91 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M67.723 29H91V0H0V29H67.723Z" fill="#405CFB"/>
                        </svg>


                        <img src="/images/careers-dots-2.svg" alt="careers-dots-2" />
                        <img src="/images/careers-dots-3.svg" alt="careers-dots-3" />
                    </div>
                    <div className={`anim-down ${styles.animmateDown}`}>
                        <svg width="55" height="114" viewBox="0 0 55 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.562 31.2627L0.207644 2.37748e-05L54.9164 2.86102e-05L27.562 31.2627Z" fill="#405CFB"/>
                            <path d="M27.562 63.585L0.207644 32.3223L54.9164 32.3223L27.562 63.585Z" fill="#405CFB"/>
                            <ellipse cx="27.3623" cy="90.477" rx="23.1148" ry="22.6012" transform="rotate(-180 27.3623 90.477)" fill="#0E1D37"/>
                        </svg>
                    </div>
                    <div className={`anim-up ${styles.animmateUp}`}>
                    <svg width="38" height="90" viewBox="0 0 38 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.9584 45L-0.000240248 89.5249L77.917 89.5249L38.9584 45Z" fill="#405CFB"/>
                        <path d="M38.9584 3.40587e-06L-0.000240248 44.5249L77.917 44.5249L38.9584 3.40587e-06Z" fill="#405CFB"/>
                    </svg>
                    </div>
                    <div className={`anim-left ${styles.animateLeft}`}>
                        <svg width="68" height="60" viewBox="0 0 68 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M67.7195 29.5594L34.256 -4.9192e-05L34.256 59.1188L67.7195 29.5594Z" fill="#02D9FC"/>
                            <path d="M34.2559 29.5594L0.792377 -4.9192e-05L0.792377 59.1188L34.2559 29.5594Z" fill="#02D9FC"/>
                        </svg> 
                    </div>
                    <div className={`anim-right ${styles.animateRight}`}>
                        <svg width="415" height="89" viewBox="0 0 415 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="415" height="66" fill="#F6F6F6"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M76.6535 67.768L103 89V0H0V67.768H76.6535Z" fill="#5BEBC1"/>
                        </svg>
                    </div>
                    <div className={`anim-stagger ${styles.animateStagger}`}>
                        <svg width="36" height="22" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.6781 21.0925L5.90062e-05 0.888673L35.3562 0.888676L17.6781 21.0925Z" fill="#405CFB"/>
                        </svg>
                        <svg width="36" height="22" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.6781 21.0925L5.90062e-05 0.888673L35.3562 0.888676L17.6781 21.0925Z" fill="#405CFB"/>
                        </svg>
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="15.5491" cy="15.4717" rx="14.9382" ry="14.6063" transform="rotate(-180 15.5491 15.4717)" fill="#0E1D37"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}


