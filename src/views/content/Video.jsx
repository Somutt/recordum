import React from "react";
import { Link } from "react-router-dom";

import Menu from "../../components/Header/Menu"

import "./Video.css"

import rating from "../../imgs/rating.png"
import rating2 from "../../imgs/rating2.png"
import erro from "../../imgs/erro.png"
import fastforward from "../../imgs/fast-forward.png"

const Video = props => {
    
    return (
        <div className="Video">
            <Menu />
            <div className="VideoDivs">
                <div className="ContainerVideo">
                    <h2>Introdução à Genética - Conceitos Iniciais</h2>
                    <iframe className="VideoPlayer" src="https://www.youtube.com/embed/RP3_Tp125kI" title="Genética-Conceitos Iniciais" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="ReviewsOptions"> <img src={rating2} alt="review stars" width="80" height="80" /> <img src={erro} alt="warning sign for report" width="30" height="30"/> </div>
                </div>
                <div className="InfoContainer">
                    <h3>Biologia</h3>
                    <div className="InfoContainerTitle"> 
                        <div className="InfoContainerTitleLeft">
                            <img src={fastforward} alt="double arrow sign" width="20" height="20" /> 
                            <span>Genética</span>
                        </div>
                        <Link to="/Review"><img clasName="InfoContainerReview" src={rating} alt="notes for review" width="50" height="50" /> </Link>
                    </div>
                    <p id="Int">1.INTRODUÇÂO À GENÉTICA</p>
                    <p id="Sub" >Introdução à Genética - Conceitos Iniciais</p>
                </div>
            </div>
        </div>
    )

}

export default Video