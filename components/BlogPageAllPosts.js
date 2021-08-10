import {useState, useEffect} from 'react';
import styles from "./css/blogPageAllPosts.module.css";
import BlogItem from "./BlogItem";
import BlogPageBottomBlock from "./BlogPageBottomBlock";


export default function BlogPageAllPosts({posts}) {
    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(9);
    const featuredPosts = {posts};
   
    const showMoreItems = () => {
        setVisible(prevValue => prevValue + 9);
    }   

    useEffect(() => {
        setItems(featuredPosts.posts.posts);
       
    }, []);
 
    return (
        <section id={styles.allPosts} className={styles.allPosts}>
            <div className={`container ${styles.sectionContainer}`}>
             <div className={styles.allPostsContainer}>
                {items.slice(6, visible).map(post => (
                <BlogItem key={post.id} post={post} /> 
                ))}        
            </div>
            <button className={styles.showMoreButton} onClick={showMoreItems}>Load More</button>
            </div>
            <BlogPageBottomBlock />
        </section>
    )
}

