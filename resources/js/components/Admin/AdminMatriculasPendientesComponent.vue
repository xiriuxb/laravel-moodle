<template>
  <div id="adminMatriculasPendientes">
    <Head title="Admin | Matriculas Pendientes" />
    <h2>
      Administración de matrículas pendientes
    </h2>
    <loading-component v-if="loadingInit"></loading-component>
    <div class="container" v-else>
      <loading-component :backgroundColor="'rgb(0 0 0 / 29%)'" :width="'100%'" :height="'100%'" :position="'fixed'" v-if="setting">
      </loading-component>
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
            <td>({{ matricula.pago.amount }})<a href="#" class="text-cyan-600 hover:underline cursor-pointer"
                @click="openModalImage(matricula.pago.id)">Ver</a></td>
            <td>
              <div class="d-flex flex-row">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="setting"></span>
                <button class="btn btn-outline-primary btn-sm" tooltip="Aceptar" @click.prevent="updateMatricula(matricula.id, 1)">
                  <box-icon name="check" class="fill-blue-800"></box-icon>
                </button>
                <button class="btn btn-outline-danger btn-sm" tooltip="Rechazar" @click.prevent="updateMatricula(matricula.id,2)">
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
      loadingInit: true,
      setting: false,
      searchTerm: "",
      baseUrl: '/api/admin/matriculas-pendientes',
    }
  },
  created() {
    this.loadMatriculas();
  },
  methods: {
    loadMatriculas(url = this.baseUrl) {
      this.loadingInit = true;
      axios.get(url).then(response => {
        console.log(response.data);
        this.loadingInit = false;
        this.linksToPages = response.data.links;
        this.matriculas = response.data.matriculas;
      }).catch(
        error => {
          this.loadingInit = false;
          this.$toast.open({
            message: 'Error al cargar',
            type: 'error',
            duration: 5000
          });
        }
      );
    },
    openModalImage(seleccionado) {
      this.pagoSeleccionado = seleccionado;
      this.showPagoModal = true;
    },
    updateMatricula(id, estado) {
      this.setting = true;
      let url = this.baseUrl + '/'+ id + '/' + estado;
      axios.put(url).then(response => {
        this.setting = false;
        this.$toast.open({
          message: response.data.matricula,
          type: 'success',
          duration: 5000
        });
        this.loadMatriculas();
      }).catch(
        this.setting = false,
        error => {
          this.$toast.open({
            message: 'Error al actualizar',
            type: 'error',
            duration: 5000
          });
        }
      );
    },
  },
}
</script>

<style scoped>
#adminCourses {
  padding: 1rem;
}

button:hover box-icon {
  fill: white
}
</style>