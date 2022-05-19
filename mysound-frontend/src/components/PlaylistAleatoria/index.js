import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { useLocation, useNavigate} from "react-router-dom";

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
    
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
 }



export default function PlaylistAleatoria(props) {
    const [aleatoria,setAleatoria] = useState([]);
    // const [listaA, setListaA] = useState([]);
    // const [listaA1, setListaA1] = useState([]);
    // const [nomePl, setNomePl] = useState('');
    
    const navigate = useNavigate();
  
    const location = useLocation();
    
    function posta(musica, name) {
        axios
       .post("http://localhost:8000/api/musicas/", { "title": musica.title, "artista": musica.artist.name, 
       "playlist":`Mix ${name}`, "idp":musica.id, "img": musica.album.cover_medium, "link": musica.link,
       "album":musica.album.title, "duracao":musica.duration }).then((response)=> {console.log('postei')})
     }

    const pegaPlaylist = (event) => {
        event.preventDefault();
        if (!props.tituloP){
            setAleatoria([]);
        }
        else {
        // const axios = require("axios");
        const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: {q: (props.tituloP)},
        headers: {
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key': 'd2a67cb7c8mshc67816be1dec0ffp101f6bjsn6de87a7afad3'
        }
        };
        axios.request(options)
        .then(async (res)=>{
            console.log(res.data.data);
            const listaA = shuffleArray(res.data.data);
            const listaA1 = listaA.slice(0,10);
            let nomePl = props.tituloP;
            console.log("entrei aqui");
            // navigate('/MusicasA', {state:{aleatoria:res.data.data, mix:props.titulo}});
            console.log(nomePl);
            {listaA1.map((musica) => (
                // console.log(musica);
                // console.log('entroaqui?');
                posta(musica, nomePl)
                ))};
            // navigate('/MusicasA', {state:{aleatoria:listaA1, mix:props.tituloP}});
        })
        
    }
    };

  return (
    <div className='ajeita_botoes'>
        <button  className='botao_aleatorio' onClick={pegaPlaylist}>
            <i className='fas fa-random'></i>
        </button>
    </div>
  );
}
