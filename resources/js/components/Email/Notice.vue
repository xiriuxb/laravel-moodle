<template>
<section>
  <div class="w-full relative h-screen" id="back">
    <div class="relative top-1/3 container">
      <h1 class="font-bold text-4xl text-blue-700">FELICITACIONES</h1>
      <hr />
      <p>Solo queda un paso más para poder acceder a nuestros cursos.</p>
      <p class="font-bold text-1xl py-2" >
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
      <div class="alert alert-danger" role="alert" v-if="$page.props.errors.message">
        {{$page.props.errors.message}}
      </div>
      <inertia-link
      as="button"
      method="POST"
        class="btn btn-primary"
        href="/email/verification-notification" >
        <span class="spinner-border spinner-border-sm mr-2" v-if="sending"></span>ReenviarS</inertia-link>
      <!-- <button class="btn btn-primary text-nowrap text-zinc-900" type="button" v-on:click="resend" :disabled='sending'>
        <span class="spinner-border spinner-border-sm mr-2" v-if="sending"></span>
        Reenviar
      </button> -->
      <p>Luego de reenviar deberá esperar 3 minutos antes de volverlo a enviar.</p>
    </div>
  </div>
</section>
</template>

<script>
import Home from '../views/Home.vue';
export default {
  layout: Home,
  props: {
    message: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      sending: false,
    };
  },	
  methods: {
    resend() {
      this.sending = true;
      this.message = "";
      axios.post("/api/email/verification-notification").then((response) => {
          this.sending = false;
          this.message = response.data.message;
          this.$toast.open({message: 'E-mail reenviado', type: "success",position: "top",});
      }).catch((err) => {
        this.message = err.status = 429 ? "Has excedido el límite de solicitudes" : "Error al reenviar el e-mail";
        this.$toast.open({message: this.message, type: "error",position: "top",});
        this.sending = true;
      });
    },
  },
};
</script>

<style scoped>
#back {
  background-image: url("/images/background.png");
}
</style>