import {
  marketingFeatureBlockData,
  marketingFeatureBlockTitle,
} from "../data/MarketingFeatureBlock";

import styles from "./css/marketingFeatureBlock.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { createMedia } from "@artsy/fresnel";

gsap.registerPlugin(ScrollTrigger);

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 769,
    lg: 1024,
    xl: 1192,
  },
});

export default function MarketingPageServiceBlock() {

  const myBlock = useRef();

  const featureBlockClick = (e, index) => {
    e.preventDefault();
    // console.log(`index${index +1} clicked! inside function`);
    // console.log("myContainer..", myBlock.current );
    // myBlock.current.classList.add('active');

    //set all to 0
      gsap.to(".image0", {
        opacity: 0,
        y: 7,
      });
      gsap.to(".image1", {
        opacity: 0,
        y: 7,
      });
      gsap.to(".image2", {
        opacity: 0,
        y: 7,
      });
      gsap.to(".slide0 .animateIndex", {
        color: "#9a9a9a",
        backgroundColor: "white",
        borderColor: "#d7d7d7",
      });
      gsap.to(".slide1 .animateIndex", {
        color: "#9a9a9a",
        backgroundColor: "white",
        borderColor: "#d7d7d7",
      });
      gsap.to(".slide2 .animateIndex", {
        color: "#9a9a9a",
        backgroundColor: "white",
        borderColor: "#d7d7d7",
      });
     
  //current selected image
    gsap.to(`.image${index}`, {
      opacity: 1,
        y: 0,
    });
    gsap.to(`.slide${index} .animateIndex`, {
      color: "#fff",
      backgroundColor: "#3f5cfb",
      borderColor: "#3f5cfb",
    });

    if(index == 1){
      gsap.to(".rightImageContainer", { backgroundColor: "#3F5CFB" });
    }
    else{
      gsap.to(".rightImageContainer", { backgroundColor: "#162740" });
    }


  }


  useEffect(() => {}, []);

  if (typeof window !== "undefined") {
    let t1 = gsap.timeline({
      repeat: -1,
      ScrollTrigger: {
        trigger: "#fullpage",
        start: "top 20%",
        toggleActions: "restart none none reset",
      },
    });

    t1.to(".slide0 .animateIndex", {
      color: "#9a9a9a",
      backgroundColor: "white",
      borderColor: "#d7d7d7",
      duration: 0.2,
      delay: 7,
    })
      .to(".slide1 .animateIndex", {
        color: "#fff",
        backgroundColor: "#3f5cfb",
        borderColor: "#3f5cfb",
        duration: 0.2,
      })
      .to(".image0", {
        opacity: 0,
        y: 7,
      })
      .to(".rightImageContainer", { backgroundColor: "#3F5CFB" })
      .to(".image1", {
        opacity: 1,
        y: 0,
      })
      .to(".slide1 .animateIndex", {
        color: "#9a9a9a",
        backgroundColor: "white",
        borderColor: "#d7d7d7",
        duration: 0.2,
        delay: 7,
      })
      .to(".slide2 .animateIndex", {
        color: "#fff",
        backgroundColor: "#3f5cfb",
        borderColor: "#3f5cfb",
        duration: 0.2,
      })
      .to(".image1", {
        opacity: 0,
        y: 7,
      })
      .to(".rightImageContainer", { backgroundColor: "#162740" })
      .to(".image2", {
        opacity: 1,
        y: 0,
      })
      .to(".slide2 .animateIndex", {
        color: "#9a9a9a",
        backgroundColor: "white",
        borderColor: "#d7d7d7",
        duration: 0.2,
        delay: 7,
      })
      .to(".slide0 .animateIndex", {
        color: "#fff",
        backgroundColor: "3f5cfb",
        borderColor: "#3f5cfb",
        duration: 0.2,
      })
      .to(".image2", {
        opacity: 0,
        y: 7,
      })
      .to(".rightImageContainer", { backgroundColor: "#162740" })
      .to(".image0", {
        opacity: 1,
        y: 0,
      });
  }

  return (
    // d="serviceBoxParent"
    <MediaContextProvider>
      <section id="serviceBlockId" className={styles.serviceBlock}>
        <div className={styles.triangleHolder}>

          <svg
            viewBox="0 0 92 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.7798 0.743839L0.530123 51.9699L91.0295 51.9699L45.7798 0.743839Z"
              fill="#5BEBC1"
            />
          </svg>
          <svg
            viewBox="0 0 92 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.7798 0.743839L0.530123 51.9699L91.0295 51.9699L45.7798 0.743839Z"
              fill="#5BEBC1"
            />
          </svg>
        </div>
        <Media greaterThanOrEqual="md">
        <div className={`panel ${styles.innerServiceBlock}`}>
          <div className={`container ${styles.featureTitle}`}>
            <h2>{marketingFeatureBlockTitle}</h2>
          </div>
          <div
            id="fullpage"
            className={`container ${styles.serviceWrapper}`}
            data-scroll
          >
            <div className={styles.leftmarketingContainer}>
              {marketingFeatureBlockData.map((service, index) => (
                <div
                  key={index}
                  className={`commonSlideBox slide${index} ${
                    styles.serviceBox
                  } ${index == 0 ? "active" : ""}`}
                >
                  <div className={`animateIndex ${styles.indexNumber}`} onClick={(e)=>featureBlockClick(e, index)}>
                    0{index + 1}
                  </div>
                  <div className={styles.lefttextBox}>
                    <h3>{service.title}</h3>
                    <Media greaterThanOrEqual="md">
                      <p>{service.description}</p>
                    </Media>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`rightImageContainer ${styles.rightmarketingContainer}`}
            >
              {marketingFeatureBlockData.map((service, index) => (
                <div
                  ref={myBlock}
                  className={`${styles.rightImageBlock} image${index} ${
                    index == 0 ? "active" : ""
                  }`}
                  key={index}
                >
                  <div className={styles.imageWrap}>
                    <img
                      className={`mainBannerAnimation ${styles.mainImage}`}
                      src={`/images/${service.bannerImage}`}
                    />
                    <img
                      className={`cornerImageAnimation ${service.position} ${styles.cornerImage}`}
                      src={`/images/${service.cornerImage}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </Media>
        <Media lessThan="md">
            <div className="marketingContainerMobile container">
            {marketingFeatureBlockData.map((service, index) => (
                <div
                  className={styles.marketingBlock}
                  key={index}
                >
                  <h1 className={styles.mobileTitle}>{service.mobileTitle}</h1>
                  <div
                  className={`${styles.mobileImageBlock} ${styles.mobileImageBlock}-${index}`}
                  style={{background : service.bgColor }}
                  >
                     <div className={styles.mobileImageWrap}>
                  <img
                      className={styles.mobileMainImage}
                      src={`/images/${service.bannerImage}`}
                    />
                    <img
                      className={`${service.position} ${styles.cornerImage}`}
                      src={`/images/${service.cornerImage}`}
                    />
                    </div>
                    </div>
                  <p className={styles.mobileDescription}>{service.mobileDescription}</p>
                </div>
              ))}
            </div>
        </Media>
      </section>
    </MediaContextProvider>
  );
}
