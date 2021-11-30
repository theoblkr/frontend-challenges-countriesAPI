// initial state
const state = () => ({
  darkActivated: false
})

// getters
const getters = {
    darkActivated: state => {
        return state.darkActivated;
    }
}

// actions
const actions = {
  onChangeMode ({ commit }) {
      commit('onChangeMode')
  }
}

// mutations
const mutations = {
    onChangeMode: (state) => {
        return state.darkActivated = ! state.darkActivated;
    },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}