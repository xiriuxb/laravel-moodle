"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_AdminCoursesMoodleComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminCoursesMoodleComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminCoursesMoodleComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_LoadingComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/LoadingComponent.vue */ "./resources/js/components/LoadingComponent.vue");
/* harmony import */ var _views_Admin_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Admin.vue */ "./resources/js/components/views/Admin.vue");
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
  layout: _views_Admin_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  components: {
    LoadingComponent: _components_LoadingComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      courses: [],
      loading: false,
      baseCursosUrl: "/api/admin/cursos-moodle",
      linksToPages: [],
      searchTerm: ""
    };
  },
  created: function created() {
    this.getCourses();
    this.debouncedGetAnswer = _.debounce(this.getCourses, 500);
  },
  watch: {
    searchTerm: function searchTerm(newQuestion, oldQuestion) {
      this.debouncedGetAnswer();
    }
  },
  computed: {
    moodleUrl: function moodleUrl() {
      return this.$page.props.siteData.moodleUrl;
    }
  },
  methods: {
    getCourses: function getCourses() {
      var _this = this;

      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.baseCursosUrl;

      if (this.searchTerm.length >= 2 || this.searchTerm === "") {
        this.loading = true;
        axios.get(url, {
          params: {
            search: this.searchTerm
          }
        }).then(function (response) {
          _this.courses = response.data.data;
          _this.linksToPages = response.data.links;
          _this.loading = false;
        })["catch"](function (error) {
          _this.$toast.open({
            message: "Error al cargar los cursos",
            type: "error",
            duration: 5000
          });
        });
      }
    },
    importar: function importar(id) {
      var _this2 = this;

      this.loading = true;
      axios.post("/api/admin/cursos-local/importar", {
        shortname: id
      }).then(function (response) {
        _this2.loading = false;

        _this2.$toast.open({
          message: "Curso importados correctamente",
          type: "success",
          duration: 5000
        });
      })["catch"](function (error) {
        _this2.loading = false;

        _this2.$toast.open({
          message: "Error al importar el curso",
          type: "error",
          duration: 5000
        });
      });
    },
    redirectToMoodle: function redirectToMoodle(cursoShortname) {
      window.open = (this.moodleUrl + "course/view.php?name=" + cursoShortname, "_blank");
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/AdminCoursesMoodleComponent.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Admin/AdminCoursesMoodleComponent.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminCoursesMoodleComponent_vue_vue_type_template_id_41332dc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminCoursesMoodleComponent.vue?vue&type=template&id=41332dc9&scoped=true& */ "./resources/js/components/Admin/AdminCoursesMoodleComponent.vue?vue&type=template&id=41332dc9&scoped=true&");
/* harmony import */ var _AdminCoursesMoodleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminCoursesMoodleComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/AdminCoursesMoodleComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminCoursesMoodleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminCoursesMoodleComponent_vue_vue_type_template_id_41332dc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminCoursesMoodleComponent_vue_vue_type_template_id_41332dc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "41332dc9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/AdminCoursesMoodleComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/AdminCoursesMoodleComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminCoursesMoodleComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCoursesMoodleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminCoursesMoodleComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminCoursesMoodleComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCoursesMoodleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/AdminCoursesMoodleComponent.vue?vue&type=template&id=41332dc9&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminCoursesMoodleComponent.vue?vue&type=template&id=41332dc9&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCoursesMoodleComponent_vue_vue_type_template_id_41332dc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCoursesMoodleComponent_vue_vue_type_template_id_41332dc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCoursesMoodleComponent_vue_vue_type_template_id_41332dc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminCoursesMoodleComponent.vue?vue&type=template&id=41332dc9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminCoursesMoodleComponent.vue?vue&type=template&id=41332dc9&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminCoursesMoodleComponent.vue?vue&type=template&id=41332dc9&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminCoursesMoodleComponent.vue?vue&type=template&id=41332dc9&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    { class: { disabled: _vm.loading }, attrs: { id: "adminCMoodle" } },
    [
      _vm.loading
        ? _c("loading-component", {
            attrs: {
              backgroundColor: "rgb(0 0 0 / 29%)",
              width: "100%",
              height: "100%",
              position: "fixed",
            },
          })
        : _vm._e(),
      _vm._v(" "),
      _c("AppHead", { attrs: { title: "Admin | Cursos (Moodle)" } }),
      _vm._v(" "),
      _c("h2", [_vm._v("Administración de cursos (Moodle)")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n    En este apartado simplemente puede observar la información básica de los\n    cursos de Moodle, además de importarlos a la base de la app Octavario. Si\n    desea modificar la información de los cursos debe hacerlo desde Moodle.\n    Al actualizarse un curso, éste se quita de la lista de destacados.\n  "
        ),
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.searchTerm,
            expression: "searchTerm",
          },
        ],
        staticClass: "form-control",
        attrs: {
          type: "text",
          placeholder: "Buscar curso",
          disabled: _vm.loading,
        },
        domProps: { value: _vm.searchTerm },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.searchTerm = $event.target.value
          },
        },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("table", { staticClass: "table" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            { class: _vm.loading ? "disabled" : "" },
            _vm._l(_vm.courses, function (course) {
              return _c("tr", { key: course.shortname }, [
                _c("td", [
                  _vm._v(
                    "\n            " + _vm._s(course.fullname) + "\n          "
                  ),
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(course.shortname))]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      class:
                        course.destacado == 1
                          ? "btn btn-outline-danger btn-acction"
                          : "btn btn-outline-primary btn-acction",
                      attrs: { disabled: _vm.loading },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.importar(course.shortname)
                        },
                      },
                    },
                    [
                      _vm.loading
                        ? _c("span", {
                            staticClass: "spinner-border spinner-border-sm",
                            attrs: { role: "status", "aria-hidden": "true" },
                          })
                        : _vm._e(),
                      _vm._v(
                        "\n              Importar/Actualizar\n            "
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { disabled: _vm.loading },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.redirectToMoodle(course.shortname)
                        },
                      },
                    },
                    [
                      _c("box-icon", {
                        staticClass: "align-middle",
                        attrs: { name: "link-external", color: "#fff" },
                      }),
                    ],
                    1
                  ),
                ]),
              ])
            }),
            0
          ),
        ]),
        _vm._v(" "),
        _c("nav", { attrs: { "aria-label": "..." } }, [
          _c(
            "ul",
            { staticClass: "pagination" },
            _vm._l(_vm.linksToPages, function (link) {
              return _c(
                "li",
                {
                  key: link.label,
                  staticClass: "page-item",
                  class: !link.active
                    ? link.url == null
                      ? "page-item disabled"
                      : "page-item"
                    : "page-item active",
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "page-link",
                      attrs: { href: "#", tabindex: "-1" },
                      on: {
                        click: function ($event) {
                          return _vm.getCourses(link.url)
                        },
                      },
                    },
                    [_c("div", { domProps: { innerHTML: _vm._s(link.label) } })]
                  ),
                ]
              )
            }),
            0
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nombre Corto")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Importar?")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Ver en Moodle")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);