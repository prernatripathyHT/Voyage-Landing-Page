import { ServicesPageStrategyGuideBlockData } from '../data/ServicesPageStrategyGuideBlock';
import styles from './css/servicesPageStrategyGuideBlock.module.css';
import {useState} from 'react';
import { createMedia } from "@artsy/fresnel";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      sm: 0,
      md: 769,
      lg: 1024,
      xl: 1192,
    },
  });


const settings = {
    dots: true,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth:false,
    cssEase:`cubic-bezier(.51,.11,.44,.96)`,
  };


export default function ServicesPageStrategyGuideBlock(){
    const [selected, setSelected] = useState(ServicesPageStrategyGuideBlockData.subBlockData_2[0]);


    const toggle = item => {
        setSelected(item);
    }

    const accordianOpen =   <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.7556 11.1724C19.4298 11.4982 18.9031 11.4982 18.5773 11.1724L9.99997 2.59507L1.42266 11.1724C1.09684 11.4982 0.570173 11.4982 0.24436 11.1724C-0.0814533 10.8466 -0.0814533 10.3199 0.24436 9.99409L9.41084 0.827608C9.57334 0.665112 9.78666 0.583435 10 0.583435C10.2134 0.583435 10.4267 0.665112 10.5892 0.827608L19.7557 9.99409C20.0814 10.3199 20.0814 10.8466 19.7556 11.1724Z" fill="#405CFB"/>
                            </svg>;

    const accordianClosed = <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.7556 0.827612C19.4298 0.501799 18.9031 0.501799 18.5773 0.827612L9.99997 9.40493L1.42266 0.827612C1.09684 0.501799 0.570173 0.501799 0.24436 0.827612C-0.0814533 1.15343 -0.0814533 1.68009 0.24436 2.00591L9.41084 11.1724C9.57334 11.3349 9.78666 11.4166 10 11.4166C10.2134 11.4166 10.4267 11.3349 10.5892 11.1724L19.7557 2.00591C20.0814 1.68009 20.0814 1.15343 19.7556 0.827612Z" fill="black"/>
                            </svg>;
    
    
    return (
        <MediaContextProvider>
        <section className={styles.servicesPageStrategyGuideBlock}>

              <div className={styles.section_1}>
                  <div className={`container ${styles.section_1_innerWrapper}`}>
                      <div className={styles.leftBlock}>
                          <h3>{ServicesPageStrategyGuideBlockData.mainBlockTitle}</h3>
                          {<div className={styles.mainBlockData} dangerouslySetInnerHTML={{ __html:ServicesPageStrategyGuideBlockData.mainBlockData}} />}
                      </div>
                      <div className={styles.rightBlock}>
                      <Media greaterThanOrEqual="md">
                          <img src={ServicesPageStrategyGuideBlockData.mainBlockImage} alt={ServicesPageStrategyGuideBlockData.mainBlockTitle}/>
                      </Media>
                      <Media lessThan="md">
                          <img src={ServicesPageStrategyGuideBlockData.mainBlockImage_mob} alt={ServicesPageStrategyGuideBlockData.mainBlockTitle}/>
                      </Media>
                      </div>
                  </div>
              </div>

              <div className={styles.section_2}>
                <div className={`container ${styles.section_2_innerWrapper}`}>
                    <Media greaterThanOrEqual="md">
                    <div className={styles.leftBlock}>
                        <img src={ServicesPageStrategyGuideBlockData.subBlockImage_1} alt={ServicesPageStrategyGuideBlockData.subBlockTitle_1}/>
                    </div>
                         
                    <div className={styles.rightBlock}>
                        <h4>{ServicesPageStrategyGuideBlockData.subBlockTitle_1}</h4>
                        {<div className={styles.subBlockData_1} dangerouslySetInnerHTML={{ __html:ServicesPageStrategyGuideBlockData.subBlockData_1}} />}
                    </div>
                    </Media>
                    <Media lessThan="md">
                    <div className={styles.leftBlock}>
                        <h4>{ServicesPageStrategyGuideBlockData.subBlockTitle_1}</h4>
                        <div className={styles.imageWrapper}>
                            <img src={ServicesPageStrategyGuideBlockData.subBlockImage_1_mob} alt={ServicesPageStrategyGuideBlockData.subBlockTitle_1}/>
                        </div>
                    </div>
                         
                    <div className={styles.rightBlock}>
                   
                        {<div className={styles.subBlockData_1} dangerouslySetInnerHTML={{ __html:ServicesPageStrategyGuideBlockData.subBlockData_1}} />}
                    </div>
                    </Media>
                </div>
              </div>
              <Media greaterThanOrEqual="md">
              <div className={styles.section_3}>
              <div className={`container ${styles.section_3_innerWrapper}`}>
                    <div className={styles.leftBlock}>
                        <h4>{ServicesPageStrategyGuideBlockData.subBlockTitle_2}</h4>
                        {ServicesPageStrategyGuideBlockData.subBlockData_2.map((item, index) => (
                            <div className={`${styles.accordianItem} ${selected === item ? styles.selected : null} ` } key={index}>
                                    <div className={`${styles.itemTitle} ${selected === item ? styles.selected : null}`} onClick={() => toggle(item)}>
                                        <h5>{item.title}</h5>
                                        <span>{selected === item ? accordianOpen : accordianClosed}</span>
                                    </div>
                                    <div className={`${styles.itemText} ${selected === item ? styles.show : null}`}>
                                        <p>{item.text}</p>
                                    </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.rightBlock}>
                        {ServicesPageStrategyGuideBlockData.subBlockData_2.map((item, index) => (
                            <div className={`${styles.accordianImage} ${selected === item ? styles.show : null}`} key={index}>
                                <img src={item.image} alt={item.title}/>
                            </div>
                        ))}
                    </div>
                </div>
              </div>
              </Media>
              <Media lessThan="md">
              <div className={styles.section_3}>
              <h4 className="container">{ServicesPageStrategyGuideBlockData.subBlockTitle_2}</h4>
                <Slider {...settings} className={`container ${styles.innerStatsBlock}`} data-scroll >
                    {/* <div className={`container ${styles.section_3_innerWrapper}`}>   */}
                            {ServicesPageStrategyGuideBlockData.subBlockData_2.map((item, index) => (
                                <div className={styles.accordianItem} key={index}>
                                
                                    <img src={item.image} alt={item.title}/>
                                    <h5>{item.title}</h5>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                    {/* </div> */}
                </Slider>
              </div>
              </Media>

 
        </section>
        </MediaContextProvider>
    )
}