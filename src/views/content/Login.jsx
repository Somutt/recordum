import React from "react";
import { Link } from "react-router-dom";

import SideImage from "../../parts/SideImage.jsx";

import Logo from "../../parts/Logo.jsx"
import InputText from "../../parts/InputText.jsx"

import './Login.css';

const Login = props => {
    return (
        <div className="Login">
            <div className="LoginPage">
                <h1><Logo /></h1>
                <h2>Entre no Recordum ou <br></br> <Link to= "/">Cadastre-se</Link></h2>
                <div className="LoginMenu">
                    <InputText label="Endereço de email" type="email" length="30" size="40" />
                    <InputText label="Senha" type="password" length="15" size="40" />
                    <div className="InputsEndLogin">
                        <button><Link to="/home" >Entrar</Link></button>
                    </div>
                    <p>Problemas para conectar? <Link to="/" >Redefina sua senha</Link></p>
                </div>
            </div>
            <SideImage />
        </div>
    )

}

export default Login;