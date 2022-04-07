<template>
  <div id="misCursos" class="container">
    <h2>Mis cursos</h2>
    <div class="container">
      <table class="table">
        <tbody>
          <tr v-for="curso in data" :key="curso.shortname">
            <td>{{ curso.fullname }}</td>
            <td>{{ curso.category }}</td>
            <td>
              <inertia-link :href="'/curso/'+curso.shortname" >
                <button class="btn btn-primary">Ver en este sitio</button>
              </inertia-link>
            </td>
            <td>
              <button class="btn btn-primary" @click.prevent="redirectToMoodle(curso.shortname)">
                 <span class="align-middle"> Ver en Moodle</span> <box-icon class="align-middle" name='link-external' color="#fff"></box-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Home from "../views/Home.vue";
export default {
  layout: Home,
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      misCursos: [],
      loading: true,
    };
  },
  async created() {
    // await axios.get("/api/user/matriculas").then((response) => {
    //   this.misCursos = response.data.data;
    //   this.loading = false;
    // });
  },
  methods: {
      redirectToMoodle(cursoShortname){
            window.location.href = 'https://moodle.xiriuxb.org/course/view.php?name='+cursoShortname;
        },
  },
};
</script>

<style scoped>
#misCursos {
  padding-top: 100px;
}
</style>