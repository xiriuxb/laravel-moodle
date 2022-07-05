"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_ProfileComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      message: null,
      loading: false,
      form: this.$inertia.form({
        new_email: '',
        password: ''
      })
    };
  },
  methods: {
    saveForm: function saveForm() {
      var _this = this;

      this.$page.props.errors = {};
      this.form.post(this.route('change.email'), {
        onStart: function onStart() {
          return _this.message = "";
        },
        onSuccess: function onSuccess() {
          _this.message = 'Se ha cambiado el correo electrónico';

          _this.form.reset();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Modals/ChangePasswordModal2.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Modals/ChangePasswordModal2.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      form: this.$inertia.form({
        passwordActual: '',
        new_password: '',
        new_password_confirmation: ''
      }),
      loading: false,
      errors: [],
      message: ''
    };
  },
  methods: {
    updateForm: function updateForm() {
      var _this = this;

      this.$page.props.errors = {};
      this.form.post(this.route('change.password'), {
        onStart: function onStart() {
          _this.message = '';
        },
        onSuccess: function onSuccess() {
          _this.message = 'Contraseña actualizada';

          _this.form.reset();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/ProfileComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/ProfileComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_country_region_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-country-region-select */ "./node_modules/vue-country-region-select/dist/vueCountryRegionSelect.umd.min.js");
/* harmony import */ var vue_country_region_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_country_region_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modals_ChangeEmailModal2_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modals/ChangeEmailModal2.vue */ "./resources/js/components/User/Modals/ChangeEmailModal2.vue");
/* harmony import */ var _Modals_ChangePasswordModal2_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modals/ChangePasswordModal2.vue */ "./resources/js/components/User/Modals/ChangePasswordModal2.vue");
/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/Home.vue */ "./resources/js/components/views/Home.vue");
/* harmony import */ var _vendor_tightenco_ziggy_src_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../vendor/tightenco/ziggy/src/js */ "./vendor/tightenco/ziggy/src/js/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: _views_Home_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  components: {
    vueCountryRegionSelect: (vue_country_region_select__WEBPACK_IMPORTED_MODULE_0___default()),
    ChangeEmailModal2: _Modals_ChangeEmailModal2_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ChangePasswordModal2: _Modals_ChangePasswordModal2_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    message: {
      type: String
    }
  },
  computed: {
    fullname: function fullname() {
      return this.user.name + " " + this.user.last_name;
    },
    enableButton: function enableButton() {
      return this.form.country != this.user.country || this.form.region != this.user.region || this.form.birth_day !== this.user.birth_day ? false : true;
    },
    formFiltered: function formFiltered() {
      return Object.fromEntries(Object.entries(this.form).filter(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            _ = _ref2[0],
            v = _ref2[1];

        return v != "";
      }));
    }
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        country: "",
        region: "",
        birth_day: ""
      }),
      loading: false
    };
  },
  methods: {
    updateUser: function updateUser() {
      var _this = this;

      this.form.post((0,_vendor_tightenco_ziggy_src_js__WEBPACK_IMPORTED_MODULE_4__["default"])('user.update'), {
        onStart: function onStart() {
          return _this.loading = true;
        },
        onFinish: function onFinish() {
          return _this.loading = false;
        }
      });
    }
  },
  created: function created() {
    this.form.country = this.user.country;
    this.form.region = this.user.region;
    this.form.birth_day = this.user.birth_day;
  }
});

/***/ }),

/***/ "./vendor/tightenco/ziggy/src/js/Route.js":
/*!************************************************!*\
  !*** ./vendor/tightenco/ziggy/src/js/Route.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


/**
 * A Laravel route. This class represents one route and its configuration and metadata.
 */

