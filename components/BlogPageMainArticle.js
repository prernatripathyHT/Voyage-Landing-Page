import styles from "./css/blogPageMainArticle.module.css";

export default function BlogPostPage({currentPost}) {

    const post = {currentPost};

    //console.log("current post object is", post);
    return (
            <section className={styles.articlePage}>
                <div className={` container ${styles.mainArticle}`}>
                    <div className={styles.mainArticleImage}>
                        <img src={post.feature_image} />
                    </div>
                    <div className={`${styles.mainArticleData}`}>
                        <div className={styles.topBar}>
                            <p className={styles.articleTag}>Thought Leadership</p>
                            <p>Published on 18 Jun, 21</p>
                            <svg width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg">     
                                <circle cx="1.5" cy="2" r="1.5" fill="#CBCBCB"/>
                            </svg>
                            <p>{post.currentPost.reading_time} min read</p>
                        </div>
                        <div className={styles.bodyContent}>
                            <div className={styles.bodyTitle}>{post.currentPost.title}</div>
                            <div dangerouslySetInnerHTML={{__html: post.currentPost.html }} className={`aos-init ${styles.bodyHTML}`} data-aos="fade-up" data-aos-duration="1000">
                        </div>
                        </div>
                    </div>
                </div>
            </section>

    )
}