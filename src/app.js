import React from 'react'
import { Button } from './components/Button'
import { GlobalStyle } from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { THEME } from './constants/styles'

export const App = () => (
  <ThemeProvider theme={THEME}>
    <GlobalStyle />
    <Button />
  </ThemeProvider>

)
