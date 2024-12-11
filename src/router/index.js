import { createRouter, createWebHistory } from 'vue-router';
import Doctors from '../views/Doctors.vue';
import Nurses from '../views/Nurses.vue';

const routes = [
  { path: '/doctors', component: Doctors },
  { path: '/Nurses', component: Nurses },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
