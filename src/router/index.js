import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import Login from '@/components/login/Login';
import Home from '@/components/home/Home';

Vue.use(Router);


const router = new Router({
  routes: [{
    path: '/home',
    name: 'Home',
    component: Home,
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
  }, ],
});

const pathsNeedAuth = ["Home"];

// router.beforeEach((to, from, next) => {
//   if (to.meta.needAuth && !firebase.auth().currentUser) {
//     next('/login');
//   } else {
//     next();
//   }
//   // let needAuth = pathsNeedAuth.includes(to.name);
//   // if (needAuth && !firebase.auth().currentUser) {
//   //   next('/login');
//   // } else {
//   //   next();
//   // }
// });

export default router;
