<template>
  <div class="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden mx-2">
    <div v-for="movies in movieDetails.assets" :key="movies.id">
      <div class="md:w-full w-[300px] relative flex p-1">
        <MovieCard :data="movies" :display="false"></MovieCard>
      </div>
    </div>
  </div>
</template>
<script>
import MovieCard from "./MovieCard";
export default {
  name: "DisplayMovie",
  props: {
    movieDetails: Object,
  },
  components: { MovieCard },
};
</script>
