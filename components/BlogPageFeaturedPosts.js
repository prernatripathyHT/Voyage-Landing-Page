
import styles from "./css/blogPageFeaturedPosts.module.css";
import BlogItem from "./BlogItem"


export default function BlogPageFeaturedPosts({posts}) {

    //console.log("posts inside featured component", posts)

    const featuredPosts = {posts};
 
    return (
        <section id={styles.featuredPosts} className={styles.featuredPosts}>
            <div className="container">
             <div className={styles.featuredPostsContainer}>
                {featuredPosts.posts.posts.slice(0, 6).map(post => (
                <BlogItem key={post.id} post={post} /> 
                ))}
            </div>
            </div>
         
        </section>
    )
}

