<template>
  <div id="not-found">
      <div>
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>La página que estás buscando no existe o no está disponible.</p>
        <p>
          <router-link to="/">Volver al inicio</router-link>
        </p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #not-found {
        text-align: center;
    }
</style>