import Musica from "./components/Musica";
import Pesquisa from "./components/Pesquisa";
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";


export default function App() {
  const [lista, setLista] = useState([]);

  // axios
  //   .get("http://localhost:8000/api/musicas/")
  //   .then((res) => console.log(res));

    const retornaLista = (lista) => {
      setLista(lista);
      console.log(lista);
    };
  
  return (
    <main className = "background">
    <div className="App">
      {/* <div className="appbar">
        <div className="centraliza_header">
          <img src="mysound_logo.png" className="logo" alt="logo"/>
          <h1 className="subtitle"></h1>
        </div>
      </div> */}
      
      <Pesquisa pesquisaLista={retornaLista} > </Pesquisa>
      <div className='container_main'>
      {lista.map((musica) => (
          <Musica key={`musica__${musica.id}`} title={musica.title} img = {musica.album.cover_medium} duracao = {musica.duration} artista = {musica.artist.name} album = {musica.album.title}></Musica>
        ))}
      </div>
      {/* <Musica> </Musica> */}
    </div>
    </main>

  );
}


