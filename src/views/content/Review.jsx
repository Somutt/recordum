import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "../../components/Header/Menu";

import "./Review.css";

import fastforward from "../../imgs/fast-forward.png";
import rating from "../../imgs/rating.png"
import back from "../../imgs/back.png"
import next from "../../imgs/next.png"
import fullback from "../../imgs/full-back.png"
import fullnext from "../../imgs/full-next.png"
import erro from "../../imgs/erro.png"

const Review = props => {

    const [isActive, setActive] = useState(true);

    const toggleVisibility = () => {
        setActive(!isActive);
        console.log(document.getElementById("content").classList);
    }

    return (
        <div className="Review" >
            <Menu />
            <div className="ReviewDivs">
                <div className="ContainerReview">
                    <h2>#Revisão: Introdução à Genética - Conceitos Iniciais</h2>
                    <div className="ReviewImage" >
                        <div className="popup1" onClick={toggleVisibility} ><button className="ReviewButtons" width="20" height="20"> 1 </button>
                            <div className={isActive ? "hidden" : null} id="contentContainer" > <span id="content">Segundo a Primeira Lei de Mendel <br />- O pai da genética - nossas características vem <br />50% do nosso pai e 50% da nossa mãe como <br /> podemos ver no pequeno Dennis aqui. O Dennis <br /> herdou os cabelos ruivos bagunçados do pai <br /> - Johnny - e os olhos azuis e habilidades vampíricas <br /> da mãe - Mavis - sendo a mistura perfeita dos dois</span></div>
                        </div>
                        <div className="popup2" ><button className="ReviewButtons" width="20" height="20"> 2 </button> </div>
                        <div className="popup3" ><button className="ReviewButtons" width="20" height="20"> 3 </button> </div>
                        <div className="popup4" ><button className="ReviewButtons" width="20" height="20"> 4 </button> </div>
                    </div>
                    <div className="BottomButtons" >
                        <div className="BottomButtonsLeft">
                            <img src={fullback} alt="back arrow" width="40" height="40" />
                            <img src={back} alt="back arrow" width="40" height="40" />
                            <img src={next} alt="back arrow" width="40" height="40" />
                            <img src={fullnext} alt="back arrow" width="40" height="40" />
                        </div>
                        <img  src={erro} alt="warning sign for report" width="25" height="25"/>
                    </div>
                </div>
                <div className="InfoContainer">
                    <h3>Biologia</h3>
                    <div className="InfoContainerTitle"> 
                        <div className="InfoContainerTitleLeft">
                            <img src={fastforward} alt="double arrow sign" width="20" height="20" /> 
                            <span>Genética</span>
                        </div>
                        <img className="InfoContainerReview" src={rating} alt="notes for review" width="50" height="50" />
                    </div>
                    <p id="Int">1.INTRODUÇÂO À GENÉTICA</p>
                    <Link to="/Video"><p id="Sub" >Introdução à Genética - Conceitos Iniciais</p></Link>
                </div>
            </div>
        </div>
    )

} 

export default Review