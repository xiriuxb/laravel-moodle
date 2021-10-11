<template>
  <div id="encabezado" class="img-fluid">
      <div class="row" id="caratula">
        <div class="container tit col-sm-5 col-xs-12">
            <h1 id="titulo1">{{titulo1}}</h1>
            <div class="container">
                <input class="form-control" type="text" placeholder="Buscar Curso" aria-label="Search">
            </div>

        </div>
        <div class="container col-sm-7 col-xs-12 registro">
            <registro-component></registro-component>
        </div>
      </div>
</div>
</template>

<script>
import RegistroComponent from './RegistroComponent.vue'
export default {
  components: { RegistroComponent },
  data(){
      return{
        titulo1:'Aprende con nosotros'

      }
  }

}
</script>

<style>

#encabezado{
    position: relative;
}
#encabezado::before{
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(https://img.freepik.com/foto-gratis/estudiantes-moda-sonriendo-camara-juntos_13339-102856.jpg?size=626&ext=jpg);
    filter: brightness(56%);
    position: absolute;
    background-repeat: repeat;
}
#encabezado #caratula .tit{
    text-align: center;
    filter: brightness(100%);
    position: relative;
    top: 40%;
    padding-top: 150px;
}

.registro{
    position: relative;
    max-width: 500px;
    margin-top: 60px;
}

.row{
    margin-right: 0px !important;
    margin-left: 0px !important;
}
#titulo1{
    color: #ff772a;
}
</style>