import React, { Component } from 'react';
import { string, func, bool } from 'prop-types';

class SearchBar extends Component {
  selectBox = () => {
    const {
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <label
        data-testid="select-input-label"
        htmlFor="selectGenreBox"
      >
        Filtrar por gênero
        <select
          name=""
          id="selectGenreBox"
          data-testid="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <option
            data-testid="select-option"
            value=""
          >
            Todos
          </option>
          <option
            data-testid="select-option"
            value="action"
          >
            Ação
          </option>
          <option
            data-testid="select-option"
            value="comedy"
          >
            Comédia
          </option>
          <option
            data-testid="select-option"
            value="thriller"
          >
            Suspense
          </option>
        </select>

      </label>

    );
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,

    } = this.props;

    return (
      <form
        data-testid="search-bar-form"
        action=""
      >
        <label
          htmlFor="searchBox"
          data-testid="text-input-label"
        >
          Inclui o texto
          <input
            id="searchBox"
            type="text"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label
          data-testid="checkbox-input-label"
          htmlFor="onlyFavorites"
        >
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            id="onlyFavorites"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>

        {this.selectBox()}
      </form>

    );
  }
}

SearchBar.propTypes = {
  searchText: string.isRequired,
  onSearchTextChange: func.isRequired,
  bookmarkedOnly: bool.isRequired,
  onBookmarkedChange: func.isRequired,
  selectedGenre: string.isRequired,
  onSelectedGenreChange: func.isRequired,

};

export default SearchBar;
