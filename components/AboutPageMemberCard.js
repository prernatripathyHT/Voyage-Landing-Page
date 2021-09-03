import styles from "./css/aboutPageMemberCard.module.css";
import {useState} from 'react';

const AboutPageMemberCard  = ({member}) =>{

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }
    return(

        <div className={`${isFlipped && styles.flip} ${styles.cardContainer}`}>
        <div className={styles.flipCard}>
            <div className={styles.frontCard}>
                <div className={styles.cardImage}>
                </div>

                <h3 className={styles.memberName}>Rev Reddy</h3>
                <p className={styles.memberDesignation}>CEO + Head of Product</p>
                <button className={styles.readBioButton} onClick={handleClick} style={{textDecoration:"underline", marginBottom: 20}}>Read Bio</button>

                <div className={styles.memberSocials}>
                    <a>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.9951 20V19.9992H20.0001V12.6642C20.0001 9.07581 19.2276 6.31165 15.0326 6.31165C13.0159 6.31165 11.6626 7.41831 11.1101 8.46748H11.0517V6.64665H7.07422V19.9992H11.2159V13.3875C11.2159 11.6467 11.5459 9.96332 13.7017 9.96332C15.8259 9.96332 15.8576 11.95 15.8576 13.4992V20H19.9951Z" fill="black"/>
                            <path d="M0.330078 6.64746H4.47674V20H0.330078V6.64746Z" fill="black"/>
                            <path d="M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0V0Z" fill="black"/>
                        </svg>
                    </a>

                    <a>
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2578 7.10253L20.0003 11.365V2.66003L13.2578 7.10253Z" fill="black"/>
                            <path d="M0 2.66003V11.365L6.7425 7.10253L0 2.66003Z" fill="black"/>
                            <path d="M18.7496 0.125H1.24961C0.625859 0.125 0.130859 0.59 0.0371094 1.18875L9.99961 7.7525L19.9621 1.18875C19.8684 0.59 19.3734 0.125 18.7496 0.125Z" fill="black"/>
                            <path d="M12.1125 7.85745L10.3438 9.02245C10.2388 9.0912 10.12 9.12495 10 9.12495C9.88004 9.12495 9.76129 9.0912 9.65629 9.02245L7.88754 7.8562L0.0400391 12.82C0.136289 13.4137 0.628789 13.875 1.25004 13.875H18.75C19.3713 13.875 19.8638 13.4137 19.96 12.82L12.1125 7.85745Z" fill="black"/>
                        </svg>
                    </a>
                </div>
            </div>

            <div className={styles.backCard}>
                <button className={styles.closeCardButton} onClick={handleClick} style={{marginBottom:20}}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14" cy="14" r="14" fill="#0E1D37"/>
                        <path d="M20.2997 7.70997C19.9097 7.31997 19.2797 7.31997 18.8897 7.70997L13.9997 12.59L9.10973 7.69997C8.71973 7.30997 8.08973 7.30997 7.69973 7.69997C7.30973 8.08997 7.30973 8.71997 7.69973 9.10997L12.5897 14L7.69973 18.89C7.30973 19.28 7.30973 19.91 7.69973 20.3C8.08973 20.69 8.71973 20.69 9.10973 20.3L13.9997 15.41L18.8897 20.3C19.2797 20.69 19.9097 20.69 20.2997 20.3C20.6897 19.91 20.6897 19.28 20.2997 18.89L15.4097 14L20.2997 9.10997C20.6797 8.72997 20.6797 8.08997 20.2997 7.70997Z" fill="white"/>
                    </svg>
                </button>

                <h3 className={styles.memberName}>Rev Reddy</h3>
                <p className={styles.memberDesignation}>CEO + Head of Product</p>

                <div className={styles.memberDetails}>
                    <p>
                        <span>Education: </span> Chicago, Booth
                    </p>
                    <p>
                        <span>Former: </span> Entrepreneur-in-Residence at NextGen Growth Partners, Ares Management, UBS
                    </p>
                    <p>
                        <span>Hobbies: </span> basketball, running
                    </p>
                </div>

            </div>
        </div>
        </div>
    )

}

export default AboutPageMemberCard;