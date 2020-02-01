import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// local styles
import {
  ScheduleWrapper,
  Line,
  Timetable,
  Plant1,
  Plant2,
  plant1Style,
  plant2Style,
} from './Schedule.styled'

// TODO: background

const Schedule = () => {
  const { line, plant } = useStaticQuery(graphql`
    query {
      line: file(relativePath: { eq: "line-mid.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
    <ScheduleWrapper>
      <h1>Program</h1>
      <p>
        Terveink szerint így zajlik majd a délután és az este, de nem esünk
        kétségbe, ha mégsem. <br />A lényeg, hogy gyere, és úgyis minden szuper
        lesz, ha ti már ott lesztek!
      </p>
      <Line fluid={line.childImageSharp.fluid} alt="" />
      <Timetable>
        <span>16:00 Vendégvárás</span>
        <span>17:00 Szertartás</span>
        <span>17:30 Fotózkodás</span>
        <span>18:00 Vacsora</span>
        <span>20:30 Nyitótánc</span>
        <span>22:00 Torta</span>
        <span>23:30 Menyecsketánc</span>
        <span>00:00 Éjféli menü</span>
      </Timetable>
      <Plant1 fluid={plant.childImageSharp.fluid} alt="" style={plant1Style} />
      <Plant2 fluid={plant.childImageSharp.fluid} alt="" style={plant2Style} />
    </ScheduleWrapper>
  )
}

export default Schedule
