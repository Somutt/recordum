import React from "react";
import {Routes, Route} from "react-router-dom";

import Login from "../../views/content/Login";
import Home from "../../views/content/Home";
import About from "../../views/content/About";
import Video from "../../views/content/Video";
import Review from "../../views/content/Review";
import Cadastro from "../../views/content/Cadastro";
import Eixo from "../../views/content/Eixo";
import Content from "../../views/content/Content";

import "./Initial.css"


const Initial = props => (

        <main className="Initial">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/video" element={<Video />} />
                <Route path="/review" element={<Review />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/eixos/:eixoId" element={<Eixo/>}/>
                <Route path="/content" element={<Content />} />
            </Routes>
        </main>
    )


export default Initial;