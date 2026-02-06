import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)


 // Vuex store
app.use(router)  // Vue router


app.mount('#app')
