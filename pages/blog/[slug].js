import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from '../../styles/Home.module.css'

const {CONTENT_API_KEY, BLOG_URL} = process.env;


async function getPost(slug){
    const res = await fetch(
        `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`
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


    const post = {currentPost};

    //console.log("current post object is", post);


    return (
        <div style={{marginTop:'50vh', textAlign:'center'}} className="aos-init" data-aos="fade-up" data-aos-duration="1000">
            <h1  data-aos="fade-up" data-aos-duration="1000">{post.currentPost.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.currentPost.html }} data-aos="fade-up" data-aos-duration="1000"></div>
        </div>
    )

}

