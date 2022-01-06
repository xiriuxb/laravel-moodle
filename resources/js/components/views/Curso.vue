<template>
  <div id="curso">
    <div v-if="visible">
      <div v-if="existe">
        <div class="card left">
          <div class="row">
            <div class="col-12 col-sm-8 justify-content-center">
              <div v-on:click.prevent="">{{ curso.category }}</div>
              <h2 id="titulo-cursos" class="card-title">{{ curso.fullname }}</h2>
              <div id="summary">
                <div>{{this.curso.summary}}</div>
              </div>
              <button class="btn btn-primary" v-on:click="matricula">Inscribirse</button>
            </div>
            <div class="col-12 col-sm-4 justify-content-center">
              <img :src="curso.image" alt="" />
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
  methods:{
    matricula(){
      console.log(this.curso)
      if(this.$store.state.user!=null){
        var crse={
        moodle_id:this.curso.moodle_id,
        fullname:this.curso.fullname,
        shortname:this.curso.shortname,
        category:this.curso.category,
        user_id:this.$store.state.user.id,
      }
        axios.post('/api/matricula', crse).then(response => {
          console.log(response);
        }).catch(error => {
          console.log(error);
          alert('Debe verificar su email');
        });
      }else{
        alert('Debe estar logueado para poder matricularse');
      }
    }
  },
  beforeMount() {
    axios
      .get("/api/curse/" + this.$route.params.shortname)
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
#summary{
  color: white;
  font-size: large;
}
</style>