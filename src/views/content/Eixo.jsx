import React, {useEffect, useState}  from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ReactSession }  from 'react-client-session';

import Menu from "../../components/Header/Menu"
import placeholder from '../../imgs/placeholder.jpg'

import './Eixo.css';

function Eixos() {
    const [searchParams] = useSearchParams()
    let {eixoId} = useParams()
    
    const [eixos,setEixos] = useState([])

    const fetchData = async () =>{ 
        const response = await fetch("https://recordum-app.herokuapp.com/conteudo/disciplinas/" + eixoId, {
            "method": "GET",
            "headers": {} ,
        })
        if (response.ok){
            setEixos( await response.json())     
        }
    }

    useEffect( () => {
        fetchData()
    })
    
    return (
        <div>
            <Menu />
            <div className="Eixo">
                <h1>{searchParams.get("nome")}</h1>
                <div className="EixoDivisao">
                    {eixos.map((eixo) => <Card nome={eixo.nome} thumb={eixo.thumb} />)}
                </div>
            </div>   
        </div>
    )
}

function Card({nome, thumb}) {
    let url =  "https://recordum-app.herokuapp.com"
    return <Link to="/Content">
        <div className="Disciplina">
                <img src={url + thumb} alt="Video for keep watching"/>
                <p>{nome}</p>
                <div>
                    <p>09 Aulas |</p>
                    <p>1h 10</p>
                </div>
            </div>
    </Link>
}

export default Eixos;