import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)

 // Vuex store
app.use(router)  // Vue router

app.mount('#app')