var Route = /*#__PURE__*/function () {
  /**
   * @param {String} name - Route name.
   * @param {Object} definition - Route definition.
   * @param {Object} config - Ziggy configuration.
   */
  function Route(name, definition, config) {
    var _definition$bindings, _definition$wheres;

    _classCallCheck(this, Route);

    this.name = name;
    this.definition = definition;
    this.bindings = (_definition$bindings = definition.bindings) !== null && _definition$bindings !== void 0 ? _definition$bindings : {};
    this.wheres = (_definition$wheres = definition.wheres) !== null && _definition$wheres !== void 0 ? _definition$wheres : {};
    this.config = config;
  }
  /**
   * Get a 'template' of the complete URL for this route.
   *
   * @example
   * https://{team}.ziggy.dev/user/{user}
   *
   * @return {String} Route template.
   */


  _createClass(Route, [{
    key: "template",
    get: function get() {
      // If  we're building just a path there's no origin, otherwise: if this route has a
      // domain configured we construct the origin with that, if not we use the app URL
      var origin = !this.config.absolute ? '' : this.definition.domain ? "".concat(this.config.url.match(/^\w+:\/\//)[0]).concat(this.definition.domain).concat(this.config.port ? ":".concat(this.config.port) : '') : this.config.url;
      return "".concat(origin, "/").concat(this.definition.uri).replace(/\/+$/, '');
    }
    /**
     * Get an array of objects representing the parameters that this route accepts.
     *
     * @example
     * [{ name: 'team', required: true }, { name: 'user', required: false }]
     *
     * @return {Array} Parameter segments.
     */

  }, {
    key: "parameterSegments",
    get: function get() {
      var _this$template$match$, _this$template$match;

      return (_this$template$match$ = (_this$template$match = this.template.match(/{[^}?]+\??}/g)) === null || _this$template$match === void 0 ? void 0 : _this$template$match.map(function (segment) {
        return {
          name: segment.replace(/{|\??}/g, ''),
          required: !/\?}$/.test(segment)
        };
      })) !== null && _this$template$match$ !== void 0 ? _this$template$match$ : [];
    }
    /**
     * Get whether this route's template matches the given URL.
     *
     * @param {String} url - URL to check.
     * @return {Object|false} - If this route matches, returns the matched parameters.
     */

  }, {
    key: "matchesUrl",
    value: function matchesUrl(url) {
      var _this = this;

      if (!this.definition.methods.includes('GET')) return false; // Transform the route's template into a regex that will match a hydrated URL,
      // by replacing its parameter segments with matchers for parameter values

      var pattern = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function (_, slash, segment, optional) {
        var regex = "(?<".concat(segment, ">").concat(_this.wheres[segment] || '[^/?]+', ")");
        return optional ? "(".concat(slash).concat(regex, ")?") : "".concat(slash).concat(regex);
      }).replace(/^\w+:\/\//, '');

      var _url$replace$split = url.replace(/^\w+:\/\//, '').split('?'),
          _url$replace$split2 = _slicedToArray(_url$replace$split, 2),
          location = _url$replace$split2[0],
          query = _url$replace$split2[1];

      var matches = new RegExp("^".concat(pattern, "/?$")).exec(location);
      return matches ? {
        params: matches.groups,
        query: (0,qs__WEBPACK_IMPORTED_MODULE_0__.parse)(query)
      } : false;
    }
    /**
     * Hydrate and return a complete URL for this route with the given parameters.
     *
     * @param {Object} params
     * @return {String}
     */

  }, {
    key: "compile",
    value: function compile(params) {
      var _this2 = this;

      var segments = this.parameterSegments;
      if (!segments.length) return this.template;
      return this.template.replace(/{([^}?]+)(\??)}/g, function (_, segment, optional) {
        var _params$segment2, _params$segment3;

        // If the parameter is missing but is not optional, throw an error
        if (!optional && [null, undefined].includes(params[segment])) {
          throw new Error("Ziggy error: '".concat(segment, "' parameter is required for route '").concat(_this2.name, "'."));
        }

        if (segments[segments.length - 1].name === segment && _this2.wheres[segment] === '.*') {
          var _params$segment;

          return encodeURIComponent((_params$segment = params[segment]) !== null && _params$segment !== void 0 ? _params$segment : '').replaceAll('%2F', '/');
        }

        if (_this2.wheres[segment] && !new RegExp("^".concat(optional ? "(".concat(_this2.wheres[segment], ")?") : _this2.wheres[segment], "$")).test((_params$segment2 = params[segment]) !== null && _params$segment2 !== void 0 ? _params$segment2 : '')) {
          throw new Error("Ziggy error: '".concat(segment, "' parameter does not match required format '").concat(_this2.wheres[segment], "' for route '").concat(_this2.name, "'."));
        }

        return encodeURIComponent((_params$segment3 = params[segment]) !== null && _params$segment3 !== void 0 ? _params$segment3 : '');
      }).replace(/\/+$/, '');
    }
  }]);

  return Route;
}();



/***/ }),

/***/ "./vendor/tightenco/ziggy/src/js/Router.js":
/*!*************************************************!*\
  !*** ./vendor/tightenco/ziggy/src/js/Router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Route */ "./vendor/tightenco/ziggy/src/js/Route.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * A collection of Laravel routes. This class constitutes Ziggy's main API.
 */

