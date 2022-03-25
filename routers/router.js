import { createRouter, createWebHistory } from 'vue-router';
import App from '../src/App.vue';
import StudentComponent from '../src/components/StudentComponent.vue';

const routes = [
  { path: '/', component: App },
  { path: '/students/:id', component: StudentComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
