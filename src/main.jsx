import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import {Routes, Route, BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
