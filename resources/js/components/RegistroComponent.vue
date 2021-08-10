<template>
  <section class="signup container-fluid d-flex">
    <div class="signup-content">
      <form id="signup-form" class="signup-form">
        <h2 class="form-title">Regístrese</h2>
        <div class="row form-group">
          <div class="col">
            <input v-model="form.name" type="text" class="form-input" name="name"
              id="name" placeholder="Su nombre" />
               <span class="invalid-feedback" role="alert">
                                        <strong>Nel</strong>
                                    </span>
          </div>
          <div class="col">
            <input  v-model="form.last_name"
              type="text" class="form-input" name="last_name"
              id="last_name" placeholder="Su apellido"/>
          </div>
        </div>
        <div class="form-group">
          <input  v-model="form.email"
            type="email"
            class="form-input"
            name="email"
            id="email"
            placeholder="Su email"
          />
        </div>
        <div class="form-group">
          <input  v-model="form.password"
            type="password"
            class="form-input"
            name="password"
            id="password"
            placeholder="Password"
            ref="password"
          />
          <span
            toggle="#password"
            class="zmdi zmdi-eye field-icon toggle-password"
          ></span>
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-input"
            name="password_confirmation"
            id="password_confirmation"
            v-model="form.password_confirmation"
            placeholder="Repeat your password"
            data-vv-as="password"
          />
        </div>
        <div class="row form-group">
            <country-select class="col form-input" name="country" id="country"
             v-model="form.country" :country="form.country" placeholder="País"
             :whiteList='["EC"]' :countryName='true' :autocomplete='true' :removePlaceholder='true'/>
            <region-select class="col form-input" v-model="form.region" :country="form.country" 
            :region="form.region" defaultRegion='EC' :regionName='true' name="region" id="region"  />
        </div>
        <div class="form-group">
          <input
          @click.prevent="saveFrom"
            type="submit"
            name="submit"
            id="submit"
            class="form-submit"
            value="Sign up"
          />
        </div>
      </form>
      <p class="loginhere">
        Have already an account ?
        <a href="#" class="loginhere-link">Login here</a>
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
        if(response.status === 201) {
               this.$router.push({ path : '/registro-exitoso' });
            }
        
      }).catch((err) => {
        this.errors = err.response.data.errors;
      });
    }
  }
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
.form-input {
  width: 100%;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
  padding: 8px 10px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
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
</style>