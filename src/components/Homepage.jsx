import React, { useState } from 'react';
import Poster from "../assets/Poster.png";
import Logo from "../assets/Logo.svg";
import Search from "../assets/Search.svg";
import axios from 'axios';
import "../components/Homepage.css";
import MovieLists from './PopularMovies';
import Ratings from "../assets/Rating.svg";
import Trailer from "../assets/Button.svg";
import MovieListsA from './Movies1';
import PopularMovie from './PopularMovies';
import FeaturedMovie from './FeaturedMovie';
import Footer from './Footer';

const Homepage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const searchMovies = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/search', { params: { api_key: "3e6d14da7134bf8c0b4d697d98ec28bc", query: "Barbie" } });
      setMovies(response.data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovies();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="homepage">
      <div className="hero-section">
        <img src={Poster} alt="" className='logo bg-gradient-to-l md:bg-gradient-to-r w-full h-full md:w-full md:h-fit' />
        <div className="nav w-full absolute top-4">
          <div className='inner-nav flex flex-row space-x-16'>
            <img src={Logo} alt="" className=" top-4 left-4" />
            <form className="form-control mt-2 w-8/12 bg-transparent border border-white rounded-md h-9 flex flex-row" onSubmit={handleSubmit} value={query} onChange={handleChange}>
              <input type="text" placeholder="What do you want to watch?" className="input input-bordered bg-transparent  md:w-full border-white focus:outline-none text-white" />
              <button type='submit'><img src={Search} alt="" /></button>
            </form>
            <span className='flex flex-row space-x-3'>
              <h1 className='text-white whitespace-nowrap mt-3'>Sign in</h1>
              <button className="btn btn-square btn-ghost mr-24" onClick={toggleMobileMenu}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="18" fill="#BE123C" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.59998 14.4C9.59998 13.7373 10.1372 13.2 10.8 13.2H25.2C25.8627 13.2 26.4 13.7373 26.4 14.4C26.4 15.0628 25.8627 15.6 25.2 15.6H10.8C10.1372 15.6 9.59998 15.0628 9.59998 14.4Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.59998 21.6C9.59998 20.9373 10.1372 20.4 10.8 20.4H25.2C25.8627 20.4 26.4 20.9373 26.4 21.6C26.4 22.2628 25.8627 22.8 25.2 22.8H10.8C10.1372 22.8 9.59998 22.2628 9.59998 21.6Z" fill="white" />
                </svg>
              </button>
            </span>
          </div>
          {isMobileMenuOpen && (
            <div className="mobile-menu bg-white p-4 mt-2 border border-gray-300 rounded-md">
              {/* Add mobile menu items here */}
              <button onClick={toggleMobileMenu}>Close Menu</button>
            </div>
          )}
        </div>

        <div className="description-box flex flex-col w-3/12 absolute top-40 justify-start text-white space-y-4 items-start text-left">
          <h1 className='font-bold text-5xl '>John Wick 3 : Parabellum</h1>
          <img src={Ratings} alt="" />
          <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
          <button type="submit">
            <a href="https://www.youtube.com/watch?v=vIipsYDZDd4">
              <img src={Trailer} alt="" />
            </a>
          </button>
        </div>
      </div>

      <FeaturedMovie />
      <PopularMovie />
      <MovieListsA />
      <Footer />
    </div>
  )
}

export default Homepage;
