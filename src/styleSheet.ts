import { StyleSheet } from 'react-native'
// @ts-ignore
import EStyleSheet from 'react-native-extended-stylesheet'
import { ColorKeys } from './default/color'
import { FontSizesKeys } from './default/fontSize'
import { RadiusKeys } from './default/radius'
import { SpaceKeys } from './default/space'
import { Theme } from './types'

/**
 * This function is to build all global theme variables.
 * Call this function on the very beginning of code and on
 * event/hook when theme get changed.
 * @param theme Theme
 */
export function buildStyleSheet({ id, color, space, radius, fontSize }: Theme) {
  EStyleSheet.build({
    $theme: id,
    [ColorKeys.transparent]: color.transparent,
    [ColorKeys.semiTransparent]: color.semiTransparent,
    [ColorKeys.primary]: color.primary,
    [ColorKeys.secondary]: color.secondary,
    [ColorKeys.success]: color.success,
    [ColorKeys.warning]: color.warning,
    [ColorKeys.danger]: color.danger,
    [ColorKeys.white]: color.white,
    [ColorKeys.grey]: color.grey,
    [ColorKeys.light]: color.light,
    [ColorKeys.lighter]: color.lighter,
    [ColorKeys.dark]: color.dark,
    [ColorKeys.darker]: color.darker,
    [SpaceKeys.big]: space.big,
    [SpaceKeys.medium]: space.medium,
    [SpaceKeys.small]: space.small,
    [RadiusKeys.big]: radius.big,
    [RadiusKeys.medium]: radius.medium,
    [RadiusKeys.small]: radius.small,
    [FontSizesKeys.small]: fontSize.small,
    [FontSizesKeys.medium]: fontSize.medium,
    [FontSizesKeys.big]: fontSize.big
  })
}

type RegisteredStyle<T> = number & { __registeredStyleBrand: T }

/**
 * Create styles based on active theme.
 * You can use either ColorKeys, SpaceKeys, FontSizesKeys or RadiusKeys to get theme values.
 * @param styles styles to create
 */
export function createStyleSheet<T extends StyleSheet.NamedStyles<T>>(
  styles: T
): { [P in keyof T]: RegisteredStyle<T[P]> } {
  return EStyleSheet.create(styles)
}
