// filter mixins
// vue 3.x中删除了过滤器，推荐使用computed来实现.为了目录结构清晰，以及功能函数的单一性，将需要使用的全局过滤器作用的函数集中放置在flter文件夹内,引入到混入对象
import globalFilters from '@filter/index.js';

const globalMixin = {
  computed: {
    ...globalFilters,
  },
  methods: {
    clickTest () {
      this.$toast('clickTest');
    }
  },
};
export default globalMixin;
