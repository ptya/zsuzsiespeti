import React from 'react'
import PropTypes from 'prop-types'

import { InputWrapper, Error } from './Input.styled'

const Input = ({
  field,
  form: { touched, errors },
  label,
  className,
  ...props
}) => {
  const isError = touched[field.name] && errors[field.name]

  return (
    <InputWrapper isError={isError} className={className}>
      <label htmlFor={field.name}>{label}</label>
      <input id={field.name} {...field} {...props} />
      {isError && <Error>{errors[field.name]}</Error>}
    </InputWrapper>
  )
}

Input.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
  }),
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Input.defaultProps = {
  className: '',
}

export default Input
