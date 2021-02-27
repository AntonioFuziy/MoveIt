import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/globals';
import { ChallengesProvider } from '../contexts/ChallengesContext';

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChallengesProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ChallengesProvider>
    </>
  )
}
