<template>
<transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">
                    <strong>
                        Cambia tu contraseña
                    </strong>
                    <button class="btn" @click="$emit('close')">
                    <box-icon name='x'></box-icon>
                  </button>
                </slot>
              </div>
              <div class="modal-body">
                <div class="alert alert-danger" role="alert" v-if="errors.new_password">
                        {{ errors.new_password[0] }}
                </div>
                <slot name="body">
                  <form>
                    <div class="form-group">
                      <input type="password" class="form-control" v-model="form.passwordActual"
                      id="passwordActual" placeholder="Escriba su contraseñá actual" required >
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control" v-model="form.new_password"
                      id="new-password" placeholder="Escriba su nueva contraseña" required>
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control" v-model="form.new_password_confirmation" data-vv-as="new-password"
                      id="new-password-confirmation" placeholder="Escriba al contraseña otra vez" required>
                    </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="change()" :disabled="loading || form.passwordActual.length==0" >
                      <span class="spinner-border spinner-border-sm" v-if="loading" role="status" aria-hidden="true"></span>
                      Aceptar</button>
                  </form>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
export default {
    data(){
        return{
            form:{
                passwordActual:'',
                new_password:'',
                new_password_confirmation:''
            },
            loading:false,
            errors:[],
        }
    },
    methods: {
        async change(){
            this.loading = true;
            console.log(this.loading);
            this.errors = [];
            await axios.post('/change-password', this.form).then(response => {
                this.loading = false;
                this.$emit('close');
                this.$toast.open({message:response.data.message, type:'success',position:'top',duration:4000});
            }).catch(error => {
              if(error.response.data.errors){
                this.errors = error.response.data.errors;
              }else{
                this.$emit('close');
                this.$toast.open({message:error.response.data.message, type:'error',position:'top',duration:4000});
              }
              this.loading = false;
            });
            
        }
    },
    activated (){
        $('.btn').click(function(e){
            if(e.target === this){
                console.log('click');
                $emit('close');
            }
        });
    },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin:8px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>