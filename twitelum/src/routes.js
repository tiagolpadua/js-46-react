import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

// Páginas
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

const Roteamento = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <PrivateRoute path="/" component={Home} exact />
    </Switch>
  );
};

class PrivateRoute extends React.Component {
  render() {
    const Component = this.props.component;
    const props = this.props;
    if (estaAutenticado()) {
      return <Route render={() => <Component {...props} />} />;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

function estaAutenticado() {
  if (localStorage.getItem('TOKEN')) {
    return true;
  } else {
    return false;
  }
}
export default Roteamento;
