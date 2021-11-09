import { ServicesPageConsultingBlockData } from '../data/ServicesPageConsultingBlock';
import styles from './css/servicesPageConsultingBlock.module.css';
import { createMedia } from "@artsy/fresnel";

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      sm: 0,
      md: 769,
      lg: 1024,
      xl: 1192,
    },
  });

export default function ServicesPageConsultingBlock(){
    return (
        <MediaContextProvider>
        <section className={styles.servicesPageConsultingBlock}>
            <div className={`container ${styles.consultingBlock_innerWrapper}`}>
                <div className={styles.leftBlock}>
                    <Media greaterThanOrEqual="md">
                    <h2>Consulting <br /> Services for <br /> SMS Success</h2>
                    </Media>
                    <Media lessThan="md">
                    <h2>Consulting Services for SMS Success</h2>
                    </Media>
                </div>
                <div className={styles.rightBlock}>
                    <p>{ServicesPageConsultingBlockData.subText_1}</p>
                    <p>{ServicesPageConsultingBlockData.subText_2}</p>
                    <p>{ServicesPageConsultingBlockData.subText_3}</p>
                </div>
            </div>
        </section>
        </MediaContextProvider>
    )
}