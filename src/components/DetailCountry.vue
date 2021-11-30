<template>
  <p>{{country}}</p>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DetailCountry',
      data () {
        return {
            country: null
        }
    },
  async created(){
    const {data: country} = await axios.get(`https://restcountries.com/v3.1/name/${this.$route.params.country}?fullText=true`)
    this.country = country[0]
  }
}
</script>

<style>

</style>