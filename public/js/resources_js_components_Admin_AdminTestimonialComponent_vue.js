(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_AdminTestimonialComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoadingComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LoadingComponent.vue */ "./resources/js/components/LoadingComponent.vue");
/* harmony import */ var _views_Admin_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/Admin.vue */ "./resources/js/components/views/Admin.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: _views_Admin_vue__WEBPACK_IMPORTED_MODULE_2__.default,
  components: {
    LoadingComponent: _LoadingComponent_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  name: "AdminCommentComponent",
  data: function data() {
    return {
      apiRoute: '/api/testimonials/',
      id: 0,
      isFormHidden: true,
      editMode: true,
      loading: true,
      form: {
        autor: "",
        texto: "",
        is_active: false
      },
      error: '',
      errors: [],
      comments: []
    };
  },
  methods: {
    btnAction: function btnAction() {
      this.isFormHidden = !this.isFormHidden;
      this.resetInput();
      console.log(this.editMode);
    },
    update: function update() {
      var _this = this;

      this.loading = true;
      axios.put('/api/testimonials/' + this.id, this.form).then(function () {
        _this.loading = false;
        _this.isFormHidden = true;

        _this.resetInput();

        _this.$toast.open({
          message: 'Comentario actualizado correctamente',
          type: 'success',
          duration: 5000
        });

        _this.loadComments();
      })["catch"](function (error) {
        _this.loading = false;

        _this.$toast.open({
          message: 'Error al actualizar el comentario',
          type: 'error',
          duration: 5000
        });
      });
    },
    save: function save() {
      var _this2 = this;

      if (this.editMode) {
        this.update();
      } else {
        this.loading = true;
        axios.post('/api/testimonials', this.form).then(function () {
          //this.errors = [];
          _this2.$toast.open({
            message: "Comentario guardado correctamente",
            type: "success",
            duration: 5000
          });

          _this2.loadComments();
        })["catch"]();
        this.resetInput();
      }
    },
    loadComments: function loadComments() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this3.loading = true;
                _context.next = 3;
                return axios.get('/api/testimonials').then(function (response) {
                  _this3.comments = response.data.data;
                  _this3.loading = false;
                })["catch"](function (err) {
                  _this3.$toast.open({
                    message: err.message,
                    type: "error",
                    position: "top-right"
                  });
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    resetInput: function resetInput() {
      this.editMode = false;
      this.form.autor = this.form.texto = "";
      this.form.is_active = false;
    },
    deleteComment: function deleteComment(index) {
      var _this4 = this;

      axios["delete"]('/api/testimonials/'.concat(index)).then(function (response) {
        //console.log(response);
        _this4.loadComments();
      })["catch"](function (err) {//this.errors = err.response.errors;
      });
      this.resetInput();
    },
    getComment: function getComment(index) {
      var _this5 = this;

      this.isFormHidden = false;
      this.loading = true;
      scrollY = 0;
      axios.get('/api/testimonials/'.concat(index)).then(function (response) {
        _this5.id = response.data.data.id;
        _this5.form.autor = response.data.data.autor;
        _this5.form.texto = response.data.data.texto;
        _this5.form.is_active = response.data.data.is_active;
        _this5.loading = false;
      })["catch"](function (err) {//this.errors = err.response.errors;
      });
    },
    onClickEdit: function onClickEdit(index) {
      this.getComment(index);
      this.editMode = true;
      console.log(this.editMode);
    }
  },
  created: function created() {
    this.loadComments();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=style&index=0&id=d32f4bdc&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=style&index=0&id=d32f4bdc&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-acction[data-v-d32f4bdc] {\r\n  padding: 0.2rem;\r\n  font-size: 0.875rem;\r\n  border-radius: 0.2rem;\r\n  max-width: 33px;\n}\n.form-check-label[data-v-d32f4bdc] {\r\n  cursor: pointer;\n}\nform[data-v-d32f4bdc]{\r\n  padding-block: 10px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=style&index=0&id=d32f4bdc&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=style&index=0&id=d32f4bdc&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTestimonialComponent_vue_vue_type_style_index_0_id_d32f4bdc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTestimonialComponent.vue?vue&type=style&index=0&id=d32f4bdc&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=style&index=0&id=d32f4bdc&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTestimonialComponent_vue_vue_type_style_index_0_id_d32f4bdc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTestimonialComponent_vue_vue_type_style_index_0_id_d32f4bdc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/Admin/AdminTestimonialComponent.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Admin/AdminTestimonialComponent.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminTestimonialComponent_vue_vue_type_template_id_d32f4bdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminTestimonialComponent.vue?vue&type=template&id=d32f4bdc&scoped=true& */ "./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=template&id=d32f4bdc&scoped=true&");
/* harmony import */ var _AdminTestimonialComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminTestimonialComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _AdminTestimonialComponent_vue_vue_type_style_index_0_id_d32f4bdc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminTestimonialComponent.vue?vue&type=style&index=0&id=d32f4bdc&scoped=true&lang=css& */ "./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=style&index=0&id=d32f4bdc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _AdminTestimonialComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AdminTestimonialComponent_vue_vue_type_template_id_d32f4bdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminTestimonialComponent_vue_vue_type_template_id_d32f4bdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d32f4bdc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/AdminTestimonialComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTestimonialComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTestimonialComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTestimonialComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=style&index=0&id=d32f4bdc&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=style&index=0&id=d32f4bdc&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTestimonialComponent_vue_vue_type_style_index_0_id_d32f4bdc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTestimonialComponent.vue?vue&type=style&index=0&id=d32f4bdc&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=style&index=0&id=d32f4bdc&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=template&id=d32f4bdc&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=template&id=d32f4bdc&scoped=true& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTestimonialComponent_vue_vue_type_template_id_d32f4bdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTestimonialComponent_vue_vue_type_template_id_d32f4bdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTestimonialComponent_vue_vue_type_template_id_d32f4bdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTestimonialComponent.vue?vue&type=template&id=d32f4bdc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=template&id=d32f4bdc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=template&id=d32f4bdc&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminTestimonialComponent.vue?vue&type=template&id=d32f4bdc&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container", class: { disabled: _vm.loading } },
    [
      _c("h3", [_vm._v("Administración de testimonios")]),
      _vm._v(" "),
      _vm.loading ? _c("loading-component") : _vm._e(),
      _vm._v(" "),
      _c("div", [
        _c(
          "button",
          {
            ref: "btnNewComment",
            staticClass: "btn btn-primary",
            class: _vm.isFormHidden ? "btn btn-primary" : "btn btn-secondary",
            staticStyle: { "max-width": "240px" },
            attrs: { id: "btnNewComment", disabled: _vm.loading },
            on: {
              click: function($event) {
                return _vm.btnAction()
              }
            }
          },
          [
            _vm._v(
              "\n      " +
                _vm._s(
                  _vm.isFormHidden ? "Nuevo testimonio" : "Cancelar/Ocultar"
                ) +
                "\n    "
            )
          ]
        )
      ]),
      _vm._v(" "),
      !_vm.isFormHidden
        ? _c(
            "form",
            {
              staticClass: "container",
              staticStyle: { dislplay: "none" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.save.apply(null, arguments)
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "comentarioEstudiante" } }, [
                  _vm._v("Nombre Estudiante:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.autor,
                      expression: "form.autor"
                    }
                  ],
                  ref: "nombreEstudiante",
                  staticClass: "form-control",
                  attrs: { type: "text", id: "nombreEstudiante", required: "" },
                  domProps: { value: _vm.form.autor },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "autor", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.error != ""
                  ? _c("div", { staticClass: "alert alert-danger" }, [
                      _vm._v(
                        "\n        " + _vm._s(this.errors.autor[0]) + "\n      "
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "comentarioEstudiante" } }, [
                  _vm._v("Comentario:")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.texto,
                      expression: "form.texto"
                    }
                  ],
                  ref: "comentarioEstudiante",
                  staticClass: "form-control",
                  attrs: {
                    id: "comentarioEstudiante",
                    rows: "3",
                    required: ""
                  },
                  domProps: { value: _vm.form.texto },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "texto", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                this.errors.texto != null
                  ? _c("div", { staticClass: "alert alert-danger" }, [
                      _vm._v(
                        "\n        " + _vm._s(this.errors.texto[0]) + "\n      "
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("label", { staticClass: "form-check form-switch" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.is_active,
                      expression: "form.is_active"
                    }
                  ],
                  ref: "is_active",
                  staticClass: "form-check-input",
                  attrs: { type: "checkbox" },
                  domProps: {
                    checked: Array.isArray(_vm.form.is_active)
                      ? _vm._i(_vm.form.is_active, null) > -1
                      : _vm.form.is_active
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.form.is_active,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(_vm.form, "is_active", $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.form,
                              "is_active",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.form, "is_active", $$c)
                      }
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-check-label",
                    attrs: { for: "isActive" }
                  },
                  [_vm._v("¿Comentario visible?")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit", disabled: _vm.loading }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(
                            !_vm.editMode ? "Guardar" : "Guardar Cambios"
                          ) +
                          "\n        "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger",
                      attrs: { disabled: _vm.loading },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.resetInput.apply(null, arguments)
                        }
                      }
                    },
                    [_vm._v("\n          Cancelar\n        ")]
                  )
                ])
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("table", { staticClass: "table" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.comments, function(comment) {
              return _c("tr", { key: comment.id }, [
                _c("td", [_c("p", [_vm._v(_vm._s(comment.autor))])]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(comment.texto))]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(comment.is_active == 1 ? "Si" : "No"))
                ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-primary btn-acction",
                      attrs: { title: "Editar" },
                      on: {
                        click: function($event) {
                          return _vm.onClickEdit(comment.id)
                        }
                      }
                    },
                    [_c("box-icon", { attrs: { name: "edit-alt" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-danger btn-acction",
                      attrs: { title: "Eliminar" },
                      on: {
                        click: function($event) {
                          return _vm.deleteComment(comment.id)
                        }
                      }
                    },
                    [_c("box-icon", { attrs: { name: "trash" } })],
                    1
                  )
                ])
              ])
            }),
            0
          )
        ])
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
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Estudiante")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Contenido")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Activo?")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Acciones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);