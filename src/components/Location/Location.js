import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
    <LocationWrapper>
      <h1>Helyszín</h1>
      <p>
        Dudok Rendezvényház és Étterem
        <span>2092 Budakeszi, Budakeszi Erdészet Kisérleti telep</span>
      </p>
      {/* TODO: MAP */}
      <Plant fluid={plant.childImageSharp.fluid} alt="" style={plantStyle} />
    </LocationWrapper>
  )
}

export default Location
