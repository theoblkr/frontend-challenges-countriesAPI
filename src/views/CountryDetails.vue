<template>
  <div>
    <HeaderCountryDetail :dark-activated="darkActivated" />
    <DetailCountry :dark-activated="darkActivated" />
  </div>
</template>

<script>
  import DetailCountry from '../components/DetailCountry.vue'
  import HeaderCountryDetail from '../components/layouts/HeaderCountryDetail.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'CountryDetails',
    components: {
      DetailCountry,
      HeaderCountryDetail
    },
    computed: mapState({
      darkActivated: state => state.mode.darkActivated
    }),
  }
</script>

<style>

</style>
