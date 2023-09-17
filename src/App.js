
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage';

import MovieDetails from './components/MovieDetails';
import MovieLists from './components/Movies1';
import FeaturedMovie from './components/FeaturedMovie';

function App() {
  return (
    <Routes >
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<FeaturedMovie />} />
          {/* <Route path="/movies" element={<MovieLists />} /> */}
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
  );
}

export default App;
