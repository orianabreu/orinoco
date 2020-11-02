import React from 'react';
import {ThemeProvider} from "styled-components";
import theme from './theme';
import GlobalStyle from "./theme/global";
import Main from "./pages/Main";
import Header from "./components/Header";

function App() {
  return (
    <div>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <Header/>
            <Main/>
        </ThemeProvider>
    </div>
  );
}

export default App;
