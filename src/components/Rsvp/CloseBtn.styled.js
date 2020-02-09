import styled from 'styled-components'

import { colors, device } from 'components/styles/variables'

export const Button = styled.button`
  background: initial;
  position: absolute;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 0;
  margin: 0;
  padding: 0.6rem 0;
  width: 3.6rem;
  text-indent: -99rem;
  height: 3.5rem;
  cursor: pointer;
  z-index: 9999;

  :focus {
    outline: none;
  }

  & > div {
    background-color: ${colors.menu};
    transition: all 0.2s linear;
    transform-origin: left;
    height: 0.3rem;
    width: 3rem;
    border-radius: 1rem;
  }

  div:first-child {
    transform: rotate(45deg);
  }

  div:nth-child(2) {
    transform: rotate(-45deg);
  }

  span {
    font-size: 0.5rem;
    margin: 0;
    padding: 0;
    position: absolute;
  }

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    right: -999rem;
  }
`
