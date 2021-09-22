<template>
  <div>
      <div class="sidebar">
          <div class="logo_content">
              <div class="logo">
                  <i class="bx"></i>
                  <div class="logo_name">Octavario (Admin)</div>
              </div>
              <i class="bx bx-menu" id="btn"></i>
          </div>
          <ul class="nav-list">
              <li>
                  <a>
                      <i class="bx bx-grid"></i>
                      <span class="links_name">Comentarios</span>
                  </a>
                  <span class="tooltip">Comentarios</span>
              </li>
              <li>
                  <a>
                      <i class="bx bx-grid"></i>
                      <span class="links_name">Cursos</span>
                  </a>
                  <span class="tooltip">Cursos</span>
              </li>
              <li>
                  <a>
                      <i class="bx bx-grid"></i>
                      <span class="links_name">Usuarios</span>
                  </a>
                  <span class="tooltip">Usuarios</span>
              </li>
          </ul>
          <div class="profile_content">
              <div class="profile">
                  <div class="profile_details">
                      <img src="" alt="">
                      <div>

                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div id="admin" class="adm_content container">
          <keep-alive>
            <component v-bind:is="comentarios"></component>
          </keep-alive>
      </div>
      
  </div>
</template>

<script>
import AdminCommentComponent from '../Admin/AdminCommentComponent.vue';
import AdminCoursesComponent from '../Admin/AdminCoursesComponent.vue';

export default {
    name:'admin',
    components:{
        AdminCommentComponent,
        AdminCommentComponent
    },
    data (){
        return {
            comentarios:AdminCommentComponent,
            lolo: AdminCommentComponent
        }
  },
  methods:{
      changeComponent(){
          return "comentarios"
      }
  }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
.sidebar{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 200px;
    background: #11101d;
    padding: 6px 14px;
}
.sidebar .logo_content .logo{
    color: #fff;
    display: felx;
    height: 50px;
    width: 100%;
    align-items: center;
}
.logo_content .logo i{
    font-size: 28px;
    margin-right: 5px;
}
.logo_content .logo .logo_name{
    font-size: 20px;
    font-weight: 400;
}
.sidebar #btn{
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
.sidebar ul{
    margin-top: 20px;
}
.sidebar ul li{
    position: relative;
    height: 50px;
    width: 100%;
    margin: 0 5px;
    list-style: none;
    line-height: 50px;
    cursor: pointer;
}
.sidebar ul li a{
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    border-radius: 12px;
}
.sidebar ul li a:hover{
    color: #11101d;
    background: #fff;
}
.sidebar ul li i{
    height: 50px;
    min-width: 50px;
    border-radius: 12px;
    line-height: 50px;
    text-align: center;
}
.adm_content{
    position: absolute;
    height: 100%;
    width: calc(100% - 240px);
    left: 240px;
}
</style>