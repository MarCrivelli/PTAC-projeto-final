import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Nav from './Componentes/Nav';
import "../src/CSS/style.css";
import "../src/menu.js";
export default function CadastrarVideos(){
 
    const localStorageLista = JSON.parse(localStorage.getItem("Lista")) || [];
    //useState define um estado para a lista
    const [videos, setVideo] = useState("")
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")

    return(
         <div>
            <Nav/>
         </div>
    );
}