"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_CursosUserComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/CursosUserComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/CursosUserComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/Home.vue */ "./resources/js/components/views/Home.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _LoadingComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoadingComponent.vue */ "./resources/js/components/LoadingComponent.vue");
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
  layout: _views_Home_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    LoadingComponent: _LoadingComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      misCursos: [],
      loading: false,
      termino_busqueda: ''
    };
  },
  methods: {
    redirectToMoodle: function redirectToMoodle(cursoShortname) {
      window.location.href = 'https://moodle.xiriuxb.org/course/view.php?name=' + cursoShortname;
    },
    busquedaCurso: function busquedaCurso() {
      var _this = this;

      if (this.termino_busqueda.length >= 2 || this.termino_busqueda === "") {
        this.loading = true;
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.visit('/mis-cursos?b=' + this.termino_busqueda, {
          only: ['data'],
          onStart: function onStart() {
            _this.loading = true;
          },
          onComplete: function onComplete() {
            _this.loading = false;
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/CursosUserComponent.vue?vue&type=style&index=0&id=e4d8423c&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/CursosUserComponent.vue?vue&type=style&index=0&id=e4d8423c&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#misCursos[data-v-e4d8423c] {\r\n  padding-top: 100px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/CursosUserComponent.vue?vue&type=style&index=0&id=e4d8423c&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/CursosUserComponent.vue?vue&type=style&index=0&id=e4d8423c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CursosUserComponent_vue_vue_type_style_index_0_id_e4d8423c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CursosUserComponent.vue?vue&type=style&index=0&id=e4d8423c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/CursosUserComponent.vue?vue&type=style&index=0&id=e4d8423c&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CursosUserComponent_vue_vue_type_style_index_0_id_e4d8423c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CursosUserComponent_vue_vue_type_style_index_0_id_e4d8423c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/User/CursosUserComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/User/CursosUserComponent.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CursosUserComponent_vue_vue_type_template_id_e4d8423c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CursosUserComponent.vue?vue&type=template&id=e4d8423c&scoped=true& */ "./resources/js/components/User/CursosUserComponent.vue?vue&type=template&id=e4d8423c&scoped=true&");
/* harmony import */ var _CursosUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CursosUserComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/User/CursosUserComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _CursosUserComponent_vue_vue_type_style_index_0_id_e4d8423c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CursosUserComponent.vue?vue&type=style&index=0&id=e4d8423c&scoped=true&lang=css& */ "./resources/js/components/User/CursosUserComponent.vue?vue&type=style&index=0&id=e4d8423c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CursosUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CursosUserComponent_vue_vue_type_template_id_e4d8423c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CursosUserComponent_vue_vue_type_template_id_e4d8423c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e4d8423c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User/CursosUserComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User/CursosUserComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/User/CursosUserComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CursosUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CursosUserComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/CursosUserComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CursosUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/User/CursosUserComponent.vue?vue&type=style&index=0&id=e4d8423c&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/User/CursosUserComponent.vue?vue&type=style&index=0&id=e4d8423c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CursosUserComponent_vue_vue_type_style_index_0_id_e4d8423c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CursosUserComponent.vue?vue&type=style&index=0&id=e4d8423c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/CursosUserComponent.vue?vue&type=style&index=0&id=e4d8423c&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/User/CursosUserComponent.vue?vue&type=template&id=e4d8423c&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/User/CursosUserComponent.vue?vue&type=template&id=e4d8423c&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CursosUserComponent_vue_vue_type_template_id_e4d8423c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CursosUserComponent_vue_vue_type_template_id_e4d8423c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CursosUserComponent_vue_vue_type_template_id_e4d8423c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CursosUserComponent.vue?vue&type=template&id=e4d8423c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/CursosUserComponent.vue?vue&type=template&id=e4d8423c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/CursosUserComponent.vue?vue&type=template&id=e4d8423c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/CursosUserComponent.vue?vue&type=template&id=e4d8423c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    { staticClass: "container", attrs: { id: "misCursos" } },
    [
      _c("AppHead", { attrs: { title: "Usuario | Cursos" } }),
      _vm._v(" "),
      _c("h2", { staticClass: "text-2xl" }, [
        _vm._v("Mis cursos "),
        _vm.loading
          ? _c("span", {
              staticClass: "spinner-border spinner-border-sm",
              attrs: { role: "status", "aria-hidden": "true" }
            })
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { action: "#" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.busquedaCurso.apply(null, arguments)
            }
          }
        },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.termino_busqueda,
                expression: "termino_busqueda"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "search", placeholder: "Buscar curso" },
            domProps: { value: _vm.termino_busqueda },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.termino_busqueda = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "btn btn-pimary bg-sky-700 text-slate-200 hover:bg-sky-900 hover:text-slate-200",
              attrs: { type: "submit", disabled: this.loading }
            },
            [
              _vm.loading
                ? _c("span", {
                    staticClass: "spinner-border spinner-border-sm",
                    attrs: { role: "status", "aria-hidden": "true" }
                  })
                : _vm._e(),
              _vm._v("\n      Buscar\n    ")
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("table", { staticClass: "table" }, [
          _c(
            "tbody",
            _vm._l(_vm.data, function(curso) {
              return _c("tr", { key: curso.shortname }, [
                _c("td", [_vm._v(_vm._s(curso.category))]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c(
                      "inertia-link",
                      {
                        staticClass: "text-blue-700",
                        attrs: { href: "/curso/" + curso.shortname }
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(curso.fullname) +
                            "\n            "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("td", [
                  curso.pivot.estado_matricula_id == 3
                    ? _c("div", { staticClass: "text-blue-900" }, [
                        _vm._v(
                          "\n              Su matrícula esta pendiente.\n            "
                        )
                      ])
                    : curso.pivot.estado_matricula_id == 2
                    ? _c("div", { staticClass: "text-red-900" }, [
                        _vm._v(
                          "\n              Su matrícula fue rechazada.*\n            "
                        )
                      ])
                    : curso.pivot.estado_matricula_id == 4
                    ? _c("div", { staticClass: "text-red-900" }, [
                        _vm._v(
                          "\n              Su matrícula fue cancelada/revocada.*\n            "
                        )
                      ])
                    : _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.redirectToMoodle(curso.shortname)
                            }
                          }
                        },
                        [
                          _c("span", { staticClass: "align-middle" }, [
                            _vm._v(" Ver en Moodle")
                          ]),
                          _vm._v(" "),
                          _c("box-icon", {
                            staticClass: "align-middle",
                            attrs: { name: "link-external", color: "#fff" }
                          })
                        ],
                        1
                      )
                ])
              ])
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "*En caso de tener un reclamo, por favor contáctese con nosotros"
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);