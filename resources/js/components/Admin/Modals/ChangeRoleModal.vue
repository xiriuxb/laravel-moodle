<template>
<transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">
                  <strong>xD</strong>
                    <button class="btn" @click.prevent="$emit('close')">
                    <box-icon name='x'></box-icon>
                  </button>
                </slot>
              </div>
              <div class="modal-body">
                <slot name="body">
                  <div>
                    <p v-if="id">Usuario: <strong>{{id}}</strong> (Por favor, asegurese que sea el usuario correcto.)</p>
                  </div>
                  <div class="alert alert-danger" role="alert" v-if="errors.message">
                        {{ errors.message }}
                  </div>
                  <form class="card-bodys">
                    <div class="form-group">
                      <input v-model="form.password" type="password" class="form-control" id="inputPassword" placeholder="Escriba su contraseña">
                    </div>
                    <div class="form-group">
                      <select v-model="form.role" class="custom-select" :disabled="loading">
                        <option value="2">Administrador</option>
                        <option value="3">Usuario</option>
                      </select>
                    </div>
                  </form>
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  <button class="btn btn-primary" @click.prevent="changeRole()" :disabled="loading">
                    <span class="spinner-border spinner-border-sm" v-if="loading" role="status" aria-hidden="true"></span>
                    Aceptar</button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
export default {
  props:{
    id: {
      type: String,
      required: true
    }
  },
    methods: {
        async changeRole(){
          this.loading = true;
          this.errors = [];
          await axios.post('/api/admin/users/change-role', this.form).then(response => {
            console.log(response.data);
            this.loading = false;
            this.$toast.open({
              message: 'Se ha cambiado el rol del usuario',
              type: 'success',
              duration: 5000
            });
            this.$emit('close');
          }).catch(error => {
            this.loading = false;
            this.errors = error.response.data;
            console.log(error.response.data);
          })
        }
    },
    data() {
        return {
          form:{
            id: this.id,
            password: '',
            role: '',
          }, 
          errors:[],
          loading:false,
          oldRole: '',
        }
    },
    async created(){
      this.loading = true;
        await axios.get('/api/admin/users/get-user-role',{params:{id:this.id}}).then(response => {
            this.form.role = response.data.role;
            this.oldRole = response.data.role;
            this.loading = false;
        }).catch(error => {
            console.log(error);
        })
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
  width: 300px;
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