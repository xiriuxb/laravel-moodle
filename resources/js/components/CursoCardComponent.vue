<template>
<div class="col-12 col-lg-4 col-md-6 col-sm-6">
  <router-link class="card" :to="{name:'curso',params:{shortname:curso.shortname}}">
    <div v-if="loading">
      <loading-component :position="'relative'"></loading-component>
    </div>
    <img
      v-else
      class="card-img-top"
      v-bind:src="image"
      alt="Card image cap"
      loading="lazy"
    />
    <div class="card-body">
      <p>{{ curso.category }}</p>
      <h5>{{ curso.fullname }}</h5>
      <p v-html="curso.summary"></p>
      <div class="card-footer">${{ curso.precio }} USD</div>
    </div>
  </router-link>
</div>
</template>

<script>
import LoadingComponent from './LoadingComponent.vue';
export default {
  components: {
    LoadingComponent,
  },
  props: {
    curso:Object
  },
  data() {
    return {
      image: '',
      loading: true,
    };
  },
  computed: {
    imagea() {
      return 'https://moodle.xiriuxb.org/pluginfile.php/'+ this.curso.context+'/course/overviewfiles/'+this.curso.filename;
    },
  },
  mounted() {
    this.image = this.imagea;
    this.loading = false;
  },
};
</script>

<style scoped> 
a{
    text-decoration: none;
    color: #777;
}
div:not(.card) {
  padding-bottom: 12px;
}
.card-footer{
    color: black;
    text-align: end;
}
.card-body{
    padding: 10px;
    padding-bottom: 0 !important;
}
.card{
    border: 0;
    box-shadow: 0px 2px 3px #777;
    min-width: 211px;
}
.card:hover{
    box-shadow: 0px 4px 7px #777;
}
</style>