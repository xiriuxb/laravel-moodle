<template>
  <div>
    <navbar-component></navbar-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavbarComponent from "../NavbarComponent.vue";
import FooterComponent from "../FooterComponent.vue";
import HomeComponent from "../HomeComponent.vue";
export default {
  components: { FooterComponent, NavbarComponent, HomeComponent },
  data() {
    return {
      logged: Boolean,
    };
  },
  
};
// window.onscroll = () => {
//   const nav = document.querySelector("#navbar");
//   if (scrollY <= 10) nav.className = "main-header";
//   else nav.className = "main-header scroll";
// };
</script>

<style scoped>
</style>