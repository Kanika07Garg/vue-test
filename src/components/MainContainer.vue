<template>
  <div class="bg-grey-800 w-full" v-if="movieData.length !== 0">
    <div class="mt-0 relative">
      <DisplayMovie :movieDetails="movieData[0]"></DisplayMovie>
      <MovieList :movieDetails="movieData[1]"></MovieList>
      <MovieList :movieDetails="movieData[2]"></MovieList>
    </div>
  </div>
</template>
<script>
import MovieList from "./MovieList";
import DisplayMovie from "./DisplayMovie";

export default {
  data() {
    return {
      movieData: [],
    };
  },
  name: "MainContainer",
  components: {
    MovieList,
    DisplayMovie,
  },
  created() {
    this.fetchData();
  },
  methods: {

    // fetching data using Fetch
    async fetchData() {
      try {
        const response = await fetch(
          "https://asstatic.solocoo.tv/v1/showcase/Home?app=as"
        );
        const data = await response.json();
        this.movieData = data.showcase;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
