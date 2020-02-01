import React, { useState, useContext, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { animated, useSpring} from 'react-spring'

// context
import ModalContext from 'components/context/ModalContext'

// hooks
import {useOnClickOutside} from 'components/hooks/useOnClickOutside'

// local components
import Form from './Form'
import Success from './Success'
import Fail from './Fail'

// local styles
import { ModalWrapper, Modal, Title, Plant, plantStyle } from './Rsvp.styled'

const AnimatedWrapper = animated(ModalWrapper)

const Rsvp = () => {
  const { plant } = useStaticQuery(graphql`
    query {
      plant: file(relativePath: { eq: "plant-bg-red.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [isError, setError] = useState(false)
  const [off, setOff] = useState(false)

  const { isSent, setModal } = useContext(ModalContext)

  const modal = useRef()
  useOnClickOutside(modal, () => setOff(true))

  const fade = useSpring({
    from: { opacity: 0,},
    opacity: off ? 0 : 1,
    onRest: () => {
      if (off) {
        setModal(false)
      }
    }
  }
  )

  return (
    <AnimatedWrapper style={fade}>
      <Modal ref={modal}>
        <Title>
          <h1>Visszajelzés</h1>
          <Plant
            fluid={plant.childImageSharp.fluid}
            alt=""
            style={plantStyle}
          />
        </Title>
        {isSent && <Success setOff={setOff}/>}
        {isError && <Fail setOff={setOff} /> }
        {!isSent && !isError && (<Form setError={setError} />)}
      </Modal>
    </AnimatedWrapper>
  )
}

export default Rsvp
