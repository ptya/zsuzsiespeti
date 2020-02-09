import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// context
import ModalContext from '../context/ModalContext'

// local components
import Calendar from './Calendar'

// local styles
import { HeroWrapper, Line, Plant, Rsvp } from './Hero.styled'

const Hero = () => {
  const { lineTop, lineBottom, plant } = useStaticQuery(graphql`
    query ImageQuery {
      lineTop: file(relativePath: { eq: "line-top.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lineBottom: file(relativePath: { eq: "line-bottom.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plant: file(relativePath: { eq: "plant-main.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { setModal, isSent } = useContext(ModalContext)

  return (
    <HeroWrapper>
      <Line fluid={lineTop.childImageSharp.fluid} alt="" />
      <h1>Zsuzsi & Peti</h1>
      <Line fluid={lineBottom.childImageSharp.fluid} alt="" />
      <h2>2020.06.19</h2>
      <h3>
        Dudok Rendezvényház, <br />
        Budakeszi
      </h3>
      <Plant fluid={plant.childImageSharp.fluid} alt="" />
      <Calendar />
      <Rsvp onClick={() => setModal(true)} disabled={isSent}>
        {isSent ? 'Köszönjük' : 'Visszajelzés'}
      </Rsvp>
    </HeroWrapper>
  )
}

export default Hero
