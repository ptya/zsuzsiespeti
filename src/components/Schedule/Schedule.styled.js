import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors, device } from 'components/styles/variables'
import { Wrapper } from 'components/styles/shared'

import leaves from 'assets/images/leaves.png'

export const ScheduleWrapper = styled(Wrapper)`
  h1 {
    margin-bottom: 0;
  }

  p {
    text-align: center;
    max-width: 27rem;
  }

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    p {
      max-width: unset;
    }
  }
`

export const Line = styled(Img)`
  width: 22rem;
  margin: 1rem 0;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    width: 35rem;
  }
`

export const Timetable = styled.p`
  font-family: 'Trajan Pro Regular', sans-serif;
  font-size: 1.5rem;
  word-spacing: 0.5rem;
  letter-spacing: 1px;
  margin-bottom: 0;

  span {
    margin: 0.5rem 0;
    text-align: left;
    display: block;
  }

  span:nth-child(2) {
    color: ${colors.green};
    position: relative;

    :before {
      content: '';
      background-image: url(${leaves});
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      width: 2.2rem;
      height: 1.5rem;
      position: absolute;
      left: -2.5rem;
    }
  }

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    font-size: 2.4rem;
    letter-spacing: 1.8px;
    margin-bottom: 1em;

    span:nth-child(2):before {
      width: 3.3rem;
      height: 2.3rem;
      left: -4rem;
    }
  }
`

export const Plant1 = styled(Img)`
  width: 10rem;
  left: -3.5rem;
  bottom: -1.5rem;
  z-index: -1;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    width: 450px;
    bottom: -15rem;
    left: -6rem;
  }
`

export const plant1Style = {
  position: 'absolute',
  margin: 'auto',
}

export const Plant2 = styled(Img)`
  width: 20rem;
  transform: scaleX(-1) rotate(75deg);
  top: -4rem;
  right: -11rem;
  z-index: -1;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    width: 70rem;
    top: -11rem;
    right: -30rem;
  }
`

export const plant2Style = {
  position: 'absolute',
  margin: 'auto',
}
