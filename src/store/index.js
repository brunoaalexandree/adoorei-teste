import { createStore } from "vuex";

export default createStore({
  state: {
    selectedPlan: {},
    token: null,
    user: null,
  },
  getters: {
    getSelectedPlan(state) {
      return state.selectedPlan;
    },
    getToken(state) {
      return state.token;
    },
    getUser(state) {
      return state.user;
    }
  },
  mutations: {
    selectPlan(state, plan) {
      state.selectedPlan = plan;
    },
    setToken(state, tokenCode) {
      state.token = tokenCode;

    },
    setUser(state, userData) {
      state.user = userData;
    },
  },
  actions: {
    login({ commit }, userData) {
      commit('setUser', userData);
    },
    token({ commit }, tokenData) {
      commit('setToken', tokenData);
    }
  }
});
