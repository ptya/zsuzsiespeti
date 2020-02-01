import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// local styles
import { GalleryWrapper, Photo, Camera } from './Gallery.styled'

const Gallery = () => {
  const { camera, photo } = useStaticQuery(graphql`
    query {
      camera: file(relativePath: { eq: "camera.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo: file(relativePath: { eq: "gallery-photo.png" }) {
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
      <div className="info">
        <h1>Galéria</h1>
        <p>Idővel itt fogod megtalálni a legjobb közös pillanatainkat.</p>
        <p>Gyere vissza később!</p>
        <Camera fluid={camera.childImageSharp.fluid} alt="Kamera" />
      </div>
      <Photo fluid={photo.childImageSharp.fluid} alt="Rólunk" />
    </GalleryWrapper>
  )
}

export default Gallery
