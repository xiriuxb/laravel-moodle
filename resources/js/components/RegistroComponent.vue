<template>
  <section class="container-fluid d-flex justify-content-center">
    <div class="signup-content">
      <form autocomplete="off" id="signup-form" class="signup-form" @submit.prevent="saveFrom">
        <h2 class="form-title">Regístrese</h2>
        <div class="row" v-on:keypress="isLetter($event)">
          <div class="col compartido form-group">
            <label for="name">*Primer nombre</label>
            <input v-model="form.name" type="text" v-on:keypress="isLetter($event)" class="form-control" name="name"
              id="name" placeholder="Nombre" required autocomplete="first_name" maxlength="16"/>
              <div v-if="this.errors.name!=null" class="alert alert-danger">{{this.errors.name[0]}}</div>
          </div>
          <div class="col form-group" v-on:keypress="isLetter($event)">
            <label for="last_name">*Primer apellido</label>
            <input  v-model="form.last_name"
              type="text" class="form-control" name="last_name"
              id="last_name" placeholder="Apellido" v-on:keypress="isLetter($event)"/>
              <div v-if="this.errors.last_name!=null" class="alert alert-danger">{{this.errors.last_name[0]}}</div>
          </div>
        </div>
        <div class="form-group">
          <label for="email">*Dirección de e-mail</label>
          <input  v-model="form.email" required
          class="form-control"
            type="email"
            name="email"
            id="email"
            placeholder="user@example.com"
            label="Email"
          />
          <div v-if="this.errors.email!=null" class="alert alert-danger">{{this.errors.email[0]}}</div>
        </div>
        <div class="form-group">
          <label for="password">*Contraseña (Mínimo 8 caracteres)</label>
          <input  v-model="form.password" required
          class="form-control"
            type="password"
            name="password"
            id="password"
            ref="password"
          />
          <div v-if="this.errors.password!=null" class="alert alert-danger">{{this.errors.password[0]}}</div>
        </div>
        <div class="form-group">
          <label for="password-confirmation">*Confirme la contraseña</label>
          <input
          class="form-control"
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            v-model="form.password_confirmation"
            data-vv-as="password" required
          />
        </div>
        <!--
        <div class="row form-group">
          <div class="col compartido">
            <country-select class="form-control" name="country" id="country"
             v-model="form.country" :country="form.country" placeholder="*País" required
             :whiteList='["EC"]' :countryName='true' :autocomplete='true' :removePlaceholder='true'/>
          </div>
          <div class="col">
            <region-select class="form-control" v-model="form.region" :country="form.country" 
            :region="form.region" defaultRegion='EC' :regionName='true' name="region" id="region" 
            placeholder="*Provincia" />
            <div v-if="this.errors.region!=null" class="alert alert-danger">Seleccione una opción</div>
          </div>
        </div>
        <div class="row" v-if="this.form.region!=''">
          <div class="col form-group compartido" v-on:keypress="isNumber($event)" id="telefono">
              <label for="telephone">Teléfono</label>
              <div class="row">
                <div class="col" id="tlf09">09-</div>
                <input type="text" class="col form-control" maxlength="8" v-model="form.phone_number"/>
              </div>
              <div v-if="this.errors.phone_number!=null" class="alert alert-danger">{{this.errors.phone_number[0]}}</div>
          </div>
          <div class="col form-group">
            <label for="fechaNacimiento">Día de nacimiento</label>
            <input type="date" class="form-control" placeholder="Fecha de nacimiento" v-model="form.birth_day">
            <div v-if="this.errors.birth_day!=null" class="alert alert-danger">{{this.errors.birth_day[0]}}</div>
          </div>
        </div>
        -->
          <button
            type="submit"
            name="submit"
            id="submit"
            class="form-submit btn btn-submit"
            value="Registrar"
            role="button"
          >
          {{this.btnText}}
          <loading-component v-if="this.loading"></loading-component>
          </button>
      </form>
      <div id="requerido">*Requerido</div>
      <hr/>
      <p class="loginhere" id="registered">
        ¿Ya tiene una cuenta?
        <a href="#" class="loginhere-link">Ingrese aquí</a>
      </p>
    </div>
  </section>
</template>

<script scoped>
import LoadingComponent from '../components/LoadingComponent.vue'
export default {
  components:{LoadingComponent},
  data(){
    return{
      loading:false,
      btnText:"Registrarse",
      form:{
        name:'',
        last_name:'',
        email:'',
        password:'',
        password_confirmation:'',
      },
      errors:[]
    }
  },
  methods:{
    saveFrom(){
      this.disableBtnSubmit(true);
      axios.post('register',this.form).then(() => {
               this.$router.push({ path : '/registro-exitoso' });
               console.log("SIIUUUU")
      }).catch((err) => {
        if (err.response!= undefined && err.response.status==422) {
          this.errors = err.response.data.errors;
          this.disableBtnSubmit(false);
        }
        if(err.response!= undefined && err.response.status==500){
          this.disableBtnSubmit(false);
        }
      });
    },
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if(/^[áéíóúñA-Za-z]+$/.test(char)) return true; 
      else e.preventDefault(); // If not match, don't add to input text
    },
    isNumber(e){
      let char = String.fromCharCode(e.keyCode); 
      if(/^[0-9]/.test(char)) return true; 
      else e.preventDefault();
    },
    disableBtnSubmit(value){
      const button = document.getElementById('submit');
      button.disabled = value;
      if(value){
        this.loading=value;
        this.btnText = "";
      }else{
        this.loading=false; 
        this.btnText = "Registrarse";
      }
    }
  },
};
</script>

<style scoped>
section {
  display: block;
  position: relative;
}
label{
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
  font-family: montserrat;
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
.loginhere {
  margin: 0px;
}

div.col {
  padding: 0px;
}
.alert {
    position: relative;
    padding: 0.1rem 0.4rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    font-size: 0.7rem;
    margin-bottom: 2px;
}
#requerido{
  font-size: 14px;
  top: 3px;
  bottom: 3px;
  position: relative;
}

.hided{
  display: none;
}
.col.compartido{
    margin-right: 3px;
}
.md-form{
  margin-top: 0;
  margin-bottom: 0;
}
.form-control{
  border: 0;
  border-bottom: 1px solid #ced4da;
  border-radius: 0;
  padding-bottom: 1px;
  padding-top: 1px;
  height:calc(1.5em + .4rem);
}
.form-group{
  margin-bottom: 0.3rem;
}
#tlf09{
  max-width: 25px;
  padding-top: 3px;
}

.btn-submit{
  background-color: tomato;
  font-family:'Roboto',sans-serif;
  box-shadow: 0px 4px 7px #777;
  height: 60px;
}
.btn-submit:hover{
  background-color: #d44a0b;
}

::v-deep .lds-ring div {
  border-color: #fff transparent transparent transparent;
}
</style>