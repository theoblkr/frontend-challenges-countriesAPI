<template>
  <div
    v-if="country"
    class="countainerDetail"
  >
    <img :src="country.flags.png">
    <div
      :class="darkActivated ? 'dark-mode': 'white-mode' "
    >
      <div
        class="listDetail"
      >
        <section>
          <p>{{ country.name.common }}</p>
          <p v-if="country.name.nativeName.eng">
            Native name :{{ country.name.nativeName.eng.official }}
          </p>
          <p>Population : {{ new Intl.NumberFormat('en-US').format(country.population) }}</p>
          <p>Region : {{ country.region }}</p>
          <p>Sub region : {{ country.subregion }}</p>
          <p>Capital : {{ capital }}</p>
        </section>
        <section>
          <p>Top level domain :  {{ tld }}</p>
          <p>Currencies : {{ currencies }}</p>
          <p>Languages : {{ languages }}</p>
        </section>
      </div>
      <p v-if="borders">
        Border countries : {{ borders }}
      </p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'DetailCountry',
    props: {darkActivated: Boolean},
    data () {
      return {
        country: null
      }
    },
    computed: {
      languages() {
        return Object.values(this.country.languages).map((element) => element).join(',')
      },
      currencies() {
        return Object.values(this.country.currencies).map((element) => element.name).join(',')
      },
      tld() {
        return this.country.tld.join(',')
      },
      capital() {
        return this.country.capital.join(',')
      },
      borders() {
        return this.country.borders && this.country.borders.join(',')
      }
    },
    async created(){
      const {data: country} = await axios.get(`https://restcountries.com/v3.1/name/${this.$route.params.country}?fullText=true`)
      this.country = country[0]
    }
  }
</script>

<style scoped lang="scss">
  .countainerDetail {
    padding: 0rem 4rem;
    display: flex;
    flex-direction: row;
    img {
      margin-right: 4rem;
      width: 60%;
      height: auto;
    }
    .listDetail {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
</style>