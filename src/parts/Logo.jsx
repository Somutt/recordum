import React from "react";

import logo from "../imgs/logo.png"

import "./Logo.css"

const Logo = props => {
     
    return (
        <div className="Logo">
            <img src={logo} alt="Recordum Logo. It's the name Recordum with a beautiful purple gradient" />
        </div>
    )

}

export default Logo;