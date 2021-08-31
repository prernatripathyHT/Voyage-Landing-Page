import styles from './css/blogPageBottomBlock.module.css';
import { createMedia } from "@artsy/fresnel";

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      sm: 0,
      md: 769,
      lg: 1024,
      xl: 1192,
    },
  });

export default function SignupBottomBlock() {
    return (
        <MediaContextProvider>
                {/* <Media greaterThanOrEqual="md"> */}
                <section id={styles.blogPageBottomBlock} className={styles.blogPageBottomBlock}>
                <div className={styles.shapeBox}>
                    <div className={styles.boxWrapper}>
                        <svg width="1184" height="600" viewBox="0 0 1184 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="74.8376" y="122.275" width="187.302" height="218.811" transform="rotate(20 74.8376 122.275)" fill="#3F5CFB"/>
                        <ellipse cx="400.185" cy="351.792" rx="247.949" ry="247.542" fill="#219AFB"/>
                        <rect x="619.094" y="261.808" width="277.901" height="277.901" transform="rotate(-70 619.094 261.808)" fill="#02D9FC"/>
                        <rect x="558.668" y="328.095" width="277.901" height="277.901" transform="rotate(-80 558.668 328.095)" fill="#3C55FF"/>
                        <circle cx="161.208" cy="188.26" r="73.4061" fill="#5BEBC1"/>
                        <path d="M103.298 114.854H219.117L161.208 60.2068L103.298 114.854Z" fill="#1C345C"/>
                        <path d="M103.298 60.2068H219.117L161.208 5.56006L103.298 60.2068Z" fill="#1C345C"/>
                        <ellipse cx="1036.78" cy="217.622" rx="147.22" ry="146.812" fill="#219AFB"/>
                        </svg>
                    </div>
                </div>
                </section>
                 {/* </Media> */}
                
        </MediaContextProvider>
    )
}
