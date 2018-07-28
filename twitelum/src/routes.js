import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Páginas
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
const Roteamento = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
};
export default Roteamento;
