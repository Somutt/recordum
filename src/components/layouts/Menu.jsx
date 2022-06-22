import React from "react";
import { Link } from "react-router-dom";

import bell from '../../imgs/bell.png';
import reading from '../../imgs/reading.png';

import './Menu.css'

const Menu = props => {

    return (
        <header className="Menu">
            <div className="LeftMenu">
                <a className="Logo"><Link to="/">Recordum</Link></a>
                <input type="text" />
                <a href="#"><Link to="/">Temas</Link></a>
                <a href="#"><Link to="/">Testes</Link></a>
            </div>
            <a className="Premium"><Link to="/">Premium</Link></a>
            <div className="RightMenu">
                <a className="Bell"><Link to="/"><img src={bell} width="45" height="45" /></Link></a>
                <a className="Read"><Link to="/"><img src={reading} width="45" height="45" /></Link></a>
            </div>
        </header>
    )

}

export default Menu;