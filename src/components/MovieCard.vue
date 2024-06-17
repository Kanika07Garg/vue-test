<template>
  <div v-on:click="watchMovie" class="hover:cursor-pointer">
    <div class="flex md:shrink-0">
      <div>
        <span
          v-if="newTag"
          class="absolute right-3 top-5 font-bold text-white bg-red-600 px-1 rounded border-lg"
          >New</span
        >
        <div v-if="movieRank" class="flex">
          <span
            class="text-white md:w-[100px] w-[60px] md:text-[70px] text-[30px] font-extrabold align-bottom mt-auto bg-gradient-to-t from-slate-700"
            >{{ index + 1 }}</span
          >
          <img
            :src="imageURL"
            class="md:w-[200px] w-[140px] md:h-[240px] h-[160px]"
            alt="MovieCard"
          />
        </div>
        <div v-else>
          <img
            :src="imageURL"
            :class="
              display ? 'md:h-[300px] h-[180px]' : 'md:h-[500px] h-[300px]'
            "
            alt="MovieCard"
          />
        </div>
      </div>
    </div>
    <div v-if="display" class="text-white">
      <div
        class="text-left"
        :class="
          movieRank
            ? 'md:ml-[90px] ml-[50px] md:text-[12px] text-[8px]'
            : 'ml-0 md:text-[14px] text-[10px]'
        "
      >
        {{ data.title }}
        <div class="text-left text-xsm text-grey-500">{{ genre }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageURL: "",
      genre: "",
      newTag: false,
    };
  },
  props: {
    data: Object,
    display: Boolean,
    movieRank: Boolean,
    index: Number,
  },
  mounted() {
    //replacing image URLs to domain
    this.imageURL = this.data.images[1].url.replace(
      "https://static-originals.solocoo.tv/",
      "https://static-content.solocoo.tv/"
    );
    this.genre = this.data.params.genres[0].title;
    this.newTag = this.data.params?.newEpisodes;
  },
  methods: {
    watchMovie() {
      sessionStorage.setItem("movieData", JSON.stringify(this.data));
      this.$router.push({
        path: `/movie/${this.data.id}`,
      });
    },
  },
};
</script>
