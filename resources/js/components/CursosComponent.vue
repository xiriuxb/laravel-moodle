<template>
  <div class="container d-flex justify-content-center mt-30 mb-50">
    <div class="row" v-if="this.visible">
          <curso-card-component
            v-for="curso in cursos2"
            v-bind:key="curso.shortname"
            :name="curso.fullname"
            :shortname="curso.shortname"
            :image="curso.image"
            :precio="curso.price"
          >
          </curso-card-component>
    </div>
    <loading-component v-else></loading-component>
  </div>
</template>

<script>
import CursoCardComponent from "../components/CursoCardComponent.vue";
import LoadingComponent from '../components/LoadingComponent.vue'
export default {
  components: {
    CursoCardComponent,
    LoadingComponent,
  },
  data() {
    return {
      visible: false,
      cursos: [
        {
          fullname: "Curso 1",
          shortname: "CRS1",
          description: "Este es un curso de prueba",
          is_visible: true,
          price: 9.99,
          profesor: "Luis Test",
          categories: ["Matemáticas", "Básico"],
        },
        {
          fullname: "Curso 2",
          shortname: "CRS2",
          description: "Este es un curso de prueba 2",
          is_visible: true,
          price: 9.99,
          profesor: "Luis Test",
          categories: ["Lenguaje", "Básico"],
        },
        {
          fullname: "Curso 3",
          shortname: "CRS3",
          description: "Este es un curso de prueba 3",
          is_visible: true,
          price: 20.00,
          profesor: "Luis Test",
          categories: ["Miscelaneo"],
        },
        {
          fullname: "Curso 4",
          shortname: "CRS4",
          description: "Este es un curso de prueba 4",
          is_visible: true,
          price: 9.99,
          profesor: "Luis Test",
          categories: ["Matemáticas", "Básico"],
        },
        {
          fullname: "Curso 5",
          shortname: "CRS5",
          description: "Este es un curso de prueba 5",
          is_visible: true,
          price: 9.99,
          profesor: "Luis Test",
          categories: ["Matemáticas", "Básico"],
        },
        {
          fullname: "Curso 6",
          shortname: "CRS6",
          description: "Este es un curso de prueba 6",
          is_visible: true,
          price: 9.99,
          profesor: "Luis Test",
          categories: ["Matemáticas", "Básico"],
        },
        {
          fullname: "Curso 7",
          shortname: "CRS7",
          description: "Este es un curso de prueba 7",
          is_visible: true,
          price: 9.99,
          profesor: "Luis Test",
          categories: ["Matemáticas", "Básico"],
        },
        {
          fullname: "Curso 8",
          shortname: "CRS8",
          description: "Este es un curso de prueba 8",
          is_visible: true,
          price: 9.99,
          profesor: "Luis Test",
          categories: ["Matemáticas", "Básico"],
        },
        {
          fullname: "Curso 9",
          shortname: "CRS9",
          description: "Este es un curso de prueba 9",
          is_visible: true,
          price: 9.99,
          profesor: "Luis Test",
          categories: ["Matemáticas", "Básico"],
        },
        {
          fullname: "Curso 10",
          shortname: "CRS10",
          description: "Este es un curso de prueba 10",
          is_visible: true,
          price: 9.99,
          profesor: "Luis Test",
          categories: ["Matemáticas", "Básico"],
        },
        {
          fullname: "Curso 11",
          shortname: "CRS11",
          description: "Este es un curso de prueba 11",
          is_visible: true,
          price: 9.99,
          profesor: "Luis Test",
          categories: ["Matemáticas", "Básico"],
        },
        {
          fullname: "Curso 12",
          shortname: "CRS12",
          description: "Este es un curso de prueba 12",
          is_visible: true,
          price: 9.99,
          profesor: "Luis Test",
          categories: ["Matemáticas", "Básico"],
        },
        {
          fullname: "Curso 13",
          shortname: "CRS13",
          description: "Este es un curso de prueba 13",
          is_visible: true,
          price: 9.99,
          profesor: "Luis Test",
          categories: ["Matemáticas", "Básico"],
        },
        {
          fullname: "Curso 14",
          shortname: "CRS14",
          description: "Este es un curso de prueba 14",
          is_visible: true,
          price: 9.99,
          profesor: "Luis Test",
          categories: ["Matemáticas", "Básico"],
        },
        {
          fullname: "Curso 15",
          shortname: "CRS15",
          description: "Este es un curso de prueba 15",
          is_visible: true,
          price: 89.99,
          profesor: "Luis Test",
          categories: ["Matemáticas", "Básico"],
        },
        {
          fullname: "Curso 16",
          shortname: "CRS16",
          description: "Este es un curso de prueba 16",
          is_visible: true,
          price: 9.99,
          profesor: "Luis Test",
          categories: ["Matemáticas", "Básico"],
        },
        {
          fullname: "Curso 17",
          shortname: "CRS17",
          description: "Este es un curso de prueba 17",
          is_visible: true,
          price: 99.99,
          profesor: "Luis Test",
          categories: ["Matemáticas", "Básico"],
        },
        {
          fullname: "Curso 18",
          shortname: "CRS18",
          description: "Este es un curso de prueba 18",
          is_visible: true,
          price: 19.99,
          profesor: "Luis Test",
          categories: ["Matemáticas", "Básico"],
        },
        {
          fullname: "Curso 19",
          shortname: "CRS19",
          description: "Este es un curso de prueba 19",
          is_visible: true,
          price: 9.99,
          profesor: "Luis Test",
          categories: ["Matemáticas", "Básico"],
        },
      ],
      cursos2:[],
    };
  },
  beforeMount(){
      axios.get('api/curses').then((response) => {
        this.cursos2 = response.data.data;
        this.visible = true;
      }).catch((err) => {
        this.visible=false;
      }); 
    },
};
</script>

<style scoped>
section {
  width: 289px;
}
.mt-30 {
  margin-top: 30px;
}

.mb-50 {
  margin-bottom: 50px;
}
</style>