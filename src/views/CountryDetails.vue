<template>
  <div>
    <HeaderCountryDetail/>
    <DetailCountry />
  </div>
</template>

<script>
import DetailCountry from '../components/DetailCountry.vue'
import HeaderCountryDetail from '../components/layouts/HeaderCountryDetail.vue'

export default {
  name: 'CountryDetails',
  components: {
    DetailCountry,
    HeaderCountryDetail
  }
}
</script>

<style>

</style>
