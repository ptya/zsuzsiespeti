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
    <GalleryWrapper>
      <Info>
        <h1>Galéria</h1>
        <p>Idővel itt fogod megtalálni a legjobb közös pillanatainkat.</p>
        <p>Gyere vissza később!</p>
        <Camera fluid={camera.childImageSharp.fluid} alt="Kamera" />
      </Info>
      <Photo fluid={photo.childImageSharp.fluid} alt="Rólunk" />
      <Plant fluid={plant.childImageSharp.fluid} alt="" style={plantStyle} />
    </GalleryWrapper>
  )
}

export default Gallery
