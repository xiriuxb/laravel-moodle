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
              <i class="bx bx-grid"></i>
              <span class="links_name">{{menu_item.name}}</span>
          </inertia-link>
          <span class="tooltip">{{menu_item.name}}</span>
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
      menu_items:[
        {name:'Testimonios', component:'testimonials'},
        {name:'Cursos', component:'cursos'},
        {name:'Cursos Moodle', component:'cursos-moodle'},
        {name:'Usuarios',component: 'users'}
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
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
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
  width: calc(100% - 240px);
  left: 240px;
}
/*Loadinng */
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/*End loading*/
</style>