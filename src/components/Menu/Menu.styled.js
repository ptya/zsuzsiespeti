import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors } from 'components/styles/variables'
import { Wrapper } from 'components/styles/shared'

import background from 'assets/images/menu-bg-small.png'

export const MenuWrapper = styled(Wrapper)`
  background-color: ${colors.menuBg};
  background-image: url(${background});
  width: 100%;

  h1 {
    margin-bottom: 0;
  }

  p {
    text-align: center;
    font-size: 18px;
    letter-spacing: 0.9px;
  }
`

export const Plant = styled(Img)`
  width: 6.4rem;
`
