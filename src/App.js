import React, {useState} from 'react';
import {ThemeProvider} from "styled-components";
import theme from './theme';
import GlobalStyle from "./theme/global";
import Main from "./pages/Main";
import Header from "./components/Header";
import './App.css';

function App() {
    const [formIsOpen, setFormIsOpen] = useState(false);

  return (
      <div>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
          <Header setFormIsOpen={setFormIsOpen}/>
          <Main formIsOpen={formIsOpen} setFormIsOpen={setFormIsOpen}/>
        </ThemeProvider>
      </div>
  );
}

export default App;
