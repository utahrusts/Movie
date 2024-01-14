<template class="card">
  <div id="app" class="card-body">
    <h1>Movie Review App</h1>
    <h3>Enter a Movie Title to Search for Movies</h3>
    <Movie/>
  </div>
</template>

<script>
import Movie from "./components/Movie.vue";

export default {
  name: "app",
  components: {
    Movie
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  height: 100px;
}
</style>
