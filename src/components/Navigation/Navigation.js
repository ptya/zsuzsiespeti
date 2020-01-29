import React from 'react'

import { Nav, Divider } from './Navigation.styled'

const Navigation = () => (
  <Nav>
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
  </Nav>
)

export default Navigation
