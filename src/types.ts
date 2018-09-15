/**
 * Map style elements.
 * @see https://developers.google.com/maps/documentation/ios-sdk/styling#use_a_string_resource
 * @see https://developers.google.com/maps/documentation/android-api/styling
 */
export type MapStyleElement = {
  featureType?: string
  elementType?: string
  stylers: object[]
}

export interface ThemeColors {
  transparent: string
  semiTransparent: string
  primary: string
  secondary: string
  success: string
  warning: string
  danger: string
  white: string
  grey: string
  light: string
  lighter: string
  dark: string
  darker: string
  primaryReverse: string
  secondaryReverse: string
  successReverse: string
  warningReverse: string
  dangerReverse: string
  whiteReverse: string
  greyReverse: string
  lightReverse: string
  lighterReverse: string
  darkReverse: string
  darkerReverse: string
  [extraColor: string]: string
}

export interface ThemeSpaces {
  small: number
  medium: number
  big: number
}

export interface ThemeRadius {
  small: number
  medium: number
  big: number
}

export interface FontSizes {
  small: number
  medium: number
  big: number
}

export interface FontNames {
  regular: string
  semiBold: string
  bold: string
}

export interface Theme {
  /**
   * Theme unique id
   */
  id: string

  /**
   * Theme name
   */
  name: string

  /**
   * Colors
   */
  color: Partial<ThemeColors>

  /**
   * Spaces (for padding, margin, etc)
   */
  space: Partial<ThemeSpaces>

  /**
   * Radius values
   */
  radius: Partial<ThemeRadius>

  /**
   * Font sizes
   */
  fontSize: Partial<FontSizes>

  /**
   * Font names
   */
  fontName: Partial<FontNames>

  /**
   * Generate map with https://mapstyle.withgoogle.com/
   */
  mapStyle: MapStyleElement[]
}

export interface WithThemeProps {
  theme: Theme
}
