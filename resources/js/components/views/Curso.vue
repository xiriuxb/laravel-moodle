<template>
  <div id="curso">
    <div v-if="visible">
      <div v-if="existe">
        <div class="card left">
          <div class="row">
            <div class="col-12 col-sm-8 justify-content-center">
              <div>
                <router-link :to="{name:'cursos-filtered',params:{category:curso.category,page:1}}">
                {{ curso.category }}
                </router-link>
                </div>
              <h2 id="titulo-cursos" class="card-title">{{ curso.fullname }}</h2>
              <div id="summary">
                <div>
                  <p v-html="this.curso.summary"></p>
                  <!-- {{this.curso.summary}} -->
                  </div>
              </div>
              <matricula-component :curso="curso.shortname"></matricula-component>
            </div>
            <div class="col-12 col-sm-4 justify-content-center">
              <img :src="image" alt="" />
            </div>
          </div>
        </div>
        <div class="row comp">
          <div id="description">
            <p v-html="this.curso.value"></p>
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
import MatriculaComponent from "../MatriculaComponent.vue";
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
    MatriculaComponent,
  },
  computed: {
    image() {
      return 'https://moodle.xiriuxb.org/pluginfile.php/'+ this.curso.context+'/course/overviewfiles/'+this.curso.filename;
    },
  },
  methods:{
  },
  beforeMount() {
    axios
      .get("/api/curse/" + this.$route.params.shortname)
      .then((response) => {
        this.curso = response.data.data[0];
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
.card.left .row{
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
#summary{
  color: white;
  font-size: large;
}
</style>