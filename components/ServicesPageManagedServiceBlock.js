import { ServicesPageManagedServiceBlockData } from '../data/ServicesPageManagedServiceBlock';
import styles from './css/servicesPageManagedServiceBlock.module.css';

export default function ServicesPageManagedServiceBlock(){
    
    
    return (
        <section className={styles.servicesPageManagedServiceBlock}>
                  <div className={`${styles.section_1}`}>
                      <div className={`container ${styles.managedService_innerWrapper}`}>
                        <div className={styles.leftBlock}>
                            <img src={ServicesPageManagedServiceBlockData.mainBlockImage} alt={ServicesPageManagedServiceBlockData.mainBlockTitle}/>
                        </div>
                        <div className={styles.rightBlock}>
                            <h3>{ServicesPageManagedServiceBlockData.mainBlockTitle}</h3>
                            {<div className={styles.mainBlockData} dangerouslySetInnerHTML={{ __html:ServicesPageManagedServiceBlockData.mainBlockData}} />}                      
                        </div>
                      </div>
                  </div>
        </section>
    )
}