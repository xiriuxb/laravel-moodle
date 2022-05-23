<template>
  <div>
    <div class="sidebar">
      <div class="logo_content">
        <div class="logo">
          <i class="bx"></i>
          <div class="logo_name">
            <a href="/">
              Octavario (Admin)
            </a>
          </div>
        </div>
        <i class="bx bx-menu" id="btn"></i>
      </div>
      <ul class="nav-list">
        <li v-for="menu_item in menu_items" :key="menu_item.name">
          <inertia-link :href="menu_item.component">
            <span class="links_name">{{ menu_item.name }}</span>
          </inertia-link>
          <span class="tooltip">{{ menu_item.name }}</span>
        </li>
      </ul>
      <div class="profile_content">
        <div class="profile">
          <div class="profile_details">
            <img src="" alt="" />
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <div id="admin" class="adm_content container">
      <!-- <keep-alive> -->
      <slot />
      <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>

export default {
  name: "admin",
  components: {
  },
  data() {
    return {
      menu_items: [
        { name: 'Testimonios', component: 'testimonials' },
        { name: 'Cursos', component: 'cursos' },
        { name: 'Cursos Moodle', component: 'cursos-moodle' },
        { name: 'Usuarios', component: 'users' },
        { name: 'Matriculas Pendientes', component: 'matriculas-pendientes' }
      ]
    };
  },
  methods: {
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.sidebar {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background: #11101d;
  padding: 6px 14px;
}

.sidebar .logo_content .logo {
  color: #fff;
  display: felx;
  height: 50px;
  width: 100%;
  align-items: center;
}

.logo_content .logo i {
  font-size: 28px;
  margin-right: 5px;
}

.logo_content .logo .logo_name {
  font-size: 20px;
  font-weight: 400;
}

.sidebar #btn {
  position: absolute;
  color: #fff;
  left: 90%;
  top: 6px;
  font-size: 20px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  transform: translateX(-50%);
}

.sidebar ul {
  margin-top: 20px;
}

.sidebar ul li {
  position: relative;
  height: 50px;
  width: 100%;
  margin: 0 5px;
  list-style: none;
  line-height: 50px;
  cursor: pointer;
}

.sidebar ul li a {
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  border-radius: 12px;
}

.sidebar ul li a:hover {
  color: #11101d;
  background: #fff;
}

.sidebar ul li i {
  height: 50px;
  min-width: 50px;
  border-radius: 12px;
  line-height: 50px;
  text-align: center;
}

.adm_content {
  position: absolute;
  height: 100%;
  width: calc(100% - 200px);
  left: 200px;
}
</style>