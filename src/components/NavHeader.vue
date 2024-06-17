<template>
  <div
    class="px-10 py-4 bg-grey-800 bg-opacity-80 flex flex-col md:flex-row justify-between w-screen z-10"
  >
    <div
      class="md:float-left float-none flex md:w-1/4 justify-between items-center text-white"
    >
      <router-link to="/"><div class="text-lg">CANAL+</div></router-link>
      <div class="text-sm">Library</div>
      <div class="text-sm">Apple TV+</div>
    </div>
    <div
      class="float-right flex justify-end md:justify-between md:w-2/12 items-center pt-2 md:m-0"
    >
      <div class="hidden md:inline-block">🔍</div>
      <button class="bg-primary rounded-md px-2 py-1 font-bold text-white">
        Stream Now
      </button>
      <div class="hidden md:inline-block">👤</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
