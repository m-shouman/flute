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
            <a class="navbar-item">
              Examples
            </a>
            <a class="navbar-item">
              Documentation
            </a>
            <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fa fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data(){
    return {
      appName:"Flute",
    }
  }
};
</script>

<style scoped>
.app-name-logo{
  font-weight: bolder;
  color: #FFF;
  padding-right: 10px;
  font-size: 28px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
}
</style>