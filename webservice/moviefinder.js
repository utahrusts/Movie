const axios = require('axios');
require('dotenv').config()

const getMoviesByTitle = async (title)=>{
    let url = `${process.env.API_URL}?include_adult=false&language=en-us&region=US&api_key=${process.env.API_KEY}&query=${title}`
    console.log(url)
    let headers =  {accept: 'application/json'};
    let res = '';
   
    try{
       let response =  await axios({
          method: 'get',
          url,
          headers
         })
      
       res = parseResponse(response.data.results)
       return res;
    }catch(error){
            res = {
                error: error
            }
            return res;
    }
   
   
}


const parseResponse = (resp)=>{
    let imageBase = 'http://image.tmdb.org/t/p/w185//'
    if(resp.length > 10){
        resp = resp.slice(0,10)
    }
    let result = resp.map((mv)=>{
       return{
        movie_id: mv.id,
        title: mv.title,
        poster_image_url: mv.poster_path? `${imageBase}${mv.poster_path}`:imageBase,
        popularity_summary: `${mv.popularity} out of ${mv.vote_count}`}

    })
   
    return result;
}

module.exports = getMoviesByTitle