
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";
import RequestForm from "../../components/RequestForm";
import BlogPageMainArticle from "../../components/BlogPageMainArticle";
import BlogPageBottomBlock from "../../components/BlogPageBottomBlock";
import { useState } from "react";

const {CONTENT_API_KEY, BLOG_URL} = process.env;


async function getPost(slug){
    const res = await fetch(
        `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html,feature_image,reading_time,published_at`
        ).then((res) => res.json())
    
        const posts = res.posts;
    
        return posts[0]
}




export const getStaticProps = async ({params}) => {
    const currentPost = await getPost(params.slug)
  
    return {
      props: {currentPost}
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

  

export default function BlogPostPage({currentPost}) {


    const [formState, setFormState] = useState("close");
   


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
            <BlogPageBottomBlock />
            <Footer setFormState={setFormState} />
        </div>
        </>
    )

}

