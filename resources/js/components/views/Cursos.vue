<template>
  <div>
    <div id="encabezado-cursos">
      <div class="row">
        <div class="col-5 col-md-5 justify-content-center">
          <h2 id="titulo-cursos">Cursos</h2>
        </div>
      </div>
    </div>
    <div class="comp">
      <filter-component></filter-component>
      <cursos-component></cursos-component>
    </div>
  </div>
</template>

<script scoped>
export default {
  methods: {},
  mounted() {
    const nav = document.querySelector("#navbar");
    if (nav != null) {
      nav.className = "main-header scroll";
      nav.style.position = "relative !important";
    } else {
    }
  },
};
</script>

<style scoped>
.main-header {
  position: relative !important;
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