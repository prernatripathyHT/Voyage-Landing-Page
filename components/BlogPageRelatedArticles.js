
import styles from "./css/blogPageRelatedArticles.module.css";
import BlogItem from "./BlogItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect} from 'react';




export default function BlogPageRelatedArticles({allPosts}) {




  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase:`cubic-bezier(.51,.11,.44,.96)`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  




  //console.log("all posts", allPosts)
 
    return (
      <section id={styles.blogPageRelatedArticles} className={styles.blogPageRelatedArticles}>
            <div className={`container blogPageRelatedItemsContainer ${styles.sectionContainer}`}>
              <h1 className={`${styles.relatedArticlesHeading}`}>Related Articles</h1>
             {/* <Slider {...settings}  className={styles.relatedPostsContainer}>
                {allPosts.map(post => (
                  <div key={post.id} className="relatedArticleItem">
                <BlogItem  post={post} /> 
                </div>        
                ))}    
                 
            </Slider> */}
            </div>
        </section>
    )
}

