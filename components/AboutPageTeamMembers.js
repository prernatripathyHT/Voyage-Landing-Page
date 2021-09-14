
import styles from "./css/aboutPageTeamMembers.module.css";
import {AboutPageMembersData} from "../data/AboutPageTeamMembers";


export default function AboutPageTeamMembers() {
    return(
        <section className={styles.aboutPageTeamMembers}>
            <div className={`container ${styles.aboutPageMembersData}`}>
                <h2 className={styles.teamHeading}>Team Members</h2>

                <div className={styles.memberDetails}>
                    {AboutPageMembersData.map((member, index) => (
                        <div key={index}>
                          <div className={`aos-init ${styles.memberCard}`} data-aos="fade-up" data-aos-duration="1000">
                              <div className={styles.memberImage}>
                                  <img src={`/images/${member.image}`} alt={member.name}/>
                              </div>
                              <div className={styles.memberData}>
                                  <p className={styles.memberDesignation}>{member.designation}</p>
                                  <h4 className={styles.memberName}>{member.name}</h4>
                                  <p className={styles.memberDescription}>{member.description}</p>
                              </div>
                          </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}