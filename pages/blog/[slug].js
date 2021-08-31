import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";
import RequestForm from "../../components/RequestForm";
import BlogPageMainArticle from "../../components/BlogPageMainArticle";
import BlogPageRelatedArticles from "../../components/BlogPageRelatedArticles";
import BlogArticlePageSignupBlock from "../../components/BlogArticlePageSignupBlock";
import BlogPageBottomBlock from "../../components/BlogPageBottomBlock";
import { useState } from "react";
import {useQueries, useQuery, useQueryClient} from 'react-query';


//const {CONTENT_API_KEY, BLOG_URL} = process.env;
const CONTENT_API_KEY = 'c7bafa2c2c579763b605f57fb6';
const BLOG_URL = 'https://sms-marketing-resources.ghost.io/';



function getPost(slug){
    const urls = [
        `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&include=authors,tags`,
        `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags`
    ];
    const allRequest = urls.map(url => fetch(url).then(response => response.json()));
    return Promise.all(allRequest);
}


export const getStaticProps = async ({params}) => {
    // const {allPosts, currentPost} = getPost(params.slug);
    const allPosts = await getPost(params.slug).then(responses => {
            return responses;
        }
      );

    return {
      props: {
          posts: allPosts[1].posts,
          currentPost: allPosts[0].posts
        }
    }
  }


export const getStaticPaths = async () => {
    const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`)
    const posts = await res.json();
    const ids = posts.posts.map(post => post.slug);
    const paths = ids.map(slug => ({params: {slug : slug.toString()}}))
    return {
        paths,
        fallback:false,
    }
}


const getRelatedPosts = async(key) => {
    const currentPostTags = key.queryKey[1].tags;
    console.log("current tag names : ", currentPostTags);
  

        
      //create a URL looping through all the tags
      const tagURL = currentPostTags.map(tag=>`filter=tag:${tag}`);
      const tagQueryString = tagURL.join('&');
      const myURL = `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags&${tagQueryString}`;
      const res = await fetch(myURL);
      const newRes = res.json();
      return newRes;
 
  
  }
  


export default function BlogPostPage({posts, currentPost}) {

        const [allRelatedPosts, setAllPosts] = useState({posts})
        const [formState, setFormState] = useState("close");

  

       //filter the posts based on the tag/category
       var currentPostTags = currentPost[0].tags.map((tag) => {return tag.slug});


       //create a query to fetch Related posts based on tags
       const queryClient = useQueryClient();
       const {isLoading, data:relatedPosts, status} = useQuery(['filtered posts', {tags: currentPostTags}], getRelatedPosts, {initialData:allRelatedPosts})

       //console.log("related Posts are", relatedPosts.posts.filter(post => post.id != currentPost[0].id), "status", status)


    if(isLoading){
        return (
        <div className="App">
           <h2 style={{width:"100vw",height:"100vh",opacity:".5",display:"flex", alignItems:"center", justifyContent:"center"}}>Loading Blog...</h2>
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
            <title>Voyage SMS: Text Marketing for eCommerce</title>
        </Head>
        <div className="main" id="main-target" data-scroll-container>
            <RequestForm formState={formState} setFormState={setFormState} />
            <Header setFormState={setFormState} />
            <BlogPageMainArticle currentPost={currentPost} />
            <BlogPageRelatedArticles relatedPosts={relatedPosts.posts.filter(post => post.id != currentPost[0].id)} />
            <BlogArticlePageSignupBlock />
            <BlogPageBottomBlock />
            <Footer setFormState={setFormState} />
        </div>
        </>
    )
}
