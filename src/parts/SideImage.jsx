import React from "react";

import "./SideImage.css"

import logo from "../imgs/bgbio.png"

const SideImage = props => {

    return (
        <div className="SideImage">
            <img src={logo} />
        </div>
    )

}

export default SideImage;