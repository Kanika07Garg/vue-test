<template>
  <div>
    <div class="absolute">
      <img
        :src="imageURL"
        alt="Full Screen Image"
        class="object-fill md:object-cover object-center h-screen w-screen"
      />
    </div>
    <div
      class="w-screen px-6 md:px-12 absolute text-white bg-gradient-to-b from-black"
    >
      <h1 class="p-4 text-lg md:text-xl font-bold">{{ movieDetails.title }}</h1>
      <p class="hidden md:inline-block p-4 w-full text-sm">
        {{ movieDetails.desc }}
      </p>
      <div class="p-2">
        <button
          class="bg-white text-black font-bold m-2 px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-opacity-70"
        >
          Watch Now
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      movieDetails: {},
      imageURL: "",
    };
  },

  mounted() {
    const storedMovieData = sessionStorage.getItem("movieData");
    if (storedMovieData) {
      this.movieDetails = JSON.parse(storedMovieData);
    }
    if (this.movieDetails) {
      this.imageURL = this.movieDetails.images[1].url.replace(
        "https://static-originals.solocoo.tv/",
        "https://static-content.solocoo.tv/"
      );
    }
  },
};
</script>
