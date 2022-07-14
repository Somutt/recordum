import React from "react";
import { Link } from "react-router-dom";

import Menu from "../../components/Header/Menu"
import Themes from "../../parts/Themes.jsx"

import './Home.css'

import placeholder from '../../imgs/placeholder.jpg'
import backgroundgen from "../../imgs/backgroundgen.png"

const Home = props => {


    return (
        <div className="Home">
            <Menu />
            <h2 id="Welcome">Olá, Samuel!</h2>
            <div className="Container">
                <div className="VideosContainer">
                    <h2>Continue assistindo</h2>
                    <div className="KeepWatchingContainer">
                        <Link to="/Video"><img className="Placeholder" src={backgroundgen} alt="Video for keep watching" width='240' height='140' /></Link>
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