import React from "react";
import { Link } from "react-router-dom";

import Menu from "../../components/Header/Menu"
import Themes from "../../parts/Themes.jsx"

import './Home.css'

import placeholder from '../../imgs/placeholder.jpg'

/*
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
*/


const Home = props => {


    return (
        <div className="Home">
            <Menu />
            <h2 id="Welcome">Olá, Samuel!</h2>
            <div className="Container">
                <div className="VideosContainer">
                    <h2>Continue assistindo</h2>
                    <div className="KeepWatchingContainer">
                        <img className="Placeholder" src={placeholder} alt="Video for keep watching" width='240' height='140' />
                        <h3>Int. à genética</h3>
                        <h4>Genética | Biologia</h4>
                    </div>
                    <h2 id="ReviewText">Hora da Revisão</h2>
                    <div className="ReviewContainer">
                        <img className="Placeholder" src={placeholder} alt="Video for keep watching" width='120' height='70' />
                        <p>Conteúdo Y</p>
                    </div>
                </div>
                <div className="Thematics">
                    <h2>Eixos Tematicos</h2>
                    <Themes nome="Biologia" color="#ae86d8" />
                    <Themes nome="Química" color="#b0e0e6" />
                    <Themes nome="Física" color="#eee8aa" />
                    <Themes nome="Geografia" color="#afeeaa8" />
                    <Themes nome="Matemática" color="#acaaee" />
                    <Themes nome="História" color="#eaaaee" />
                    <Themes nome="Filosofia e Sociologia" color="#fcbb7b" />
                    <Themes nome="Linguagens" color="#ff9b9b" />
                </div>
            </div>
        </div>
    )

};

export default Home;