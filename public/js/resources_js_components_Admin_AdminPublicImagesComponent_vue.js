"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_AdminPublicImagesComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminPublicImagesComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminPublicImagesComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_Admin_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/Admin.vue */ "./resources/js/components/views/Admin.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: _views_Admin_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      loading: false,
      errors: [],
      favicon: null,
      caratula: null,
      logo: null
    };
  },
  methods: {
    onSubmitIcon: function onSubmitIcon() {
      var _this = this;

      this.errors = [];
      this.loading = true;
      var formData = new FormData();
      if (this.favicon) formData.append('favicon', this.favicon);
      axios.post('/api/admin/images/favicon', formData).then(function (res) {
        _this.loading = false;

        _this.$toast.open({
          message: 'Icono actualizado',
          type: 'success',
          duration: 5000
        });

        console.log(res);
      })["catch"](function (err) {
        _this.loading = false;
        console.log(err);
        _this.errors = err.response.data.errors;

        _this.$toast.open({
          message: 'Ocurrió un error',
          type: 'error',
          duration: 5000
        });
      });
    },
    onSubmitLogo: function onSubmitLogo() {
      var _this2 = this;

      this.errors = [];
      this.loading = true;
      var formData = new FormData();
      if (this.logo) formData.append('logo', this.logo);
      axios.post('/api/admin/images/logo', formData).then(function (res) {
        _this2.loading = false;

        _this2.$toast.open({
          message: 'Actualizado correctamente',
          type: 'success',
          duration: 5000
        });

        console.log(res);
      })["catch"](function (err) {
        _this2.loading = false;
        console.log(err);
        _this2.errors = err.response.data.errors;

        _this2.$toast.open({
          message: 'Error al actualizar',
          type: 'error',
          duration: 5000
        });
      });
    },
    onSubmitCaratula: function onSubmitCaratula() {
      var _this3 = this;

      this.errors = [];
      this.loading = true;
      var formData = new FormData();
      if (this.caratula) formData.append('caratula', this.caratula);
      axios.post('/api/admin/images/caratula', formData).then(function (res) {
        _this3.loading = false;

        _this3.$toast.open({
          message: 'Actualizado correctamente',
          type: 'success',
          duration: 5000
        });
      })["catch"](function (err) {
        _this3.loading = false;
        _this3.errors = err.response.data.errors;

        _this3.$toast.open({
          message: 'Error al actualizar',
          type: 'error',
          duration: 5000
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/AdminPublicImagesComponent.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Admin/AdminPublicImagesComponent.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminPublicImagesComponent_vue_vue_type_template_id_97dbc710_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminPublicImagesComponent.vue?vue&type=template&id=97dbc710&scoped=true& */ "./resources/js/components/Admin/AdminPublicImagesComponent.vue?vue&type=template&id=97dbc710&scoped=true&");
/* harmony import */ var _AdminPublicImagesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminPublicImagesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/AdminPublicImagesComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminPublicImagesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminPublicImagesComponent_vue_vue_type_template_id_97dbc710_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminPublicImagesComponent_vue_vue_type_template_id_97dbc710_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "97dbc710",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/AdminPublicImagesComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/AdminPublicImagesComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminPublicImagesComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPublicImagesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminPublicImagesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminPublicImagesComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPublicImagesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/AdminPublicImagesComponent.vue?vue&type=template&id=97dbc710&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminPublicImagesComponent.vue?vue&type=template&id=97dbc710&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPublicImagesComponent_vue_vue_type_template_id_97dbc710_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPublicImagesComponent_vue_vue_type_template_id_97dbc710_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPublicImagesComponent_vue_vue_type_template_id_97dbc710_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminPublicImagesComponent.vue?vue&type=template&id=97dbc710&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminPublicImagesComponent.vue?vue&type=template&id=97dbc710&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminPublicImagesComponent.vue?vue&type=template&id=97dbc710&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminPublicImagesComponent.vue?vue&type=template&id=97dbc710&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c("Head", { attrs: { title: "Admin | Imágenes del sitio" } }),
      _vm._v(" "),
      _c("div", { staticClass: "form-grup" }, [
        this.errors.favicon != null
          ? _c("div", { staticClass: "alert alert-danger" }, [
              _vm._v(
                "\n            " + _vm._s(this.errors.favicon[0]) + "\n        "
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("label", { attrs: { for: "favicon" } }, [_vm._v("Icono:")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control-file",
          attrs: { type: "file", accept: ".ico", id: "favicon" },
          on: {
            input: function($event) {
              _vm.favicon = $event.target.files[0]
            }
          }
        }),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            attrs: { disabled: _vm.loading },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.onSubmitIcon()
              }
            }
          },
          [
            _vm.loading
              ? _c("span", {
                  staticClass: "spinner-border spinner-border-sm",
                  attrs: { role: "status", "aria-hidden": "true" }
                })
              : _vm._e(),
            _vm._v("\n            Guardar")
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-grup" }, [
        this.errors.caratula != null
          ? _c("div", { staticClass: "alert alert-danger" }, [
              _vm._v(
                "\n            " +
                  _vm._s(this.errors.caratula[0]) +
                  "\n        "
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("label", { attrs: { for: "caratula" } }, [_vm._v("Carátula:")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control-file",
          attrs: { type: "file", accept: ".png,.jpg", id: "caratula" },
          on: {
            input: function($event) {
              _vm.caratula = $event.target.files[0]
            }
          }
        }),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            attrs: { disabled: _vm.loading },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.onSubmitCaratula()
              }
            }
          },
          [
            _vm.loading
              ? _c("span", {
                  staticClass: "spinner-border spinner-border-sm",
                  attrs: { role: "status", "aria-hidden": "true" }
                })
              : _vm._e(),
            _vm._v("\n            Guardar")
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-grup" }, [
        this.errors.logo != null
          ? _c("div", { staticClass: "alert alert-danger" }, [
              _vm._v(
                "\n            " + _vm._s(this.errors.logo[0]) + "\n        "
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("label", { attrs: { for: "logo" } }, [_vm._v("Logo:")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control-file",
          attrs: { type: "file", accept: ".png,.jpg", id: "logo" },
          on: {
            input: function($event) {
              _vm.logo = $event.target.files[0]
            }
          }
        }),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            attrs: { disabled: _vm.loading },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.onSubmitLogo()
              }
            }
          },
          [
            _vm.loading
              ? _c("span", {
                  staticClass: "spinner-border spinner-border-sm",
                  attrs: { role: "status", "aria-hidden": "true" }
                })
              : _vm._e(),
            _vm._v("\n            Guardar")
          ]
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