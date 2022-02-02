<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  created() {
    this.$store.commit('setAuthUser', this.user);
  },
};
</script>

<style>
</style>