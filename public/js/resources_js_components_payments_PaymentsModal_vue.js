"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_payments_PaymentsModal_vue"],{

/***/ "./node_modules/@paypal/paypal-js/dist/esm/paypal-js.js":
/*!**************************************************************!*\
  !*** ./node_modules/@paypal/paypal-js/dist/esm/paypal-js.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadCustomScript": () => (/* binding */ loadCustomScript),
/* harmony export */   "loadScript": () => (/* binding */ loadScript),
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
/*!
 * paypal-js v5.0.2 (2022-01-30T01:29:15.093Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function findScript(url, attributes) {
  var currentScript = document.querySelector("script[src=\"".concat(url, "\"]"));
  if (currentScript === null) return null;
  var nextScript = createScriptElement(url, attributes); // ignore the data-uid-auto attribute that gets auto-assigned to every script tag

  var currentScriptClone = currentScript.cloneNode();
  delete currentScriptClone.dataset.uidAuto; // check if the new script has the same number of data attributes

  if (Object.keys(currentScriptClone.dataset).length !== Object.keys(nextScript.dataset).length) {
    return null;
  }

  var isExactMatch = true; // check if the data attribute values are the same

  Object.keys(currentScriptClone.dataset).forEach(function (key) {
    if (currentScriptClone.dataset[key] !== nextScript.dataset[key]) {
      isExactMatch = false;
    }
  });
  return isExactMatch ? currentScript : null;
}
function insertScriptElement(_a) {
  var url = _a.url,
      attributes = _a.attributes,
      onSuccess = _a.onSuccess,
      onError = _a.onError;
  var newScript = createScriptElement(url, attributes);
  newScript.onerror = onError;
  newScript.onload = onSuccess;
  document.head.insertBefore(newScript, document.head.firstElementChild);
}
function processOptions(options) {
  var sdkBaseURL = "https://www.paypal.com/sdk/js";

  if (options.sdkBaseURL) {
    sdkBaseURL = options.sdkBaseURL;
    delete options.sdkBaseURL;
  }

  processMerchantID(options);

  var _a = Object.keys(options).filter(function (key) {
    return typeof options[key] !== "undefined" && options[key] !== null && options[key] !== "";
  }).reduce(function (accumulator, key) {
    var value = options[key].toString();

    if (key.substring(0, 5) === "data-") {
      accumulator.dataAttributes[key] = value;
    } else {
      accumulator.queryParams[key] = value;
    }

    return accumulator;
  }, {
    queryParams: {},
    dataAttributes: {}
  }),
      queryParams = _a.queryParams,
      dataAttributes = _a.dataAttributes;

  return {
    url: "".concat(sdkBaseURL, "?").concat(objectToQueryString(queryParams)),
    dataAttributes: dataAttributes
  };
}
function objectToQueryString(params) {
  var queryString = "";
  Object.keys(params).forEach(function (key) {
    if (queryString.length !== 0) queryString += "&";
    queryString += key + "=" + params[key];
  });
  return queryString;
}
/**
 * Parse the error message code received from the server during the script load.
 * This function search for the occurrence of this specific string "/* Original Error:".
 *
 * @param message the received error response from the server
 * @returns the content of the message if the string string was found.
 *          The whole message otherwise
 */

function parseErrorMessage(message) {
  var originalErrorText = message.split("/* Original Error:")[1];
  return originalErrorText ? originalErrorText.replace(/\n/g, "").replace("*/", "").trim() : message;
}

function createScriptElement(url, attributes) {
  if (attributes === void 0) {
    attributes = {};
  }

  var newScript = document.createElement("script");
  newScript.src = url;
  Object.keys(attributes).forEach(function (key) {
    newScript.setAttribute(key, attributes[key]);

    if (key === "data-csp-nonce") {
      newScript.setAttribute("nonce", attributes["data-csp-nonce"]);
    }
  });
  return newScript;
}

