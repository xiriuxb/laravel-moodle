<template>
  <section class="container-fluid d-flex justify-content-center">
    <div class="signup-content">
      <form id="signup-form" class="signup-form">
        <h2 class="form-title">Regístrese</h2>
        <div class="row form-group">
          <div class="col">
            <label for="name">*Primer nombre</label>
            <input v-model="form.name" type="text" v-on:keypress="isLetter($event)" class="form-control" name="name"
              id="name" placeholder="Nombre" required autocomplete="first_name" maxlength="16"/>
              <div v-if="this.errors.name!=null" class="alert alert-danger">{{this.errors.name[0]}}</div>
          </div>
          <div class="col">
            <label for="last_name">*Primer apellido</label>
            <input  v-model="form.last_name"
              type="text" class="form-control" name="last_name"
              id="last_name" placeholder="Apellido" v-on:keypress="isLetter($event)"/>
              <div v-if="this.errors.last_name!=null" class="alert alert-danger">{{this.errors.last_name[0]}}</div>
          </div>
        </div>
        <div class="form-group">
          <label for="email">*Su email</label>
          <input  v-model="form.email"
            type="email"
            class="form-control"
            name="email"
            id="email"
            placeholder="user@example.com"
          />
          <div v-if="this.errors.email!=null" class="alert alert-danger">{{this.errors.email[0]}}</div>
        </div>
        <div class="form-group">
          <label for="password">*Contraseña</label>
          <input  v-model="form.password"
            type="password"
            class="form-control"
            name="password"
            id="password"
            placeholder="Mínimo 8 caracteres"
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
            placeholder="*Confirme la contraseña"
            data-vv-as="password"
          />
        </div>
        <div class="row form-group">
          <div class="col">
            <label for="country">*País</label>
            <country-select class="form-control" name="country" id="country"
             v-model="form.country" :country="form.country" placeholder="*País"
             :whiteList='["EC"]' :countryName='true' :autocomplete='true' :removePlaceholder='true'/>
          </div>
          <div class="col">
            <label for="region">*Provincia/región</label>
            <region-select class="col form-control" v-model="form.region" :country="form.country" 
            :region="form.region" defaultRegion='EC' :regionName='true' name="region" id="region" 
            placeholder="Provincia" />
            <div v-if="this.errors.region!=null" class="alert alert-danger">Seleccione una opción</div>
          </div>
        </div>
        <div class="hided">
          <div class="form-group" id="telefono">
              <label for="telephone">Teléfono</label>
              <div class="row">
                <p class="col">09-</p>
                <input @input="isNumber($event)" type="text" maxlength="8" class="col form-control" v-model="form.phone_number">
              </div>
              <div v-if="this.errors.phone_number!=null" class="alert alert-danger">{{this.errors.phone_number[0]}}</div>
          </div>
          <div class="form-group">
            <label for="fechaNacimiento">Fecha de nacimiento</label>
            <input type="date" class="form-control" placeholder="Fecha de nacimiento" v-model="form.birth_day">
            <div v-if="this.errors.birth_day!=null" class="alert alert-danger">{{this.errors.birth_day[0]}}</div>
          </div>
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
      <div id="requerido">*Requerido</div>
      <p class="loginhere">
        Tiene ya una cuenta?
        <a href="#" class="loginhere-link">Ingrese aquí</a>
      </p> 
    </div>
  </section>
</template>

<script scoped>


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
        phone_number:'',
        birth_day:'',
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
      let char = String.fromCharCode(e.keyCode);
      if(/^[ñA-Za-z]+$/.test(char)) return true; 
      else e.preventDefault(); // If not match, don't add to input text
    },
    isNumber(e){
      let char = String.fromCharCode(e.keyCode); 
      if(/^[0-9]/.test(char)) return true; 
      else e.preventDefault();
    }
  },
  
};
</script>

<style scoped>

section {
  display: block;
  position: relative;
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
#requerido{
  font-size: 14px;
  bottom: 3px;
  position: relative;
}
form label{
  padding-top: 0;
  font-size: 0.9em;
  margin: 0;
}
#telefono p.col{
  max-width: 40px;
  bottom: 0;
  top: 50%;
  transform: translateY(30%);
}
</style>