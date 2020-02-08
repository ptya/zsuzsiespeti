import styled from 'styled-components'

import { colors, device } from 'components/styles/variables'

export const MapWrapper = styled.div`
  width: 30rem;
  height: 20rem;
  border: 3px solid ${colors.lightBg};
  cursor: pointer;

  .mapboxgl-popup-content {
    p {
      color: ${colors.black};
      font-size: 1.2rem;
      margin: 0;
    }
  }

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    width: 80rem;
    height: 40rem;
  }
`

export const Marker = styled.svg`
  width: 100px;
`
