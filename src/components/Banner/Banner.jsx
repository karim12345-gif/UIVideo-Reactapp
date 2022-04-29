import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../../tmDB/axios";
import MovieGenresKeys from "../../tmDB/keys";
import "./Banner.css";

const Banner = () => {
  // setting movies in array
  const [movie, setMovie] = useState([]);

  // fetching the api data for the movies
  useEffect(() => {
    const fetchMovie = async () => {
      const dataResponse = await axios.get(
        MovieGenresKeys.fetchNetflixOriginals
      );
      console.log(dataResponse);
      // displaying random movies
      setMovie(
        dataResponse.data.results[
          Math.floor(Math.random() * dataResponse.data.results.length)
        ]
      );
    };

    fetchMovie();
  }, []);

 

  return (
    //   styling the background movie with adding the images and buttons
    <header
    className="banner"
      style={{
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="main">
        <div className="bannerContents">
          {/* displaying the name */}
          <h1 className="movieTitle">{movie.original_name}</h1>
          <div className="buttons">
            <button className="btn">
              Play
            </button>
          </div>
          <p className="movieDesc">{movie.overview}</p>
        </div>
      </div>
            
    </header>
  );
};

export default Banner;
