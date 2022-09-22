import React, { Component } from 'react';

class MoviesView extends Component {
  state = { queryString: '' };
  textFieldChangeHandler = e => {
    this.setState({ queryString: e.currentTarget.value });
  };
  submitHandler = e => {
    e.preventDefault();
    if (this.state.queryString.length > 0) {
      console.log('SEARCH BUTTON PRESSED');
      this.setState({ queryString: '' });
    }
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          onChange={this.textFieldChangeHandler}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={this.state.queryString}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default MoviesView;
