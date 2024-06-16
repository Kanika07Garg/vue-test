<template>
  <div v-on:click="watchMovie" class="hover:cursor-pointer">
    <div class="flex">
      <span v-if="newTag" style="color: red" class="absolute right-5 font-bold"
        >New</span
      >
      <img
        :src="imageURL"
        :class="display ? 'h-[300px]' : 'h-[500px]'"
        alt="MovieCard"
      />
    </div>
    <div v-if="display" class="text-white">
      <div class="text-[16px] float-left">
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
