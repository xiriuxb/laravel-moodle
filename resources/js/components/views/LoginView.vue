<template>
<div class="contain">
      <div class="izq">
          <a href="/">
              <img src="/images/icon.png" alt="Bussiness Logo">
          </a>
          <login-component></login-component>
      </div>
      <div class="der">
          <div class="container centered">
            <h1>Aprende con nosotros</h1>

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
    background-image: url(https://img.freepik.com/foto-gratis/estudiantes-moda-sonriendo-camara-juntos_13339-102856.jpg?size=626&ext=jpg);
}
@media (min-width: 768px){
    .der {
        flex: 1;
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
</style>