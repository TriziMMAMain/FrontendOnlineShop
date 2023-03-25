import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// - router
import router from './router'

// - pinia
const app = createApp(App)

// Vuetify
import { vuetify } from "./plugins/vuetify";

// -
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')

