import React, { Component } from 'react';
import Axios from 'axios';
import TrandingContainer from 'components/trandongContainer';
import withRouter from 'utility/withRouter';

class HomeView extends Component {
  state = { movies: [] };
  async componentDidMount() {
    const response = await Axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=05128aeaec84e0bb509bd52abf24a4f8'
    );
    this.setState({ movies: response.data.results });
  }
  render() {
    const { movies } = this.state;
    return <TrandingContainer movies={movies} />;
  }
}

export default HomeView;
