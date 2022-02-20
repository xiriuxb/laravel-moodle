<template>
  <div>
      <h1>
      Administración de cursos (Moodle)
  </h1>
  <p>En este apartado simplemente puede observar la información básica de los cursos de Moodle, además de importarlos a la base de la app Octavario. 
    Si desea modificar la información de los cursos debe hacerlo desde Moodle.
  </p>
  <loading-component v-if="loading"></loading-component>
  <div class="container" v-else>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Nombre Corto</th>
          <th scope="col">Importar?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" v-bind:key="course.shortname">
          <td>
            {{ course.fullname }}
          </td>
          <td>{{ course.shortname }}</td>
          <td>
            <button @click.prevent="importar(course.shortname)" :disabled="setting"
              :class="course.destacado == 1 ? 'btn btn-outline-danger btn-acction' : 'btn btn-outline-primary btn-acction'">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="setting" ></span>
              Importar/Actualizar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import LoadingComponent from '../../components/LoadingComponent.vue';
export default {
  components: {
    LoadingComponent
  },
  data(){
    return{
      courses: [],
      loading: true,
      setting: false,
    }
  },	
  created(){
    this.loadCourses();
  },
  methods:{
    loadCourses(){
      axios.get('/api/admin/cursos-moodle').then(response => {
        this.courses = response.data.data;
        this.loading = false;
      }).catch(
        error => {
          this.$toast.open({
            message: 'Error al cargar los cursos',
            type: 'error',
            duration: 5000
          });
        }
      );
    },
    importar(id){
      this.setting = true;
      axios.post('/api/admin/cursos-local/importar',{shortname:id}).then(response => {
        this.setting = false;
        this.$toast.open({
          message: 'Curso importados correctamente',
          type: 'success',
          duration: 5000
        });
      }).catch(
        error => {
          this.setting = false;
          this.$toast.open({
            message: 'Error al importar el curso',
            type: 'error',
            duration: 5000
          });
        }
      );
    }
  },
}
</script>

<style>

</style>