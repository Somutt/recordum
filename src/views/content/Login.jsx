import React, {useEffect}  from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactSession }  from 'react-client-session';

import SideImage from "../../parts/SideImage.jsx";

import Logo from "../../parts/Logo.jsx"
import InputText from "../../parts/InputText.jsx"

import './Login.css';

function Login() {
    useEffect(() => {
        ReactSession.set("id", "0");
    })

    let navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        var email = document.querySelector("#email")
        var password = document.querySelector("#password")

        const response = await fetch("https://recordum-app.herokuapp.com/usuario/login/", {
            "method": "POST",
            "headers": {"Content-Type":"application/json"} ,
            "body":JSON.stringify({
                "username":email.value,
                "password":password.value,
            })
        })
        if (response.ok){
            let responseJson = await response.json()
            ReactSession.set("id", responseJson.user_id);
            navigate('/home') 
        } else {
            var alert = document.querySelector('.alert');
            alert.style.display = "flex";  
        }
    }

    ReactSession.set("id", "0");
    
    return (
        <div className="Login">
        <div className="LoginPage">
            <h1><Logo /></h1>
            <h2>Entre no Recordum ou<br></br> <Link to= "/cadastro">Cadastre-se</Link></h2>
            <div className="LoginMenu">
                <form>
                    <p className="alert">*Email ou senha incorretos</p>
                    <InputText id="email" label="Endereço de email" type="email" length="30" size="60" />
                    <InputText id="password" label="Senha" type="password" length="15" size="60" />
                    <div className="InputsEndLogin">
                        <button onClick={handleClick}>Entrar</button>
                    </div>
                    <p>Problemas para conectar? <Link to="/" >Redefina sua senha</Link></p>
                </form>
            </div>
        </div>
        <SideImage />
    </div>
    )
}

export default Login;