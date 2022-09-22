import React from 'react';
import { NavLink } from 'react-router-dom';

const TrandingContainer = ({ movies }) => (
  <div className="trandingContainer">
    <h2>Trending today</h2>
    <ul className="trendingList">
      {movies &&
        movies.map(movie => (
          <li className="trendingListItem" key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>
              {movie.title ?? movie.name}
            </NavLink>
          </li>
        ))}
    </ul>
  </div>
);

export default TrandingContainer;
