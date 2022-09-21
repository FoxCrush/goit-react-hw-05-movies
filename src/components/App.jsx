import { Route, Routes } from 'react-router-dom';
import React, { Fragment } from 'react';
import HomeView from 'views/HomeView';
import MoviesView from 'views/MoviesView';
import Navigation from './navigation/Navigation';
import NotFoundView from 'views/NotFoundView';

export const App = () => {
  return (
    <Fragment>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/movies" element={<MoviesView />}></Route>
        <Route path="*" element={<NotFoundView />}></Route>
      </Routes>
    </Fragment>
  );
};

// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
