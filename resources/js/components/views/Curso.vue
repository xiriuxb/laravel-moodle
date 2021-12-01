<template>
  <div>
    <navbar-component></navbar-component>
    <div v-if="visible">
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
    <loading-component v-else></loading-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from "../FooterComponent.vue";
import NavbarComponent from "../NavbarComponent.vue";
import LoadingComponent from "../LoadingComponent.vue";
export default {
  data() {
    return {
      curso: [],
      visible: false,
    };
  },
  components: {
    FooterComponent,
    NavbarComponent,
    LoadingComponent,
  },
  beforeMount() {
    axios
      .get("/api/curses/" + this.$route.params.shortname)
      .then((response) => {
        this.curso = response.data.data;
        this.visible = true;
      })
      .catch((err) => {
        this.visible = false;
      });
  },
};
</script>

<style scoped>
.main-header {
  position: relative !important;
}
.comp {
  display: flex;
  flex-direction: column;
}
</style>