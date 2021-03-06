export const colors = {
  bg: '#a99c85',
  menuBg: '#b9ab96',
  afterBg: '#a4977f',
  galleryBg: '#8f826a',
  velvet: '#652a2a',
  red: '#cc342c',
  black: '#382d20',
  grey: '#333',
  green: '#344117',
  lightGreen: '#4c6021',
  lightBg: '#c6bba6',
  menu: '#867b67',
  modalBg: '#bfb49f',
  darken: '#00000063',
  modalTitle: '#a79b85',
}

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
  tabletOrMobile: '1023px', // for burger menu
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
  // for react-responsive below
  tabletOrMobile: `(max-width: ${size.tabletOrMobile})`, // for burger menu
}
