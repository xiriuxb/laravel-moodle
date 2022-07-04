"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Email_Notice_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Email/Notice.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Email/Notice.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/Home.vue */ "./resources/js/components/views/Home.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      sending: false
    };
  },
  methods: {
    sendEmail: function sendEmail() {
      var _this = this;

      this.$inertia.visit('/email/verification-notification', {
        method: 'POST',
        onStart: function onStart() {
          _this.sending = true;
        },
        onFinish: function onFinish() {
          _this.sending = false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Email/Notice.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Email/Notice.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Notice_vue_vue_type_template_id_56b7b194_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notice.vue?vue&type=template&id=56b7b194&scoped=true& */ "./resources/js/components/Email/Notice.vue?vue&type=template&id=56b7b194&scoped=true&");
/* harmony import */ var _Notice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notice.vue?vue&type=script&lang=js& */ "./resources/js/components/Email/Notice.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notice_vue_vue_type_template_id_56b7b194_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Notice_vue_vue_type_template_id_56b7b194_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "56b7b194",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Email/Notice.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Email/Notice.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Email/Notice.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Notice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Email/Notice.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Email/Notice.vue?vue&type=template&id=56b7b194&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Email/Notice.vue?vue&type=template&id=56b7b194&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notice_vue_vue_type_template_id_56b7b194_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notice_vue_vue_type_template_id_56b7b194_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notice_vue_vue_type_template_id_56b7b194_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Notice.vue?vue&type=template&id=56b7b194&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Email/Notice.vue?vue&type=template&id=56b7b194&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Email/Notice.vue?vue&type=template&id=56b7b194&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Email/Notice.vue?vue&type=template&id=56b7b194&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    [
      _c("AppHead", { attrs: { title: "Aviso Email" } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "w-full relative h-screen", attrs: { id: "back" } },
        [
          _c("div", { staticClass: "relative top-1/3 container" }, [
            _c("h1", { staticClass: "font-bold text-4xl text-blue-700" }, [
              _vm._v("FELICITACIONES"),
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Solo queda un paso más para poder acceder a nuestros cursos."
              ),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "font-bold text-2xl py-2" }, [
              _vm._v(
                "\n        Se ha enviado un correo de verificación al email con el que te\n        registraste, por favor sigue los pasos indicados en el mismo.\n      "
              ),
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "No te olvides de revisar la sección de correo no deseado."
              ),
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        Si no le ha llegado el correo, lo ha perdido o ya no funciona puede\n        volver a enviarlo.\n      "
              ),
            ]),
            _vm._v(" "),
            _vm.$page.props.flash.message
              ? _c(
                  "div",
                  {
                    staticClass: "alert alert-success",
                    attrs: { role: "alert" },
                  },
                  [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.$page.props.flash.message) +
                        "\n      "
                    ),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.$page.props.errors.message
              ? _c(
                  "div",
                  {
                    staticClass: "alert alert-danger",
                    attrs: { role: "alert" },
                  },
                  [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.$page.props.errors.message) +
                        "\n      "
                    ),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: { disabled: _vm.sending },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.sendEmail()
                  },
                },
              },
              [
                _vm.sending
                  ? _c("span", {
                      staticClass: "spinner-border spinner-border-sm",
                      attrs: { role: "status", "aria-hidden": "true" },
                    })
                  : _vm._e(),
                _vm._v("\n        Reenviar correo de verificación\n      "),
              ]
            ),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Luego de reenviar deberá esperar 3 minutos antes de volverlo a enviar."
              ),
            ]),
          ]),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);