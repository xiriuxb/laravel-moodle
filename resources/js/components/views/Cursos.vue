<template>
  <div id="cursos">
    <div id="encabezado-cursos">
      <div>
        <div class="col-5 col-md-5 justify-content-center">
          <h2 id="titulo-cursos">Cursos</h2>
        </div>
      </div>
    </div>
    <div class="comp">
      <filter-component></filter-component>
      <router-view></router-view>
    </div>
  </div>
</template>

<script scoped>
export default {
  methods: {},
};
</script>

<style scoped>
.main-header {
  position: relative !important;
}
#cursos{
  padding-top: 100px;
}

#titulo-cursos {
  font-size: 60px;
  font-family: montserrat;
  font-weight: 700;
  margin-left: 25%;
}
.comp {
  display: flex;
  margin: 0px 0px 0px;
  flex-direction: column;
}
@media (min-width: 768px) {
  .comp {
    display: flex;
    margin: 0px 0px 0px;
    flex-direction: row;
  }
}
</style>