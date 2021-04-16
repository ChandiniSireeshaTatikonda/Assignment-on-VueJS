import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import User from '../views/User.vue';
import Register from '../views/Register.vue';
import UserDetails from '../views/UserDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/user',
    name: 'User',
    component: User,
  },
  {
    path: '/userdetails',
    name: 'UserDetails',
    component: UserDetails,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
