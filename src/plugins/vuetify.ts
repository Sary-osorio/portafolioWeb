/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const themefirst = {
  dark: false,
  colors: {
    primary: '#001327',
    secondary: '#D68800',
    secondary2: '#FFB433',
    success: '#47d13c',
    info: '#2cecff',
    error: '#cd0404',
    white: '#ffffff',
    gray: '#ffffff26'
  },
  
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'themefirst',
    themes: {
      themefirst,
    }
  },
})
