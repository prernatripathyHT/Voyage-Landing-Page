import styles from "./css/blogPageTagFilteringBlock.module.css";


export default function BlogPageFilteringBlock({posts, handleTagClick, handleSearch}) {
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
                    <input type="text" placeholder="Search by title or any keyword" onChange={(e) => handleSearch(e.target.value)}/>
                    {/* {searchTerm.length > 0 && <button className={styles.closeIcon}  onClick={handleClearInput}>X</button>} */}
                </div>

                <div className={styles.FilterDiv}>
                        <div className={styles.postTags}><p onClick={()=>handleTagClick(null)}>All</p></div>
                        {posts.posts.map((post,index) => (
                            <div key={index} className={styles.postTags}>{post.tags.map((tag, index)=> (
                                <p key={index} onClick={()=>handleTagClick(tag.slug)}>{tag.name}</p>
                            ))}</div>
                        ))}
                 </div>

            </div>
        </section>
    )
}