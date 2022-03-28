<template>
  <section class="container-fluid d-flex justify-content-center">
    <div class="signup-content shadow-lg shadow-indigo-500/40">
    <h2 class="font-bold">Regístrese</h2>
      <form
        autocomplete="off"
        id="signup-form"
        class="signup-form"
        @submit.prevent="saveFrom"
        preserve-scroll
      >
        
        <div class="row" v-on:keypress="isLetter($event)">
          <div class="col compartido form-group">
            <label for="name">*Primer nombre</label>
            <input
              v-model="form.name"
              type="text"
              v-on:keypress="isLetter($event)"
              class="form-control"
              name="name"
              id="name"
              placeholder="Nombre"
              required
              autocomplete="first_name"
              maxlength="16"
            />
            <div v-if="$page.props.errors.name" class="alert alert-danger">
              {{ $page.props.errors.name }}
            </div>
          </div>
          <div class="col form-group" v-on:keypress="isLetter($event)">
            <label for="last_name">*Primer apellido</label>
            <input
              v-model="form.last_name"
              type="text"
              class="form-control"
              name="last_name"
              id="last_name"
              placeholder="Apellido"
              v-on:keypress="isLetter($event)"
            />
            <div
              v-if="$page.props.errors.last_name"
              class="alert alert-danger"
            >
              {{ $page.props.errors.last_name }}
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="email">*Dirección de e-mail</label>
          <input
            v-model="form.email"
            required
            class="form-control"
            type="email"
            name="email"
            id="email"
            placeholder="user@example.com"
            label="Email"
          />
          <div v-if="$page.props.errors.email" class="alert alert-danger">
            {{ $page.props.errors.email }}
          </div>
        </div>
        <div class="form-group">
          <label for="password">*Contraseña (Mínimo 8 caracteres)</label>
          <input
            v-model="form.password"
            required
            class="form-control"
            type="password"
            name="password"
            id="password"
            ref="password"
          />
          <div v-if="$page.props.errors.password" class="alert alert-danger">
            {{ $page.props.errors.password }}
          </div>
        </div>
        <div class="form-group">
          <label for="password-confirmation">*Confirme la contraseña</label>
          <input
            class="form-control"
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            v-model="form.password_confirmation"
            data-vv-as="password"
            required
            preserve-scroll
          />
        </div>
        <button
          type="submit"
          name="submit"
          id="submit"
          class="form-submit btn btn-submit"
          value="Registrar"
          role="button"
           :disabled="form.processing"
          preserve-scroll
        >
          {{ this.btnText }}
          <loading-component v-if="this.loading" :position="'relative'"></loading-component>
        </button>
      </form>
      <div class="relative font-[14px] top-1 bottom-1">*Requerido</div>
      <hr />
      <p class="loginhere" id="registered">
        ¿Ya tiene una cuenta?
        <inertia-link :href="'/ingreso'">
          <a class="loginhere-link">Ingrese aquí</a>
        </inertia-link>
      </p>
    </div>
  </section>
</template>

<script scoped>
import LoadingComponent from "../components/LoadingComponent.vue";
export default {
  components: { LoadingComponent },
  data() {
    return {
      loading: false,
      btnText: "Registrarse",
      form: this.$inertia.form({
        name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
      }),
    };
  },
  methods: {
      saveFrom() {
        this.errors = {};
      this.form.post('/api/register',{
        onStart: () => (this.disableBtnSubmit(true)),
        onFinish: () => (this.disableBtnSubmit(false)),
    });
    },
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[áéíóúñA-Za-z]+$/.test(char)) return true;
      else e.preventDefault(); // If not match, don't add to input text
    },
    isNumber(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9]/.test(char)) return true;
      else e.preventDefault();
    },
    disableBtnSubmit(value) {
      const button = document.getElementById("submit");
      button.disabled = value;
      if (value) {
        this.loading = value;
        this.btnText = "";
      } else {
        this.loading = false;
        this.btnText = "Registrarse";
      }
    },
    loginBtn(){
      window.location.href = "/ingreso";
    }
  },
};
</script>

<style scoped>
section {
  display: block;
  position: relative;
}
label {
  margin-bottom: -0.3rem;
}
*,
::after,
::before {
  box-sizing: border-box;
}

form {
  display: block;
  margin-top: 0em;
}

h2 {
  line-height: 1.66;
  margin: 0;
  padding: 0;
  font-weight: 900;
  color: #222;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
}

.signup-content {
  background: #fff;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  padding: 20px 20px;
  max-width: 350px;
  min-width: 346px;
  margin: 30px 0;
}
.signup-content .row{
  margin-right:0;
  margin-left: 0;
}
.form-submit {
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  width: 100%;
}
.button-5:hover {
  background-position: -200%;
  transition: all 300ms ease-in-out;
}
.loginhere-link {
  margin: 0px;
  color:rgb(87, 110, 241);
  cursor: pointer;
}

div.col {
  padding: 0px;
}
.alert {
  position: relative;
  padding: 0.1rem 0.4rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-size: 0.7rem;
  margin-bottom: 2px;
}
#requerido {
  font-size: 14px;
  top: 3px;
  bottom: 3px;
  position: relative;
}
.col.compartido {
  margin-right: 3px;
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
#tlf09 {
  max-width: 25px;
  padding-top: 3px;
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

::v-deep .lds-ring div {
  border-color: #fff transparent transparent transparent;
}
</style>