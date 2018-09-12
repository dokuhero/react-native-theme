import { ThemeColors } from '../types'

export const color: ThemeColors = {
  transparent: 'transparent',
  semiTransparent: 'rgba(67, 72, 77, 0.8)',
  primary: '#ae3739',
  secondary: '#44d4fc',
  success: '#28a745',
  warning: '#fe5731',
  danger: '#d9473e',
  white: '#ffffff',
  grey: '#6c757d',
  light: '#bbb',
  lighter: '#f8f9fa',
  dark: '#43484d',
  darker: '#242f3e'
}

/**
 * Stylesheet color global variable name
 */
export const ColorKeys = {
  transparent: '$color_transparent' as any,
  semiTransparent: '$color_semiTransparent' as any,
  primary: '$color_primary' as any,
  secondary: '$color_secondary' as any,
  success: '$color_success' as any,
  warning: '$color_warning' as any,
  danger: '$color_danger' as any,
  white: '$color_white' as any,
  grey: '$color_grey' as any,
  light: '$color_light' as any,
  lighter: '$color_lighter' as any,
  dark: '$color_dark' as any,
  darker: '$color_darker' as any
}
