import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import Musica from "../Musica";
import { useLocation, useNavigate} from "react-router-dom";


export default function PlaylistEspecifica() {
  const navigate = useNavigate();
  const location = useLocation();
  const [lista3, setLista3] = useState([]);

  useEffect(() => {
    // if (aparece == true ){
  const nomeP = (location.state.name).replace(/( )+/g, "_");
  axios
  .get(`http://localhost:8000/api/playlists/${nomeP}`)
  .then((res) => {
    console.log(location.state.name)
    setLista3(res.data);
    console.log(res.data);
  });
    // }
  }, []);

  return (
    <div className='container-main'>
      <div className="header-p">
        <h1> {(location.state.name).replace(/_/gi," ")}</h1>
      </div>
      <div className='centralizando'>
      {lista3.map((musica) => (
          <Musica key={`musica__${musica.id}`} title={musica.title} img = {musica.img} duracao = {musica.duracao} artista = {musica.artista} album = {musica.album} link = {musica.link} idp = {musica.idp}></Musica>
        ))}
        </div>
      </div>
  );
}