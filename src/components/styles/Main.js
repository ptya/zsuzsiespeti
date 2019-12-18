import styled from 'styled-components'
import { colors, device } from './variables'

const Main = styled.main`
  /* mobile friendly by default */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
  height: 100vh;
  min-width: 320px;

  h1 {
    font-size: 3.5rem;
    text-transform: uppercase;
    color: ${colors.velvet};
    margin: 0 auto;
    padding-bottom: 2rem;
    width: 300px;
    border-bottom: 1px solid black;
  }

  h2 {
    letter-spacing: 2.5px;
    font-size: 3rem;
    margin: 2rem auto;
  }

  h3 {
    color: ${colors.grey};
    font-weight: normal;
    font-size: 2rem;
    margin: 0 auto;
  }

  p {
    margin: 10rem auto 0;
  }

  @media ${device.mobileL} {
    /* -> @media (min-width: 425px)" */
    h1 {
      font-size: 4rem;
      width: 370px;
    }

    h2 {
      letter-spacing: 3px;
      font-size: 3.5rem;
    }

    h3 {
      font-size: 2.5rem;
    }
  }

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    h1 {
      font-size: 5rem;
      width: 500px;
    }

    h2 {
      letter-spacing: 3.5px;
      font-size: 4rem;
    }

    h3 {
      font-size: 3rem;
    }

    p {
      font-size: 2rem;
    }
  }
`

export default Main
