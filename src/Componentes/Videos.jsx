import CadastrarVideos from "../Cadastrar";
export default function Videos({vid}){
    //const listaVideos = JSON.parse(localStorage.getItem('list')) || [];
    return(
      <div>
        <CadastrarVideos/>
        <div class="conteinerDeCards">
          
            <div class="container">
              <div class="card">
                <div class="conteudo">
                  <img ></img>
                  <h3></h3>
                  <p><i class="bi bi-badge-8k-fill"></i></p>
                </div>
              </div>    
            </div>
        </div>   
      </div>
        
    );
}