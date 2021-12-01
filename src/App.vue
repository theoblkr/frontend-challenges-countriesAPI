<template>
  <div
    id="app"
    :class="darkActivated ? 'dark-mode': 'white-mode' "
  >
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Header from './components/layouts/Header.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'App',
    components: {
      Header,
    },
    computed: mapState({
      darkActivated: state => state.mode.darkActivated
    }),
  }
</script>

<style>
@import './assets/styles.scss';
</style>
