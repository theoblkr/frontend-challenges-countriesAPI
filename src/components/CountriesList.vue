<template>
  <div
    v-if="countries.length"
    style="padding: 0rem 4rem;"
  >
    <div class="countainerSearch">
      <div class="iconContainer">
        <v-icon
          id="icon"
          name="search"
        />
        <input
          v-model="countrySearch"
          type="text"
          class="inputSearch"
        >
      </div>
      <select
        v-model="regionSelected"
        class="selectorSearch"
      >
        <option
          value=""
          disabled
          selected
        >
          Select your option
        </option>
        <option
          v-for="region in regions"
          :key="region"
          :value="region"
        >
          {{ region }}
        </option>
      </select>
    </div>
    <div class="containerCountries">
      <div
        v-for="(country, index) in filteredListCountries"
        :key="index"
        class="containerCardCountry"
      >
        <router-link
          :to="{ name: 'CountryDetails', params: { country: country.name.official }}"
          class="containerDetail"
        >
          <img :src="country.flags.png">
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

<style lang="scss">
.countainerSearch {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    .iconContainer {
        display: flex;
        position: relative;
        #icon {
        position: absolute;
        z-index: 10;
        left: 20px;
        top: 50%;
        transform: translate(0, -50%);
        color: var(--app-text-color);
        }
        input {
        height: 30px;
        padding: 5px 60px;
        width: 300px;
        box-shadow: 1px 1px 14px 2px #0000000f;
        border-radius: 4px;
        color: var(--app-text-color);
        background-color: var(--app-elements-background-color);
        font-family: "Nunito Sans", sans-serif;
        font-size: 14px;
        font-weight: 300;
        outline: none;
        border: none;
        @media (max-width: 768px) {
            width: 100%;
        }
        &:focus,
        &:focus-visible {
            outline: none;
            border: none;
        }
        &::placeholder {
            color: var(--app-text-color);
        }
        }
    }
}
.containerCountries {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 3rem;
}
.containerCardCountry {
    margin: 10px 0 0 0;
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