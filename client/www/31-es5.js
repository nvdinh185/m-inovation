function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js ***!
    \**************************************************************************/

  /*! exports provided: ion_item_option, ion_item_options, ion_item_sliding */

  /***/
  function node_modulesIonicCoreDistEsmIonItemOption_3IosEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_item_option", function () {
      return ItemOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_item_options", function () {
      return ItemOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_item_sliding", function () {
      return ItemSliding;
    });
    /* harmony import */


    var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-feeeff0d.js */
    "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
    /* harmony import */


    var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./config-3c7f3790.js */
    "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
    /* harmony import */


    var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./helpers-46f4a262.js */
    "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
    /* harmony import */


    var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./theme-18cbe2cc.js */
    "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");

    var ItemOption = /*#__PURE__*/function () {
      function ItemOption(hostRef) {
        _classCallCheck(this, ItemOption);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the user cannot interact with the item option.
         */

        this.disabled = false;
        /**
         * If `true`, the option will expand to take up the available width and cover any other options.
         */

        this.expandable = false;
        /**
         * The type of the button.
         */

        this.type = 'button';

        this.onClick = function (ev) {
          var el = ev.target.closest('ion-item-option');

          if (el) {
            ev.preventDefault();
          }
        };
      }

      _createClass(ItemOption, [{
        key: "render",
        value: function render() {
          var _Object$assign;

          var disabled = this.disabled,
              expandable = this.expandable,
              href = this.href;
          var TagType = href === undefined ? 'button' : 'a';
          var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
          var attrs = TagType === 'button' ? {
            type: this.type
          } : {
            download: this.download,
            href: this.href,
            target: this.target
          };
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onClick: this.onClick,
            "class": Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), (_Object$assign = {}, _defineProperty(_Object$assign, mode, true), _defineProperty(_Object$assign, 'item-option-disabled', disabled), _defineProperty(_Object$assign, 'item-option-expandable', expandable), _defineProperty(_Object$assign, 'ion-activatable', true), _Object$assign))
          }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({}, attrs, {
            "class": "button-native",
            disabled: disabled
          }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "button-inner"
          }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "top"
          }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "horizontal-wrapper"
          }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "start"
          }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "icon-only"
          }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "end"
          })), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "bottom"
          })), mode === 'md' && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:.7em;padding-right:.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:.7em;padding-inline-start:.7em;-webkit-padding-end:.7em;padding-inline-end:.7em}}.button-inner{-ms-flex-flow:column nowrap;flex-flow:column nowrap;height:100%}.button-inner,.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}.horizontal-wrapper{-ms-flex-flow:row nowrap;flex-flow:row nowrap}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:.9em;font-size:1.8em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(.65,.05,.36,1);transition-timing-function:cubic-bezier(.65,.05,.36,1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:.5;pointer-events:none}:host{font-size:16px}:host(.activated){background:var(--ion-color-primary-shade,#3171e0)}:host(.ion-color.activated){background:var(--ion-color-shade)}";
        }
      }]);

      return ItemOption;
    }();

    var ItemOptions = /*#__PURE__*/function () {
      function ItemOptions(hostRef) {
        _classCallCheck(this, ItemOptions);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * The side the option button should be on. Possible values: `"start"` and `"end"`. If you have multiple `ion-item-options`, a side must be provided for each.
         *
         */

        this.side = 'end';
        this.ionSwipe = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionSwipe", 7);
      }
      /** @internal */


      _createClass(ItemOptions, [{
        key: "fireSwipeEvent",
        value: function () {
          var _fireSwipeEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.ionSwipe.emit({
                      side: this.side
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function fireSwipeEvent() {
            return _fireSwipeEvent.apply(this, arguments);
          }

          return fireSwipeEvent;
        }()
      }, {
        key: "render",
        value: function render() {
          var _class;

          var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
          var isEnd = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.side);
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            "class": (_class = {}, _defineProperty(_class, mode, true), _defineProperty(_class, "item-options-".concat(mode), true), _defineProperty(_class, 'item-options-start', !isEnd), _defineProperty(_class, 'item-options-end', isEnd), _class)
          });
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "style",
        get: function get() {
          return "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options,[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end),[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start,[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start),.item-sliding-active-slide.item-sliding-active-options-start .item-options-start{width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)))}.item-options-ios.item-options-end{border-bottom-width:.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:.55px}";
        }
      }]);

      return ItemOptions;
    }();

    var SWIPE_MARGIN = 30;
    var ELASTIC_FACTOR = 0.55;
    var openSlidingItem;

    var ItemSliding = /*#__PURE__*/function () {
      function ItemSliding(hostRef) {
        _classCallCheck(this, ItemSliding);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.item = null;
        this.openAmount = 0;
        this.initialOpenAmount = 0;
        this.optsWidthRightSide = 0;
        this.optsWidthLeftSide = 0;
        this.sides = 0
        /* None */
        ;
        this.optsDirty = true;
        this.state = 2
        /* Disabled */
        ;
        /**
         * If `true`, the user cannot interact with the sliding item.
         */

        this.disabled = false;
        this.ionDrag = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionDrag", 7);
      }

      _createClass(ItemSliding, [{
        key: "disabledChanged",
        value: function disabledChanged() {
          if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
          }
        }
      }, {
        key: "connectedCallback",
        value: function () {
          var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this = this;

            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.item = this.el.querySelector('ion-item');
                    _context2.next = 3;
                    return this.updateOptions();

                  case 3:
                    _context2.next = 5;
                    return Promise.resolve().then(__webpack_require__.bind(null,
                    /*! ./index-624eea58.js */
                    "./node_modules/@ionic/core/dist/esm/index-624eea58.js"));

                  case 5:
                    this.gesture = _context2.sent.createGesture({
                      el: this.el,
                      gestureName: 'item-swipe',
                      gesturePriority: 100,
                      threshold: 5,
                      canStart: function canStart() {
                        return _this.canStart();
                      },
                      onStart: function onStart() {
                        return _this.onStart();
                      },
                      onMove: function onMove(ev) {
                        return _this.onMove(ev);
                      },
                      onEnd: function onEnd(ev) {
                        return _this.onEnd(ev);
                      }
                    });
                    this.disabledChanged();

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function connectedCallback() {
            return _connectedCallback.apply(this, arguments);
          }

          return connectedCallback;
        }()
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
          }

          this.item = null;
          this.leftOptions = this.rightOptions = undefined;

          if (openSlidingItem === this.el) {
            openSlidingItem = undefined;
          }
        }
        /**
         * Get the amount the item is open in pixels.
         */

      }, {
        key: "getOpenAmount",
        value: function getOpenAmount() {
          return Promise.resolve(this.openAmount);
        }
        /**
         * Get the ratio of the open amount of the item compared to the width of the options.
         * If the number returned is positive, then the options on the right side are open.
         * If the number returned is negative, then the options on the left side are open.
         * If the absolute value of the number is greater than 1, the item is open more than
         * the width of the options.
         */

      }, {
        key: "getSlidingRatio",
        value: function getSlidingRatio() {
          return Promise.resolve(this.getSlidingRatioSync());
        }
        /**
         * Open the sliding item.
         *
         * @param side The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item.
         */

      }, {
        key: "open",
        value: function () {
          var _open = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(side) {
            var _this2 = this;

            var optionsToOpen, isStartOpen, isEndOpen;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(this.item === null)) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 2:
                    optionsToOpen = this.getOptions(side);

                    if (optionsToOpen) {
                      _context3.next = 5;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 5:
                    /**
                     * If side is not set, we need to infer the side
                     * so we know which direction to move the options
                     */
                    if (side === undefined) {
                      side = optionsToOpen === this.leftOptions ? 'start' : 'end';
                    } // In RTL we want to switch the sides


                    side = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["i"])(side) ? 'end' : 'start';
                    isStartOpen = this.openAmount < 0;
                    isEndOpen = this.openAmount > 0;
                    /**
                     * If a side is open and a user tries to
                     * re-open the same side, we should not do anything
                     */

                    if (!(isStartOpen && optionsToOpen === this.leftOptions)) {
                      _context3.next = 11;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 11:
                    if (!(isEndOpen && optionsToOpen === this.rightOptions)) {
                      _context3.next = 13;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 13:
                    this.closeOpened();
                    this.state = 4
                    /* Enabled */
                    ;
                    requestAnimationFrame(function () {
                      _this2.calculateOptsWidth();

                      var width = side === 'end' ? _this2.optsWidthRightSide : -_this2.optsWidthLeftSide;
                      openSlidingItem = _this2.el;

                      _this2.setOpenAmount(width, false);

                      _this2.state = side === 'end' ? 8
                      /* End */
                      : 16
                      /* Start */
                      ;
                    });

                  case 16:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function open(_x) {
            return _open.apply(this, arguments);
          }

          return open;
        }()
        /**
         * Close the sliding item. Items can also be closed from the [List](../../list/List).
         */

      }, {
        key: "close",
        value: function () {
          var _close = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.setOpenAmount(0, true);

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));

          function close() {
            return _close.apply(this, arguments);
          }

          return close;
        }()
        /**
         * Close all of the sliding items in the list. Items can also be closed from the [List](../../list/List).
         */

      }, {
        key: "closeOpened",
        value: function () {
          var _closeOpened = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(openSlidingItem !== undefined)) {
                      _context5.next = 4;
                      break;
                    }

                    openSlidingItem.close();
                    openSlidingItem = undefined;
                    return _context5.abrupt("return", true);

                  case 4:
                    return _context5.abrupt("return", false);

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));

          function closeOpened() {
            return _closeOpened.apply(this, arguments);
          }

          return closeOpened;
        }()
        /**
         * Given an optional side, return the ion-item-options element.
         *
         * @param side This side of the options to get. If a side is not provided it will
         * return the first one available.
         */

      }, {
        key: "getOptions",
        value: function getOptions(side) {
          if (side === undefined) {
            return this.leftOptions || this.rightOptions;
          } else if (side === 'start') {
            return this.leftOptions;
          } else {
            return this.rightOptions;
          }
        }
      }, {
        key: "updateOptions",
        value: function () {
          var _updateOptions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var options, sides, i, option, side;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    options = this.el.querySelectorAll('ion-item-options');
                    sides = 0; // Reset left and right options in case they were removed

                    this.leftOptions = this.rightOptions = undefined;
                    i = 0;

                  case 4:
                    if (!(i < options.length)) {
                      _context6.next = 13;
                      break;
                    }

                    _context6.next = 7;
                    return options.item(i).componentOnReady();

                  case 7:
                    option = _context6.sent;
                    side = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["i"])(option.side) ? 'end' : 'start';

                    if (side === 'start') {
                      this.leftOptions = option;
                      sides |= 1
                      /* Start */
                      ;
                    } else {
                      this.rightOptions = option;
                      sides |= 2
                      /* End */
                      ;
                    }

                  case 10:
                    i++;
                    _context6.next = 4;
                    break;

                  case 13:
                    this.optsDirty = true;
                    this.sides = sides;

                  case 15:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

          function updateOptions() {
            return _updateOptions.apply(this, arguments);
          }

          return updateOptions;
        }()
      }, {
        key: "canStart",
        value: function canStart() {
          var selected = openSlidingItem;

          if (selected && selected !== this.el) {
            this.closeOpened();
            return false;
          }

          return !!(this.rightOptions || this.leftOptions);
        }
      }, {
        key: "onStart",
        value: function onStart() {
          openSlidingItem = this.el;

          if (this.tmr !== undefined) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
          }

          if (this.openAmount === 0) {
            this.optsDirty = true;
            this.state = 4
            /* Enabled */
            ;
          }

          this.initialOpenAmount = this.openAmount;

          if (this.item) {
            this.item.style.transition = 'none';
          }
        }
      }, {
        key: "onMove",
        value: function onMove(gesture) {
          if (this.optsDirty) {
            this.calculateOptsWidth();
          }

          var openAmount = this.initialOpenAmount - gesture.deltaX;

          switch (this.sides) {
            case 2
            /* End */
            :
              openAmount = Math.max(0, openAmount);
              break;

            case 1
            /* Start */
            :
              openAmount = Math.min(0, openAmount);
              break;

            case 3
            /* Both */
            :
              break;

            case 0
            /* None */
            :
              return;

            default:
              console.warn('invalid ItemSideFlags value', this.sides);
              break;
          }

          var optsWidth;

          if (openAmount > this.optsWidthRightSide) {
            optsWidth = this.optsWidthRightSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
          } else if (openAmount < -this.optsWidthLeftSide) {
            optsWidth = -this.optsWidthLeftSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
          }

          this.setOpenAmount(openAmount, false);
        }
      }, {
        key: "onEnd",
        value: function onEnd(gesture) {
          var velocity = gesture.velocityX;
          var restingPoint = this.openAmount > 0 ? this.optsWidthRightSide : -this.optsWidthLeftSide; // Check if the drag didn't clear the buttons mid-point
          // and we aren't moving fast enough to swipe open

          var isResetDirection = this.openAmount > 0 === !(velocity < 0);
          var isMovingFast = Math.abs(velocity) > 0.3;
          var isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);

          if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
            restingPoint = 0;
          }

          var state = this.state;
          this.setOpenAmount(restingPoint, true);

          if ((state & 32
          /* SwipeEnd */
          ) !== 0 && this.rightOptions) {
            this.rightOptions.fireSwipeEvent();
          } else if ((state & 64
          /* SwipeStart */
          ) !== 0 && this.leftOptions) {
            this.leftOptions.fireSwipeEvent();
          }
        }
      }, {
        key: "calculateOptsWidth",
        value: function calculateOptsWidth() {
          this.optsWidthRightSide = 0;

          if (this.rightOptions) {
            this.rightOptions.style.display = 'flex';
            this.optsWidthRightSide = this.rightOptions.offsetWidth;
            this.rightOptions.style.display = '';
          }

          this.optsWidthLeftSide = 0;

          if (this.leftOptions) {
            this.leftOptions.style.display = 'flex';
            this.optsWidthLeftSide = this.leftOptions.offsetWidth;
            this.leftOptions.style.display = '';
          }

          this.optsDirty = false;
        }
      }, {
        key: "setOpenAmount",
        value: function setOpenAmount(openAmount, isFinal) {
          var _this3 = this;

          if (this.tmr !== undefined) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
          }

          if (!this.item) {
            return;
          }

          var style = this.item.style;
          this.openAmount = openAmount;

          if (isFinal) {
            style.transition = '';
          }

          if (openAmount > 0) {
            this.state = openAmount >= this.optsWidthRightSide + SWIPE_MARGIN ? 8
            /* End */
            | 32
            /* SwipeEnd */
            : 8
            /* End */
            ;
          } else if (openAmount < 0) {
            this.state = openAmount <= -this.optsWidthLeftSide - SWIPE_MARGIN ? 16
            /* Start */
            | 64
            /* SwipeStart */
            : 16
            /* Start */
            ;
          } else {
            this.tmr = setTimeout(function () {
              _this3.state = 2
              /* Disabled */
              ;
              _this3.tmr = undefined;
            }, 600);
            openSlidingItem = undefined;
            style.transform = '';
            return;
          }

          style.transform = "translate3d(".concat(-openAmount, "px,0,0)");
          this.ionDrag.emit({
            amount: openAmount,
            ratio: this.getSlidingRatioSync()
          });
        }
      }, {
        key: "getSlidingRatioSync",
        value: function getSlidingRatioSync() {
          if (this.openAmount > 0) {
            return this.openAmount / this.optsWidthRightSide;
          } else if (this.openAmount < 0) {
            return this.openAmount / this.optsWidthLeftSide;
          } else {
            return 0;
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _class2;

          var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            "class": (_class2 = {}, _defineProperty(_class2, mode, true), _defineProperty(_class2, 'item-sliding-active-slide', this.state !== 2
            /* Disabled */
            ), _defineProperty(_class2, 'item-sliding-active-options-end', (this.state & 8
            /* End */
            ) !== 0), _defineProperty(_class2, 'item-sliding-active-options-start', (this.state & 16
            /* Start */
            ) !== 0), _defineProperty(_class2, 'item-sliding-active-swipe-end', (this.state & 32
            /* SwipeEnd */
            ) !== 0), _defineProperty(_class2, 'item-sliding-active-swipe-start', (this.state & 64
            /* SwipeStart */
            ) !== 0), _class2)
          });
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "watchers",
        get: function get() {
          return {
            "disabled": ["disabledChanged"]
          };
        }
      }, {
        key: "style",
        get: function get() {
          return "ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden}ion-item-sliding,ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1),-webkit-transform .5s cubic-bezier(.36,.66,.04,1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-left;transition-property:padding-left}:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable,[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-right;transition-property:padding-right}:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable,[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}";
        }
      }]);

      return ItemSliding;
    }();

    var swipeShouldReset = function swipeShouldReset(isResetDirection, isMovingFast, isOnResetZone) {
      // The logic required to know when the sliding item should close (openAmount=0)
      // depends on three booleans (isResetDirection, isMovingFast, isOnResetZone)
      // and it ended up being too complicated to be written manually without errors
      // so the truth table is attached below: (0=false, 1=true)
      // isResetDirection | isMovingFast | isOnResetZone || shouldClose
      //         0        |       0      |       0       ||    0
      //         0        |       0      |       1       ||    1
      //         0        |       1      |       0       ||    0
      //         0        |       1      |       1       ||    0
      //         1        |       0      |       0       ||    0
      //         1        |       0      |       1       ||    1
      //         1        |       1      |       0       ||    1
      //         1        |       1      |       1       ||    1
      // The resulting expression was generated by resolving the K-map (Karnaugh map):
      return !isMovingFast && isOnResetZone || isResetDirection && isMovingFast;
    };
    /***/

  }
}]);
//# sourceMappingURL=31-es5.js.map