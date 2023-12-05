export default function Videos({vid}){
    const listaVideos = JSON.parse(localStorage.getItem('list')) || [];
    return(
        <div class="conteinerDeCards">
          <div class="container">
              <div class="card">
                <div class="conteudo">
                  <iframe src="" frameborder="0"></iframe>
                  <h3></h3>
                  <p><i class="bi bi-badge-8k-fill"></i></p>
                </div>
              </div>    
          </div>
        </div>    
    );
}