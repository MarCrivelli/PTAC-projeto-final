export default function Nav(){    return(
        <nav class="menuLateral">
          <div class="botaoDeHamburguer">
              <i class="bi bi-list" id="botaoExpandir"></i>
          </div>
            <ul>
              <li class="ItemMenu ativo">
                <a href="http://localhost:5173/#">
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
                    <span class="link bot">Baixar</span>
                </a>
              </li>             
            </ul>
        </nav>
     );
     
}