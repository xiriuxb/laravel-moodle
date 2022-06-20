<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <strong>Opciones</strong>
              <button class="btn" @click.prevent="$emit('close')">
                <box-icon name='x'></box-icon>
              </button>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <div>
                <p v-if="userid">Usuario: <strong>{{ userid }}</strong> (Por favor, asegurese que sea el usuario correcto.)</p>
              </div>
              <div class="alert alert-danger" role="alert" v-if="errors.message">
                {{ errors.message }}
              </div>
              <form class="card-bodys">
                <div class="form-group">
                  <input v-model="form.password" type="password" class="form-control" id="inputPassword"
                    placeholder="Escriba su contraseña">
                </div>
                <div class="form-group">
                  <select v-model="form.role" class="custom-select" :disabled="loading">
                    <option v-for="role in roles" :value="role.name">{{ role.name }}</option>
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
  props: {
    userid: {
      type: String,
      required: true
    },
    roles: {
      type: Array,
      required: true
    }
  },
  methods: {
    async changeRole() {
      this.loading = true;
      this.errors = [];
      await axios.post('/api/admin/users/change-role', this.form).then(response => {
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
      })
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
    }
  },
  created() {
    this.loading = true;
    axios.get('/api/admin/users/get-user-role', { params: { id: this.userid } }).then(response => {
      this.form.role = response.data.role;
      this.oldRole = response.data.role;
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