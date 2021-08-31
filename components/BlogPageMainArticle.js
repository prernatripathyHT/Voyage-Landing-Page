import styles from "./css/blogPageMainArticle.module.css";
import dateFormat from 'dateformat';



export default function BlogPostPage({currentPost}) {

    //console.log("currentPost", currentPost[0])

    return (
            <section className={styles.articlePage}>
                <div className={` container ${styles.mainArticle}`}>
                    <div className={styles.mainArticleImage}>
                        <img src={`${currentPost[0].feature_image}`} />
                    </div>
                    <div className={`${styles.mainArticleData}`}>
                        <div className={styles.topBar}>
                            <p className={styles.articleTag}>{ currentPost[0].tags.length > 0 ? currentPost[0].tags[0].name : "Voyage"}</p>
                            
                            <div className={styles.topRight}>
                                <p>Published on {dateFormat(`${currentPost[0].published_at}`, "d mmmm, yy")}</p>
                                <svg width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg">     
                                    <circle cx="1.5" cy="2" r="1.5" fill="#CBCBCB"/>
                                </svg>
                                <p>{currentPost[0].reading_time} min read</p>
                            </div>
                       
                        </div>
                        <div className={styles.bodyContent}>
                            <div className={` aos-init ${styles.bodyTitle}`} data-aos="fade-up" data-aos-duration="1000">{currentPost[0].title}</div>
                            <div dangerouslySetInnerHTML={{__html: currentPost[0].html }} className={`${styles.bodyHTML}`} data-aos="fade-up" data-aos-duration="1500">
                        </div>
                        </div>
                    </div>
                    <div className={styles.socialIcons}>
                        <div className={`${styles.socialIcon_fb} ${styles.socialIcon}`}><a href={`https://www.facebook.com/sharer/sharer.php?u=https://voyagesms.com/blog/${currentPost[0].slug}`} target="_blank"><img src={`/images/voyage-blog-fb-icon.png`} /></a></div>
                        <div className={`${styles.socialIcon_tw} ${styles.socialIcon}`}><a href={`https://www.twitter.com/sharer/sharer.php?u=https://voyagesms.com/blog/${currentPost[0].slug}`} target="_blank"><img src={`/images/voyage-blog-tw-icon.png`} /></a></div>
                        <div className={`${styles.socialIcon_li} ${styles.socialIcon}`}><a href={`https://www.linkedin.com/sharer/sharer.php?u=https://voyagesms.com/blog/${currentPost[0].slug}`} target="_blank"><img src={`/images/voyage-blog-li-icon.png`} /></a></div>
                    </div>
                </div>
            </section>

    )
}