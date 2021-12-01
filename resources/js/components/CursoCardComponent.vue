<template>
<div class="col-12 col-md-4 col-sm-6">
  <a class="card" :href="'/curso/' + shortname">
    <img
      class="card-img-top"
      v-bind:src="image"
      alt="Card image cap"
    />
    <div class="card-body bg-light">
      <h5>{{ name }}</h5>
      <p class="card-text">{{ description }}</p>
      <div class="card-footer">${{ precio }} USD</div>
    </div>
  </a>
</div>
</template>

<script>
export default {
  props: {
    name: String,
    shortname: String,
    precio:Number,
    image: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped> 
a{
    text-decoration: none;
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