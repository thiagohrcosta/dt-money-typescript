import { ThemeProvider } from "styled-components"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello</h1>
    </ThemeProvider>
  )
}

export default App
