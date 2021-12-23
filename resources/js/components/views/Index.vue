<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('setAuthUser', window.auth_user);
  },
};
</script>

<style>
</style>