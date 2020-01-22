const axios = require('axios');



const getClima = async( lat, lng ) =>{

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=cc4f14ff736bfe126d9ab0831ff9c02c&units=metric`)
    
    return resp.data.main.temp;
}

module.exports = {
getClima
}