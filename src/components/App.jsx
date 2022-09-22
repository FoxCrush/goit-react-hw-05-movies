import { Route, Routes } from 'react-router-dom';
import React, { Fragment, Component } from 'react';
import HomeView from 'views/HomeView';
import MoviesView from 'views/MoviesView';
import Navigation from './navigation/Navigation';
import NotFoundView from 'views/NotFoundView';
import MovieDetailsView from 'views/MovieDitailsView';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomeView />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsView />}></Route>
          <Route path="/movies" element={<MoviesView />}></Route>
          <Route
            path="/movies/:movieId/cast"
            element={<div>movies/:movieId</div>}
          ></Route>
          <Route
            path="/movies/:movieId/reviews"
            element={<div>movies/:movieId</div>}
          ></Route>
          <Route path="*" element={<NotFoundView />}></Route>
        </Routes>
      </Fragment>
    );
  }
}