var Router = /*#__PURE__*/function (_String) {
  _inherits(Router, _String);

  var _super = _createSuper(Router);

  /**
   * @param {String} [name] - Route name.
   * @param {(String|Number|Array|Object)} [params] - Route parameters.
   * @param {Boolean} [absolute] - Whether to include the URL origin.
   * @param {Object} [config] - Ziggy configuration.
   */
  function Router(name, params) {
    var _this;

    var absolute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var config = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, Router);

    _this = _super.call(this);
    _this._config = config !== null && config !== void 0 ? config : typeof Ziggy !== 'undefined' ? Ziggy : globalThis === null || globalThis === void 0 ? void 0 : globalThis.Ziggy;
    _this._config = _objectSpread(_objectSpread({}, _this._config), {}, {
      absolute: absolute
    });

    if (name) {
      if (!_this._config.routes[name]) {
        throw new Error("Ziggy error: route '".concat(name, "' is not in the route list."));
      }

      _this._route = new _Route__WEBPACK_IMPORTED_MODULE_1__["default"](name, _this._config.routes[name], _this._config);
      _this._params = _this._parse(params);
    }

    return _this;
  }
  /**
   * Get the compiled URL string for the current route and parameters.
   *
   * @example
   * // with 'posts.show' route 'posts/{post}'
   * (new Router('posts.show', 1)).toString(); // 'https://ziggy.dev/posts/1'
   *
   * @return {String}
   */


  _createClass(Router, [{
    key: "toString",
    value: function toString() {
      var _this2 = this;

      // Get parameters that don't correspond to any route segments to append them to the query
      var unhandled = Object.keys(this._params).filter(function (key) {
        return !_this2._route.parameterSegments.some(function (_ref) {
          var name = _ref.name;
          return name === key;
        });
      }).filter(function (key) {
        return key !== '_query';
      }).reduce(function (result, current) {
        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, current, _this2._params[current]));
      }, {});
      return this._route.compile(this._params) + (0,qs__WEBPACK_IMPORTED_MODULE_0__.stringify)(_objectSpread(_objectSpread({}, unhandled), this._params['_query']), {
        addQueryPrefix: true,
        arrayFormat: 'indices',
        encodeValuesOnly: true,
        skipNulls: true,
        encoder: function encoder(value, _encoder) {
          return typeof value === 'boolean' ? Number(value) : _encoder(value);
        }
      });
    }
    /**
     * Get the parameters, values, and metadata from the given URL.
     *
     * @param {String} [url] - The URL to inspect, defaults to the current window URL.
     * @return {{ name: string, params: Object, query: Object, route: Route }}
     */

  }, {
    key: "_unresolve",
    value: function _unresolve(url) {
      var _this3 = this;

      if (!url) {
        url = this._currentUrl();
      } else if (this._config.absolute && url.startsWith('/')) {
        // If we are using absolute URLs and a relative URL
        // is passed, prefix the host to make it absolute
        url = this._location().host + url;
      }

      var matchedParams = {};

      var _ref2 = Object.entries(this._config.routes).find(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            name = _ref5[0],
            route = _ref5[1];

        return matchedParams = new _Route__WEBPACK_IMPORTED_MODULE_1__["default"](name, route, _this3._config).matchesUrl(url);
      }) || [undefined, undefined],
          _ref3 = _slicedToArray(_ref2, 2),
          name = _ref3[0],
          route = _ref3[1];

      return _objectSpread(_objectSpread({
        name: name
      }, matchedParams), {}, {
        route: route
      });
    }
  }, {
    key: "_currentUrl",
    value: function _currentUrl() {
      var _this$_location = this._location(),
          host = _this$_location.host,
          pathname = _this$_location.pathname,
          search = _this$_location.search;

      return (this._config.absolute ? host + pathname : pathname.replace(this._config.url.replace(/^\w*:\/\/[^/]+/, ''), '').replace(/^\/+/, '/')) + search;
    }
    /**
     * Get the name of the route matching the current window URL, or, given a route name
     * and parameters, check if the current window URL and parameters match that route.
     *
     * @example
     * // at URL https://ziggy.dev/posts/4 with 'posts.show' route 'posts/{post}'
     * route().current(); // 'posts.show'
     * route().current('posts.index'); // false
     * route().current('posts.show'); // true
     * route().current('posts.show', { post: 1 }); // false
     * route().current('posts.show', { post: 4 }); // true
     *
     * @param {String} [name] - Route name to check.
     * @param {(String|Number|Array|Object)} [params] - Route parameters.
     * @return {(Boolean|String|undefined)}
     */

  }, {
    key: "current",
    value: function current(name, params) {
      var _this$_unresolve = this._unresolve(),
          current = _this$_unresolve.name,
          currentParams = _this$_unresolve.params,
          query = _this$_unresolve.query,
          route = _this$_unresolve.route;

      var matchedParams = _objectSpread(_objectSpread({}, currentParams), query); // If a name wasn't passed, return the name of the current route


      if (!name) return current; // Test the passed name against the current route, matching some
      // basic wildcards, e.g. passing `events.*` matches `events.show`

      var match = new RegExp("^".concat(name.replace(/\./g, '\\.').replace(/\*/g, '.*'), "$")).test(current);
      if ([null, undefined].includes(params) || !match) return match;
      var routeObject = new _Route__WEBPACK_IMPORTED_MODULE_1__["default"](current, route, this._config);
      params = this._parse(params, routeObject);

      var routeParams = _objectSpread(_objectSpread({}, currentParams), query); // Remove undefined params


      Object.keys(routeParams).forEach(function (key) {
        return routeParams[key] === undefined && delete routeParams[key];
      }); // If the current window URL has no route parameters, and the passed parameters are empty, return true

      if (Object.values(params).every(function (p) {
        return !p;
      }) && !Object.values(routeParams).length) return true; // Check that all passed parameters match their values in the current window URL
      // Use weak equality because all values in the current window URL will be strings

      return Object.entries(params).every(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
            key = _ref7[0],
            value = _ref7[1];

        return routeParams[key] == value;
      });
    }
    /**
     * Get an object representing the current location (by default this will be
     * the JavaScript `window` global if it's available).
     *
     * @return {Object}
     */

  }, {
    key: "_location",
    value: function _location() {
      var _this$_config$locatio, _this$_config$locatio2, _this$_config$locatio3, _this$_config$locatio4, _this$_config$locatio5, _this$_config$locatio6;

      var _ref8 = typeof window !== 'undefined' ? window.location : {},
          _ref8$host = _ref8.host,
          host = _ref8$host === void 0 ? '' : _ref8$host,
          _ref8$pathname = _ref8.pathname,
          pathname = _ref8$pathname === void 0 ? '' : _ref8$pathname,
          _ref8$search = _ref8.search,
          search = _ref8$search === void 0 ? '' : _ref8$search;

      return {
        host: (_this$_config$locatio = (_this$_config$locatio2 = this._config.location) === null || _this$_config$locatio2 === void 0 ? void 0 : _this$_config$locatio2.host) !== null && _this$_config$locatio !== void 0 ? _this$_config$locatio : host,
        pathname: (_this$_config$locatio3 = (_this$_config$locatio4 = this._config.location) === null || _this$_config$locatio4 === void 0 ? void 0 : _this$_config$locatio4.pathname) !== null && _this$_config$locatio3 !== void 0 ? _this$_config$locatio3 : pathname,
        search: (_this$_config$locatio5 = (_this$_config$locatio6 = this._config.location) === null || _this$_config$locatio6 === void 0 ? void 0 : _this$_config$locatio6.search) !== null && _this$_config$locatio5 !== void 0 ? _this$_config$locatio5 : search
      };
    }
    /**
     * Get all parameter values from the current window URL.
     *
     * @example
     * // at URL https://tighten.ziggy.dev/posts/4?lang=en with 'posts.show' route 'posts/{post}' and domain '{team}.ziggy.dev'
     * route().params; // { team: 'tighten', post: 4, lang: 'en' }
     *
     * @return {Object}
     */

  }, {
    key: "params",
    get: function get() {
      var _this$_unresolve2 = this._unresolve(),
          params = _this$_unresolve2.params,
          query = _this$_unresolve2.query;

      return _objectSpread(_objectSpread({}, params), query);
    }
    /**
     * Check whether the given route exists.
     *
     * @param {String} name
     * @return {Boolean}
     */

  }, {
    key: "has",
    value: function has(name) {
      return Object.keys(this._config.routes).includes(name);
    }
    /**
     * Parse Laravel-style route parameters of any type into a normalized object.
     *
     * @example
     * // with route parameter names 'event' and 'venue'
     * _parse(1); // { event: 1 }
     * _parse({ event: 2, venue: 3 }); // { event: 2, venue: 3 }
     * _parse(['Taylor', 'Matt']); // { event: 'Taylor', venue: 'Matt' }
     * _parse([4, { uuid: 56789, name: 'Grand Canyon' }]); // { event: 4, venue: 56789 }
     *
     * @param {(String|Number|Array|Object)} params - Route parameters.
     * @param {Route} route - Route instance.
     * @return {Object} Normalized complete route parameters.
     */

  }, {
    key: "_parse",
    value: function _parse() {
      var _this4 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var route = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._route;
      // If `params` is a string or integer, wrap it in an array
      params = ['string', 'number'].includes(_typeof(params)) ? [params] : params; // Separate segments with and without defaults, and fill in the default values

      var segments = route.parameterSegments.filter(function (_ref9) {
        var name = _ref9.name;
        return !_this4._config.defaults[name];
      });

      if (Array.isArray(params)) {
        // If the parameters are an array they have to be in order, so we can transform them into
        // an object by keying them with the template segment names in the order they appear
        params = params.reduce(function (result, current, i) {
          return segments[i] ? _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, segments[i].name, current)) : _typeof(current) === 'object' ? _objectSpread(_objectSpread({}, result), current) : _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, current, ''));
        }, {});
      } else if (segments.length === 1 && !params[segments[0].name] && (params.hasOwnProperty(Object.values(route.bindings)[0]) || params.hasOwnProperty('id'))) {
        // If there is only one template segment and `params` is an object, that object is
        // ambiguous—it could contain the parameter key and value, or it could be an object
        // representing just the value (e.g. a model); we can inspect it to find out, and
        // if it's just the parameter value, we can wrap it in an object with its key
        params = _defineProperty({}, segments[0].name, params);
      }

      return _objectSpread(_objectSpread({}, this._defaults(route)), this._substituteBindings(params, route));
    }
    /**
     * Populate default parameters for the given route.
     *
     * @example
     * // with default parameters { locale: 'en', country: 'US' } and 'posts.show' route '{locale}/posts/{post}'
     * defaults(...); // { locale: 'en' }
     *
     * @param {Route} route
     * @return {Object} Default route parameters.
     */

  }, {
    key: "_defaults",
    value: function _defaults(route) {
      var _this5 = this;

      return route.parameterSegments.filter(function (_ref10) {
        var name = _ref10.name;
        return _this5._config.defaults[name];
      }).reduce(function (result, _ref11, i) {
        var name = _ref11.name;
        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, name, _this5._config.defaults[name]));
      }, {});
    }
    /**
     * Substitute Laravel route model bindings in the given parameters.
     *
     * @example
     * _substituteBindings({ post: { id: 4, slug: 'hello-world', title: 'Hello, world!' } }, { bindings: { post: 'slug' } }); // { post: 'hello-world' }
     *
     * @param {Object} params - Route parameters.
     * @param {Object} route - Route definition.
     * @return {Object} Normalized route parameters.
     */

  }, {
    key: "_substituteBindings",
    value: function _substituteBindings(params, _ref12) {
      var bindings = _ref12.bindings,
          parameterSegments = _ref12.parameterSegments;
      return Object.entries(params).reduce(function (result, _ref13) {
        var _ref14 = _slicedToArray(_ref13, 2),
            key = _ref14[0],
            value = _ref14[1];

        // If the value isn't an object, or if the key isn't a named route parameter,
        // there's nothing to substitute so we return it as-is
        if (!value || _typeof(value) !== 'object' || Array.isArray(value) || !parameterSegments.some(function (_ref15) {
          var name = _ref15.name;
          return name === key;
        })) {
          return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, value));
        }

        if (!value.hasOwnProperty(bindings[key])) {
          if (value.hasOwnProperty('id')) {
            // As a fallback, we still accept an 'id' key not explicitly registered as a binding
            bindings[key] = 'id';
          } else {
            throw new Error("Ziggy error: object passed as '".concat(key, "' parameter is missing route model binding key '").concat(bindings[key], "'."));
          }
        }

        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, value[bindings[key]]));
      }, {});
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.toString();
    }
    /**
     * @deprecated since v1.0, use `has()` instead.
     */

  }, {
    key: "check",
    value: function check(name) {
      return this.has(name);
    }
  }]);

  return Router;
}( /*#__PURE__*/_wrapNativeSuper(String));



