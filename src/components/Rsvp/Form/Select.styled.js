import styled from 'styled-components'

import select from 'assets/images/select.png'

import { colors, device } from 'components/styles/variables'

import {
  InputWrapper as MainInputWrapper,
  Error as MainError,
} from './Form.styled'

export const InputWrapper = styled(MainInputWrapper)`
  select {
    appearance: none;
    background-image: url(${select});
    background-repeat: no-repeat;
    background-position: right 0.7em top 50%;
  }
`

export const Error = styled(MainError)``
