<template>
  <div id="curso" class="container-fluid">
    <div >
      <div>
        <div class="card left">
          <div class="row">
            <div class="col-12 col-sm-8 col-md-6 justify-content-center">
              <div>
                <inertia-link :href="'cursos/'+curso.category">
                {{ curso.category }}
                </inertia-link>
              </div>
              <h2 id="titulo-cursos" class="text-orange-600 font-bold text-3xl sm:text-4xl">{{ curso.fullname }}</h2>
              <div id="summary">
                  <p v-html="this.curso.summary"></p>
              </div>
              <div class="mt-0 md:mt-6">
                <matricula-component :curso="curso.shortname" :precio="curso.price"></matricula-component>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-md-6 d-flex align-items-center">
              <img :src="curso.image" alt="" />
            </div>
          </div>
        </div>
        <div class="row comp">
          <div id="description" class="container">
            <p v-html="this.curso.ex_description"></p>
          </div>
          <!-- <loading-component v-else :position="'inherit'" :height="'300px'"></loading-component> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MatriculaComponent from "../MatriculaComponent.vue";
import Home from "../../../../resources/js/components/views/Home.vue";
export default {
  layout: Home,
  props: {
    curso: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      visible: false,
      existe: true,
    };
  },
  components: {
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