<template>
  <div id="curso">
    <div v-if="visible">
      <div v-if="existe">
        <div class="card left">
          <div class="row">
            <div class="col-12 col-sm-8 justify-content-center">
              <p>{{ curso.category }}</p>
              <h2 id="titulo-cursos" class="card-title">{{ curso.fullname }}</h2>
              <div class="">
                <p v-html="this.curso.summary"></p>
              </div>
            </div>
            <div class="col-12 col-sm-4 justify-content-center">
              <!-- <img :src="curso.image" alt="" /> -->
              <img
                src="https://img-c.udemycdn.com/course/240x135/1606018_069c.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="comp">
          <div id="description">
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
import NotFoundComponent from "../NotFoundComponent.vue";
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
      })
      .catch((error) => {
        console.log(error);
        this.existe = false;
        this.visible = true;
      });
  },
};
</script>

<style scoped>
#curso {
  padding-top: 80px;
}
.main-header {
  position: relative !important;
}
.comp {
  display: flex;
  flex-direction: column;
}
.row{
  margin: 20px 50px 20px 50px;
  color: tomato;
  min-height: 200px;
}
.card {
  background-color: #002e45;
}
img{
  width: 100%;
  min-height: 200px;
}
</style>