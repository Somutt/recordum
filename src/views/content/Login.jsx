import React, {Component}  from "react";
import { Link, Navigate } from "react-router-dom";
import { ReactSession }  from 'react-client-session';

import SideImage from "../../parts/SideImage.jsx";

import Logo from "../../parts/Logo.jsx"
import InputText from "../../parts/InputText.jsx"

import './Login.css';
import App from "../App.jsx";

class Login extends Component{  
    constructor(props){
      super(props);
      this.state = {
        items:[]
      }
    }

    componentDidMount(){
        ReactSession.set("id", "0");
    }

    render() {        
        const handlesOnClick = () =>{
            var email = document.querySelector("#email")
            var password = document.querySelector("#password")
            fetch("https://recordum-app.herokuapp.com/usuario/login/", {
                "method": "POST",
                "headers": {"Content-Type":"application/json"} ,
                "body":JSON.stringify({
                    "username":email.value,
                    "password":password.value,
                })
            })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    user: json
                })
            })
            .catch(err => { console.log(err); 
            });
            var { user } = this.state;
            ReactSession.set("id", user.user_id);
            this.render()            
        }

        if (ReactSession.get("id")!=0){
            return (
                <Navigate to='/home'/>
            )
        } else {
            return (
                <div className="Login">
                <div className="LoginPage">
                    <h1><Logo /></h1>
                    <h2>Entre no Recordum ou <br></br> <Link to= "/cadastro">Cadastre-se</Link></h2>
                    <div className="LoginMenu">
                        <InputText id="email" label="Endereço de email" type="email" length="30" size="60" />
                        <InputText id="password" label="Senha" type="password" length="15" size="60" />
                        <div className="InputsEndLogin">
                            <button onClick={handlesOnClick}>Entrar</button>
                        </div>
                        <p>Problemas para conectar? <Link to="/" >Redefina sua senha</Link></p>
                    </div>
                </div>
                <SideImage />
            </div>
            )
        }
    }
  }

export default Login;