import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyle from './styles/GlobalStyles'

import { Wrapper } from './Layout.styled'

const Layout = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    {children}
  </Wrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
