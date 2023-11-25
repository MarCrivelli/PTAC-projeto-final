import React from "react";
import "../src/CSS/style.css";
import listaVideos from "./Componentes/Videos";
import Nav from './Componentes/Nav';
export default function Home(){
    const lista = ['1', '2', '3'];
    return(
        <div>
            <Nav/>
            <listaVideos/>
        </div>
     );
}