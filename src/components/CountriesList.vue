<template>
  <div v-if="countries.length" >
      <input type="text" v-model="countrySearch">
      <select v-model="regionSelected">
          <option v-for='region in regions' :value="region" :key="region">
              {{region}}
          </option>
      </select>
      <p v-for="(country, index)  in filteredListCountries" :key="index">
          <router-link :to="{ name: 'CountryDetails', params: { country: country.name.official }}">
          <img :src='country.flags.png' />
          {{ country.name.nativeName.fra.common }}
          </router-link>
      </p>
  </div>
</template>

<script>
import axios from 'axios'
import { regions } from '../helpers/regionsList'

export default {
    name: "CountriesList",
    data () {
        return {
            countrySearch: '',
            regionSelected: '',
            countries: [],
            regions: regions
        }
    },
    watch: {
        regionSelected: function () {
        console.log(this.regionSelected)
        },
    },
   computed: {
        filteredListCountries() {
            return this.countries.filter(country => {
                return country.name.nativeName.fra.common.toLowerCase().includes(this.countrySearch.toLowerCase())
            })
        }
    },
    async created () {
        const { data: countries } = await axios.get('https://restcountries.com/v3.1/lang/french')
        this.countries = countries
    }
}
</script>

<style>

</style>