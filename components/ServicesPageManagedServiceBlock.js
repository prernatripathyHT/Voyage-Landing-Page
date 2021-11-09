import { ServicesPageManagedServiceBlockData } from '../data/ServicesPageManagedServiceBlock';
import styles from './css/servicesPageManagedServiceBlock.module.css';
import { createMedia } from "@artsy/fresnel";

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      sm: 0,
      md: 769,
      lg: 1024,
      xl: 1192,
    },
  });

export default function ServicesPageManagedServiceBlock(){
    
    
    return (
        <MediaContextProvider>
        <section className={styles.servicesPageManagedServiceBlock}>
                  <div className={`${styles.section_1}`}>
                      <div className={`container ${styles.managedService_innerWrapper}`}>
                        <Media greaterThanOrEqual="md">
                        <div className={styles.leftBlock}>
                            <img src={ServicesPageManagedServiceBlockData.mainBlockImage} alt={ServicesPageManagedServiceBlockData.mainBlockTitle}/>
                        </div>
                        <div className={styles.rightBlock}>
                            <h3>{ServicesPageManagedServiceBlockData.mainBlockTitle}</h3>
                            {<div className={styles.mainBlockData} dangerouslySetInnerHTML={{ __html:ServicesPageManagedServiceBlockData.mainBlockData}} />}                      
                        </div>
                        </Media>
                        <Media lessThan="md">
                        <div className={styles.leftBlock}>
                            <h3>{ServicesPageManagedServiceBlockData.mainBlockTitle}</h3>
                            <img src={ServicesPageManagedServiceBlockData.mainBlockImage_mob} alt={ServicesPageManagedServiceBlockData.mainBlockTitle}/>
                        </div>
                        <div className={styles.rightBlock}>
                            {<div className={styles.mainBlockData} dangerouslySetInnerHTML={{ __html:ServicesPageManagedServiceBlockData.mainBlockData}} />}                      
                        </div>
                        </Media>
                      </div>
                  </div>
        </section>
        </MediaContextProvider>
    )
}