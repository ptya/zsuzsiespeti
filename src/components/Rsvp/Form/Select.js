import React from 'react'
import PropTypes from 'prop-types'

import { InputWrapper, Error } from './Select.styled'

const Select = ({
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
      <select id={field.name} {...field} {...props}>
        {[...Array(5).keys()].map(i => (
          <option key={i} value={i + 1} defaultValue={i === 1}>
            {i + 1}
          </option>
        ))}
      </select>
      {isError && <Error>{errors[field.name]}</Error>}
    </InputWrapper>
  )
}

Select.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
  }),
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Select.defaultProps = {
  className: '',
}

export default Select
