<template>
  <div>
    <AppHead :title="'Inicio'" />

    <navbar-component></navbar-component>
    <slot />
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavbarComponent from "../NavbarComponent.vue";
import FooterComponent from "../FooterComponent.vue";
export default {
  components: { FooterComponent, NavbarComponent },

};
</script>

<style scoped>
::v-deep .btn-danger{
  background-color: #dc3545;
}
::v-deep .btn-danger:hover:not(:disabled){
  background-color: #c82333;
}
::v-deep .btn-primary{
  background-color: #007bff;
}
::v-deep .btn-primary:hover:not(:disabled){
  background-color: #005dc0;
}
</style>