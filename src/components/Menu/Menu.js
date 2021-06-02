import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// local styles
import { MenuWrapper, Plant } from './Menu.styled'

const Menu = () => {
  const { plant } = useStaticQuery(graphql`
    query {
      plant: file(relativePath: { eq: "plant-small.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <MenuWrapper id="menu">
      <h2>Menü</h2>
      <p>Folyamatban...</p>
      <Plant fluid={plant.childImageSharp.fluid} alt="" />
    </MenuWrapper>
  )
}

export default Menu
