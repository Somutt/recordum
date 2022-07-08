import React,{Component, useEffect, useState } from "react";


class Teste extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      items:[],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch("https://recordum-app.herokuapp.com/conteudo/eixos/", {
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
    
    if(!isLoaded) {
      return <div>Carregando...</div>
    }

    else {

      return (
        <div>
          <ul>
            {eixos.map(eixo => (
              <li key={eixo.id}>{eixo.id} - {eixo.nome}</li>
            ))}
          </ul>
        </div>
    )
    }
  }
}

export default Teste;

