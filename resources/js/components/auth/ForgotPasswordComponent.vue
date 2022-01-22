<template>
  <!-- Forgot password  VUE component -->
  <div id="forgot-password">
    <div class="d-flex justify-content-center">
      <div class="container">
        <h3>¿Olvidó su contraseña?</h3>
        <div
          id="alert"
          v-if="errorMessage"
          v-bind:class="{
            'alert alert-success': this.stat,
            'alert alert-danger': !this.stat,
          }"
        >
          {{ this.errorMessage }}
        </div>
        <form class="form-group" @submit.prevent="sendRequest" v-if="!this.stat">
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Correo electrónico"
            v-model="form.email"
            required
          />
          <button type="submit" class="btn btn-primary" :disabled="visible">
            <span
              class="spinner-border spinner-border-sm" v-if="visible"
              role="status" aria-hidden="true"></span>
            Enviar
          </button>
        </form>
        <div>
          O <router-link :to="{ name: 'ingreso-view' }">
          <a>Ingrese</a>
        </router-link>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
      },
      stat: false,
      errorMessage: "",
      visible: false,
    };
  },
  methods: {
    sendRequest() {
      this.visible = true;
      axios
        .post("api/forgot-password", this.form)
        .then((response) => {
          response.data.status ? (this.stat = true) : (this.stat = false);
          this.errorMessage = response.data[Object.keys(response.data)[0]];
          this.visible = false;
        })
        .catch((error) => {
          this.stat = false;
          this.visible = false;
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

loading-component {
  width: 20px;
  height: 20px;
}
</style>