/***/ }),

/***/ "./vendor/tightenco/ziggy/src/js/index.js":
/*!************************************************!*\
  !*** ./vendor/tightenco/ziggy/src/js/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ route)
/* harmony export */ });
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router */ "./vendor/tightenco/ziggy/src/js/Router.js");

function route(name, params, absolute, config) {
  var router = new _Router__WEBPACK_IMPORTED_MODULE_0__["default"](name, params, absolute, config);
  return name ? router.toString() : router;
}

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.disabled {\r\n  pointer-events: none;\r\n  opacity: 0.5;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/ProfileComponent.vue?vue&type=style&index=0&id=3141addd&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/ProfileComponent.vue?vue&type=style&index=0&id=3141addd&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#datosP[data-v-3141addd] {\r\n  padding-top: 100px;\n}\n.card-header[data-v-3141addd] {\r\n  background-color: rgb(0 46 69);\r\n  color: white;\n}\n.card-header .card-title[data-v-3141addd] {\r\n  margin-bottom: 0;\n}\n.disabled[data-v-3141addd] {\r\n  pointer-events: none;\r\n  cursor: not-allowed;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeEmailModal2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChangeEmailModal2.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeEmailModal2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeEmailModal2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/ProfileComponent.vue?vue&type=style&index=0&id=3141addd&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/ProfileComponent.vue?vue&type=style&index=0&id=3141addd&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_style_index_0_id_3141addd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileComponent.vue?vue&type=style&index=0&id=3141addd&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/ProfileComponent.vue?vue&type=style&index=0&id=3141addd&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_style_index_0_id_3141addd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_style_index_0_id_3141addd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/User/Modals/ChangeEmailModal2.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/User/Modals/ChangeEmailModal2.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChangeEmailModal2_vue_vue_type_template_id_395c9711___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangeEmailModal2.vue?vue&type=template&id=395c9711& */ "./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=template&id=395c9711&");
/* harmony import */ var _ChangeEmailModal2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangeEmailModal2.vue?vue&type=script&lang=js& */ "./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=script&lang=js&");
/* harmony import */ var _ChangeEmailModal2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChangeEmailModal2.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChangeEmailModal2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChangeEmailModal2_vue_vue_type_template_id_395c9711___WEBPACK_IMPORTED_MODULE_0__.render,
  _ChangeEmailModal2_vue_vue_type_template_id_395c9711___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User/Modals/ChangeEmailModal2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User/Modals/ChangePasswordModal2.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/User/Modals/ChangePasswordModal2.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChangePasswordModal2_vue_vue_type_template_id_26067e20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePasswordModal2.vue?vue&type=template&id=26067e20& */ "./resources/js/components/User/Modals/ChangePasswordModal2.vue?vue&type=template&id=26067e20&");
