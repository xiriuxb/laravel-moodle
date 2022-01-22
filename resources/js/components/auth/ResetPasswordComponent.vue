<template>
  <div id="reset-password">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="container" v-if="message">
          <div class="alert alert-success" role="success" >
            {{message}}
          </div>
          <router-link :to="{name:'ingreso-view'}">
            <button class="btn btn-primary">Ingresar</button>
          </router-link>
        </div>
        <div class="card" v-if="!message">
          <div class="card-header">Restaurar Contraseña</div>
          <div class="card-body">
            <div class="alert alert-danger" role="alert" v-if="errors.email">
              {{ errors.email }} Por favor vuelva a repetir el proceso.
            </div>
            <form @submit.prevent="sendRequest()" v-if="!errors.email">
              <input type="hidden" name="token" />

              <div class="form-group row">
                <label
                  for="email"
                  class="col-md-4 col-form-label text-md-right"
                >
                  Dirección e-mail</label
                >

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    required
                    autocomplete="email"
                    v-model="form.email"
                    :disabled="true"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="password"
                  class="col-md-4 col-form-label text-md-right"
                  >Contraseña</label
                >

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    autocomplete="new-password"
                    v-model="form.password"
                    autofocus
                  />

                  <div
                    class="alert alert-danger"
                    role="alert"
                    v-if="errors.password"
                  >
                    <li v-for="error in errors.password" :key="error">
                      {{ error }}
                    </li>
                  </div>
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="password-confirm"
                  class="col-md-4 col-form-label text-md-right"
                  >Confirmar contraseña</label
                >

                <div class="col-md-6">
                  <input
                    id="password-confirm"
                    type="password"
                    class="form-control"
                    name="password_confirmation"
                    v-model="form.password_confirmation"
                    required
                    autocomplete="new-password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    :disabled="visible"
                  >
                    <span
                      class="spinner-border spinner-border-sm"
                      v-if="visible"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Restaurar
                  </button>
                </div>
              </div>
            </form>
          </div>
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
        token: String,
        email: this.$route.query.email,
        password: "",
        password_confirmation: "",
      },
      errors: [],
      message: "",
      visible: false,
    };
  },
  methods: {
    sendRequest() {
      (this.visible = true),
        (this.errors = []),
        axios
          .post("/api/reset-password", this.form)
          .then((response) => {
            this.message = response.data.status;
          })
          .catch((error) => {
            this.visible = false;
            this.errors = error.response.data.errors;
          });
    },
  },
  mounted() {
    this.$store.commit("setResetToken", window.resetPasswordToken);
    this.form.token = this.$store.state.token;
  },
};
</script>

<style scoped>
#reset-password {
  width: 100%;
  min-height: 480px;
  background-color: #fff;
  padding-top: 100px;
  flex-direction: column;
  margin-bottom: 1rem;
}

#reset-password .container {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.alert.alert-danger {
  top: 0.2rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  margin-bottom: 0;
}

</style>