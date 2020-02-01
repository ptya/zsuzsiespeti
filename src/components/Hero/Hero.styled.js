import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

import { colors } from 'components/styles/variables'
import { Wrapper, Button } from 'components/styles/shared'

export const HeroWrapper = styled(Wrapper)`
  margin-top: 5.5rem;
  padding: 5rem 0 3.5rem;
  overflow: unset;

  h1 {
    margin: 1.2rem auto 0.8rem;
  }

  h2 {
    margin-bottom: 0;
  }

  h3 {
    text-align: center;
    margin-bottom: 0;
  }
`

export const Line = styled(Img)`
  width: 500px;
`

export const Plant = styled(Img)`
  width: 400px;
`

// TODO: hover
export const Rsvp = styled(Button)`
  position: absolute;
  bottom: -3rem;
  z-index: 100;

  ${props =>
    props.disabled &&
    css`
      cursor: default;
    `}
`
