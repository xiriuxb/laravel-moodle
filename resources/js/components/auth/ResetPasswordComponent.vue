<template>
  <div id="reset-password">
    <div class="row justify-content-center">
        <div class="col-md-8">

      <div class="card">
        <div class="card-header">Reset Password</div>
        <div class="card-body">
          <form @submit.prevent="sendRequest()">
            <input type="hidden" name="token" />

            <div class="form-group row">
              <label for="email" class="col-md-4 col-form-label text-md-right">
                E-mail address</label
              >

              <div class="col-md-6">
                <input
                  id="email"
                  type="email"
                  class="form-control @error('email') is-invalid @enderror"
                  name="email"
                  required
                  autocomplete="email"
                  v-model="form.email"
                  autofocus
                />

                <span class="invalid-feedback" role="alert">
                  <strong>{{ $message }}</strong>
                </span>
              </div>
            </div>

            <div class="form-group row">
              <label
                for="password"
                class="col-md-4 col-form-label text-md-right"
                >Password</label
              >

              <div class="col-md-6">
                <input
                  id="password"
                  type="password"
                  class="form-control @error('password') is-invalid @enderror"
                  name="password"
                  required
                  autocomplete="new-password"
                  v-model="form.password"
                />

                <span class="invalid-feedback" role="alert">
                  <strong>{{ $message }}</strong>
                </span>
              </div>
            </div>

            <div class="form-group row">
              <label
                for="password-confirm"
                class="col-md-4 col-form-label text-md-right"
                >Confirm Password</label
              >

              <div class="col-md-6">
                <input
                  id="password-confirm"
                  type="password"
                  class="form-control"
                  name="password_confirmation"
                  v-model="form.password_confirmation"
                  required
                  autocomplete="new-password"
                />
              </div>
            </div>

            <div class="form-group row mb-0">
              <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">
                  Reset Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
        </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      form: {
        token: String,
        email: this.$route.query.email,
        password: "",
        password_confirmation: "",
      },
      message: "",
    };
  },
  methods:{
    sendRequest(){
      axios.post("/api/reset-password",this.form).then(response=>{
        console.log(response);
      }).catch(error=>{
        console.log(error);
      });
    }
  },
  mounted(){
    this.$store.commit("setResetToken", window.resetPasswordToken);
    this.form.token = this.$store.state.token;
    console.log(this.$store.state.token);
    console.log(this.$route.query.email);
  }
};
</script>

<style>
#reset-password {
  width: 100%;
  height: 480px;
  background-color: #fff;
  padding-top: 100px;
  flex-direction: column;
}

#reset-password .container {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>