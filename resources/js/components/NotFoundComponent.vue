<template>
  <div id="not-found" class="h-screen">
    <AppHead :title="'No Encontrado'" />
    <div class="relative top-1/3">
      <h1 class="text-8xl font-bold text-blue-900">404</h1>
      <h2 class="text-3xl font-bold">Página no encontrada</h2>
      <p>La página que estás buscando no existe o no está disponible.</p>
      <inertia-link as='button'
        class="items-center font-bold w-full px-3 py-2 my-3 text-lg text-white border-2 border-orange-400 bg-[#002e45ab] rounded-md sm:mb-0 hover:bg-[#002e45] sm:w-auto"
        :href="route('home')">Volver al inicio</inertia-link>
    </div>
  </div>
</template>

<script>
import Home from './views/Home.vue';

export default {
  layout: Home,
}
</script>

<style scoped>
#not-found {
  text-align: center;
}
</style>