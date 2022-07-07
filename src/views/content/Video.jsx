import React from "react";
import { Link } from "react-router-dom";

import Menu from "../../components/layouts/Menu";

import "./Video.css"

import placeholder from "../../imgs/placeholder.jpg"
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
                    <img src={placeholder} width="10" height="10" ></img>
                </div>
                <div className="InfoContainer">
                    <h3>Biologia</h3>
                </div>
            </div>
        </div>
    )

}

export default Video