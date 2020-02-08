import styled from 'styled-components'

import { colors, device } from 'components/styles/variables'
import { MenuBtn } from './Burger.styled'

// TODO: hover on links

export const Nav = styled.nav`
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  a,
  button {
    color: ${colors.menu};
    margin: 1.5rem auto;
    width: 16rem;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.6rem;
    letter-spacing: 0.12rem;
  }

  button {
    border: 0;
    background: none;
    cursor: pointer;
    font-family: 'Trajan Pro Regular', sans-serif;
  }

  ${MenuBtn} {
    width: 3.6rem;
  }

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    background: ${colors.black};
    a,
    button {
      margin: auto 1rem;
      width: 16rem;
      font-size: 1.2rem;
    }
  }
`

export const MenuWrapper = styled.div`
  background: ${colors.black};
  width: 20rem;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5.5rem;
  transform: ${props =>
    props.open ? `translateX(0rem)` : `translateX(20rem)`};
  transition: transform 0.3s ease-in-out;
`

export const Divider = styled.div`
  width: 17rem;
  height: 1px;
  background: ${colors.menu};
  opacity: 0.5;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    width: 1px;
    height: 2rem;
    margin: auto 1rem;
  }
`
