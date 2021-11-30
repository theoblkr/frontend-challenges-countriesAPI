<template>
  <div v-if="countries.length" >
      <input type="text" v-model="countrySearch">
      <p v-for="(country, index)  in filteredListCountries" :key="index">
          <router-link :to="{ name: 'CountryDetails', params: { country: country.name.official }}">
          <img :src='country.flags.png' />
          {{ country.name.nativeName.fra.common }}
          </router-link>
      </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "CountriesList",
    data () {
        return {
            countrySearch: ''
        }
    },
   computed: {
       ...mapState({
            countries: state => state.countries.countriesList
        }),
        filteredListCountries() {
        return this.countries.filter(country => {
            return country.name.nativeName.fra.common.toLowerCase().includes(this.countrySearch.toLowerCase())
        })
        }
    },
    async created () {
        this.$store.dispatch('countries/getAllCountries')
    }
}
</script>

<style>

</style>