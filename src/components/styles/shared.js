import styled from 'styled-components'

import { colors, device } from 'components/styles/variables'

export const Wrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
  overflow: hidden;
  z-index: 1;

  h1 {
    font-size: 2rem;
    color: ${colors.velvet};
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  h2 {
    font-family: 'Trajan Pro Bold', sans-serif;
    font-size: 2rem;
    letter-spacing: 3px;
  }

  h3 {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    padding: 5rem 0;

    h1 {
      font-size: 4.6rem;
      letter-spacing: 3.45px;
    }

    h2 {
      font-size: 2.5rem;
      letter-spacing: 5px;
    }
    h3 {
      font-size: 2rem;
      letter-spacing: 1.5px;
    }
  }
`

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
  transition: all 0.1s ease-in-out;

  :disabled {
    cursor: default;
    :hover,
    :focus {
      background: ${colors.green};
    }
  }

  :hover,
  :focus {
    background: ${colors.lightGreen};
  }

  :active {
    transform: translateY(1px);
  }
`
