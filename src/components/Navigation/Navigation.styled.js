import styled from 'styled-components'

import { colors, device } from 'components/styles/variables'
import { MenuBtn } from './Burger.styled'

export const Nav = styled.nav`
  height: 55px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  ${MenuBtn} {
    width: 3.6rem;
  }
`

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

  a,
  button {
    color: ${colors.menu};
    margin: auto;
    padding: 1.5rem 0;
    width: 16rem;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.6rem;
    letter-spacing: 0.12rem;
    transition: color 0.2s ease-in-out;

    :hover {
      color: ${colors.menuBg};
    }
  }

  button {
    border: 0;
    background: none;
    cursor: pointer;
    font-family: 'Trajan Pro Regular', sans-serif;
  }

  @media ${device.tablet} {
    /* -> @media (min-width: 768)" */
    padding-top: 7.5rem;
    width: 30rem;
    transform: ${props =>
      props.open ? `translateX(0rem)` : `translateX(30rem)`};

    a,
    button {
      padding: 2rem 0;
    }
  }

  @media ${device.laptop} {
    /* -> @media (min-width: 1024px)" */
    background: ${colors.black};
    transform: initial;
    width: 100%;
    flex-direction: row;
    padding-top: 0;
    position: relative;
    height: 100%;

    a,
    button {
      margin: auto 1rem;
      width: 16rem;
      font-size: 1.2rem;
    }
  }
`

export const Divider = styled.div`
  width: 17rem;
  height: 1px;
  background: ${colors.menu};
  opacity: 0.5;

  @media ${device.laptop} {
    /* -> @media (min-width: 1024px)" */
    width: 1px;
    height: 2rem;
    margin: auto 1rem;
  }
`
