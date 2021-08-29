import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    const { id, value, dataTestId, labelText, onChange } = this.props;
    return (
      <label
        data-testid={ `${dataTestId}-label` }
        htmlFor={ id }
      >
        {labelText}
        <textarea
          data-testid={ dataTestId }
          value={ value }
          id={ id }
          name={ id }
          cols="30"
          rows="10"
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default TextArea;
