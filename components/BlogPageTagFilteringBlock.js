import styles from "./css/blogPageTagFilteringBlock.module.css";
import Link from 'next/link';
import {useCallback, useState} from 'react';
import debounce from 'lodash.debounce';
import { BlogPageCategoriesData } from "../data/BlogPageTagFilteringBlock";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
    dots: true,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth:true,
    cssEase:`cubic-bezier(.51,.11,.44,.96)`,
  };


export default function BlogPageFilteringBlock({posts, handleTagClick, handleSearch}) {
    const [filteredTitles, setFilteredTitles] = useState([]);
    const [isCategoryActive, setCategoryActive] = useState(false);
    const [isSubCategoryActive, setSubCategoryActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [subTagsVisible, setSubTagsVisible] = useState(false);

    //debouncing the search term displayed 
    // const debouncedSave = debounce(() => setSearchValue(searchVal), 1000 )
    const debouncedSave = useCallback(debounce((searchVal) => setSearchValue(searchVal), 500 ), [])

    const filterTitles = (searchVal) => {
        //console.log("search val is", searchVal);


        
        debouncedSave(searchVal);


        const filteredTitles = posts.posts.filter((val) => {
           return val.title.toLowerCase().includes(searchVal.toLowerCase());
        });

        if(searchVal == ""){
            setFilteredTitles([]);
        }else{
        setFilteredTitles(filteredTitles);
        }
    }

    const toggleCategoryClass = (slugName) => {
        //console.log("slug clicked", slugName)
        setCategoryActive(slugName);
      };

      const toggleSubCategoryClass = (slugName) => {
        console.log("slug clicked subcategory", slugName)
        setSubCategoryActive(slugName);
      };



    const handleSubTags = () =>{
        setSubTagsVisible(!subTagsVisible);
    }

    return (
        <section className={styles.tagFilteringSection}> 
             <div className={`container ${styles.filterSearchDiv}`}>

                <div className={styles.SearchDiv}>
                    <div className={styles.searchIcon}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z" fill="black"/>
                        <path d="M19.7617 18.6121L15.1005 13.9509C14.7829 13.6332 14.2685 13.6332 13.9509 13.9509C13.6332 14.2682 13.6332 14.7831 13.9509 15.1005L18.6121 19.7617C18.7709 19.9205 18.9788 19.9999 19.1869 19.9999C19.3948 19.9999 19.6029 19.9205 19.7617 19.7617C20.0794 19.4444 20.0794 18.9295 19.7617 18.6121Z" fill="black"/>
                    </svg>
                    </div>
                    <input type="text" placeholder="Search by title or any keyword" onChange={(e) => filterTitles(e.target.value)}/>
                    { filteredTitles.length !=0 &&(
                    <div className={styles.searchBoxTitles}>
                        <p className={styles.searchBoxHeader}>Showing Blogs related to <span>"{searchValue}"</span></p>
                        {filteredTitles.slice(0,10).map((post,index) => {
                            return <Link href="/blog/[slug]" as={`/blog/${post.slug}`} key={index}><a><div  className={styles.postTitles}>{post.title}</div></a></Link>
                        })}
                    </div>
                    )}      
                </div>

                <div className={styles.FilterDiv}>
                    {/* <Slider {...settings}> */}
                        <div className={styles.postTags}><p className={isCategoryActive == "all" ? styles.categoryActive : null} onClick={()=> {handleTagClick(null); toggleCategoryClass("all");setSubTagsVisible(false) }}>All</p></div>
                        {BlogPageCategoriesData.map((category,index) => (
                            category.subcategories.length > 1 ?
                            <div key={index} className={` ${styles.postTags} ${styles.subTag}`}>
                                <p className={isCategoryActive === "voyage-sms-news" ? styles.categoryActive : null}  onClick={() => {handleSubTags(); toggleCategoryClass("voyage-sms-news")}}>
                                    {category.title} 
                                    <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.08838 1.12041L0.169625 8.05835C-0.0569267 8.28566 -0.0565459 8.65369 0.170797 8.88062C0.398111 9.10738 0.766342 9.10679 0.993069 8.87945L7.50003 2.35448L14.007 8.87969C14.2337 9.107 14.6017 9.10759 14.8291 8.88086C14.943 8.7671 15 8.61807 15 8.46903C15 8.32038 14.9434 8.17193 14.8302 8.05838L7.91165 1.12041C7.80272 1.01093 7.65448 0.94949 7.50003 0.94949C7.34558 0.94949 7.19751 1.0111 7.08838 1.12041Z" fill="black"/>
                                    </svg>
                                    </p>

                                { subTagsVisible &&
                                <div className={styles.subCategoryBox}>  
                                {category.subcategories.map((subcategory, index) => (
                                    <div  key={index} className={`${styles.subCategories} ${isSubCategoryActive === subcategory.slug ? styles.subCategoryActive : null}`} onClick={()=> {handleTagClick(subcategory.slug); toggleSubCategoryClass(subcategory.slug)}} >
                                      <input type="checkbox" id={`${subcategory.id}`} name="subcategiry" value={subcategory.title} />
                                      <label htmlFor={`${subcategory.id}`}> {subcategory.title}</label><br></br>
                                    </div>
                                ))}
                                </div>
                                }

                            </div> 
                            : 
                            <div key={index} className={styles.postTags}>
                                <p className={isCategoryActive === `${category.slug}` ? styles.categoryActive : null} onClick={()=> {handleTagClick(category.slug); toggleCategoryClass(category.slug);setSubTagsVisible(false) }} >{category.title}</p>
                            </div> 
                        ))}
                        {/* </Slider> */}
                 </div>

            </div>
        </section>
    )
}