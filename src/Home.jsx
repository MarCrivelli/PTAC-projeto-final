import React from "react";
import "../src/CSS/style.css";
import "./menu.js";
import Nav from './Componentes/Nav';
import Videos from './Componentes/Videos.jsx';
import "/src/Cadastrar.jsx";
export default function Home(){
    return(
        <div>
            <h1 className="nomeLogo">Arcanit</h1>
            <Nav/>
            <Videos/>
        </div>
     );
}

