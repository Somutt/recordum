import React from "react";
import { Link } from "react-router-dom";

import bell from '../../imgs/bell.png';
import reading from '../../imgs/reading.png';
import arrowdown from '../../imgs/arrow-down.png';
import creditcard from '../../imgs/credit-card.png';

import './Menu.css'

const expandMenuOnClick = () => {
    var teste = document.querySelector('.ExpandMenu')
    if (teste.style.maxHeight == '0px') {
        teste.style.maxHeight = '87.4vh';
    } else {
        teste.style.maxHeight = '0px';
    }
}

const Menu = props => {
    return (
        <header>
            <div className="Menu">
                <div className="LeftMenu">
                    <a className="Logo"><Link to="/">Reco</Link></a>
                    <input type="text" />
                    <a href="#"><Link to="#">Temas</Link><img className="ArrowDown" src={arrowdown} width="25" height="25" /></a>
                    <a href="#"><Link to="#">Testes</Link><img className="ArrowDown" src={arrowdown} width="25" height="25" /></a>
                </div>
                <a className="Premium"><Link to="/">Premium</Link></a>
                <div className="RightMenu">
                    <a className="Bell"><Link to="/"><img src={bell} width="65" height="65" /></Link></a>
                    <button onClick={expandMenuOnClick} className="Read">
                        <img src={reading} width="65" height="65" />
                        <img className="ArrowDown" src={arrowdown} width="25" height="25" />
                    </button>
                </div>
            </div>
            <div className="ExpandMenu">
                <div className="ExpandLeft">
                    <h1>Perfil</h1>
                    <a href="#"><Link to="#"><h2>Sobre o</h2><h1>Recordum</h1></Link></a>
                </div>
                <div className="ExpandMiddle">
                    <div className="InfoPerson">
                        <div>
                            <h1>Primeiro Nome</h1>
                            <h2>Samuel</h2>
                        </div>
                        <div>
                            <h1>Sobrenome</h1>
                            <h2>Moura</h2>
                        </div>
                        <div>
                            <h1>E-mail</h1>
                            <h2>samuel@mail.com</h2>
                        </div>
                        <div></div>
                    </div>
                    <div className="InfoSchool">
                        <div>
                            <h1>Escolaridade</h1>
                            <h2>Pré-Universitário</h2>
                        </div>
                        <div>
                            <h1>Vestibulares</h1>
                            <h2>Enem</h2>
                        </div>
                        <div>
                            <h1>Curso</h1>
                            <h2>Sistemas e Midias Digitais</h2>
                        </div>
                        <div>
                            <h1>Universidade</h1>
                            <h2>Universidade Federal do Ceará</h2>
                        </div>
                    </div>
                </div>
                <div className="ExpandRight">
                    <div className="CreditCard">
                        <img src={creditcard} width="455" height="395" />
                    </div>
                    <div className="EditProfile">
                        <Link to="#">Resetar Senha</Link>
                        <Link to="#">Editar Perfil</Link>
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Menu;

