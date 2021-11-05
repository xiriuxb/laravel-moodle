<template>
<div class="col-12 col-md-4 col-sm-6">
  <a class="card" :href="'/cursos/' + shortName">
    <img
      class="card-img-top"
      src="/images/crs-im-test.jpg"
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
    description: String,
    shortName:String,
    precio:Number,
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
}
.card:hover{
    box-shadow: 0px 4px 7px #777;
}
</style>