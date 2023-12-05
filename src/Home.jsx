import React from "react";
import "../src/CSS/style.css";
import Nav from './Componentes/Nav';
import Videos from './Componentes/BaixarVideos';
import "../src/menu.js";
export default function Home(){
    return(
        <div>
            <h1 className="nomeLogo">Arcanit</h1>
            <Nav/>
            <Videos/>
        </div>
     );
}

