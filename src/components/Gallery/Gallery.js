import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// local styles
import {
  GalleryWrapper,
  Photo,
  Camera,
  Plant,
  plantStyle,
  Info,
  Album,
} from './Gallery.styled'

const Gallery = () => {
  const { camera, photo, plant } = useStaticQuery(graphql`
    query {
      camera: file(relativePath: { eq: "camera.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo: file(relativePath: { eq: "gallery-picture.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plant: file(relativePath: { eq: "plant-bg-brown.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <GalleryWrapper id="gallery">
      <Info>
        <h2>Galéria</h2>
        <p>
          A képeket az alábbi linken keresztül éritek el. Köszönjük, hogy ott
          voltatok velünk!
        </p>
        <Album href="https://photos.app.goo.gl/CmP2gd5JSxbvfbiRA">
          <span>Fotóalbum</span>
        </Album>
        <Camera fluid={camera.childImageSharp.fluid} alt="Kamera" />
      </Info>
      <Photo fluid={photo.childImageSharp.fluid} alt="Rólunk" />
      <Plant fluid={plant.childImageSharp.fluid} alt="" style={plantStyle} />
    </GalleryWrapper>
  )
}

export default Gallery
