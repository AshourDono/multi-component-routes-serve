import { createApp } from 'vue';
import App from './App.vue';
import router from './../routers/router';
import LandingPageComponent from './components/LandingPageComponent.vue';

createApp(LandingPageComponent).use(router).mount('#app');
