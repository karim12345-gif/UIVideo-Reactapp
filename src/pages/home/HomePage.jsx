import React from "react";
import Banner from "../../components/Banner/Banner";
import Films from "../../components//Films/Films";
import MovieGenresKeys from "../../tmDB/keys";
import Navbar from "../../components/Navbar/Navbar";
import CommentBox from "../../components/Comment/CommentBox";

const HomePage = ({ user }) => {
  return (
    <>
      <Navbar user={user} />
      <Banner />
      {/* Trending rated movies  */}
      <Films
        islargeRow
        title={"Trending now"}
        movie_request={MovieGenresKeys.fetchTrending}
      />
      {/* Top rated movies  */}
      <Films
        title={"Top Rated now"}
        movie_request={MovieGenresKeys.fetchTopRated}
      />
      {/* Comedy */}

      <Films
        title={"Comedy"}
        movie_request={MovieGenresKeys.fetchComedyMovies}
      />

      {/* Action  */}
      <Films
        title={"Action"}
        movie_request={MovieGenresKeys.fetchActionMovies}
      />

      {/* Documentaries  */}
      <Films
        title={"Documentaries"}
        movie_request={MovieGenresKeys.fetchDocumentaries}
      />

      {/* horror  */}
      <Films
        title={"Horror"}
        movie_request={MovieGenresKeys.fetchHorrorMovies}
      />
      <br />
      <br />
      <br />

      <CommentBox />
    </>
  );
};

export default HomePage;
