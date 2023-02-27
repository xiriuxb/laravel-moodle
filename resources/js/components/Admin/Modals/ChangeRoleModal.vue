<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <strong>Opciones</strong>
              <button class="btn" @click.prevent="$emit('close')" title="Cerrar modal">
                <box-icon name='x'></box-icon>
              </button>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <div>
                <p v-if="userid">Usuario: <strong>{{ userid }}</strong> (Por favor, asegurese que sea el usuario correcto.)</p>
              </div>
              <div class="alert alert-danger" v-if="!has_moodle_user">
                El usuario no tiene una cuenta en Moodle. <span><a href="#" @click="generarMoodle()">Generar</a></span>
              </div>
              <div class="alert alert-danger" role="alert" v-if="errors.message">
                {{ errors.message }}
              </div>
              <form class="card-bodys">
                <div class="form-group">
                  <label for="inputPassword">Contraseña:</label>
                  <input v-model="form.password" type="password" class="form-control" id="inputPassword" spellcheck="false" ref="inputPasswordRoleM"
                    placeholder="Escriba su contraseña">
                </div>
                <div class="form-group">
                  <label for="selectRol">Rol:</label>
                  <select v-model="form.role" class="custom-select" :disabled="loading" id="selectRol">
                    <option v-for="role in roles" :key="role.id" :value="role.name">{{ role.name }}</option>
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
import axios from 'axios';
export default {
  props: {
    userid: {
      type: String,
      required: true
    },
    roles: {
      type: Array,
      required: true
    },
  },
  methods: {
    async changeRole() {
      this.loading = true;
      this.errors = [];
      await axios.post(this.route('admin.user.change-role'), this.form)
      .then(() => {
        this.$toast.open('Se ha cambiado el rol del usuario');
        this.$emit('close');
      })
      .catch(error => {
        this.errors = error.response.data;
      })
      .finally(()=>{this.loading = false;})
    },
    generarMoodle(){
      this.loading = true;
      axios.post(this.route('admin.user.generate-moodle'),{username:this.userid})
      .then( () => {
        this.loading = false;
        this.has_moodle_user = true;
      })
      .catch(()=>{
        this.$toast.open({message:'No se envió el mail', type:'error'});
      });
    }
  },
  data() {
    return {
      form: {
        id: this.userid,
        password: '',
        role: '',
      },
      errors: [],
      loading: false,
      oldRole: '',
      has_moodle_user: true
    }
  },
  created() {
    this.loading = true;
    this.$nextTick(()=>{this.$refs.inputPasswordRoleM.focus();});
    axios.get(this.route('admin.user.role.get', { id: this.userid }) ).then(response => {
      this.form.role = response.data.role;
      this.oldRole = response.data.role;
      this.has_moodle_user = response.data.has_moodle_user;
      this.loading = false;
    }).catch(error => {
      this.loading = false;
      this.errors = error.response.data;
    });
  },
};
</script>

<style scoped>

</style>