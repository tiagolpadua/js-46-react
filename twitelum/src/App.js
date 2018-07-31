import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho';
import './App.css';
import { Botao1, Botao2 } from './Botao.js';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Cabecalho usuario="@omariosouto" />
        <Botao1 tipo="danger" texto="Texto do Botão1"/>
        <Botao2 tipo="danger">
          Texto do Botão2
        </Botao2>
      </Fragment>
    );
  }
}
export default App;
