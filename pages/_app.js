import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;



export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalStyle />
    </React.StrictMode>
  );
}
