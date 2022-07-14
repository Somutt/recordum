import React, {useEffect}  from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactSession }  from 'react-client-session';

import Menu from "../../components/Header/Menu"
import placeholder from '../../imgs/placeholder.jpg'

import './Eixo.css';
import App from "../App.jsx";

function Login() {
    useEffect(() => {
    })

    let navigate = useNavigate()

    const handleClick = async () => {
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
    
    return (
        <div>
            <Menu />
            <div className="Eixo">
                <h1>BIOLOGIA</h1>
                <div className="EixoDivisao">
                    <div className="Disciplina">
                        <img src={placeholder} alt="Video for keep watching"/>
                        <p>Citologia</p>
                        <div>
                            <p>09 Aulas |</p>
                            <p>1h 10</p>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Login;