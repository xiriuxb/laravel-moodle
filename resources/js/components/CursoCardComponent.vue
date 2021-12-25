<template>
<div class="col-12 col-md-4 col-sm-6">
  <a class="card" :href="'/curso/' + shortname">
    <img
      class="card-img-top"
      v-bind:src="'https://img-c.udemycdn.com/course/240x135/1606018_069c.jpg'"
      alt="Card image cap"
    />
    <div class="card-body">
      <p>{{this.categoryname}}</p>
      <h5>{{ name }}</h5>
      <p v-html="this.summary"></p>
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
    precio:String,
    image: String,
    summary: String,
    categoryname: String,
  },
  data() {
    return {};
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