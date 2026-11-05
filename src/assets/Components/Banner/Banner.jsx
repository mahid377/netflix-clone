 import {useState} from 'react'
import NetflixBannerLogo from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.contents}>
        {/* netflix image */}
        <img
          className={styles.logoImg}
          src={NetflixBannerLogo}
          alt="Netflix-logo"
        />

        {/* title */}
        <h1 className={styles.title}>Bridgerton</h1>
        {/* description */}
        <h1 className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          ducimus repellendus possimus tempora iusto tempore officiis, omnis
          aliquam asperiores ullam.
        </h1>
        {/* buttons */}
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <Play size={30} />
            Play
          </button>

          <button className={styles.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>
      {/* fading effect */}
      <div className={styles.fadeBottom}></div>
    </div>
  );
}

export default Banner;

