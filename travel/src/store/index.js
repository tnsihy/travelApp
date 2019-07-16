import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 首页和城市页面公用数据
  state: {
    city: '上海'
  },
  mutations: {
    changeCity: function (state, city) {
      // 这里的city等于传入的city
      state.city = city
    }
  }
})
