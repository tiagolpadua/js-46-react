import React, { Component } from 'react';
import './navMenu.css';
import { withRouter } from 'react-router';

class NavMenu extends Component {
  fazerLogout = () => {
    localStorage.removeItem('TOKEN');
    this.props.history.push('/');
  };

  render() {
    return (
      <nav className="navMenu">
        <ul className="navMenu__lista">
          <li className="navMenu__item">
            <a className="navMenu__link">
              Bem vindo(a): <br />
              <strong>{this.props.usuario}</strong>
            </a>
          </li>
          <li className="navMenu__item">
            <a className="navMenu__link" href="">
              Página Inicial
            </a>
          </li>
          <li className="navMenu__item">
            <a className="navMenu__link">Hashtags</a>
          </li>
          <li className="navMenu__item">
            <a className="navMenu__link" onClick={this.fazerLogout}>
              Logout
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(NavMenu);
