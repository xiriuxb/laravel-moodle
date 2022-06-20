<template>
	<header class="main-header" id="navbar">
		<div class="container">
			<nav class="navbar navbar-expand-md main-nav pl-0">
				<inertia-link href="/">
					<a class="navbar-brand">
						<img src="/images/logo.png" :alt="siteName + ' Logo'" />
					</a>
				</inertia-link>
				<div class="collapse navbar-collapse main-menu">
					<ul class="navbar-nav mr-auto f1">
						<li v-for="item in navElements" :key="item.name" class="nav-item text-uppercase">
							<inertia-link :href="item.path">
								{{ item.text }}
							</inertia-link>
						</li>
					</ul>
				</div>
				<div class="d-flex">
					<ul>
						<search-component></search-component>
					</ul>
					<ul class="flex-row align-items-center navbar-nav">
						<button class="btn navbar-toggler" type="button" @click="sidebarHandler"
							aria-label="Toggle navigation">
							<span class="icon-bar icon-bar-1"></span>
							<span class="icon-bar icon-bar-2"></span>
							<span class="icon-bar icon-bar-3"></span>
						</button>
					</ul>
				</div>
				<div class="collapse navbar-collapse main-menu">
					<ul class="navbar-nav mr-0" v-if="!$page.props.auth.user">
						<li>
							<a href="/">
								Regístrese
							</a>
						</li>
						<li>
							<inertia-link :href="'/ingreso'">
								<a class="btn btn-primary" id="loginBtn">
									Ingrese
								</a>
							</inertia-link>
						</li>
					</ul>
					<ul>
						<li class="navbar-nav" v-if="$page.props.auth.user">
							<user-menu-component></user-menu-component>
						</li>
					</ul>
				</div>
			</nav>
		</div>
		<!-- /.container -->
		<sidebar-component></sidebar-component>
	</header>
</template>

<script>
import SearchComponent from './search/SearchComponent.vue';
import SidebarComponent from './User/SidebarComponent.vue';
import UserMenuComponent from "./UserMenuComponent.vue";
export default {
	data() {
		return {
			movedSidebar: true,
			navElements: [
				{
					name: 'home-component',
					path: '/',
					text: 'Inicio',
					params: {}
				},
				{
					name: 'cursos',
					path: '/cursos/all',
					text: 'Cursos',
					params: {
					}
				},
			],
		};
	},
	components: { UserMenuComponent, SearchComponent, SidebarComponent },
	mounted() {
		console.log(this.$children);
	},
	methods: {
		sidebarHandler() {
			var sideBar = document.getElementById("mobile-nav");
			sideBar.style.transform = "translateX(-260px)";
			if (this.$data.movedSidebar) {
				sideBar.style.transform = "translateX(0px)";
				this.$data.movedSidebar = false;
			} else {
				sideBar.style.transform = "translateX(-260px)";
				this.$data.movedSidebar = true;
			}
		},
	},
	computed: {
		siteName() {
			return this.$page.props.appName;
		}
	},
};
</script>

<style scoped>

.main-menu {
	position: relative;
	z-index: 200;
}

.main-menu:not(:first-of-type) {
	flex: 0;
}

.main-menu li>a {
	font-weight: bold;
	letter-spacing: 1px;
	color: rgb(255, 255, 255);
	position: relative;
	text-decoration: none;
}

.main-menu li:not(:last-of-type) {
	margin-right: 30px;
}

.main-menu li>a::before {
	position: absolute;
	content: "";
	width: calc(100% - 1px);
	height: 1px;
	background: rgb(255, 255, 255);
	bottom: -6px;
	left: 0;
	transform: scale(0, 1);
	transform-origin: right center;
	z-index: -1;
	transition: transform 0.5s ease;
}

.main-menu li>a:hover::before {
	transform: scale(1, 1);
	transform-origin: left center;
}

.main-header {
	background-color: #d95d22;
	box-shadow: 0px 4px 7px #777;
	position: fixed;
	align-content: center;
	left: 0;
	z-index: 200;
	width: 100%;
	-webkit-transition: all 0.4s ease;
	transition: all 0.4s ease;
}

.navbar-brand {
	color: #fff;
}

.main-header .navbar-brand img {
	max-width: 200px;
	min-width: 200px;
	animation: fadeInLeft 0.4s both 0.4s;
}

.navbar-nav {
	align-items: center;
}

/* main-header end */

@media (max-width: 767px) {
	/*header starts*/

	.navbar-toggler {
		width: 40px;
		height: 40px;
		position: relative;
	}

	.main-header .container {
		align-content: center;
		align-items: center;
	}

	.main-header .navbar-nav {
		float: none;
		padding-left: 0;
		padding-right: 0;
		align-items: flex-start;
	}

	.main-header .navbar-nav li {
		display: inline-block;
		padding-bottom: 10px;
	}

	.main-menu li:not(:last-of-type) {
		margin-right: 0px;
	}

	/**/
	.main-header .navbar-toggler .icon-bar {
		background-color: #fff;
		margin: 0 auto 6px;
		border-radius: 0;
		width: 30px;
		height: 3px;
		position: absolute;
		right: 0;
		-webkit-transition: all 0.2s ease;
		transition: all 0.2s ease;
	}

	.main-header .navbar-toggler .icon-bar-1 {
		width: 10px;
		top: 8px;
	}

	.main-header .navbar-toggler .icon-bar-2 {
		width: 16px;
		top: 17px;
	}

	.main-header .navbar-toggler .icon-bar-3 {
		width: 20px;
		top: 26px;
	}

	.main-header .current .icon-bar {
		margin-bottom: 5px;
		border-radius: 0;
		display: block;
	}

	.main-header .current .icon-bar-1 {
		width: 18px;
	}

	.main-header .current .icon-bar-2 {
		width: 30px;
	}

	.main-header .current .icon-bar-3 {
		width: 10px;
	}

	/*header ends*/
}

.collapse.navbar-collapse{
	flex-direction: row-reverse;
}
</style>