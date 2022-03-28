<template>
  <div>
    <navbar-component></navbar-component>
      <!-- <router-view></router-view> -->
      <slot />
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavbarComponent from "../NavbarComponent.vue";
import FooterComponent from "../FooterComponent.vue";
export default {
  components: { FooterComponent, NavbarComponent},
};
// window.onscroll = () => {
//   const nav = document.querySelector("#navbar");
//   if (scrollY <= 10) nav.className = "main-header";
//   else nav.className = "main-header scroll";
// };
</script>

<style scoped>
</style>