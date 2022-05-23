<template>
  <!-- Forgot password  VUE component -->
  <div id="forgot-password">
    <div class="d-flex justify-content-center">
      <div class="container">
        <h3>¿Olvidó su contraseña?</h3>
        <div id="alert" v-if="errorMessage || successMessage" class="alert"
          v-bind:class="{ 'alert-danger': errorMessage, 'alert-success': successMessage }">
          {{ this.errorMessage + this.successMessage }}
        </div>
        <form class="form-group" @submit.prevent="sendRequest" v-if="!this.stat">
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
            placeholder="Correo electrónico" v-model="form.email" required />
          <button type="submit" class="btn btn-primary bg-sky-800" :disabled="form.processing">
            <span class="spinner-border spinner-border-sm" v-if="form.processing" role="status"
              aria-hidden="true"></span>
            Enviar
          </button>
        </form>
        <div>
          O <inertia-link :href="'/ingreso'">
            <a>Ingrese</a>
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
      this.visible = true;
      this.form.post('/api/forgot-password', {
        onError: (error) => {
          this.errorMessage = error[0];
          this.stat = false;
          this.form.reset();
        },
        onSuccess: page => {
          this.errorMessage = "";
          this.successMessage = this.$page.props.flash.message;
          this.stat = true;
          this.form.reset();
        },
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