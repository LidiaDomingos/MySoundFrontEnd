import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import Musica from "../Musica";
import { useLocation, useNavigate} from "react-router-dom";


export default function PlaylistEspecifica() {
  const [aparece, setAparece] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [lista3, setLista3] = useState([]);

  console.log(location.pathname)

  useEffect(() => {
    // if (aparece == true ){
  const nomeP = (location.state.name).replace(/( )+/g, "_");
  console.log(nomeP)
  axios
  .get(`http://localhost:8000/api/playlists/${nomeP}`)
  .then((res) => {
    console.log(location.state.name)
    setLista3(res.data);
    console.log(res.data);
    setAparece(false)}, (error) => {console.log(error)});
    // }
  }, []);

  return (
    <div className='container_main'>
      {lista3.map((musica) => (
          <Musica key={`musica__${musica.id}`} title={musica.title} img = {musica.img} duracao = {musica.duracao} artista = {musica.artista} album = {musica.album} link = {musica.link} idp = {musica.idp}></Musica>
        ))}
      </div>
  );
}