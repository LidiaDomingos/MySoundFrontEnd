import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import Musica from "../Musica";
import { useLocation, useNavigate} from "react-router-dom";


export default function PlaylistEspecifica(props) {
    const [aparece, setAparece] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const [lista, setLista] = useState([]);

    useEffect(() => {
      if (aparece == true ){
        axios
      .get(`http://localhost:8000/api/playlists/${location.state.id}`)
      .then((res) => 
        setLista(res.data));
        // console.log(res.data));
        setAparece(false);
      }
    });

  return (
    <div className='container_main'>
      {lista.map((musica) => (
          <Musica key={`musica__${musica.id}`} title={musica.title} img = {musica.img} duracao = {musica.duracao} artista = {musica.artista} album = {musica.album} link = {musica.link} idp = {musica.idp}></Musica>
        ))}
      </div>
  );
}