import React, { Component } from 'react';
import { string, func } from 'prop-types';

class SelectBox extends Component {
  render() {
    const {
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form action="">
        <label
          data-testid="select-input-label"
          htmlFor="selectGenreBox"
        >
          Filtrar por gênero
          <select
            name=""
            id=""
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
      </form>

    );
  }
}

SelectBox.propTypes = {
  selectedGenre: string.isRequired,
  onSelectedGenreChange: func.isRequired,

};

export default SelectBox;
