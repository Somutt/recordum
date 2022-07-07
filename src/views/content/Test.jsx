import React, { useEffect, useState } from "react";

const Teste = props => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://recordum-app.herokuapp.com/conteudo/eixos/", {
        "method": "GET",
        "headers": {} ,
      })
      .then(res => res.json())
      .then(response => {
        setItems(response);
      })
      .catch(err => { console.log(err); 
      });
  }, [])

      return (
            <div>
                <h1>{items[1].nome}</h1>
            </div>
        )

}

export default Teste;