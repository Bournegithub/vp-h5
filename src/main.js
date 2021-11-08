import { createApp } from 'vue'
import 'amfe-flexible/index.js'
import i18n from '@locale/index.js'
import App from './App.vue'
import router from '@router/index'
import { Button } from 'vant'

const app = createApp(App)
app.use(i18n)
app.use(Button)
app.use(router)
app.mount('#app')
