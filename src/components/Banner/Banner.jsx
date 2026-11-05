import { useEffect, useState } from "react";
import { Play, Info } from "lucide-react";
import NetflixBannerLogo from "../../assets/image/logo.png";
import styles from "./Banner.module.css";
import { movieInstance } from "../../Utility/MovieInstance";
import requests from "../../Utility/requestURLs";

const BANNER_BASE = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState(null);

  // ከ TMDB አንድ የ Netflix Original ፊልም በዘፈቀደ ይመርጣል
  useEffect(() => {
    async function fetchBanner() {
      try {
        const res = await movieInstance.get(requests.fetchNetflixOriginals);
        const results = res.data.results;
        setMovie(results[Math.floor(Math.random() * results.length)]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBanner();
  }, []);

  const truncate = (str, n) =>
    str?.length > n ? str.slice(0, n - 1) + "..." : str;

  return (
    <div
      className={styles.banner}
      style={
        movie?.backdrop_path
          ? { backgroundImage: `url("${BANNER_BASE}${movie.backdrop_path}")` }
          : undefined
      }
    >
      <div className={styles.contents}>
        {/* netflix image */}
        <img
          className={styles.logoImg}
          src={NetflixBannerLogo}
          alt="Netflix-logo"
        />

        {/* title */}
        <h1 className={styles.title}>
          {movie?.title || movie?.name || movie?.original_name || "Netflix"}
        </h1>

        {/* description */}
        <h1 className={styles.description}>{truncate(movie?.overview, 150)}</h1>

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
