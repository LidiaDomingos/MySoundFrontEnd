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
    .post("https://intense-headland-73841.herokuapp.com/api/musicas/", { "title": props.title, "artista": props.artista, "playlist":props.name, "idp":props.idp, "album":props.album,"link":props.link,"duracao":props.duracao,"img":props.img})
    .then((res)=>{
      // navigate('/PlaylistEspecifica', {state:{name:name, id:id}})
      navigate('/PlaylistEspecifica', {state:{name:props.name, id:props.id}});
    })

  };
  
  const pegaPlaylistEspecifica = () => {
    // console.log(props);
    navigate('/PlaylistEspecifica', {state:{name:props.name}});
  };

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
                    <div className="margin-h4">
                    <h4>{(props.name.replace("_"," ").replace(/(_)+/g, " "))}</h4>
                    </div>
                </div>
            </button>
            <button className='fav2' style={{cursor:"pointer"}} onClick={adicionaNaPlaylist}  >
              <div className='fa-2x'><i className="fa">&#xf055;</i></div>
            </button>
        </div>
      </div>
  );
}

