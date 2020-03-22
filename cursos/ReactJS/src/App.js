import React from 'react';
import Routes from './routes'

import "./styles.css";

import Header from './components/Header';
import Main from './pages/main'

const App = () => (
  <div className="App">
    <Header />
    {/*
      Antes de adicionarmos as rotas, estavamos exibindo a página main assim
     <Main /> 
    */}
    <Routes />
  </div>
);

export default App;
