
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage';

import MovieDetails from './Homepage/MovieDetails';
import MovieLists from './Homepage/PopularMovies';
import FeaturedMovie from './Homepage/FeaturedMovie';

function App() {
  return (
    <Routes >
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<FeaturedMovie />} />
          {/* <Route path='/movies' element={<MovieLists />} */}
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
  );
}

export default App;
