import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false;

import './common/stylus/index.styl'

fastclick.attach(document.body);

Vue.use(VueLazyLoad,{
  loading:require('common/image/lazy-img.jpg')
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
});
