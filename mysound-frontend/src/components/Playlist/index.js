import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { findByLabelText } from "@testing-library/react";


export default function Playlist(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const adicionaNaPlaylist = () => {
    axios
    .post("http://localhost:8000/api/musicas/", { "title": props.title, "artista": props.artista, "playlist":props.name, "idp":props.idp, "album":props.album,"link":props.link,"duracao":props.duracao,"img":props.img})
    .then((res)=>{
      // navigate('/PlaylistEspecifica', {state:{name:name, id:id}})
      navigate('/PlaylistEspecifica', {state:{name:props.name, id:props.id}});
    })

  };
  
  const pegaPlaylistEspecifica = () => {
    // console.log(props);
    axios
    .get(`http://localhost:8000/api/playlists/${props.name}`)
    .then((res) => {
    navigate('/PlaylistEspecifica', {state:{name:props.name}});
  })};

  return (
      <div className='formatacao'>
        <div className='card_playlist'>
            <button className='cor' style={{cursor:"pointer"}} onClick={pegaPlaylistEspecifica}>
                <div className='ajeita_p'>
                    <div className='img-p'>
                      <i className="material-icons">
                          &#xe039;
                      </i>
                    </div>
                    <h1>{props.name}</h1>
                </div>
            </button>
            <button className='fav2' style={{cursor:"pointer"}} onClick={adicionaNaPlaylist}  >
              <i className="fa">&#xf055;</i>
            </button>
        </div>
      </div>
  );
}

