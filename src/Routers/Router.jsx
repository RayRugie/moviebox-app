import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Homepage from '../Homepage/Homepage';
import MovieList from '../Homepage/FeaturedMovie';
import MovieDetails from '../Homepage/MovieDetails';

const Router = () => {
  return (
    <div className="router">
        <BrowserRouter>
            <Route>
                <Route path='/' element={<Homepage/>}>
                </Route>
            
            <Route path="/" exact component={MovieList} />
        <Route path="/movie/:id" component={MovieDetails} />
           </Route>
        </BrowserRouter>
    </div>
  )
}

export default Router