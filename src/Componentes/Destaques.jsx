import React from "react";
import "../src/CSS/style.css";
import "../src/menu.js";

export default function VideosEmDestaque({vid}){
    const listaVideos = JSON.parse(localStorage.getItem('lista')) || [];
    return(
        <div class="conteinerDeCards">
          {listaVideos.map(vid =>(
            <div class="container">
              <div class="card">
                <div class="conteudo">
                  <iframe src="" frameborder="0"></iframe>
                  <h3></h3>
                  <p><i class="bi bi-badge-8k-fill"></i></p>
                </div>
              </div>    
            </div>
          ))}  
          
        </div>    
    );
}