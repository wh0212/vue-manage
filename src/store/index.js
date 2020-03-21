import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeIcon: false
  },
  mutations: {
    activeIcon(state, active) {
      state.activeIcon = active
    }
  },
  actions: {
  },
  modules: {
  }
})
