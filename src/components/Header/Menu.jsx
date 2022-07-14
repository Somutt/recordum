import React from "react";
import { Link } from "react-router-dom";

import bell from '../../imgs/bell.png';
import reading from '../../imgs/reading.png';
import arrowdown from '../../imgs/arrow-down.png';
import creditcard from '../../imgs/credit-card.png';

import './Menu.css'

const expandMenuOnClick = () => {
    var teste = document.querySelector('.ExpandMenu')
    if (teste.style.maxHeight == '0px' || teste.style.maxHeight == '') {
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
                    <p className="Logo"><Link to="/Home">Reco</Link></p>
                    <input type="text" />
                    <Link to="#">Temas<img className="ArrowDown" src={arrowdown} width="20" height="20" /></Link>
                    <Link to="#">Testes<img className="ArrowDown" src={arrowdown} width="20" height="20" /></Link>
                </div>
                <p className="Premium"><Link to="/">Premium</Link></p>
                <div className="RightMenu">
                    <p className="Bell"><Link to="/"><img className="Bell" src={bell} width="55" height="55" /></Link></p>
                    <button onClick={expandMenuOnClick} className="Read">
                        <img src={reading} width="55" height="55" />
                        <img className="ArrowDown" src={arrowdown} width="20" height="20" />
                    </button>
                </div>
            </div>
            <div className="ExpandMenu">
                <div className="ExpandLeft">
                    <h1>Perfil</h1>
                    <Link to="/About"><h2>Sobre o</h2><h1>Recordum</h1></Link>
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

