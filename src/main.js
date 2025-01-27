import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import './index.css';
import './registerServiceWorker';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.min.css';

const app = createApp(App);
app.use(router);
app.mount('#app');