import React from 'react'

import { StyledMarker } from './Marker.styled'

const Marker = () => (
  <StyledMarker
    href="https://goo.gl/maps/pAVfTVGgwsf3GtrD7"
    target="_blank"
    alt="Google Maps"
  >
    <svg viewBox="0 0 24 25">
      <path d="M13.04 21.708a2.003 2.003 0 01-2.751-.671C6.762 15.235 5 11.287 5 8.993A6.996 6.996 0 0112 2c3.866 0 7 3.13 7 6.993 0 2.294-1.762 6.242-5.289 12.044a2.001 2.001 0 01-.672.671zM12.006 12a3.002 3.002 0 003.004-3c0-1.657-1.345-3-3.004-3a3.002 3.002 0 00-3.003 3c0 1.657 1.345 3 3.003 3z" />
    </svg>
  </StyledMarker>
)

export default Marker
