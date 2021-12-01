<template>
  <div class="container">
    <div>
      <div class="card-body">
        <form autocomplete="off" id="login-form" @submit.prevent="loginForm">
          <!--@csrf-->
          <div class="form-group row">
            <label for="email" class="text-md-right">E-Mail</label>
            <input
                id="email"
                type="email"
                class="form-control"
                name="email"
                v-model="form.email"
                required
                autocomplete="email"
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
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="remember"
                  id="remember"
                />
                Recuérdame
              </div>
            </div>
          </div>

          <div class="form-group row mb-0">
              <button type="submit" class="btn btn-submit">Ingresar</button>
          </div>
          <a class="btn btn-link" href="">
                ¿Olvidó su password?
              </a>
        </form>
      </div>
        <hr class="line">
        <div class="container">
          <button class="btn btn-secondary" id="registro-btn">Regístrese</button>
        </div>
        <div class="container">
          <button class="btn btn-warning" id="cursos-btn">Ingrese a los cursos</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form:{
        email:'',
        password:'',
      },
      errors:[]
    }
  },
  methods:{
    loginForm(){
      axios.post('api/vuelogin',this.form).then(() => {
        console.log("Loged");
        console.log(response)
      }).catch((err) => {
      });
    },
  },
};
</script>

<style scoped>

label{
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
@media (min-width: 768px){

    .line, .signInForm {
        width: 80%;
    }
    #cursos-btn{
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
.btn-submit{
  background-color: tomato;
  font-family:'Roboto',sans-serif;
  box-shadow: 0px 4px 7px #777;
  height: 60px;
}
.btn-submit:hover{
  background-color: #d44a0b;
}

</style>