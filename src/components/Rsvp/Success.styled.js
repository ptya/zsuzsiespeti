import styled, { keyframes } from 'styled-components'

import { colors } from 'components/styles/variables'

const scaleAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const drawCircle = keyframes`
  0% {
    stroke-dashoffset: 15.1rem;
  }
  100% {
    stroke-dashoffset: 0;
  }
`

const drawCheck = keyframes`
  0% {
    stroke-dashoffset: 3.6rem;
  }
  100% {
    stroke-dashoffset: 0;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Check = styled.svg`
  /* credits to https://dribbble.com/shots/3492735-Success-Animation-SVG-CSS */
  animation: 1s ease-out 0s 1 both ${scaleAnimation};

  #successAnimationCircle {
    stroke-dasharray: 15.1rem 15.1rem;
    stroke: ${colors.green};
    animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both ${drawCircle},
      0.3s linear 0.9s 1 both ${fadeOut};
  }

  #successAnimationCheck {
    stroke-dasharray: 3.6rem 3.6rem;
    stroke: ${colors.green};
    animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both ${drawCheck},
      0.3s linear 0.9s 1 both ${fadeOut};
  }

  #successAnimationResult {
    fill: ${colors.green};
    opacity: 0;
    animation: 0.3s linear 0.9s both ${fadeIn};
  }
`

export const Wrapper = styled.div`
  margin: 11rem auto 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
