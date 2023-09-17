import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import MovieGenre from "./MovieGenre"
import BounceLoader from "react-spinners/BounceLoader";
import './MovieDetails.css'
import Footer from './Footer';

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=3e6d14da7134bf8c0b4d697d98ec28bc&language=en-US`
        );
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    setLoading(true);
    setTimeout(() =>{
      setLoading(false);
    }, 10000);

    fetchMovieDetails();
  }, [id]);


  const genres = movie?.genres.map((genre) => {
    return <MovieGenre genre={genre.name} />;
  });

  if (!movie) return <div className="loader">
    <BounceLoader
      color={"#BE123C"}
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>;

  return (
    <div className="mt-3 ml-2">
      <Link to={"/"}>
        <p className="back-link">
          Home
        </p>
      </Link>
      <div>
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`}
          alt=""
        />
      </div>

      <div className="main">
        <div className="title-section">
          <div className="title">
            <div className="font-roboto">
              <p>
                <span className="movie-title">{movie?.title}</span> ·{" "}
                <span className="movie-release_date">
                  {movie ? new Date(movie.release_date).toUTCString() : ""}
                </span>{" "}
                · <span className="movie-runtime">{movie?.runtime}</span>m
              </p>
            </div>
            <p className="rating">
              {movie.vote_average}/10 | {movie.popularity}
            </p>
          </div>
          {genres}
        </div>
        <div className="desc mt-4" data-testid="movie-details">
          <p className="movie-overview">
            {movie?.overview}
          </p>
        </div>
        <div className="buttons mt-4">
          <button className="showtimes-btn">
            See Showtimes
          </button>
          <button className="watch-options-btn">
            More watch options
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetails;
