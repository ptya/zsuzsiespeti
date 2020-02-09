import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors, device } from 'components/styles/variables'

export const CalendarBack = styled(Img)`
  width: 10rem;
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  margin: auto;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    left: -8px;
    width: 13rem;
  }
`

export const calendarImgStyle = {
  position: 'absolute',
  zIndex: -100,
}

export const Day = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 13rem;
  height: 10rem;
  top: -1.5rem;

  span {
    transform: rotate(2deg);
  }

  span:first-of-type {
    font-size: 4.5rem;
    height: 4.5rem;
    letter-spacing: -0.3rem;
    color: ${colors.velvet};
    font-weight: bold;
  }

  span:last-of-type {
    font-size: 1rem;
  }

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    width: 10rem;
    height: 12rem;

    span:first-of-type {
      font-size: 6.35rem;
      height: 6.35rem;
    }

    span:last-of-type {
      font-size: 1.2rem;
    }
  }
`
