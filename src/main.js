import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element.js'

import 'normalize.css/normalize.css'
import './assets/iconfont/iconfont.css'
import './assets/style/main.css'

const app = createApp(App)
installElementPlus(app)

app.use(store).use(router).mount('#app')
