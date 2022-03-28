<template>
  <div id="adminUsers">
    <h3>Administración de usuarios</h3>
    <loading-component v-if="loadingInit"></loading-component>
    <div class="container" v-else>
      <loading-component :backgroundColor="'rgb(0 0 0 / 29%)'" :width="'100%'" :height="'100%'" v-if="setting"></loading-component>
      <form class="input-group mb-3" :disabled='setting'>
          <div class="input-group-prepend">
            <select class="custom-select" id="roleSelect" v-model="role">
              <option value="0">Todos</option>
              <option value="3">Usuarios</option>
              <option value="2">Administradores</option>
            </select>
          </div>
        <input type="text" class="form-control" v-model="search" placeholder="Buscar usuario" aria-label="Text input with dropdown button">
        <div class="input-group-append">
          <button class="btn btn-outline-primary" type="submit" id="inputButtonSearch" @click.prevent="loadUsers()">Buscar</button>
        </div>
      </form>
      <table class="table container">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Nombre usuario</th>
            <th scope="col">e-mail verificado?</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" v-bind:key="user.username">
            <td>
              <p>{{ user.name }} {{user.last_name}}</p>
            </td>
            <td>{{ user.email }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email_verified_at != null ? "Si" : "No" }}</td>
            <td>
              <button
                class="btn btn-outline-primary btn-acction"
                title="Editar"
                @click="showModal(user.username)"
              >
                <box-icon name="edit-alt"></box-icon>
              </button>
              <button
                class="btn btn-outline-danger btn-acction"
                title="Eliminar"
              >
                <box-icon name="trash"></box-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item" :class="!link.active ? link.url == null ? 'page-item disabled' : 'page-item' : 'page-item active'"
          v-for="link in linksToPages" :key="link.label">
          <a class="page-link" href="#" @click="loadUsers(link.url)" tabindex="-1">
            <div v-html="link.label"></div>
          </a>
        </li>
      </ul>
    </nav>
    </div>
    <change-role-modal v-if="isModalVisible" :id="selectedUser" @close="closeModal"></change-role-modal>
  </div>
</template>

<script>
import LoadingComponent from "../../components/LoadingComponent.vue";
import ChangeRoleModal from "../../components/Admin/Modals/ChangeRoleModal.vue";
import Admin from "../views/Admin.vue"
export default {
  layout: Admin,
  components: {
    LoadingComponent,
    ChangeRoleModal,
  },
    created(){
        this.loadUsers();
    },
    data(){
        return{
          loadingInit:true,
            users:[],
            linksToPages:[],
            baseUrl:'/api/admin/users',
            role:0,
            search:'',
            setting:false,
            isModalVisible:false,
            selectedUser:null,
        }
    },
    methods:{
      loadUsers(url= this.baseUrl){
        this.setting = true;
        axios.get(url,{params:{role:this.role, keyword:this.search}}).then((response)=>{
            this.users = response.data.data;
            this.linksToPages = response.data.links;
            this.loadingInit = false;
            this.setting = false;
        }).catch((error)=>{
            console.log(error);
        })
      },
      onClickEdit(id){
        
      },
      showModal(id) {
        this.isModalVisible = true;
        this.selectedUser = id;
      },
      closeModal() {
        this.isModalVisible = false;
        this.selectedUser = null;
      },
    }
};
</script>

<style scoped>
#adminUsers {
  padding: 1rem;
}
.container{
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
}
</style>