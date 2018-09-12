# React Native Theme

Theme and stylesheet manager for ReactNative.

## Installation

Using npm:

```
npm i -S @dokuhero/react-native-theme
```

or yarn:

```
yarn add @dokuhero/react-native-theme
```

## Usage

### Create your themes

You'll use `createTheme` function to create new theme. Call this function without any parameter will produce default theme values.

```typescript
import { createTheme } from '@dokuhero/react-native-theme'

export const dark = createTheme({
  id: 'dark',
  name: 'dark',
  color: {
    primary: '#3878c7',
    secondary: '#44d4fc'
  }
  // just follow intellisense to override default theme values...
  // you may also create new key value here.
})
```

You may also override your existing theme as if needed

```typescript
import { createTheme } from '@dokuhero/react-native-theme'

export const dark = createTheme(light, {
  id: 'light',
  name: 'light',
  color: {
    primary: '#ffff'
  }
  // ....
}
```

### Theme Provider

Put `ThemeProvider` (a React context provider for theme) on your top View of application.

```typescript
import { Theme, ThemeProvider } from '@dokuhero/react-native-theme'

export class MainScreen extends React.Component<Partial<StateProps>> {
  render() {
    return (
      <ThemeProvider value={light}>
        <View style={{ flex: 1 }}>{/* rest of code.. */}</View>
      </ThemeProvider>
    )
  }
}
```

### Theme Consumer

To consume theme, you can use `ThemeConsumer` (a React context consumer), or use `withTheme` HOC function or also `withThemeClass` class decorator.

#### ThemeConsumer

```jsx
const TheComponent: React.SFC = (({children})) => (
  <ThemeConsumer>
    {({ color, space, radius }) => (
      <View style={{
          backgroundColor: color.dark,
          padding: space.medium,
          borderRadius: radius.small
        }}>
        {children}
      </View>
    )}
  </ThemeConsumer>
)
```

#### withTheme HOC

```jsx
interface TheComponentProps {
  children?: React.ReactNode
}

const TheComponent: withTheme<TheComponentProps>(({children, color, space, radius}) => (
  <View style={{
      backgroundColor: color.dark,
      padding: space.medium,
      borderRadius: radius.small
    }}>
    {children}
  </View>
))
```

#### withThemeClass class decorator

```jsx
import { withThemeClass, WithThemeProps } from '@dokuhero/react-native-theme'

interface TheComponentProps extends WithThemeProps {
  children?: React.ReactNode;
}

@withThemeClass()
export class TheComponent extends React.Component<TheComponentProps> {
  render() {
    const {
      theme: { children, color, space, radius }
    } = this.props

    return (
      <View
        style={{
          backgroundColor: color.dark,
          padding: space.medium,
          borderRadius: radius.small
        }}
      >
        {children}
      </View>
    )
  }
}
```

### Themed Stylesheet

We are using [react-native-extended-stylesheet](https://github.com/vitalets/react-native-extended-stylesheet) to build our Stylesheet module.

#### createStyleSheet

This is to define your style sheet.

```typescript
// styles.ts

import {
  ColorKeys,
  createStyleSheet,
  RadiusKeys,
  SpaceKeys
} from '@dokuhero/react-native-theme'

export const styles = createStyleSheet({
  container: {
    flex: 1
  },
  form: {
    backgroundColor: ColorKeys.primary,
    paddingBottom: SpaceKeys.medium,
    borderRadius: RadiusKeys.small,
    alignContent: 'center'
  },
  formContainer: { width: '100%', padding: SpaceKeys.medium }
})
```

Using it as usually

```jsx
import { styles } from './styles'

export class MyForm extends React.Component {
  render() {
    const { children } = this.props
    return <View style={styles.form}>{children}</View>
  }
}
```

#### buildStyleSheet

To make it work, you need to call this function in the very beginning of your app.

```typescript
buildStyleSheet(light)
```

And you may call this function again to change theme.

## License

MIT
