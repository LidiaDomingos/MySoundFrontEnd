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


export default function MusicasA(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [listaB, setListaB] = useState([]);

  // listaA1.map((musica) => {
  //   posta(musica, location.state.mix);
  //   console.log("POSTEEEIIIIIIIII");
  // });
  // setListaA1(listaA.slice(0,10));
  const nomePla = (location.state.mix).replace(/( )+/g, "_");
  useEffect(() => {
    axios
    .get(`http://localhost:8000/api/playlists/Mix_${nomePla}`)
    .then((res) => {
      console.log(res);
      setListaB(res.data);
      console.log(listaB);
  }, [])
});
  // axios
  //   .get("http://localhost:8000/api/musicas/")
  //   .then((res) => console.log(res));

   
  return (
    <>
    <main className = "background">
        <div className = 'mix'>
            <h3 className='mix_fonte'>
            {`Mix ${location.state.mix}`}
            </h3>
        </div>
        <div className='container_main'>
        {listaB.map((musica) => (
              <Musica key={`musica__${musica.id}`} title={musica.title} img = {musica.album.cover_medium} duracao = {musica.duration} artista = {musica.artist.name} album = {musica.album.title} link = {musica.link} idp = {musica.id}></Musica>
            ))}
        </div>
    </main>
    </>

  );
}

