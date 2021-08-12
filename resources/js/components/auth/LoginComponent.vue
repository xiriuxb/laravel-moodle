<template>
  <div class="container">
    <div>
      <div class="card-body">
        <form method="POST" action="">
          <!--@csrf-->
          <div class="form-group row">
            <label for="email" class="text-md-right">E-Mail</label>
            <div>
              <input
                id="email"
                type="email"
                class="form-control"
                name="email"
                required
                autocomplete="email"
                autofocus
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="password" class="text-md-right">Contraseña</label>
            <div>
              <input
                id="password"
                type="password"
                class="form-control @error('password') is-invalid @enderror"
                name="password"
                required
                autocomplete="current-password"
              />
            </div>
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
            <div>
              <button type="submit" class="btn btn-primary">Ingresar</button>
              <a class="btn btn-link" href="">
                Olvidó su password
              </a>
            </div>
          </div>
        </form>
      </div>
        <hr class="line">
        <div class="container">
            <div class="container">
                <button class="btn btn-secondary" id="registro-btn">Regístrese</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import CaratulaComponent from "../CaratulaComponent.vue";
export default {};
</script>

<style>
label {
  padding-top: 20px;
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
}

.line {
    margin-bottom: 24px;
    width: 100%;
    display: flex;
    align-items: center;
    height: 1px;
    
}

</style>