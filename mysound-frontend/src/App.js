import Musica from "./components/Musica";
import Pesquisa from "./components/Pesquisa";
import Home from "./components/Home";
import ListaPlaylist from "./components/ListaPlaylist";
import Playlist from "./components/Playlist";
import CSPlaylist from "./components/CSPlaylist";
import React from 'react';
import { useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import "./App.css";
import PlaylistEspecifica from "./components/PlaylistEspecifica";



export default function App() {
  
  return (
    <>
    <Router>  
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/CSPlaylist" element={<CSPlaylist/>}/>
          <Route exact path="/PlaylistEspecifica" element={<PlaylistEspecifica/>}/>
       </Routes>
    </Router>
    </>

  );
}


