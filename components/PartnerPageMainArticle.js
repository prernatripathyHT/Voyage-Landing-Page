import styles from "./css/partnerPageMainArticle.module.css";



export default function PartnerPageMainArticle({currentPost}) {
  
    //console.log("currentPost", currentPost[0])


    return (
            <section className={styles.articlePage}>
                <div className={` container ${styles.mainArticle}`}>
                    <div className={styles.leftBlock}>
                        <h1 className={styles.partnerTitle}>About Emarsys</h1>
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
                        </p>
                    </div>
                    <div className={styles.rightBlock}>
                        <h4 className={styles.partnerCategoryTitle}>Categories</h4>
                        <p className={styles.partnerCategories}>
                        Customer Relationship Management, Email Service Provider, Customer Data Platform, Customer Service Platform, Loyalty
                        </p>

                        <h4 className={styles.partnerResourceTitle}>Resources</h4>
                        <div className={styles.partnerResourceList}>
                            <a href="">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5251 1.25949H15.8482L8.25092 8.86047C8.0049 9.10649 8.0049 9.50673 8.25092 9.75276C8.3721 9.87393 8.53366 9.93636 8.69523 9.93636C8.8568 9.93636 9.01836 9.87393 9.13954 9.75276L16.7405 2.15178V5.47491C16.7405 5.82375 17.0233 6.10649 17.3684 6.10649C17.7173 6.10649 18 5.82375 18 5.47491V0.631579C18 0.282742 17.7173 0 17.3684 0H12.5251C12.1763 0 11.8935 0.282742 11.8935 0.631579C11.8972 0.976744 12.1763 1.25949 12.5251 1.25949Z" fill="#3F5CFB"/>
                                    <path d="M3.77846 18H14.2179C16.3036 18 17.9963 16.3035 17.9963 14.2215V9.30477C17.9963 8.95594 17.7136 8.67687 17.3647 8.67687C17.0159 8.67687 16.7368 8.95961 16.7368 9.30477V14.2179C16.7368 15.6059 15.6059 16.7368 14.2179 16.7368H3.77846C2.39045 16.7368 1.25949 15.6059 1.25949 14.2179V5.92656V3.78213C1.25949 2.39412 2.39045 1.26316 3.77846 1.26316H8.65116C9 1.26316 9.27907 0.980416 9.27907 0.631579C9.27907 0.282742 8.99633 0 8.65116 0H3.77846C1.69278 0 0 1.69645 0 3.77846V5.92289V14.2179C0 16.3036 1.69645 18 3.77846 18Z" fill="#3F5CFB"/>
                                </svg>
                                <span>Community Intelligence Marketing Report: Deconstructing the Consumer Engagement Gap</span>
                            </a>
                            <a href="">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5251 1.25949H15.8482L8.25092 8.86047C8.0049 9.10649 8.0049 9.50673 8.25092 9.75276C8.3721 9.87393 8.53366 9.93636 8.69523 9.93636C8.8568 9.93636 9.01836 9.87393 9.13954 9.75276L16.7405 2.15178V5.47491C16.7405 5.82375 17.0233 6.10649 17.3684 6.10649C17.7173 6.10649 18 5.82375 18 5.47491V0.631579C18 0.282742 17.7173 0 17.3684 0H12.5251C12.1763 0 11.8935 0.282742 11.8935 0.631579C11.8972 0.976744 12.1763 1.25949 12.5251 1.25949Z" fill="#3F5CFB"/>
                                    <path d="M3.77846 18H14.2179C16.3036 18 17.9963 16.3035 17.9963 14.2215V9.30477C17.9963 8.95594 17.7136 8.67687 17.3647 8.67687C17.0159 8.67687 16.7368 8.95961 16.7368 9.30477V14.2179C16.7368 15.6059 15.6059 16.7368 14.2179 16.7368H3.77846C2.39045 16.7368 1.25949 15.6059 1.25949 14.2179V5.92656V3.78213C1.25949 2.39412 2.39045 1.26316 3.77846 1.26316H8.65116C9 1.26316 9.27907 0.980416 9.27907 0.631579C9.27907 0.282742 8.99633 0 8.65116 0H3.77846C1.69278 0 0 1.69645 0 3.77846V5.92289V14.2179C0 16.3036 1.69645 18 3.77846 18Z" fill="#3F5CFB"/>
                                </svg>
                                <span> Why WE tv Prioritizes Brand Community</span>
                            </a>
                            <a href="">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5251 1.25949H15.8482L8.25092 8.86047C8.0049 9.10649 8.0049 9.50673 8.25092 9.75276C8.3721 9.87393 8.53366 9.93636 8.69523 9.93636C8.8568 9.93636 9.01836 9.87393 9.13954 9.75276L16.7405 2.15178V5.47491C16.7405 5.82375 17.0233 6.10649 17.3684 6.10649C17.7173 6.10649 18 5.82375 18 5.47491V0.631579C18 0.282742 17.7173 0 17.3684 0H12.5251C12.1763 0 11.8935 0.282742 11.8935 0.631579C11.8972 0.976744 12.1763 1.25949 12.5251 1.25949Z" fill="#3F5CFB"/>
                                    <path d="M3.77846 18H14.2179C16.3036 18 17.9963 16.3035 17.9963 14.2215V9.30477C17.9963 8.95594 17.7136 8.67687 17.3647 8.67687C17.0159 8.67687 16.7368 8.95961 16.7368 9.30477V14.2179C16.7368 15.6059 15.6059 16.7368 14.2179 16.7368H3.77846C2.39045 16.7368 1.25949 15.6059 1.25949 14.2179V5.92656V3.78213C1.25949 2.39412 2.39045 1.26316 3.77846 1.26316H8.65116C9 1.26316 9.27907 0.980416 9.27907 0.631579C9.27907 0.282742 8.99633 0 8.65116 0H3.77846C1.69278 0 0 1.69645 0 3.77846V5.92289V14.2179C0 16.3036 1.69645 18 3.77846 18Z" fill="#3F5CFB"/>
                                </svg>
                                <span>Wolverine: Why a Footwear Brand Recommends AspireIQ to Manage Influencer Marketing</span>
                            </a>
                            <a href="">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5251 1.25949H15.8482L8.25092 8.86047C8.0049 9.10649 8.0049 9.50673 8.25092 9.75276C8.3721 9.87393 8.53366 9.93636 8.69523 9.93636C8.8568 9.93636 9.01836 9.87393 9.13954 9.75276L16.7405 2.15178V5.47491C16.7405 5.82375 17.0233 6.10649 17.3684 6.10649C17.7173 6.10649 18 5.82375 18 5.47491V0.631579C18 0.282742 17.7173 0 17.3684 0H12.5251C12.1763 0 11.8935 0.282742 11.8935 0.631579C11.8972 0.976744 12.1763 1.25949 12.5251 1.25949Z" fill="#3F5CFB"/>
                                    <path d="M3.77846 18H14.2179C16.3036 18 17.9963 16.3035 17.9963 14.2215V9.30477C17.9963 8.95594 17.7136 8.67687 17.3647 8.67687C17.0159 8.67687 16.7368 8.95961 16.7368 9.30477V14.2179C16.7368 15.6059 15.6059 16.7368 14.2179 16.7368H3.77846C2.39045 16.7368 1.25949 15.6059 1.25949 14.2179V5.92656V3.78213C1.25949 2.39412 2.39045 1.26316 3.77846 1.26316H8.65116C9 1.26316 9.27907 0.980416 9.27907 0.631579C9.27907 0.282742 8.99633 0 8.65116 0H3.77846C1.69278 0 0 1.69645 0 3.77846V5.92289V14.2179C0 16.3036 1.69645 18 3.77846 18Z" fill="#3F5CFB"/>
                                </svg>
                                <span>Purple Mattress: How a Home Brand Differentiates Itself by Leveraging a Community of Diverse Content Creators</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

    )
}