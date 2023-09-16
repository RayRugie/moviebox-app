import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Movie.css";

const PopularMovie = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=3e6d14da7134bf8c0b4d697d98ec28bc&limit=4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
        
        
          );
        setMovies(response.data.results.slice(0, 4));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);


  const handleMovieClick = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movies/${id}?api_key=3e6d14da7134bf8c0b4d697d98ec28bc&language=en-US`
      );
      setSelectedMovie(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <div className="movie-list flex flex-wrap mt-10 space-y-12 text-black text-center">
      {/* <span className='flex flex-row space-x-32'>
        <h2 className='r text-xl font-bold text-start'>Popular Movies</h2>
      <p className='d text-base  justify-end text-right mt-1'>See more</p>
      </span> */}
      
      <div className="movies flex flex-row space-x-5 justify-center">
        {movies.map((movie) => (
            <Link to={`/movies/${movie.id}`} key={movie.id} >
            <div 
              className="movie m-2 border border-gray-400 hover:w-full" data-testid="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className=' max-w-full h-auto'
              data-testid="movie-poster"
            />
            <h3 data-testid="movie-title">{movie.title}</h3>
            <p>{movie.ratings}</p>
            <p data-testid="movie-release-date">{movie.release_date}</p>
           
          </div>
          </Link>
        
        ))}
       

      </div>
    </div>
  );
};

export default PopularMovie;

