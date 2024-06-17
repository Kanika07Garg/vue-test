<template>
  <div class="items-start flex text-white font-bold md:text-2xl text-xl pt-3 mx-4">
    {{ movieDetails.title }}
  </div>
  <div class="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden">
    <div v-for="(movies, index) in movieDetails.assets" :key="movies.id">
      <div class="flex md:w-[300px] w-[200px] relative py-4 px-2">
        <MovieCard :movieRank="movieRank" :index="index" :display="true" :data="movies"></MovieCard>
      </div>
    </div>
  </div>
</template>
<script>
import MovieCard from "./MovieCard";
export default {
  props: {
    movieDetails: Object,
    movieRank: Boolean
  },
  components: { MovieCard },
};
</script>
