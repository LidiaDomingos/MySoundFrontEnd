import Musica from "../Musica";
import Pesquisa from "../Pesquisa";
import ListaPlaylist from "../ListaPlaylist";
import Playlist from "../Playlist";
import PlaylistAleatoria from "../PlaylistAleatoria";
import CSPlaylist from "../CSPlaylist";
import React from 'react';
import { useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import {BrowserRouter as Router , Route, Routes  } from "react-router-dom";
import "./index.css";




export default function Home() {
  const [lista, setLista] = useState([]);
  const [listaP, setListaP] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const retornaLista = (lista) => {
    setLista(lista);
    setListaP([]);
    console.log(lista);
  };

  const retornaListaP = (listaP) => {
    setLista([]);
    setListaP(listaP);
    console.log(listaP);
  };
    
  return (
    <>
    
    <main className = "background">
        <div className="App">
          <div className='header'> 
            <Pesquisa pesquisaLista={retornaLista} > </Pesquisa>
            <ListaPlaylist pesquisaListaP={retornaListaP}> </ListaPlaylist>
          </div>
          <div className='container_main'>
          {lista.map((musica) => (
              <Musica key={`musica__${musica.id}`} title={musica.title} img = {musica.album.cover_medium} duracao = {musica.duration} artista = {musica.artist.name} album = {musica.album.title} link = {musica.link} idp = {musica.id} ></Musica>
            ))}
          <div className='playlist'>
            {listaP.map((playlist) => (
                <div className='formatacao' key={`playlist__${playlist.playlist}`}>
                  <div className='card_playlist'>
                      <button className='cor' style={{cursor:"pointer"}} onClick={() => navigate('/PlaylistEspecifica', {state:{name:playlist.playlist}}) }>
                          <div className='ajeita_p'>
                              <div className='img-p'>
                                <i className="material-icons">
                                    &#xe039;
                                </i>
                              </div>
                              <h4>{(playlist.playlist.replace("_"," ").replace(/(_)+/g, " "))}</h4>
                          </div>
                      </button>
                  </div>
                </div>
              ))}
          </div>
          </div>
        </div>
        </main>
    </>

  );
}


