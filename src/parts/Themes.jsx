import React from "react";
import { Link } from "react-router-dom";

import "./Themes.css"

const Themes = props => {

    const color = [
        '#ae86d8',
        "#b0e0e6",
        "#eee8aa",
        "#afeeaa8",
        "#acaaee",
        "#eaaaee",
        "#fcbb7b",
        "#ff9b9b"
     ]
    
    return (
        <div className="Themes">
            <button style={{ background: color[props.color%7]}}><Link to={`/eixos/${props.color}?nome=${props.nome}`}>{props.nome}</Link></button>
        </div>
    )

}

export default Themes