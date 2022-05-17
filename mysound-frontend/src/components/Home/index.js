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
  // axios
  //   .get("http://localhost:8000/api/musicas/")
  //   .then((res) => console.log(res));

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
          {/* <div className="appbar">
            <div className="centraliza_header">
              <img src="mysound_logo.png" className="logo" alt="logo"/>
              <h1 className="subtitle"></h1>
            </div>
          </div> */}
          <div className='header'> 
            <Pesquisa pesquisaLista={retornaLista} > </Pesquisa>
            <ListaPlaylist pesquisaListaP={retornaListaP}> </ListaPlaylist>
            <PlaylistAleatoria></PlaylistAleatoria>
          </div>
          <div className='container_main'>
          {lista.map((musica) => (
              <Musica key={`musica__${musica.id}`} title={musica.title} img = {musica.album.cover_medium} duracao = {musica.duration} artista = {musica.artist.name} album = {musica.album.title} link = {musica.link} idp = {musica.id}></Musica>
            ))}
          <div className='playlist'>
            {listaP.map((playlist) => (
                <Playlist key={`playlist__${playlist.id}`} name={playlist.playlist} id = {playlist.id}></Playlist>
              ))}
          </div>
          </div>
        </div>
        </main>
    </>

  );
}


