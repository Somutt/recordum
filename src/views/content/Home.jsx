import React, {Component} from "react";
import { Link } from "react-router-dom";

import Menu from "../../components/Header/Menu"
import Themes from "../../parts/Themes.jsx"

import './Home.css'

import placeholder from '../../imgs/placeholder.jpg'
import backgroundgen from "../../imgs/backgroundgen.png"

class Home extends Component{
  
    constructor(props){
      super(props);
      this.state = {
        items:[],
        isLoaded: false,
      }
    }
  
    componentDidMount(){
        var url = "https://recordum-app.herokuapp.com/conteudo/eixos/"
        fetch(url, {
            "method": "GET",
            "headers": {} ,
            })
            .then(res => res.json())
            .then(json => {
            this.setState({
                isLoaded: true,
                eixos: json 
            })
            })
            .catch(err => { console.log(err); 
            });
    }
  
    render() {
  
        var { isLoaded, eixos } = this.state;
        var eixosView = <div></div>

        if(!isLoaded) {
            eixosView = <Themes nome="Carregando..." color="0" />
        } else {
            eixosView = eixos.map(eixo => (
                            <Themes key={eixo.id} nome={eixo.nome} color={eixo.id} />
                        ))   
        }

        return (
            <div className="Home">
                <Menu />
                <h2 id="Welcome">Olá, Samuel!</h2>
                <div className="Container">
                    <div className="VideosContainer">
                        <h2>Continue assistindo</h2>
                        <div className="KeepWatchingContainer">
                            <Link to="/Video" ><img className="Placeholder" src={backgroundgen} alt="Video for keep watching" width='240' height='140' /></Link>
                            <h3>Int. à genética</h3>
                            <h4>Genética | Biologia</h4>
                        </div>
                        <h2 id="ReviewText">Hora da Revisão</h2>
                        <div className="ReviewContainer">
                            <img className="Placeholder" src={placeholder} alt="Video for keep watching" width='120' height='70' />
                            <p>Conteúdo Y</p>
                        </div>
                    </div>
                    <div className="Thematics">
                        <h2>Eixos Tematicos</h2>
                        {eixosView}
                    </div>
                </div>
            </div>
        )
    }
  }


export default Home;