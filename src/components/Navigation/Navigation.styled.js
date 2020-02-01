import styled from 'styled-components'

import { colors } from 'components/styles/variables'

// TODO: hover on links

const Nav = styled.nav`
  height: 55px;
  background: ${colors.black};
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
    margin: auto 1rem;
    width: 16rem;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.2rem;
    letter-spacing: 0.12rem;
  }

  button {
    border: 0;
    background: none;
    cursor: pointer;
    font-family: 'Trajan Pro Regular', sans-serif;
  }
`

const Divider = styled.div`
  width: 1px;
  height: 2rem;
  background: ${colors.menu};
  margin: auto 1rem;
  opacity: 0.5;
`

export { Nav, Divider }
