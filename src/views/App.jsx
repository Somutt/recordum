import React from "react";

import Initial from "../components/layouts/Initial";
import { ReactSession } from 'react-client-session';

import './App.css';

ReactSession.setStoreType("localStorage");

const App = props => {

    return (
        <div className="App">      
            <Initial />
        </div>
    )

} 

export default App