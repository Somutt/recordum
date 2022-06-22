import React from "react";
import { BrowserRouter } from "react-router-dom";

import Initial from "../components/layouts/Initial";

import './App.css';

const App = props => {

    return (
        <div className="App">
            <BrowserRouter>
                <Initial />
            </BrowserRouter>
        </div>
    )

} 

export default App