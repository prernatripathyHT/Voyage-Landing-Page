import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MarketingPageClientBlock from "../../components/MarketingPageClientBlock";
import BlogPageHeroBanner from "../../components/BlogPageHeroBanner";
import BlogPageFeaturedPosts from "../../components/BlogPageFeaturedPosts";
import BlogPageSignupBlock from "../../components/BlogPageSignupBlock";
import BlogPageAllPosts from "../../components/BlogPageAllPosts";

import Head from "next/head";
import RequestForm from "../../components/RequestForm";
import { useState } from "react";

const {CONTENT_API_KEY, BLOG_URL} = process.env;




export const getStaticProps = async () => {
 
  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags`);
  const posts = await res.json();


  return {
    props: {posts}
  }
}



export default function Home({posts}) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [formState, setFormState] = useState("close");
  const myPosts = {posts}

  //console.log("current filtered posts are: ", filteredPosts);

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

        <BlogPageHeroBanner posts={filteredPosts} />
        {/* <div>
          {myPosts.posts.posts.map((post,index) => (
        <div key={index}>  {post.tags.map((tag, index)=> (
              <p key={index}>{tag.name}</p>
            ))}</div>
          ))}
        </div> */}
        <BlogPageFeaturedPosts posts={filteredPosts} />
        <BlogPageSignupBlock />
        <BlogPageAllPosts posts={filteredPosts} />
      
        <Footer setFormState={setFormState} />
      </div>
    </>
  );
}
