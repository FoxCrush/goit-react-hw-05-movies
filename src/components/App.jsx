import { Fragment } from 'react';

export const App = () => {
  return (
    <Fragment>
      <div className="navigationContainer">
        <a href="/">Home</a>
        <a href="/">Movies</a>
      </div>
      <div className="homePageContainer">
        <span>Trending today</span>
        <ul className="trendingList">
          <li className="trendingListItem"></li>
        </ul>
      </div>
    </Fragment>
  );
};
// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
