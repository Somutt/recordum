import React from "react";

import "./Themes.css"

const Themes = props => {

    return (
        <div className="Themes">
            <button style={{ background: props.color}}>{props.nome}</button>
        </div>
    )

}

export default Themes