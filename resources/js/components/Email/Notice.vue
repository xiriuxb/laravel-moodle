<template>
  <div class="container-fluid" id="back">
      <div class="container" id="message">
        <h1>
        FELICITACIONES
        </h1>
        <hr>
        <p>Solo queda un paso más para poder acceder a nuestros cursos.</p>
        <p id="principal">Se ha enviado un correo de verificación al email con el que te registraste, por favor sigue los pasos indicados en el mismo.</p>
        <p>No te olvides de revisar la sección de correo no deseado.</p>
      </div>
  </div>
</template>

<script>
export default {
  components: {  },

}
</script>

<style scoped>
#message{
  position: relative;
  top: 30%;
  margin-right: 50px;
}
#message h1{
  font-family: montserrat;
  font-weight: 900;
}
#back{
  position: absolute;
  background-image: url('/images/background.png');
  width: 100%;
  height: 100%;

}
#back div{
  font-size: large;
}
#principal{
  font-size: large;
    font-weight: 700;
}
</style>