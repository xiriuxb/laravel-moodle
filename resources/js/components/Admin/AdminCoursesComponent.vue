<template>
<div>
  <h1>
      Administración de cursos (Local)
  </h1>
  <p>En este apartado simplemente puede observar la información básica de los cursos, además de establecer como destacado. 
    Si desea modificar la información de los cursos debe hacerlo desde Moodle.
  </p>
  <div class="container">
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
            <button @click.prevent="setDestacado(course.shortname, !course.destacado)"
              :class="course.destacado == 1 ? 'btn btn-outline-danger btn-acction' : 'btn btn-outline-primary btn-acction'">
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
export default {
  data(){
    return{
      courses: [],
    }
  },
  created(){
    axios.get('/api/cursos-local').then(response => {
      this.courses = response.data.data;
    }).catch(
      error => {
        console.log(error);
      }
    );
  },
  methods:{
    loadCourses(){
      axios.get('/api/cursos-local').then(response => {
        this.courses = response.data.data;
      }).catch(
        error => {
          console.log(error);
        }
      );
    },
    setDestacado(shortname,destacado){
      axios.post('/api/cursos-local/destacado', {id: shortname, destacado:destacado}).then(response => {
        this.loadCourses();
      }).catch(
        error => {
          console.log(error);
        }
      );
    }
  },
}
</script>

<style>

</style>