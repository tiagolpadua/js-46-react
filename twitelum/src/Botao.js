import React, { Component } from 'react';

class Botao1 extends Component {
    render() {
        return (
            <button style={{color: this.props.cor}}>
                {this.props.texto}
            </button>
        )
    }
}

class Botao2 extends Component {
    render() {
        return (
            <button style={{color: this.props.cor}}>
                {this.props.children}
            </button>
        )
    }
}

export { Botao1, Botao2 };