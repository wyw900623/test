// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import '../static/base.css'
import 'element-ui/lib/theme-chalk/index.css';

import Demo from './pages/demo'
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.axios = axios
//Vue.use(Element, { size: 'small', zIndex: 3000 });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Demo },
  template: '<Demo/>'
})
