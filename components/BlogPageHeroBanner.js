import { BlogPageHeroBannerData } from "../data/BlogPageHeroBanner";
import styles from "./css/blogPageHeroBanner.module.css";
import Link from 'next/link';
import gsap from "gsap";
import { useEffect, useState, useRef } from "react";


export default function BlogPageHeroBanner({posts}) {

  //console.log("voyage posts", {posts})
  const post = {posts};
  const featuredPost = post.posts.posts[1];
  //console.log("post", featuredPost)


  return (
    <section id={styles.heroBanner}>
   
    <div className={`container ${styles.heroBannerContainer}`}>
      <div className={styles.leftBlock}>
        <p id="homePageSubtext" className={styles.bannerText} data-scroll>
            {BlogPageHeroBannerData.subHeading}
        </p>
        <h1 id="homePageTitle" className={styles.bannerTitle} data-scroll>
            {BlogPageHeroBannerData.titleText}
        </h1>
      </div>
 
      <div className={styles.rightBlock}>
     <Link href="/blog/[slug]" as={`/blog/${featuredPost.slug}`}><a className={styles.featuredLink}>
        <div className={styles.featuredImage}>
            <img src={`https://sms-marketing-resources.ghost.io/${featuredPost.feature_image}`} />
        </div>
        <div className={styles.featuredBlogDetails}>
            <div className={styles.featuredTagAndTime}>
                <p>Thought Leadership</p>
                <svg width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1.5" cy="2" r="1.5" fill="#CBCBCB"/>
                </svg>
                <p>{featuredPost.reading_time} min read</p>
            </div>

            <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
            <p className={styles.featuredExcerpt}> {featuredPost.excerpt} </p>

            <p className={styles.featuredReadMore}>READ MORE 
             
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M6.3441 6.3293L0.793749 11.8643C0.611898 12.0455 0.317478 12.0452 0.135932 11.8634C-0.0454738 11.6815 -0.0450051 11.3869 0.136869 11.2055L5.35685 5.99998L0.136682 0.794436C-0.0451692 0.613031 -0.045638 0.318633 0.135744 0.136759C0.226752 0.0455875 0.345978 1.90735e-06 0.465204 1.90735e-06C0.584125 1.90735e-06 0.702883 0.0452824 0.793726 0.135821L6.3441 5.67068C6.43169 5.75782 6.48084 5.87642 6.48084 5.99998C6.48084 6.12354 6.43155 6.24199 6.3441 6.3293Z" fill="white"/>
                    </svg>
           
            </p>
        </div>
        </a></Link>
      </div>
      
    </div>
    <div className={styles.heroBannerBgElements}>
      <svg width="50" height="110" viewBox="0 0 50 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.583553 2.70299e-06L-47.9998 55L49.1669 55L0.583553 2.70299e-06Z" fill="#02D9FC"/>
        <path d="M0.583553 55L-47.9998 110L49.1669 110L0.583553 55Z" fill="#02D9FC"/>
      </svg>
      <svg width="467" height="504" viewBox="0 0 467 504" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
        <rect x="86" y="403" width="381" height="101" fill="#405CFB"/>
        <path d="M85.9946 429V504.246H-0.000244141L85.9946 429Z" fill="white"/>
        <path d="M404.618 156.88L466.402 207.598V-5H212V156.88H404.618Z" fill="#02D9FC"/>
        <rect width="169.601" height="50.1637" transform="matrix(-1 0 0 1 255.591 322.435)" fill="#162740"/>
        <ellipse rx="26.8734" ry="26.2762" transform="matrix(-1 0 0 1 136.75 296.159)" fill="#5BEBC1"/>
        <rect width="76.4399" height="15.5269" transform="matrix(-1 0 0 1 160.041 254.355)" fill="#02D9FC"/>
        </g>
      </svg>
    </div>
    </section>
  );
}
