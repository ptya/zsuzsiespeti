import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import DINNextW1GRegular from 'assets/fonts/DINNextW1G-Regular.otf'
import DINNextW1GBold from 'assets/fonts/DINNextW1G-Bold.otf'
import TrajanProRegular from 'assets/fonts/TrajanPro-Regular.otf'
import TrajanProBold from 'assets/fonts/TrajanPro-Bold.otf'
import background from 'assets/images/bg.jpg'

import { colors, device } from './variables'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "DIN Next W1G";
    font-style: normal;
    font-weight: normal;
    src: local("DIN Next W1G"), url(${DINNextW1GRegular}) format("opentype");
  }

  @font-face {
    font-family: "DIN Next W1G";
    font-style: bold;
    font-weight: bold;
    src: local("DIN Next W1G"), url(${DINNextW1GBold}) format("opentype");
  }

  @font-face {
    font-family: "Trajan Pro Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Trajan Pro Regular"), url(${TrajanProRegular}) format("opentype");
  }

  @font-face {
    font-family: "Trajan Pro Bold";
    font-style: bold;
    font-weight: bold;
    src: local("Trajan Pro Bold"), url(${TrajanProBold}) format("opentype");
  }

  ${normalize}

  html {
    font-size: 10px;
    font-family: "DIN Next W1G",  sans-serif;
    color: ${colors.black};
  }

  body {
    background-color: ${colors.bg};
    background-image: url(${background});
  }

  h1,
  h2,
  h3 {
    font-family: "Trajan Pro Regular",  sans-serif;
    font-style: normal;
    font-size: 2rem;
    letter-spacing: 0.5px;
  }

  a {
    font-family: "Trajan Pro Regular",  sans-serif;
    font-size: 1.6rem;
    color: ${colors.velvet};
    transition: color 0.2s ease-in-out;

    :hover {
      color: ${colors.red};
    }

    :visited {
      color: ${colors.velvet};
    }
  }

  p {
    font-family: 'DIN Next W1G', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 0.8px;
  }

  * {
  box-sizing: border-box;
  }

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    p {
      font-size: 1.6rem;
    }
  }
`

export default GlobalStyle
