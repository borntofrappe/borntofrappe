var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// .svelte-kit/netlify/entry.js
__export(exports, {
  handler: () => handler
});

// node_modules/@sveltejs/kit/dist/install-fetch.js
var import_http = __toModule(require("http"));
var import_https = __toModule(require("https"));
var import_zlib = __toModule(require("zlib"));
var import_stream = __toModule(require("stream"));
var import_util = __toModule(require("util"));
var import_crypto = __toModule(require("crypto"));
var import_url = __toModule(require("url"));
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i = 1; i < meta.length; i++) {
    if (meta[i] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i]}`;
      if (meta[i].indexOf("charset=") === 0) {
        charset = meta[i].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var src = dataUriToBuffer;
var dataUriToBuffer$1 = src;
var ponyfill_es2018 = { exports: {} };
(function(module2, exports) {
  (function(global2, factory) {
    factory(exports);
  })(commonjsGlobal, function(exports2) {
    const SymbolPolyfill = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol : (description) => `Symbol(${description})`;
    function noop2() {
      return void 0;
    }
    function getGlobals() {
      if (typeof self !== "undefined") {
        return self;
      } else if (typeof window !== "undefined") {
        return window;
      } else if (typeof commonjsGlobal !== "undefined") {
        return commonjsGlobal;
      }
      return void 0;
    }
    const globals = getGlobals();
    function typeIsObject(x) {
      return typeof x === "object" && x !== null || typeof x === "function";
    }
    const rethrowAssertionErrorRejection = noop2;
    const originalPromise = Promise;
    const originalPromiseThen = Promise.prototype.then;
    const originalPromiseResolve = Promise.resolve.bind(originalPromise);
    const originalPromiseReject = Promise.reject.bind(originalPromise);
    function newPromise(executor) {
      return new originalPromise(executor);
    }
    function promiseResolvedWith(value) {
      return originalPromiseResolve(value);
    }
    function promiseRejectedWith(reason) {
      return originalPromiseReject(reason);
    }
    function PerformPromiseThen(promise, onFulfilled, onRejected) {
      return originalPromiseThen.call(promise, onFulfilled, onRejected);
    }
    function uponPromise(promise, onFulfilled, onRejected) {
      PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), void 0, rethrowAssertionErrorRejection);
    }
    function uponFulfillment(promise, onFulfilled) {
      uponPromise(promise, onFulfilled);
    }
    function uponRejection(promise, onRejected) {
      uponPromise(promise, void 0, onRejected);
    }
    function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
      return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
    }
    function setPromiseIsHandledToTrue(promise) {
      PerformPromiseThen(promise, void 0, rethrowAssertionErrorRejection);
    }
    const queueMicrotask = (() => {
      const globalQueueMicrotask = globals && globals.queueMicrotask;
      if (typeof globalQueueMicrotask === "function") {
        return globalQueueMicrotask;
      }
      const resolvedPromise = promiseResolvedWith(void 0);
      return (fn) => PerformPromiseThen(resolvedPromise, fn);
    })();
    function reflectCall(F, V, args) {
      if (typeof F !== "function") {
        throw new TypeError("Argument is not a function");
      }
      return Function.prototype.apply.call(F, V, args);
    }
    function promiseCall(F, V, args) {
      try {
        return promiseResolvedWith(reflectCall(F, V, args));
      } catch (value) {
        return promiseRejectedWith(value);
      }
    }
    const QUEUE_MAX_ARRAY_SIZE = 16384;
    class SimpleQueue {
      constructor() {
        this._cursor = 0;
        this._size = 0;
        this._front = {
          _elements: [],
          _next: void 0
        };
        this._back = this._front;
        this._cursor = 0;
        this._size = 0;
      }
      get length() {
        return this._size;
      }
      push(element) {
        const oldBack = this._back;
        let newBack = oldBack;
        if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
          newBack = {
            _elements: [],
            _next: void 0
          };
        }
        oldBack._elements.push(element);
        if (newBack !== oldBack) {
          this._back = newBack;
          oldBack._next = newBack;
        }
        ++this._size;
      }
      shift() {
        const oldFront = this._front;
        let newFront = oldFront;
        const oldCursor = this._cursor;
        let newCursor = oldCursor + 1;
        const elements = oldFront._elements;
        const element = elements[oldCursor];
        if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
          newFront = oldFront._next;
          newCursor = 0;
        }
        --this._size;
        this._cursor = newCursor;
        if (oldFront !== newFront) {
          this._front = newFront;
        }
        elements[oldCursor] = void 0;
        return element;
      }
      forEach(callback) {
        let i = this._cursor;
        let node = this._front;
        let elements = node._elements;
        while (i !== elements.length || node._next !== void 0) {
          if (i === elements.length) {
            node = node._next;
            elements = node._elements;
            i = 0;
            if (elements.length === 0) {
              break;
            }
          }
          callback(elements[i]);
          ++i;
        }
      }
      peek() {
        const front = this._front;
        const cursor = this._cursor;
        return front._elements[cursor];
      }
    }
    function ReadableStreamReaderGenericInitialize(reader, stream) {
      reader._ownerReadableStream = stream;
      stream._reader = reader;
      if (stream._state === "readable") {
        defaultReaderClosedPromiseInitialize(reader);
      } else if (stream._state === "closed") {
        defaultReaderClosedPromiseInitializeAsResolved(reader);
      } else {
        defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
      }
    }
    function ReadableStreamReaderGenericCancel(reader, reason) {
      const stream = reader._ownerReadableStream;
      return ReadableStreamCancel(stream, reason);
    }
    function ReadableStreamReaderGenericRelease(reader) {
      if (reader._ownerReadableStream._state === "readable") {
        defaultReaderClosedPromiseReject(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
      } else {
        defaultReaderClosedPromiseResetToRejected(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
      }
      reader._ownerReadableStream._reader = void 0;
      reader._ownerReadableStream = void 0;
    }
    function readerLockException(name) {
      return new TypeError("Cannot " + name + " a stream using a released reader");
    }
    function defaultReaderClosedPromiseInitialize(reader) {
      reader._closedPromise = newPromise((resolve2, reject) => {
        reader._closedPromise_resolve = resolve2;
        reader._closedPromise_reject = reject;
      });
    }
    function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
      defaultReaderClosedPromiseInitialize(reader);
      defaultReaderClosedPromiseReject(reader, reason);
    }
    function defaultReaderClosedPromiseInitializeAsResolved(reader) {
      defaultReaderClosedPromiseInitialize(reader);
      defaultReaderClosedPromiseResolve(reader);
    }
    function defaultReaderClosedPromiseReject(reader, reason) {
      if (reader._closedPromise_reject === void 0) {
        return;
      }
      setPromiseIsHandledToTrue(reader._closedPromise);
      reader._closedPromise_reject(reason);
      reader._closedPromise_resolve = void 0;
      reader._closedPromise_reject = void 0;
    }
    function defaultReaderClosedPromiseResetToRejected(reader, reason) {
      defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
    }
    function defaultReaderClosedPromiseResolve(reader) {
      if (reader._closedPromise_resolve === void 0) {
        return;
      }
      reader._closedPromise_resolve(void 0);
      reader._closedPromise_resolve = void 0;
      reader._closedPromise_reject = void 0;
    }
    const AbortSteps = SymbolPolyfill("[[AbortSteps]]");
    const ErrorSteps = SymbolPolyfill("[[ErrorSteps]]");
    const CancelSteps = SymbolPolyfill("[[CancelSteps]]");
    const PullSteps = SymbolPolyfill("[[PullSteps]]");
    const NumberIsFinite = Number.isFinite || function(x) {
      return typeof x === "number" && isFinite(x);
    };
    const MathTrunc = Math.trunc || function(v) {
      return v < 0 ? Math.ceil(v) : Math.floor(v);
    };
    function isDictionary(x) {
      return typeof x === "object" || typeof x === "function";
    }
    function assertDictionary(obj, context) {
      if (obj !== void 0 && !isDictionary(obj)) {
        throw new TypeError(`${context} is not an object.`);
      }
    }
    function assertFunction(x, context) {
      if (typeof x !== "function") {
        throw new TypeError(`${context} is not a function.`);
      }
    }
    function isObject(x) {
      return typeof x === "object" && x !== null || typeof x === "function";
    }
    function assertObject(x, context) {
      if (!isObject(x)) {
        throw new TypeError(`${context} is not an object.`);
      }
    }
    function assertRequiredArgument(x, position, context) {
      if (x === void 0) {
        throw new TypeError(`Parameter ${position} is required in '${context}'.`);
      }
    }
    function assertRequiredField(x, field, context) {
      if (x === void 0) {
        throw new TypeError(`${field} is required in '${context}'.`);
      }
    }
    function convertUnrestrictedDouble(value) {
      return Number(value);
    }
    function censorNegativeZero(x) {
      return x === 0 ? 0 : x;
    }
    function integerPart(x) {
      return censorNegativeZero(MathTrunc(x));
    }
    function convertUnsignedLongLongWithEnforceRange(value, context) {
      const lowerBound = 0;
      const upperBound = Number.MAX_SAFE_INTEGER;
      let x = Number(value);
      x = censorNegativeZero(x);
      if (!NumberIsFinite(x)) {
        throw new TypeError(`${context} is not a finite number`);
      }
      x = integerPart(x);
      if (x < lowerBound || x > upperBound) {
        throw new TypeError(`${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`);
      }
      if (!NumberIsFinite(x) || x === 0) {
        return 0;
      }
      return x;
    }
    function assertReadableStream(x, context) {
      if (!IsReadableStream(x)) {
        throw new TypeError(`${context} is not a ReadableStream.`);
      }
    }
    function AcquireReadableStreamDefaultReader(stream) {
      return new ReadableStreamDefaultReader(stream);
    }
    function ReadableStreamAddReadRequest(stream, readRequest) {
      stream._reader._readRequests.push(readRequest);
    }
    function ReadableStreamFulfillReadRequest(stream, chunk, done) {
      const reader = stream._reader;
      const readRequest = reader._readRequests.shift();
      if (done) {
        readRequest._closeSteps();
      } else {
        readRequest._chunkSteps(chunk);
      }
    }
    function ReadableStreamGetNumReadRequests(stream) {
      return stream._reader._readRequests.length;
    }
    function ReadableStreamHasDefaultReader(stream) {
      const reader = stream._reader;
      if (reader === void 0) {
        return false;
      }
      if (!IsReadableStreamDefaultReader(reader)) {
        return false;
      }
      return true;
    }
    class ReadableStreamDefaultReader {
      constructor(stream) {
        assertRequiredArgument(stream, 1, "ReadableStreamDefaultReader");
        assertReadableStream(stream, "First parameter");
        if (IsReadableStreamLocked(stream)) {
          throw new TypeError("This stream has already been locked for exclusive reading by another reader");
        }
        ReadableStreamReaderGenericInitialize(this, stream);
        this._readRequests = new SimpleQueue();
      }
      get closed() {
        if (!IsReadableStreamDefaultReader(this)) {
          return promiseRejectedWith(defaultReaderBrandCheckException("closed"));
        }
        return this._closedPromise;
      }
      cancel(reason = void 0) {
        if (!IsReadableStreamDefaultReader(this)) {
          return promiseRejectedWith(defaultReaderBrandCheckException("cancel"));
        }
        if (this._ownerReadableStream === void 0) {
          return promiseRejectedWith(readerLockException("cancel"));
        }
        return ReadableStreamReaderGenericCancel(this, reason);
      }
      read() {
        if (!IsReadableStreamDefaultReader(this)) {
          return promiseRejectedWith(defaultReaderBrandCheckException("read"));
        }
        if (this._ownerReadableStream === void 0) {
          return promiseRejectedWith(readerLockException("read from"));
        }
        let resolvePromise;
        let rejectPromise;
        const promise = newPromise((resolve2, reject) => {
          resolvePromise = resolve2;
          rejectPromise = reject;
        });
        const readRequest = {
          _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
          _closeSteps: () => resolvePromise({ value: void 0, done: true }),
          _errorSteps: (e) => rejectPromise(e)
        };
        ReadableStreamDefaultReaderRead(this, readRequest);
        return promise;
      }
      releaseLock() {
        if (!IsReadableStreamDefaultReader(this)) {
          throw defaultReaderBrandCheckException("releaseLock");
        }
        if (this._ownerReadableStream === void 0) {
          return;
        }
        if (this._readRequests.length > 0) {
          throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
        }
        ReadableStreamReaderGenericRelease(this);
      }
    }
    Object.defineProperties(ReadableStreamDefaultReader.prototype, {
      cancel: { enumerable: true },
      read: { enumerable: true },
      releaseLock: { enumerable: true },
      closed: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(ReadableStreamDefaultReader.prototype, SymbolPolyfill.toStringTag, {
        value: "ReadableStreamDefaultReader",
        configurable: true
      });
    }
    function IsReadableStreamDefaultReader(x) {
      if (!typeIsObject(x)) {
        return false;
      }
      if (!Object.prototype.hasOwnProperty.call(x, "_readRequests")) {
        return false;
      }
      return x instanceof ReadableStreamDefaultReader;
    }
    function ReadableStreamDefaultReaderRead(reader, readRequest) {
      const stream = reader._ownerReadableStream;
      stream._disturbed = true;
      if (stream._state === "closed") {
        readRequest._closeSteps();
      } else if (stream._state === "errored") {
        readRequest._errorSteps(stream._storedError);
      } else {
        stream._readableStreamController[PullSteps](readRequest);
      }
    }
    function defaultReaderBrandCheckException(name) {
      return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
    }
    const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
    }).prototype);
    class ReadableStreamAsyncIteratorImpl {
      constructor(reader, preventCancel) {
        this._ongoingPromise = void 0;
        this._isFinished = false;
        this._reader = reader;
        this._preventCancel = preventCancel;
      }
      next() {
        const nextSteps = () => this._nextSteps();
        this._ongoingPromise = this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) : nextSteps();
        return this._ongoingPromise;
      }
      return(value) {
        const returnSteps = () => this._returnSteps(value);
        return this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) : returnSteps();
      }
      _nextSteps() {
        if (this._isFinished) {
          return Promise.resolve({ value: void 0, done: true });
        }
        const reader = this._reader;
        if (reader._ownerReadableStream === void 0) {
          return promiseRejectedWith(readerLockException("iterate"));
        }
        let resolvePromise;
        let rejectPromise;
        const promise = newPromise((resolve2, reject) => {
          resolvePromise = resolve2;
          rejectPromise = reject;
        });
        const readRequest = {
          _chunkSteps: (chunk) => {
            this._ongoingPromise = void 0;
            queueMicrotask(() => resolvePromise({ value: chunk, done: false }));
          },
          _closeSteps: () => {
            this._ongoingPromise = void 0;
            this._isFinished = true;
            ReadableStreamReaderGenericRelease(reader);
            resolvePromise({ value: void 0, done: true });
          },
          _errorSteps: (reason) => {
            this._ongoingPromise = void 0;
            this._isFinished = true;
            ReadableStreamReaderGenericRelease(reader);
            rejectPromise(reason);
          }
        };
        ReadableStreamDefaultReaderRead(reader, readRequest);
        return promise;
      }
      _returnSteps(value) {
        if (this._isFinished) {
          return Promise.resolve({ value, done: true });
        }
        this._isFinished = true;
        const reader = this._reader;
        if (reader._ownerReadableStream === void 0) {
          return promiseRejectedWith(readerLockException("finish iterating"));
        }
        if (!this._preventCancel) {
          const result = ReadableStreamReaderGenericCancel(reader, value);
          ReadableStreamReaderGenericRelease(reader);
          return transformPromiseWith(result, () => ({ value, done: true }));
        }
        ReadableStreamReaderGenericRelease(reader);
        return promiseResolvedWith({ value, done: true });
      }
    }
    const ReadableStreamAsyncIteratorPrototype = {
      next() {
        if (!IsReadableStreamAsyncIterator(this)) {
          return promiseRejectedWith(streamAsyncIteratorBrandCheckException("next"));
        }
        return this._asyncIteratorImpl.next();
      },
      return(value) {
        if (!IsReadableStreamAsyncIterator(this)) {
          return promiseRejectedWith(streamAsyncIteratorBrandCheckException("return"));
        }
        return this._asyncIteratorImpl.return(value);
      }
    };
    if (AsyncIteratorPrototype !== void 0) {
      Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
    }
    function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
      const reader = AcquireReadableStreamDefaultReader(stream);
      const impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
      const iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
      iterator._asyncIteratorImpl = impl;
      return iterator;
    }
    function IsReadableStreamAsyncIterator(x) {
      if (!typeIsObject(x)) {
        return false;
      }
      if (!Object.prototype.hasOwnProperty.call(x, "_asyncIteratorImpl")) {
        return false;
      }
      try {
        return x._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl;
      } catch (_a) {
        return false;
      }
    }
    function streamAsyncIteratorBrandCheckException(name) {
      return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
    }
    const NumberIsNaN = Number.isNaN || function(x) {
      return x !== x;
    };
    function CreateArrayFromList(elements) {
      return elements.slice();
    }
    function CopyDataBlockBytes(dest, destOffset, src2, srcOffset, n) {
      new Uint8Array(dest).set(new Uint8Array(src2, srcOffset, n), destOffset);
    }
    function TransferArrayBuffer(O) {
      return O;
    }
    function IsDetachedBuffer(O) {
      return false;
    }
    function ArrayBufferSlice(buffer, begin, end) {
      if (buffer.slice) {
        return buffer.slice(begin, end);
      }
      const length = end - begin;
      const slice = new ArrayBuffer(length);
      CopyDataBlockBytes(slice, 0, buffer, begin, length);
      return slice;
    }
    function IsNonNegativeNumber(v) {
      if (typeof v !== "number") {
        return false;
      }
      if (NumberIsNaN(v)) {
        return false;
      }
      if (v < 0) {
        return false;
      }
      return true;
    }
    function CloneAsUint8Array(O) {
      const buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
      return new Uint8Array(buffer);
    }
    function DequeueValue(container) {
      const pair = container._queue.shift();
      container._queueTotalSize -= pair.size;
      if (container._queueTotalSize < 0) {
        container._queueTotalSize = 0;
      }
      return pair.value;
    }
    function EnqueueValueWithSize(container, value, size) {
      if (!IsNonNegativeNumber(size) || size === Infinity) {
        throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
      }
      container._queue.push({ value, size });
      container._queueTotalSize += size;
    }
    function PeekQueueValue(container) {
      const pair = container._queue.peek();
      return pair.value;
    }
    function ResetQueue(container) {
      container._queue = new SimpleQueue();
      container._queueTotalSize = 0;
    }
    class ReadableStreamBYOBRequest {
      constructor() {
        throw new TypeError("Illegal constructor");
      }
      get view() {
        if (!IsReadableStreamBYOBRequest(this)) {
          throw byobRequestBrandCheckException("view");
        }
        return this._view;
      }
      respond(bytesWritten) {
        if (!IsReadableStreamBYOBRequest(this)) {
          throw byobRequestBrandCheckException("respond");
        }
        assertRequiredArgument(bytesWritten, 1, "respond");
        bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, "First parameter");
        if (this._associatedReadableByteStreamController === void 0) {
          throw new TypeError("This BYOB request has been invalidated");
        }
        if (IsDetachedBuffer(this._view.buffer))
          ;
        ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
      }
      respondWithNewView(view) {
        if (!IsReadableStreamBYOBRequest(this)) {
          throw byobRequestBrandCheckException("respondWithNewView");
        }
        assertRequiredArgument(view, 1, "respondWithNewView");
        if (!ArrayBuffer.isView(view)) {
          throw new TypeError("You can only respond with array buffer views");
        }
        if (this._associatedReadableByteStreamController === void 0) {
          throw new TypeError("This BYOB request has been invalidated");
        }
        if (IsDetachedBuffer(view.buffer))
          ;
        ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
      }
    }
    Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
      respond: { enumerable: true },
      respondWithNewView: { enumerable: true },
      view: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(ReadableStreamBYOBRequest.prototype, SymbolPolyfill.toStringTag, {
        value: "ReadableStreamBYOBRequest",
        configurable: true
      });
    }
    class ReadableByteStreamController {
      constructor() {
        throw new TypeError("Illegal constructor");
      }
      get byobRequest() {
        if (!IsReadableByteStreamController(this)) {
          throw byteStreamControllerBrandCheckException("byobRequest");
        }
        return ReadableByteStreamControllerGetBYOBRequest(this);
      }
      get desiredSize() {
        if (!IsReadableByteStreamController(this)) {
          throw byteStreamControllerBrandCheckException("desiredSize");
        }
        return ReadableByteStreamControllerGetDesiredSize(this);
      }
      close() {
        if (!IsReadableByteStreamController(this)) {
          throw byteStreamControllerBrandCheckException("close");
        }
        if (this._closeRequested) {
          throw new TypeError("The stream has already been closed; do not close it again!");
        }
        const state = this._controlledReadableByteStream._state;
        if (state !== "readable") {
          throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
        }
        ReadableByteStreamControllerClose(this);
      }
      enqueue(chunk) {
        if (!IsReadableByteStreamController(this)) {
          throw byteStreamControllerBrandCheckException("enqueue");
        }
        assertRequiredArgument(chunk, 1, "enqueue");
        if (!ArrayBuffer.isView(chunk)) {
          throw new TypeError("chunk must be an array buffer view");
        }
        if (chunk.byteLength === 0) {
          throw new TypeError("chunk must have non-zero byteLength");
        }
        if (chunk.buffer.byteLength === 0) {
          throw new TypeError(`chunk's buffer must have non-zero byteLength`);
        }
        if (this._closeRequested) {
          throw new TypeError("stream is closed or draining");
        }
        const state = this._controlledReadableByteStream._state;
        if (state !== "readable") {
          throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
        }
        ReadableByteStreamControllerEnqueue(this, chunk);
      }
      error(e = void 0) {
        if (!IsReadableByteStreamController(this)) {
          throw byteStreamControllerBrandCheckException("error");
        }
        ReadableByteStreamControllerError(this, e);
      }
      [CancelSteps](reason) {
        ReadableByteStreamControllerClearPendingPullIntos(this);
        ResetQueue(this);
        const result = this._cancelAlgorithm(reason);
        ReadableByteStreamControllerClearAlgorithms(this);
        return result;
      }
      [PullSteps](readRequest) {
        const stream = this._controlledReadableByteStream;
        if (this._queueTotalSize > 0) {
          const entry = this._queue.shift();
          this._queueTotalSize -= entry.byteLength;
          ReadableByteStreamControllerHandleQueueDrain(this);
          const view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
          readRequest._chunkSteps(view);
          return;
        }
        const autoAllocateChunkSize = this._autoAllocateChunkSize;
        if (autoAllocateChunkSize !== void 0) {
          let buffer;
          try {
            buffer = new ArrayBuffer(autoAllocateChunkSize);
          } catch (bufferE) {
            readRequest._errorSteps(bufferE);
            return;
          }
          const pullIntoDescriptor = {
            buffer,
            bufferByteLength: autoAllocateChunkSize,
            byteOffset: 0,
            byteLength: autoAllocateChunkSize,
            bytesFilled: 0,
            elementSize: 1,
            viewConstructor: Uint8Array,
            readerType: "default"
          };
          this._pendingPullIntos.push(pullIntoDescriptor);
        }
        ReadableStreamAddReadRequest(stream, readRequest);
        ReadableByteStreamControllerCallPullIfNeeded(this);
      }
    }
    Object.defineProperties(ReadableByteStreamController.prototype, {
      close: { enumerable: true },
      enqueue: { enumerable: true },
      error: { enumerable: true },
      byobRequest: { enumerable: true },
      desiredSize: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(ReadableByteStreamController.prototype, SymbolPolyfill.toStringTag, {
        value: "ReadableByteStreamController",
        configurable: true
      });
    }
    function IsReadableByteStreamController(x) {
      if (!typeIsObject(x)) {
        return false;
      }
      if (!Object.prototype.hasOwnProperty.call(x, "_controlledReadableByteStream")) {
        return false;
      }
      return x instanceof ReadableByteStreamController;
    }
    function IsReadableStreamBYOBRequest(x) {
      if (!typeIsObject(x)) {
        return false;
      }
      if (!Object.prototype.hasOwnProperty.call(x, "_associatedReadableByteStreamController")) {
        return false;
      }
      return x instanceof ReadableStreamBYOBRequest;
    }
    function ReadableByteStreamControllerCallPullIfNeeded(controller) {
      const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
      if (!shouldPull) {
        return;
      }
      if (controller._pulling) {
        controller._pullAgain = true;
        return;
      }
      controller._pulling = true;
      const pullPromise = controller._pullAlgorithm();
      uponPromise(pullPromise, () => {
        controller._pulling = false;
        if (controller._pullAgain) {
          controller._pullAgain = false;
          ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
      }, (e) => {
        ReadableByteStreamControllerError(controller, e);
      });
    }
    function ReadableByteStreamControllerClearPendingPullIntos(controller) {
      ReadableByteStreamControllerInvalidateBYOBRequest(controller);
      controller._pendingPullIntos = new SimpleQueue();
    }
    function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
      let done = false;
      if (stream._state === "closed") {
        done = true;
      }
      const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
      if (pullIntoDescriptor.readerType === "default") {
        ReadableStreamFulfillReadRequest(stream, filledView, done);
      } else {
        ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
      }
    }
    function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
      const bytesFilled = pullIntoDescriptor.bytesFilled;
      const elementSize = pullIntoDescriptor.elementSize;
      return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
    }
    function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
      controller._queue.push({ buffer, byteOffset, byteLength });
      controller._queueTotalSize += byteLength;
    }
    function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
      const elementSize = pullIntoDescriptor.elementSize;
      const currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
      const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
      const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
      const maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
      let totalBytesToCopyRemaining = maxBytesToCopy;
      let ready = false;
      if (maxAlignedBytes > currentAlignedBytes) {
        totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
        ready = true;
      }
      const queue = controller._queue;
      while (totalBytesToCopyRemaining > 0) {
        const headOfQueue = queue.peek();
        const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
        const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
        CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
        if (headOfQueue.byteLength === bytesToCopy) {
          queue.shift();
        } else {
          headOfQueue.byteOffset += bytesToCopy;
          headOfQueue.byteLength -= bytesToCopy;
        }
        controller._queueTotalSize -= bytesToCopy;
        ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
        totalBytesToCopyRemaining -= bytesToCopy;
      }
      return ready;
    }
    function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
      pullIntoDescriptor.bytesFilled += size;
    }
    function ReadableByteStreamControllerHandleQueueDrain(controller) {
      if (controller._queueTotalSize === 0 && controller._closeRequested) {
        ReadableByteStreamControllerClearAlgorithms(controller);
        ReadableStreamClose(controller._controlledReadableByteStream);
      } else {
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
    }
    function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
      if (controller._byobRequest === null) {
        return;
      }
      controller._byobRequest._associatedReadableByteStreamController = void 0;
      controller._byobRequest._view = null;
      controller._byobRequest = null;
    }
    function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
      while (controller._pendingPullIntos.length > 0) {
        if (controller._queueTotalSize === 0) {
          return;
        }
        const pullIntoDescriptor = controller._pendingPullIntos.peek();
        if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
          ReadableByteStreamControllerShiftPendingPullInto(controller);
          ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
        }
      }
    }
    function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
      const stream = controller._controlledReadableByteStream;
      let elementSize = 1;
      if (view.constructor !== DataView) {
        elementSize = view.constructor.BYTES_PER_ELEMENT;
      }
      const ctor = view.constructor;
      const buffer = TransferArrayBuffer(view.buffer);
      const pullIntoDescriptor = {
        buffer,
        bufferByteLength: buffer.byteLength,
        byteOffset: view.byteOffset,
        byteLength: view.byteLength,
        bytesFilled: 0,
        elementSize,
        viewConstructor: ctor,
        readerType: "byob"
      };
      if (controller._pendingPullIntos.length > 0) {
        controller._pendingPullIntos.push(pullIntoDescriptor);
        ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
        return;
      }
      if (stream._state === "closed") {
        const emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
        readIntoRequest._closeSteps(emptyView);
        return;
      }
      if (controller._queueTotalSize > 0) {
        if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
          const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
          ReadableByteStreamControllerHandleQueueDrain(controller);
          readIntoRequest._chunkSteps(filledView);
          return;
        }
        if (controller._closeRequested) {
          const e = new TypeError("Insufficient bytes to fill elements in the given buffer");
          ReadableByteStreamControllerError(controller, e);
          readIntoRequest._errorSteps(e);
          return;
        }
      }
      controller._pendingPullIntos.push(pullIntoDescriptor);
      ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
      ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
    function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
      const stream = controller._controlledReadableByteStream;
      if (ReadableStreamHasBYOBReader(stream)) {
        while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
          const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
          ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
        }
      }
    }
    function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
      ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
      if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
        return;
      }
      ReadableByteStreamControllerShiftPendingPullInto(controller);
      const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
      if (remainderSize > 0) {
        const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
        const remainder = ArrayBufferSlice(pullIntoDescriptor.buffer, end - remainderSize, end);
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
      }
      pullIntoDescriptor.bytesFilled -= remainderSize;
      ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
      ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
    }
    function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
      const firstDescriptor = controller._pendingPullIntos.peek();
      ReadableByteStreamControllerInvalidateBYOBRequest(controller);
      const state = controller._controlledReadableByteStream._state;
      if (state === "closed") {
        ReadableByteStreamControllerRespondInClosedState(controller);
      } else {
        ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
      }
      ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
    function ReadableByteStreamControllerShiftPendingPullInto(controller) {
      const descriptor = controller._pendingPullIntos.shift();
      return descriptor;
    }
    function ReadableByteStreamControllerShouldCallPull(controller) {
      const stream = controller._controlledReadableByteStream;
      if (stream._state !== "readable") {
        return false;
      }
      if (controller._closeRequested) {
        return false;
      }
      if (!controller._started) {
        return false;
      }
      if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
        return true;
      }
      if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
        return true;
      }
      const desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
      if (desiredSize > 0) {
        return true;
      }
      return false;
    }
    function ReadableByteStreamControllerClearAlgorithms(controller) {
      controller._pullAlgorithm = void 0;
      controller._cancelAlgorithm = void 0;
    }
    function ReadableByteStreamControllerClose(controller) {
      const stream = controller._controlledReadableByteStream;
      if (controller._closeRequested || stream._state !== "readable") {
        return;
      }
      if (controller._queueTotalSize > 0) {
        controller._closeRequested = true;
        return;
      }
      if (controller._pendingPullIntos.length > 0) {
        const firstPendingPullInto = controller._pendingPullIntos.peek();
        if (firstPendingPullInto.bytesFilled > 0) {
          const e = new TypeError("Insufficient bytes to fill elements in the given buffer");
          ReadableByteStreamControllerError(controller, e);
          throw e;
        }
      }
      ReadableByteStreamControllerClearAlgorithms(controller);
      ReadableStreamClose(stream);
    }
    function ReadableByteStreamControllerEnqueue(controller, chunk) {
      const stream = controller._controlledReadableByteStream;
      if (controller._closeRequested || stream._state !== "readable") {
        return;
      }
      const buffer = chunk.buffer;
      const byteOffset = chunk.byteOffset;
      const byteLength = chunk.byteLength;
      const transferredBuffer = TransferArrayBuffer(buffer);
      if (controller._pendingPullIntos.length > 0) {
        const firstPendingPullInto = controller._pendingPullIntos.peek();
        if (IsDetachedBuffer(firstPendingPullInto.buffer))
          ;
        firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
      }
      ReadableByteStreamControllerInvalidateBYOBRequest(controller);
      if (ReadableStreamHasDefaultReader(stream)) {
        if (ReadableStreamGetNumReadRequests(stream) === 0) {
          ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
        } else {
          const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
          ReadableStreamFulfillReadRequest(stream, transferredView, false);
        }
      } else if (ReadableStreamHasBYOBReader(stream)) {
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
        ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
      } else {
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
      }
      ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
    function ReadableByteStreamControllerError(controller, e) {
      const stream = controller._controlledReadableByteStream;
      if (stream._state !== "readable") {
        return;
      }
      ReadableByteStreamControllerClearPendingPullIntos(controller);
      ResetQueue(controller);
      ReadableByteStreamControllerClearAlgorithms(controller);
      ReadableStreamError(stream, e);
    }
    function ReadableByteStreamControllerGetBYOBRequest(controller) {
      if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
        const byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
        SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
        controller._byobRequest = byobRequest;
      }
      return controller._byobRequest;
    }
    function ReadableByteStreamControllerGetDesiredSize(controller) {
      const state = controller._controlledReadableByteStream._state;
      if (state === "errored") {
        return null;
      }
      if (state === "closed") {
        return 0;
      }
      return controller._strategyHWM - controller._queueTotalSize;
    }
    function ReadableByteStreamControllerRespond(controller, bytesWritten) {
      const firstDescriptor = controller._pendingPullIntos.peek();
      const state = controller._controlledReadableByteStream._state;
      if (state === "closed") {
        if (bytesWritten !== 0) {
          throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
        }
      } else {
        if (bytesWritten === 0) {
          throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
        }
        if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
          throw new RangeError("bytesWritten out of range");
        }
      }
      firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
      ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
    }
    function ReadableByteStreamControllerRespondWithNewView(controller, view) {
      const firstDescriptor = controller._pendingPullIntos.peek();
      const state = controller._controlledReadableByteStream._state;
      if (state === "closed") {
        if (view.byteLength !== 0) {
          throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
        }
      } else {
        if (view.byteLength === 0) {
          throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
        }
      }
      if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
        throw new RangeError("The region specified by view does not match byobRequest");
      }
      if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
        throw new RangeError("The buffer of view has different capacity than byobRequest");
      }
      if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
        throw new RangeError("The region specified by view is larger than byobRequest");
      }
      firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
      ReadableByteStreamControllerRespondInternal(controller, view.byteLength);
    }
    function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
      controller._controlledReadableByteStream = stream;
      controller._pullAgain = false;
      controller._pulling = false;
      controller._byobRequest = null;
      controller._queue = controller._queueTotalSize = void 0;
      ResetQueue(controller);
      controller._closeRequested = false;
      controller._started = false;
      controller._strategyHWM = highWaterMark;
      controller._pullAlgorithm = pullAlgorithm;
      controller._cancelAlgorithm = cancelAlgorithm;
      controller._autoAllocateChunkSize = autoAllocateChunkSize;
      controller._pendingPullIntos = new SimpleQueue();
      stream._readableStreamController = controller;
      const startResult = startAlgorithm();
      uponPromise(promiseResolvedWith(startResult), () => {
        controller._started = true;
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }, (r) => {
        ReadableByteStreamControllerError(controller, r);
      });
    }
    function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
      const controller = Object.create(ReadableByteStreamController.prototype);
      let startAlgorithm = () => void 0;
      let pullAlgorithm = () => promiseResolvedWith(void 0);
      let cancelAlgorithm = () => promiseResolvedWith(void 0);
      if (underlyingByteSource.start !== void 0) {
        startAlgorithm = () => underlyingByteSource.start(controller);
      }
      if (underlyingByteSource.pull !== void 0) {
        pullAlgorithm = () => underlyingByteSource.pull(controller);
      }
      if (underlyingByteSource.cancel !== void 0) {
        cancelAlgorithm = (reason) => underlyingByteSource.cancel(reason);
      }
      const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
      if (autoAllocateChunkSize === 0) {
        throw new TypeError("autoAllocateChunkSize must be greater than 0");
      }
      SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
    }
    function SetUpReadableStreamBYOBRequest(request, controller, view) {
      request._associatedReadableByteStreamController = controller;
      request._view = view;
    }
    function byobRequestBrandCheckException(name) {
      return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
    }
    function byteStreamControllerBrandCheckException(name) {
      return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
    }
    function AcquireReadableStreamBYOBReader(stream) {
      return new ReadableStreamBYOBReader(stream);
    }
    function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
      stream._reader._readIntoRequests.push(readIntoRequest);
    }
    function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
      const reader = stream._reader;
      const readIntoRequest = reader._readIntoRequests.shift();
      if (done) {
        readIntoRequest._closeSteps(chunk);
      } else {
        readIntoRequest._chunkSteps(chunk);
      }
    }
    function ReadableStreamGetNumReadIntoRequests(stream) {
      return stream._reader._readIntoRequests.length;
    }
    function ReadableStreamHasBYOBReader(stream) {
      const reader = stream._reader;
      if (reader === void 0) {
        return false;
      }
      if (!IsReadableStreamBYOBReader(reader)) {
        return false;
      }
      return true;
    }
    class ReadableStreamBYOBReader {
      constructor(stream) {
        assertRequiredArgument(stream, 1, "ReadableStreamBYOBReader");
        assertReadableStream(stream, "First parameter");
        if (IsReadableStreamLocked(stream)) {
          throw new TypeError("This stream has already been locked for exclusive reading by another reader");
        }
        if (!IsReadableByteStreamController(stream._readableStreamController)) {
          throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
        }
        ReadableStreamReaderGenericInitialize(this, stream);
        this._readIntoRequests = new SimpleQueue();
      }
      get closed() {
        if (!IsReadableStreamBYOBReader(this)) {
          return promiseRejectedWith(byobReaderBrandCheckException("closed"));
        }
        return this._closedPromise;
      }
      cancel(reason = void 0) {
        if (!IsReadableStreamBYOBReader(this)) {
          return promiseRejectedWith(byobReaderBrandCheckException("cancel"));
        }
        if (this._ownerReadableStream === void 0) {
          return promiseRejectedWith(readerLockException("cancel"));
        }
        return ReadableStreamReaderGenericCancel(this, reason);
      }
      read(view) {
        if (!IsReadableStreamBYOBReader(this)) {
          return promiseRejectedWith(byobReaderBrandCheckException("read"));
        }
        if (!ArrayBuffer.isView(view)) {
          return promiseRejectedWith(new TypeError("view must be an array buffer view"));
        }
        if (view.byteLength === 0) {
          return promiseRejectedWith(new TypeError("view must have non-zero byteLength"));
        }
        if (view.buffer.byteLength === 0) {
          return promiseRejectedWith(new TypeError(`view's buffer must have non-zero byteLength`));
        }
        if (IsDetachedBuffer(view.buffer))
          ;
        if (this._ownerReadableStream === void 0) {
          return promiseRejectedWith(readerLockException("read from"));
        }
        let resolvePromise;
        let rejectPromise;
        const promise = newPromise((resolve2, reject) => {
          resolvePromise = resolve2;
          rejectPromise = reject;
        });
        const readIntoRequest = {
          _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
          _closeSteps: (chunk) => resolvePromise({ value: chunk, done: true }),
          _errorSteps: (e) => rejectPromise(e)
        };
        ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
        return promise;
      }
      releaseLock() {
        if (!IsReadableStreamBYOBReader(this)) {
          throw byobReaderBrandCheckException("releaseLock");
        }
        if (this._ownerReadableStream === void 0) {
          return;
        }
        if (this._readIntoRequests.length > 0) {
          throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
        }
        ReadableStreamReaderGenericRelease(this);
      }
    }
    Object.defineProperties(ReadableStreamBYOBReader.prototype, {
      cancel: { enumerable: true },
      read: { enumerable: true },
      releaseLock: { enumerable: true },
      closed: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(ReadableStreamBYOBReader.prototype, SymbolPolyfill.toStringTag, {
        value: "ReadableStreamBYOBReader",
        configurable: true
      });
    }
    function IsReadableStreamBYOBReader(x) {
      if (!typeIsObject(x)) {
        return false;
      }
      if (!Object.prototype.hasOwnProperty.call(x, "_readIntoRequests")) {
        return false;
      }
      return x instanceof ReadableStreamBYOBReader;
    }
    function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
      const stream = reader._ownerReadableStream;
      stream._disturbed = true;
      if (stream._state === "errored") {
        readIntoRequest._errorSteps(stream._storedError);
      } else {
        ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
      }
    }
    function byobReaderBrandCheckException(name) {
      return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
    }
    function ExtractHighWaterMark(strategy, defaultHWM) {
      const { highWaterMark } = strategy;
      if (highWaterMark === void 0) {
        return defaultHWM;
      }
      if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
        throw new RangeError("Invalid highWaterMark");
      }
      return highWaterMark;
    }
    function ExtractSizeAlgorithm(strategy) {
      const { size } = strategy;
      if (!size) {
        return () => 1;
      }
      return size;
    }
    function convertQueuingStrategy(init2, context) {
      assertDictionary(init2, context);
      const highWaterMark = init2 === null || init2 === void 0 ? void 0 : init2.highWaterMark;
      const size = init2 === null || init2 === void 0 ? void 0 : init2.size;
      return {
        highWaterMark: highWaterMark === void 0 ? void 0 : convertUnrestrictedDouble(highWaterMark),
        size: size === void 0 ? void 0 : convertQueuingStrategySize(size, `${context} has member 'size' that`)
      };
    }
    function convertQueuingStrategySize(fn, context) {
      assertFunction(fn, context);
      return (chunk) => convertUnrestrictedDouble(fn(chunk));
    }
    function convertUnderlyingSink(original, context) {
      assertDictionary(original, context);
      const abort = original === null || original === void 0 ? void 0 : original.abort;
      const close = original === null || original === void 0 ? void 0 : original.close;
      const start = original === null || original === void 0 ? void 0 : original.start;
      const type = original === null || original === void 0 ? void 0 : original.type;
      const write = original === null || original === void 0 ? void 0 : original.write;
      return {
        abort: abort === void 0 ? void 0 : convertUnderlyingSinkAbortCallback(abort, original, `${context} has member 'abort' that`),
        close: close === void 0 ? void 0 : convertUnderlyingSinkCloseCallback(close, original, `${context} has member 'close' that`),
        start: start === void 0 ? void 0 : convertUnderlyingSinkStartCallback(start, original, `${context} has member 'start' that`),
        write: write === void 0 ? void 0 : convertUnderlyingSinkWriteCallback(write, original, `${context} has member 'write' that`),
        type
      };
    }
    function convertUnderlyingSinkAbortCallback(fn, original, context) {
      assertFunction(fn, context);
      return (reason) => promiseCall(fn, original, [reason]);
    }
    function convertUnderlyingSinkCloseCallback(fn, original, context) {
      assertFunction(fn, context);
      return () => promiseCall(fn, original, []);
    }
    function convertUnderlyingSinkStartCallback(fn, original, context) {
      assertFunction(fn, context);
      return (controller) => reflectCall(fn, original, [controller]);
    }
    function convertUnderlyingSinkWriteCallback(fn, original, context) {
      assertFunction(fn, context);
      return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
    }
    function assertWritableStream(x, context) {
      if (!IsWritableStream(x)) {
        throw new TypeError(`${context} is not a WritableStream.`);
      }
    }
    function isAbortSignal2(value) {
      if (typeof value !== "object" || value === null) {
        return false;
      }
      try {
        return typeof value.aborted === "boolean";
      } catch (_a) {
        return false;
      }
    }
    const supportsAbortController = typeof AbortController === "function";
    function createAbortController() {
      if (supportsAbortController) {
        return new AbortController();
      }
      return void 0;
    }
    class WritableStream {
      constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
        if (rawUnderlyingSink === void 0) {
          rawUnderlyingSink = null;
        } else {
          assertObject(rawUnderlyingSink, "First parameter");
        }
        const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
        const underlyingSink = convertUnderlyingSink(rawUnderlyingSink, "First parameter");
        InitializeWritableStream(this);
        const type = underlyingSink.type;
        if (type !== void 0) {
          throw new RangeError("Invalid type is specified");
        }
        const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
        const highWaterMark = ExtractHighWaterMark(strategy, 1);
        SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
      }
      get locked() {
        if (!IsWritableStream(this)) {
          throw streamBrandCheckException$2("locked");
        }
        return IsWritableStreamLocked(this);
      }
      abort(reason = void 0) {
        if (!IsWritableStream(this)) {
          return promiseRejectedWith(streamBrandCheckException$2("abort"));
        }
        if (IsWritableStreamLocked(this)) {
          return promiseRejectedWith(new TypeError("Cannot abort a stream that already has a writer"));
        }
        return WritableStreamAbort(this, reason);
      }
      close() {
        if (!IsWritableStream(this)) {
          return promiseRejectedWith(streamBrandCheckException$2("close"));
        }
        if (IsWritableStreamLocked(this)) {
          return promiseRejectedWith(new TypeError("Cannot close a stream that already has a writer"));
        }
        if (WritableStreamCloseQueuedOrInFlight(this)) {
          return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
        }
        return WritableStreamClose(this);
      }
      getWriter() {
        if (!IsWritableStream(this)) {
          throw streamBrandCheckException$2("getWriter");
        }
        return AcquireWritableStreamDefaultWriter(this);
      }
    }
    Object.defineProperties(WritableStream.prototype, {
      abort: { enumerable: true },
      close: { enumerable: true },
      getWriter: { enumerable: true },
      locked: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(WritableStream.prototype, SymbolPolyfill.toStringTag, {
        value: "WritableStream",
        configurable: true
      });
    }
    function AcquireWritableStreamDefaultWriter(stream) {
      return new WritableStreamDefaultWriter(stream);
    }
    function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
      const stream = Object.create(WritableStream.prototype);
      InitializeWritableStream(stream);
      const controller = Object.create(WritableStreamDefaultController.prototype);
      SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
      return stream;
    }
    function InitializeWritableStream(stream) {
      stream._state = "writable";
      stream._storedError = void 0;
      stream._writer = void 0;
      stream._writableStreamController = void 0;
      stream._writeRequests = new SimpleQueue();
      stream._inFlightWriteRequest = void 0;
      stream._closeRequest = void 0;
      stream._inFlightCloseRequest = void 0;
      stream._pendingAbortRequest = void 0;
      stream._backpressure = false;
    }
    function IsWritableStream(x) {
      if (!typeIsObject(x)) {
        return false;
      }
      if (!Object.prototype.hasOwnProperty.call(x, "_writableStreamController")) {
        return false;
      }
      return x instanceof WritableStream;
    }
    function IsWritableStreamLocked(stream) {
      if (stream._writer === void 0) {
        return false;
      }
      return true;
    }
    function WritableStreamAbort(stream, reason) {
      var _a;
      if (stream._state === "closed" || stream._state === "errored") {
        return promiseResolvedWith(void 0);
      }
      stream._writableStreamController._abortReason = reason;
      (_a = stream._writableStreamController._abortController) === null || _a === void 0 ? void 0 : _a.abort();
      const state = stream._state;
      if (state === "closed" || state === "errored") {
        return promiseResolvedWith(void 0);
      }
      if (stream._pendingAbortRequest !== void 0) {
        return stream._pendingAbortRequest._promise;
      }
      let wasAlreadyErroring = false;
      if (state === "erroring") {
        wasAlreadyErroring = true;
        reason = void 0;
      }
      const promise = newPromise((resolve2, reject) => {
        stream._pendingAbortRequest = {
          _promise: void 0,
          _resolve: resolve2,
          _reject: reject,
          _reason: reason,
          _wasAlreadyErroring: wasAlreadyErroring
        };
      });
      stream._pendingAbortRequest._promise = promise;
      if (!wasAlreadyErroring) {
        WritableStreamStartErroring(stream, reason);
      }
      return promise;
    }
    function WritableStreamClose(stream) {
      const state = stream._state;
      if (state === "closed" || state === "errored") {
        return promiseRejectedWith(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
      }
      const promise = newPromise((resolve2, reject) => {
        const closeRequest = {
          _resolve: resolve2,
          _reject: reject
        };
        stream._closeRequest = closeRequest;
      });
      const writer = stream._writer;
      if (writer !== void 0 && stream._backpressure && state === "writable") {
        defaultWriterReadyPromiseResolve(writer);
      }
      WritableStreamDefaultControllerClose(stream._writableStreamController);
      return promise;
    }
    function WritableStreamAddWriteRequest(stream) {
      const promise = newPromise((resolve2, reject) => {
        const writeRequest = {
          _resolve: resolve2,
          _reject: reject
        };
        stream._writeRequests.push(writeRequest);
      });
      return promise;
    }
    function WritableStreamDealWithRejection(stream, error2) {
      const state = stream._state;
      if (state === "writable") {
        WritableStreamStartErroring(stream, error2);
        return;
      }
      WritableStreamFinishErroring(stream);
    }
    function WritableStreamStartErroring(stream, reason) {
      const controller = stream._writableStreamController;
      stream._state = "erroring";
      stream._storedError = reason;
      const writer = stream._writer;
      if (writer !== void 0) {
        WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
      }
      if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
        WritableStreamFinishErroring(stream);
      }
    }
    function WritableStreamFinishErroring(stream) {
      stream._state = "errored";
      stream._writableStreamController[ErrorSteps]();
      const storedError = stream._storedError;
      stream._writeRequests.forEach((writeRequest) => {
        writeRequest._reject(storedError);
      });
      stream._writeRequests = new SimpleQueue();
      if (stream._pendingAbortRequest === void 0) {
        WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
        return;
      }
      const abortRequest = stream._pendingAbortRequest;
      stream._pendingAbortRequest = void 0;
      if (abortRequest._wasAlreadyErroring) {
        abortRequest._reject(storedError);
        WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
        return;
      }
      const promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
      uponPromise(promise, () => {
        abortRequest._resolve();
        WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
      }, (reason) => {
        abortRequest._reject(reason);
        WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
      });
    }
    function WritableStreamFinishInFlightWrite(stream) {
      stream._inFlightWriteRequest._resolve(void 0);
      stream._inFlightWriteRequest = void 0;
    }
    function WritableStreamFinishInFlightWriteWithError(stream, error2) {
      stream._inFlightWriteRequest._reject(error2);
      stream._inFlightWriteRequest = void 0;
      WritableStreamDealWithRejection(stream, error2);
    }
    function WritableStreamFinishInFlightClose(stream) {
      stream._inFlightCloseRequest._resolve(void 0);
      stream._inFlightCloseRequest = void 0;
      const state = stream._state;
      if (state === "erroring") {
        stream._storedError = void 0;
        if (stream._pendingAbortRequest !== void 0) {
          stream._pendingAbortRequest._resolve();
          stream._pendingAbortRequest = void 0;
        }
      }
      stream._state = "closed";
      const writer = stream._writer;
      if (writer !== void 0) {
        defaultWriterClosedPromiseResolve(writer);
      }
    }
    function WritableStreamFinishInFlightCloseWithError(stream, error2) {
      stream._inFlightCloseRequest._reject(error2);
      stream._inFlightCloseRequest = void 0;
      if (stream._pendingAbortRequest !== void 0) {
        stream._pendingAbortRequest._reject(error2);
        stream._pendingAbortRequest = void 0;
      }
      WritableStreamDealWithRejection(stream, error2);
    }
    function WritableStreamCloseQueuedOrInFlight(stream) {
      if (stream._closeRequest === void 0 && stream._inFlightCloseRequest === void 0) {
        return false;
      }
      return true;
    }
    function WritableStreamHasOperationMarkedInFlight(stream) {
      if (stream._inFlightWriteRequest === void 0 && stream._inFlightCloseRequest === void 0) {
        return false;
      }
      return true;
    }
    function WritableStreamMarkCloseRequestInFlight(stream) {
      stream._inFlightCloseRequest = stream._closeRequest;
      stream._closeRequest = void 0;
    }
    function WritableStreamMarkFirstWriteRequestInFlight(stream) {
      stream._inFlightWriteRequest = stream._writeRequests.shift();
    }
    function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
      if (stream._closeRequest !== void 0) {
        stream._closeRequest._reject(stream._storedError);
        stream._closeRequest = void 0;
      }
      const writer = stream._writer;
      if (writer !== void 0) {
        defaultWriterClosedPromiseReject(writer, stream._storedError);
      }
    }
    function WritableStreamUpdateBackpressure(stream, backpressure) {
      const writer = stream._writer;
      if (writer !== void 0 && backpressure !== stream._backpressure) {
        if (backpressure) {
          defaultWriterReadyPromiseReset(writer);
        } else {
          defaultWriterReadyPromiseResolve(writer);
        }
      }
      stream._backpressure = backpressure;
    }
    class WritableStreamDefaultWriter {
      constructor(stream) {
        assertRequiredArgument(stream, 1, "WritableStreamDefaultWriter");
        assertWritableStream(stream, "First parameter");
        if (IsWritableStreamLocked(stream)) {
          throw new TypeError("This stream has already been locked for exclusive writing by another writer");
        }
        this._ownerWritableStream = stream;
        stream._writer = this;
        const state = stream._state;
        if (state === "writable") {
          if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
            defaultWriterReadyPromiseInitialize(this);
          } else {
            defaultWriterReadyPromiseInitializeAsResolved(this);
          }
          defaultWriterClosedPromiseInitialize(this);
        } else if (state === "erroring") {
          defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
          defaultWriterClosedPromiseInitialize(this);
        } else if (state === "closed") {
          defaultWriterReadyPromiseInitializeAsResolved(this);
          defaultWriterClosedPromiseInitializeAsResolved(this);
        } else {
          const storedError = stream._storedError;
          defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
          defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
        }
      }
      get closed() {
        if (!IsWritableStreamDefaultWriter(this)) {
          return promiseRejectedWith(defaultWriterBrandCheckException("closed"));
        }
        return this._closedPromise;
      }
      get desiredSize() {
        if (!IsWritableStreamDefaultWriter(this)) {
          throw defaultWriterBrandCheckException("desiredSize");
        }
        if (this._ownerWritableStream === void 0) {
          throw defaultWriterLockException("desiredSize");
        }
        return WritableStreamDefaultWriterGetDesiredSize(this);
      }
      get ready() {
        if (!IsWritableStreamDefaultWriter(this)) {
          return promiseRejectedWith(defaultWriterBrandCheckException("ready"));
        }
        return this._readyPromise;
      }
      abort(reason = void 0) {
        if (!IsWritableStreamDefaultWriter(this)) {
          return promiseRejectedWith(defaultWriterBrandCheckException("abort"));
        }
        if (this._ownerWritableStream === void 0) {
          return promiseRejectedWith(defaultWriterLockException("abort"));
        }
        return WritableStreamDefaultWriterAbort(this, reason);
      }
      close() {
        if (!IsWritableStreamDefaultWriter(this)) {
          return promiseRejectedWith(defaultWriterBrandCheckException("close"));
        }
        const stream = this._ownerWritableStream;
        if (stream === void 0) {
          return promiseRejectedWith(defaultWriterLockException("close"));
        }
        if (WritableStreamCloseQueuedOrInFlight(stream)) {
          return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
        }
        return WritableStreamDefaultWriterClose(this);
      }
      releaseLock() {
        if (!IsWritableStreamDefaultWriter(this)) {
          throw defaultWriterBrandCheckException("releaseLock");
        }
        const stream = this._ownerWritableStream;
        if (stream === void 0) {
          return;
        }
        WritableStreamDefaultWriterRelease(this);
      }
      write(chunk = void 0) {
        if (!IsWritableStreamDefaultWriter(this)) {
          return promiseRejectedWith(defaultWriterBrandCheckException("write"));
        }
        if (this._ownerWritableStream === void 0) {
          return promiseRejectedWith(defaultWriterLockException("write to"));
        }
        return WritableStreamDefaultWriterWrite(this, chunk);
      }
    }
    Object.defineProperties(WritableStreamDefaultWriter.prototype, {
      abort: { enumerable: true },
      close: { enumerable: true },
      releaseLock: { enumerable: true },
      write: { enumerable: true },
      closed: { enumerable: true },
      desiredSize: { enumerable: true },
      ready: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(WritableStreamDefaultWriter.prototype, SymbolPolyfill.toStringTag, {
        value: "WritableStreamDefaultWriter",
        configurable: true
      });
    }
    function IsWritableStreamDefaultWriter(x) {
      if (!typeIsObject(x)) {
        return false;
      }
      if (!Object.prototype.hasOwnProperty.call(x, "_ownerWritableStream")) {
        return false;
      }
      return x instanceof WritableStreamDefaultWriter;
    }
    function WritableStreamDefaultWriterAbort(writer, reason) {
      const stream = writer._ownerWritableStream;
      return WritableStreamAbort(stream, reason);
    }
    function WritableStreamDefaultWriterClose(writer) {
      const stream = writer._ownerWritableStream;
      return WritableStreamClose(stream);
    }
    function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
      const stream = writer._ownerWritableStream;
      const state = stream._state;
      if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
        return promiseResolvedWith(void 0);
      }
      if (state === "errored") {
        return promiseRejectedWith(stream._storedError);
      }
      return WritableStreamDefaultWriterClose(writer);
    }
    function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error2) {
      if (writer._closedPromiseState === "pending") {
        defaultWriterClosedPromiseReject(writer, error2);
      } else {
        defaultWriterClosedPromiseResetToRejected(writer, error2);
      }
    }
    function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error2) {
      if (writer._readyPromiseState === "pending") {
        defaultWriterReadyPromiseReject(writer, error2);
      } else {
        defaultWriterReadyPromiseResetToRejected(writer, error2);
      }
    }
    function WritableStreamDefaultWriterGetDesiredSize(writer) {
      const stream = writer._ownerWritableStream;
      const state = stream._state;
      if (state === "errored" || state === "erroring") {
        return null;
      }
      if (state === "closed") {
        return 0;
      }
      return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
    }
    function WritableStreamDefaultWriterRelease(writer) {
      const stream = writer._ownerWritableStream;
      const releasedError = new TypeError(`Writer was released and can no longer be used to monitor the stream's closedness`);
      WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
      WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
      stream._writer = void 0;
      writer._ownerWritableStream = void 0;
    }
    function WritableStreamDefaultWriterWrite(writer, chunk) {
      const stream = writer._ownerWritableStream;
      const controller = stream._writableStreamController;
      const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
      if (stream !== writer._ownerWritableStream) {
        return promiseRejectedWith(defaultWriterLockException("write to"));
      }
      const state = stream._state;
      if (state === "errored") {
        return promiseRejectedWith(stream._storedError);
      }
      if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
        return promiseRejectedWith(new TypeError("The stream is closing or closed and cannot be written to"));
      }
      if (state === "erroring") {
        return promiseRejectedWith(stream._storedError);
      }
      const promise = WritableStreamAddWriteRequest(stream);
      WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
      return promise;
    }
    const closeSentinel = {};
    class WritableStreamDefaultController {
      constructor() {
        throw new TypeError("Illegal constructor");
      }
      get abortReason() {
        if (!IsWritableStreamDefaultController(this)) {
          throw defaultControllerBrandCheckException$2("abortReason");
        }
        return this._abortReason;
      }
      get signal() {
        if (!IsWritableStreamDefaultController(this)) {
          throw defaultControllerBrandCheckException$2("signal");
        }
        if (this._abortController === void 0) {
          throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
        }
        return this._abortController.signal;
      }
      error(e = void 0) {
        if (!IsWritableStreamDefaultController(this)) {
          throw defaultControllerBrandCheckException$2("error");
        }
        const state = this._controlledWritableStream._state;
        if (state !== "writable") {
          return;
        }
        WritableStreamDefaultControllerError(this, e);
      }
      [AbortSteps](reason) {
        const result = this._abortAlgorithm(reason);
        WritableStreamDefaultControllerClearAlgorithms(this);
        return result;
      }
      [ErrorSteps]() {
        ResetQueue(this);
      }
    }
    Object.defineProperties(WritableStreamDefaultController.prototype, {
      error: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(WritableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
        value: "WritableStreamDefaultController",
        configurable: true
      });
    }
    function IsWritableStreamDefaultController(x) {
      if (!typeIsObject(x)) {
        return false;
      }
      if (!Object.prototype.hasOwnProperty.call(x, "_controlledWritableStream")) {
        return false;
      }
      return x instanceof WritableStreamDefaultController;
    }
    function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
      controller._controlledWritableStream = stream;
      stream._writableStreamController = controller;
      controller._queue = void 0;
      controller._queueTotalSize = void 0;
      ResetQueue(controller);
      controller._abortReason = void 0;
      controller._abortController = createAbortController();
      controller._started = false;
      controller._strategySizeAlgorithm = sizeAlgorithm;
      controller._strategyHWM = highWaterMark;
      controller._writeAlgorithm = writeAlgorithm;
      controller._closeAlgorithm = closeAlgorithm;
      controller._abortAlgorithm = abortAlgorithm;
      const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
      WritableStreamUpdateBackpressure(stream, backpressure);
      const startResult = startAlgorithm();
      const startPromise = promiseResolvedWith(startResult);
      uponPromise(startPromise, () => {
        controller._started = true;
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
      }, (r) => {
        controller._started = true;
        WritableStreamDealWithRejection(stream, r);
      });
    }
    function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
      const controller = Object.create(WritableStreamDefaultController.prototype);
      let startAlgorithm = () => void 0;
      let writeAlgorithm = () => promiseResolvedWith(void 0);
      let closeAlgorithm = () => promiseResolvedWith(void 0);
      let abortAlgorithm = () => promiseResolvedWith(void 0);
      if (underlyingSink.start !== void 0) {
        startAlgorithm = () => underlyingSink.start(controller);
      }
      if (underlyingSink.write !== void 0) {
        writeAlgorithm = (chunk) => underlyingSink.write(chunk, controller);
      }
      if (underlyingSink.close !== void 0) {
        closeAlgorithm = () => underlyingSink.close();
      }
      if (underlyingSink.abort !== void 0) {
        abortAlgorithm = (reason) => underlyingSink.abort(reason);
      }
      SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
    }
    function WritableStreamDefaultControllerClearAlgorithms(controller) {
      controller._writeAlgorithm = void 0;
      controller._closeAlgorithm = void 0;
      controller._abortAlgorithm = void 0;
      controller._strategySizeAlgorithm = void 0;
    }
    function WritableStreamDefaultControllerClose(controller) {
      EnqueueValueWithSize(controller, closeSentinel, 0);
      WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }
    function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
      try {
        return controller._strategySizeAlgorithm(chunk);
      } catch (chunkSizeE) {
        WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
        return 1;
      }
    }
    function WritableStreamDefaultControllerGetDesiredSize(controller) {
      return controller._strategyHWM - controller._queueTotalSize;
    }
    function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
      try {
        EnqueueValueWithSize(controller, chunk, chunkSize);
      } catch (enqueueE) {
        WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
        return;
      }
      const stream = controller._controlledWritableStream;
      if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === "writable") {
        const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
        WritableStreamUpdateBackpressure(stream, backpressure);
      }
      WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }
    function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
      const stream = controller._controlledWritableStream;
      if (!controller._started) {
        return;
      }
      if (stream._inFlightWriteRequest !== void 0) {
        return;
      }
      const state = stream._state;
      if (state === "erroring") {
        WritableStreamFinishErroring(stream);
        return;
      }
      if (controller._queue.length === 0) {
        return;
      }
      const value = PeekQueueValue(controller);
      if (value === closeSentinel) {
        WritableStreamDefaultControllerProcessClose(controller);
      } else {
        WritableStreamDefaultControllerProcessWrite(controller, value);
      }
    }
    function WritableStreamDefaultControllerErrorIfNeeded(controller, error2) {
      if (controller._controlledWritableStream._state === "writable") {
        WritableStreamDefaultControllerError(controller, error2);
      }
    }
    function WritableStreamDefaultControllerProcessClose(controller) {
      const stream = controller._controlledWritableStream;
      WritableStreamMarkCloseRequestInFlight(stream);
      DequeueValue(controller);
      const sinkClosePromise = controller._closeAlgorithm();
      WritableStreamDefaultControllerClearAlgorithms(controller);
      uponPromise(sinkClosePromise, () => {
        WritableStreamFinishInFlightClose(stream);
      }, (reason) => {
        WritableStreamFinishInFlightCloseWithError(stream, reason);
      });
    }
    function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
      const stream = controller._controlledWritableStream;
      WritableStreamMarkFirstWriteRequestInFlight(stream);
      const sinkWritePromise = controller._writeAlgorithm(chunk);
      uponPromise(sinkWritePromise, () => {
        WritableStreamFinishInFlightWrite(stream);
        const state = stream._state;
        DequeueValue(controller);
        if (!WritableStreamCloseQueuedOrInFlight(stream) && state === "writable") {
          const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
          WritableStreamUpdateBackpressure(stream, backpressure);
        }
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
      }, (reason) => {
        if (stream._state === "writable") {
          WritableStreamDefaultControllerClearAlgorithms(controller);
        }
        WritableStreamFinishInFlightWriteWithError(stream, reason);
      });
    }
    function WritableStreamDefaultControllerGetBackpressure(controller) {
      const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
      return desiredSize <= 0;
    }
    function WritableStreamDefaultControllerError(controller, error2) {
      const stream = controller._controlledWritableStream;
      WritableStreamDefaultControllerClearAlgorithms(controller);
      WritableStreamStartErroring(stream, error2);
    }
    function streamBrandCheckException$2(name) {
      return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
    }
    function defaultControllerBrandCheckException$2(name) {
      return new TypeError(`WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`);
    }
    function defaultWriterBrandCheckException(name) {
      return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
    }
    function defaultWriterLockException(name) {
      return new TypeError("Cannot " + name + " a stream using a released writer");
    }
    function defaultWriterClosedPromiseInitialize(writer) {
      writer._closedPromise = newPromise((resolve2, reject) => {
        writer._closedPromise_resolve = resolve2;
        writer._closedPromise_reject = reject;
        writer._closedPromiseState = "pending";
      });
    }
    function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
      defaultWriterClosedPromiseInitialize(writer);
      defaultWriterClosedPromiseReject(writer, reason);
    }
    function defaultWriterClosedPromiseInitializeAsResolved(writer) {
      defaultWriterClosedPromiseInitialize(writer);
      defaultWriterClosedPromiseResolve(writer);
    }
    function defaultWriterClosedPromiseReject(writer, reason) {
      if (writer._closedPromise_reject === void 0) {
        return;
      }
      setPromiseIsHandledToTrue(writer._closedPromise);
      writer._closedPromise_reject(reason);
      writer._closedPromise_resolve = void 0;
      writer._closedPromise_reject = void 0;
      writer._closedPromiseState = "rejected";
    }
    function defaultWriterClosedPromiseResetToRejected(writer, reason) {
      defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
    }
    function defaultWriterClosedPromiseResolve(writer) {
      if (writer._closedPromise_resolve === void 0) {
        return;
      }
      writer._closedPromise_resolve(void 0);
      writer._closedPromise_resolve = void 0;
      writer._closedPromise_reject = void 0;
      writer._closedPromiseState = "resolved";
    }
    function defaultWriterReadyPromiseInitialize(writer) {
      writer._readyPromise = newPromise((resolve2, reject) => {
        writer._readyPromise_resolve = resolve2;
        writer._readyPromise_reject = reject;
      });
      writer._readyPromiseState = "pending";
    }
    function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
      defaultWriterReadyPromiseInitialize(writer);
      defaultWriterReadyPromiseReject(writer, reason);
    }
    function defaultWriterReadyPromiseInitializeAsResolved(writer) {
      defaultWriterReadyPromiseInitialize(writer);
      defaultWriterReadyPromiseResolve(writer);
    }
    function defaultWriterReadyPromiseReject(writer, reason) {
      if (writer._readyPromise_reject === void 0) {
        return;
      }
      setPromiseIsHandledToTrue(writer._readyPromise);
      writer._readyPromise_reject(reason);
      writer._readyPromise_resolve = void 0;
      writer._readyPromise_reject = void 0;
      writer._readyPromiseState = "rejected";
    }
    function defaultWriterReadyPromiseReset(writer) {
      defaultWriterReadyPromiseInitialize(writer);
    }
    function defaultWriterReadyPromiseResetToRejected(writer, reason) {
      defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
    }
    function defaultWriterReadyPromiseResolve(writer) {
      if (writer._readyPromise_resolve === void 0) {
        return;
      }
      writer._readyPromise_resolve(void 0);
      writer._readyPromise_resolve = void 0;
      writer._readyPromise_reject = void 0;
      writer._readyPromiseState = "fulfilled";
    }
    const NativeDOMException = typeof DOMException !== "undefined" ? DOMException : void 0;
    function isDOMExceptionConstructor(ctor) {
      if (!(typeof ctor === "function" || typeof ctor === "object")) {
        return false;
      }
      try {
        new ctor();
        return true;
      } catch (_a) {
        return false;
      }
    }
    function createDOMExceptionPolyfill() {
      const ctor = function DOMException2(message, name) {
        this.message = message || "";
        this.name = name || "Error";
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        }
      };
      ctor.prototype = Object.create(Error.prototype);
      Object.defineProperty(ctor.prototype, "constructor", { value: ctor, writable: true, configurable: true });
      return ctor;
    }
    const DOMException$1 = isDOMExceptionConstructor(NativeDOMException) ? NativeDOMException : createDOMExceptionPolyfill();
    function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
      const reader = AcquireReadableStreamDefaultReader(source);
      const writer = AcquireWritableStreamDefaultWriter(dest);
      source._disturbed = true;
      let shuttingDown = false;
      let currentWrite = promiseResolvedWith(void 0);
      return newPromise((resolve2, reject) => {
        let abortAlgorithm;
        if (signal !== void 0) {
          abortAlgorithm = () => {
            const error2 = new DOMException$1("Aborted", "AbortError");
            const actions = [];
            if (!preventAbort) {
              actions.push(() => {
                if (dest._state === "writable") {
                  return WritableStreamAbort(dest, error2);
                }
                return promiseResolvedWith(void 0);
              });
            }
            if (!preventCancel) {
              actions.push(() => {
                if (source._state === "readable") {
                  return ReadableStreamCancel(source, error2);
                }
                return promiseResolvedWith(void 0);
              });
            }
            shutdownWithAction(() => Promise.all(actions.map((action) => action())), true, error2);
          };
          if (signal.aborted) {
            abortAlgorithm();
            return;
          }
          signal.addEventListener("abort", abortAlgorithm);
        }
        function pipeLoop() {
          return newPromise((resolveLoop, rejectLoop) => {
            function next(done) {
              if (done) {
                resolveLoop();
              } else {
                PerformPromiseThen(pipeStep(), next, rejectLoop);
              }
            }
            next(false);
          });
        }
        function pipeStep() {
          if (shuttingDown) {
            return promiseResolvedWith(true);
          }
          return PerformPromiseThen(writer._readyPromise, () => {
            return newPromise((resolveRead, rejectRead) => {
              ReadableStreamDefaultReaderRead(reader, {
                _chunkSteps: (chunk) => {
                  currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), void 0, noop2);
                  resolveRead(false);
                },
                _closeSteps: () => resolveRead(true),
                _errorSteps: rejectRead
              });
            });
          });
        }
        isOrBecomesErrored(source, reader._closedPromise, (storedError) => {
          if (!preventAbort) {
            shutdownWithAction(() => WritableStreamAbort(dest, storedError), true, storedError);
          } else {
            shutdown(true, storedError);
          }
        });
        isOrBecomesErrored(dest, writer._closedPromise, (storedError) => {
          if (!preventCancel) {
            shutdownWithAction(() => ReadableStreamCancel(source, storedError), true, storedError);
          } else {
            shutdown(true, storedError);
          }
        });
        isOrBecomesClosed(source, reader._closedPromise, () => {
          if (!preventClose) {
            shutdownWithAction(() => WritableStreamDefaultWriterCloseWithErrorPropagation(writer));
          } else {
            shutdown();
          }
        });
        if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === "closed") {
          const destClosed = new TypeError("the destination writable stream closed before all data could be piped to it");
          if (!preventCancel) {
            shutdownWithAction(() => ReadableStreamCancel(source, destClosed), true, destClosed);
          } else {
            shutdown(true, destClosed);
          }
        }
        setPromiseIsHandledToTrue(pipeLoop());
        function waitForWritesToFinish() {
          const oldCurrentWrite = currentWrite;
          return PerformPromiseThen(currentWrite, () => oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : void 0);
        }
        function isOrBecomesErrored(stream, promise, action) {
          if (stream._state === "errored") {
            action(stream._storedError);
          } else {
            uponRejection(promise, action);
          }
        }
        function isOrBecomesClosed(stream, promise, action) {
          if (stream._state === "closed") {
            action();
          } else {
            uponFulfillment(promise, action);
          }
        }
        function shutdownWithAction(action, originalIsError, originalError) {
          if (shuttingDown) {
            return;
          }
          shuttingDown = true;
          if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
            uponFulfillment(waitForWritesToFinish(), doTheRest);
          } else {
            doTheRest();
          }
          function doTheRest() {
            uponPromise(action(), () => finalize(originalIsError, originalError), (newError) => finalize(true, newError));
          }
        }
        function shutdown(isError, error2) {
          if (shuttingDown) {
            return;
          }
          shuttingDown = true;
          if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
            uponFulfillment(waitForWritesToFinish(), () => finalize(isError, error2));
          } else {
            finalize(isError, error2);
          }
        }
        function finalize(isError, error2) {
          WritableStreamDefaultWriterRelease(writer);
          ReadableStreamReaderGenericRelease(reader);
          if (signal !== void 0) {
            signal.removeEventListener("abort", abortAlgorithm);
          }
          if (isError) {
            reject(error2);
          } else {
            resolve2(void 0);
          }
        }
      });
    }
    class ReadableStreamDefaultController {
      constructor() {
        throw new TypeError("Illegal constructor");
      }
      get desiredSize() {
        if (!IsReadableStreamDefaultController(this)) {
          throw defaultControllerBrandCheckException$1("desiredSize");
        }
        return ReadableStreamDefaultControllerGetDesiredSize(this);
      }
      close() {
        if (!IsReadableStreamDefaultController(this)) {
          throw defaultControllerBrandCheckException$1("close");
        }
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
          throw new TypeError("The stream is not in a state that permits close");
        }
        ReadableStreamDefaultControllerClose(this);
      }
      enqueue(chunk = void 0) {
        if (!IsReadableStreamDefaultController(this)) {
          throw defaultControllerBrandCheckException$1("enqueue");
        }
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
          throw new TypeError("The stream is not in a state that permits enqueue");
        }
        return ReadableStreamDefaultControllerEnqueue(this, chunk);
      }
      error(e = void 0) {
        if (!IsReadableStreamDefaultController(this)) {
          throw defaultControllerBrandCheckException$1("error");
        }
        ReadableStreamDefaultControllerError(this, e);
      }
      [CancelSteps](reason) {
        ResetQueue(this);
        const result = this._cancelAlgorithm(reason);
        ReadableStreamDefaultControllerClearAlgorithms(this);
        return result;
      }
      [PullSteps](readRequest) {
        const stream = this._controlledReadableStream;
        if (this._queue.length > 0) {
          const chunk = DequeueValue(this);
          if (this._closeRequested && this._queue.length === 0) {
            ReadableStreamDefaultControllerClearAlgorithms(this);
            ReadableStreamClose(stream);
          } else {
            ReadableStreamDefaultControllerCallPullIfNeeded(this);
          }
          readRequest._chunkSteps(chunk);
        } else {
          ReadableStreamAddReadRequest(stream, readRequest);
          ReadableStreamDefaultControllerCallPullIfNeeded(this);
        }
      }
    }
    Object.defineProperties(ReadableStreamDefaultController.prototype, {
      close: { enumerable: true },
      enqueue: { enumerable: true },
      error: { enumerable: true },
      desiredSize: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(ReadableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
        value: "ReadableStreamDefaultController",
        configurable: true
      });
    }
    function IsReadableStreamDefaultController(x) {
      if (!typeIsObject(x)) {
        return false;
      }
      if (!Object.prototype.hasOwnProperty.call(x, "_controlledReadableStream")) {
        return false;
      }
      return x instanceof ReadableStreamDefaultController;
    }
    function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
      const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
      if (!shouldPull) {
        return;
      }
      if (controller._pulling) {
        controller._pullAgain = true;
        return;
      }
      controller._pulling = true;
      const pullPromise = controller._pullAlgorithm();
      uponPromise(pullPromise, () => {
        controller._pulling = false;
        if (controller._pullAgain) {
          controller._pullAgain = false;
          ReadableStreamDefaultControllerCallPullIfNeeded(controller);
        }
      }, (e) => {
        ReadableStreamDefaultControllerError(controller, e);
      });
    }
    function ReadableStreamDefaultControllerShouldCallPull(controller) {
      const stream = controller._controlledReadableStream;
      if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
        return false;
      }
      if (!controller._started) {
        return false;
      }
      if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
        return true;
      }
      const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
      if (desiredSize > 0) {
        return true;
      }
      return false;
    }
    function ReadableStreamDefaultControllerClearAlgorithms(controller) {
      controller._pullAlgorithm = void 0;
      controller._cancelAlgorithm = void 0;
      controller._strategySizeAlgorithm = void 0;
    }
    function ReadableStreamDefaultControllerClose(controller) {
      if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
        return;
      }
      const stream = controller._controlledReadableStream;
      controller._closeRequested = true;
      if (controller._queue.length === 0) {
        ReadableStreamDefaultControllerClearAlgorithms(controller);
        ReadableStreamClose(stream);
      }
    }
    function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
      if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
        return;
      }
      const stream = controller._controlledReadableStream;
      if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
        ReadableStreamFulfillReadRequest(stream, chunk, false);
      } else {
        let chunkSize;
        try {
          chunkSize = controller._strategySizeAlgorithm(chunk);
        } catch (chunkSizeE) {
          ReadableStreamDefaultControllerError(controller, chunkSizeE);
          throw chunkSizeE;
        }
        try {
          EnqueueValueWithSize(controller, chunk, chunkSize);
        } catch (enqueueE) {
          ReadableStreamDefaultControllerError(controller, enqueueE);
          throw enqueueE;
        }
      }
      ReadableStreamDefaultControllerCallPullIfNeeded(controller);
    }
    function ReadableStreamDefaultControllerError(controller, e) {
      const stream = controller._controlledReadableStream;
      if (stream._state !== "readable") {
        return;
      }
      ResetQueue(controller);
      ReadableStreamDefaultControllerClearAlgorithms(controller);
      ReadableStreamError(stream, e);
    }
    function ReadableStreamDefaultControllerGetDesiredSize(controller) {
      const state = controller._controlledReadableStream._state;
      if (state === "errored") {
        return null;
      }
      if (state === "closed") {
        return 0;
      }
      return controller._strategyHWM - controller._queueTotalSize;
    }
    function ReadableStreamDefaultControllerHasBackpressure(controller) {
      if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
        return false;
      }
      return true;
    }
    function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
      const state = controller._controlledReadableStream._state;
      if (!controller._closeRequested && state === "readable") {
        return true;
      }
      return false;
    }
    function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
      controller._controlledReadableStream = stream;
      controller._queue = void 0;
      controller._queueTotalSize = void 0;
      ResetQueue(controller);
      controller._started = false;
      controller._closeRequested = false;
      controller._pullAgain = false;
      controller._pulling = false;
      controller._strategySizeAlgorithm = sizeAlgorithm;
      controller._strategyHWM = highWaterMark;
      controller._pullAlgorithm = pullAlgorithm;
      controller._cancelAlgorithm = cancelAlgorithm;
      stream._readableStreamController = controller;
      const startResult = startAlgorithm();
      uponPromise(promiseResolvedWith(startResult), () => {
        controller._started = true;
        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
      }, (r) => {
        ReadableStreamDefaultControllerError(controller, r);
      });
    }
    function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
      const controller = Object.create(ReadableStreamDefaultController.prototype);
      let startAlgorithm = () => void 0;
      let pullAlgorithm = () => promiseResolvedWith(void 0);
      let cancelAlgorithm = () => promiseResolvedWith(void 0);
      if (underlyingSource.start !== void 0) {
        startAlgorithm = () => underlyingSource.start(controller);
      }
      if (underlyingSource.pull !== void 0) {
        pullAlgorithm = () => underlyingSource.pull(controller);
      }
      if (underlyingSource.cancel !== void 0) {
        cancelAlgorithm = (reason) => underlyingSource.cancel(reason);
      }
      SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
    }
    function defaultControllerBrandCheckException$1(name) {
      return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
    }
    function ReadableStreamTee(stream, cloneForBranch2) {
      if (IsReadableByteStreamController(stream._readableStreamController)) {
        return ReadableByteStreamTee(stream);
      }
      return ReadableStreamDefaultTee(stream);
    }
    function ReadableStreamDefaultTee(stream, cloneForBranch2) {
      const reader = AcquireReadableStreamDefaultReader(stream);
      let reading = false;
      let canceled1 = false;
      let canceled2 = false;
      let reason1;
      let reason2;
      let branch1;
      let branch2;
      let resolveCancelPromise;
      const cancelPromise = newPromise((resolve2) => {
        resolveCancelPromise = resolve2;
      });
      function pullAlgorithm() {
        if (reading) {
          return promiseResolvedWith(void 0);
        }
        reading = true;
        const readRequest = {
          _chunkSteps: (chunk) => {
            queueMicrotask(() => {
              reading = false;
              const chunk1 = chunk;
              const chunk2 = chunk;
              if (!canceled1) {
                ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
              }
              if (!canceled2) {
                ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
              }
            });
          },
          _closeSteps: () => {
            reading = false;
            if (!canceled1) {
              ReadableStreamDefaultControllerClose(branch1._readableStreamController);
            }
            if (!canceled2) {
              ReadableStreamDefaultControllerClose(branch2._readableStreamController);
            }
            if (!canceled1 || !canceled2) {
              resolveCancelPromise(void 0);
            }
          },
          _errorSteps: () => {
            reading = false;
          }
        };
        ReadableStreamDefaultReaderRead(reader, readRequest);
        return promiseResolvedWith(void 0);
      }
      function cancel1Algorithm(reason) {
        canceled1 = true;
        reason1 = reason;
        if (canceled2) {
          const compositeReason = CreateArrayFromList([reason1, reason2]);
          const cancelResult = ReadableStreamCancel(stream, compositeReason);
          resolveCancelPromise(cancelResult);
        }
        return cancelPromise;
      }
      function cancel2Algorithm(reason) {
        canceled2 = true;
        reason2 = reason;
        if (canceled1) {
          const compositeReason = CreateArrayFromList([reason1, reason2]);
          const cancelResult = ReadableStreamCancel(stream, compositeReason);
          resolveCancelPromise(cancelResult);
        }
        return cancelPromise;
      }
      function startAlgorithm() {
      }
      branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
      branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
      uponRejection(reader._closedPromise, (r) => {
        ReadableStreamDefaultControllerError(branch1._readableStreamController, r);
        ReadableStreamDefaultControllerError(branch2._readableStreamController, r);
        if (!canceled1 || !canceled2) {
          resolveCancelPromise(void 0);
        }
      });
      return [branch1, branch2];
    }
    function ReadableByteStreamTee(stream) {
      let reader = AcquireReadableStreamDefaultReader(stream);
      let reading = false;
      let canceled1 = false;
      let canceled2 = false;
      let reason1;
      let reason2;
      let branch1;
      let branch2;
      let resolveCancelPromise;
      const cancelPromise = newPromise((resolve2) => {
        resolveCancelPromise = resolve2;
      });
      function forwardReaderError(thisReader) {
        uponRejection(thisReader._closedPromise, (r) => {
          if (thisReader !== reader) {
            return;
          }
          ReadableByteStreamControllerError(branch1._readableStreamController, r);
          ReadableByteStreamControllerError(branch2._readableStreamController, r);
          if (!canceled1 || !canceled2) {
            resolveCancelPromise(void 0);
          }
        });
      }
      function pullWithDefaultReader() {
        if (IsReadableStreamBYOBReader(reader)) {
          ReadableStreamReaderGenericRelease(reader);
          reader = AcquireReadableStreamDefaultReader(stream);
          forwardReaderError(reader);
        }
        const readRequest = {
          _chunkSteps: (chunk) => {
            queueMicrotask(() => {
              reading = false;
              const chunk1 = chunk;
              let chunk2 = chunk;
              if (!canceled1 && !canceled2) {
                try {
                  chunk2 = CloneAsUint8Array(chunk);
                } catch (cloneE) {
                  ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
                  ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
                  resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                  return;
                }
              }
              if (!canceled1) {
                ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
              }
              if (!canceled2) {
                ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
              }
            });
          },
          _closeSteps: () => {
            reading = false;
            if (!canceled1) {
              ReadableByteStreamControllerClose(branch1._readableStreamController);
            }
            if (!canceled2) {
              ReadableByteStreamControllerClose(branch2._readableStreamController);
            }
            if (branch1._readableStreamController._pendingPullIntos.length > 0) {
              ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
            }
            if (branch2._readableStreamController._pendingPullIntos.length > 0) {
              ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
            }
            if (!canceled1 || !canceled2) {
              resolveCancelPromise(void 0);
            }
          },
          _errorSteps: () => {
            reading = false;
          }
        };
        ReadableStreamDefaultReaderRead(reader, readRequest);
      }
      function pullWithBYOBReader(view, forBranch2) {
        if (IsReadableStreamDefaultReader(reader)) {
          ReadableStreamReaderGenericRelease(reader);
          reader = AcquireReadableStreamBYOBReader(stream);
          forwardReaderError(reader);
        }
        const byobBranch = forBranch2 ? branch2 : branch1;
        const otherBranch = forBranch2 ? branch1 : branch2;
        const readIntoRequest = {
          _chunkSteps: (chunk) => {
            queueMicrotask(() => {
              reading = false;
              const byobCanceled = forBranch2 ? canceled2 : canceled1;
              const otherCanceled = forBranch2 ? canceled1 : canceled2;
              if (!otherCanceled) {
                let clonedChunk;
                try {
                  clonedChunk = CloneAsUint8Array(chunk);
                } catch (cloneE) {
                  ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
                  ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
                  resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                  return;
                }
                if (!byobCanceled) {
                  ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                }
                ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
              } else if (!byobCanceled) {
                ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
              }
            });
          },
          _closeSteps: (chunk) => {
            reading = false;
            const byobCanceled = forBranch2 ? canceled2 : canceled1;
            const otherCanceled = forBranch2 ? canceled1 : canceled2;
            if (!byobCanceled) {
              ReadableByteStreamControllerClose(byobBranch._readableStreamController);
            }
            if (!otherCanceled) {
              ReadableByteStreamControllerClose(otherBranch._readableStreamController);
            }
            if (chunk !== void 0) {
              if (!byobCanceled) {
                ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
              }
              if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
                ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
              }
            }
            if (!byobCanceled || !otherCanceled) {
              resolveCancelPromise(void 0);
            }
          },
          _errorSteps: () => {
            reading = false;
          }
        };
        ReadableStreamBYOBReaderRead(reader, view, readIntoRequest);
      }
      function pull1Algorithm() {
        if (reading) {
          return promiseResolvedWith(void 0);
        }
        reading = true;
        const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
        if (byobRequest === null) {
          pullWithDefaultReader();
        } else {
          pullWithBYOBReader(byobRequest._view, false);
        }
        return promiseResolvedWith(void 0);
      }
      function pull2Algorithm() {
        if (reading) {
          return promiseResolvedWith(void 0);
        }
        reading = true;
        const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
        if (byobRequest === null) {
          pullWithDefaultReader();
        } else {
          pullWithBYOBReader(byobRequest._view, true);
        }
        return promiseResolvedWith(void 0);
      }
      function cancel1Algorithm(reason) {
        canceled1 = true;
        reason1 = reason;
        if (canceled2) {
          const compositeReason = CreateArrayFromList([reason1, reason2]);
          const cancelResult = ReadableStreamCancel(stream, compositeReason);
          resolveCancelPromise(cancelResult);
        }
        return cancelPromise;
      }
      function cancel2Algorithm(reason) {
        canceled2 = true;
        reason2 = reason;
        if (canceled1) {
          const compositeReason = CreateArrayFromList([reason1, reason2]);
          const cancelResult = ReadableStreamCancel(stream, compositeReason);
          resolveCancelPromise(cancelResult);
        }
        return cancelPromise;
      }
      function startAlgorithm() {
        return;
      }
      branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
      branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
      forwardReaderError(reader);
      return [branch1, branch2];
    }
    function convertUnderlyingDefaultOrByteSource(source, context) {
      assertDictionary(source, context);
      const original = source;
      const autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
      const cancel = original === null || original === void 0 ? void 0 : original.cancel;
      const pull = original === null || original === void 0 ? void 0 : original.pull;
      const start = original === null || original === void 0 ? void 0 : original.start;
      const type = original === null || original === void 0 ? void 0 : original.type;
      return {
        autoAllocateChunkSize: autoAllocateChunkSize === void 0 ? void 0 : convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
        cancel: cancel === void 0 ? void 0 : convertUnderlyingSourceCancelCallback(cancel, original, `${context} has member 'cancel' that`),
        pull: pull === void 0 ? void 0 : convertUnderlyingSourcePullCallback(pull, original, `${context} has member 'pull' that`),
        start: start === void 0 ? void 0 : convertUnderlyingSourceStartCallback(start, original, `${context} has member 'start' that`),
        type: type === void 0 ? void 0 : convertReadableStreamType(type, `${context} has member 'type' that`)
      };
    }
    function convertUnderlyingSourceCancelCallback(fn, original, context) {
      assertFunction(fn, context);
      return (reason) => promiseCall(fn, original, [reason]);
    }
    function convertUnderlyingSourcePullCallback(fn, original, context) {
      assertFunction(fn, context);
      return (controller) => promiseCall(fn, original, [controller]);
    }
    function convertUnderlyingSourceStartCallback(fn, original, context) {
      assertFunction(fn, context);
      return (controller) => reflectCall(fn, original, [controller]);
    }
    function convertReadableStreamType(type, context) {
      type = `${type}`;
      if (type !== "bytes") {
        throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
      }
      return type;
    }
    function convertReaderOptions(options2, context) {
      assertDictionary(options2, context);
      const mode = options2 === null || options2 === void 0 ? void 0 : options2.mode;
      return {
        mode: mode === void 0 ? void 0 : convertReadableStreamReaderMode(mode, `${context} has member 'mode' that`)
      };
    }
    function convertReadableStreamReaderMode(mode, context) {
      mode = `${mode}`;
      if (mode !== "byob") {
        throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
      }
      return mode;
    }
    function convertIteratorOptions(options2, context) {
      assertDictionary(options2, context);
      const preventCancel = options2 === null || options2 === void 0 ? void 0 : options2.preventCancel;
      return { preventCancel: Boolean(preventCancel) };
    }
    function convertPipeOptions(options2, context) {
      assertDictionary(options2, context);
      const preventAbort = options2 === null || options2 === void 0 ? void 0 : options2.preventAbort;
      const preventCancel = options2 === null || options2 === void 0 ? void 0 : options2.preventCancel;
      const preventClose = options2 === null || options2 === void 0 ? void 0 : options2.preventClose;
      const signal = options2 === null || options2 === void 0 ? void 0 : options2.signal;
      if (signal !== void 0) {
        assertAbortSignal(signal, `${context} has member 'signal' that`);
      }
      return {
        preventAbort: Boolean(preventAbort),
        preventCancel: Boolean(preventCancel),
        preventClose: Boolean(preventClose),
        signal
      };
    }
    function assertAbortSignal(signal, context) {
      if (!isAbortSignal2(signal)) {
        throw new TypeError(`${context} is not an AbortSignal.`);
      }
    }
    function convertReadableWritablePair(pair, context) {
      assertDictionary(pair, context);
      const readable = pair === null || pair === void 0 ? void 0 : pair.readable;
      assertRequiredField(readable, "readable", "ReadableWritablePair");
      assertReadableStream(readable, `${context} has member 'readable' that`);
      const writable2 = pair === null || pair === void 0 ? void 0 : pair.writable;
      assertRequiredField(writable2, "writable", "ReadableWritablePair");
      assertWritableStream(writable2, `${context} has member 'writable' that`);
      return { readable, writable: writable2 };
    }
    class ReadableStream2 {
      constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
        if (rawUnderlyingSource === void 0) {
          rawUnderlyingSource = null;
        } else {
          assertObject(rawUnderlyingSource, "First parameter");
        }
        const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
        const underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, "First parameter");
        InitializeReadableStream(this);
        if (underlyingSource.type === "bytes") {
          if (strategy.size !== void 0) {
            throw new RangeError("The strategy for a byte stream cannot have a size function");
          }
          const highWaterMark = ExtractHighWaterMark(strategy, 0);
          SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
        } else {
          const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
          const highWaterMark = ExtractHighWaterMark(strategy, 1);
          SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
        }
      }
      get locked() {
        if (!IsReadableStream(this)) {
          throw streamBrandCheckException$1("locked");
        }
        return IsReadableStreamLocked(this);
      }
      cancel(reason = void 0) {
        if (!IsReadableStream(this)) {
          return promiseRejectedWith(streamBrandCheckException$1("cancel"));
        }
        if (IsReadableStreamLocked(this)) {
          return promiseRejectedWith(new TypeError("Cannot cancel a stream that already has a reader"));
        }
        return ReadableStreamCancel(this, reason);
      }
      getReader(rawOptions = void 0) {
        if (!IsReadableStream(this)) {
          throw streamBrandCheckException$1("getReader");
        }
        const options2 = convertReaderOptions(rawOptions, "First parameter");
        if (options2.mode === void 0) {
          return AcquireReadableStreamDefaultReader(this);
        }
        return AcquireReadableStreamBYOBReader(this);
      }
      pipeThrough(rawTransform, rawOptions = {}) {
        if (!IsReadableStream(this)) {
          throw streamBrandCheckException$1("pipeThrough");
        }
        assertRequiredArgument(rawTransform, 1, "pipeThrough");
        const transform = convertReadableWritablePair(rawTransform, "First parameter");
        const options2 = convertPipeOptions(rawOptions, "Second parameter");
        if (IsReadableStreamLocked(this)) {
          throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
        }
        if (IsWritableStreamLocked(transform.writable)) {
          throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
        }
        const promise = ReadableStreamPipeTo(this, transform.writable, options2.preventClose, options2.preventAbort, options2.preventCancel, options2.signal);
        setPromiseIsHandledToTrue(promise);
        return transform.readable;
      }
      pipeTo(destination, rawOptions = {}) {
        if (!IsReadableStream(this)) {
          return promiseRejectedWith(streamBrandCheckException$1("pipeTo"));
        }
        if (destination === void 0) {
          return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`);
        }
        if (!IsWritableStream(destination)) {
          return promiseRejectedWith(new TypeError(`ReadableStream.prototype.pipeTo's first argument must be a WritableStream`));
        }
        let options2;
        try {
          options2 = convertPipeOptions(rawOptions, "Second parameter");
        } catch (e) {
          return promiseRejectedWith(e);
        }
        if (IsReadableStreamLocked(this)) {
          return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"));
        }
        if (IsWritableStreamLocked(destination)) {
          return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"));
        }
        return ReadableStreamPipeTo(this, destination, options2.preventClose, options2.preventAbort, options2.preventCancel, options2.signal);
      }
      tee() {
        if (!IsReadableStream(this)) {
          throw streamBrandCheckException$1("tee");
        }
        const branches = ReadableStreamTee(this);
        return CreateArrayFromList(branches);
      }
      values(rawOptions = void 0) {
        if (!IsReadableStream(this)) {
          throw streamBrandCheckException$1("values");
        }
        const options2 = convertIteratorOptions(rawOptions, "First parameter");
        return AcquireReadableStreamAsyncIterator(this, options2.preventCancel);
      }
    }
    Object.defineProperties(ReadableStream2.prototype, {
      cancel: { enumerable: true },
      getReader: { enumerable: true },
      pipeThrough: { enumerable: true },
      pipeTo: { enumerable: true },
      tee: { enumerable: true },
      values: { enumerable: true },
      locked: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(ReadableStream2.prototype, SymbolPolyfill.toStringTag, {
        value: "ReadableStream",
        configurable: true
      });
    }
    if (typeof SymbolPolyfill.asyncIterator === "symbol") {
      Object.defineProperty(ReadableStream2.prototype, SymbolPolyfill.asyncIterator, {
        value: ReadableStream2.prototype.values,
        writable: true,
        configurable: true
      });
    }
    function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
      const stream = Object.create(ReadableStream2.prototype);
      InitializeReadableStream(stream);
      const controller = Object.create(ReadableStreamDefaultController.prototype);
      SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
      return stream;
    }
    function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
      const stream = Object.create(ReadableStream2.prototype);
      InitializeReadableStream(stream);
      const controller = Object.create(ReadableByteStreamController.prototype);
      SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, void 0);
      return stream;
    }
    function InitializeReadableStream(stream) {
      stream._state = "readable";
      stream._reader = void 0;
      stream._storedError = void 0;
      stream._disturbed = false;
    }
    function IsReadableStream(x) {
      if (!typeIsObject(x)) {
        return false;
      }
      if (!Object.prototype.hasOwnProperty.call(x, "_readableStreamController")) {
        return false;
      }
      return x instanceof ReadableStream2;
    }
    function IsReadableStreamLocked(stream) {
      if (stream._reader === void 0) {
        return false;
      }
      return true;
    }
    function ReadableStreamCancel(stream, reason) {
      stream._disturbed = true;
      if (stream._state === "closed") {
        return promiseResolvedWith(void 0);
      }
      if (stream._state === "errored") {
        return promiseRejectedWith(stream._storedError);
      }
      ReadableStreamClose(stream);
      const reader = stream._reader;
      if (reader !== void 0 && IsReadableStreamBYOBReader(reader)) {
        reader._readIntoRequests.forEach((readIntoRequest) => {
          readIntoRequest._closeSteps(void 0);
        });
        reader._readIntoRequests = new SimpleQueue();
      }
      const sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
      return transformPromiseWith(sourceCancelPromise, noop2);
    }
    function ReadableStreamClose(stream) {
      stream._state = "closed";
      const reader = stream._reader;
      if (reader === void 0) {
        return;
      }
      defaultReaderClosedPromiseResolve(reader);
      if (IsReadableStreamDefaultReader(reader)) {
        reader._readRequests.forEach((readRequest) => {
          readRequest._closeSteps();
        });
        reader._readRequests = new SimpleQueue();
      }
    }
    function ReadableStreamError(stream, e) {
      stream._state = "errored";
      stream._storedError = e;
      const reader = stream._reader;
      if (reader === void 0) {
        return;
      }
      defaultReaderClosedPromiseReject(reader, e);
      if (IsReadableStreamDefaultReader(reader)) {
        reader._readRequests.forEach((readRequest) => {
          readRequest._errorSteps(e);
        });
        reader._readRequests = new SimpleQueue();
      } else {
        reader._readIntoRequests.forEach((readIntoRequest) => {
          readIntoRequest._errorSteps(e);
        });
        reader._readIntoRequests = new SimpleQueue();
      }
    }
    function streamBrandCheckException$1(name) {
      return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
    }
    function convertQueuingStrategyInit(init2, context) {
      assertDictionary(init2, context);
      const highWaterMark = init2 === null || init2 === void 0 ? void 0 : init2.highWaterMark;
      assertRequiredField(highWaterMark, "highWaterMark", "QueuingStrategyInit");
      return {
        highWaterMark: convertUnrestrictedDouble(highWaterMark)
      };
    }
    const byteLengthSizeFunction = (chunk) => {
      return chunk.byteLength;
    };
    Object.defineProperty(byteLengthSizeFunction, "name", {
      value: "size",
      configurable: true
    });
    class ByteLengthQueuingStrategy {
      constructor(options2) {
        assertRequiredArgument(options2, 1, "ByteLengthQueuingStrategy");
        options2 = convertQueuingStrategyInit(options2, "First parameter");
        this._byteLengthQueuingStrategyHighWaterMark = options2.highWaterMark;
      }
      get highWaterMark() {
        if (!IsByteLengthQueuingStrategy(this)) {
          throw byteLengthBrandCheckException("highWaterMark");
        }
        return this._byteLengthQueuingStrategyHighWaterMark;
      }
      get size() {
        if (!IsByteLengthQueuingStrategy(this)) {
          throw byteLengthBrandCheckException("size");
        }
        return byteLengthSizeFunction;
      }
    }
    Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
      highWaterMark: { enumerable: true },
      size: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(ByteLengthQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
        value: "ByteLengthQueuingStrategy",
        configurable: true
      });
    }
    function byteLengthBrandCheckException(name) {
      return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
    }
    function IsByteLengthQueuingStrategy(x) {
      if (!typeIsObject(x)) {
        return false;
      }
      if (!Object.prototype.hasOwnProperty.call(x, "_byteLengthQueuingStrategyHighWaterMark")) {
        return false;
      }
      return x instanceof ByteLengthQueuingStrategy;
    }
    const countSizeFunction = () => {
      return 1;
    };
    Object.defineProperty(countSizeFunction, "name", {
      value: "size",
      configurable: true
    });
    class CountQueuingStrategy {
      constructor(options2) {
        assertRequiredArgument(options2, 1, "CountQueuingStrategy");
        options2 = convertQueuingStrategyInit(options2, "First parameter");
        this._countQueuingStrategyHighWaterMark = options2.highWaterMark;
      }
      get highWaterMark() {
        if (!IsCountQueuingStrategy(this)) {
          throw countBrandCheckException("highWaterMark");
        }
        return this._countQueuingStrategyHighWaterMark;
      }
      get size() {
        if (!IsCountQueuingStrategy(this)) {
          throw countBrandCheckException("size");
        }
        return countSizeFunction;
      }
    }
    Object.defineProperties(CountQueuingStrategy.prototype, {
      highWaterMark: { enumerable: true },
      size: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(CountQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
        value: "CountQueuingStrategy",
        configurable: true
      });
    }
    function countBrandCheckException(name) {
      return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
    }
    function IsCountQueuingStrategy(x) {
      if (!typeIsObject(x)) {
        return false;
      }
      if (!Object.prototype.hasOwnProperty.call(x, "_countQueuingStrategyHighWaterMark")) {
        return false;
      }
      return x instanceof CountQueuingStrategy;
    }
    function convertTransformer(original, context) {
      assertDictionary(original, context);
      const flush = original === null || original === void 0 ? void 0 : original.flush;
      const readableType = original === null || original === void 0 ? void 0 : original.readableType;
      const start = original === null || original === void 0 ? void 0 : original.start;
      const transform = original === null || original === void 0 ? void 0 : original.transform;
      const writableType = original === null || original === void 0 ? void 0 : original.writableType;
      return {
        flush: flush === void 0 ? void 0 : convertTransformerFlushCallback(flush, original, `${context} has member 'flush' that`),
        readableType,
        start: start === void 0 ? void 0 : convertTransformerStartCallback(start, original, `${context} has member 'start' that`),
        transform: transform === void 0 ? void 0 : convertTransformerTransformCallback(transform, original, `${context} has member 'transform' that`),
        writableType
      };
    }
    function convertTransformerFlushCallback(fn, original, context) {
      assertFunction(fn, context);
      return (controller) => promiseCall(fn, original, [controller]);
    }
    function convertTransformerStartCallback(fn, original, context) {
      assertFunction(fn, context);
      return (controller) => reflectCall(fn, original, [controller]);
    }
    function convertTransformerTransformCallback(fn, original, context) {
      assertFunction(fn, context);
      return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
    }
    class TransformStream {
      constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}) {
        if (rawTransformer === void 0) {
          rawTransformer = null;
        }
        const writableStrategy = convertQueuingStrategy(rawWritableStrategy, "Second parameter");
        const readableStrategy = convertQueuingStrategy(rawReadableStrategy, "Third parameter");
        const transformer = convertTransformer(rawTransformer, "First parameter");
        if (transformer.readableType !== void 0) {
          throw new RangeError("Invalid readableType specified");
        }
        if (transformer.writableType !== void 0) {
          throw new RangeError("Invalid writableType specified");
        }
        const readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
        const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
        const writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
        const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
        let startPromise_resolve;
        const startPromise = newPromise((resolve2) => {
          startPromise_resolve = resolve2;
        });
        InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
        SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
        if (transformer.start !== void 0) {
          startPromise_resolve(transformer.start(this._transformStreamController));
        } else {
          startPromise_resolve(void 0);
        }
      }
      get readable() {
        if (!IsTransformStream(this)) {
          throw streamBrandCheckException("readable");
        }
        return this._readable;
      }
      get writable() {
        if (!IsTransformStream(this)) {
          throw streamBrandCheckException("writable");
        }
        return this._writable;
      }
    }
    Object.defineProperties(TransformStream.prototype, {
      readable: { enumerable: true },
      writable: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(TransformStream.prototype, SymbolPolyfill.toStringTag, {
        value: "TransformStream",
        configurable: true
      });
    }
    function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
      function startAlgorithm() {
        return startPromise;
      }
      function writeAlgorithm(chunk) {
        return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
      }
      function abortAlgorithm(reason) {
        return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
      }
      function closeAlgorithm() {
        return TransformStreamDefaultSinkCloseAlgorithm(stream);
      }
      stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
      function pullAlgorithm() {
        return TransformStreamDefaultSourcePullAlgorithm(stream);
      }
      function cancelAlgorithm(reason) {
        TransformStreamErrorWritableAndUnblockWrite(stream, reason);
        return promiseResolvedWith(void 0);
      }
      stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
      stream._backpressure = void 0;
      stream._backpressureChangePromise = void 0;
      stream._backpressureChangePromise_resolve = void 0;
      TransformStreamSetBackpressure(stream, true);
      stream._transformStreamController = void 0;
    }
    function IsTransformStream(x) {
      if (!typeIsObject(x)) {
        return false;
      }
      if (!Object.prototype.hasOwnProperty.call(x, "_transformStreamController")) {
        return false;
      }
      return x instanceof TransformStream;
    }
    function TransformStreamError(stream, e) {
      ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e);
      TransformStreamErrorWritableAndUnblockWrite(stream, e);
    }
    function TransformStreamErrorWritableAndUnblockWrite(stream, e) {
      TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
      WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e);
      if (stream._backpressure) {
        TransformStreamSetBackpressure(stream, false);
      }
    }
    function TransformStreamSetBackpressure(stream, backpressure) {
      if (stream._backpressureChangePromise !== void 0) {
        stream._backpressureChangePromise_resolve();
      }
      stream._backpressureChangePromise = newPromise((resolve2) => {
        stream._backpressureChangePromise_resolve = resolve2;
      });
      stream._backpressure = backpressure;
    }
    class TransformStreamDefaultController {
      constructor() {
        throw new TypeError("Illegal constructor");
      }
      get desiredSize() {
        if (!IsTransformStreamDefaultController(this)) {
          throw defaultControllerBrandCheckException("desiredSize");
        }
        const readableController = this._controlledTransformStream._readable._readableStreamController;
        return ReadableStreamDefaultControllerGetDesiredSize(readableController);
      }
      enqueue(chunk = void 0) {
        if (!IsTransformStreamDefaultController(this)) {
          throw defaultControllerBrandCheckException("enqueue");
        }
        TransformStreamDefaultControllerEnqueue(this, chunk);
      }
      error(reason = void 0) {
        if (!IsTransformStreamDefaultController(this)) {
          throw defaultControllerBrandCheckException("error");
        }
        TransformStreamDefaultControllerError(this, reason);
      }
      terminate() {
        if (!IsTransformStreamDefaultController(this)) {
          throw defaultControllerBrandCheckException("terminate");
        }
        TransformStreamDefaultControllerTerminate(this);
      }
    }
    Object.defineProperties(TransformStreamDefaultController.prototype, {
      enqueue: { enumerable: true },
      error: { enumerable: true },
      terminate: { enumerable: true },
      desiredSize: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(TransformStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
        value: "TransformStreamDefaultController",
        configurable: true
      });
    }
    function IsTransformStreamDefaultController(x) {
      if (!typeIsObject(x)) {
        return false;
      }
      if (!Object.prototype.hasOwnProperty.call(x, "_controlledTransformStream")) {
        return false;
      }
      return x instanceof TransformStreamDefaultController;
    }
    function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
      controller._controlledTransformStream = stream;
      stream._transformStreamController = controller;
      controller._transformAlgorithm = transformAlgorithm;
      controller._flushAlgorithm = flushAlgorithm;
    }
    function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
      const controller = Object.create(TransformStreamDefaultController.prototype);
      let transformAlgorithm = (chunk) => {
        try {
          TransformStreamDefaultControllerEnqueue(controller, chunk);
          return promiseResolvedWith(void 0);
        } catch (transformResultE) {
          return promiseRejectedWith(transformResultE);
        }
      };
      let flushAlgorithm = () => promiseResolvedWith(void 0);
      if (transformer.transform !== void 0) {
        transformAlgorithm = (chunk) => transformer.transform(chunk, controller);
      }
      if (transformer.flush !== void 0) {
        flushAlgorithm = () => transformer.flush(controller);
      }
      SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
    }
    function TransformStreamDefaultControllerClearAlgorithms(controller) {
      controller._transformAlgorithm = void 0;
      controller._flushAlgorithm = void 0;
    }
    function TransformStreamDefaultControllerEnqueue(controller, chunk) {
      const stream = controller._controlledTransformStream;
      const readableController = stream._readable._readableStreamController;
      if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
        throw new TypeError("Readable side is not in a state that permits enqueue");
      }
      try {
        ReadableStreamDefaultControllerEnqueue(readableController, chunk);
      } catch (e) {
        TransformStreamErrorWritableAndUnblockWrite(stream, e);
        throw stream._readable._storedError;
      }
      const backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
      if (backpressure !== stream._backpressure) {
        TransformStreamSetBackpressure(stream, true);
      }
    }
    function TransformStreamDefaultControllerError(controller, e) {
      TransformStreamError(controller._controlledTransformStream, e);
    }
    function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
      const transformPromise = controller._transformAlgorithm(chunk);
      return transformPromiseWith(transformPromise, void 0, (r) => {
        TransformStreamError(controller._controlledTransformStream, r);
        throw r;
      });
    }
    function TransformStreamDefaultControllerTerminate(controller) {
      const stream = controller._controlledTransformStream;
      const readableController = stream._readable._readableStreamController;
      ReadableStreamDefaultControllerClose(readableController);
      const error2 = new TypeError("TransformStream terminated");
      TransformStreamErrorWritableAndUnblockWrite(stream, error2);
    }
    function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
      const controller = stream._transformStreamController;
      if (stream._backpressure) {
        const backpressureChangePromise = stream._backpressureChangePromise;
        return transformPromiseWith(backpressureChangePromise, () => {
          const writable2 = stream._writable;
          const state = writable2._state;
          if (state === "erroring") {
            throw writable2._storedError;
          }
          return TransformStreamDefaultControllerPerformTransform(controller, chunk);
        });
      }
      return TransformStreamDefaultControllerPerformTransform(controller, chunk);
    }
    function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
      TransformStreamError(stream, reason);
      return promiseResolvedWith(void 0);
    }
    function TransformStreamDefaultSinkCloseAlgorithm(stream) {
      const readable = stream._readable;
      const controller = stream._transformStreamController;
      const flushPromise = controller._flushAlgorithm();
      TransformStreamDefaultControllerClearAlgorithms(controller);
      return transformPromiseWith(flushPromise, () => {
        if (readable._state === "errored") {
          throw readable._storedError;
        }
        ReadableStreamDefaultControllerClose(readable._readableStreamController);
      }, (r) => {
        TransformStreamError(stream, r);
        throw readable._storedError;
      });
    }
    function TransformStreamDefaultSourcePullAlgorithm(stream) {
      TransformStreamSetBackpressure(stream, false);
      return stream._backpressureChangePromise;
    }
    function defaultControllerBrandCheckException(name) {
      return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
    }
    function streamBrandCheckException(name) {
      return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
    }
    exports2.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
    exports2.CountQueuingStrategy = CountQueuingStrategy;
    exports2.ReadableByteStreamController = ReadableByteStreamController;
    exports2.ReadableStream = ReadableStream2;
    exports2.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
    exports2.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
    exports2.ReadableStreamDefaultController = ReadableStreamDefaultController;
    exports2.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
    exports2.TransformStream = TransformStream;
    exports2.TransformStreamDefaultController = TransformStreamDefaultController;
    exports2.WritableStream = WritableStream;
    exports2.WritableStreamDefaultController = WritableStreamDefaultController;
    exports2.WritableStreamDefaultWriter = WritableStreamDefaultWriter;
    Object.defineProperty(exports2, "__esModule", { value: true });
  });
})(ponyfill_es2018, ponyfill_es2018.exports);
var POOL_SIZE$1 = 65536;
if (!globalThis.ReadableStream) {
  try {
    Object.assign(globalThis, require("stream/web"));
  } catch (error2) {
    Object.assign(globalThis, ponyfill_es2018.exports);
  }
}
try {
  const { Blob: Blob3 } = require("buffer");
  if (Blob3 && !Blob3.prototype.stream) {
    Blob3.prototype.stream = function name(params) {
      let position = 0;
      const blob = this;
      return new ReadableStream({
        type: "bytes",
        async pull(ctrl) {
          const chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE$1));
          const buffer = await chunk.arrayBuffer();
          position += buffer.byteLength;
          ctrl.enqueue(new Uint8Array(buffer));
          if (position === blob.size) {
            ctrl.close();
          }
        }
      });
    };
  }
} catch (error2) {
}
var POOL_SIZE = 65536;
async function* toIterator(parts, clone2 = true) {
  for (let part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else if (ArrayBuffer.isView(part)) {
      if (clone2) {
        let position = part.byteOffset;
        let end = part.byteOffset + part.byteLength;
        while (position !== end) {
          const size = Math.min(end - position, POOL_SIZE);
          const chunk = part.buffer.slice(position, position + size);
          position += chunk.byteLength;
          yield new Uint8Array(chunk);
        }
      } else {
        yield part;
      }
    } else {
      let position = 0;
      while (position !== part.size) {
        const chunk = part.slice(position, Math.min(part.size, position + POOL_SIZE));
        const buffer = await chunk.arrayBuffer();
        position += buffer.byteLength;
        yield new Uint8Array(buffer);
      }
    }
  }
}
var _Blob = class Blob {
  #parts = [];
  #type = "";
  #size = 0;
  constructor(blobParts = [], options2 = {}) {
    let size = 0;
    const parts = blobParts.map((element) => {
      let part;
      if (ArrayBuffer.isView(element)) {
        part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength));
      } else if (element instanceof ArrayBuffer) {
        part = new Uint8Array(element.slice(0));
      } else if (element instanceof Blob) {
        part = element;
      } else {
        part = new TextEncoder().encode(element);
      }
      size += ArrayBuffer.isView(part) ? part.byteLength : part.size;
      return part;
    });
    const type = options2.type === void 0 ? "" : String(options2.type);
    this.#type = /[^\u0020-\u007E]/.test(type) ? "" : type;
    this.#size = size;
    this.#parts = parts;
  }
  get size() {
    return this.#size;
  }
  get type() {
    return this.#type;
  }
  async text() {
    const decoder = new TextDecoder();
    let str = "";
    for await (let part of toIterator(this.#parts, false)) {
      str += decoder.decode(part, { stream: true });
    }
    str += decoder.decode();
    return str;
  }
  async arrayBuffer() {
    const data = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of toIterator(this.#parts, false)) {
      data.set(chunk, offset);
      offset += chunk.length;
    }
    return data.buffer;
  }
  stream() {
    const it = toIterator(this.#parts, true);
    return new ReadableStream({
      type: "bytes",
      async pull(ctrl) {
        const chunk = await it.next();
        chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
      }
    });
  }
  slice(start = 0, end = this.size, type = "") {
    const { size } = this;
    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = this.#parts;
    const blobParts = [];
    let added = 0;
    for (const part of parts) {
      if (added >= span) {
        break;
      }
      const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size2 <= relativeStart) {
        relativeStart -= size2;
        relativeEnd -= size2;
      } else {
        let chunk;
        if (ArrayBuffer.isView(part)) {
          chunk = part.subarray(relativeStart, Math.min(size2, relativeEnd));
          added += chunk.byteLength;
        } else {
          chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
          added += chunk.size;
        }
        blobParts.push(chunk);
        relativeStart = 0;
      }
    }
    const blob = new Blob([], { type: String(type).toLowerCase() });
    blob.#size = span;
    blob.#parts = blobParts;
    return blob;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](object) {
    return object && typeof object === "object" && typeof object.constructor === "function" && (typeof object.stream === "function" || typeof object.arrayBuffer === "function") && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
  }
};
Object.defineProperties(_Blob.prototype, {
  size: { enumerable: true },
  type: { enumerable: true },
  slice: { enumerable: true }
});
var Blob2 = _Blob;
var Blob$1 = Blob2;
var FetchBaseError = class extends Error {
  constructor(message, type) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.type = type;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
var FetchError = class extends FetchBaseError {
  constructor(message, type, systemError) {
    super(message, type);
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
};
var NAME = Symbol.toStringTag;
var isURLSearchParameters = (object) => {
  return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
};
var isBlob = (object) => {
  return typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
};
function isFormData(object) {
  return typeof object === "object" && typeof object.append === "function" && typeof object.set === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.delete === "function" && typeof object.keys === "function" && typeof object.values === "function" && typeof object.entries === "function" && typeof object.constructor === "function" && object[NAME] === "FormData";
}
var isAbortSignal = (object) => {
  return typeof object === "object" && (object[NAME] === "AbortSignal" || object[NAME] === "EventTarget");
};
var carriage = "\r\n";
var dashes = "-".repeat(2);
var carriageLength = Buffer.byteLength(carriage);
var getFooter = (boundary) => `${dashes}${boundary}${dashes}${carriage.repeat(2)}`;
function getHeader(boundary, name, field) {
  let header = "";
  header += `${dashes}${boundary}${carriage}`;
  header += `Content-Disposition: form-data; name="${name}"`;
  if (isBlob(field)) {
    header += `; filename="${field.name}"${carriage}`;
    header += `Content-Type: ${field.type || "application/octet-stream"}`;
  }
  return `${header}${carriage.repeat(2)}`;
}
var getBoundary = () => (0, import_crypto.randomBytes)(8).toString("hex");
async function* formDataIterator(form, boundary) {
  for (const [name, value] of form) {
    yield getHeader(boundary, name, value);
    if (isBlob(value)) {
      yield* value.stream();
    } else {
      yield value;
    }
    yield carriage;
  }
  yield getFooter(boundary);
}
function getFormDataLength(form, boundary) {
  let length = 0;
  for (const [name, value] of form) {
    length += Buffer.byteLength(getHeader(boundary, name, value));
    length += isBlob(value) ? value.size : Buffer.byteLength(String(value));
    length += carriageLength;
  }
  length += Buffer.byteLength(getFooter(boundary));
  return length;
}
var INTERNALS$2 = Symbol("Body internals");
var Body = class {
  constructor(body, {
    size = 0
  } = {}) {
    let boundary = null;
    if (body === null) {
      body = null;
    } else if (isURLSearchParameters(body)) {
      body = Buffer.from(body.toString());
    } else if (isBlob(body))
      ;
    else if (Buffer.isBuffer(body))
      ;
    else if (import_util.types.isAnyArrayBuffer(body)) {
      body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof import_stream.default)
      ;
    else if (isFormData(body)) {
      boundary = `NodeFetchFormDataBoundary${getBoundary()}`;
      body = import_stream.default.Readable.from(formDataIterator(body, boundary));
    } else {
      body = Buffer.from(String(body));
    }
    this[INTERNALS$2] = {
      body,
      boundary,
      disturbed: false,
      error: null
    };
    this.size = size;
    if (body instanceof import_stream.default) {
      body.on("error", (error_) => {
        const error2 = error_ instanceof FetchBaseError ? error_ : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${error_.message}`, "system", error_);
        this[INTERNALS$2].error = error2;
      });
    }
  }
  get body() {
    return this[INTERNALS$2].body;
  }
  get bodyUsed() {
    return this[INTERNALS$2].disturbed;
  }
  async arrayBuffer() {
    const { buffer, byteOffset, byteLength } = await consumeBody(this);
    return buffer.slice(byteOffset, byteOffset + byteLength);
  }
  async blob() {
    const ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "";
    const buf = await this.buffer();
    return new Blob$1([buf], {
      type: ct
    });
  }
  async json() {
    const buffer = await consumeBody(this);
    return JSON.parse(buffer.toString());
  }
  async text() {
    const buffer = await consumeBody(this);
    return buffer.toString();
  }
  buffer() {
    return consumeBody(this);
  }
};
Object.defineProperties(Body.prototype, {
  body: { enumerable: true },
  bodyUsed: { enumerable: true },
  arrayBuffer: { enumerable: true },
  blob: { enumerable: true },
  json: { enumerable: true },
  text: { enumerable: true }
});
async function consumeBody(data) {
  if (data[INTERNALS$2].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS$2].disturbed = true;
  if (data[INTERNALS$2].error) {
    throw data[INTERNALS$2].error;
  }
  let { body } = data;
  if (body === null) {
    return Buffer.alloc(0);
  }
  if (isBlob(body)) {
    body = import_stream.default.Readable.from(body.stream());
  }
  if (Buffer.isBuffer(body)) {
    return body;
  }
  if (!(body instanceof import_stream.default)) {
    return Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const error2 = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(error2);
        throw error2;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error2) {
    const error_ = error2 instanceof FetchBaseError ? error2 : new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error2.message}`, "system", error2);
    throw error_;
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer.from(accum.join(""));
      }
      return Buffer.concat(accum, accumBytes);
    } catch (error2) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error2.message}`, "system", error2);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
var clone = (instance, highWaterMark) => {
  let p1;
  let p2;
  let { body } = instance;
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof import_stream.default && typeof body.getBoundary !== "function") {
    p1 = new import_stream.PassThrough({ highWaterMark });
    p2 = new import_stream.PassThrough({ highWaterMark });
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS$2].body = p1;
    body = p2;
  }
  return body;
};
var extractContentType = (body, request) => {
  if (body === null) {
    return null;
  }
  if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  }
  if (isURLSearchParameters(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  }
  if (isBlob(body)) {
    return body.type || null;
  }
  if (Buffer.isBuffer(body) || import_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
    return null;
  }
  if (body && typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${body.getBoundary()}`;
  }
  if (isFormData(body)) {
    return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
  }
  if (body instanceof import_stream.default) {
    return null;
  }
  return "text/plain;charset=UTF-8";
};
var getTotalBytes = (request) => {
  const { body } = request;
  if (body === null) {
    return 0;
  }
  if (isBlob(body)) {
    return body.size;
  }
  if (Buffer.isBuffer(body)) {
    return body.length;
  }
  if (body && typeof body.getLengthSync === "function") {
    return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
  }
  if (isFormData(body)) {
    return getFormDataLength(request[INTERNALS$2].boundary);
  }
  return null;
};
var writeToStream = (dest, { body }) => {
  if (body === null) {
    dest.end();
  } else if (isBlob(body)) {
    import_stream.default.Readable.from(body.stream()).pipe(dest);
  } else if (Buffer.isBuffer(body)) {
    dest.write(body);
    dest.end();
  } else {
    body.pipe(dest);
  }
};
var validateHeaderName = typeof import_http.default.validateHeaderName === "function" ? import_http.default.validateHeaderName : (name) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const error2 = new TypeError(`Header name must be a valid HTTP token [${name}]`);
    Object.defineProperty(error2, "code", { value: "ERR_INVALID_HTTP_TOKEN" });
    throw error2;
  }
};
var validateHeaderValue = typeof import_http.default.validateHeaderValue === "function" ? import_http.default.validateHeaderValue : (name, value) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const error2 = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(error2, "code", { value: "ERR_INVALID_CHAR" });
    throw error2;
  }
};
var Headers = class extends URLSearchParams {
  constructor(init2) {
    let result = [];
    if (init2 instanceof Headers) {
      const raw = init2.raw();
      for (const [name, values] of Object.entries(raw)) {
        result.push(...values.map((value) => [name, value]));
      }
    } else if (init2 == null)
      ;
    else if (typeof init2 === "object" && !import_util.types.isBoxedPrimitive(init2)) {
      const method = init2[Symbol.iterator];
      if (method == null) {
        result.push(...Object.entries(init2));
      } else {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        result = [...init2].map((pair) => {
          if (typeof pair !== "object" || import_util.types.isBoxedPrimitive(pair)) {
            throw new TypeError("Each header pair must be an iterable object");
          }
          return [...pair];
        }).map((pair) => {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          return [...pair];
        });
      }
    } else {
      throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    }
    result = result.length > 0 ? result.map(([name, value]) => {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return [String(name).toLowerCase(), String(value)];
    }) : void 0;
    super(result);
    return new Proxy(this, {
      get(target, p, receiver) {
        switch (p) {
          case "append":
          case "set":
            return (name, value) => {
              validateHeaderName(name);
              validateHeaderValue(name, String(value));
              return URLSearchParams.prototype[p].call(target, String(name).toLowerCase(), String(value));
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p].call(target, String(name).toLowerCase());
            };
          case "keys":
            return () => {
              target.sort();
              return new Set(URLSearchParams.prototype.keys.call(target)).keys();
            };
          default:
            return Reflect.get(target, p, receiver);
        }
      }
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(name) {
    const values = this.getAll(name);
    if (values.length === 0) {
      return null;
    }
    let value = values.join(", ");
    if (/^content-encoding$/i.test(name)) {
      value = value.toLowerCase();
    }
    return value;
  }
  forEach(callback, thisArg = void 0) {
    for (const name of this.keys()) {
      Reflect.apply(callback, thisArg, [this.get(name), name, this]);
    }
  }
  *values() {
    for (const name of this.keys()) {
      yield this.get(name);
    }
  }
  *entries() {
    for (const name of this.keys()) {
      yield [name, this.get(name)];
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((result, key) => {
      result[key] = this.getAll(key);
      return result;
    }, {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((result, key) => {
      const values = this.getAll(key);
      if (key === "host") {
        result[key] = values[0];
      } else {
        result[key] = values.length > 1 ? values : values[0];
      }
      return result;
    }, {});
  }
};
Object.defineProperties(Headers.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
  result[property] = { enumerable: true };
  return result;
}, {}));
function fromRawHeaders(headers = []) {
  return new Headers(headers.reduce((result, value, index2, array) => {
    if (index2 % 2 === 0) {
      result.push(array.slice(index2, index2 + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}
var redirectStatus = new Set([301, 302, 303, 307, 308]);
var isRedirect = (code) => {
  return redirectStatus.has(code);
};
var INTERNALS$1 = Symbol("Response internals");
var Response = class extends Body {
  constructor(body = null, options2 = {}) {
    super(body, options2);
    const status = options2.status != null ? options2.status : 200;
    const headers = new Headers(options2.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS$1] = {
      type: "default",
      url: options2.url,
      status,
      statusText: options2.statusText || "",
      headers,
      counter: options2.counter,
      highWaterMark: options2.highWaterMark
    };
  }
  get type() {
    return this[INTERNALS$1].type;
  }
  get url() {
    return this[INTERNALS$1].url || "";
  }
  get status() {
    return this[INTERNALS$1].status;
  }
  get ok() {
    return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  }
  get redirected() {
    return this[INTERNALS$1].counter > 0;
  }
  get statusText() {
    return this[INTERNALS$1].statusText;
  }
  get headers() {
    return this[INTERNALS$1].headers;
  }
  get highWaterMark() {
    return this[INTERNALS$1].highWaterMark;
  }
  clone() {
    return new Response(clone(this, this.highWaterMark), {
      type: this.type,
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size
    });
  }
  static redirect(url, status = 302) {
    if (!isRedirect(status)) {
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    }
    return new Response(null, {
      headers: {
        location: new URL(url).toString()
      },
      status
    });
  }
  static error() {
    const response = new Response(null, { status: 0, statusText: "" });
    response[INTERNALS$1].type = "error";
    return response;
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response.prototype, {
  type: { enumerable: true },
  url: { enumerable: true },
  status: { enumerable: true },
  ok: { enumerable: true },
  redirected: { enumerable: true },
  statusText: { enumerable: true },
  headers: { enumerable: true },
  clone: { enumerable: true }
});
var getSearch = (parsedURL) => {
  if (parsedURL.search) {
    return parsedURL.search;
  }
  const lastOffset = parsedURL.href.length - 1;
  const hash2 = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
  return parsedURL.href[lastOffset - hash2.length] === "?" ? "?" : "";
};
var INTERNALS = Symbol("Request internals");
var isRequest = (object) => {
  return typeof object === "object" && typeof object[INTERNALS] === "object";
};
var Request = class extends Body {
  constructor(input, init2 = {}) {
    let parsedURL;
    if (isRequest(input)) {
      parsedURL = new URL(input.url);
    } else {
      parsedURL = new URL(input);
      input = {};
    }
    let method = init2.method || input.method || "GET";
    method = method.toUpperCase();
    if ((init2.body != null || isRequest(input)) && input.body !== null && (method === "GET" || method === "HEAD")) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    const inputBody = init2.body ? init2.body : isRequest(input) && input.body !== null ? clone(input) : null;
    super(inputBody, {
      size: init2.size || input.size || 0
    });
    const headers = new Headers(init2.headers || input.headers || {});
    if (inputBody !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody, this);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init2) {
      signal = init2.signal;
    }
    if (signal != null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
    }
    this[INTERNALS] = {
      method,
      redirect: init2.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal
    };
    this.follow = init2.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init2.follow;
    this.compress = init2.compress === void 0 ? input.compress === void 0 ? true : input.compress : init2.compress;
    this.counter = init2.counter || input.counter || 0;
    this.agent = init2.agent || input.agent;
    this.highWaterMark = init2.highWaterMark || input.highWaterMark || 16384;
    this.insecureHTTPParser = init2.insecureHTTPParser || input.insecureHTTPParser || false;
  }
  get method() {
    return this[INTERNALS].method;
  }
  get url() {
    return (0, import_url.format)(this[INTERNALS].parsedURL);
  }
  get headers() {
    return this[INTERNALS].headers;
  }
  get redirect() {
    return this[INTERNALS].redirect;
  }
  get signal() {
    return this[INTERNALS].signal;
  }
  clone() {
    return new Request(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
Object.defineProperties(Request.prototype, {
  method: { enumerable: true },
  url: { enumerable: true },
  headers: { enumerable: true },
  redirect: { enumerable: true },
  clone: { enumerable: true },
  signal: { enumerable: true }
});
var getNodeRequestOptions = (request) => {
  const { parsedURL } = request[INTERNALS];
  const headers = new Headers(request[INTERNALS].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  let contentLengthValue = null;
  if (request.body === null && /^(post|put)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body !== null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch");
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip,deflate,br");
  }
  let { agent } = request;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  if (!headers.has("Connection") && !agent) {
    headers.set("Connection", "close");
  }
  const search = getSearch(parsedURL);
  const requestOptions = {
    path: parsedURL.pathname + search,
    pathname: parsedURL.pathname,
    hostname: parsedURL.hostname,
    protocol: parsedURL.protocol,
    port: parsedURL.port,
    hash: parsedURL.hash,
    search: parsedURL.search,
    query: parsedURL.query,
    href: parsedURL.href,
    method: request.method,
    headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: request.insecureHTTPParser,
    agent
  };
  return requestOptions;
};
var AbortError = class extends FetchBaseError {
  constructor(message, type = "aborted") {
    super(message, type);
  }
};
var supportedSchemas = new Set(["data:", "http:", "https:"]);
async function fetch(url, options_) {
  return new Promise((resolve2, reject) => {
    const request = new Request(url, options_);
    const options2 = getNodeRequestOptions(request);
    if (!supportedSchemas.has(options2.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${options2.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (options2.protocol === "data:") {
      const data = dataUriToBuffer$1(request.url);
      const response2 = new Response(data, { headers: { "Content-Type": data.typeFull } });
      resolve2(response2);
      return;
    }
    const send = (options2.protocol === "https:" ? import_https.default : import_http.default).request;
    const { signal } = request;
    let response = null;
    const abort = () => {
      const error2 = new AbortError("The operation was aborted.");
      reject(error2);
      if (request.body && request.body instanceof import_stream.default.Readable) {
        request.body.destroy(error2);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error2);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(options2);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (error2) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${error2.message}`, "system", error2));
      finalize();
    });
    fixResponseChunkedTransferBadEnding(request_, (error2) => {
      response.body.destroy(error2);
    });
    if (process.version < "v14") {
      request_.on("socket", (s2) => {
        let endedWithEventsCount;
        s2.prependListener("end", () => {
          endedWithEventsCount = s2._eventsCount;
        });
        s2.prependListener("close", (hadError) => {
          if (response && endedWithEventsCount < s2._eventsCount && !hadError) {
            const error2 = new Error("Premature close");
            error2.code = "ERR_STREAM_PREMATURE_CLOSE";
            response.body.emit("error", error2);
          }
        });
      });
    }
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        const locationURL = location === null ? null : new URL(location, request.url);
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              headers.set("Location", locationURL);
            }
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: request.body,
              signal: request.signal,
              size: request.size
            };
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_stream.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            resolve2(fetch(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
          default:
            return reject(new TypeError(`Redirect option '${request.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      if (signal) {
        response_.once("end", () => {
          signal.removeEventListener("abort", abortAndFinalize);
        });
      }
      let body = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), reject);
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response(body, responseOptions);
        resolve2(response);
        return;
      }
      const zlibOptions = {
        flush: import_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createGunzip(zlibOptions), reject);
        response = new Response(body, responseOptions);
        resolve2(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), reject);
        raw.once("data", (chunk) => {
          body = (chunk[0] & 15) === 8 ? (0, import_stream.pipeline)(body, import_zlib.default.createInflate(), reject) : (0, import_stream.pipeline)(body, import_zlib.default.createInflateRaw(), reject);
          response = new Response(body, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createBrotliDecompress(), reject);
        response = new Response(body, responseOptions);
        resolve2(response);
        return;
      }
      response = new Response(body, responseOptions);
      resolve2(response);
    });
    writeToStream(request_, request);
  });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
  const LAST_CHUNK = Buffer.from("0\r\n\r\n");
  let isChunkedTransfer = false;
  let properLastChunkReceived = false;
  let previousChunk;
  request.on("response", (response) => {
    const { headers } = response;
    isChunkedTransfer = headers["transfer-encoding"] === "chunked" && !headers["content-length"];
  });
  request.on("socket", (socket) => {
    const onSocketClose = () => {
      if (isChunkedTransfer && !properLastChunkReceived) {
        const error2 = new Error("Premature close");
        error2.code = "ERR_STREAM_PREMATURE_CLOSE";
        errorCallback(error2);
      }
    };
    socket.prependListener("close", onSocketClose);
    request.on("abort", () => {
      socket.removeListener("close", onSocketClose);
    });
    socket.on("data", (buf) => {
      properLastChunkReceived = Buffer.compare(buf.slice(-5), LAST_CHUNK) === 0;
      if (!properLastChunkReceived && previousChunk) {
        properLastChunkReceived = Buffer.compare(previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 && Buffer.compare(buf.slice(-2), LAST_CHUNK.slice(3)) === 0;
      }
      previousChunk = buf;
    });
  });
}

// .svelte-kit/output/server/app.js
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _map;
function get_single_valued_header(headers, key) {
  const value = headers[key];
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return void 0;
    }
    if (value.length > 1) {
      throw new Error(`Multiple headers provided for ${key}. Multiple may be provided only for set-cookie`);
    }
    return value[0];
  }
  return value;
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function lowercase_keys(obj) {
  const clone2 = {};
  for (const key in obj) {
    clone2[key.toLowerCase()] = obj[key];
  }
  return clone2;
}
function error(body) {
  return {
    status: 500,
    body,
    headers: {}
  };
}
function is_string(s2) {
  return typeof s2 === "string" || s2 instanceof String;
}
function is_content_type_textual(content_type) {
  if (!content_type)
    return true;
  const [type] = content_type.split(";");
  return type === "text/plain" || type === "application/json" || type === "application/x-www-form-urlencoded" || type === "multipart/form-data";
}
async function render_endpoint(request, route, match) {
  const mod = await route.load();
  const handler2 = mod[request.method.toLowerCase().replace("delete", "del")];
  if (!handler2) {
    return;
  }
  const params = route.params(match);
  const response = await handler2({ ...request, params });
  const preface = `Invalid response from route ${request.path}`;
  if (!response) {
    return;
  }
  if (typeof response !== "object") {
    return error(`${preface}: expected an object, got ${typeof response}`);
  }
  let { status = 200, body, headers = {} } = response;
  headers = lowercase_keys(headers);
  const type = get_single_valued_header(headers, "content-type");
  const is_type_textual = is_content_type_textual(type);
  if (!is_type_textual && !(body instanceof Uint8Array || is_string(body))) {
    return error(`${preface}: body must be an instance of string or Uint8Array if content-type is not a supported textual content-type`);
  }
  let normalized_body;
  if ((typeof body === "object" || typeof body === "undefined") && !(body instanceof Uint8Array) && (!type || type.startsWith("application/json"))) {
    headers = { ...headers, "content-type": "application/json; charset=utf-8" };
    normalized_body = JSON.stringify(typeof body === "undefined" ? {} : body);
  } else {
    normalized_body = body;
  }
  return { status, body: normalized_body, headers };
}
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$1) {
      result += escaped$1[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop$1() {
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
Promise.resolve();
var subscriber_queue = [];
function writable(value, start = noop$1) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop$1) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop$1;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
var escape_json_string_in_html_dict = {
  '"': '\\"',
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escape_json_string_in_html(str) {
  return escape$1(str, escape_json_string_in_html_dict, (code) => `\\u${code.toString(16).toUpperCase()}`);
}
var escape_html_attr_dict = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function escape_html_attr(str) {
  return '"' + escape$1(str, escape_html_attr_dict, (code) => `&#${code};`) + '"';
}
function escape$1(str, dict, unicode_encoder) {
  let result = "";
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char in dict) {
      result += dict[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += unicode_encoder(code);
      }
    } else {
      result += char;
    }
  }
  return result;
}
var s$1 = JSON.stringify;
async function render_response({
  branch,
  options: options2,
  $session,
  page_config,
  status,
  error: error2,
  page: page2
}) {
  const css2 = new Set(options2.entry.css);
  const js = new Set(options2.entry.js);
  const styles = new Set();
  const serialized_data = [];
  let rendered;
  let is_private = false;
  let maxage;
  if (error2) {
    error2.stack = options2.get_stack(error2);
  }
  if (page_config.ssr) {
    branch.forEach(({ node, loaded, fetched, uses_credentials }) => {
      if (node.css)
        node.css.forEach((url) => css2.add(url));
      if (node.js)
        node.js.forEach((url) => js.add(url));
      if (node.styles)
        node.styles.forEach((content) => styles.add(content));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (uses_credentials)
        is_private = true;
      maxage = loaded.maxage;
    });
    const session = writable($session);
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session
      },
      page: page2,
      components: branch.map(({ node }) => node.module.default)
    };
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    let session_tracking_active = false;
    const unsubscribe = session.subscribe(() => {
      if (session_tracking_active)
        is_private = true;
    });
    session_tracking_active = true;
    try {
      rendered = options2.root.render(props);
    } finally {
      unsubscribe();
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  const include_js = page_config.router || page_config.hydrate;
  if (!include_js)
    js.clear();
  const links = options2.amp ? styles.size > 0 || rendered.css.code.length > 0 ? `<style amp-custom>${Array.from(styles).concat(rendered.css.code).join("\n")}</style>` : "" : [
    ...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
    ...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
  ].join("\n		");
  let init2 = "";
  if (options2.amp) {
    init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"><\/script>`;
  } else if (include_js) {
    init2 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : "document.body"},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error3) => {
      throw new Error(`Failed to serialize session data: ${error3.message}`);
    })},
				host: ${page2 && page2.host ? s$1(page2.host) : "location.host"},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				trailing_slash: ${s$1(options2.trailing_slash)},
				hydrate: ${page_config.ssr && page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error2)},
					nodes: [
						${(branch || []).map(({ node }) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page2 && page2.host ? s$1(page2.host) : "location.host"}, // TODO this is redundant
						path: ${page2 && page2.path ? try_serialize(page2.path, (error3) => {
      throw new Error(`Failed to serialize page.path: ${error3.message}`);
    }) : null},
						query: new URLSearchParams(${page2 && page2.query ? s$1(page2.query.toString()) : ""}),
						params: ${page2 && page2.params ? try_serialize(page2.params, (error3) => {
      throw new Error(`Failed to serialize page.params: ${error3.message}`);
    }) : null}
					}
				}` : "null"}
			});
		<\/script>`;
  }
  if (options2.service_worker) {
    init2 += `<script>
			if ('serviceWorker' in navigator) {
				navigator.serviceWorker.register('${options2.service_worker}');
			}
		<\/script>`;
  }
  const head = [
    rendered.head,
    styles.size && !options2.amp ? `<style data-svelte>${Array.from(styles).join("\n")}</style>` : "",
    links,
    init2
  ].join("\n\n		");
  const body = options2.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({ url, body: body2, json }) => {
    let attributes = `type="application/json" data-type="svelte-data" data-url=${escape_html_attr(url)}`;
    if (body2)
      attributes += ` data-body="${hash(body2)}"`;
    return `<script ${attributes}>${json}<\/script>`;
  }).join("\n\n	")}
		`;
  const headers = {
    "content-type": "text/html"
  };
  if (maxage) {
    headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
  }
  if (!options2.floc) {
    headers["permissions-policy"] = "interest-cohort=()";
  }
  return {
    status,
    headers,
    body: options2.template({ head, body })
  };
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(coalesce_to_error(err));
    return null;
  }
}
function serialize_error(error2) {
  if (!error2)
    return null;
  let serialized = try_serialize(error2);
  if (!serialized) {
    const { name, message, stack } = error2;
    serialized = try_serialize({ ...error2, name, message, stack });
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
function normalize(loaded) {
  const has_error_status = loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
  if (loaded.error || has_error_status) {
    const status = loaded.status;
    if (!loaded.error && has_error_status) {
      return {
        status: status || 500,
        error: new Error()
      };
    }
    const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    if (!(error2 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return { status: 500, error: error2 };
    }
    return { status, error: error2 };
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  if (loaded.context) {
    throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');
  }
  return loaded;
}
var s = JSON.stringify;
async function load_node({
  request,
  options: options2,
  state,
  route,
  page: page2,
  node,
  $session,
  stuff,
  prerender_enabled,
  is_leaf,
  is_error,
  status,
  error: error2
}) {
  const { module: module2 } = node;
  let uses_credentials = false;
  const fetched = [];
  let set_cookie_headers = [];
  let loaded;
  const page_proxy = new Proxy(page2, {
    get: (target, prop, receiver) => {
      if (prop === "query" && prerender_enabled) {
        throw new Error("Cannot access query on a page with prerendering enabled");
      }
      return Reflect.get(target, prop, receiver);
    }
  });
  if (module2.load) {
    const load_input = {
      page: page_proxy,
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let url;
        if (typeof resource === "string") {
          url = resource;
        } else {
          url = resource.url;
          opts = {
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity,
            ...opts
          };
        }
        const resolved = resolve(request.path, url.split("?")[0]);
        let response;
        const filename = resolved.replace(options2.paths.assets, "").slice(1);
        const filename_html = `${filename}/index.html`;
        const asset = options2.manifest.assets.find((d2) => d2.file === filename || d2.file === filename_html);
        if (asset) {
          response = options2.read ? new Response(options2.read(asset.file), {
            headers: asset.type ? { "content-type": asset.type } : {}
          }) : await fetch(`http://${page2.host}/${asset.file}`, opts);
        } else if (resolved.startsWith("/") && !resolved.startsWith("//")) {
          const relative = resolved;
          const headers = {
            ...opts.headers
          };
          if (opts.credentials !== "omit") {
            uses_credentials = true;
            headers.cookie = request.headers.cookie;
            if (!headers.authorization) {
              headers.authorization = request.headers.authorization;
            }
          }
          if (opts.body && typeof opts.body !== "string") {
            throw new Error("Request body must be a string");
          }
          const search = url.includes("?") ? url.slice(url.indexOf("?") + 1) : "";
          const rendered = await respond({
            host: request.host,
            method: opts.method || "GET",
            headers,
            path: relative,
            rawBody: opts.body == null ? null : new TextEncoder().encode(opts.body),
            query: new URLSearchParams(search)
          }, options2, {
            fetched: url,
            initiator: route
          });
          if (rendered) {
            if (state.prerender) {
              state.prerender.dependencies.set(relative, rendered);
            }
            response = new Response(rendered.body, {
              status: rendered.status,
              headers: rendered.headers
            });
          }
        } else {
          if (resolved.startsWith("//")) {
            throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
          }
          if (typeof request.host !== "undefined") {
            const { hostname: fetch_hostname } = new URL(url);
            const [server_hostname] = request.host.split(":");
            if (`.${fetch_hostname}`.endsWith(`.${server_hostname}`) && opts.credentials !== "omit") {
              uses_credentials = true;
              opts.headers = {
                ...opts.headers,
                cookie: request.headers.cookie
              };
            }
          }
          const external_request = new Request(url, opts);
          response = await options2.hooks.externalFetch.call(null, external_request);
        }
        if (response) {
          const proxy = new Proxy(response, {
            get(response2, key, _receiver) {
              async function text() {
                const body = await response2.text();
                const headers = {};
                for (const [key2, value] of response2.headers) {
                  if (key2 === "set-cookie") {
                    set_cookie_headers = set_cookie_headers.concat(value);
                  } else if (key2 !== "etag") {
                    headers[key2] = value;
                  }
                }
                if (!opts.body || typeof opts.body === "string") {
                  fetched.push({
                    url,
                    body: opts.body,
                    json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":"${escape_json_string_in_html(body)}"}`
                  });
                }
                return body;
              }
              if (key === "text") {
                return text;
              }
              if (key === "json") {
                return async () => {
                  return JSON.parse(await text());
                };
              }
              return Reflect.get(response2, key, response2);
            }
          });
          return proxy;
        }
        return response || new Response("Not found", {
          status: 404
        });
      },
      stuff: { ...stuff }
    };
    if (is_error) {
      load_input.status = status;
      load_input.error = error2;
    }
    loaded = await module2.load.call(null, load_input);
  } else {
    loaded = {};
  }
  if (!loaded && is_leaf && !is_error)
    return;
  if (!loaded) {
    throw new Error(`${node.entry} - load must return a value except for page fall through`);
  }
  return {
    node,
    loaded: normalize(loaded),
    stuff: loaded.stuff || stuff,
    fetched,
    set_cookie_headers,
    uses_credentials
  };
}
var absolute = /^([a-z]+:)?\/?\//;
function resolve(base2, path) {
  const base_match = absolute.exec(base2);
  const path_match = absolute.exec(path);
  if (!base_match) {
    throw new Error(`bad base path: "${base2}"`);
  }
  const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
  const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  const prefix = path_match && path_match[0] || base_match && base_match[0] || "";
  return `${prefix}${baseparts.join("/")}`;
}
async function respond_with_error({ request, options: options2, state, $session, status, error: error2 }) {
  const default_layout = await options2.load_component(options2.manifest.layout);
  const default_error = await options2.load_component(options2.manifest.error);
  const page2 = {
    host: request.host,
    path: request.path,
    query: request.query,
    params: {}
  };
  const loaded = await load_node({
    request,
    options: options2,
    state,
    route: null,
    page: page2,
    node: default_layout,
    $session,
    stuff: {},
    prerender_enabled: is_prerender_enabled(options2, default_error, state),
    is_leaf: false,
    is_error: false
  });
  const branch = [
    loaded,
    await load_node({
      request,
      options: options2,
      state,
      route: null,
      page: page2,
      node: default_error,
      $session,
      stuff: loaded ? loaded.stuff : {},
      prerender_enabled: is_prerender_enabled(options2, default_error, state),
      is_leaf: false,
      is_error: true,
      status,
      error: error2
    })
  ];
  try {
    return await render_response({
      options: options2,
      $session,
      page_config: {
        hydrate: options2.hydrate,
        router: options2.router,
        ssr: options2.ssr
      },
      status,
      error: error2,
      branch,
      page: page2
    });
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options2.handle_error(error3, request);
    return {
      status: 500,
      headers: {},
      body: error3.stack
    };
  }
}
function is_prerender_enabled(options2, node, state) {
  return options2.prerender && (!!node.module.prerender || !!state.prerender && state.prerender.all);
}
async function respond$1(opts) {
  const { request, options: options2, state, $session, route } = opts;
  let nodes;
  try {
    nodes = await Promise.all(route.a.map((id) => id ? options2.load_component(id) : void 0));
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options2.handle_error(error3, request);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error3
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  let page_config = get_page_config(leaf, options2);
  if (!leaf.prerender && state.prerender && !state.prerender.all) {
    return {
      status: 204,
      headers: {},
      body: ""
    };
  }
  let branch = [];
  let status = 200;
  let error2;
  let set_cookie_headers = [];
  ssr:
    if (page_config.ssr) {
      let stuff = {};
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        let loaded;
        if (node) {
          try {
            loaded = await load_node({
              ...opts,
              node,
              stuff,
              prerender_enabled: is_prerender_enabled(options2, node, state),
              is_leaf: i === nodes.length - 1,
              is_error: false
            });
            if (!loaded)
              return;
            set_cookie_headers = set_cookie_headers.concat(loaded.set_cookie_headers);
            if (loaded.loaded.redirect) {
              return with_cookies({
                status: loaded.loaded.status,
                headers: {
                  location: encodeURI(loaded.loaded.redirect)
                }
              }, set_cookie_headers);
            }
            if (loaded.loaded.error) {
              ({ status, error: error2 } = loaded.loaded);
            }
          } catch (err) {
            const e = coalesce_to_error(err);
            options2.handle_error(e, request);
            status = 500;
            error2 = e;
          }
          if (loaded && !error2) {
            branch.push(loaded);
          }
          if (error2) {
            while (i--) {
              if (route.b[i]) {
                const error_node = await options2.load_component(route.b[i]);
                let node_loaded;
                let j = i;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  const error_loaded = await load_node({
                    ...opts,
                    node: error_node,
                    stuff: node_loaded.stuff,
                    prerender_enabled: is_prerender_enabled(options2, error_node, state),
                    is_leaf: false,
                    is_error: true,
                    status,
                    error: error2
                  });
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  page_config = get_page_config(error_node.module, options2);
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  break ssr;
                } catch (err) {
                  const e = coalesce_to_error(err);
                  options2.handle_error(e, request);
                  continue;
                }
              }
            }
            return with_cookies(await respond_with_error({
              request,
              options: options2,
              state,
              $session,
              status,
              error: error2
            }), set_cookie_headers);
          }
        }
        if (loaded && loaded.loaded.stuff) {
          stuff = {
            ...stuff,
            ...loaded.loaded.stuff
          };
        }
      }
    }
  try {
    return with_cookies(await render_response({
      ...opts,
      page_config,
      status,
      error: error2,
      branch: branch.filter(Boolean)
    }), set_cookie_headers);
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options2.handle_error(error3, request);
    return with_cookies(await respond_with_error({
      ...opts,
      status: 500,
      error: error3
    }), set_cookie_headers);
  }
}
function get_page_config(leaf, options2) {
  return {
    ssr: "ssr" in leaf ? !!leaf.ssr : options2.ssr,
    router: "router" in leaf ? !!leaf.router : options2.router,
    hydrate: "hydrate" in leaf ? !!leaf.hydrate : options2.hydrate
  };
}
function with_cookies(response, set_cookie_headers) {
  if (set_cookie_headers.length) {
    response.headers["set-cookie"] = set_cookie_headers;
  }
  return response;
}
async function render_page(request, route, match, options2, state) {
  if (state.initiator === route) {
    return {
      status: 404,
      headers: {},
      body: `Not found: ${request.path}`
    };
  }
  const params = route.params(match);
  const page2 = {
    host: request.host,
    path: request.path,
    query: request.query,
    params
  };
  const $session = await options2.hooks.getSession(request);
  const response = await respond$1({
    request,
    options: options2,
    state,
    $session,
    route,
    page: page2
  });
  if (response) {
    return response;
  }
  if (state.fetched) {
    return {
      status: 500,
      headers: {},
      body: `Bad request in load function: failed to fetch ${state.fetched}`
    };
  }
}
function read_only_form_data() {
  const map = new Map();
  return {
    append(key, value) {
      if (map.has(key)) {
        (map.get(key) || []).push(value);
      } else {
        map.set(key, [value]);
      }
    },
    data: new ReadOnlyFormData(map)
  };
}
var ReadOnlyFormData = class {
  constructor(map) {
    __privateAdd(this, _map, void 0);
    __privateSet(this, _map, map);
  }
  get(key) {
    const value = __privateGet(this, _map).get(key);
    return value && value[0];
  }
  getAll(key) {
    return __privateGet(this, _map).get(key);
  }
  has(key) {
    return __privateGet(this, _map).has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of __privateGet(this, _map)) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *entries() {
    for (const [key, value] of __privateGet(this, _map)) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *keys() {
    for (const [key] of __privateGet(this, _map))
      yield key;
  }
  *values() {
    for (const [, value] of __privateGet(this, _map)) {
      for (let i = 0; i < value.length; i += 1) {
        yield value[i];
      }
    }
  }
};
_map = new WeakMap();
function parse_body(raw, headers) {
  if (!raw)
    return raw;
  const content_type = headers["content-type"];
  const [type, ...directives] = content_type ? content_type.split(/;\s*/) : [];
  const text = () => new TextDecoder(headers["content-encoding"] || "utf-8").decode(raw);
  switch (type) {
    case "text/plain":
      return text();
    case "application/json":
      return JSON.parse(text());
    case "application/x-www-form-urlencoded":
      return get_urlencoded(text());
    case "multipart/form-data": {
      const boundary = directives.find((directive) => directive.startsWith("boundary="));
      if (!boundary)
        throw new Error("Missing boundary");
      return get_multipart(text(), boundary.slice("boundary=".length));
    }
    default:
      return raw;
  }
}
function get_urlencoded(text) {
  const { data, append } = read_only_form_data();
  text.replace(/\+/g, " ").split("&").forEach((str) => {
    const [key, value] = str.split("=");
    append(decodeURIComponent(key), decodeURIComponent(value));
  });
  return data;
}
function get_multipart(text, boundary) {
  const parts = text.split(`--${boundary}`);
  if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
    throw new Error("Malformed form data");
  }
  const { data, append } = read_only_form_data();
  parts.slice(1, -1).forEach((part) => {
    const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
    if (!match) {
      throw new Error("Malformed form data");
    }
    const raw_headers = match[1];
    const body = match[2].trim();
    let key;
    const headers = {};
    raw_headers.split("\r\n").forEach((str) => {
      const [raw_header, ...raw_directives] = str.split("; ");
      let [name, value] = raw_header.split(": ");
      name = name.toLowerCase();
      headers[name] = value;
      const directives = {};
      raw_directives.forEach((raw_directive) => {
        const [name2, value2] = raw_directive.split("=");
        directives[name2] = JSON.parse(value2);
      });
      if (name === "content-disposition") {
        if (value !== "form-data")
          throw new Error("Malformed form data");
        if (directives.filename) {
          throw new Error("File upload is not yet implemented");
        }
        if (directives.name) {
          key = directives.name;
        }
      }
    });
    if (!key)
      throw new Error("Malformed form data");
    append(key, body);
  });
  return data;
}
async function respond(incoming, options2, state = {}) {
  if (incoming.path !== "/" && options2.trailing_slash !== "ignore") {
    const has_trailing_slash = incoming.path.endsWith("/");
    if (has_trailing_slash && options2.trailing_slash === "never" || !has_trailing_slash && options2.trailing_slash === "always" && !(incoming.path.split("/").pop() || "").includes(".")) {
      const path = has_trailing_slash ? incoming.path.slice(0, -1) : incoming.path + "/";
      const q = incoming.query.toString();
      return {
        status: 301,
        headers: {
          location: options2.paths.base + path + (q ? `?${q}` : "")
        }
      };
    }
  }
  const headers = lowercase_keys(incoming.headers);
  const request = {
    ...incoming,
    headers,
    body: parse_body(incoming.rawBody, headers),
    params: {},
    locals: {}
  };
  try {
    return await options2.hooks.handle({
      request,
      resolve: async (request2) => {
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            options: options2,
            $session: await options2.hooks.getSession(request2),
            page_config: { ssr: false, router: true, hydrate: true },
            status: 200,
            branch: []
          });
        }
        const decoded = decodeURI(request2.path);
        for (const route of options2.manifest.routes) {
          const match = route.pattern.exec(decoded);
          if (!match)
            continue;
          const response = route.type === "endpoint" ? await render_endpoint(request2, route, match) : await render_page(request2, route, match, options2, state);
          if (response) {
            if (response.status === 200) {
              const cache_control = get_single_valued_header(response.headers, "cache-control");
              if (!cache_control || !/(no-store|immutable)/.test(cache_control)) {
                const etag = `"${hash(response.body || "")}"`;
                if (request2.headers["if-none-match"] === etag) {
                  return {
                    status: 304,
                    headers: {},
                    body: ""
                  };
                }
                response.headers["etag"] = etag;
              }
            }
            return response;
          }
        }
        const $session = await options2.hooks.getSession(request2);
        return await respond_with_error({
          request: request2,
          options: options2,
          state,
          $session,
          status: 404,
          error: new Error(`Not found: ${request2.path}`)
        });
      }
    });
  } catch (err) {
    const e = coalesce_to_error(err);
    options2.handle_error(e, request);
    return {
      status: 500,
      headers: {},
      body: options2.dev ? e.stack : e.message
    };
  }
}
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
Promise.resolve();
var escaped = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped[match]);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
var missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
var on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
function afterUpdate() {
}
var css$g = {
  code: "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n<\/script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t#svelte-announcer {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t\\tclip: rect(0 0 0 0);\\n\\t\\tclip-path: inset(50%);\\n\\t\\toverflow: hidden;\\n\\t\\twhite-space: nowrap;\\n\\t\\twidth: 1px;\\n\\t\\theight: 1px;\\n\\t}\\n</style>"],"names":[],"mappings":"AAsDC,iBAAiB,eAAC,CAAC,AAClB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC"}`
};
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css$g);
  {
    stores.page.set(page2);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${``}`;
});
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
function set_prerendering(value) {
}
async function getSession() {
  const posts = await Promise.all(Object.entries({}).map(async ([path, post]) => {
    const { metadata } = await post();
    const filename = path.split("/").pop();
    const extension = filename.split(".").pop();
    const slug = filename.slice(0, (extension.length + 1) * -1);
    return {
      path,
      slug,
      ...metadata
    };
  }));
  const sortedPosts = posts.map((post) => {
    const date = new Date(...post.datetime.split(/[-T:]/).map((d2, i) => i === 1 ? parseInt(d2, 10) - 1 : parseInt(d2, 10)));
    return { ...post, date };
  }).sort((a, b) => b.date > a.date ? 1 : -1);
  return {
    posts: sortedPosts
  };
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  getSession
});
var template = ({ head, body }) => `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />

		<style>
			@font-face {
				font-family: Jost;
				src: url('/fonts/jost-regular-webfont.woff2') format('woff2'),
					url('/fonts/jost-regular-webfont.woff') format('woff');
				font-weight: 400;
				font-style: normal;
			}

			@font-face {
				font-family: JostItalic;
				src: url('/fonts/jost-italic-webfont.woff2') format('woff2'),
					url('/fonts/jost-italic-webfont.woff') format('woff');
				font-weight: 400;
				font-style: italic;
			}

			@font-face {
				font-family: JostBold;
				src: url('/fonts/jost-bold-webfont.woff2') format('woff2'),
					url('/fonts/jost-bold-webfont.woff') format('woff');
				font-weight: 700;
				font-style: normal;
			}

			@font-face {
				font-family: JostBoldItalic;
				src: url('/fonts/jost-bolditalic-webfont.woff2') format('woff2'),
					url('/fonts/jost-bolditalic-webfont.woff') format('woff');
				font-weight: 700;
				font-style: italic;
			}

			@font-face {
				font-family: JosefinsansBold;
				src: url('/fonts/josefinsans-bold-webfont.woff2') format('woff2'),
					url('/fonts/josefinsans-bold-webfont.woff') format('woff');
				font-weight: 700;
				font-style: normal;
			}

			body {
				font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
					helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
			}

			code {
				font-family: Inconsolata, Menlo, Consolas, Monaco, Liberation Mono, Lucida Console,
					monospace;
			}

			.webfonts body {
				font-family: Jost, sans-serif;
			}

			.webfonts h1,
			.webfonts h2,
			.webfonts h3,
			.webfonts h4 {
				font-family: JosefinsansBold, sans-serif;
				font-weight: 700;
				font-style: normal;
			}

			.webfonts em {
				font-family: JostItalic, sans-serif;
				font-weight: 400;
				font-style: italic;
			}

			.webfonts strong {
				font-family: JostBold, sans-serif;
				font-weight: 700;
				font-style: normal;
			}

			.webfonts strong em,
			.webfonts em strong {
				font-family: JostBoldItalic, sans-serif;
				font-weight: 700;
				font-style: italic;
			}
		</style>

		<script>
			function setPreference(preference) {
				document.documentElement.setAttribute('data-preference', preference);
				localStorage.setItem('color-scheme', preference);
			}

			if (CSS && CSS.supports('--primary-6: hotpink')) {
				const prefersColorScheme = matchMedia('(prefers-color-scheme: dark)');
				const colorScheme = localStorage.getItem('color-scheme');

				if (colorScheme) {
					setPreference(colorScheme);
				} else {
					setPreference(prefersColorScheme.matches ? 'dark' : 'light');
				}

				prefersColorScheme.addEventListener('change', ({ matches }) =>
					setPreference(matches ? 'dark' : 'light')
				);
			}

			if (sessionStorage.fontsLoaded) {
				document.documentElement.classList.add('webfonts');
			} else {
				if ('fonts' in document) {
					Promise.all([
						document.fonts.load('1em Jost'),
						document.fonts.load('700 1em JostBold'),
						document.fonts.load('italic 1em JostItalic'),
						document.fonts.load('italic 700 1em JostBoldItalic'),
						document.fonts.load('700 1em JosefinsansBold')
					]).then(() => {
						sessionStorage.fontsLoaded = true;
						document.documentElement.classList.add('webfonts');
					});
				}
			}
		<\/script>

		<link rel="icon" href="/icons/favicon.ico" />
		<link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
		<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
		<link rel="manifest" href="/manifest.json" />

		` + head + '\n	</head>\n	<body>\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
var options = null;
var default_settings = { paths: { "base": "", "assets": "" } };
function init(settings = default_settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  const hooks = get_hooks(user_hooks);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: assets + "/_app/start-42c57673.js",
      css: [assets + "/_app/assets/start-61d1577b.css"],
      js: [assets + "/_app/start-42c57673.js", assets + "/_app/chunks/vendor-42d8823b.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => assets + "/_app/" + entry_lookup[id],
    get_stack: (error2) => String(error2),
    handle_error: (error2, request) => {
      hooks.handleError({ error: error2, request });
      error2.stack = options.get_stack(error2);
    },
    hooks,
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    prerender: true,
    read: settings.read,
    root: Root,
    service_worker: null,
    router: true,
    ssr: true,
    target: "#svelte",
    template,
    trailing_slash: "never"
  };
}
var d = (s2) => s2.replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
var empty = () => ({});
var manifest = {
  assets: [{ "file": "fonts/josefinsans-bold-webfont.woff", "size": 21952, "type": "font/woff" }, { "file": "fonts/josefinsans-bold-webfont.woff2", "size": 17244, "type": "font/woff2" }, { "file": "fonts/jost-bold-webfont.woff", "size": 22924, "type": "font/woff" }, { "file": "fonts/jost-bold-webfont.woff2", "size": 17904, "type": "font/woff2" }, { "file": "fonts/jost-bolditalic-webfont.woff", "size": 24648, "type": "font/woff" }, { "file": "fonts/jost-bolditalic-webfont.woff2", "size": 19168, "type": "font/woff2" }, { "file": "fonts/jost-italic-webfont.woff", "size": 21704, "type": "font/woff" }, { "file": "fonts/jost-italic-webfont.woff2", "size": 16968, "type": "font/woff2" }, { "file": "fonts/jost-regular-webfont.woff", "size": 19820, "type": "font/woff" }, { "file": "fonts/jost-regular-webfont.woff2", "size": 15408, "type": "font/woff2" }, { "file": "icons/android-chrome-192x192.png", "size": 3655, "type": "image/png" }, { "file": "icons/android-chrome-512x512.png", "size": 8364, "type": "image/png" }, { "file": "icons/apple-touch-icon.png", "size": 3449, "type": "image/png" }, { "file": "icons/favicon.ico", "size": 15086, "type": "image/vnd.microsoft.icon" }, { "file": "icons/icon.svg", "size": 625, "type": "image/svg+xml" }, { "file": "images/blog.png", "size": 20545, "type": "image/png" }, { "file": "images/borntofrappe.png", "size": 19573, "type": "image/png" }, { "file": "manifest.json", "size": 462, "type": "application/json" }],
  layout: "src/routes/__layout.svelte",
  error: "src/routes/__error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/blog\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/blog/index.svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/blog\/([^/]+?)\/?$/,
      params: (m) => ({ slug: d(m[1]) }),
      a: ["src/routes/__layout.svelte", "src/routes/blog/[slug].svelte"],
      b: ["src/routes/__error.svelte"]
    }
  ]
};
var get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({ request, resolve: resolve2 }) => resolve2(request)),
  handleError: hooks.handleError || (({ error: error2 }) => console.error(error2.stack)),
  externalFetch: hooks.externalFetch || fetch
});
var module_lookup = {
  "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
    return __layout;
  }),
  "src/routes/__error.svelte": () => Promise.resolve().then(function() {
    return __error;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index$1;
  }),
  "src/routes/blog/index.svelte": () => Promise.resolve().then(function() {
    return index;
  }),
  "src/routes/blog/[slug].svelte": () => Promise.resolve().then(function() {
    return _slug_;
  })
};
var metadata_lookup = { "src/routes/__layout.svelte": { "entry": "pages/__layout.svelte-fc3e2262.js", "css": ["assets/pages/__layout.svelte-122e6980.css"], "js": ["pages/__layout.svelte-fc3e2262.js", "chunks/vendor-42d8823b.js", "chunks/stores-44b48cbb.js", "chunks/icons-af70a683.js"], "styles": [] }, "src/routes/__error.svelte": { "entry": "pages/__error.svelte-cd10675b.js", "css": ["assets/pages/__error.svelte-9293af8c.css", "assets/Header-e257ede0.css"], "js": ["pages/__error.svelte-cd10675b.js", "chunks/vendor-42d8823b.js", "chunks/Meta-0bb4b65b.js", "chunks/stores-44b48cbb.js", "chunks/Header-081ab370.js"], "styles": [] }, "src/routes/index.svelte": { "entry": "pages/index.svelte-c6792738.js", "css": ["assets/pages/index.svelte-7350ce66.css"], "js": ["pages/index.svelte-c6792738.js", "chunks/vendor-42d8823b.js", "chunks/icons-af70a683.js", "chunks/utils-ad1c7718.js", "chunks/Meta-0bb4b65b.js", "chunks/stores-44b48cbb.js"], "styles": [] }, "src/routes/blog/index.svelte": { "entry": "pages/blog/index.svelte-d35f68c4.js", "css": ["assets/pages/blog/index.svelte-a481150d.css", "assets/Header-e257ede0.css"], "js": ["pages/blog/index.svelte-d35f68c4.js", "chunks/vendor-42d8823b.js", "chunks/Meta-0bb4b65b.js", "chunks/stores-44b48cbb.js", "chunks/Header-081ab370.js", "chunks/utils-ad1c7718.js"], "styles": [] }, "src/routes/blog/[slug].svelte": { "entry": "pages/blog/[slug].svelte-f8c4da3b.js", "css": ["assets/pages/blog/[slug].svelte-92ae66ae.css"], "js": ["pages/blog/[slug].svelte-f8c4da3b.js", "chunks/vendor-42d8823b.js", "chunks/Meta-0bb4b65b.js", "chunks/stores-44b48cbb.js", "chunks/icons-af70a683.js"], "styles": [] } };
async function load_component(file) {
  const { entry, css: css2, js, styles } = metadata_lookup[file];
  return {
    module: await module_lookup[file](),
    entry: assets + "/_app/" + entry,
    css: css2.map((dep) => assets + "/_app/" + dep),
    js: js.map((dep) => assets + "/_app/" + dep),
    styles
  };
}
function render(request, {
  prerender
} = {}) {
  const host = request.headers["host"];
  return respond({ ...request, host }, options, { prerender });
}
var css$f = {
  code: `.webfonts #skip-to-content.svelte-15tlyo0{font-family:JosefinSansBold, sans-serif}#skip-to-content.svelte-15tlyo0{outline:none;position:absolute;top:0.5rem;left:0.5rem;text-decoration:none;font-weight:700;font-size:1rem;font-size:var(--size-400);border-radius:2rem;border:none;padding:0.5em 1em;padding-right:2.5em;color:hsl(215, 10%, 98%);color:var(--grey-10);background:hsl(215, 22%, 5%);background:var(--grey-0);box-shadow:0 0 0.5rem -0.4rem hsl(215, 22%, 5%);box-shadow:0 0 0.5rem -0.4rem var(--grey-0);z-index:10}#skip-to-content.svelte-15tlyo0::after{content:'';position:absolute;top:50%;right:0%;transform:translate(-100%, -50%);background:currentColor;width:1em;height:1em;border-radius:50%}@supports ((-webkit-mask-image: url()) or (mask-image: url())){#skip-to-content.svelte-15tlyo0::after{border-radius:initial;-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M 3 -20 h 22 a 20 20 0 0 1 0 40 h -22 l 10 -10 -10 10 10 10" /%3E%3Cpath d="M -45 -20 h 28" /%3E%3Cpath d="M -45 0 h 28" /%3E%3Cpath d="M -45 20 h 28" /%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M 3 -20 h 22 a 20 20 0 0 1 0 40 h -22 l 10 -10 -10 10 10 10" /%3E%3Cpath d="M -45 -20 h 28" /%3E%3Cpath d="M -45 0 h 28" /%3E%3Cpath d="M -45 20 h 28" /%3E%3C/g%3E%3C/svg%3E')}}`,
  map: `{"version":3,"file":"SkipToContent.svelte","sources":["SkipToContent.svelte"],"sourcesContent":["<a href=\\"#content\\" class=\\"visually-hidden\\" id=\\"skip-to-content\\"> Skip to content </a>\\r\\n\\r\\n<style>\\r\\n\\t:global(.webfonts) #skip-to-content {\\r\\n\\t\\tfont-family: JosefinSansBold, sans-serif;\\r\\n\\t}\\r\\n\\r\\n\\t#skip-to-content {\\r\\n\\t\\toutline: none;\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 0.5rem;\\r\\n\\t\\tleft: 0.5rem;\\r\\n\\t\\ttext-decoration: none;\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t\\tfont-size: 1rem;\\r\\n\\t\\tfont-size: var(--size-400);\\r\\n\\t\\tborder-radius: 2rem;\\r\\n\\t\\tborder: none;\\r\\n\\t\\tpadding: 0.5em 1em;\\r\\n\\t\\tpadding-right: 2.5em;\\r\\n\\t\\tcolor: hsl(215, 10%, 98%);\\r\\n\\t\\tcolor: var(--grey-10);\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--grey-0);\\r\\n\\t\\tbox-shadow: 0 0 0.5rem -0.4rem hsl(215, 22%, 5%);\\r\\n\\t\\tbox-shadow: 0 0 0.5rem -0.4rem var(--grey-0);\\r\\n\\t\\tz-index: 10;\\r\\n\\t}\\r\\n\\r\\n\\t#skip-to-content::after {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 50%;\\r\\n\\t\\tright: 0%;\\r\\n\\t\\ttransform: translate(-100%, -50%);\\r\\n\\t\\tbackground: currentColor;\\r\\n\\t\\twidth: 1em;\\r\\n\\t\\theight: 1em;\\r\\n\\t\\tborder-radius: 50%;\\r\\n\\t}\\r\\n\\r\\n\\t@supports ((-webkit-mask-image: url()) or (mask-image: url())) {\\r\\n\\t\\t#skip-to-content::after {\\r\\n\\t\\t\\tborder-radius: initial;\\r\\n\\t\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"10\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath d=\\"M 3 -20 h 22 a 20 20 0 0 1 0 40 h -22 l 10 -10 -10 10 10 10\\" /%3E%3Cpath d=\\"M -45 -20 h 28\\" /%3E%3Cpath d=\\"M -45 0 h 28\\" /%3E%3Cpath d=\\"M -45 20 h 28\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"10\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath d=\\"M 3 -20 h 22 a 20 20 0 0 1 0 40 h -22 l 10 -10 -10 10 10 10\\" /%3E%3Cpath d=\\"M -45 -20 h 28\\" /%3E%3Cpath d=\\"M -45 0 h 28\\" /%3E%3Cpath d=\\"M -45 20 h 28\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAGS,SAAS,AAAC,CAAC,gBAAgB,eAAC,CAAC,AACpC,WAAW,CAAE,eAAe,CAAC,CAAC,UAAU,AACzC,CAAC,AAED,gBAAgB,eAAC,CAAC,AACjB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,MAAM,CACX,IAAI,CAAE,MAAM,CACZ,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,UAAU,CAAC,CAC1B,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,KAAK,CAAC,GAAG,CAClB,aAAa,CAAE,KAAK,CACpB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,KAAK,CAAE,IAAI,SAAS,CAAC,CACrB,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAC7B,UAAU,CAAE,IAAI,QAAQ,CAAC,CACzB,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,OAAO,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAChD,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,OAAO,CAAC,IAAI,QAAQ,CAAC,CAC5C,OAAO,CAAE,EAAE,AACZ,CAAC,AAED,+BAAgB,OAAO,AAAC,CAAC,AACxB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,KAAK,CAAE,EAAE,CACT,SAAS,CAAE,UAAU,KAAK,CAAC,CAAC,IAAI,CAAC,CACjC,UAAU,CAAE,YAAY,CACxB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,aAAa,CAAE,GAAG,AACnB,CAAC,AAED,UAAU,CAAC,CAAC,oBAAoB,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,YAAY,IAAI,CAAC,CAAC,CAAC,AAAC,CAAC,AAC/D,+BAAgB,OAAO,AAAC,CAAC,AACxB,aAAa,CAAE,OAAO,CACtB,kBAAkB,CAAE,IAAI,6XAA6X,CAAC,CACtZ,UAAU,CAAE,IAAI,6XAA6X,CAAC,AAC/Y,CAAC,AACF,CAAC"}`
};
var SkipToContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$f);
  return `<a href="${"#content"}" class="${"visually-hidden svelte-15tlyo0"}" id="${"skip-to-content"}">Skip to content </a>`;
});
var getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
var page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var icons = {
  backpack: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-width="8" d="M -33 0 a 33 33 0 0 1 66 0 v 38 a 8 8 0 0 1 -8 8 h -50 a 8 8 0 0 1 -8 -8 z" /><g stroke-width="7"><path d="M -11 -35.5 a 11 11 0 0 1 22 0" /><path d="M -17 -2 h 34 v 30 h -34 z m 0 18 h 30" /><path d="M -33 5 h -5 q -8 0 -8 20 a 8 8 0 0 0 8 8 h 5" /><path transform="scale(-1 1)" d="M -33 5 h -5 q -8 0 -8 20 a 8 8 0 0 0 8 8 h 5" /></g></g></svg>',
  badge: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-width="10" d="M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z" /><path stroke-width="8" d="M -17 -0 l 12 12 21 -21" /></g></svg>',
  blog: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="8"><path d="M -26 -19 h -20 v -6 a 12 12 0 0 1 24 0 v 50 a 12 12 0 0 0 24 0 v -5 h 44 v 5 a 12 12 0 0 1 -12 12 h -44 a 12 12 0 0 1 -12 -12" /><path d="M -34 -37 h 44 a 12 12 0 0 1 12 12 v 45 h -20 v 5 a 12 12 0 0 1 -24 0 v -50 a 12 12 0 0 0 -12 -12" /></g><g stroke-width="6"><path d="M -10 -20 h 20" /><path d="M -10 -8 h 10" /><path d="M -10 4 h 15" /><path d="M -10 16 h 5" /></g></g></svg>',
  branch: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><circle r="15" cx="-14" cy="-31" /><circle r="15" cx="-14" cy="31" /><circle stroke-width="7" r="12" cx="30" cy="-23" /><path d="M -14 16 V -16"/><path d="M -14 16 a 12 12 0 0 1 12 -12 h 18 a 14 14 0 0 0 14 -14"/></g></svg>',
  briefcase: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"><path stroke-width="8" d="M -46 -20 a 8 8 0 0 1 8 -8 h 76 a 8 8 0 0 1 8 8 v 54 a 8 8 0 0 1 -8 8 h -76 a 8 8 0 0 1 -8 -8 z" /><g stroke-width="7"><path d="M -46 -8 a 80 80 0 0 0 92 0" /><path d="M -20 -28 v -8 a 8 8 0 0 1 8 -8 h 24 a 8 8 0 0 1 8 8 v 8" /><path d="M -8 4 h 16 v 16 h -16 z" /></g></g></svg>',
  bug: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"><g transform="scale(0.8)"><g fill="none" stroke-width="16"><g transform="translate(0 13.5)"><path d="M 34 0 h -68"/><path transform="rotate(45)" d="M 40 0 h -80"/><path transform="rotate(-45)" d="M 40 0 h -80"/></g></g><g fill="currentColor" stroke-width="8"><path d="M -0 -46 a 17 17 0 0 1 17 17 h -34 a 17 17 0 0 1 17 -17" /><path d="M -0 -10 h 25 v 25 a 25 25 0 0 1 -50 0 v -25 z" /></g></g></g></svg>',
  certificate: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"><path stroke-width="8" d="M -46 -32 a 8 8 0 0 1 8 -8 h 76 a 8 8 0 0 1 8 8 v 54 a 8 8 0 0 1 -8 8 h -16 m -44 0 h -16 a 8 8 0 0 1 -8 -8 v -54" /><g stroke-width="7"><path d="M -25 -18 h 50" /><circle cx="0" cy="13" r="15" /><path d="M -10 26 v 16.5 l 10 -5 10 5 v -16.5"/></g></g><g fill="currentColor" stroke="none"><circle r="8" cx="-40" cy="-34"/><circle transform="scale(-1 1)" r="8" cx="-40" cy="-34"/><circle r="8" cx="-40" cy="24"/><circle transform="scale(-1 1)" r="8" cx="-40" cy="24"/></g></svg>',
  codepen: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M 0 -40 l -46 25 46 25 46 -25 z" /><path d="M 0 -40 v 30" /><path transform="translate(0 50)" d="M 0 -40 v 30" /><path transform="translate(46 25)" d="M 0 -40 v 30" /><path transform="translate(-46 25)" d="M 0 -40 v 30" /><path transform="translate(0 30)" d="M 0 -40 l -46 25 46 25 46 -25 z" /></g></svg>',
  css: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-40.002-50l5.005 85.002 35 15.002 35.001-15.002L40.01-50h-80.002zM-26-32.5h52.002l-3.25 55.263L0 32.516l-22.75-9.753-.651-11.05h11.05l.325 5.524 12.027 5.2 12.026-5.2.977-16.574h-37.049l-.646-11.05h38.358l.65-11.055h-39.643l-.65-11.05z"/></g></svg>',
  d3: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="m-15 -50v0.050781a61 61 0 0 1 18.1 19.949h16.9a10 10 0 0 1 10 10 10 10 0 0 1-10 10h-9.8262a61 61 0 0 1 0.82617 10 61 61 0 0 1-0.92969 10h9.9297a10 10 0 0 1 10 10 10 10 0 0 1-10 10h-16.986a61 61 0 0 1-18.014 19.93v0.070312h35a30 30 0 0 0 30-30 30 30 0 0 0-7.6621-20.02 30 30 0 0 0 7.6621-19.98 30 30 0 0 0-30-30h-35z"/><path d="m-50 -50v20a30 30 0 0 1 30 30 30 30 0 0 1-30 30v20a50 50 0 0 0 50-50 50 50 0 0 0-50-50z"/></g></svg>',
  editing: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="8"><path d="M 18 -44 h -54 a 10 10 0 0 0 -10 10 v 68 a 10 10 0 0 0 10 10 h 46 m 18 -54 v -24 a 10 10 0 0 0 -10 -10"/><path d="M 8 -11 l -17 17 38 38 h 17 v -17 l -38 -38"/></g><g stroke-width="7"><path d="M 17 -2 l -17 17"/><path d="M -30 -22 h 40"/><path d="M -30 -7 l 10 10 m -10 0 l 10 -10"/><path d="M -30 18 h 16"/></g></g></svg>',
  editor: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><path fill="currentColor" stroke="none" d="M-40.5-33v16h.5v.5h80v-16h-.5v-.5h-80zm8.5.5a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0A4.5 4.5 0 01-1.5-28 4.5 4.5 0 01-6-23.5a4.5 4.5 0 01-4.5-4.5A4.5 4.5 0 01-6-32.5z"/><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M-45-37.5h90v75h-90z" stroke-width="10"/><g stroke-width="8"><path d="M5-4L-5 21M-18 0l-8 8 8 8M18 0l8 8-8 8"/></g></g></svg>',
  flag: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-8 -90 100 100" width="1em" height="1em"><g transform="rotate(10)"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><g><path d="M 0 0 v -80" stroke-width="8"/><path d="M 0 -80.5 h 70 v 52 h -70" stroke-width="7"/></g></g><g fill="currentColor" stroke="none"><rect x="19" y="-77.5" width="16" height="16" rx="1" /><rect x="51" y="-77.5" width="16" height="16" rx="1" /><rect x="3" y="-61.5" width="16" height="16" rx="1" /><rect x="35" y="-61.5" width="16" height="16" rx="1" /><rect x="19" y="-45.5" width="16" height="16" rx="1" /><rect x="51" y="-45.5" width="16" height="16" rx="1" /></g></g></svg>',
  freecodecamp: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"><path d="M 30 -35 c 21 20 21 50 0 70" /><path transform="scale(-1 1)" d="M 30 -35 c 21 20 21 50 0 70" /><g transform="translate(0 30)" stroke-linejoin="round"><path d="M 20 -20 a 20 20 0 0 1 -40 0 q 0 -10 10 -20 t 0 -20 q 15 17 12.5 35 q 10 0 12.5 -15 q 5 11.25 5 20" /></g></g></svg>',
  gaming: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-27.916-32.012a5 5 0 00-.526.028 5 5 0 00-2.05.614c-5.334 1.568-9.465 6.062-11.282 11.877a5 5 0 00-.111.427l-6.998 32.001c-1.464 5.929-1.671 11.25 1.223 15.593 2.876 4.315 8.265 5.798 13.774 5.46 5.703-.052 9.108-3.662 12.086-6.143 3-2.5 5.576-3.84 5.8-3.84h32c.223 0 2.8 1.34 5.801 3.84 2.979 2.48 6.383 6.09 12.086 6.143 5.51.34 10.898-1.146 13.774-5.46 2.895-4.343 2.688-9.664 1.223-15.593l-.032-.144-6.967-31.858a5 5 0 00-.065-.27c-.983-3.538-2.434-6.595-4.786-8.947-2.351-2.352-5.714-3.717-9.036-3.717h-55.692a5 5 0 00-.213-.014zm7.914 15.013h5c.554 0 1 .445 1 1v8.5h8.5c.554 0 1 .445 1 1v5c0 .554-.446 1-1 1h-8.5V8c0 .554-.446 1-1 1h-5c-.554 0-1-.446-1-1V-.5h-8.5c-.554 0-1-.446-1-1v-5c0-.555.446-1 1-1h8.5V-16c0-.555.446-1 1-1zM17-17a5 5 0 015 5.005 5 5 0 01-5 5 5 5 0 01-5.005-5A5 5 0 0117-17zM24.997-.997a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5z"/></g></svg>',
  git: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-.07-50a5 5 0 00-3.461 1.465l-11.55 11.55 12.49 12.49a7 7 0 012.604-.506 7 7 0 017 7 7 7 0 01-.51 2.6l8.906 8.906A7 7 0 0118.013-7a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 01.508-2.602L2.763-11.36v22.92a7 7 0 014.25 6.436 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 014.25-6.428v-23.14a7 7 0 01-4.25-6.436 7 7 0 01.508-2.602L-18.97-33.1-48.52-3.55a5 5 0 000 7.07l45 45a5 5 0 007.07 0l45-45a5 5 0 000-7.07l-45-45a5 5 0 00-3.61-1.465z"/></g></svg>',
  github: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-width="8" d="M 0 11 h -17 a 18 18 0 0 1 -18 -18 q 0 -8 5 -16 q -6 -10 0 -18 q 12 0 18 6 a 24 24 0 0 1 24 0 q 6 -6 18 -6 q 6 8 0 18 q 5 8 5 16 a 18 18 0 0 1 -18 18 h -17" /><path stroke-width="6" d="M -12 11 q -10 0 -10 14 q 0 8 -8 14 q 20 0 20 -16 v 4 q 0 10 -6 16 q 16 0 16 -15 v -4 v 4 q 0 15 16 15 q -6 0 -6 -16 v -4 q 0 16 20 16 q -8 0 -8 -14 q 0 -14 -10 -14" /></g></svg>',
  graduationHat: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"><path stroke-width="8" d="M 0 -26 l -46 16 46 16 46 -16 z" /><g stroke-width="7"><path d="M -26 -1 v 20 a 52 52 0 0 0 52 0 v -20" /><path fill="currentColor" d="M 40 -4 v 25 l 5 5 a 10 10 0 0 1 -10 0 l 5 -5" /></g></g></svg>',
  heart: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"><path d="M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0" /></g></svg>',
  html: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-40.002-50l5.004 85L.001 50.001l34.998-15.003L40.003-50h-80.007zm14.003 17.5h52l-.65 11.049h-39.649l.651 11.054H24.7L22.751 22.75 0 32.503l-22.75-9.752-.65-11.05h11.049l.325 5.525 12.026 5.2 12.026-5.2.977-16.574H-24.05L-25.998-32.5z"/></g></svg>',
  js: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-50-50V50.8h38.4c-8.88 0-16.08-7.2-16.08-16.08v-5.04h10.08v5.04c0 3.36 2.64 6 6 6s6-2.64 6-6V.88H4.48v33.84c0 8.88-7.2 16.08-16.08 16.08H9.52V40.72H24.64c2.88 0 5.04-2.208 5.04-5.04s-2.184-5.04-5.04-5.04c-8.4 0-15.12-6.72-15.12-15.12S16.24.4 24.64.4h13.2v10.08h-13.2c-2.88 0-5.04 2.208-5.04 5.04s2.184 5.04 5.04 5.04c8.4 0 15.12 6.72 15.12 15.12S33.04 50.8 24.64 50.8h24V-50h-100.8z"/></g></svg>',
  json: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="10" ><path d="M -17.5 -45 a 20 20 0 0 0 -20 20 v 12.5 a 12.5 12.5 0 0 1 -12.5 12.5 12.5 12.5 0 0 1 12.5 12.5 v 12.5 a 20 20 0 0 0 20 20" /><path transform="scale(-1 1)" d="M -17.5 -45 a 20 20 0 0 0 -20 20 v 12.5 a 12.5 12.5 0 0 1 -12.5 12.5 12.5 12.5 0 0 1 12.5 12.5 v 12.5 a 20 20 0 0 0 20 20" /></g><g fill="currentColor" stroke="none"><circle r="4" /><circle cx="-16" r="4" /><circle cx="16" r="4" /></g></svg>',
  lightBulb: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M -10.5 12 a 21 21 0 1 1 21 0 v 5 a 4 4 0 0 1 -4 4 h -13 a 4 4 0 0 1 -4 -4 v -5"/><g stroke-width="7"><path d="M -8 31 h 16"/><path d="M -8 40.5 h 16"/><path fill="currentColor" d="M -6 40.5 a 6 6 0 0 0 12 0"/></g><g transform="translate(0 -6)" stroke-width="6"><path transform="rotate(0) translate(0 -34)" d="M 0 0 v -7" /><path transform="rotate(45) translate(0 -34.5)" d="M 0 0 v -6.5" /><path transform="rotate(-45) translate(0 -34.5)" d="M 0 0 v -6.5" /><path transform="rotate(90) translate(0 -35)" d="M 0 0 v -6" /><path transform="rotate(-90) translate(0 -35)" d="M 0 0 v -6" /><path transform="rotate(135) translate(0 -35.5)" d="M 0 0 v -5.5" /><path transform="rotate(-135) translate(0 -35.5)" d="M 0 0 v -5.5" /></g></g></svg>',
  lua: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="m0 -34a34 34 0 0 0-34 34 34 34 0 0 0 34 34 34 34 0 0 0 34-34 34 34 0 0 0-34-34zm10 12a12 12 0 0 1 12 12 12 12 0 0 1-12 12 12 12 0 0 1-12-12 12 12 0 0 1 12-12z" /><circle cx="36" cy="-36" r="12" /></g><circle r="48.5" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="8" stroke-dashoffset="9.5" stroke-linecap="round" /></svg>',
  moon: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-5.435-27.43A28 28 0 000 28.02 28 28 0 0027.435 5.45 28 28 0 0122 6.019a28 28 0 01-27.435-33.43z"/></g></svg>',
  node: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linejoin="round" stroke-linecap="round"><path d="M -25 33 l -18 -9 v -48 l 44 -22 44 22 v 48 l -44 22 -7 -3.5" /><path d="M -14 -19 v 42.5 a 10 10 0 0 1 -10 10" /><path d="M 24 -9 a 10 10 0 0 0 -20 0 10 10 0 0 0 10 10 10 10 0 0 1 10 10 10 10 0 0 1 -20 0" /></g></svg>',
  permalink: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g transform="rotate(-45)"><g fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"><path stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /><path transform="scale(-1 -1)" stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /></g></g></svg>',
  publish: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="8"><path d="M 36 -44 h -54 a 10 10 0 0 0 -10 10 v 15 m 30 63 h 34 a 10 10 0 0 0 10 -10 v -68 a 10 10 0 0 0 -10 -10"/></g><g stroke-width="7"><path d="M -32.5 32 h -2 a 12 12 0 0 1 0 -24 a 17 17 0 0 1 34 0 h 2 a 12 12 0 0 1 0 24"/><path d="M -15.5 38 v -20 l -8 8 m 16 0 l -8 -8" /><path d="M -12 -22 h 40"/><path d="M 10 -2 h 18"/><path d="M 24 18 h 4"/></g></g></svg>',
  pullRequest: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><circle r="15" cx="-24" cy="-31" /><circle r="15" cx="-24" cy="31" /><circle r="15" cx="24" cy="31" /><path d="M -24 16 V -16"/><path d="M 24 16 V -16 q 0 -15 -20 -20"/><path transform="translate(4 -36) rotate(-20)" d="M 0 0 h 18"/><path transform="translate(4 -36) rotate(70)" d="M 0 0 h 18"/></g></svg>',
  python: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="m-6 -47.5s-25 0-25 12.5v14h30v2.5h-38c-11 0-11 20-11 20s0 20 11 20h17.5v-12.5a10 10 0 0 1 10-10h11.5 9a10 10 0 0 0 10-10v-24c0-12.5-25-12.5-25-12.5zm-13 8.5a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z" /><path d="m21.5 -21.5v12.5a10 10 0 0 1-10 10h-11.5-9a10 10 0 0 0-10 10v24c0 12.5 25 12.5 25 12.5s25 0 25-12.5v-14h-30v-2.5h38c11 0 11-20 11-20s0-20-11-20h-17.5zm-2.5 50.5a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z" /></g></svg>',
  react: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8"><ellipse transform="rotate(30)" rx="18" ry="46" /><ellipse transform="rotate(-30)" rx="18" ry="46" /><ellipse transform="rotate(90)" rx="18" ry="46" /></g><g fill="currentColor" stroke="none"><circle r="8" /></g></svg>',
  reading: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="8"><path d="M 36 -44 h -27 m -37 63 v 15 a 10 10 0 0 0 10 10 h 54 a 10 10 0 0 0 10 -10 v -68 a 10 10 0 0 0 -10 -10"/><circle r="25" cx="-21" cy="-19" /><path d="M 22 24 l -18 -18"/></g><path stroke-width="4" d="M 5 7 l -5 -5"/><g stroke-width="7"><path d="M -12 -22 h 4 m 24 0 h 12"/><path d="M 13 -2 h 15"/><path d="M -12 18 h 12"/></g></g></svg>',
  repository: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M -30 -46 h 60 a 8 8 0 0 1 8 8 v 70 a 8 8 0 0 1 -8 8 h -21 m -27 0 h -12 a 8 8 0 0 1 -8 -8 v -70 a 8 8 0 0 1 8 -8 v 65 h 68"/><path d="M -15 -30 h 2"/><path d="M -15 -15 h 2"/><path d="M -15 0 h 2"/><path stroke-width="7" d="M -15 30 v 16.5 l 10 -5 10 5 v -16.5 z"/></g></svg>',
  rocket: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"><g transform="translate(2 -1.5) rotate(45)"><path stroke-width="8" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" /><g stroke-width="7"><path d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /><path transform="scale(-1 1)" d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /><path d="M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5" /><circle r="9" cy="-11" /></g></g></g></svg>',
  running: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linejoin="round" stroke-linecap="round"><g transform="scale(-1 1) translate(-7 0) rotate(-35)"><path d="M 46 13.5 a 8 8 0 0 1 -8 8 h -76 a 8 8 0 0 1 -8 -8 v -4 q 0 -8 16 -16 l 34 -15 a 20 20 0 0 0 34 0 8 8 0 0 1 8 8 v 27" /><g stroke-width="6"><path d="M 46 12.5 h -92" /><path d="M -20.5 -5.5 l 10 10" /><path d="M -10.5 -11.5 l 10 10" /></g></g></g></svg>',
  skip: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><path d="M 3 -20 h 22 a 20 20 0 0 1 0 40 h -22 l 10 -10 -10 10 10 10" /><path d="M -45 -20 h 28" /><path d="M -45 0 h 28" /><path d="M -45 20 h 28" /></g></svg>',
  sparkles: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" /><path d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-20 -20) scale(0.9)"/><path d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(20 -25) scale(0.5)"/><path d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(15 25) scale(0.8)"/><path d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-15 20) scale(0.4)"/></g></svg>',
  sun: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><circle r="22" /><circle transform="translate(0 41.2)" r="8.8" /><circle transform="rotate(45) translate(0 41.2)" r="8.8" /><circle transform="rotate(90) translate(0 41.2)" r="8.8" /><circle transform="rotate(135) translate(0 41.2)" r="8.8" /><circle transform="rotate(180) translate(0 41.2)" r="8.8" /><circle transform="rotate(225) translate(0 41.2)" r="8.8" /><circle transform="rotate(270) translate(0 41.2)" r="8.8" /><circle transform="rotate(315) translate(0 41.2)" r="8.8" /></g></svg>',
  svelte: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g transform="rotate(-30)"><g fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"><path d="M 30 -10 h -30 h 8 a 21 21 0 0 1 0 42 h -37 a 21 21 0 0 1 0 -42" /><path transform="scale(-1 -1)" d="M 30 -10 h -30 h 8 a 21 21 0 0 1 0 42 h -37 a 21 21 0 0 1 0 -42" /></g></g></svg>',
  svg: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="currentColor" stroke-width="8"><path d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /><path transform="rotate(45)" d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /><path transform="rotate(90)" d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /><path transform="rotate(135)" d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /></g></svg>',
  twitter: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-width="8" d="M -39 30.5 c 40 20 75 0 75 -48 l 8 -8 -12 -2 a 10 10 0 0 0 -32.5 12 q -20 5 -40 -15" /><path stroke-width="7" d="M -40.5 -30.5 q -5 20 14 26 -9 0 -18 -5 0 20 23 18 -10 4 -22 0 0 12 28 14 -10 6 -23.5 8" /></g></svg>',
  world: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="12" stroke-linejoin="round" stroke-linecap="round"><circle r="44" /></g><g fill="currentColor" stroke="none"><path d="M -2 4 h 9 a 8 8 0 0 1 8 8 v 6 a 4 4 0 0 1 4 4 8 8 0 0 1 -8 8 v 6 a 9 9 0 0 1 -18 0 v -6 a 8 8 0 0 0 -4 -4 11 11 0 0 1 0 -22" /><path d="M -18 -26 a 3 3 0 0 1 3 3 v 4 a 3 3 0 0 1 -3 3 h -2 a 3 3 0 0 1 -3 -3 3 3 0 0 1 3 -3 v -1 a 3 3 0 0 1 3 -3" /><path d="M 1 -28 a 4 4 0 0 1 -4 4 a 8 8 0 0 0 -8 8 v 3 a 4 4 0 0 0 -4 4 a 6 6 0 0 0 12 0 a 2 2 0 0 1 4 0 v 5 a 5 5 0 0 0 10 0 v -5 a 2 2 0 0 1 4 0 a 4 4 0 0 0 4 4 v 4 a 10 10 0 0 0 20 0 c 0 -38 -38 -38 -38 -38 a 4 4 0 0 0 -4 4 4 4 0 0 0 -4 4 4 4 0 0 0 4 4 h 4" /></g></svg>',
  writing: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="8"><path d="M 16.5 -44 h -52.5 a 10 10 0 0 0 -10 10 v 68 a 10 10 0 0 0 10 10 h 54 a 10 10 0 0 0 10 -10 v -17.5"/><path d="M 29 -37.5 l 17 17 -38 38 h -17 v -17 l 38 -38"/></g><g stroke-width="7"><path d="M 20 -28.5 l 17 17"/><path d="M -30 -22 h 25"/><path d="M -30 -2 h 10"/><path d="M -30 18 h 10"/></g></g></svg>'
};
var css$e = {
  code: "nav.svelte-x3p1n1 ol.svelte-x3p1n1.svelte-x3p1n1.svelte-x3p1n1{margin:0;padding:0;list-style:none}nav.svelte-x3p1n1 ol.svelte-x3p1n1>.svelte-x3p1n1+.svelte-x3p1n1{margin-left:0.3em}nav.svelte-x3p1n1 ol li.svelte-x3p1n1.svelte-x3p1n1.svelte-x3p1n1{display:inline-block}.webfonts nav.svelte-x3p1n1 a.svelte-x3p1n1.svelte-x3p1n1.svelte-x3p1n1{font-family:JosefinSansBold, sans-serif}nav.svelte-x3p1n1 a.svelte-x3p1n1.svelte-x3p1n1.svelte-x3p1n1{text-decoration:none;font-weight:700;padding:0.25em 0;display:inline-flex;align-items:center}nav.svelte-x3p1n1 a.svelte-x3p1n1 svg{margin-left:0.3em;width:1.5em;height:auto}",
  map: `{"version":3,"file":"Breadcrumbs.svelte","sources":["Breadcrumbs.svelte"],"sourcesContent":["<script>\\r\\n\\timport { page } from '$app/stores';\\r\\n\\timport icons from '$lib/icons.js';\\r\\n\\r\\n\\tconst root = {\\r\\n\\t\\thref: '/',\\r\\n\\t\\ttext: 'borntofrappe',\\r\\n\\t\\ticon: icons.rocket\\r\\n\\t};\\r\\n<\/script>\\r\\n\\r\\n<nav aria-label=\\"Breadcrumb navigation\\" id=\\"breadcrumb\\">\\r\\n\\t<ol>\\r\\n\\t\\t{#each $page.path\\r\\n\\t\\t\\t.split('/')\\r\\n\\t\\t\\t.filter((d) => d)\\r\\n\\t\\t\\t.reduce((acc, curr, i) => [...acc, { href: i === 0 ? \`/\${curr}\` : \`\${acc[acc.length - 1].href}/\${curr}\`, text: \`/ \${curr}\`, icon: icons[curr] || '' }], [root]) as { href, text, icon }}\\r\\n\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t<a {href}>{text} {@html icon}</a>\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t{/each}\\r\\n\\t</ol>\\r\\n</nav>\\r\\n\\r\\n<style>\\r\\n\\tnav ol {\\r\\n\\t\\tmargin: 0;\\r\\n\\t\\tpadding: 0;\\r\\n\\t\\tlist-style: none;\\r\\n\\t}\\r\\n\\r\\n\\tnav ol > * + * {\\r\\n\\t\\tmargin-left: 0.3em;\\r\\n\\t}\\r\\n\\r\\n\\tnav ol li {\\r\\n\\t\\tdisplay: inline-block;\\r\\n\\t}\\r\\n\\r\\n\\t:global(.webfonts) nav a {\\r\\n\\t\\tfont-family: JosefinSansBold, sans-serif;\\r\\n\\t}\\r\\n\\r\\n\\tnav a {\\r\\n\\t\\ttext-decoration: none;\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t\\tpadding: 0.25em 0;\\r\\n\\t\\tdisplay: inline-flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t}\\r\\n\\r\\n\\tnav a :global(svg) {\\r\\n\\t\\tmargin-left: 0.3em;\\r\\n\\t\\twidth: 1.5em;\\r\\n\\t\\theight: auto;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAyBC,iBAAG,CAAC,EAAE,0CAAC,CAAC,AACP,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,iBAAG,CAAC,gBAAE,CAAG,cAAC,CAAG,cAAE,CAAC,AACf,WAAW,CAAE,KAAK,AACnB,CAAC,AAED,iBAAG,CAAC,EAAE,CAAC,EAAE,0CAAC,CAAC,AACV,OAAO,CAAE,YAAY,AACtB,CAAC,AAEO,SAAS,AAAC,CAAC,iBAAG,CAAC,CAAC,0CAAC,CAAC,AACzB,WAAW,CAAE,eAAe,CAAC,CAAC,UAAU,AACzC,CAAC,AAED,iBAAG,CAAC,CAAC,0CAAC,CAAC,AACN,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,MAAM,CAAC,CAAC,CACjB,OAAO,CAAE,WAAW,CACpB,WAAW,CAAE,MAAM,AACpB,CAAC,AAED,iBAAG,CAAC,eAAC,CAAC,AAAQ,GAAG,AAAE,CAAC,AACnB,WAAW,CAAE,KAAK,CAClB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,AACb,CAAC"}`
};
var Breadcrumbs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const root = {
    href: "/",
    text: "borntofrappe",
    icon: icons.rocket
  };
  $$result.css.add(css$e);
  $$unsubscribe_page();
  return `<nav aria-label="${"Breadcrumb navigation"}" id="${"breadcrumb"}" class="${"svelte-x3p1n1"}"><ol class="${"svelte-x3p1n1"}">${each($page.path.split("/").filter((d2) => d2).reduce((acc, curr, i) => [
    ...acc,
    {
      href: i === 0 ? `/${curr}` : `${acc[acc.length - 1].href}/${curr}`,
      text: `/ ${curr}`,
      icon: icons[curr] || ""
    }
  ], [root]), ({ href, text, icon }) => `<li class="${"svelte-x3p1n1"}"><a${add_attribute("href", href, 0)} class="${"svelte-x3p1n1"}">${escape(text)} <!-- HTML_TAG_START -->${icon}<!-- HTML_TAG_END --></a>
			</li>`)}</ol>
</nav>`;
});
var css$d = {
  code: "button.svelte-92cdu7.svelte-92cdu7{width:2em;height:2em;color:inherit;padding:0;background:none;border:none;transition:color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:color var(--transition-duration) var(--ease-in-out-sine)}button.svelte-92cdu7 svg.svelte-92cdu7{width:100%;height:auto}button.svelte-92cdu7.svelte-92cdu7:not(:disabled):focus{outline:0.15rem dashed currentColor}button.svelte-92cdu7.svelte-92cdu7:not(:disabled):focus:not(:focus-visible){outline:none}button.svelte-92cdu7.svelte-92cdu7:not(:disabled):hover{color:hsl(340, 90%, 55%);color:var(--primary-6)}button.svelte-92cdu7 svg .rotate.svelte-92cdu7{transition:transform 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:transform var(--transition-duration) var(--ease-in-out-sine)}button.svelte-92cdu7 svg .scale.svelte-92cdu7{transition:transform 0.25s step-end;transition:transform var(--transition-duration) step-end}@media(prefers-color-scheme: dark){html:not([data-preference]) button.svelte-92cdu7 svg .rotate.svelte-92cdu7{transform:rotate(180deg)}html:not([data-preference]) button.svelte-92cdu7 svg .scale.svelte-92cdu7{transform:scaleX(-1)}}html[data-preference='dark'] button.svelte-92cdu7 svg .rotate.svelte-92cdu7{transform:rotate(180deg)}html[data-preference='dark'] button.svelte-92cdu7 svg .scale.svelte-92cdu7{transform:scaleX(-1)}",
  map: `{"version":3,"file":"ColorSchemeToggle.svelte","sources":["ColorSchemeToggle.svelte"],"sourcesContent":["<script>\\r\\n\\tlet button;\\r\\n\\t$: button && button.removeAttribute('disabled');\\r\\n\\r\\n\\tfunction setPreference(preference) {\\r\\n\\t\\tdocument.documentElement.setAttribute('data-preference', preference);\\r\\n\\t\\tlocalStorage.setItem('color-scheme', preference);\\r\\n\\t}\\r\\n\\r\\n\\tfunction handleClick() {\\r\\n\\t\\tsetPreference(localStorage.getItem('color-scheme') === 'dark' ? 'light' : 'dark');\\r\\n\\t}\\r\\n<\/script>\\r\\n\\r\\n<button bind:this={button} on:click={handleClick} disabled>\\r\\n\\t<span class=\\"visually-hidden\\">Toggle color scheme</span>\\r\\n\\r\\n\\t<svg\\r\\n\\t\\taria-hidden=\\"true\\"\\r\\n\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\r\\n\\t\\tviewBox=\\"-90 -90 180 180\\"\\r\\n\\t\\twidth=\\"1em\\"\\r\\n\\t\\theight=\\"1em\\"\\r\\n\\t>\\r\\n\\t\\t<defs>\\r\\n\\t\\t\\t<clipPath id=\\"clip-path-toggle\\">\\r\\n\\t\\t\\t\\t<circle r=\\"90\\" />\\r\\n\\t\\t\\t</clipPath>\\r\\n\\t\\t</defs>\\r\\n\\t\\t<circle fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"10\\" r=\\"85\\" />\\r\\n\\t\\t<g clip-path=\\"url(#clip-path-toggle)\\">\\r\\n\\t\\t\\t<g transform=\\"translate(0 90)\\">\\r\\n\\t\\t\\t\\t<g class=\\"scale\\">\\r\\n\\t\\t\\t\\t\\t<g class=\\"rotate\\">\\r\\n\\t\\t\\t\\t\\t\\t<g transform=\\"translate(0 -90)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<g transform=\\"scale(-1 1)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<g class=\\"rotate\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<g transform=\\"scale(-1 1)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<g fill=\\"currentColor\\" stroke=\\"none\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle r=\\"22\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle transform=\\"translate(0 41)\\" r=\\"9\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle transform=\\"rotate(45) translate(0 41)\\" r=\\"9\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle transform=\\"rotate(90) translate(0 41)\\" r=\\"9\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle transform=\\"rotate(135) translate(0 41)\\" r=\\"9\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle transform=\\"rotate(180) translate(0 41)\\" r=\\"9\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle transform=\\"rotate(225) translate(0 41)\\" r=\\"9\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle transform=\\"rotate(270) translate(0 41)\\" r=\\"9\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle transform=\\"rotate(315) translate(0 41)\\" r=\\"9\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t<g transform=\\"translate(0 90)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<g transform=\\"scale(-1 1)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<g class=\\"rotate\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<g transform=\\"scale(-1 1)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<g class=\\"scale\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<g fill=\\"currentColor\\" stroke=\\"none\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M-5.435-27.43A28 28 0 000 28.02 28 28 0 0027.435 5.45 28 28 0 0122 6.019a28 28 0 01-27.435-33.43z\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t</g>\\r\\n\\t\\t</g>\\r\\n\\t</svg>\\r\\n</button>\\r\\n\\r\\n<style>\\r\\n\\tbutton {\\r\\n\\t\\twidth: 2em;\\r\\n\\t\\theight: 2em;\\r\\n\\t\\tcolor: inherit;\\r\\n\\t\\tpadding: 0;\\r\\n\\t\\tbackground: none;\\r\\n\\t\\tborder: none;\\r\\n\\t\\ttransition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition: color var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t}\\r\\n\\r\\n\\tbutton svg {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: auto;\\r\\n\\t}\\r\\n\\r\\n\\tbutton:not(:disabled):focus {\\r\\n\\t\\toutline: 0.15rem dashed currentColor;\\r\\n\\t}\\r\\n\\r\\n\\tbutton:not(:disabled):focus:not(:focus-visible) {\\r\\n\\t\\toutline: none;\\r\\n\\t}\\r\\n\\r\\n\\tbutton:not(:disabled):hover {\\r\\n\\t\\tcolor: hsl(340, 90%, 55%);\\r\\n\\t\\tcolor: var(--primary-6);\\r\\n\\t}\\r\\n\\r\\n\\tbutton svg .rotate {\\r\\n\\t\\ttransition: transform 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition: transform var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t}\\r\\n\\r\\n\\tbutton svg .scale {\\r\\n\\t\\ttransition: transform 0.25s step-end;\\r\\n\\t\\ttransition: transform var(--transition-duration) step-end;\\r\\n\\t}\\r\\n\\r\\n\\t@media (prefers-color-scheme: dark) {\\r\\n\\t\\t:global(html:not([data-preference])) button svg .rotate {\\r\\n\\t\\t\\ttransform: rotate(180deg);\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t:global(html:not([data-preference])) button svg .scale {\\r\\n\\t\\t\\ttransform: scaleX(-1);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t:global(html[data-preference='dark']) button svg .rotate {\\r\\n\\t\\ttransform: rotate(180deg);\\r\\n\\t}\\r\\n\\r\\n\\t:global(html[data-preference='dark']) button svg .scale {\\r\\n\\t\\ttransform: scaleX(-1);\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4EC,MAAM,4BAAC,CAAC,AACP,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CAAC,KAAK,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAC7D,UAAU,CAAE,KAAK,CAAC,IAAI,qBAAqB,CAAC,CAAC,IAAI,kBAAkB,CAAC,AACrE,CAAC,AAED,oBAAM,CAAC,GAAG,cAAC,CAAC,AACX,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AACb,CAAC,AAED,kCAAM,KAAK,SAAS,CAAC,MAAM,AAAC,CAAC,AAC5B,OAAO,CAAE,OAAO,CAAC,MAAM,CAAC,YAAY,AACrC,CAAC,AAED,kCAAM,KAAK,SAAS,CAAC,MAAM,KAAK,cAAc,CAAC,AAAC,CAAC,AAChD,OAAO,CAAE,IAAI,AACd,CAAC,AAED,kCAAM,KAAK,SAAS,CAAC,MAAM,AAAC,CAAC,AAC5B,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,KAAK,CAAE,IAAI,WAAW,CAAC,AACxB,CAAC,AAED,oBAAM,CAAC,GAAG,CAAC,OAAO,cAAC,CAAC,AACnB,UAAU,CAAE,SAAS,CAAC,KAAK,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CACjE,UAAU,CAAE,SAAS,CAAC,IAAI,qBAAqB,CAAC,CAAC,IAAI,kBAAkB,CAAC,AACzE,CAAC,AAED,oBAAM,CAAC,GAAG,CAAC,MAAM,cAAC,CAAC,AAClB,UAAU,CAAE,SAAS,CAAC,KAAK,CAAC,QAAQ,CACpC,UAAU,CAAE,SAAS,CAAC,IAAI,qBAAqB,CAAC,CAAC,QAAQ,AAC1D,CAAC,AAED,MAAM,AAAC,uBAAuB,IAAI,CAAC,AAAC,CAAC,AAC5B,2BAA2B,AAAC,CAAC,oBAAM,CAAC,GAAG,CAAC,OAAO,cAAC,CAAC,AACxD,SAAS,CAAE,OAAO,MAAM,CAAC,AAC1B,CAAC,AAEO,2BAA2B,AAAC,CAAC,oBAAM,CAAC,GAAG,CAAC,MAAM,cAAC,CAAC,AACvD,SAAS,CAAE,OAAO,EAAE,CAAC,AACtB,CAAC,AACF,CAAC,AAEO,4BAA4B,AAAC,CAAC,oBAAM,CAAC,GAAG,CAAC,OAAO,cAAC,CAAC,AACzD,SAAS,CAAE,OAAO,MAAM,CAAC,AAC1B,CAAC,AAEO,4BAA4B,AAAC,CAAC,oBAAM,CAAC,GAAG,CAAC,MAAM,cAAC,CAAC,AACxD,SAAS,CAAE,OAAO,EAAE,CAAC,AACtB,CAAC"}`
};
var ColorSchemeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let button;
  $$result.css.add(css$d);
  return `<button disabled class="${"svelte-92cdu7"}"${add_attribute("this", button, 0)}><span class="${"visually-hidden"}">Toggle color scheme</span>

	<svg aria-hidden="${"true"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"-90 -90 180 180"}" width="${"1em"}" height="${"1em"}" class="${"svelte-92cdu7"}"><defs><clipPath id="${"clip-path-toggle"}"><circle r="${"90"}"></circle></clipPath></defs><circle fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"10"}" r="${"85"}"></circle><g clip-path="${"url(#clip-path-toggle)"}"><g transform="${"translate(0 90)"}"><g class="${"scale svelte-92cdu7"}"><g class="${"rotate svelte-92cdu7"}"><g transform="${"translate(0 -90)"}"><g transform="${"scale(-1 1)"}"><g class="${"rotate svelte-92cdu7"}"><g transform="${"scale(-1 1)"}"><g fill="${"currentColor"}" stroke="${"none"}"><circle r="${"22"}"></circle><circle transform="${"translate(0 41)"}" r="${"9"}"></circle><circle transform="${"rotate(45) translate(0 41)"}" r="${"9"}"></circle><circle transform="${"rotate(90) translate(0 41)"}" r="${"9"}"></circle><circle transform="${"rotate(135) translate(0 41)"}" r="${"9"}"></circle><circle transform="${"rotate(180) translate(0 41)"}" r="${"9"}"></circle><circle transform="${"rotate(225) translate(0 41)"}" r="${"9"}"></circle><circle transform="${"rotate(270) translate(0 41)"}" r="${"9"}"></circle><circle transform="${"rotate(315) translate(0 41)"}" r="${"9"}"></circle></g></g></g></g></g><g transform="${"translate(0 90)"}"><g transform="${"scale(-1 1)"}"><g class="${"rotate svelte-92cdu7"}"><g transform="${"scale(-1 1)"}"><g class="${"scale svelte-92cdu7"}"><g fill="${"currentColor"}" stroke="${"none"}"><path d="${"M-5.435-27.43A28 28 0 000 28.02 28 28 0 0027.435 5.45 28 28 0 0122 6.019a28 28 0 01-27.435-33.43z"}"></path></g></g></g></g></g></g></g></g></g></g></svg>
</button>`;
});
var css$c = {
  code: "div.svelte-10hhl8o{width:90vw;width:var(--width);max-width:42rem;max-width:var(--max-width);margin:0 auto;padding:0.5rem 0;display:flex;align-items:center}div.svelte-10hhl8o>:last-child{margin-left:auto;flex-shrink:0}",
  map: `{"version":3,"file":"Starter.svelte","sources":["Starter.svelte"],"sourcesContent":["<script>\\r\\n\\timport Breadcrumbs from '$lib/components/Breadcrumbs.svelte';\\r\\n\\timport ColorSchemeToggle from '$lib/components/ColorSchemeToggle.svelte';\\r\\n<\/script>\\r\\n\\r\\n<div>\\r\\n\\t<Breadcrumbs />\\r\\n\\t<ColorSchemeToggle />\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\tdiv {\\r\\n\\t\\twidth: 90vw;\\r\\n\\t\\twidth: var(--width);\\r\\n\\t\\tmax-width: 42rem;\\r\\n\\t\\tmax-width: var(--max-width);\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t\\tpadding: 0.5rem 0;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t}\\r\\n\\r\\n\\tdiv > :global(:last-child) {\\r\\n\\t\\tmargin-left: auto;\\r\\n\\t\\tflex-shrink: 0;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAWC,GAAG,eAAC,CAAC,AACJ,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,IAAI,WAAW,CAAC,CAC3B,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,MAAM,CAAC,CAAC,CACjB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,AACpB,CAAC,AAED,kBAAG,CAAW,WAAW,AAAE,CAAC,AAC3B,WAAW,CAAE,IAAI,CACjB,WAAW,CAAE,CAAC,AACf,CAAC"}`
};
var Starter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$c);
  return `<div class="${"svelte-10hhl8o"}">${validate_component(Breadcrumbs, "Breadcrumbs").$$render($$result, {}, {}, {})}
	${validate_component(ColorSchemeToggle, "ColorSchemeToggle").$$render($$result, {}, {}, {})}
</div>`;
});
var css$b = {
  code: `footer.svelte-1xep1u4.svelte-1xep1u4{--animation-duration:2s;--animation-timing-function:var(--ease-in-out-sine);text-align:center;padding:2em 1em 1em;color:hsl(215, 10%, 98%);color:var(--frappe-grey-10);background:hsl(215, 22%, 5%);background:var(--frappe-grey-0);background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/svg%3E');background-size:20px;position:relative}footer.svelte-1xep1u4.svelte-1xep1u4::before{content:'';position:absolute;left:0%;bottom:100%;width:100%;height:20px;background:inherit;background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/svg%3E');background-size:20px;-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');-webkit-mask-size:100px 40px;mask-size:100px 40px;-webkit-mask-position:50% 0;mask-position:50% 0}.webfonts footer.svelte-1xep1u4 a.svelte-1xep1u4{font-family:JosefinSansBold, sans-serif}footer.svelte-1xep1u4 a.svelte-1xep1u4{padding:0.25em 0;border:initial;text-decoration:none;font-weight:700;border-bottom:0.1em solid hsl(340, 90%, 55%);border-bottom:0.1em solid var(--primary-6);transition:color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:color var(--transition-duration) var(--ease-in-out-sine)}footer.svelte-1xep1u4 a.svelte-1xep1u4:hover,footer.svelte-1xep1u4 a.svelte-1xep1u4:focus{color:hsl(340, 90%, 55%);color:var(--primary-6)}footer.svelte-1xep1u4 a.svelte-1xep1u4:focus{outline:none}footer.svelte-1xep1u4 a.svelte-1xep1u4::before,footer.svelte-1xep1u4 a.svelte-1xep1u4::after{content:'';position:absolute;top:0%;left:50%;transform:translate(-50%, -50%);margin-top:-8px}footer.svelte-1xep1u4 a.svelte-1xep1u4::before{width:3.5em;height:3.5em;color:hsl(215, 22%, 5%);color:var(--frappe-grey-0);background:hsl(215, 10%, 98%);background:var(--frappe-grey-10);border:0.4em solid currentColor;border-radius:50%;transition:color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:color var(--transition-duration) var(--ease-in-out-sine)}footer.svelte-1xep1u4 a.svelte-1xep1u4::after{transform:translate(-50%, -50%) scale(1);width:1.5em;height:1.5em;background:hsl(340, 90%, 55%);background:var(--primary-6);border-radius:50%;transition:background 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:background var(--transition-duration) var(--ease-in-out-sine)}@supports ((-webkit-mask-image: url()) or (mask-image: url())){footer.svelte-1xep1u4 a.svelte-1xep1u4::after{border-radius:initial;-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"%3E%3Cpath d="M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0" /%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"%3E%3Cpath d="M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0" /%3E%3C/g%3E%3C/svg%3E')}}footer.svelte-1xep1u4 a.svelte-1xep1u4::after{animation:svelte-1xep1u4-heart-beat 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;animation:svelte-1xep1u4-heart-beat var(--animation-duration) var(--animation-timing-function) infinite;animation-play-state:paused}@keyframes svelte-1xep1u4-heart-beat{10%,30%{transform:translate(-50%, -50%) scale(0.7)}0%,20%,40%{transform:translate(-50%, -50%) scale(1)}}footer.svelte-1xep1u4 a.svelte-1xep1u4:hover::before,footer.svelte-1xep1u4 a.svelte-1xep1u4:focus::before{color:hsl(340, 90%, 55%);color:var(--primary-6)}@media(prefers-reduced-motion: no-preference){footer.svelte-1xep1u4 a.svelte-1xep1u4:hover::after,footer.svelte-1xep1u4 a.svelte-1xep1u4:focus::after{animation-play-state:running}}`,
  map: `{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<footer>\\r\\n\\t<a href=\\"https://twitter.com/borntofrappe\\">borntofrappe</a>\\r\\n</footer>\\r\\n\\r\\n<style>\\r\\n\\tfooter {\\r\\n\\t\\t--animation-duration: 2s;\\r\\n\\t\\t--animation-timing-function: var(--ease-in-out-sine);\\r\\n\\t\\ttext-align: center;\\r\\n\\t\\tpadding: 2em 1em 1em;\\r\\n\\t\\tcolor: hsl(215, 10%, 98%);\\r\\n\\t\\tcolor: var(--frappe-grey-10);\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t\\tposition: relative;\\r\\n\\t}\\r\\n\\r\\n\\tfooter::before {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tleft: 0%;\\r\\n\\t\\tbottom: 100%;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 20px;\\r\\n\\t\\tbackground: inherit;\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t-webkit-mask-size: 100px 40px;\\r\\n\\t\\tmask-size: 100px 40px;\\r\\n\\t\\t-webkit-mask-position: 50% 0;\\r\\n\\t\\tmask-position: 50% 0;\\r\\n\\t}\\r\\n\\r\\n\\t:global(.webfonts) footer a {\\r\\n\\t\\tfont-family: JosefinSansBold, sans-serif;\\r\\n\\t}\\r\\n\\r\\n\\tfooter a {\\r\\n\\t\\tpadding: 0.25em 0;\\r\\n\\t\\tborder: initial;\\r\\n\\t\\ttext-decoration: none;\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t\\tborder-bottom: 0.1em solid hsl(340, 90%, 55%);\\r\\n\\t\\tborder-bottom: 0.1em solid var(--primary-6);\\r\\n\\t\\ttransition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition: color var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t}\\r\\n\\r\\n\\tfooter a:hover,\\r\\n\\tfooter a:focus {\\r\\n\\t\\tcolor: hsl(340, 90%, 55%);\\r\\n\\t\\tcolor: var(--primary-6);\\r\\n\\t}\\r\\n\\r\\n\\tfooter a:focus {\\r\\n\\t\\toutline: none;\\r\\n\\t}\\r\\n\\r\\n\\tfooter a::before,\\r\\n\\tfooter a::after {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 0%;\\r\\n\\t\\tleft: 50%;\\r\\n\\t\\ttransform: translate(-50%, -50%);\\r\\n\\t\\tmargin-top: -8px;\\r\\n\\t}\\r\\n\\r\\n\\tfooter a::before {\\r\\n\\t\\twidth: 3.5em;\\r\\n\\t\\theight: 3.5em;\\r\\n\\t\\tcolor: hsl(215, 22%, 5%);\\r\\n\\t\\tcolor: var(--frappe-grey-0);\\r\\n\\t\\tbackground: hsl(215, 10%, 98%);\\r\\n\\t\\tbackground: var(--frappe-grey-10);\\r\\n\\t\\tborder: 0.4em solid currentColor;\\r\\n\\t\\tborder-radius: 50%;\\r\\n\\t\\ttransition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition: color var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t}\\r\\n\\r\\n\\tfooter a::after {\\r\\n\\t\\ttransform: translate(-50%, -50%) scale(1);\\r\\n\\t\\twidth: 1.5em;\\r\\n\\t\\theight: 1.5em;\\r\\n\\t\\tbackground: hsl(340, 90%, 55%);\\r\\n\\t\\tbackground: var(--primary-6);\\r\\n\\t\\tborder-radius: 50%;\\r\\n\\t\\ttransition: background 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition: background var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t}\\r\\n\\r\\n\\t@supports ((-webkit-mask-image: url()) or (mask-image: url())) {\\r\\n\\t\\tfooter a::after {\\r\\n\\t\\t\\tborder-radius: initial;\\r\\n\\t\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"currentColor\\" stroke-width=\\"10\\" stroke-linejoin=\\"round\\" stroke-linecap=\\"round\\"%3E%3Cpath d=\\"M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"currentColor\\" stroke-width=\\"10\\" stroke-linejoin=\\"round\\" stroke-linecap=\\"round\\"%3E%3Cpath d=\\"M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\tfooter a::after {\\r\\n\\t\\tanimation: heart-beat 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;\\r\\n\\t\\tanimation: heart-beat var(--animation-duration) var(--animation-timing-function) infinite;\\r\\n\\t\\tanimation-play-state: paused;\\r\\n\\t}\\r\\n\\r\\n\\t@keyframes heart-beat {\\r\\n\\t\\t10%,\\r\\n\\t\\t30% {\\r\\n\\t\\t\\ttransform: translate(-50%, -50%) scale(0.7);\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t0%,\\r\\n\\t\\t20%,\\r\\n\\t\\t40% {\\r\\n\\t\\t\\ttransform: translate(-50%, -50%) scale(1);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\tfooter a:hover::before,\\r\\n\\tfooter a:focus::before {\\r\\n\\t\\tcolor: hsl(340, 90%, 55%);\\r\\n\\t\\tcolor: var(--primary-6);\\r\\n\\t}\\r\\n\\r\\n\\t@media (prefers-reduced-motion: no-preference) {\\r\\n\\t\\tfooter a:hover::after,\\r\\n\\t\\tfooter a:focus::after {\\r\\n\\t\\t\\tanimation-play-state: running;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"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"}`
};
var Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$b);
  return `<footer class="${"svelte-1xep1u4"}"><a href="${"https://twitter.com/borntofrappe"}" class="${"svelte-1xep1u4"}">borntofrappe</a>
</footer>`;
});
var css$a = {
  code: "div.svelte-9u5b4y{min-height:100vh;display:flex;flex-direction:column}div.svelte-9u5b4y footer{margin-top:auto}",
  map: `{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<script>\\r\\n\\timport '../app.css';\\r\\n\\r\\n\\timport SkipToContent from '$lib/components/SkipToContent.svelte';\\r\\n\\timport Starter from '$lib/components/Starter.svelte';\\r\\n\\timport Footer from '$lib/components/Footer.svelte';\\r\\n<\/script>\\r\\n\\r\\n<SkipToContent />\\r\\n<div>\\r\\n\\t<Starter />\\r\\n\\r\\n\\t<slot />\\r\\n\\r\\n\\t<Footer />\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\tdiv {\\r\\n\\t\\tmin-height: 100vh;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t}\\r\\n\\r\\n\\tdiv :global(footer) {\\r\\n\\t\\tmargin-top: auto;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAkBC,GAAG,cAAC,CAAC,AACJ,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,AACvB,CAAC,AAED,iBAAG,CAAC,AAAQ,MAAM,AAAE,CAAC,AACpB,UAAU,CAAE,IAAI,AACjB,CAAC"}`
};
var _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$a);
  return `${validate_component(SkipToContent, "SkipToContent").$$render($$result, {}, {}, {})}
<div class="${"svelte-9u5b4y"}">${validate_component(Starter, "Starter").$$render($$result, {}, {}, {})}

	${slots.default ? slots.default({}) : ``}

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _layout
});
var baseUrl = "https://borntofrappe.netlify.app";
var Meta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { description } = $$props;
  let { image = "borntofrappe.png" } = $$props;
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  title = `borntofrappe${$page.path !== "/" ? $page.path.split("/").join(" / ") : ""}`;
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", description, 0)} data-svelte="svelte-1y0zfjx"><link rel="${"canonical"}" href="${escape(baseUrl) + escape($page.path)}" data-svelte="svelte-1y0zfjx"><meta property="${"og:title"}"${add_attribute("content", title, 0)} data-svelte="svelte-1y0zfjx"><meta property="${"og:description"}"${add_attribute("content", description, 0)} data-svelte="svelte-1y0zfjx"><meta property="${"og:url"}" content="${escape(baseUrl) + escape($page.path)}" data-svelte="svelte-1y0zfjx"><meta property="${"og:locale"}" content="${"en_US"}" data-svelte="svelte-1y0zfjx"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-1y0zfjx"><meta property="${"og:site_name"}" content="${"borntofrappe"}" data-svelte="svelte-1y0zfjx"><meta property="${"og:image"}" content="${escape(baseUrl) + "/images/" + escape(image)}" data-svelte="svelte-1y0zfjx"><meta property="${"og:image:alt"}"${add_attribute("content", description, 0)} data-svelte="svelte-1y0zfjx"><meta property="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-1y0zfjx"><meta property="${"twitter:title"}"${add_attribute("content", title, 0)} data-svelte="svelte-1y0zfjx"><meta property="${"twitter:description"}"${add_attribute("content", description, 0)} data-svelte="svelte-1y0zfjx"><meta property="${"twitter:site"}" content="${"@borntofrappe"}" data-svelte="svelte-1y0zfjx"><meta property="${"twitter:creator"}" content="${"@borntofrappe"}" data-svelte="svelte-1y0zfjx"><meta property="${"twitter:image"}" content="${escape(baseUrl) + "/images/" + escape(image)}" data-svelte="svelte-1y0zfjx"><meta property="${"twitter:image:alt"}"${add_attribute("content", description, 0)} data-svelte="svelte-1y0zfjx">`, ""}`;
});
var css$9 = {
  code: `body{overflow-x:hidden}header.svelte-1qenyla.svelte-1qenyla.svelte-1qenyla{width:90vw;width:var(--width);max-width:42rem;max-width:var(--max-width);margin:0 auto 20px;padding:3em 0;color:hsl(215, 10%, 98%);color:var(--frappe-grey-10);background:hsl(215, 22%, 5%);background:var(--frappe-grey-0);position:relative;z-index:5}header.svelte-1qenyla>.svelte-1qenyla+.svelte-1qenyla{margin-top:0.75em}header.svelte-1qenyla.svelte-1qenyla.svelte-1qenyla::before{content:'';position:absolute;top:0%;left:50%;width:100vw;height:100%;transform:translateX(-50%);background:inherit;background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');background-size:20px;background-position:0 100%;z-index:-5}header.svelte-1qenyla.svelte-1qenyla.svelte-1qenyla::after{content:'';position:absolute;top:100%;left:50%;width:100vw;height:20px;transform:translateX(-50%) scaleY(-1);background:hsl(215, 22%, 5%);background:var(--frappe-grey-0);background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');background-size:20px;-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');-webkit-mask-size:100px 40px;mask-size:100px 40px;-webkit-mask-position:50% 0;mask-position:50% 0;z-index:-5}header.svelte-1qenyla h1.svelte-1qenyla.svelte-1qenyla{color:inherit}@supports (display: grid){body{overflow-x:initial}header.svelte-1qenyla.svelte-1qenyla.svelte-1qenyla{width:100%;max-width:initial;margin:0 initial 20px;display:grid;grid-template-columns:1fr minmax(auto, 42rem) 1fr;grid-template-columns:1fr minmax(auto, var(--max-width)) 1fr;gap:0 5vw;background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');background-size:20px;background-position:0 100%}header.svelte-1qenyla>.svelte-1qenyla.svelte-1qenyla{grid-column:2}header.svelte-1qenyla.svelte-1qenyla.svelte-1qenyla::before{content:var(--illustration);top:initial;left:initial;background:initial;transform:initial;grid-column:2/3;grid-row:3;justify-self:end;width:6em;height:6em;z-index:5}header.svelte-1qenyla.svelte-1qenyla.svelte-1qenyla::after{left:0%;width:100%;transform:scaleY(-1)}}`,
  map: `{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script>\\r\\n\\texport let title;\\r\\n\\texport let body;\\r\\n\\texport let illustration;\\r\\n<\/script>\\r\\n\\r\\n<header style=\\"--illustration: {illustration}\\">\\r\\n\\t<h1>{title}</h1>\\r\\n\\t<p>{body}</p>\\r\\n</header>\\r\\n\\r\\n<style>\\r\\n\\t:global(body) {\\r\\n\\t\\toverflow-x: hidden;\\r\\n\\t}\\r\\n\\r\\n\\theader {\\r\\n\\t\\twidth: 90vw;\\r\\n\\t\\twidth: var(--width);\\r\\n\\t\\tmax-width: 42rem;\\r\\n\\t\\tmax-width: var(--max-width);\\r\\n\\t\\tmargin: 0 auto 20px;\\r\\n\\t\\tpadding: 3em 0;\\r\\n\\t\\tcolor: hsl(215, 10%, 98%);\\r\\n\\t\\tcolor: var(--frappe-grey-10);\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tz-index: 5;\\r\\n\\t}\\r\\n\\r\\n\\theader > * + * {\\r\\n\\t\\tmargin-top: 0.75em;\\r\\n\\t}\\r\\n\\r\\n\\theader::before {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 0%;\\r\\n\\t\\tleft: 50%;\\r\\n\\t\\twidth: 100vw;\\r\\n\\t\\theight: 100%;\\r\\n\\t\\ttransform: translateX(-50%);\\r\\n\\t\\tbackground: inherit;\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg opacity=\\"0.5\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t\\tbackground-position: 0 100%;\\r\\n\\t\\tz-index: -5;\\r\\n\\t}\\r\\n\\r\\n\\theader::after {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 100%;\\r\\n\\t\\tleft: 50%;\\r\\n\\t\\twidth: 100vw;\\r\\n\\t\\theight: 20px;\\r\\n\\t\\ttransform: translateX(-50%) scaleY(-1);\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg opacity=\\"0.5\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t-webkit-mask-size: 100px 40px;\\r\\n\\t\\tmask-size: 100px 40px;\\r\\n\\t\\t-webkit-mask-position: 50% 0;\\r\\n\\t\\tmask-position: 50% 0;\\r\\n\\t\\tz-index: -5;\\r\\n\\t}\\r\\n\\r\\n\\theader h1 {\\r\\n\\t\\tcolor: inherit;\\r\\n\\t}\\r\\n\\r\\n\\t@supports (display: grid) {\\r\\n\\t\\t:global(body) {\\r\\n\\t\\t\\toverflow-x: initial;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\theader {\\r\\n\\t\\t\\twidth: 100%;\\r\\n\\t\\t\\tmax-width: initial;\\r\\n\\t\\t\\tmargin: 0 initial 20px;\\r\\n\\t\\t\\tdisplay: grid;\\r\\n\\t\\t\\tgrid-template-columns: 1fr minmax(auto, 42rem) 1fr;\\r\\n\\t\\t\\tgrid-template-columns: 1fr minmax(auto, var(--max-width)) 1fr;\\r\\n\\t\\t\\tgap: 0 5vw;\\r\\n\\t\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg opacity=\\"0.5\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\tbackground-size: 20px;\\r\\n\\t\\t\\tbackground-position: 0 100%;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\theader > * {\\r\\n\\t\\t\\tgrid-column: 2;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\theader::before {\\r\\n\\t\\t\\tcontent: var(--illustration);\\r\\n\\t\\t\\ttop: initial;\\r\\n\\t\\t\\tleft: initial;\\r\\n\\t\\t\\tbackground: initial;\\r\\n\\t\\t\\ttransform: initial;\\r\\n\\t\\t\\tgrid-column: 2/3;\\r\\n\\t\\t\\tgrid-row: 3;\\r\\n\\t\\t\\tjustify-self: end;\\r\\n\\t\\t\\twidth: 6em;\\r\\n\\t\\t\\theight: 6em;\\r\\n\\t\\t\\tz-index: 5;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\theader::after {\\r\\n\\t\\t\\tleft: 0%;\\r\\n\\t\\t\\twidth: 100%;\\r\\n\\t\\t\\ttransform: scaleY(-1);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"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"}`
};
var Header$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { body } = $$props;
  let { illustration } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.illustration === void 0 && $$bindings.illustration && illustration !== void 0)
    $$bindings.illustration(illustration);
  $$result.css.add(css$9);
  return `<header style="${"--illustration: " + escape(illustration)}" class="${"svelte-1qenyla"}"><h1 class="${"svelte-1qenyla"}">${escape(title)}</h1>
	<p class="${"svelte-1qenyla"}">${escape(body)}</p>
</header>`;
});
var css$8 = {
  code: `main#content.svelte-x1dcun.svelte-x1dcun.svelte-x1dcun{width:90vw;width:var(--width);max-width:42rem;max-width:var(--max-width);margin:0 auto;padding-top:2.5rem;padding-bottom:4rem}main#content.svelte-x1dcun>.svelte-x1dcun+.svelte-x1dcun{margin-top:0.75em}.code.svelte-x1dcun>span.svelte-x1dcun.svelte-x1dcun,.code.svelte-x1dcun pre.svelte-x1dcun.svelte-x1dcun{border-radius:0.4rem;padding:0.8rem 1rem}.code.svelte-x1dcun>span.svelte-x1dcun.svelte-x1dcun{font-weight:700;color:hsl(215, 10%, 98%);color:var(--frappe-grey-10);background:hsl(215, 22%, 5%);background:var(--frappe-grey-0);background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');background-size:20px;border-bottom-left-radius:0;border-bottom-right-radius:0;transition:color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:color var(--transition-duration) var(--ease-in-out-sine);display:flex;align-items:flex-end}.code.svelte-x1dcun>span svg.svelte-x1dcun.svelte-x1dcun{width:1.25em;height:auto;margin-right:0.5rem}.code.svelte-x1dcun:hover>span.svelte-x1dcun.svelte-x1dcun{color:hsl(340, 90%, 55%);color:var(--primary-6)}.code.svelte-x1dcun pre.svelte-x1dcun.svelte-x1dcun{margin-top:0;line-height:1.75;color:hsl(214, 15%, 88%);color:var(--frappe-grey-9);background:hsl(210, 20%, 12%);background:var(--frappe-grey-1);border-top-left-radius:0;border-top-right-radius:0}.code.svelte-x1dcun pre.svelte-x1dcun.svelte-x1dcun{overflow-x:auto}.code.svelte-x1dcun pre.svelte-x1dcun.svelte-x1dcun::-webkit-scrollbar{height:0.4rem}.code.svelte-x1dcun pre.svelte-x1dcun.svelte-x1dcun::-webkit-scrollbar-track{background:hsl(215, 22%, 5%);background:var(--frappe-grey-0)}.code.svelte-x1dcun pre.svelte-x1dcun.svelte-x1dcun::-webkit-scrollbar-thumb{background:hsl(340, 90%, 55%);background:var(--primary-6);border-radius:0.2rem}@supports ((-webkit-mask-image: url()) or (mask-image: url())){.webfonts a.relative.svelte-x1dcun.svelte-x1dcun.svelte-x1dcun{font-family:JosefinSansBold, sans-serif}a.relative.svelte-x1dcun.svelte-x1dcun.svelte-x1dcun{--transition-duration:0.4s;font-weight:700;text-decoration:none;display:inline-block;position:relative;padding-bottom:0.5em;margin:0.8em 0 1.3em;z-index:5}a.relative.svelte-x1dcun.svelte-x1dcun.svelte-x1dcun:focus{outline:none}a.relative.svelte-x1dcun.svelte-x1dcun.svelte-x1dcun::before,a.relative.svelte-x1dcun.svelte-x1dcun.svelte-x1dcun::after{content:'';position:absolute;top:100%;background:currentColor;transition:transform var(--transition-duration) var(--ease-in-out-sine);pointer-events:none;z-index:-5}a.relative.svelte-x1dcun.svelte-x1dcun.svelte-x1dcun::before{left:0%;width:100%;height:2px;transform-origin:0% 50%;transform:translate(0%, -50%) scaleX(0)}a.relative.svelte-x1dcun.svelte-x1dcun.svelte-x1dcun:hover::before,a.relative.svelte-x1dcun.svelte-x1dcun.svelte-x1dcun:focus::before{transform:translate(0%, -50%) scaleX(1)}a.relative.svelte-x1dcun.svelte-x1dcun.svelte-x1dcun::after{left:50%;width:100%;height:1.7em;transform:translate(-50%, -50%);-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"%3E%3Cg transform="scale(0.8) rotate(90)"%3E%3Cpath stroke-width="8" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" /%3E%3Cg stroke-width="7"%3E%3Cpath d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /%3E%3Cpath transform="scale(-1 1)" d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /%3E%3Cpath d="M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5" /%3E%3Ccircle r="9" cy="-11" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"%3E%3Cg transform="scale(0.8) rotate(90)"%3E%3Cpath stroke-width="8" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" /%3E%3Cg stroke-width="7"%3E%3Cpath d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /%3E%3Cpath transform="scale(-1 1)" d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /%3E%3Cpath d="M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5" /%3E%3Ccircle r="9" cy="-11" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}a.relative.svelte-x1dcun.svelte-x1dcun.svelte-x1dcun:hover::after,a.relative.svelte-x1dcun.svelte-x1dcun.svelte-x1dcun:focus::after{transform:translate(50%, -50%)}}`,
  map: `{"version":3,"file":"__error.svelte","sources":["__error.svelte"],"sourcesContent":["<script context=\\"module\\">\\r\\n\\texport function load({ error, status }) {\\r\\n\\t\\treturn {\\r\\n\\t\\t\\tprops: {\\r\\n\\t\\t\\t\\terror,\\r\\n\\t\\t\\t\\tstatus\\r\\n\\t\\t\\t}\\r\\n\\t\\t};\\r\\n\\t}\\r\\n<\/script>\\r\\n\\r\\n<script>\\r\\n\\timport Meta from '$lib/components/Meta.svelte';\\r\\n\\timport Header from '$lib/components/routes/Header.svelte';\\r\\n\\r\\n\\texport let error;\\r\\n\\texport let status;\\r\\n<\/script>\\r\\n\\r\\n<Meta description=\\"Error page with a status code {status}.\\" />\\r\\n\\r\\n<Header\\r\\n\\ttitle={status}\\r\\n\\tbody=\\"I tried my best, but something quite unexpected has happened.\\"\\r\\n\\tillustration={\`url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-70 -90 140 140\\"%3E%3Cg fill=\\"none\\" stroke=\\"hsl(215, 10%25, 97%25)\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cg transform=\\"translate(0 -80) scale(0.25)\\"%3E%3Cg transform=\\"scale(0.75)\\"%3E%3Cg fill=\\"none\\" stroke-width=\\"16\\"%3E%3Cg transform=\\"translate(0 13.5)\\"%3E%3Cpath d=\\"M 34 0 h -68\\"/%3E%3Cpath transform=\\"rotate(45)\\" d=\\"M 40 0 h -80\\"/%3E%3Cpath transform=\\"rotate(-45)\\" d=\\"M 40 0 h -80\\"/%3E%3C/g%3E%3C/g%3E%3Cg fill=\\"hsl(215, 10%25, 97%25)\\" stroke-width=\\"8\\"%3E%3Cpath d=\\"M -0 -46 a 17 17 0 0 1 17 17 h -34 a 17 17 0 0 1 17 -17\\" /%3E%3Cpath d=\\"M -0 -10 h 25 v 25 a 25 25 0 0 1 -50 0 v -25 z\\" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"%3E%3Cg fill=\\"hsl(215, 10%25, 97%25)\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10\\" /%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10\\" /%3E%3Cpath d=\\"M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5\\" /%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5\\" /%3E%3C/g%3E%3Cg stroke=\\"none\\"%3E%3Ccircle fill=\\"none\\" r=\\"25\\" cy=\\"-24\\"/%3E%3Cg fill=\\"hsl(215, 10%25, 97%25)\\"%3E%3Cpath d=\\"M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14\\"/%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14\\"/%3E%3Cpath d=\\"M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0\\" /%3E%3Cpath d=\\"M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0\\" /%3E%3Cpath d=\\"M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5\\" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E')\`}\\r\\n/>\\r\\n\\r\\n<main id=\\"content\\">\\r\\n\\t<p>Here's the error message for context.</p>\\r\\n\\r\\n\\t<div class=\\"code\\">\\r\\n\\t\\t<span>\\r\\n\\t\\t\\t<svg\\r\\n\\t\\t\\t\\taria-hidden=\\"true\\"\\r\\n\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\r\\n\\t\\t\\t\\tviewBox=\\"-50 -50 100 100\\"\\r\\n\\t\\t\\t\\twidth=\\"1em\\"\\r\\n\\t\\t\\t\\theight=\\"1em\\"\\r\\n\\t\\t\\t>\\r\\n\\t\\t\\t\\t<path\\r\\n\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\r\\n\\t\\t\\t\\t\\tstroke=\\"none\\"\\r\\n\\t\\t\\t\\t\\td=\\"M-40.5-33v16h.5v.5h80v-16h-.5v-.5h-80zm8.5.5a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0A4.5 4.5 0 01-1.5-28 4.5 4.5 0 01-6-23.5a4.5 4.5 0 01-4.5-4.5A4.5 4.5 0 01-6-32.5z\\"\\r\\n\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\">\\r\\n\\t\\t\\t\\t\\t<path d=\\"M-45-37.5h90v75h-90z\\" stroke-width=\\"10\\" />\\r\\n\\t\\t\\t\\t\\t<g stroke-width=\\"8\\">\\r\\n\\t\\t\\t\\t\\t\\t<path d=\\"M5-4L-5 21M-18 0l-8 8 8 8M18 0l8 8-8 8\\" />\\r\\n\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t</svg>\\r\\n\\t\\t</span>\\r\\n\\t\\t<pre><code>{error.message}</code></pre>\\r\\n\\t</div>\\r\\n\\r\\n\\t<p>\\r\\n\\t\\tIf you think this is a mistake I could fix, please consider filing an issue\\r\\n\\t\\t<a\\r\\n\\t\\t\\thref=\\"https://github.com/borntofrappe/borntofrappe/issues/new?title=Status%20code%20{status}&body={error.message}&labels=bug\\"\\r\\n\\t\\t\\t>on github</a\\r\\n\\t\\t>.\\r\\n\\t</p>\\r\\n\\r\\n\\t<p>\\r\\n\\t\\tIf you need some guidance,\\r\\n\\t\\t<em>home is always a good place to start.</em>\\r\\n\\t</p>\\r\\n\\r\\n\\t<a class=\\"relative\\" href=\\"/\\">Go to home page</a>\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n\\tmain#content {\\r\\n\\t\\twidth: 90vw;\\r\\n\\t\\twidth: var(--width);\\r\\n\\t\\tmax-width: 42rem;\\r\\n\\t\\tmax-width: var(--max-width);\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t\\tpadding-top: 2.5rem;\\r\\n\\t\\tpadding-bottom: 4rem;\\r\\n\\t}\\r\\n\\r\\n\\tmain#content > * + * {\\r\\n\\t\\tmargin-top: 0.75em;\\r\\n\\t}\\r\\n\\r\\n\\t/* components/code */\\r\\n\\t.code > span,\\r\\n\\t.code pre {\\r\\n\\t\\tborder-radius: 0.4rem;\\r\\n\\t\\tpadding: 0.8rem 1rem;\\r\\n\\t}\\r\\n\\r\\n\\t.code > span {\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t\\tcolor: hsl(215, 10%, 98%);\\r\\n\\t\\tcolor: var(--frappe-grey-10);\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg opacity=\\"0.5\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t\\tborder-bottom-left-radius: 0;\\r\\n\\t\\tborder-bottom-right-radius: 0;\\r\\n\\t\\ttransition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition: color var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: flex-end;\\r\\n\\t}\\r\\n\\r\\n\\t.code > span svg {\\r\\n\\t\\twidth: 1.25em;\\r\\n\\t\\theight: auto;\\r\\n\\t\\tmargin-right: 0.5rem;\\r\\n\\t}\\r\\n\\r\\n\\t.code:hover > span {\\r\\n\\t\\tcolor: hsl(340, 90%, 55%);\\r\\n\\t\\tcolor: var(--primary-6);\\r\\n\\t}\\r\\n\\r\\n\\t.code pre {\\r\\n\\t\\tmargin-top: 0;\\r\\n\\t\\tline-height: 1.75;\\r\\n\\t\\tcolor: hsl(214, 15%, 88%);\\r\\n\\t\\tcolor: var(--frappe-grey-9);\\r\\n\\t\\tbackground: hsl(210, 20%, 12%);\\r\\n\\t\\tbackground: var(--frappe-grey-1);\\r\\n\\t\\tborder-top-left-radius: 0;\\r\\n\\t\\tborder-top-right-radius: 0;\\r\\n\\t}\\r\\n\\r\\n\\t.code pre {\\r\\n\\t\\toverflow-x: auto;\\r\\n\\t}\\r\\n\\r\\n\\t.code pre::-webkit-scrollbar {\\r\\n\\t\\theight: 0.4rem;\\r\\n\\t}\\r\\n\\r\\n\\t.code pre::-webkit-scrollbar-track {\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t}\\r\\n\\r\\n\\t.code pre::-webkit-scrollbar-thumb {\\r\\n\\t\\tbackground: hsl(340, 90%, 55%);\\r\\n\\t\\tbackground: var(--primary-6);\\r\\n\\t\\tborder-radius: 0.2rem;\\r\\n\\t}\\r\\n\\r\\n\\t/* components/relative link */\\r\\n\\t@supports ((-webkit-mask-image: url()) or (mask-image: url())) {\\r\\n\\t\\t:global(.webfonts) a.relative {\\r\\n\\t\\t\\tfont-family: JosefinSansBold, sans-serif;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\ta.relative {\\r\\n\\t\\t\\t--transition-duration: 0.4s;\\r\\n\\t\\t\\tfont-weight: 700;\\r\\n\\t\\t\\ttext-decoration: none;\\r\\n\\t\\t\\tdisplay: inline-block;\\r\\n\\t\\t\\tposition: relative;\\r\\n\\t\\t\\tpadding-bottom: 0.5em;\\r\\n\\t\\t\\tmargin: 0.8em 0 1.3em;\\r\\n\\t\\t\\tz-index: 5;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\ta.relative:focus {\\r\\n\\t\\t\\toutline: none;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\ta.relative::before,\\r\\n\\t\\ta.relative::after {\\r\\n\\t\\t\\tcontent: '';\\r\\n\\t\\t\\tposition: absolute;\\r\\n\\t\\t\\ttop: 100%;\\r\\n\\t\\t\\tbackground: currentColor;\\r\\n\\t\\t\\ttransition: transform var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t\\t\\tpointer-events: none;\\r\\n\\t\\t\\tz-index: -5;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\ta.relative::before {\\r\\n\\t\\t\\tleft: 0%;\\r\\n\\t\\t\\twidth: 100%;\\r\\n\\t\\t\\theight: 2px;\\r\\n\\t\\t\\ttransform-origin: 0% 50%;\\r\\n\\t\\t\\ttransform: translate(0%, -50%) scaleX(0);\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\ta.relative:hover::before,\\r\\n\\t\\ta.relative:focus::before {\\r\\n\\t\\t\\ttransform: translate(0%, -50%) scaleX(1);\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\ta.relative::after {\\r\\n\\t\\t\\tleft: 50%;\\r\\n\\t\\t\\twidth: 100%;\\r\\n\\t\\t\\theight: 1.7em;\\r\\n\\t\\t\\ttransform: translate(-50%, -50%);\\r\\n\\t\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"none\\" stroke=\\"currentColor\\" stroke-linejoin=\\"round\\" stroke-linecap=\\"round\\"%3E%3Cg transform=\\"scale(0.8) rotate(90)\\"%3E%3Cpath stroke-width=\\"8\\" d=\\"M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52\\" /%3E%3Cg stroke-width=\\"7\\"%3E%3Cpath d=\\"M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21\\" /%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21\\" /%3E%3Cpath d=\\"M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5\\" /%3E%3Ccircle r=\\"9\\" cy=\\"-11\\" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"none\\" stroke=\\"currentColor\\" stroke-linejoin=\\"round\\" stroke-linecap=\\"round\\"%3E%3Cg transform=\\"scale(0.8) rotate(90)\\"%3E%3Cpath stroke-width=\\"8\\" d=\\"M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52\\" /%3E%3Cg stroke-width=\\"7\\"%3E%3Cpath d=\\"M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21\\" /%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21\\" /%3E%3Cpath d=\\"M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5\\" /%3E%3Ccircle r=\\"9\\" cy=\\"-11\\" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\t-webkit-mask-repeat: no-repeat;\\r\\n\\t\\t\\tmask-repeat: no-repeat;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\ta.relative:hover::after,\\r\\n\\t\\ta.relative:focus::after {\\r\\n\\t\\t\\ttransform: translate(50%, -50%);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"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"}`
};
function load$2({ error: error2, status }) {
  return { props: { error: error2, status } };
}
var _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { error: error2 } = $$props;
  let { status } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
    $$bindings.error(error2);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  $$result.css.add(css$8);
  return `${validate_component(Meta, "Meta").$$render($$result, {
    description: "Error page with a status code " + status + "."
  }, {}, {})}

${validate_component(Header$1, "Header").$$render($$result, {
    title: status,
    body: "I tried my best, but something quite unexpected has happened.",
    illustration: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -90 140 140"%3E%3Cg fill="none" stroke="hsl(215, 10%25, 97%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cg transform="translate(0 -80) scale(0.25)"%3E%3Cg transform="scale(0.75)"%3E%3Cg fill="none" stroke-width="16"%3E%3Cg transform="translate(0 13.5)"%3E%3Cpath d="M 34 0 h -68"/%3E%3Cpath transform="rotate(45)" d="M 40 0 h -80"/%3E%3Cpath transform="rotate(-45)" d="M 40 0 h -80"/%3E%3C/g%3E%3C/g%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke-width="8"%3E%3Cpath d="M -0 -46 a 17 17 0 0 1 17 17 h -34 a 17 17 0 0 1 17 -17" /%3E%3Cpath d="M -0 -10 h 25 v 25 a 25 25 0 0 1 -50 0 v -25 z" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke="none"%3E%3Cpath d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath transform="scale(-1 1)" d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3Cpath transform="scale(-1 1)" d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3C/g%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(215, 10%25, 97%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
  }, {}, {})}

<main id="${"content"}" class="${"svelte-x1dcun"}"><p class="${"svelte-x1dcun"}">Here&#39;s the error message for context.</p>

	<div class="${"code svelte-x1dcun"}"><span class="${"svelte-x1dcun"}"><svg aria-hidden="${"true"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"-50 -50 100 100"}" width="${"1em"}" height="${"1em"}" class="${"svelte-x1dcun"}"><path fill="${"currentColor"}" stroke="${"none"}" d="${"M-40.5-33v16h.5v.5h80v-16h-.5v-.5h-80zm8.5.5a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0A4.5 4.5 0 01-1.5-28 4.5 4.5 0 01-6-23.5a4.5 4.5 0 01-4.5-4.5A4.5 4.5 0 01-6-32.5z"}"></path><g fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path d="${"M-45-37.5h90v75h-90z"}" stroke-width="${"10"}"></path><g stroke-width="${"8"}"><path d="${"M5-4L-5 21M-18 0l-8 8 8 8M18 0l8 8-8 8"}"></path></g></g></svg></span>
		<pre class="${"svelte-x1dcun"}"><code>${escape(error2.message)}</code></pre></div>

	<p class="${"svelte-x1dcun"}">If you think this is a mistake I could fix, please consider filing an issue
		<a href="${"https://github.com/borntofrappe/borntofrappe/issues/new?title=Status%20code%20" + escape(status) + "&body=" + escape(error2.message) + "&labels=bug"}">on github</a>.
	</p>

	<p class="${"svelte-x1dcun"}">If you need some guidance,
		<em>home is always a good place to start.</em></p>

	<a class="${"relative svelte-x1dcun"}" href="${"/"}">Go to home page</a>
</main>`;
});
var __error = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _error,
  load: load$2
});
var format2 = (date) => {
  if (Intl.DateTimeFormat) {
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date);
  }
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};
var css$7 = {
  code: `header.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:0.5rem;padding:2.5em 0;margin-bottom:20px;color:var(--frappe-grey-10);background:hsl(215, 22%, 5%);background:var(--frappe-grey-0);background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/svg%3E');background-size:20px;background-position:0 100%;position:relative;z-index:0;--animation-duration:12s}header.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv::after{content:'';position:absolute;top:100%;left:0%;width:100%;height:20px;transform:scaleY(-1);background:hsl(215, 22%, 5%);background:var(--frappe-grey-0);background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');background-size:20px;-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');-webkit-mask-size:100px 40px;mask-size:100px 40px;-webkit-mask-position:50% 0;mask-position:50% 0;z-index:-5}header.svelte-1c47yqv>.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv{width:90vw;width:var(--width);max-width:30rem}header.svelte-1c47yqv nav.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv{--transition-duration:0.4s;order:-1;padding:0.5rem}header.svelte-1c47yqv nav.svelte-1c47yqv>svg.svelte-1c47yqv.svelte-1c47yqv{width:100%;height:auto}header.svelte-1c47yqv nav>svg #borntofrappe.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv{transition:transform 0.4s cubic-bezier(0.68, -0.5, 0.265, 1.55),\r
			color 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:transform var(--transition-duration) var(--ease-in-out-back),\r
			color var(--transition-duration) var(--ease-in-out-sine)}header.svelte-1c47yqv nav>svg #borntofrappe.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv:hover{color:hsl(340, 90%, 55%);color:var(--primary-6);transform:scale(1.25) rotate(-10deg)}header.svelte-1c47yqv nav>svg a.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv{transition:transform 0.4s cubic-bezier(0.68, -0.5, 0.265, 1.55),\r
			color 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:transform var(--transition-duration) var(--ease-in-out-back),\r
			color var(--transition-duration) var(--ease-in-out-sine);transform:scale(0.85)}header.svelte-1c47yqv nav>svg a .text.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv{font-family:'Inconsolata', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;transform:scale(0);transition:transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);transition:transform var(--transition-duration) var(--ease-out-cubic)}header.svelte-1c47yqv nav>svg a.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv:hover,header.svelte-1c47yqv nav>svg a.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv:focus,header.svelte-1c47yqv nav>svg a:hover .text.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv,header.svelte-1c47yqv nav>svg a:focus .text.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv{transform:scale(1)}header.svelte-1c47yqv nav>svg a.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv:focus{outline:none}header.svelte-1c47yqv div.svelte-1c47yqv>.svelte-1c47yqv+.svelte-1c47yqv{margin-top:0.5em}header.svelte-1c47yqv div p.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv{line-height:1.75}header.svelte-1c47yqv>.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv:nth-last-child(2){position:relative}header.svelte-1c47yqv>.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv:nth-last-child(2)::after{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke="none"%3E%3Cpath d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath transform="scale(-1 1)" d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3Cpath transform="scale(-1 1)" d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3C/g%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(215, 10%25, 97%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');position:absolute;top:100%;left:50%;width:8em;height:8em;transform:translateX(-50%) rotate(45deg);animation:svelte-1c47yqv-rotate-astronaut 12s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;animation:svelte-1c47yqv-rotate-astronaut var(--animation-duration) var(--ease-in-out-sine) infinite;animation-play-state:paused}header.observed.svelte-1c47yqv>.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv:nth-last-child(2)::after{animation-play-state:running}@keyframes svelte-1c47yqv-rotate-astronaut{20%{transform:translateX(-50%) rotate(15deg)}40%,100%{transform:translateX(-50%) rotate(45deg)}}@media(prefers-reduced-motion: reduce){header.observed.svelte-1c47yqv>.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv:nth-last-child(2)::after{animation-play-state:paused}}header.svelte-1c47yqv h1.svelte-1c47yqv.svelte-1c47yqv.svelte-1c47yqv{color:inherit}`,
  map: `{"version":3,"file":"Hero.svelte","sources":["Hero.svelte"],"sourcesContent":["<script>\\r\\n\\timport icons from '$lib/icons.js';\\r\\n\\timport { observe } from '$lib/utils.js';\\r\\n\\r\\n\\tconst links = [\\r\\n\\t\\t{\\r\\n\\t\\t\\tname: 'codepen',\\r\\n\\t\\t\\thref: 'https://codepen.io/borntofrappe',\\r\\n\\t\\t\\tdesc: 'On CodePen I flex my muscles as a web developer, starting with little past HTML, CSS and JavaScript. The foundations of the web!'\\r\\n\\t\\t},\\r\\n\\t\\t{\\r\\n\\t\\t\\tname: 'freecodecamp',\\r\\n\\t\\t\\thref: 'https://www.freecodecamp.org/borntofrappe',\\r\\n\\t\\t\\tdesc: 'On freeCodeCamp I started my journey with HTML and CSS. This is where I earned a few certifications and where I continue growing as an endless learner.'\\r\\n\\t\\t},\\r\\n\\t\\t{\\r\\n\\t\\t\\tname: 'github',\\r\\n\\t\\t\\thref: 'https://github.com/borntofrappe',\\r\\n\\t\\t\\tdesc: \\"On Github I share the code for my projects, and even this very website. Feel free to review, fork, and improve; I'm positive you'll find plenty of room for growth.\\"\\r\\n\\t\\t},\\r\\n\\t\\t{\\r\\n\\t\\t\\tname: 'twitter',\\r\\n\\t\\t\\thref: 'https://twitter.com/borntofrappe',\\r\\n\\t\\t\\tdesc: 'On Twitter I try to share something helpful, entertaining, and perhaps even both. There are people who seem to appreciate.'\\r\\n\\t\\t}\\r\\n\\t];\\r\\n<\/script>\\r\\n\\r\\n<header class:observed={false} use:observe>\\r\\n\\t<div>\\r\\n\\t\\t<h1>Hello, World!</h1>\\r\\n\\t\\t<p>I enjoy writing code.</p>\\r\\n\\t\\t<p>With this website, I try to convince you I might be good at it as well.</p>\\r\\n\\t</div>\\r\\n\\r\\n\\t<nav aria-label=\\"borntofrappe links\\">\\r\\n\\t\\t<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-225 -225 450 450\\" width=\\"500\\" height=\\"500\\">\\r\\n\\t\\t\\t<defs>\\r\\n\\t\\t\\t\\t<path id=\\"path\\" d=\\"M 0 -32 a 32 32 0 0 1 0 64 32 32 0 0 1 0 -64\\" />\\r\\n\\t\\t\\t\\t<path id=\\"path-c\\" d=\\"M 0 39 a 39 39 0 0 1 0 -78 39 39 0 0 1 0 78\\" />\\r\\n\\t\\t\\t\\t<path id=\\"path-cc\\" d=\\"M 0 47 a 47 47 0 0 0 0 -94 47 47 0 0 0 0 94\\" />\\r\\n\\r\\n\\t\\t\\t\\t<mask id=\\"mask-text\\">\\r\\n\\t\\t\\t\\t\\t<rect x=\\"-50\\" y=\\"-50\\" width=\\"100\\" height=\\"100\\" fill=\\"hsl(0, 0%, 100%)\\" />\\r\\n\\t\\t\\t\\t\\t<use href=\\"#path\\" fill=\\"hsl(0, 0%, 0%)\\" />\\r\\n\\t\\t\\t\\t</mask>\\r\\n\\t\\t\\t</defs>\\r\\n\\r\\n\\t\\t\\t<g id=\\"borntofrappe\\">\\r\\n\\t\\t\\t\\t<g\\r\\n\\t\\t\\t\\t\\tfill=\\"none\\"\\r\\n\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\r\\n\\t\\t\\t\\t\\tstroke-width=\\"8\\"\\r\\n\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\r\\n\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t<circle r=\\"46\\" />\\r\\n\\t\\t\\t\\t\\t<path\\r\\n\\t\\t\\t\\t\\t\\td=\\"M -10 -13 q 0 -8 -8 -10\\"\\r\\n\\t\\t\\t\\t\\t\\tstroke-dasharray=\\"14.01 18.5\\"\\r\\n\\t\\t\\t\\t\\t\\tstroke-dashoffset=\\"-4.5\\"\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t<path\\r\\n\\t\\t\\t\\t\\t\\td=\\"M -10 -13 h 15 a 8 8 0 0 1 0 16 h -4 h 4 a 10 10 0 0 1 0 20 h -15 v -36\\"\\r\\n\\t\\t\\t\\t\\t\\tstroke-dasharray=\\"114.2 146.28\\"\\r\\n\\t\\t\\t\\t\\t\\tstroke-dashoffset=\\"-9.145\\"\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t<circle r=\\"46\\" opacity=\\"0\\" />\\r\\n\\t\\t\\t</g>\\r\\n\\r\\n\\t\\t\\t{#each links as { name, desc, href }, i}\\r\\n\\t\\t\\t\\t<g\\r\\n\\t\\t\\t\\t\\ttransform=\\"rotate({(360 / links.length) * i}) translate(0 -150) rotate({(360 /\\r\\n\\t\\t\\t\\t\\t\\tlinks.length) *\\r\\n\\t\\t\\t\\t\\t\\ti *\\r\\n\\t\\t\\t\\t\\t\\t-1})\\"\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t<a {href} aria-labelledby=\\"title-{name}\\" aria-describedby=\\"desc-{name}\\">\\r\\n\\t\\t\\t\\t\\t\\t<title id=\\"title-{name}\\">{name}</title>\\r\\n\\t\\t\\t\\t\\t\\t<desc id=\\"desc-{name}\\">{desc}</desc>\\r\\n\\t\\t\\t\\t\\t\\t<g transform=\\"translate(-75 -75)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<svg viewBox=\\"-50 -50 100 100\\" width=\\"150\\" height=\\"150\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<use href=\\"#path\\" stroke=\\"currentColor\\" stroke-width=\\"6\\" fill=\\"none\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<g transform=\\"rotate({(360 / links.length) * i})\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<g mask=\\"url(#mask-text)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<g class=\\"text\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<text\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfont-weight=\\"bold\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tletter-spacing=\\"1\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttext-anchor=\\"middle\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfont-size=\\"12\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfont-family=\\"inherit\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<textPath\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\thref={(360 / links.length) * i <= 90 || (360 / links.length) * i >= 270\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? '#path-c'\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: '#path-cc'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstartOffset=\\"50%\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{name}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</textPath>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</text>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<g transform=\\"translate(-16 -16)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{@html icons[name].replace(\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/width=\\"[^\\"]+\\"\\\\sheight=\\"[^\\"]+\\"/,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t'width=\\"32\\" height=\\"32\\"'\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t)}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<circle r=\\"50\\" opacity=\\"0\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t</svg>\\r\\n\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t</a>\\r\\n\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</svg>\\r\\n\\t</nav>\\r\\n</header>\\r\\n\\r\\n<style>\\r\\n\\theader {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tflex-wrap: wrap;\\r\\n\\t\\tgap: 0.5rem;\\r\\n\\t\\tpadding: 2.5em 0;\\r\\n\\t\\tmargin-bottom: 20px;\\r\\n\\t\\tcolor: var(--frappe-grey-10);\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t\\tbackground-position: 0 100%;\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tz-index: 0;\\r\\n\\t\\t--animation-duration: 12s;\\r\\n\\t}\\r\\n\\r\\n\\theader::after {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 100%;\\r\\n\\t\\tleft: 0%;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 20px;\\r\\n\\t\\ttransform: scaleY(-1);\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg opacity=\\"0.5\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t-webkit-mask-size: 100px 40px;\\r\\n\\t\\tmask-size: 100px 40px;\\r\\n\\t\\t-webkit-mask-position: 50% 0;\\r\\n\\t\\tmask-position: 50% 0;\\r\\n\\t\\tz-index: -5;\\r\\n\\t}\\r\\n\\r\\n\\theader > * {\\r\\n\\t\\twidth: 90vw;\\r\\n\\t\\twidth: var(--width);\\r\\n\\t\\tmax-width: 30rem;\\r\\n\\t}\\r\\n\\r\\n\\theader nav {\\r\\n\\t\\t--transition-duration: 0.4s;\\r\\n\\t\\torder: -1;\\r\\n\\t\\tpadding: 0.5rem;\\r\\n\\t}\\r\\n\\r\\n\\theader nav > svg {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: auto;\\r\\n\\t}\\r\\n\\r\\n\\theader nav > svg #borntofrappe {\\r\\n\\t\\ttransition: transform 0.4s cubic-bezier(0.68, -0.5, 0.265, 1.55),\\r\\n\\t\\t\\tcolor 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition: transform var(--transition-duration) var(--ease-in-out-back),\\r\\n\\t\\t\\tcolor var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t}\\r\\n\\r\\n\\theader nav > svg #borntofrappe:hover {\\r\\n\\t\\tcolor: hsl(340, 90%, 55%);\\r\\n\\t\\tcolor: var(--primary-6);\\r\\n\\t\\ttransform: scale(1.25) rotate(-10deg);\\r\\n\\t}\\r\\n\\r\\n\\theader nav > svg a {\\r\\n\\t\\ttransition: transform 0.4s cubic-bezier(0.68, -0.5, 0.265, 1.55),\\r\\n\\t\\t\\tcolor 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition: transform var(--transition-duration) var(--ease-in-out-back),\\r\\n\\t\\t\\tcolor var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t\\ttransform: scale(0.85);\\r\\n\\t}\\r\\n\\r\\n\\theader nav > svg a .text {\\r\\n\\t\\tfont-family: 'Inconsolata', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;\\r\\n\\t\\ttransform: scale(0);\\r\\n\\t\\ttransition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\\r\\n\\t\\ttransition: transform var(--transition-duration) var(--ease-out-cubic);\\r\\n\\t}\\r\\n\\r\\n\\theader nav > svg a:hover,\\r\\n\\theader nav > svg a:focus,\\r\\n\\theader nav > svg a:hover .text,\\r\\n\\theader nav > svg a:focus .text {\\r\\n\\t\\ttransform: scale(1);\\r\\n\\t}\\r\\n\\r\\n\\theader nav > svg a:focus {\\r\\n\\t\\toutline: none;\\r\\n\\t}\\r\\n\\r\\n\\theader div > * + * {\\r\\n\\t\\tmargin-top: 0.5em;\\r\\n\\t}\\r\\n\\r\\n\\theader div p {\\r\\n\\t\\tline-height: 1.75;\\r\\n\\t}\\r\\n\\r\\n\\theader > *:nth-last-child(2) {\\r\\n\\t\\tposition: relative;\\r\\n\\t}\\r\\n\\r\\n\\theader > *:nth-last-child(2)::after {\\r\\n\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"%3E%3Cg fill=\\"hsl(215, 10%25, 97%25)\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10\\" /%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10\\" /%3E%3Cpath d=\\"M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5\\" /%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5\\" /%3E%3C/g%3E%3Cg stroke=\\"none\\"%3E%3Ccircle fill=\\"none\\" r=\\"25\\" cy=\\"-24\\"/%3E%3Cg fill=\\"hsl(215, 10%25, 97%25)\\"%3E%3Cpath d=\\"M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14\\"/%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14\\"/%3E%3Cpath d=\\"M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0\\" /%3E%3Cpath d=\\"M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0\\" /%3E%3Cpath d=\\"M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5\\" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 100%;\\r\\n\\t\\tleft: 50%;\\r\\n\\t\\twidth: 8em;\\r\\n\\t\\theight: 8em;\\r\\n\\t\\ttransform: translateX(-50%) rotate(45deg);\\r\\n\\t\\tanimation: rotate-astronaut 12s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;\\r\\n\\t\\tanimation: rotate-astronaut var(--animation-duration) var(--ease-in-out-sine) infinite;\\r\\n\\t\\tanimation-play-state: paused;\\r\\n\\t}\\r\\n\\r\\n\\theader.observed > *:nth-last-child(2)::after {\\r\\n\\t\\tanimation-play-state: running;\\r\\n\\t}\\r\\n\\r\\n\\t@keyframes rotate-astronaut {\\r\\n\\t\\t20% {\\r\\n\\t\\t\\ttransform: translateX(-50%) rotate(15deg);\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t40%,\\r\\n\\t\\t100% {\\r\\n\\t\\t\\ttransform: translateX(-50%) rotate(45deg);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t@media (prefers-reduced-motion: reduce) {\\r\\n\\t\\theader.observed > *:nth-last-child(2)::after {\\r\\n\\t\\t\\tanimation-play-state: paused;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\theader h1 {\\r\\n\\t\\tcolor: inherit;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"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"}`
};
var Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    {
      name: "codepen",
      href: "https://codepen.io/borntofrappe",
      desc: "On CodePen I flex my muscles as a web developer, starting with little past HTML, CSS and JavaScript. The foundations of the web!"
    },
    {
      name: "freecodecamp",
      href: "https://www.freecodecamp.org/borntofrappe",
      desc: "On freeCodeCamp I started my journey with HTML and CSS. This is where I earned a few certifications and where I continue growing as an endless learner."
    },
    {
      name: "github",
      href: "https://github.com/borntofrappe",
      desc: "On Github I share the code for my projects, and even this very website. Feel free to review, fork, and improve; I'm positive you'll find plenty of room for growth."
    },
    {
      name: "twitter",
      href: "https://twitter.com/borntofrappe",
      desc: "On Twitter I try to share something helpful, entertaining, and perhaps even both. There are people who seem to appreciate."
    }
  ];
  $$result.css.add(css$7);
  return `<header class="${["svelte-1c47yqv", ""].join(" ").trim()}"><div class="${"svelte-1c47yqv"}"><h1 class="${"svelte-1c47yqv"}">Hello, World!</h1>
		<p class="${"svelte-1c47yqv"}">I enjoy writing code.</p>
		<p class="${"svelte-1c47yqv"}">With this website, I try to convince you I might be good at it as well.</p></div>

	<nav aria-label="${"borntofrappe links"}" class="${"svelte-1c47yqv"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"-225 -225 450 450"}" width="${"500"}" height="${"500"}" class="${"svelte-1c47yqv"}"><defs><path id="${"path"}" d="${"M 0 -32 a 32 32 0 0 1 0 64 32 32 0 0 1 0 -64"}"></path><path id="${"path-c"}" d="${"M 0 39 a 39 39 0 0 1 0 -78 39 39 0 0 1 0 78"}"></path><path id="${"path-cc"}" d="${"M 0 47 a 47 47 0 0 0 0 -94 47 47 0 0 0 0 94"}"></path><mask id="${"mask-text"}"><rect x="${"-50"}" y="${"-50"}" width="${"100"}" height="${"100"}" fill="${"hsl(0, 0%, 100%)"}"></rect><use href="${"#path"}" fill="${"hsl(0, 0%, 0%)"}"></use></mask></defs><g id="${"borntofrappe"}" class="${"svelte-1c47yqv"}"><g fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"8"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><circle r="${"46"}"></circle><path d="${"M -10 -13 q 0 -8 -8 -10"}" stroke-dasharray="${"14.01 18.5"}" stroke-dashoffset="${"-4.5"}"></path><path d="${"M -10 -13 h 15 a 8 8 0 0 1 0 16 h -4 h 4 a 10 10 0 0 1 0 20 h -15 v -36"}" stroke-dasharray="${"114.2 146.28"}" stroke-dashoffset="${"-9.145"}"></path></g><circle r="${"46"}" opacity="${"0"}"></circle></g>${each(links, ({ name, desc, href }, i) => `<g transform="${"rotate(" + escape(360 / links.length * i) + ") translate(0 -150) rotate(" + escape(360 / links.length * i * -1) + ")"}"><a${add_attribute("href", href, 0)} aria-labelledby="${"title-" + escape(name)}" aria-describedby="${"desc-" + escape(name)}" class="${"svelte-1c47yqv"}"><title id="${"title-" + escape(name)}" class="${"svelte-1c47yqv"}">${escape(name)}</title><desc id="${"desc-" + escape(name)}" class="${"svelte-1c47yqv"}">${escape(desc)}</desc><g transform="${"translate(-75 -75)"}"><svg viewBox="${"-50 -50 100 100"}" width="${"150"}" height="${"150"}"><use href="${"#path"}" stroke="${"currentColor"}" stroke-width="${"6"}" fill="${"none"}"></use><g transform="${"rotate(" + escape(360 / links.length * i) + ")"}"><g mask="${"url(#mask-text)"}"><g class="${"text svelte-1c47yqv"}"><text fill="${"currentColor"}" font-weight="${"bold"}" letter-spacing="${"1"}" text-anchor="${"middle"}" font-size="${"12"}" font-family="${"inherit"}"><textPath${add_attribute("href", 360 / links.length * i <= 90 || 360 / links.length * i >= 270 ? "#path-c" : "#path-cc", 0)} startOffset="${"50%"}">${escape(name)}</textPath></text></g></g></g><g transform="${"translate(-16 -16)"}"><!-- HTML_TAG_START -->${icons[name].replace(/width="[^"]+"\sheight="[^"]+"/, 'width="32" height="32"')}<!-- HTML_TAG_END --></g><circle r="${"50"}" opacity="${"0"}"></circle></svg></g></a></g>`)}</svg></nav>
</header>`;
});
var css$6 = {
  code: `section.svelte-phz0e8{position:relative;--telescope-size:6.5em;--animation-duration:8s}section.svelte-phz0e8::before,section.svelte-phz0e8::after{width:6.5em;width:var(--telescope-size);height:6.5em;height:var(--telescope-size)}section.svelte-phz0e8::before{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120"%3E%3Cg fill="hsl(339, 90%25, 67%25)" stroke="hsl(350, 100%25, 8%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-dasharray="84 20 84" d="M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36" /%3E%3Cpath d="M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24" /%3E%3Cpath d="M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16" /%3E%3C/g%3E%3C/svg%3E');float:left;shape-outside:circle()}section.svelte-phz0e8::after{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120"%3E%3Cg transform="translate(26 -17)"%3E%3Cg fill="hsl(336, 93%25, 77%25)" stroke="hsl(350, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="5" transform="translate(-63 0) scale(0.4)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3.6" transform="translate(-51 0) scale(0.55)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3" transform="translate(-37 0) scale(0.65)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="2.5" transform="translate(-20 0) scale(0.8)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cg stroke-width="2"%3E%3Cpath d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath d="M 12 -14 a 15 15 0 0 1 0 28" /%3E%3Cpath fill="none" stroke-width="3" stroke-dasharray="0 8 12 20" transform="translate(12 0) scale(0.65)" d="M 0 -14 a 15 15 0 0 1 0 28" /%3E%3Crect fill="hsl(339, 90%25, 67%25)" y="-17" width="12" height="34" rx="6" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');position:absolute;top:0;left:0;transform:rotate(-20deg);transform-origin:50% 36%}@media(prefers-color-scheme: dark){html:not([data-preference]) section.svelte-phz0e8::before{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120"%3E%3Cg fill="hsl(210, 90%25, 62%25)" stroke="hsl(220, 100%25, 8%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-dasharray="84 20 84" d="M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36" /%3E%3Cpath d="M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24" /%3E%3Cpath d="M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16" /%3E%3C/g%3E%3C/svg%3E')}html:not([data-preference]) section.svelte-phz0e8::after{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120"%3E%3Cg transform="translate(26 -17)"%3E%3Cg fill="hsl(208, 95%25, 75%25)" stroke="hsl(220, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="5" transform="translate(-63 0) scale(0.4)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3.6" transform="translate(-51 0) scale(0.55)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3" transform="translate(-37 0) scale(0.65)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="2.5" transform="translate(-20 0) scale(0.8)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cg stroke-width="2"%3E%3Cpath d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath d="M 12 -14 a 15 15 0 0 1 0 28" /%3E%3Cpath fill="none" stroke-width="3" stroke-dasharray="0 8 12 20" transform="translate(12 0) scale(0.65)" d="M 0 -14 a 15 15 0 0 1 0 28" /%3E%3Crect fill="hsl(210, 90%25, 62%25)" y="-17" width="12" height="34" rx="6" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E')}}html[data-preference='dark'] section.svelte-phz0e8::before{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120"%3E%3Cg fill="hsl(210, 90%25, 62%25)" stroke="hsl(220, 100%25, 8%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-dasharray="84 20 84" d="M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36" /%3E%3Cpath d="M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24" /%3E%3Cpath d="M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16" /%3E%3C/g%3E%3C/svg%3E')}html[data-preference='dark'] section.svelte-phz0e8::after{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120"%3E%3Cg transform="translate(26 -17)"%3E%3Cg fill="hsl(208, 95%25, 75%25)" stroke="hsl(220, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="5" transform="translate(-63 0) scale(0.4)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3.6" transform="translate(-51 0) scale(0.55)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3" transform="translate(-37 0) scale(0.65)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="2.5" transform="translate(-20 0) scale(0.8)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cg stroke-width="2"%3E%3Cpath d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath d="M 12 -14 a 15 15 0 0 1 0 28" /%3E%3Cpath fill="none" stroke-width="3" stroke-dasharray="0 8 12 20" transform="translate(12 0) scale(0.65)" d="M 0 -14 a 15 15 0 0 1 0 28" /%3E%3Crect fill="hsl(210, 90%25, 62%25)" y="-17" width="12" height="34" rx="6" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E')}section.svelte-phz0e8::after{animation:svelte-phz0e8-tilt-telescope 8s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;animation:svelte-phz0e8-tilt-telescope var(--animation-duration) var(--ease-in-out-sine) infinite alternate;animation-play-state:paused}@keyframes svelte-phz0e8-tilt-telescope{20%,100%{transform:rotate(25deg)}}@media(prefers-reduced-motion: no-preference){section.observed.svelte-phz0e8::after{animation-play-state:running}}`,
  map: `{"version":3,"file":"GettingStarted.svelte","sources":["GettingStarted.svelte"],"sourcesContent":["<script>\\r\\n\\timport { observe } from '$lib/utils.js';\\r\\n<\/script>\\r\\n\\r\\n<section class:observed={false} use:observe>\\r\\n\\t<h2 class=\\"visually-hidden\\">Getting started</h2>\\r\\n\\t<p>\\r\\n\\t\\tI'm building this website with\\r\\n\\t\\t<a href=\\"https://kit.svelte.dev/\\">SvelteKit</a>, one tentative step at a time, but I'm also in\\r\\n\\t\\tthe process of creating 2D games with Lua and Love2D. While I try setting up a blog and writing\\r\\n\\t\\ta good honest article, I hope to distract you with\\r\\n\\t\\t<a href=\\"https://github.com/borntofrappe/game-development/wiki/Practice\\">one of them</a>.\\r\\n\\t</p>\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n\\tsection {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\t--telescope-size: 6.5em;\\r\\n\\t\\t--animation-duration: 8s;\\r\\n\\t}\\r\\n\\r\\n\\tsection::before,\\r\\n\\tsection::after {\\r\\n\\t\\twidth: 6.5em;\\r\\n\\t\\twidth: var(--telescope-size);\\r\\n\\t\\theight: 6.5em;\\r\\n\\t\\theight: var(--telescope-size);\\r\\n\\t}\\r\\n\\r\\n\\tsection::before {\\r\\n\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-60 -60 120 120\\"%3E%3Cg fill=\\"hsl(339, 90%25, 67%25)\\" stroke=\\"hsl(350, 100%25, 8%25)\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath stroke-dasharray=\\"84 20 84\\" d=\\"M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36\\" /%3E%3Cpath d=\\"M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24\\" /%3E%3Cpath d=\\"M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tfloat: left;\\r\\n\\t\\tshape-outside: circle();\\r\\n\\t}\\r\\n\\r\\n\\tsection::after {\\r\\n\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-60 -60 120 120\\"%3E%3Cg transform=\\"translate(26 -17)\\"%3E%3Cg fill=\\"hsl(336, 93%25, 77%25)\\" stroke=\\"hsl(350, 100%25, 8%25)\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath stroke-width=\\"5\\" transform=\\"translate(-63 0) scale(0.4)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath stroke-width=\\"3.6\\" transform=\\"translate(-51 0) scale(0.55)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath stroke-width=\\"3\\" transform=\\"translate(-37 0) scale(0.65)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath stroke-width=\\"2.5\\" transform=\\"translate(-20 0) scale(0.8)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cg stroke-width=\\"2\\"%3E%3Cpath d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath d=\\"M 12 -14 a 15 15 0 0 1 0 28\\" /%3E%3Cpath fill=\\"none\\" stroke-width=\\"3\\" stroke-dasharray=\\"0 8 12 20\\" transform=\\"translate(12 0) scale(0.65)\\" d=\\"M 0 -14 a 15 15 0 0 1 0 28\\" /%3E%3Crect fill=\\"hsl(339, 90%25, 67%25)\\" y=\\"-17\\" width=\\"12\\" height=\\"34\\" rx=\\"6\\" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 0;\\r\\n\\t\\tleft: 0;\\r\\n\\t\\ttransform: rotate(-20deg);\\r\\n\\t\\ttransform-origin: 50% 36%;\\r\\n\\t}\\r\\n\\r\\n\\t@media (prefers-color-scheme: dark) {\\r\\n\\t\\t:global(html:not([data-preference])) section::before {\\r\\n\\t\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-60 -60 120 120\\"%3E%3Cg fill=\\"hsl(210, 90%25, 62%25)\\" stroke=\\"hsl(220, 100%25, 8%25)\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath stroke-dasharray=\\"84 20 84\\" d=\\"M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36\\" /%3E%3Cpath d=\\"M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24\\" /%3E%3Cpath d=\\"M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t}\\r\\n\\t\\t:global(html:not([data-preference])) section::after {\\r\\n\\t\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-60 -60 120 120\\"%3E%3Cg transform=\\"translate(26 -17)\\"%3E%3Cg fill=\\"hsl(208, 95%25, 75%25)\\" stroke=\\"hsl(220, 100%25, 8%25)\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath stroke-width=\\"5\\" transform=\\"translate(-63 0) scale(0.4)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath stroke-width=\\"3.6\\" transform=\\"translate(-51 0) scale(0.55)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath stroke-width=\\"3\\" transform=\\"translate(-37 0) scale(0.65)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath stroke-width=\\"2.5\\" transform=\\"translate(-20 0) scale(0.8)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cg stroke-width=\\"2\\"%3E%3Cpath d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath d=\\"M 12 -14 a 15 15 0 0 1 0 28\\" /%3E%3Cpath fill=\\"none\\" stroke-width=\\"3\\" stroke-dasharray=\\"0 8 12 20\\" transform=\\"translate(12 0) scale(0.65)\\" d=\\"M 0 -14 a 15 15 0 0 1 0 28\\" /%3E%3Crect fill=\\"hsl(210, 90%25, 62%25)\\" y=\\"-17\\" width=\\"12\\" height=\\"34\\" rx=\\"6\\" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t:global(html[data-preference='dark']) section::before {\\r\\n\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-60 -60 120 120\\"%3E%3Cg fill=\\"hsl(210, 90%25, 62%25)\\" stroke=\\"hsl(220, 100%25, 8%25)\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath stroke-dasharray=\\"84 20 84\\" d=\\"M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36\\" /%3E%3Cpath d=\\"M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24\\" /%3E%3Cpath d=\\"M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t}\\r\\n\\r\\n\\t:global(html[data-preference='dark']) section::after {\\r\\n\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-60 -60 120 120\\"%3E%3Cg transform=\\"translate(26 -17)\\"%3E%3Cg fill=\\"hsl(208, 95%25, 75%25)\\" stroke=\\"hsl(220, 100%25, 8%25)\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath stroke-width=\\"5\\" transform=\\"translate(-63 0) scale(0.4)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath stroke-width=\\"3.6\\" transform=\\"translate(-51 0) scale(0.55)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath stroke-width=\\"3\\" transform=\\"translate(-37 0) scale(0.65)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath stroke-width=\\"2.5\\" transform=\\"translate(-20 0) scale(0.8)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cg stroke-width=\\"2\\"%3E%3Cpath d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath d=\\"M 12 -14 a 15 15 0 0 1 0 28\\" /%3E%3Cpath fill=\\"none\\" stroke-width=\\"3\\" stroke-dasharray=\\"0 8 12 20\\" transform=\\"translate(12 0) scale(0.65)\\" d=\\"M 0 -14 a 15 15 0 0 1 0 28\\" /%3E%3Crect fill=\\"hsl(210, 90%25, 62%25)\\" y=\\"-17\\" width=\\"12\\" height=\\"34\\" rx=\\"6\\" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t}\\r\\n\\r\\n\\tsection::after {\\r\\n\\t\\tanimation: tilt-telescope 8s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;\\r\\n\\t\\tanimation: tilt-telescope var(--animation-duration) var(--ease-in-out-sine) infinite alternate;\\r\\n\\t\\tanimation-play-state: paused;\\r\\n\\t}\\r\\n\\r\\n\\t@keyframes tilt-telescope {\\r\\n\\t\\t20%,\\r\\n\\t\\t100% {\\r\\n\\t\\t\\ttransform: rotate(25deg);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t@media (prefers-reduced-motion: no-preference) {\\r\\n\\t\\tsection.observed::after {\\r\\n\\t\\t\\tanimation-play-state: running;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAgBC,OAAO,cAAC,CAAC,AACR,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CAAE,KAAK,CACvB,oBAAoB,CAAE,EAAE,AACzB,CAAC,AAED,qBAAO,QAAQ,CACf,qBAAO,OAAO,AAAC,CAAC,AACf,KAAK,CAAE,KAAK,CACZ,KAAK,CAAE,IAAI,gBAAgB,CAAC,CAC5B,MAAM,CAAE,KAAK,CACb,MAAM,CAAE,IAAI,gBAAgB,CAAC,AAC9B,CAAC,AAED,qBAAO,QAAQ,AAAC,CAAC,AAChB,OAAO,CAAE,IAAI,0dAA0d,CAAC,CACxe,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,QAAQ,AACxB,CAAC,AAED,qBAAO,OAAO,AAAC,CAAC,AACf,OAAO,CAAE,IAAI,6/BAA6/B,CAAC,CAC3gC,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,SAAS,CAAE,OAAO,MAAM,CAAC,CACzB,gBAAgB,CAAE,GAAG,CAAC,GAAG,AAC1B,CAAC,AAED,MAAM,AAAC,uBAAuB,IAAI,CAAC,AAAC,CAAC,AAC5B,2BAA2B,AAAC,CAAC,qBAAO,QAAQ,AAAC,CAAC,AACrD,OAAO,CAAE,IAAI,0dAA0d,CAAC,AACze,CAAC,AACO,2BAA2B,AAAC,CAAC,qBAAO,OAAO,AAAC,CAAC,AACpD,OAAO,CAAE,IAAI,6/BAA6/B,CAAC,AAC5gC,CAAC,AACF,CAAC,AAEO,4BAA4B,AAAC,CAAC,qBAAO,QAAQ,AAAC,CAAC,AACtD,OAAO,CAAE,IAAI,0dAA0d,CAAC,AACze,CAAC,AAEO,4BAA4B,AAAC,CAAC,qBAAO,OAAO,AAAC,CAAC,AACrD,OAAO,CAAE,IAAI,6/BAA6/B,CAAC,AAC5gC,CAAC,AAED,qBAAO,OAAO,AAAC,CAAC,AACf,SAAS,CAAE,4BAAc,CAAC,EAAE,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,QAAQ,CAAC,SAAS,CACrF,SAAS,CAAE,4BAAc,CAAC,IAAI,oBAAoB,CAAC,CAAC,IAAI,kBAAkB,CAAC,CAAC,QAAQ,CAAC,SAAS,CAC9F,oBAAoB,CAAE,MAAM,AAC7B,CAAC,AAED,WAAW,4BAAe,CAAC,AAC1B,GAAG,CACH,IAAI,AAAC,CAAC,AACL,SAAS,CAAE,OAAO,KAAK,CAAC,AACzB,CAAC,AACF,CAAC,AAED,MAAM,AAAC,yBAAyB,aAAa,CAAC,AAAC,CAAC,AAC/C,OAAO,uBAAS,OAAO,AAAC,CAAC,AACxB,oBAAoB,CAAE,OAAO,AAC9B,CAAC,AACF,CAAC"}`
};
var GettingStarted = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<section class="${["svelte-phz0e8", ""].join(" ").trim()}"><h2 class="${"visually-hidden"}">Getting started</h2>
	<p>I&#39;m building this website with
		<a href="${"https://kit.svelte.dev/"}">SvelteKit</a>, one tentative step at a time, but I&#39;m also in
		the process of creating 2D games with Lua and Love2D. While I try setting up a blog and writing
		a good honest article, I hope to distract you with
		<a href="${"https://github.com/borntofrappe/game-development/wiki/Practice"}">one of them</a>.
	</p>
</section>`;
});
var css$5 = {
  code: `section.svelte-up1lma.svelte-up1lma{margin-bottom:0}section.svelte-up1lma h2.svelte-up1lma{text-align:center}section.svelte-up1lma mark.svelte-up1lma{--animation-duration:6s;--animation-timing-function:var(--ease-in-out-sine);--elevation:2.5em;display:inline-block;padding-top:2.5em;padding-top:var(--elevation);color:inherit;background:none;font-weight:700;position:relative;z-index:5}section.svelte-up1lma mark.svelte-up1lma::after{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg stroke="hsl(350, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cellipse fill="hsl(339, 90%25, 67%25)" rx="45" ry="20" /%3E%3Cpath fill="hsl(336, 93%25, 77%25)" d="M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0" /%3E%3Cpath transform="scale(0.85)" stroke-width="2.5" fill="none" d="M -28 -5 a 28 28 0 0 1 56 0" stroke-dasharray="20 80" stroke-dashoffset="48" /%3E%3C/g%3E%3C/svg%3E');position:absolute;bottom:2.5em;bottom:var(--elevation);right:0;width:3em;height:3em;transform:translate(50%, 50%);z-index:-5}@media(prefers-color-scheme: dark){html:not([data-preference]) section.svelte-up1lma mark.svelte-up1lma::after{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg stroke="hsl(220, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cellipse fill="hsl(210, 90%25, 62%25)" rx="45" ry="20" /%3E%3Cpath fill="hsl(208, 95%25, 75%25)" d="M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0" /%3E%3Cpath transform="scale(0.85)" stroke-width="2.5" fill="none" d="M -28 -5 a 28 28 0 0 1 56 0" stroke-dasharray="20 80" stroke-dashoffset="48" /%3E%3C/g%3E%3C/svg%3E')}}html[data-preference='dark'] section.svelte-up1lma mark.svelte-up1lma::after{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg stroke="hsl(220, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cellipse fill="hsl(210, 90%25, 62%25)" rx="45" ry="20" /%3E%3Cpath fill="hsl(208, 95%25, 75%25)" d="M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0" /%3E%3Cpath transform="scale(0.85)" stroke-width="2.5" fill="none" d="M -28 -5 a 28 28 0 0 1 56 0" stroke-dasharray="20 80" stroke-dashoffset="48" /%3E%3C/g%3E%3C/svg%3E')}@supports (clip-path: polygon(100% 0%, 100% 100%, 100% 100%)){section.svelte-up1lma mark.svelte-up1lma::before{content:'';position:absolute;bottom:0;right:0;width:2.5em;width:var(--elevation);height:2.5em;height:var(--elevation);background:hsl(330, 100%, 92%);background:var(--primary-10);z-index:-5}@media(prefers-color-scheme: dark){html:not([data-preference]) section.svelte-up1lma mark.svelte-up1lma::before{opacity:0.25}}html[data-preference='dark'] section.svelte-up1lma mark.svelte-up1lma::before{opacity:0.25}section.svelte-up1lma mark.svelte-up1lma::before{clip-path:polygon(100% 0%, 100% 100%, 100% 100%);animation:svelte-up1lma-clip-polygon 6s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;animation:svelte-up1lma-clip-polygon var(--animation-duration) var(--animation-timing-function) infinite\r
				alternate;animation-play-state:paused}section.svelte-up1lma mark.svelte-up1lma::after{transform:translate(50%, 50%) rotate(0deg);animation:svelte-up1lma-rotate-ufo 6s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;animation:svelte-up1lma-rotate-ufo var(--animation-duration) var(--animation-timing-function) infinite\r
				alternate;animation-play-state:paused}@keyframes svelte-up1lma-clip-polygon{15%{clip-path:polygon(100% 0%, 70% 100%, 0% 100%)}30%,100%{clip-path:polygon(100% 0%, 90% 100%, 10% 100%)}}@keyframes svelte-up1lma-rotate-ufo{15%{transform:translate(50%, 50%) rotate(30deg)}30%,100%{transform:translate(50%, 50%) rotate(20deg)}}@media(prefers-reduced-motion: no-preference){section.observed.svelte-up1lma mark.svelte-up1lma::before,section.observed.svelte-up1lma mark.svelte-up1lma::after{animation-play-state:running}}}section.svelte-up1lma>svg.svelte-up1lma{margin-left:auto;margin-right:auto;color:hsl(340, 90%, 55%);color:var(--primary-6);max-width:27rem;width:90%;height:auto}section.svelte-up1lma>svg .rotate.svelte-up1lma{animation:svelte-up1lma-rotate-orbit 200s linear infinite;animation-play-state:paused}section.observed.svelte-up1lma>svg .rotate.svelte-up1lma{animation-play-state:running}@keyframes svelte-up1lma-rotate-orbit{to{transform:rotate(1turn)}}@media(prefers-reduced-motion: no-preference){section#about.observed>svg.svelte-up1lma .rotate.svelte-up1lma{animation-play-state:running}}`,
  map: `{"version":3,"file":"About.svelte","sources":["About.svelte"],"sourcesContent":["<script>\\r\\n\\timport icons from '$lib/icons.js';\\r\\n\\timport { observe } from '$lib/utils.js';\\r\\n\\r\\n\\tconst satellites = ['world', 'editor', 'running', 'flag', 'gaming'];\\r\\n\\r\\n\\tconst colors = [\\r\\n\\t\\t'hsl(350, 100%, 8%)',\\r\\n\\t\\t'hsl(347, 100%, 19%)',\\r\\n\\t\\t'hsl(345, 95%, 27%)',\\r\\n\\t\\t'hsl(345, 96%, 33%)',\\r\\n\\t\\t'hsl(342, 92%, 39%)',\\r\\n\\t\\t'hsl(340, 85%, 46%)',\\r\\n\\t\\t'hsl(340, 90%, 55%)',\\r\\n\\t\\t'hsl(339, 90%, 67%)',\\r\\n\\t\\t'hsl(336, 93%, 77%)',\\r\\n\\t\\t'hsl(335, 100%, 86%)',\\r\\n\\t\\t'hsl(330, 100%, 92%)'\\r\\n\\t];\\r\\n<\/script>\\r\\n\\r\\n<section class:observed={false} use:observe>\\r\\n\\t<h2>Almost forgot</h2>\\r\\n\\t<p>\\r\\n\\t\\tI'm <mark>Gabriele Corti</mark>, coming to you from Europe and a couple of hours after Greenwich\\r\\n\\t\\ttime.\\r\\n\\t</p>\\r\\n\\t<p>\\r\\n\\t\\tOutside of VSCode, you'll find me running, watching the highlight of an F1 race, or enjoying a\\r\\n\\t\\tdated video game. Depends on the season.\\r\\n\\t</p>\\r\\n\\r\\n\\t<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 50\\" width=\\"200\\" height=\\"100\\">\\r\\n\\t\\t<defs>\\r\\n\\t\\t\\t<clipPath id=\\"clip-planet\\">\\r\\n\\t\\t\\t\\t<circle r=\\"30\\" />\\r\\n\\t\\t\\t</clipPath>\\r\\n\\r\\n\\t\\t\\t<mask id=\\"mask-satellites\\">\\r\\n\\t\\t\\t\\t<rect x=\\"-50\\" y=\\"-50\\" width=\\"100\\" height=\\"100\\" fill=\\"hsl(0, 0%, 100%)\\" />\\r\\n\\t\\t\\t\\t<g fill=\\"hsl(0, 0%, 0%)\\">\\r\\n\\t\\t\\t\\t\\t<g class=\\"rotate\\">\\r\\n\\t\\t\\t\\t\\t\\t{#each satellites as _, i}\\r\\n\\t\\t\\t\\t\\t\\t\\t<g transform=\\"rotate({(360 / satellites.length) * i * -1}) translate(0 -42)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<circle r=\\"7.5\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t</mask>\\r\\n\\t\\t</defs>\\r\\n\\r\\n\\t\\t<g clip-path=\\"url(#clip-planet)\\">\\r\\n\\t\\t\\t<g transform=\\"translate(0 -70)\\">\\r\\n\\t\\t\\t\\t{#each colors as color, i}\\r\\n\\t\\t\\t\\t\\t<ellipse\\r\\n\\t\\t\\t\\t\\t\\tstyle=\\"color: {color}; color: var(--primary-{i});\\"\\r\\n\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\r\\n\\t\\t\\t\\t\\t\\tstroke=\\"none\\"\\r\\n\\t\\t\\t\\t\\t\\tcx=\\"0\\"\\r\\n\\t\\t\\t\\t\\t\\tcy=\\"70\\"\\r\\n\\t\\t\\t\\t\\t\\trx={35 + (15 / colors.length) * i}\\r\\n\\t\\t\\t\\t\\t\\try=\\"33\\"\\r\\n\\t\\t\\t\\t\\t\\ttransform=\\"scale({1 - (0.65 / colors.length) * i})\\"\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t</g>\\r\\n\\t\\t</g>\\r\\n\\r\\n\\t\\t<circle\\r\\n\\t\\t\\tr=\\"30\\"\\r\\n\\t\\t\\tstyle=\\"color: {colors[colors.length - 1]}; color: var(--grey-10);\\"\\r\\n\\t\\t\\tfill=\\"none\\"\\r\\n\\t\\t\\tstroke=\\"currentColor\\"\\r\\n\\t\\t\\tstroke-width=\\"0.2\\"\\r\\n\\t\\t/>\\r\\n\\r\\n\\t\\t<g mask=\\"url(#mask-satellites)\\">\\r\\n\\t\\t\\t<circle\\r\\n\\t\\t\\t\\tr=\\"42\\"\\r\\n\\t\\t\\t\\tstroke-dasharray=\\"1 2\\"\\r\\n\\t\\t\\t\\tstroke-linecap=\\"round\\"\\r\\n\\t\\t\\t\\tfill=\\"none\\"\\r\\n\\t\\t\\t\\tstroke=\\"currentColor\\"\\r\\n\\t\\t\\t\\tstroke-width=\\"0.5\\"\\r\\n\\t\\t\\t/>\\r\\n\\t\\t</g>\\r\\n\\r\\n\\t\\t<g class=\\"rotate\\">\\r\\n\\t\\t\\t{#each satellites as satellite, i}\\r\\n\\t\\t\\t\\t<g\\r\\n\\t\\t\\t\\t\\ttransform=\\"rotate({(360 / satellites.length) * i * -1}) translate(0 -42) rotate({(360 /\\r\\n\\t\\t\\t\\t\\t\\tsatellites.length) *\\r\\n\\t\\t\\t\\t\\t\\ti})\\"\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t<g transform=\\"scale(-1 1)\\">\\r\\n\\t\\t\\t\\t\\t\\t<g class=\\"rotate\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<g transform=\\"scale(-1 1)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<circle fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"1\\" r=\\"7.5\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<g transform=\\"translate(-4 -4)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{@html icons[satellite].replace(\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/width=\\"[^\\"]+\\"\\\\sheight=\\"[^\\"]+\\"/,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t'width=\\"8\\" height=\\"8\\"'\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t)}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</g>\\r\\n\\t</svg>\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n\\tsection {\\r\\n\\t\\tmargin-bottom: 0;\\r\\n\\t}\\r\\n\\r\\n\\tsection h2 {\\r\\n\\t\\ttext-align: center;\\r\\n\\t}\\r\\n\\r\\n\\tsection mark {\\r\\n\\t\\t--animation-duration: 6s;\\r\\n\\t\\t--animation-timing-function: var(--ease-in-out-sine);\\r\\n\\t\\t--elevation: 2.5em;\\r\\n\\t\\tdisplay: inline-block;\\r\\n\\t\\tpadding-top: 2.5em;\\r\\n\\t\\tpadding-top: var(--elevation);\\r\\n\\t\\tcolor: inherit;\\r\\n\\t\\tbackground: none;\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tz-index: 5;\\r\\n\\t}\\r\\n\\r\\n\\tsection mark::after {\\r\\n\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg stroke=\\"hsl(350, 100%25, 8%25)\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"%3E%3Cellipse fill=\\"hsl(339, 90%25, 67%25)\\" rx=\\"45\\" ry=\\"20\\" /%3E%3Cpath fill=\\"hsl(336, 93%25, 77%25)\\" d=\\"M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0\\" /%3E%3Cpath transform=\\"scale(0.85)\\" stroke-width=\\"2.5\\" fill=\\"none\\" d=\\"M -28 -5 a 28 28 0 0 1 56 0\\" stroke-dasharray=\\"20 80\\" stroke-dashoffset=\\"48\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tbottom: 2.5em;\\r\\n\\t\\tbottom: var(--elevation);\\r\\n\\t\\tright: 0;\\r\\n\\t\\twidth: 3em;\\r\\n\\t\\theight: 3em;\\r\\n\\t\\ttransform: translate(50%, 50%);\\r\\n\\t\\tz-index: -5;\\r\\n\\t}\\r\\n\\r\\n\\t@media (prefers-color-scheme: dark) {\\r\\n\\t\\t:global(html:not([data-preference])) section mark::after {\\r\\n\\t\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg stroke=\\"hsl(220, 100%25, 8%25)\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"%3E%3Cellipse fill=\\"hsl(210, 90%25, 62%25)\\" rx=\\"45\\" ry=\\"20\\" /%3E%3Cpath fill=\\"hsl(208, 95%25, 75%25)\\" d=\\"M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0\\" /%3E%3Cpath transform=\\"scale(0.85)\\" stroke-width=\\"2.5\\" fill=\\"none\\" d=\\"M -28 -5 a 28 28 0 0 1 56 0\\" stroke-dasharray=\\"20 80\\" stroke-dashoffset=\\"48\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t:global(html[data-preference='dark']) section mark::after {\\r\\n\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg stroke=\\"hsl(220, 100%25, 8%25)\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"%3E%3Cellipse fill=\\"hsl(210, 90%25, 62%25)\\" rx=\\"45\\" ry=\\"20\\" /%3E%3Cpath fill=\\"hsl(208, 95%25, 75%25)\\" d=\\"M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0\\" /%3E%3Cpath transform=\\"scale(0.85)\\" stroke-width=\\"2.5\\" fill=\\"none\\" d=\\"M -28 -5 a 28 28 0 0 1 56 0\\" stroke-dasharray=\\"20 80\\" stroke-dashoffset=\\"48\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t}\\r\\n\\r\\n\\t@supports (clip-path: polygon(100% 0%, 100% 100%, 100% 100%)) {\\r\\n\\t\\tsection mark::before {\\r\\n\\t\\t\\tcontent: '';\\r\\n\\t\\t\\tposition: absolute;\\r\\n\\t\\t\\tbottom: 0;\\r\\n\\t\\t\\tright: 0;\\r\\n\\t\\t\\twidth: 2.5em;\\r\\n\\t\\t\\twidth: var(--elevation);\\r\\n\\t\\t\\theight: 2.5em;\\r\\n\\t\\t\\theight: var(--elevation);\\r\\n\\t\\t\\tbackground: hsl(330, 100%, 92%);\\r\\n\\t\\t\\tbackground: var(--primary-10);\\r\\n\\t\\t\\tz-index: -5;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t@media (prefers-color-scheme: dark) {\\r\\n\\t\\t\\t:global(html:not([data-preference])) section mark::before {\\r\\n\\t\\t\\t\\topacity: 0.25;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t:global(html[data-preference='dark']) section mark::before {\\r\\n\\t\\t\\topacity: 0.25;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tsection mark::before {\\r\\n\\t\\t\\tclip-path: polygon(100% 0%, 100% 100%, 100% 100%);\\r\\n\\t\\t\\tanimation: clip-polygon 6s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;\\r\\n\\t\\t\\tanimation: clip-polygon var(--animation-duration) var(--animation-timing-function) infinite\\r\\n\\t\\t\\t\\talternate;\\r\\n\\t\\t\\tanimation-play-state: paused;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tsection mark::after {\\r\\n\\t\\t\\ttransform: translate(50%, 50%) rotate(0deg);\\r\\n\\t\\t\\tanimation: rotate-ufo 6s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;\\r\\n\\t\\t\\tanimation: rotate-ufo var(--animation-duration) var(--animation-timing-function) infinite\\r\\n\\t\\t\\t\\talternate;\\r\\n\\t\\t\\tanimation-play-state: paused;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t@keyframes clip-polygon {\\r\\n\\t\\t\\t15% {\\r\\n\\t\\t\\t\\tclip-path: polygon(100% 0%, 70% 100%, 0% 100%);\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\t30%,\\r\\n\\t\\t\\t100% {\\r\\n\\t\\t\\t\\tclip-path: polygon(100% 0%, 90% 100%, 10% 100%);\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t@keyframes rotate-ufo {\\r\\n\\t\\t\\t15% {\\r\\n\\t\\t\\t\\ttransform: translate(50%, 50%) rotate(30deg);\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\t30%,\\r\\n\\t\\t\\t100% {\\r\\n\\t\\t\\t\\ttransform: translate(50%, 50%) rotate(20deg);\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t@media (prefers-reduced-motion: no-preference) {\\r\\n\\t\\t\\tsection.observed mark::before,\\r\\n\\t\\t\\tsection.observed mark::after {\\r\\n\\t\\t\\t\\tanimation-play-state: running;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\tsection > svg {\\r\\n\\t\\tmargin-left: auto;\\r\\n\\t\\tmargin-right: auto;\\r\\n\\t\\tcolor: hsl(340, 90%, 55%);\\r\\n\\t\\tcolor: var(--primary-6);\\r\\n\\t\\tmax-width: 27rem;\\r\\n\\t\\twidth: 90%;\\r\\n\\t\\theight: auto;\\r\\n\\t}\\r\\n\\r\\n\\tsection > svg .rotate {\\r\\n\\t\\tanimation: rotate-orbit 200s linear infinite;\\r\\n\\t\\tanimation-play-state: paused;\\r\\n\\t}\\r\\n\\r\\n\\tsection.observed > svg .rotate {\\r\\n\\t\\tanimation-play-state: running;\\r\\n\\t}\\r\\n\\r\\n\\t@keyframes rotate-orbit {\\r\\n\\t\\tto {\\r\\n\\t\\t\\ttransform: rotate(1turn);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t@media (prefers-reduced-motion: no-preference) {\\r\\n\\t\\tsection#about.observed > svg .rotate {\\r\\n\\t\\t\\tanimation-play-state: running;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"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"}`
};
var About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const satellites = ["world", "editor", "running", "flag", "gaming"];
  const colors = [
    "hsl(350, 100%, 8%)",
    "hsl(347, 100%, 19%)",
    "hsl(345, 95%, 27%)",
    "hsl(345, 96%, 33%)",
    "hsl(342, 92%, 39%)",
    "hsl(340, 85%, 46%)",
    "hsl(340, 90%, 55%)",
    "hsl(339, 90%, 67%)",
    "hsl(336, 93%, 77%)",
    "hsl(335, 100%, 86%)",
    "hsl(330, 100%, 92%)"
  ];
  $$result.css.add(css$5);
  return `<section class="${["svelte-up1lma", ""].join(" ").trim()}"><h2 class="${"svelte-up1lma"}">Almost forgot</h2>
	<p>I&#39;m <mark class="${"svelte-up1lma"}">Gabriele Corti</mark>, coming to you from Europe and a couple of hours after Greenwich
		time.
	</p>
	<p>Outside of VSCode, you&#39;ll find me running, watching the highlight of an F1 race, or enjoying a
		dated video game. Depends on the season.
	</p>

	<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"-50 -50 100 50"}" width="${"200"}" height="${"100"}" class="${"svelte-up1lma"}"><defs><clipPath id="${"clip-planet"}"><circle r="${"30"}"></circle></clipPath><mask id="${"mask-satellites"}"><rect x="${"-50"}" y="${"-50"}" width="${"100"}" height="${"100"}" fill="${"hsl(0, 0%, 100%)"}"></rect><g fill="${"hsl(0, 0%, 0%)"}"><g class="${"rotate svelte-up1lma"}">${each(satellites, (_, i) => `<g transform="${"rotate(" + escape(360 / satellites.length * i * -1) + ") translate(0 -42)"}"><circle r="${"7.5"}"></circle></g>`)}</g></g></mask></defs><g clip-path="${"url(#clip-planet)"}"><g transform="${"translate(0 -70)"}">${each(colors, (color, i) => `<ellipse style="${"color: " + escape(color) + "; color: var(--primary-" + escape(i) + ");"}" fill="${"currentColor"}" stroke="${"none"}" cx="${"0"}" cy="${"70"}"${add_attribute("rx", 35 + 15 / colors.length * i, 0)} ry="${"33"}" transform="${"scale(" + escape(1 - 0.65 / colors.length * i) + ")"}"></ellipse>`)}</g></g><circle r="${"30"}" style="${"color: " + escape(colors[colors.length - 1]) + "; color: var(--grey-10);"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"0.2"}"></circle><g mask="${"url(#mask-satellites)"}"><circle r="${"42"}" stroke-dasharray="${"1 2"}" stroke-linecap="${"round"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"0.5"}"></circle></g><g class="${"rotate svelte-up1lma"}">${each(satellites, (satellite, i) => `<g transform="${"rotate(" + escape(360 / satellites.length * i * -1) + ") translate(0 -42) rotate(" + escape(360 / satellites.length * i) + ")"}"><g transform="${"scale(-1 1)"}"><g class="${"rotate svelte-up1lma"}"><g transform="${"scale(-1 1)"}"><circle fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1"}" r="${"7.5"}"></circle><g transform="${"translate(-4 -4)"}"><!-- HTML_TAG_START -->${icons[satellite].replace(/width="[^"]+"\sheight="[^"]+"/, 'width="8" height="8"')}<!-- HTML_TAG_END --></g></g></g></g></g>`)}</g></svg>
</section>`;
});
var css$4 = {
  code: `main.svelte-agg2vm{overflow-x:hidden;--section-whitespace:5em}main.svelte-agg2vm>section{width:90vw;width:var(--width);max-width:42rem;max-width:var(--max-width);margin:5em auto;margin:var(--section-whitespace) auto}main.svelte-agg2vm>section p{line-height:1.75}main.svelte-agg2vm>section + section{position:relative;padding-top:5em;padding-top:var(--section-whitespace)}main.svelte-agg2vm>section + section::before{content:'';position:absolute;bottom:100%;left:50%;width:100vw;height:0.5em;transform:translate(-50%, 50%);background:hsl(215, 22%, 5%);background:var(--frappe-grey-0);background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/svg%3E');background-size:20px}@supports ((-webkit-mask-image: url()) or (mask-image: url())){main.svelte-agg2vm>section + section::before{height:2em;-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');-webkit-mask-size:auto 2em;mask-size:auto 2em;-webkit-mask-position:50% 50%;mask-position:50% 50%;-webkit-mask-repeat:repeat-x;mask-repeat:repeat-x}}`,
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script>\\r\\n\\timport Hero from '$lib/components/root/Hero.svelte';\\r\\n\\timport GettingStarted from '$lib/components/root/GettingStarted.svelte';\\r\\n\\timport About from '$lib/components/root/About.svelte';\\r\\n\\r\\n\\timport Meta from '$lib/components/Meta.svelte';\\r\\n<\/script>\\r\\n\\r\\n<Meta\\r\\n\\tdescription=\\"Personal website for one Gabriele Corti, a web developer from norther Italy, among other things.\\"\\r\\n/>\\r\\n\\r\\n<Hero />\\r\\n\\r\\n<main id=\\"content\\">\\r\\n\\t<GettingStarted />\\r\\n\\t<About />\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n\\tmain {\\r\\n\\t\\toverflow-x: hidden;\\r\\n\\t\\t--section-whitespace: 5em;\\r\\n\\t}\\r\\n\\r\\n\\tmain > :global(section) {\\r\\n\\t\\twidth: 90vw;\\r\\n\\t\\twidth: var(--width);\\r\\n\\t\\tmax-width: 42rem;\\r\\n\\t\\tmax-width: var(--max-width);\\r\\n\\t\\tmargin: 5em auto;\\r\\n\\t\\tmargin: var(--section-whitespace) auto;\\r\\n\\t}\\r\\n\\r\\n\\tmain > :global(section p) {\\r\\n\\t\\tline-height: 1.75;\\r\\n\\t}\\r\\n\\r\\n\\tmain > :global(section + section) {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tpadding-top: 5em;\\r\\n\\t\\tpadding-top: var(--section-whitespace);\\r\\n\\t}\\r\\n\\r\\n\\tmain > :global(section + section::before) {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tbottom: 100%;\\r\\n\\t\\tleft: 50%;\\r\\n\\t\\twidth: 100vw;\\r\\n\\t\\theight: 0.5em;\\r\\n\\t\\ttransform: translate(-50%, 50%);\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t}\\r\\n\\r\\n\\t@supports ((-webkit-mask-image: url()) or (mask-image: url())) {\\r\\n\\t\\tmain > :global(section + section::before) {\\r\\n\\t\\t\\theight: 2em;\\r\\n\\t\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\t-webkit-mask-size: auto 2em;\\r\\n\\t\\t\\tmask-size: auto 2em;\\r\\n\\t\\t\\t-webkit-mask-position: 50% 50%;\\r\\n\\t\\t\\tmask-position: 50% 50%;\\r\\n\\t\\t\\t-webkit-mask-repeat: repeat-x;\\r\\n\\t\\t\\tmask-repeat: repeat-x;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAoBC,IAAI,cAAC,CAAC,AACL,UAAU,CAAE,MAAM,CAClB,oBAAoB,CAAE,GAAG,AAC1B,CAAC,AAED,kBAAI,CAAW,OAAO,AAAE,CAAC,AACxB,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,IAAI,WAAW,CAAC,CAC3B,MAAM,CAAE,GAAG,CAAC,IAAI,CAChB,MAAM,CAAE,IAAI,oBAAoB,CAAC,CAAC,IAAI,AACvC,CAAC,AAED,kBAAI,CAAW,SAAS,AAAE,CAAC,AAC1B,WAAW,CAAE,IAAI,AAClB,CAAC,AAED,kBAAI,CAAW,iBAAiB,AAAE,CAAC,AAClC,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IAAI,oBAAoB,CAAC,AACvC,CAAC,AAED,kBAAI,CAAW,yBAAyB,AAAE,CAAC,AAC1C,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,GAAG,CAAC,CAC/B,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAC7B,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,gBAAgB,CAAE,IAAI,uXAAuX,CAAC,CAC9Y,eAAe,CAAE,IAAI,AACtB,CAAC,AAED,UAAU,CAAC,CAAC,oBAAoB,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,YAAY,IAAI,CAAC,CAAC,CAAC,AAAC,CAAC,AAC/D,kBAAI,CAAW,yBAAyB,AAAE,CAAC,AAC1C,MAAM,CAAE,GAAG,CACX,kBAAkB,CAAE,IAAI,2RAA2R,CAAC,CACpT,UAAU,CAAE,IAAI,2RAA2R,CAAC,CAC5S,iBAAiB,CAAE,IAAI,CAAC,GAAG,CAC3B,SAAS,CAAE,IAAI,CAAC,GAAG,CACnB,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,aAAa,CAAE,GAAG,CAAC,GAAG,CACtB,mBAAmB,CAAE,QAAQ,CAC7B,WAAW,CAAE,QAAQ,AACtB,CAAC,AACF,CAAC"}`
};
var Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `${validate_component(Meta, "Meta").$$render($$result, {
    description: "Personal website for one Gabriele Corti, a web developer from norther Italy, among other things."
  }, {}, {})}

${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}

<main id="${"content"}" class="${"svelte-agg2vm"}">${validate_component(GettingStarted, "GettingStarted").$$render($$result, {}, {}, {})}
	${validate_component(About, "About").$$render($$result, {}, {}, {})}
</main>`;
});
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes
});
var css$3 = {
  code: `article.svelte-164nfjg:not(.latest) h2.svelte-164nfjg{font-size:1.56rem;font-size:var(--size-600)}@supports ((mask-image: url()) or (-webkit-mask-image: url())){article.latest.svelte-164nfjg h2 a.svelte-164nfjg{display:inline-flex;align-items:center}article.latest.svelte-164nfjg h2 a.svelte-164nfjg::after{flex-shrink:0;content:'';width:1.5em;height:1.5em;background:currentColor;mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" /%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-20 -20) scale(0.9)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(20 -25) scale(0.5)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(15 25) scale(0.8)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-15 20) scale(0.4)"/%3E%3C/g%3E%3C/svg%3E');-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" /%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-20 -20) scale(0.9)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(20 -25) scale(0.5)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(15 25) scale(0.8)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-15 20) scale(0.4)"/%3E%3C/g%3E%3C/svg%3E')}}a.svelte-164nfjg.svelte-164nfjg{text-decoration:none}time.svelte-164nfjg.svelte-164nfjg{display:inline-block;font-size:1rem;font-size:var(--size-400);padding:0.2em 0.4em;color:hsl(350, 100%, 8%);color:var(--primary-0);background:hsl(335, 100%, 86%);background:var(--primary-9);border-left:0.2em solid hsl(340, 90%, 55%);border-left:0.2em solid var(--primary-6)}`,
  map: `{"version":3,"file":"Post.svelte","sources":["Post.svelte"],"sourcesContent":["<script>\\r\\n\\timport { format } from '$lib/utils.js';\\r\\n\\r\\n\\texport let title;\\r\\n\\texport let slug;\\r\\n\\texport let datetime;\\r\\n\\texport let date;\\r\\n\\texport let brief;\\r\\n\\r\\n\\texport let latest;\\r\\n<\/script>\\r\\n\\r\\n<article class:latest>\\r\\n\\t<h2>\\r\\n\\t\\t<a sveltekit:prefetch href=\\"/blog/{slug}\\">{title}</a>\\r\\n\\t</h2>\\r\\n\\t<time {datetime}>{format(date)}</time>\\r\\n\\t<p>\\r\\n\\t\\t{brief}\\r\\n\\t</p>\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n\\tarticle:not(.latest) h2 {\\r\\n\\t\\tfont-size: 1.56rem;\\r\\n\\t\\tfont-size: var(--size-600);\\r\\n\\t}\\r\\n\\r\\n\\t@supports ((mask-image: url()) or (-webkit-mask-image: url())) {\\r\\n\\t\\tarticle.latest h2 a {\\r\\n\\t\\t\\tdisplay: inline-flex;\\r\\n\\t\\t\\talign-items: center;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tarticle.latest h2 a::after {\\r\\n\\t\\t\\tflex-shrink: 0;\\r\\n\\t\\t\\tcontent: '';\\r\\n\\t\\t\\twidth: 1.5em;\\r\\n\\t\\t\\theight: 1.5em;\\r\\n\\t\\t\\tbackground: currentColor;\\r\\n\\t\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"currentColor\\" stroke-width=\\"5\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" /%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" transform=\\"translate(-20 -20) scale(0.9)\\"/%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" transform=\\"translate(20 -25) scale(0.5)\\"/%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" transform=\\"translate(15 25) scale(0.8)\\"/%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" transform=\\"translate(-15 20) scale(0.4)\\"/%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"currentColor\\" stroke-width=\\"5\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" /%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" transform=\\"translate(-20 -20) scale(0.9)\\"/%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" transform=\\"translate(20 -25) scale(0.5)\\"/%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" transform=\\"translate(15 25) scale(0.8)\\"/%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" transform=\\"translate(-15 20) scale(0.4)\\"/%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\ta {\\r\\n\\t\\ttext-decoration: none;\\r\\n\\t}\\r\\n\\r\\n\\ttime {\\r\\n\\t\\tdisplay: inline-block;\\r\\n\\t\\tfont-size: 1rem;\\r\\n\\t\\tfont-size: var(--size-400);\\r\\n\\t\\tpadding: 0.2em 0.4em;\\r\\n\\t\\tcolor: hsl(350, 100%, 8%);\\r\\n\\t\\tcolor: var(--primary-0);\\r\\n\\t\\tbackground: hsl(335, 100%, 86%);\\r\\n\\t\\tbackground: var(--primary-9);\\r\\n\\t\\tborder-left: 0.2em solid hsl(340, 90%, 55%);\\r\\n\\t\\tborder-left: 0.2em solid var(--primary-6);\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAuBC,sBAAO,KAAK,OAAO,CAAC,CAAC,EAAE,eAAC,CAAC,AACxB,SAAS,CAAE,OAAO,CAClB,SAAS,CAAE,IAAI,UAAU,CAAC,AAC3B,CAAC,AAED,UAAU,CAAC,CAAC,YAAY,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,oBAAoB,IAAI,CAAC,CAAC,CAAC,AAAC,CAAC,AAC/D,OAAO,sBAAO,CAAC,EAAE,CAAC,CAAC,eAAC,CAAC,AACpB,OAAO,CAAE,WAAW,CACpB,WAAW,CAAE,MAAM,AACpB,CAAC,AAED,OAAO,sBAAO,CAAC,EAAE,CAAC,gBAAC,OAAO,AAAC,CAAC,AAC3B,WAAW,CAAE,CAAC,CACd,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,YAAY,CACxB,UAAU,CAAE,IAAI,43BAA43B,CAAC,CAC74B,kBAAkB,CAAE,IAAI,43BAA43B,CAAC,AACt5B,CAAC,AACF,CAAC,AAED,CAAC,8BAAC,CAAC,AACF,eAAe,CAAE,IAAI,AACtB,CAAC,AAED,IAAI,8BAAC,CAAC,AACL,OAAO,CAAE,YAAY,CACrB,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,UAAU,CAAC,CAC1B,OAAO,CAAE,KAAK,CAAC,KAAK,CACpB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,EAAE,CAAC,CACzB,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAC/B,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,WAAW,CAAE,KAAK,CAAC,KAAK,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC3C,WAAW,CAAE,KAAK,CAAC,KAAK,CAAC,IAAI,WAAW,CAAC,AAC1C,CAAC"}`
};
var Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { slug } = $$props;
  let { datetime } = $$props;
  let { date } = $$props;
  let { brief } = $$props;
  let { latest } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.datetime === void 0 && $$bindings.datetime && datetime !== void 0)
    $$bindings.datetime(datetime);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.brief === void 0 && $$bindings.brief && brief !== void 0)
    $$bindings.brief(brief);
  if ($$props.latest === void 0 && $$bindings.latest && latest !== void 0)
    $$bindings.latest(latest);
  $$result.css.add(css$3);
  return `<article class="${["svelte-164nfjg", latest ? "latest" : ""].join(" ").trim()}"><h2 class="${"svelte-164nfjg"}"><a sveltekit:prefetch href="${"/blog/" + escape(slug)}" class="${"svelte-164nfjg"}">${escape(title)}</a></h2>
	<time${add_attribute("datetime", datetime, 0)} class="${"svelte-164nfjg"}">${escape(format2(date))}</time>
	<p>${escape(brief)}</p>
</article>`;
});
var css$2 = {
  code: "main.svelte-9gzmea{width:90vw;width:var(--width);max-width:42rem;max-width:var(--max-width);margin:2em auto 5em}main.svelte-9gzmea>* + *{margin-top:1em}main.svelte-9gzmea article > * + *{margin-top:0.4em}@supports (display: grid){main.svelte-9gzmea{display:grid;grid-template-columns:repeat(auto-fill, minmax(18rem, 1fr));gap:1.75em 1em}main.svelte-9gzmea>* + *{margin-top:initial}main.svelte-9gzmea>article:first-of-type{grid-column:1/-1}}@supports (grid-template-columns: subgrid){main.svelte-9gzmea>article{display:grid;grid-template-rows:subgrid;grid-row:span 3;justify-items:start;gap:0}}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script context=\\"module\\">\\r\\n\\texport async function load({ session }) {\\r\\n\\t\\tconst { posts } = session;\\r\\n\\r\\n\\t\\treturn {\\r\\n\\t\\t\\tprops: {\\r\\n\\t\\t\\t\\tposts\\r\\n\\t\\t\\t}\\r\\n\\t\\t};\\r\\n\\t}\\r\\n<\/script>\\r\\n\\r\\n<script>\\r\\n\\timport Meta from '$lib/components/Meta.svelte';\\r\\n\\timport Header from '$lib/components/routes/Header.svelte';\\r\\n\\timport Post from '$lib/components/blog/Post.svelte';\\r\\n\\r\\n\\texport let posts;\\r\\n<\/script>\\r\\n\\r\\n<Meta\\r\\n\\tdescription=\\"Blog for the personal website of Gabriele Corti, inline @borntofrappe. There are {posts.length} articles a changing number of subjects.\\"\\r\\n\\timage=\\"blog.png\\"\\r\\n/>\\r\\n\\r\\n<Header\\r\\n\\ttitle=\\"Jotting things down\\"\\r\\n\\tbody=\\"I build, I learn, I write. Not necessarily in that order.\\"\\r\\n\\tillustration={\`url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-70 -90 140 140\\"%3E%3Cg fill=\\"none\\" stroke=\\"hsl(215, 10%25, 97%25)\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cg transform=\\"rotate(-40) translate(0 -75) rotate(40) scale(0.25)\\"%3E%3Cpath fill=\\"hsl(215, 10%25, 97%25)\\" stroke=\\"none\\" d=\\"M-40.5-33v16h.5v.5h80v-16h-.5v-.5h-80zm8.5.5a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0A4.5 4.5 0 01-1.5-28 4.5 4.5 0 01-6-23.5a4.5 4.5 0 01-4.5-4.5A4.5 4.5 0 01-6-32.5z\\"/%3E%3Cg fill=\\"none\\" stroke=\\"hsl(215, 10%25, 97%25)\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath d=\\"M-45-37.5h90v75h-90z\\" stroke-width=\\"10\\"/%3E%3Cg stroke-width=\\"8\\"%3E%3Cpath d=\\"M5-4L-5 21M-18 0l-8 8 8 8M18 0l8 8-8 8\\"/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg transform=\\"translate(0 -75)scale(0.25)\\"%3E%3Cpath stroke-width=\\"8\\" d=\\"M -10.5 12 a 21 21 0 1 1 21 0 v 5 a 4 4 0 0 1 -4 4 h -13 a 4 4 0 0 1 -4 -4 v -5\\"/%3E%3Cg stroke-width=\\"7\\"%3E%3Cpath d=\\"M -8 31 h 16\\"/%3E%3Cpath d=\\"M -8 40.5 h 16\\"/%3E%3Cpath fill=\\"hsl(215, 10%25, 97%25)\\" d=\\"M -6 40.5 a 6 6 0 0 0 12 0\\"/%3E%3C/g%3E%3Cg transform=\\"translate(0 -6)\\" stroke-width=\\"6\\"%3E%3Cpath transform=\\"rotate(0) translate(0 -34)\\" d=\\"M 0 0 v -7\\" /%3E%3Cpath transform=\\"rotate(45) translate(0 -34.5)\\" d=\\"M 0 0 v -6.5\\" /%3E%3Cpath transform=\\"rotate(-45) translate(0 -34.5)\\" d=\\"M 0 0 v -6.5\\" /%3E%3Cpath transform=\\"rotate(90) translate(0 -35)\\" d=\\"M 0 0 v -6\\" /%3E%3Cpath transform=\\"rotate(-90) translate(0 -35)\\" d=\\"M 0 0 v -6\\" /%3E%3Cpath transform=\\"rotate(135) translate(0 -35.5)\\" d=\\"M 0 0 v -5.5\\" /%3E%3Cpath transform=\\"rotate(-135) translate(0 -35.5)\\" d=\\"M 0 0 v -5.5\\" /%3E%3C/g%3E%3C/g%3E%3Cg transform=\\"rotate(40) translate(0 -75) rotate(-40) scale(0.25)\\"%3E%3Cg stroke-width=\\"8\\"%3E%3Cpath d=\\"M 16.5 -44 h -52.5 a 10 10 0 0 0 -10 10 v 68 a 10 10 0 0 0 10 10 h 54 a 10 10 0 0 0 10 -10 v -17.5\\"/%3E%3Cpath d=\\"M 29 -37.5 l 17 17 -38 38 h -17 v -17 l 38 -38\\"/%3E%3C/g%3E%3Cg stroke-width=\\"7\\"%3E%3Cpath d=\\"M 20 -28.5 l 17 17\\"/%3E%3Cpath d=\\"M -30 -22 h 25\\"/%3E%3Cpath d=\\"M -30 -2 h 10\\"/%3E%3Cpath d=\\"M -30 18 h 10\\"/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"%3E%3Cg fill=\\"hsl(215, 10%25, 97%25)\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10\\" /%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10\\" /%3E%3Cpath d=\\"M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5\\" /%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5\\" /%3E%3C/g%3E%3Cg stroke=\\"none\\"%3E%3Ccircle fill=\\"none\\" r=\\"25\\" cy=\\"-24\\"/%3E%3Cg fill=\\"hsl(215, 10%25, 97%25)\\"%3E%3Cpath d=\\"M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14\\"/%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14\\"/%3E%3Cpath d=\\"M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0\\" /%3E%3Cpath d=\\"M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0\\" /%3E%3Cpath d=\\"M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5\\" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E')\`}\\r\\n/>\\r\\n\\r\\n<main id=\\"content\\">\\r\\n\\t{#if posts.length > 0}\\r\\n\\t\\t{#each posts as post, i}\\r\\n\\t\\t\\t<Post {...post} latest={i === 0} />\\r\\n\\t\\t{/each}\\r\\n\\t{:else}\\r\\n\\t\\t<h2>... get writing!</h2>\\r\\n\\t{/if}\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n\\tmain {\\r\\n\\t\\twidth: 90vw;\\r\\n\\t\\twidth: var(--width);\\r\\n\\t\\tmax-width: 42rem;\\r\\n\\t\\tmax-width: var(--max-width);\\r\\n\\t\\tmargin: 2em auto 5em;\\r\\n\\t}\\r\\n\\r\\n\\tmain > :global(* + *) {\\r\\n\\t\\tmargin-top: 1em;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(article > * + *) {\\r\\n\\t\\tmargin-top: 0.4em;\\r\\n\\t}\\r\\n\\r\\n\\t@supports (display: grid) {\\r\\n\\t\\tmain {\\r\\n\\t\\t\\tdisplay: grid;\\r\\n\\t\\t\\tgrid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));\\r\\n\\t\\t\\tgap: 1.75em 1em;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tmain > :global(* + *) {\\r\\n\\t\\t\\tmargin-top: initial;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tmain > :global(article:first-of-type) {\\r\\n\\t\\t\\tgrid-column: 1/-1;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t@supports (grid-template-columns: subgrid) {\\r\\n\\t\\tmain > :global(article) {\\r\\n\\t\\t\\tdisplay: grid;\\r\\n\\t\\t\\tgrid-template-rows: subgrid;\\r\\n\\t\\t\\tgrid-row: span 3;\\r\\n\\t\\t\\tjustify-items: start;\\r\\n\\t\\t\\tgap: 0;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA0CC,IAAI,cAAC,CAAC,AACL,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,IAAI,WAAW,CAAC,CAC3B,MAAM,CAAE,GAAG,CAAC,IAAI,CAAC,GAAG,AACrB,CAAC,AAED,kBAAI,CAAW,KAAK,AAAE,CAAC,AACtB,UAAU,CAAE,GAAG,AAChB,CAAC,AAED,kBAAI,CAAC,AAAQ,eAAe,AAAE,CAAC,AAC9B,UAAU,CAAE,KAAK,AAClB,CAAC,AAED,UAAU,CAAC,SAAS,IAAI,CAAC,AAAC,CAAC,AAC1B,IAAI,cAAC,CAAC,AACL,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,SAAS,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC5D,GAAG,CAAE,MAAM,CAAC,GAAG,AAChB,CAAC,AAED,kBAAI,CAAW,KAAK,AAAE,CAAC,AACtB,UAAU,CAAE,OAAO,AACpB,CAAC,AAED,kBAAI,CAAW,qBAAqB,AAAE,CAAC,AACtC,WAAW,CAAE,CAAC,CAAC,EAAE,AAClB,CAAC,AACF,CAAC,AAED,UAAU,CAAC,uBAAuB,OAAO,CAAC,AAAC,CAAC,AAC3C,kBAAI,CAAW,OAAO,AAAE,CAAC,AACxB,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,OAAO,CAC3B,QAAQ,CAAE,IAAI,CAAC,CAAC,CAChB,aAAa,CAAE,KAAK,CACpB,GAAG,CAAE,CAAC,AACP,CAAC,AACF,CAAC"}`
};
async function load$1({ session }) {
  const { posts } = session;
  return { props: { posts } };
}
var Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css$2);
  return `${validate_component(Meta, "Meta").$$render($$result, {
    description: "Blog for the personal website of Gabriele Corti, inline @borntofrappe. There are " + posts.length + " articles a changing number of subjects.",
    image: "blog.png"
  }, {}, {})}

${validate_component(Header$1, "Header").$$render($$result, {
    title: "Jotting things down",
    body: "I build, I learn, I write. Not necessarily in that order.",
    illustration: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -90 140 140"%3E%3Cg fill="none" stroke="hsl(215, 10%25, 97%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cg transform="rotate(-40) translate(0 -75) rotate(40) scale(0.25)"%3E%3Cpath fill="hsl(215, 10%25, 97%25)" stroke="none" d="M-40.5-33v16h.5v.5h80v-16h-.5v-.5h-80zm8.5.5a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0A4.5 4.5 0 01-1.5-28 4.5 4.5 0 01-6-23.5a4.5 4.5 0 01-4.5-4.5A4.5 4.5 0 01-6-32.5z"/%3E%3Cg fill="none" stroke="hsl(215, 10%25, 97%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M-45-37.5h90v75h-90z" stroke-width="10"/%3E%3Cg stroke-width="8"%3E%3Cpath d="M5-4L-5 21M-18 0l-8 8 8 8M18 0l8 8-8 8"/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg transform="translate(0 -75)scale(0.25)"%3E%3Cpath stroke-width="8" d="M -10.5 12 a 21 21 0 1 1 21 0 v 5 a 4 4 0 0 1 -4 4 h -13 a 4 4 0 0 1 -4 -4 v -5"/%3E%3Cg stroke-width="7"%3E%3Cpath d="M -8 31 h 16"/%3E%3Cpath d="M -8 40.5 h 16"/%3E%3Cpath fill="hsl(215, 10%25, 97%25)" d="M -6 40.5 a 6 6 0 0 0 12 0"/%3E%3C/g%3E%3Cg transform="translate(0 -6)" stroke-width="6"%3E%3Cpath transform="rotate(0) translate(0 -34)" d="M 0 0 v -7" /%3E%3Cpath transform="rotate(45) translate(0 -34.5)" d="M 0 0 v -6.5" /%3E%3Cpath transform="rotate(-45) translate(0 -34.5)" d="M 0 0 v -6.5" /%3E%3Cpath transform="rotate(90) translate(0 -35)" d="M 0 0 v -6" /%3E%3Cpath transform="rotate(-90) translate(0 -35)" d="M 0 0 v -6" /%3E%3Cpath transform="rotate(135) translate(0 -35.5)" d="M 0 0 v -5.5" /%3E%3Cpath transform="rotate(-135) translate(0 -35.5)" d="M 0 0 v -5.5" /%3E%3C/g%3E%3C/g%3E%3Cg transform="rotate(40) translate(0 -75) rotate(-40) scale(0.25)"%3E%3Cg stroke-width="8"%3E%3Cpath d="M 16.5 -44 h -52.5 a 10 10 0 0 0 -10 10 v 68 a 10 10 0 0 0 10 10 h 54 a 10 10 0 0 0 10 -10 v -17.5"/%3E%3Cpath d="M 29 -37.5 l 17 17 -38 38 h -17 v -17 l 38 -38"/%3E%3C/g%3E%3Cg stroke-width="7"%3E%3Cpath d="M 20 -28.5 l 17 17"/%3E%3Cpath d="M -30 -22 h 25"/%3E%3Cpath d="M -30 -2 h 10"/%3E%3Cpath d="M -30 18 h 10"/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke="none"%3E%3Cpath d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath transform="scale(-1 1)" d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3Cpath transform="scale(-1 1)" d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3C/g%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(215, 10%25, 97%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
  }, {}, {})}

<main id="${"content"}" class="${"svelte-9gzmea"}">${posts.length > 0 ? `${each(posts, (post, i) => `${validate_component(Post, "Post").$$render($$result, Object.assign(post, { latest: i === 0 }), {}, {})}`)}` : `<h2>... get writing!</h2>`}
</main>`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Blog,
  load: load$1
});
var css$1 = {
  code: `header.svelte-163juy6.svelte-163juy6{text-align:center;padding:4.5em 1em 3em;margin-bottom:20px;color:var(--frappe-grey-10);background:var(--frappe-grey-0);background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');background-size:20px;background-position:0 100%;position:relative}header.latest.svelte-163juy6.svelte-163juy6:before{line-height:0;position:absolute;top:0;width:8rem;left:50%;transform:translateX(-50%) rotate(180deg);content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -45 120 80"%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke="hsl(215, 10%25, 97%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"%3E%3Cpath transform="translate(0 -10)" d="M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4" /%3E%3Cpath transform="rotate(90) translate(0 -35) scale(0.8)" d="M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4" /%3E%3Cpath transform="rotate(-90) translate(0 -35) scale(0.8)" d="M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4" /%3E%3C/g%3E%3Cg transform="translate(0 54)"%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(215, 10%25, 97%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E')}header.svelte-163juy6.svelte-163juy6::after{content:'';position:absolute;top:100%;left:0%;width:100%;height:20px;transform:scaleY(-1);background:var(--frappe-grey-0);background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');background-size:20px;-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');-webkit-mask-size:100px 40px;mask-size:100px 40px;-webkit-mask-position:50% 0;mask-position:50% 0}header.svelte-163juy6 h1.svelte-163juy6{color:inherit;text-align:center;max-width:20ch;margin:0 auto}header.svelte-163juy6 ul.svelte-163juy6{padding:0;list-style:none;margin-top:10px;position:absolute;top:100%;left:50%;transform:translate(-50%, -50%);overflow-x:auto;display:flex;align-items:center;z-index:5}header.svelte-163juy6 ul li.svelte-163juy6{flex-shrink:0;padding:0.5em;border-radius:50%;margin:0px 22.5px;width:55px;height:55px;color:var(--grey-0);background:var(--grey-10);border:0.3rem solid currentColor;transition:color var(--transition-duration) var(--ease-in-out-sine)}@supports (display: grid){header.svelte-163juy6 ul.svelte-163juy6{align-items:initial;display:grid;grid-auto-columns:100px;justify-items:center;grid-auto-flow:column}header.svelte-163juy6 ul li.svelte-163juy6{flex-shrink:initial;margin:0px;width:3em;height:3em}}header.svelte-163juy6 ul li.svelte-163juy6 svg{height:100%;width:auto}header.svelte-163juy6 ul li.svelte-163juy6:hover{color:hsl(340, 90%, 55%);color:var(--primary-6)}header.svelte-163juy6 ul.svelte-163juy6::-webkit-scrollbar{height:0.3rem}header.svelte-163juy6 ul.svelte-163juy6::-webkit-scrollbar-track{background:hsl(215, 22%, 5%);background:var(--frappe-grey-0)}header.svelte-163juy6 ul.svelte-163juy6::-webkit-scrollbar-thumb{border-radius:0.5rem;background:hsl(340, 90%, 55%);background:var(--primary-6)}`,
  map: `{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script>\\r\\n\\timport icons from '$lib/icons.js';\\r\\n\\r\\n\\texport let title;\\r\\n\\texport let keywords;\\r\\n\\texport let latest;\\r\\n<\/script>\\r\\n\\r\\n<header class:latest>\\r\\n\\t<h1>{title}</h1>\\r\\n\\r\\n\\t{#if keywords}\\r\\n\\t\\t<h2 class=\\"visually-hidden\\">Keywords</h2>\\r\\n\\t\\t<ul>\\r\\n\\t\\t\\t{#each keywords.split(/,\\\\s+?/) as keyword}\\r\\n\\t\\t\\t\\t<li>{@html icons[keyword] || icons.bug}<span class=\\"visually-hidden\\">{keyword}</span></li>\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</ul>\\r\\n\\t{/if}\\r\\n</header>\\r\\n\\r\\n<style>\\r\\n\\theader {\\r\\n\\t\\ttext-align: center;\\r\\n\\t\\tpadding: 4.5em 1em 3em;\\r\\n\\t\\tmargin-bottom: 20px;\\r\\n\\t\\tcolor: var(--frappe-grey-10);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg opacity=\\"0.5\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t\\tbackground-position: 0 100%;\\r\\n\\t\\tposition: relative;\\r\\n\\t}\\r\\n\\r\\n\\theader.latest:before {\\r\\n\\t\\tline-height: 0;\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 0;\\r\\n\\t\\twidth: 8rem;\\r\\n\\t\\tleft: 50%;\\r\\n\\t\\ttransform: translateX(-50%) rotate(180deg);\\r\\n\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-60 -45 120 80\\"%3E%3Cg fill=\\"hsl(215, 10%25, 97%25)\\" stroke=\\"hsl(215, 10%25, 97%25)\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"3\\"%3E%3Cpath transform=\\"translate(0 -10)\\" d=\\"M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4\\" /%3E%3Cpath transform=\\"rotate(90) translate(0 -35) scale(0.8)\\" d=\\"M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4\\" /%3E%3Cpath transform=\\"rotate(-90) translate(0 -35) scale(0.8)\\" d=\\"M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4\\" /%3E%3C/g%3E%3Cg transform=\\"translate(0 54)\\"%3E%3Cg stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"%3E%3Cg stroke=\\"none\\"%3E%3Ccircle fill=\\"none\\" r=\\"25\\" cy=\\"-24\\"/%3E%3Cg fill=\\"hsl(215, 10%25, 97%25)\\"%3E%3Cpath d=\\"M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14\\"/%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14\\"/%3E%3Cpath d=\\"M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0\\" /%3E%3Cpath d=\\"M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0\\" /%3E%3Cpath d=\\"M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5\\" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t}\\r\\n\\r\\n\\theader::after {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 100%;\\r\\n\\t\\tleft: 0%;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 20px;\\r\\n\\t\\ttransform: scaleY(-1);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg opacity=\\"0.5\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t-webkit-mask-size: 100px 40px;\\r\\n\\t\\tmask-size: 100px 40px;\\r\\n\\t\\t-webkit-mask-position: 50% 0;\\r\\n\\t\\tmask-position: 50% 0;\\r\\n\\t}\\r\\n\\r\\n\\theader h1 {\\r\\n\\t\\tcolor: inherit;\\r\\n\\t\\ttext-align: center;\\r\\n\\t\\tmax-width: 20ch;\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t}\\r\\n\\r\\n\\theader ul {\\r\\n\\t\\tpadding: 0;\\r\\n\\t\\tlist-style: none;\\r\\n\\t\\tmargin-top: 10px;\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 100%;\\r\\n\\t\\tleft: 50%;\\r\\n\\t\\ttransform: translate(-50%, -50%);\\r\\n\\t\\toverflow-x: auto;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tz-index: 5;\\r\\n\\t}\\r\\n\\r\\n\\theader ul li {\\r\\n\\t\\tflex-shrink: 0;\\r\\n\\t\\tpadding: 0.5em;\\r\\n\\t\\tborder-radius: 50%;\\r\\n\\t\\tmargin: 0px 22.5px;\\r\\n\\t\\twidth: 55px;\\r\\n\\t\\theight: 55px;\\r\\n\\t\\tcolor: var(--grey-0);\\r\\n\\t\\tbackground: var(--grey-10);\\r\\n\\t\\tborder: 0.3rem solid currentColor;\\r\\n\\t\\ttransition: color var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t}\\r\\n\\r\\n\\t@supports (display: grid) {\\r\\n\\t\\theader ul {\\r\\n\\t\\t\\talign-items: initial;\\r\\n\\t\\t\\tdisplay: grid;\\r\\n\\t\\t\\tgrid-auto-columns: 100px;\\r\\n\\t\\t\\tjustify-items: center;\\r\\n\\t\\t\\tgrid-auto-flow: column;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\theader ul li {\\r\\n\\t\\t\\tflex-shrink: initial;\\r\\n\\t\\t\\tmargin: 0px;\\r\\n\\t\\t\\twidth: 3em;\\r\\n\\t\\t\\theight: 3em;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\theader ul li :global(svg) {\\r\\n\\t\\theight: 100%;\\r\\n\\t\\twidth: auto;\\r\\n\\t}\\r\\n\\r\\n\\theader ul li:hover {\\r\\n\\t\\tcolor: hsl(340, 90%, 55%);\\r\\n\\t\\tcolor: var(--primary-6);\\r\\n\\t}\\r\\n\\r\\n\\theader ul::-webkit-scrollbar {\\r\\n\\t\\theight: 0.3rem;\\r\\n\\t}\\r\\n\\r\\n\\theader ul::-webkit-scrollbar-track {\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t}\\r\\n\\r\\n\\theader ul::-webkit-scrollbar-thumb {\\r\\n\\t\\tborder-radius: 0.5rem;\\r\\n\\t\\tbackground: hsl(340, 90%, 55%);\\r\\n\\t\\tbackground: var(--primary-6);\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"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"}`
};
var Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { keywords } = $$props;
  let { latest } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.latest === void 0 && $$bindings.latest && latest !== void 0)
    $$bindings.latest(latest);
  $$result.css.add(css$1);
  return `<header class="${["svelte-163juy6", latest ? "latest" : ""].join(" ").trim()}"><h1 class="${"svelte-163juy6"}">${escape(title)}</h1>

	${keywords ? `<h2 class="${"visually-hidden"}">Keywords</h2>
		<ul class="${"svelte-163juy6"}">${each(keywords.split(/,\s+?/), (keyword) => `<li class="${"svelte-163juy6"}"><!-- HTML_TAG_START -->${icons[keyword] || icons.bug}<!-- HTML_TAG_END --><span class="${"visually-hidden"}">${escape(keyword)}</span></li>`)}</ul>` : ``}
</header>`;
});
var css = {
  code: `main.svelte-nsifvg{width:90vw;width:var(--width);max-width:42rem;max-width:var(--max-width);margin:2.5em auto 5em}main.svelte-nsifvg>* + *{margin-top:1em;margin-top:var(--vertical-rhythm, 1em)}main.svelte-nsifvg h2,main.svelte-nsifvg h3{--vertical-rhythm:var(--size-800)}main.svelte-nsifvg h2 + *,main.svelte-nsifvg h3 + *{--vertical-rhythm:var(--size-300)}main.svelte-nsifvg blockquote,main.svelte-nsifvg blockquote + *,main.svelte-nsifvg figure,main.svelte-nsifvg figure + *{--vertical-rhythm:var(--size-800)}main.svelte-nsifvg table,main.svelte-nsifvg table + *{--vertical-rhythm:var(--size-700);--vertical-rhythm:calc(var(--size-700) + 0.7rem)}main.svelte-nsifvg .code,main.svelte-nsifvg .code + *{--vertical-rhythm:var(--size-600)}main.svelte-nsifvg p > code{font-family:inherit;font-weight:700;padding:0 0.2em;color:hsl(214, 15%, 88%);color:var(--grey-9);background:hsl(210, 20%, 12%);background:var(--grey-1);border-radius:0.25em}main.svelte-nsifvg .code > span,main.svelte-nsifvg .code pre{border-radius:0.4rem;padding:0.8em}main.svelte-nsifvg .code > span{font-weight:700;color:hsl(215, 10%, 98%);color:var(--frappe-grey-10);background:hsl(215, 22%, 5%);background:var(--frappe-grey-0);background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');background-size:20px;border-bottom-left-radius:0;border-bottom-right-radius:0;transition:color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:color var(--transition-duration) var(--ease-in-out-sine);display:flex;align-items:flex-end}main.svelte-nsifvg .code > span svg{width:1.25em;height:auto;margin-right:0.4em}main.svelte-nsifvg .code:hover > span{color:hsl(340, 90%, 55%);color:var(--primary-6)}main.svelte-nsifvg .code pre{tab-size:2;margin-top:0;line-height:1.75;color:hsl(214, 15%, 88%);color:var(--frappe-grey-9);background:hsl(210, 20%, 12%);background:var(--frappe-grey-1);border-top-left-radius:0;border-top-right-radius:0}main.svelte-nsifvg .code pre{overflow-x:auto}main.svelte-nsifvg .code pre::-webkit-scrollbar{height:0.4rem}main.svelte-nsifvg .code pre::-webkit-scrollbar-track{background:hsl(215, 22%, 5%);background:var(--frappe-grey-0)}main.svelte-nsifvg .code pre::-webkit-scrollbar-thumb{background:hsl(340, 90%, 55%);background:var(--primary-6);border-radius:0.2rem}main.svelte-nsifvg h2,main.svelte-nsifvg h3{display:flex;align-items:center}main.svelte-nsifvg h2 a,main.svelte-nsifvg h3 a{opacity:0.3;margin-left:0.5rem;width:0.5em;height:0.5em;transition-property:opacity, color;transition-duration:0.25s;transition-duration:var(--transition-duration);transition-timing-function:cubic-bezier(0.445, 0.05, 0.55, 0.95);transition-timing-function:var(--ease-in-out-sine);background:currentColor;border-radius:50%}@supports ((-webkit-mask-image: url()) or (mask-image: url())){main.svelte-nsifvg h2 a,main.svelte-nsifvg h3 a{border-radius:initial;background:initial;position:relative;width:1em;height:1em;z-index:0}main.svelte-nsifvg h2 a::before,main.svelte-nsifvg h3 a::before{z-index:-5;content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:currentColor;-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg transform="rotate(-45)"%3E%3Cg fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"%3E%3Cpath stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /%3E%3Cpath transform="scale(-1 -1)" stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg transform="rotate(-45)"%3E%3Cg fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"%3E%3Cpath stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /%3E%3Cpath transform="scale(-1 -1)" stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}}main.svelte-nsifvg h2 a:focus,main.svelte-nsifvg h3 a:focus{opacity:1}main.svelte-nsifvg h2 a:hover,main.svelte-nsifvg h3 a:hover{opacity:1;color:hsl(340, 90%, 55%);color:var(--primary-6)}main.svelte-nsifvg ul li::marker,main.svelte-nsifvg ol li::marker{color:hsl(340, 90%, 55%);color:var(--primary-6)}main.svelte-nsifvg ol li::marker{font-family:'Josefin Sans', sans-serif;font-weight:700}main.svelte-nsifvg ul ul,main.svelte-nsifvg ol ol{margin-top:1em}main.svelte-nsifvg ul > * + *,main.svelte-nsifvg ol > * + *{margin-top:0.5em}main.svelte-nsifvg li{line-height:1.5}@supports ((-webkit-mask-image: url()) or (mask-image: url())){main.svelte-nsifvg ul,main.svelte-nsifvg ol{padding:0}main.svelte-nsifvg ul{--badge-size:1.25em;list-style:none;margin-left:1.25em;margin-left:var(--badge-size)}main.svelte-nsifvg ul li{position:relative;padding-left:0.25em}main.svelte-nsifvg ul li::before{content:'';position:absolute;top:0.125em;right:100%;width:1.25em;width:var(--badge-size);height:1.25em;height:var(--badge-size);background:hsl(340, 90%, 55%);background:var(--primary-6);-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="10" d="M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z" /%3E%3Cpath stroke-width="8" d="M -17 -0 l 12 12 21 -21" /%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="10" d="M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z" /%3E%3Cpath stroke-width="8" d="M -17 -0 l 12 12 21 -21" /%3E%3C/g%3E%3C/svg%3E')}main.svelte-nsifvg ol{--badge-size:1.25em;list-style:none;margin-left:1.25em;margin-left:var(--badge-size);counter-reset:custom-counter}main.svelte-nsifvg ol li{position:relative;padding-left:0.25em}main.svelte-nsifvg ol li::before{content:counter(custom-counter);counter-increment:custom-counter;font-family:'Josefin Sans', sans-serif;font-weight:700;color:hsl(340, 90%, 55%);color:var(--primary-6);position:absolute;top:0.125em;right:100%;width:1.25em;width:var(--badge-size);height:1.25em;height:var(--badge-size);text-align:center;transform:scale(0.8);transform-origin:50% 80%;display:flex;justify-content:center;align-items:center}main.svelte-nsifvg ol li::after{content:'';position:absolute;top:0.125em;right:100%;width:1.25em;width:var(--badge-size);height:1.25em;height:var(--badge-size);background:hsl(340, 90%, 55%);background:var(--primary-6);-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="10" d="M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z" /%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="10" d="M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z" /%3E%3C/g%3E%3C/svg%3E')}}main.svelte-nsifvg blockquote{margin-left:auto;margin-right:auto;text-align:center;width:max-content;max-width:40ch;line-height:2;padding:0.8em 2em;border-radius:0.4rem;background:hsl(335, 100%, 86%);background:var(--primary-9);color:hsl(350, 100%, 8%);color:var(--primary-0)}@supports ((-webkit-mask-image: url()) or (mask-image: url())){main.svelte-nsifvg blockquote{position:relative}main.svelte-nsifvg blockquote::before,main.svelte-nsifvg blockquote::after{content:'';position:absolute;top:50%;left:0%;width:3em;height:3em;border-radius:50%;transform:translate(-50%, -50%);background:hsl(340, 90%, 55%);background:var(--primary-6);-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" /%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-20 -20) scale(0.9)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(20 -25) scale(0.5)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(15 25) scale(0.8)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-15 20) scale(0.4)"/%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" /%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-20 -20) scale(0.9)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(20 -25) scale(0.5)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(15 25) scale(0.8)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-15 20) scale(0.4)"/%3E%3C/g%3E%3C/svg%3E');pointer-events:none}main.svelte-nsifvg blockquote::after{left:100%;transform:translate(-50%, -50%) scaleX(-1)}}main.svelte-nsifvg table{line-height:2;table-layout:fixed;width:100%;border-collapse:collapse;border-radius:0.4rem;color:hsl(214, 15%, 88%);color:var(--frappe-grey-9);background:hsl(210, 20%, 12%);background:var(--frappe-grey-1);font-feature-settings:'tnum';position:relative}main.svelte-nsifvg table::before{content:'';position:absolute;bottom:100%;left:0%;width:100%;height:0.7rem;border-radius:0.4rem;border-bottom-left-radius:0;border-bottom-right-radius:0;background:hsl(215, 22%, 5%);background:var(--frappe-grey-0);background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/svg%3E');background-size:20px;background-position:0 100%}main.svelte-nsifvg table thead tr{text-align:left;color:hsl(215, 10%, 98%);color:var(--frappe-grey-10);background:hsl(215, 22%, 5%);background:var(--frappe-grey-0);background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');background-size:20px}main.svelte-nsifvg table thead tr th{font-weight:700;padding:0 1rem 0.7rem;transition:color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:color var(--transition-duration) var(--ease-in-out-sine)}main.svelte-nsifvg table thead tr th:hover{color:hsl(340, 90%, 55%);color:var(--primary-6)}main.svelte-nsifvg table tbody tr td{font-size:1rem;font-size:var(--size-400);padding:0.5rem 1rem}main.svelte-nsifvg table tbody tr:nth-last-of-type(even) td{background:hsl(210, 18%, 25%);background:var(--frappe-grey-2)}main.svelte-nsifvg table [align='right']{text-align:right}main.svelte-nsifvg table [align='center']{text-align:center}`,
  map: `{"version":3,"file":"[slug].svelte","sources":["[slug].svelte"],"sourcesContent":["<script context=\\"module\\">\\r\\n\\texport async function load({ page, session }) {\\r\\n\\t\\tconst { slug } = page.params;\\r\\n\\r\\n\\t\\tconst match = session.posts.find((post) => post.slug === slug);\\r\\n\\r\\n\\t\\tif (match) {\\r\\n\\t\\t\\tconst posts = import.meta.glob('/src/blog/*.{md,svx}');\\r\\n\\t\\t\\tconst post = await posts[match.path]();\\r\\n\\r\\n\\t\\t\\tconst { default: Component, metadata } = post;\\r\\n\\r\\n\\t\\t\\treturn {\\r\\n\\t\\t\\t\\tprops: {\\r\\n\\t\\t\\t\\t\\t...metadata,\\r\\n\\t\\t\\t\\t\\tComponent\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t};\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\treturn {\\r\\n\\t\\t\\tstatus: 404,\\r\\n\\t\\t\\terror: new Error('Post not found')\\r\\n\\t\\t};\\r\\n\\t}\\r\\n<\/script>\\r\\n\\r\\n<script>\\r\\n\\timport Meta from '$lib/components/Meta.svelte';\\r\\n\\timport Header from '$lib/components/blog/post/Header.svelte';\\r\\n\\r\\n\\texport let title;\\r\\n\\texport let brief;\\r\\n\\texport let keywords;\\r\\n\\texport let Component;\\r\\n<\/script>\\r\\n\\r\\n<Meta description=\\"{title}, a blog post from borntofrappe. {brief}\\" image=\\"blog\\" />\\r\\n\\r\\n<Header {title} {keywords} />\\r\\n\\r\\n<main id=\\"content\\">\\r\\n\\t<svelte:component this={Component} />\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n\\tmain {\\r\\n\\t\\twidth: 90vw;\\r\\n\\t\\twidth: var(--width);\\r\\n\\t\\tmax-width: 42rem;\\r\\n\\t\\tmax-width: var(--max-width);\\r\\n\\t\\tmargin: 2.5em auto 5em;\\r\\n\\t}\\r\\n\\r\\n\\tmain > :global(* + *) {\\r\\n\\t\\tmargin-top: 1em;\\r\\n\\t\\tmargin-top: var(--vertical-rhythm, 1em);\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(h2),\\r\\n\\tmain :global(h3) {\\r\\n\\t\\t--vertical-rhythm: var(--size-800);\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(h2 + *),\\r\\n\\tmain :global(h3 + *) {\\r\\n\\t\\t--vertical-rhythm: var(--size-300);\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(blockquote),\\r\\n\\tmain :global(blockquote + *),\\r\\n\\tmain :global(figure),\\r\\n\\tmain :global(figure + *) {\\r\\n\\t\\t--vertical-rhythm: var(--size-800);\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(table),\\r\\n\\tmain :global(table + *) {\\r\\n\\t\\t--vertical-rhythm: var(--size-700);\\r\\n\\t\\t--vertical-rhythm: calc(var(--size-700) + 0.7rem);\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(.code),\\r\\n\\tmain :global(.code + *) {\\r\\n\\t\\t--vertical-rhythm: var(--size-600);\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(p > code) {\\r\\n\\t\\tfont-family: inherit;\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t\\tpadding: 0 0.2em;\\r\\n\\t\\tcolor: hsl(214, 15%, 88%);\\r\\n\\t\\tcolor: var(--grey-9);\\r\\n\\t\\tbackground: hsl(210, 20%, 12%);\\r\\n\\t\\tbackground: var(--grey-1);\\r\\n\\t\\tborder-radius: 0.25em;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(.code > span),\\r\\n\\tmain :global(.code pre) {\\r\\n\\t\\tborder-radius: 0.4rem;\\r\\n\\t\\tpadding: 0.8em;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(.code > span) {\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t\\tcolor: hsl(215, 10%, 98%);\\r\\n\\t\\tcolor: var(--frappe-grey-10);\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg opacity=\\"0.5\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t\\tborder-bottom-left-radius: 0;\\r\\n\\t\\tborder-bottom-right-radius: 0;\\r\\n\\t\\ttransition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition: color var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: flex-end;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(.code > span svg) {\\r\\n\\t\\twidth: 1.25em;\\r\\n\\t\\theight: auto;\\r\\n\\t\\tmargin-right: 0.4em;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(.code:hover > span) {\\r\\n\\t\\tcolor: hsl(340, 90%, 55%);\\r\\n\\t\\tcolor: var(--primary-6);\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(.code pre) {\\r\\n\\t\\ttab-size: 2;\\r\\n\\t\\tmargin-top: 0;\\r\\n\\t\\tline-height: 1.75;\\r\\n\\t\\tcolor: hsl(214, 15%, 88%);\\r\\n\\t\\tcolor: var(--frappe-grey-9);\\r\\n\\t\\tbackground: hsl(210, 20%, 12%);\\r\\n\\t\\tbackground: var(--frappe-grey-1);\\r\\n\\t\\tborder-top-left-radius: 0;\\r\\n\\t\\tborder-top-right-radius: 0;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(.code pre) {\\r\\n\\t\\toverflow-x: auto;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(.code pre::-webkit-scrollbar) {\\r\\n\\t\\theight: 0.4rem;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(.code pre::-webkit-scrollbar-track) {\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(.code pre::-webkit-scrollbar-thumb) {\\r\\n\\t\\tbackground: hsl(340, 90%, 55%);\\r\\n\\t\\tbackground: var(--primary-6);\\r\\n\\t\\tborder-radius: 0.2rem;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(h2),\\r\\n\\tmain :global(h3) {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(h2 a),\\r\\n\\tmain :global(h3 a) {\\r\\n\\t\\topacity: 0.3;\\r\\n\\t\\tmargin-left: 0.5rem;\\r\\n\\t\\twidth: 0.5em;\\r\\n\\t\\theight: 0.5em;\\r\\n\\t\\ttransition-property: opacity, color;\\r\\n\\t\\ttransition-duration: 0.25s;\\r\\n\\t\\ttransition-duration: var(--transition-duration);\\r\\n\\t\\ttransition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition-timing-function: var(--ease-in-out-sine);\\r\\n\\t\\tbackground: currentColor;\\r\\n\\t\\tborder-radius: 50%;\\r\\n\\t}\\r\\n\\r\\n\\t@supports ((-webkit-mask-image: url()) or (mask-image: url())) {\\r\\n\\t\\tmain :global(h2 a),\\r\\n\\t\\tmain :global(h3 a) {\\r\\n\\t\\t\\tborder-radius: initial;\\r\\n\\t\\t\\tbackground: initial;\\r\\n\\t\\t\\tposition: relative;\\r\\n\\t\\t\\twidth: 1em;\\r\\n\\t\\t\\theight: 1em;\\r\\n\\t\\t\\tz-index: 0;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tmain :global(h2 a::before),\\r\\n\\t\\tmain :global(h3 a::before) {\\r\\n\\t\\t\\tz-index: -5;\\r\\n\\t\\t\\tcontent: '';\\r\\n\\t\\t\\tposition: absolute;\\r\\n\\t\\t\\ttop: 0;\\r\\n\\t\\t\\tleft: 0;\\r\\n\\t\\t\\twidth: 100%;\\r\\n\\t\\t\\theight: 100%;\\r\\n\\t\\t\\tbackground: currentColor;\\r\\n\\t\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg transform=\\"rotate(-45)\\"%3E%3Cg fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"10\\" stroke-linejoin=\\"round\\" stroke-linecap=\\"round\\"%3E%3Cpath stroke-dasharray=\\"140 26\\" stroke-dashoffset=\\"-20\\" d=\\"M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26\\" /%3E%3Cpath transform=\\"scale(-1 -1)\\" stroke-dasharray=\\"140 26\\" stroke-dashoffset=\\"-20\\" d=\\"M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26\\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg transform=\\"rotate(-45)\\"%3E%3Cg fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"10\\" stroke-linejoin=\\"round\\" stroke-linecap=\\"round\\"%3E%3Cpath stroke-dasharray=\\"140 26\\" stroke-dashoffset=\\"-20\\" d=\\"M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26\\" /%3E%3Cpath transform=\\"scale(-1 -1)\\" stroke-dasharray=\\"140 26\\" stroke-dashoffset=\\"-20\\" d=\\"M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26\\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\t-webkit-mask-repeat: no-repeat;\\r\\n\\t\\t\\tmask-repeat: no-repeat;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(h2 a:focus),\\r\\n\\tmain :global(h3 a:focus) {\\r\\n\\t\\topacity: 1;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(h2 a:hover),\\r\\n\\tmain :global(h3 a:hover) {\\r\\n\\t\\topacity: 1;\\r\\n\\t\\tcolor: hsl(340, 90%, 55%);\\r\\n\\t\\tcolor: var(--primary-6);\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(ul li::marker),\\r\\n\\tmain :global(ol li::marker) {\\r\\n\\t\\tcolor: hsl(340, 90%, 55%);\\r\\n\\t\\tcolor: var(--primary-6);\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(ol li::marker) {\\r\\n\\t\\tfont-family: 'Josefin Sans', sans-serif;\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(ul ul),\\r\\n\\tmain :global(ol ol) {\\r\\n\\t\\tmargin-top: 1em;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(ul > * + *),\\r\\n\\tmain :global(ol > * + *) {\\r\\n\\t\\tmargin-top: 0.5em;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(li) {\\r\\n\\t\\tline-height: 1.5;\\r\\n\\t}\\r\\n\\r\\n\\t@supports ((-webkit-mask-image: url()) or (mask-image: url())) {\\r\\n\\t\\tmain :global(ul),\\r\\n\\t\\tmain :global(ol) {\\r\\n\\t\\t\\tpadding: 0;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tmain :global(ul) {\\r\\n\\t\\t\\t--badge-size: 1.25em;\\r\\n\\t\\t\\tlist-style: none;\\r\\n\\t\\t\\tmargin-left: 1.25em;\\r\\n\\t\\t\\tmargin-left: var(--badge-size);\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tmain :global(ul li) {\\r\\n\\t\\t\\tposition: relative;\\r\\n\\t\\t\\tpadding-left: 0.25em;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tmain :global(ul li::before) {\\r\\n\\t\\t\\tcontent: '';\\r\\n\\t\\t\\tposition: absolute;\\r\\n\\t\\t\\ttop: 0.125em;\\r\\n\\t\\t\\tright: 100%;\\r\\n\\t\\t\\twidth: 1.25em;\\r\\n\\t\\t\\twidth: var(--badge-size);\\r\\n\\t\\t\\theight: 1.25em;\\r\\n\\t\\t\\theight: var(--badge-size);\\r\\n\\t\\t\\tbackground: hsl(340, 90%, 55%);\\r\\n\\t\\t\\tbackground: var(--primary-6);\\r\\n\\t\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath stroke-width=\\"10\\" d=\\"M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z\\" /%3E%3Cpath stroke-width=\\"8\\" d=\\"M -17 -0 l 12 12 21 -21\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath stroke-width=\\"10\\" d=\\"M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z\\" /%3E%3Cpath stroke-width=\\"8\\" d=\\"M -17 -0 l 12 12 21 -21\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tmain :global(ol) {\\r\\n\\t\\t\\t--badge-size: 1.25em;\\r\\n\\t\\t\\tlist-style: none;\\r\\n\\t\\t\\tmargin-left: 1.25em;\\r\\n\\t\\t\\tmargin-left: var(--badge-size);\\r\\n\\t\\t\\tcounter-reset: custom-counter;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tmain :global(ol li) {\\r\\n\\t\\t\\tposition: relative;\\r\\n\\t\\t\\tpadding-left: 0.25em;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tmain :global(ol li::before) {\\r\\n\\t\\t\\tcontent: counter(custom-counter);\\r\\n\\t\\t\\tcounter-increment: custom-counter;\\r\\n\\t\\t\\tfont-family: 'Josefin Sans', sans-serif;\\r\\n\\t\\t\\tfont-weight: 700;\\r\\n\\t\\t\\tcolor: hsl(340, 90%, 55%);\\r\\n\\t\\t\\tcolor: var(--primary-6);\\r\\n\\t\\t\\tposition: absolute;\\r\\n\\t\\t\\ttop: 0.125em;\\r\\n\\t\\t\\tright: 100%;\\r\\n\\t\\t\\twidth: 1.25em;\\r\\n\\t\\t\\twidth: var(--badge-size);\\r\\n\\t\\t\\theight: 1.25em;\\r\\n\\t\\t\\theight: var(--badge-size);\\r\\n\\t\\t\\ttext-align: center;\\r\\n\\t\\t\\ttransform: scale(0.8);\\r\\n\\t\\t\\ttransform-origin: 50% 80%;\\r\\n\\t\\t\\tdisplay: flex;\\r\\n\\t\\t\\tjustify-content: center;\\r\\n\\t\\t\\talign-items: center;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tmain :global(ol li::after) {\\r\\n\\t\\t\\tcontent: '';\\r\\n\\t\\t\\tposition: absolute;\\r\\n\\t\\t\\ttop: 0.125em;\\r\\n\\t\\t\\tright: 100%;\\r\\n\\t\\t\\twidth: 1.25em;\\r\\n\\t\\t\\twidth: var(--badge-size);\\r\\n\\t\\t\\theight: 1.25em;\\r\\n\\t\\t\\theight: var(--badge-size);\\r\\n\\t\\t\\tbackground: hsl(340, 90%, 55%);\\r\\n\\t\\t\\tbackground: var(--primary-6);\\r\\n\\t\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath stroke-width=\\"10\\" d=\\"M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath stroke-width=\\"10\\" d=\\"M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(blockquote) {\\r\\n\\t\\tmargin-left: auto;\\r\\n\\t\\tmargin-right: auto;\\r\\n\\t\\ttext-align: center;\\r\\n\\t\\twidth: max-content;\\r\\n\\t\\tmax-width: 40ch;\\r\\n\\t\\tline-height: 2;\\r\\n\\t\\tpadding: 0.8em 2em;\\r\\n\\t\\tborder-radius: 0.4rem;\\r\\n\\t\\tbackground: hsl(335, 100%, 86%);\\r\\n\\t\\tbackground: var(--primary-9);\\r\\n\\t\\tcolor: hsl(350, 100%, 8%);\\r\\n\\t\\tcolor: var(--primary-0);\\r\\n\\t}\\r\\n\\r\\n\\t@supports ((-webkit-mask-image: url()) or (mask-image: url())) {\\r\\n\\t\\tmain :global(blockquote) {\\r\\n\\t\\t\\tposition: relative;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tmain :global(blockquote::before),\\r\\n\\t\\tmain :global(blockquote::after) {\\r\\n\\t\\t\\tcontent: '';\\r\\n\\t\\t\\tposition: absolute;\\r\\n\\t\\t\\ttop: 50%;\\r\\n\\t\\t\\tleft: 0%;\\r\\n\\t\\t\\twidth: 3em;\\r\\n\\t\\t\\theight: 3em;\\r\\n\\t\\t\\tborder-radius: 50%;\\r\\n\\t\\t\\ttransform: translate(-50%, -50%);\\r\\n\\t\\t\\tbackground: hsl(340, 90%, 55%);\\r\\n\\t\\t\\tbackground: var(--primary-6);\\r\\n\\t\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"currentColor\\" stroke-width=\\"5\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" /%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" transform=\\"translate(-20 -20) scale(0.9)\\"/%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" transform=\\"translate(20 -25) scale(0.5)\\"/%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" transform=\\"translate(15 25) scale(0.8)\\"/%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" transform=\\"translate(-15 20) scale(0.4)\\"/%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"currentColor\\" stroke-width=\\"5\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" /%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" transform=\\"translate(-20 -20) scale(0.9)\\"/%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" transform=\\"translate(20 -25) scale(0.5)\\"/%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" transform=\\"translate(15 25) scale(0.8)\\"/%3E%3Cpath d=\\"M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10\\" transform=\\"translate(-15 20) scale(0.4)\\"/%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\tpointer-events: none;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tmain :global(blockquote::after) {\\r\\n\\t\\t\\tleft: 100%;\\r\\n\\t\\t\\ttransform: translate(-50%, -50%) scaleX(-1);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(table) {\\r\\n\\t\\tline-height: 2;\\r\\n\\t\\ttable-layout: fixed;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tborder-collapse: collapse;\\r\\n\\t\\tborder-radius: 0.4rem;\\r\\n\\t\\tcolor: hsl(214, 15%, 88%);\\r\\n\\t\\tcolor: var(--frappe-grey-9);\\r\\n\\t\\tbackground: hsl(210, 20%, 12%);\\r\\n\\t\\tbackground: var(--frappe-grey-1);\\r\\n\\t\\tfont-feature-settings: 'tnum';\\r\\n\\t\\tposition: relative;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(table::before) {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tbottom: 100%;\\r\\n\\t\\tleft: 0%;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 0.7rem;\\r\\n\\t\\tborder-radius: 0.4rem;\\r\\n\\t\\tborder-bottom-left-radius: 0;\\r\\n\\t\\tborder-bottom-right-radius: 0;\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t\\tbackground-position: 0 100%;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(table thead tr) {\\r\\n\\t\\ttext-align: left;\\r\\n\\t\\tcolor: hsl(215, 10%, 98%);\\r\\n\\t\\tcolor: var(--frappe-grey-10);\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg opacity=\\"0.5\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(table thead tr th) {\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t\\tpadding: 0 1rem 0.7rem;\\r\\n\\t\\ttransition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition: color var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(table thead tr th:hover) {\\r\\n\\t\\tcolor: hsl(340, 90%, 55%);\\r\\n\\t\\tcolor: var(--primary-6);\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(table tbody tr td) {\\r\\n\\t\\tfont-size: 1rem;\\r\\n\\t\\tfont-size: var(--size-400);\\r\\n\\t\\tpadding: 0.5rem 1rem;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(table tbody tr:nth-last-of-type(even) td) {\\r\\n\\t\\tbackground: hsl(210, 18%, 25%);\\r\\n\\t\\tbackground: var(--frappe-grey-2);\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(table [align='right']) {\\r\\n\\t\\ttext-align: right;\\r\\n\\t}\\r\\n\\r\\n\\tmain :global(table [align='center']) {\\r\\n\\t\\ttext-align: center;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"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"}`
};
async function load({ page: page2, session }) {
  const { slug } = page2.params;
  const match = session.posts.find((post) => post.slug === slug);
  if (match) {
    const posts = {};
    const post = await posts[match.path]();
    const { default: Component, metadata } = post;
    return { props: { ...metadata, Component } };
  }
  return {
    status: 404,
    error: new Error("Post not found")
  };
}
var U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { brief } = $$props;
  let { keywords } = $$props;
  let { Component } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.brief === void 0 && $$bindings.brief && brief !== void 0)
    $$bindings.brief(brief);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.Component === void 0 && $$bindings.Component && Component !== void 0)
    $$bindings.Component(Component);
  $$result.css.add(css);
  return `${validate_component(Meta, "Meta").$$render($$result, {
    description: title + ", a blog post from borntofrappe. " + brief,
    image: "blog"
  }, {}, {})}

${validate_component(Header, "Header").$$render($$result, { title, keywords }, {}, {})}

<main id="${"content"}" class="${"svelte-nsifvg"}">${validate_component(Component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
</main>`;
});
var _slug_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": U5Bslugu5D,
  load
});

// .svelte-kit/netlify/entry.js
init();
async function handler(event) {
  const { path, httpMethod, headers, rawQuery, body, isBase64Encoded } = event;
  const query = new URLSearchParams(rawQuery);
  const encoding = isBase64Encoded ? "base64" : headers["content-encoding"] || "utf-8";
  const rawBody = typeof body === "string" ? Buffer.from(body, encoding) : body;
  const rendered = await render({
    method: httpMethod,
    headers,
    path,
    query,
    rawBody
  });
  if (rendered) {
    return {
      isBase64Encoded: false,
      statusCode: rendered.status,
      ...splitHeaders(rendered.headers),
      body: rendered.body
    };
  }
  return {
    statusCode: 404,
    body: "Not found"
  };
}
function splitHeaders(headers) {
  const h = {};
  const m = {};
  for (const key in headers) {
    const value = headers[key];
    const target = Array.isArray(value) ? m : h;
    target[key] = value;
  }
  return {
    headers: h,
    multiValueHeaders: m
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
