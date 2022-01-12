<template>
  <div class="container d-flex justify-content-center mt-30 mb-50">
    <div class="row" v-if="this.visible">
      <curso-card-component
        v-for="curso in cursos2"
        :key="curso.shortname"
        :name="curso.fullname"
        :shortname="curso.shortname"
        :image="curso.image"
        :precio="curso.price"
        :summary="curso.summary"
        :categoryname="curso.category"
      >
      </curso-card-component>
    </div>
    <loading-component v-else></loading-component>
  </div>
</template>

<script>
import CursoCardComponent from "../components/CursoCardComponent.vue";
import LoadingComponent from "../components/LoadingComponent.vue";
export default {
  components: {
    CursoCardComponent,
    LoadingComponent,
  },
  data() {
    return {
      visible: false,
      cursos2: [],
    };
  },
  beforeMount() {
    var ruta="/api/curses";
    if (this.$route.params.category == 'all'){
      ruta = "/api/curses";
    }else{
      ruta = "/api/curses/" + this.$route.params.category;
    }
    console.log(ruta)
    axios
      .get(ruta)
      .then((response) => {
        this.cursos2 = response.data.data;
        this.visible = true;
        console.log(response.data.data);
      })
      .catch((err) => {
        this.visible = false;
        console.log(err);
      });
      console.log(this.cursos2)
  },
};
</script>

<style scoped>
section {
  width: 289px;
}
.mt-30 {
  margin-top: 30px;
}

.mb-50 {
  margin-bottom: 50px;
}
</style>