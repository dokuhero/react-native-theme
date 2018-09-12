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
  white: string
  darker: string
  dark: string
  lighter: string
  danger: string
  warning: string
  grey: string
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
   * Generate map with https://mapstyle.withgoogle.com/
   */
  mapStyle: MapStyleElement[]
}

export interface WithThemeProps {
  theme: Theme
}
