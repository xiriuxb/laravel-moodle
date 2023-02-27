<template>
  <div id="adminMatriculasPendientes" :class="{ 'disabled': loading }">
    <AppHead :title="'Admin | Matriculas Pendientes'" />
    <loading-component :backgroundColor="'rgb(0 0 0 / 29%)'" :width="'100%'" :height="'100%'" :position="'fixed'"
      v-if="loading">
    </loading-component>
    <h2>
      Administración de matrículas pendientes
    </h2>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Usuario</th>
            <th>Curso</th>
            <th>Pago</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="matricula in matriculas" v-bind:key="matricula.id">
            <td>{{ matricula.pago.created_at.substring(0, matricula.pago.created_at.indexOf("T")) }}</td>
            <td>
              {{ matricula.user.name + ' ' + matricula.user.last_name }}
            </td>
            <td>{{ matricula.cursos.fullname }}</td>
            <td>($ {{ matricula.pago.amount }})
              <a href="#" class="text-cyan-600 hover:underline cursor-pointer"
                @click="openModalImage(matricula.pago.id)">Ver</a>
              </td>
            <td>
              <div class="d-flex flex-row">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                <button class="btn btn-outline-primary btn-sm" title="Aceptar"
                  @click.prevent="updateMatricula(matricula.id, 1)">
                  <box-icon name="check" class="fill-blue-800"></box-icon>
                </button>
                <button class="btn btn-outline-danger btn-sm" title="Rechazar"
                  @click.prevent="updateMatricula(matricula.id,2)">
                  <box-icon name='x' class="fill-red-600"></box-icon>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ver-pago-modal v-if="showPagoModal" @close="showPagoModal = false" :pago_id="pagoSeleccionado"></ver-pago-modal>
  </div>
</template>

<script>
import LoadingComponent from '../../components/LoadingComponent.vue';
import Admin from '../views/Admin.vue';
import VerPagoModal from '../Admin/Modals/VerPagoModal.vue';

export default {
  layout: Admin,
  components: {
    LoadingComponent,
    VerPagoModal
  },
  data() {
    return {
      pagoSeleccionado: null,
      showPagoModal: false,
      matriculas: [],
      loading: true,
      searchTerm: "",
    }
  },
  created() {
    this.loadMatriculas();
  },
  methods: {
    loadMatriculas() {
      this.loading = true;
      axios.get(this.route('admin.matricula-pendiente.index'))
        .then(({ data }) => {
          this.linksToPages = data.links;
          this.matriculas = data.matriculas;
        })
        .catch(
          () => {
            this.$toast.open({
              message: 'Error al cargar',
              type: 'error'
            });
          }
        )
        .finally(() => { this.loading = false });
    },
    openModalImage(seleccionado) {
      this.pagoSeleccionado = seleccionado;
      this.showPagoModal = true;
    },
    updateMatricula(matricula_id, estado) {
      this.loading = true;
      axios.put(this.route('admin.matricula-pendiente.index', { matricula_id: matricula_id, estado: estado }))
        .then(({data}) => {
          this.$toast.open(data.matricula);
        }).catch(
          () => {
            this.$toast.open({
              message: 'Error al actualizar',
              type: 'error'
            });
          }
        )
        .finally(() => {
          this.loading = false;
          this.loadMatriculas();
        });
    },
  },
}
</script>

<style scoped>
button:hover box-icon {
  fill: white
}
</style>