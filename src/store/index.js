import Vue from 'vue'
import Vuex from 'vuex'
import mode from './modules/mode'
import countries from './modules/countries'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    mode,
    countries,
  },
  strict: debug,
})