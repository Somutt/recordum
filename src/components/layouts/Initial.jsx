import React from "react";
import {Routes, Route} from "react-router-dom";

import Login from "../../views/content/Login";
import Home from "../../views/content/Home"
import About from "../../views/content/About"

import "./Initial.css"

const Initial = props => (

        <main className="Initial">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </main>
    )


export default Initial;