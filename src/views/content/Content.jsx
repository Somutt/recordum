import React from "react";
import { Link } from "react-router-dom";

import Menu from "../../components/Header/Menu";

import backgroundgen from "../../imgs/backgroundgen.png"
import rating from "../../imgs/rating.png"
import quiz from "../../imgs/quiz.png"
import placeholder from "../../imgs/placeholder.jpg"

import "./Content.css"

const Content = props => {

    return (
        <div className="ContentScreen">
            <Menu />
            <div className="ContentHeader"><Link to="/Home">Home</Link> &gt; <Link to="/Home">Biologia</Link> &gt; <span>Genética</span></div>
            <div className="ContentSectionTitle"><span>1. Introdução à Genética</span></div>
            <div className="ContentVideosContainer">
                <div className="VideosContainerLeft">
                    <Link to="/video" ><img src={backgroundgen} alt="thumbnail for genetics introduction" width="120" height="70" /></Link>
                    <span>Introdução à Genética - Conceitos Iniciais</span>
                </div>
                <div className="VideosContainerRight">
                    <span> 05 min | </span>
                    <img src={rating} alt="purple notebook" width="30" height="30" />
                    <img src={quiz} alt="quiz sign" width="30" height="30" />
                </div>
            </div>
            <div className="ContentSectionTitle"><span>2. Genética Mendeliana</span></div>
            <div className="ContentVideosContainer">
                <div className="VideosContainerLeft">
                    <img src={placeholder} alt="thumbnail for genetics introduction" width="120" height="70" />
                    <span>1ª Lei de Mendel</span>
                </div>
                <div className="VideosContainerRight">
                    <span> 05 min | </span>
                    <img src={rating} alt="purple notebook" width="30" height="30" />
                    <img src={quiz} alt="quiz sign" width="30" height="30" />
                </div>
            </div>
            <div className="ContentVideosContainer">
                <div className="VideosContainerLeft">
                    <img src={placeholder} alt="thumbnail for genetics introduction" width="120" height="70" />
                    <span>2ª Lei de Mendel - Lei da Segregação Independente</span>
                </div>
                <div className="VideosContainerRight">
                    <span> 05 min | </span>
                    <img src={rating} alt="purple notebook" width="30" height="30" />
                    <img src={quiz} alt="quiz sign" width="30" height="30" />
                </div>
            </div>
            <div className="ContentSectionTitle"><span>3. Genética Moderna</span></div>
            <div className="ContentVideosContainer">
                <div className="VideosContainerLeft">
                    <img src={placeholder} alt="thumbnail for genetics introduction" width="120" height="70" />
                    <span>Conteúdo Futuro</span>
                </div>
                <div className="VideosContainerRight">
                    <span> 05 min | </span>
                    <img src={rating} alt="purple notebook" width="30" height="30" />
                    <img src={quiz} alt="quiz sign" width="30" height="30" />
                </div>
            </div>
        </div>
    )

} 

export default Content