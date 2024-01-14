<template>
    <div id="Movie">
        <form v-on:submit.prevent='getMovieList(inputTitle)' class="form">
            <input type="text" v-model="inputTitle" style="margin-right: 10px;">
            <input type="submit" value="Submit">
        </form>
            <div id="movieDisplay" v-for="movie in movies" class="card">
              <img :src="imagePath + movie.poster_image_url">
                <p class="card-title"> {{movie.title}}</p>
                <p> <b>Ratings:</b> {{movie.popularity_summary}}</p>
            </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Movie",
  data: function() {
    return {
      inputTitle: "",
      movies: "",
      imagePath: ""
    };
  },
  methods: {
    getMovieList: function(inputTitle) {
      axios
        .get(
          "http://localhost:3000/movies?search=" +
            inputTitle
        )
        .then(response => {
          this.movies = response.data;
        });
    },
  }
}
</script>

<style scoped>
.form {
  padding-bottom: 15px;
}
.form input[type="text"]{
    height: 20px;
    width: 250px;
}
.form input[type="submit"]{
    height: 30px;
    font-size: 15px;
}
.space {
  padding-bottom: 15px;
}
.card {
  box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.4);
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
  padding-top: 10px;
}
.card-detail {
	position: relative;
	padding: 10px;
	display: table-cell;
	vertical-align: top;
	line-height: 1.4;
	color: #333;
}
.card-title {
	font-size: 19px;
	font-weight: 600;
	color: #cb202d;
}
</style>
