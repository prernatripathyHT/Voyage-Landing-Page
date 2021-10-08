import styles from "./css/partnerPageMainArticle.module.css";



export default function PartnerPageMainArticle({currentPost}) {
  
    //console.log("currentPost", currentPost[0])


    return (
            <section className={styles.articlePage}>
                <div className={` container ${styles.mainArticle}`}>
                    <div className={styles.leftBlock}>
                        {/* <h1 className={styles.partnerTitle}>About Emarsys</h1>
                        <p className={styles.partnerDesc}>
                            Emarsys delivers the only omnichannel customer engagement platform built to accelerate business outcomes. With our platform you can reduce time to value, deliver superior 1:1 experiences and produce measurable results ... fast. We are the partner of choice for more than 2,500 companies around the world.
                        </p>
                        <div className={styles.partnerQuote}>
                            <figure>
                                <blockquote cite="">
                                    With all our data in Emarsys, we have all the segmentation that plugs straight into our Ad strategy. Automatically matching content to every audience has seriously boosted our revenue, especially with the increased reach and new streams.
                                </blockquote>
                                <figcaption>Alexandra Simion, Digital Marketing Manager at BrandAlley</figcaption>
                            </figure>
                        </div>
                        <h1 className={styles.integrationTitle}>Emarsys and Voyage</h1>
                        <p className={styles.integrationDesc}>
                            Voyage focuses on growing a net new channel, and creating enhanced personalized experiences in one of the most used apps on a mobile device - the text messaging app. Emarsys builds on that channel and adds to it email, web, social and mobile push delivering the only omnichannel customer engagement platform built to accelerate business outcomes.                        
                        </p> */}
                        <div dangerouslySetInnerHTML={{__html: currentPost[0].html }} className={`${styles.mainArticleBody}`}></div>

                    </div>
                    <div className={styles.rightBlock}>
                        {/* <h4 className={styles.partnerCategoryTitle}>Categories</h4>
                        <p className={styles.partnerCategories}>
                        Customer Relationship Management, Email Service Provider, Customer Data Platform, Customer Service Platform, Loyalty
                        </p>

                        <h4 className={styles.partnerResourceTitle}>Resources</h4>
                        <div className={styles.partnerResourceList}>
                            <a href="">
                                <span>Community Intelligence Marketing Report: Deconstructing the Consumer Engagement Gap</span>
                            </a>
                            <a href="">
                                <span> Why WE tv Prioritizes Brand Community</span>
                            </a>
                            <a href="">
                                <span>Wolverine: Why a Footwear Brand Recommends AspireIQ to Manage Influencer Marketing</span>
                            </a>
                            <a href="">
                                <span>Purple Mattress: How a Home Brand Differentiates Itself by Leveraging a Community of Diverse Content Creators</span>
                            </a>
                        </div> */}

                    <div dangerouslySetInnerHTML={{__html: currentPost[0].codeinjection_foot }} className={`${styles.codeInjectionFoot}`}></div>

                    </div>
                </div>
            </section>

    )
}