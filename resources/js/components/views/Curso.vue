<template>
  <div id="curso" style="padding-top:100px;">
    <div v-if="visible">
      <div  v-if="existe">
          <div class="row">
            <div class="col-2 col-md-10 justify-content-center">
              <h2 id="titulo-cursos">{{ curso.fullname }}</h2>
            </div>
            <div class="col-2 col-md-10 justify-content-center">
              <img :src="curso.image" alt="" />
            </div>
          </div>
          <div class="comp">
            <div id="description">
              <p v-html="this.curso.summary"></p>
              <p v-html="this.curso.ex_description"></p>
            </div>
          </div>
      </div>
      <not-found-component v-else></not-found-component>
    </div>
    <loading-component v-else></loading-component>
  </div>
</template>

<script>
import LoadingComponent from "../LoadingComponent.vue";
import NotFoundComponent from '../NotFoundComponent.vue';
export default {
  data() {
    return {
      curso: [],
      visible: false,
      existe: true,
    };
  },
  components: {
    LoadingComponent,
    NotFoundComponent,
  },
  beforeMount() { 
   axios
      .get("/api/curses/" + this.$route.params.shortname)
      .then((response) => {

          this.curso = response.data.data;
          this.existe = true;
          this.visible = true;
      }).catch((error) => {
        console.log(error);
        this.existe = false;
        this.visible = true;
      });
  },
};
</script>

<style scoped>
#curso {
  padding-top: 100px;
}
.main-header {
  position: relative !important;
}
.comp {
  display: flex;
  flex-direction: column;
}
</style>