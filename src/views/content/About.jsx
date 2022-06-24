import React from "react";
import { Link } from "react-router-dom";

import Menu from "../../components/Header/Menu"
import Background from '../../imgs/bg-tela-escura.png';

import './About.css'

const About = props => {
    return (
        <div>
            <Menu/>
            <div className="About" style={{backgroundImage: `url(${Background})`}}>
                <div className="AboutLeft">
                    <h2>Sobre o</h2><h1>Recordum</h1>
                </div>
                <div className="AboutMiddle">
                    <div>
                        <h1>Sobre o Recordum</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h2>
                    </div>
                    <div>
                        <h1>Missão</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h2>
                    </div>
                    <div>
                        <h1>Visão</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h2>
                    </div>
                </div>
                <div className="AboutRight">
                    <div>
                        <Link to="/Home">Voltar</Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About;