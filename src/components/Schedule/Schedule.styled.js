import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors } from 'components/styles/variables'
import { Wrapper } from 'components/styles/shared'

import leaves from 'assets/images/leaves.png'

export const ScheduleWrapper = styled(Wrapper)`
  h1 {
    margin-bottom: 0;
  }

  p {
    text-align: center;
  }
`

export const Line = styled(Img)`
  width: 35rem;
  margin: 1rem 0;
`

export const Timetable = styled.p`
  font-family: 'Trajan Pro Regular', sans-serif;
  font-size: 2.4rem;
  word-spacing: 0.5rem;
  letter-spacing: 1.8px;

  span {
    margin: 1rem 0;
    text-align: left;
    display: block;
  }

  span:nth-child(2) {
    color: ${colors.green};
    position: relative;

    :before {
      content: '';
      background-image: url(${leaves});
      width: 3.3rem;
      height: 2.3rem;
      position: absolute;
      left: -4rem;
    }
  }
`

export const Plant1 = styled(Img)`
  width: 450px;
`

export const plant1Style = {
  position: 'absolute',
  bottom: '-15rem',
  left: '-6rem',
  margin: 'auto',
}

export const Plant2 = styled(Img)`
  width: 700px;
  transform: scaleX(-1) rotate(75deg);
`

export const plant2Style = {
  position: 'absolute',
  top: '-11rem',
  right: '-30rem',
  margin: 'auto',
}