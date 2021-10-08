<template>
<div class="contain">
      <div class="izq">
          <a href="/">
              <img src="/images/logo.png" alt="Bussiness Logo">
          </a>
          <login-component></login-component>
      </div>
      <div class="der">
          <div class="text-justify" id="mensaje">
            <h1>Bienvenido</h1>
            <p>Recuerde que para acceder al contenido de los cursos que usted adquirió debe ingresar en el siguiente enlace:</p>
            <a href="https://www.academia.octavario.org/login/">Academia</a>
          </div>
      </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

.contain{
    display: flex;
    flex-direction: row;
}
.izq{
    display: flex;
    flex-direction: column;
    flex: auto;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0 40px;
}
@media (min-width: 768px){
    .izq {
        flex: 1;
    }

}
.der{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    display: none;
    background-image: url(/images/AZULbanner2.png);
}
@media (min-width: 768px){
    .der {
        flex: 1.4;
        display: block;
    }
}

@media (min-width:1366px){
    .izq{flex:4}
    .der{
        flex:6;
        display:block
    }
}
div.izq img{
    width: 300px;
}
#mensaje{
    margin: 40% 30%;
    color: aliceblue;
    font-size: larger;
}
</style>