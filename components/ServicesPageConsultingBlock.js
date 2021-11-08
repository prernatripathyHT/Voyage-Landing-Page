import { ServicesPageConsultingBlockData } from '../data/ServicesPageConsultingBlock';
import styles from './css/servicesPageConsultingBlock.module.css';

export default function ServicesPageConsultingBlock(){
    return (
        <section className={styles.servicesPageConsultingBlock}>
            <div className={`container ${styles.consultingBlock_innerWrapper}`}>
                <div className={styles.leftBlock}>
                    <h2>Consulting <br /> Services for <br /> SMS Success</h2>
                </div>
                <div className={styles.rightBlock}>
                    <p>{ServicesPageConsultingBlockData.subText_1}</p>
                    <p>{ServicesPageConsultingBlockData.subText_2}</p>
                    <p>{ServicesPageConsultingBlockData.subText_3}</p>
                </div>
            </div>
        </section>
    )
}