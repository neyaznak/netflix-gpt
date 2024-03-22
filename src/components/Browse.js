import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies copy";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return <div>
    <Header/>
    <MainContainer/>
    <SecondContainer/>
    {/* 
          MainContainer
            - VideoBackground
            - VideoTitle
          SecondaryContainer
            - MovieList * n
              - cards * n
      */}
  </div>;
};

export default Browse;
