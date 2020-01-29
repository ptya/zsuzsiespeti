import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors } from 'components/styles/variables'

export const CalendarBack = styled(Img)`
  width: 13rem;
  position: absolute;
`

export const calendarImgStyle = {
  position: 'absolute',
  zIndex: -100,
  left: '8px',
}

export const Day = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 13rem;
  top: -1.5rem;

  span {
    transform: rotate(2deg);
  }

  span:first-of-type {
    font-size: 6.35rem;
    height: 6.35rem;
    letter-spacing: -0.3rem;
    color: ${colors.velvet};
    font-weight: bold;
  }

  span:last-of-type {
    font-size: 1.2rem;
  }
`
