<template>
<header class="main-header" id="navbar">
  <div class="container" >
    <nav class="navbar navbar-expand-lg main-nav px-0">
      <a class="navbar-brand" href="/">
              <img src="/images/icon.png" alt="Buisiness Logo">
            </a>
      <button v-on:click="changeTheme" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="icon-bar icon-bar-1"></span>
                      <span class="icon-bar icon-bar-2"></span>
                      <span class="icon-bar icon-bar-3"></span>
                  </button>
      <div class="collapse navbar-collapse" id="mainMenu">
        <ul class="navbar-nav text-uppercase ml-auto f1">
          <li class="nav-item">
            <a href="/" class="active active-first">inicio</a>
          </li>
          <li class="nav-item">
            <a href="cursos">Cursos</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li>
            <router-link :to="{name:'ingreso'}">
              <a class="btn btn-primary">
                Ingrese
              </a>
            </router-link>
          </li>
          <li>
            <user-menu-component></user-menu-component>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <!-- /.container -->
</header>
</template>

<script scope>
import UserMenuComponent from './UserMenuComponent.vue';
export default{
  components: { UserMenuComponent },
  methods:{
    changeTheme(){
      const nav = document.querySelector('#navbar');
      if(nav!=null && nav.className=='main-header' && scrollY<10){
        nav.className = 'main-header scroll';
        nav.style.position = "relative !important";
      }
    },
}
}

window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(scrollY <= 10) nav.className = 'main-header'; else nav.className = 'main-header scroll';
};
</script>
<!-- Estilos-->
<style scoped>
[data-target="#mainMenu"] {
    position: relative;
    z-index: 999;
  }
  
  #mainMenu li > a {
    font-weight: bold;
    letter-spacing: 1px;
    color: rgb(255, 255, 255);
    font-weight: 400;
    position: relative;
    text-decoration: none;
  }
  
  #mainMenu li:not(:last-of-type) {
    margin-right: 30px;
  }
  
  #mainMenu li > a::before {
    position: absolute;
    content: "";
    width: calc(100% - 1px);
    height: 1px;
    background: rgb(255, 255, 255);
    bottom: -6px;
    left: 0;
  
    -webkit-transform: scale(0, 1);
    -ms-transform: scale(0, 1);
    transform: scale(0, 1);
    -webkit-transform-origin: right center;
    -ms-transform-origin: right center;
    transform-origin: right center;
    z-index: -1;
  
    -webkit-transition: transform 0.5s ease;
    transition: transform 0.5s ease;
  }
  
  #mainMenu li > a:hover::before,
  #mainMenu li > a.active::before {
    -webkit-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    transform: scale(1, 1);
    -webkit-transform-origin: left center;
    -ms-transform-origin: left center;
    transform-origin: left center;
  }
  
  .main-header {
    position: fixed;
    align-content: center;
    left: 0;
    z-index: 99;
    width: 100%;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }
  
  .navbar-brand {
    color: #fff;
  }
  .main-header .navbar-brand img {
    max-width: 250px;
    animation: fadeInLeft 0.4s both 0.4s;
  }
  /* main-header end */

  @media (max-width: 991px) {
    /*header starts*/
  
    .navbar-toggler {
      margin: 0;
      padding: 0;
      width: 40px;
      height: 40px;
      position: absolute;
      top: 25px;
      right: 0;
      border: none;
      border-radius: 0;
      outline: none !important;
    }

    .main-header .container{
      align-content: center;
      align-items: center;
      text-align: center;
    }
  
    .main-header .navbar-nav {
      float: none;
      width: 100%;
      padding-left: 0;
      padding-right: 0;
      text-align: center;
    }
  
    .main-header .navbar-nav {
      margin-top: 30px;
    }
  
    #mainMenu li:not(:last-of-type) {
      margin-right: 0px;
    }
  
    /**/
    .main-header .navbar-toggler .icon-bar {
      background-color: #fff;
      margin: 0 auto 6px;
      border-radius: 0;
      width: 30px;
      height: 3px;
      position: absolute;
      right: 0;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }
  
    .main-header .navbar .navbar-toggler .icon-bar:first-child {
      margin-top: 3px;
    }
  
    .main-header .navbar-toggler .icon-bar-1 {
      width: 10px;
      top: 0px;
    }
  
    .main-header .navbar-toggler .icon-bar-2 {
      width: 16px;
      top: 12px;
    }
  
    .main-header .navbar-toggler .icon-bar-3 {
      width: 20px;
      top: 21px;
    }
  
    .main-header .current .icon-bar {
      margin-bottom: 5px;
      border-radius: 0;
      display: block;
    }
  
    .main-header .current .icon-bar-1 {
      width: 18px;
    }
  
    .main-header .current .icon-bar-2 {
      width: 30px;
    }
  
    .main-header .current .icon-bar-3 {
      width: 10px;
    }
  
    .main-header .navbar-toggler:hover .icon-bar {
      background-color: #fff;
    }
  
    .main-header .navbar-toggler:focus .icon-bar {
      background-color: #fff;
    }
  
    /*header ends*/
  }

  header.scroll {
    background-color: rgb(110, 143, 250);
    color: white !important;
    box-shadow: 0px 4px 7px #777;
  }

</style>