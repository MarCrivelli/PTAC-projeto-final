import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Videos from './Componentes/Videos';
import VideosEmDestaque from './Componentes/Destaques';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Home" element={<Home />}></Route>
        <Route path="/Videos" element={<Videos />}></Route>
        <Route path="/VideosEmDestaque" element={<VideosEmDestaque />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
