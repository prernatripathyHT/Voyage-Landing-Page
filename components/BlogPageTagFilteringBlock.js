import styles from "./css/blogPageTagFilteringBlock.module.css";
import Link from 'next/link';
import {useCallback, useState} from 'react';
import debounce from 'lodash.debounce';
import { BlogPageCategoriesData } from "../data/BlogPageTagFilteringBlock";
import OutsideClickHandler from 'react-outside-click-handler';



export default function BlogPageFilteringBlock({posts, handleTagClick, handleSearch}) {
    const [filteredTitles, setFilteredTitles] = useState([]);
    const [isCategoryActive, setCategoryActive] = useState("all");
    const [isSubCategoryActive, setSubCategoryActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [subTagsVisible, setSubTagsVisible] = useState(false);
    const [subTagsChecked, setSubTagsChecked] = useState(
        [false, false, false, false, false]
    );
    const [subTagSVG, setSubTagSVG] = useState('180deg');
    const subCategoryTags = BlogPageCategoriesData[4].subcategories.map((slug) => slug);

   

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

        if(slugName === "voyage-sms-news"){

        let allSubTagsUnchecked1 = subTagsChecked.every(v => v === false);
        console.log("are all subtags unchecked ?", allSubTagsUnchecked1)
        
        if(allSubTagsUnchecked1)
        setCategoryActive(null);
        else{
            setCategoryActive(slugName);
        }

        }
      };

      const toggleSubCategoryClass = (slugName) => {
        //console.log("slug clicked subcategory", slugName)
        setSubCategoryActive(slugName);
      };


    //open and close the subcategory section
    const handleSubTags = () =>{
        setSubTagsVisible(!subTagsVisible);

        subTagSVG  === "180deg" ? setSubTagSVG("0deg") : setSubTagSVG("180deg");

       
    }


    //create an array from the checked subcategories for API call
    const handleCheckedTags = (position, checkedTagSlug) => {
        //console.log("checked tag is", checkedTag);
        //setSubTagsChecked(subTagsChecked => [...subTagsChecked, checkedTag] );

        const updatedTagsState = subTagsChecked.map((item, index) => 
            index === position ? !item : item
        )
        //console.log("current checked tags", updatedTagsState);
        setSubTagsChecked(updatedTagsState);


        //Array Reduce method to map the checked values to the tag Slugs
        const tagURL = updatedTagsState.reduce(
            (url, currentState, index) => {
                if(currentState == true){
                    return url + ` ${subCategoryTags[index].slug} ,`
                }

                return url
            },
            ""
        );

        //console.log("current Tag URL", (tagURL).replace(/,\s*$/, "").replaceAll(" ", ""))
       
        handleTagClick((tagURL).replace(/,\s*$/, "").replaceAll(" ", ""));

    }


    const handleOutsideClick = () => {
        setSubTagsVisible(false); 
       
        setSubTagSVG("180deg");

        let allSubTagsUnchecked = subTagsChecked.every(v => v === false);
        //console.log("are all subtags unchecked ?", allSubTagsUnchecked)

        if(allSubTagsUnchecked)
        setCategoryActive(null);
        else{
            setCategoryActive("voyage-sms-news");
        }
    }

    return (
        <section className={styles.tagFilteringSection}> 
             <div className={`container ${styles.filterSearchDiv}`}>

                <div className={styles.SearchDiv}>
                    <div className={styles.searchIcon}>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.8594 16.7383L13.6055 12.4844C13.5 12.4141 13.3945 12.3438 13.2891 12.3438H12.832C13.9219 11.0781 14.625 9.39062 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9.14062 14.875 10.793 14.207 12.0938 13.1172V13.5742C12.0938 13.6797 12.1289 13.7852 12.1992 13.8906L16.4531 18.1445C16.6289 18.3203 16.9102 18.3203 17.0508 18.1445L17.8594 17.3359C18.0352 17.1953 18.0352 16.9141 17.8594 16.7383ZM7.3125 13.1875C4.18359 13.1875 1.6875 10.6914 1.6875 7.5625C1.6875 4.46875 4.18359 1.9375 7.3125 1.9375C10.4062 1.9375 12.9375 4.46875 12.9375 7.5625C12.9375 10.6914 10.4062 13.1875 7.3125 13.1875Z" fill="black"/>
                    </svg>
                    </div>
                    <input type="text" placeholder="Search by title or any keyword" onChange={(e) => filterTitles(e.target.value)}/>
                    { filteredTitles.length !=0 &&(
                    <OutsideClickHandler onOutsideClick={() => {setFilteredTitles([])}}>
                    <div className={styles.searchBoxTitles}>
                        <p className={styles.searchBoxHeader}>Showing Blogs related to <span>"{searchValue}"</span></p>
                        {filteredTitles.slice(0,10).map((post,index) => {
                            return <Link href="/blog/[slug]" as={`/blog/${post.slug}`} key={index}><a><div  className={styles.postTitles}>{post.title}</div></a></Link>
                        })}
                    </div>
                    </OutsideClickHandler>
                    )}      
                </div>

                <div className={styles.FilterDiv}>
                 
                        <div className={styles.postTags}><p className={`${isCategoryActive == "all" ? styles.categoryActive : null}`} onClick={()=> {handleTagClick(null); toggleCategoryClass("all");setSubTagsVisible(false); setSubTagsChecked([false, false, false, false, false]); setSubTagSVG("180deg"); }}>All</p></div>
                        {BlogPageCategoriesData.map((category,index) => (
                            category.subcategories.length < 1 ?
                            <div key={index} className={styles.postTags}>
                                <p className={isCategoryActive === `${category.slug}` ? styles.categoryActive : null} onClick={()=> {handleTagClick(category.slug); toggleCategoryClass(category.slug);setSubTagsVisible(false);setSubTagsChecked([false, false, false, false, false]); setSubTagSVG("180deg"); }} >{category.display_title}</p>
                            </div> 
                            : 
                            <div key={index} className={` ${styles.postTags} ${styles.subTag}`}>
                            <OutsideClickHandler onOutsideClick={handleOutsideClick}>
                            <p className={isCategoryActive === "voyage-sms-news" ? styles.categoryActive : null}  onClick={() => {handleSubTags(); toggleCategoryClass("voyage-sms-news")}}>
                                {category.display_title} 
                                <svg style={{ transform: `rotate(${subTagSVG})`}} width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.08838 1.12041L0.169625 8.05835C-0.0569267 8.28566 -0.0565459 8.65369 0.170797 8.88062C0.398111 9.10738 0.766342 9.10679 0.993069 8.87945L7.50003 2.35448L14.007 8.87969C14.2337 9.107 14.6017 9.10759 14.8291 8.88086C14.943 8.7671 15 8.61807 15 8.46903C15 8.32038 14.9434 8.17193 14.8302 8.05838L7.91165 1.12041C7.80272 1.01093 7.65448 0.94949 7.50003 0.94949C7.34558 0.94949 7.19751 1.0111 7.08838 1.12041Z" fill="black"/>
                                </svg>
                                </p>

                            
                            { subTagsVisible &&
                            <div className={styles.subCategoryBox}>  
                            {category.subcategories.map((subcategory, index) => (
                                <div  key={index} className={`${styles.subCategories} ${isSubCategoryActive === subcategory.slug ? styles.subCategoryActive : null}`}>
                                  <input type="checkbox" id={`${subcategory.id}`} name={subcategory.title} value={subcategory.title} checked={subTagsChecked[index]} onChange={()=> {handleCheckedTags(index, subcategory.slug);}} />
                                  <label htmlFor={`${subcategory.id}`}> {subcategory.title}</label>
                                </div>
                            ))}
                            </div>
                            
                            }
                            </OutsideClickHandler>

                        </div> 
                        ))}
             
                 </div>

            </div>
        </section>
    )
}