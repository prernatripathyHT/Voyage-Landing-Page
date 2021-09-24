import styles from "./css/partnerPageTags.module.css";
import {useState} from 'react';

export default function PartnerPageTags(){

    const [tagActive, setTagActive] = useState("technology");


    const handleTagClick = (tag) => {
        setTagActive(tag);
    }

    return(
        <section className={styles.tagFilteringSection}>
            <div className={`container ${styles.sectionContainer}`}>
                <div className={styles.tagContainer}>
                    <p className={`${styles.partnerTag} ${tagActive == "technology" ? styles.tagActive : null} `} onClick={() =>handleTagClick("technology")}>Technology partners</p>
                    <p className={`${styles.partnerTag} ${tagActive == "agency" ? styles.tagActive : null} `} onClick={() =>handleTagClick("agency")}>Agency partners</p>
                </div>
            </div>
        </section>
    )
}