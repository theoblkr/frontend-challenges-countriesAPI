<template>
  <div class="countainerDetail">
     <img :src='country.flags.png' />
     <div>
       <div class="listDetail">
         <section>
          <p>{{country.name.common}}</p>
          <p>Native name :</p>
          <p>Population : {{country.population}}</p>
          <p>Region : {{country.region}}</p>
          <p>Sub region : {{country.subregion}}</p>
          <p>Capital : {{country.capital.join('')}}</p>
        </section>
        <section>
          <p>Top level domain :  {{country.tld.join(',')}}</p>
          <p>Currencies :</p>
          <p>Languages :</p>
        </section>
       </div>
        
        <p>Border countries : {{country.borders.join(',')}}</p>
     </div>
  </div>
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