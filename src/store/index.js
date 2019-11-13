import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects : {
      'project' : {
        'num' : '01',
        'name' : 'datajournalisme',
        'img' : '@/assets/img/datajournalism.jpg',
      },
      'project' : {
        'num' : '02',
        'name' : 'kickstarter',
        'img' : '@/assets/img/kickstarter.jpg',
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
