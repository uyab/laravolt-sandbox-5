/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@sentry/browser/esm/backend.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/backend.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserBackend": () => (/* binding */ BrowserBackend)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/basebackend.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/severity.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/supports.js");
/* harmony import */ var _eventbuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventbuilder */ "./node_modules/@sentry/browser/esm/eventbuilder.js");
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transports */ "./node_modules/@sentry/browser/esm/transports/fetch.js");
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transports */ "./node_modules/@sentry/browser/esm/transports/xhr.js");






/**
 * The Sentry Browser SDK Backend.
 * @hidden
 */
var BrowserBackend = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(BrowserBackend, _super);
    function BrowserBackend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype.eventFromException = function (exception, hint) {
        return (0,_eventbuilder__WEBPACK_IMPORTED_MODULE_1__.eventFromException)(this._options, exception, hint);
    };
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype.eventFromMessage = function (message, level, hint) {
        if (level === void 0) { level = _sentry_types__WEBPACK_IMPORTED_MODULE_2__.Severity.Info; }
        return (0,_eventbuilder__WEBPACK_IMPORTED_MODULE_1__.eventFromMessage)(this._options, message, level, hint);
    };
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype._setupTransport = function () {
        if (!this._options.dsn) {
            // We return the noop transport here in case there is no Dsn.
            return _super.prototype._setupTransport.call(this);
        }
        var transportOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._options.transportOptions), { dsn: this._options.dsn, tunnel: this._options.tunnel, sendClientReports: this._options.sendClientReports, _metadata: this._options._metadata });
        if (this._options.transport) {
            return new this._options.transport(transportOptions);
        }
        if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.supportsFetch)()) {
            return new _transports__WEBPACK_IMPORTED_MODULE_4__.FetchTransport(transportOptions);
        }
        return new _transports__WEBPACK_IMPORTED_MODULE_5__.XHRTransport(transportOptions);
    };
    return BrowserBackend;
}(_sentry_core__WEBPACK_IMPORTED_MODULE_6__.BaseBackend));

//# sourceMappingURL=backend.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/client.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/client.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserClient": () => (/* binding */ BrowserClient)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/version.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/baseclient.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend */ "./node_modules/@sentry/browser/esm/backend.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./node_modules/@sentry/browser/esm/helpers.js");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js");






/**
 * The Sentry Browser SDK Client.
 *
 * @see BrowserOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
var BrowserClient = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(BrowserClient, _super);
    /**
     * Creates a new Browser SDK instance.
     *
     * @param options Configuration options for this SDK.
     */
    function BrowserClient(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        options._metadata = options._metadata || {};
        options._metadata.sdk = options._metadata.sdk || {
            name: 'sentry.javascript.browser',
            packages: [
                {
                    name: 'npm:@sentry/browser',
                    version: _sentry_core__WEBPACK_IMPORTED_MODULE_1__.SDK_VERSION,
                },
            ],
            version: _sentry_core__WEBPACK_IMPORTED_MODULE_1__.SDK_VERSION,
        };
        _this = _super.call(this, _backend__WEBPACK_IMPORTED_MODULE_2__.BrowserBackend, options) || this;
        return _this;
    }
    /**
     * Show a report dialog to the user to send feedback to a specific event.
     *
     * @param options Set individual options for the dialog
     */
    BrowserClient.prototype.showReportDialog = function (options) {
        if (options === void 0) { options = {}; }
        // doesn't work without a document (React Native)
        var document = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.getGlobalObject)().document;
        if (!document) {
            return;
        }
        if (!this._isEnabled()) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.error('Trying to call showReportDialog with Sentry Client disabled');
            return;
        }
        (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.injectReportDialog)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options), { dsn: options.dsn || this.getDsn() }));
    };
    /**
     * @inheritDoc
     */
    BrowserClient.prototype._prepareEvent = function (event, scope, hint) {
        event.platform = event.platform || 'javascript';
        return _super.prototype._prepareEvent.call(this, event, scope, hint);
    };
    /**
     * @inheritDoc
     */
    BrowserClient.prototype._sendEvent = function (event) {
        var integration = this.getIntegration(_integrations__WEBPACK_IMPORTED_MODULE_6__.Breadcrumbs);
        if (integration) {
            integration.addSentryBreadcrumb(event);
        }
        _super.prototype._sendEvent.call(this, event);
    };
    return BrowserClient;
}(_sentry_core__WEBPACK_IMPORTED_MODULE_7__.BaseClient));

//# sourceMappingURL=client.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/eventbuilder.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/eventbuilder.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventFromException": () => (/* binding */ eventFromException),
/* harmony export */   "eventFromMessage": () => (/* binding */ eventFromMessage),
/* harmony export */   "eventFromUnknownInput": () => (/* binding */ eventFromUnknownInput),
/* harmony export */   "eventFromString": () => (/* binding */ eventFromString)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/severity.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/misc.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/syncpromise.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers */ "./node_modules/@sentry/browser/esm/parsers.js");
/* harmony import */ var _tracekit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tracekit */ "./node_modules/@sentry/browser/esm/tracekit.js");





/**
 * Builds and Event from a Exception
 * @hidden
 */
function eventFromException(options, exception, hint) {
    var syntheticException = (hint && hint.syntheticException) || undefined;
    var event = eventFromUnknownInput(exception, syntheticException, {
        attachStacktrace: options.attachStacktrace,
    });
    (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.addExceptionMechanism)(event); // defaults to { type: 'generic', handled: true }
    event.level = _sentry_types__WEBPACK_IMPORTED_MODULE_1__.Severity.Error;
    if (hint && hint.event_id) {
        event.event_id = hint.event_id;
    }
    return _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.SyncPromise.resolve(event);
}
/**
 * Builds and Event from a Message
 * @hidden
 */
function eventFromMessage(options, message, level, hint) {
    if (level === void 0) { level = _sentry_types__WEBPACK_IMPORTED_MODULE_1__.Severity.Info; }
    var syntheticException = (hint && hint.syntheticException) || undefined;
    var event = eventFromString(message, syntheticException, {
        attachStacktrace: options.attachStacktrace,
    });
    event.level = level;
    if (hint && hint.event_id) {
        event.event_id = hint.event_id;
    }
    return _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.SyncPromise.resolve(event);
}
/**
 * @hidden
 */
function eventFromUnknownInput(exception, syntheticException, options) {
    if (options === void 0) { options = {}; }
    var event;
    if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isErrorEvent)(exception) && exception.error) {
        // If it is an ErrorEvent with `error` property, extract it to get actual Error
        var errorEvent = exception;
        // eslint-disable-next-line no-param-reassign
        exception = errorEvent.error;
        event = (0,_parsers__WEBPACK_IMPORTED_MODULE_4__.eventFromStacktrace)((0,_tracekit__WEBPACK_IMPORTED_MODULE_5__.computeStackTrace)(exception));
        return event;
    }
    // If it is a `DOMError` (which is a legacy API, but still supported in some browsers) then we just extract the name
    // and message, as it doesn't provide anything else. According to the spec, all `DOMExceptions` should also be
    // `Error`s, but that's not the case in IE11, so in that case we treat it the same as we do a `DOMError`.
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
    // https://webidl.spec.whatwg.org/#es-DOMException-specialness
    if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isDOMError)(exception) || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isDOMException)(exception)) {
        var domException = exception;
        if ('stack' in exception) {
            event = (0,_parsers__WEBPACK_IMPORTED_MODULE_4__.eventFromStacktrace)((0,_tracekit__WEBPACK_IMPORTED_MODULE_5__.computeStackTrace)(exception));
        }
        else {
            var name_1 = domException.name || ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isDOMError)(domException) ? 'DOMError' : 'DOMException');
            var message = domException.message ? name_1 + ": " + domException.message : name_1;
            event = eventFromString(message, syntheticException, options);
            (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.addExceptionTypeValue)(event, message);
        }
        if ('code' in domException) {
            event.tags = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, event.tags), { 'DOMException.code': "" + domException.code });
        }
        return event;
    }
    if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isError)(exception)) {
        // we have a real Error object, do nothing
        event = (0,_parsers__WEBPACK_IMPORTED_MODULE_4__.eventFromStacktrace)((0,_tracekit__WEBPACK_IMPORTED_MODULE_5__.computeStackTrace)(exception));
        return event;
    }
    if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isPlainObject)(exception) || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isEvent)(exception)) {
        // If it is plain Object or Event, serialize it manually and extract options
        // This will allow us to group events based on top-level keys
        // which is much better than creating new group when any key/value change
        var objectException = exception;
        event = (0,_parsers__WEBPACK_IMPORTED_MODULE_4__.eventFromPlainObject)(objectException, syntheticException, options.rejection);
        (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.addExceptionMechanism)(event, {
            synthetic: true,
        });
        return event;
    }
    // If none of previous checks were valid, then it means that it's not:
    // - an instance of DOMError
    // - an instance of DOMException
    // - an instance of Event
    // - an instance of Error
    // - a valid ErrorEvent (one with an error property)
    // - a plain Object
    //
    // So bail out and capture it as a simple message:
    event = eventFromString(exception, syntheticException, options);
    (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.addExceptionTypeValue)(event, "" + exception, undefined);
    (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.addExceptionMechanism)(event, {
        synthetic: true,
    });
    return event;
}
/**
 * @hidden
 */
function eventFromString(input, syntheticException, options) {
    if (options === void 0) { options = {}; }
    var event = {
        message: input,
    };
    if (options.attachStacktrace && syntheticException) {
        var stacktrace = (0,_tracekit__WEBPACK_IMPORTED_MODULE_5__.computeStackTrace)(syntheticException);
        var frames_1 = (0,_parsers__WEBPACK_IMPORTED_MODULE_4__.prepareFramesForEvent)(stacktrace.stack);
        event.stacktrace = {
            frames: frames_1,
        };
    }
    return event;
}
//# sourceMappingURL=eventbuilder.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/helpers.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/helpers.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shouldIgnoreOnError": () => (/* binding */ shouldIgnoreOnError),
/* harmony export */   "ignoreNextOnError": () => (/* binding */ ignoreNextOnError),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "injectReportDialog": () => (/* binding */ injectReportDialog)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/minimal/esm/index.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/api.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/misc.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");



var global = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
var ignoreOnError = 0;
/**
 * @hidden
 */
function shouldIgnoreOnError() {
    return ignoreOnError > 0;
}
/**
 * @hidden
 */
function ignoreNextOnError() {
    // onerror should trigger before setTimeout
    ignoreOnError += 1;
    setTimeout(function () {
        ignoreOnError -= 1;
    });
}
/**
 * Instruments the given function and sends an event to Sentry every time the
 * function throws an exception.
 *
 * @param fn A function to wrap.
 * @returns The wrapped function.
 * @hidden
 */
function wrap(fn, options, before) {
    if (options === void 0) { options = {}; }
    if (typeof fn !== 'function') {
        return fn;
    }
    try {
        // We don't wanna wrap it twice
        if (fn.__sentry__) {
            return fn;
        }
        // If this has already been wrapped in the past, return that wrapped function
        if (fn.__sentry_wrapped__) {
            return fn.__sentry_wrapped__;
        }
    }
    catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        // Bail on wrapping and return the function as-is (defers to window.onerror).
        return fn;
    }
    /* eslint-disable prefer-rest-params */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var sentryWrapped = function () {
        var args = Array.prototype.slice.call(arguments);
        try {
            if (before && typeof before === 'function') {
                before.apply(this, arguments);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
            var wrappedArguments = args.map(function (arg) { return wrap(arg, options); });
            if (fn.handleEvent) {
                // Attempt to invoke user-land function
                // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
                //       means the sentry.javascript SDK caught an error invoking your application code. This
                //       is expected behavior and NOT indicative of a bug with sentry.javascript.
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                return fn.handleEvent.apply(this, wrappedArguments);
            }
            // Attempt to invoke user-land function
            // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
            //       means the sentry.javascript SDK caught an error invoking your application code. This
            //       is expected behavior and NOT indicative of a bug with sentry.javascript.
            return fn.apply(this, wrappedArguments);
        }
        catch (ex) {
            ignoreNextOnError();
            (0,_sentry_core__WEBPACK_IMPORTED_MODULE_1__.withScope)(function (scope) {
                scope.addEventProcessor(function (event) {
                    var processedEvent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, event);
                    if (options.mechanism) {
                        (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.addExceptionTypeValue)(processedEvent, undefined, undefined);
                        (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.addExceptionMechanism)(processedEvent, options.mechanism);
                    }
                    processedEvent.extra = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, processedEvent.extra), { arguments: args });
                    return processedEvent;
                });
                (0,_sentry_core__WEBPACK_IMPORTED_MODULE_1__.captureException)(ex);
            });
            throw ex;
        }
    };
    /* eslint-enable prefer-rest-params */
    // Accessing some objects may throw
    // ref: https://github.com/getsentry/sentry-javascript/issues/1168
    try {
        for (var property in fn) {
            if (Object.prototype.hasOwnProperty.call(fn, property)) {
                sentryWrapped[property] = fn[property];
            }
        }
    }
    catch (_oO) { } // eslint-disable-line no-empty
    fn.prototype = fn.prototype || {};
    sentryWrapped.prototype = fn.prototype;
    Object.defineProperty(fn, '__sentry_wrapped__', {
        enumerable: false,
        value: sentryWrapped,
    });
    // Signal that this function has been wrapped/filled already
    // for both debugging and to prevent it to being wrapped/filled twice
    Object.defineProperties(sentryWrapped, {
        __sentry__: {
            enumerable: false,
            value: true,
        },
        __sentry_original__: {
            enumerable: false,
            value: fn,
        },
    });
    // Restore original function name (not all browsers allow that)
    try {
        var descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, 'name');
        if (descriptor.configurable) {
            Object.defineProperty(sentryWrapped, 'name', {
                get: function () {
                    return fn.name;
                },
            });
        }
        // eslint-disable-next-line no-empty
    }
    catch (_oO) { }
    return sentryWrapped;
}
/**
 * Injects the Report Dialog script
 * @hidden
 */
function injectReportDialog(options) {
    if (options === void 0) { options = {}; }
    if (!global.document) {
        return;
    }
    if (!options.eventId) {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.error("Missing eventId option in showReportDialog call");
        return;
    }
    if (!options.dsn) {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.error("Missing dsn option in showReportDialog call");
        return;
    }
    var script = global.document.createElement('script');
    script.async = true;
    script.src = new _sentry_core__WEBPACK_IMPORTED_MODULE_5__.API(options.dsn).getReportDialogEndpoint(options);
    if (options.onLoad) {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        script.onload = options.onLoad;
    }
    var injectionPoint = global.document.head || global.document.body;
    if (injectionPoint) {
        injectionPoint.appendChild(script);
    }
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Breadcrumbs": () => (/* binding */ Breadcrumbs)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/hub/esm/hub.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/severity.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/misc.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/instrument.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/string.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/browser.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/global.js");

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable max-lines */



/**
 * Default Breadcrumbs instrumentations
 * TODO: Deprecated - with v6, this will be renamed to `Instrument`
 */
var Breadcrumbs = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Breadcrumbs(options) {
        /**
         * @inheritDoc
         */
        this.name = Breadcrumbs.id;
        this._options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ console: true, dom: true, fetch: true, history: true, sentry: true, xhr: true }, options);
    }
    /**
     * Create a breadcrumb of `sentry` from the events themselves
     */
    Breadcrumbs.prototype.addSentryBreadcrumb = function (event) {
        if (!this._options.sentry) {
            return;
        }
        (0,_sentry_core__WEBPACK_IMPORTED_MODULE_1__.getCurrentHub)().addBreadcrumb({
            category: "sentry." + (event.type === 'transaction' ? 'transaction' : 'event'),
            event_id: event.event_id,
            level: event.level,
            message: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.getEventDescription)(event),
        }, {
            event: event,
        });
    };
    /**
     * Instrument browser built-ins w/ breadcrumb capturing
     *  - Console API
     *  - DOM API (click/typing)
     *  - XMLHttpRequest API
     *  - Fetch API
     *  - History API
     */
    Breadcrumbs.prototype.setupOnce = function () {
        var _this = this;
        if (this._options.console) {
            (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.addInstrumentationHandler)({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._consoleBreadcrumb.apply(_this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(args));
                },
                type: 'console',
            });
        }
        if (this._options.dom) {
            (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.addInstrumentationHandler)({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._domBreadcrumb.apply(_this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(args));
                },
                type: 'dom',
            });
        }
        if (this._options.xhr) {
            (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.addInstrumentationHandler)({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._xhrBreadcrumb.apply(_this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(args));
                },
                type: 'xhr',
            });
        }
        if (this._options.fetch) {
            (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.addInstrumentationHandler)({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._fetchBreadcrumb.apply(_this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(args));
                },
                type: 'fetch',
            });
        }
        if (this._options.history) {
            (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.addInstrumentationHandler)({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._historyBreadcrumb.apply(_this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(args));
                },
                type: 'history',
            });
        }
    };
    /**
     * Creates breadcrumbs from console API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._consoleBreadcrumb = function (handlerData) {
        var breadcrumb = {
            category: 'console',
            data: {
                arguments: handlerData.args,
                logger: 'console',
            },
            level: _sentry_types__WEBPACK_IMPORTED_MODULE_4__.Severity.fromString(handlerData.level),
            message: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__.safeJoin)(handlerData.args, ' '),
        };
        if (handlerData.level === 'assert') {
            if (handlerData.args[0] === false) {
                breadcrumb.message = "Assertion failed: " + ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__.safeJoin)(handlerData.args.slice(1), ' ') || 'console.assert');
                breadcrumb.data.arguments = handlerData.args.slice(1);
            }
            else {
                // Don't capture a breadcrumb for passed assertions
                return;
            }
        }
        (0,_sentry_core__WEBPACK_IMPORTED_MODULE_1__.getCurrentHub)().addBreadcrumb(breadcrumb, {
            input: handlerData.args,
            level: handlerData.level,
        });
    };
    /**
     * Creates breadcrumbs from DOM API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._domBreadcrumb = function (handlerData) {
        var target;
        var keyAttrs = typeof this._options.dom === 'object' ? this._options.dom.serializeAttribute : undefined;
        if (typeof keyAttrs === 'string') {
            keyAttrs = [keyAttrs];
        }
        // Accessing event.target can throw (see getsentry/raven-js#838, #768)
        try {
            target = handlerData.event.target
                ? (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_6__.htmlTreeAsString)(handlerData.event.target, keyAttrs)
                : (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_6__.htmlTreeAsString)(handlerData.event, keyAttrs);
        }
        catch (e) {
            target = '<unknown>';
        }
        if (target.length === 0) {
            return;
        }
        (0,_sentry_core__WEBPACK_IMPORTED_MODULE_1__.getCurrentHub)().addBreadcrumb({
            category: "ui." + handlerData.name,
            message: target,
        }, {
            event: handlerData.event,
            name: handlerData.name,
            global: handlerData.global,
        });
    };
    /**
     * Creates breadcrumbs from XHR API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._xhrBreadcrumb = function (handlerData) {
        if (handlerData.endTimestamp) {
            // We only capture complete, non-sentry requests
            if (handlerData.xhr.__sentry_own_request__) {
                return;
            }
            var _a = handlerData.xhr.__sentry_xhr__ || {}, method = _a.method, url = _a.url, status_code = _a.status_code, body = _a.body;
            (0,_sentry_core__WEBPACK_IMPORTED_MODULE_1__.getCurrentHub)().addBreadcrumb({
                category: 'xhr',
                data: {
                    method: method,
                    url: url,
                    status_code: status_code,
                },
                type: 'http',
            }, {
                xhr: handlerData.xhr,
                input: body,
            });
            return;
        }
    };
    /**
     * Creates breadcrumbs from fetch API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._fetchBreadcrumb = function (handlerData) {
        // We only capture complete fetch requests
        if (!handlerData.endTimestamp) {
            return;
        }
        if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === 'POST') {
            // We will not create breadcrumbs for fetch requests that contain `sentry_key` (internal sentry requests)
            return;
        }
        if (handlerData.error) {
            (0,_sentry_core__WEBPACK_IMPORTED_MODULE_1__.getCurrentHub)().addBreadcrumb({
                category: 'fetch',
                data: handlerData.fetchData,
                level: _sentry_types__WEBPACK_IMPORTED_MODULE_4__.Severity.Error,
                type: 'http',
            }, {
                data: handlerData.error,
                input: handlerData.args,
            });
        }
        else {
            (0,_sentry_core__WEBPACK_IMPORTED_MODULE_1__.getCurrentHub)().addBreadcrumb({
                category: 'fetch',
                data: (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, handlerData.fetchData), { status_code: handlerData.response.status }),
                type: 'http',
            }, {
                input: handlerData.args,
                response: handlerData.response,
            });
        }
    };
    /**
     * Creates breadcrumbs from history API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._historyBreadcrumb = function (handlerData) {
        var global = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_7__.getGlobalObject)();
        var from = handlerData.from;
        var to = handlerData.to;
        var parsedLoc = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.parseUrl)(global.location.href);
        var parsedFrom = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.parseUrl)(from);
        var parsedTo = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.parseUrl)(to);
        // Initial pushState doesn't provide `from` information
        if (!parsedFrom.path) {
            parsedFrom = parsedLoc;
        }
        // Use only the path component of the URL if the URL matches the current
        // document (almost all the time when using pushState)
        if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
            to = parsedTo.relative;
        }
        if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
            from = parsedFrom.relative;
        }
        (0,_sentry_core__WEBPACK_IMPORTED_MODULE_1__.getCurrentHub)().addBreadcrumb({
            category: 'navigation',
            data: {
                from: from,
                to: to,
            },
        });
    };
    /**
     * @inheritDoc
     */
    Breadcrumbs.id = 'Breadcrumbs';
    return Breadcrumbs;
}());

//# sourceMappingURL=breadcrumbs.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/dedupe.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/dedupe.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dedupe": () => (/* binding */ Dedupe)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");

/** Deduplication filter */
var Dedupe = /** @class */ (function () {
    function Dedupe() {
        /**
         * @inheritDoc
         */
        this.name = Dedupe.id;
    }
    /**
     * @inheritDoc
     */
    Dedupe.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        addGlobalEventProcessor(function (currentEvent) {
            var self = getCurrentHub().getIntegration(Dedupe);
            if (self) {
                // Juuust in case something goes wrong
                try {
                    if (self._shouldDropEvent(currentEvent, self._previousEvent)) {
                        _sentry_utils__WEBPACK_IMPORTED_MODULE_0__.logger.warn("Event dropped due to being a duplicate of previously captured event.");
                        return null;
                    }
                }
                catch (_oO) {
                    return (self._previousEvent = currentEvent);
                }
                return (self._previousEvent = currentEvent);
            }
            return currentEvent;
        });
    };
    /** JSDoc */
    Dedupe.prototype._shouldDropEvent = function (currentEvent, previousEvent) {
        if (!previousEvent) {
            return false;
        }
        if (this._isSameMessageEvent(currentEvent, previousEvent)) {
            return true;
        }
        if (this._isSameExceptionEvent(currentEvent, previousEvent)) {
            return true;
        }
        return false;
    };
    /** JSDoc */
    Dedupe.prototype._isSameMessageEvent = function (currentEvent, previousEvent) {
        var currentMessage = currentEvent.message;
        var previousMessage = previousEvent.message;
        // If neither event has a message property, they were both exceptions, so bail out
        if (!currentMessage && !previousMessage) {
            return false;
        }
        // If only one event has a stacktrace, but not the other one, they are not the same
        if ((currentMessage && !previousMessage) || (!currentMessage && previousMessage)) {
            return false;
        }
        if (currentMessage !== previousMessage) {
            return false;
        }
        if (!this._isSameFingerprint(currentEvent, previousEvent)) {
            return false;
        }
        if (!this._isSameStacktrace(currentEvent, previousEvent)) {
            return false;
        }
        return true;
    };
    /** JSDoc */
    Dedupe.prototype._getFramesFromEvent = function (event) {
        var exception = event.exception;
        if (exception) {
            try {
                // @ts-ignore Object could be undefined
                return exception.values[0].stacktrace.frames;
            }
            catch (_oO) {
                return undefined;
            }
        }
        else if (event.stacktrace) {
            return event.stacktrace.frames;
        }
        return undefined;
    };
    /** JSDoc */
    Dedupe.prototype._isSameStacktrace = function (currentEvent, previousEvent) {
        var currentFrames = this._getFramesFromEvent(currentEvent);
        var previousFrames = this._getFramesFromEvent(previousEvent);
        // If neither event has a stacktrace, they are assumed to be the same
        if (!currentFrames && !previousFrames) {
            return true;
        }
        // If only one event has a stacktrace, but not the other one, they are not the same
        if ((currentFrames && !previousFrames) || (!currentFrames && previousFrames)) {
            return false;
        }
        currentFrames = currentFrames;
        previousFrames = previousFrames;
        // If number of frames differ, they are not the same
        if (previousFrames.length !== currentFrames.length) {
            return false;
        }
        // Otherwise, compare the two
        for (var i = 0; i < previousFrames.length; i++) {
            var frameA = previousFrames[i];
            var frameB = currentFrames[i];
            if (frameA.filename !== frameB.filename ||
                frameA.lineno !== frameB.lineno ||
                frameA.colno !== frameB.colno ||
                frameA.function !== frameB.function) {
                return false;
            }
        }
        return true;
    };
    /** JSDoc */
    Dedupe.prototype._getExceptionFromEvent = function (event) {
        return event.exception && event.exception.values && event.exception.values[0];
    };
    /** JSDoc */
    Dedupe.prototype._isSameExceptionEvent = function (currentEvent, previousEvent) {
        var previousException = this._getExceptionFromEvent(previousEvent);
        var currentException = this._getExceptionFromEvent(currentEvent);
        if (!previousException || !currentException) {
            return false;
        }
        if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
            return false;
        }
        if (!this._isSameFingerprint(currentEvent, previousEvent)) {
            return false;
        }
        if (!this._isSameStacktrace(currentEvent, previousEvent)) {
            return false;
        }
        return true;
    };
    /** JSDoc */
    Dedupe.prototype._isSameFingerprint = function (currentEvent, previousEvent) {
        var currentFingerprint = currentEvent.fingerprint;
        var previousFingerprint = previousEvent.fingerprint;
        // If neither event has a fingerprint, they are assumed to be the same
        if (!currentFingerprint && !previousFingerprint) {
            return true;
        }
        // If only one event has a fingerprint, but not the other one, they are not the same
        if ((currentFingerprint && !previousFingerprint) || (!currentFingerprint && previousFingerprint)) {
            return false;
        }
        currentFingerprint = currentFingerprint;
        previousFingerprint = previousFingerprint;
        // Otherwise, compare the two
        try {
            return !!(currentFingerprint.join('') === previousFingerprint.join(''));
        }
        catch (_oO) {
            return false;
        }
    };
    /**
     * @inheritDoc
     */
    Dedupe.id = 'Dedupe';
    return Dedupe;
}());

//# sourceMappingURL=dedupe.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/globalhandlers.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/globalhandlers.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalHandlers": () => (/* binding */ GlobalHandlers)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/hub/esm/hub.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/severity.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/instrument.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/misc.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/browser.js");
/* harmony import */ var _eventbuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../eventbuilder */ "./node_modules/@sentry/browser/esm/eventbuilder.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./node_modules/@sentry/browser/esm/helpers.js");

/* eslint-disable @typescript-eslint/no-unsafe-member-access */





/** Global handlers */
var GlobalHandlers = /** @class */ (function () {
    /** JSDoc */
    function GlobalHandlers(options) {
        /**
         * @inheritDoc
         */
        this.name = GlobalHandlers.id;
        /** JSDoc */
        this._onErrorHandlerInstalled = false;
        /** JSDoc */
        this._onUnhandledRejectionHandlerInstalled = false;
        this._options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ onerror: true, onunhandledrejection: true }, options);
    }
    /**
     * @inheritDoc
     */
    GlobalHandlers.prototype.setupOnce = function () {
        Error.stackTraceLimit = 50;
        if (this._options.onerror) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.logger.log('Global Handler attached: onerror');
            this._installGlobalOnErrorHandler();
        }
        if (this._options.onunhandledrejection) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.logger.log('Global Handler attached: onunhandledrejection');
            this._installGlobalOnUnhandledRejectionHandler();
        }
    };
    /** JSDoc */
    GlobalHandlers.prototype._installGlobalOnErrorHandler = function () {
        var _this = this;
        if (this._onErrorHandlerInstalled) {
            return;
        }
        (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.addInstrumentationHandler)({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            callback: function (data) {
                var error = data.error;
                var currentHub = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_3__.getCurrentHub)();
                var hasIntegration = currentHub.getIntegration(GlobalHandlers);
                var isFailedOwnDelivery = error && error.__sentry_own_request__ === true;
                if (!hasIntegration || (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.shouldIgnoreOnError)() || isFailedOwnDelivery) {
                    return;
                }
                var client = currentHub.getClient();
                var event = error === undefined && (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__.isString)(data.msg)
                    ? _this._eventFromIncompleteOnError(data.msg, data.url, data.line, data.column)
                    : _this._enhanceEventWithInitialFrame((0,_eventbuilder__WEBPACK_IMPORTED_MODULE_6__.eventFromUnknownInput)(error || data.msg, undefined, {
                        attachStacktrace: client && client.getOptions().attachStacktrace,
                        rejection: false,
                    }), data.url, data.line, data.column);
                (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_7__.addExceptionMechanism)(event, {
                    handled: false,
                    type: 'onerror',
                });
                currentHub.captureEvent(event, {
                    originalException: error,
                });
            },
            type: 'error',
        });
        this._onErrorHandlerInstalled = true;
    };
    /** JSDoc */
    GlobalHandlers.prototype._installGlobalOnUnhandledRejectionHandler = function () {
        var _this = this;
        if (this._onUnhandledRejectionHandlerInstalled) {
            return;
        }
        (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.addInstrumentationHandler)({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            callback: function (e) {
                var error = e;
                // dig the object of the rejection out of known event types
                try {
                    // PromiseRejectionEvents store the object of the rejection under 'reason'
                    // see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
                    if ('reason' in e) {
                        error = e.reason;
                    }
                    // something, somewhere, (likely a browser extension) effectively casts PromiseRejectionEvents
                    // to CustomEvents, moving the `promise` and `reason` attributes of the PRE into
                    // the CustomEvent's `detail` attribute, since they're not part of CustomEvent's spec
                    // see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent and
                    // https://github.com/getsentry/sentry-javascript/issues/2380
                    else if ('detail' in e && 'reason' in e.detail) {
                        error = e.detail.reason;
                    }
                }
                catch (_oO) {
                    // no-empty
                }
                var currentHub = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_3__.getCurrentHub)();
                var hasIntegration = currentHub.getIntegration(GlobalHandlers);
                var isFailedOwnDelivery = error && error.__sentry_own_request__ === true;
                if (!hasIntegration || (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.shouldIgnoreOnError)() || isFailedOwnDelivery) {
                    return true;
                }
                var client = currentHub.getClient();
                var event = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__.isPrimitive)(error)
                    ? _this._eventFromRejectionWithPrimitive(error)
                    : (0,_eventbuilder__WEBPACK_IMPORTED_MODULE_6__.eventFromUnknownInput)(error, undefined, {
                        attachStacktrace: client && client.getOptions().attachStacktrace,
                        rejection: true,
                    });
                event.level = _sentry_types__WEBPACK_IMPORTED_MODULE_8__.Severity.Error;
                (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_7__.addExceptionMechanism)(event, {
                    handled: false,
                    type: 'onunhandledrejection',
                });
                currentHub.captureEvent(event, {
                    originalException: error,
                });
                return;
            },
            type: 'unhandledrejection',
        });
        this._onUnhandledRejectionHandlerInstalled = true;
    };
    /**
     * This function creates a stack from an old, error-less onerror handler.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalHandlers.prototype._eventFromIncompleteOnError = function (msg, url, line, column) {
        var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        // If 'message' is ErrorEvent, get real message from inside
        var message = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__.isErrorEvent)(msg) ? msg.message : msg;
        var name;
        var groups = message.match(ERROR_TYPES_RE);
        if (groups) {
            name = groups[1];
            message = groups[2];
        }
        var event = {
            exception: {
                values: [
                    {
                        type: name || 'Error',
                        value: message,
                    },
                ],
            },
        };
        return this._enhanceEventWithInitialFrame(event, url, line, column);
    };
    /**
     * Create an event from a promise rejection where the `reason` is a primitive.
     *
     * @param reason: The `reason` property of the promise rejection
     * @returns An Event object with an appropriate `exception` value
     */
    GlobalHandlers.prototype._eventFromRejectionWithPrimitive = function (reason) {
        return {
            exception: {
                values: [
                    {
                        type: 'UnhandledRejection',
                        // String() is needed because the Primitive type includes symbols (which can't be automatically stringified)
                        value: "Non-Error promise rejection captured with value: " + String(reason),
                    },
                ],
            },
        };
    };
    /** JSDoc */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalHandlers.prototype._enhanceEventWithInitialFrame = function (event, url, line, column) {
        event.exception = event.exception || {};
        event.exception.values = event.exception.values || [];
        event.exception.values[0] = event.exception.values[0] || {};
        event.exception.values[0].stacktrace = event.exception.values[0].stacktrace || {};
        event.exception.values[0].stacktrace.frames = event.exception.values[0].stacktrace.frames || [];
        var colno = isNaN(parseInt(column, 10)) ? undefined : column;
        var lineno = isNaN(parseInt(line, 10)) ? undefined : line;
        var filename = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__.isString)(url) && url.length > 0 ? url : (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_9__.getLocationHref)();
        if (event.exception.values[0].stacktrace.frames.length === 0) {
            event.exception.values[0].stacktrace.frames.push({
                colno: colno,
                filename: filename,
                function: '?',
                in_app: true,
                lineno: lineno,
            });
        }
        return event;
    };
    /**
     * @inheritDoc
     */
    GlobalHandlers.id = 'GlobalHandlers';
    return GlobalHandlers;
}());

//# sourceMappingURL=globalhandlers.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/linkederrors.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/linkederrors.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkedErrors": () => (/* binding */ LinkedErrors)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/hub/esm/scope.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/hub/esm/hub.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parsers */ "./node_modules/@sentry/browser/esm/parsers.js");
/* harmony import */ var _tracekit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tracekit */ "./node_modules/@sentry/browser/esm/tracekit.js");





var DEFAULT_KEY = 'cause';
var DEFAULT_LIMIT = 5;
/** Adds SDK info to an event. */
var LinkedErrors = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function LinkedErrors(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = LinkedErrors.id;
        this._key = options.key || DEFAULT_KEY;
        this._limit = options.limit || DEFAULT_LIMIT;
    }
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype.setupOnce = function () {
        (0,_sentry_core__WEBPACK_IMPORTED_MODULE_0__.addGlobalEventProcessor)(function (event, hint) {
            var self = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_1__.getCurrentHub)().getIntegration(LinkedErrors);
            if (self) {
                var handler = self._handler && self._handler.bind(self);
                return typeof handler === 'function' ? handler(event, hint) : event;
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype._handler = function (event, hint) {
        if (!event.exception || !event.exception.values || !hint || !(0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.isInstanceOf)(hint.originalException, Error)) {
            return event;
        }
        var linkedErrors = this._walkErrorTree(hint.originalException, this._key);
        event.exception.values = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__spread)(linkedErrors, event.exception.values);
        return event;
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype._walkErrorTree = function (error, key, stack) {
        if (stack === void 0) { stack = []; }
        if (!(0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.isInstanceOf)(error[key], Error) || stack.length + 1 >= this._limit) {
            return stack;
        }
        var stacktrace = (0,_tracekit__WEBPACK_IMPORTED_MODULE_4__.computeStackTrace)(error[key]);
        var exception = (0,_parsers__WEBPACK_IMPORTED_MODULE_5__.exceptionFromStacktrace)(stacktrace);
        return this._walkErrorTree(error[key], key, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__spread)([exception], stack));
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.id = 'LinkedErrors';
    return LinkedErrors;
}());

//# sourceMappingURL=linkederrors.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/trycatch.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/trycatch.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TryCatch": () => (/* binding */ TryCatch)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/stacktrace.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./node_modules/@sentry/browser/esm/helpers.js");



var DEFAULT_EVENT_TARGET = [
    'EventTarget',
    'Window',
    'Node',
    'ApplicationCache',
    'AudioTrackList',
    'ChannelMergerNode',
    'CryptoOperation',
    'EventSource',
    'FileReader',
    'HTMLUnknownElement',
    'IDBDatabase',
    'IDBRequest',
    'IDBTransaction',
    'KeyOperation',
    'MediaController',
    'MessagePort',
    'ModalWindow',
    'Notification',
    'SVGElementInstance',
    'Screen',
    'TextTrack',
    'TextTrackCue',
    'TextTrackList',
    'WebSocket',
    'WebSocketWorker',
    'Worker',
    'XMLHttpRequest',
    'XMLHttpRequestEventTarget',
    'XMLHttpRequestUpload',
];
/** Wrap timer functions and event targets to catch errors and provide better meta data */
var TryCatch = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function TryCatch(options) {
        /**
         * @inheritDoc
         */
        this.name = TryCatch.id;
        this._options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ XMLHttpRequest: true, eventTarget: true, requestAnimationFrame: true, setInterval: true, setTimeout: true }, options);
    }
    /**
     * Wrap timer functions and event targets to catch errors
     * and provide better metadata.
     */
    TryCatch.prototype.setupOnce = function () {
        var global = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.getGlobalObject)();
        if (this._options.setTimeout) {
            (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.fill)(global, 'setTimeout', this._wrapTimeFunction.bind(this));
        }
        if (this._options.setInterval) {
            (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.fill)(global, 'setInterval', this._wrapTimeFunction.bind(this));
        }
        if (this._options.requestAnimationFrame) {
            (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.fill)(global, 'requestAnimationFrame', this._wrapRAF.bind(this));
        }
        if (this._options.XMLHttpRequest && 'XMLHttpRequest' in global) {
            (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.fill)(XMLHttpRequest.prototype, 'send', this._wrapXHR.bind(this));
        }
        if (this._options.eventTarget) {
            var eventTarget = Array.isArray(this._options.eventTarget) ? this._options.eventTarget : DEFAULT_EVENT_TARGET;
            eventTarget.forEach(this._wrapEventTarget.bind(this));
        }
    };
    /** JSDoc */
    TryCatch.prototype._wrapTimeFunction = function (original) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var originalCallback = args[0];
            args[0] = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.wrap)(originalCallback, {
                mechanism: {
                    data: { function: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.getFunctionName)(original) },
                    handled: true,
                    type: 'instrument',
                },
            });
            return original.apply(this, args);
        };
    };
    /** JSDoc */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TryCatch.prototype._wrapRAF = function (original) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return function (callback) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return original.call(this, (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.wrap)(callback, {
                mechanism: {
                    data: {
                        function: 'requestAnimationFrame',
                        handler: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.getFunctionName)(original),
                    },
                    handled: true,
                    type: 'instrument',
                },
            }));
        };
    };
    /** JSDoc */
    TryCatch.prototype._wrapEventTarget = function (target) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var global = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.getGlobalObject)();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        var proto = global[target] && global[target].prototype;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-prototype-builtins
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
            return;
        }
        (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.fill)(proto, 'addEventListener', function (original) {
            return function (eventName, fn, options) {
                try {
                    if (typeof fn.handleEvent === 'function') {
                        fn.handleEvent = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.wrap)(fn.handleEvent.bind(fn), {
                            mechanism: {
                                data: {
                                    function: 'handleEvent',
                                    handler: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.getFunctionName)(fn),
                                    target: target,
                                },
                                handled: true,
                                type: 'instrument',
                            },
                        });
                    }
                }
                catch (err) {
                    // can sometimes get 'Permission denied to access property "handle Event'
                }
                return original.call(this, eventName, 
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.wrap)(fn, {
                    mechanism: {
                        data: {
                            function: 'addEventListener',
                            handler: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.getFunctionName)(fn),
                            target: target,
                        },
                        handled: true,
                        type: 'instrument',
                    },
                }), options);
            };
        });
        (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.fill)(proto, 'removeEventListener', function (originalRemoveEventListener) {
            return function (eventName, fn, options) {
                var _a;
                /**
                 * There are 2 possible scenarios here:
                 *
                 * 1. Someone passes a callback, which was attached prior to Sentry initialization, or by using unmodified
                 * method, eg. `document.addEventListener.call(el, name, handler). In this case, we treat this function
                 * as a pass-through, and call original `removeEventListener` with it.
                 *
                 * 2. Someone passes a callback, which was attached after Sentry was initialized, which means that it was using
                 * our wrapped version of `addEventListener`, which internally calls `wrap` helper.
                 * This helper "wraps" whole callback inside a try/catch statement, and attached appropriate metadata to it,
                 * in order for us to make a distinction between wrapped/non-wrapped functions possible.
                 * If a function was wrapped, it has additional property of `__sentry_wrapped__`, holding the handler.
                 *
                 * When someone adds a handler prior to initialization, and then do it again, but after,
                 * then we have to detach both of them. Otherwise, if we'd detach only wrapped one, it'd be impossible
                 * to get rid of the initial handler and it'd stick there forever.
                 */
                var wrappedEventHandler = fn;
                try {
                    var originalEventHandler = (_a = wrappedEventHandler) === null || _a === void 0 ? void 0 : _a.__sentry_wrapped__;
                    if (originalEventHandler) {
                        originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
                    }
                }
                catch (e) {
                    // ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
                }
                return originalRemoveEventListener.call(this, eventName, wrappedEventHandler, options);
            };
        });
    };
    /** JSDoc */
    TryCatch.prototype._wrapXHR = function (originalSend) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var xhr = this;
            var xmlHttpRequestProps = ['onload', 'onerror', 'onprogress', 'onreadystatechange'];
            xmlHttpRequestProps.forEach(function (prop) {
                if (prop in xhr && typeof xhr[prop] === 'function') {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.fill)(xhr, prop, function (original) {
                        var wrapOptions = {
                            mechanism: {
                                data: {
                                    function: prop,
                                    handler: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.getFunctionName)(original),
                                },
                                handled: true,
                                type: 'instrument',
                            },
                        };
                        // If Instrument integration has been called before TryCatch, get the name of original function
                        if (original.__sentry_original__) {
                            wrapOptions.mechanism.data.handler = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.getFunctionName)(original.__sentry_original__);
                        }
                        // Otherwise wrap directly
                        return (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.wrap)(original, wrapOptions);
                    });
                }
            });
            return originalSend.apply(this, args);
        };
    };
    /**
     * @inheritDoc
     */
    TryCatch.id = 'TryCatch';
    return TryCatch;
}());

//# sourceMappingURL=trycatch.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/useragent.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/useragent.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAgent": () => (/* binding */ UserAgent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/hub/esm/scope.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/hub/esm/hub.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/global.js");



var global = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
/** UserAgent */
var UserAgent = /** @class */ (function () {
    function UserAgent() {
        /**
         * @inheritDoc
         */
        this.name = UserAgent.id;
    }
    /**
     * @inheritDoc
     */
    UserAgent.prototype.setupOnce = function () {
        (0,_sentry_core__WEBPACK_IMPORTED_MODULE_1__.addGlobalEventProcessor)(function (event) {
            var _a, _b, _c;
            if ((0,_sentry_core__WEBPACK_IMPORTED_MODULE_2__.getCurrentHub)().getIntegration(UserAgent)) {
                // if none of the information we want exists, don't bother
                if (!global.navigator && !global.location && !global.document) {
                    return event;
                }
                // grab as much info as exists and add it to the event
                var url = ((_a = event.request) === null || _a === void 0 ? void 0 : _a.url) || ((_b = global.location) === null || _b === void 0 ? void 0 : _b.href);
                var referrer = (global.document || {}).referrer;
                var userAgent = (global.navigator || {}).userAgent;
                var headers = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, (_c = event.request) === null || _c === void 0 ? void 0 : _c.headers), (referrer && { Referer: referrer })), (userAgent && { 'User-Agent': userAgent }));
                var request = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, (url && { url: url })), { headers: headers });
                return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, event), { request: request });
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    UserAgent.id = 'UserAgent';
    return UserAgent;
}());

//# sourceMappingURL=useragent.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/parsers.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/parsers.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exceptionFromStacktrace": () => (/* binding */ exceptionFromStacktrace),
/* harmony export */   "eventFromPlainObject": () => (/* binding */ eventFromPlainObject),
/* harmony export */   "eventFromStacktrace": () => (/* binding */ eventFromStacktrace),
/* harmony export */   "prepareFramesForEvent": () => (/* binding */ prepareFramesForEvent)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _tracekit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tracekit */ "./node_modules/@sentry/browser/esm/tracekit.js");


var STACKTRACE_LIMIT = 50;
/**
 * This function creates an exception from an TraceKitStackTrace
 * @param stacktrace TraceKitStackTrace that will be converted to an exception
 * @hidden
 */
function exceptionFromStacktrace(stacktrace) {
    var frames = prepareFramesForEvent(stacktrace.stack);
    var exception = {
        type: stacktrace.name,
        value: stacktrace.message,
    };
    if (frames && frames.length) {
        exception.stacktrace = { frames: frames };
    }
    if (exception.type === undefined && exception.value === '') {
        exception.value = 'Unrecoverable error caught';
    }
    return exception;
}
/**
 * @hidden
 */
function eventFromPlainObject(exception, syntheticException, rejection) {
    var event = {
        exception: {
            values: [
                {
                    type: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.isEvent)(exception) ? exception.constructor.name : rejection ? 'UnhandledRejection' : 'Error',
                    value: "Non-Error " + (rejection ? 'promise rejection' : 'exception') + " captured with keys: " + (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.extractExceptionKeysForMessage)(exception),
                },
            ],
        },
        extra: {
            __serialized__: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.normalizeToSize)(exception),
        },
    };
    if (syntheticException) {
        var stacktrace = (0,_tracekit__WEBPACK_IMPORTED_MODULE_2__.computeStackTrace)(syntheticException);
        var frames_1 = prepareFramesForEvent(stacktrace.stack);
        event.stacktrace = {
            frames: frames_1,
        };
    }
    return event;
}
/**
 * @hidden
 */
function eventFromStacktrace(stacktrace) {
    var exception = exceptionFromStacktrace(stacktrace);
    return {
        exception: {
            values: [exception],
        },
    };
}
/**
 * @hidden
 */
function prepareFramesForEvent(stack) {
    if (!stack || !stack.length) {
        return [];
    }
    var localStack = stack;
    var firstFrameFunction = localStack[0].func || '';
    var lastFrameFunction = localStack[localStack.length - 1].func || '';
    // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
    if (firstFrameFunction.indexOf('captureMessage') !== -1 || firstFrameFunction.indexOf('captureException') !== -1) {
        localStack = localStack.slice(1);
    }
    // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
    if (lastFrameFunction.indexOf('sentryWrapped') !== -1) {
        localStack = localStack.slice(0, -1);
    }
    // The frame where the crash happened, should be the last entry in the array
    return localStack
        .slice(0, STACKTRACE_LIMIT)
        .map(function (frame) { return ({
        colno: frame.column === null ? undefined : frame.column,
        filename: frame.url || localStack[0].url,
        function: frame.func || '?',
        in_app: true,
        lineno: frame.line === null ? undefined : frame.line,
    }); })
        .reverse();
}
//# sourceMappingURL=parsers.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/sdk.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/sdk.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultIntegrations": () => (/* binding */ defaultIntegrations),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "showReportDialog": () => (/* binding */ showReportDialog),
/* harmony export */   "lastEventId": () => (/* binding */ lastEventId),
/* harmony export */   "forceLoad": () => (/* binding */ forceLoad),
/* harmony export */   "onLoad": () => (/* binding */ onLoad),
/* harmony export */   "flush": () => (/* binding */ flush),
/* harmony export */   "close": () => (/* binding */ close),
/* harmony export */   "wrap": () => (/* binding */ wrap)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/integrations/inboundfilters.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/integrations/functiontostring.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/sdk.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/hub/esm/hub.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/syncpromise.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/instrument.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./client */ "./node_modules/@sentry/browser/esm/client.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers */ "./node_modules/@sentry/browser/esm/helpers.js");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/browser/esm/integrations/trycatch.js");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/browser/esm/integrations/globalhandlers.js");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/browser/esm/integrations/linkederrors.js");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/browser/esm/integrations/dedupe.js");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/browser/esm/integrations/useragent.js");






var defaultIntegrations = [
    new _sentry_core__WEBPACK_IMPORTED_MODULE_0__.InboundFilters(),
    new _sentry_core__WEBPACK_IMPORTED_MODULE_1__.FunctionToString(),
    new _integrations__WEBPACK_IMPORTED_MODULE_2__.TryCatch(),
    new _integrations__WEBPACK_IMPORTED_MODULE_3__.Breadcrumbs(),
    new _integrations__WEBPACK_IMPORTED_MODULE_4__.GlobalHandlers(),
    new _integrations__WEBPACK_IMPORTED_MODULE_5__.LinkedErrors(),
    new _integrations__WEBPACK_IMPORTED_MODULE_6__.Dedupe(),
    new _integrations__WEBPACK_IMPORTED_MODULE_7__.UserAgent(),
];
/**
 * The Sentry Browser SDK Client.
 *
 * To use this SDK, call the {@link init} function as early as possible when
 * loading the web page. To set context information or send manual events, use
 * the provided methods.
 *
 * @example
 *
 * ```
 *
 * import { init } from '@sentry/browser';
 *
 * init({
 *   dsn: '__DSN__',
 *   // ...
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { configureScope } from '@sentry/browser';
 * configureScope((scope: Scope) => {
 *   scope.setExtra({ battery: 0.7 });
 *   scope.setTag({ user_mode: 'admin' });
 *   scope.setUser({ id: '4711' });
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { addBreadcrumb } from '@sentry/browser';
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 * ```
 *
 * @example
 *
 * ```
 *
 * import * as Sentry from '@sentry/browser';
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 * ```
 *
 * @see {@link BrowserOptions} for documentation on configuration options.
 */
function init(options) {
    if (options === void 0) { options = {}; }
    if (options.defaultIntegrations === undefined) {
        options.defaultIntegrations = defaultIntegrations;
    }
    if (options.release === undefined) {
        var window_1 = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_8__.getGlobalObject)();
        // This supports the variable that sentry-webpack-plugin injects
        if (window_1.SENTRY_RELEASE && window_1.SENTRY_RELEASE.id) {
            options.release = window_1.SENTRY_RELEASE.id;
        }
    }
    if (options.autoSessionTracking === undefined) {
        options.autoSessionTracking = true;
    }
    if (options.sendClientReports === undefined) {
        options.sendClientReports = true;
    }
    (0,_sentry_core__WEBPACK_IMPORTED_MODULE_9__.initAndBind)(_client__WEBPACK_IMPORTED_MODULE_10__.BrowserClient, options);
    if (options.autoSessionTracking) {
        startSessionTracking();
    }
}
/**
 * Present the user with a report dialog.
 *
 * @param options Everything is optional, we try to fetch all info need from the global scope.
 */
function showReportDialog(options) {
    if (options === void 0) { options = {}; }
    var hub = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_11__.getCurrentHub)();
    var scope = hub.getScope();
    if (scope) {
        options.user = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_12__.__assign)({}, scope.getUser()), options.user);
    }
    if (!options.eventId) {
        options.eventId = hub.lastEventId();
    }
    var client = hub.getClient();
    if (client) {
        client.showReportDialog(options);
    }
}
/**
 * This is the getter for lastEventId.
 *
 * @returns The last event id of a captured event.
 */
function lastEventId() {
    return (0,_sentry_core__WEBPACK_IMPORTED_MODULE_11__.getCurrentHub)().lastEventId();
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */
function forceLoad() {
    // Noop
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */
function onLoad(callback) {
    callback();
}
/**
 * Call `flush()` on the current client, if there is one. See {@link Client.flush}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue. Omitting this parameter will cause
 * the client to wait until all events are sent before resolving the promise.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */
function flush(timeout) {
    var client = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_11__.getCurrentHub)().getClient();
    if (client) {
        return client.flush(timeout);
    }
    _sentry_utils__WEBPACK_IMPORTED_MODULE_13__.logger.warn('Cannot flush events. No client defined.');
    return _sentry_utils__WEBPACK_IMPORTED_MODULE_14__.SyncPromise.resolve(false);
}
/**
 * Call `close()` on the current client, if there is one. See {@link Client.close}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue before shutting down. Omitting this
 * parameter will cause the client to wait until all events are sent before disabling itself.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */
function close(timeout) {
    var client = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_11__.getCurrentHub)().getClient();
    if (client) {
        return client.close(timeout);
    }
    _sentry_utils__WEBPACK_IMPORTED_MODULE_13__.logger.warn('Cannot flush events and disable SDK. No client defined.');
    return _sentry_utils__WEBPACK_IMPORTED_MODULE_14__.SyncPromise.resolve(false);
}
/**
 * Wrap code within a try/catch block so the SDK is able to capture errors.
 *
 * @param fn A function to wrap.
 *
 * @returns The result of wrapped function call.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function wrap(fn) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_15__.wrap)(fn)();
}
/**
 * Enable automatic Session Tracking for the initial page load.
 */
function startSessionTracking() {
    var window = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_8__.getGlobalObject)();
    var document = window.document;
    if (typeof document === 'undefined') {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_13__.logger.warn('Session tracking in non-browser environment with @sentry/browser is not supported.');
        return;
    }
    var hub = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_11__.getCurrentHub)();
    // The only way for this to be false is for there to be a version mismatch between @sentry/browser (>= 6.0.0) and
    // @sentry/hub (< 5.27.0). In the simple case, there won't ever be such a mismatch, because the two packages are
    // pinned at the same version in package.json, but there are edge cases where it's possible. See
    // https://github.com/getsentry/sentry-javascript/issues/3207 and
    // https://github.com/getsentry/sentry-javascript/issues/3234 and
    // https://github.com/getsentry/sentry-javascript/issues/3278.
    if (typeof hub.startSession !== 'function' || typeof hub.captureSession !== 'function') {
        return;
    }
    // The session duration for browser sessions does not track a meaningful
    // concept that can be used as a metric.
    // Automatically captured sessions are akin to page views, and thus we
    // discard their duration.
    hub.startSession({ ignoreDuration: true });
    hub.captureSession();
    // We want to create a session for every navigation as well
    (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_16__.addInstrumentationHandler)({
        callback: function (_a) {
            var from = _a.from, to = _a.to;
            // Don't create an additional session for the initial route or if the location did not change
            if (from === undefined || from === to) {
                return;
            }
            hub.startSession({ ignoreDuration: true });
            hub.captureSession();
        },
        type: 'history',
    });
}
//# sourceMappingURL=sdk.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/tracekit.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/tracekit.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computeStackTrace": () => (/* binding */ computeStackTrace)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * This was originally forked from https://github.com/occ/TraceKit, but has since been
 * largely modified and is now maintained as part of Sentry JS SDK.
 */

// global reference to slice
var UNKNOWN_FUNCTION = '?';
// Chromium based browsers: Chrome, Brave, new Opera, new Edge
var chrome = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
// gecko regex: `(?:bundle|\d+\.js)`: `bundle` is for react native, `\d+\.js` also but specifically for ram bundles because it
// generates filenames without a prefix like `file://` the filenames in the stacktrace are just 42.js
// We need this specific case for now because we want no other regex to match.
var gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
var winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
var geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/;
// Based on our own mapping pattern - https://github.com/getsentry/sentry/blob/9f08305e09866c8bd6d0c24f5b0aabdd7dd6c59c/src/sentry/lang/javascript/errormapping.py#L83-L108
var reactMinifiedRegexp = /Minified React error #\d+;/i;
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function computeStackTrace(ex) {
    var stack = null;
    var popSize = 0;
    if (ex) {
        if (typeof ex.framesToPop === 'number') {
            popSize = ex.framesToPop;
        }
        else if (reactMinifiedRegexp.test(ex.message)) {
            popSize = 1;
        }
    }
    try {
        // This must be tried first because Opera 10 *destroys*
        // its stacktrace property if you try to access the stack
        // property first!!
        stack = computeStackTraceFromStacktraceProp(ex);
        if (stack) {
            return popFrames(stack, popSize);
        }
    }
    catch (e) {
        // no-empty
    }
    try {
        stack = computeStackTraceFromStackProp(ex);
        if (stack) {
            return popFrames(stack, popSize);
        }
    }
    catch (e) {
        // no-empty
    }
    return {
        message: extractMessage(ex),
        name: ex && ex.name,
        stack: [],
        failed: true,
    };
}
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, complexity
function computeStackTraceFromStackProp(ex) {
    var _a, _b;
    if (!ex || !ex.stack) {
        return null;
    }
    var stack = [];
    var lines = ex.stack.split('\n');
    var isEval;
    var submatch;
    var parts;
    var element;
    for (var i = 0; i < lines.length; ++i) {
        if ((parts = chrome.exec(lines[i]))) {
            var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
            isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
            if (isEval && (submatch = chromeEval.exec(parts[2]))) {
                // throw out eval line/column and use top-most line/column number
                parts[2] = submatch[1]; // url
                parts[3] = submatch[2]; // line
                parts[4] = submatch[3]; // column
            }
            // Arpad: Working with the regexp above is super painful. it is quite a hack, but just stripping the `address at `
            // prefix here seems like the quickest solution for now.
            var url = parts[2] && parts[2].indexOf('address at ') === 0 ? parts[2].substr('address at '.length) : parts[2];
            // Kamil: One more hack won't hurt us right? Understanding and adding more rules on top of these regexps right now
            // would be way too time consuming. (TODO: Rewrite whole RegExp to be more readable)
            var func = parts[1] || UNKNOWN_FUNCTION;
            _a = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(extractSafariExtensionDetails(func, url), 2), func = _a[0], url = _a[1];
            element = {
                url: url,
                func: func,
                args: isNative ? [parts[2]] : [],
                line: parts[3] ? +parts[3] : null,
                column: parts[4] ? +parts[4] : null,
            };
        }
        else if ((parts = winjs.exec(lines[i]))) {
            element = {
                url: parts[2],
                func: parts[1] || UNKNOWN_FUNCTION,
                args: [],
                line: +parts[3],
                column: parts[4] ? +parts[4] : null,
            };
        }
        else if ((parts = gecko.exec(lines[i]))) {
            isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
            if (isEval && (submatch = geckoEval.exec(parts[3]))) {
                // throw out eval line/column and use top-most line number
                parts[1] = parts[1] || "eval";
                parts[3] = submatch[1];
                parts[4] = submatch[2];
                parts[5] = ''; // no column when eval
            }
            else if (i === 0 && !parts[5] && ex.columnNumber !== void 0) {
                // FireFox uses this awesome columnNumber property for its top frame
                // Also note, Firefox's column number is 0-based and everything else expects 1-based,
                // so adding 1
                // NOTE: this hack doesn't work if top-most frame is eval
                stack[0].column = ex.columnNumber + 1;
            }
            var url = parts[3];
            var func = parts[1] || UNKNOWN_FUNCTION;
            _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(extractSafariExtensionDetails(func, url), 2), func = _b[0], url = _b[1];
            element = {
                url: url,
                func: func,
                args: parts[2] ? parts[2].split(',') : [],
                line: parts[4] ? +parts[4] : null,
                column: parts[5] ? +parts[5] : null,
            };
        }
        else {
            continue;
        }
        if (!element.func && element.line) {
            element.func = UNKNOWN_FUNCTION;
        }
        stack.push(element);
    }
    if (!stack.length) {
        return null;
    }
    return {
        message: extractMessage(ex),
        name: ex.name,
        stack: stack,
    };
}
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function computeStackTraceFromStacktraceProp(ex) {
    if (!ex || !ex.stacktrace) {
        return null;
    }
    // Access and store the stacktrace property before doing ANYTHING
    // else to it because Opera is not very good at providing it
    // reliably in other circumstances.
    var stacktrace = ex.stacktrace;
    var opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
    var opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i;
    var lines = stacktrace.split('\n');
    var stack = [];
    var parts;
    for (var line = 0; line < lines.length; line += 2) {
        var element = null;
        if ((parts = opera10Regex.exec(lines[line]))) {
            element = {
                url: parts[2],
                func: parts[3],
                args: [],
                line: +parts[1],
                column: null,
            };
        }
        else if ((parts = opera11Regex.exec(lines[line]))) {
            element = {
                url: parts[6],
                func: parts[3] || parts[4],
                args: parts[5] ? parts[5].split(',') : [],
                line: +parts[1],
                column: +parts[2],
            };
        }
        if (element) {
            if (!element.func && element.line) {
                element.func = UNKNOWN_FUNCTION;
            }
            stack.push(element);
        }
    }
    if (!stack.length) {
        return null;
    }
    return {
        message: extractMessage(ex),
        name: ex.name,
        stack: stack,
    };
}
/**
 * Safari web extensions, starting version unknown, can produce "frames-only" stacktraces.
 * What it means, is that instead of format like:
 *
 * Error: wat
 *   at function@url:row:col
 *   at function@url:row:col
 *   at function@url:row:col
 *
 * it produces something like:
 *
 *   function@url:row:col
 *   function@url:row:col
 *   function@url:row:col
 *
 * Because of that, it won't be captured by `chrome` RegExp and will fall into `Gecko` branch.
 * This function is extracted so that we can use it in both places without duplicating the logic.
 * Unfortunatelly "just" changing RegExp is too complicated now and making it pass all tests
 * and fix this case seems like an impossible, or at least way too time-consuming task.
 */
var extractSafariExtensionDetails = function (func, url) {
    var isSafariExtension = func.indexOf('safari-extension') !== -1;
    var isSafariWebExtension = func.indexOf('safari-web-extension') !== -1;
    return isSafariExtension || isSafariWebExtension
        ? [
            func.indexOf('@') !== -1 ? func.split('@')[0] : UNKNOWN_FUNCTION,
            isSafariExtension ? "safari-extension:" + url : "safari-web-extension:" + url,
        ]
        : [func, url];
};
/** Remove N number of frames from the stack */
function popFrames(stacktrace, popSize) {
    try {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, stacktrace), { stack: stacktrace.stack.slice(popSize) });
    }
    catch (e) {
        return stacktrace;
    }
}
/**
 * There are cases where stacktrace.message is an Event object
 * https://github.com/getsentry/sentry-javascript/issues/1949
 * In this specific case we try to extract stacktrace.message.error.message
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractMessage(ex) {
    var message = ex && ex.message;
    if (!message) {
        return 'No error message';
    }
    if (message.error && typeof message.error.message === 'string') {
        return message.error.message;
    }
    return message;
}
//# sourceMappingURL=tracekit.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/base.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/base.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransport": () => (/* binding */ BaseTransport)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/api.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/status.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/promisebuffer.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/error.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/time.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/misc.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/@sentry/browser/esm/transports/utils.js");





var CATEGORY_MAPPING = {
    event: 'error',
    transaction: 'transaction',
    session: 'session',
    attachment: 'attachment',
};
var global = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
/** Base Transport class implementation */
var BaseTransport = /** @class */ (function () {
    function BaseTransport(options) {
        var _this = this;
        this.options = options;
        /** A simple buffer holding all requests. */
        this._buffer = new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.PromiseBuffer(30);
        /** Locks transport after receiving rate limits in a response */
        this._rateLimits = {};
        this._outcomes = {};
        this._api = new _sentry_core__WEBPACK_IMPORTED_MODULE_2__.API(options.dsn, options._metadata, options.tunnel);
        // eslint-disable-next-line deprecation/deprecation
        this.url = this._api.getStoreEndpointWithUrlEncodedAuth();
        if (this.options.sendClientReports && global.document) {
            global.document.addEventListener('visibilitychange', function () {
                if (global.document.visibilityState === 'hidden') {
                    _this._flushOutcomes();
                }
            });
        }
    }
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.sendEvent = function (_) {
        throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.SentryError('Transport Class has to implement `sendEvent` method');
    };
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.close = function (timeout) {
        return this._buffer.drain(timeout);
    };
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.recordLostEvent = function (reason, category) {
        var _a;
        if (!this.options.sendClientReports) {
            return;
        }
        // We want to track each category (event, transaction, session) separately
        // but still keep the distinction between different type of outcomes.
        // We could use nested maps, but it's much easier to read and type this way.
        // A correct type for map-based implementation if we want to go that route
        // would be `Partial<Record<SentryRequestType, Partial<Record<Outcome, number>>>>`
        var key = CATEGORY_MAPPING[category] + ":" + reason;
        _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log("Adding outcome: " + key);
        this._outcomes[key] = (_a = this._outcomes[key], (_a !== null && _a !== void 0 ? _a : 0)) + 1;
    };
    /**
     * Send outcomes as an envelope
     */
    BaseTransport.prototype._flushOutcomes = function () {
        if (!this.options.sendClientReports) {
            return;
        }
        var outcomes = this._outcomes;
        this._outcomes = {};
        // Nothing to send
        if (!Object.keys(outcomes).length) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log('No outcomes to flush');
            return;
        }
        _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log("Flushing outcomes:\n" + JSON.stringify(outcomes, null, 2));
        var url = this._api.getEnvelopeEndpointWithUrlEncodedAuth();
        // Envelope header is required to be at least an empty object
        var envelopeHeader = JSON.stringify((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, (this.options.tunnel && { dsn: this._api.getDsn().toString() })));
        var itemHeaders = JSON.stringify({
            type: 'client_report',
        });
        var item = JSON.stringify({
            timestamp: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_6__.dateTimestampInSeconds)(),
            discarded_events: Object.keys(outcomes).map(function (key) {
                var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__read)(key.split(':'), 2), category = _a[0], reason = _a[1];
                return {
                    reason: reason,
                    category: category,
                    quantity: outcomes[key],
                };
            }),
        });
        var envelope = envelopeHeader + "\n" + itemHeaders + "\n" + item;
        try {
            (0,_utils__WEBPACK_IMPORTED_MODULE_7__.sendReport)(url, envelope);
        }
        catch (e) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.error(e);
        }
    };
    /**
     * Handle Sentry repsonse for promise-based transports.
     */
    BaseTransport.prototype._handleResponse = function (_a) {
        var requestType = _a.requestType, response = _a.response, headers = _a.headers, resolve = _a.resolve, reject = _a.reject;
        var status = _sentry_types__WEBPACK_IMPORTED_MODULE_8__.Status.fromHttpCode(response.status);
        /**
         * "The name is case-insensitive."
         * https://developer.mozilla.org/en-US/docs/Web/API/Headers/get
         */
        var limited = this._handleRateLimit(headers);
        if (limited)
            _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.warn("Too many " + requestType + " requests, backing off until: " + this._disabledUntil(requestType));
        if (status === _sentry_types__WEBPACK_IMPORTED_MODULE_8__.Status.Success) {
            resolve({ status: status });
            return;
        }
        reject(response);
    };
    /**
     * Gets the time that given category is disabled until for rate limiting
     */
    BaseTransport.prototype._disabledUntil = function (requestType) {
        var category = CATEGORY_MAPPING[requestType];
        return this._rateLimits[category] || this._rateLimits.all;
    };
    /**
     * Checks if a category is rate limited
     */
    BaseTransport.prototype._isRateLimited = function (requestType) {
        return this._disabledUntil(requestType) > new Date(Date.now());
    };
    /**
     * Sets internal _rateLimits from incoming headers. Returns true if headers contains a non-empty rate limiting header.
     */
    BaseTransport.prototype._handleRateLimit = function (headers) {
        var e_1, _a, e_2, _b;
        var now = Date.now();
        var rlHeader = headers['x-sentry-rate-limits'];
        var raHeader = headers['retry-after'];
        if (rlHeader) {
            try {
                // rate limit headers are of the form
                //     <header>,<header>,..
                // where each <header> is of the form
                //     <retry_after>: <categories>: <scope>: <reason_code>
                // where
                //     <retry_after> is a delay in ms
                //     <categories> is the event type(s) (error, transaction, etc) being rate limited and is of the form
                //         <category>;<category>;...
                //     <scope> is what's being limited (org, project, or key) - ignored by SDK
                //     <reason_code> is an arbitrary string like "org_quota" - ignored by SDK
                for (var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__values)(rlHeader.trim().split(',')), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var limit = _d.value;
                    var parameters = limit.split(':', 2);
                    var headerDelay = parseInt(parameters[0], 10);
                    var delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1000; // 60sec default
                    try {
                        for (var _e = (e_2 = void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__values)(parameters[1].split(';'))), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var category = _f.value;
                            this._rateLimits[category || 'all'] = new Date(now + delay);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return true;
        }
        else if (raHeader) {
            this._rateLimits.all = new Date(now + (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_9__.parseRetryAfterHeader)(now, raHeader));
            return true;
        }
        return false;
    };
    return BaseTransport;
}());

//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/fetch.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/fetch.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchTransport": () => (/* binding */ FetchTransport)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/request.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/transport.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/supports.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/syncpromise.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/error.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base */ "./node_modules/@sentry/browser/esm/transports/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@sentry/browser/esm/transports/utils.js");






/** `fetch` based transport */
var FetchTransport = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(FetchTransport, _super);
    function FetchTransport(options, fetchImpl) {
        if (fetchImpl === void 0) { fetchImpl = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getNativeFetchImplementation)(); }
        var _this = _super.call(this, options) || this;
        _this._fetch = fetchImpl;
        return _this;
    }
    /**
     * @inheritDoc
     */
    FetchTransport.prototype.sendEvent = function (event) {
        return this._sendRequest((0,_sentry_core__WEBPACK_IMPORTED_MODULE_2__.eventToSentryRequest)(event, this._api), event);
    };
    /**
     * @inheritDoc
     */
    FetchTransport.prototype.sendSession = function (session) {
        return this._sendRequest((0,_sentry_core__WEBPACK_IMPORTED_MODULE_2__.sessionToSentryRequest)(session, this._api), session);
    };
    /**
     * @param sentryRequest Prepared SentryRequest to be delivered
     * @param originalPayload Original payload used to create SentryRequest
     */
    FetchTransport.prototype._sendRequest = function (sentryRequest, originalPayload) {
        var _this = this;
        if (this._isRateLimited(sentryRequest.type)) {
            this.recordLostEvent(_sentry_types__WEBPACK_IMPORTED_MODULE_3__.Outcome.RateLimitBackoff, sentryRequest.type);
            return Promise.reject({
                event: originalPayload,
                type: sentryRequest.type,
                reason: "Transport for " + sentryRequest.type + " requests locked till " + this._disabledUntil(sentryRequest.type) + " due to too many requests.",
                status: 429,
            });
        }
        var options = {
            body: sentryRequest.body,
            method: 'POST',
            // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
            // https://caniuse.com/#feat=referrer-policy
            // It doesn't. And it throw exception instead of ignoring this parameter...
            // REF: https://github.com/getsentry/raven-js/issues/1233
            referrerPolicy: ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.supportsReferrerPolicy)() ? 'origin' : ''),
        };
        if (this.options.fetchParameters !== undefined) {
            Object.assign(options, this.options.fetchParameters);
        }
        if (this.options.headers !== undefined) {
            options.headers = this.options.headers;
        }
        return this._buffer
            .add(function () {
            return new _sentry_utils__WEBPACK_IMPORTED_MODULE_5__.SyncPromise(function (resolve, reject) {
                void _this._fetch(sentryRequest.url, options)
                    .then(function (response) {
                    var headers = {
                        'x-sentry-rate-limits': response.headers.get('X-Sentry-Rate-Limits'),
                        'retry-after': response.headers.get('Retry-After'),
                    };
                    _this._handleResponse({
                        requestType: sentryRequest.type,
                        response: response,
                        headers: headers,
                        resolve: resolve,
                        reject: reject,
                    });
                })
                    .catch(reject);
            });
        })
            .then(undefined, function (reason) {
            // It's either buffer rejection or any other xhr/fetch error, which are treated as NetworkError.
            if (reason instanceof _sentry_utils__WEBPACK_IMPORTED_MODULE_6__.SentryError) {
                _this.recordLostEvent(_sentry_types__WEBPACK_IMPORTED_MODULE_3__.Outcome.QueueOverflow, sentryRequest.type);
            }
            else {
                _this.recordLostEvent(_sentry_types__WEBPACK_IMPORTED_MODULE_3__.Outcome.NetworkError, sentryRequest.type);
            }
            throw reason;
        });
    };
    return FetchTransport;
}(_base__WEBPACK_IMPORTED_MODULE_7__.BaseTransport));

//# sourceMappingURL=fetch.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/utils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNativeFetchImplementation": () => (/* binding */ getNativeFetchImplementation),
/* harmony export */   "sendReport": () => (/* binding */ sendReport)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/supports.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/async.js");

var global = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
var cachedFetchImpl;
/**
 * A special usecase for incorrectly wrapped Fetch APIs in conjunction with ad-blockers.
 * Whenever someone wraps the Fetch API and returns the wrong promise chain,
 * this chain becomes orphaned and there is no possible way to capture it's rejections
 * other than allowing it bubble up to this very handler. eg.
 *
 * const f = window.fetch;
 * window.fetch = function () {
 *   const p = f.apply(this, arguments);
 *
 *   p.then(function() {
 *     console.log('hi.');
 *   });
 *
 *   return p;
 * }
 *
 * `p.then(function () { ... })` is producing a completely separate promise chain,
 * however, what's returned is `p` - the result of original `fetch` call.
 *
 * This mean, that whenever we use the Fetch API to send our own requests, _and_
 * some ad-blocker blocks it, this orphaned chain will _always_ reject,
 * effectively causing another event to be captured.
 * This makes a whole process become an infinite loop, which we need to somehow
 * deal with, and break it in one way or another.
 *
 * To deal with this issue, we are making sure that we _always_ use the real
 * browser Fetch API, instead of relying on what `window.fetch` exposes.
 * The only downside to this would be missing our own requests as breadcrumbs,
 * but because we are already not doing this, it should be just fine.
 *
 * Possible failed fetch error messages per-browser:
 *
 * Chrome:  Failed to fetch
 * Edge:    Failed to Fetch
 * Firefox: NetworkError when attempting to fetch resource
 * Safari:  resource blocked by content blocker
 */
function getNativeFetchImplementation() {
    var _a, _b;
    if (cachedFetchImpl) {
        return cachedFetchImpl;
    }
    /* eslint-disable @typescript-eslint/unbound-method */
    // Fast path to avoid DOM I/O
    if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.isNativeFetch)(global.fetch)) {
        return (cachedFetchImpl = global.fetch.bind(global));
    }
    var document = global.document;
    var fetchImpl = global.fetch;
    // eslint-disable-next-line deprecation/deprecation
    if (typeof ((_a = document) === null || _a === void 0 ? void 0 : _a.createElement) === "function") {
        try {
            var sandbox = document.createElement('iframe');
            sandbox.hidden = true;
            document.head.appendChild(sandbox);
            if ((_b = sandbox.contentWindow) === null || _b === void 0 ? void 0 : _b.fetch) {
                fetchImpl = sandbox.contentWindow.fetch;
            }
            document.head.removeChild(sandbox);
        }
        catch (e) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', e);
        }
    }
    return (cachedFetchImpl = fetchImpl.bind(global));
    /* eslint-enable @typescript-eslint/unbound-method */
}
/**
 * Sends sdk client report using sendBeacon or fetch as a fallback if available
 *
 * @param url report endpoint
 * @param body report payload
 */
function sendReport(url, body) {
    var isRealNavigator = Object.prototype.toString.call(global && global.navigator) === '[object Navigator]';
    var hasSendBeacon = isRealNavigator && typeof global.navigator.sendBeacon === 'function';
    if (hasSendBeacon) {
        // Prevent illegal invocations - https://xgwang.me/posts/you-may-not-know-beacon/#it-may-throw-error%2C-be-sure-to-catch
        var sendBeacon = global.navigator.sendBeacon.bind(global.navigator);
        return sendBeacon(url, body);
    }
    if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.supportsFetch)()) {
        var fetch_1 = getNativeFetchImplementation();
        return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.forget)(fetch_1(url, {
            body: body,
            method: 'POST',
            credentials: 'omit',
            keepalive: true,
        }));
    }
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/xhr.js":
/*!************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/xhr.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XHRTransport": () => (/* binding */ XHRTransport)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/request.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/transport.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/syncpromise.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/error.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base */ "./node_modules/@sentry/browser/esm/transports/base.js");





/** `XHR` based transport */
var XHRTransport = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(XHRTransport, _super);
    function XHRTransport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    XHRTransport.prototype.sendEvent = function (event) {
        return this._sendRequest((0,_sentry_core__WEBPACK_IMPORTED_MODULE_1__.eventToSentryRequest)(event, this._api), event);
    };
    /**
     * @inheritDoc
     */
    XHRTransport.prototype.sendSession = function (session) {
        return this._sendRequest((0,_sentry_core__WEBPACK_IMPORTED_MODULE_1__.sessionToSentryRequest)(session, this._api), session);
    };
    /**
     * @param sentryRequest Prepared SentryRequest to be delivered
     * @param originalPayload Original payload used to create SentryRequest
     */
    XHRTransport.prototype._sendRequest = function (sentryRequest, originalPayload) {
        var _this = this;
        if (this._isRateLimited(sentryRequest.type)) {
            this.recordLostEvent(_sentry_types__WEBPACK_IMPORTED_MODULE_2__.Outcome.RateLimitBackoff, sentryRequest.type);
            return Promise.reject({
                event: originalPayload,
                type: sentryRequest.type,
                reason: "Transport for " + sentryRequest.type + " requests locked till " + this._disabledUntil(sentryRequest.type) + " due to too many requests.",
                status: 429,
            });
        }
        return this._buffer
            .add(function () {
            return new _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.SyncPromise(function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.onreadystatechange = function () {
                    if (request.readyState === 4) {
                        var headers = {
                            'x-sentry-rate-limits': request.getResponseHeader('X-Sentry-Rate-Limits'),
                            'retry-after': request.getResponseHeader('Retry-After'),
                        };
                        _this._handleResponse({ requestType: sentryRequest.type, response: request, headers: headers, resolve: resolve, reject: reject });
                    }
                };
                request.open('POST', sentryRequest.url);
                for (var header in _this.options.headers) {
                    if (Object.prototype.hasOwnProperty.call(_this.options.headers, header)) {
                        request.setRequestHeader(header, _this.options.headers[header]);
                    }
                }
                request.send(sentryRequest.body);
            });
        })
            .then(undefined, function (reason) {
            // It's either buffer rejection or any other xhr/fetch error, which are treated as NetworkError.
            if (reason instanceof _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.SentryError) {
                _this.recordLostEvent(_sentry_types__WEBPACK_IMPORTED_MODULE_2__.Outcome.QueueOverflow, sentryRequest.type);
            }
            else {
                _this.recordLostEvent(_sentry_types__WEBPACK_IMPORTED_MODULE_2__.Outcome.NetworkError, sentryRequest.type);
            }
            throw reason;
        });
    };
    return XHRTransport;
}(_base__WEBPACK_IMPORTED_MODULE_5__.BaseTransport));

//# sourceMappingURL=xhr.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/api.js":
/*!**********************************************!*\
  !*** ./node_modules/@sentry/core/esm/api.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API": () => (/* binding */ API)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/dsn.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/object.js");

var SENTRY_API_VERSION = '7';
/**
 * Helper class to provide urls, headers and metadata that can be used to form
 * different types of requests to Sentry endpoints.
 * Supports both envelopes and regular event requests.
 **/
var API = /** @class */ (function () {
    /** Create a new instance of API */
    function API(dsn, metadata, tunnel) {
        if (metadata === void 0) { metadata = {}; }
        this.dsn = dsn;
        this._dsnObject = new _sentry_utils__WEBPACK_IMPORTED_MODULE_0__.Dsn(dsn);
        this.metadata = metadata;
        this._tunnel = tunnel;
    }
    /** Returns the Dsn object. */
    API.prototype.getDsn = function () {
        return this._dsnObject;
    };
    /** Does this transport force envelopes? */
    API.prototype.forceEnvelope = function () {
        return !!this._tunnel;
    };
    /** Returns the prefix to construct Sentry ingestion API endpoints. */
    API.prototype.getBaseApiEndpoint = function () {
        var dsn = this.getDsn();
        var protocol = dsn.protocol ? dsn.protocol + ":" : '';
        var port = dsn.port ? ":" + dsn.port : '';
        return protocol + "//" + dsn.host + port + (dsn.path ? "/" + dsn.path : '') + "/api/";
    };
    /** Returns the store endpoint URL. */
    API.prototype.getStoreEndpoint = function () {
        return this._getIngestEndpoint('store');
    };
    /**
     * Returns the store endpoint URL with auth in the query string.
     *
     * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
     */
    API.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
        return this.getStoreEndpoint() + "?" + this._encodedAuth();
    };
    /**
     * Returns the envelope endpoint URL with auth in the query string.
     *
     * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
     */
    API.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
        if (this.forceEnvelope()) {
            return this._tunnel;
        }
        return this._getEnvelopeEndpoint() + "?" + this._encodedAuth();
    };
    /** Returns only the path component for the store endpoint. */
    API.prototype.getStoreEndpointPath = function () {
        var dsn = this.getDsn();
        return (dsn.path ? "/" + dsn.path : '') + "/api/" + dsn.projectId + "/store/";
    };
    /**
     * Returns an object that can be used in request headers.
     * This is needed for node and the old /store endpoint in sentry
     */
    API.prototype.getRequestHeaders = function (clientName, clientVersion) {
        // CHANGE THIS to use metadata but keep clientName and clientVersion compatible
        var dsn = this.getDsn();
        var header = ["Sentry sentry_version=" + SENTRY_API_VERSION];
        header.push("sentry_client=" + clientName + "/" + clientVersion);
        header.push("sentry_key=" + dsn.publicKey);
        if (dsn.pass) {
            header.push("sentry_secret=" + dsn.pass);
        }
        return {
            'Content-Type': 'application/json',
            'X-Sentry-Auth': header.join(', '),
        };
    };
    /** Returns the url to the report dialog endpoint. */
    API.prototype.getReportDialogEndpoint = function (dialogOptions) {
        if (dialogOptions === void 0) { dialogOptions = {}; }
        var dsn = this.getDsn();
        var endpoint = this.getBaseApiEndpoint() + "embed/error-page/";
        var encodedOptions = [];
        encodedOptions.push("dsn=" + dsn.toString());
        for (var key in dialogOptions) {
            if (key === 'dsn') {
                continue;
            }
            if (key === 'user') {
                if (!dialogOptions.user) {
                    continue;
                }
                if (dialogOptions.user.name) {
                    encodedOptions.push("name=" + encodeURIComponent(dialogOptions.user.name));
                }
                if (dialogOptions.user.email) {
                    encodedOptions.push("email=" + encodeURIComponent(dialogOptions.user.email));
                }
            }
            else {
                encodedOptions.push(encodeURIComponent(key) + "=" + encodeURIComponent(dialogOptions[key]));
            }
        }
        if (encodedOptions.length) {
            return endpoint + "?" + encodedOptions.join('&');
        }
        return endpoint;
    };
    /** Returns the envelope endpoint URL. */
    API.prototype._getEnvelopeEndpoint = function () {
        return this._getIngestEndpoint('envelope');
    };
    /** Returns the ingest API endpoint for target. */
    API.prototype._getIngestEndpoint = function (target) {
        if (this._tunnel) {
            return this._tunnel;
        }
        var base = this.getBaseApiEndpoint();
        var dsn = this.getDsn();
        return "" + base + dsn.projectId + "/" + target + "/";
    };
    /** Returns a URL-encoded string with auth config suitable for a query string. */
    API.prototype._encodedAuth = function () {
        var dsn = this.getDsn();
        var auth = {
            // We send only the minimum set of required information. See
            // https://github.com/getsentry/sentry-javascript/issues/2572.
            sentry_key: dsn.publicKey,
            sentry_version: SENTRY_API_VERSION,
        };
        return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.urlEncode)(auth);
    };
    return API;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/basebackend.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/core/esm/basebackend.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseBackend": () => (/* binding */ BaseBackend)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/error.js");
/* harmony import */ var _transports_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transports/noop */ "./node_modules/@sentry/core/esm/transports/noop.js");


/**
 * This is the base implemention of a Backend.
 * @hidden
 */
var BaseBackend = /** @class */ (function () {
    /** Creates a new backend instance. */
    function BaseBackend(options) {
        this._options = options;
        if (!this._options.dsn) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_0__.logger.warn('No DSN provided, backend will not do anything.');
        }
        this._transport = this._setupTransport();
    }
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    BaseBackend.prototype.eventFromException = function (_exception, _hint) {
        throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.SentryError('Backend has to implement `eventFromException` method');
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.eventFromMessage = function (_message, _level, _hint) {
        throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.SentryError('Backend has to implement `eventFromMessage` method');
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.sendEvent = function (event) {
        void this._transport.sendEvent(event).then(null, function (reason) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_0__.logger.error("Error while sending event: " + reason);
        });
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.sendSession = function (session) {
        if (!this._transport.sendSession) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_0__.logger.warn("Dropping session because custom transport doesn't implement sendSession");
            return;
        }
        void this._transport.sendSession(session).then(null, function (reason) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_0__.logger.error("Error while sending session: " + reason);
        });
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.getTransport = function () {
        return this._transport;
    };
    /**
     * Sets up the transport so it can be used later to send requests.
     */
    BaseBackend.prototype._setupTransport = function () {
        return new _transports_noop__WEBPACK_IMPORTED_MODULE_2__.NoopTransport();
    };
    return BaseBackend;
}());

//# sourceMappingURL=basebackend.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/baseclient.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/core/esm/baseclient.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseClient": () => (/* binding */ BaseClient)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/scope.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/session.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/transport.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/dsn.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/misc.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/syncpromise.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/time.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/string.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/error.js");
/* harmony import */ var _integration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./integration */ "./node_modules/@sentry/core/esm/integration.js");

/* eslint-disable max-lines */




var ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
/**
 * Base implementation for all JavaScript SDK clients.
 *
 * Call the constructor with the corresponding backend constructor and options
 * specific to the client subclass. To access these options later, use
 * {@link Client.getOptions}. Also, the Backend instance is available via
 * {@link Client.getBackend}.
 *
 * If a Dsn is specified in the options, it will be parsed and stored. Use
 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
 * invalid, the constructor will throw a {@link SentryException}. Note that
 * without a valid Dsn, the SDK will not send any events to Sentry.
 *
 * Before sending an event via the backend, it is passed through
 * {@link BaseClient._prepareEvent} to add SDK information and scope data
 * (breadcrumbs and context). To add more custom information, override this
 * method and extend the resulting prepared event.
 *
 * To issue automatically created events (e.g. via instrumentation), use
 * {@link Client.captureEvent}. It will prepare the event and pass it through
 * the callback lifecycle. To issue auto-breadcrumbs, use
 * {@link Client.addBreadcrumb}.
 *
 * @example
 * class NodeClient extends BaseClient<NodeBackend, NodeOptions> {
 *   public constructor(options: NodeOptions) {
 *     super(NodeBackend, options);
 *   }
 *
 *   // ...
 * }
 */
var BaseClient = /** @class */ (function () {
    /**
     * Initializes this client instance.
     *
     * @param backendClass A constructor function to create the backend.
     * @param options Options for the client.
     */
    function BaseClient(backendClass, options) {
        /** Array of used integrations. */
        this._integrations = {};
        /** Number of calls being processed */
        this._numProcessing = 0;
        this._backend = new backendClass(options);
        this._options = options;
        if (options.dsn) {
            this._dsn = new _sentry_utils__WEBPACK_IMPORTED_MODULE_0__.Dsn(options.dsn);
        }
    }
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    BaseClient.prototype.captureException = function (exception, hint, scope) {
        var _this = this;
        // ensure we haven't captured this very object before
        if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.checkOrSetAlreadyCaught)(exception)) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.log(ALREADY_SEEN_ERROR);
            return;
        }
        var eventId = hint && hint.event_id;
        this._process(this._getBackend()
            .eventFromException(exception, hint)
            .then(function (event) { return _this._captureEvent(event, hint, scope); })
            .then(function (result) {
            eventId = result;
        }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureMessage = function (message, level, hint, scope) {
        var _this = this;
        var eventId = hint && hint.event_id;
        var promisedEvent = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isPrimitive)(message)
            ? this._getBackend().eventFromMessage(String(message), level, hint)
            : this._getBackend().eventFromException(message, hint);
        this._process(promisedEvent
            .then(function (event) { return _this._captureEvent(event, hint, scope); })
            .then(function (result) {
            eventId = result;
        }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureEvent = function (event, hint, scope) {
        var _a;
        // ensure we haven't captured this very object before
        if (((_a = hint) === null || _a === void 0 ? void 0 : _a.originalException) && (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.checkOrSetAlreadyCaught)(hint.originalException)) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.log(ALREADY_SEEN_ERROR);
            return;
        }
        var eventId = hint && hint.event_id;
        this._process(this._captureEvent(event, hint, scope).then(function (result) {
            eventId = result;
        }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureSession = function (session) {
        if (!this._isEnabled()) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.warn('SDK not enabled, will not capture session.');
            return;
        }
        if (!(typeof session.release === 'string')) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.warn('Discarded session because of missing or non-string release');
        }
        else {
            this._sendSession(session);
            // After sending, we set init false to indicate it's not the first occurrence
            session.update({ init: false });
        }
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getDsn = function () {
        return this._dsn;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getOptions = function () {
        return this._options;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getTransport = function () {
        return this._getBackend().getTransport();
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.flush = function (timeout) {
        var _this = this;
        return this._isClientDoneProcessing(timeout).then(function (clientFinished) {
            return _this.getTransport()
                .close(timeout)
                .then(function (transportFlushed) { return clientFinished && transportFlushed; });
        });
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.close = function (timeout) {
        var _this = this;
        return this.flush(timeout).then(function (result) {
            _this.getOptions().enabled = false;
            return result;
        });
    };
    /**
     * Sets up the integrations
     */
    BaseClient.prototype.setupIntegrations = function () {
        if (this._isEnabled() && !this._integrations.initialized) {
            this._integrations = (0,_integration__WEBPACK_IMPORTED_MODULE_4__.setupIntegrations)(this._options);
        }
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getIntegration = function (integration) {
        try {
            return this._integrations[integration.id] || null;
        }
        catch (_oO) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.warn("Cannot retrieve integration " + integration.id + " from the current Client");
            return null;
        }
    };
    /** Updates existing session based on the provided event */
    BaseClient.prototype._updateSessionFromEvent = function (session, event) {
        var e_1, _a;
        var crashed = false;
        var errored = false;
        var exceptions = event.exception && event.exception.values;
        if (exceptions) {
            errored = true;
            try {
                for (var exceptions_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__values)(exceptions), exceptions_1_1 = exceptions_1.next(); !exceptions_1_1.done; exceptions_1_1 = exceptions_1.next()) {
                    var ex = exceptions_1_1.value;
                    var mechanism = ex.mechanism;
                    if (mechanism && mechanism.handled === false) {
                        crashed = true;
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (exceptions_1_1 && !exceptions_1_1.done && (_a = exceptions_1.return)) _a.call(exceptions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        // A session is updated and that session update is sent in only one of the two following scenarios:
        // 1. Session with non terminal status and 0 errors + an error occurred -> Will set error count to 1 and send update
        // 2. Session with non terminal status and 1 error + a crash occurred -> Will set status crashed and send update
        var sessionNonTerminal = session.status === _sentry_types__WEBPACK_IMPORTED_MODULE_6__.SessionStatus.Ok;
        var shouldUpdateAndSend = (sessionNonTerminal && session.errors === 0) || (sessionNonTerminal && crashed);
        if (shouldUpdateAndSend) {
            session.update((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, (crashed && { status: _sentry_types__WEBPACK_IMPORTED_MODULE_6__.SessionStatus.Crashed })), { errors: session.errors || Number(errored || crashed) }));
            this.captureSession(session);
        }
    };
    /** Deliver captured session to Sentry */
    BaseClient.prototype._sendSession = function (session) {
        this._getBackend().sendSession(session);
    };
    /**
     * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
     * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
     *
     * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
     * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
     * `true`.
     * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
     * `false` otherwise
     */
    BaseClient.prototype._isClientDoneProcessing = function (timeout) {
        var _this = this;
        return new _sentry_utils__WEBPACK_IMPORTED_MODULE_7__.SyncPromise(function (resolve) {
            var ticked = 0;
            var tick = 1;
            var interval = setInterval(function () {
                if (_this._numProcessing == 0) {
                    clearInterval(interval);
                    resolve(true);
                }
                else {
                    ticked += tick;
                    if (timeout && ticked >= timeout) {
                        clearInterval(interval);
                        resolve(false);
                    }
                }
            }, tick);
        });
    };
    /** Returns the current backend. */
    BaseClient.prototype._getBackend = function () {
        return this._backend;
    };
    /** Determines whether this SDK is enabled and a valid Dsn is present. */
    BaseClient.prototype._isEnabled = function () {
        return this.getOptions().enabled !== false && this._dsn !== undefined;
    };
    /**
     * Adds common information to events.
     *
     * The information includes release and environment from `options`,
     * breadcrumbs and context (extra, tags and user) from the scope.
     *
     * Information that is already present in the event is never overwritten. For
     * nested objects, such as the context, keys are merged.
     *
     * @param event The original event.
     * @param hint May contain additional information about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A new event with more information.
     */
    BaseClient.prototype._prepareEvent = function (event, scope, hint) {
        var _this = this;
        var _a = this.getOptions().normalizeDepth, normalizeDepth = _a === void 0 ? 3 : _a;
        var prepared = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, event), { event_id: event.event_id || (hint && hint.event_id ? hint.event_id : (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.uuid4)()), timestamp: event.timestamp || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_8__.dateTimestampInSeconds)() });
        this._applyClientOptions(prepared);
        this._applyIntegrationsMetadata(prepared);
        // If we have scope given to us, use it as the base for further modifications.
        // This allows us to prevent unnecessary copying of data if `captureContext` is not provided.
        var finalScope = scope;
        if (hint && hint.captureContext) {
            finalScope = _sentry_hub__WEBPACK_IMPORTED_MODULE_9__.Scope.clone(finalScope).update(hint.captureContext);
        }
        // We prepare the result here with a resolved Event.
        var result = _sentry_utils__WEBPACK_IMPORTED_MODULE_7__.SyncPromise.resolve(prepared);
        // This should be the last thing called, since we want that
        // {@link Hub.addEventProcessor} gets the finished prepared event.
        if (finalScope) {
            // In case we have a hub we reassign it.
            result = finalScope.applyToEvent(prepared, hint);
        }
        return result.then(function (evt) {
            if (typeof normalizeDepth === 'number' && normalizeDepth > 0) {
                return _this._normalizeEvent(evt, normalizeDepth);
            }
            return evt;
        });
    };
    /**
     * Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
     * Normalized keys:
     * - `breadcrumbs.data`
     * - `user`
     * - `contexts`
     * - `extra`
     * @param event Event
     * @returns Normalized event
     */
    BaseClient.prototype._normalizeEvent = function (event, depth) {
        if (!event) {
            return null;
        }
        var normalized = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, event), (event.breadcrumbs && {
            breadcrumbs: event.breadcrumbs.map(function (b) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, b), (b.data && {
                data: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_10__.normalize)(b.data, depth),
            }))); }),
        })), (event.user && {
            user: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_10__.normalize)(event.user, depth),
        })), (event.contexts && {
            contexts: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_10__.normalize)(event.contexts, depth),
        })), (event.extra && {
            extra: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_10__.normalize)(event.extra, depth),
        }));
        // event.contexts.trace stores information about a Transaction. Similarly,
        // event.spans[] stores information about child Spans. Given that a
        // Transaction is conceptually a Span, normalization should apply to both
        // Transactions and Spans consistently.
        // For now the decision is to skip normalization of Transactions and Spans,
        // so this block overwrites the normalized event to add back the original
        // Transaction information prior to normalization.
        if (event.contexts && event.contexts.trace) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            normalized.contexts.trace = event.contexts.trace;
        }
        var _a = this.getOptions()._experiments, _experiments = _a === void 0 ? {} : _a;
        if (_experiments.ensureNoCircularStructures) {
            return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_10__.normalize)(normalized);
        }
        return normalized;
    };
    /**
     *  Enhances event using the client configuration.
     *  It takes care of all "static" values like environment, release and `dist`,
     *  as well as truncating overly long values.
     * @param event event instance to be enhanced
     */
    BaseClient.prototype._applyClientOptions = function (event) {
        var options = this.getOptions();
        var environment = options.environment, release = options.release, dist = options.dist, _a = options.maxValueLength, maxValueLength = _a === void 0 ? 250 : _a;
        if (!('environment' in event)) {
            event.environment = 'environment' in options ? environment : 'production';
        }
        if (event.release === undefined && release !== undefined) {
            event.release = release;
        }
        if (event.dist === undefined && dist !== undefined) {
            event.dist = dist;
        }
        if (event.message) {
            event.message = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_11__.truncate)(event.message, maxValueLength);
        }
        var exception = event.exception && event.exception.values && event.exception.values[0];
        if (exception && exception.value) {
            exception.value = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_11__.truncate)(exception.value, maxValueLength);
        }
        var request = event.request;
        if (request && request.url) {
            request.url = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_11__.truncate)(request.url, maxValueLength);
        }
    };
    /**
     * This function adds all used integrations to the SDK info in the event.
     * @param event The event that will be filled with all integrations.
     */
    BaseClient.prototype._applyIntegrationsMetadata = function (event) {
        var integrationsArray = Object.keys(this._integrations);
        if (integrationsArray.length > 0) {
            event.sdk = event.sdk || {};
            event.sdk.integrations = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__spread)((event.sdk.integrations || []), integrationsArray);
        }
    };
    /**
     * Tells the backend to send this event
     * @param event The Sentry event to send
     */
    BaseClient.prototype._sendEvent = function (event) {
        this._getBackend().sendEvent(event);
    };
    /**
     * Processes the event and logs an error in case of rejection
     * @param event
     * @param hint
     * @param scope
     */
    BaseClient.prototype._captureEvent = function (event, hint, scope) {
        return this._processEvent(event, hint, scope).then(function (finalEvent) {
            return finalEvent.event_id;
        }, function (reason) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.error(reason);
            return undefined;
        });
    };
    /**
     * Processes an event (either error or message) and sends it to Sentry.
     *
     * This also adds breadcrumbs and context information to the event. However,
     * platform specific meta data (such as the User's IP address) must be added
     * by the SDK implementor.
     *
     *
     * @param event The event to send to Sentry.
     * @param hint May contain additional information about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
     */
    BaseClient.prototype._processEvent = function (event, hint, scope) {
        var _this = this;
        var _a, _b;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _c = this.getOptions(), beforeSend = _c.beforeSend, sampleRate = _c.sampleRate;
        var transport = this.getTransport();
        if (!this._isEnabled()) {
            return _sentry_utils__WEBPACK_IMPORTED_MODULE_7__.SyncPromise.reject(new _sentry_utils__WEBPACK_IMPORTED_MODULE_12__.SentryError('SDK not enabled, will not capture event.'));
        }
        var isTransaction = event.type === 'transaction';
        // 1.0 === 100% events are sent
        // 0.0 === 0% events are sent
        // Sampling for transaction happens somewhere else
        if (!isTransaction && typeof sampleRate === 'number' && Math.random() > sampleRate) {
            (_b = (_a = transport).recordLostEvent) === null || _b === void 0 ? void 0 : _b.call(_a, _sentry_types__WEBPACK_IMPORTED_MODULE_13__.Outcome.SampleRate, 'event');
            return _sentry_utils__WEBPACK_IMPORTED_MODULE_7__.SyncPromise.reject(new _sentry_utils__WEBPACK_IMPORTED_MODULE_12__.SentryError("Discarding event because it's not included in the random sample (sampling rate = " + sampleRate + ")"));
        }
        return this._prepareEvent(event, scope, hint)
            .then(function (prepared) {
            var _a, _b;
            if (prepared === null) {
                (_b = (_a = transport).recordLostEvent) === null || _b === void 0 ? void 0 : _b.call(_a, _sentry_types__WEBPACK_IMPORTED_MODULE_13__.Outcome.EventProcessor, event.type || 'event');
                throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_12__.SentryError('An event processor returned null, will not send event.');
            }
            var isInternalException = hint && hint.data && hint.data.__sentry__ === true;
            if (isInternalException || isTransaction || !beforeSend) {
                return prepared;
            }
            var beforeSendResult = beforeSend(prepared, hint);
            return _this._ensureBeforeSendRv(beforeSendResult);
        })
            .then(function (processedEvent) {
            var _a, _b;
            if (processedEvent === null) {
                (_b = (_a = transport).recordLostEvent) === null || _b === void 0 ? void 0 : _b.call(_a, _sentry_types__WEBPACK_IMPORTED_MODULE_13__.Outcome.BeforeSend, event.type || 'event');
                throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_12__.SentryError('`beforeSend` returned `null`, will not send event.');
            }
            var session = scope && scope.getSession && scope.getSession();
            if (!isTransaction && session) {
                _this._updateSessionFromEvent(session, processedEvent);
            }
            _this._sendEvent(processedEvent);
            return processedEvent;
        })
            .then(null, function (reason) {
            if (reason instanceof _sentry_utils__WEBPACK_IMPORTED_MODULE_12__.SentryError) {
                throw reason;
            }
            _this.captureException(reason, {
                data: {
                    __sentry__: true,
                },
                originalException: reason,
            });
            throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_12__.SentryError("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + reason);
        });
    };
    /**
     * Occupies the client with processing and event
     */
    BaseClient.prototype._process = function (promise) {
        var _this = this;
        this._numProcessing += 1;
        void promise.then(function (value) {
            _this._numProcessing -= 1;
            return value;
        }, function (reason) {
            _this._numProcessing -= 1;
            return reason;
        });
    };
    /**
     * Verifies that return value of configured `beforeSend` is of expected type.
     */
    BaseClient.prototype._ensureBeforeSendRv = function (rv) {
        var nullErr = '`beforeSend` method has to return `null` or a valid event.';
        if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isThenable)(rv)) {
            return rv.then(function (event) {
                if (!((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isPlainObject)(event) || event === null)) {
                    throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_12__.SentryError(nullErr);
                }
                return event;
            }, function (e) {
                throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_12__.SentryError("beforeSend rejected with " + e);
            });
        }
        else if (!((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isPlainObject)(rv) || rv === null)) {
            throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_12__.SentryError(nullErr);
        }
        return rv;
    };
    return BaseClient;
}());

//# sourceMappingURL=baseclient.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/integration.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integration.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "installedIntegrations": () => (/* binding */ installedIntegrations),
/* harmony export */   "getIntegrationsToSetup": () => (/* binding */ getIntegrationsToSetup),
/* harmony export */   "setupIntegration": () => (/* binding */ setupIntegration),
/* harmony export */   "setupIntegrations": () => (/* binding */ setupIntegrations)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/scope.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/hub.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");



var installedIntegrations = [];
/**
 * @private
 */
function filterDuplicates(integrations) {
    return integrations.reduce(function (acc, integrations) {
        if (acc.every(function (accIntegration) { return integrations.name !== accIntegration.name; })) {
            acc.push(integrations);
        }
        return acc;
    }, []);
}
/** Gets integration to install */
function getIntegrationsToSetup(options) {
    var defaultIntegrations = (options.defaultIntegrations && (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(options.defaultIntegrations)) || [];
    var userIntegrations = options.integrations;
    var integrations = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(filterDuplicates(defaultIntegrations));
    if (Array.isArray(userIntegrations)) {
        // Filter out integrations that are also included in user options
        integrations = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(integrations.filter(function (integrations) {
            return userIntegrations.every(function (userIntegration) { return userIntegration.name !== integrations.name; });
        }), filterDuplicates(userIntegrations));
    }
    else if (typeof userIntegrations === 'function') {
        integrations = userIntegrations(integrations);
        integrations = Array.isArray(integrations) ? integrations : [integrations];
    }
    // Make sure that if present, `Debug` integration will always run last
    var integrationsNames = integrations.map(function (i) { return i.name; });
    var alwaysLastToRun = 'Debug';
    if (integrationsNames.indexOf(alwaysLastToRun) !== -1) {
        integrations.push.apply(integrations, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(integrations.splice(integrationsNames.indexOf(alwaysLastToRun), 1)));
    }
    return integrations;
}
/** Setup given integration */
function setupIntegration(integration) {
    if (installedIntegrations.indexOf(integration.name) !== -1) {
        return;
    }
    integration.setupOnce(_sentry_hub__WEBPACK_IMPORTED_MODULE_1__.addGlobalEventProcessor, _sentry_hub__WEBPACK_IMPORTED_MODULE_2__.getCurrentHub);
    installedIntegrations.push(integration.name);
    _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log("Integration installed: " + integration.name);
}
/**
 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
 * integrations are added unless they were already provided before.
 * @param integrations array of integration instances
 * @param withDefault should enable default integrations
 */
function setupIntegrations(options) {
    var integrations = {};
    getIntegrationsToSetup(options).forEach(function (integration) {
        integrations[integration.name] = integration;
        setupIntegration(integration);
    });
    // set the `initialized` flag so we don't run through the process again unecessarily; use `Object.defineProperty`
    // because by default it creates a property which is nonenumerable, which we want since `initialized` shouldn't be
    // considered a member of the index the way the actual integrations are
    Object.defineProperty(integrations, 'initialized', { value: true });
    return integrations;
}
//# sourceMappingURL=integration.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/integrations/functiontostring.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integrations/functiontostring.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionToString": () => (/* binding */ FunctionToString)
/* harmony export */ });
var originalFunctionToString;
/** Patch toString calls to return proper name for wrapped functions */
var FunctionToString = /** @class */ (function () {
    function FunctionToString() {
        /**
         * @inheritDoc
         */
        this.name = FunctionToString.id;
    }
    /**
     * @inheritDoc
     */
    FunctionToString.prototype.setupOnce = function () {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        originalFunctionToString = Function.prototype.toString;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Function.prototype.toString = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var context = this.__sentry_original__ || this;
            return originalFunctionToString.apply(context, args);
        };
    };
    /**
     * @inheritDoc
     */
    FunctionToString.id = 'FunctionToString';
    return FunctionToString;
}());

//# sourceMappingURL=functiontostring.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/integrations/inboundfilters.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integrations/inboundfilters.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboundFilters": () => (/* binding */ InboundFilters)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/scope.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/hub.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/misc.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/string.js");



// "Script error." is hard coded into browsers for errors that it can't read.
// this is the result of a script being pulled in from an external domain and CORS.
var DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
/** Inbound filters configurable by the user */
var InboundFilters = /** @class */ (function () {
    function InboundFilters(_options) {
        if (_options === void 0) { _options = {}; }
        this._options = _options;
        /**
         * @inheritDoc
         */
        this.name = InboundFilters.id;
    }
    /**
     * @inheritDoc
     */
    InboundFilters.prototype.setupOnce = function () {
        (0,_sentry_hub__WEBPACK_IMPORTED_MODULE_0__.addGlobalEventProcessor)(function (event) {
            var hub = (0,_sentry_hub__WEBPACK_IMPORTED_MODULE_1__.getCurrentHub)();
            if (!hub) {
                return event;
            }
            var self = hub.getIntegration(InboundFilters);
            if (self) {
                var client = hub.getClient();
                var clientOptions = client ? client.getOptions() : {};
                // This checks prevents most of the occurrences of the bug linked below:
                // https://github.com/getsentry/sentry-javascript/issues/2622
                // The bug is caused by multiple SDK instances, where one is minified and one is using non-mangled code.
                // Unfortunatelly we cannot fix it reliably (thus reserved property in rollup's terser config),
                // as we cannot force people using multiple instances in their apps to sync SDK versions.
                var options = typeof self._mergeOptions === 'function' ? self._mergeOptions(clientOptions) : {};
                if (typeof self._shouldDropEvent !== 'function') {
                    return event;
                }
                return self._shouldDropEvent(event, options) ? null : event;
            }
            return event;
        });
    };
    /** JSDoc */
    InboundFilters.prototype._shouldDropEvent = function (event, options) {
        if (this._isSentryError(event, options)) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.warn("Event dropped due to being internal Sentry Error.\nEvent: " + (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.getEventDescription)(event));
            return true;
        }
        if (this._isIgnoredError(event, options)) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.getEventDescription)(event));
            return true;
        }
        if (this._isDeniedUrl(event, options)) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.getEventDescription)(event) + ".\nUrl: " + this._getEventFilterUrl(event));
            return true;
        }
        if (!this._isAllowedUrl(event, options)) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.getEventDescription)(event) + ".\nUrl: " + this._getEventFilterUrl(event));
            return true;
        }
        return false;
    };
    /** JSDoc */
    InboundFilters.prototype._isSentryError = function (event, options) {
        if (!options.ignoreInternal) {
            return false;
        }
        try {
            return ((event &&
                event.exception &&
                event.exception.values &&
                event.exception.values[0] &&
                event.exception.values[0].type === 'SentryError') ||
                false);
        }
        catch (_oO) {
            return false;
        }
    };
    /** JSDoc */
    InboundFilters.prototype._isIgnoredError = function (event, options) {
        if (!options.ignoreErrors || !options.ignoreErrors.length) {
            return false;
        }
        return this._getPossibleEventMessages(event).some(function (message) {
            // Not sure why TypeScript complains here...
            return options.ignoreErrors.some(function (pattern) { return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.isMatchingPattern)(message, pattern); });
        });
    };
    /** JSDoc */
    InboundFilters.prototype._isDeniedUrl = function (event, options) {
        // TODO: Use Glob instead?
        if (!options.denyUrls || !options.denyUrls.length) {
            return false;
        }
        var url = this._getEventFilterUrl(event);
        return !url ? false : options.denyUrls.some(function (pattern) { return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.isMatchingPattern)(url, pattern); });
    };
    /** JSDoc */
    InboundFilters.prototype._isAllowedUrl = function (event, options) {
        // TODO: Use Glob instead?
        if (!options.allowUrls || !options.allowUrls.length) {
            return true;
        }
        var url = this._getEventFilterUrl(event);
        return !url ? true : options.allowUrls.some(function (pattern) { return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.isMatchingPattern)(url, pattern); });
    };
    /** JSDoc */
    InboundFilters.prototype._mergeOptions = function (clientOptions) {
        if (clientOptions === void 0) { clientOptions = {}; }
        return {
            allowUrls: (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__spread)((this._options.whitelistUrls || []), (this._options.allowUrls || []), (clientOptions.whitelistUrls || []), (clientOptions.allowUrls || [])),
            denyUrls: (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__spread)((this._options.blacklistUrls || []), (this._options.denyUrls || []), (clientOptions.blacklistUrls || []), (clientOptions.denyUrls || [])),
            ignoreErrors: (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__spread)((this._options.ignoreErrors || []), (clientOptions.ignoreErrors || []), DEFAULT_IGNORE_ERRORS),
            ignoreInternal: typeof this._options.ignoreInternal !== 'undefined' ? this._options.ignoreInternal : true,
        };
    };
    /** JSDoc */
    InboundFilters.prototype._getPossibleEventMessages = function (event) {
        if (event.message) {
            return [event.message];
        }
        if (event.exception) {
            try {
                var _a = (event.exception.values && event.exception.values[0]) || {}, _b = _a.type, type = _b === void 0 ? '' : _b, _c = _a.value, value = _c === void 0 ? '' : _c;
                return ["" + value, type + ": " + value];
            }
            catch (oO) {
                _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.error("Cannot extract message for event " + (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.getEventDescription)(event));
                return [];
            }
        }
        return [];
    };
    /** JSDoc */
    InboundFilters.prototype._getLastValidUrl = function (frames) {
        if (frames === void 0) { frames = []; }
        var _a, _b;
        for (var i = frames.length - 1; i >= 0; i--) {
            var frame = frames[i];
            if (((_a = frame) === null || _a === void 0 ? void 0 : _a.filename) !== '<anonymous>' && ((_b = frame) === null || _b === void 0 ? void 0 : _b.filename) !== '[native code]') {
                return frame.filename || null;
            }
        }
        return null;
    };
    /** JSDoc */
    InboundFilters.prototype._getEventFilterUrl = function (event) {
        try {
            if (event.stacktrace) {
                var frames_1 = event.stacktrace.frames;
                return this._getLastValidUrl(frames_1);
            }
            if (event.exception) {
                var frames_2 = event.exception.values && event.exception.values[0].stacktrace && event.exception.values[0].stacktrace.frames;
                return this._getLastValidUrl(frames_2);
            }
            return null;
        }
        catch (oO) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.error("Cannot extract url for event " + (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.getEventDescription)(event));
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    InboundFilters.id = 'InboundFilters';
    return InboundFilters;
}());

//# sourceMappingURL=inboundfilters.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/request.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/core/esm/request.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sessionToSentryRequest": () => (/* binding */ sessionToSentryRequest),
/* harmony export */   "eventToSentryRequest": () => (/* binding */ eventToSentryRequest)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/** Extract sdk info from from the API metadata */
function getSdkMetadataForEnvelopeHeader(api) {
    if (!api.metadata || !api.metadata.sdk) {
        return;
    }
    var _a = api.metadata.sdk, name = _a.name, version = _a.version;
    return { name: name, version: version };
}
/**
 * Apply SdkInfo (name, version, packages, integrations) to the corresponding event key.
 * Merge with existing data if any.
 **/
function enhanceEventWithSdkInfo(event, sdkInfo) {
    if (!sdkInfo) {
        return event;
    }
    event.sdk = event.sdk || {};
    event.sdk.name = event.sdk.name || sdkInfo.name;
    event.sdk.version = event.sdk.version || sdkInfo.version;
    event.sdk.integrations = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)((event.sdk.integrations || []), (sdkInfo.integrations || []));
    event.sdk.packages = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)((event.sdk.packages || []), (sdkInfo.packages || []));
    return event;
}
/** Creates a SentryRequest from a Session. */
function sessionToSentryRequest(session, api) {
    var sdkInfo = getSdkMetadataForEnvelopeHeader(api);
    var envelopeHeaders = JSON.stringify((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ sent_at: new Date().toISOString() }, (sdkInfo && { sdk: sdkInfo })), (api.forceEnvelope() && { dsn: api.getDsn().toString() })));
    // I know this is hacky but we don't want to add `session` to request type since it's never rate limited
    var type = 'aggregates' in session ? 'sessions' : 'session';
    var itemHeaders = JSON.stringify({
        type: type,
    });
    return {
        body: envelopeHeaders + "\n" + itemHeaders + "\n" + JSON.stringify(session),
        type: type,
        url: api.getEnvelopeEndpointWithUrlEncodedAuth(),
    };
}
/** Creates a SentryRequest from an event. */
function eventToSentryRequest(event, api) {
    var sdkInfo = getSdkMetadataForEnvelopeHeader(api);
    var eventType = event.type || 'event';
    var useEnvelope = eventType === 'transaction' || api.forceEnvelope();
    var _a = event.debug_meta || {}, transactionSampling = _a.transactionSampling, metadata = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["transactionSampling"]);
    var _b = transactionSampling || {}, samplingMethod = _b.method, sampleRate = _b.rate;
    if (Object.keys(metadata).length === 0) {
        delete event.debug_meta;
    }
    else {
        event.debug_meta = metadata;
    }
    var req = {
        body: JSON.stringify(sdkInfo ? enhanceEventWithSdkInfo(event, api.metadata.sdk) : event),
        type: eventType,
        url: useEnvelope ? api.getEnvelopeEndpointWithUrlEncodedAuth() : api.getStoreEndpointWithUrlEncodedAuth(),
    };
    // https://develop.sentry.dev/sdk/envelopes/
    // Since we don't need to manipulate envelopes nor store them, there is no
    // exported concept of an Envelope with operations including serialization and
    // deserialization. Instead, we only implement a minimal subset of the spec to
    // serialize events inline here.
    if (useEnvelope) {
        var envelopeHeaders = JSON.stringify((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ event_id: event.event_id, sent_at: new Date().toISOString() }, (sdkInfo && { sdk: sdkInfo })), (api.forceEnvelope() && { dsn: api.getDsn().toString() })));
        var itemHeaders = JSON.stringify({
            type: eventType,
            // TODO: Right now, sampleRate may or may not be defined (it won't be in the cases of inheritance and
            // explicitly-set sampling decisions). Are we good with that?
            sample_rates: [{ id: samplingMethod, rate: sampleRate }],
        });
        // The trailing newline is optional. We intentionally don't send it to avoid
        // sending unnecessary bytes.
        //
        // const envelope = `${envelopeHeaders}\n${itemHeaders}\n${req.body}\n`;
        var envelope = envelopeHeaders + "\n" + itemHeaders + "\n" + req.body;
        req.body = envelope;
    }
    return req;
}
//# sourceMappingURL=request.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/sdk.js":
/*!**********************************************!*\
  !*** ./node_modules/@sentry/core/esm/sdk.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initAndBind": () => (/* binding */ initAndBind)
/* harmony export */ });
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/hub.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");


/**
 * Internal function to create a new SDK client instance. The client is
 * installed and then bound to the current scope.
 *
 * @param clientClass The client class to instantiate.
 * @param options Options to pass to the client.
 */
function initAndBind(clientClass, options) {
    var _a;
    if (options.debug === true) {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_0__.logger.enable();
    }
    var hub = (0,_sentry_hub__WEBPACK_IMPORTED_MODULE_1__.getCurrentHub)();
    (_a = hub.getScope()) === null || _a === void 0 ? void 0 : _a.update(options.initialScope);
    var client = new clientClass(options);
    hub.bindClient(client);
}
//# sourceMappingURL=sdk.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/transports/noop.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sentry/core/esm/transports/noop.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopTransport": () => (/* binding */ NoopTransport)
/* harmony export */ });
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/status.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/syncpromise.js");


/** Noop transport */
var NoopTransport = /** @class */ (function () {
    function NoopTransport() {
    }
    /**
     * @inheritDoc
     */
    NoopTransport.prototype.sendEvent = function (_) {
        return _sentry_utils__WEBPACK_IMPORTED_MODULE_0__.SyncPromise.resolve({
            reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
            status: _sentry_types__WEBPACK_IMPORTED_MODULE_1__.Status.Skipped,
        });
    };
    /**
     * @inheritDoc
     */
    NoopTransport.prototype.close = function (_) {
        return _sentry_utils__WEBPACK_IMPORTED_MODULE_0__.SyncPromise.resolve(true);
    };
    return NoopTransport;
}());

//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/version.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/core/esm/version.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SDK_VERSION": () => (/* binding */ SDK_VERSION)
/* harmony export */ });
var SDK_VERSION = '6.16.1';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/@sentry/hub/esm/hub.js":
/*!*********************************************!*\
  !*** ./node_modules/@sentry/hub/esm/hub.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_VERSION": () => (/* binding */ API_VERSION),
/* harmony export */   "Hub": () => (/* binding */ Hub),
/* harmony export */   "getMainCarrier": () => (/* binding */ getMainCarrier),
/* harmony export */   "makeMain": () => (/* binding */ makeMain),
/* harmony export */   "getCurrentHub": () => (/* binding */ getCurrentHub),
/* harmony export */   "getActiveDomain": () => (/* binding */ getActiveDomain),
/* harmony export */   "getHubFromCarrier": () => (/* binding */ getHubFromCarrier),
/* harmony export */   "setHubOnCarrier": () => (/* binding */ setHubOnCarrier)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/session.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/misc.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/time.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/node.js");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scope */ "./node_modules/@sentry/hub/esm/scope.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session */ "./node_modules/@sentry/hub/esm/session.js");

/* eslint-disable max-lines */




/**
 * API compatibility version of this hub.
 *
 * WARNING: This number should only be increased when the global interface
 * changes and new methods are introduced.
 *
 * @hidden
 */
var API_VERSION = 4;
/**
 * Default maximum number of breadcrumbs added to an event. Can be overwritten
 * with {@link Options.maxBreadcrumbs}.
 */
var DEFAULT_BREADCRUMBS = 100;
/**
 * @inheritDoc
 */
var Hub = /** @class */ (function () {
    /**
     * Creates a new instance of the hub, will push one {@link Layer} into the
     * internal stack on creation.
     *
     * @param client bound to the hub.
     * @param scope bound to the hub.
     * @param version number, higher number means higher priority.
     */
    function Hub(client, scope, _version) {
        if (scope === void 0) { scope = new _scope__WEBPACK_IMPORTED_MODULE_0__.Scope(); }
        if (_version === void 0) { _version = API_VERSION; }
        this._version = _version;
        /** Is a {@link Layer}[] containing the client and scope */
        this._stack = [{}];
        this.getStackTop().scope = scope;
        if (client) {
            this.bindClient(client);
        }
    }
    /**
     * @inheritDoc
     */
    Hub.prototype.isOlderThan = function (version) {
        return this._version < version;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.bindClient = function (client) {
        var top = this.getStackTop();
        top.client = client;
        if (client && client.setupIntegrations) {
            client.setupIntegrations();
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.pushScope = function () {
        // We want to clone the content of prev scope
        var scope = _scope__WEBPACK_IMPORTED_MODULE_0__.Scope.clone(this.getScope());
        this.getStack().push({
            client: this.getClient(),
            scope: scope,
        });
        return scope;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.popScope = function () {
        if (this.getStack().length <= 1)
            return false;
        return !!this.getStack().pop();
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.withScope = function (callback) {
        var scope = this.pushScope();
        try {
            callback(scope);
        }
        finally {
            this.popScope();
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.getClient = function () {
        return this.getStackTop().client;
    };
    /** Returns the scope of the top stack. */
    Hub.prototype.getScope = function () {
        return this.getStackTop().scope;
    };
    /** Returns the scope stack for domains or the process. */
    Hub.prototype.getStack = function () {
        return this._stack;
    };
    /** Returns the topmost scope layer in the order domain > local > process. */
    Hub.prototype.getStackTop = function () {
        return this._stack[this._stack.length - 1];
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    Hub.prototype.captureException = function (exception, hint) {
        var eventId = (this._lastEventId = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.uuid4)());
        var finalHint = hint;
        // If there's no explicit hint provided, mimic the same thing that would happen
        // in the minimal itself to create a consistent behavior.
        // We don't do this in the client, as it's the lowest level API, and doing this,
        // would prevent user from having full control over direct calls.
        if (!hint) {
            var syntheticException = void 0;
            try {
                throw new Error('Sentry syntheticException');
            }
            catch (exception) {
                syntheticException = exception;
            }
            finalHint = {
                originalException: exception,
                syntheticException: syntheticException,
            };
        }
        this._invokeClient('captureException', exception, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, finalHint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureMessage = function (message, level, hint) {
        var eventId = (this._lastEventId = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.uuid4)());
        var finalHint = hint;
        // If there's no explicit hint provided, mimic the same thing that would happen
        // in the minimal itself to create a consistent behavior.
        // We don't do this in the client, as it's the lowest level API, and doing this,
        // would prevent user from having full control over direct calls.
        if (!hint) {
            var syntheticException = void 0;
            try {
                throw new Error(message);
            }
            catch (exception) {
                syntheticException = exception;
            }
            finalHint = {
                originalException: message,
                syntheticException: syntheticException,
            };
        }
        this._invokeClient('captureMessage', message, level, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, finalHint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureEvent = function (event, hint) {
        var eventId = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.uuid4)();
        if (event.type !== 'transaction') {
            this._lastEventId = eventId;
        }
        this._invokeClient('captureEvent', event, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.lastEventId = function () {
        return this._lastEventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.addBreadcrumb = function (breadcrumb, hint) {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        if (!scope || !client)
            return;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _b = (client.getOptions && client.getOptions()) || {}, _c = _b.beforeBreadcrumb, beforeBreadcrumb = _c === void 0 ? null : _c, _d = _b.maxBreadcrumbs, maxBreadcrumbs = _d === void 0 ? DEFAULT_BREADCRUMBS : _d;
        if (maxBreadcrumbs <= 0)
            return;
        var timestamp = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.dateTimestampInSeconds)();
        var mergedBreadcrumb = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ timestamp: timestamp }, breadcrumb);
        var finalBreadcrumb = beforeBreadcrumb
            ? (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.consoleSandbox)(function () { return beforeBreadcrumb(mergedBreadcrumb, hint); })
            : mergedBreadcrumb;
        if (finalBreadcrumb === null)
            return;
        scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setUser = function (user) {
        var scope = this.getScope();
        if (scope)
            scope.setUser(user);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setTags = function (tags) {
        var scope = this.getScope();
        if (scope)
            scope.setTags(tags);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setExtras = function (extras) {
        var scope = this.getScope();
        if (scope)
            scope.setExtras(extras);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setTag = function (key, value) {
        var scope = this.getScope();
        if (scope)
            scope.setTag(key, value);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setExtra = function (key, extra) {
        var scope = this.getScope();
        if (scope)
            scope.setExtra(key, extra);
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype.setContext = function (name, context) {
        var scope = this.getScope();
        if (scope)
            scope.setContext(name, context);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.configureScope = function (callback) {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        if (scope && client) {
            callback(scope);
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.run = function (callback) {
        var oldHub = makeMain(this);
        try {
            callback(this);
        }
        finally {
            makeMain(oldHub);
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.getIntegration = function (integration) {
        var client = this.getClient();
        if (!client)
            return null;
        try {
            return client.getIntegration(integration);
        }
        catch (_oO) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.warn("Cannot retrieve integration " + integration.id + " from the current Hub");
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startSpan = function (context) {
        return this._callExtensionMethod('startSpan', context);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startTransaction = function (context, customSamplingContext) {
        return this._callExtensionMethod('startTransaction', context, customSamplingContext);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.traceHeaders = function () {
        return this._callExtensionMethod('traceHeaders');
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureSession = function (endSession) {
        if (endSession === void 0) { endSession = false; }
        // both send the update and pull the session from the scope
        if (endSession) {
            return this.endSession();
        }
        // only send the update
        this._sendSessionUpdate();
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.endSession = function () {
        var _a, _b, _c, _d, _e;
        (_c = (_b = (_a = this.getStackTop()) === null || _a === void 0 ? void 0 : _a.scope) === null || _b === void 0 ? void 0 : _b.getSession()) === null || _c === void 0 ? void 0 : _c.close();
        this._sendSessionUpdate();
        // the session is over; take it off of the scope
        (_e = (_d = this.getStackTop()) === null || _d === void 0 ? void 0 : _d.scope) === null || _e === void 0 ? void 0 : _e.setSession();
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startSession = function (context) {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        var _b = (client && client.getOptions()) || {}, release = _b.release, environment = _b.environment;
        // Will fetch userAgent if called from browser sdk
        var global = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__.getGlobalObject)();
        var userAgent = (global.navigator || {}).userAgent;
        var session = new _session__WEBPACK_IMPORTED_MODULE_6__.Session((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ release: release,
            environment: environment }, (scope && { user: scope.getUser() })), (userAgent && { userAgent: userAgent })), context));
        if (scope) {
            // End existing session if there's one
            var currentSession = scope.getSession && scope.getSession();
            if (currentSession && currentSession.status === _sentry_types__WEBPACK_IMPORTED_MODULE_7__.SessionStatus.Ok) {
                currentSession.update({ status: _sentry_types__WEBPACK_IMPORTED_MODULE_7__.SessionStatus.Exited });
            }
            this.endSession();
            // Afterwards we set the new session on the scope
            scope.setSession(session);
        }
        return session;
    };
    /**
     * Sends the current Session on the scope
     */
    Hub.prototype._sendSessionUpdate = function () {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        if (!scope)
            return;
        var session = scope.getSession && scope.getSession();
        if (session) {
            if (client && client.captureSession) {
                client.captureSession(session);
            }
        }
    };
    /**
     * Internal helper function to call a method on the top client if it exists.
     *
     * @param method The method to call on the client.
     * @param args Arguments to pass to the client function.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype._invokeClient = function (method) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _b = this.getStackTop(), scope = _b.scope, client = _b.client;
        if (client && client[method]) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
            (_a = client)[method].apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spread)(args, [scope]));
        }
    };
    /**
     * Calls global extension method and binding current instance to the function call
     */
    // @ts-ignore Function lacks ending return statement and return type does not include 'undefined'. ts(2366)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype._callExtensionMethod = function (method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var carrier = getMainCarrier();
        var sentry = carrier.__SENTRY__;
        if (sentry && sentry.extensions && typeof sentry.extensions[method] === 'function') {
            return sentry.extensions[method].apply(this, args);
        }
        _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.warn("Extension method " + method + " couldn't be found, doing nothing.");
    };
    return Hub;
}());

/**
 * Returns the global shim registry.
 *
 * FIXME: This function is problematic, because despite always returning a valid Carrier,
 * it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
 * at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
 **/
function getMainCarrier() {
    var carrier = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__.getGlobalObject)();
    carrier.__SENTRY__ = carrier.__SENTRY__ || {
        extensions: {},
        hub: undefined,
    };
    return carrier;
}
/**
 * Replaces the current main hub with the passed one on the global object
 *
 * @returns The old replaced hub
 */
function makeMain(hub) {
    var registry = getMainCarrier();
    var oldHub = getHubFromCarrier(registry);
    setHubOnCarrier(registry, hub);
    return oldHub;
}
/**
 * Returns the default hub instance.
 *
 * If a hub is already registered in the global carrier but this module
 * contains a more recent version, it replaces the registered version.
 * Otherwise, the currently registered hub will be returned.
 */
function getCurrentHub() {
    // Get main carrier (global for every environment)
    var registry = getMainCarrier();
    // If there's no hub, or its an old API, assign a new one
    if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
        setHubOnCarrier(registry, new Hub());
    }
    // Prefer domains over global if they are there (applicable only to Node environment)
    if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_8__.isNodeEnv)()) {
        return getHubFromActiveDomain(registry);
    }
    // Return hub that lives on a global object
    return getHubFromCarrier(registry);
}
/**
 * Returns the active domain, if one exists
 * @deprecated No longer used; remove in v7
 * @returns The domain, or undefined if there is no active domain
 */
// eslint-disable-next-line deprecation/deprecation
function getActiveDomain() {
    _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.warn('Function `getActiveDomain` is deprecated and will be removed in a future version.');
    var sentry = getMainCarrier().__SENTRY__;
    return sentry && sentry.extensions && sentry.extensions.domain && sentry.extensions.domain.active;
}
/**
 * Try to read the hub from an active domain, and fallback to the registry if one doesn't exist
 * @returns discovered hub
 */
function getHubFromActiveDomain(registry) {
    var _a, _b, _c;
    try {
        var activeDomain = (_c = (_b = (_a = getMainCarrier().__SENTRY__) === null || _a === void 0 ? void 0 : _a.extensions) === null || _b === void 0 ? void 0 : _b.domain) === null || _c === void 0 ? void 0 : _c.active;
        // If there's no active domain, just return global hub
        if (!activeDomain) {
            return getHubFromCarrier(registry);
        }
        // If there's no hub on current domain, or it's an old API, assign a new one
        if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
            var registryHubTopStack = getHubFromCarrier(registry).getStackTop();
            setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, _scope__WEBPACK_IMPORTED_MODULE_0__.Scope.clone(registryHubTopStack.scope)));
        }
        // Return hub that lives on a domain
        return getHubFromCarrier(activeDomain);
    }
    catch (_Oo) {
        // Return hub that lives on a global object
        return getHubFromCarrier(registry);
    }
}
/**
 * This will tell whether a carrier has a hub on it or not
 * @param carrier object
 */
function hasHubOnCarrier(carrier) {
    return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
}
/**
 * This will create a new {@link Hub} and add to the passed object on
 * __SENTRY__.hub.
 * @param carrier object
 * @hidden
 */
function getHubFromCarrier(carrier) {
    if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub)
        return carrier.__SENTRY__.hub;
    carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    carrier.__SENTRY__.hub = new Hub();
    return carrier.__SENTRY__.hub;
}
/**
 * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
 * @param carrier object
 * @param hub Hub
 * @returns A boolean indicating success or failure
 */
function setHubOnCarrier(carrier, hub) {
    if (!carrier)
        return false;
    carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    carrier.__SENTRY__.hub = hub;
    return true;
}
//# sourceMappingURL=hub.js.map

/***/ }),

/***/ "./node_modules/@sentry/hub/esm/scope.js":
/*!***********************************************!*\
  !*** ./node_modules/@sentry/hub/esm/scope.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scope": () => (/* binding */ Scope),
/* harmony export */   "addGlobalEventProcessor": () => (/* binding */ addGlobalEventProcessor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/time.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/syncpromise.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/global.js");


/**
 * Absolute maximum number of breadcrumbs added to an event.
 * The `maxBreadcrumbs` option cannot be higher than this value.
 */
var MAX_BREADCRUMBS = 100;
/**
 * Holds additional event information. {@link Scope.applyToEvent} will be
 * called by the client before an event will be sent.
 */
var Scope = /** @class */ (function () {
    function Scope() {
        /** Flag if notifying is happening. */
        this._notifyingListeners = false;
        /** Callback for client to receive scope changes. */
        this._scopeListeners = [];
        /** Callback list that will be called after {@link applyToEvent}. */
        this._eventProcessors = [];
        /** Array of breadcrumbs. */
        this._breadcrumbs = [];
        /** User */
        this._user = {};
        /** Tags */
        this._tags = {};
        /** Extra */
        this._extra = {};
        /** Contexts */
        this._contexts = {};
    }
    /**
     * Inherit values from the parent scope.
     * @param scope to clone.
     */
    Scope.clone = function (scope) {
        var newScope = new Scope();
        if (scope) {
            newScope._breadcrumbs = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(scope._breadcrumbs);
            newScope._tags = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, scope._tags);
            newScope._extra = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, scope._extra);
            newScope._contexts = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, scope._contexts);
            newScope._user = scope._user;
            newScope._level = scope._level;
            newScope._span = scope._span;
            newScope._session = scope._session;
            newScope._transactionName = scope._transactionName;
            newScope._fingerprint = scope._fingerprint;
            newScope._eventProcessors = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(scope._eventProcessors);
            newScope._requestSession = scope._requestSession;
        }
        return newScope;
    };
    /**
     * Add internal on change listener. Used for sub SDKs that need to store the scope.
     * @hidden
     */
    Scope.prototype.addScopeListener = function (callback) {
        this._scopeListeners.push(callback);
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.addEventProcessor = function (callback) {
        this._eventProcessors.push(callback);
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setUser = function (user) {
        this._user = user || {};
        if (this._session) {
            this._session.update({ user: user });
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getUser = function () {
        return this._user;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getRequestSession = function () {
        return this._requestSession;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setRequestSession = function (requestSession) {
        this._requestSession = requestSession;
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTags = function (tags) {
        this._tags = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._tags), tags);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTag = function (key, value) {
        var _a;
        this._tags = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._tags), (_a = {}, _a[key] = value, _a));
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setExtras = function (extras) {
        this._extra = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._extra), extras);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setExtra = function (key, extra) {
        var _a;
        this._extra = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._extra), (_a = {}, _a[key] = extra, _a));
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setFingerprint = function (fingerprint) {
        this._fingerprint = fingerprint;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setLevel = function (level) {
        this._level = level;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTransactionName = function (name) {
        this._transactionName = name;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * Can be removed in major version.
     * @deprecated in favor of {@link this.setTransactionName}
     */
    Scope.prototype.setTransaction = function (name) {
        return this.setTransactionName(name);
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setContext = function (key, context) {
        var _a;
        if (context === null) {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete this._contexts[key];
        }
        else {
            this._contexts = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._contexts), (_a = {}, _a[key] = context, _a));
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setSpan = function (span) {
        this._span = span;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getSpan = function () {
        return this._span;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getTransaction = function () {
        var _a, _b, _c, _d;
        // often, this span will be a transaction, but it's not guaranteed to be
        var span = this.getSpan();
        // try it the new way first
        if ((_a = span) === null || _a === void 0 ? void 0 : _a.transaction) {
            return (_b = span) === null || _b === void 0 ? void 0 : _b.transaction;
        }
        // fallback to the old way (known bug: this only finds transactions with sampled = true)
        if ((_d = (_c = span) === null || _c === void 0 ? void 0 : _c.spanRecorder) === null || _d === void 0 ? void 0 : _d.spans[0]) {
            return span.spanRecorder.spans[0];
        }
        // neither way found a transaction
        return undefined;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setSession = function (session) {
        if (!session) {
            delete this._session;
        }
        else {
            this._session = session;
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getSession = function () {
        return this._session;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.update = function (captureContext) {
        if (!captureContext) {
            return this;
        }
        if (typeof captureContext === 'function') {
            var updatedScope = captureContext(this);
            return updatedScope instanceof Scope ? updatedScope : this;
        }
        if (captureContext instanceof Scope) {
            this._tags = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._tags), captureContext._tags);
            this._extra = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._extra), captureContext._extra);
            this._contexts = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._contexts), captureContext._contexts);
            if (captureContext._user && Object.keys(captureContext._user).length) {
                this._user = captureContext._user;
            }
            if (captureContext._level) {
                this._level = captureContext._level;
            }
            if (captureContext._fingerprint) {
                this._fingerprint = captureContext._fingerprint;
            }
            if (captureContext._requestSession) {
                this._requestSession = captureContext._requestSession;
            }
        }
        else if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(captureContext)) {
            // eslint-disable-next-line no-param-reassign
            captureContext = captureContext;
            this._tags = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._tags), captureContext.tags);
            this._extra = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._extra), captureContext.extra);
            this._contexts = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._contexts), captureContext.contexts);
            if (captureContext.user) {
                this._user = captureContext.user;
            }
            if (captureContext.level) {
                this._level = captureContext.level;
            }
            if (captureContext.fingerprint) {
                this._fingerprint = captureContext.fingerprint;
            }
            if (captureContext.requestSession) {
                this._requestSession = captureContext.requestSession;
            }
        }
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.clear = function () {
        this._breadcrumbs = [];
        this._tags = {};
        this._extra = {};
        this._user = {};
        this._contexts = {};
        this._level = undefined;
        this._transactionName = undefined;
        this._fingerprint = undefined;
        this._requestSession = undefined;
        this._span = undefined;
        this._session = undefined;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.addBreadcrumb = function (breadcrumb, maxBreadcrumbs) {
        var maxCrumbs = typeof maxBreadcrumbs === 'number' ? Math.min(maxBreadcrumbs, MAX_BREADCRUMBS) : MAX_BREADCRUMBS;
        // No data has been changed, so don't notify scope listeners
        if (maxCrumbs <= 0) {
            return this;
        }
        var mergedBreadcrumb = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ timestamp: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.dateTimestampInSeconds)() }, breadcrumb);
        this._breadcrumbs = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(this._breadcrumbs, [mergedBreadcrumb]).slice(-maxCrumbs);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.clearBreadcrumbs = function () {
        this._breadcrumbs = [];
        this._notifyScopeListeners();
        return this;
    };
    /**
     * Applies the current context and fingerprint to the event.
     * Note that breadcrumbs will be added by the client.
     * Also if the event has already breadcrumbs on it, we do not merge them.
     * @param event Event
     * @param hint May contain additional information about the original exception.
     * @hidden
     */
    Scope.prototype.applyToEvent = function (event, hint) {
        var _a;
        if (this._extra && Object.keys(this._extra).length) {
            event.extra = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._extra), event.extra);
        }
        if (this._tags && Object.keys(this._tags).length) {
            event.tags = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._tags), event.tags);
        }
        if (this._user && Object.keys(this._user).length) {
            event.user = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._user), event.user);
        }
        if (this._contexts && Object.keys(this._contexts).length) {
            event.contexts = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._contexts), event.contexts);
        }
        if (this._level) {
            event.level = this._level;
        }
        if (this._transactionName) {
            event.transaction = this._transactionName;
        }
        // We want to set the trace context for normal events only if there isn't already
        // a trace context on the event. There is a product feature in place where we link
        // errors with transaction and it relies on that.
        if (this._span) {
            event.contexts = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ trace: this._span.getTraceContext() }, event.contexts);
            var transactionName = (_a = this._span.transaction) === null || _a === void 0 ? void 0 : _a.name;
            if (transactionName) {
                event.tags = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ transaction: transactionName }, event.tags);
            }
        }
        this._applyFingerprint(event);
        event.breadcrumbs = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)((event.breadcrumbs || []), this._breadcrumbs);
        event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : undefined;
        return this._notifyEventProcessors((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(getGlobalEventProcessors(), this._eventProcessors), event, hint);
    };
    /**
     * This will be called after {@link applyToEvent} is finished.
     */
    Scope.prototype._notifyEventProcessors = function (processors, event, hint, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        return new _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.SyncPromise(function (resolve, reject) {
            var processor = processors[index];
            if (event === null || typeof processor !== 'function') {
                resolve(event);
            }
            else {
                var result = processor((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, event), hint);
                if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.isThenable)(result)) {
                    void result
                        .then(function (final) { return _this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve); })
                        .then(null, reject);
                }
                else {
                    void _this._notifyEventProcessors(processors, result, hint, index + 1)
                        .then(resolve)
                        .then(null, reject);
                }
            }
        });
    };
    /**
     * This will be called on every set call.
     */
    Scope.prototype._notifyScopeListeners = function () {
        var _this = this;
        // We need this check for this._notifyingListeners to be able to work on scope during updates
        // If this check is not here we'll produce endless recursion when something is done with the scope
        // during the callback.
        if (!this._notifyingListeners) {
            this._notifyingListeners = true;
            this._scopeListeners.forEach(function (callback) {
                callback(_this);
            });
            this._notifyingListeners = false;
        }
    };
    /**
     * Applies fingerprint from the scope to the event if there's one,
     * uses message if there's one instead or get rid of empty fingerprint
     */
    Scope.prototype._applyFingerprint = function (event) {
        // Make sure it's an array first and we actually have something in place
        event.fingerprint = event.fingerprint
            ? Array.isArray(event.fingerprint)
                ? event.fingerprint
                : [event.fingerprint]
            : [];
        // If we have something on the scope, then merge it with event
        if (this._fingerprint) {
            event.fingerprint = event.fingerprint.concat(this._fingerprint);
        }
        // If we have no data at all, remove empty array default
        if (event.fingerprint && !event.fingerprint.length) {
            delete event.fingerprint;
        }
    };
    return Scope;
}());

/**
 * Returns the global event processors.
 */
function getGlobalEventProcessors() {
    /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access  */
    var global = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.getGlobalObject)();
    global.__SENTRY__ = global.__SENTRY__ || {};
    global.__SENTRY__.globalEventProcessors = global.__SENTRY__.globalEventProcessors || [];
    return global.__SENTRY__.globalEventProcessors;
    /* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */
}
/**
 * Add a EventProcessor to be kept globally.
 * @param callback EventProcessor to add
 */
function addGlobalEventProcessor(callback) {
    getGlobalEventProcessors().push(callback);
}
//# sourceMappingURL=scope.js.map

/***/ }),

/***/ "./node_modules/@sentry/hub/esm/session.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/hub/esm/session.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Session": () => (/* binding */ Session)
/* harmony export */ });
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/session.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/misc.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/time.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/object.js");


/**
 * @inheritdoc
 */
var Session = /** @class */ (function () {
    function Session(context) {
        this.errors = 0;
        this.sid = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.uuid4)();
        this.duration = 0;
        this.status = _sentry_types__WEBPACK_IMPORTED_MODULE_1__.SessionStatus.Ok;
        this.init = true;
        this.ignoreDuration = false;
        // Both timestamp and started are in seconds since the UNIX epoch.
        var startingTime = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.timestampInSeconds)();
        this.timestamp = startingTime;
        this.started = startingTime;
        if (context) {
            this.update(context);
        }
    }
    /** JSDoc */
    // eslint-disable-next-line complexity
    Session.prototype.update = function (context) {
        if (context === void 0) { context = {}; }
        if (context.user) {
            if (!this.ipAddress && context.user.ip_address) {
                this.ipAddress = context.user.ip_address;
            }
            if (!this.did && !context.did) {
                this.did = context.user.id || context.user.email || context.user.username;
            }
        }
        this.timestamp = context.timestamp || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.timestampInSeconds)();
        if (context.ignoreDuration) {
            this.ignoreDuration = context.ignoreDuration;
        }
        if (context.sid) {
            // Good enough uuid validation. — Kamil
            this.sid = context.sid.length === 32 ? context.sid : (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.uuid4)();
        }
        if (context.init !== undefined) {
            this.init = context.init;
        }
        if (!this.did && context.did) {
            this.did = "" + context.did;
        }
        if (typeof context.started === 'number') {
            this.started = context.started;
        }
        if (this.ignoreDuration) {
            this.duration = undefined;
        }
        else if (typeof context.duration === 'number') {
            this.duration = context.duration;
        }
        else {
            var duration = this.timestamp - this.started;
            this.duration = duration >= 0 ? duration : 0;
        }
        if (context.release) {
            this.release = context.release;
        }
        if (context.environment) {
            this.environment = context.environment;
        }
        if (!this.ipAddress && context.ipAddress) {
            this.ipAddress = context.ipAddress;
        }
        if (!this.userAgent && context.userAgent) {
            this.userAgent = context.userAgent;
        }
        if (typeof context.errors === 'number') {
            this.errors = context.errors;
        }
        if (context.status) {
            this.status = context.status;
        }
    };
    /** JSDoc */
    Session.prototype.close = function (status) {
        if (status) {
            this.update({ status: status });
        }
        else if (this.status === _sentry_types__WEBPACK_IMPORTED_MODULE_1__.SessionStatus.Ok) {
            this.update({ status: _sentry_types__WEBPACK_IMPORTED_MODULE_1__.SessionStatus.Exited });
        }
        else {
            this.update();
        }
    };
    /** JSDoc */
    Session.prototype.toJSON = function () {
        return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.dropUndefinedKeys)({
            sid: "" + this.sid,
            init: this.init,
            // Make sure that sec is converted to ms for date constructor
            started: new Date(this.started * 1000).toISOString(),
            timestamp: new Date(this.timestamp * 1000).toISOString(),
            status: this.status,
            errors: this.errors,
            did: typeof this.did === 'number' || typeof this.did === 'string' ? "" + this.did : undefined,
            duration: this.duration,
            attrs: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.dropUndefinedKeys)({
                release: this.release,
                environment: this.environment,
                ip_address: this.ipAddress,
                user_agent: this.userAgent,
            }),
        });
    };
    return Session;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ "./node_modules/@sentry/minimal/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/minimal/esm/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "captureException": () => (/* binding */ captureException),
/* harmony export */   "captureMessage": () => (/* binding */ captureMessage),
/* harmony export */   "captureEvent": () => (/* binding */ captureEvent),
/* harmony export */   "configureScope": () => (/* binding */ configureScope),
/* harmony export */   "addBreadcrumb": () => (/* binding */ addBreadcrumb),
/* harmony export */   "setContext": () => (/* binding */ setContext),
/* harmony export */   "setExtras": () => (/* binding */ setExtras),
/* harmony export */   "setTags": () => (/* binding */ setTags),
/* harmony export */   "setExtra": () => (/* binding */ setExtra),
/* harmony export */   "setTag": () => (/* binding */ setTag),
/* harmony export */   "setUser": () => (/* binding */ setUser),
/* harmony export */   "withScope": () => (/* binding */ withScope),
/* harmony export */   "_callOnClient": () => (/* binding */ _callOnClient),
/* harmony export */   "startTransaction": () => (/* binding */ startTransaction)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/hub.js");


/**
 * This calls a function on the current hub.
 * @param method function to call on hub.
 * @param args to pass to function.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function callOnHub(method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var hub = (0,_sentry_hub__WEBPACK_IMPORTED_MODULE_0__.getCurrentHub)();
    if (hub && hub[method]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return hub[method].apply(hub, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spread)(args));
    }
    throw new Error("No hub defined or " + method + " was not found on the hub, please open a bug report.");
}
/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception An exception-like object.
 * @returns The generated eventId.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function captureException(exception, captureContext) {
    var syntheticException;
    try {
        throw new Error('Sentry syntheticException');
    }
    catch (exception) {
        syntheticException = exception;
    }
    return callOnHub('captureException', exception, {
        captureContext: captureContext,
        originalException: exception,
        syntheticException: syntheticException,
    });
}
/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param level Define the level of the message.
 * @returns The generated eventId.
 */
function captureMessage(message, captureContext) {
    var syntheticException;
    try {
        throw new Error(message);
    }
    catch (exception) {
        syntheticException = exception;
    }
    // This is necessary to provide explicit scopes upgrade, without changing the original
    // arity of the `captureMessage(message, level)` method.
    var level = typeof captureContext === 'string' ? captureContext : undefined;
    var context = typeof captureContext !== 'string' ? { captureContext: captureContext } : undefined;
    return callOnHub('captureMessage', message, level, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ originalException: message, syntheticException: syntheticException }, context));
}
/**
 * Captures a manually created event and sends it to Sentry.
 *
 * @param event The event to send to Sentry.
 * @returns The generated eventId.
 */
function captureEvent(event) {
    return callOnHub('captureEvent', event);
}
/**
 * Callback to set context information onto the scope.
 * @param callback Callback function that receives Scope.
 */
function configureScope(callback) {
    callOnHub('configureScope', callback);
}
/**
 * Records a new breadcrumb which will be attached to future events.
 *
 * Breadcrumbs will be added to subsequent events to provide more context on
 * user's actions prior to an error or crash.
 *
 * @param breadcrumb The breadcrumb to record.
 */
function addBreadcrumb(breadcrumb) {
    callOnHub('addBreadcrumb', breadcrumb);
}
/**
 * Sets context data with the given name.
 * @param name of the context
 * @param context Any kind of data. This data will be normalized.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setContext(name, context) {
    callOnHub('setContext', name, context);
}
/**
 * Set an object that will be merged sent as extra data with the event.
 * @param extras Extras object to merge into current context.
 */
function setExtras(extras) {
    callOnHub('setExtras', extras);
}
/**
 * Set an object that will be merged sent as tags data with the event.
 * @param tags Tags context object to merge into current context.
 */
function setTags(tags) {
    callOnHub('setTags', tags);
}
/**
 * Set key:value that will be sent as extra data with the event.
 * @param key String of extra
 * @param extra Any kind of data. This data will be normalized.
 */
function setExtra(key, extra) {
    callOnHub('setExtra', key, extra);
}
/**
 * Set key:value that will be sent as tags data with the event.
 *
 * Can also be used to unset a tag, by passing `undefined`.
 *
 * @param key String key of tag
 * @param value Value of tag
 */
function setTag(key, value) {
    callOnHub('setTag', key, value);
}
/**
 * Updates user context information for future events.
 *
 * @param user User context object to be set in the current context. Pass `null` to unset the user.
 */
function setUser(user) {
    callOnHub('setUser', user);
}
/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 *
 * This is essentially a convenience function for:
 *
 *     pushScope();
 *     callback();
 *     popScope();
 *
 * @param callback that will be enclosed into push/popScope.
 */
function withScope(callback) {
    callOnHub('withScope', callback);
}
/**
 * Calls a function on the latest client. Use this with caution, it's meant as
 * in "internal" helper so we don't need to expose every possible function in
 * the shim. It is not guaranteed that the client actually implements the
 * function.
 *
 * @param method The method to call on the client/client.
 * @param args Arguments to pass to the client/fontend.
 * @hidden
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _callOnClient(method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    callOnHub.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spread)(['_invokeClient', method], args));
}
/**
 * Starts a new `Transaction` and returns it. This is the entry point to manual tracing instrumentation.
 *
 * A tree structure can be built by adding child spans to the transaction, and child spans to other spans. To start a
 * new child span within the transaction or any span, call the respective `.startChild()` method.
 *
 * Every child span must be finished before the transaction is finished, otherwise the unfinished spans are discarded.
 *
 * The transaction must be finished with a call to its `.finish()` method, at which point the transaction with all its
 * finished child spans will be sent to Sentry.
 *
 * @param context Properties of the new `Transaction`.
 * @param customSamplingContext Information given to the transaction sampling function (along with context-dependent
 * default values). See {@link Options.tracesSampler}.
 *
 * @returns The transaction which was just started
 */
function startTransaction(context, customSamplingContext) {
    return callOnHub('startTransaction', (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, context), customSamplingContext);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/backgroundtab.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/backgroundtab.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerBackgroundTabDetection": () => (/* binding */ registerBackgroundTabDetection)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./node_modules/@sentry/tracing/esm/constants.js");
/* harmony import */ var _spanstatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spanstatus */ "./node_modules/@sentry/tracing/esm/spanstatus.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/@sentry/tracing/esm/utils.js");




var global = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
/**
 * Add a listener that cancels and finishes a transaction when the global
 * document is hidden.
 */
function registerBackgroundTabDetection() {
    if (global && global.document) {
        global.document.addEventListener('visibilitychange', function () {
            var activeTransaction = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getActiveTransaction)();
            if (global.document.hidden && activeTransaction) {
                _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.log("[Tracing] Transaction: " + _spanstatus__WEBPACK_IMPORTED_MODULE_3__.SpanStatus.Cancelled + " -> since tab moved to the background, op: " + activeTransaction.op);
                // We should not set status if it is already set, this prevent important statuses like
                // error or data loss from being overwritten on transaction.
                if (!activeTransaction.status) {
                    activeTransaction.setStatus(_spanstatus__WEBPACK_IMPORTED_MODULE_3__.SpanStatus.Cancelled);
                }
                activeTransaction.setTag('visibilitychange', 'document.hidden');
                activeTransaction.setTag(_constants__WEBPACK_IMPORTED_MODULE_4__.FINISH_REASON_TAG, _constants__WEBPACK_IMPORTED_MODULE_4__.IDLE_TRANSACTION_FINISH_REASONS[2]);
                activeTransaction.finish();
            }
        });
    }
    else {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.warn('[Tracing] Could not set up background tab detection due to lack of global document');
    }
}
//# sourceMappingURL=backgroundtab.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/browsertracing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/browsertracing.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_MAX_TRANSACTION_DURATION_SECONDS": () => (/* binding */ DEFAULT_MAX_TRANSACTION_DURATION_SECONDS),
/* harmony export */   "BrowserTracing": () => (/* binding */ BrowserTracing),
/* harmony export */   "getHeaderContext": () => (/* binding */ getHeaderContext),
/* harmony export */   "getMetaContent": () => (/* binding */ getMetaContent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _hubextensions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hubextensions */ "./node_modules/@sentry/tracing/esm/hubextensions.js");
/* harmony import */ var _idletransaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../idletransaction */ "./node_modules/@sentry/tracing/esm/idletransaction.js");
/* harmony import */ var _spanstatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../spanstatus */ "./node_modules/@sentry/tracing/esm/spanstatus.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./node_modules/@sentry/tracing/esm/utils.js");
/* harmony import */ var _backgroundtab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./backgroundtab */ "./node_modules/@sentry/tracing/esm/browser/backgroundtab.js");
/* harmony import */ var _metrics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metrics */ "./node_modules/@sentry/tracing/esm/browser/metrics.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request */ "./node_modules/@sentry/tracing/esm/browser/request.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./node_modules/@sentry/tracing/esm/browser/router.js");










var DEFAULT_MAX_TRANSACTION_DURATION_SECONDS = 600;
var DEFAULT_BROWSER_TRACING_OPTIONS = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ idleTimeout: _idletransaction__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_IDLE_TIMEOUT, markBackgroundTransactions: true, maxTransactionDuration: DEFAULT_MAX_TRANSACTION_DURATION_SECONDS, routingInstrumentation: _router__WEBPACK_IMPORTED_MODULE_2__.instrumentRoutingWithDefaults, startTransactionOnLocationChange: true, startTransactionOnPageLoad: true }, _request__WEBPACK_IMPORTED_MODULE_3__.defaultRequestInstrumentationOptions);
/**
 * The Browser Tracing integration automatically instruments browser pageload/navigation
 * actions as transactions, and captures requests, metrics and errors as spans.
 *
 * The integration can be configured with a variety of options, and can be extended to use
 * any routing library. This integration uses {@see IdleTransaction} to create transactions.
 */
var BrowserTracing = /** @class */ (function () {
    function BrowserTracing(_options) {
        /**
         * @inheritDoc
         */
        this.name = BrowserTracing.id;
        this._emitOptionsWarning = false;
        /** Store configured idle timeout so that it can be added as a tag to transactions */
        this._configuredIdleTimeout = undefined;
        var tracingOrigins = _request__WEBPACK_IMPORTED_MODULE_3__.defaultRequestInstrumentationOptions.tracingOrigins;
        // NOTE: Logger doesn't work in constructors, as it's initialized after integrations instances
        if (_options) {
            this._configuredIdleTimeout = _options.idleTimeout;
            if (_options.tracingOrigins && Array.isArray(_options.tracingOrigins) && _options.tracingOrigins.length !== 0) {
                tracingOrigins = _options.tracingOrigins;
            }
            else {
                this._emitOptionsWarning = true;
            }
        }
        this.options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, DEFAULT_BROWSER_TRACING_OPTIONS), _options), { tracingOrigins: tracingOrigins });
        var _metricOptions = this.options._metricOptions;
        this._metrics = new _metrics__WEBPACK_IMPORTED_MODULE_4__.MetricsInstrumentation(_metricOptions && _metricOptions._reportAllChanges);
    }
    /**
     * @inheritDoc
     */
    BrowserTracing.prototype.setupOnce = function (_, getCurrentHub) {
        var _this = this;
        this._getCurrentHub = getCurrentHub;
        if (this._emitOptionsWarning) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_5__.logger.warn('[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace.');
            _sentry_utils__WEBPACK_IMPORTED_MODULE_5__.logger.warn("[Tracing] We added a reasonable default for you: " + _request__WEBPACK_IMPORTED_MODULE_3__.defaultRequestInstrumentationOptions.tracingOrigins);
        }
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _a = this.options, instrumentRouting = _a.routingInstrumentation, startTransactionOnLocationChange = _a.startTransactionOnLocationChange, startTransactionOnPageLoad = _a.startTransactionOnPageLoad, markBackgroundTransactions = _a.markBackgroundTransactions, traceFetch = _a.traceFetch, traceXHR = _a.traceXHR, tracingOrigins = _a.tracingOrigins, shouldCreateSpanForRequest = _a.shouldCreateSpanForRequest;
        instrumentRouting(function (context) { return _this._createRouteTransaction(context); }, startTransactionOnPageLoad, startTransactionOnLocationChange);
        if (markBackgroundTransactions) {
            (0,_backgroundtab__WEBPACK_IMPORTED_MODULE_6__.registerBackgroundTabDetection)();
        }
        (0,_request__WEBPACK_IMPORTED_MODULE_3__.instrumentOutgoingRequests)({ traceFetch: traceFetch, traceXHR: traceXHR, tracingOrigins: tracingOrigins, shouldCreateSpanForRequest: shouldCreateSpanForRequest });
    };
    /** Create routing idle transaction. */
    BrowserTracing.prototype._createRouteTransaction = function (context) {
        var _this = this;
        if (!this._getCurrentHub) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_5__.logger.warn("[Tracing] Did not create " + context.op + " transaction because _getCurrentHub is invalid.");
            return undefined;
        }
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _a = this.options, beforeNavigate = _a.beforeNavigate, idleTimeout = _a.idleTimeout, maxTransactionDuration = _a.maxTransactionDuration;
        var parentContextFromHeader = context.op === 'pageload' ? getHeaderContext() : undefined;
        var expandedContext = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, context), parentContextFromHeader), { trimEnd: true });
        var modifiedContext = typeof beforeNavigate === 'function' ? beforeNavigate(expandedContext) : expandedContext;
        // For backwards compatibility reasons, beforeNavigate can return undefined to "drop" the transaction (prevent it
        // from being sent to Sentry).
        var finalContext = modifiedContext === undefined ? (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, expandedContext), { sampled: false }) : modifiedContext;
        if (finalContext.sampled === false) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_5__.logger.log("[Tracing] Will not send " + finalContext.op + " transaction because of beforeNavigate.");
        }
        _sentry_utils__WEBPACK_IMPORTED_MODULE_5__.logger.log("[Tracing] Starting " + finalContext.op + " transaction on scope");
        var hub = this._getCurrentHub();
        var location = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_7__.getGlobalObject)().location;
        var idleTransaction = (0,_hubextensions__WEBPACK_IMPORTED_MODULE_8__.startIdleTransaction)(hub, finalContext, idleTimeout, true, { location: location });
        idleTransaction.registerBeforeFinishCallback(function (transaction, endTimestamp) {
            _this._metrics.addPerformanceEntries(transaction);
            adjustTransactionDuration((0,_utils__WEBPACK_IMPORTED_MODULE_9__.secToMs)(maxTransactionDuration), transaction, endTimestamp);
        });
        idleTransaction.setTag('idleTimeout', this._configuredIdleTimeout);
        return idleTransaction;
    };
    /**
     * @inheritDoc
     */
    BrowserTracing.id = 'BrowserTracing';
    return BrowserTracing;
}());

/**
 * Gets transaction context from a sentry-trace meta.
 *
 * @returns Transaction context data from the header or undefined if there's no header or the header is malformed
 */
function getHeaderContext() {
    var header = getMetaContent('sentry-trace');
    if (header) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_9__.extractTraceparentData)(header);
    }
    return undefined;
}
/** Returns the value of a meta tag */
function getMetaContent(metaName) {
    var el = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_7__.getGlobalObject)().document.querySelector("meta[name=" + metaName + "]");
    return el ? el.getAttribute('content') : null;
}
/** Adjusts transaction value based on max transaction duration */
function adjustTransactionDuration(maxDuration, transaction, endTimestamp) {
    var diff = endTimestamp - transaction.startTimestamp;
    var isOutdatedTransaction = endTimestamp && (diff > maxDuration || diff < 0);
    if (isOutdatedTransaction) {
        transaction.setStatus(_spanstatus__WEBPACK_IMPORTED_MODULE_10__.SpanStatus.DeadlineExceeded);
        transaction.setTag('maxTransactionDurationExceeded', 'true');
    }
}
//# sourceMappingURL=browsertracing.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/metrics.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/metrics.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricsInstrumentation": () => (/* binding */ MetricsInstrumentation),
/* harmony export */   "addResourceSpans": () => (/* binding */ addResourceSpans),
/* harmony export */   "_startChild": () => (/* binding */ _startChild)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/node.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/time.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/browser.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./node_modules/@sentry/tracing/esm/utils.js");
/* harmony import */ var _web_vitals_getCLS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web-vitals/getCLS */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/getCLS.js");
/* harmony import */ var _web_vitals_getFID__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web-vitals/getFID */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/getFID.js");
/* harmony import */ var _web_vitals_getLCP__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web-vitals/getLCP */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/getLCP.js");
/* harmony import */ var _web_vitals_lib_getVisibilityWatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web-vitals/lib/getVisibilityWatcher */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/getVisibilityWatcher.js");







var global = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
/** Class tracking metrics  */
var MetricsInstrumentation = /** @class */ (function () {
    function MetricsInstrumentation(_reportAllChanges) {
        if (_reportAllChanges === void 0) { _reportAllChanges = false; }
        var _a, _b;
        this._reportAllChanges = _reportAllChanges;
        this._measurements = {};
        this._performanceCursor = 0;
        if (!(0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.isNodeEnv)() && ((_a = global) === null || _a === void 0 ? void 0 : _a.performance) && ((_b = global) === null || _b === void 0 ? void 0 : _b.document)) {
            if (global.performance.mark) {
                global.performance.mark('sentry-tracing-init');
            }
            this._trackCLS();
            this._trackLCP();
            this._trackFID();
        }
    }
    /** Add performance related spans to a transaction */
    MetricsInstrumentation.prototype.addPerformanceEntries = function (transaction) {
        var _this = this;
        if (!global || !global.performance || !global.performance.getEntries || !_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.browserPerformanceTimeOrigin) {
            // Gatekeeper if performance API not available
            return;
        }
        _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log('[Tracing] Adding & adjusting spans using Performance API');
        var timeOrigin = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.msToSec)(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.browserPerformanceTimeOrigin);
        var entryScriptSrc;
        if (global.document && global.document.scripts) {
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (var i = 0; i < global.document.scripts.length; i++) {
                // We go through all scripts on the page and look for 'data-entry'
                // We remember the name and measure the time between this script finished loading and
                // our mark 'sentry-tracing-init'
                if (global.document.scripts[i].dataset.entry === 'true') {
                    entryScriptSrc = global.document.scripts[i].src;
                    break;
                }
            }
        }
        var entryScriptStartTimestamp;
        var tracingInitMarkStartTime;
        var responseStartTimestamp;
        var requestStartTimestamp;
        global.performance
            .getEntries()
            .slice(this._performanceCursor)
            .forEach(function (entry) {
            var startTime = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.msToSec)(entry.startTime);
            var duration = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.msToSec)(entry.duration);
            if (transaction.op === 'navigation' && timeOrigin + startTime < transaction.startTimestamp) {
                return;
            }
            switch (entry.entryType) {
                case 'navigation': {
                    addNavigationSpans(transaction, entry, timeOrigin);
                    responseStartTimestamp = timeOrigin + (0,_utils__WEBPACK_IMPORTED_MODULE_4__.msToSec)(entry.responseStart);
                    requestStartTimestamp = timeOrigin + (0,_utils__WEBPACK_IMPORTED_MODULE_4__.msToSec)(entry.requestStart);
                    break;
                }
                case 'mark':
                case 'paint':
                case 'measure': {
                    var startTimestamp = addMeasureSpans(transaction, entry, startTime, duration, timeOrigin);
                    if (tracingInitMarkStartTime === undefined && entry.name === 'sentry-tracing-init') {
                        tracingInitMarkStartTime = startTimestamp;
                    }
                    // capture web vitals
                    var firstHidden = (0,_web_vitals_lib_getVisibilityWatcher__WEBPACK_IMPORTED_MODULE_5__.getVisibilityWatcher)();
                    // Only report if the page wasn't hidden prior to the web vital.
                    var shouldRecord = entry.startTime < firstHidden.firstHiddenTime;
                    if (entry.name === 'first-paint' && shouldRecord) {
                        _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log('[Measurements] Adding FP');
                        _this._measurements['fp'] = { value: entry.startTime };
                        _this._measurements['mark.fp'] = { value: startTimestamp };
                    }
                    if (entry.name === 'first-contentful-paint' && shouldRecord) {
                        _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log('[Measurements] Adding FCP');
                        _this._measurements['fcp'] = { value: entry.startTime };
                        _this._measurements['mark.fcp'] = { value: startTimestamp };
                    }
                    break;
                }
                case 'resource': {
                    var resourceName = entry.name.replace(global.location.origin, '');
                    var endTimestamp = addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin);
                    // We remember the entry script end time to calculate the difference to the first init mark
                    if (entryScriptStartTimestamp === undefined && (entryScriptSrc || '').indexOf(resourceName) > -1) {
                        entryScriptStartTimestamp = endTimestamp;
                    }
                    break;
                }
                default:
                // Ignore other entry types.
            }
        });
        if (entryScriptStartTimestamp !== undefined && tracingInitMarkStartTime !== undefined) {
            _startChild(transaction, {
                description: 'evaluation',
                endTimestamp: tracingInitMarkStartTime,
                op: 'script',
                startTimestamp: entryScriptStartTimestamp,
            });
        }
        this._performanceCursor = Math.max(performance.getEntries().length - 1, 0);
        this._trackNavigator(transaction);
        // Measurements are only available for pageload transactions
        if (transaction.op === 'pageload') {
            // normalize applicable web vital values to be relative to transaction.startTimestamp
            var timeOrigin_1 = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.msToSec)(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.browserPerformanceTimeOrigin);
            // Generate TTFB (Time to First Byte), which measured as the time between the beginning of the transaction and the
            // start of the response in milliseconds
            if (typeof responseStartTimestamp === 'number') {
                _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log('[Measurements] Adding TTFB');
                this._measurements['ttfb'] = { value: (responseStartTimestamp - transaction.startTimestamp) * 1000 };
                if (typeof requestStartTimestamp === 'number' && requestStartTimestamp <= responseStartTimestamp) {
                    // Capture the time spent making the request and receiving the first byte of the response.
                    // This is the time between the start of the request and the start of the response in milliseconds.
                    this._measurements['ttfb.requestTime'] = { value: (responseStartTimestamp - requestStartTimestamp) * 1000 };
                }
            }
            ['fcp', 'fp', 'lcp'].forEach(function (name) {
                if (!_this._measurements[name] || timeOrigin_1 >= transaction.startTimestamp) {
                    return;
                }
                // The web vitals, fcp, fp, lcp, and ttfb, all measure relative to timeOrigin.
                // Unfortunately, timeOrigin is not captured within the transaction span data, so these web vitals will need
                // to be adjusted to be relative to transaction.startTimestamp.
                var oldValue = _this._measurements[name].value;
                var measurementTimestamp = timeOrigin_1 + (0,_utils__WEBPACK_IMPORTED_MODULE_4__.msToSec)(oldValue);
                // normalizedValue should be in milliseconds
                var normalizedValue = Math.abs((measurementTimestamp - transaction.startTimestamp) * 1000);
                var delta = normalizedValue - oldValue;
                _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log("[Measurements] Normalized " + name + " from " + oldValue + " to " + normalizedValue + " (" + delta + ")");
                _this._measurements[name].value = normalizedValue;
            });
            if (this._measurements['mark.fid'] && this._measurements['fid']) {
                // create span for FID
                _startChild(transaction, {
                    description: 'first input delay',
                    endTimestamp: this._measurements['mark.fid'].value + (0,_utils__WEBPACK_IMPORTED_MODULE_4__.msToSec)(this._measurements['fid'].value),
                    op: 'web.vitals',
                    startTimestamp: this._measurements['mark.fid'].value,
                });
            }
            // If FCP is not recorded we should not record the cls value
            // according to the new definition of CLS.
            if (!('fcp' in this._measurements)) {
                delete this._measurements.cls;
            }
            transaction.setMeasurements(this._measurements);
            this._tagMetricInfo(transaction);
            transaction.setTag('sentry_reportAllChanges', this._reportAllChanges);
        }
    };
    /** Add LCP / CLS data to transaction to allow debugging */
    MetricsInstrumentation.prototype._tagMetricInfo = function (transaction) {
        if (this._lcpEntry) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log('[Measurements] Adding LCP Data');
            // Capture Properties of the LCP element that contributes to the LCP.
            if (this._lcpEntry.element) {
                transaction.setTag('lcp.element', (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_6__.htmlTreeAsString)(this._lcpEntry.element));
            }
            if (this._lcpEntry.id) {
                transaction.setTag('lcp.id', this._lcpEntry.id);
            }
            if (this._lcpEntry.url) {
                // Trim URL to the first 200 characters.
                transaction.setTag('lcp.url', this._lcpEntry.url.trim().slice(0, 200));
            }
            transaction.setTag('lcp.size', this._lcpEntry.size);
        }
        // See: https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift
        if (this._clsEntry && this._clsEntry.sources) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log('[Measurements] Adding CLS Data');
            this._clsEntry.sources.forEach(function (source, index) {
                return transaction.setTag("cls.source." + (index + 1), (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_6__.htmlTreeAsString)(source.node));
            });
        }
    };
    /** Starts tracking the Cumulative Layout Shift on the current page. */
    MetricsInstrumentation.prototype._trackCLS = function () {
        var _this = this;
        // See:
        // https://web.dev/evolving-cls/
        // https://web.dev/cls-web-tooling/
        (0,_web_vitals_getCLS__WEBPACK_IMPORTED_MODULE_7__.getCLS)(function (metric) {
            var entry = metric.entries.pop();
            if (!entry) {
                return;
            }
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log('[Measurements] Adding CLS');
            _this._measurements['cls'] = { value: metric.value };
            _this._clsEntry = entry;
        });
    };
    /**
     * Capture the information of the user agent.
     */
    MetricsInstrumentation.prototype._trackNavigator = function (transaction) {
        var navigator = global.navigator;
        if (!navigator) {
            return;
        }
        // track network connectivity
        var connection = navigator.connection;
        if (connection) {
            if (connection.effectiveType) {
                transaction.setTag('effectiveConnectionType', connection.effectiveType);
            }
            if (connection.type) {
                transaction.setTag('connectionType', connection.type);
            }
            if (isMeasurementValue(connection.rtt)) {
                this._measurements['connection.rtt'] = { value: connection.rtt };
            }
            if (isMeasurementValue(connection.downlink)) {
                this._measurements['connection.downlink'] = { value: connection.downlink };
            }
        }
        if (isMeasurementValue(navigator.deviceMemory)) {
            transaction.setTag('deviceMemory', String(navigator.deviceMemory));
        }
        if (isMeasurementValue(navigator.hardwareConcurrency)) {
            transaction.setTag('hardwareConcurrency', String(navigator.hardwareConcurrency));
        }
    };
    /** Starts tracking the Largest Contentful Paint on the current page. */
    MetricsInstrumentation.prototype._trackLCP = function () {
        var _this = this;
        (0,_web_vitals_getLCP__WEBPACK_IMPORTED_MODULE_8__.getLCP)(function (metric) {
            var entry = metric.entries.pop();
            if (!entry) {
                return;
            }
            var timeOrigin = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.msToSec)(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.browserPerformanceTimeOrigin);
            var startTime = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.msToSec)(entry.startTime);
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log('[Measurements] Adding LCP');
            _this._measurements['lcp'] = { value: metric.value };
            _this._measurements['mark.lcp'] = { value: timeOrigin + startTime };
            _this._lcpEntry = entry;
        }, this._reportAllChanges);
    };
    /** Starts tracking the First Input Delay on the current page. */
    MetricsInstrumentation.prototype._trackFID = function () {
        var _this = this;
        (0,_web_vitals_getFID__WEBPACK_IMPORTED_MODULE_9__.getFID)(function (metric) {
            var entry = metric.entries.pop();
            if (!entry) {
                return;
            }
            var timeOrigin = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.msToSec)(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.browserPerformanceTimeOrigin);
            var startTime = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.msToSec)(entry.startTime);
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log('[Measurements] Adding FID');
            _this._measurements['fid'] = { value: metric.value };
            _this._measurements['mark.fid'] = { value: timeOrigin + startTime };
        });
    };
    return MetricsInstrumentation;
}());

/** Instrument navigation entries */
function addNavigationSpans(transaction, entry, timeOrigin) {
    addPerformanceNavigationTiming({ transaction: transaction, entry: entry, event: 'unloadEvent', timeOrigin: timeOrigin });
    addPerformanceNavigationTiming({ transaction: transaction, entry: entry, event: 'redirect', timeOrigin: timeOrigin });
    addPerformanceNavigationTiming({ transaction: transaction, entry: entry, event: 'domContentLoadedEvent', timeOrigin: timeOrigin });
    addPerformanceNavigationTiming({ transaction: transaction, entry: entry, event: 'loadEvent', timeOrigin: timeOrigin });
    addPerformanceNavigationTiming({ transaction: transaction, entry: entry, event: 'connect', timeOrigin: timeOrigin });
    addPerformanceNavigationTiming({
        transaction: transaction,
        entry: entry,
        event: 'secureConnection',
        timeOrigin: timeOrigin,
        eventEnd: 'connectEnd',
        description: 'TLS/SSL',
    });
    addPerformanceNavigationTiming({
        transaction: transaction,
        entry: entry,
        event: 'fetch',
        timeOrigin: timeOrigin,
        eventEnd: 'domainLookupStart',
        description: 'cache',
    });
    addPerformanceNavigationTiming({ transaction: transaction, entry: entry, event: 'domainLookup', timeOrigin: timeOrigin, description: 'DNS' });
    addRequest(transaction, entry, timeOrigin);
}
/** Create measure related spans */
function addMeasureSpans(transaction, entry, startTime, duration, timeOrigin) {
    var measureStartTimestamp = timeOrigin + startTime;
    var measureEndTimestamp = measureStartTimestamp + duration;
    _startChild(transaction, {
        description: entry.name,
        endTimestamp: measureEndTimestamp,
        op: entry.entryType,
        startTimestamp: measureStartTimestamp,
    });
    return measureStartTimestamp;
}
/** Create resource-related spans */
function addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin) {
    // we already instrument based on fetch and xhr, so we don't need to
    // duplicate spans here.
    if (entry.initiatorType === 'xmlhttprequest' || entry.initiatorType === 'fetch') {
        return undefined;
    }
    var data = {};
    if ('transferSize' in entry) {
        data['Transfer Size'] = entry.transferSize;
    }
    if ('encodedBodySize' in entry) {
        data['Encoded Body Size'] = entry.encodedBodySize;
    }
    if ('decodedBodySize' in entry) {
        data['Decoded Body Size'] = entry.decodedBodySize;
    }
    var startTimestamp = timeOrigin + startTime;
    var endTimestamp = startTimestamp + duration;
    _startChild(transaction, {
        description: resourceName,
        endTimestamp: endTimestamp,
        op: entry.initiatorType ? "resource." + entry.initiatorType : 'resource',
        startTimestamp: startTimestamp,
        data: data,
    });
    return endTimestamp;
}
/** Create performance navigation related spans */
function addPerformanceNavigationTiming(props) {
    var transaction = props.transaction, entry = props.entry, event = props.event, timeOrigin = props.timeOrigin, eventEnd = props.eventEnd, description = props.description;
    var end = eventEnd ? entry[eventEnd] : entry[event + "End"];
    var start = entry[event + "Start"];
    if (!start || !end) {
        return;
    }
    _startChild(transaction, {
        op: 'browser',
        description: (description !== null && description !== void 0 ? description : event),
        startTimestamp: timeOrigin + (0,_utils__WEBPACK_IMPORTED_MODULE_4__.msToSec)(start),
        endTimestamp: timeOrigin + (0,_utils__WEBPACK_IMPORTED_MODULE_4__.msToSec)(end),
    });
}
/** Create request and response related spans */
function addRequest(transaction, entry, timeOrigin) {
    _startChild(transaction, {
        op: 'browser',
        description: 'request',
        startTimestamp: timeOrigin + (0,_utils__WEBPACK_IMPORTED_MODULE_4__.msToSec)(entry.requestStart),
        endTimestamp: timeOrigin + (0,_utils__WEBPACK_IMPORTED_MODULE_4__.msToSec)(entry.responseEnd),
    });
    _startChild(transaction, {
        op: 'browser',
        description: 'response',
        startTimestamp: timeOrigin + (0,_utils__WEBPACK_IMPORTED_MODULE_4__.msToSec)(entry.responseStart),
        endTimestamp: timeOrigin + (0,_utils__WEBPACK_IMPORTED_MODULE_4__.msToSec)(entry.responseEnd),
    });
}
/**
 * Helper function to start child on transactions. This function will make sure that the transaction will
 * use the start timestamp of the created child span if it is earlier than the transactions actual
 * start timestamp.
 */
function _startChild(transaction, _a) {
    var startTimestamp = _a.startTimestamp, ctx = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__rest)(_a, ["startTimestamp"]);
    if (startTimestamp && transaction.startTimestamp > startTimestamp) {
        transaction.startTimestamp = startTimestamp;
    }
    return transaction.startChild((0,tslib__WEBPACK_IMPORTED_MODULE_10__.__assign)({ startTimestamp: startTimestamp }, ctx));
}
/**
 * Checks if a given value is a valid measurement value.
 */
function isMeasurementValue(value) {
    return typeof value === 'number' && isFinite(value);
}
//# sourceMappingURL=metrics.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/request.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/request.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_TRACING_ORIGINS": () => (/* binding */ DEFAULT_TRACING_ORIGINS),
/* harmony export */   "defaultRequestInstrumentationOptions": () => (/* binding */ defaultRequestInstrumentationOptions),
/* harmony export */   "instrumentOutgoingRequests": () => (/* binding */ instrumentOutgoingRequests),
/* harmony export */   "fetchCallback": () => (/* binding */ fetchCallback),
/* harmony export */   "xhrCallback": () => (/* binding */ xhrCallback)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/string.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/instrument.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _spanstatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spanstatus */ "./node_modules/@sentry/tracing/esm/spanstatus.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/@sentry/tracing/esm/utils.js");




var DEFAULT_TRACING_ORIGINS = ['localhost', /^\//];
var defaultRequestInstrumentationOptions = {
    traceFetch: true,
    traceXHR: true,
    tracingOrigins: DEFAULT_TRACING_ORIGINS,
};
/** Registers span creators for xhr and fetch requests  */
function instrumentOutgoingRequests(_options) {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, defaultRequestInstrumentationOptions), _options), traceFetch = _a.traceFetch, traceXHR = _a.traceXHR, tracingOrigins = _a.tracingOrigins, shouldCreateSpanForRequest = _a.shouldCreateSpanForRequest;
    // We should cache url -> decision so that we don't have to compute
    // regexp everytime we create a request.
    var urlMap = {};
    var defaultShouldCreateSpan = function (url) {
        if (urlMap[url]) {
            return urlMap[url];
        }
        var origins = tracingOrigins;
        urlMap[url] =
            origins.some(function (origin) { return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.isMatchingPattern)(url, origin); }) &&
                !(0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.isMatchingPattern)(url, 'sentry_key');
        return urlMap[url];
    };
    // We want that our users don't have to re-implement shouldCreateSpanForRequest themselves
    // That's why we filter out already unwanted Spans from tracingOrigins
    var shouldCreateSpan = defaultShouldCreateSpan;
    if (typeof shouldCreateSpanForRequest === 'function') {
        shouldCreateSpan = function (url) {
            return defaultShouldCreateSpan(url) && shouldCreateSpanForRequest(url);
        };
    }
    var spans = {};
    if (traceFetch) {
        (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.addInstrumentationHandler)({
            callback: function (handlerData) {
                fetchCallback(handlerData, shouldCreateSpan, spans);
            },
            type: 'fetch',
        });
    }
    if (traceXHR) {
        (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.addInstrumentationHandler)({
            callback: function (handlerData) {
                xhrCallback(handlerData, shouldCreateSpan, spans);
            },
            type: 'xhr',
        });
    }
}
/**
 * Create and track fetch request spans
 */
function fetchCallback(handlerData, shouldCreateSpan, spans) {
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.hasTracingEnabled)() || !(handlerData.fetchData && shouldCreateSpan(handlerData.fetchData.url))) {
        return;
    }
    if (handlerData.endTimestamp && handlerData.fetchData.__span) {
        var span = spans[handlerData.fetchData.__span];
        if (span) {
            if (handlerData.response) {
                // TODO (kmclb) remove this once types PR goes through
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                span.setHttpStatus(handlerData.response.status);
            }
            else if (handlerData.error) {
                span.setStatus(_spanstatus__WEBPACK_IMPORTED_MODULE_4__.SpanStatus.InternalError);
            }
            span.finish();
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete spans[handlerData.fetchData.__span];
        }
        return;
    }
    var activeTransaction = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getActiveTransaction)();
    if (activeTransaction) {
        var span = activeTransaction.startChild({
            data: (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, handlerData.fetchData), { type: 'fetch' }),
            description: handlerData.fetchData.method + " " + handlerData.fetchData.url,
            op: 'http.client',
        });
        handlerData.fetchData.__span = span.spanId;
        spans[span.spanId] = span;
        var request = (handlerData.args[0] = handlerData.args[0]);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var options = (handlerData.args[1] = handlerData.args[1] || {});
        var headers = options.headers;
        if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__.isInstanceOf)(request, Request)) {
            headers = request.headers;
        }
        if (headers) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (typeof headers.append === 'function') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                headers.append('sentry-trace', span.toTraceparent());
            }
            else if (Array.isArray(headers)) {
                headers = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(headers, [['sentry-trace', span.toTraceparent()]]);
            }
            else {
                headers = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, headers), { 'sentry-trace': span.toTraceparent() });
            }
        }
        else {
            headers = { 'sentry-trace': span.toTraceparent() };
        }
        options.headers = headers;
    }
}
/**
 * Create and track xhr request spans
 */
function xhrCallback(handlerData, shouldCreateSpan, spans) {
    var _a, _b;
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.hasTracingEnabled)() || ((_a = handlerData.xhr) === null || _a === void 0 ? void 0 : _a.__sentry_own_request__) ||
        !(((_b = handlerData.xhr) === null || _b === void 0 ? void 0 : _b.__sentry_xhr__) && shouldCreateSpan(handlerData.xhr.__sentry_xhr__.url))) {
        return;
    }
    var xhr = handlerData.xhr.__sentry_xhr__;
    // check first if the request has finished and is tracked by an existing span which should now end
    if (handlerData.endTimestamp && handlerData.xhr.__sentry_xhr_span_id__) {
        var span = spans[handlerData.xhr.__sentry_xhr_span_id__];
        if (span) {
            span.setHttpStatus(xhr.status_code);
            span.finish();
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete spans[handlerData.xhr.__sentry_xhr_span_id__];
        }
        return;
    }
    // if not, create a new span to track it
    var activeTransaction = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getActiveTransaction)();
    if (activeTransaction) {
        var span = activeTransaction.startChild({
            data: (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, xhr.data), { type: 'xhr', method: xhr.method, url: xhr.url }),
            description: xhr.method + " " + xhr.url,
            op: 'http.client',
        });
        handlerData.xhr.__sentry_xhr_span_id__ = span.spanId;
        spans[handlerData.xhr.__sentry_xhr_span_id__] = span;
        if (handlerData.xhr.setRequestHeader) {
            try {
                handlerData.xhr.setRequestHeader('sentry-trace', span.toTraceparent());
            }
            catch (_) {
                // Error: InvalidStateError: Failed to execute 'setRequestHeader' on 'XMLHttpRequest': The object's state must be OPENED.
            }
        }
    }
}
//# sourceMappingURL=request.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/router.js":
/*!************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instrumentRoutingWithDefaults": () => (/* binding */ instrumentRoutingWithDefaults)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/instrument.js");

var global = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
/**
 * Default function implementing pageload and navigation transactions
 */
function instrumentRoutingWithDefaults(customStartTransaction, startTransactionOnPageLoad, startTransactionOnLocationChange) {
    if (startTransactionOnPageLoad === void 0) { startTransactionOnPageLoad = true; }
    if (startTransactionOnLocationChange === void 0) { startTransactionOnLocationChange = true; }
    if (!global || !global.location) {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.logger.warn('Could not initialize routing instrumentation due to invalid location');
        return;
    }
    var startingUrl = global.location.href;
    var activeTransaction;
    if (startTransactionOnPageLoad) {
        activeTransaction = customStartTransaction({ name: global.location.pathname, op: 'pageload' });
    }
    if (startTransactionOnLocationChange) {
        (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.addInstrumentationHandler)({
            callback: function (_a) {
                var to = _a.to, from = _a.from;
                /**
                 * This early return is there to account for some cases where a navigation transaction starts right after
                 * long-running pageload. We make sure that if `from` is undefined and a valid `startingURL` exists, we don't
                 * create an uneccessary navigation transaction.
                 *
                 * This was hard to duplicate, but this behavior stopped as soon as this fix was applied. This issue might also
                 * only be caused in certain development environments where the usage of a hot module reloader is causing
                 * errors.
                 */
                if (from === undefined && startingUrl && startingUrl.indexOf(to) !== -1) {
                    startingUrl = undefined;
                    return;
                }
                if (from !== to) {
                    startingUrl = undefined;
                    if (activeTransaction) {
                        _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.logger.log("[Tracing] Finishing current transaction with op: " + activeTransaction.op);
                        // If there's an open transaction on the scope, we need to finish it before creating an new one.
                        activeTransaction.finish();
                    }
                    activeTransaction = customStartTransaction({ name: global.location.pathname, op: 'navigation' });
                }
            },
            type: 'history',
        });
    }
}
//# sourceMappingURL=router.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/web-vitals/getCLS.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/web-vitals/getCLS.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCLS": () => (/* binding */ getCLS)
/* harmony export */ });
/* harmony import */ var _lib_bindReporter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/bindReporter */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/bindReporter.js");
/* harmony import */ var _lib_initMetric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/initMetric */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/initMetric.js");
/* harmony import */ var _lib_observe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/observe */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/observe.js");
/* harmony import */ var _lib_onHidden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/onHidden */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/onHidden.js");
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var getCLS = function (onReport, reportAllChanges) {
    var metric = (0,_lib_initMetric__WEBPACK_IMPORTED_MODULE_0__.initMetric)('CLS', 0);
    var report;
    var sessionValue = 0;
    var sessionEntries = [];
    var entryHandler = function (entry) {
        // Only count layout shifts without recent user input.
        // TODO: Figure out why entry can be undefined
        if (entry && !entry.hadRecentInput) {
            var firstSessionEntry = sessionEntries[0];
            var lastSessionEntry = sessionEntries[sessionEntries.length - 1];
            // If the entry occurred less than 1 second after the previous entry and
            // less than 5 seconds after the first entry in the session, include the
            // entry in the current session. Otherwise, start a new session.
            if (sessionValue &&
                sessionEntries.length !== 0 &&
                entry.startTime - lastSessionEntry.startTime < 1000 &&
                entry.startTime - firstSessionEntry.startTime < 5000) {
                sessionValue += entry.value;
                sessionEntries.push(entry);
            }
            else {
                sessionValue = entry.value;
                sessionEntries = [entry];
            }
            // If the current session value is larger than the current CLS value,
            // update CLS and the entries contributing to it.
            if (sessionValue > metric.value) {
                metric.value = sessionValue;
                metric.entries = sessionEntries;
                if (report) {
                    report();
                }
            }
        }
    };
    var po = (0,_lib_observe__WEBPACK_IMPORTED_MODULE_1__.observe)('layout-shift', entryHandler);
    if (po) {
        report = (0,_lib_bindReporter__WEBPACK_IMPORTED_MODULE_2__.bindReporter)(onReport, metric, reportAllChanges);
        (0,_lib_onHidden__WEBPACK_IMPORTED_MODULE_3__.onHidden)(function () {
            po.takeRecords().map(entryHandler);
            report(true);
        });
    }
};
//# sourceMappingURL=getCLS.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/web-vitals/getFID.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/web-vitals/getFID.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFID": () => (/* binding */ getFID)
/* harmony export */ });
/* harmony import */ var _lib_bindReporter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/bindReporter */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/bindReporter.js");
/* harmony import */ var _lib_getVisibilityWatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/getVisibilityWatcher */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/getVisibilityWatcher.js");
/* harmony import */ var _lib_initMetric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/initMetric */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/initMetric.js");
/* harmony import */ var _lib_observe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/observe */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/observe.js");
/* harmony import */ var _lib_onHidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/onHidden */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/onHidden.js");
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var getFID = function (onReport, reportAllChanges) {
    var visibilityWatcher = (0,_lib_getVisibilityWatcher__WEBPACK_IMPORTED_MODULE_0__.getVisibilityWatcher)();
    var metric = (0,_lib_initMetric__WEBPACK_IMPORTED_MODULE_1__.initMetric)('FID');
    var report;
    var entryHandler = function (entry) {
        // Only report if the page wasn't hidden prior to the first input.
        if (report && entry.startTime < visibilityWatcher.firstHiddenTime) {
            metric.value = entry.processingStart - entry.startTime;
            metric.entries.push(entry);
            report(true);
        }
    };
    var po = (0,_lib_observe__WEBPACK_IMPORTED_MODULE_2__.observe)('first-input', entryHandler);
    if (po) {
        report = (0,_lib_bindReporter__WEBPACK_IMPORTED_MODULE_3__.bindReporter)(onReport, metric, reportAllChanges);
        (0,_lib_onHidden__WEBPACK_IMPORTED_MODULE_4__.onHidden)(function () {
            po.takeRecords().map(entryHandler);
            po.disconnect();
        }, true);
    }
};
//# sourceMappingURL=getFID.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/web-vitals/getLCP.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/web-vitals/getLCP.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLCP": () => (/* binding */ getLCP)
/* harmony export */ });
/* harmony import */ var _lib_bindReporter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/bindReporter */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/bindReporter.js");
/* harmony import */ var _lib_getVisibilityWatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/getVisibilityWatcher */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/getVisibilityWatcher.js");
/* harmony import */ var _lib_initMetric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/initMetric */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/initMetric.js");
/* harmony import */ var _lib_observe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/observe */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/observe.js");
/* harmony import */ var _lib_onHidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/onHidden */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/onHidden.js");
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var reportedMetricIDs = {};
var getLCP = function (onReport, reportAllChanges) {
    var visibilityWatcher = (0,_lib_getVisibilityWatcher__WEBPACK_IMPORTED_MODULE_0__.getVisibilityWatcher)();
    var metric = (0,_lib_initMetric__WEBPACK_IMPORTED_MODULE_1__.initMetric)('LCP');
    var report;
    var entryHandler = function (entry) {
        // The startTime attribute returns the value of the renderTime if it is not 0,
        // and the value of the loadTime otherwise.
        var value = entry.startTime;
        // If the page was hidden prior to paint time of the entry,
        // ignore it and mark the metric as final, otherwise add the entry.
        if (value < visibilityWatcher.firstHiddenTime) {
            metric.value = value;
            metric.entries.push(entry);
        }
        if (report) {
            report();
        }
    };
    var po = (0,_lib_observe__WEBPACK_IMPORTED_MODULE_2__.observe)('largest-contentful-paint', entryHandler);
    if (po) {
        report = (0,_lib_bindReporter__WEBPACK_IMPORTED_MODULE_3__.bindReporter)(onReport, metric, reportAllChanges);
        var stopListening_1 = function () {
            if (!reportedMetricIDs[metric.id]) {
                po.takeRecords().map(entryHandler);
                po.disconnect();
                reportedMetricIDs[metric.id] = true;
                report(true);
            }
        };
        // Stop listening after input. Note: while scrolling is an input that
        // stop LCP observation, it's unreliable since it can be programmatically
        // generated. See: https://github.com/GoogleChrome/web-vitals/issues/75
        ['keydown', 'click'].forEach(function (type) {
            addEventListener(type, stopListening_1, { once: true, capture: true });
        });
        (0,_lib_onHidden__WEBPACK_IMPORTED_MODULE_4__.onHidden)(stopListening_1, true);
    }
};
//# sourceMappingURL=getLCP.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/bindReporter.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/bindReporter.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindReporter": () => (/* binding */ bindReporter)
/* harmony export */ });
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bindReporter = function (callback, metric, reportAllChanges) {
    var prevValue;
    return function (forceReport) {
        if (metric.value >= 0) {
            if (forceReport || reportAllChanges) {
                metric.delta = metric.value - (prevValue || 0);
                // Report the metric if there's a non-zero delta or if no previous
                // value exists (which can happen in the case of the document becoming
                // hidden when the metric value is 0).
                // See: https://github.com/GoogleChrome/web-vitals/issues/14
                if (metric.delta || prevValue === undefined) {
                    prevValue = metric.value;
                    callback(metric);
                }
            }
        }
    };
};
//# sourceMappingURL=bindReporter.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/generateUniqueID.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/generateUniqueID.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateUniqueID": () => (/* binding */ generateUniqueID)
/* harmony export */ });
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Performantly generate a unique, 30-char string by combining a version
 * number, the current timestamp with a 13-digit number integer.
 * @return {string}
 */
var generateUniqueID = function () {
    return "v2-" + Date.now() + "-" + (Math.floor(Math.random() * (9e12 - 1)) + 1e12);
};
//# sourceMappingURL=generateUniqueID.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/getVisibilityWatcher.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/getVisibilityWatcher.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getVisibilityWatcher": () => (/* binding */ getVisibilityWatcher)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _onHidden__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onHidden */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/onHidden.js");
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var firstHiddenTime = -1;
var initHiddenTime = function () {
    return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)().document.visibilityState === 'hidden' ? 0 : Infinity;
};
var trackChanges = function () {
    // Update the time if/when the document becomes hidden.
    (0,_onHidden__WEBPACK_IMPORTED_MODULE_1__.onHidden)(function (_a) {
        var timeStamp = _a.timeStamp;
        firstHiddenTime = timeStamp;
    }, true);
};
var getVisibilityWatcher = function () {
    if (firstHiddenTime < 0) {
        // If the document is hidden when this code runs, assume it was hidden
        // since navigation start. This isn't a perfect heuristic, but it's the
        // best we can do until an API is available to support querying past
        // visibilityState.
        firstHiddenTime = initHiddenTime();
        trackChanges();
    }
    return {
        get firstHiddenTime() {
            return firstHiddenTime;
        },
    };
};
//# sourceMappingURL=getVisibilityWatcher.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/initMetric.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/initMetric.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initMetric": () => (/* binding */ initMetric)
/* harmony export */ });
/* harmony import */ var _generateUniqueID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateUniqueID */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/generateUniqueID.js");
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var initMetric = function (name, value) {
    return {
        name: name,
        value: (value !== null && value !== void 0 ? value : -1),
        delta: 0,
        entries: [],
        id: (0,_generateUniqueID__WEBPACK_IMPORTED_MODULE_0__.generateUniqueID)(),
    };
};
//# sourceMappingURL=initMetric.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/observe.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/observe.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observe": () => (/* binding */ observe)
/* harmony export */ });
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Takes a performance entry type and a callback function, and creates a
 * `PerformanceObserver` instance that will observe the specified entry type
 * with buffering enabled and call the callback _for each entry_.
 *
 * This function also feature-detects entry support and wraps the logic in a
 * try/catch to avoid errors in unsupporting browsers.
 */
var observe = function (type, callback) {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(type)) {
            // More extensive feature detect needed for Firefox due to:
            // https://github.com/GoogleChrome/web-vitals/issues/142
            if (type === 'first-input' && !('PerformanceEventTiming' in self)) {
                return;
            }
            var po = new PerformanceObserver(function (l) { return l.getEntries().map(callback); });
            po.observe({ type: type, buffered: true });
            return po;
        }
    }
    catch (e) {
        // Do nothing.
    }
    return;
};
//# sourceMappingURL=observe.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/onHidden.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/onHidden.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onHidden": () => (/* binding */ onHidden)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/global.js");
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var onHidden = function (cb, once) {
    var onHiddenOrPageHide = function (event) {
        if (event.type === 'pagehide' || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)().document.visibilityState === 'hidden') {
            cb(event);
            if (once) {
                removeEventListener('visibilitychange', onHiddenOrPageHide, true);
                removeEventListener('pagehide', onHiddenOrPageHide, true);
            }
        }
    };
    addEventListener('visibilitychange', onHiddenOrPageHide, true);
    // Some browsers have buggy implementations of visibilitychange,
    // so we use pagehide in addition, just to be safe.
    addEventListener('pagehide', onHiddenOrPageHide, true);
};
//# sourceMappingURL=onHidden.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/constants.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/constants.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FINISH_REASON_TAG": () => (/* binding */ FINISH_REASON_TAG),
/* harmony export */   "IDLE_TRANSACTION_FINISH_REASONS": () => (/* binding */ IDLE_TRANSACTION_FINISH_REASONS)
/* harmony export */ });
// Store finish reasons in tuple to save on bundle size
// Readonly type should enforce that this is not mutated.
var FINISH_REASON_TAG = 'finishReason';
var IDLE_TRANSACTION_FINISH_REASONS = ['heartbeatFailed', 'idleTimeout', 'documentHidden'];
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/errors.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/errors.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerErrorInstrumentation": () => (/* binding */ registerErrorInstrumentation)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/instrument.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _spanstatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spanstatus */ "./node_modules/@sentry/tracing/esm/spanstatus.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@sentry/tracing/esm/utils.js");



/**
 * Configures global error listeners
 */
function registerErrorInstrumentation() {
    (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.addInstrumentationHandler)({
        callback: errorCallback,
        type: 'error',
    });
    (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.addInstrumentationHandler)({
        callback: errorCallback,
        type: 'unhandledrejection',
    });
}
/**
 * If an error or unhandled promise occurs, we mark the active transaction as failed
 */
function errorCallback() {
    var activeTransaction = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getActiveTransaction)();
    if (activeTransaction) {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.log("[Tracing] Transaction: " + _spanstatus__WEBPACK_IMPORTED_MODULE_3__.SpanStatus.InternalError + " -> Global error occured");
        activeTransaction.setStatus(_spanstatus__WEBPACK_IMPORTED_MODULE_3__.SpanStatus.InternalError);
    }
}
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/hubextensions.js":
/*!***********************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/hubextensions.js ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startIdleTransaction": () => (/* binding */ startIdleTransaction),
/* harmony export */   "_addTracingExtensions": () => (/* binding */ _addTracingExtensions),
/* harmony export */   "addExtensionMethods": () => (/* binding */ addExtensionMethods)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/hub.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/transaction.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/node.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./errors */ "./node_modules/@sentry/tracing/esm/errors.js");
/* harmony import */ var _idletransaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./idletransaction */ "./node_modules/@sentry/tracing/esm/idletransaction.js");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction */ "./node_modules/@sentry/tracing/esm/transaction.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@sentry/tracing/esm/utils.js");
/* module decorator */ module = __webpack_require__.hmd(module);








/** Returns all trace headers that are currently on the top scope. */
function traceHeaders() {
    var scope = this.getScope();
    if (scope) {
        var span = scope.getSpan();
        if (span) {
            return {
                'sentry-trace': span.toTraceparent(),
            };
        }
    }
    return {};
}
/**
 * Makes a sampling decision for the given transaction and stores it on the transaction.
 *
 * Called every time a transaction is created. Only transactions which emerge with a `sampled` value of `true` will be
 * sent to Sentry.
 *
 * @param hub: The hub off of which to read config options
 * @param transaction: The transaction needing a sampling decision
 * @param samplingContext: Default and user-provided data which may be used to help make the decision
 *
 * @returns The given transaction with its `sampled` value set
 */
function sample(transaction, options, samplingContext) {
    // nothing to do if tracing is not enabled
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.hasTracingEnabled)(options)) {
        transaction.sampled = false;
        return transaction;
    }
    // if the user has forced a sampling decision by passing a `sampled` value in their transaction context, go with that
    if (transaction.sampled !== undefined) {
        transaction.setMetadata({
            transactionSampling: { method: _sentry_types__WEBPACK_IMPORTED_MODULE_1__.TransactionSamplingMethod.Explicit },
        });
        return transaction;
    }
    // we would have bailed already if neither `tracesSampler` nor `tracesSampleRate` were defined, so one of these should
    // work; prefer the hook if so
    var sampleRate;
    if (typeof options.tracesSampler === 'function') {
        sampleRate = options.tracesSampler(samplingContext);
        transaction.setMetadata({
            transactionSampling: {
                method: _sentry_types__WEBPACK_IMPORTED_MODULE_1__.TransactionSamplingMethod.Sampler,
                // cast to number in case it's a boolean
                rate: Number(sampleRate),
            },
        });
    }
    else if (samplingContext.parentSampled !== undefined) {
        sampleRate = samplingContext.parentSampled;
        transaction.setMetadata({
            transactionSampling: { method: _sentry_types__WEBPACK_IMPORTED_MODULE_1__.TransactionSamplingMethod.Inheritance },
        });
    }
    else {
        sampleRate = options.tracesSampleRate;
        transaction.setMetadata({
            transactionSampling: {
                method: _sentry_types__WEBPACK_IMPORTED_MODULE_1__.TransactionSamplingMethod.Rate,
                // cast to number in case it's a boolean
                rate: Number(sampleRate),
            },
        });
    }
    // Since this is coming from the user (or from a function provided by the user), who knows what we might get. (The
    // only valid values are booleans or numbers between 0 and 1.)
    if (!isValidSampleRate(sampleRate)) {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.warn("[Tracing] Discarding transaction because of invalid sample rate.");
        transaction.sampled = false;
        return transaction;
    }
    // if the function returned 0 (or false), or if `tracesSampleRate` is 0, it's a sign the transaction should be dropped
    if (!sampleRate) {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.log("[Tracing] Discarding transaction because " + (typeof options.tracesSampler === 'function'
            ? 'tracesSampler returned 0 or false'
            : 'a negative sampling decision was inherited or tracesSampleRate is set to 0'));
        transaction.sampled = false;
        return transaction;
    }
    // Now we roll the dice. Math.random is inclusive of 0, but not of 1, so strict < is safe here. In case sampleRate is
    // a boolean, the < comparison will cause it to be automatically cast to 1 if it's true and 0 if it's false.
    transaction.sampled = Math.random() < sampleRate;
    // if we're not going to keep it, we're done
    if (!transaction.sampled) {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(sampleRate) + ")");
        return transaction;
    }
    _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.log("[Tracing] starting " + transaction.op + " transaction - " + transaction.name);
    return transaction;
}
/**
 * Checks the given sample rate to make sure it is valid type and value (a boolean, or a number between 0 and 1).
 */
function isValidSampleRate(rate) {
    // we need to check NaN explicitly because it's of type 'number' and therefore wouldn't get caught by this typecheck
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (isNaN(rate) || !(typeof rate === 'number' || typeof rate === 'boolean')) {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + JSON.stringify(rate) + " of type " + JSON.stringify(typeof rate) + ".");
        return false;
    }
    // in case sampleRate is a boolean, it will get automatically cast to 1 if it's true and 0 if it's false
    if (rate < 0 || rate > 1) {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " + rate + ".");
        return false;
    }
    return true;
}
/**
 * Creates a new transaction and adds a sampling decision if it doesn't yet have one.
 *
 * The Hub.startTransaction method delegates to this method to do its work, passing the Hub instance in as `this`, as if
 * it had been called on the hub directly. Exists as a separate function so that it can be injected into the class as an
 * "extension method."
 *
 * @param this: The Hub starting the transaction
 * @param transactionContext: Data used to configure the transaction
 * @param CustomSamplingContext: Optional data to be provided to the `tracesSampler` function (if any)
 *
 * @returns The new transaction
 *
 * @see {@link Hub.startTransaction}
 */
function _startTransaction(transactionContext, customSamplingContext) {
    var _a, _b;
    var options = ((_a = this.getClient()) === null || _a === void 0 ? void 0 : _a.getOptions()) || {};
    var transaction = new _transaction__WEBPACK_IMPORTED_MODULE_3__.Transaction(transactionContext, this);
    transaction = sample(transaction, options, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ parentSampled: transactionContext.parentSampled, transactionContext: transactionContext }, customSamplingContext));
    if (transaction.sampled) {
        transaction.initSpanRecorder((_b = options._experiments) === null || _b === void 0 ? void 0 : _b.maxSpans);
    }
    return transaction;
}
/**
 * Create new idle transaction.
 */
function startIdleTransaction(hub, transactionContext, idleTimeout, onScope, customSamplingContext) {
    var _a, _b;
    var options = ((_a = hub.getClient()) === null || _a === void 0 ? void 0 : _a.getOptions()) || {};
    var transaction = new _idletransaction__WEBPACK_IMPORTED_MODULE_5__.IdleTransaction(transactionContext, hub, idleTimeout, onScope);
    transaction = sample(transaction, options, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ parentSampled: transactionContext.parentSampled, transactionContext: transactionContext }, customSamplingContext));
    if (transaction.sampled) {
        transaction.initSpanRecorder((_b = options._experiments) === null || _b === void 0 ? void 0 : _b.maxSpans);
    }
    return transaction;
}
/**
 * @private
 */
function _addTracingExtensions() {
    var carrier = (0,_sentry_hub__WEBPACK_IMPORTED_MODULE_6__.getMainCarrier)();
    if (!carrier.__SENTRY__) {
        return;
    }
    carrier.__SENTRY__.extensions = carrier.__SENTRY__.extensions || {};
    if (!carrier.__SENTRY__.extensions.startTransaction) {
        carrier.__SENTRY__.extensions.startTransaction = _startTransaction;
    }
    if (!carrier.__SENTRY__.extensions.traceHeaders) {
        carrier.__SENTRY__.extensions.traceHeaders = traceHeaders;
    }
}
/**
 * @private
 */
function _autoloadDatabaseIntegrations() {
    var carrier = (0,_sentry_hub__WEBPACK_IMPORTED_MODULE_6__.getMainCarrier)();
    if (!carrier.__SENTRY__) {
        return;
    }
    var packageToIntegrationMapping = {
        mongodb: function () {
            var integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_7__.dynamicRequire)(module, './integrations/node/mongo');
            return new integration.Mongo();
        },
        mongoose: function () {
            var integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_7__.dynamicRequire)(module, './integrations/node/mongo');
            return new integration.Mongo({ mongoose: true });
        },
        mysql: function () {
            var integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_7__.dynamicRequire)(module, './integrations/node/mysql');
            return new integration.Mysql();
        },
        pg: function () {
            var integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_7__.dynamicRequire)(module, './integrations/node/postgres');
            return new integration.Postgres();
        },
    };
    var mappedPackages = Object.keys(packageToIntegrationMapping)
        .filter(function (moduleName) { return !!(0,_sentry_utils__WEBPACK_IMPORTED_MODULE_7__.loadModule)(moduleName); })
        .map(function (pkg) {
        try {
            return packageToIntegrationMapping[pkg]();
        }
        catch (e) {
            return undefined;
        }
    })
        .filter(function (p) { return p; });
    if (mappedPackages.length > 0) {
        carrier.__SENTRY__.integrations = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spread)((carrier.__SENTRY__.integrations || []), mappedPackages);
    }
}
/**
 * This patches the global object and injects the Tracing extensions methods
 */
function addExtensionMethods() {
    _addTracingExtensions();
    // Detect and automatically load specified integrations.
    if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_7__.isNodeEnv)()) {
        _autoloadDatabaseIntegrations();
    }
    // If an error happens globally, we should make sure transaction status is set to error.
    (0,_errors__WEBPACK_IMPORTED_MODULE_8__.registerErrorInstrumentation)();
}
//# sourceMappingURL=hubextensions.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/idletransaction.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/idletransaction.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_IDLE_TIMEOUT": () => (/* binding */ DEFAULT_IDLE_TIMEOUT),
/* harmony export */   "HEARTBEAT_INTERVAL": () => (/* binding */ HEARTBEAT_INTERVAL),
/* harmony export */   "IdleTransactionSpanRecorder": () => (/* binding */ IdleTransactionSpanRecorder),
/* harmony export */   "IdleTransaction": () => (/* binding */ IdleTransaction)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/time.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/@sentry/tracing/esm/constants.js");
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./span */ "./node_modules/@sentry/tracing/esm/span.js");
/* harmony import */ var _spanstatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spanstatus */ "./node_modules/@sentry/tracing/esm/spanstatus.js");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction */ "./node_modules/@sentry/tracing/esm/transaction.js");






var DEFAULT_IDLE_TIMEOUT = 1000;
var HEARTBEAT_INTERVAL = 5000;
/**
 * @inheritDoc
 */
var IdleTransactionSpanRecorder = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(IdleTransactionSpanRecorder, _super);
    function IdleTransactionSpanRecorder(_pushActivity, _popActivity, transactionSpanId, maxlen) {
        if (transactionSpanId === void 0) { transactionSpanId = ''; }
        var _this = _super.call(this, maxlen) || this;
        _this._pushActivity = _pushActivity;
        _this._popActivity = _popActivity;
        _this.transactionSpanId = transactionSpanId;
        return _this;
    }
    /**
     * @inheritDoc
     */
    IdleTransactionSpanRecorder.prototype.add = function (span) {
        var _this = this;
        // We should make sure we do not push and pop activities for
        // the transaction that this span recorder belongs to.
        if (span.spanId !== this.transactionSpanId) {
            // We patch span.finish() to pop an activity after setting an endTimestamp.
            span.finish = function (endTimestamp) {
                span.endTimestamp = typeof endTimestamp === 'number' ? endTimestamp : (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.timestampWithMs)();
                _this._popActivity(span.spanId);
            };
            // We should only push new activities if the span does not have an end timestamp.
            if (span.endTimestamp === undefined) {
                this._pushActivity(span.spanId);
            }
        }
        _super.prototype.add.call(this, span);
    };
    return IdleTransactionSpanRecorder;
}(_span__WEBPACK_IMPORTED_MODULE_2__.SpanRecorder));

/**
 * An IdleTransaction is a transaction that automatically finishes. It does this by tracking child spans as activities.
 * You can have multiple IdleTransactions active, but if the `onScope` option is specified, the idle transaction will
 * put itself on the scope on creation.
 */
var IdleTransaction = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(IdleTransaction, _super);
    function IdleTransaction(transactionContext, _idleHub, 
    /**
     * The time to wait in ms until the idle transaction will be finished.
     * @default 1000
     */
    _idleTimeout, 
    // If an idle transaction should be put itself on and off the scope automatically.
    _onScope) {
        if (_idleTimeout === void 0) { _idleTimeout = DEFAULT_IDLE_TIMEOUT; }
        if (_onScope === void 0) { _onScope = false; }
        var _this = _super.call(this, transactionContext, _idleHub) || this;
        _this._idleHub = _idleHub;
        _this._idleTimeout = _idleTimeout;
        _this._onScope = _onScope;
        // Activities store a list of active spans
        _this.activities = {};
        // Amount of times heartbeat has counted. Will cause transaction to finish after 3 beats.
        _this._heartbeatCounter = 0;
        // We should not use heartbeat if we finished a transaction
        _this._finished = false;
        _this._beforeFinishCallbacks = [];
        if (_idleHub && _onScope) {
            // There should only be one active transaction on the scope
            clearActiveTransaction(_idleHub);
            // We set the transaction here on the scope so error events pick up the trace
            // context and attach it to the error.
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log("Setting idle transaction on scope. Span ID: " + _this.spanId);
            _idleHub.configureScope(function (scope) { return scope.setSpan(_this); });
        }
        _this._initTimeout = setTimeout(function () {
            if (!_this._finished) {
                _this.finish();
            }
        }, _this._idleTimeout);
        return _this;
    }
    /** {@inheritDoc} */
    IdleTransaction.prototype.finish = function (endTimestamp) {
        var e_1, _a;
        var _this = this;
        if (endTimestamp === void 0) { endTimestamp = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.timestampWithMs)(); }
        this._finished = true;
        this.activities = {};
        if (this.spanRecorder) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log('[Tracing] finishing IdleTransaction', new Date(endTimestamp * 1000).toISOString(), this.op);
            try {
                for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(this._beforeFinishCallbacks), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var callback = _c.value;
                    callback(this, endTimestamp);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.spanRecorder.spans = this.spanRecorder.spans.filter(function (span) {
                // If we are dealing with the transaction itself, we just return it
                if (span.spanId === _this.spanId) {
                    return true;
                }
                // We cancel all pending spans with status "cancelled" to indicate the idle transaction was finished early
                if (!span.endTimestamp) {
                    span.endTimestamp = endTimestamp;
                    span.setStatus(_spanstatus__WEBPACK_IMPORTED_MODULE_4__.SpanStatus.Cancelled);
                    _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log('[Tracing] cancelling span since transaction ended early', JSON.stringify(span, undefined, 2));
                }
                var keepSpan = span.startTimestamp < endTimestamp;
                if (!keepSpan) {
                    _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log('[Tracing] discarding Span since it happened after Transaction was finished', JSON.stringify(span, undefined, 2));
                }
                return keepSpan;
            });
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log('[Tracing] flushing IdleTransaction');
        }
        else {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log('[Tracing] No active IdleTransaction');
        }
        // this._onScope is true if the transaction was previously on the scope.
        if (this._onScope) {
            clearActiveTransaction(this._idleHub);
        }
        return _super.prototype.finish.call(this, endTimestamp);
    };
    /**
     * Register a callback function that gets excecuted before the transaction finishes.
     * Useful for cleanup or if you want to add any additional spans based on current context.
     *
     * This is exposed because users have no other way of running something before an idle transaction
     * finishes.
     */
    IdleTransaction.prototype.registerBeforeFinishCallback = function (callback) {
        this._beforeFinishCallbacks.push(callback);
    };
    /**
     * @inheritDoc
     */
    IdleTransaction.prototype.initSpanRecorder = function (maxlen) {
        var _this = this;
        if (!this.spanRecorder) {
            var pushActivity = function (id) {
                if (_this._finished) {
                    return;
                }
                _this._pushActivity(id);
            };
            var popActivity = function (id) {
                if (_this._finished) {
                    return;
                }
                _this._popActivity(id);
            };
            this.spanRecorder = new IdleTransactionSpanRecorder(pushActivity, popActivity, this.spanId, maxlen);
            // Start heartbeat so that transactions do not run forever.
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log('Starting heartbeat');
            this._pingHeartbeat();
        }
        this.spanRecorder.add(this);
    };
    /**
     * Start tracking a specific activity.
     * @param spanId The span id that represents the activity
     */
    IdleTransaction.prototype._pushActivity = function (spanId) {
        if (this._initTimeout) {
            clearTimeout(this._initTimeout);
            this._initTimeout = undefined;
        }
        _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log("[Tracing] pushActivity: " + spanId);
        this.activities[spanId] = true;
        _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log('[Tracing] new activities count', Object.keys(this.activities).length);
    };
    /**
     * Remove an activity from usage
     * @param spanId The span id that represents the activity
     */
    IdleTransaction.prototype._popActivity = function (spanId) {
        var _this = this;
        if (this.activities[spanId]) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log("[Tracing] popActivity " + spanId);
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete this.activities[spanId];
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log('[Tracing] new activities count', Object.keys(this.activities).length);
        }
        if (Object.keys(this.activities).length === 0) {
            var timeout = this._idleTimeout;
            // We need to add the timeout here to have the real endtimestamp of the transaction
            // Remember timestampWithMs is in seconds, timeout is in ms
            var end_1 = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.timestampWithMs)() + timeout / 1000;
            setTimeout(function () {
                if (!_this._finished) {
                    _this.setTag(_constants__WEBPACK_IMPORTED_MODULE_5__.FINISH_REASON_TAG, _constants__WEBPACK_IMPORTED_MODULE_5__.IDLE_TRANSACTION_FINISH_REASONS[1]);
                    _this.finish(end_1);
                }
            }, timeout);
        }
    };
    /**
     * Checks when entries of this.activities are not changing for 3 beats.
     * If this occurs we finish the transaction.
     */
    IdleTransaction.prototype._beat = function () {
        // We should not be running heartbeat if the idle transaction is finished.
        if (this._finished) {
            return;
        }
        var heartbeatString = Object.keys(this.activities).join('');
        if (heartbeatString === this._prevHeartbeatString) {
            this._heartbeatCounter += 1;
        }
        else {
            this._heartbeatCounter = 1;
        }
        this._prevHeartbeatString = heartbeatString;
        if (this._heartbeatCounter >= 3) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log("[Tracing] Transaction finished because of no change for 3 heart beats");
            this.setStatus(_spanstatus__WEBPACK_IMPORTED_MODULE_4__.SpanStatus.DeadlineExceeded);
            this.setTag(_constants__WEBPACK_IMPORTED_MODULE_5__.FINISH_REASON_TAG, _constants__WEBPACK_IMPORTED_MODULE_5__.IDLE_TRANSACTION_FINISH_REASONS[0]);
            this.finish();
        }
        else {
            this._pingHeartbeat();
        }
    };
    /**
     * Pings the heartbeat
     */
    IdleTransaction.prototype._pingHeartbeat = function () {
        var _this = this;
        _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.log("pinging Heartbeat -> current counter: " + this._heartbeatCounter);
        setTimeout(function () {
            _this._beat();
        }, HEARTBEAT_INTERVAL);
    };
    return IdleTransaction;
}(_transaction__WEBPACK_IMPORTED_MODULE_6__.Transaction));

/**
 * Reset active transaction on scope
 */
function clearActiveTransaction(hub) {
    if (hub) {
        var scope = hub.getScope();
        if (scope) {
            var transaction = scope.getTransaction();
            if (transaction) {
                scope.setSpan(undefined);
            }
        }
    }
}
//# sourceMappingURL=idletransaction.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Integrations": () => (/* reexport module object */ _integrations__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "BrowserTracing": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_1__.BrowserTracing),
/* harmony export */   "Span": () => (/* reexport safe */ _span__WEBPACK_IMPORTED_MODULE_2__.Span),
/* harmony export */   "Transaction": () => (/* reexport safe */ _transaction__WEBPACK_IMPORTED_MODULE_3__.Transaction),
/* harmony export */   "registerRequestInstrumentation": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.instrumentOutgoingRequests),
/* harmony export */   "defaultRequestInstrumentationOptions": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.defaultRequestInstrumentationOptions),
/* harmony export */   "SpanStatus": () => (/* reexport safe */ _spanstatus__WEBPACK_IMPORTED_MODULE_5__.SpanStatus),
/* harmony export */   "IdleTransaction": () => (/* reexport safe */ _idletransaction__WEBPACK_IMPORTED_MODULE_6__.IdleTransaction),
/* harmony export */   "startIdleTransaction": () => (/* reexport safe */ _hubextensions__WEBPACK_IMPORTED_MODULE_7__.startIdleTransaction),
/* harmony export */   "addExtensionMethods": () => (/* reexport safe */ _hubextensions__WEBPACK_IMPORTED_MODULE_7__.addExtensionMethods),
/* harmony export */   "extractTraceparentData": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.extractTraceparentData),
/* harmony export */   "getActiveTransaction": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.getActiveTransaction),
/* harmony export */   "hasTracingEnabled": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.hasTracingEnabled),
/* harmony export */   "stripUrlQueryAndFragment": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_9__.stripUrlQueryAndFragment),
/* harmony export */   "TRACEPARENT_REGEXP": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.TRACEPARENT_REGEXP)
/* harmony export */ });
/* harmony import */ var _hubextensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hubextensions */ "./node_modules/@sentry/tracing/esm/hubextensions.js");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/tracing/esm/integrations/index.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./node_modules/@sentry/tracing/esm/browser/browsertracing.js");
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./span */ "./node_modules/@sentry/tracing/esm/span.js");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction */ "./node_modules/@sentry/tracing/esm/transaction.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browser */ "./node_modules/@sentry/tracing/esm/browser/request.js");
/* harmony import */ var _spanstatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spanstatus */ "./node_modules/@sentry/tracing/esm/spanstatus.js");
/* harmony import */ var _idletransaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./idletransaction */ "./node_modules/@sentry/tracing/esm/idletransaction.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./node_modules/@sentry/tracing/esm/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/@sentry/utils/esm/misc.js");



// This is already exported as part of `Integrations` above (and for the moment will remain so for
// backwards compatibility), but that interferes with treeshaking, so we also export it separately
// here.
//
// Previously we expected users to import tracing integrations like
//
// import { Integrations } from '@sentry/tracing';
// const instance = new Integrations.BrowserTracing();
//
// This makes the integrations unable to be treeshaken though. To address this, we now have
// this individual export. We now expect users to consume BrowserTracing like so:
//
// import { BrowserTracing } from '@sentry/tracing';
// const instance = new BrowserTracing();
//
// For an example of of the new usage of BrowserTracing, see @sentry/nextjs index.client.ts







// We are patching the global object with our hub extension methods
(0,_hubextensions__WEBPACK_IMPORTED_MODULE_7__.addExtensionMethods)();


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/integrations/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/integrations/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Express": () => (/* reexport safe */ _node_express__WEBPACK_IMPORTED_MODULE_0__.Express),
/* harmony export */   "Postgres": () => (/* reexport safe */ _node_postgres__WEBPACK_IMPORTED_MODULE_1__.Postgres),
/* harmony export */   "Mysql": () => (/* reexport safe */ _node_mysql__WEBPACK_IMPORTED_MODULE_2__.Mysql),
/* harmony export */   "Mongo": () => (/* reexport safe */ _node_mongo__WEBPACK_IMPORTED_MODULE_3__.Mongo),
/* harmony export */   "BrowserTracing": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_4__.BrowserTracing)
/* harmony export */ });
/* harmony import */ var _node_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node/express */ "./node_modules/@sentry/tracing/esm/integrations/node/express.js");
/* harmony import */ var _node_postgres__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node/postgres */ "./node_modules/@sentry/tracing/esm/integrations/node/postgres.js");
/* harmony import */ var _node_mysql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node/mysql */ "./node_modules/@sentry/tracing/esm/integrations/node/mysql.js");
/* harmony import */ var _node_mongo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node/mongo */ "./node_modules/@sentry/tracing/esm/integrations/node/mongo.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../browser */ "./node_modules/@sentry/tracing/esm/browser/browsertracing.js");




// TODO(v7): Remove this export
// Please see `src/index.ts` for more details.

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/integrations/node/express.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/integrations/node/express.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Express": () => (/* binding */ Express)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");


/**
 * Express integration
 *
 * Provides an request and error handler for Express framework as well as tracing capabilities
 */
var Express = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Express(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = Express.id;
        this._router = options.router || options.app;
        this._methods = (Array.isArray(options.methods) ? options.methods : []).concat('use');
    }
    /**
     * @inheritDoc
     */
    Express.prototype.setupOnce = function () {
        if (!this._router) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_0__.logger.error('ExpressIntegration is missing an Express instance');
            return;
        }
        instrumentMiddlewares(this._router, this._methods);
    };
    /**
     * @inheritDoc
     */
    Express.id = 'Express';
    return Express;
}());

/**
 * Wraps original middleware function in a tracing call, which stores the info about the call as a span,
 * and finishes it once the middleware is done invoking.
 *
 * Express middlewares have 3 various forms, thus we have to take care of all of them:
 * // sync
 * app.use(function (req, res) { ... })
 * // async
 * app.use(function (req, res, next) { ... })
 * // error handler
 * app.use(function (err, req, res, next) { ... })
 *
 * They all internally delegate to the `router[method]` of the given application instance.
 */
// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
function wrap(fn, method) {
    var arity = fn.length;
    switch (arity) {
        case 2: {
            return function (req, res) {
                var transaction = res.__sentry_transaction;
                if (transaction) {
                    var span_1 = transaction.startChild({
                        description: fn.name,
                        op: "express.middleware." + method,
                    });
                    res.once('finish', function () {
                        span_1.finish();
                    });
                }
                return fn.call(this, req, res);
            };
        }
        case 3: {
            return function (req, res, next) {
                var _a;
                var transaction = res.__sentry_transaction;
                var span = (_a = transaction) === null || _a === void 0 ? void 0 : _a.startChild({
                    description: fn.name,
                    op: "express.middleware." + method,
                });
                fn.call(this, req, res, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var _a;
                    (_a = span) === null || _a === void 0 ? void 0 : _a.finish();
                    next.call.apply(next, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spread)([this], args));
                });
            };
        }
        case 4: {
            return function (err, req, res, next) {
                var _a;
                var transaction = res.__sentry_transaction;
                var span = (_a = transaction) === null || _a === void 0 ? void 0 : _a.startChild({
                    description: fn.name,
                    op: "express.middleware." + method,
                });
                fn.call(this, err, req, res, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var _a;
                    (_a = span) === null || _a === void 0 ? void 0 : _a.finish();
                    next.call.apply(next, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spread)([this], args));
                });
            };
        }
        default: {
            throw new Error("Express middleware takes 2-4 arguments. Got: " + arity);
        }
    }
}
/**
 * Takes all the function arguments passed to the original `app` or `router` method, eg. `app.use` or `router.use`
 * and wraps every function, as well as array of functions with a call to our `wrap` method.
 * We have to take care of the arrays as well as iterate over all of the arguments,
 * as `app.use` can accept middlewares in few various forms.
 *
 * app.use([<path>], <fn>)
 * app.use([<path>], <fn>, ...<fn>)
 * app.use([<path>], ...<fn>[])
 */
function wrapMiddlewareArgs(args, method) {
    return args.map(function (arg) {
        if (typeof arg === 'function') {
            return wrap(arg, method);
        }
        if (Array.isArray(arg)) {
            return arg.map(function (a) {
                if (typeof a === 'function') {
                    return wrap(a, method);
                }
                return a;
            });
        }
        return arg;
    });
}
/**
 * Patches original router to utilize our tracing functionality
 */
function patchMiddleware(router, method) {
    var originalCallback = router[method];
    router[method] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return originalCallback.call.apply(originalCallback, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spread)([this], wrapMiddlewareArgs(args, method)));
    };
    return router;
}
/**
 * Patches original router methods
 */
function instrumentMiddlewares(router, methods) {
    if (methods === void 0) { methods = []; }
    methods.forEach(function (method) { return patchMiddleware(router, method); });
}
//# sourceMappingURL=express.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/integrations/node/mongo.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/integrations/node/mongo.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mongo": () => (/* binding */ Mongo)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/node.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/is.js");


var OPERATIONS = [
    'aggregate',
    'bulkWrite',
    'countDocuments',
    'createIndex',
    'createIndexes',
    'deleteMany',
    'deleteOne',
    'distinct',
    'drop',
    'dropIndex',
    'dropIndexes',
    'estimatedDocumentCount',
    'find',
    'findOne',
    'findOneAndDelete',
    'findOneAndReplace',
    'findOneAndUpdate',
    'indexes',
    'indexExists',
    'indexInformation',
    'initializeOrderedBulkOp',
    'insertMany',
    'insertOne',
    'isCapped',
    'mapReduce',
    'options',
    'parallelCollectionScan',
    'rename',
    'replaceOne',
    'stats',
    'updateMany',
    'updateOne',
];
// All of the operations above take `options` and `callback` as their final parameters, but some of them
// take additional parameters as well. For those operations, this is a map of
// { <operation name>:  [<names of additional parameters>] }, as a way to know what to call the operation's
// positional arguments when we add them to the span's `data` object later
var OPERATION_SIGNATURES = {
    // aggregate intentionally not included because `pipeline` arguments are too complex to serialize well
    // see https://github.com/getsentry/sentry-javascript/pull/3102
    bulkWrite: ['operations'],
    countDocuments: ['query'],
    createIndex: ['fieldOrSpec'],
    createIndexes: ['indexSpecs'],
    deleteMany: ['filter'],
    deleteOne: ['filter'],
    distinct: ['key', 'query'],
    dropIndex: ['indexName'],
    find: ['query'],
    findOne: ['query'],
    findOneAndDelete: ['filter'],
    findOneAndReplace: ['filter', 'replacement'],
    findOneAndUpdate: ['filter', 'update'],
    indexExists: ['indexes'],
    insertMany: ['docs'],
    insertOne: ['doc'],
    mapReduce: ['map', 'reduce'],
    rename: ['newName'],
    replaceOne: ['filter', 'doc'],
    updateMany: ['filter', 'update'],
    updateOne: ['filter', 'update'],
};
/** Tracing integration for mongo package */
var Mongo = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Mongo(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = Mongo.id;
        this._operations = Array.isArray(options.operations)
            ? options.operations
            : OPERATIONS;
        this._describeOperations = 'describeOperations' in options ? options.describeOperations : true;
        this._useMongoose = !!options.useMongoose;
    }
    /**
     * @inheritDoc
     */
    Mongo.prototype.setupOnce = function (_, getCurrentHub) {
        var moduleName = this._useMongoose ? 'mongoose' : 'mongodb';
        var pkg = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.loadModule)(moduleName);
        if (!pkg) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.logger.error("Mongo Integration was unable to require `" + moduleName + "` package.");
            return;
        }
        this._instrumentOperations(pkg.Collection, this._operations, getCurrentHub);
    };
    /**
     * Patches original collection methods
     */
    Mongo.prototype._instrumentOperations = function (collection, operations, getCurrentHub) {
        var _this = this;
        operations.forEach(function (operation) { return _this._patchOperation(collection, operation, getCurrentHub); });
    };
    /**
     * Patches original collection to utilize our tracing functionality
     */
    Mongo.prototype._patchOperation = function (collection, operation, getCurrentHub) {
        if (!(operation in collection.prototype))
            return;
        var getSpanContext = this._getSpanContextFromOperationArguments.bind(this);
        (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.fill)(collection.prototype, operation, function (orig) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _a, _b, _c, _d;
                var lastArg = args[args.length - 1];
                var scope = getCurrentHub().getScope();
                var parentSpan = (_a = scope) === null || _a === void 0 ? void 0 : _a.getSpan();
                // Check if the operation was passed a callback. (mapReduce requires a different check, as
                // its (non-callback) arguments can also be functions.)
                if (typeof lastArg !== 'function' || (operation === 'mapReduce' && args.length === 2)) {
                    var span_1 = (_b = parentSpan) === null || _b === void 0 ? void 0 : _b.startChild(getSpanContext(this, operation, args));
                    var maybePromise = orig.call.apply(orig, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__spread)([this], args));
                    if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.isThenable)(maybePromise)) {
                        return maybePromise.then(function (res) {
                            var _a;
                            (_a = span_1) === null || _a === void 0 ? void 0 : _a.finish();
                            return res;
                        });
                    }
                    else {
                        (_c = span_1) === null || _c === void 0 ? void 0 : _c.finish();
                        return maybePromise;
                    }
                }
                var span = (_d = parentSpan) === null || _d === void 0 ? void 0 : _d.startChild(getSpanContext(this, operation, args.slice(0, -1)));
                return orig.call.apply(orig, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__spread)([this], args.slice(0, -1), [function (err, result) {
                        var _a;
                        (_a = span) === null || _a === void 0 ? void 0 : _a.finish();
                        lastArg(err, result);
                    }]));
            };
        });
    };
    /**
     * Form a SpanContext based on the user input to a given operation.
     */
    Mongo.prototype._getSpanContextFromOperationArguments = function (collection, operation, args) {
        var data = {
            collectionName: collection.collectionName,
            dbName: collection.dbName,
            namespace: collection.namespace,
        };
        var spanContext = {
            op: "db",
            description: operation,
            data: data,
        };
        // If the operation takes no arguments besides `options` and `callback`, or if argument
        // collection is disabled for this operation, just return early.
        var signature = OPERATION_SIGNATURES[operation];
        var shouldDescribe = Array.isArray(this._describeOperations)
            ? this._describeOperations.includes(operation)
            : this._describeOperations;
        if (!signature || !shouldDescribe) {
            return spanContext;
        }
        try {
            // Special case for `mapReduce`, as the only one accepting functions as arguments.
            if (operation === 'mapReduce') {
                var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__read)(args, 2), map = _a[0], reduce = _a[1];
                data[signature[0]] = typeof map === 'string' ? map : map.name || '<anonymous>';
                data[signature[1]] = typeof reduce === 'string' ? reduce : reduce.name || '<anonymous>';
            }
            else {
                for (var i = 0; i < signature.length; i++) {
                    data[signature[i]] = JSON.stringify(args[i]);
                }
            }
        }
        catch (_oO) {
            // no-empty
        }
        return spanContext;
    };
    /**
     * @inheritDoc
     */
    Mongo.id = 'Mongo';
    return Mongo;
}());

//# sourceMappingURL=mongo.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/integrations/node/mysql.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/integrations/node/mysql.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mysql": () => (/* binding */ Mysql)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/node.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/object.js");

/** Tracing integration for node-mysql package */
var Mysql = /** @class */ (function () {
    function Mysql() {
        /**
         * @inheritDoc
         */
        this.name = Mysql.id;
    }
    /**
     * @inheritDoc
     */
    Mysql.prototype.setupOnce = function (_, getCurrentHub) {
        var pkg = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.loadModule)('mysql/lib/Connection.js');
        if (!pkg) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.logger.error('Mysql Integration was unable to require `mysql` package.');
            return;
        }
        // The original function will have one of these signatures:
        //    function (callback) => void
        //    function (options, callback) => void
        //    function (options, values, callback) => void
        (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.fill)(pkg, 'createQuery', function (orig) {
            return function (options, values, callback) {
                var _a, _b;
                var scope = getCurrentHub().getScope();
                var parentSpan = (_a = scope) === null || _a === void 0 ? void 0 : _a.getSpan();
                var span = (_b = parentSpan) === null || _b === void 0 ? void 0 : _b.startChild({
                    description: typeof options === 'string' ? options : options.sql,
                    op: "db",
                });
                if (typeof callback === 'function') {
                    return orig.call(this, options, values, function (err, result, fields) {
                        var _a;
                        (_a = span) === null || _a === void 0 ? void 0 : _a.finish();
                        callback(err, result, fields);
                    });
                }
                if (typeof values === 'function') {
                    return orig.call(this, options, function (err, result, fields) {
                        var _a;
                        (_a = span) === null || _a === void 0 ? void 0 : _a.finish();
                        values(err, result, fields);
                    });
                }
                return orig.call(this, options, values, callback);
            };
        });
    };
    /**
     * @inheritDoc
     */
    Mysql.id = 'Mysql';
    return Mysql;
}());

//# sourceMappingURL=mysql.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/integrations/node/postgres.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/integrations/node/postgres.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Postgres": () => (/* binding */ Postgres)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/node.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/is.js");

/** Tracing integration for node-postgres package */
var Postgres = /** @class */ (function () {
    function Postgres(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = Postgres.id;
        this._usePgNative = !!options.usePgNative;
    }
    /**
     * @inheritDoc
     */
    Postgres.prototype.setupOnce = function (_, getCurrentHub) {
        var _a;
        var pkg = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.loadModule)('pg');
        if (!pkg) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.logger.error('Postgres Integration was unable to require `pg` package.');
            return;
        }
        if (this._usePgNative && !((_a = pkg.native) === null || _a === void 0 ? void 0 : _a.Client)) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.logger.error("Postgres Integration was unable to access 'pg-native' bindings.");
            return;
        }
        var Client = (this._usePgNative ? pkg.native : pkg).Client;
        /**
         * function (query, callback) => void
         * function (query, params, callback) => void
         * function (query) => Promise
         * function (query, params) => Promise
         * function (pg.Cursor) => pg.Cursor
         */
        (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.fill)(Client.prototype, 'query', function (orig) {
            return function (config, values, callback) {
                var _a, _b, _c;
                var scope = getCurrentHub().getScope();
                var parentSpan = (_a = scope) === null || _a === void 0 ? void 0 : _a.getSpan();
                var span = (_b = parentSpan) === null || _b === void 0 ? void 0 : _b.startChild({
                    description: typeof config === 'string' ? config : config.text,
                    op: "db",
                });
                if (typeof callback === 'function') {
                    return orig.call(this, config, values, function (err, result) {
                        var _a;
                        (_a = span) === null || _a === void 0 ? void 0 : _a.finish();
                        callback(err, result);
                    });
                }
                if (typeof values === 'function') {
                    return orig.call(this, config, function (err, result) {
                        var _a;
                        (_a = span) === null || _a === void 0 ? void 0 : _a.finish();
                        values(err, result);
                    });
                }
                var rv = typeof values !== 'undefined' ? orig.call(this, config, values) : orig.call(this, config);
                if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isThenable)(rv)) {
                    return rv.then(function (res) {
                        var _a;
                        (_a = span) === null || _a === void 0 ? void 0 : _a.finish();
                        return res;
                    });
                }
                (_c = span) === null || _c === void 0 ? void 0 : _c.finish();
                return rv;
            };
        });
    };
    /**
     * @inheritDoc
     */
    Postgres.id = 'Postgres';
    return Postgres;
}());

//# sourceMappingURL=postgres.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/span.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/span.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpanRecorder": () => (/* binding */ SpanRecorder),
/* harmony export */   "Span": () => (/* binding */ Span)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/misc.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/time.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _spanstatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spanstatus */ "./node_modules/@sentry/tracing/esm/spanstatus.js");



/**
 * Keeps track of finished spans for a given transaction
 * @internal
 * @hideconstructor
 * @hidden
 */
var SpanRecorder = /** @class */ (function () {
    function SpanRecorder(maxlen) {
        if (maxlen === void 0) { maxlen = 1000; }
        this.spans = [];
        this._maxlen = maxlen;
    }
    /**
     * This is just so that we don't run out of memory while recording a lot
     * of spans. At some point we just stop and flush out the start of the
     * trace tree (i.e.the first n spans with the smallest
     * start_timestamp).
     */
    SpanRecorder.prototype.add = function (span) {
        if (this.spans.length > this._maxlen) {
            span.spanRecorder = undefined;
        }
        else {
            this.spans.push(span);
        }
    };
    return SpanRecorder;
}());

/**
 * Span contains all data about a span
 */
var Span = /** @class */ (function () {
    /**
     * You should never call the constructor manually, always use `Sentry.startTransaction()`
     * or call `startChild()` on an existing span.
     * @internal
     * @hideconstructor
     * @hidden
     */
    function Span(spanContext) {
        /**
         * @inheritDoc
         */
        this.traceId = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.uuid4)();
        /**
         * @inheritDoc
         */
        this.spanId = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.uuid4)().substring(16);
        /**
         * Timestamp in seconds when the span was created.
         */
        this.startTimestamp = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.timestampWithMs)();
        /**
         * @inheritDoc
         */
        this.tags = {};
        /**
         * @inheritDoc
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.data = {};
        if (!spanContext) {
            return this;
        }
        if (spanContext.traceId) {
            this.traceId = spanContext.traceId;
        }
        if (spanContext.spanId) {
            this.spanId = spanContext.spanId;
        }
        if (spanContext.parentSpanId) {
            this.parentSpanId = spanContext.parentSpanId;
        }
        // We want to include booleans as well here
        if ('sampled' in spanContext) {
            this.sampled = spanContext.sampled;
        }
        if (spanContext.op) {
            this.op = spanContext.op;
        }
        if (spanContext.description) {
            this.description = spanContext.description;
        }
        if (spanContext.data) {
            this.data = spanContext.data;
        }
        if (spanContext.tags) {
            this.tags = spanContext.tags;
        }
        if (spanContext.status) {
            this.status = spanContext.status;
        }
        if (spanContext.startTimestamp) {
            this.startTimestamp = spanContext.startTimestamp;
        }
        if (spanContext.endTimestamp) {
            this.endTimestamp = spanContext.endTimestamp;
        }
    }
    /**
     * @inheritDoc
     * @deprecated
     */
    Span.prototype.child = function (spanContext) {
        return this.startChild(spanContext);
    };
    /**
     * @inheritDoc
     */
    Span.prototype.startChild = function (spanContext) {
        var childSpan = new Span((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, spanContext), { parentSpanId: this.spanId, sampled: this.sampled, traceId: this.traceId }));
        childSpan.spanRecorder = this.spanRecorder;
        if (childSpan.spanRecorder) {
            childSpan.spanRecorder.add(childSpan);
        }
        childSpan.transaction = this.transaction;
        return childSpan;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.setTag = function (key, value) {
        var _a;
        this.tags = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.tags), (_a = {}, _a[key] = value, _a));
        return this;
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    Span.prototype.setData = function (key, value) {
        var _a;
        this.data = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.data), (_a = {}, _a[key] = value, _a));
        return this;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.setStatus = function (value) {
        this.status = value;
        return this;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.setHttpStatus = function (httpStatus) {
        this.setTag('http.status_code', String(httpStatus));
        var spanStatus = _spanstatus__WEBPACK_IMPORTED_MODULE_3__.SpanStatus.fromHttpCode(httpStatus);
        if (spanStatus !== _spanstatus__WEBPACK_IMPORTED_MODULE_3__.SpanStatus.UnknownError) {
            this.setStatus(spanStatus);
        }
        return this;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.isSuccess = function () {
        return this.status === _spanstatus__WEBPACK_IMPORTED_MODULE_3__.SpanStatus.Ok;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.finish = function (endTimestamp) {
        this.endTimestamp = typeof endTimestamp === 'number' ? endTimestamp : (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.timestampWithMs)();
    };
    /**
     * @inheritDoc
     */
    Span.prototype.toTraceparent = function () {
        var sampledString = '';
        if (this.sampled !== undefined) {
            sampledString = this.sampled ? '-1' : '-0';
        }
        return this.traceId + "-" + this.spanId + sampledString;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.toContext = function () {
        return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.dropUndefinedKeys)({
            data: this.data,
            description: this.description,
            endTimestamp: this.endTimestamp,
            op: this.op,
            parentSpanId: this.parentSpanId,
            sampled: this.sampled,
            spanId: this.spanId,
            startTimestamp: this.startTimestamp,
            status: this.status,
            tags: this.tags,
            traceId: this.traceId,
        });
    };
    /**
     * @inheritDoc
     */
    Span.prototype.updateWithContext = function (spanContext) {
        var _a, _b, _c, _d, _e;
        this.data = (_a = spanContext.data, (_a !== null && _a !== void 0 ? _a : {}));
        this.description = spanContext.description;
        this.endTimestamp = spanContext.endTimestamp;
        this.op = spanContext.op;
        this.parentSpanId = spanContext.parentSpanId;
        this.sampled = spanContext.sampled;
        this.spanId = (_b = spanContext.spanId, (_b !== null && _b !== void 0 ? _b : this.spanId));
        this.startTimestamp = (_c = spanContext.startTimestamp, (_c !== null && _c !== void 0 ? _c : this.startTimestamp));
        this.status = spanContext.status;
        this.tags = (_d = spanContext.tags, (_d !== null && _d !== void 0 ? _d : {}));
        this.traceId = (_e = spanContext.traceId, (_e !== null && _e !== void 0 ? _e : this.traceId));
        return this;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.getTraceContext = function () {
        return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.dropUndefinedKeys)({
            data: Object.keys(this.data).length > 0 ? this.data : undefined,
            description: this.description,
            op: this.op,
            parent_span_id: this.parentSpanId,
            span_id: this.spanId,
            status: this.status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
            trace_id: this.traceId,
        });
    };
    /**
     * @inheritDoc
     */
    Span.prototype.toJSON = function () {
        return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.dropUndefinedKeys)({
            data: Object.keys(this.data).length > 0 ? this.data : undefined,
            description: this.description,
            op: this.op,
            parent_span_id: this.parentSpanId,
            span_id: this.spanId,
            start_timestamp: this.startTimestamp,
            status: this.status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
            timestamp: this.endTimestamp,
            trace_id: this.traceId,
        });
    };
    return Span;
}());

//# sourceMappingURL=span.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/spanstatus.js":
/*!********************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/spanstatus.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpanStatus": () => (/* binding */ SpanStatus)
/* harmony export */ });
/** The status of an Span. */
// eslint-disable-next-line import/export
var SpanStatus;
(function (SpanStatus) {
    /** The operation completed successfully. */
    SpanStatus["Ok"] = "ok";
    /** Deadline expired before operation could complete. */
    SpanStatus["DeadlineExceeded"] = "deadline_exceeded";
    /** 401 Unauthorized (actually does mean unauthenticated according to RFC 7235) */
    SpanStatus["Unauthenticated"] = "unauthenticated";
    /** 403 Forbidden */
    SpanStatus["PermissionDenied"] = "permission_denied";
    /** 404 Not Found. Some requested entity (file or directory) was not found. */
    SpanStatus["NotFound"] = "not_found";
    /** 429 Too Many Requests */
    SpanStatus["ResourceExhausted"] = "resource_exhausted";
    /** Client specified an invalid argument. 4xx. */
    SpanStatus["InvalidArgument"] = "invalid_argument";
    /** 501 Not Implemented */
    SpanStatus["Unimplemented"] = "unimplemented";
    /** 503 Service Unavailable */
    SpanStatus["Unavailable"] = "unavailable";
    /** Other/generic 5xx. */
    SpanStatus["InternalError"] = "internal_error";
    /** Unknown. Any non-standard HTTP status code. */
    SpanStatus["UnknownError"] = "unknown_error";
    /** The operation was cancelled (typically by the user). */
    SpanStatus["Cancelled"] = "cancelled";
    /** Already exists (409) */
    SpanStatus["AlreadyExists"] = "already_exists";
    /** Operation was rejected because the system is not in a state required for the operation's */
    SpanStatus["FailedPrecondition"] = "failed_precondition";
    /** The operation was aborted, typically due to a concurrency issue. */
    SpanStatus["Aborted"] = "aborted";
    /** Operation was attempted past the valid range. */
    SpanStatus["OutOfRange"] = "out_of_range";
    /** Unrecoverable data loss or corruption */
    SpanStatus["DataLoss"] = "data_loss";
})(SpanStatus || (SpanStatus = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace, import/export
(function (SpanStatus) {
    /**
     * Converts a HTTP status code into a {@link SpanStatus}.
     *
     * @param httpStatus The HTTP response status code.
     * @returns The span status or {@link SpanStatus.UnknownError}.
     */
    function fromHttpCode(httpStatus) {
        if (httpStatus < 400 && httpStatus >= 100) {
            return SpanStatus.Ok;
        }
        if (httpStatus >= 400 && httpStatus < 500) {
            switch (httpStatus) {
                case 401:
                    return SpanStatus.Unauthenticated;
                case 403:
                    return SpanStatus.PermissionDenied;
                case 404:
                    return SpanStatus.NotFound;
                case 409:
                    return SpanStatus.AlreadyExists;
                case 413:
                    return SpanStatus.FailedPrecondition;
                case 429:
                    return SpanStatus.ResourceExhausted;
                default:
                    return SpanStatus.InvalidArgument;
            }
        }
        if (httpStatus >= 500 && httpStatus < 600) {
            switch (httpStatus) {
                case 501:
                    return SpanStatus.Unimplemented;
                case 503:
                    return SpanStatus.Unavailable;
                case 504:
                    return SpanStatus.DeadlineExceeded;
                default:
                    return SpanStatus.InternalError;
            }
        }
        return SpanStatus.UnknownError;
    }
    SpanStatus.fromHttpCode = fromHttpCode;
})(SpanStatus || (SpanStatus = {}));
//# sourceMappingURL=spanstatus.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/transaction.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/transaction.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transaction": () => (/* binding */ Transaction)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/hub.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/transport.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./span */ "./node_modules/@sentry/tracing/esm/span.js");





/** JSDoc */
var Transaction = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Transaction, _super);
    /**
     * This constructor should never be called manually. Those instrumenting tracing should use
     * `Sentry.startTransaction()`, and internal methods should use `hub.startTransaction()`.
     * @internal
     * @hideconstructor
     * @hidden
     */
    function Transaction(transactionContext, hub) {
        var _this = _super.call(this, transactionContext) || this;
        _this._measurements = {};
        /**
         * The reference to the current hub.
         */
        _this._hub = (0,_sentry_hub__WEBPACK_IMPORTED_MODULE_1__.getCurrentHub)();
        if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.isInstanceOf)(hub, _sentry_hub__WEBPACK_IMPORTED_MODULE_1__.Hub)) {
            _this._hub = hub;
        }
        _this.name = transactionContext.name || '';
        _this.metadata = transactionContext.metadata || {};
        _this._trimEnd = transactionContext.trimEnd;
        // this is because transactions are also spans, and spans have a transaction pointer
        _this.transaction = _this;
        return _this;
    }
    /**
     * JSDoc
     */
    Transaction.prototype.setName = function (name) {
        this.name = name;
    };
    /**
     * Attaches SpanRecorder to the span itself
     * @param maxlen maximum number of spans that can be recorded
     */
    Transaction.prototype.initSpanRecorder = function (maxlen) {
        if (maxlen === void 0) { maxlen = 1000; }
        if (!this.spanRecorder) {
            this.spanRecorder = new _span__WEBPACK_IMPORTED_MODULE_3__.SpanRecorder(maxlen);
        }
        this.spanRecorder.add(this);
    };
    /**
     * Set observed measurements for this transaction.
     * @hidden
     */
    Transaction.prototype.setMeasurements = function (measurements) {
        this._measurements = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, measurements);
    };
    /**
     * Set metadata for this transaction.
     * @hidden
     */
    Transaction.prototype.setMetadata = function (newMetadata) {
        this.metadata = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this.metadata), newMetadata);
    };
    /**
     * @inheritDoc
     */
    Transaction.prototype.finish = function (endTimestamp) {
        var _this = this;
        var _a, _b, _c, _d, _e;
        // This transaction is already finished, so we should not flush it again.
        if (this.endTimestamp !== undefined) {
            return undefined;
        }
        if (!this.name) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.warn('Transaction has no name, falling back to `<unlabeled transaction>`.');
            this.name = '<unlabeled transaction>';
        }
        // just sets the end timestamp
        _super.prototype.finish.call(this, endTimestamp);
        if (this.sampled !== true) {
            // At this point if `sampled !== true` we want to discard the transaction.
            _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log('[Tracing] Discarding transaction because its trace was not chosen to be sampled.');
            (_e = (_c = (_a = this._hub
                .getClient()) === null || _a === void 0 ? void 0 : (_b = _a).getTransport) === null || _c === void 0 ? void 0 : (_d = _c.call(_b)).recordLostEvent) === null || _e === void 0 ? void 0 : _e.call(_d, _sentry_types__WEBPACK_IMPORTED_MODULE_5__.Outcome.SampleRate, 'transaction');
            return undefined;
        }
        var finishedSpans = this.spanRecorder ? this.spanRecorder.spans.filter(function (s) { return s !== _this && s.endTimestamp; }) : [];
        if (this._trimEnd && finishedSpans.length > 0) {
            this.endTimestamp = finishedSpans.reduce(function (prev, current) {
                if (prev.endTimestamp && current.endTimestamp) {
                    return prev.endTimestamp > current.endTimestamp ? prev : current;
                }
                return prev;
            }).endTimestamp;
        }
        var transaction = {
            contexts: {
                trace: this.getTraceContext(),
            },
            spans: finishedSpans,
            start_timestamp: this.startTimestamp,
            tags: this.tags,
            timestamp: this.endTimestamp,
            transaction: this.name,
            type: 'transaction',
            debug_meta: this.metadata,
        };
        var hasMeasurements = Object.keys(this._measurements).length > 0;
        if (hasMeasurements) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log('[Measurements] Adding measurements to transaction', JSON.stringify(this._measurements, undefined, 2));
            transaction.measurements = this._measurements;
        }
        _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log("[Tracing] Finishing " + this.op + " transaction: " + this.name + ".");
        return this._hub.captureEvent(transaction);
    };
    /**
     * @inheritDoc
     */
    Transaction.prototype.toContext = function () {
        var spanContext = _super.prototype.toContext.call(this);
        return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_6__.dropUndefinedKeys)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, spanContext), { name: this.name, trimEnd: this._trimEnd }));
    };
    /**
     * @inheritDoc
     */
    Transaction.prototype.updateWithContext = function (transactionContext) {
        var _a;
        _super.prototype.updateWithContext.call(this, transactionContext);
        this.name = (_a = transactionContext.name, (_a !== null && _a !== void 0 ? _a : ''));
        this._trimEnd = transactionContext.trimEnd;
        return this;
    };
    return Transaction;
}(_span__WEBPACK_IMPORTED_MODULE_3__.Span));

//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/utils.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TRACEPARENT_REGEXP": () => (/* binding */ TRACEPARENT_REGEXP),
/* harmony export */   "hasTracingEnabled": () => (/* binding */ hasTracingEnabled),
/* harmony export */   "extractTraceparentData": () => (/* binding */ extractTraceparentData),
/* harmony export */   "getActiveTransaction": () => (/* binding */ getActiveTransaction),
/* harmony export */   "msToSec": () => (/* binding */ msToSec),
/* harmony export */   "secToMs": () => (/* binding */ secToMs),
/* harmony export */   "stripUrlQueryAndFragment": () => (/* reexport safe */ _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.stripUrlQueryAndFragment)
/* harmony export */ });
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/hub.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/misc.js");

var TRACEPARENT_REGEXP = new RegExp('^[ \\t]*' + // whitespace
    '([0-9a-f]{32})?' + // trace_id
    '-?([0-9a-f]{16})?' + // span_id
    '-?([01])?' + // sampled
    '[ \\t]*$');
/**
 * Determines if tracing is currently enabled.
 *
 * Tracing is enabled when at least one of `tracesSampleRate` and `tracesSampler` is defined in the SDK config.
 */
function hasTracingEnabled(options) {
    if (options === void 0) { options = (_a = (0,_sentry_hub__WEBPACK_IMPORTED_MODULE_0__.getCurrentHub)()
        .getClient()) === null || _a === void 0 ? void 0 : _a.getOptions(); }
    var _a;
    return !!options && ('tracesSampleRate' in options || 'tracesSampler' in options);
}
/**
 * Extract transaction context data from a `sentry-trace` header.
 *
 * @param traceparent Traceparent string
 *
 * @returns Object containing data from the header, or undefined if traceparent string is malformed
 */
function extractTraceparentData(traceparent) {
    var matches = traceparent.match(TRACEPARENT_REGEXP);
    if (matches) {
        var parentSampled = void 0;
        if (matches[3] === '1') {
            parentSampled = true;
        }
        else if (matches[3] === '0') {
            parentSampled = false;
        }
        return {
            traceId: matches[1],
            parentSampled: parentSampled,
            parentSpanId: matches[2],
        };
    }
    return undefined;
}
/** Grabs active transaction off scope, if any */
function getActiveTransaction(hub) {
    if (hub === void 0) { hub = (0,_sentry_hub__WEBPACK_IMPORTED_MODULE_0__.getCurrentHub)(); }
    var _a, _b;
    return (_b = (_a = hub) === null || _a === void 0 ? void 0 : _a.getScope()) === null || _b === void 0 ? void 0 : _b.getTransaction();
}
/**
 * Converts from milliseconds to seconds
 * @param time time in ms
 */
function msToSec(time) {
    return time / 1000;
}
/**
 * Converts from seconds to milliseconds
 * @param time time in seconds
 */
function secToMs(time) {
    return time * 1000;
}
// so it can be used in manual instrumentation without necessitating a hard dependency on @sentry/utils

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@sentry/types/esm/session.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/types/esm/session.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionStatus": () => (/* binding */ SessionStatus),
/* harmony export */   "RequestSessionStatus": () => (/* binding */ RequestSessionStatus)
/* harmony export */ });
/**
 * Session Status
 */
var SessionStatus;
(function (SessionStatus) {
    /** JSDoc */
    SessionStatus["Ok"] = "ok";
    /** JSDoc */
    SessionStatus["Exited"] = "exited";
    /** JSDoc */
    SessionStatus["Crashed"] = "crashed";
    /** JSDoc */
    SessionStatus["Abnormal"] = "abnormal";
})(SessionStatus || (SessionStatus = {}));
var RequestSessionStatus;
(function (RequestSessionStatus) {
    /** JSDoc */
    RequestSessionStatus["Ok"] = "ok";
    /** JSDoc */
    RequestSessionStatus["Errored"] = "errored";
    /** JSDoc */
    RequestSessionStatus["Crashed"] = "crashed";
})(RequestSessionStatus || (RequestSessionStatus = {}));
//# sourceMappingURL=session.js.map

/***/ }),

/***/ "./node_modules/@sentry/types/esm/severity.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/types/esm/severity.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Severity": () => (/* binding */ Severity)
/* harmony export */ });
/** JSDoc */
// eslint-disable-next-line import/export
var Severity;
(function (Severity) {
    /** JSDoc */
    Severity["Fatal"] = "fatal";
    /** JSDoc */
    Severity["Error"] = "error";
    /** JSDoc */
    Severity["Warning"] = "warning";
    /** JSDoc */
    Severity["Log"] = "log";
    /** JSDoc */
    Severity["Info"] = "info";
    /** JSDoc */
    Severity["Debug"] = "debug";
    /** JSDoc */
    Severity["Critical"] = "critical";
})(Severity || (Severity = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace, import/export
(function (Severity) {
    /**
     * Converts a string-based level into a {@link Severity}.
     *
     * @param level string representation of Severity
     * @returns Severity
     */
    function fromString(level) {
        switch (level) {
            case 'debug':
                return Severity.Debug;
            case 'info':
                return Severity.Info;
            case 'warn':
            case 'warning':
                return Severity.Warning;
            case 'error':
                return Severity.Error;
            case 'fatal':
                return Severity.Fatal;
            case 'critical':
                return Severity.Critical;
            case 'log':
            default:
                return Severity.Log;
        }
    }
    Severity.fromString = fromString;
})(Severity || (Severity = {}));
//# sourceMappingURL=severity.js.map

/***/ }),

/***/ "./node_modules/@sentry/types/esm/status.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/types/esm/status.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Status": () => (/* binding */ Status)
/* harmony export */ });
/** The status of an event. */
// eslint-disable-next-line import/export
var Status;
(function (Status) {
    /** The status could not be determined. */
    Status["Unknown"] = "unknown";
    /** The event was skipped due to configuration or callbacks. */
    Status["Skipped"] = "skipped";
    /** The event was sent to Sentry successfully. */
    Status["Success"] = "success";
    /** The client is currently rate limited and will try again later. */
    Status["RateLimit"] = "rate_limit";
    /** The event could not be processed. */
    Status["Invalid"] = "invalid";
    /** A server-side error occurred during submission. */
    Status["Failed"] = "failed";
})(Status || (Status = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace, import/export
(function (Status) {
    /**
     * Converts a HTTP status code into a {@link Status}.
     *
     * @param code The HTTP response status code.
     * @returns The send status or {@link Status.Unknown}.
     */
    function fromHttpCode(code) {
        if (code >= 200 && code < 300) {
            return Status.Success;
        }
        if (code === 429) {
            return Status.RateLimit;
        }
        if (code >= 400 && code < 500) {
            return Status.Invalid;
        }
        if (code >= 500) {
            return Status.Failed;
        }
        return Status.Unknown;
    }
    Status.fromHttpCode = fromHttpCode;
})(Status || (Status = {}));
//# sourceMappingURL=status.js.map

/***/ }),

/***/ "./node_modules/@sentry/types/esm/transaction.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sentry/types/esm/transaction.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionSamplingMethod": () => (/* binding */ TransactionSamplingMethod)
/* harmony export */ });
var TransactionSamplingMethod;
(function (TransactionSamplingMethod) {
    TransactionSamplingMethod["Explicit"] = "explicitly_set";
    TransactionSamplingMethod["Sampler"] = "client_sampler";
    TransactionSamplingMethod["Rate"] = "client_rate";
    TransactionSamplingMethod["Inheritance"] = "inheritance";
})(TransactionSamplingMethod || (TransactionSamplingMethod = {}));
//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ "./node_modules/@sentry/types/esm/transport.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/types/esm/transport.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Outcome": () => (/* binding */ Outcome)
/* harmony export */ });
var Outcome;
(function (Outcome) {
    Outcome["BeforeSend"] = "before_send";
    Outcome["EventProcessor"] = "event_processor";
    Outcome["NetworkError"] = "network_error";
    Outcome["QueueOverflow"] = "queue_overflow";
    Outcome["RateLimitBackoff"] = "ratelimit_backoff";
    Outcome["SampleRate"] = "sample_rate";
})(Outcome || (Outcome = {}));
//# sourceMappingURL=transport.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/async.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/async.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forget": () => (/* binding */ forget)
/* harmony export */ });
/**
 * Consumes the promise and logs the error when it rejects.
 * @param promise A promise to forget.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function forget(promise) {
    void promise.then(null, function (e) {
        // TODO: Use a better logging mechanism
        // eslint-disable-next-line no-console
        console.error(e);
    });
}
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/browser.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/browser.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "htmlTreeAsString": () => (/* binding */ htmlTreeAsString),
/* harmony export */   "getLocationHref": () => (/* binding */ getLocationHref)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");


/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function htmlTreeAsString(elem, keyAttrs) {
    // try/catch both:
    // - accessing event.target (see getsentry/raven-js#838, #768)
    // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
    // - can throw an exception in some circumstances.
    try {
        var currentElem = elem;
        var MAX_TRAVERSE_HEIGHT = 5;
        var MAX_OUTPUT_LEN = 80;
        var out = [];
        var height = 0;
        var len = 0;
        var separator = ' > ';
        var sepLength = separator.length;
        var nextStr = void 0;
        // eslint-disable-next-line no-plusplus
        while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
            nextStr = _htmlElementAsString(currentElem, keyAttrs);
            // bail out if
            // - nextStr is the 'html' element
            // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
            //   (ignore this limit if we are on the first iteration)
            if (nextStr === 'html' || (height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN)) {
                break;
            }
            out.push(nextStr);
            len += nextStr.length;
            currentElem = currentElem.parentNode;
        }
        return out.reverse().join(separator);
    }
    catch (_oO) {
        return '<unknown>';
    }
}
/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function _htmlElementAsString(el, keyAttrs) {
    var _a, _b;
    var elem = el;
    var out = [];
    var className;
    var classes;
    var key;
    var attr;
    var i;
    if (!elem || !elem.tagName) {
        return '';
    }
    out.push(elem.tagName.toLowerCase());
    // Pairs of attribute keys defined in `serializeAttribute` and their values on element.
    var keyAttrPairs = ((_a = keyAttrs) === null || _a === void 0 ? void 0 : _a.length) ? keyAttrs.filter(function (keyAttr) { return elem.getAttribute(keyAttr); }).map(function (keyAttr) { return [keyAttr, elem.getAttribute(keyAttr)]; })
        : null;
    if ((_b = keyAttrPairs) === null || _b === void 0 ? void 0 : _b.length) {
        keyAttrPairs.forEach(function (keyAttrPair) {
            out.push("[" + keyAttrPair[0] + "=\"" + keyAttrPair[1] + "\"]");
        });
    }
    else {
        if (elem.id) {
            out.push("#" + elem.id);
        }
        // eslint-disable-next-line prefer-const
        className = elem.className;
        if (className && (0,_is__WEBPACK_IMPORTED_MODULE_0__.isString)(className)) {
            classes = className.split(/\s+/);
            for (i = 0; i < classes.length; i++) {
                out.push("." + classes[i]);
            }
        }
    }
    var allowedAttrs = ['type', 'name', 'title', 'alt'];
    for (i = 0; i < allowedAttrs.length; i++) {
        key = allowedAttrs[i];
        attr = elem.getAttribute(key);
        if (attr) {
            out.push("[" + key + "=\"" + attr + "\"]");
        }
    }
    return out.join('');
}
/**
 * A safe form of location.href
 */
function getLocationHref() {
    var global = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobalObject)();
    try {
        return global.document.location.href;
    }
    catch (oO) {
        return '';
    }
}
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/dsn.js":
/*!***********************************************!*\
  !*** ./node_modules/@sentry/utils/esm/dsn.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dsn": () => (/* binding */ Dsn)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./node_modules/@sentry/utils/esm/error.js");


/** Regular expression used to parse a Dsn. */
var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
/** Error message */
var ERROR_MESSAGE = 'Invalid Dsn';
/** The Sentry Dsn, identifying a Sentry instance and project. */
var Dsn = /** @class */ (function () {
    /** Creates a new Dsn component */
    function Dsn(from) {
        if (typeof from === 'string') {
            this._fromString(from);
        }
        else {
            this._fromComponents(from);
        }
        this._validate();
    }
    /**
     * Renders the string representation of this Dsn.
     *
     * By default, this will render the public representation without the password
     * component. To get the deprecated private representation, set `withPassword`
     * to true.
     *
     * @param withPassword When set to true, the password will be included.
     */
    Dsn.prototype.toString = function (withPassword) {
        if (withPassword === void 0) { withPassword = false; }
        var _a = this, host = _a.host, path = _a.path, pass = _a.pass, port = _a.port, projectId = _a.projectId, protocol = _a.protocol, publicKey = _a.publicKey;
        return (protocol + "://" + publicKey + (withPassword && pass ? ":" + pass : '') +
            ("@" + host + (port ? ":" + port : '') + "/" + (path ? path + "/" : path) + projectId));
    };
    /** Parses a string into this Dsn. */
    Dsn.prototype._fromString = function (str) {
        var match = DSN_REGEX.exec(str);
        if (!match) {
            throw new _error__WEBPACK_IMPORTED_MODULE_0__.SentryError(ERROR_MESSAGE);
        }
        var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(match.slice(1), 6), protocol = _a[0], publicKey = _a[1], _b = _a[2], pass = _b === void 0 ? '' : _b, host = _a[3], _c = _a[4], port = _c === void 0 ? '' : _c, lastPath = _a[5];
        var path = '';
        var projectId = lastPath;
        var split = projectId.split('/');
        if (split.length > 1) {
            path = split.slice(0, -1).join('/');
            projectId = split.pop();
        }
        if (projectId) {
            var projectMatch = projectId.match(/^\d+/);
            if (projectMatch) {
                projectId = projectMatch[0];
            }
        }
        this._fromComponents({ host: host, pass: pass, path: path, projectId: projectId, port: port, protocol: protocol, publicKey: publicKey });
    };
    /** Maps Dsn components into this instance. */
    Dsn.prototype._fromComponents = function (components) {
        // TODO this is for backwards compatibility, and can be removed in a future version
        if ('user' in components && !('publicKey' in components)) {
            components.publicKey = components.user;
        }
        this.user = components.publicKey || '';
        this.protocol = components.protocol;
        this.publicKey = components.publicKey || '';
        this.pass = components.pass || '';
        this.host = components.host;
        this.port = components.port || '';
        this.path = components.path || '';
        this.projectId = components.projectId;
    };
    /** Validates this Dsn and throws on error. */
    Dsn.prototype._validate = function () {
        var _this = this;
        ['protocol', 'publicKey', 'host', 'projectId'].forEach(function (component) {
            if (!_this[component]) {
                throw new _error__WEBPACK_IMPORTED_MODULE_0__.SentryError(ERROR_MESSAGE + ": " + component + " missing");
            }
        });
        if (!this.projectId.match(/^\d+$/)) {
            throw new _error__WEBPACK_IMPORTED_MODULE_0__.SentryError(ERROR_MESSAGE + ": Invalid projectId " + this.projectId);
        }
        if (this.protocol !== 'http' && this.protocol !== 'https') {
            throw new _error__WEBPACK_IMPORTED_MODULE_0__.SentryError(ERROR_MESSAGE + ": Invalid protocol " + this.protocol);
        }
        if (this.port && isNaN(parseInt(this.port, 10))) {
            throw new _error__WEBPACK_IMPORTED_MODULE_0__.SentryError(ERROR_MESSAGE + ": Invalid port " + this.port);
        }
    };
    return Dsn;
}());

//# sourceMappingURL=dsn.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/error.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/error.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SentryError": () => (/* binding */ SentryError)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfill */ "./node_modules/@sentry/utils/esm/polyfill.js");


/** An error emitted by Sentry SDKs and related utilities. */
var SentryError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SentryError, _super);
    function SentryError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = _newTarget.prototype.constructor.name;
        (0,_polyfill__WEBPACK_IMPORTED_MODULE_1__.setPrototypeOf)(_this, _newTarget.prototype);
        return _this;
    }
    return SentryError;
}(Error));

//# sourceMappingURL=error.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/global.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/global.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGlobalObject": () => (/* binding */ getGlobalObject)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./node_modules/@sentry/utils/esm/node.js");
/**
 * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
 * you must either a) use `console.log` rather than the logger, or b) put your function elsewhere.
 */

var fallbackGlobalObject = {};
/**
 * Safely get global scope object
 *
 * @returns Global scope object
 */
function getGlobalObject() {
    return ((0,_node__WEBPACK_IMPORTED_MODULE_0__.isNodeEnv)()
        ? __webpack_require__.g
        : typeof window !== 'undefined' // eslint-disable-line no-restricted-globals
            ? window // eslint-disable-line no-restricted-globals
            : typeof self !== 'undefined'
                ? self
                : fallbackGlobalObject);
}
//# sourceMappingURL=global.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/instrument.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/instrument.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addInstrumentationHandler": () => (/* binding */ addInstrumentationHandler)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _stacktrace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stacktrace */ "./node_modules/@sentry/utils/esm/stacktrace.js");
/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supports */ "./node_modules/@sentry/utils/esm/supports.js");







var global = (0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
/**
 * Instrument native APIs to call handlers that can be used to create breadcrumbs, APM spans etc.
 *  - Console API
 *  - Fetch API
 *  - XHR API
 *  - History API
 *  - DOM API (click/typing)
 *  - Error API
 *  - UnhandledRejection API
 */
var handlers = {};
var instrumented = {};
/** Instruments given API */
function instrument(type) {
    if (instrumented[type]) {
        return;
    }
    instrumented[type] = true;
    switch (type) {
        case 'console':
            instrumentConsole();
            break;
        case 'dom':
            instrumentDOM();
            break;
        case 'xhr':
            instrumentXHR();
            break;
        case 'fetch':
            instrumentFetch();
            break;
        case 'history':
            instrumentHistory();
            break;
        case 'error':
            instrumentError();
            break;
        case 'unhandledrejection':
            instrumentUnhandledRejection();
            break;
        default:
            _logger__WEBPACK_IMPORTED_MODULE_1__.logger.warn('unknown instrumentation type:', type);
    }
}
/**
 * Add handler that will be called when given type of instrumentation triggers.
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addInstrumentationHandler(handler) {
    if (!handler || typeof handler.type !== 'string' || typeof handler.callback !== 'function') {
        return;
    }
    handlers[handler.type] = handlers[handler.type] || [];
    handlers[handler.type].push(handler.callback);
    instrument(handler.type);
}
/** JSDoc */
function triggerHandlers(type, data) {
    var e_1, _a;
    if (!type || !handlers[type]) {
        return;
    }
    try {
        for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__values)(handlers[type] || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var handler = _c.value;
            try {
                handler(data);
            }
            catch (e) {
                _logger__WEBPACK_IMPORTED_MODULE_1__.logger.error("Error while triggering instrumentation handler.\nType: " + type + "\nName: " + (0,_stacktrace__WEBPACK_IMPORTED_MODULE_3__.getFunctionName)(handler) + "\nError: " + e);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
/** JSDoc */
function instrumentConsole() {
    if (!('console' in global)) {
        return;
    }
    ['debug', 'info', 'warn', 'error', 'log', 'assert'].forEach(function (level) {
        if (!(level in global.console)) {
            return;
        }
        (0,_object__WEBPACK_IMPORTED_MODULE_4__.fill)(global.console, level, function (originalConsoleLevel) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                triggerHandlers('console', { args: args, level: level });
                // this fails for some browsers. :(
                if (originalConsoleLevel) {
                    Function.prototype.apply.call(originalConsoleLevel, global.console, args);
                }
            };
        });
    });
}
/** JSDoc */
function instrumentFetch() {
    if (!(0,_supports__WEBPACK_IMPORTED_MODULE_5__.supportsNativeFetch)()) {
        return;
    }
    (0,_object__WEBPACK_IMPORTED_MODULE_4__.fill)(global, 'fetch', function (originalFetch) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var handlerData = {
                args: args,
                fetchData: {
                    method: getFetchMethod(args),
                    url: getFetchUrl(args),
                },
                startTimestamp: Date.now(),
            };
            triggerHandlers('fetch', (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, handlerData));
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return originalFetch.apply(global, args).then(function (response) {
                triggerHandlers('fetch', (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, handlerData), { endTimestamp: Date.now(), response: response }));
                return response;
            }, function (error) {
                triggerHandlers('fetch', (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, handlerData), { endTimestamp: Date.now(), error: error }));
                // NOTE: If you are a Sentry user, and you are seeing this stack frame,
                //       it means the sentry.javascript SDK caught an error invoking your application code.
                //       This is expected behavior and NOT indicative of a bug with sentry.javascript.
                throw error;
            });
        };
    });
}
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/** Extract `method` from fetch call arguments */
function getFetchMethod(fetchArgs) {
    if (fetchArgs === void 0) { fetchArgs = []; }
    if ('Request' in global && (0,_is__WEBPACK_IMPORTED_MODULE_6__.isInstanceOf)(fetchArgs[0], Request) && fetchArgs[0].method) {
        return String(fetchArgs[0].method).toUpperCase();
    }
    if (fetchArgs[1] && fetchArgs[1].method) {
        return String(fetchArgs[1].method).toUpperCase();
    }
    return 'GET';
}
/** Extract `url` from fetch call arguments */
function getFetchUrl(fetchArgs) {
    if (fetchArgs === void 0) { fetchArgs = []; }
    if (typeof fetchArgs[0] === 'string') {
        return fetchArgs[0];
    }
    if ('Request' in global && (0,_is__WEBPACK_IMPORTED_MODULE_6__.isInstanceOf)(fetchArgs[0], Request)) {
        return fetchArgs[0].url;
    }
    return String(fetchArgs[0]);
}
/* eslint-enable @typescript-eslint/no-unsafe-member-access */
/** JSDoc */
function instrumentXHR() {
    if (!('XMLHttpRequest' in global)) {
        return;
    }
    // Poor man's implementation of ES6 `Map`, tracking and keeping in sync key and value separately.
    var requestKeys = [];
    var requestValues = [];
    var xhrproto = XMLHttpRequest.prototype;
    (0,_object__WEBPACK_IMPORTED_MODULE_4__.fill)(xhrproto, 'open', function (originalOpen) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var xhr = this;
            var url = args[1];
            xhr.__sentry_xhr__ = {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                method: (0,_is__WEBPACK_IMPORTED_MODULE_6__.isString)(args[0]) ? args[0].toUpperCase() : args[0],
                url: args[1],
            };
            // if Sentry key appears in URL, don't capture it as a request
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if ((0,_is__WEBPACK_IMPORTED_MODULE_6__.isString)(url) && xhr.__sentry_xhr__.method === 'POST' && url.match(/sentry_key/)) {
                xhr.__sentry_own_request__ = true;
            }
            var onreadystatechangeHandler = function () {
                if (xhr.readyState === 4) {
                    try {
                        // touching statusCode in some platforms throws
                        // an exception
                        if (xhr.__sentry_xhr__) {
                            xhr.__sentry_xhr__.status_code = xhr.status;
                        }
                    }
                    catch (e) {
                        /* do nothing */
                    }
                    try {
                        var requestPos = requestKeys.indexOf(xhr);
                        if (requestPos !== -1) {
                            // Make sure to pop both key and value to keep it in sync.
                            requestKeys.splice(requestPos);
                            var args_1 = requestValues.splice(requestPos)[0];
                            if (xhr.__sentry_xhr__ && args_1[0] !== undefined) {
                                xhr.__sentry_xhr__.body = args_1[0];
                            }
                        }
                    }
                    catch (e) {
                        /* do nothing */
                    }
                    triggerHandlers('xhr', {
                        args: args,
                        endTimestamp: Date.now(),
                        startTimestamp: Date.now(),
                        xhr: xhr,
                    });
                }
            };
            if ('onreadystatechange' in xhr && typeof xhr.onreadystatechange === 'function') {
                (0,_object__WEBPACK_IMPORTED_MODULE_4__.fill)(xhr, 'onreadystatechange', function (original) {
                    return function () {
                        var readyStateArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            readyStateArgs[_i] = arguments[_i];
                        }
                        onreadystatechangeHandler();
                        return original.apply(xhr, readyStateArgs);
                    };
                });
            }
            else {
                xhr.addEventListener('readystatechange', onreadystatechangeHandler);
            }
            return originalOpen.apply(xhr, args);
        };
    });
    (0,_object__WEBPACK_IMPORTED_MODULE_4__.fill)(xhrproto, 'send', function (originalSend) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            requestKeys.push(this);
            requestValues.push(args);
            triggerHandlers('xhr', {
                args: args,
                startTimestamp: Date.now(),
                xhr: this,
            });
            return originalSend.apply(this, args);
        };
    });
}
var lastHref;
/** JSDoc */
function instrumentHistory() {
    if (!(0,_supports__WEBPACK_IMPORTED_MODULE_5__.supportsHistory)()) {
        return;
    }
    var oldOnPopState = global.onpopstate;
    global.onpopstate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var to = global.location.href;
        // keep track of the current URL state, as we always receive only the updated state
        var from = lastHref;
        lastHref = to;
        triggerHandlers('history', {
            from: from,
            to: to,
        });
        if (oldOnPopState) {
            // Apparently this can throw in Firefox when incorrectly implemented plugin is installed.
            // https://github.com/getsentry/sentry-javascript/issues/3344
            // https://github.com/bugsnag/bugsnag-js/issues/469
            try {
                return oldOnPopState.apply(this, args);
            }
            catch (_oO) {
                // no-empty
            }
        }
    };
    /** @hidden */
    function historyReplacementFunction(originalHistoryFunction) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var url = args.length > 2 ? args[2] : undefined;
            if (url) {
                // coerce to string (this is what pushState does)
                var from = lastHref;
                var to = String(url);
                // keep track of the current URL state, as we always receive only the updated state
                lastHref = to;
                triggerHandlers('history', {
                    from: from,
                    to: to,
                });
            }
            return originalHistoryFunction.apply(this, args);
        };
    }
    (0,_object__WEBPACK_IMPORTED_MODULE_4__.fill)(global.history, 'pushState', historyReplacementFunction);
    (0,_object__WEBPACK_IMPORTED_MODULE_4__.fill)(global.history, 'replaceState', historyReplacementFunction);
}
var debounceDuration = 1000;
var debounceTimerID;
var lastCapturedEvent;
/**
 * Decide whether the current event should finish the debounce of previously captured one.
 * @param previous previously captured event
 * @param current event to be captured
 */
function shouldShortcircuitPreviousDebounce(previous, current) {
    // If there was no previous event, it should always be swapped for the new one.
    if (!previous) {
        return true;
    }
    // If both events have different type, then user definitely performed two separate actions. e.g. click + keypress.
    if (previous.type !== current.type) {
        return true;
    }
    try {
        // If both events have the same type, it's still possible that actions were performed on different targets.
        // e.g. 2 clicks on different buttons.
        if (previous.target !== current.target) {
            return true;
        }
    }
    catch (e) {
        // just accessing `target` property can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/sentry-javascript/issues/838
    }
    // If both events have the same type _and_ same `target` (an element which triggered an event, _not necessarily_
    // to which an event listener was attached), we treat them as the same action, as we want to capture
    // only one breadcrumb. e.g. multiple clicks on the same button, or typing inside a user input box.
    return false;
}
/**
 * Decide whether an event should be captured.
 * @param event event to be captured
 */
function shouldSkipDOMEvent(event) {
    // We are only interested in filtering `keypress` events for now.
    if (event.type !== 'keypress') {
        return false;
    }
    try {
        var target = event.target;
        if (!target || !target.tagName) {
            return true;
        }
        // Only consider keypress events on actual input elements. This will disregard keypresses targeting body
        // e.g.tabbing through elements, hotkeys, etc.
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
            return false;
        }
    }
    catch (e) {
        // just accessing `target` property can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/sentry-javascript/issues/838
    }
    return true;
}
/**
 * Wraps addEventListener to capture UI breadcrumbs
 * @param handler function that will be triggered
 * @param globalListener indicates whether event was captured by the global event listener
 * @returns wrapped breadcrumb events handler
 * @hidden
 */
function makeDOMEventHandler(handler, globalListener) {
    if (globalListener === void 0) { globalListener = false; }
    return function (event) {
        // It's possible this handler might trigger multiple times for the same
        // event (e.g. event propagation through node ancestors).
        // Ignore if we've already captured that event.
        if (!event || lastCapturedEvent === event) {
            return;
        }
        // We always want to skip _some_ events.
        if (shouldSkipDOMEvent(event)) {
            return;
        }
        var name = event.type === 'keypress' ? 'input' : event.type;
        // If there is no debounce timer, it means that we can safely capture the new event and store it for future comparisons.
        if (debounceTimerID === undefined) {
            handler({
                event: event,
                name: name,
                global: globalListener,
            });
            lastCapturedEvent = event;
        }
        // If there is a debounce awaiting, see if the new event is different enough to treat it as a unique one.
        // If that's the case, emit the previous event and store locally the newly-captured DOM event.
        else if (shouldShortcircuitPreviousDebounce(lastCapturedEvent, event)) {
            handler({
                event: event,
                name: name,
                global: globalListener,
            });
            lastCapturedEvent = event;
        }
        // Start a new debounce timer that will prevent us from capturing multiple events that should be grouped together.
        clearTimeout(debounceTimerID);
        debounceTimerID = global.setTimeout(function () {
            debounceTimerID = undefined;
        }, debounceDuration);
    };
}
/** JSDoc */
function instrumentDOM() {
    if (!('document' in global)) {
        return;
    }
    // Make it so that any click or keypress that is unhandled / bubbled up all the way to the document triggers our dom
    // handlers. (Normally we have only one, which captures a breadcrumb for each click or keypress.) Do this before
    // we instrument `addEventListener` so that we don't end up attaching this handler twice.
    var triggerDOMHandler = triggerHandlers.bind(null, 'dom');
    var globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
    global.document.addEventListener('click', globalDOMEventHandler, false);
    global.document.addEventListener('keypress', globalDOMEventHandler, false);
    // After hooking into click and keypress events bubbled up to `document`, we also hook into user-handled
    // clicks & keypresses, by adding an event listener of our own to any element to which they add a listener. That
    // way, whenever one of their handlers is triggered, ours will be, too. (This is needed because their handler
    // could potentially prevent the event from bubbling up to our global listeners. This way, our handler are still
    // guaranteed to fire at least once.)
    ['EventTarget', 'Node'].forEach(function (target) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        var proto = global[target] && global[target].prototype;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-prototype-builtins
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
            return;
        }
        (0,_object__WEBPACK_IMPORTED_MODULE_4__.fill)(proto, 'addEventListener', function (originalAddEventListener) {
            return function (type, listener, options) {
                if (type === 'click' || type == 'keypress') {
                    try {
                        var el = this;
                        var handlers_1 = (el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {});
                        var handlerForType = (handlers_1[type] = handlers_1[type] || { refCount: 0 });
                        if (!handlerForType.handler) {
                            var handler = makeDOMEventHandler(triggerDOMHandler);
                            handlerForType.handler = handler;
                            originalAddEventListener.call(this, type, handler, options);
                        }
                        handlerForType.refCount += 1;
                    }
                    catch (e) {
                        // Accessing dom properties is always fragile.
                        // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
                    }
                }
                return originalAddEventListener.call(this, type, listener, options);
            };
        });
        (0,_object__WEBPACK_IMPORTED_MODULE_4__.fill)(proto, 'removeEventListener', function (originalRemoveEventListener) {
            return function (type, listener, options) {
                if (type === 'click' || type == 'keypress') {
                    try {
                        var el = this;
                        var handlers_2 = el.__sentry_instrumentation_handlers__ || {};
                        var handlerForType = handlers_2[type];
                        if (handlerForType) {
                            handlerForType.refCount -= 1;
                            // If there are no longer any custom handlers of the current type on this element, we can remove ours, too.
                            if (handlerForType.refCount <= 0) {
                                originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                                handlerForType.handler = undefined;
                                delete handlers_2[type]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
                            }
                            // If there are no longer any custom handlers of any type on this element, cleanup everything.
                            if (Object.keys(handlers_2).length === 0) {
                                delete el.__sentry_instrumentation_handlers__;
                            }
                        }
                    }
                    catch (e) {
                        // Accessing dom properties is always fragile.
                        // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
                    }
                }
                return originalRemoveEventListener.call(this, type, listener, options);
            };
        });
    });
}
var _oldOnErrorHandler = null;
/** JSDoc */
function instrumentError() {
    _oldOnErrorHandler = global.onerror;
    global.onerror = function (msg, url, line, column, error) {
        triggerHandlers('error', {
            column: column,
            error: error,
            line: line,
            msg: msg,
            url: url,
        });
        if (_oldOnErrorHandler) {
            // eslint-disable-next-line prefer-rest-params
            return _oldOnErrorHandler.apply(this, arguments);
        }
        return false;
    };
}
var _oldOnUnhandledRejectionHandler = null;
/** JSDoc */
function instrumentUnhandledRejection() {
    _oldOnUnhandledRejectionHandler = global.onunhandledrejection;
    global.onunhandledrejection = function (e) {
        triggerHandlers('unhandledrejection', e);
        if (_oldOnUnhandledRejectionHandler) {
            // eslint-disable-next-line prefer-rest-params
            return _oldOnUnhandledRejectionHandler.apply(this, arguments);
        }
        return true;
    };
}
//# sourceMappingURL=instrument.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/is.js":
/*!**********************************************!*\
  !*** ./node_modules/@sentry/utils/esm/is.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isError": () => (/* binding */ isError),
/* harmony export */   "isErrorEvent": () => (/* binding */ isErrorEvent),
/* harmony export */   "isDOMError": () => (/* binding */ isDOMError),
/* harmony export */   "isDOMException": () => (/* binding */ isDOMException),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isPrimitive": () => (/* binding */ isPrimitive),
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject),
/* harmony export */   "isEvent": () => (/* binding */ isEvent),
/* harmony export */   "isElement": () => (/* binding */ isElement),
/* harmony export */   "isRegExp": () => (/* binding */ isRegExp),
/* harmony export */   "isThenable": () => (/* binding */ isThenable),
/* harmony export */   "isSyntheticEvent": () => (/* binding */ isSyntheticEvent),
/* harmony export */   "isInstanceOf": () => (/* binding */ isInstanceOf)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isError(wat) {
    switch (Object.prototype.toString.call(wat)) {
        case '[object Error]':
            return true;
        case '[object Exception]':
            return true;
        case '[object DOMException]':
            return true;
        default:
            return isInstanceOf(wat, Error);
    }
}
/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isErrorEvent(wat) {
    return Object.prototype.toString.call(wat) === '[object ErrorEvent]';
}
/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMError(wat) {
    return Object.prototype.toString.call(wat) === '[object DOMError]';
}
/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMException(wat) {
    return Object.prototype.toString.call(wat) === '[object DOMException]';
}
/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isString(wat) {
    return Object.prototype.toString.call(wat) === '[object String]';
}
/**
 * Checks whether given value's is a primitive (undefined, null, number, boolean, string, bigint, symbol)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPrimitive(wat) {
    return wat === null || (typeof wat !== 'object' && typeof wat !== 'function');
}
/**
 * Checks whether given value's type is an object literal
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPlainObject(wat) {
    return Object.prototype.toString.call(wat) === '[object Object]';
}
/**
 * Checks whether given value's type is an Event instance
 * {@link isEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isEvent(wat) {
    return typeof Event !== 'undefined' && isInstanceOf(wat, Event);
}
/**
 * Checks whether given value's type is an Element instance
 * {@link isElement}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isElement(wat) {
    return typeof Element !== 'undefined' && isInstanceOf(wat, Element);
}
/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isRegExp(wat) {
    return Object.prototype.toString.call(wat) === '[object RegExp]';
}
/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */
function isThenable(wat) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return Boolean(wat && wat.then && typeof wat.then === 'function');
}
/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isSyntheticEvent(wat) {
    return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
}
/**
 * Checks whether given value's type is an instance of provided constructor.
 * {@link isInstanceOf}.
 *
 * @param wat A value to be checked.
 * @param base A constructor to be used in a check.
 * @returns A boolean representing the result.
 */
function isInstanceOf(wat, base) {
    try {
        return wat instanceof base;
    }
    catch (_e) {
        return false;
    }
}
//# sourceMappingURL=is.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/logger.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/logger.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "consoleSandbox": () => (/* binding */ consoleSandbox),
/* harmony export */   "logger": () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./node_modules/@sentry/utils/esm/global.js");

// TODO: Implement different loggers for different environments
var global = (0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
/** Prefix for logging strings */
var PREFIX = 'Sentry Logger ';
/**
 * Temporarily unwrap `console.log` and friends in order to perform the given callback using the original methods.
 * Restores wrapping after the callback completes.
 *
 * @param callback The function to run against the original `console` messages
 * @returns The results of the callback
 */
function consoleSandbox(callback) {
    var global = (0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
    var levels = ['debug', 'info', 'warn', 'error', 'log', 'assert'];
    if (!('console' in global)) {
        return callback();
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    var originalConsole = global.console;
    var wrappedLevels = {};
    // Restore all wrapped console methods
    levels.forEach(function (level) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (level in global.console && originalConsole[level].__sentry_original__) {
            wrappedLevels[level] = originalConsole[level];
            originalConsole[level] = originalConsole[level].__sentry_original__;
        }
    });
    // Perform callback manipulations
    var result = callback();
    // Revert restoration to wrapped state
    Object.keys(wrappedLevels).forEach(function (level) {
        originalConsole[level] = wrappedLevels[level];
    });
    return result;
}
/** JSDoc */
var Logger = /** @class */ (function () {
    /** JSDoc */
    function Logger() {
        this._enabled = false;
    }
    /** JSDoc */
    Logger.prototype.disable = function () {
        this._enabled = false;
    };
    /** JSDoc */
    Logger.prototype.enable = function () {
        this._enabled = true;
    };
    /** JSDoc */
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        consoleSandbox(function () {
            global.console.log(PREFIX + "[Log]: " + args.join(' '));
        });
    };
    /** JSDoc */
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        consoleSandbox(function () {
            global.console.warn(PREFIX + "[Warn]: " + args.join(' '));
        });
    };
    /** JSDoc */
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        consoleSandbox(function () {
            global.console.error(PREFIX + "[Error]: " + args.join(' '));
        });
    };
    return Logger;
}());
// Ensure we only have a single logger instance, even if multiple versions of @sentry/utils are being used
global.__SENTRY__ = global.__SENTRY__ || {};
var logger = global.__SENTRY__.logger || (global.__SENTRY__.logger = new Logger());

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/memo.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/memo.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Memo": () => (/* binding */ Memo)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Memo class used for decycle json objects. Uses WeakSet if available otherwise array.
 */
var Memo = /** @class */ (function () {
    function Memo() {
        this._hasWeakSet = typeof WeakSet === 'function';
        this._inner = this._hasWeakSet ? new WeakSet() : [];
    }
    /**
     * Sets obj to remember.
     * @param obj Object to remember
     */
    Memo.prototype.memoize = function (obj) {
        if (this._hasWeakSet) {
            if (this._inner.has(obj)) {
                return true;
            }
            this._inner.add(obj);
            return false;
        }
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (var i = 0; i < this._inner.length; i++) {
            var value = this._inner[i];
            if (value === obj) {
                return true;
            }
        }
        this._inner.push(obj);
        return false;
    };
    /**
     * Removes object from internal storage.
     * @param obj Object to forget
     */
    Memo.prototype.unmemoize = function (obj) {
        if (this._hasWeakSet) {
            this._inner.delete(obj);
        }
        else {
            for (var i = 0; i < this._inner.length; i++) {
                if (this._inner[i] === obj) {
                    this._inner.splice(i, 1);
                    break;
                }
            }
        }
    };
    return Memo;
}());

//# sourceMappingURL=memo.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/misc.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/misc.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uuid4": () => (/* binding */ uuid4),
/* harmony export */   "parseUrl": () => (/* binding */ parseUrl),
/* harmony export */   "getEventDescription": () => (/* binding */ getEventDescription),
/* harmony export */   "addExceptionTypeValue": () => (/* binding */ addExceptionTypeValue),
/* harmony export */   "addExceptionMechanism": () => (/* binding */ addExceptionMechanism),
/* harmony export */   "parseSemver": () => (/* binding */ parseSemver),
/* harmony export */   "parseRetryAfterHeader": () => (/* binding */ parseRetryAfterHeader),
/* harmony export */   "addContextToFrame": () => (/* binding */ addContextToFrame),
/* harmony export */   "stripUrlQueryAndFragment": () => (/* binding */ stripUrlQueryAndFragment),
/* harmony export */   "checkOrSetAlreadyCaught": () => (/* binding */ checkOrSetAlreadyCaught)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string */ "./node_modules/@sentry/utils/esm/string.js");



/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */
function uuid4() {
    var global = (0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
    var crypto = global.crypto || global.msCrypto;
    if (!(crypto === void 0) && crypto.getRandomValues) {
        // Use window.crypto API if available
        var arr = new Uint16Array(8);
        crypto.getRandomValues(arr);
        // set 4 in byte 7
        // eslint-disable-next-line no-bitwise
        arr[3] = (arr[3] & 0xfff) | 0x4000;
        // set 2 most significant bits of byte 9 to '10'
        // eslint-disable-next-line no-bitwise
        arr[4] = (arr[4] & 0x3fff) | 0x8000;
        var pad = function (num) {
            var v = num.toString(16);
            while (v.length < 4) {
                v = "0" + v;
            }
            return v;
        };
        return (pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]));
    }
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // eslint-disable-next-line no-bitwise
        var r = (Math.random() * 16) | 0;
        // eslint-disable-next-line no-bitwise
        var v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */
function parseUrl(url) {
    if (!url) {
        return {};
    }
    var match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) {
        return {};
    }
    // coerce to undefined values to empty string so we don't get 'undefined'
    var query = match[6] || '';
    var fragment = match[8] || '';
    return {
        host: match[4],
        path: match[5],
        protocol: match[2],
        relative: match[5] + query + fragment,
    };
}
/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */
function getEventDescription(event) {
    if (event.message) {
        return event.message;
    }
    if (event.exception && event.exception.values && event.exception.values[0]) {
        var exception = event.exception.values[0];
        if (exception.type && exception.value) {
            return exception.type + ": " + exception.value;
        }
        return exception.type || exception.value || event.event_id || '<unknown>';
    }
    return event.event_id || '<unknown>';
}
/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @hidden
 */
function addExceptionTypeValue(event, value, type) {
    event.exception = event.exception || {};
    event.exception.values = event.exception.values || [];
    event.exception.values[0] = event.exception.values[0] || {};
    event.exception.values[0].value = event.exception.values[0].value || value || '';
    event.exception.values[0].type = event.exception.values[0].type || type || 'Error';
}
/**
 * Adds exception mechanism data to a given event. Uses defaults if the second parameter is not passed.
 *
 * @param event The event to modify.
 * @param newMechanism Mechanism data to add to the event.
 * @hidden
 */
function addExceptionMechanism(event, newMechanism) {
    var _a;
    if (!event.exception || !event.exception.values) {
        return;
    }
    var exceptionValue0 = event.exception.values[0];
    var defaultMechanism = { type: 'generic', handled: true };
    var currentMechanism = exceptionValue0.mechanism;
    exceptionValue0.mechanism = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, defaultMechanism), currentMechanism), newMechanism);
    if (newMechanism && 'data' in newMechanism) {
        var mergedData = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, (_a = currentMechanism) === null || _a === void 0 ? void 0 : _a.data), newMechanism.data);
        exceptionValue0.mechanism.data = mergedData;
    }
}
// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
var SEMVER_REGEXP = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
/**
 * Parses input into a SemVer interface
 * @param input string representation of a semver version
 */
function parseSemver(input) {
    var match = input.match(SEMVER_REGEXP) || [];
    var major = parseInt(match[1], 10);
    var minor = parseInt(match[2], 10);
    var patch = parseInt(match[3], 10);
    return {
        buildmetadata: match[5],
        major: isNaN(major) ? undefined : major,
        minor: isNaN(minor) ? undefined : minor,
        patch: isNaN(patch) ? undefined : patch,
        prerelease: match[4],
    };
}
var defaultRetryAfter = 60 * 1000; // 60 seconds
/**
 * Extracts Retry-After value from the request header or returns default value
 * @param now current unix timestamp
 * @param header string representation of 'Retry-After' header
 */
function parseRetryAfterHeader(now, header) {
    if (!header) {
        return defaultRetryAfter;
    }
    var headerDelay = parseInt("" + header, 10);
    if (!isNaN(headerDelay)) {
        return headerDelay * 1000;
    }
    var headerDate = Date.parse("" + header);
    if (!isNaN(headerDate)) {
        return headerDate - now;
    }
    return defaultRetryAfter;
}
/**
 * This function adds context (pre/post/line) lines to the provided frame
 *
 * @param lines string[] containing all lines
 * @param frame StackFrame that will be mutated
 * @param linesOfContext number of context lines we want to add pre/post
 */
function addContextToFrame(lines, frame, linesOfContext) {
    if (linesOfContext === void 0) { linesOfContext = 5; }
    var lineno = frame.lineno || 0;
    var maxLines = lines.length;
    var sourceLine = Math.max(Math.min(maxLines, lineno - 1), 0);
    frame.pre_context = lines
        .slice(Math.max(0, sourceLine - linesOfContext), sourceLine)
        .map(function (line) { return (0,_string__WEBPACK_IMPORTED_MODULE_2__.snipLine)(line, 0); });
    frame.context_line = (0,_string__WEBPACK_IMPORTED_MODULE_2__.snipLine)(lines[Math.min(maxLines - 1, sourceLine)], frame.colno || 0);
    frame.post_context = lines
        .slice(Math.min(sourceLine + 1, maxLines), sourceLine + 1 + linesOfContext)
        .map(function (line) { return (0,_string__WEBPACK_IMPORTED_MODULE_2__.snipLine)(line, 0); });
}
/**
 * Strip the query string and fragment off of a given URL or path (if present)
 *
 * @param urlPath Full URL or path, including possible query string and/or fragment
 * @returns URL or path without query string or fragment
 */
function stripUrlQueryAndFragment(urlPath) {
    // eslint-disable-next-line no-useless-escape
    return urlPath.split(/[\?#]/, 1)[0];
}
/**
 * Checks whether or not we've already captured the given exception (note: not an identical exception - the very object
 * in question), and marks it captured if not.
 *
 * This is useful because it's possible for an error to get captured by more than one mechanism. After we intercept and
 * record an error, we rethrow it (assuming we've intercepted it before it's reached the top-level global handlers), so
 * that we don't interfere with whatever effects the error might have had were the SDK not there. At that point, because
 * the error has been rethrown, it's possible for it to bubble up to some other code we've instrumented. If it's not
 * caught after that, it will bubble all the way up to the global handlers (which of course we also instrument). This
 * function helps us ensure that even if we encounter the same error more than once, we only record it the first time we
 * see it.
 *
 * Note: It will ignore primitives (always return `false` and not mark them as seen), as properties can't be set on
 * them. {@link: Object.objectify} can be used on exceptions to convert any that are primitives into their equivalent
 * object wrapper forms so that this check will always work. However, because we need to flag the exact object which
 * will get rethrown, and because that rethrowing happens outside of the event processing pipeline, the objectification
 * must be done before the exception captured.
 *
 * @param A thrown exception to check or flag as having been seen
 * @returns `true` if the exception has already been captured, `false` if not (with the side effect of marking it seen)
 */
function checkOrSetAlreadyCaught(exception) {
    var _a;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if ((_a = exception) === null || _a === void 0 ? void 0 : _a.__sentry_captured__) {
        return true;
    }
    try {
        // set it this way rather than by assignment so that it's not ennumerable and therefore isn't recorded by the
        // `ExtraErrorData` integration
        Object.defineProperty(exception, '__sentry_captured__', {
            value: true,
        });
    }
    catch (err) {
        // `exception` is a primitive, so we can't mark it seen
    }
    return false;
}
//# sourceMappingURL=misc.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/node.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/node.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNodeEnv": () => (/* binding */ isNodeEnv),
/* harmony export */   "dynamicRequire": () => (/* binding */ dynamicRequire),
/* harmony export */   "loadModule": () => (/* binding */ loadModule)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
/**
 * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
 * you must either a) use `console.log` rather than the logger, or b) put your function elsewhere.
 */
/**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */
function isNodeEnv() {
    return Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
}
/**
 * Requires a module which is protected against bundler minification.
 *
 * @param request The module path to resolve
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
function dynamicRequire(mod, request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return mod.require(request);
}
/**
 * Helper for dynamically loading module that should work with linked dependencies.
 * The problem is that we _should_ be using `require(require.resolve(moduleName, { paths: [cwd()] }))`
 * However it's _not possible_ to do that with Webpack, as it has to know all the dependencies during
 * build time. `require.resolve` is also not available in any other way, so we cannot create,
 * a fake helper like we do with `dynamicRequire`.
 *
 * We always prefer to use local package, thus the value is not returned early from each `try/catch` block.
 * That is to mimic the behavior of `require.resolve` exactly.
 *
 * @param moduleName module name to require
 * @returns possibly required module
 */
function loadModule(moduleName) {
    var mod;
    try {
        mod = dynamicRequire(module, moduleName);
    }
    catch (e) {
        // no-empty
    }
    try {
        var cwd = dynamicRequire(module, 'process').cwd;
        mod = dynamicRequire(module, cwd() + "/node_modules/" + moduleName);
    }
    catch (e) {
        // no-empty
    }
    return mod;
}
//# sourceMappingURL=node.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/object.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/object.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fill": () => (/* binding */ fill),
/* harmony export */   "urlEncode": () => (/* binding */ urlEncode),
/* harmony export */   "normalizeToSize": () => (/* binding */ normalizeToSize),
/* harmony export */   "walk": () => (/* binding */ walk),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "extractExceptionKeysForMessage": () => (/* binding */ extractExceptionKeysForMessage),
/* harmony export */   "dropUndefinedKeys": () => (/* binding */ dropUndefinedKeys),
/* harmony export */   "objectify": () => (/* binding */ objectify)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./node_modules/@sentry/utils/esm/browser.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _memo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./memo */ "./node_modules/@sentry/utils/esm/memo.js");
/* harmony import */ var _stacktrace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stacktrace */ "./node_modules/@sentry/utils/esm/stacktrace.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string */ "./node_modules/@sentry/utils/esm/string.js");






/**
 * Replace a method in an object with a wrapped version of itself.
 *
 * @param source An object that contains a method to be wrapped.
 * @param name The name of the method to be wrapped.
 * @param replacementFactory A higher-order function that takes the original version of the given method and returns a
 * wrapped version. Note: The function returned by `replacementFactory` needs to be a non-arrow function, in order to
 * preserve the correct value of `this`, and the original method must be called using `origMethod.call(this, <other
 * args>)` or `origMethod.apply(this, [<other args>])` (rather than being called directly), again to preserve `this`.
 * @returns void
 */
function fill(source, name, replacementFactory) {
    if (!(name in source)) {
        return;
    }
    var original = source[name];
    var wrapped = replacementFactory(original);
    // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
    // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
    if (typeof wrapped === 'function') {
        try {
            wrapped.prototype = wrapped.prototype || {};
            Object.defineProperties(wrapped, {
                __sentry_original__: {
                    enumerable: false,
                    value: original,
                },
            });
        }
        catch (_Oo) {
            // This can throw if multiple fill happens on a global object like XMLHttpRequest
            // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
        }
    }
    source[name] = wrapped;
}
/**
 * Encodes given object into url-friendly format
 *
 * @param object An object that contains serializable values
 * @returns string Encoded
 */
function urlEncode(object) {
    return Object.keys(object)
        .map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]); })
        .join('&');
}
/**
 * Transforms any object into an object literal with all its attributes
 * attached to it.
 *
 * @param value Initial source that we have to transform in order for it to be usable by the serializer
 */
function getWalkSource(value) {
    if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isError)(value)) {
        var error = value;
        var err = {
            message: error.message,
            name: error.name,
            stack: error.stack,
        };
        for (var i in error) {
            if (Object.prototype.hasOwnProperty.call(error, i)) {
                err[i] = error[i];
            }
        }
        return err;
    }
    if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isEvent)(value)) {
        var event_1 = value;
        var source = {};
        // Accessing event attributes can throw (see https://github.com/getsentry/sentry-javascript/issues/768 and
        // https://github.com/getsentry/sentry-javascript/issues/838), but accessing `type` hasn't been wrapped in a
        // try-catch in at least two years and no one's complained, so that's likely not an issue anymore
        source.type = event_1.type;
        try {
            source.target = (0,_is__WEBPACK_IMPORTED_MODULE_0__.isElement)(event_1.target)
                ? (0,_browser__WEBPACK_IMPORTED_MODULE_1__.htmlTreeAsString)(event_1.target)
                : Object.prototype.toString.call(event_1.target);
        }
        catch (_oO) {
            source.target = '<unknown>';
        }
        try {
            source.currentTarget = (0,_is__WEBPACK_IMPORTED_MODULE_0__.isElement)(event_1.currentTarget)
                ? (0,_browser__WEBPACK_IMPORTED_MODULE_1__.htmlTreeAsString)(event_1.currentTarget)
                : Object.prototype.toString.call(event_1.currentTarget);
        }
        catch (_oO) {
            source.currentTarget = '<unknown>';
        }
        if (typeof CustomEvent !== 'undefined' && (0,_is__WEBPACK_IMPORTED_MODULE_0__.isInstanceOf)(value, CustomEvent)) {
            source.detail = event_1.detail;
        }
        for (var attr in event_1) {
            if (Object.prototype.hasOwnProperty.call(event_1, attr)) {
                source[attr] = event_1[attr];
            }
        }
        return source;
    }
    return value;
}
/** Calculates bytes size of input string */
function utf8Length(value) {
    // eslint-disable-next-line no-bitwise
    return ~-encodeURI(value).split(/%..|./).length;
}
/** Calculates bytes size of input object */
function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
}
/** JSDoc */
function normalizeToSize(object, 
// Default Node.js REPL depth
depth, 
// 100kB, as 200kB is max payload size, so half sounds reasonable
maxSize) {
    if (depth === void 0) { depth = 3; }
    if (maxSize === void 0) { maxSize = 100 * 1024; }
    var serialized = normalize(object, depth);
    if (jsonSize(serialized) > maxSize) {
        return normalizeToSize(object, depth - 1, maxSize);
    }
    return serialized;
}
/**
 * Transform any non-primitive, BigInt, or Symbol-type value into a string. Acts as a no-op on strings, numbers,
 * booleans, null, and undefined.
 *
 * @param value The value to stringify
 * @returns For non-primitive, BigInt, and Symbol-type values, a string denoting the value's type, type and value, or
 *  type and `description` property, respectively. For non-BigInt, non-Symbol primitives, returns the original value,
 *  unchanged.
 */
function serializeValue(value) {
    var type = Object.prototype.toString.call(value);
    // Node.js REPL notation
    if (typeof value === 'string') {
        return value;
    }
    if (type === '[object Object]') {
        return '[Object]';
    }
    if (type === '[object Array]') {
        return '[Array]';
    }
    var normalized = normalizeValue(value);
    return (0,_is__WEBPACK_IMPORTED_MODULE_0__.isPrimitive)(normalized) ? normalized : type;
}
/**
 * normalizeValue()
 *
 * Takes unserializable input and make it serializable friendly
 *
 * - translates undefined/NaN values to "[undefined]"/"[NaN]" respectively,
 * - serializes Error objects
 * - filter global objects
 */
function normalizeValue(value, key) {
    if (key === 'domain' && value && typeof value === 'object' && value._events) {
        return '[Domain]';
    }
    if (key === 'domainEmitter') {
        return '[DomainEmitter]';
    }
    if (typeof __webpack_require__.g !== 'undefined' && value === __webpack_require__.g) {
        return '[Global]';
    }
    // It's safe to use `window` and `document` here in this manner, as we are asserting using `typeof` first
    // which won't throw if they are not present.
    // eslint-disable-next-line no-restricted-globals
    if (typeof window !== 'undefined' && value === window) {
        return '[Window]';
    }
    // eslint-disable-next-line no-restricted-globals
    if (typeof document !== 'undefined' && value === document) {
        return '[Document]';
    }
    // React's SyntheticEvent thingy
    if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isSyntheticEvent)(value)) {
        return '[SyntheticEvent]';
    }
    if (typeof value === 'number' && value !== value) {
        return '[NaN]';
    }
    if (value === void 0) {
        return '[undefined]';
    }
    if (typeof value === 'function') {
        return "[Function: " + (0,_stacktrace__WEBPACK_IMPORTED_MODULE_2__.getFunctionName)(value) + "]";
    }
    // symbols and bigints are considered primitives by TS, but aren't natively JSON-serilaizable
    if (typeof value === 'symbol') {
        return "[" + String(value) + "]";
    }
    if (typeof value === 'bigint') {
        return "[BigInt: " + String(value) + "]";
    }
    return value;
}
/**
 * Walks an object to perform a normalization on it
 *
 * @param key of object that's walked in current iteration
 * @param value object to be walked
 * @param depth Optional number indicating how deep should walking be performed
 * @param memo Optional Memo class handling decycling
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function walk(key, value, depth, memo) {
    if (depth === void 0) { depth = +Infinity; }
    if (memo === void 0) { memo = new _memo__WEBPACK_IMPORTED_MODULE_3__.Memo(); }
    // If we reach the maximum depth, serialize whatever has left
    if (depth === 0) {
        return serializeValue(value);
    }
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    // If value implements `toJSON` method, call it and return early
    if (value !== null && value !== undefined && typeof value.toJSON === 'function') {
        return value.toJSON();
    }
    /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    // If normalized value is a primitive, there are no branches left to walk, so we can just bail out, as theres no point in going down that branch any further
    var normalized = normalizeValue(value, key);
    if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isPrimitive)(normalized)) {
        return normalized;
    }
    // Create source that we will use for next itterations, either objectified error object (Error type with extracted keys:value pairs) or the input itself
    var source = getWalkSource(value);
    // Create an accumulator that will act as a parent for all future itterations of that branch
    var acc = Array.isArray(value) ? [] : {};
    // If we already walked that branch, bail out, as it's circular reference
    if (memo.memoize(value)) {
        return '[Circular ~]';
    }
    // Walk all keys of the source
    for (var innerKey in source) {
        // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
        if (!Object.prototype.hasOwnProperty.call(source, innerKey)) {
            continue;
        }
        // Recursively walk through all the child nodes
        acc[innerKey] = walk(innerKey, source[innerKey], depth - 1, memo);
    }
    // Once walked through all the branches, remove the parent from memo storage
    memo.unmemoize(value);
    // Return accumulated values
    return acc;
}
/**
 * normalize()
 *
 * - Creates a copy to prevent original input mutation
 * - Skip non-enumerablers
 * - Calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializeable values (undefined/NaN/Functions) to serializable format
 * - Translates known global objects/Classes to a string representations
 * - Takes care of Error objects serialization
 * - Optionally limit depth of final output
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function normalize(input, depth) {
    try {
        return JSON.parse(JSON.stringify(input, function (key, value) { return walk(key, value, depth); }));
    }
    catch (_oO) {
        return '**non-serializable**';
    }
}
/**
 * Given any captured exception, extract its keys and create a sorted
 * and truncated list that will be used inside the event message.
 * eg. `Non-error exception captured with keys: foo, bar, baz`
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function extractExceptionKeysForMessage(exception, maxLength) {
    if (maxLength === void 0) { maxLength = 40; }
    var keys = Object.keys(getWalkSource(exception));
    keys.sort();
    if (!keys.length) {
        return '[object has no keys]';
    }
    if (keys[0].length >= maxLength) {
        return (0,_string__WEBPACK_IMPORTED_MODULE_4__.truncate)(keys[0], maxLength);
    }
    for (var includedKeys = keys.length; includedKeys > 0; includedKeys--) {
        var serialized = keys.slice(0, includedKeys).join(', ');
        if (serialized.length > maxLength) {
            continue;
        }
        if (includedKeys === keys.length) {
            return serialized;
        }
        return (0,_string__WEBPACK_IMPORTED_MODULE_4__.truncate)(serialized, maxLength);
    }
    return '';
}
/**
 * Given any object, return the new object with removed keys that value was `undefined`.
 * Works recursively on objects and arrays.
 */
function dropUndefinedKeys(val) {
    var e_1, _a;
    if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(val)) {
        var obj = val;
        var rv = {};
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__values)(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (typeof obj[key] !== 'undefined') {
                    rv[key] = dropUndefinedKeys(obj[key]);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return rv;
    }
    if (Array.isArray(val)) {
        return val.map(dropUndefinedKeys);
    }
    return val;
}
/**
 * Ensure that something is an object.
 *
 * Turns `undefined` and `null` into `String`s and all other primitives into instances of their respective wrapper
 * classes (String, Boolean, Number, etc.). Acts as the identity function on non-primitives.
 *
 * @param wat The subject of the objectification
 * @returns A version of `wat` which can safely be used with `Object` class methods
 */
function objectify(wat) {
    var objectified;
    switch (true) {
        case wat === undefined || wat === null:
            objectified = new String(wat);
            break;
        // Though symbols and bigints do have wrapper classes (`Symbol` and `BigInt`, respectively), for whatever reason
        // those classes don't have constructors which can be used with the `new` keyword. We therefore need to cast each as
        // an object in order to wrap it.
        case typeof wat === 'symbol' || typeof wat === 'bigint':
            objectified = Object(wat);
            break;
        // this will catch the remaining primitives: `String`, `Number`, and `Boolean`
        case (0,_is__WEBPACK_IMPORTED_MODULE_0__.isPrimitive)(wat):
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            objectified = new wat.constructor(wat);
            break;
        // by process of elimination, at this point we know that `wat` must already be an object
        default:
            objectified = wat;
            break;
    }
    return objectified;
}
//# sourceMappingURL=object.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/polyfill.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/polyfill.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setPrototypeOf": () => (/* binding */ setPrototypeOf)
/* harmony export */ });
var setPrototypeOf = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties);
/**
 * setPrototypeOf polyfill using __proto__
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function setProtoOf(obj, proto) {
    // @ts-ignore __proto__ does not exist on obj
    obj.__proto__ = proto;
    return obj;
}
/**
 * setPrototypeOf polyfill using mixin
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function mixinProperties(obj, proto) {
    for (var prop in proto) {
        if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
            // @ts-ignore typescript complains about indexing so we remove
            obj[prop] = proto[prop];
        }
    }
    return obj;
}
//# sourceMappingURL=polyfill.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/promisebuffer.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/promisebuffer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromiseBuffer": () => (/* binding */ PromiseBuffer)
/* harmony export */ });
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./node_modules/@sentry/utils/esm/error.js");
/* harmony import */ var _syncpromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./syncpromise */ "./node_modules/@sentry/utils/esm/syncpromise.js");


/** A simple queue that holds promises. */
var PromiseBuffer = /** @class */ (function () {
    function PromiseBuffer(_limit) {
        this._limit = _limit;
        /** Internal set of queued Promises */
        this._buffer = [];
    }
    /**
     * Says if the buffer is ready to take more requests
     */
    PromiseBuffer.prototype.isReady = function () {
        return this._limit === undefined || this.length() < this._limit;
    };
    /**
     * Add a promise (representing an in-flight action) to the queue, and set it to remove itself on fulfillment.
     *
     * @param taskProducer A function producing any PromiseLike<T>; In previous versions this used to be `task:
     *        PromiseLike<T>`, but under that model, Promises were instantly created on the call-site and their executor
     *        functions therefore ran immediately. Thus, even if the buffer was full, the action still happened. By
     *        requiring the promise to be wrapped in a function, we can defer promise creation until after the buffer
     *        limit check.
     * @returns The original promise.
     */
    PromiseBuffer.prototype.add = function (taskProducer) {
        var _this = this;
        if (!this.isReady()) {
            return _syncpromise__WEBPACK_IMPORTED_MODULE_0__.SyncPromise.reject(new _error__WEBPACK_IMPORTED_MODULE_1__.SentryError('Not adding Promise due to buffer limit reached.'));
        }
        // start the task and add its promise to the queue
        var task = taskProducer();
        if (this._buffer.indexOf(task) === -1) {
            this._buffer.push(task);
        }
        void task
            .then(function () { return _this.remove(task); })
            // Use `then(null, rejectionHandler)` rather than `catch(rejectionHandler)` so that we can use `PromiseLike`
            // rather than `Promise`. `PromiseLike` doesn't have a `.catch` method, making its polyfill smaller. (ES5 didn't
            // have promises, so TS has to polyfill when down-compiling.)
            .then(null, function () {
            return _this.remove(task).then(null, function () {
                // We have to add another catch here because `this.remove()` starts a new promise chain.
            });
        });
        return task;
    };
    /**
     * Remove a promise from the queue.
     *
     * @param task Can be any PromiseLike<T>
     * @returns Removed promise.
     */
    PromiseBuffer.prototype.remove = function (task) {
        var removedTask = this._buffer.splice(this._buffer.indexOf(task), 1)[0];
        return removedTask;
    };
    /**
     * This function returns the number of unresolved promises in the queue.
     */
    PromiseBuffer.prototype.length = function () {
        return this._buffer.length;
    };
    /**
     * Wait for all promises in the queue to resolve or for timeout to expire, whichever comes first.
     *
     * @param timeout The time, in ms, after which to resolve to `false` if the queue is still non-empty. Passing `0` (or
     * not passing anything) will make the promise wait as long as it takes for the queue to drain before resolving to
     * `true`.
     * @returns A promise which will resolve to `true` if the queue is already empty or drains before the timeout, and
     * `false` otherwise
     */
    PromiseBuffer.prototype.drain = function (timeout) {
        var _this = this;
        return new _syncpromise__WEBPACK_IMPORTED_MODULE_0__.SyncPromise(function (resolve) {
            // wait for `timeout` ms and then resolve to `false` (if not cancelled first)
            var capturedSetTimeout = setTimeout(function () {
                if (timeout && timeout > 0) {
                    resolve(false);
                }
            }, timeout);
            // if all promises resolve in time, cancel the timer and resolve to `true`
            void _syncpromise__WEBPACK_IMPORTED_MODULE_0__.SyncPromise.all(_this._buffer)
                .then(function () {
                clearTimeout(capturedSetTimeout);
                resolve(true);
            })
                .then(null, function () {
                resolve(true);
            });
        });
    };
    return PromiseBuffer;
}());

//# sourceMappingURL=promisebuffer.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/stacktrace.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/stacktrace.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFunctionName": () => (/* binding */ getFunctionName)
/* harmony export */ });
var defaultFunctionName = '<anonymous>';
/**
 * Safely extract function name from itself
 */
function getFunctionName(fn) {
    try {
        if (!fn || typeof fn !== 'function') {
            return defaultFunctionName;
        }
        return fn.name || defaultFunctionName;
    }
    catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        return defaultFunctionName;
    }
}
//# sourceMappingURL=stacktrace.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/string.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/string.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "truncate": () => (/* binding */ truncate),
/* harmony export */   "snipLine": () => (/* binding */ snipLine),
/* harmony export */   "safeJoin": () => (/* binding */ safeJoin),
/* harmony export */   "isMatchingPattern": () => (/* binding */ isMatchingPattern),
/* harmony export */   "escapeStringForRegex": () => (/* binding */ escapeStringForRegex)
/* harmony export */ });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");

/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string (0 = unlimited)
 * @returns string Encoded
 */
function truncate(str, max) {
    if (max === void 0) { max = 0; }
    if (typeof str !== 'string' || max === 0) {
        return str;
    }
    return str.length <= max ? str : str.substr(0, max) + "...";
}
/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function snipLine(line, colno) {
    var newLine = line;
    var ll = newLine.length;
    if (ll <= 150) {
        return newLine;
    }
    if (colno > ll) {
        // eslint-disable-next-line no-param-reassign
        colno = ll;
    }
    var start = Math.max(colno - 60, 0);
    if (start < 5) {
        start = 0;
    }
    var end = Math.min(start + 140, ll);
    if (end > ll - 5) {
        end = ll;
    }
    if (end === ll) {
        start = Math.max(end - 140, 0);
    }
    newLine = newLine.slice(start, end);
    if (start > 0) {
        newLine = "'{snip} " + newLine;
    }
    if (end < ll) {
        newLine += ' {snip}';
    }
    return newLine;
}
/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) {
        return '';
    }
    var output = [];
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (var i = 0; i < input.length; i++) {
        var value = input[i];
        try {
            output.push(String(value));
        }
        catch (e) {
            output.push('[value cannot be serialized]');
        }
    }
    return output.join(delimiter);
}
/**
 * Checks if the value matches a regex or includes the string
 * @param value The string value to be checked against
 * @param pattern Either a regex or a string that must be contained in value
 */
function isMatchingPattern(value, pattern) {
    if (!(0,_is__WEBPACK_IMPORTED_MODULE_0__.isString)(value)) {
        return false;
    }
    if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isRegExp)(pattern)) {
        return pattern.test(value);
    }
    if (typeof pattern === 'string') {
        return value.indexOf(pattern) !== -1;
    }
    return false;
}
/**
 * Given a string, escape characters which have meaning in the regex grammar, such that the result is safe to feed to
 * `new RegExp()`.
 *
 * Based on https://github.com/sindresorhus/escape-string-regexp. Vendored to a) reduce the size by skipping the runtime
 * type-checking, and b) ensure it gets down-compiled for old versions of Node (the published package only supports Node
 * 12+).
 *
 * @param regexString The string to escape
 * @returns An version of the string with all special regex characters escaped
 */
function escapeStringForRegex(regexString) {
    // escape the hyphen separately so we can also replace it with a unicode literal hyphen, to avoid the problems
    // discussed in https://github.com/sindresorhus/escape-string-regexp/issues/20.
    return regexString.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
//# sourceMappingURL=string.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/supports.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/supports.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "supportsErrorEvent": () => (/* binding */ supportsErrorEvent),
/* harmony export */   "supportsDOMError": () => (/* binding */ supportsDOMError),
/* harmony export */   "supportsDOMException": () => (/* binding */ supportsDOMException),
/* harmony export */   "supportsFetch": () => (/* binding */ supportsFetch),
/* harmony export */   "isNativeFetch": () => (/* binding */ isNativeFetch),
/* harmony export */   "supportsNativeFetch": () => (/* binding */ supportsNativeFetch),
/* harmony export */   "supportsReportingObserver": () => (/* binding */ supportsReportingObserver),
/* harmony export */   "supportsReferrerPolicy": () => (/* binding */ supportsReferrerPolicy),
/* harmony export */   "supportsHistory": () => (/* binding */ supportsHistory)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./node_modules/@sentry/utils/esm/logger.js");


/**
 * Tells whether current environment supports ErrorEvent objects
 * {@link supportsErrorEvent}.
 *
 * @returns Answer to the given question.
 */
function supportsErrorEvent() {
    try {
        new ErrorEvent('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMError objects
 * {@link supportsDOMError}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMError() {
    try {
        // Chrome: VM89:1 Uncaught TypeError: Failed to construct 'DOMError':
        // 1 argument required, but only 0 present.
        // @ts-ignore It really needs 1 argument, not 0.
        new DOMError('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMException objects
 * {@link supportsDOMException}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMException() {
    try {
        new DOMException('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports Fetch API
 * {@link supportsFetch}.
 *
 * @returns Answer to the given question.
 */
function supportsFetch() {
    if (!('fetch' in (0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)())) {
        return false;
    }
    try {
        new Headers();
        new Request('');
        new Response();
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * isNativeFetch checks if the given function is a native implementation of fetch()
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isNativeFetch(func) {
    return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
/**
 * Tells whether current environment supports Fetch API natively
 * {@link supportsNativeFetch}.
 *
 * @returns true if `window.fetch` is natively implemented, false otherwise
 */
function supportsNativeFetch() {
    if (!supportsFetch()) {
        return false;
    }
    var global = (0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
    // Fast path to avoid DOM I/O
    // eslint-disable-next-line @typescript-eslint/unbound-method
    if (isNativeFetch(global.fetch)) {
        return true;
    }
    // window.fetch is implemented, but is polyfilled or already wrapped (e.g: by a chrome extension)
    // so create a "pure" iframe to see if that has native fetch
    var result = false;
    var doc = global.document;
    // eslint-disable-next-line deprecation/deprecation
    if (doc && typeof doc.createElement === "function") {
        try {
            var sandbox = doc.createElement('iframe');
            sandbox.hidden = true;
            doc.head.appendChild(sandbox);
            if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
                // eslint-disable-next-line @typescript-eslint/unbound-method
                result = isNativeFetch(sandbox.contentWindow.fetch);
            }
            doc.head.removeChild(sandbox);
        }
        catch (err) {
            _logger__WEBPACK_IMPORTED_MODULE_1__.logger.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', err);
        }
    }
    return result;
}
/**
 * Tells whether current environment supports ReportingObserver API
 * {@link supportsReportingObserver}.
 *
 * @returns Answer to the given question.
 */
function supportsReportingObserver() {
    return 'ReportingObserver' in (0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
}
/**
 * Tells whether current environment supports Referrer Policy API
 * {@link supportsReferrerPolicy}.
 *
 * @returns Answer to the given question.
 */
function supportsReferrerPolicy() {
    // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
    // https://caniuse.com/#feat=referrer-policy
    // It doesn't. And it throw exception instead of ignoring this parameter...
    // REF: https://github.com/getsentry/raven-js/issues/1233
    if (!supportsFetch()) {
        return false;
    }
    try {
        new Request('_', {
            referrerPolicy: 'origin',
        });
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports History API
 * {@link supportsHistory}.
 *
 * @returns Answer to the given question.
 */
function supportsHistory() {
    // NOTE: in Chrome App environment, touching history.pushState, *even inside
    //       a try/catch block*, will cause Chrome to output an error to console.error
    // borrowed from: https://github.com/angular/angular.js/pull/13945/files
    var global = (0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var chrome = global.chrome;
    var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
    /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    var hasHistoryApi = 'history' in global && !!global.history.pushState && !!global.history.replaceState;
    return !isChromePackagedApp && hasHistoryApi;
}
//# sourceMappingURL=supports.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/syncpromise.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/syncpromise.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyncPromise": () => (/* binding */ SyncPromise)
/* harmony export */ });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */
var SyncPromise = /** @class */ (function () {
    function SyncPromise(executor) {
        var _this = this;
        this._state = "PENDING" /* PENDING */;
        this._handlers = [];
        /** JSDoc */
        this._resolve = function (value) {
            _this._setResult("RESOLVED" /* RESOLVED */, value);
        };
        /** JSDoc */
        this._reject = function (reason) {
            _this._setResult("REJECTED" /* REJECTED */, reason);
        };
        /** JSDoc */
        this._setResult = function (state, value) {
            if (_this._state !== "PENDING" /* PENDING */) {
                return;
            }
            if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isThenable)(value)) {
                void value.then(_this._resolve, _this._reject);
                return;
            }
            _this._state = state;
            _this._value = value;
            _this._executeHandlers();
        };
        // TODO: FIXME
        /** JSDoc */
        this._attachHandler = function (handler) {
            _this._handlers = _this._handlers.concat(handler);
            _this._executeHandlers();
        };
        /** JSDoc */
        this._executeHandlers = function () {
            if (_this._state === "PENDING" /* PENDING */) {
                return;
            }
            var cachedHandlers = _this._handlers.slice();
            _this._handlers = [];
            cachedHandlers.forEach(function (handler) {
                if (handler.done) {
                    return;
                }
                if (_this._state === "RESOLVED" /* RESOLVED */) {
                    if (handler.onfulfilled) {
                        // eslint-disable-next-line @typescript-eslint/no-floating-promises
                        handler.onfulfilled(_this._value);
                    }
                }
                if (_this._state === "REJECTED" /* REJECTED */) {
                    if (handler.onrejected) {
                        handler.onrejected(_this._value);
                    }
                }
                handler.done = true;
            });
        };
        try {
            executor(this._resolve, this._reject);
        }
        catch (e) {
            this._reject(e);
        }
    }
    /** JSDoc */
    SyncPromise.resolve = function (value) {
        return new SyncPromise(function (resolve) {
            resolve(value);
        });
    };
    /** JSDoc */
    SyncPromise.reject = function (reason) {
        return new SyncPromise(function (_, reject) {
            reject(reason);
        });
    };
    /** JSDoc */
    SyncPromise.all = function (collection) {
        return new SyncPromise(function (resolve, reject) {
            if (!Array.isArray(collection)) {
                reject(new TypeError("Promise.all requires an array as input."));
                return;
            }
            if (collection.length === 0) {
                resolve([]);
                return;
            }
            var counter = collection.length;
            var resolvedCollection = [];
            collection.forEach(function (item, index) {
                void SyncPromise.resolve(item)
                    .then(function (value) {
                    resolvedCollection[index] = value;
                    counter -= 1;
                    if (counter !== 0) {
                        return;
                    }
                    resolve(resolvedCollection);
                })
                    .then(null, reject);
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.then = function (onfulfilled, onrejected) {
        var _this = this;
        return new SyncPromise(function (resolve, reject) {
            _this._attachHandler({
                done: false,
                onfulfilled: function (result) {
                    if (!onfulfilled) {
                        // TODO: ¯\_(ツ)_/¯
                        // TODO: FIXME
                        resolve(result);
                        return;
                    }
                    try {
                        resolve(onfulfilled(result));
                        return;
                    }
                    catch (e) {
                        reject(e);
                        return;
                    }
                },
                onrejected: function (reason) {
                    if (!onrejected) {
                        reject(reason);
                        return;
                    }
                    try {
                        resolve(onrejected(reason));
                        return;
                    }
                    catch (e) {
                        reject(e);
                        return;
                    }
                },
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.catch = function (onrejected) {
        return this.then(function (val) { return val; }, onrejected);
    };
    /** JSDoc */
    SyncPromise.prototype.finally = function (onfinally) {
        var _this = this;
        return new SyncPromise(function (resolve, reject) {
            var val;
            var isRejected;
            return _this.then(function (value) {
                isRejected = false;
                val = value;
                if (onfinally) {
                    onfinally();
                }
            }, function (reason) {
                isRejected = true;
                val = reason;
                if (onfinally) {
                    onfinally();
                }
            }).then(function () {
                if (isRejected) {
                    reject(val);
                    return;
                }
                resolve(val);
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.toString = function () {
        return '[object SyncPromise]';
    };
    return SyncPromise;
}());

//# sourceMappingURL=syncpromise.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/time.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/time.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateTimestampInSeconds": () => (/* binding */ dateTimestampInSeconds),
/* harmony export */   "timestampInSeconds": () => (/* binding */ timestampInSeconds),
/* harmony export */   "timestampWithMs": () => (/* binding */ timestampWithMs),
/* harmony export */   "usingPerformanceAPI": () => (/* binding */ usingPerformanceAPI),
/* harmony export */   "_browserPerformanceTimeOriginMode": () => (/* binding */ _browserPerformanceTimeOriginMode),
/* harmony export */   "browserPerformanceTimeOrigin": () => (/* binding */ browserPerformanceTimeOrigin)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node */ "./node_modules/@sentry/utils/esm/node.js");
/* module decorator */ module = __webpack_require__.hmd(module);


/**
 * A TimestampSource implementation for environments that do not support the Performance Web API natively.
 *
 * Note that this TimestampSource does not use a monotonic clock. A call to `nowSeconds` may return a timestamp earlier
 * than a previously returned value. We do not try to emulate a monotonic behavior in order to facilitate debugging. It
 * is more obvious to explain "why does my span have negative duration" than "why my spans have zero duration".
 */
var dateTimestampSource = {
    nowSeconds: function () { return Date.now() / 1000; },
};
/**
 * Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
 * support the API.
 *
 * Wrapping the native API works around differences in behavior from different browsers.
 */
function getBrowserPerformance() {
    var performance = (0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)().performance;
    if (!performance || !performance.now) {
        return undefined;
    }
    // Replace performance.timeOrigin with our own timeOrigin based on Date.now().
    //
    // This is a partial workaround for browsers reporting performance.timeOrigin such that performance.timeOrigin +
    // performance.now() gives a date arbitrarily in the past.
    //
    // Additionally, computing timeOrigin in this way fills the gap for browsers where performance.timeOrigin is
    // undefined.
    //
    // The assumption that performance.timeOrigin + performance.now() ~= Date.now() is flawed, but we depend on it to
    // interact with data coming out of performance entries.
    //
    // Note that despite recommendations against it in the spec, browsers implement the Performance API with a clock that
    // might stop when the computer is asleep (and perhaps under other circumstances). Such behavior causes
    // performance.timeOrigin + performance.now() to have an arbitrary skew over Date.now(). In laptop computers, we have
    // observed skews that can be as long as days, weeks or months.
    //
    // See https://github.com/getsentry/sentry-javascript/issues/2590.
    //
    // BUG: despite our best intentions, this workaround has its limitations. It mostly addresses timings of pageload
    // transactions, but ignores the skew built up over time that can aversely affect timestamps of navigation
    // transactions of long-lived web pages.
    var timeOrigin = Date.now() - performance.now();
    return {
        now: function () { return performance.now(); },
        timeOrigin: timeOrigin,
    };
}
/**
 * Returns the native Performance API implementation from Node.js. Returns undefined in old Node.js versions that don't
 * implement the API.
 */
function getNodePerformance() {
    try {
        var perfHooks = (0,_node__WEBPACK_IMPORTED_MODULE_1__.dynamicRequire)(module, 'perf_hooks');
        return perfHooks.performance;
    }
    catch (_) {
        return undefined;
    }
}
/**
 * The Performance API implementation for the current platform, if available.
 */
var platformPerformance = (0,_node__WEBPACK_IMPORTED_MODULE_1__.isNodeEnv)() ? getNodePerformance() : getBrowserPerformance();
var timestampSource = platformPerformance === undefined
    ? dateTimestampSource
    : {
        nowSeconds: function () { return (platformPerformance.timeOrigin + platformPerformance.now()) / 1000; },
    };
/**
 * Returns a timestamp in seconds since the UNIX epoch using the Date API.
 */
var dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);
/**
 * Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
 * availability of the Performance API.
 *
 * See `usingPerformanceAPI` to test whether the Performance API is used.
 *
 * BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
 * asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
 * skew can grow to arbitrary amounts like days, weeks or months.
 * See https://github.com/getsentry/sentry-javascript/issues/2590.
 */
var timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);
// Re-exported with an old name for backwards-compatibility.
var timestampWithMs = timestampInSeconds;
/**
 * A boolean that is true when timestampInSeconds uses the Performance API to produce monotonic timestamps.
 */
var usingPerformanceAPI = platformPerformance !== undefined;
/**
 * Internal helper to store what is the source of browserPerformanceTimeOrigin below. For debugging only.
 */
var _browserPerformanceTimeOriginMode;
/**
 * The number of milliseconds since the UNIX epoch. This value is only usable in a browser, and only when the
 * performance API is available.
 */
var browserPerformanceTimeOrigin = (function () {
    // Unfortunately browsers may report an inaccurate time origin data, through either performance.timeOrigin or
    // performance.timing.navigationStart, which results in poor results in performance data. We only treat time origin
    // data as reliable if they are within a reasonable threshold of the current time.
    var performance = (0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)().performance;
    if (!performance || !performance.now) {
        _browserPerformanceTimeOriginMode = 'none';
        return undefined;
    }
    var threshold = 3600 * 1000;
    var performanceNow = performance.now();
    var dateNow = Date.now();
    // if timeOrigin isn't available set delta to threshold so it isn't used
    var timeOriginDelta = performance.timeOrigin
        ? Math.abs(performance.timeOrigin + performanceNow - dateNow)
        : threshold;
    var timeOriginIsReliable = timeOriginDelta < threshold;
    // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
    // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
    // Also as of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always
    // a valid fallback. In the absence of an initial time provided by the browser, fallback to the current time from the
    // Date API.
    // eslint-disable-next-line deprecation/deprecation
    var navigationStart = performance.timing && performance.timing.navigationStart;
    var hasNavigationStart = typeof navigationStart === 'number';
    // if navigationStart isn't available set delta to threshold so it isn't used
    var navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
    var navigationStartIsReliable = navigationStartDelta < threshold;
    if (timeOriginIsReliable || navigationStartIsReliable) {
        // Use the more reliable time origin
        if (timeOriginDelta <= navigationStartDelta) {
            _browserPerformanceTimeOriginMode = 'timeOrigin';
            return performance.timeOrigin;
        }
        else {
            _browserPerformanceTimeOriginMode = 'navigationStart';
            return navigationStart;
        }
    }
    // Either both timeOrigin and navigationStart are skewed or neither is available, fallback to Date.
    _browserPerformanceTimeOriginMode = 'dateNow';
    return dateNow;
})();
//# sourceMappingURL=time.js.map

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/sdk.js");
/* harmony import */ var _sentry_tracing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/tracing */ "./node_modules/@sentry/tracing/esm/index.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
__webpack_require__(/*! dotenv */ "./node_modules/dotenv/lib/main.js").config();



_sentry_browser__WEBPACK_IMPORTED_MODULE_1__.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [new _sentry_tracing__WEBPACK_IMPORTED_MODULE_0__.Integrations.BrowserTracing()],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
});

/***/ }),

/***/ "./node_modules/dotenv/lib/main.js":
/*!*****************************************!*\
  !*** ./node_modules/dotenv/lib/main.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
/* @flow */
/*::

type DotenvParseOptions = {
  debug?: boolean
}

// keys and values from src
type DotenvParseOutput = { [string]: string }

type DotenvConfigOptions = {
  path?: string, // path to .env file
  encoding?: string, // encoding of .env file
  debug?: string // turn on logging for debugging purposes
}

type DotenvConfigOutput = {
  parsed?: DotenvParseOutput,
  error?: Error
}

*/

const fs = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
const path = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
const os = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'os'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

function log (message /*: string */) {
  console.log(`[dotenv][DEBUG] ${message}`)
}

const NEWLINE = '\n'
const RE_INI_KEY_VAL = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/
const RE_NEWLINES = /\\n/g
const NEWLINES_MATCH = /\r\n|\n|\r/

// Parses src into an Object
function parse (src /*: string | Buffer */, options /*: ?DotenvParseOptions */) /*: DotenvParseOutput */ {
  const debug = Boolean(options && options.debug)
  const obj = {}

  // convert Buffers before splitting into lines and processing
  src.toString().split(NEWLINES_MATCH).forEach(function (line, idx) {
    // matching "KEY' and 'VAL' in 'KEY=VAL'
    const keyValueArr = line.match(RE_INI_KEY_VAL)
    // matched?
    if (keyValueArr != null) {
      const key = keyValueArr[1]
      // default undefined or missing values to empty string
      let val = (keyValueArr[2] || '')
      const end = val.length - 1
      const isDoubleQuoted = val[0] === '"' && val[end] === '"'
      const isSingleQuoted = val[0] === "'" && val[end] === "'"

      // if single or double quoted, remove quotes
      if (isSingleQuoted || isDoubleQuoted) {
        val = val.substring(1, end)

        // if double quoted, expand newlines
        if (isDoubleQuoted) {
          val = val.replace(RE_NEWLINES, NEWLINE)
        }
      } else {
        // remove surrounding whitespace
        val = val.trim()
      }

      obj[key] = val
    } else if (debug) {
      log(`did not match key and value when parsing line ${idx + 1}: ${line}`)
    }
  })

  return obj
}

function resolveHome (envPath) {
  return envPath[0] === '~' ? path.join(os.homedir(), envPath.slice(1)) : envPath
}

// Populates process.env from .env file
function config (options /*: ?DotenvConfigOptions */) /*: DotenvConfigOutput */ {
  let dotenvPath = path.resolve(process.cwd(), '.env')
  let encoding /*: string */ = 'utf8'
  let debug = false

  if (options) {
    if (options.path != null) {
      dotenvPath = resolveHome(options.path)
    }
    if (options.encoding != null) {
      encoding = options.encoding
    }
    if (options.debug != null) {
      debug = true
    }
  }

  try {
    // specifying an encoding returns a string instead of a buffer
    const parsed = parse(fs.readFileSync(dotenvPath, { encoding }), { debug })

    Object.keys(parsed).forEach(function (key) {
      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
        process.env[key] = parsed[key]
      } else if (debug) {
        log(`"${key}" is already defined in \`process.env\` and will not be overwritten`)
      }
    })

    return { parsed }
  } catch (e) {
    return { error: e }
  }
}

module.exports.config = config
module.exports.parse = parse


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;