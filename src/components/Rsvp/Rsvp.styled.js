import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors } from 'components/styles/variables'

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background: ${colors.darken};
  z-index: 2000;
`

export const Modal = styled.main`
  position: relative;
  background: ${colors.modalBg};
  width: 60rem;
  margin: 10rem auto auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  overflow: hidden;
  height: 9rem;
  display: flex;
  align-items: center;
  background: ${colors.velvet};

  h1 {
    margin: auto 3rem;
    font-size: 2.5rem;
    color: ${colors.modalTitle};
    text-transform: uppercase;
    letter-spacing: 1.875px;
    z-index: 1;
  }
`

export const Plant = styled(Img)`
  width: 622px;
`

export const plantStyle = {
  position: 'absolute',
  top: '-15rem',
  right: '-9rem',
  margin: 'auto',
}
