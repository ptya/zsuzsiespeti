import styled from 'styled-components'
import Img from 'gatsby-image'

import { Wrapper, Button } from 'components/styles/shared'

import { device } from 'components/styles/variables'

export const HeroWrapper = styled(Wrapper)`
  margin-top: 5.5rem;
  padding: 5rem 0 2.5rem;
  overflow: initial;

  h1 {
    font-size: 2.8rem;
    letter-spacing: 2.45px;
    margin: 1.2rem auto 0.8rem;
  }

  h2 {
    margin-top: 2.5rem;
    margin-bottom: 0;
    position: relative;
  }

  h3 {
    text-align: center;
    margin-bottom: 0;
  }

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    padding: 5rem 0 3.5rem;

    h1 {
      font-size: 4.6rem;
      letter-spacing: 3.45px;
    }

    h2 {
      margin-top: 0.83em;
    }
  }
`

export const Line = styled(Img)`
  width: 32rem;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    width: 50rem;
  }
`

export const Plant = styled(Img)`
  width: 28rem;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    width: 40rem;
  }
`

export const Rsvp = styled(Button)`
  position: absolute;
  bottom: -3rem;
  z-index: 100;
`

export const HiddenForm = styled.form`
  display: none;
`

export const NewDate = styled(Img)`
  transform: rotate(22deg);
  width: 13rem;
  right: calc(50vw - 14rem);
  top: -2rem;

  @media ${device.mobileM} {
    /* -> @media (min-width: 375px)" */
    right: calc(50vw - 17.5rem);
    top: 10rem;
  }

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    right: calc(50vw - 35rem);
    top: 12rem;
    width: 23rem;
  }
`

export const newDateImgStyle = {
  position: 'absolute',
}
