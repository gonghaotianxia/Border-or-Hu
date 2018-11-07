// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import '../src/assets/js/flexible_css.debug'
// import '../src/assets/js/flexible.debug'
// import '../static/4.7.0/css/font-awesome.min.css'
// import VideoPlayer from 'vue-video-player'
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css') 
// Vue.use(VideoPlayer)
// import zhou from './vues/zhou'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
