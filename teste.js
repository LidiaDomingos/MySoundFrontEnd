const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
  params: {q: 'NCT DREAM'},
  headers: {
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': 'd2a67cb7c8mshc67816be1dec0ffp101f6bjsn6de87a7afad3'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});