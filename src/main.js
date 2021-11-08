import { createApp } from 'vue'
import 'amfe-flexible/index.js'
import i18n from '@locale/index.js'
import App from './App.vue'
import { Button } from 'vant'

const app = createApp(App);
app.use(i18n);
app.use(Button);
app.mount('#app');
