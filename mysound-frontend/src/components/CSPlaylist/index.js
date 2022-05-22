import axios from "axios";
import "./index.css";
import { useEffect, useState } from "react";
import Playlist from "../Playlist";
import { useNavigate, useLocation } from "react-router-dom";


export default function CSPlaylist(props) {
    const [playlists, setPlaylists] = useState([]);
    const [aparece, setAparece] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
      if (aparece == true ){
        axios
      .get("http://localhost:8000/api/playlists/")
      .then((res) => 
        setPlaylists(res.data));
        setAparece(false);
      }
    });

      const [name, setName] = useState("");
      const [id, setId] = useState("");

    
      const nameModificado = (event) => {
          setName(event.target.value);
      }
    
      const criaPlaylist = (event) => {
        event.preventDefault();
        if (!name){
          setAparece(true);
        }
        else{
        axios
          .post("http://localhost:8000/api/musicas/", { "title": location.state.title, "artista": location.state.artista, "playlist":name, "idp":location.state.idp, "img": location.state.img, "link": location.state.link,"album":location.state.album, "duracao":location.state.duracao })
          .then((res)=>{
            navigate('/PlaylistEspecifica', {state:{name:name, title:location.state.title, artista:location.state.artista, idp:location.state.idp, album:location.state.album, duracao:location.state.duracao, img:location.state.img, link:location.state.link}})
          })
        }
      }
  
  return (
    <>
        <div className='container-play'> 
          <form className="form-playlist" onSubmit={criaPlaylist}>
            <input
              className="form-card-playlist"
              type="text"
              name="name"
              placeholder="Nova playlist"
              onChange={nameModificado}
              value={name}
            />
            <button className="btn" type="submit">Criar</button>
          </form>
        </div>
        <div className="ajeita-form-csd">
          <div className="card3">
            <img src={`${location.state.img}`} className="imagem3" alt="imagem"/>
            <div className='informacoes3'>
              <div className='cardtitle3'>
                <div className='title3'>
                  <h2>{location.state.title}</h2>
                </div>
                <div className='artista_album3'>
                  <h3>{location.state.artista} - {location.state.album}</h3>
              </div>
              </div>
              <div className='durfav3'>
                <div className="ajeitando_duration3" >
                  <div className='duration3' style={{cursor:"pointer"}} onClick={() =>  window.open(location.state.link, "_blank", "noopener noreferrer")} >
                    <i className='fab fa-soundcloud'></i>
                    <i>
                      {((location.state.duracao)/60).toFixed(2).toString().replace(".",":")}
                    </i>
                  </div>
                </div>
              </div>
              </div>
          </div>
          <div className='playlist'>
              {playlists.map((playlist) => (
                  <Playlist key={`playlist__${playlist.playlist}`} name={playlist.playlist} id ={playlist.playlist} title = {location.state.title} artista = {location.state.artista} idp = {location.state.idp} album = {location.state.album} img={location.state.img} link = {location.state.link} duracao = {location.state.duracao}></Playlist>
                ))}
          </div>
        </div>
      </>
  );
}