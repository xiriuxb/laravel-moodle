<template>
  <div id="reset-password">
    <AppHead :title="'Reset Password'" />
    <div class="card-form">
      <div class="container" v-if="message">
        <div class="alert alert-success" role="success">
          {{ message }}
        </div>
        <inertia-link :as="'button'" :href="'/ingreso'">
          Ingresar
        </inertia-link>
      </div>
      <div class="card" v-if="!message">
        <div class="card-header">Restaurar Contraseña</div>
        <div class="card-body">
          <div class="alert alert-danger" role="alert" v-if="$page.props.errors.email">
            {{ $page.props.errors.email }} Por favor, vuelva a repetir el proceso.
          </div>
          <form @submit.prevent="sendRequest()" v-if="!$page.props.errors.email">
            <input type="hidden" name="token" />

            <div class="form-group row">
              <label for="email" class="col-md-4 col-form-label text-md-right">
                Dirección e-mail
              </label>

              <div class="col-md-6">
                <input id="email" type="email" class="form-control" name="email" required autocomplete="email"
                  :value="$page.props.emailRecive" :disabled="'disabled'" />
              </div>
            </div>

            <div class="form-group row">
              <label for="password" class="col-md-4 col-form-label text-md-right">Contraseña</label>
              <div class="col-md-6">
                <input id="password" type="password" class="form-control" name="password" required
                  autocomplete="new-password" v-model="form.password" autofocus />
                <div class="alert alert-danger" role="alert" v-if="$page.props.errors.password">
                  <p>
                    {{ $page.props.errors.password }}
                  </p>
                </div>
              </div>
            </div>

            <div class="form-group row">
              <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirmar contraseña</label>

              <div class="col-md-6">
                <input id="password-confirm" type="password" class="form-control" name="password_confirmation"
                  v-model="form.password_confirmation" required autocomplete="new-password" />
              </div>
            </div>

            <div class="form-group row mb-0">
              <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary" :disabled="form.processing">
                  <span class="spinner-border spinner-border-sm" v-if="form.processing" role="status"
                    aria-hidden="true"></span>
                  Restaurar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "../views/Home.vue";
export default {
  layout: Home,
  props: {
    tokenRecive: {
      type: String,
    },
    emailRecive: {
      type: String,
    },
  },
  data() {
    return {
      form: this.$inertia.form({
        token: this.tokenRecive,
        email: this.emailRecive,
        password: "",
        password_confirmation: "",
      }),
      errors: "",
      message: "",
      visible: false,
    };
  },
  methods: {
    sendRequest() {
      this.form.post("/reset-password", {
        onStart: () => {
          this.errors = "";
        },
        onSuccess: () => {
          this.message = this.$page.props.flash.message;
        },
        onError: (error) => {
          this.errors = error[0];
        },
      })
    },
  },
};
</script>

<style scoped>
#reset-password {
  padding-top: 100px;
  margin-bottom: 1rem;
}

#reset-password .card-form {
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
}

#reset-password .card-form .card {
  width: 500px;
  max-width: 500px;
}

.alert.alert-danger {
  top: 0.2rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  margin-bottom: 0;
}
</style>