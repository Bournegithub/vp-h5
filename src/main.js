import { createApp } from 'vue';
import 'amfe-flexible/index.js';
import i18n from '@locale/index.js';
import App from './App.vue';
import router from '@router/index';
import store from '@store/index';
import vantImport from '@utils/vantImport';
import '@utils/rem';
import '@assets/style/iconfont.css'; // 引入图标字体
import '@assets/style/main.less';

const app = createApp(App);
app.use(i18n);
vantImport(app); // 为避免main.js过于臃肿，将按需引入的组件放置在utils/vantImport
app.use(router);
app.use(store);
app.mount('#app');
