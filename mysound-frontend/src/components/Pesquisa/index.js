import { useState } from "react";
import axios from "axios";
import "./index.css";


export default function Pesquisa(props) {
  const [titulo, setTitulo] = useState("");

  const tituloModificado = (event) => {
      setTitulo(event.target.value);
  }

  const pesquisaMusica = (event) => {
    event.preventDefault()

    // const axios = require("axios");

    const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: {q: (titulo)},
    headers: {
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': 'd2a67cb7c8mshc67816be1dec0ffp101f6bjsn6de87a7afad3'
    }
    };
    axios.request(options)
      .then((res)=>{
        props.pesquisaLista(res.data.data);
      })
  }

  return (
    <div className="container">
        <form className="form-card" onSubmit={pesquisaMusica}>
            <input
            className="form-card-title"
            type="text"
            name="titulo"
            placeholder="Procure aqui o artista ou a música!"
            onChange={tituloModificado}
            value={titulo}
            />
            <button className="btn" type="submit">
                <img src="pesquisar.png" className="logo_pesquisar" alt="logo_pesquisar"/>
            </button>
        </form>
      </div>
  );
}