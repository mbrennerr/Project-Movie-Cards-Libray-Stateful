import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form action="" data-testid="search-bar-form">
        <label
          htmlFor="lablink"
          data-testid="text-input-label"
        >
          Inclui o texto
          <input type="text" id="lablink" data-testid="text-input" value={ searchText } onChange={ onSearchTextChange } />
        </label>

      </form>

    );
  }
}

export default SearchBar;
