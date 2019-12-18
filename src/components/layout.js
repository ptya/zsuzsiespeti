import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyle from './styles/GlobalStyles'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
