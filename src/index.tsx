import * as deepmerge from 'deepmerge'
import * as React from 'react'
import { defaultTheme } from './default'
import { Theme, WithThemeProps } from './types'

/**
 * Create new theme by override default theme values.
 * @param themes themes to be merged
 */
export function createTheme<T>(...themes: Array<Partial<T & Theme>>) {
  let theme: Partial<T & Theme> = {}
  if (themes.length) {
    for (const thm of themes) {
      theme = deepmerge(theme, thm)
      theme.mapStyle = thm.mapStyle
    }
  }

  return deepmerge(defaultTheme as Partial<T & Theme>, theme) as Theme & T
}

const ThemeContext = React.createContext<Theme>({
  ...defaultTheme
})

/**
 * Theme context provider.
 */
export const ThemeProvider = ThemeContext.Provider

/**
 * Theme context consumer.
 */
export const ThemeConsumer: React.ComponentType<React.ConsumerProps<Theme>> =
  ThemeContext.Consumer

/**
 * Theme context consumer HOC.
 * @param Component component to consume theme
 */
export function withTheme<P>(
  Component: React.ComponentType<P & WithThemeProps>
): React.ComponentType<P> {
  return (props: P) => {
    return (
      <ThemeConsumer>
        {theme => <Component {...props} theme={theme} />}
      </ThemeConsumer>
    )
  }
}

/**
 * Theme context consumer class decorator.
 */
export function withThemeClass(): ClassDecorator {
  return (Component: any) => withTheme(Component) as any
}

export {
  Theme,
  ThemeColors,
  ThemeRadius,
  ThemeSpaces,
  FontSizes,
  MapStyleElement,
  WithThemeProps
} from './types'

export { ColorKeys } from './default/color'
export { SpaceKeys } from './default/space'
export { RadiusKeys } from './default/radius'
export { FontSizesKeys } from './default/fontSize'
export { FontNameKeys } from './default/fontName'
export { createStyleSheet, buildStyleSheet } from './styleSheet'
