/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
//Librerias
window.Vue = require('vue').default;
import VueRouter from 'vue-router'
import middlewares from '../middlewares';
import vueCountryRegionSelect from 'vue-country-region-select'
Vue.use(VueRouter)
Vue.use(vueCountryRegionSelect)
//Componentes del sitio
import LoginView from "./components/views/LoginView";
import HomeComponemt from "./components/HomeComponent";
import Home from "./components/views/Home";
import Index from "./components/views/Index";
import Cursos from "./components/views/Cursos";
import Admin from "./components/views/Admin.vue"
import Vue from 'vue';
import Curso from "./components/views/Curso";
import AdminTestimonialComponent from "./components/Admin/AdminTestimonialComponent"
import AdminCoursesComponent from "./components/Admin/AdminCoursesComponent"
import AdminUsersComponent from "./components/Admin/AdminUsersComponent"
import Notice from "./components/Email/Notice"	
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component('registro-component', require('./components/RegistroComponent.vue').default);
Vue.component('comments-component', require('./components/CommentsComponent.vue').default);
Vue.component('login-component', require('./components/auth/LoginComponent.vue').default);
Vue.component('footer-component', require('./components/FooterComponent.vue').default);
Vue.component('cursos-sm-component', require('./components/CursosSmComponent.vue').default);
Vue.component('success-reg-component', require('./components/SuccessRegisterComponent.vue').default);
Vue.component('home', require('./components/views/Home.vue').default);
Vue.component('index', require('./components/views/Index.vue').default);
Vue.component('login-view', require('./components/views/LoginView.vue').default);
Vue.component('admin', require('./components/views/Admin.vue').default);
Vue.component('mailv', require('./components/auth/VerificationSendView.vue').default);
Vue.component('cursos', require('./components/views/Cursos.vue').default);
Vue.component('curso', require('./components/views/Curso.vue').default);
Vue.component('user-menu-component', require('./components/UserMenuComponent.vue').default);
Vue.component('filter-component', require('./components/FilterComponent.vue').default);
Vue.component('cursos-component', require('./components/CursosComponent.vue').default);
Vue.component('home-component', require('./components/HomeComponent.vue').default);
Vue.component('notice', require('./components/Email/Notice.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({
    routes: [
        {
            path: '/', component: Index, name: 'index', meta: { title: 'Academia Octavario' },
            children: [
                {path: '', component: Home, name: 'home',
                    children: [
                        {path: '/', component: HomeComponemt, name: 'home-component',},
                        { path: '/cursos', component: Cursos, name: 'cursos' },
                        { path: '/curso/:shortname', component: Curso, name: 'curso' },
                        { path: '/email/verify',component: Notice, name: 'email'},
                    ],
                },
                {path: '/admin', component: Admin, name: 'admin', meta: { title: 'Octavario Admin' },
                    children:[
                        { path: '/admin/testimonios', component: AdminTestimonialComponent, name: 'admin-comment' },
                        { path: '/admin/cursos', component: AdminCoursesComponent, name: 'admin-courses' },
                        { path: '/admin/usuarios', component: AdminUsersComponent, name: 'admin-users' },
                    ],
                },
                { path: '/ingreso', component: LoginView, name: 'ingreso-view' },
            ]
        },
        //{ path: '/test', component: AdminCommentComponent, name: 'test' },
    ],
    mode: 'history'
})

// s

const app = new Vue({
    el: '#app',
    router: router
});