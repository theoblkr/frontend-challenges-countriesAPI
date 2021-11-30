import axios from 'axios'

// initial state
const state = () => ({
  countriesList: [],
  regionsList: []
})

// getters
const getters = {
  allCountries: state => {
    return state.countriesList;
  },
}

// actions
const actions = {
  async getAllCountries ({ commit }) {
    const {data: countries} = await axios.get('https://restcountries.com/v3.1/lang/french')
    commit('getAllCountries', countries)
  }
}

// mutations
const mutations = {
  getAllCountries: (state, countries) => {
      return state.countriesList = countries;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}