import React from "react";
import {Routes, Route} from "react-router-dom";

import Login from "../../views/content/Login";
import Home from "../../views/content/Home";
import About from "../../views/content/About";
import Video from "../../views/content/Video";
import Review from "../../views/content/Review";

import "./Initial.css"


const Initial = props => (

        <main className="Initial">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/video" element={<Video />} />
                <Route path="/review" element={<Review />} />
            </Routes>
        </main>
    )


export default Initial;