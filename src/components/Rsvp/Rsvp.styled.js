import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors } from 'components/styles/variables'

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.darken};
  z-index: 2000;
`

export const Modal = styled.main`
  background: ${colors.modalBg};
  width: 40rem;
`
