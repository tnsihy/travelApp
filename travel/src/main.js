// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入Swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 引入静态资源 详细查看README.md
import 'styles/reset.css'
import 'styles/border.css'
import 'swiper/dist/css/swiper.css'

// 解决移动端点击事件延迟问题
import fastClick from 'fastclick'
fastClick.attach(document.body)

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
