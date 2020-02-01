import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors } from 'components/styles/variables'
import { Wrapper } from 'components/styles/shared'

import background from 'assets/images/gallery-bg-small.png'

export const Photo = styled(Img)`
  width: 45rem;
  margin: 2rem 0;
  grid-area: photo;
`

export const Camera = styled(Img)`
  width: 10rem;
  margin: 5rem 0 0;
  grid-area: info;
`

export const GalleryWrapper = styled(Wrapper)`
  background-color: ${colors.galleryBg};
  background-image: url(${background});
  width: 100%;

  display: grid;
  grid-template-areas: 'info photo';
  grid-template-columns: 33rem 45rem;
  grid-auto-rows: 1fr;

  .info {
    grid-area: info;
    align-self: flex-start;

    p {
      width: 32rem;
    }
  }
`
