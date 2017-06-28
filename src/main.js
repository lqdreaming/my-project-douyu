// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import md5 from 'js-md5'
import VideoPlayer from 'vue-video-player'

import './common/stylus/index.styl'

Vue.config.productionTip = false

Vue.use(VideoPlayer)
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)
Vue.use(md5)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
