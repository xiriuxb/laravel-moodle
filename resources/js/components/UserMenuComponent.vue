<template>
  <div class="nav-item dropdown">
    <div class="dropdown show">
      <a
        class="nav-link user-profile"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <box-icon name="user" type="solid" color="#ffffff"></box-icon>
      </a>
      <div
        class="dropdown-menu dropdown-menu-right"
        aria-labelledby="dropdownMenuLink"
        id="userMenu"
      >
        <router-link :to="{path:'/personal'}">
          <div class="dropdown-item">{{user_name.name}}</div>
        </router-link>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="/" v-on:click="logout">Cerrar Sesión</a>
      </div>
    </div>
  </div>
</template>

<script>
import "boxicons";
export default {
  data() {
    return {
      user_name: [],
    };
  },
  mounted(){
    this.user_name = this.$store.state.user;
  },
  methods: {
    logout() {
      axios
        .post("/api/logout")
        .then(() => {
          this.$toast.open({message:'See u', type:'info',position:'top'});
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
          alert("Error al cerrar sesión");
        });
    },
  },
};
</script>

<style scoped>
#userMenu {
  right: 1px;
}
.user-profile {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  left: auto;
  background-color: rgba(107, 107, 107, 0.37);
  text-align: center;
}
.user-profile:hover {
  background-color: rgba(255, 251, 251, 0.37);
  box-shadow: 0px 4px 7px #777;
}
a box-icon {
  position: relative;
  top: 12%;
}
</style>