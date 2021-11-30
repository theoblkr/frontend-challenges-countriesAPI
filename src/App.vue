<template>
  <div id="app" :style="darkActivated ? 'background-color: black;' : 'background-color: white;'">
    <Header />
    <CountriesList/>
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue'
import CountriesList from './components/CountriesList.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: mapState({
        darkActivated: state => state.mode.darkActivated
    }),
  components: {
    Header,
    CountriesList
  }
}
</script>

<style>
html, body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0rem 4rem;
}
</style>
