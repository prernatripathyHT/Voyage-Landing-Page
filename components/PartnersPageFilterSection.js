import styles from "./css/partnersPageFilterSection.module.css";

export default function PartnersPageFilterSection() {
    return(
        <section className={styles.filterSection}>
            <div className={`container ${styles.sectionContainer}`}>
               <div className={styles.topSection}>

                    <div className={styles.filterHeader}>
                       <h2>Filter</h2>
                       <button className={styles.filterResetBtn}>Reset</button>
                    </div>

                    <div className={styles.searchDiv}>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.8594 16.7383L13.6055 12.4844C13.5 12.4141 13.3945 12.3438 13.2891 12.3438H12.832C13.9219 11.0781 14.625 9.39062 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9.14062 14.875 10.793 14.207 12.0938 13.1172V13.5742C12.0938 13.6797 12.1289 13.7852 12.1992 13.8906L16.4531 18.1445C16.6289 18.3203 16.9102 18.3203 17.0508 18.1445L17.8594 17.3359C18.0352 17.1953 18.0352 16.9141 17.8594 16.7383ZM7.3125 13.1875C4.18359 13.1875 1.6875 10.6914 1.6875 7.5625C1.6875 4.46875 4.18359 1.9375 7.3125 1.9375C10.4062 1.9375 12.9375 4.46875 12.9375 7.5625C12.9375 10.6914 10.4062 13.1875 7.3125 13.1875Z" fill="black"/>
                        </svg>
                        <input type="text" placeholder="Search by title or any keyword" onChange={(e) => filterTitles(e.target.value)}/>
                    </div>

                    <div className={styles.categoryDiv}>
                        <h3>Category</h3>
                        <div className={styles.filterCategories}>
                            <input id="test" type="checkbox" name="test" value="test" />
                            <label htmlFor="test"> E-commerce Platform </label>
                        </div>
                    </div>

               </div>
               <div className={styles.bottomSection}>
                   <p>Can't find the integration you're looking for?</p>
                   <a>
                       <span>Request an Integration</span>
                       <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#3F5CFB"/>
                       </svg>
                    </a>
               </div>
            </div>
        </section>
    )
}