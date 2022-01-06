<template>
  <div class="container">
    <div>
      <div class="card-body">
        <form autocomplete="off" id="login-form" @submit.prevent="loginForm()">
          <!--@csrf-->
      <div class="alert alert-danger" role="alert" v-if="error">
        {{error}}
      </div>
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

          <div class="form-group row mb-0">
            <button type="submit" class="btn btn-submit" id="submit">
              Ingresar
            </button>
          </div>
          <a class="btn btn-link" href=""> ¿Olvidó su password? </a>
        </form>
      </div>
      <hr class="line" />
      <div class="container">
        <button class="btn btn-secondary" id="registro-btn" v-on:click="registerBtn">Regístrese</button>
      </div>
      <div class="container">
        <button class="btn btn-warning" id="cursos-btn"  v-on:click="coursesBtn">
          Ingrese a los cursos
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnMsg: "Ingresar",
      form: {
        email: "",
        password: "",
        remember:false,
      },
      error: "",
    };
  },
  methods: {
    loginForm() {
      this.error = "";
      this.disableBtnSubmit(true);
      axios
        .post("api/vuelogin", this.form)
        .then((response) => {
          if (!response.data.success) {
            //this.$router.push({ path: "/" });
            this.error = response.data.message;
            this.disableBtnSubmit(false,this.btnMsg);
          } else {
            window.location.href = "/";
          }
        })
        .catch((err) => {});
    },
    disableBtnSubmit(value, texto) {
      const button = document.getElementById("submit");
      button.disabled = value;
      if (value) {
        this.btnText = "";
      } else {
        this.btnText = texto;
      }
    },
    registerBtn(){
      window.location.href = "/";
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