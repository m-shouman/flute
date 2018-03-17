<template>
  <div id="app">
    <section class="hero is-primary is-fullheight">
      <app-header></app-header>
      <div class="hero-body">
        <div class="container has-text-centered">
          <router-view/>
        </div>
      </div>
      <app-footer></app-footer>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body::-webkit-scrollbar {
  width: 1em;
}

body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
</style>
