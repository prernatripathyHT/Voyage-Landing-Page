import { CareersPageCurrentOpeningsData } from '../data/CareersPageCurrentOpenings';
import styles from './css/careersPageOpeningsBlock.module.css';

export default function CareersPageOpeningsBlock(){
    return(
        <section className={styles.careersPageOpeningsBlock}>
            <div className={` container ${styles.currentOpenings_innerWrapper}`}>
                <h1 className={`${styles.careersPageTitle}`}>Current Openings</h1>

                <div className={styles.jobOpeningsSection}>
                    {CareersPageCurrentOpeningsData.map((opening, index) => (

                        opening.openings.length < 1 ?

                        <div key={index} className={styles.currentOpening}>
                            <h3>{opening.department}</h3>

                            <div className={styles.openingDetails}>
                                <p>{opening.position}</p>
                                <p>{opening.place}</p>
                            </div>

                            <a className={styles.detailsBtn} href={opening.link} target="_blank">View Details</a>
                        </div>
                        :
                        <div className={styles.currentOpenings}>
                            <h3>{opening.department}</h3>
                            <div className={styles.currentJobs}>
                                {opening.openings.map((job, index) => (
                                        <div className={styles.jobs}>
                                            <div key={index} className={styles.openingDetails}>
                                                <p>{job.position}</p>
                                                <p>{job.place}</p>
                                            </div>

                                            <a className={styles.detailsBtn} href={job.link} target="_blank">View Details</a>
                                        </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}