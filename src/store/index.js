import { createStore } from 'vuex';
import example from './example/index';

const store = createStore({
  state () {
    return {
      permission: [],
    };
  },
  mutations: {
    mutationPermission (state, value) {
      state.permission = value;
    },
  },
  actions: {
    actionPermission (context, value) {
      context.commit('mutationPermission', value);
    },
  },
  modules: {
    example,
  },
});

export default store;