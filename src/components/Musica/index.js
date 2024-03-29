import * as React from 'react';
import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



export default function Musica(props) {
  
  const navigate = useNavigate();
  
  const location = useLocation();

  const salvaPlaylist = () => {
    navigate('/CSPlaylist', {state:{title:props.title, artista:props.artista, idp:props.idp.toString(), album:props.album, duracao:props.duracao.toString(), img:props.img, link:props.link}});
  }
  const vaiProLink = () => {
    window.open(props.link, "_blank", "noopener noreferrer");
  };
  
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
          <div className="ajeitando_duration" >
            <div className='duration' style={{cursor:"pointer"}} onClick={() => vaiProLink()} >
              <i className='fab fa-soundcloud'></i>
              <i>
              {((props.duracao)/60).toFixed(2).toString().replace(".",":")}
              </i>
            </div>
          </div>
          <button className='fav' style={{cursor:"pointer"}}  onClick={salvaPlaylist}>
            <div>        
              <i className="fas fa-heart"><></></i>             
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

