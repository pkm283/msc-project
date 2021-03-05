<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Welcome to the ‘learn Kotlin’ application. <br />This is a training
      program consiting of different chapters,<br />
      each chapter detailing a particular aspect of the Kotlin programming
      language.<br />
      Use the navigation bar at the top of the page to navigate the application
      <br c />
      After studying a chapter you can test your learning by attempting the
      corresponding exercise.
    </p>
  </div>
</template>

<script>
export default {
  name: "Landing",
  props: {
    msg: String,
  },
};
</script>

<!-- Css limited to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
