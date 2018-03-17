// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Buefy from 'buefy';
import firebase from 'firebase';
import firebaseConfig from './.firebase.config';
import 'buefy/lib/buefy.css';
import 'font-awesome/css/font-awesome.css';
import AppHeader from '@/components/_shared/AppHeader';
import AppFooter from '@/components/_shared/AppFooter';


firebase.initializeApp(firebaseConfig.FIREBASE_CONFIG);

Vue.use(Buefy);
Vue.config.productionTip = false;

Vue.component("app-header", AppHeader);
Vue.component("app-footer", AppFooter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    AppHeader
  },
  template: '<App/>',
});

// new Vue({
//   el: '#app',
//   router,
//   components: {
//     App,
//     AppHeader,
//   },
//   template: '<App/>',
// });
