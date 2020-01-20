import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/GlobalStyle';


function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  )
}

export default App;
