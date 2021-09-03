import AboutPageMemberCard from "./AboutPageMemberCard";
import styles from "./css/aboutPageTeamMembers.module.css";


export default function AboutPageTeamMembers() {

    const members = [1,2,3,4,5,6,7,8,9,10,11,12];

    return(
        <section className={styles.aboutPageTeamMembers}>
            <div className={`container`}>
                <h2 className={styles.teamHeading}>Our Team</h2>

                <div className={styles.memberDetails}>
                    {members.map((member, index) => (
                        <div key={index}>
                          <AboutPageMemberCard member={member} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}