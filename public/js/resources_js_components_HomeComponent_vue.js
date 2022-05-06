(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_HomeComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegistroComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistroComponent.vue */ "./resources/js/components/RegistroComponent.vue");
/* harmony import */ var _search_SearchComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search/SearchComponent.vue */ "./resources/js/components/search/SearchComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CaratulaComponent",
  components: {
    RegistroComponent: _RegistroComponent_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    SearchComponent: _search_SearchComponent_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      titulo1: "Aprende con nosotros"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CaratulaComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaratulaComponent.vue */ "./resources/js/components/CaratulaComponent.vue");
/* harmony import */ var _CursosSmComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CursosSmComponent.vue */ "./resources/js/components/CursosSmComponent.vue");
/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Home.vue */ "./resources/js/components/views/Home.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  layout: _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__.default,
  props: {
    message: {
      type: String,
      required: false,
      "default": ''
    }
  },
  data: function data() {
    return {
      pasos: [{
        titulo: 'Regístrese',
        descripcion: 'Solo necesitas un correo electrónico.',
        imagen: 'step1-1.png'
      }, {
        titulo: 'Inscríbase en un curso',
        descripcion: 'Tenemos cursos gratuitos y de pago que se adaptan a tus necesidades.',
        imagen: 'step2.png'
      }, {
        titulo: 'Comience a aprender',
        descripcion: 'Todos nuestros cursos tienen lecciones en video y recursos educativos.',
        imagen: 'step3.png'
      }]
    };
  },
  computed: {
    message2: function message2() {
      return this.message;
    }
  },
  components: {
    CursosSmComponent: _CursosSmComponent_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    CaratulaComponent: _CaratulaComponent_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  watch: {},
  beforeCreate: function beforeCreate() {
    console.log('message2 beforeCreate: ' + this.message2);

    if (this.message2 != '') {
      this.$toast.open({
        message: "beforCreate",
        type: "error",
        duration: 5000
      });
    }
  },
  created: function created() {
    console.log('message2 created: ' + this.message2);
  },
  beforeMount: function beforeMount() {
    console.log('message2 beforeMount: ' + this.message2);
  },
  mounted: function mounted() {
    console.log('message2 mounted: ' + this.message2);
  },
  beforeUpdate: function beforeUpdate() {
    console.log('message2 beforeUpdate: ' + this.message2);
  },
  updated: function updated() {
    console.log('message2 updated: ' + this.message2);
  },
  beforeDestroy: function beforeDestroy() {
    console.log('message2 beforeDestroy: ' + this.message2);
  },
  destroyed: function destroyed() {
    console.log('message2 destroyed: ' + this.message2);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.img-fluid[data-v-4fb6ec1f] {\n  position: relative;\n}\n.img-fluid[data-v-4fb6ec1f]::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background-image: url(https://img.freepik.com/foto-gratis/estudiantes-moda-sonriendo-camara-juntos_13339-102856.jpg?size=626&ext=jpg);\n  filter: brightness(56%);\n  position: absolute;\n  background-repeat: repeat;\n  z-index: 0;\n}\n.registro[data-v-4fb6ec1f] {\n  position: relative;\n  max-width: 500px;\n  margin-top: 60px;\n}\n.img-fluid[data-v-4fb6ec1f] {\n  min-height: 400px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.quote[data-v-782dcf83]{\n    font: 400 72px \"Arizona\", Helvetica, sans-serif;\n    color: #6e6cf7;\n    text-align: center;\n}\n.post-title[data-v-782dcf83]{\n    color: #5f61f4;\n}\nbody[data-v-782dcf83]{\n    background-color: rgb(255, 255, 255);\n    min-height: 100%;\n}\n.titulo[data-v-782dcf83]{\n    font-size: 50px;\n    text-align: center;\n    padding: 50px;\n    color: #002e45;\n}\n.section-pair[data-v-782dcf83]{\n    text-align: center;\n    font-size: 20px;\n}\n.section-odd[data-v-782dcf83]{\n    background-color: rgb(255, 255, 255);\n}\n.sp-card[data-v-782dcf83]{\n    background-color: transparent;\n    border-color: transparent;\n}\n@media (min-width: 544px) {\nh1[data-v-782dcf83] {font-size:3rem;} /*1rem = 16px*/\n}\n@media (min-width: 768px) {\nh1[data-v-782dcf83] {font-size:4.5rem;} /*1rem = 16px*/\n}\n@media (min-width: 992px) {\nh1[data-v-782dcf83] {font-size:4.5rem;} /*1rem = 16px*/\n}\n@media only screen and (max-width: 700px) {\nsection.benefits[data-v-782dcf83]{\n    background-image: none !important;\n}\n}\n@media only screen and (min-width: 1300px) {\nsection.benefits[data-v-782dcf83]{\n    background-size: 20% !important;\n}\n}\ndiv p.bienvenido[data-v-782dcf83]{\n      font-size: 35px;\n      text-align: center;\n      padding-bottom: 15px;\n      margin-bottom: 0px;\n}\n.img-fluid.icono[data-v-782dcf83]{\n      width: 60px;\n}\nsection.benefits[data-v-782dcf83]{\n      background-image: url(/images/smiling-beautiful-europe-book-school-education1.png);\n      background-repeat: no-repeat;\n      background-position: 90%;\n      background-size: 25%;\n}\n.row div.paddedd[data-v-782dcf83]{\n      padding-bottom: 2rem;\n      max-height: -webkit-fit-content;\n      max-height: -moz-fit-content;\n      max-height: fit-content;\n      font-size: 23px;\n      font-weight: bold;\n}\n.row div.paddedd .row[data-v-782dcf83]{\n    align-items: center;\n}\n.col-4[data-v-782dcf83]{\n    max-width: -webkit-fit-content;\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n}\n.uno[data-v-782dcf83]{\n    height: 200px;\n    padding-bottom: 0px;\n}\n.dos[data-v-782dcf83]{\n    height: 200px;\n    background-color: #5f61f4;\n    width: 100%;\n    border-radius: 50%;\n    border-start-start-radius: initial;\n    border-bottom-left-radius: initial;\n    -webkit-animation: ease-in 3ms alternate alternate unset;\n            animation: ease-in 3ms alternate alternate unset;\n}\n.texto[data-v-782dcf83]{\n    padding-bottom: 40px;\n    font-size: 30px;\n}\n.univ-back[data-v-782dcf83]{\n    background-image: url(/images/university.svg);\n    background-position: bottom bottom 45px;\n}\n.card-header img[data-v-782dcf83]{\n    width: 100px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CaratulaComponent_vue_vue_type_style_index_0_id_4fb6ec1f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CaratulaComponent_vue_vue_type_style_index_0_id_4fb6ec1f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CaratulaComponent_vue_vue_type_style_index_0_id_4fb6ec1f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_style_index_0_id_782dcf83_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_style_index_0_id_782dcf83_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_style_index_0_id_782dcf83_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/CaratulaComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/CaratulaComponent.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CaratulaComponent_vue_vue_type_template_id_4fb6ec1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaratulaComponent.vue?vue&type=template&id=4fb6ec1f&scoped=true& */ "./resources/js/components/CaratulaComponent.vue?vue&type=template&id=4fb6ec1f&scoped=true&");
/* harmony import */ var _CaratulaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaratulaComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/CaratulaComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _CaratulaComponent_vue_vue_type_style_index_0_id_4fb6ec1f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css& */ "./resources/js/components/CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _CaratulaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CaratulaComponent_vue_vue_type_template_id_4fb6ec1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CaratulaComponent_vue_vue_type_template_id_4fb6ec1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4fb6ec1f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CaratulaComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/HomeComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/HomeComponent.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeComponent_vue_vue_type_template_id_782dcf83_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true& */ "./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true&");
/* harmony import */ var _HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/HomeComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _HomeComponent_vue_vue_type_style_index_0_id_782dcf83_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css& */ "./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _HomeComponent_vue_vue_type_template_id_782dcf83_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _HomeComponent_vue_vue_type_template_id_782dcf83_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "782dcf83",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/HomeComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CaratulaComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CaratulaComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaratulaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CaratulaComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaratulaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/HomeComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/HomeComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CaratulaComponent_vue_vue_type_style_index_0_id_4fb6ec1f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_style_index_0_id_782dcf83_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/CaratulaComponent.vue?vue&type=template&id=4fb6ec1f&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/CaratulaComponent.vue?vue&type=template&id=4fb6ec1f&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaratulaComponent_vue_vue_type_template_id_4fb6ec1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaratulaComponent_vue_vue_type_template_id_4fb6ec1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaratulaComponent_vue_vue_type_template_id_4fb6ec1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CaratulaComponent.vue?vue&type=template&id=4fb6ec1f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=template&id=4fb6ec1f&scoped=true&");


/***/ }),

