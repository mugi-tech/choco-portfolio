import { AppProps } from "next/app";
// import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { theme } from "themes";

// グローバルのスタイル
const GlobalStyle = createGlobalStyle`
html,
body,
textarea {
  padding: 0;
  margin: 0;
  background: #16161a;
  font-family: Inter,Helvetica Neue,Arial,Hiragino Kaku Gothic ProN,Hiragino Sans,Meiryo,sans-serif;
}

* {
  box-sizing: border-box;
}

a {
  cursor: pointer;
  text-decoration: none;
  transition: .25s;
  color: #000;
}

ol, ul {
  list-style: none;
}
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
