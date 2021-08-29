import React, { Component } from 'react';
import { string, func } from 'prop-types';

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
          cols="25"
          rows="10"
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  id: string.isRequired,
  value: string.isRequired,
  dataTestId: string.isRequired,
  labelText: string.isRequired,
  onChange: func.isRequired,
};
export default TextArea;
