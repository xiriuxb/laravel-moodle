<template>
<div id="adminCourses">
  <h1>
      Administración de cursos (Local)
  </h1>
  <p>En este apartado simplemente puede observar la información básica de los cursos, además de establecer como destacado. 
    Si desea modificar la información de los cursos debe hacerlo desde Moodle.
  </p>
  <loading-component v-if="loadingInit"></loading-component>
  <div class="container" v-else>
    <loading-component :backgroundColor="'rgb(0 0 0 / 29%)'" :width="'100%'" :height="'100%'" v-if="setting"></loading-component>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Fecha</th>
          <th scope="col">Usuario</th>
          <th scope="col">Curso</th>
          <th scope="col">Pago</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="matricula in matriculas" v-bind:key="matricula.id">
          <td scope="row">{{ matricula.created_at }}</td>
          <td>
            {{ matricula.usuario_id }}
          </td>
          <td>{{ matricula.curso_moodle_id }}</td>
          <td>{{ matricula.pago_id }}</td>
          <td>
            <button  :disabled="setting">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="setting"></span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item" :class="!link.active ? link.url == null ? 'page-item disabled' : 'page-item' : 'page-item active'"
          v-for="link in linksToPages" :key="link.label">
          <a class="page-link" href="#" @click="loadCourses(link.url)" tabindex="-1">
            <div v-html="link.label"></div>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>
</template>

<script>
import LoadingComponent from '../../components/LoadingComponent.vue';
import Admin from '../views/Admin.vue';

export default {
  layout: Admin,
  components: {
    LoadingComponent
  },
  data(){
    return{
      matriculas: [],
      loadingInit: true,
      setting: false,
      loading:false,
      linksToPages: [],
      searchTerm: "",
      baseUrl: '/api/admin/matriculas-pendientes',
    }
  },
  created(){
    this.loadMatriculas();
  },
  methods:{
    loadMatriculas(url=this.baseUrl){
        this.setting = true;
        axios.get(url).then(response => {
          console.log(response.data);
          this.setting = false;
          this.loadingInit = false;
          this.linksToPages = response.data.links;
          this.matriculas = response.data.matriculas;
        }).catch(
          error => {
            this.$toast.open({
              message: 'Error al cargar',
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
.container{
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
}
</style>