import React, { useEffect, useState } from "react";

import SlideShow from "../SlideShow/SlideShow";
import styles from "./Display.module.css";

import { movies } from "../../../Data/Data";
import requests from "../../../Utility/requestURLs.js";
// import { movieInstance } from "../../../Utility/MovieInstance";
import { movieInstance } from "../../../Utility/MovieInstance";

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
    fetchMovies();
  }, []);
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
  // console.log(setMovies());
  return (
    <div className={styles.mainWrapper}>
      <SlideShow title={"Netflex Trending"} movies={movies.trending} />
      <SlideShow title={"Netflex Originals"} movies={movies.originals} />
      <SlideShow
        title={"Netflex Top Rated Movies"}
        movies={movies.actionMovies}
      />
      <SlideShow title={"Netflex Action Movies"} movies={movies.actionMovies} />
      <SlideShow title={"Netflex Comedy Movies"} movies={movies.comedyMovies} />
      <SlideShow title={"Netflex Horror Movies"} movies={movies.horrorMovies} />
      <SlideShow
        title={"Netflex Romance Movies"}
        movies={movies.romanceMovies}
      />
      <SlideShow
        title={"Netflex Documentaries"}
        movies={movies.documentaries}
      />
      {/* <SlideShow title={"Movie Suggestions"} movies={movies} /> */}
    </div>
  );
};

export default Display;
