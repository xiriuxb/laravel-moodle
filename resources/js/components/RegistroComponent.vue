<template>
  <section class="container-fluid d-flex justify-content-center">
    <div class="signup-content">
      <form id="signup-form" class="signup-form">
        <h2 class="form-title">Regístrese</h2>
        <div class="row form-group">
          <div class="col">
            <input v-model="form.name" type="text" v-on:keypress="isLetter($event)" class="form-control" name="name"
              id="name" placeholder="Su nombre" required autocomplete="name" />
              <div v-if="this.errors.name!=null" class="alert alert-danger">{{this.errors.name[0]}}</div>
          </div>
          <div class="col">
            <input  v-model="form.last_name"
              type="text" class="form-control" name="last_name"
              id="last_name" placeholder="Su apellido" v-on:keypress="isLetter($event)"/>
              <div v-if="this.errors.last_name!=null" class="alert alert-danger">{{this.errors.last_name[0]}}</div>
          </div>
        </div>
        <div class="form-group">
          <input  v-model="form.email"
            type="email"
            class="form-control"
            name="email"
            id="email"
            placeholder="Su email"
          />
          <div v-if="this.errors.email!=null" class="alert alert-danger">{{this.errors.email[0]}}</div>
        </div>
        <div class="form-group">
          <input  v-model="form.password"
            type="password"
            class="form-control"
            name="password"
            id="password"
            placeholder="Contraseña"
            ref="password"
          />
          <span
            toggle="#password"
            class="zmdi zmdi-eye field-icon toggle-password"
          ></span>
          <div v-if="this.errors.password!=null" class="alert alert-danger">{{this.errors.password[0]}}</div>
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            name="password_confirmation"
            id="password_confirmation"
            v-model="form.password_confirmation"
            placeholder="Confirme la contraseña"
            data-vv-as="password"
          />
        </div>
        <div class="row form-group">
            <country-select class="col form-control" name="country" id="country"
             v-model="form.country" :country="form.country" placeholder="País"
             :whiteList='["EC"]' :countryName='true' :autocomplete='true' :removePlaceholder='true'/>
            <region-select class="col form-control" v-model="form.region" :country="form.country" 
            :region="form.region" defaultRegion='EC' :regionName='true' name="region" id="region" 
            placeholder="Provincia/Región" />
            <div v-if="this.errors.region!=null" class="alert alert-danger">Seleccione una opción</div>
        </div>
        <div class="form-group">
          <input
          @click.prevent="saveFrom"
            type="submit"
            name="submit"
            id="submit"
            class="form-submit"
            value="Registrar"
          />
        </div>
      </form>
      <p class="loginhere">
        Tiene ya una cuenta?
        <a href="#" class="loginhere-link">Ingrese aquí</a>
      </p>
    </div>
  </section>
</template>

<script>
export default {

  data(){
    return{
      form:{
        name:'',
        last_name:'',
        email:'',
        password:'',
        password_confirmation:'',
        country:'',
        region:'',
      },
      errors:[]
    }
  },
  methods:{
    saveFrom(){
      axios.post('register',this.form).then(() => {
        console.log("SAved");
        console.log(status);
               this.$router.push({ path : '/registro-exitoso' });
               console.log("SIIUUUU")
      }).catch((err) => {
        if (err.response!= undefined && err.response.status==422) {
          this.errors = err.response.data.errors;
          console.log(this.errors)
        }
      });
    },
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode); // Get the character
      if(/^[ñA-Za-z]+$/.test(char)) return true; // Match with regex 
      else e.preventDefault(); // If not match, don't add to input text
    }
  },
  // validation for post from
  // Use Vue
  
};
</script>

<style>
div {
  display: block;
}
section {
  display: block;
}
@media screen and (max-width: 768px) {
  .container {
    width: calc(100% - 40px);
    max-width: 100%;
  }
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
  min-width: 250px;
}
.form-group {
  overflow: hidden;
  margin-bottom: 5px;
}

.form-submit {
  width: 100%;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
  padding: 17px 20px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  border: none;
  background-image: -moz-linear-gradient(to left, #74ebd5, #9face6);
  background-image: -ms-linear-gradient(to left, #74ebd5, #9face6);
  background-image: -o-linear-gradient(to left, #74ebd5, #9face6);
  background-image: -webkit-linear-gradient(to left, #74ebd5, #9face6);
  background-image: linear-gradient(to left, #74ebd5, #9face6);
}
.loginhere {
  margin: 0px;
}

div.col {
  padding: 0px;
}
.alert {
    position: relative;
    padding: 0.1rem 1rem;
    margin-bottom: 0.5rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    font-size: 0.7rem;
}
</style>