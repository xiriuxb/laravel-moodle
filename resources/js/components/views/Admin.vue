<template>
	<div>
		<AppHead :title="'Admin'" />
		<div class="sidebar" :class="movedSidebar?'sidebar':'sidebar-moved'" id="sidebar">
			<button class="closeBtn" @click="sidebarHandler">
				<box-icon name="x"></box-icon>
			</button>

			<div class="logo">
				<div class="logo-name">
					<inertia-link :href="'/'">
						{{`${appName} (Admin) `}}
					</inertia-link>
				</div>
			</div>
			<ul class="nav-list">
				<li v-for="menu_item in menu_items" :key="menu_item.name" v-if="menu_item.permission!='su' || $page.props.auth.role == 'su_admin'">
					<inertia-link :href="'/admin/'+menu_item.component">
						<span>{{ menu_item.name }}</span>
					</inertia-link>
				</li>
			</ul>
		</div>
		<div id="admin" class="adm-content" :class="movedSidebar?'adm-content':'adm-content-moved'">
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
				{ name: 'Testimonios', component: 'testimonials' , permission:''},
				{ name: 'Cursos', component: 'cursos', permission:'' },
				{ name: 'Cursos Moodle', component: 'cursos-moodle', permission:'' },
				{ name: 'Usuarios', component: 'users', permission:'' },
				{ name: 'Matriculas Pendientes', component: 'matriculas-pendientes', permission:'' },
				{ name: 'Imágenes', component: 'site-images', permission:'su' },
				{ name: 'Configuración', component: 'site-config', permission:'su' },
			],
			error:'',
		};
	},
	methods: {
		sidebarHandler() {
			this.movedSidebar = !this.movedSidebar;
		},
	},
	computed:{
		appName(){
			return this.$page.props.appName;
		},
	},
	errorCaptured() {
    if(this.$page.props.errors.message) {
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
	padding: 6px 14px;
	transition: transform 0.3s ease-in-out;
}

.sidebar-moved{
	transform: translateX(-200px);
}

.sidebar .closeBtn {
	fill: white;
	position: absolute;
	width: 40px;
	height: 40px;
	background-color: #11101d;
	border-radius: 50%;
	left: 175px;
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

.sidebar .logo_content .logo {
	color: #fff;
	display: felx;
	width: 100%;
	align-items: center;
}

.logo .logo-name {
	color: white;
	font-size: x-large
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

::v-deep h2 {
	font-size: 20px;
	font-weight: 400;
	margin-bottom: 20px;
}

::v-deep button.btn-primary[type=submit] {
	background-color: #007bff;
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
</style>