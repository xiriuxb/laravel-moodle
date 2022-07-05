<template>
  <div class="nav-item">
    <div class="dropdown show">
      <a class="block px-0 user-profile" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">
        <img class="rounded-[50%]"
          :src="'https://ui-avatars.com/api/?background=002e45&color=fff&name=' + $page.props.auth.user" alt="">
      </a>
      <div @click="$parent.sidebarHandler()"
        class="dropdown-menu dropdown-menu-right absolute md:fixed md:right-0 mr-1 bg-cyan-900 w-full mt-1 md:w-auto md:bg-slate-100 md:rounded-sm"
        aria-labelledby="dropdownMenuLink" id="dropdownNavbar">
        <div class="group">
          <inertia-link as="button"
            class="block w-full md:px-1  py-2 text-gray-300  group-hover:bg-slate-500 md:text-black md:right-5"
            :href="route('personal.data')">
            Perfil
          </inertia-link>
        </div>
        <div class="dropdown-divider my-0"></div>
        <inertia-link as="button" class="block w-full md:px-1 md:text-black py-2 text-gray-300 hover:bg-slate-500"
          :href="route('personal.mis-cursos')">
          Ver mis cursos
        </inertia-link>
        <inertia-link v-if="$page.props.auth.role != 'user'& $page.props.auth.role !='suspended'" as="button"
          class="block w-full md:px-1 md:text-black py-2 text-gray-300 hover:bg-slate-500"
          :href="route('admin.testimonials')">
          Seccion Admin
        </inertia-link>
        <div class="dropdown-divider my-0"></div>
        <inertia-link as="button" method="post"
          class="block w-full md:px-1 md:text-black py-2 text-gray-300 hover:text-black hover:bg-slate-300"
          :href="route('logout')">Cerrar Sesión</inertia-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

@media (max-width: 767px) {
  .user-profile {
    border-radius: 50%;
    position: relative;
    width: 50px;
    height: 50px;
    left: 40%;
  }

  .dropdown-menu.show {
    transform: translate3d(0px, 50px, 0px) !important;
  }
}
</style>