<template>
<div>
  <h1>
      Administración de cursos (Local)
  </h1>
  <p>En este apartado simplemente puede observar la información básica de los cursos, además de establecer como destacado. 
    Si desea modificar la información de los cursos debe hacerlo desde Moodle.
  </p>
  <loading-component v-if="loading"></loading-component>
  <div class="container" v-else>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Nombre Corto</th>
          <th scope="col">Categoria</th>
          <th scope="col">Destacado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" v-bind:key="course.id">
          <th scope="row">{{ course.id }}</th>
          <td>
            {{ course.fullname }}
          </td>
          <td>{{ course.shortname }}</td>
          <td>{{ course.category }}</td>
          <td>{{ course.destacado == '1'?'Si':'No' }}</td>
          <td>
            <button @click.prevent="setDestacado(course.shortname, !course.destacado)" :disabled="setting"
              :class="course.destacado == 1 ? 'btn btn-outline-danger btn-acction' : 'btn btn-outline-primary btn-acction'">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="setting"></span>
              {{ course.destacado == 1 ? 'No Destacar':'Destacar' }}
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
      this.setting = true;
      axios.get('/api/admin/cursos-local').then(response => {
        this.setting = false;
        this.loading = false;
        this.courses = response.data.data;
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
    setDestacado(shortname,destacado){
      this.setting = true;
      axios.post('/api/admin/cursos-local/destacado', {id: shortname, destacado:destacado}).then(response => {
        this.setting = false;
        this.loadCourses();
      }).catch(
        error => {
          this.setting = false;
          this.$toast.open({
            message: 'Error',
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