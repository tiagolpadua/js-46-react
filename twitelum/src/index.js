import React from 'react';
import ReactDOM from 'react-dom';
// CSS Global
import './assets/css/reset.css';
import './assets/css/container.css';
import './assets/css/btn.css';
import './assets/css/icon.css';
import './assets/css/iconHeart.css';
import './assets/css/novoTweet.css';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Roteamento
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Roteamento from './routes.js';
ReactDOM.render(
  <BrowserRouter>
    <Roteamento />
  </BrowserRouter>,

  // <HashRouter>
  // <Roteamento />
  // </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
