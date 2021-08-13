import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";
import RequestForm from "../../components/RequestForm";
import BlogPageMainArticle from "../../components/BlogPageMainArticle";
import BlogPageRelatedArticles from "../../components/BlogPageRelatedArticles";
import BlogArticlePageSignupBlock from "../../components/BlogArticlePageSignupBlock";
import BlogPageBottomBlock from "../../components/BlogPageBottomBlock";
import { useState } from "react";


const {CONTENT_API_KEY, BLOG_URL} = process.env;
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
          allPosts: allPosts[1].posts,
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
  


export default function BlogPostPage({allPosts, currentPost}) {
   
    const [formState, setFormState] = useState("close");

  

       //filter the posts based on the tag/category
       var currentPostTags = currentPost[0].tags.map((tag) => {return tag.name});
      // console.log("current post tags", currentPostTags);

    

    // const relatedPosts = allPosts.filter(post => post.tags.length > 0  );
    // const relatedPosts = allPosts.filter((post) => currentPostTags.some(r => post.tags.map(tag=>tag.name.includes(r))));
    const relatedPosts = allPosts.filter((post) => 
        {   if(post.tags.length > 0){
            return currentPostTags.some(r => {
                return  post.tags.map(tag=>tag.name.includes(r))})
        }
        }
    
    );

    // console.log("related posts to this blog", relatedPosts.length);

   
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
             {/* <div>
            current page tags
            {<div> {currentPost[0].tags.map((tag, index)=> (
                <p key={index}>{tag.name}</p>
                ))}
                </div>
            }
            </div> */}
            <BlogPageRelatedArticles allPosts={allPosts} />
            <BlogArticlePageSignupBlock />
            <BlogPageBottomBlock />
            <Footer setFormState={setFormState} />
        </div>
        </>
    )
}