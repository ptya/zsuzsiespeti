import React, { useLayoutEffect, useState, useContext } from 'react'
import { animated, useSpring } from 'react-spring'

// context
import ModalContext from 'components/context/ModalContext'

// local styles
import { Nav, Divider } from './Navigation.styled'

const AnimatedNav = animated(Nav)

const Navigation = () => {
  const [on, set] = useState(true)
  const [scrolled, setScrolled] = useState(0)

  const animation = useSpring({
    top: on ? 0 : -55,
  })

  const { isSent, setModal } = useContext(ModalContext)

  useLayoutEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset < 0 ? 0 : window.pageYOffset
      if (
        scrolled > currentScrollPos ||
        (currentScrollPos === 0 && on === false)
      ) {
        set(true)
      } else {
        set(false)
      }
      setScrolled(currentScrollPos)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [on, scrolled])

  return (
    <AnimatedNav style={animation}>
      {!isSent && (
        <>
          <button type="button" onClick={() => setModal(true)}>
            Visszajelzés
          </button>
          <Divider />
        </>
      )}
      <a href="#schedule">Programok</a>
      <Divider />
      <a href="#menu">Menü</a>
      <Divider />
      <a href="#location">Helyszín</a>
      <Divider />
      <a href="#after">Buli után</a>
      <Divider />
      <a href="#gallery">Galéria</a>
    </AnimatedNav>
  )
}
export default Navigation
