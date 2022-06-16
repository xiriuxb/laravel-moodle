<template>
  <div>
    <navbar-component></navbar-component>
      <slot />
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavbarComponent from "../NavbarComponent.vue";
import FooterComponent from "../FooterComponent.vue";
export default {
  components: { FooterComponent, NavbarComponent},
  created() {
    if(this.$page.props.errors.message) {
      this.$toast.open({
        message: this.$page.props.errors.message,
        type: 'error',
      });
    }
  },
};
</script>

<style scoped>
</style>