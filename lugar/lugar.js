const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const ecodedUlr = encodeURI(dir);
    
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ ecodedUlr }`,
        headers: {'x-rapidapi-key': 'f3e31b5e74mshe5ad50df3e39d83p1b4515jsn3137f064f16d'}
      });
    
    const resp = await instance.get();
    if ( resp.data.Results.length === 0 ) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data      = resp.data.Results[0];
    const direccion = data.name;
    const lat       = data.lat;
    const lng       = data.lon;

    return {
        direccion,
        lat,
        lng        
    }
}

module.exports = {
    getLugarLatLng
}