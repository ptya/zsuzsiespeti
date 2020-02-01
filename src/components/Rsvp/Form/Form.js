import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'

// context
import ModalContext from 'components/context/ModalContext'

// local components
import Input from './Input'
import Textarea from './Textarea'
import Select from './Select'

// local styles
import { StyledForm, Info, Submit } from './Form.styled'

const Form = ({ setError }) => {
  const { setSent } = useContext(ModalContext)

  const initialValues = {
    name: '',
    count: 2,
    note: '',
  }

  const validate = values => {
    const errors = {}
    // name validations
    if (!values.name) {
      errors.name = 'Kötelező'
    }

    return errors
  }

  const encode = data =>
    Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&')

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const resp = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'rsvp', ...values }),
    }).catch(error => {
      console.error('FETCH FAILED', error)
      setError(true)
    })

    if (resp.ok) {
      setSubmitting(false)
      resetForm()
      setSent(true)
    } else {
      console.error('REQUEST FAILED', resp)
      setError(true)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      initialErrors={{ state: 'empty' }}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, isValid }) => (
        <StyledForm
          name="contact"
          netlify-honeypot="bot-field"
          data-netlify="true"
          method="post"
        >
          <input type="hidden" name="form-name" value="rsvp" />
          <input type="hidden" name="bot-field" />
          <Field type="text" name="name" label="Ki vagy?" component={Input} />
          <Field name="count" label="Hányan jöttök?" component={Select} />
          <Field name="note" label="Megjegyzés:" component={Textarea} />
          <Info>
            ide kellene mindenféle ételallergia, gyerek etető szék, vagy bármi
            fontos infó. egy hosszabb label, vagy egy információs mondat
          </Info>
          <Submit type="submit" disabled={isSubmitting || !isValid}>
            Elküldöm
          </Submit>
        </StyledForm>
      )}
    </Formik>
  )
}

Form.propTypes = {
  setError: PropTypes.func.isRequired,
}

export default Form
