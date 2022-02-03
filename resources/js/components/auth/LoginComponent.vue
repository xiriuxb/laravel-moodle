<template>
  <div class="container">
    <div>
      <div class="card-body">
      <div class="alert alert-danger" role="alert" v-if="error">
        {{error}}
      </div>
        <form v-if="!this.$store.getters.isLoggedIn" autocomplete id="login-form" @submit.prevent="loginForm()">
          <!--@csrf-->
          <input type="hidden" name="_token" value=window.window.Laravel.csrfToken v-model="form.token">
          <div class="form-group row">
            <label for="email" class="text-md-right">E-Mail</label>
            <input
              id="email"
              type="email"
              class="form-control"
              name="email"
              v-model="form.email"
              required
              autofocus
              autocomplete="email"
            />
          </div>

          <div class="form-group row">
            <label for="password" class="text-md-right">Contraseña</label>
            <input
              id="password"
              type="password"
              class="form-control @error('password') is-invalid @enderror"
              name="password"
              v-model="form.password"
              required
            />
          </div>

          <div class="form-group row">
            <div>
              <div class="form-check">
                <label for="remember">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="remember"
                    id="remember"
                    v-model="form.remember"
                    
                  />
                Recuérdame
                </label>
              </div>
            </div>
          </div>

          <div class="form-group row mb-0" v-if="!this.$store.getters.isLoggedIn">
            <button type="submit" class="btn btn-submit" id="submit" :disabled="loading">
              <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Ingresar
            </button>
          </div>
        </form>
        <router-link  v-if="!this.$store.getters.isLoggedIn" :event="!loading ? 'click' : ''" :to="{name:'forgot-password'}">
            <button class="btn btn-link" :disabled="loading">
              ¿Olvidó su contraseña?
            </button>
        </router-link>
      </div>
      <hr class="line"/>
      <div class="container">
        <router-link :to="{name:'home-component'}">
          <button :disabled="loading" class="btn btn-secondary" id="registro-btn" v-if="!this.$store.getters.isLoggedIn">
            Regístrese</button>
        </router-link>
      </div>
      <div class="container">
        <button :disabled="loading" class="btn btn-warning" id="cursos-btn"  v-on:click="coursesBtn">
          Ingrese a los cursos
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Index from '../views/Index.vue';
export default {
  components: { Index },
  data() {
    return {
      form: {
        email: "",
        password: "",
        remember:false,
        token:'',
      },
      error: "",
      loading:false,
    };
  },
  mounted() {
    console.log(window.window.Laravel.csrfToken);
    console.log(this.$store.getters.isLoggedIn);
  },	
  methods: {
    async loginForm() {
      this.error = "";
      this.loading = true;
      await axios.get('/sanctum/csrf-cookie');
      await axios
        .post("/vuelogin", this.form)
        .then((response) => {
          console.log(response.data)
          this.$toast.open({message:'Bienvenido', type:'info',position:'top',duration:4000});
          this.$router.go({ name: "home-component" });
        })
        .catch((err) => {
          console.log(err)
          this.error = err.response.data !=null ?  err.response.data.message: err;
          this.loading = false;
        });
    },
    coursesBtn(){
      window.location.href = "https://www.academia.octavario.org/login/";
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
  .line,
  .signInForm {
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
.md-form {
  margin-top: 0;
  margin-bottom: 0;
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