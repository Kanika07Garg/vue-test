<template>
  <div class="overflow-x-hidden">
    <NavHeader></NavHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from "./components/NavHeader";

export default {
  name: "App",
  components: {
    NavHeader,
  },
};
</script>
