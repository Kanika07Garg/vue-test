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
          <div
            class=" inline-block p-1 md:text-7xl text-4xl align-bottom mt-auto bg-gradient-to-t from-slate-700"
            ><span class="text-white font-extrabold float-end">{{ index + 1 }}</span> </div
          >
          <img
            :src="imageURL"
            class="md:w-[230px] w-[170px] md:h-[200px] h-[130px]"
            alt="MovieCard"
          />
        </div>
        <div v-else>
          <img
            :src="imageURL"
            :class="
              display ? 'md:h-[270px] h-[160px]' : 'md:h-[500px] h-[300px] object-cover object center'
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
            ? 'md:ml-[60px] ml-[40px] md:text-[12px] text-[8px]'
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

