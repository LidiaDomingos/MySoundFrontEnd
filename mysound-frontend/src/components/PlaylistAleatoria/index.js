import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";


export default function PlaylistAleatoria(props) {
  
  const pegaPlaylist = () => {
    axios
    .get("http://localhost:8000/api/playlists/")
    .then((res) =>  {       
        props.pesquisaListaP(res.data)
    });
    ;
    
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
    <div className='ajeita_botoes'>
        <button  className='botao_lista' onClick={pegaPlaylist}>
            <i className='fas fa-list-ul'></i>
        </button>
    </div>
  );
}
