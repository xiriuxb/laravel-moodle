<template>
  <section>
    <AppHead :title="'Aviso Email'"/>
    <div class="w-full relative h-screen" id="back">
      <div class="relative top-1/3 container">
        <h1 class="font-bold text-4xl text-blue-700">FELICITACIONES</h1>
        <hr />
        <p>Solo queda un paso más para poder acceder a nuestros cursos.</p>
        <p class="font-bold text-1xl py-2">
          Se ha enviado un correo de verificación al email con el que te
          registraste, por favor sigue los pasos indicados en el mismo.
        </p>
        <p>No te olvides de revisar la sección de correo no deseado.</p>
        <hr />
        <p>
          Si no le ha llegado el correo, lo ha perdido o ya no funciona puede
          volver a enviarlo.
        </p>
        <div class="alert alert-success" role="alert" v-if="$page.props.flash.message">
          {{ $page.props.flash.message }}
        </div>
        <div class="alert alert-danger" role="alert" v-if="$page.props.errors.message">
          {{ $page.props.errors.message }}
        </div>
        <button class="btn btn-primary" @click.prevent="sendEmail()" :disabled="sending">
          <span class="spinner-border spinner-border-sm" v-if="sending" role="status" aria-hidden="true"></span>
          Enviar correo de verificación
        </button>
        <p>Luego de reenviar deberá esperar 3 minutos antes de volverlo a enviar.</p>
      </div>
    </div>
  </section>
</template>

<script>
import Home from '../views/Home.vue';
export default {
  layout: Home,
  data() {
    return {
      sending: false,
    };
  },
  methods: {
    sendEmail() {
      this.$inertia.visit(
        '/email/verification-notification',
        {
          method: 'POST',
          onStart: () => {
            this.sending = true;
          },
          onFinish: () => {
            this.sending = false;
          }
        }
      );
    }
  }
};
</script>

<style scoped>
#back {
  background-image: url("/images/background.png");
}
</style>