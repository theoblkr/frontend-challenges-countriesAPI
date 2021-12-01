<template>
  <div v-if="countries.length" >
      <input type="text" v-model="countrySearch">
      <select v-model="regionSelected">
            <option value="" disabled selected>Select your option</option>
          <option v-for='region in regions' :value="region" :key="region">
              {{region}}
          </option>
      </select>
      <div class="containerCountries">
        <div v-for="(country, index)  in filteredListCountries" :key="index" class="containerCardCountry">
            <router-link :to="{ name: 'CountryDetails', params: { country: country.name.official }}" class="containerDetail">
                <img :src='country.flags.png' />
                {{ country.name.common }}
            </router-link>
        </div>
      </div>
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
   computed: {
        filteredListCountries() {
            if(this.regionSelected !== '' && this.regionSelected !== 'All Regions'){
                return this.countries.filter(country => {
                    return country.region.toLowerCase() === this.regionSelected.toLowerCase()
                })
               
            } else if(this.countrySearch !== '') {
                 return this.countries.filter(country => {
                    return country.name.common.toLowerCase().includes(this.countrySearch.toLowerCase())
                })
            } 
            else {
                return this.countries
            }
            
        }
    },
    async created () {
        const { data: countries } = await axios.get('https://restcountries.com/v3.1/all')
        this.countries = countries
    }
}
</script>

<style>
.containerCountries {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 3rem;
}
.containerCardCountry {
    margin: 10px 0 0 2%;
    border-radius: 6px;
    overflow: hidden;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 300px);
    box-shadow: 1px 1px 14px 2px #0000000f;
    height: 100%;
}
img {
    width: 100%;
    max-width: 100%;
    height: 200px;
    object-fit: cover;
}
</style>