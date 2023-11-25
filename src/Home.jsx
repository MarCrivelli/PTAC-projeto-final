import "../src/CSS/style.css";
import listaVideos from "./Componentes/ListaVideos";
import Nav from './Componentes/Nav';
export default function Home(){
    const listaDeVideos = ['1', '2', '3'];
    return(
        <div>
            <Nav/>
            <listaVideos/>
        </div>
     );
}