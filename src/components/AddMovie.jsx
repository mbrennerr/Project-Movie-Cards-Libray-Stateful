import React, { Component } from 'react';
import Input from './Form/Input';
import TextArea from './Form/TextArea';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  renderGenre = () => {
    const { genre } = this.state;

    return (
      <label
        data-testid="genre-input-label"
        htmlFor="genre"
      >
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          id="genre"
          value={ genre }
          onChange={ this.handleChange }
        >
          <option
            data-testid="genre-option"
            value="action"
          >
            Ação
          </option>
          <option
            data-testid="genre-option"
            value="comedy"
          >
            Comédia
          </option>
          <option
            data-testid="genre-option"
            value="thriller"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          labelText="Título"
          id="title"
          dataTestId="title-input"
          type="text"
          value={ title }
          onChange={ this.handleChange }
        />
        <Input
          labelText="Subtítulo"
          id="subtitle"
          dataTestId="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <Input
          labelText="Imagem"
          id="imagePath"
          dataTestId="image-input"
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <Input
          labelText="Avaliação"
          id="rating"
          dataTestId="rating-input"
          type="number"
          value={ rating }
          onChange={ this.handleChange }
        />
        <TextArea
          labelText="Sinopse"
          id="storyline"
          dataTestId="storyline-input"
          value={ storyline }
          onChange={ this.handleChange }

        />
        {this.renderGenre()}
      </form>
    );
  }
}

export default AddMovie;
