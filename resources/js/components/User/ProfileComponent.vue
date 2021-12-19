<template>
  <div id="profile">
      <h2>Perfil</h2>
      <div>
          <label for="name">Nombre:</label>
          <p></p>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            userData:{
                name:'Jorge',
                last_name:'Trujillo2',
                username:'jtrujillo',
                email:'xasxas@sad.com',
                password:'**********'
            },
        }
    }
}
</script>

<style>
#profile{
    padding-top: 100px;
}
</style>