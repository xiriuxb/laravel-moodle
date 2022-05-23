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
</script>

<style scoped>
</style>