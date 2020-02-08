import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// local components
import Map from './Map'

// local styles
import { LocationWrapper, Plant, plantStyle } from './Location.styled'

const Location = () => {
  const { plant } = useStaticQuery(graphql`
    query {
      plant: file(relativePath: { eq: "plant-bg-green.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <LocationWrapper id="location">
      <h1>Helyszín</h1>
      <p>
        Dudok Rendezvényház és Étterem
        <span>2092 Budakeszi, Budakeszi Erdészet Kisérleti telep</span>
      </p>
      <Plant fluid={plant.childImageSharp.fluid} alt="" style={plantStyle} />
      <Map />
    </LocationWrapper>
  )
}

export default Location
