"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CaratulaComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    RegistroComponent: _RegistroComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SearchComponent: _search_SearchComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      titulo1: "Aprende con nosotros"
    };
  },
  computed: {
    moodleUrl: function moodleUrl() {
      return this.$page.props.siteData.moodleUrl;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegistroComponent.vue?vue&type=script&scoped=true&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegistroComponent.vue?vue&type=script&scoped=true&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_LoadingComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/LoadingComponent.vue */ "./resources/js/components/LoadingComponent.vue");
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
  components: {
    LoadingComponent: _components_LoadingComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loading: false,
      btnText: "Registrarse",
      form: this.$inertia.form({
        name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
      })
    };
  },
  methods: {
    saveFrom: function saveFrom() {
      var _this = this;

      this.errors = {};
      this.form.post(this.route('register'), {
        onStart: function onStart() {
          return _this.disableBtnSubmit(true);
        },
        onFinish: function onFinish() {
          return _this.disableBtnSubmit(false);
        }
      });
    },
    isLetter: function isLetter(e) {
      var _char = String.fromCharCode(e.keyCode);

      if (/^[áéíóúñA-Za-z]+$/.test(_char)) return true;else e.preventDefault(); // If not match, don't add to input text
    },
    isNumber: function isNumber(e) {
      var _char2 = String.fromCharCode(e.keyCode);

      if (/^[0-9]/.test(_char2)) return true;else e.preventDefault();
    },
    disableBtnSubmit: function disableBtnSubmit(value) {
      var button = document.getElementById("submit");
      button.disabled = value;

      if (value) {
        this.loading = value;
        this.btnText = "";
      } else {
        this.loading = false;
        this.btnText = "Registrarse";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.img-fluid[data-v-4fb6ec1f] {\r\n  position: relative;\r\n  min-height: 400px;\n}\n.img-fluid[data-v-4fb6ec1f]::before {\r\n  content: \"\";\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  background-image: url(\"/images/caratula.png\");\r\n  filter: brightness(56%);\r\n  position: absolute;\r\n  background-repeat: repeat;\r\n  z-index: 0;\n}\n.caratula-button[data-v-4fb6ec1f] {\r\n  display: flex;\r\n  align-items: center;\r\n  font-weight: bold;\r\n  padding: 10px 15px;\r\n  margin: 15px;\r\n  font-size: large;\r\n  color: #fff;\r\n  border: solid 1px #fb923c;\r\n  background-color: #002e45ab;\r\n  border-radius: 0.375rem;\n}\n.caratula-button span[data-v-4fb6ec1f] {\r\n  fill: white;\n}\n.caratula-button span box-icon[data-v-4fb6ec1f] {\r\n  vertical-align: text-bottom;\n}\n.caratula-button a[data-v-4fb6ec1f] {\r\n  color: #fff;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegistroComponent.vue?vue&type=style&index=0&id=3c7b4e2f&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegistroComponent.vue?vue&type=style&index=0&id=3c7b4e2f&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nsection[data-v-3c7b4e2f] {\r\n  display: block;\r\n  position: relative;\n}\nlabel[data-v-3c7b4e2f] {\r\n  margin-bottom: -0.3rem;\n}\n*[data-v-3c7b4e2f],[data-v-3c7b4e2f]::after,[data-v-3c7b4e2f]::before {\r\n  box-sizing: border-box;\n}\nform[data-v-3c7b4e2f] {\r\n  display: block;\r\n  margin-top: 0em;\n}\nh2[data-v-3c7b4e2f] {\r\n  line-height: 1.66;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: 900;\r\n  color: #222;\r\n  font-size: 24px;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  margin-bottom: 10px;\n}\n.signup-content[data-v-3c7b4e2f] {\r\n  background: #fff;\r\n  border-radius: 10px;\r\n  -moz-border-radius: 10px;\r\n  -webkit-border-radius: 10px;\r\n  -o-border-radius: 10px;\r\n  -ms-border-radius: 10px;\r\n  padding: 20px 20px;\r\n  max-width: 350px;\r\n  min-width: 346px;\r\n  margin: 30px 0;\n}\n.signup-content .row[data-v-3c7b4e2f] {\r\n  margin-right: 0;\r\n  margin-left: 0;\n}\n.form-submit[data-v-3c7b4e2f] {\r\n  font-weight: 700;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  margin: 0;\r\n  width: 100%;\n}\n.loginhere-link[data-v-3c7b4e2f] {\r\n  margin: 0px;\r\n  color: rgb(87, 110, 241);\r\n  cursor: pointer;\n}\ndiv.col[data-v-3c7b4e2f] {\r\n  padding: 0px;\n}\n.alert[data-v-3c7b4e2f] {\r\n  position: relative;\r\n  padding: 0.1rem 0.4rem;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n  font-size: 0.7rem;\r\n  margin-bottom: 2px;\n}\n#requerido[data-v-3c7b4e2f] {\r\n  font-size: 14px;\r\n  top: 3px;\r\n  bottom: 3px;\r\n  position: relative;\n}\n.col.compartido[data-v-3c7b4e2f] {\r\n  margin-right: 3px;\n}\n.form-control[data-v-3c7b4e2f] {\r\n  border: 0;\r\n  border-bottom: 1px solid #ced4da;\r\n  border-radius: 0;\r\n  padding-bottom: 1px;\r\n  padding-top: 1px;\r\n  height: calc(1.5em + 0.4rem);\n}\n.form-group[data-v-3c7b4e2f] {\r\n  margin-bottom: 0.3rem;\n}\n.btn-submit[data-v-3c7b4e2f] {\r\n  background-color: tomato;\r\n  font-family: \"Roboto\", sans-serif;\r\n  box-shadow: 0px 4px 7px #777;\r\n  height: 60px;\n}\n.btn-submit[data-v-3c7b4e2f]:hover {\r\n  background-color: #d44a0b;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CaratulaComponent_vue_vue_type_style_index_0_id_4fb6ec1f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CaratulaComponent_vue_vue_type_style_index_0_id_4fb6ec1f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CaratulaComponent_vue_vue_type_style_index_0_id_4fb6ec1f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegistroComponent.vue?vue&type=style&index=0&id=3c7b4e2f&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegistroComponent.vue?vue&type=style&index=0&id=3c7b4e2f&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroComponent_vue_vue_type_style_index_0_id_3c7b4e2f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegistroComponent.vue?vue&type=style&index=0&id=3c7b4e2f&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegistroComponent.vue?vue&type=style&index=0&id=3c7b4e2f&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroComponent_vue_vue_type_style_index_0_id_3c7b4e2f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroComponent_vue_vue_type_style_index_0_id_3c7b4e2f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/CaratulaComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/CaratulaComponent.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CaratulaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
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

/***/ "./resources/js/components/RegistroComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/RegistroComponent.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegistroComponent_vue_vue_type_template_id_3c7b4e2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistroComponent.vue?vue&type=template&id=3c7b4e2f&scoped=true& */ "./resources/js/components/RegistroComponent.vue?vue&type=template&id=3c7b4e2f&scoped=true&");
/* harmony import */ var _RegistroComponent_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistroComponent.vue?vue&type=script&scoped=true&lang=js& */ "./resources/js/components/RegistroComponent.vue?vue&type=script&scoped=true&lang=js&");
/* harmony import */ var _RegistroComponent_vue_vue_type_style_index_0_id_3c7b4e2f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistroComponent.vue?vue&type=style&index=0&id=3c7b4e2f&scoped=true&lang=css& */ "./resources/js/components/RegistroComponent.vue?vue&type=style&index=0&id=3c7b4e2f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegistroComponent_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistroComponent_vue_vue_type_template_id_3c7b4e2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _RegistroComponent_vue_vue_type_template_id_3c7b4e2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3c7b4e2f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RegistroComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CaratulaComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CaratulaComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaratulaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CaratulaComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaratulaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RegistroComponent.vue?vue&type=script&scoped=true&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/RegistroComponent.vue?vue&type=script&scoped=true&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroComponent_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegistroComponent.vue?vue&type=script&scoped=true&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegistroComponent.vue?vue&type=script&scoped=true&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroComponent_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CaratulaComponent_vue_vue_type_style_index_0_id_4fb6ec1f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=style&index=0&id=4fb6ec1f&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/RegistroComponent.vue?vue&type=style&index=0&id=3c7b4e2f&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/RegistroComponent.vue?vue&type=style&index=0&id=3c7b4e2f&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroComponent_vue_vue_type_style_index_0_id_3c7b4e2f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegistroComponent.vue?vue&type=style&index=0&id=3c7b4e2f&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegistroComponent.vue?vue&type=style&index=0&id=3c7b4e2f&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/CaratulaComponent.vue?vue&type=template&id=4fb6ec1f&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/CaratulaComponent.vue?vue&type=template&id=4fb6ec1f&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaratulaComponent_vue_vue_type_template_id_4fb6ec1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaratulaComponent_vue_vue_type_template_id_4fb6ec1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaratulaComponent_vue_vue_type_template_id_4fb6ec1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CaratulaComponent.vue?vue&type=template&id=4fb6ec1f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=template&id=4fb6ec1f&scoped=true&");


/***/ }),

