import styled from 'styled-components'

import { colors, device } from 'components/styles/variables'

export const MapWrapper = styled.div`
  width: 80rem;
  height: 40rem;
  border: 3px solid ${colors.lightBg};
  cursor: pointer;

  .mapboxgl-popup-content {
    p {
      color: ${colors.black};
      font-size: 1.2rem;
      margin: 0;
    }
  }

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
  }
`

export const Marker = styled.svg`
  width: 100px;
`
