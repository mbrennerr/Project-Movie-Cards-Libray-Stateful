import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { id, type, value, dataTestId, labelText, onChange } = this.props;
    return (
      <label
        data-testid={ `${dataTestId}-label` }
        htmlFor={ id }
      >
        {labelText}
        <input
          data-testid={ dataTestId }
          type={ type }
          value={ value }
          id={ id }
          name={ id }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default Input;
