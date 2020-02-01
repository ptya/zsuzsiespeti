import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// local styles
import { AfterWrapper, Contacts, Line } from './After.styled'

// TODO: link to accomodations

const After = () => {
  const { line } = useStaticQuery(graphql`
    query {
      line: file(relativePath: { eq: "line-mid.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <AfterWrapper>
      <h1>Buli után</h1>
      <h2>Sofőrszolgálat</h2>
      <Contacts>
        GPR: +36 30 473 9379 <br />
        Speedboy: +36 70 344 0484 <br />
        Éjjeli Őrangyal: +36 20 988 8987
      </Contacts>
      <h2>Taxi</h2>
      <Contacts>
        6x6: +36 1 666 6666 <br />
        City Taxi: +36 1 211 1111 <br />
        Budapest Taxi: +36 1 777 7777
      </Contacts>
      <Line fluid={line.childImageSharp.fluid} alt="" />
      <p className="message">
        Legalább 1 óra kiszállási idővel számolj (sosem lehet tudni), és
        javasoljuk, hogy egy fuvarra többen csapjatok le!
      </p>
      <p className="message">
        Ha inkább nem mennél haza éjszaka/hajnalban, Budakeszin és környékén
        érdemes{' '}
        <a href="TBD" target="_blank">
          szállásokat böngészni
        </a>
        .
      </p>
    </AfterWrapper>
  )
}

export default After
