<template>
  <div class="nav-item dropdown">
    <div class="dropdown show">
        <a class="block px-0 user-profile" role="button"
          id="dropdownMenuLink" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <img  class="rounded-[50%]" :src="'https://ui-avatars.com/api/?background=002e45&color=fff&name='+$page.props.auth.user" alt="">
        </a>
      <div class="dropdown-menu dropdown-menu-right absolute md:fixed md:right-0 mr-1 bg-cyan-900 w-full mt-1 md:w-auto md:bg-slate-100 md:rounded-sm" aria-labelledby="dropdownMenuLink" id="dropdownNavbar">
        <div class="group">
          <inertia-link as="button" class="block w-full md:px-1  py-2 text-gray-300  group-hover:bg-slate-500 md:text-black md:right-5" :href="'/personal'">
            Perfil
          </inertia-link>
        </div>
        <div class="dropdown-divider my-0"></div>
        <inertia-link as="button" class="block w-full md:px-1 md:text-black py-2 text-gray-300 hover:bg-slate-500" :href="'/mis-cursos'">
          Ver mis cursos
        </inertia-link>
        <inertia-link v-if="$page.props.auth.role!='user'" as="button" class="block w-full md:px-1 md:text-black py-2 text-gray-300 hover:bg-slate-500" :href="'admin'">
          Seccion Admin
        </inertia-link>
        <div class="dropdown-divider my-0"></div>
        <inertia-link as="button" method="post" class="block w-full md:px-1 md:text-black py-2 text-gray-300 hover:text-black hover:bg-slate-300" :href="'/logout'">Cerrar Sesión</inertia-link>
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
    
    console.log(this.user_name);
  },
  methods: {
    logout() {
      this.$router.go('/')
      //axios.get('/sanctum/csrf-cookie');
      axios
        .post("/logout")
        .then(() => {
          window.location.href='/'
          this.$toast.open({message:'See u', type:'info',position:'top'});
          this.$store.commit('setAuthUser',null);
        })
        .catch((err) => {
          console.log(err)
          alert("Error al cerrar sesión");
        });
    },
  },
  computed: {
    userRole() {
      
    },
  },
};
</script>

<style scoped>
.user-profile {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  left: auto;
}
.user-profile:hover {
  background-color: rgba(255, 251, 251, 0.37);
  box-shadow: 0px 4px 7px #777;
}
</style>