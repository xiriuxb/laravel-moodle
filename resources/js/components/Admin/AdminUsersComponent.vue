<template>
  <div id="adminUsers">
    <h3>Administración de usuarios</h3>
    <loading-component v-if="loadingInit"></loading-component>
    <div class="container" v-else>
      <loading-component :backgroundColor="'rgb(0 0 0 / 29%)'" :width="'100%'" :height="'100%'" v-if="setting">
      </loading-component>
      <form class="input-group mb-3" :disabled='setting'>
        <div>
          <label><input type="checkbox" v-model="usersDeleted" name="deletedFilter"
              id="deletedFilter">Eliminados</label>
        </div>
        <div class="input-group flex-row flex-wrap">
          <div class="input-group-prepend">
            <select class="custom-select" id="roleSelect" v-model="role">
              <option value="999">Todos</option>
              <option v-for="role in roles" :value="role.id">{{ role.name }}</option>
            </select>
          </div>
          <input type="text" class="form-control" v-model="search" placeholder="Buscar usuario"
            aria-label="Text input with dropdown button">
          <div class="input-group-append">
            <button class="btn btn-outline-primary" type="submit" id="inputButtonSearch"
              @click.prevent="loadUsers()">Buscar</button>
          </div>
        </div>
      </form>
      <div>
        Total Resultados: {{ totalResultados }}
      </div>
      <table class="table">
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Nombre usuario</th>
          <th>e-mail verificado?</th>
          <th>Acciones</th>
        </tr>
        <tr v-for="user in users" v-bind:key="user.username">
          <td>
            {{ user.name }} {{ user.last_name }}
          </td>
          <td>{{ user.email }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email_verified_at != null ? "Si" : "No" }}</td>
          <td>
            <button class="btn btn-outline-primary btn-acction border-0 p-0" title="Editar"
              @click="showModal(user.username)">
              <box-icon name="edit-alt"></box-icon>
            </button>
          </td>
        </tr>
      </table>
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item"
            :class="!link.active ? link.url == null ? 'page-item disabled' : 'page-item' : 'page-item active'"
            v-for="link in linksToPages" :key="link.label">
            <a class="page-link" href="#" @click="loadUsers(link.url)" tabindex="-1">
              <div v-html="link.label"></div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <change-role-modal v-if="isModalVisible" :id="selectedUser" :roles="this.roles" @close="closeModal">
    </change-role-modal>
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
  created() {
    this.loadUsers();
    axios.get('/api/admin/roles').then(response => {
      this.roles = response.data;
    }).catch(error => {
      console.log(error);
    });
  },
  data() {
    return {
      loadingInit: true,
      roles: [],
      users: [],
      linksToPages: [],
      baseUrl: '/api/admin/users',
      role: 999,
      search: '',
      setting: false,
      isModalVisible: false,
      selectedUser: null,
      usersDeleted: false,
      usersSuspended: false,
      totalResultados: 0
    }
  },
  methods: {
    loadUsers(url = this.baseUrl) {
      this.setting = true;
      axios.get(url, { params: { role: this.role, keyword: this.search, deleted: this.usersDeleted, suspended: this.usersSuspended } }).then((response) => {
        this.users = response.data.data;
        this.linksToPages = response.data.links;
        this.loadingInit = false;
        this.setting = false;
        this.totalResultados = response.data.total;
      }).catch((error) => {
        console.log(error);
      })
    },
    onClickEdit(id) {

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
  font-size: small;
}

#adminUsers {
  padding: 1rem;
}

.container {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
}
</style>