/* harmony import */ var _ChangePasswordModal2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePasswordModal2.vue?vue&type=script&lang=js& */ "./resources/js/components/User/Modals/ChangePasswordModal2.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChangePasswordModal2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChangePasswordModal2_vue_vue_type_template_id_26067e20___WEBPACK_IMPORTED_MODULE_0__.render,
  _ChangePasswordModal2_vue_vue_type_template_id_26067e20___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User/Modals/ChangePasswordModal2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User/ProfileComponent.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/User/ProfileComponent.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileComponent_vue_vue_type_template_id_3141addd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileComponent.vue?vue&type=template&id=3141addd&scoped=true& */ "./resources/js/components/User/ProfileComponent.vue?vue&type=template&id=3141addd&scoped=true&");
/* harmony import */ var _ProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/User/ProfileComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _ProfileComponent_vue_vue_type_style_index_0_id_3141addd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileComponent.vue?vue&type=style&index=0&id=3141addd&scoped=true&lang=css& */ "./resources/js/components/User/ProfileComponent.vue?vue&type=style&index=0&id=3141addd&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileComponent_vue_vue_type_template_id_3141addd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfileComponent_vue_vue_type_template_id_3141addd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3141addd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User/ProfileComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeEmailModal2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChangeEmailModal2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeEmailModal2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/User/Modals/ChangePasswordModal2.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/User/Modals/ChangePasswordModal2.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePasswordModal2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChangePasswordModal2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Modals/ChangePasswordModal2.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePasswordModal2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/User/ProfileComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/User/ProfileComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/ProfileComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeEmailModal2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChangeEmailModal2.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/User/ProfileComponent.vue?vue&type=style&index=0&id=3141addd&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/User/ProfileComponent.vue?vue&type=style&index=0&id=3141addd&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_style_index_0_id_3141addd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileComponent.vue?vue&type=style&index=0&id=3141addd&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/ProfileComponent.vue?vue&type=style&index=0&id=3141addd&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=template&id=395c9711&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=template&id=395c9711& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeEmailModal2_vue_vue_type_template_id_395c9711___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeEmailModal2_vue_vue_type_template_id_395c9711___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeEmailModal2_vue_vue_type_template_id_395c9711___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChangeEmailModal2.vue?vue&type=template&id=395c9711& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=template&id=395c9711&");


