import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects : {
      datajournalism : {
        'num' : '01',
        'name' : 'datajournalisme',
        'img' : require('@/assets/img/datajournalism.jpg'),
      },
      kickstarter : {
        'num' : '02',
        'name' : 'kickstarter',
        'img' : require('@/assets/img/kickstarter.jpg'),
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
