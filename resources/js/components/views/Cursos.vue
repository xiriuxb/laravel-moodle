<template>
<div>
    <navbar-component></navbar-component>
    <div id="encabezado-cursos">
        <div class="row">
            <div class="col-5 col-md-5 justify-content-center">
                    <h2 id="titulo-cursos">Cursos</h2>\
            </div>
            <div class="col-7 col-md-7 ">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor quas aspernatur cupiditate voluptates sequi eaque, facilis necessitatibus velit illo ab, consequuntur adipisci nam illum, enim numquam quisquam vero recusandae.
                </p>
            </div>
        </div>
    </div>
    <div class="comp">
        <filter-component></filter-component>
        <cursos-component></cursos-component>
    </div>
    <footer-component></footer-component>
</div>
</template>

<script scoped>
import FooterComponent from '../FooterComponent.vue'
export default {
  components: { FooterComponent },

}
</script>

<style scoped>
.main-header{
    position: relative !important;
}
#titulo-cursos{
    font-size: 60px;
    font-family: montserrat;
  font-weight: 700;
  margin-left: 25%;
}
.comp{
    display: flex;
    margin: 0px 0px 0px;
    flex-direction: row;
}
</style>