function processMerchantID(options) {
  var merchantID = options["merchant-id"],
      dataMerchantID = options["data-merchant-id"];
  var newMerchantID = "";
  var newDataMerchantID = "";

  if (Array.isArray(merchantID)) {
    if (merchantID.length > 1) {
      newMerchantID = "*";
      newDataMerchantID = merchantID.toString();
    } else {
      newMerchantID = merchantID.toString();
    }
  } else if (typeof merchantID === "string" && merchantID.length > 0) {
    newMerchantID = merchantID;
  } else if (typeof dataMerchantID === "string" && dataMerchantID.length > 0) {
    newMerchantID = "*";
    newDataMerchantID = dataMerchantID;
  }

  options["merchant-id"] = newMerchantID;
  options["data-merchant-id"] = newDataMerchantID;
  return options;
}

/**
 * Load the Paypal JS SDK script asynchronously.
 *
 * @param {Object} options - used to configure query parameters and data attributes for the JS SDK.
 * @param {PromiseConstructor} [PromisePonyfill=window.Promise] - optional Promise Constructor ponyfill.
 * @return {Promise<Object>} paypalObject - reference to the global window PayPal object.
 */

function loadScript(options, PromisePonyfill) {
  if (PromisePonyfill === void 0) {
    PromisePonyfill = getDefaultPromiseImplementation();
  }

  validateArguments(options, PromisePonyfill); // resolve with null when running in Node

  if (typeof window === "undefined") return PromisePonyfill.resolve(null);

  var _a = processOptions(options),
      url = _a.url,
      dataAttributes = _a.dataAttributes;

  var namespace = dataAttributes["data-namespace"] || "paypal";
  var existingWindowNamespace = getPayPalWindowNamespace(namespace); // resolve with the existing global paypal namespace when a script with the same params already exists

  if (findScript(url, dataAttributes) && existingWindowNamespace) {
    return PromisePonyfill.resolve(existingWindowNamespace);
  }

  return loadCustomScript({
    url: url,
    attributes: dataAttributes
  }, PromisePonyfill).then(function () {
    var newWindowNamespace = getPayPalWindowNamespace(namespace);

    if (newWindowNamespace) {
      return newWindowNamespace;
    }

    throw new Error("The window.".concat(namespace, " global variable is not available."));
  });
}
/**
 * Load a custom script asynchronously.
 *
 * @param {Object} options - used to set the script url and attributes.
 * @param {PromiseConstructor} [PromisePonyfill=window.Promise] - optional Promise Constructor ponyfill.
 * @return {Promise<void>} returns a promise to indicate if the script was successfully loaded.
 */

function loadCustomScript(options, PromisePonyfill) {
  if (PromisePonyfill === void 0) {
    PromisePonyfill = getDefaultPromiseImplementation();
  }

  validateArguments(options, PromisePonyfill);
  var url = options.url,
      attributes = options.attributes;

  if (typeof url !== "string" || url.length === 0) {
    throw new Error("Invalid url.");
  }

  if (typeof attributes !== "undefined" && typeof attributes !== "object") {
    throw new Error("Expected attributes to be an object.");
  }

  return new PromisePonyfill(function (resolve, reject) {
    // resolve with undefined when running in Node
    if (typeof window === "undefined") return resolve();
    insertScriptElement({
      url: url,
      attributes: attributes,
      onSuccess: function onSuccess() {
        return resolve();
      },
      onError: function onError() {
        var defaultError = new Error("The script \"".concat(url, "\" failed to load."));

        if (!window.fetch) {
          return reject(defaultError);
        } // Fetch the error reason from the response body for validation errors


        return fetch(url).then(function (response) {
          if (response.status === 200) {
            reject(defaultError);
          }

          return response.text();
        }).then(function (message) {
          var parseMessage = parseErrorMessage(message);
          reject(new Error(parseMessage));
        }).catch(function (err) {
          reject(err);
        });
      }
    });
  });
}

function getDefaultPromiseImplementation() {
  if (typeof Promise === "undefined") {
    throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");
  }

  return Promise;
}

function getPayPalWindowNamespace(namespace) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return window[namespace];
}

