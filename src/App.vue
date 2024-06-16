<template>
   <NavHeader></NavHeader>
  <router-view></router-view>
</template>

<script>
import NavHeader from "./components/NavHeader";

export default {
  name: 'App',
  components: {
    NavHeader
  }
}
</script>

<style>
@import url('https://m7cdn.io/common/css/external/external.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
