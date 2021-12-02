<template>
  <div>
    <div v-if="loading">
      <square :color="darkActivated ? '#ffffff': '#000000' " class="squareLoading" />
    </div>
    <div
      v-else-if="country"
      class="countainerDetail"
    >
      <img :src="country.flags.png">
      <div
        :class="darkActivated ? 'dark-mode': 'white-mode' "
        class="countainerInfos"
      >
        <h1>{{ country.name.common }}</h1>
        <div
          class="listDetail"
        >
          <section>
            <p v-if="country.name.nativeName.eng">
              <span>Native name : </span>{{ country.name.nativeName.eng.official }}
            </p>
            <p><span>Population : </span>{{ new Intl.NumberFormat('en-US').format(country.population) }}</p>
            <p><span>Region : </span>{{ country.region }}</p>
            <p><span>Subegion : </span>{{ country.subregion }}</p>
            <p><span>Capital : </span>{{ capital }}</p>
          </section>
          <section>
            <p><span>Top level domain : </span>{{ tld }}</p>
            <p><span>Currencies : </span>{{ currencies }}</p>
            <p><span>Languages : </span>{{ languages }}</p>
          </section>
        </div>
        <p v-if="country.borders" id="borderContainer">
          <span>Border countries : </span>
          <a
            v-for="element in country.borders"
            :key="element" 
            :href="$router.resolve({ name: 'CountryDetails', params: { country: element }}).href"
            class="bordersCountry"
          >
            {{ element }}
          </a>
        </p>
      </div>
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
        country: null,
        loading: true
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
    },
    async created(){
      const {data: country} = await axios.get(`https://restcountries.com/v3.1/alpha/${this.$route.params.country}?fullText=true`)
      this.country = country[0]
      this.loading = false
    }
  }
</script>

<style scoped lang="scss">
.countainerDetail {
  padding: 0rem 4rem;
  display: flex;
  flex-direction: row;
  img {
    max-width: 600px;
    min-width: 350px;
    padding-bottom: 70px;
    width: 100%;
    height: 100%;
  }
  .listDetail {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  span{
    font-weight: 600;
  }
}
.countainerInfos {
  margin-left: 13rem; 
  text-align:left
}
section:first-child {
  margin-right: 2rem;
}
#borderContainer {
  margin-top: 5rem;
}
.bordersCountry {
  padding: 5px 10px;
  margin: 10px;
  background-color: hsl(0, 0%, 98%);
  color: black;
  box-shadow: 1px 1px 14px 2px #0000000f;
  margin-top: 2rem;
}
@media screen and (max-width: 700px) {
  .countainerDetail{
    flex-direction: column;
    padding: 0rem 2rem;
    img {
      max-width: inherit;
      min-width: inherit;
      padding-bottom: 40px;
    }
  }
  .countainerInfos {
    margin-left: 0rem;
  }
}
</style>