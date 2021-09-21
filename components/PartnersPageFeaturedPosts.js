import {useState, useEffect} from 'react';
import styles from "./css/partnersPageFeaturedPosts.module.css";
import PartnerItem from "./PartnerItem";



export default function PartnersPageFeaturedPosts({posts}) {
    // const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(5);
    // const featuredPosts = {posts};
    const noOfPosts = {posts}.posts.posts.length;
   // console.log("no. of all posts", noOfPosts)

    const showMoreItems = () => {
        setVisible(prevValue => prevValue + 9);
    }   

    // useEffect(() => {
        
    //     setItems(featuredPosts.posts.posts);
       
    // }, []);


    // console.log("no. of visible blogs",visible)
 
    return (
        <section id={styles.allPosts} className={styles.allPosts}>
            <div className={`container ${styles.sectionContainer}`}>
             <div className={styles.allPostsContainer}>
                {{posts}.posts.posts.slice(0, visible).map(post => (
                    <PartnerItem key={post.id} post={post} /> 
                ))}        
            </div>
            <div className={styles.buttonContainer}>
                {visible < 18 && <button className={styles.showMoreButton} onClick={showMoreItems}>Load More</button>}
            </div>
            </div>
        </section>
    )
}

