<template>
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <span class="app-name-logo">Flute</span>
            <img src="../../assets/imgs/logo/flute-128.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <span class="navbar-item" v-if="displayName">Hi {{displayName}}</span>
            <!-- <span class="navbar-item" >{{test}}</span> -->
            <a @click="logout($event)" v-if="isAuth" class="navbar-item">
              Log Out
            </a>
            <router-link class="navbar-item" to="/login" v-if="!isAuth">Log In</router-link>
            <!-- <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="/documentation/overview/start/">
                Docs
              </a>
              <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="/documentation/overview/start/">
                  Overview
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                  Modifiers
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                  Columns
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                  Layout
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                  Form
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                  Elements
                </a>
                <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                  Components
                </a>
              </div>
            </div> -->
          </div>
          <!-- <span class="navbar-item">
            <a class="button is-primary is-inverted">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
              <span>Download</span>
            </a>
          </span> -->
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
import firebase from 'firebase';
export default {
  name: 'AppHeader',
  data() {
    return {
      // test:"hi1",
      appName: "Flute",
      user: null,
      displayName:"",
      isAuth:false,
    }
  },
  methods: {
    logout(event) {
      firebase.auth().signOut().then(() => {
        // if(this.test === "hi1") this.test = "hi2";
        // else this.test = "hi1";
        this.$router.push('login');
      }).catch(() => {

      });
    }
  },created(){
    firebase.auth().onAuthStateChanged(function (user) {
      if(user) {this.isAuth =true; this.displayName = user.displayName;}
      else this.isAuth = false;
      this.user = user;
      console.log('changed');
    });
  },
};
</script>

<style scoped>
.app-name-logo {
  font-weight: bolder;
  color: #FFF;
  padding-right: 10px;
  font-size: 28px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
}

.hero-head {
  background-color: #363636;
}

.navbar-item,
.navbar-link {
  color: #f5f5f5 !important;
}

.navbar-item:hover,
.navbar-link:hover {
  background-color: #292929 !important;
}

.navbar-link::after {
  border: 1px solid #f5f5f5 !important;
  border-right: 0 !important;
  border-top: 0 !important;
  content: " " !important;
  display: block !important;
  height: 0.5em !important;
  pointer-events: none !important;
  position: absolute !important;
  -webkit-transform: rotate(-45deg) !important;
  transform: rotate(-45deg) !important;
  -webkit-transform-origin: center !important;
  transform-origin: center !important;
  width: 0.5em !important;
  margin-top: -0.375em !important;
  right: 1.125em !important;
  top: 50% !important;
}

.navbar-dropdown {
  background-color: #ffffff !important;
}

.navbar-dropdown .navbar-item {
  color: #292929 !important;
}

.navbar-dropdown .navbar-item:hover {
  color: #ffffff !important;
}

.navbar-dropdown .navbar-item.is-active {
  color: #f5f5f5 !important;
}

.is-active {
  background-color: #292929 !important;
  color: #f5f5f5 !important;
}

</style>