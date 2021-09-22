<template>
<div>
    <navbar-component></navbar-component>
    <div id="encabezado">
        <div class="row">
            <div class="col-5 col-md-5 ">
                    <h2 id="titulo-cursos">Cursos</h2>\
            </div>
            <div class="col-7 col-md-7 ">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor quas aspernatur cupiditate voluptates sequi eaque, facilis necessitatibus velit illo ab, consequuntur adipisci nam illum, enim numquam quisquam vero recusandae.
                </p>
            </div>
        </div>
    </div>
    <section>
        <div class="card" v-for="curso in cursos" v-bind:key="curso.short_name" style="max-width:300px; position:fixed">
            <img class="card-img-top" src="/images/crs-im-test.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{curso.name}}</h5>
                <p class="card-text">{{curso.description}}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </section>
</div>
  
  
</template>

<script>
import NavbarComponent from '../NavbarComponent.vue'
export default {
    data(){
        return{
            cursos:[
            {'name':'Curso 1', 'short_name':'CRS1', 'description':'Este es un curso de prueba', 'is_visible':true,'price':9.99,'profesor':'Luis Test', 'categories':['Matemáticas','Básico']},
            {'name':'Curso 2', 'short_name':'CRS2', 'description':'Este es un curso de prueba 2', 'is_visible':true,'price':9.99,'profesor':'Luis Test','categories':['Lenguaje','Básico']},
            {'name':'Curso 3', 'short_name':'CRS3', 'description':'Este es un curso de prueba 3', 'is_visible':true,'price':9.99,'profesor':'Luis Test','categories':['Miscelaneo']},
            {'name':'Curso 4', 'short_name':'CRS4', 'description':'Este es un curso de prueba 4', 'is_visible':true,'price':9.99,'profesor':'Luis Test','categories':['Matemáticas','Básico']},
            {'name':'Curso 5', 'short_name':'CRS5', 'description':'Este es un curso de prueba 5', 'is_visible':true,'price':9.99,'profesor':'Luis Test','categories':['Matemáticas','Básico']},
            {'name':'Curso 6', 'short_name':'CRS6', 'description':'Este es un curso de prueba 6', 'is_visible':true,'price':9.99,'profesor':'Luis Test','categories':['Matemáticas','Básico']},
            {'name':'Curso 7', 'short_name':'CRS7', 'description':'Este es un curso de prueba 7', 'is_visible':true,'price':9.99,'profesor':'Luis Test','categories':['Matemáticas','Básico']},
            {'name':'Curso 8', 'short_name':'CRS8', 'description':'Este es un curso de prueba 8', 'is_visible':true,'price':9.99,'profesor':'Luis Test','categories':['Matemáticas','Básico']},
            {'name':'Curso 9', 'short_name':'CRS9', 'description':'Este es un curso de prueba 9', 'is_visible':true,'price':9.99,'profesor':'Luis Test','categories':['Matemáticas','Básico']},
            {'name':'Curso 10', 'short_name':'CRS10', 'description':'Este es un curso de prueba 10', 'is_visible':true,'price':9.99,'profesor':'Luis Test','categories':['Matemáticas','Básico']},
            {'name':'Curso 11', 'short_name':'CRS11', 'description':'Este es un curso de prueba 11', 'is_visible':true,'price':9.99,'profesor':'Luis Test','categories':['Matemáticas','Básico']},
            {'name':'Curso 12', 'short_name':'CRS12', 'description':'Este es un curso de prueba 12', 'is_visible':true,'price':9.99,'profesor':'Luis Test','categories':['Matemáticas','Básico']},
            {'name':'Curso 13', 'short_name':'CRS13', 'description':'Este es un curso de prueba 13', 'is_visible':true,'price':9.99,'profesor':'Luis Test','categories':['Matemáticas','Básico']},
            {'name':'Curso 14', 'short_name':'CRS14', 'description':'Este es un curso de prueba 14', 'is_visible':true,'price':9.99,'profesor':'Luis Test','categories':['Matemáticas','Básico']},
            {'name':'Curso 15', 'short_name':'CRS15', 'description':'Este es un curso de prueba 15', 'is_visible':true,'price':9.99,'profesor':'Luis Test','categories':['Matemáticas','Básico']},
            {'name':'Curso 16', 'short_name':'CRS16', 'description':'Este es un curso de prueba 16', 'is_visible':true,'price':9.99,'profesor':'Luis Test','categories':['Matemáticas','Básico']},
            {'name':'Curso 17', 'short_name':'CRS17', 'description':'Este es un curso de prueba 17', 'is_visible':true,'price':9.99,'profesor':'Luis Test','categories':['Matemáticas','Básico']},
            {'name':'Curso 18', 'short_name':'CRS18', 'description':'Este es un curso de prueba 18', 'is_visible':true,'price':9.99,'profesor':'Luis Test','categories':['Matemáticas','Básico']},
            {'name':'Curso 19', 'short_name':'CRS19', 'description':'Este es un curso de prueba 19', 'is_visible':true,'price':9.99,'profesor':'Luis Test','categories':['Matemáticas','Básico']},
        ]
        }
    }
}
</script>

<style scoped>
.main-header{
    position: relative !important;
}
#titulo-cursos{
    font-size: 60px;
}
</style>