import React, { Component } from 'react';

class Botao1 extends Component {
    render() {
        return (
            <button class={`btn btn-${this.props.tipo}`}>
                {this.props.texto}
            </button>
        )
    }
}

class Botao2 extends Component {
    render() {
        return (
            <button class={`btn btn-${this.props.tipo}`}>
                {this.props.children}
            </button>
        )
    }
}

export { Botao1, Botao2 };