/***/ }),

/***/ "./resources/js/components/User/Modals/ChangePasswordModal2.vue?vue&type=template&id=26067e20&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/User/Modals/ChangePasswordModal2.vue?vue&type=template&id=26067e20& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePasswordModal2_vue_vue_type_template_id_26067e20___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePasswordModal2_vue_vue_type_template_id_26067e20___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePasswordModal2_vue_vue_type_template_id_26067e20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChangePasswordModal2.vue?vue&type=template&id=26067e20& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Modals/ChangePasswordModal2.vue?vue&type=template&id=26067e20&");


/***/ }),

/***/ "./resources/js/components/User/ProfileComponent.vue?vue&type=template&id=3141addd&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/User/ProfileComponent.vue?vue&type=template&id=3141addd&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_template_id_3141addd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_template_id_3141addd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_template_id_3141addd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileComponent.vue?vue&type=template&id=3141addd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/ProfileComponent.vue?vue&type=template&id=3141addd&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=template&id=395c9711&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Modals/ChangeEmailModal2.vue?vue&type=template&id=395c9711& ***!
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
  return _c("div", [
    _c("div", {}, [
      _c(
        "a",
        {
          staticClass: "inline-block font-medium leading-tight",
          attrs: {
            href: "#",
            "data-toggle": "modal",
            "data-target": "#exampleModalCenter",
          },
        },
        [_vm._v("\n      Cambiar correo\n    ")]
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto",
        attrs: {
          id: "exampleModalCenter",
          tabindex: "-1",
          "aria-labelledby": "exampleModalCenterTitle",
          "aria-modal": "true",
          role: "dialog",
        },
      },
      [
        _c(
          "div",
          {
            staticClass:
              "modal-dialog modal-dialog-centered relative w-auto pointer-events-none",
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current",
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md",
                  },
                  [
                    _c(
                      "h5",
                      {
                        staticClass:
                          "text-xl font-medium leading-normal text-gray-800",
                        attrs: { id: "exampleModalScrollableLabel" },
                      },
                      [
                        _vm._v(
                          "\n            Cambia tu correo electrónico\n          "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline",
                        attrs: {
                          type: "button",
                          "data-dismiss": "modal",
                          "aria-label": "Close",
                        },
                      },
                      [_c("box-icon", { attrs: { name: "x" } })],
                      1
                    ),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body relative p-4" }, [
                  _vm.$page.props.errors.new_email
                    ? _c(
                        "div",
                        {
                          staticClass: "alert alert-danger",
                          attrs: { role: "alert" },
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.$page.props.errors.new_email) +
                              "\n          "
                          ),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.message
                    ? _c("div", { staticClass: "alert alert-success" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.message) +
                            "\n          "
                        ),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      staticClass: "card-body",
                      class: { disabled: _vm.form.processing },
                      on: {
                        submit: function ($event) {
                          $event.preventDefault()
                          return _vm.saveForm.apply(null, arguments)
                        },
                      },
                    },
                    [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.new_email,
                              expression: "form.new_email",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "email",
                            id: "inputNewEmail",
                            placeholder: "Escriba su nuevo correo electrónico",
                          },
                          domProps: { value: _vm.form.new_email },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "new_email",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password,
                              expression: "form.password",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            id: "inputOldPassword",
                            placeholder: "Escriba su contraseña",
                          },
                          domProps: { value: _vm.form.password },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password",
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
                          staticClass: "btn btn-danger",
                          attrs: {
                            type: "button",
                            disabled: _vm.loading,
                            "data-dismiss": "modal",
                          },
                        },
                        [_vm._v("\n              Cerrar\n            ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary ",
                          attrs: {
                            type: "submit",
                            disabled:
                              _vm.form.processing ||
                              _vm.form.new_email == "" ||
                              _vm.form.password.length < 2,
                          },
                        },
                        [
                          _vm._v("\n              Guardar\n              "),
                          _vm.form.processing
                            ? _c("span", {
                                staticClass: "spinner-border spinner-border-sm",
                                attrs: {
                                  role: "status",
                                  "aria-hidden": "true",
                                },
                              })
                            : _vm._e(),
                        ]
                      ),
                    ]
                  ),
                ]),
              ]
            ),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Modals/ChangePasswordModal2.vue?vue&type=template&id=26067e20&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Modals/ChangePasswordModal2.vue?vue&type=template&id=26067e20& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", {}, [
      _c(
        "a",
        {
          staticClass: "inline-block font-medium leading-tight",
          attrs: {
            href: "#",
            "data-toggle": "modal",
            "data-target": "#passwordModalCenter",
          },
          on: {
            click: function ($event) {
              _vm.message = ""
            },
          },
        },
        [_vm._v("\n      Cambiar contraseña\n    ")]
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto",
        attrs: {
          id: "passwordModalCenter",
          tabindex: "-1",
          "aria-labelledby": "passwordModalCenterTitle",
          "aria-modal": "true",
          role: "dialog",
        },
      },
      [
        _c(
          "div",
          {
            staticClass:
              "modal-dialog modal-dialog-centered relative w-auto pointer-events-none",
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current",
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md",
                  },
                  [
                    _c(
                      "h5",
                      {
                        staticClass:
                          "text-xl font-medium leading-normal text-gray-800",
                        attrs: { id: "passwordModalScrollableLabel" },
                      },
                      [_vm._v("\n            Cambia tu contraseña\n          ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline",
                        attrs: {
                          type: "button",
                          "data-dismiss": "modal",
                          "aria-label": "Close",
                        },
                      },
                      [_c("box-icon", { attrs: { name: "x" } })],
                      1
                    ),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body relative p-4" }, [
                  _vm.$page.props.errors.new_password
                    ? _c(
                        "div",
                        {
                          staticClass: "alert alert-danger",
                          attrs: { role: "alert" },
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.$page.props.errors.new_password) +
                              "\n          "
                          ),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.message
                    ? _c("div", { staticClass: "alert alert-success" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.message) +
                            "\n          "
                        ),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      class: { disabled: _vm.form.processing },
                      on: {
                        submit: function ($event) {
                          $event.preventDefault()
                          return _vm.updateForm.apply(null, arguments)
                        },
                      },
                    },
                    [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.passwordActual,
                              expression: "form.passwordActual",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            id: "passwordActual",
                            placeholder: "Escriba su contraseñá actual",
                            required: "",
                          },
                          domProps: { value: _vm.form.passwordActual },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "passwordActual",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.new_password,
                              expression: "form.new_password",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            id: "new-password",
                            placeholder: "Escriba su nueva contraseña",
                            required: "",
                          },
                          domProps: { value: _vm.form.new_password },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "new_password",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.new_password_confirmation,
                              expression: "form.new_password_confirmation",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            "data-vv-as": "new-password",
                            id: "new-password-confirmation",
                            placeholder: "Escriba al contraseña otra vez",
                            required: "",
                          },
                          domProps: {
                            value: _vm.form.new_password_confirmation,
                          },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "new_password_confirmation",
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
                          staticClass: "btn btn-danger",
                          attrs: {
                            type: "button",
                            disabled: _vm.loading,
                            "data-dismiss": "modal",
                          },
                        },
                        [_vm._v("\n              Cerrar\n            ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: {
                            type: "submit",
                            disabled:
                              _vm.form.processing ||
                              _vm.form.passwordActual.length == 0,
                          },
                        },
                        [
                          _vm.form.processing
                            ? _c("span", {
                                staticClass: "spinner-border spinner-border-sm",
                                attrs: {
                                  role: "status",
                                  "aria-hidden": "true",
                                },
                              })
                            : _vm._e(),
                          _vm._v("\n              Aceptar"),
                        ]
                      ),
                    ]
                  ),
                ]),
              ]
            ),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/ProfileComponent.vue?vue&type=template&id=3141addd&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/ProfileComponent.vue?vue&type=template&id=3141addd&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "profile" } },
    [
      _c("AppHead", { attrs: { title: "Usuario | Perfil" } }),
      _vm._v(" "),
      _c("div", { staticClass: "container", attrs: { id: "datosP" } }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-12" }, [
            _vm.$page.props.errors.new_email
              ? _c("div", { staticClass: "alert alert-danger" }, [
                  _vm._v(
                    "\n          Su correo no fue actualizado, por favor intente de nuevo.\n        "
                  ),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.$page.props.errors.new_password
              ? _c("div", { staticClass: "alert alert-danger" }, [
                  _vm._v(
                    "\n          Su contraseña no fue actualizada, por favor intente de nuevo.\n        "
                  ),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.$page.props.flash.message
              ? _c("div", { staticClass: "alert alert-success" }, [
                  _vm._v(
                    "\n          Su información se actualizó correctamente.\n        "
                  ),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "card" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                !_vm.user.email_verified_at
                  ? _c(
                      "div",
                      { staticClass: "alert alert-warning" },
                      [
                        _vm._v(
                          "\n              Usted no ha verificado su dirección de correo electrónico, para hacerlo haga click\n              "
                        ),
                        _c(
                          "inertia-link",
                          {
                            staticClass: "text-sky-900",
                            attrs: { href: _vm.route("verificarion.notice") },
                          },
                          [_vm._v("aquí")]
                        ),
                        _vm._v(
                          "\n              y siga los pasos.\n            "
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.$page.props.auth.role == "suspended"
                  ? _c("div", { staticClass: "alert alert-warning" }, [
                      _vm._v(
                        "\n              Actualmente se encuentra suspendido, por lo que no puede realizar algunas acciones, por favor póngase en contacto con nosotros.\n              Tampoco puede acceder al contenido de los cursos en Moodle.\n            "
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    class: { disabled: _vm.loading },
                    attrs: { action: "#", method: "post" },
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.updateUser.apply(null, arguments)
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "form-group col-12 col-sm-6" }, [
                        _c("label", { attrs: { for: "inputName" } }, [
                          _vm._v("Nombre"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "inputName",
                            placeholder: "Nombre Completo",
                            disabled: "",
                          },
                          domProps: { value: _vm.fullname },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-12 col-sm-6" }, [
                        _c("label", { attrs: { for: "inputUsername" } }, [
                          _vm._v("Nombre de usuario"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "inputUsername",
                            placeholder: "Nombre de usuario",
                            readonly: "",
                          },
                          domProps: { value: _vm.user.username },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "form-group col-12 col-sm-6" },
                        [
                          _c("label", { attrs: { for: "inputEmail" } }, [
                            _vm._v("Correo electrónico"),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "email",
                              id: "inputEmail",
                              placeholder: "Correo electrónico",
                              disabled: "",
                            },
                            domProps: { value: _vm.user.email },
                          }),
                          _vm._v(" "),
                          _vm.$page.props.auth.role != "suspended"
                            ? _c("change-email-modal-2")
                            : _vm._e(),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group col-12 col-sm-6" },
                        [
                          _c("label", { attrs: { for: "inputPassword" } }, [
                            _vm._v("Contraseña"),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "password",
                              id: "inputPassword",
                              placeholder: "Contraseña",
                              value: "********",
                              disabled: "",
                              readonly: "",
                            },
                          }),
                          _vm._v(" "),
                          _vm.$page.props.auth.role != "suspended"
                            ? _c("change-password-modal-2")
                            : _vm._e(),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "from-group col-12 col-sm-6" },
                        [
                          _c("country-select", {
                            staticClass: "form-control",
                            attrs: {
                              name: "country",
                              id: "country",
                              placeholder: "País",
                              whiteList: ["EC"],
                              countryName: true,
                              autocomplete: true,
                              removePlaceholder: false,
                              country: _vm.user.country,
                            },
                            model: {
                              value: _vm.form.country,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "country", $$v)
                              },
                              expression: "form.country",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group col-12 col-sm-6" },
                        [
                          _c("region-select", {
                            staticClass: "form-control",
                            attrs: {
                              region: _vm.user.region,
                              defaultRegion: "EC",
                              regionName: true,
                              name: "region",
                              id: "region",
                              placeholder: "Provincia",
                              disabled: !_vm.form.country,
                            },
                            model: {
                              value: _vm.form.region,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "region", $$v)
                              },
                              expression: "form.region",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "fechaNacimiento" } }, [
                        _vm._v("Día de nacimiento"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.birth_day,
                            expression: "form.birth_day",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "date",
                          placeholder: "Fecha de nacimiento",
                        },
                        domProps: { value: _vm.form.birth_day },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "birth_day", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.$page.props.errors.birth_day != null
                        ? _c("div", { staticClass: "alert alert-danger" }, [
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.$page.props.errors.birth_day) +
                                "\n                "
                            ),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _vm.$page.props.auth.role != "suspended"
                        ? _c(
                            "button",
                            {
                              staticClass: " btn btn-primary",
                              attrs: {
                                type: "submit",
                                disabled: _vm.enableButton || this.loading,
                              },
                            },
                            [
                              _vm.loading
                                ? _c("span", {
                                    staticClass:
                                      "spinner-border spinner-border-sm",
                                    attrs: {
                                      role: "status",
                                      "aria-hidden": "true",
                                    },
                                  })
                                : _vm._e(),
                              _vm._v(
                                "\n                  Guardar Cambios\n                "
                              ),
                            ]
                          )
                        : _vm._e(),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex flex-row-reverse pr-2" },
                [
                  _vm.$page.props.auth.role != "suspended"
                    ? _c(
                        "inertia-link",
                        { attrs: { href: _vm.route("eliminar-cuenta") } },
                        [_vm._v("Eliminar Cuenta")]
                      )
                    : _vm._e(),
                ],
                1
              ),
            ]),
          ]),
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Datos del usuario")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);