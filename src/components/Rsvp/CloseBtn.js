import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './CloseBtn.styled'

const CloseBtn = ({ setOff }) => (
  <Button onClick={() => setOff(true)}>
    <div />
    <div />
    <span>Bezár</span>
  </Button>
)

CloseBtn.propTypes = {
  setOff: PropTypes.func.isRequired,
}

export default CloseBtn
