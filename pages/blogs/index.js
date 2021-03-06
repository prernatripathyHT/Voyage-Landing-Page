import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogPageTagFilteringBlock from "../../components/BlogPageTagFilteringBlock";
import BlogPageHeroBanner from "../../components/BlogPageHeroBanner";
import BlogPageFeaturedPosts from "../../components/BlogPageFeaturedPosts";
import BlogPageSignupBlock from "../../components/BlogPageSignupBlock";
import BlogPageAllPosts from "../../components/BlogPageAllPosts";
import BlogPageBottomBlock from "../../components/BlogPageBottomBlock";
import Head from "next/head";
import RequestForm from "../../components/RequestForm";
import { useState } from "react";
import {useQueries, useQuery, useQueryClient, useQueryErrorResetBoundary} from 'react-query';

// const {CONTENT_API_KEY, BLOG_URL} = process.env;

// const CONTENT_API_KEY = 'c7bafa2c2c579763b605f57fb6';
// const BLOG_URL = 'https://sms-marketing-resources.ghost.io/';

const CONTENT_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BLOG_URL = process.env.NEXT_PUBLIC_BLOG_URL;






export const getStaticProps = async () => {
 
  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags&filter=tag:blog&order=published_at%20desc&limit=all`);
  const posts = await res.json();


  return {
    props: {posts}
  }
}




const getFeaturedPosts = () => {
  return  fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags&filter=featured:true`).then(res => res.json());
}




const getFilteredPosts = async(key) => {
  const tagName = key.queryKey[1].tag;
  //console.log("current tag name : ", tagName);
  if(tagName){   //if tags are present - this is where we are going to filter the posts
    // const myURL = `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags&filter=tag:[blog,${tagName}]&limit=all`;
    const myURL = `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags&filter=tag%3Ablog%2Btag%3A[${tagName}]&limit=all`;

     //console.log("URL ", myURL)
    const res = await fetch(myURL);
    const newRes = res.json();
    return newRes;
  }

  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags&filter=tag:blog&limit=all`);
  return res.json();

}



const getFilteredPostsWithSearch = async(key) => {
  //console.log("current Key", key);
  const searchTitle = key.queryKey[1].search;

  if(searchTitle){   
    const myURL = `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags&filter=slug:'${searchTitle}'`;
    const res = await fetch(myURL);
    const newRes = res.json();
    return newRes;
  }


  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags`);
  return res.json();
}





export default function Home({posts}) {
  const [formState, setFormState] = useState("close");
  const [tagName, setTagName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');



    //REACT - QUERY : Featured Posts in the Hero Banner
    //const {data:featuredPosts,error} = useQuery(['featured posts'], () => getFeaturedPosts());
    //console.log("featuredPosts", featuredPosts);



    //For filtering with TAGS
    const {isLoading, data:filteredPosts, status} = useQuery(['filtered posts', {tag: tagName}], getFilteredPosts, {initialData:posts}) //to remove the loading page add the initialdata value here
     //console.log("filteredPosts are", filteredPosts, "status", status);



    
    var allPosts = filteredPosts;



    

     

    if(isLoading){
      return (
      <div className="App">
         <h2 style={{width:"100vw",height:"100vh",opacity:".5",display:"flex", alignItems:"center", justifyContent:"center"}}>fetching posts...</h2>
      </div>
      )
    }




  return (
    <>
      <Head>
        <meta
          name="description"
          content="SMS marketing and text messaging for your ecommerce business. Get 40%+ CTR and 90%+ open rates. Get a demo today!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="SMS Marketing for Ecommerce | Voyage Mobile"
        ></meta>
        <meta content="width=device-width, initial-scale=1.0,maximum-scale=1.0, viewport-fit=cover" name="viewport"/>
        <title>Voyage SMS: Text Marketing for eCommerce</title>
      </Head>
      <div className="main" id="main-target" data-scroll-container>
        <RequestForm formState={formState} setFormState={setFormState} />
        <Header setFormState={setFormState} />
        <BlogPageHeroBanner posts={posts} />
        <BlogPageTagFilteringBlock posts={posts} handleTagClick={setTagName} handleSearch={setSearchTerm}/>
        <BlogPageFeaturedPosts posts={allPosts} />
        <BlogPageSignupBlock />
        {allPosts.posts.length > 6 && <BlogPageAllPosts posts={allPosts} />}
        <BlogPageBottomBlock />
        <Footer setFormState={setFormState} />
      </div>
    </>
  );
}
