/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ModalProvider } from './src/components/context/ModalContext'

require('typeface-open-sans')

export const wrapRootElement = ({ element }) => (
  <ModalProvider>{element}</ModalProvider>
)

wrapRootElement.propTypes = {
  element: PropTypes.any.isRequired,
}