function validateArguments(options, PromisePonyfill) {
  if (typeof options !== "object" || options === null) {
    throw new Error("Expected an options object.");
  }

  if (typeof PromisePonyfill !== "undefined" && typeof PromisePonyfill !== "function") {
    throw new Error("Expected PromisePonyfill to be a function.");
  }
}

var version = "5.0.2";




/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/payments/PaymentsModal.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/payments/PaymentsModal.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _paypal_paypal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @paypal/paypal-js */ "./node_modules/@paypal/paypal-js/dist/esm/paypal-js.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoadingComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoadingComponent.vue */ "./resources/js/components/LoadingComponent.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    LoadingComponent: _LoadingComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      curso: this.$parent.$page.props.curso.shortname,
      loading: true,
      paypalData: {}
    };
  },
  methods: {
    loadPaypalButtons: function loadPaypalButtons() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var paypalSdk, amount, desc;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0,_paypal_paypal_js__WEBPACK_IMPORTED_MODULE_0__.loadScript)({
                  "client-id": _this.paypalData.client_id,
                  "currency": _this.paypalData.currency,
                  "buyer-country": _this.paypalData.buyer_country,
                  "locale": _this.paypalData.locale,
                  "commit": true
                });

              case 2:
                paypalSdk = _context2.sent;

                if (!paypalSdk) {
                  _context2.next = 15;
                  break;
                }

                _context2.prev = 4;
                amount = _this.$parent.$page.props.curso.price;
                desc = _this.$parent.$page.props.curso.fullname;
                _context2.next = 9;
                return paypalSdk.Buttons({
                  style: {
                    label: 'buynow'
                  },
                  createOrder: function createOrder(data, actions) {
                    // Set up the transaction
                    return actions.order.create({
                      purchase_units: [{
                        description: desc,
                        amount: {
                          value: amount
                        }
                      }],
                      application_context: {
                        shipping_preference: 'NO_SHIPPING'
                      }
                    });
                  },
                  onApprove: function () {
                    var _onApprove = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data, actions, resp) {
                      var transaction;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return actions.order.capture();

                            case 2:
                              transaction = _context.sent;
                              console.log(transaction);
                              _this.$parent.$data.payment_form.payment_method = 'paypal';
                              _this.$parent.$data.payment_form.payment_id = transaction.id;
                              _this.$parent.$data.payment_form.payment_status = transaction.status;
                              _this.$parent.$data.payment_form.amount = transaction.purchase_units[0].amount.value;
                              _this.$parent.$data.payment_form.currency = transaction.purchase_units[0].amount.currency_code;
                              _this.$parent.$data.payment_form.payer_id = transaction.payer.payer_id;
                              _this.$parent.$data.payment_form.payer_email = transaction.payer.email_address;
                              _this.$parent.$data.payment_form.payer_name = transaction.payer.name.given_name + ' ' + transaction.payer.name.surname;
                              _this.$parent.$data.payment_form.transaction_id = transaction.purchase_units[0].payments.captures[0].id;
                              _context.next = 15;
                              return _this.$parent.redirectOrSignup();

                            case 15:
                              _this.$emit('close');

                              _this.isActive = true;
                              _this.itemSelected = '';

                            case 18:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    function onApprove(_x, _x2, _x3) {
                      return _onApprove.apply(this, arguments);
                    }

                    return onApprove;
                  }()
                }).render("#paypal-button-container");

              case 9:
                _context2.next = 15;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](4);
                console.error("failed to render the PayPal Buttons", _context2.t0);

                _this.$toast.open({
                  message: "Error",
                  type: "danger",
                  duration: 5000
                });

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 11]]);
      }))();
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.loading = true;
    axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/paypal-data").then(function (response) {
      _this2.paypalData = response.data;
      _this2.loading = false;

      _this2.loadPaypalButtons();
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/payments/PaymentsModal.vue?vue&type=style&index=0&id=3fad05ee&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/payments/PaymentsModal.vue?vue&type=style&index=0&id=3fad05ee&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#modal[data-v-3fad05ee] {\r\n  z-index: 300;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/payments/PaymentsModal.vue?vue&type=style&index=0&id=3fad05ee&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/payments/PaymentsModal.vue?vue&type=style&index=0&id=3fad05ee&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsModal_vue_vue_type_style_index_0_id_3fad05ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentsModal.vue?vue&type=style&index=0&id=3fad05ee&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/payments/PaymentsModal.vue?vue&type=style&index=0&id=3fad05ee&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsModal_vue_vue_type_style_index_0_id_3fad05ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsModal_vue_vue_type_style_index_0_id_3fad05ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/payments/PaymentsModal.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/payments/PaymentsModal.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaymentsModal_vue_vue_type_template_id_3fad05ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentsModal.vue?vue&type=template&id=3fad05ee&scoped=true& */ "./resources/js/components/payments/PaymentsModal.vue?vue&type=template&id=3fad05ee&scoped=true&");
/* harmony import */ var _PaymentsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentsModal.vue?vue&type=script&lang=js& */ "./resources/js/components/payments/PaymentsModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _PaymentsModal_vue_vue_type_style_index_0_id_3fad05ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaymentsModal.vue?vue&type=style&index=0&id=3fad05ee&scoped=true&lang=css& */ "./resources/js/components/payments/PaymentsModal.vue?vue&type=style&index=0&id=3fad05ee&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PaymentsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaymentsModal_vue_vue_type_template_id_3fad05ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PaymentsModal_vue_vue_type_template_id_3fad05ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3fad05ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/payments/PaymentsModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/payments/PaymentsModal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/payments/PaymentsModal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentsModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/payments/PaymentsModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/payments/PaymentsModal.vue?vue&type=style&index=0&id=3fad05ee&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/payments/PaymentsModal.vue?vue&type=style&index=0&id=3fad05ee&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsModal_vue_vue_type_style_index_0_id_3fad05ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentsModal.vue?vue&type=style&index=0&id=3fad05ee&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/payments/PaymentsModal.vue?vue&type=style&index=0&id=3fad05ee&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/payments/PaymentsModal.vue?vue&type=template&id=3fad05ee&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/payments/PaymentsModal.vue?vue&type=template&id=3fad05ee&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsModal_vue_vue_type_template_id_3fad05ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsModal_vue_vue_type_template_id_3fad05ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsModal_vue_vue_type_template_id_3fad05ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentsModal.vue?vue&type=template&id=3fad05ee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/payments/PaymentsModal.vue?vue&type=template&id=3fad05ee&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/payments/PaymentsModal.vue?vue&type=template&id=3fad05ee&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/payments/PaymentsModal.vue?vue&type=template&id=3fad05ee&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "bg-[#000000a8] fade fixed top-0 left-0  w-full h-full outline-none overflow-x-hidden overflow-y-auto show",
      attrs: {
        id: "modal",
        tabindex: "-1",
        "aria-labelledby": "paymentSelectorModalTitle",
        "aria-modal": "true",
        role: "dialog"
      }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "modal-dialog modal-dialog-centered relative w-auto pointer-events-none"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
                },
                [
                  _c(
                    "h5",
                    {
                      staticClass:
                        "text-xl font-medium leading-normal text-gray-800",
                      attrs: { id: "paymentSelectorModalScrollableLabel" }
                    },
                    [_vm._v("\n          Elija la forma de pago\n        ")]
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
                        "aria-label": "Close"
                      },
                      on: {
                        click: function($event) {
                          return _vm.$emit("close")
                        }
                      }
                    },
                    [_c("box-icon", { attrs: { name: "x" } })],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-body relative p-4" },
                [
                  _vm.loading
                    ? _c("loading-component", {
                        attrs: { position: "relative" }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { attrs: { id: "paypal-button-container" } }),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      !_vm.loading
                        ? _c(
                            "inertia-link",
                            {
                              staticClass:
                                "relative w-full btn border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white",
                              attrs: {
                                as: _vm.button,
                                href:
                                  "/pago-deposito-transferencia/" + this.curso
                              }
                            },
                            [
                              _vm._v(
                                "\n            Depósito/Transferencia Bancaria "
                              ),
                              _c("box-icon", {
                                staticClass: "fill-orange-400 fixed",
                                attrs: { name: "right-arrow-alt" }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);