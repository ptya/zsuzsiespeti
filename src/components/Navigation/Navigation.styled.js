import styled from 'styled-components'

import { colors } from 'components/styles/variables'

// TODO: hover on links

const Nav = styled.nav`
  height: 55px;
  background: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: ${colors.lightBg};
    margin: auto 1rem;
    width: 16rem;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
  }
`

const Divider = styled.div`
  width: 1px;
  height: 2rem;
  background: ${colors.divider};
  margin: auto 1rem;
`

export { Nav, Divider }
