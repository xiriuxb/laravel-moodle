<template>
  <div class="container">
    <div>
      <div class="card-body">
        <div class="alert alert-danger" role="alert" v-if="$page.props.errors.message">
          {{ $page.props.errors.message }}
        </div>
        <form autocomplete="true" id="login-form" @submit.prevent="loginForm()">
          <!--@csrf-->
          <input type="hidden" name="_token" v-model="form.token">
          <div class="form-group row">
            <label for="email" class="text-md-right">E-Mail</label>
            <input id="email" type="email" class="form-control" name="email" v-model="form.email" required autofocus
              autocomplete="email" />
          </div>

          <div class="form-group row">
            <label for="password" class="text-md-right">Contraseña</label>
            <input id="password" type="password" class="form-control"
              name="password" v-model="form.password" required />
          </div>

          <div class="form-group row">
            <div>
              <div class="form-check">
                <label for="remember">
                  <input class="form-check-input" type="checkbox" name="remember" id="remember"
                    v-model="form.remember" />
                  Recuérdame
                </label>
              </div>
            </div>
          </div>

          <div class="form-group row mb-0">
            <button type="submit" class="btn btn-submit" id="submit" :disabled="loading">
              <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Ingresar
            </button>
          </div>
        </form>
        <inertia-link :href="route('password.request')" :as="'button'" :disabled="loading">
          ¿Olvidó su contraseña?
        </inertia-link>
      </div>
      <hr class="line" />
      <div class="container">
        <a href="/#registro" class="btn btn-secondary w-full mb-1" :disabled="loading" :class="{disabled : loading}" id="registro-btn">
            Regístrese
        </a>
        <a :disabled="loading" class="btn btn-warning w-full" :class="{disabled : loading}" id="cursos-btn"
          :href="moodleUrl">
          Ingrese al aula virtual (Moodle)<box-icon name='link-external'></box-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$inertia.form({
        email: "",
        password: "",
        remember: false,
        token: '',
      }),
      error: "",
      loading: false,
    };
  },
  computed:{
    moodleUrl(){
      return `${this.$page.props.siteData.moodleUrl}login/index.php`;
    }
  },
  methods: {
    loginForm() {
      this.form.post(this.route('vuelogin'), {
        onStart: () => (this.loading = true),
        onFinish: () => (this.loading = false),
      });
    }
  },
};
</script>

<style scoped>
label {
  margin-bottom: -0.3rem;
}

form {
  display: block;
  margin-top: 0em;
}

.form-check {
  margin-top: 10px;
  margin-bottom: 10px;
}

button {
  width: 100%;
  margin-bottom: 20px;
}

@media (min-width: 768px) {

  .line {
    width: 80%;
  }

  #cursos-btn {
    display: none;
  }
}

.line {
  margin-bottom: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  height: 1px;
}

.form-control {
  border: 0;
  border-bottom: 1px solid #ced4da;
  border-radius: 0;
  padding-bottom: 1px;
  padding-top: 1px;
  height: calc(1.5em + 0.4rem);
}

.form-group {
  margin-bottom: 0.3rem;
}

.btn-submit {
  background-color: tomato;
  font-family: "Roboto", sans-serif;
  box-shadow: 0px 4px 7px #777;
  height: 60px;
}

.btn-submit:hover {
  background-color: #d44a0b;
}
</style>