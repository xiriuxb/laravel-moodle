<template>
	<div>
		<AppHead :title="'Admin'" />
		<div class="sidebar" :class="movedSidebar ? 'sidebar' : 'sidebar-moved'" id="sidebar">
			<button class="closeBtn" @click="sidebarHandler" title="Mover menu">
				<div class="arrow" :class="movedSidebar ? '' : 'arrow-expanded'">
					<div class="line"></div>
					<div class="line"></div>
				</div>
			</button>
			<div class="scroll">
				<div>
					<div class="logo-name">
						<inertia-link :href="route('home')">
							{{ `${appName} (Admin) ` }}
						</inertia-link>
					</div>
				</div>
				<ul class="nav-list">
					<li v-for="menu_item in menu_items" :key="menu_item.name"
						v-if="menu_item.permission != 'su' || $page.props.auth.role == 'su_admin'">
						<inertia-link :href="route(menu_item.component)">
							<span>{{ menu_item.name }}</span>
						</inertia-link>
					</li>
				</ul>
			</div>

		</div>
		<div id="admin" class="adm-content" :class="movedSidebar ? 'adm-content' : 'adm-content-moved'">
			<slot />
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
			movedSidebar: true,
			menu_items: [
				{ name: 'Testimonios', component: 'admin.testimonials', permission: '' },
				{ name: 'Cursos', component: 'admin.cursos', permission: '' },
				{ name: 'Cursos Moodle', component: 'admin.cursos-moodle', permission: '' },
				{ name: 'Usuarios', component: 'admin.users', permission: '' },
				{ name: 'Matriculas Pendientes', component: 'admin.matriculas-pendientes', permission: '' },
				{ name: 'Imágenes', component: 'admin.site-images', permission: 'su' },
				{ name: 'Configuración', component: 'admin.site-config', permission: 'su' },
			],
			error: '',
		};
	},
	methods: {
		sidebarHandler() {
			this.movedSidebar = !this.movedSidebar;
		},
	},
	computed: {
		appName() {
			return this.$page.props.appName;
		},
	},
	errorCaptured() {
		if (this.$page.props.errors.message) {
			this.error = this.$page.props.errors.message;
			this.$toast.open({
				message: this.$page.props.errors.message,
				type: 'error',
			});
		}
	},
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.sidebar {
	width: 200px;
	z-index: 100;
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	background: #11101d;
	padding: 6px 0px 6px 14px;
	transition: transform 0.3s ease-in-out;
}

.sidebar-moved {
	transform: translateX(-200px);
}

.sidebar .closeBtn {
	fill: white;
	position: absolute;
	width: 40px;
	height: 40px;
	background-color: #11101d;
	border-radius: 50%;
	left: 178px;
	cursor: pointer;
}

.sidebar .closeBtn box-icon {
	position: relative;
	left: 5px;
	top: 2px;
}

.sidebar .closeBtn:hover {
	fill: #007bff;
}

.logo-name {
	color: white;
	font-size: x-large
}

.sidebar ul {
	margin-top: 20px;
}

.sidebar ul li {
	margin: 0 5px;
	list-style: none;
	line-height: 50px;
}

.sidebar ul li a {
	color: #fff;
	display: flex;
	text-decoration: none;
	transition: all 0.4s ease;
	border-radius: 12px;
}

.sidebar ul li a:hover {
	color: #11101d;
	background: #fff;
}

.adm-content {
	padding: 15px;
	position: absolute;
	height: auto;
	width: calc(100% - 200px);
	left: 200px;
	transition: transform 0.3s ease-in-out;
}

.adm-content-moved {
	transform: translateX(-200px);
	width: 100%;
	height: 100%;
}

.scroll{
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
}

::v-deep h2 {
	font-size: 20px;
	font-weight: 400;
	margin-bottom: 20px;
}

::v-deep .btn-danger {
	background-color: #dc3545;
}

::v-deep .btn-danger:hover:not(:disabled) {
	background-color: #c82333;
}

::v-deep .btn-primary {
	background-color: #007bff;
}

::v-deep .btn-primary:hover:not(:disabled) {
	background-color: #005dc0;
}

/* MODALS */
::v-deep .modal-mask {
	position: fixed;
	z-index: 600;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: table;
	transition: opacity 0.3s ease;
}

::v-deep .modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}

::v-deep .modal-container {
	width: 300px;
	margin: 0px auto;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
	font-family: Helvetica, Arial, sans-serif;
}

::v-deep .modal-header h3 {
	margin-top: 0;
	color: #42b983;
}

::v-deep .modal-body {
	margin: 8px 0;
}

::v-deep .modal-header {
	padding: 10px 10px;
}

::v-deep .disabled {
	pointer-events: none;
	cursor: not-allowed;
}

/* Boton cerrar-abrir */
.arrow{
  padding:0.375rem 0.75rem;
}
.line:first-of-type{
  transform: rotate(45deg);
}
.line:last-of-type{
  transform: rotate(-45deg);
}
.arrow-expanded .line:first-of-type{
  transform: translateY(5px) translateX(10px) rotate(-45deg);
}
.arrow-expanded .line:last-of-type{
  transform: translateY(-5px) translateX(10px) rotate(45deg);
}
.line{
  position:fixed;
  width:15px;
  height: 3px;
  border-radius: 3px;
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
}
</style>