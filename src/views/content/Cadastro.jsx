import React from "react";
import { Link, useNavigate } from "react-router-dom";

import SideImage from "../../parts/SideImage.jsx";

import Logo from "../../parts/Logo.jsx"
import InputText from "../../parts/InputText.jsx"

import './Cadastro.css';

function Cadastro() {
    let navigate = useNavigate();
    const handleClick = () => {
        var teste = document.querySelector('.Inicial')
        var teste2 = document.querySelector('.Complemento')
        var alert = document.querySelector('.alert')
        var email = document.querySelector('#email')
        var first = document.querySelector('#first')
        var last = document.querySelector('#last')
        var password = document.querySelector('#password')
        var estou = document.querySelector('#estou')
        var curso = document.querySelector('#curso')
        var universidade = document.querySelector('#universidade')
        var vestibulares = document.querySelector('#vestibulares')
        
        if( email.value.trim().length != 0 && password.value.trim().length != 0
        && first.value.trim().length != 0 && last.value.trim().length != 0){
            teste.style.display = 'none';
            teste2.style.display = 'flex';
            alert.style.display = 'none';
        } else {
            alert.style.display = 'flex';
            alert.textContent = "*" + "Preencha todos os campos"
        }

    };

    const handleCadastro = async () => {
        var teste = document.querySelector('.Inicial')
        var teste2 = document.querySelector('.Complemento')
        var alert = document.querySelector('.alert2')
        var alerttext = document.querySelector('.alert')
        var email = document.querySelector('#email')
        var first = document.querySelector('#first')
        var last = document.querySelector('#last')
        var password = document.querySelector('#password')
        var estou = document.querySelector('#estou')
        var curso = document.querySelector('#curso')
        var universidade = document.querySelector('#universidade')
        var vestibulares = document.querySelector('#vestibulares')

        if( estou.value.trim().length != 0 && curso.value.trim().length != 0
        && universidade.value.trim().length != 0 && vestibulares.value.trim().length != 0){
            const response = await fetch("https://recordum-app.herokuapp.com/usuario/cadastro/", {
                "method": "POST",
                "headers": {"Content-Type":"application/json"} ,
                "body":JSON.stringify({
                    "username":email.value,
                    "first_name":first.value,
                    "last_name":last.value,
                    "email":email.value,
                    "senha":password.value,
                    "escolaridade":estou.value,
                    "vestibulares":vestibulares.value,
                    "curso":curso.value,
                    "universidade":universidade.value
                }),
            })        

            if (response.ok){
                navigate("/")
            } else {
                teste.style.display = 'flex';
                teste2.style.display = 'none';
                alert.style.display = 'none';
                alerttext.textContent = "*Usuário já existente";
                alerttext.style.display = "flex";
            }
        } else {
            alert.style.display = 'flex';
        }
    };

    return (
        <div className="Cadastro">
            <div className="CadastroPage">
                <h1><Logo /></h1>
                <h2>Inscreva-se para o Recordum</h2>
                <div className="CadastroForm">
                    <div className="CadastroMenu Inicial">
                        <p className="alert">*Preencha todos os campos</p>
                        <InputText id="email" label="Endereço de email" type="email" length="30" size="60" />
                        <div className="CadastroName">
                            <InputText id="first" label="Primeiro nome" type="text" length="20" size="25" />
                            <InputText id="last" label="Segundo nome" type="text" length="20" size="25" />    
                        </div>
                        <InputText id="password" label="Senha" type="password" length="15" size="60" />
                        <div className="InputsEndCadastro">
                            <p>Já é cadastrado? <Link to="/" >Entre na sua conta</Link></p>
                            <button onClick={handleClick}>Prosseguir</button>
                        </div>
                    </div>
                    <div className="CadastroMenu Complemento">
                        <p className="alert2 alert">*Preencha todos os campos</p>
                        <InputText id="estou" label="Estou" type="text" length="30" size="60" />
                        <div className="CadastroName">
                            <InputText id="curso" label="Curso" type="text" length="50" size="25" />
                            <InputText id="universidade" label="Universidade" type="text" length="50" size="25" />    
                        </div>
                        <InputText id="vestibulares" label="Vestibulares" type="text" length="15" size="60" />
                        <div className="InputsEndCadastro">
                            <p>Já é cadastrado? <Link to="/">Entre na sua conta</Link></p>
                            <button onClick={handleCadastro}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
                
            <SideImage />
        </div>
    )
}

export default Cadastro;