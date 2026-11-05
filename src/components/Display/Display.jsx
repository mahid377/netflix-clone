import { useEffect, useState } from "react";

import SlideShow from "../SlideShow/SlideShow";
import styles from "./Display.module.css";

import requests from "../../Utility/requestURLs";
import { movieInstance } from "../../Utility/MovieInstance";

const Display = () => {
  const [movies, setMovies] = useState({
    trending: [],
    originals: [],
    topRatedMovies: [],
    actionMovies: [],
    comedyMovies: [],
    horrorMovies: [],
    romanceMovies: [],
    documentaries: [],
  });

  useEffect(() => {
    // 8ቱንም ጥያቄዎች በአንድ ጊዜ ይልካል
    const fetchMovies = async () => {
      try {
        const [
          trendingRes,
          originalsRes,
          topRatedMoviesRes,
          actionMoviesRes,
          comedyMoviesRes,
          horrorMoviesRes,
          romanceMoviesRes,
          documentariesRes,
        ] = await Promise.all([
          movieInstance.get(requests.fetchTrending),
          movieInstance.get(requests.fetchNetflixOriginals),
          movieInstance.get(requests.fetchTopRatedMovies),
          movieInstance.get(requests.fetchActionMovies),
          movieInstance.get(requests.fetchComedyMovies),
          movieInstance.get(requests.fetchHorrorMovies),
          movieInstance.get(requests.fetchRomanceMovies),
          movieInstance.get(requests.fetchDocumentaries),
        ]);

        setMovies({
          trending: trendingRes.data.results,
          originals: originalsRes.data.results,
          topRatedMovies: topRatedMoviesRes.data.results,
          actionMovies: actionMoviesRes.data.results,
          comedyMovies: comedyMoviesRes.data.results,
          horrorMovies: horrorMoviesRes.data.results,
          romanceMovies: romanceMoviesRes.data.results,
          documentaries: documentariesRes.data.results,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Netflix Trending" movies={movies.trending} />
      <SlideShow title="Netflix Originals" movies={movies.originals} />
      <SlideShow title="Top Rated Movies" movies={movies.topRatedMovies} />
      <SlideShow title="Action Movies" movies={movies.actionMovies} />
      <SlideShow title="Comedy Movies" movies={movies.comedyMovies} />
      <SlideShow title="Horror Movies" movies={movies.horrorMovies} />
      <SlideShow title="Romance Movies" movies={movies.romanceMovies} />
      <SlideShow title="Documentaries" movies={movies.documentaries} />
    </div>
  );
};

export default Display;
