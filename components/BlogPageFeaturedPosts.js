
import styles from "./css/blogPageFeaturedPosts.module.css";
import BlogItem from "./BlogItem"


export default function BlogPageFeaturedPosts({posts}) {

    const featuredPosts = {posts};
    //console.log("featured posts", featuredPosts)
    // const featuredPost = post.posts.posts[2];
    return (
        <section id={styles.featuredPosts} className={styles.featuredPosts}>
            <div className="container">
             <div className={styles.featuredPostsContainer}>
                {featuredPosts.posts.posts.map(post => (
                <BlogItem post={post} /> 
                ))}
            </div>
            </div>
         
        </section>
    )
}


//send a key for this  (IMPORTANT!)