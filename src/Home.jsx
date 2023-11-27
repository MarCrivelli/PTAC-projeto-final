import React from "react";
import "../src/CSS/style.css";
import Nav from './Componentes/Nav';
import Videos from './Componentes/ListaDeVideos';
import "../src/menu.js";
export default function Home(){
    return(
        <div>
            <Nav/>
            <Videos/>
        </div>
     );
}

