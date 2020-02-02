import styled from 'styled-components'

import { colors } from 'components/styles/variables'

export const Wrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  width: 100%;
  overflow: hidden;

  h1 {
    font-size: 46px;
    color: ${colors.velvet};
    text-transform: uppercase;
    letter-spacing: 3.45px;
  }

  h2 {
    font-family: 'Trajan Pro Bold', sans-serif;
    font-size: 25px;
    letter-spacing: 5px;
  }

  h3 {
    font-size: 20px;
    letter-spacing: 1.5px;
  }
`

// TODO: hover

export const Button = styled.button`
  width: 20rem;
  height: 6rem;
  border: 0;
  font-family: 'Trajan Pro Regular', sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  background: ${colors.green};
  color: ${colors.lightBg};
  cursor: pointer;
`
