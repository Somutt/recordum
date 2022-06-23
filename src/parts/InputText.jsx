import React from "react";
import { useState } from "react";

import "./InputText.css"

const InputText = props => {

    const [inputtext, setInputText] = useState("");

    return (
        <div className="InputText">
            <label classname="Inputclass" for="inputtext">{props.label}</label><br></br><br></br>
            <input clasName={props.className} id="inputtext" type={props.type} maxLength={props.length} size={props.size}
                value={inputtext} onChange={ e => setInputText(e.target.value) }></input>
        </div>
    )

}

export default InputText;