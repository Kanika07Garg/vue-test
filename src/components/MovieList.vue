<template>
  <div class="items-start flex text-white font-bold text-xl pt-3 mx-2">
    {{ movieDetails.title }}
  </div>
  <div class="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden">
    <div v-for="movies in movieDetails.assets" :key="movies.id">
      <div class="flex w-[250px] relative py-4 px-2">
        <MovieCard :display="true" :data="movies"></MovieCard>
      </div>
    </div>
  </div>
</template>
<script>
import MovieCard from "./MovieCard";
export default {
  props: {
    movieDetails: Object,
  },
  components: { MovieCard },
};
</script>
