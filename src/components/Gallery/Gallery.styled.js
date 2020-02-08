import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors, device } from 'components/styles/variables'
import { Wrapper } from 'components/styles/shared'

import background from 'assets/images/gallery-bg-small.png'

export const Photo = styled(Img)`
  width: 16rem;
  margin: 2rem 0;
  grid-area: photo;
  z-index: 1;
  transform: rotate(6deg);

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    width: 45rem;
  }
`

export const Camera = styled(Img)`
  width: 5rem;
  margin: 2rem 0 0;
  grid-area: info;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    width: 10rem;
    margin: 5rem 0 0;
  }
`

export const Plant = styled(Img)`
  width: 15rem;
  top: 4rem;
  left: 0;
  right: 0;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    width: 29.3rem;
    top: 11rem;
    left: 0;
    right: 0;
  }
`

export const plantStyle = {
  position: 'absolute',
  margin: 'auto',
}

export const GalleryWrapper = styled(Wrapper)`
  background-color: ${colors.galleryBg};
  background-image: url(${background});
  width: 100%;

  display: grid;
  grid-template-areas: 'info photo';
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    grid-template-columns: 33rem 45rem;
    grid-gap: 10rem;
  }
`

export const Info = styled.div`
  grid-area: info;
  align-self: flex-start;
  z-index: 1;
  padding-left: 2.5rem;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    padding-left: 0;

    p {
      width: 32rem;
    }
  }
`
