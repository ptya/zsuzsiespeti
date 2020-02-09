import styled from 'styled-components'
import { Form } from 'formik'

import { colors, device } from 'components/styles/variables'
import { Button } from 'components/styles/shared'

export const StyledForm = styled(Form)`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  padding: 2rem 1rem;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    margin-top: 9rem;
    width: 42rem;
  }

  @media ${device.laptop} {
    /* -> @media (min-width: 1024px)" */
  }
`

export const InputWrapper = styled.div`
  position: relative;

  label {
    font-family: 'Trajan Pro Regular', sans-serif;
    font-weight: 200;
    font-size: 1.5rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: block;
    margin: 1.5rem 0;
  }

  input,
  textarea,
  select {
    font-family: 'Open Sans', sans-serif;
    height: 4.5rem;
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 1px;
    background-color: ${colors.lightBg};
    border: ${props =>
      props.isError
        ? `0.1rem solid ${colors.red}`
        : `0.1rem solid ${colors.menu}`};
    color: ${colors.black};
  }

  textarea {
    height: 12rem;
  }

  select {
    width: 7rem;
  }

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    label {
      font-size: 1.95rem;
      letter-spacing: 1.425px;
      margin: 2rem 0;
    }

    input,
    textarea,
    select {
      height: 5rem;
      font-size: 2rem;
      letter-spacing: 1.5px;
    }

    textarea {
      height: 15rem;
    }
  }

  @media ${device.laptop} {
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
  margin: 0rem auto;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    margin: 4rem auto;
  }
`
