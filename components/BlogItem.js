import Link from 'next/link';
import styles from "./css/blogItem.module.css";


const BlogItem  = ({post}) =>{
    return(
        <Link href="/blog/[slug]" as={`/blog/${post.slug}`}><a className={`aos-init ${styles.blogItemLink}`} data-aos="fade-up" data-aos-duration="1000">
            <div className={styles.blogItemImage}>
                <img src={`https://sms-marketing-resources.ghost.io/${post.feature_image}`} />
            </div>
            <div className={styles.blogItemDetails}>
                <div className={styles.blogItemTagAndTime}>
                    <p>Thought Leadership</p>
                    <svg width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="1.5" cy="2" r="1.5" fill="#CBCBCB"/>
                    </svg>
                    <p>{post.reading_time} min read</p>
                </div>

                <h2 className={styles.blogItemTitle}>{post.title}</h2>
                <p className={styles.blogItemExcerpt}> {post.excerpt} </p>

            </div>
        </a></Link>
    )
}

export default BlogItem

