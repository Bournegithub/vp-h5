const example = {
  state () {
    return {
      count: 10,
    };
  },
  mutations: {
    exampleFun (state, value) {
      state.count = value;
    },
  },
  actions: {
    actionCountAdd (context, value) {
      context.commit('exampleFun', value + 1);
    },
    actionCountMinus (context, value) {
      context.commit('exampleFun', value - 1);
    },
  },
};

export default example;