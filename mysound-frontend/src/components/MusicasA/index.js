
import React from 'react';
import { useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";


export default function MusicasA(props) {
  const location = useLocation();
  const [listaB, setListaB] = useState([]);

  const nome4 = location.state.mix
  const nomePla = (`Mix_${(nome4).replace(/( )+/g, "_")}`);
  useEffect(() => {
  axios
  .get(`http://localhost:8000/api/playlists/${nomePla}`)
  .then((res) => {
    setListaB(res.data);
  })}
  , []);
  
  
  
  return (
    <>
    <main className = "background2" >
        <div className = 'mix'>
            <h1 className='mix_fonte'>
            {`Mix ${nome4}`}
            </h1>
        </div>
        <div className='container-main2'>
        {listaB.map((musica) => (
              <div className="card2" key={`musica__${musica.id}`}>
              <img src={`${musica.img}`} className="imagem2" alt="imagem"/>
              <div className='informacoes2'>
                <div className='cardtitle2'>
                  <div className='title2'>
                    <h2>{musica.title}</h2>
                  </div>
                  <div className='artista_album2'>
                    <h3>{musica.artista} - {musica.album}</h3>
                </div>
                </div>
                <div className='durfav2'>
                  <div className="ajeitando_duration2" >
                    <div className='duration2' style={{cursor:"pointer"}} onClick={() =>  window.open(musica.link, "_blank", "noopener noreferrer")}>
                      <i className='fab fa-soundcloud'></i>
                      <i>
                      {((musica.duracao)/60).toFixed(2).toString().replace(".",":")}
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
        </div>
    </main>
    </>

  );
}

