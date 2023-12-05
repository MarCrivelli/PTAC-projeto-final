import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Videos from './Componentes/BaixarVideos';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Videos" element={<Videos />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
