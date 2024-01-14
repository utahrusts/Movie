const express = require('express');
var cors = require('cors');
const getMoviesByTitle= require('./moviefinder.js')
const app = express();
const port = 3000;

app.use(cors());

app.get('/movies', async (req, res) => {
  let title = req.query.search
  if(!title){
    res.status(400).send("Missing search query parameter")
  }else{
    try{
     let result = await getMoviesByTitle(title)
     console.log(JSON.stringify(result))
     res.send(JSON.stringify(result))
    }catch(error){
      res.status(500).send("There was an unexpected service error")
    }
  }
});

app.listen(port, () => {
  console.log(`Web service listening at http://localhost:${port}`);
});