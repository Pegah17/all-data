import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Meta from 'vue-meta'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(require('vue-moment'))
Vue.use(Meta)
if (isProd) {
  Vue.use(VueAnalytics, {
    id: 'UA-73944565-5',
    router,
    debug: {
      enabled: !isProd,
      sendHitTask: isProd
    }
  })
}
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
