<template>
<div>
  <button v-if="!logged" class="btn btn-primary" v-on:click="matricula">
      <span v-if="!loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      Inscribirse ({{price}})</button>

      <button v-else class="btn btn-primary" v-on:click.prevent="em" :disabled="btnDisabled">
      <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      {{ buttonMessage }}
      </button>
</div>
</template>

<script>
export default {
    props:{
        curso: {
            type: String,
            required: true,
        },
        precio: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            logged: this.$store.getters.isLoggedIn,
            loading: true,
            error: '',
            matriculado:false,
            buttonMessage: '',
            btnDisabled: true,
        };
    },
    beforeCreate() {
        this.btnDisabled = this.logged?false:true;
    },
    mounted() {
        
        if(this.logged){
            console.log('Esta logueado');
            axios.get('/api/user/matricula/'+this.curso)
            .then(response => {
                this.matriculado = response.data;
                this.loading = this.btnDisabled = false;
                this.buttonMessage = this.matriculado ? 'Ir al curso en Moodle': 'Inscribirse ($'+this.price+')';
            console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
        
    },
    computed: {
        price() {
            return parseFloat(this.precio) > 0 ? this.precio : 'Gratis';
        },

    },
    methods: {
        async matricula(){
            this.loading=true;
            this.btnDisabled=true;
            await axios.post('/api/matricula',{'shortname':this.curso}).then(()=> {
              this.$toast.open({message:'Usted se ha inscrito',position:'top', type:'success'});
              this.$router.go();
            }).catch(error => {
              console.log(error.response.status);
              switch (error.response.status) {
                    case 401:
                        this.$toast.open({message:'Debe ingresar para inscribirse',position:'top', type:'warning'});
                        this.$router.push({ name:'ingreso-view' });
                      break;
                
                    case 403:
                        this.$toast.open({message:'Debe verificar su e-mail',position:'top', type:'warning'});
                        this.loading = this.btnDisabled =false;
                    break;
              
                  default:
                    this.error=error.response.data.mensaje;
                    this.$toast.open({message:this.error,position:'top', type:'warning'});
                    break;
              }
              this.loading=false;
            });
        },
        redirectToMoodle(){
            window.location.href = 'https://moodle.xiriuxb.org/course/view.php?name='+this.curso;
        },
        em(){
            if(this.logged && this.matriculado){
                this.$toast.open({message:'Redireccionando',position:'top', type:'warning'});
                this.redirectToMoodle();
            }
            else{
                this.matricula();
            }
        }
    },
}
</script>

<style scoped>
.btn{
    padding: 12px;
    min-width: 150px;
    margin: 0 0 12px 0;
}
.btn-primary:hover{

}
</style>