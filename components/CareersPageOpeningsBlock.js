import { CareersPageCurrentOpeningsData } from '../data/CareersPageCurrentOpenings';
import styles from './css/careersPageOpeningsBlock.module.css';

export default function CareersPageOpeningsBlock({openings}){
    return(
        <section className={styles.careersPageOpeningsBlock}>
            <div className={` container ${styles.currentOpenings_innerWrapper}`}>
                <h1 className={`${styles.careersPageTitle}`}>Current Openings</h1>

                <div className={styles.jobOpeningsSection}>
                    {openings.map((opening, index) => (
                        <div key={index} className={styles.currentOpening}>
                            <h3>{opening.categories.team}</h3>

                            <div className={styles.openingDetails}>
                                <p>{opening.text}</p>
                                <p>{opening.categories.location}</p>
                            </div>

                            <a className={styles.detailsBtn} href={opening.hostedUrl} target="_blank">View Details</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}