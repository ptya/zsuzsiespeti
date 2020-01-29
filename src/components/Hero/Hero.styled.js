import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors } from 'components/styles/variables'

export const Wrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem auto 3.5rem;

  h1 {
    font-size: 46px;
    color: ${colors.velvet};
    text-transform: uppercase;
    letter-spacing: 3.45px;
    margin: 1.2rem auto 0.8rem;
  }

  h2 {
    font-family: 'Trajan Pro Bold', sans-serif;
    font-size: 25px;
    letter-spacing: 5px;
    margin-bottom: 0;
  }

  h3 {
    font-size: 20px;
    letter-spacing: 1.5px;
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
  bottom: -6.5rem;
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
