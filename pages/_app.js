import React from "react";
import GlobalStyle from "../src/components/GlobalStyle";


export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
      <GlobalStyle />
    </React.StrictMode>
  );
}
