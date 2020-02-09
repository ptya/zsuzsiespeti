import React from 'react'
import PropTypes from 'prop-types'

import { InputWrapper } from './Textarea.styled'

const Textarea = ({ field, label, className, ...props }) => (
  <InputWrapper className={className}>
    <label htmlFor={field.name}>{label}</label>
    <textarea id={field.name} {...field} {...props} />
  </InputWrapper>
)

Textarea.propTypes = {
  field: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Textarea.defaultProps = {
  className: '',
}

export default Textarea
