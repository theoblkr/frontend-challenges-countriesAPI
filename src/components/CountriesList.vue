<template>
  <div v-if="countries.length" >
      <input type="text" v-model="countrySearch">
      <p v-for="(country, index)  in filteredListCountries" :key="index">
          <img :src='country.flags.png' />
          {{ country.name.nativeName.fra.common }}
      </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "CountriesList",
    data () {
        return {
            countries: [],
            countrySearch: ''
        }
    },
   computed: {
        filteredListCountries() {
        return this.countries[0].filter(country => {
            return country.name.nativeName.fra.common.toLowerCase().includes(this.countrySearch.toLowerCase())
        })
        }
    },
    async created () {
        const {data: countries} = await axios.get('https://restcountries.com/v3.1/lang/french')
        this.countries.push(countries)
    }
}
</script>

<style>

</style>