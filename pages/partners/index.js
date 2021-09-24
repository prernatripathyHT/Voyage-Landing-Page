import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PartnersPageHeroBanner from "../../components/PartnersPageHeroBanner";
import PartnersPageFeaturedPosts from "../../components/PartnersPageFeaturedPosts";
import PartnersPageTags from "../../components/PartnersPageTags";
import PartnersPageFilterSection from "../../components/PartnersPageFilterSection";
import Head from "next/head";
import RequestForm from "../../components/RequestForm";
import { useState } from "react";
import {useQueries, useQuery, useQueryClient, useQueryErrorResetBoundary} from 'react-query';

// const {CONTENT_API_KEY, BLOG_URL} = process.env;

const CONTENT_API_KEY = 'c7bafa2c2c579763b605f57fb6';
const BLOG_URL = 'https://sms-marketing-resources.ghost.io/';




export const getStaticProps = async () => {
 
  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags`);
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
 // console.log("current tag name : ", tagName);
  if(tagName){   //if tags are present - this is where we are going to filter the posts
    const myURL = `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags&filter=tag:[${tagName}]`;
     //console.log("URL ", myURL)
    const res = await fetch(myURL);
    const newRes = res.json();
    return newRes;
  }

  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags`);
  return res.json();

}



const getFilteredPostsWithSearch = async(key) => {
  console.log("current Key", key);
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

    //For filtering with TAGS
    const queryClient = useQueryClient();
    const {isLoading, data:filteredPosts, status} = useQuery(['filtered posts', {tag: tagName}], getFilteredPosts, {initialData:posts}) //to remove the loading page add the initialdata value here
    // console.log("filteredPosts are", filteredPosts, "status", status);

     

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
        <PartnersPageHeroBanner />
        <PartnersPageFilterSection />
        <PartnersPageTags />
        <PartnersPageFeaturedPosts posts={posts} />
        <Footer setFormState={setFormState} />
      </div>
    </>
  );
}
