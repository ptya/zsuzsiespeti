import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors } from 'components/styles/variables'
import { Wrapper } from 'components/styles/shared'

import background from 'assets/images/after-bg-small.png'

export const Contacts = styled.p`
  margin: 1rem auto;
  line-height: 3.5rem;
`

export const AfterWrapper = styled(Wrapper)`
  background-color: ${colors.afterBg};
  background-image: url(${background});
  width: 100%;

  h1 {
    margin-bottom: 0;
  }

  h2,
  ${Contacts} {
    font-family: 'Trajan Pro Regular', sans-serif;
    font-size: 1.9rem;
    font-weight: 200;
    letter-spacing: 1.425px;
  }

  h2 {
    color: ${colors.green};
    margin: 3rem auto 0;
  }

  p {
    text-align: center;
  }

  .message {
    width: 47rem;
    margin: 1rem auto;

    a {
      font-family: 'DIN Next W1G', sans-serif;
      font-size: 1.6rem;
      letter-spacing: 0.8px;
      color: ${colors.velvet};
    }
  }
`

export const Line = styled(Img)`
  width: 35rem;
  margin: 2rem 0;
`