/***/ "./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_782dcf83_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_782dcf83_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_782dcf83_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=template&id=4fb6ec1f&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=template&id=4fb6ec1f&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _c("div", { staticClass: "img-fluid" }, [
      _c(
        "div",
        {
          staticClass: "flex flex-wrap items-center px-10 py-10 pt-[120px]",
          attrs: { id: "caratula" }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "w-full md:w-1/2 md:px-3 relative flex flex-col items-center"
            },
            [
              _c(
                "h1",
                {
                  staticClass:
                    "font-bold text-orange-500 md:text-5xl text-3xl xl:self-start "
                },
                [_vm._v(_vm._s(_vm.titulo1))]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "self-center md:self-start text-2xl font-bold text-orange-200 align-baseline"
                },
                [_vm._v("Busca un curso")]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "self-center md:self-start text-2xl font-bold text-orange-200"
                },
                [
                  _vm._v(
                    "\n          O mira nuestro listado de cursos.\n          "
                  ),
                  _c(
                    "inertia-link",
                    {
                      staticClass:
                        "flex items-center font-bold w-full px-3 py-2 my-3 text-lg text-white border-2 border-orange-400 bg-[#002e45ab] rounded-md sm:mb-0 hover:bg-[#002e45] sm:w-auto",
                      attrs: { as: "button", type: "button", href: "/cursos" }
                    },
                    [
                      _vm._v("\n          Ir a cursos\n          "),
                      _c(
                        "span",
                        [
                          _c("box-icon", {
                            staticClass: "block",
                            attrs: { name: "right-arrow-alt", color: "#fff" }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          !_vm.$page.props.auth.user
            ? _c(
                "div",
                { staticClass: "w-full md:w-1/2 filter brightness-100" },
                [_c("registro-component")],
                1
              )
            : _vm._e()
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("caratula-component"),
      _vm._v(" "),
      _c("div", [
        _vm._m(0),
        _vm._v(" "),
        _c("section", { staticClass: "section-pair" }, [
          _c(
            "div",
            {
              staticClass:
                "flex flex-col sm:flex-row px-10 justify-content-center"
            },
            _vm._l(_vm.pasos, function(paso) {
              return _c(
                "div",
                {
                  key: paso.titulo,
                  staticClass:
                    "w-full md:w-1/3 border-2 my-1 sm:my-0 mx-1 rounded"
                },
                [
                  _c("div", {}, [
                    _c(
                      "div",
                      { staticClass: "card-header bg-transparent self-center" },
                      [
                        _c("img", {
                          staticClass: "inline",
                          attrs: {
                            src: "/images/" + paso.imagen,
                            alt: "regístrese"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("h5", { staticClass: "card-title font-bold" }, [
                        _vm._v(_vm._s(paso.titulo))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "card-text" }, [
                        _vm._v(_vm._s(paso.descripcion))
                      ])
                    ])
                  ])
                ]
              )
            }),
            0
          )
        ]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("section", [_c("cursos-sm-component")], 1),
        _vm._v(" "),
        _c(
          "section",
          { staticClass: "section-odd" },
          [_c("comments-component")],
          1
        ),
        _vm._v(" "),
        _vm._m(2)
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-odd" }, [
      _c("h3", { staticClass: "titulo" }, [_vm._v("BIENVENIDO")]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("p", { staticClass: "bienvenido" }, [
          _vm._v(
            "\n              Inicia tu aprendizaje de calidad.\n          "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      { staticClass: "section-odd benefits", attrs: { id: "benefits" } },
      [
        _c("h3", { staticClass: "titulo" }, [_vm._v("BENEFICIOS")]),
        _vm._v(" "),
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-5 paddedd" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-4" }, [
                  _c("img", {
                    staticClass: "img-fluid icono",
                    attrs: { src: "/images/reloj.png", alt: "acceso 24/7" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _vm._v(
                    "\n                        ACCESO 24/7\n                    "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-5 paddedd" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-4" }, [
                  _c("img", {
                    staticClass: "img-fluid icono",
                    attrs: { src: "/images/success.png", alt: "a tu ritmo" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _vm._v(
                    "\n                          ESTUDIA A TU RITMO\n                      "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-5 paddedd" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-4" }, [
                  _c("img", {
                    staticClass: "img-fluid icono",
                    attrs: { src: "/images/anywhere.png", alt: "donde quieras" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _vm._v(
                    "\n                          ESTUDIA DONDE QUIERAS\n                      "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-5 paddedd" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-4" }, [
                  _c("img", {
                    staticClass: "img-fluid icono",
                    attrs: { src: "/images/bitmap.png", alt: "interactiva" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _vm._v(
                    "\n                        PLATAFORMA INTERACTIVA\n                    "
                  )
                ])
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "section-pair univ-back" }, [
      _c("h3", { staticClass: "titulo" }, [
        _vm._v("¿Qué contienen nuestros cursos?")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container texto" }, [
        _vm._v(
          "\n          Nuestro deseo es que estudies la carrera que deseas, prepárate con este sistema de aprendizaje interactivo, que cuenta con videos explicativos, ejercicios y más recursos.\n      "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);