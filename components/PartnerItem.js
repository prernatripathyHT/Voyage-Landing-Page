import Link from 'next/link';
import styles from "./css/partnerItem.module.css";


const PartnerItem  = ({post}) =>{
    return(
        <Link href="/partner/[slug]" as={`/partner/${post.slug}`}><a className={`aos-init ${styles.partnerItemLink}`} data-aos="fade-up" data-aos-duration="1000">
            <div className={styles.partnerItemImage}>
                <img src={`${post.feature_image}`} />
            </div>
            <div className={styles.partnerItemDetails}>
                <h2 className={styles.partnerItemTitle}>
                    {/* {post.title} */}
                    AspireIQ
                    </h2>
                <p className={styles.partnerItemExcerpt}> {post.excerpt} </p>
            </div>
        </a></Link>
    )
}

export default PartnerItem;