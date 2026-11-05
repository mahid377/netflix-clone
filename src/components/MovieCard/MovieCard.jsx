import styles from "./MovieCard.module.css";

import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

// import { movies } from "../../Data/Data"; // Accessing your data file

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
  const genres = ["Adventure", "Action", "Thriller"];
  return (
    <div className={styles.cardWrapper}>
      {/* Poster image */}
      <img
        src={`${IMAGE_BASE}${movie.poster_path}`}
        className={styles.poster}
        alt="poster Image"
      />
      {/* Hover card */}
      <div className={styles.hoverCard}>
        {/* image */}
        <img
          className={styles.hoverImage}
          src={`${IMAGE_BASE}${movie.poster_path}`}
          alt="hover Image"
        />
        {/* badge */}
        <div className={styles.badge}>Recently added</div>
        {/* button Row */}
        <div className={styles.buttonsRow}>
          <FaCirclePlay
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <BsPlusCircle color="white" size={40} />
          <GoCheckCircleFill color="white" size={40} />
          <IoIosArrowDropdownCircle
            color="white"
            size={40}
            className={styles.circleButtonSmall}
          />
        </div>
        {/* metadata row */}
        <div className={styles.metadataRow}>
          <span className={styles.tag}>U/A 16+</span>
          <span className={styles.tag}>Movie</span>
          <span className={styles.tag}>HD</span>
        </div>
        {/* genres */}
        <div className={styles.genres}>
          {genres?.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < genres.length - 1 && (
                  <span className={styles.dot}> • </span>
                )}{" "}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
