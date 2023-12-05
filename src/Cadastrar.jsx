import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Nav from './Componentes/Nav';
export default function CadastrarVideos(){
 
    const localStorageLista = JSON.parse(localStorage.getItem("Lista")) || [];

    return(
        <div class="conteinerDeCards">
          <Nav/>
          {listaVideos.map((videoURL, index) =>(
            <div class="container">
              <div class="card">
                <div class="conteudo">
                  <iframe 
                    src={videoURL} 
                    frameborder="0">
                  </iframe>
                  <h3>{titulo}</h3>
                  <p>{descricao}<i class="bi bi-badge-8k-fill"></i></p>
                </div>
              </div>    
            </div>
          ))} 
        </div>    
    );
}