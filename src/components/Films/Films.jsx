import React, { useState, useEffect } from "react";
import axios from "../../tmDB/axios";
import MovieGenresKeys from "../../tmDB/keys";
import Tooltip from "@mui/material/Tooltip";
import ReactPlayer from "react-player";
import "./Films.css";


const Films = ({ title, movie_request, isLargeRow }) => {
  // getting the movies in an array
  const [movies, setMovies] = useState([]);
  // getting the trailer of each movie
  const [trailerUrl, setTrailerUrl] = useState("");


  // fetching the movie based on the type of genera passed
  // getting the movies data results from the api by slicing them
  // slicing only 7 movies for each genera to display
  useEffect(() => {
    const fetchData = async () => {
      const responseData = await axios.get(movie_request);
      setMovies(responseData.data.results.slice(0, 9));
    };
    fetchData();
  }, [movie_request]);

  // fetching the trailer by passing the movie from use state that has the
  // fetched movies and accordingly display that trailer

  const fetchMovieTrailer = async (movie) => {
    await axios
      .get("/movie/" + movie?.id.toString() + MovieGenresKeys.trailerQuery)
      .then((responseData) => {
        setTrailerUrl(responseData.data.results[0]?.key);
      })
      .catch((error) => console.error(error));
  };

  // once the user clicks it should display the movie trailer onclick

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      fetchMovieTrailer(movie);
    }
  };


  return (
    <div className="filmsCategory">
      <h3>{title}</h3>
      {/* this is going to fetch the api id of the movie and play the movie trailer  */}
      <div className="films">
        +
        {movies.map((movie) => (
          <Tooltip
            title={movie?.original_name || movie?.original_title}
            key={movie.id}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.original_title}
              onClick={() => handleClick(movie)}
              loading="lazy"
              className={`film ${isLargeRow && "filmPosterLarge"}`}
            />
          </Tooltip>
          
        ))}
    
      </div>
          {/* displaying the movie trailers  */}
          {trailerUrl && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailerUrl}`}
            width="100%"
            height="1000px"
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
        )} 
       
    </div>
  );
};

export default Films;
