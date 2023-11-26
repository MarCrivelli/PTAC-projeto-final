export default function Nav(){

    return(
        <nav class="MenuLateral">
            <ul>
              <li class="ItemMenu">
                <a href="#">
                    <span class="icone"><i class="bi bi-house"></i></span>
                    <span class="link">Início</span>
                </a>
              </li>
              <li class="ItemMenu">
                <a href="#">
                    <span class="icone"><i class="bi bi-graph-up-arrow"></i></span>
                    <span class="link">Destaques</span>
                </a>
              </li>
              <li class="ItemMenu">
                <a href="#">
                    <span class="icone"><i class="bi bi-download"></i></span>
                    <span class="link">Enviar Vídeo</span>
                </a>
              </li>             
            </ul>
        </nav>
     );
     
}