import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta';
import { createPinia } from 'pinia'
import App from './App.vue'

// - router
import router from './router'

// - app
const app = createApp(App)
const metaManager = createMetaManager();

// - toast
import Toast from './plugins/toast.js'

// Vuetify
import { vuetify } from "./plugins/vuetify";

// -
app.use(createPinia())
app.use(metaManager());
app.use(Toast, {
    transition: "Vue-Toastification__fade",
    maxToasts: 2,
    newestOnTop: true
})
router.afterEach(() => {
    requestAnimationFrame(() => {
        const top = document.getElementById('app').offsetTop;
        window.scrollTo({
            top,
            behavior: 'auto',
            block: 'start',
        });
    });
});
app.use(router)
app.use(vuetify)
app.mount('#app')

