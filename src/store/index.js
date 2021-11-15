import { createStore } from 'vuex';
import example from './example/index';

const store = createStore({
  state () {
    return {
      globalCount: 0,
    };
  },
  modules: {
    example,
  },
});

export default store;