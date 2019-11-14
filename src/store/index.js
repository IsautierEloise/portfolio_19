import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects : {
      outilscse : {
        'num' : '01',
        'name' : 'Outils CSE',
        'year' : '2019',
        'role' : ['Développeuse', '#F8A6C8'],
        'img' : require('@/assets/img/outilscse.jpg'),
        'desc' : 'Intégration du site vitrine pour le SaaS Outils-CSE, permettant de gérer les heures de délégations suite à la mise en place du CSE dans les entreprises.<br><br> <strong>Laravel et TailwindCSS.</strong><br><br>',
        'discover' : 'https://outils-cse.fr/',
      },
      hushhush : {
        'num' : '02',
        'name' : 'Hush Hush',
        'year' : '2019',
        'role': ['Développeuse', '#F8A6C8'],
        'img' : require('@/assets/img/hushhush.jpg'),
        'desc' : 'Développement du portfolio d\'une directrice artistique. <span style="color: red">Attention</span>, ce site est toujours en production.<br><br> <strong>En équipe avec <a href="https://www.linkedin.com/in/foussikay-khalid/" target="_blank" style="text-decoration: none; color: #85ACF8">Khalid Foussikay</a>, Vue.js</strong><br><br>',
        'discover' : 'https://hushhush.test.ayctor.com/',
      },
      airbnb : {
        'num' : '03',
        'name' : 'Airbnb Weekends',
        'year' : '2019',
        'role' : ['Designer', '#FFB03A'],
        'img' : require('@/assets/img/airbnb.jpg'),
        'desc' : 'Redesign de l\'application Airbnb spécalisée dans la réservation de weekends.<br> <strong>En équipe avec <a href="https://www.linkedin.com/in/clarisse-croset/" target="_blank" style="text-decoration: none; color: #85ACF8">Clarisse Croset</a></strong><br><br>',
        'discover' : 'https://www.behance.net/gallery/87079633/Airbnb-Weekends',
      },
      vuedatepicker : {
        'num' : '04',
        'name' : 'Vue Datepicker',
        'year' : '2019',
        'role': ['Développeuse', '#F8A6C8'],
        'img' : '@/assets/img/datepicker.jpg',
        'desc' : 'Programmation d\'un sélecteur de dates et heures adapté à l\'Outil CSE et flexible. Mise en ligne en tant que libraire NPM. <strong>Vue.js</strong><br><br>',
        'discover' : 'https://www.npmjs.com/package/vue-datetime-picker-component',
      },
      datajournalism : {
        'num' : '05',
        'name' : 'Datajournalisme',
        'year' : '2019',
        'role' : ['Illustratrice', '#85ACF8'],
        'img' : require('@/assets/img/datajournalism.jpg'),
        'desc' : 'Illustrations réalisées sur Adobe Illustrator dans le cadre d\'un projet de datajournalisme sur les maladies chroniques. <br><br>',
        'discover' : 'https://www.behance.net/gallery/87377367/Illustrer-des-maladies-chroniques',
      },
      kickstarter : {
        'num' : '06',
        'name' : 'Kickstarter',
        'year' : '2018',
        'role' : ['Designer', '#FFB03A'],
        'img' : require('@/assets/img/kickstarter.jpg'),
        'desc' : 'Dans le cadre d’un projet scolaire, nous devions créer le design d’un site e-commerce en se basant sur un projet Kickstarter existant.<br><br>',
        'discover' : 'https://www.behance.net/gallery/86890281/Kickstarter-Project-Web-Design',
      },
      blog : {
        'num' : '07',
        'name' : 'PHP Blog',
        'year' : '2017',
        'role' : ['Développeuse', '#F8A6C8'],
        'img' : require('@/assets/img/blog.jpg'),
        'desc' : 'Ma première utilisation de PHP. Création d\'un blog avec inscription, connexion articles et système administrateur. <br> <strong>PHP</strong><br><br>',
        'discover' : 'https://github.com/IsautierEloise/php_blog',
      },
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
