<template>
	<div id="adminUsers" :class="{ 'disabled': loading }">
		<AppHead :title="'Admin | Usuarios'" />
		<loading-component :backgroundColor="'rgb(0 0 0 / 29%)'" :width="'100%'" :height="'100%'" :position="'fixed'"
			v-if="setting">
		</loading-component>
		<h2>Administración de usuarios</h2>
		<div class="container">
			<form class="input-group mb-3" :disabled='setting'>
				<div>
					<label>
						<input type="checkbox" v-model="usersDeleted" name="deletedFilter"
							id="deletedFilter">Eliminados</label>
				</div>
				<div class="input-group flex-row flex-wrap">
					<div class="input-group-prepend">
						<select class="custom-select" id="roleSelect" v-model="role">
							<option value="999">Todos</option>
							<option v-for="role in roles" :key="role.id" :value="role.id">{{ role.name }}</option>
						</select>
					</div>
					<input type="text" class="form-control" v-model="search" placeholder="Buscar usuario" title="Buscar usuario">
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
						<button class="btn btn-outline-primary border-0 p-0" title="Editar"
							@click="showModal(user.username)">
							<box-icon name="edit-alt"></box-icon>
						</button>
						<inertia-link class="btn btn-outline-primary border-0 p-0" title="Ver Pagos"
							:href="`/admin/matriculas/usuario/${user.username}`"
							v-if="$page.props.auth.role == 'su_admin'">
							<box-icon name='note'></box-icon>
						</inertia-link>
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
		<change-role-modal v-if="isModalVisible" :userid="selectedUser" :roles="this.roles" @close="closeModal">
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
		axios.get(this.route('admin.user.roles'))
		.then(({data}) => {
			this.roles = data;
		}).catch(() => {
			this.$toast.open({
				message: 'Error al cargar roles',
				type: 'error'
			});
		});
	},
	data() {
		return {
			loading: true,
			roles: [],
			users: [],
			linksToPages: [],
			role: 999,
			search: '',
			setting: false,
			isModalVisible: false,
			isModalPagosVisible: false,
			selectedUser: null,
			usersDeleted: false,
			totalResultados: 0
		}
	},
	methods: {
		loadUsers() {
			this.setting = true;
			axios.get(this.route('admin.user.index', { role: this.role, keyword: this.search, deleted: this.usersDeleted }))
			.then(({data}) => {
				this.users = data.data;
				this.linksToPages = data.links;
				this.totalResultados = data.total;
			}).catch(() => {
				this.$toast.open({
					message: 'Error al cargar',
					type: 'error'
				});
			})
			.finally(()=>{
				this.loading = false;
				this.setting = false;
			});
		},
		showModal(id) {
			this.isModalVisible = true;
			this.selectedUser = id;
		},
		closeModal() {
			this.isModalVisible = false;
			this.selectedUser = null;
		},
		showModalPagos(id) {
			this.isModalPagosVisible = true;
			this.selectedUser = id;
		},
		closeModalPagos() {
			this.isModalPagosVisible = false;
			this.selectedUser = null;
		},
	}
};
</script>

<style scoped>
#adminUsers {
	font-size: small;
}
</style>