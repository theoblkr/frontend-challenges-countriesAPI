<template>
  <CountriesList :dark-activated="darkActivated" />
</template>

<script>
  import CountriesList from '../components/CountriesList.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'Home',
    components: {
      CountriesList
    },
    computed: mapState({
      darkActivated: state => state.mode.darkActivated
    }),
  }
</script>
