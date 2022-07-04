interface ITheme {
  PRIMARY_COLOR: string
  SECONDARY_COLOR: string
  SURFACE_COLOR: string
  BG_LIGHT: string
  BG_DARK: string
  TEXT_LIGHT: string
}

const DefaultTheme: ITheme = {
  PRIMARY_COLOR: '#5fd8c8',
  SECONDARY_COLOR: '#5fd8c8',
  SURFACE_COLOR: '#424242',
  BG_LIGHT: '#f0f6f7',
  BG_DARK: '#1b1b1b',
  TEXT_LIGHT: '#fff',
}

export default DefaultTheme
