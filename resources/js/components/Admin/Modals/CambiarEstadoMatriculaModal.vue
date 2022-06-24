<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <strong>Opciones</strong>
              <button class="btn" @click.prevent="$emit('close')" :disabled="loading">
                <box-icon name='x'></box-icon>
              </button>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <div>
                <h3>¿Está seguro que desea cambiar el estado de la matrícula?</h3>
                <h3>Estado actual: {{matricula.estado_matricula.nombre}}</h3>
              </div>
              <div class="alert alert-danger" role="alert" v-if="error">
                {{ error }}
              </div>
              <form class="card-bodys">
                <div class="form-group">
                  <input v-model="form.password" type="password" class="form-control" id="inputPassword"
                    placeholder="Escriba su contraseña">
                </div>
                <div class="form-group">
                  <select v-model="form.estado" class="custom-select" :disabled="loading">
                    <option v-for="estado in estados" :value="estado.id">{{ estado.nombre }}</option>
                  </select>
                </div>
              </form>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-primary" @click.prevent="changeEstado()" :disabled="loading">
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
    matricula: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      form: {
        id: this.matricula.id,
        password: '',
        estado: this.matricula.estado_matricula.id,
      },
      estados:[],
      error:'',
      loading: false,
    }
  },
  methods: {
    changeEstado() {
      this.loading = true;
      this.error = '';
      let url = '/api/admin/matriculas';
      axios.put(url,this.form).then(response => {
        this.loading = false;
        this.$toast.open({
          message: response.data.matricula,
          type: 'success',
          duration: 5000
        });
        this.$emit('close');
        this.$parent.reloadPagos();
      }).catch(
        error => {
          this.loading = false,
          console.log(error)
          this.error = error.response.data.message;
          this.$toast.open({
            message: 'Error al actualizar',
            type: 'error',
            duration: 5000
          });
        }
      );
    },
  },
  
  created() {
    this.loading = true;
    axios.get('/api/admin/matriculas/estados').then(response => {
      this.estados = response.data.estados;
      this.loading = false;
    }).catch(error => {
      this.loading = false;
      this.$toast.open({
        message: 'Error al cargar',
        type: 'error',
        duration: 5000
      });
    });
  },
};
</script>

<style scoped>

</style>