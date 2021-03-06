"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_AdminConfigController_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminConfigController.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminConfigController.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_Admin_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/Admin.vue */ "./resources/js/components/views/Admin.vue");
/* harmony import */ var _LoadingComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LoadingComponent.vue */ "./resources/js/components/LoadingComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "admin",
  components: {
    LoadingComponent: _LoadingComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      form: [],
      selected: null,
      editMode: false,
      selectedValue: null,
      loading: true
    };
  },
  created: function created() {
    this.loadVars();
  },
  methods: {
    loadVars: function loadVars() {
      var _this = this;

      axios.get(this.route('admin.site.index')).then(function (response) {
        _this.form = response.data;
        _this.loading = false;
      })["catch"](function (error) {
        _this.loading = false;

        _this.$toast.open({
          message: 'Error al cargar',
          type: 'error',
          duration: 5000
        });
      });
    },
    onClickEdit: function onClickEdit(id) {
      var _this2 = this;

      this.selected = id;
      this.editMode = true;
      this.$nextTick(function () {
        return _this2.$refs[id][0].focus();
      });
    },
    onClickCancel: function onClickCancel() {
      this.selected = null;
      this.editMode = false;
      this.selectedValue = null;
    },
    onClickSave: function onClickSave(id, value, var_name) {
      var _this3 = this;

      this.loading = true;
      this.editMode = false;
      this.selected = null;
      this.selectedValue = null;
      axios.post(this.route('admin.site.update'), {
        variable_key: id,
        variable_value: value,
        variable_name: var_name
      }).then(function (response) {
        _this3.$toast.open({
          message: 'Guardado',
          type: 'success',
          duration: 5000
        });

        _this3.loading = false;
      })["catch"](function (error) {
        _this3.onClickCancel();

        _this3.$toast.open({
          message: 'Error al guardar',
          type: 'error',
          duration: 5000
        });

        _this3.loading = false;
      });
    },
    updateConfig: function updateConfig() {
      var _this4 = this;

      this.loading = true;
      axios.post(this.route('admin.site.update-config')).then(function (response) {
        _this4.loading = false;

        _this4.$toast.open({
          message: 'Actualizado',
          type: 'success',
          duration: 5000
        });
      })["catch"](function (error) {
        _this4.loading = false;

        _this4.$toast.open({
          message: 'Error al actualizar',
          type: 'error',
          duration: 5000
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/AdminConfigController.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Admin/AdminConfigController.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminConfigController_vue_vue_type_template_id_18a4f572_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminConfigController.vue?vue&type=template&id=18a4f572&scoped=true& */ "./resources/js/components/Admin/AdminConfigController.vue?vue&type=template&id=18a4f572&scoped=true&");
/* harmony import */ var _AdminConfigController_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminConfigController.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/AdminConfigController.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminConfigController_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminConfigController_vue_vue_type_template_id_18a4f572_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminConfigController_vue_vue_type_template_id_18a4f572_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "18a4f572",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/AdminConfigController.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/AdminConfigController.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminConfigController.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminConfigController_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminConfigController.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminConfigController.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminConfigController_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/AdminConfigController.vue?vue&type=template&id=18a4f572&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminConfigController.vue?vue&type=template&id=18a4f572&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminConfigController_vue_vue_type_template_id_18a4f572_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminConfigController_vue_vue_type_template_id_18a4f572_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminConfigController_vue_vue_type_template_id_18a4f572_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminConfigController.vue?vue&type=template&id=18a4f572&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminConfigController.vue?vue&type=template&id=18a4f572&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminConfigController.vue?vue&type=template&id=18a4f572&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminConfigController.vue?vue&type=template&id=18a4f572&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    { class: { disabled: _vm.loading }, attrs: { id: "adminConfig" } },
    [
      _c("AppHead", { attrs: { title: "Admin | Configuraciones" } }),
      _vm._v(" "),
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
      _c("h2", [_vm._v("\n        Configuraciones del sitio,\n    ")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n        Por favor, si no sabe lo que hace no edite nada. Para que los cambios se vean reflejados, debe presionar el boton de actualizar. \n        En ese caso la cach?? sel servidor ser?? recargada, por lo tanto las sesiones activas se cerrar??n. ??Tenga Cuidado!\n    "
        ),
      ]),
      _vm._v(" "),
      _c(
        "form",
        { attrs: { action: "" } },
        _vm._l(_vm.form, function (variable) {
          return _c(
            "div",
            {
              key: variable.name,
              staticClass: "form-group d-flex items-center",
            },
            [
              _c("label", { attrs: { for: "" } }, [
                _vm._v(_vm._s(variable.campo)),
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: variable.value,
                    expression: "variable.value",
                  },
                ],
                ref: variable.name,
                refInFor: true,
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  disabled: _vm.selected != variable.name,
                },
                domProps: { value: variable.value },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(variable, "value", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _vm.editMode && _vm.selected == variable.name
                ? _c(
                    "div",
                    { staticClass: "d-flex", attrs: { id: "actions" } },
                    [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-outline-primary btn-acction border-0 p-0",
                          attrs: { disabled: _vm.loading, title: "Guardar" },
                          on: {
                            click: function ($event) {
                              return _vm.onClickSave(
                                variable.config_key,
                                variable.value,
                                variable.name
                              )
                            },
                          },
                        },
                        [_c("box-icon", { attrs: { name: "save" } })],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-danger border-0 p-0",
                          attrs: { title: "Cancelar" },
                          on: {
                            click: function ($event) {
                              return _vm.onClickCancel()
                            },
                          },
                        },
                        [_c("box-icon", { attrs: { name: "x" } })],
                        1
                      ),
                    ]
                  )
                : _c(
                    "button",
                    {
                      attrs: { disabled: _vm.loading, title: "Editar" },
                      on: {
                        click: function ($event) {
                          return _vm.onClickEdit(variable.name)
                        },
                      },
                    },
                    [_c("box-icon", { attrs: { name: "edit-alt" } })],
                    1
                  ),
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      !_vm.loading
        ? _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { disabled: _vm.loading },
              on: {
                click: function ($event) {
                  return _vm.updateConfig()
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
              _vm._v("\n    Actualizar configuraci??n\n    "),
            ]
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);