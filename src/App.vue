<template>
    <main>
        <SearchLocation/>
        <InfoWeather/>
    </main>
</template>

<script>
import SearchLocation from './components/searchLocation.vue'
import InfoWeather from './components/infoWeather.vue';

export default {
  name: 'App',
  components: {
    SearchLocation,
    InfoWeather,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  height: 100vh;
  background-image: url('./assets/cold-bg.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
  width: 375px;
  margin: auto;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
}

#app.warm {
  background-image: url('./assets/warm-bg.jpg');
}

main {
  min-height: 100vh;
  padding: 25px;

  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}

</style>
