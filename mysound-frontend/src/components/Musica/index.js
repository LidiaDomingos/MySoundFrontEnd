import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Musica(props) {
  
  const adicionaPlaylist = () => {
    axios
    .get("http://localhost:8000/api/playlists/")
    .then((res) => console.log(res.data));
    // const options = {
    // method: 'GET',
    // url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    // params: {q: (titulo)},
    // headers: {
    //     'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    //     'X-RapidAPI-Key': 'd2a67cb7c8mshc67816be1dec0ffp101f6bjsn6de87a7afad3'
    // }
    // };
    // axios.request(options)
    //   .then((res)=>{
    //     props.pesquisaLista(res.data.data);
    //   })
  }
  return (
    <div className="card">
      <img src={`${props.img}`} className="imagem" alt="imagem"/>
      <div className='informacoes'>
        <div className='cardtitle'>
          <div className='title'>
            <h2>{props.title}</h2>
          </div>
          <div className='artista_album'>
            <h3>{props.artista} - {props.album}</h3>
        </div>
        </div>
        <div className='durfav'>
          <div className="ajeitando_duration">
            <div className='duration' >
              <i className='fab fa-soundcloud'></i>
              <i>
              {((props.duracao)/60).toFixed(2).toString().replace(".",":")}
              </i>
            </div>
          </div>
          <button className='fav' onClick={adicionaPlaylist}><i className="fas fa-heart"></i></button>
        </div>
      </div>
    </div>
  );
}

