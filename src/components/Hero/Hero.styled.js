import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors } from 'components/styles/variables'
import { Wrapper } from 'components/styles/shared'

export const HeroWrapper = styled(Wrapper)`
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
export const Rsvp = styled.button`
  position: absolute;
  bottom: -3rem;
  width: 20rem;
  height: 6rem;
  border: 0;
  font-family: 'Trajan Pro Regular', sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  background: ${colors.green};
  color: ${colors.lightBg};
  z-index: 100;
`
