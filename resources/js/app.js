/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//Librerias
require('./bootstrap');
import Vue from 'vue';
import { createInertiaApp, Link} from '@inertiajs/inertia-vue'
import { ZiggyVue } from "ziggy";
import { Ziggy } from "./ziggy";
import vueCountryRegionSelect from 'vue-country-region-select'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { InertiaProgress } from '@inertiajs/progress'
import AppHead from './components/AppHead.vue'
Vue.use(vueCountryRegionSelect);
Vue.use(VueToast);
Vue.use(ZiggyVue, Ziggy);
Vue.use(Link);
Vue.use(AppHead);
Vue.config.debug = true;
Vue.config.devtools = true;
import 'boxicons';
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

Vue.component('footer-component', require('./components/FooterComponent.vue').default);
Vue.component('home', require('./components/views/Home.vue').default);
Vue.component('login-view', require('./components/views/LoginView.vue').default);
Vue.component('admin', require('./components/views/Admin.vue').default);
Vue.component('cursos', require('./components/views/Cursos.vue').default);
Vue.component('curso', require('./components/views/Curso.vue').default);
Vue.component('cursos-component', require('./components/CursosComponent.vue').default);
Vue.component('inertia-link',Link);
Vue.component('AppHead',AppHead);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// s
createInertiaApp({
    
    resolve: name => import(`./components/${name}`),
    setup({ el, App, props, plugin }) {
      Vue.use(plugin)
      Vue.use(ZiggyVue, Ziggy)
      Vue.component('inertia-link',Link)
      Vue.component('AppHead', AppHead)
      new Vue({
        render: h => h(App, props),
      }).$mount(el)
    },
  });

  InertiaProgress.init({
    showSpinner: true,
  });