<template>
  <div id="forgot-password">
    <AppHead :title="'Contraseña Olvidada'" />
    <div class="d-flex justify-content-center">
      <div class="container">
        <h3>¿Olvidó su contraseña?</h3>
        <div id="alert" v-if="errorMessage || successMessage" class="alert"
          v-bind:class="{ 'alert-danger': errorMessage, 'alert-success': successMessage }">
          {{ this.errorMessage + this.successMessage }}
        </div>
        <form class="form-group" @submit.prevent="sendRequest" v-if="!this.stat">
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
            placeholder="Correo electrónico" v-model="form.email" required :disabled="form.processing"/>
          <button type="submit" class="btn btn-primary" :disabled="form.processing">
            <span class="spinner-border spinner-border-sm" v-if="form.processing" role="status"
              aria-hidden="true"></span>
            Enviar
          </button>
        </form>
        <div>
          O <inertia-link :href="route('ingreso')">
            <span class="text-[#158CBA]">Ingrese al sistema aquí</span>
          </inertia-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from '../views/Home.vue';
export default {
  layout: Home,
  data() {
    return {
      form: this.$inertia.form({
        email: "",
      }),
      stat: false,
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    sendRequest() {
      this.errorMessage = "";
      this.visible = true;
      this.form.post(this.route('password.email'), {
        onError: (error) => {
          this.errorMessage = error[0];
          this.$toast.open({
            message: this.$page.props.errors.message,
            type: 'error',
          });
          this.stat = false;
          this.form.reset();
        },
        onSuccess: () => {
          this.successMessage = this.$page.props.flash.message;
          this.stat = true;
          this.form.reset();
        },
        onFinish: () => {
          this.errorMessage = this.$page.props.errors.message ? this.$page.props.errors.message : "";
        }
      });
    },
  },
};
</script>

<style scoped>
#forgot-password {
  width: 100%;
  height: 400px;
  background-color: #fff;
  padding-top: 100px;
  flex-direction: column;
}

#forgot-password .container {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#forgot-password .container h3 {
  font-size: 30px;
  font-weight: bold;
  color: #000;
}

#forgot-password .container button {
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0 15px 0;
}
</style>