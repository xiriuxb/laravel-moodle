<template>
  <div class="container-fluid" id="back">
    <div class="container" id="message">
      <h1>FELICITACIONES</h1>
      <hr />
      <p>Solo queda un paso más para poder acceder a nuestros cursos.</p>
      <p id="principal">
        Se ha enviado un correo de verificación al email con el que te
        registraste, por favor sigue los pasos indicados en el mismo.
      </p>
      <p>No te olvides de revisar la sección de correo no deseado.</p>
      <hr />
      <p>
        Si no le ha llegado el correo, lo ha perdido o ya no funciona puede
        volver a enviarlo.
      </p>
      <div class="alert alert-success" role="alert" v-if="message">
        {{message}}
      </div>
      <button class="btn btn-primary text-nowrap" type="button" v-on:click="resend">
        <span class="spinner-border spinner-border-sm mr-2" v-if="sending"></span>
        Reenviar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sending: false,
      message: '',
    };
  },	
  methods: {
    resend() {
      this.sending = true;
      this.message = "";
      axios.post("/api/email/verification-notification").then((response) => {
        if (response.data.status == 200) {
          this.sending = false;
          this.message = response.data.message;
        } else {
            this.message	="No se ha podido reenviar el correo de verificación."
          this.sending = false;
        }
        
      });
    },
  },
};
</script>

<style scoped>
#message {
  position: relative;
  top: 30%;
  margin-right: 50px;
}
#message h1 {
  font-family: montserrat;
  font-weight: 900;
}
#back {
  position: absolute;
  background-image: url("/images/background.png");
  width: 100%;
  height: 100%;
}
#back div {
  font-size: large;
}
#principal {
  font-size: large;
  font-weight: 700;
}
</style>