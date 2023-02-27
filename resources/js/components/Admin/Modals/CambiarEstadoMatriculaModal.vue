<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <strong>Opciones</strong>
              <button class="btn" @click.prevent="$emit('close')" :disabled="loading" title="Cerrar modal">
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
                  <label for="inputPassword">Contraseña:</label>
                  <input v-model="form.password" type="password" class="form-control" id="inputPassword" ref="inputPassword" spellcheck="false"
                    placeholder="Escriba su contraseña">
                </div>
                <div class="form-group">
                  <label for="selectEstado">Estado:</label>
                  <select v-model="form.estado" class="custom-select" :disabled="loading" id="selectEstado">
                    <option v-for="estado in estados" :key="estado.id" :value="estado.id">{{ estado.nombre }}</option>
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
      axios.put(this.route('admin.matriculas.update'),this.form)
      .then(({data}) => {
        this.$toast.open(data.matricula);
        this.$emit('close');
        this.$parent.reloadPagos();
      })
      .catch(
        (error) => {
          this.error = error.response.data.message;
          this.$toast.open({
            message: 'Error al actualizar',
            type: 'error',
          });
        }
      )
      .finally(()=>{this.loading = false});
    },
  },
  
  created() {
    this.loading = true;
    this.$nextTick(()=>{this.$refs.inputPassword.focus();});
    axios.get(this.route('admin.matriculas.estados'))
    .then(({data}) => {
      this.estados = data.estados;
      this.loading = false;
    })
    .catch(() => {
      this.$emit('close');
      this.$toast.open({
        message: 'Error al cargar',
        type: 'error',
      });
    });
  },
};
</script>

<style scoped>
</style>