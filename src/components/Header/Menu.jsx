import React, {Component, useEffect} from "react";
import { ReactSession }  from 'react-client-session';
import { Link, Navigate } from "react-router-dom";

import bell from '../../imgs/bell.png';
import reading from '../../imgs/reading.png';
import arrowdown from '../../imgs/arrow-down.png';
import creditcard from '../../imgs/credit-card.png';

import './Menu.css'

const expandMenuOnClick = () => {
    var teste = document.querySelector('.ExpandMenu')
    if (teste.style.maxHeight == '0px' || teste.style.maxHeight == '') {
        teste.style.maxHeight = '87.4vh';
    } else {
        teste.style.maxHeight = '0px';
    }
}

const leave = () => {
    ReactSession.set("id", "0");
}

class Menu extends Component{
  
    constructor(props){
      super(props);
      this.state = {
          isLoaded: false,
          infoSchool:[],
          infoPerson:[]
      }
    }
  
    componentDidMount(){
        var id = ReactSession.get("id")
        var url = "https://recordum-app.herokuapp.com/usuario/informacao/" + id
        fetch(url, {
            "method": "GET",
            "headers": {} ,
            })
            .then(res => res.json())
            .then(json => {
            this.setState({
                infoSchool: json
            })
            })
            .catch(err => { console.log(err); 
            });
            url = "https://recordum-app.herokuapp.com/usuario/pessoa/" + id
        fetch(url, {
            "method": "GET",
            "headers": {} ,
            })
            .then(res => res.json())
            .then(json => {
            this.setState({
                isLoaded: true,
                infoPerson: json
            })
            })
            .catch(err => { console.log(err); 
            });       
    }
  
    render() {
  
        var { isLoaded, infoSchool, infoPerson } = this.state;
        var divInfoPerson = <div></div>
        var divInfoSchool = <div></div>

        if (!isLoaded) {
            divInfoPerson = <div className="InfoPerson">
                                <div>
                                    <h1>Primeiro Nome</h1>
                                    <h2>Carregando ...</h2>
                                </div>
                                <div>
                                    <h1>Sobrenome</h1>
                                    <h2>Carregando ...</h2>
                                </div>
                                <div>
                                    <h1>E-mail</h1>
                                    <h2>Carregando ...</h2>
                                </div>
                                <div></div>
                            </div>
            divInfoSchool =<div className="InfoSchool">
                            <div>
                                <h1>Escolaridade</h1>
                                <h2>Carregando ...</h2>
                            </div>
                            <div>
                                <h1>Vestibulares</h1>
                                <h2>Carregando ...</h2>
                            </div>
                            <div>
                                <h1>Curso</h1>
                                <h2>Carregando ...</h2>
                            </div>
                            <div>
                                <h1>Universidade</h1>
                                <h2>Carregando ...</h2>
                            </div>
                        </div> 
        } else {
            divInfoPerson = <div className="InfoPerson">
                                <div>
                                    <h1>Primeiro Nome</h1>
                                    <h2>{infoPerson.first_name}</h2>
                                </div>
                                <div>
                                    <h1>Sobrenome</h1>
                                    <h2>{infoPerson.last_name}</h2>
                                </div>
                                <div>
                                    <h1>E-mail</h1>
                                    <h2>{infoPerson.email}</h2>
                                </div>
                                <div></div>
                            </div>
            divInfoSchool =<div className="InfoSchool">
                            <div>
                                <h1>Escolaridade</h1>
                                <h2>{infoSchool.escolaridade}</h2>
                            </div>
                            <div>
                                <h1>Vestibulares</h1>
                                <h2>{infoSchool.vestibulares}</h2>
                            </div>
                            <div>
                                <h1>Curso</h1>
                                <h2>{infoSchool.curso}</h2>
                            </div>
                            <div>
                                <h1>Universidade</h1>
                                <h2>{infoSchool.universidade}</h2>
                            </div>
                        </div> 
        }

        if (ReactSession.get("id") == 0 || ReactSession.get("id") == undefined){
            return <Navigate to='/'/>
        }

        return (
            <header>
                <div className="Menu">
                    <div className="LeftMenu">
                        <p className="Logo"><Link to="/Home">Reco <br /> rdum </Link></p>
                        <input type="text" />
                        <Link to="#">Temas<img className="ArrowDown" src={arrowdown} width="20" height="20" /></Link>
                        <Link to="#">Testes<img className="ArrowDown" src={arrowdown} width="20" height="20" /></Link>
                    </div>
                    <p className="Premium"><Link to="/">Premium</Link></p>
                    <div className="RightMenu">
                        <p className="Bell"><Link to="/"><img src={bell} width="60" height="60" /></Link></p>
                        <button onClick={expandMenuOnClick} className="Read">
                            <img src={reading} width="60" height="60" />
                            <img className="ArrowDown" src={arrowdown} width="20" height="20" />
                        </button>
                    </div>
                </div>
                <div className="ExpandMenu">
                    <div className="ExpandLeft">
                        <h1>Perfil</h1>
                        <Link to="/About"><h2>Sobre o</h2><h1>Recordum</h1></Link>
                    </div>
                    <div className="ExpandMiddle">
                        {divInfoPerson}
                        {divInfoSchool}
                    </div>
                    <div className="ExpandRight">
                        <div className="CreditCard">
                            <img src={creditcard} width="455" height="395" />
                        </div>
                        <div className="EditProfile">
                            <Link onClick={leave} to="/">Sair</Link>
                            <Link to="#">Editar Perfil</Link>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
  }


export default Menu;

