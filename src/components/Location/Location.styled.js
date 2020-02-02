import styled from 'styled-components'
import Img from 'gatsby-image'

import { Wrapper } from 'components/styles/shared'

export const LocationWrapper = styled(Wrapper)`
  h1 {
    margin-bottom: 0;
  }

  p {
    text-align: center;

    span {
      font-weight: bold;
      display: block;
    }
  }
`

export const Plant = styled(Img)`
  width: 400px;
  transform: scaleX(-1) rotate(115deg);
`

export const plantStyle = {
  position: 'absolute',
  top: '-16rem',
  right: '25rem',
  margin: 'auto',
}
