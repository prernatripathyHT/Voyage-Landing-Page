// import AboutPageMemberCard from "./AboutPageMemberCard";
import styles from "./css/aboutPageLeaders.module.css";
import {AboutPageLeadersData} from "../data/AboutPageLeaders";


export default function AboutPageLeaders() {


    return(
        <section className={styles.aboutPageLeaders}>
            <div className={`container ${styles.aboutPageLeadersData}`}>
                <h2 className={styles.teamHeading}>Leaders</h2>
                <div className={styles.designElements}>
                    <img src="/images/about-dots-1.svg" alt="about-dots-1" />
                    <img src="/images/about-dots-3.svg" alt="about-dots-3" />
                    <img src="/images/about-dots-4.svg" alt="about-dots-4" />
                </div>

                <div className={styles.memberDetails}>
                    {AboutPageLeadersData.map((member, index) => (
                        <div key={index}>
                          <div className={`animate ${styles.memberCard}`}>
                              <div className={styles.memberImage}>
                                  <img src={`/images/${member.image}`} alt={member.name}/>
                              </div>
                              <div className={styles.memberData}>
                                  <p className={styles.memberDesignation}>{member.designation}</p>
                                  <h4 className={styles.memberName}>{member.name}</h4>
                                  <p className={styles.memberDescription}>{member.description}</p>

                                  <div className={styles.memberSocials}>
                                    <div className={styles.socialLink}>
                                        <a href={member.linkedin} target="_blank">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.9951 20V19.9992H20.0001V12.6642C20.0001 9.07581 19.2276 6.31165 15.0326 6.31165C13.0159 6.31165 11.6626 7.41831 11.1101 8.46748H11.0517V6.64665H7.07422V19.9992H11.2159V13.3875C11.2159 11.6467 11.5459 9.96332 13.7017 9.96332C15.8259 9.96332 15.8576 11.95 15.8576 13.4992V20H19.9951Z" fill="black"/>
                                                <path d="M0.330078 6.64746H4.47674V20H0.330078V6.64746Z" fill="black"/>
                                                <path d="M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0V0Z" fill="black"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className={styles.socialLink}>
                                        <a href={`mailto:${member.email}`} target="_blank">
                                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.2578 7.10253L20.0003 11.365V2.66003L13.2578 7.10253Z" fill="black"/>
                                                <path d="M0 2.66003V11.365L6.7425 7.10253L0 2.66003Z" fill="black"/>
                                                <path d="M18.7496 0.125H1.24961C0.625859 0.125 0.130859 0.59 0.0371094 1.18875L9.99961 7.7525L19.9621 1.18875C19.8684 0.59 19.3734 0.125 18.7496 0.125Z" fill="black"/>
                                                <path d="M12.1125 7.85745L10.3438 9.02245C10.2388 9.0912 10.12 9.12495 10 9.12495C9.88004 9.12495 9.76129 9.0912 9.65629 9.02245L7.88754 7.8562L0.0400391 12.82C0.136289 13.4137 0.628789 13.875 1.25004 13.875H18.75C19.3713 13.875 19.8638 13.4137 19.96 12.82L12.1125 7.85745Z" fill="black"/>
                                            </svg>
                                        </a>
                                    </div>
                                  </div>
                              </div>
                          </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}