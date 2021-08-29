import React, { Component } from 'react';
import { string, func } from 'prop-types';

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

Input.propTypes = {
  id: string.isRequired,
  type: string.isRequired,
  value: string.isRequired,
  dataTestId: string.isRequired,
  labelText: string.isRequired,
  onChange: func.isRequired,
};

export default Input;
