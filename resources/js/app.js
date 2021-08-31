/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import VueRouter from 'vue-router'
import vueCountryRegionSelect from 'vue-country-region-select'
Vue.use(VueRouter)
Vue.use(vueCountryRegionSelect)
import LoginView from "./components/views/LoginView";
import Home from "./components/views/Home";
import SuccessRegisterComponent from "./components/SuccessRegisterComponent"
import Admin from "./components/views/Admin.vue"
import Vue from 'vue';
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('navbar-component', require('./components/NavbarComponent.vue').default);
Vue.component('caratula-component',require('./components/CaratulaComponent.vue').default);
Vue.component('registro-component', require('./components/RegistroComponent.vue').default);
Vue.component('comments-component', require('./components/CommentsComponent.vue').default);
Vue.component('login-component', require('./components/auth/LoginComponent.vue').default);
Vue.component('footer-component', require('./components/FooterComponent.vue').default);
Vue.component('cursossm-component', require('./components/CursosSmComponent.vue').default);
Vue.component('success-reg-component', require('./components/SuccessRegisterComponent.vue').default);
Vue.component('home', require('./components/views/Home.vue').default);
Vue.component('login-view', require('./components/views/LoginView.vue').default);
Vue.component('admin', require('./components/views/Admin.vue').default);
Vue.component('adminComments', require('./components/Admin/AdminCommentComponent.vue').default);
Vue.component('admin-courses-component', require('./components/Admin/AdminCoursesComponent.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({
    routes: [
        {path:'/ingreso',component:LoginView,name:'ingreso'},
        {path:'/',component:Home,name:'home'},
        {path:'/registro-exitoso',component:SuccessRegisterComponent,name:'succ-reg'},
        {path:'/admin',component:Admin,name:'admin'},

    ],
    mode:'history'
})
const app = new Vue({
    el: '#app',
    router:router
});

