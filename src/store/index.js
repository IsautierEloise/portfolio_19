import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects : {
      datajournalism : {
        'num' : '01',
        'name' : 'Datajournalisme',
        'year' : '2019',
        'role' : 'Illustrator',
        'img' : require('@/assets/img/datajournalism.jpg'),
        'desc' : 'Illustrations réalisées sur Adobe Illustrator dans le cadre d\'un projet de datajournalisme sur les maladies chroniques. <br><br>',
        'discover' : 'https://www.behance.net/gallery/87377367/Illustrer-des-maladies-chroniques',
      },
      kickstarter : {
        'num' : '02',
        'name' : 'Kickstarter',
        'year' : '2018',
        'role' : 'Designer',
        'img' : require('@/assets/img/kickstarter.jpg'),
        'desc' : 'Dans le cadre d’un projet scolaire, nous devions créer le design d’un site e-commerce en se basant sur un projet Kickstarter existant.<br><br>',
        'discover' : 'https://www.behance.net/gallery/86890281/Kickstarter-Project-Web-Design',
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
