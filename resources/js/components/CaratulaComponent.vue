<template>
  <div class="titulo1 img-fluid">
      <div class="row" id="caratula">
        <div class="container tit col-6 col-sm-6">
            <h1>Aprende con nosotros</h1>
            <div class="container">
                <input class="form-control" type="text" placeholder="Buscar Curso" aria-label="Search">
            </div>

        </div>
        <div class="container col-6 col-sm-6 registro">
            <registro-component></registro-component>
        </div>
      </div>
</div>
</template>

<script>
import RegistroComponent from './RegistroComponent.vue'
export default {
  components: { RegistroComponent },

}
</script>

<style>

.titulo1{
    color: #afc8ec;
    position: relative;
}
.titulo1::before{
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(https://img.freepik.com/foto-gratis/estudiantes-moda-sonriendo-camara-juntos_13339-102856.jpg?size=626&ext=jpg);
    filter: brightness(56%);
    position: absolute;
    background-repeat: repeat;
}
.titulo1 .tit{
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
    margin-bottom: 20px;
}

.row{
    margin-right: 0px !important;
    margin-left: 0px !important;
}
</style>