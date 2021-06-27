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
  const date = new Date(2021, 5, 18)
  const days =
    Math.ceil((date.getTime() - now.getTime()) / (1000 * 3600 * 24)) * -1

  return (
    <Day>
      <CalendarBack
        style={calendarImgStyle}
        fluid={calendar.childImageSharp.fluid}
        alt=""
      />
      <span>{days}</span>
      <span>napja volt...</span>
    </Day>
  )
}

export default Calendar
