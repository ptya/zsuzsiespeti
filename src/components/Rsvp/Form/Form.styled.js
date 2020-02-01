import styled from 'styled-components'
import { Form } from 'formik'

import { colors, device } from 'components/styles/variables'
import { Button } from 'components/styles/shared'

export const StyledForm = styled(Form)`
  width: 42rem;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 9rem;
  padding: 2rem 1rem;

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
  }
`

export const InputWrapper = styled.div`
  position: relative;

  label {
    font-family: 'Trajan Pro Regular', sans-serif;
    font-weight: 200;
    font-size: 1.95rem;
    letter-spacing: 1.425px;
    text-transform: uppercase;
    display: block;
    margin: 2rem 0;
  }

  input,
  textarea,
  select {
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    letter-spacing: 1.5px;
    height: 5rem;
    width: 100%;
    padding: 1rem;
    background-color: ${colors.lightBg};
    border: ${props =>
      props.isError
        ? `0.1rem solid ${colors.red}`
        : `0.1rem solid ${colors.menu}`};
    color: ${colors.black};
  }

  textarea {
    height: 15rem;
  }

  select {
    width: 7rem;
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    input,
    textarea {
      font-size: 2rem;
    }
  }
`

export const Error = styled.span`
  position: absolute;
  right: 1rem;
  bottom: 2.5rem;
  color: ${colors.red};
  letter-spacing: 0.15rem;
  font-size: 1.4rem;
  text-transform: lowercase;
`

export const Info = styled.p`
  font-size: 1.2rem;
  letter-spacing: 0.6px;
`

export const Submit = styled(Button)`
  align-self: center;
  margin: 4rem auto;
`
