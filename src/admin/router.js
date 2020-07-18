import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);



const routes = [
  {
    path: '/admin/login',
    component: () => import("./components/pages/login"),
  },
  {    
    path: '/admin',
    component: () => import("./components/pages/skills"),
  },
  {
    path: '/admin/works',
    component: () => import("./components/pages/works"),
  },

  {
    path: '/admin/reviews',
    component: () => import("./components/pages/reviews"),
  }
];

export default new VueRouter({mode: 'history', routes});

