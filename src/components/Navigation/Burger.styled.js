import styled from 'styled-components'

import { colors, device } from 'components/styles/variables'

export const MenuBtn = styled.button`
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
  height: ${props => (props.open ? '3.6rem' : '3.5rem')};
  cursor: pointer;
  z-index: 9999;
  transition: all 0.1s linear;

  :focus {
    outline: none;
  }

  & > div {
    background-color: ${props => (props.open ? colors.menu : colors.black)};
    transition: all 0.2s linear;
    transform-origin: left;
    height: 0.3rem;
    width: ${props => (props.open ? '3rem' : '3.5rem')};
    border-radius: 1rem;
  }

  div:first-child {
    transform: ${props => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
  }
  div:nth-child(2) {
    opacity: ${props => (props.open ? 0 : 1)};
    transform: ${props =>
      props.open ? 'translateX(4.5rem)' : 'translateX(0)'};
  }
  div:nth-child(3) {
    transform: ${props => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
  }

  span {
    font-size: 0.5rem;
    margin: 0;
    padding: 0;
    position: absolute;
  }

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    height: 4.9rem;

    & > div {
      height: 0.5rem;
      width: 4.4rem;
    }

    div:nth-child(2) {
      transform: ${props =>
        props.open ? 'translateX(5.5rem)' : 'translateX(0)'};
    }
  }
`