/***/ "./resources/js/components/RegistroComponent.vue?vue&type=template&id=3c7b4e2f&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/RegistroComponent.vue?vue&type=template&id=3c7b4e2f&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroComponent_vue_vue_type_template_id_3c7b4e2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroComponent_vue_vue_type_template_id_3c7b4e2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroComponent_vue_vue_type_template_id_3c7b4e2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegistroComponent.vue?vue&type=template&id=3c7b4e2f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegistroComponent.vue?vue&type=template&id=3c7b4e2f&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=template&id=4fb6ec1f&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CaratulaComponent.vue?vue&type=template&id=4fb6ec1f&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _c("div", { staticClass: "img-fluid" }, [
      _c(
        "div",
        {
          staticClass: "flex flex-wrap items-center px-10 py-10 pt-[90px]",
          attrs: { id: "caratula" },
        },
        [
          _c(
            "div",
            {
              staticClass:
                "w-full md:w-1/2 md:px-3 relative flex flex-col items-center",
            },
            [
              _c(
                "h1",
                {
                  staticClass:
                    "font-bold text-orange-500 md:text-5xl text-3xl xl:self-start ",
                },
                [_vm._v(_vm._s(_vm.titulo1))]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "self-center md:self-start text-2xl font-bold text-orange-300",
                },
                [_vm._v("\n          Inscríbete en un curso\n        ")]
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  staticClass:
                    "caratula-button sm:mb-0 hover:bg-[#002e45] md:self-start sm:w-auto",
                  attrs: {
                    as: "button",
                    href: _vm.route("cursos", { categoria: "all" }),
                  },
                },
                [
                  _vm._v("\n          Lista de cursos\n          "),
                  _c(
                    "span",
                    [
                      _c("box-icon", {
                        staticClass: "block",
                        attrs: { name: "right-arrow-alt", color: "#fff" },
                      }),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "self-center md:self-start text-2xl font-bold text-orange-300",
                },
                [_vm._v("Y accede al contenido en Moodle (aula virtual)")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass:
                    "caratula-button sm:mb-0 hover:bg-[#002e45] sm:w-auto md:self-start",
                  attrs: { href: _vm.moodleUrl + "login/index.php" },
                },
                [
                  _vm._v("\n          Sitio Moodle\n          "),
                  _c(
                    "span",
                    [_c("box-icon", { attrs: { name: "link-external" } })],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "self-center md:self-start" }, [
                _vm._v(
                  "\n          Accedes con las mismas credenciales con las que te registras en este sitio.\n        "
                ),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          !_vm.$page.props.auth.user
            ? _c(
                "div",
                { staticClass: "w-full md:w-1/2 filter brightness-100" },
                [_c("registro-component")],
                1
              )
            : _vm._e(),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegistroComponent.vue?vue&type=template&id=3c7b4e2f&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegistroComponent.vue?vue&type=template&id=3c7b4e2f&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "container-fluid d-flex justify-content-center" },
    [
      _c(
        "div",
        { staticClass: "signup-content shadow-lg shadow-indigo-500/40" },
        [
          _c("h2", { staticClass: "font-bold" }, [_vm._v("Regístrese")]),
          _vm._v(" "),
          _c(
            "form",
            {
              staticClass: "signup-form",
              attrs: {
                autocomplete: "off",
                id: "signup-form",
                "preserve-scroll": "",
              },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.saveFrom.apply(null, arguments)
                },
              },
            },
            [
              _c(
                "div",
                {
                  staticClass: "row",
                  on: {
                    keypress: function ($event) {
                      return _vm.isLetter($event)
                    },
                  },
                },
                [
                  _c("div", { staticClass: "col compartido form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("*Primer nombre"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.name,
                          expression: "form.name",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "name",
                        id: "name",
                        placeholder: "Nombre",
                        required: "",
                        autocomplete: "first_name",
                        maxlength: "16",
                      },
                      domProps: { value: _vm.form.name },
                      on: {
                        keypress: function ($event) {
                          return _vm.isLetter($event)
                        },
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "name", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.$page.props.errors.name
                      ? _c("div", { staticClass: "alert alert-danger" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.$page.props.errors.name) +
                              "\n          "
                          ),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col form-group",
                      on: {
                        keypress: function ($event) {
                          return _vm.isLetter($event)
                        },
                      },
                    },
                    [
                      _c("label", { attrs: { for: "last_name" } }, [
                        _vm._v("*Primer apellido"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.last_name,
                            expression: "form.last_name",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "last_name",
                          id: "last_name",
                          placeholder: "Apellido",
                        },
                        domProps: { value: _vm.form.last_name },
                        on: {
                          keypress: function ($event) {
                            return _vm.isLetter($event)
                          },
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "last_name", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.$page.props.errors.last_name
                        ? _c("div", { staticClass: "alert alert-danger" }, [
                            _vm._v(
                              "\n            " +
                                _vm._s(_vm.$page.props.errors.last_name) +
                                "\n          "
                            ),
                          ])
                        : _vm._e(),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "email" } }, [
                  _vm._v("*Dirección de e-mail"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.email,
                      expression: "form.email",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    required: "",
                    type: "email",
                    name: "email",
                    id: "email",
                    placeholder: "user@example.com",
                    label: "Email",
                  },
                  domProps: { value: _vm.form.email },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "email", $event.target.value)
                    },
                  },
                }),
                _vm._v(" "),
                _vm.$page.props.errors.email
                  ? _c("div", { staticClass: "alert alert-danger" }, [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.$page.props.errors.email) +
                          "\n        "
                      ),
                    ])
                  : _vm._e(),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "password" } }, [
                  _vm._v("*Contraseña (Mínimo 8 caracteres)"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.password,
                      expression: "form.password",
                    },
                  ],
                  ref: "password",
                  staticClass: "form-control",
                  attrs: {
                    required: "",
                    type: "password",
                    name: "password",
                    id: "password",
                  },
                  domProps: { value: _vm.form.password },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "password", $event.target.value)
                    },
                  },
                }),
                _vm._v(" "),
                _vm.$page.props.errors.password
                  ? _c("div", { staticClass: "alert alert-danger" }, [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.$page.props.errors.password) +
                          "\n        "
                      ),
                    ])
                  : _vm._e(),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "password-confirmation" } }, [
                  _vm._v("*Confirme la contraseña"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.password_confirmation,
                      expression: "form.password_confirmation",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "password",
                    name: "password_confirmation",
                    id: "password_confirmation",
                    "data-vv-as": "password",
                    required: "",
                    "preserve-scroll": "",
                  },
                  domProps: { value: _vm.form.password_confirmation },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "password_confirmation",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "form-submit btn btn-submit",
                  attrs: {
                    type: "submit",
                    name: "submit",
                    id: "submit",
                    value: "Registrar",
                    role: "button",
                    disabled: _vm.form.processing,
                    "preserve-scroll": "",
                  },
                },
                [
                  _vm._v("\n        " + _vm._s(this.btnText) + "\n        "),
                  this.loading
                    ? _c("loading-component", { attrs: { position: "fixed" } })
                    : _vm._e(),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "relative font-[14px] top-1 bottom-1" }, [
            _vm._v("*Requerido"),
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "p",
            { attrs: { id: "registered" } },
            [
              _vm._v("\n      ¿Ya tiene una cuenta?\n      "),
              _c("inertia-link", { attrs: { href: _vm.route("ingreso") } }, [
                _c("a", { staticClass: "loginhere-link" }, [
                  _vm._v("Ingrese aquí"),
                ]),
              ]),
            ],
            1
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);