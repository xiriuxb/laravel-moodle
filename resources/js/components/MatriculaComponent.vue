<template>
  <button class="btn btn-primary" v-on:click="matricula">Inscribirse</button>
</template>

<script>
export default {
    methods: {

        matricula(){
        //   if(this.$store.state.user!=null){
        //     var crse={
        //     moodle_id:this.curso.moodle_id,
        //     fullname:this.curso.fullname,
        //     shortname:this.curso.shortname,
        //     category:this.curso.category,
        //     user_id:this.$store.state.user.username,
        //   }
            axios.post('/api/matricula').then(()=> {
              this.$toast.open({message:'Usted se ha inscrito',position:'top', type:'success'});
            }).catch(error => {
              console.log(error.response.status);
              this.$toast.open({message:'Debe verificar su email',position:'top', type:'warning'});
            });
        //   }else{
        //     this.$toast.open({message:'Debe estar logueado para poder matricularse',position:'top', type:'warning'});
        //     this.$router.push({ name:'ingreso-view' });
        //   }
        }
    },
}
</script>

<style>

</style>