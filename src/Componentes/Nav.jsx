import { Link } from "react-router-dom";
export default function Nav(){    return(
        <nav class="menuLateral">
          <div class="botaoDeHamburguer">
              <i class="bi bi-list" id="botaoExpandir"></i>
          </div>
            <ul>
              <li class="ItemMenu ativo">
                <Link to="i">
                    <span class="icone"><i class="bi bi-house"></i></span>
                    <span class="link">Início</span>
                </Link>
              </li>
              <li class="ItemMenu">
                <Link to="#">
                    <span class="icone"><i class="bi bi-graph-up-arrow"></i></span>
                    <span class="link">Destaques</span>
                </Link>
              </li>
              <li class="ItemMenu">
                <Link to="#">
                    <span class="icone"><i class="bi bi-download"></i></span>
                    <span class="link bot">Baixar</span>
                </Link>
              </li>             
            </ul>
        </nav>
     );
     
}