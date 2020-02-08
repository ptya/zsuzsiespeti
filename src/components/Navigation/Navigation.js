import React, { useLayoutEffect, useState, useContext } from 'react'
import { animated, useSpring } from 'react-spring'
import { useMediaQuery } from 'react-responsive'

// context
import ModalContext from 'components/context/ModalContext'

// local components
import { device } from 'components/styles/variables'
import Burger from './Burger'

// shared styles

// local styles
import { Nav, Divider, MenuWrapper } from './Navigation.styled'

const AnimatedNav = animated(Nav)

const Navigation = () => {
  const [on, set] = useState(true)
  const [scrolled, setScrolled] = useState(0)
  const [isOpen, setOpen] = useState(false)

  const animation = useSpring({
    top: on ? 0 : -55,
  })

  const { isSent, setModal } = useContext(ModalContext)

  const isSmallScreen = useMediaQuery({ query: device.tabletOrMobile })

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (isSmallScreen) return
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
  }, [isSmallScreen, on, scrolled])

  return (
    <>
      {/* *********** */}
      {/* MOBILE VIEW */}
      {/* *********** */}
      {isSmallScreen && (
        <Nav>
          <Burger open={isOpen} setOpen={setOpen} />
          <MenuWrapper open={isOpen}>
            {!isSent && (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    setModal(true)
                  }}
                >
                  Visszajelzés
                </button>
                <Divider />
              </>
            )}
            <a href="#schedule" onClick={() => setOpen(false)}>
              Programok
            </a>
            <Divider />
            <a href="#menu" onClick={() => setOpen(false)}>
              Menü
            </a>
            <Divider />
            <a href="#location" onClick={() => setOpen(false)}>
              Helyszín
            </a>
            <Divider />
            <a href="#after" onClick={() => setOpen(false)}>
              Buli után
            </a>
            <Divider />
            <a href="#gallery" onClick={() => setOpen(false)}>
              Galéria
            </a>
          </MenuWrapper>
        </Nav>
      )}
      {/* ************ */}
      {/* DESKTOP VIEW */}
      {/* ************ */}
      {!isSmallScreen && (
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
      )}
    </>
  )
}
export default Navigation
