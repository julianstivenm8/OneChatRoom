const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const THEME = {
  colors: {
    black: '#000000',
    semiBlack: '#373737',
    white: '#fff',
    gray: '#9B9B9B',
    grayLight: '#f8f9fb',
    orange: '#FE7654'
  },
  fonts: {
    // fontSize = 31px in 720
    BigText: '4.3vw',
    // fontSize = 25px in 720
    tittleText: '3.5vw',
    // fontSize = 22px in 720
    mediumText: '3vw',
    // fontSize = 20px in 720
    normalText: '2.7vw',
    // fontSize = 17px in 720,
    lightText: '2.3vw',
    // fontSize = 14px in 720,
    thinText: '2.3vw'
  },
  shadow: {
    cart: '0px 6px 12px rgba(225, 231, 229, 0.7)'
  },
  principalGrid: {
    marginHorizontal: '20px',
    marginVertical: '20px',
    marginTop: '20px'
  },
  device: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  }
}
