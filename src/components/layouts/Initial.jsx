import React from "react";
import {Routes, Route} from "react-router-dom";

import Login from "../../views/content/Login";
import Home from "../../views/content/Home"

import "./Initial.css"

const Initial = props => (

        <main className="Initial">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </main>
    )


export default Initial;