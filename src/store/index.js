import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedPlan: {}
  },
  getters: {
    getSelectedPlan(state) {
      return state.selectedPlan;
    }
  },
  mutations: {
    selectPlan(state, plan) {
      state.selectedPlan = plan;
    }
  },
})
