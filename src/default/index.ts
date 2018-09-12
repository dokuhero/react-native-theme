import { Theme } from '..'
import { color } from './color'
import { fontSize } from './fontSize'
import { mapStyle } from './mapStyles'
import { radius } from './radius'
import { space } from './space'

export const defaultTheme: Theme = {
  id: 'default',
  name: 'Default',
  color,
  space,
  radius,
  fontSize,
  mapStyle
}
