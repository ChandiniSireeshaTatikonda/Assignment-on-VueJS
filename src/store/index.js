import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usersData: [],
    formData: [],
  },
  mutations: {
    setUsers: (state, payload) => {
      state.usersData = payload;
    },
  },
  actions: {
    setUsersAction: (state, payload) => {
      state.commit('setUsers', payload);
    },
  },
  modules: {},
  getters: {
    listOfUsers: (state) => state.usersData,
  },
});
