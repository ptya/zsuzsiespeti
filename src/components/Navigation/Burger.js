import React from 'react'
import PropTypes from 'prop-types'
import { MenuBtn } from './Burger.styled'

const Burger = ({ open, setOpen }) => (
  <MenuBtn open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
    <span>Menü</span>
  </MenuBtn>
)

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

export default Burger
