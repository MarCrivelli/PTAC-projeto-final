import CadastrarVideos from "../Cadastrar";
import {useState} from "react";
export default function Videos({vid}){
    //const listaVideos = JSON.parse(localStorage.getItem('list')) || [];

    const localStorageLista = JSON.parse(localStorage.getItem("Lista")) || [];
    //useState define um estado para a lista
    const [videos, setVideo] = useState();
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    const salvar = () => {
      alert ("salvar");
  }
  const remover = () => {
      alert ("remover");
  }
    return(
      <div>
        <CadastrarVideos/>  
        <div class="conteinerDeCards">
            <div class="container">
              <div class="card">
                <div class="conteudo">
                  <iframe value={videos} onChange={(e) => setVideo(e.target.value)}></iframe>
                  <h3></h3>
                  <p><i class="bi bi-badge-8k-fill"></i></p>
                </div>
                <button onChange={salvar}><a>Salvar</a></button>
                <button onChange={remover}><a>Remover</a></button>
              </div>    
            </div>
          </div> 
      </div>
        
    );
}