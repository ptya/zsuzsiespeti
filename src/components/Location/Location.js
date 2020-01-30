import React from 'react'

// local styles
import { LocationWrapper } from './Location.styled'

const Location = () => (
  <LocationWrapper>
    <h1>Helyszín</h1>
    <p>
      Dudok Rendezvényház és Étterem
      <span>2092 Budakeszi, Budakeszi Erdészet Kisérleti telep</span>
    </p>
    {/* TODO: MAP */}
  </LocationWrapper>
)

export default Location
