<template>
  <div class="home">
    <img alt="App logo" src="../assets/logo.png" />
    <landing msg="Welcome to the 'Learn Kotlin' App" />
  </div>
</template>

<script>
// @ is an alias to /src
import landing from "@/components/Landing.vue";

export default {
  name: "Home",
  components: {
    landing,
  },
};
</script>
