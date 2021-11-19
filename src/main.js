import { createApp } from 'vue';
import 'amfe-flexible/index.js';
import App from './App.vue';
import router from '@router/index';
import store from '@store/index';
import vantImport from '@utils/vantImport';
import i18n from '@locale/index.js';
import globalMixin from './common/mixins/global-mixin';
import '@utils/rem';
import '@assets/style/iconfont.css'; // 引入图标字体
import '@assets/style/main.less';

const app = createApp(App);
app.config.globalProperties.$i18n = i18n; // i18n挂载到全局
console.log('app.config', app.config);
app.use(i18n);
vantImport(app); // 为避免main.js过于臃肿，将按需引入的组件放置在utils/vantImport
app.use(router);
app.use(store);
app.mixin(globalMixin);
app.mount('#app');
