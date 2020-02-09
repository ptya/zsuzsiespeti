import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// local styles
import { CalendarBack, Day, calendarImgStyle } from './Calendar.styled'

const Calendar = () => {
  const { calendar } = useStaticQuery(graphql`
    query {
      calendar: file(relativePath: { eq: "calendar.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const now = new Date()
  const date = new Date(2020, 5, 19)
  const days = Math.ceil((date.getTime() - now.getTime()) / (1000 * 3600 * 24))

  return (
    <Day>
      <CalendarBack
        style={calendarImgStyle}
        fluid={calendar.childImageSharp.fluid}
        alt=""
      />
      <span>{days}</span>
      <span>nap van még...</span>
    </Day>
  )
}

export default Calendar
