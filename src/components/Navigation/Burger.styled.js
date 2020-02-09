import styled from 'styled-components'

import { colors, device } from 'components/styles/variables'

export const MenuBtn = styled.button`
  background: initial;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 0;
  padding: 0.6rem 0;
  width: 3.6rem;
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
    right: -9999rem;
  }

  @media ${device.mobileM} {
    /* -> @media (min-width: 375px)" */
    right: 2rem;
  }

  @media ${device.tablet} {
    /* -> @media (min-width: 768)" */
    top: 4rem;
    right: 4rem;
    width: 4rem;
    height: ${props => (props.open ? '3.9rem' : '4rem')};

    & > div {
      height: 0.4rem;
      width: ${props => (props.open ? '3.3rem' : '4rem')};
    }
  }

  @media ${device.laptop} {
    /* -> @media (min-width: 1024px)" */
    display: none;
  }
`
