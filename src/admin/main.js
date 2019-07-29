import Vue from 'vue';
import App from './App.vue';
import router from './router';
import SimpleVueValidation from 'simple-vue-validator'
import {store} from './store'

Vue.use(SimpleVueValidation);

new Vue({
  el: "#app-root",
  store,
  router,
  render: h => h(App)
});