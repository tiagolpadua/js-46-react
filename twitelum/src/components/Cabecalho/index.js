import React, { Component } from 'react';

class Cabecalho extends Component {
    render() {
        return (
            <header className="cabecalho">
                <div className="cabecalho__container container">
                    <h1 className="cabecalho__logo">
                        <a href="">Twitelum</a>
                    </h1>
                    <nav className="navMenu">
                        <ul className="navMenu__lista">
                            <li className="navMenu__item">
                                <a className="navMenu__link">
                                    Bem vindo(a): <br />
                                    <strong>@fulanodetal</strong>
                                </a>
                            </li>
                            <li className="navMenu__item">
                                <a className="navMenu__link" href="">Página Inicial</a>
                            </li>
                            <li className="navMenu__item">
                                <a className="navMenu__link">Hashtags</a>
                            </li>
                            <li className="navMenu__item">
                                <a className="navMenu__link">Logout</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Cabecalho;