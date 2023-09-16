// MovieDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import MovieGenre from "../Homepage/MovieGenre"
import BounceLoader from "react-spinners/BounceLoader";
import './MovieDetails.css'
import Footer from './Footer';


const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
 
let { id } = useParams();
console.log(id)

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
    }, 10000)

    fetchMovieDetails();
  }, [id]);


  const genres = movie?.genres.map((genre) => {
    return <MovieGenre genre={genre.name} />;
  });

  if (!movie) return <div> 
     <BounceLoader
  color={"#BE123C"}
  loading={loading}
 
  size={150}
  aria-label="Loading Spinner"
  data-testid="loader"
/></div>;

  return (
    <>
    {movie === null ? (
      <div className="loading mt-52 mx-auto"></div>
    ) : (
      <div className="mt-3 ml-2">
        <Link to={"/"}>
          <p className="text-red p-2 border-2 w-fit border-red-400 rounded-xl hover:bg-red-300 duration-300">
            Home
          </p>
        </Link>
        <div>
          <img
            className="poster "
            src={`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`}
          alt='/'
          />
        </div>

        <div className="main">
          <div className=" flex  items-center space-x-96">
            <div className="title flex ">
              <div className="font-roboto flex justify-around w-3/4 md:text-sm text-2xl">
                <p>
                  <span data-testid="movie-title" className='s text-xl font-bold'>{movie?.title}</span> ·{" "}
                  <span data-testid="movie-release_date">
                 {movie ? new Date(movie.release_date).toUTCString() : ""}
 
                  </span>{" "}
                  · <span data-testid="movie-runtime">{movie?.runtime}m</span>
                </p>
              </div>

              {genres}
            </div>
            <p className="text-sm font-cursive items-end justify-end">
              {movie.vote_average}/10 | {movie.popularity}
            </p>
          </div>
          <div className="flex sm:text-sm sm:flex-col justify-between">
            <div className="desc mt-4 ">
              <p data-testid="movie-overview" className="mb-8">
                {movie?.overview}
              </p>
            </div>
            <div className="side space-x-7">
              <button className="w-52 p-2 rounded-md  mb-2 border-none bg-pink-800 border-2">
                See Showtimes
              </button>
              <button className="w-52  rounded-md border-solid border-pink-800 p-2 bg-pink-300 bg-opacity-50 border-2">
                More watch options
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )}
  </>
);
};


export default MovieDetails;
