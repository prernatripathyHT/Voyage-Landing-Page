import { marketingPageStats } from "../data/MarketingPageStatsBlock";
import styles from "./css/marketingPageStatsBlock.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { createMedia } from "@artsy/fresnel";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


gsap.registerPlugin(ScrollTrigger);

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 769,
    lg: 1024,
    xl: 1192,
  },
});


const settings = {
  dots: false,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding: "0px",
  cssEase:`cubic-bezier(.51,.11,.44,.96)`,
};

export default function MarketingPageStatsBlock() {
  useEffect(() => {
    gsap.from(".statAnimate", {
      duration: 0.5,
      y: "30%",
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".statsContainer",
        start: "top 75%",
      },
    });
  }, []);

  

  return (
    <MediaContextProvider>
    <section className={styles.statsBlock}>
    <Media greaterThanOrEqual="md">
      <div className={`statsContainer ${styles.innerStatsBlock}`} data-scroll>

        {marketingPageStats.map((stats, index) => (
          <div key={index} className={`statAnimate ${styles.keyStats}`}>
            <div className={styles.upperStats}>
              <div className={styles.iconDataBlock}>
                <div
                  style={{ width: stats.iconWidth }}
                  className={styles.imgIcon}
                  dangerouslySetInnerHTML={{ __html: stats.iconData }}
                ></div>
                {/* <img src={`/images/${stats.icon}`} alt={stats.statTitle} style={{width:stats.iconWidth}}/> */}
                <span>{stats.data}</span>
              </div>
              <p>{stats.statTitle}</p>
            </div>

            <img
              className={styles.blockQuotes}
              src="/images/quotes_green.svg"
            />

            <p className={styles.statsText}>{stats.statText}</p>
            <p className={styles.statsReviewer}>{stats.reviewer}</p>
            <p className={styles.statsTitle}>{stats.reviewerTitle}</p>
            <div
              className={styles.clientLogo}
              dangerouslySetInnerHTML={{ __html: stats.clientLogo }}
            ></div>
          </div>
        ))}
      </div>
    </Media>
    <Media lessThan="md">
      <div id="main-swiper">
      <Slider {...settings} className={`statsContainer ${styles.innerStatsBlock}`} data-scroll >
   

        {marketingPageStats.map((stats, index) => (
       
          <div key={index} className={`statAnimate ${styles.keyStats}`} style={{ background:stats.bgColor }}>
            <div className={styles.upperStats}>
              <div className={styles.iconDataBlock}>
                <div
                  style={{ width: stats.iconWidth }}
                  className={styles.imgIcon}
                  dangerouslySetInnerHTML={{ __html: stats.iconData }}
                ></div>
                {/* <img src={`/images/${stats.icon}`} alt={stats.statTitle} style={{width:stats.iconWidth}}/> */}
                <span>{stats.data}</span>
              </div>
              <p>{stats.statTitle}</p>
            </div>

            <img
              className={styles.blockQuotes}
              src="/images/quotes_green.svg"
            />

            <p className={styles.statsText}>{stats.statText}</p>
            <p className={styles.statsReviewer}>{stats.reviewer}</p>
            <p className={styles.statsTitle}>{stats.reviewerTitle}</p>
            <div
              className={styles.clientLogo}
              dangerouslySetInnerHTML={{ __html: stats.clientLogo }}
            ></div>
          </div>
          
        ))}
      
        </Slider>
      </div>
    </Media>
    </section>

    </MediaContextProvider>
  );
}
