import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import DINNextW1G from 'assets/fonts/DINNextW1G-Regular.otf'
import TrajanPro from 'assets/fonts/TrajanPro-Regular.otf'
import background from 'assets/images/bg.jpg'

import { colors } from './variables'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "DIN Next W1G";
    font-style: normal;
    font-weight: normal;
    src: local("DIN Next W1G"), url(${DINNextW1G}) format("opentype");
  }

  @font-face {
    font-family: "Trajan Pro Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Trajan Pro Regular"), url(${TrajanPro}) format("opentype");
  }

  ${normalize}

  html {
    font-size: 10px;
    font-family: "DIN Next W1G",  sans-serif;
    color: ${colors.black};
  }

  body {
    background-color: ${colors.darkBg};
    background-image: url(${background});
  }

  h1,
  h2,
  h3 {
    font-family: "Trajan Pro Regular",  sans-serif;
    font-size: 2rem;
    letter-spacing: 0.5px;
  }

  p {
    font-family: "Trajan Pro Regular",  sans-serif;
    font-size: 1.6rem;
  }

  * {
  box-sizing: border-box;
  }
`

export default GlobalStyle
