import React from "react";
import { Link } from "react-router-dom";

import Menu from "../../components/layouts/Menu"

import './Home.css'

import placeholder from '../../imgs/placeholder.jpg'

const Home = props => {


    return (
        <div className="Container">
            <div className="Home">
                <div className="Title">
                    <h3>Olá, Samuel! </h3>
                </div>
                    <div className="Watch">
                        <h3>Continue assistindo</h3>
                        <div className="KeepContainer">
                            <a><img className="Placeholder" src={placeholder} alt="Video for keep watching" width='240' height='140' /></a>
                            <h2>Int. à genética</h2>
                            <h4>Genética | Biologia</h4>
                        </div>
                    </div>
                    <div className="Review">
                        <h5>Hora da Revisão</h5>
                        <div className="ReviewContainer">
                            <p>Em Breve</p>
                        </div>
                    </div>
            </div>
                <div className="Tematics">
                    <h3>Eixos Temáticos</h3>
                    <div className="Themes">
                        <h4 className="Biologia"><a><Link to="/">Biologia</Link></a></h4>
                        <h4 className="Quimica">Química</h4>
                        <h4 className="Fisica">Física</h4>
                        <h4 className="Geografia">Geografia</h4>
                        <h4 className="Matematica">Matemática</h4>
                        <h4 className="Historia">História</h4>
                        <h4 className="Filosofia">Filosofia e Sociologia</h4>
                        <h4 className="Linguagens">Linguagens</h4>
                    </div>
                </div>
        </div>
    )

};

export default Home;