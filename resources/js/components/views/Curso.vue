<template>
  <div id="curso" class="container-fluid">
    <div >
      <div v-if="existe">
        <div class="card left">
          <div class="row" v-if="visible">
            <div class="col-12 col-sm-8 col-md-6 justify-content-center">
              <div>
                <router-link :to="{name:'cursos',params:{category:curso.category}}">
                {{ curso.category }}
                </router-link>
                </div>
              <h2 id="titulo-cursos" class="card-title">{{ curso.fullname }}</h2>
              <div id="summary">
                <div>
                  <p v-html="this.curso.summary"></p>
                  </div>
              </div>
              <matricula-component :curso="curso.shortname" :precio="curso.price"></matricula-component>
            </div>
            <div class="col-12 col-sm-4 col-md-6 d-flex align-items-center">
              <img :src="curso.image" alt="" />
            </div>
          </div>
          <loading-component v-else :position="'inherit'" :height="'250px'"></loading-component>

        </div>
        <div class="row comp">
          <div id="description" class="container" v-if="visible">
            <p v-html="this.curso.ex_description"></p>
          </div>
          <loading-component v-else :position="'inherit'" :height="'300px'"></loading-component>
        </div>
      </div>
      <not-found-component v-else></not-found-component>
    </div>
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
    matricula(){
      if(this.$store.state.user!=null){
        axios.post('/api/matricula', {curso_id:this.curso.shortname}).then(()=> {
          this.$toast.open({message:'Usted se ha inscrito',position:'top', type:'success'});
        }).catch(error => {
          console.log(error);
          this.$toast.open({message:'Debe verificar su email',position:'top', type:'warning'});
        });
      }else{
        this.$toast.open({message:'Debe estar logueado para poder matricularse',position:'top', type:'warning'});
        this.$router.push({ name:'ingreso-view' });
      }
    }
  },
  beforeMount() {
    console.log(this.$route)
    axios
      .get("/api/curse/"+this.$route.params.shortname)
      .then((response) => {
        this.curso = response.data.data;
        this.existe = true;
        this.visible = true;
        console.log(this.curso);
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
  min-width: 200px;
  max-width: 440px;
}
#summary{
  color: white;
  font-size: large;
}

@media (max-width: 675px) {
  .row{
    flex-direction: column;
    align-items: center;
  }

}
</style>