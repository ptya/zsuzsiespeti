import React, { useLayoutEffect, useState } from 'react'
import { animated, useSpring, config } from 'react-spring'

import { Nav, Divider } from './Navigation.styled'

const AnimatedNav = animated(Nav)

const Navigation = () => {
  const [on, set] = useState(true)
  const [scrolled, setScrolled] = useState(0)

  const animation = useSpring({
    top: on ? 0 : -55,
  })

  useLayoutEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      if (scrolled > currentScrollPos) {
        set(true)
      } else {
        set(false)
      }
      setScrolled(currentScrollPos)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <AnimatedNav style={animation}>
      <a href="#rsvp">Visszajelzés</a>
      <Divider />
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
