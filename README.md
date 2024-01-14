# Movie Search Service

This is a Node Express Rest Service that searches a movie database by movie title


## Project setup
```bash
npm install
```

## Running the Server
```bash
node app.js
```

## Running Test
```bash
node test
```

## Testing the service

The service supports the following GET endpoint

http://<host>/movies?search=MovieTitle

A sample expected payload would be:
```javascript
[{"movie_id":1157431,"title":"Love vs. Title; or, An Up-to-Date Elopement","poster_image_url":"https://developers.themoviedb.org/3/getting-started/images","popularity_summary":"0.6 out of 0"}]
```


