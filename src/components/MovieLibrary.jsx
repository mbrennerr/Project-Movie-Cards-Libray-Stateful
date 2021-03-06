import React, { Component } from 'react';
import { arrayOf } from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = { movies };
  }

onClick = (movieInfo) => {
  this.setState((state) => ({ movies: [...state.movies, movieInfo] }));
}

render() {
  const { movies } = this.state;

  return (
    <div>
      <h2> My awesome movie library </h2>
      <SearchBar />
      <MovieList movies={ movies } />
      <AddMovie onClick={ this.onClick } />
    </div>
  );
}
}
MovieLibrary.propTypes = {
  movies: arrayOf(Object).isRequired,
};
export default MovieLibrary;
