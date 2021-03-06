import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors, device } from 'components/styles/variables'
import { Wrapper } from 'components/styles/shared'

import background from 'assets/images/after-bg-small.png'

export const Plant1 = styled(Img)`
  width: 30rem;
  top: -19rem;
  left: -13rem;
  transform: rotate(90deg);
  z-index: -1;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    width: 60rem;
    top: -37rem;
    left: -19rem;
  }

  @media ${device.laptop} {
    /* -> @media (min-width: 1024px)" */
    left: 20rem;
  }
`

export const plant1Style = {
  position: 'absolute',
  margin: 'auto',
}

export const Plant2 = styled(Img)`
  width: 25rem;
  bottom: 0;
  right: -19rem;
  z-index: -1;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    width: 45rem;
    bottom: -13.5rem;
    right: -26rem;
  }

  @media ${device.laptop} {
    /* -> @media (min-width: 1024px)" */
    right: -11rem;
  }
`

export const plant2Style = {
  position: 'absolute',
  margin: 'auto',
}

export const Contacts = styled.p`
  margin: 0 auto;
  line-height: 2.5rem;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    margin: 1rem auto;
    line-height: 3.5rem;
  }
`

export const Message = styled.p`
  max-width: 27rem;
  margin: 1rem auto;

  a {
    font-family: 'DIN Next W1G', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 0.8px;
  }

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    max-width: 47rem;

    a {
      font-size: 1.6rem;
    }
  }
`

export const AfterWrapper = styled(Wrapper)`
  background-color: ${colors.afterBg};
  background-image: url(${background});
  width: 100%;

  h2 {
    margin-bottom: 0;
  }

  h3,
  ${Contacts} {
    font-family: 'Trajan Pro Regular', sans-serif;
    font-size: 1.5rem;
    font-weight: 200;
    letter-spacing: 1px;
  }

  h3 {
    color: ${colors.green};
    margin: 3rem auto 0;
  }

  p {
    text-align: center;
  }

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    h3,
    ${Contacts} {
      font-family: 'Trajan Pro Regular', sans-serif;
      font-size: 1.9rem;
      font-weight: 200;
      letter-spacing: 1.425px;
    }
  }
`

export const Line = styled(Img)`
  width: 22rem;
  margin: 2rem 0;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    width: 35rem;
  }
`
