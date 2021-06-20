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
var { Readable } = import_stream.default;
var wm = new WeakMap();
async function* read(parts) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else {
      yield part;
    }
  }
}
var Blob = class {
  constructor(blobParts = [], options2 = {}) {
    let size = 0;
    const parts = blobParts.map((element) => {
      let buffer;
      if (element instanceof Buffer) {
        buffer = element;
      } else if (ArrayBuffer.isView(element)) {
        buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
      } else if (element instanceof ArrayBuffer) {
        buffer = Buffer.from(element);
      } else if (element instanceof Blob) {
        buffer = element;
      } else {
        buffer = Buffer.from(typeof element === "string" ? element : String(element));
      }
      size += buffer.length || buffer.size || 0;
      return buffer;
    });
    const type = options2.type === void 0 ? "" : String(options2.type).toLowerCase();
    wm.set(this, {
      type: /[^\u0020-\u007E]/.test(type) ? "" : type,
      size,
      parts
    });
  }
  get size() {
    return wm.get(this).size;
  }
  get type() {
    return wm.get(this).type;
  }
  async text() {
    return Buffer.from(await this.arrayBuffer()).toString();
  }
  async arrayBuffer() {
    const data = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of this.stream()) {
      data.set(chunk, offset);
      offset += chunk.length;
    }
    return data.buffer;
  }
  stream() {
    return Readable.from(read(wm.get(this).parts));
  }
  slice(start = 0, end = this.size, type = "") {
    const { size } = this;
    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = wm.get(this).parts.values();
    const blobParts = [];
    let added = 0;
    for (const part of parts) {
      const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size2 <= relativeStart) {
        relativeStart -= size2;
        relativeEnd -= size2;
      } else {
        const chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
        blobParts.push(chunk);
        added += ArrayBuffer.isView(chunk) ? chunk.byteLength : chunk.size;
        relativeStart = 0;
        if (added >= span) {
          break;
        }
      }
    }
    const blob = new Blob([], { type: String(type).toLowerCase() });
    Object.assign(wm.get(blob), { size: span, parts: blobParts });
    return blob;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](object) {
    return object && typeof object === "object" && typeof object.stream === "function" && object.stream.length === 0 && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
  }
};
Object.defineProperties(Blob.prototype, {
  size: { enumerable: true },
  type: { enumerable: true },
  slice: { enumerable: true }
});
var fetchBlob = Blob;
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
  return typeof object === "object" && object[NAME] === "AbortSignal";
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
    if (isBlob(value)) {
      length += value.size;
    } else {
      length += Buffer.byteLength(String(value));
    }
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
      body.on("error", (err) => {
        const error2 = err instanceof FetchBaseError ? err : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${err.message}`, "system", err);
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
    return new fetchBlob([buf], {
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
    body = body.stream();
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
        const err = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(err);
        throw err;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error2) {
    if (error2 instanceof FetchBaseError) {
      throw error2;
    } else {
      throw new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error2.message}`, "system", error2);
    }
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
    body.stream().pipe(dest);
  } else if (Buffer.isBuffer(body)) {
    dest.write(body);
    dest.end();
  } else {
    body.pipe(dest);
  }
};
var validateHeaderName = typeof import_http.default.validateHeaderName === "function" ? import_http.default.validateHeaderName : (name) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const err = new TypeError(`Header name must be a valid HTTP token [${name}]`);
    Object.defineProperty(err, "code", { value: "ERR_INVALID_HTTP_TOKEN" });
    throw err;
  }
};
var validateHeaderValue = typeof import_http.default.validateHeaderValue === "function" ? import_http.default.validateHeaderValue : (name, value) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const err = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(err, "code", { value: "ERR_INVALID_CHAR" });
    throw err;
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
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase(), String(value));
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase());
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
  forEach(callback) {
    for (const name of this.keys()) {
      callback(this.get(name), name);
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
var Response2 = class extends Body {
  constructor(body = null, options2 = {}) {
    super(body, options2);
    const status = options2.status || 200;
    const headers = new Headers(options2.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS$1] = {
      url: options2.url,
      status,
      statusText: options2.statusText || "",
      headers,
      counter: options2.counter,
      highWaterMark: options2.highWaterMark
    };
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
    return new Response2(clone(this, this.highWaterMark), {
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
    return new Response2(null, {
      headers: {
        location: new URL(url).toString()
      },
      status
    });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response2.prototype, {
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
    if (signal !== null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
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
async function fetch2(url, options_) {
  return new Promise((resolve2, reject) => {
    const request = new Request(url, options_);
    const options2 = getNodeRequestOptions(request);
    if (!supportedSchemas.has(options2.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${options2.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (options2.protocol === "data:") {
      const data = src(request.url);
      const response2 = new Response2(data, { headers: { "Content-Type": data.typeFull } });
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
    request_.on("error", (err) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
      finalize();
    });
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
              try {
                headers.set("Location", locationURL);
              } catch (error2) {
                reject(error2);
              }
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
            resolve2(fetch2(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
        }
      }
      response_.once("end", () => {
        if (signal) {
          signal.removeEventListener("abort", abortAndFinalize);
        }
      });
      let body = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error2) => {
        reject(error2);
      });
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
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      const zlibOptions = {
        flush: import_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createGunzip(zlibOptions), (error2) => {
          reject(error2);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error2) => {
          reject(error2);
        });
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflate(), (error2) => {
              reject(error2);
            });
          } else {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflateRaw(), (error2) => {
              reject(error2);
            });
          }
          response = new Response2(body, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createBrotliDecompress(), (error2) => {
          reject(error2);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      response = new Response2(body, responseOptions);
      resolve2(response);
    });
    writeToStream(request_, request);
  });
}
globalThis.fetch = fetch2;
globalThis.Response = Response2;
globalThis.Request = Request;
globalThis.Headers = Headers;

// node_modules/@sveltejs/kit/dist/ssr.js
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
function noop() {
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue.push(s2, value);
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
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
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
var s$1 = JSON.stringify;
async function render_response({
  options: options2,
  $session,
  page_config,
  status,
  error: error2,
  branch,
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
  if (branch) {
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
						${branch.map(({ node }) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page2.host ? s$1(page2.host) : "location.host"}, // TODO this is redundant
						path: ${s$1(page2.path)},
						query: new URLSearchParams(${s$1(page2.query.toString())}),
						params: ${s$1(page2.params)}
					}
				}` : "null"}
			});
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
    return body2 ? `<script type="svelte-data" url="${url}" body="${hash(body2)}">${json}<\/script>` : `<script type="svelte-data" url="${url}">${json}<\/script>`;
  }).join("\n\n			")}
		`.replace(/^\t{2}/gm, "");
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
      fail(err);
    return null;
  }
}
function serialize_error(error2) {
  if (!error2)
    return null;
  let serialized = try_serialize(error2);
  if (!serialized) {
    const { name, message, stack } = error2;
    serialized = try_serialize({ name, message, stack });
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
function normalize(loaded) {
  if (loaded.error) {
    const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    const status = loaded.status;
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
  return loaded;
}
function resolve(base, path) {
  const baseparts = path[0] === "/" ? [] : base.slice(1).split("/");
  const pathparts = path[0] === "/" ? path.slice(1).split("/") : path.split("/");
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
  return `/${baseparts.join("/")}`;
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
  context,
  is_leaf,
  is_error,
  status,
  error: error2
}) {
  const { module: module2 } = node;
  let uses_credentials = false;
  const fetched = [];
  let loaded;
  if (module2.load) {
    const load_input = {
      page: page2,
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
        if (options2.read && url.startsWith(options2.paths.assets)) {
          url = url.replace(options2.paths.assets, "");
        }
        if (url.startsWith("//")) {
          throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
        }
        let response;
        if (/^[a-zA-Z]+:/.test(url)) {
          response = await fetch(url, opts);
        } else {
          const [path, search] = url.split("?");
          const resolved = resolve(request.path, path);
          const filename = resolved.slice(1);
          const filename_html = `${filename}/index.html`;
          const asset = options2.manifest.assets.find((d) => d.file === filename || d.file === filename_html);
          if (asset) {
            if (options2.read) {
              response = new Response(options2.read(asset.file), {
                headers: {
                  "content-type": asset.type
                }
              });
            } else {
              response = await fetch(`http://${page2.host}/${asset.file}`, opts);
            }
          }
          if (!response) {
            const headers = { ...opts.headers };
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
            const rendered = await respond({
              host: request.host,
              method: opts.method || "GET",
              headers,
              path: resolved,
              rawBody: opts.body,
              query: new URLSearchParams(search)
            }, options2, {
              fetched: url,
              initiator: route
            });
            if (rendered) {
              if (state.prerender) {
                state.prerender.dependencies.set(resolved, rendered);
              }
              response = new Response(rendered.body, {
                status: rendered.status,
                headers: rendered.headers
              });
            }
          }
        }
        if (response) {
          const proxy = new Proxy(response, {
            get(response2, key, receiver) {
              async function text() {
                const body = await response2.text();
                const headers = {};
                for (const [key2, value] of response2.headers) {
                  if (key2 !== "etag" && key2 !== "set-cookie")
                    headers[key2] = value;
                }
                if (!opts.body || typeof opts.body === "string") {
                  fetched.push({
                    url,
                    body: opts.body,
                    json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":${escape(body)}}`
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
      context: { ...context }
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
  return {
    node,
    loaded: normalize(loaded),
    context: loaded.context || context,
    fetched,
    uses_credentials
  };
}
var escaped = {
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
function escape(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
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
    context: {},
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
      context: loaded.context,
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
  } catch (error3) {
    options2.handle_error(error3);
    return {
      status: 500,
      headers: {},
      body: error3.stack
    };
  }
}
async function respond$1({ request, options: options2, state, $session, route }) {
  const match = route.pattern.exec(request.path);
  const params = route.params(match);
  const page2 = {
    host: request.host,
    path: request.path,
    query: request.query,
    params
  };
  let nodes;
  try {
    nodes = await Promise.all(route.a.map((id) => id && options2.load_component(id)));
  } catch (error3) {
    options2.handle_error(error3);
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
  const page_config = {
    ssr: "ssr" in leaf ? leaf.ssr : options2.ssr,
    router: "router" in leaf ? leaf.router : options2.router,
    hydrate: "hydrate" in leaf ? leaf.hydrate : options2.hydrate
  };
  if (!leaf.prerender && state.prerender && !state.prerender.all) {
    return {
      status: 204,
      headers: {},
      body: null
    };
  }
  let branch;
  let status = 200;
  let error2;
  ssr:
    if (page_config.ssr) {
      let context = {};
      branch = [];
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        let loaded;
        if (node) {
          try {
            loaded = await load_node({
              request,
              options: options2,
              state,
              route,
              page: page2,
              node,
              $session,
              context,
              is_leaf: i === nodes.length - 1,
              is_error: false
            });
            if (!loaded)
              return;
            if (loaded.loaded.redirect) {
              return {
                status: loaded.loaded.status,
                headers: {
                  location: encodeURI(loaded.loaded.redirect)
                }
              };
            }
            if (loaded.loaded.error) {
              ({ status, error: error2 } = loaded.loaded);
            }
          } catch (e) {
            options2.handle_error(e);
            status = 500;
            error2 = e;
          }
          if (error2) {
            while (i--) {
              if (route.b[i]) {
                const error_node = await options2.load_component(route.b[i]);
                let error_loaded;
                let node_loaded;
                let j = i;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  error_loaded = await load_node({
                    request,
                    options: options2,
                    state,
                    route,
                    page: page2,
                    node: error_node,
                    $session,
                    context: node_loaded.context,
                    is_leaf: false,
                    is_error: true,
                    status,
                    error: error2
                  });
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  break ssr;
                } catch (e) {
                  options2.handle_error(e);
                  continue;
                }
              }
            }
            return await respond_with_error({
              request,
              options: options2,
              state,
              $session,
              status,
              error: error2
            });
          }
        }
        branch.push(loaded);
        if (loaded && loaded.loaded.context) {
          context = {
            ...context,
            ...loaded.loaded.context
          };
        }
      }
    }
  try {
    return await render_response({
      options: options2,
      $session,
      page_config,
      status,
      error: error2,
      branch: branch && branch.filter(Boolean),
      page: page2
    });
  } catch (error3) {
    options2.handle_error(error3);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error3
    });
  }
}
async function render_page(request, route, options2, state) {
  if (state.initiator === route) {
    return {
      status: 404,
      headers: {},
      body: `Not found: ${request.path}`
    };
  }
  const $session = await options2.hooks.getSession(request);
  if (route) {
    const response = await respond$1({
      request,
      options: options2,
      state,
      $session,
      route
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
  } else {
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 404,
      error: new Error(`Not found: ${request.path}`)
    });
  }
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
async function render_route(request, route) {
  const mod = await route.load();
  const handler2 = mod[request.method.toLowerCase().replace("delete", "del")];
  if (handler2) {
    const match = route.pattern.exec(request.path);
    const params = route.params(match);
    const response = await handler2({ ...request, params });
    if (response) {
      if (typeof response !== "object") {
        return error(`Invalid response from route ${request.path}: expected an object, got ${typeof response}`);
      }
      let { status = 200, body, headers = {} } = response;
      headers = lowercase_keys(headers);
      const type = headers["content-type"];
      if (type === "application/octet-stream" && !(body instanceof Uint8Array)) {
        return error(`Invalid response from route ${request.path}: body must be an instance of Uint8Array if content type is application/octet-stream`);
      }
      if (body instanceof Uint8Array && type !== "application/octet-stream") {
        return error(`Invalid response from route ${request.path}: Uint8Array body must be accompanied by content-type: application/octet-stream header`);
      }
      let normalized_body;
      if (typeof body === "object" && (!type || type === "application/json")) {
        headers = { ...headers, "content-type": "application/json" };
        normalized_body = JSON.stringify(body);
      } else {
        normalized_body = body;
      }
      return { status, body: normalized_body, headers };
    }
  }
}
function read_only_form_data() {
  const map = new Map();
  return {
    append(key, value) {
      if (map.has(key)) {
        map.get(key).push(value);
      } else {
        map.set(key, [value]);
      }
    },
    data: new ReadOnlyFormData(map)
  };
}
var ReadOnlyFormData = class {
  #map;
  constructor(map) {
    this.#map = map;
  }
  get(key) {
    const value = this.#map.get(key);
    return value && value[0];
  }
  getAll(key) {
    return this.#map.get(key);
  }
  has(key) {
    return this.#map.has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *entries() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *keys() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield key;
      }
    }
  }
  *values() {
    for (const [, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield value;
      }
    }
  }
};
function parse_body(raw, headers) {
  if (!raw)
    return raw;
  const [type, ...directives] = headers["content-type"].split(/;\s*/);
  if (typeof raw === "string") {
    switch (type) {
      case "text/plain":
        return raw;
      case "application/json":
        return JSON.parse(raw);
      case "application/x-www-form-urlencoded":
        return get_urlencoded(raw);
      case "multipart/form-data": {
        const boundary = directives.find((directive) => directive.startsWith("boundary="));
        if (!boundary)
          throw new Error("Missing boundary");
        return get_multipart(raw, boundary.slice("boundary=".length));
      }
      default:
        throw new Error(`Invalid Content-Type ${type}`);
    }
  }
  return raw;
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
  const nope = () => {
    throw new Error("Malformed form data");
  };
  if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
    nope();
  }
  const { data, append } = read_only_form_data();
  parts.slice(1, -1).forEach((part) => {
    const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
    const raw_headers = match[1];
    const body = match[2].trim();
    let key;
    raw_headers.split("\r\n").forEach((str) => {
      const [raw_header, ...raw_directives] = str.split("; ");
      let [name, value] = raw_header.split(": ");
      name = name.toLowerCase();
      const directives = {};
      raw_directives.forEach((raw_directive) => {
        const [name2, value2] = raw_directive.split("=");
        directives[name2] = JSON.parse(value2);
      });
      if (name === "content-disposition") {
        if (value !== "form-data")
          nope();
        if (directives.filename) {
          throw new Error("File upload is not yet implemented");
        }
        if (directives.name) {
          key = directives.name;
        }
      }
    });
    if (!key)
      nope();
    append(key, body);
  });
  return data;
}
async function respond(incoming, options2, state = {}) {
  if (incoming.path !== "/" && options2.trailing_slash !== "ignore") {
    const has_trailing_slash = incoming.path.endsWith("/");
    if (has_trailing_slash && options2.trailing_slash === "never" || !has_trailing_slash && options2.trailing_slash === "always" && !incoming.path.split("/").pop().includes(".")) {
      const path = has_trailing_slash ? incoming.path.slice(0, -1) : incoming.path + "/";
      const q = incoming.query.toString();
      return {
        status: 301,
        headers: {
          location: encodeURI(path + (q ? `?${q}` : ""))
        }
      };
    }
  }
  try {
    const headers = lowercase_keys(incoming.headers);
    return await options2.hooks.handle({
      request: {
        ...incoming,
        headers,
        body: parse_body(incoming.rawBody, headers),
        params: null,
        locals: {}
      },
      resolve: async (request) => {
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            options: options2,
            $session: await options2.hooks.getSession(request),
            page_config: { ssr: false, router: true, hydrate: true },
            status: 200,
            error: null,
            branch: [],
            page: null
          });
        }
        for (const route of options2.manifest.routes) {
          if (!route.pattern.test(request.path))
            continue;
          const response = route.type === "endpoint" ? await render_route(request, route) : await render_page(request, route, options2, state);
          if (response) {
            if (response.status === 200) {
              if (!/(no-store|immutable)/.test(response.headers["cache-control"])) {
                const etag = `"${hash(response.body)}"`;
                if (request.headers["if-none-match"] === etag) {
                  return {
                    status: 304,
                    headers: {},
                    body: null
                  };
                }
                response.headers["etag"] = etag;
              }
            }
            return response;
          }
        }
        return await render_page(request, null, options2, state);
      }
    });
  } catch (e) {
    options2.handle_error(e);
    return {
      status: 500,
      headers: {},
      body: options2.dev ? e.stack : e.message
    };
  }
}

// node_modules/svelte/internal/index.mjs
function noop2() {
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
function is_function(thing) {
  return typeof thing === "function";
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop2;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
var tasks = new Set();
var active_docs = new Set();
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
var resolved_promise = Promise.resolve();
var seen_callbacks = new Set();
var outroing = new Set();
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
var boolean_attributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
var escaped2 = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape2(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped2[match]);
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
      context: new Map(parent_component ? parent_component.$$.context : context || []),
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
  return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape2(value)) : `"${value}"`}`}`;
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const { on_mount } = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop2;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index2 = callbacks.indexOf(callback);
        if (index2 !== -1)
          callbacks.splice(index2, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}

// .svelte-kit/output/server/app.js
var css$3 = {
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
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });
    mounted = true;
    return unsubscribe;
  });
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
  $$result.css.add(css$3);
  {
    stores.page.set(page2);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-1j55zn5"}">${navigated ? `${escape2(title)}` : ``}</div>` : ``}`;
});
function set_paths(paths) {
}
function set_prerendering(value) {
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
var template = ({ head, body }) => '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n\n    <link rel="icon" href="/icons/favicon.ico" />\n    <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />\n    <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />\n    <link rel="manifest" href="/manifest.json" />\n\n    <link\n      rel="preload"\n      href="/fonts/MavenPro-Bold-latin.woff2"\n      as="font"\n      type="font/woff2"\n      crossorigin=""\n    />\n\n    <link\n      rel="preload"\n      href="/fonts/MavenPro-Semibold-latin.woff2"\n      as="font"\n      type="font/woff2"\n      crossorigin=""\n    />\n\n    <link\n      rel="preload"\n      href="/fonts/MavenPro-Medium-latin.woff2"\n      as="font"\n      type="font/woff2"\n      crossorigin=""\n    />\n\n    <link\n      rel="preload"\n      href="/fonts/Cambay-Regular-latin.woff2"\n      as="font"\n      type="font/woff2"\n      crossorigin=""\n    />\n\n    ' + head + '\n  </head>\n  <body>\n    <div id="svelte">' + body + "</div>\n  </body>\n</html>\n";
var options = null;
function init(settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: "/./_app/start-66813d20.js",
      css: ["/./_app/assets/start-a8cd1609.css"],
      js: ["/./_app/start-66813d20.js", "/./_app/chunks/vendor-a440c6a6.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => "/./_app/" + entry_lookup[id],
    get_stack: (error2) => String(error2),
    handle_error: (error2) => {
      console.error(error2.stack);
      error2.stack = options.get_stack(error2);
    },
    hooks: get_hooks(user_hooks),
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    read: settings.read,
    root: Root,
    router: true,
    ssr: true,
    target: "#svelte",
    template,
    trailing_slash: "never"
  };
}
var empty = () => ({});
var manifest = {
  assets: [{ "file": "fonts/Cambay-Bold-Italic-latin.woff", "size": 25536, "type": "font/woff" }, { "file": "fonts/Cambay-Bold-Italic-latin.woff2", "size": 20700, "type": "font/woff2" }, { "file": "fonts/Cambay-Bold-latin.woff", "size": 24788, "type": "font/woff" }, { "file": "fonts/Cambay-Bold-latin.woff2", "size": 20012, "type": "font/woff2" }, { "file": "fonts/Cambay-Regular-Italic-latin.woff", "size": 25128, "type": "font/woff" }, { "file": "fonts/Cambay-Regular-Italic-latin.woff2", "size": 20304, "type": "font/woff2" }, { "file": "fonts/Cambay-Regular-latin.woff", "size": 25236, "type": "font/woff" }, { "file": "fonts/Cambay-Regular-latin.woff2", "size": 20260, "type": "font/woff2" }, { "file": "fonts/MavenPro-Bold-latin.woff", "size": 12716, "type": "font/woff" }, { "file": "fonts/MavenPro-Bold-latin.woff2", "size": 9884, "type": "font/woff2" }, { "file": "fonts/MavenPro-Medium-latin.woff", "size": 12724, "type": "font/woff" }, { "file": "fonts/MavenPro-Medium-latin.woff2", "size": 9880, "type": "font/woff2" }, { "file": "fonts/MavenPro-Semibold-latin.woff", "size": 12696, "type": "font/woff" }, { "file": "fonts/MavenPro-Semibold-latin.woff2", "size": 9900, "type": "font/woff2" }, { "file": "fonts/SourceCodePro-Regular-latin.woff", "size": 17580, "type": "font/woff" }, { "file": "fonts/SourceCodePro-Regular-latin.woff2", "size": 13764, "type": "font/woff2" }, { "file": "icons/android-chrome-192x192.png", "size": 8293, "type": "image/png" }, { "file": "icons/android-chrome-512x512.png", "size": 23681, "type": "image/png" }, { "file": "icons/apple-touch-icon.png", "size": 3490, "type": "image/png" }, { "file": "icons/favicon.ico", "size": 15086, "type": "image/vnd.microsoft.icon" }, { "file": "icons/icon.svg", "size": 619, "type": "image/svg+xml" }, { "file": "manifest.json", "size": 439, "type": "application/json" }],
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
    }
  ]
};
var get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({ request, resolve: resolve2 }) => resolve2(request))
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
  })
};
var metadata_lookup = { "src/routes/__layout.svelte": { "entry": "/./_app/pages/__layout.svelte-1ab8e982.js", "css": ["/./_app/assets/pages/__layout.svelte-6bc5b582.css"], "js": ["/./_app/pages/__layout.svelte-1ab8e982.js", "/./_app/chunks/vendor-a440c6a6.js"], "styles": null }, "src/routes/__error.svelte": { "entry": "/./_app/pages/__error.svelte-718b6d7f.js", "css": [], "js": ["/./_app/pages/__error.svelte-718b6d7f.js", "/./_app/chunks/vendor-a440c6a6.js"], "styles": null }, "src/routes/index.svelte": { "entry": "/./_app/pages/index.svelte-20c2a71c.js", "css": [], "js": ["/./_app/pages/index.svelte-20c2a71c.js", "/./_app/chunks/vendor-a440c6a6.js"], "styles": null }, "src/routes/blog/index.svelte": { "entry": "/./_app/pages/blog/index.svelte-04346434.js", "css": [], "js": ["/./_app/pages/blog/index.svelte-04346434.js", "/./_app/chunks/vendor-a440c6a6.js"], "styles": null } };
async function load_component(file) {
  return {
    module: await module_lookup[file](),
    ...metadata_lookup[file]
  };
}
init({ paths: { "base": "", "assets": "/." } });
function render(request, {
  prerender
} = {}) {
  const host = request.headers["host"];
  return respond({ ...request, host }, options, { prerender });
}
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
  blog: `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="8"><path d="M -26 -19 h -20 v -6 a 12 12 0 0 1 24 0 v 50 a 12 12 0 0 0 24 0 v -5 h 44 v 5 a 12 12 0 0 1 -12 12 h -44 a 12 12 0 0 1 -12 -12" /><path d="M -34 -37 h 44 a 12 12 0 0 1 12 12 v 45 h -20 v 5 a 12 12 0 0 1 -24 0 v -50 a 12 12 0 0 0 -12 -12" /></g><g stroke-width="6"><path d="M -10 -20 h 20" /><path d="M -10 -8 h 10" /><path d="M -10 4 h 15" /><path d="M -10 16 h 5" /></g></g></svg>`,
  bug: `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"><g transform="scale(0.8)"><g fill="none" stroke-width="16"><g transform="translate(0 13.5)"><path d="M 34 0 h -68"/><path transform="rotate(45)" d="M 40 0 h -80"/><path transform="rotate(-45)" d="M 40 0 h -80"/></g></g><g fill="currentColor" stroke-width="8"><path d="M -0 -46 a 17 17 0 0 1 17 17 h -34 a 17 17 0 0 1 17 -17" /><path d="M -0 -10 h 25 v 25 a 25 25 0 0 1 -50 0 v -25 z" /></g></g></g></svg>`,
  rocket: `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"><g transform="translate(2 -1.5) rotate(45)"><path stroke-width="8" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" /><g stroke-width="7"><path d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /><path transform="scale(-1 1)" d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /><path d="M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5" /><circle r="9" cy="-11" /></g></g></g></svg>`
};
var css$2 = {
  code: "nav.svelte-wal0qu>.svelte-wal0qu+.svelte-wal0qu{margin-left:0.3em}nav.svelte-wal0qu a.svelte-wal0qu.svelte-wal0qu{text-decoration:none;font-family:'Maven Pro', sans-serif;font-weight:700;padding:0.25rem 0;display:inline-flex;align-items:center}nav.svelte-wal0qu a.svelte-wal0qu svg{margin-left:0.3rem;width:1.5em;height:auto}@media(prefers-color-scheme: dark){html:not([data-preference]) nav a{font-weight:600}}html[data-preference='dark'] nav a{font-weight:600}",
  map: `{"version":3,"file":"Breadcrumbs.svelte","sources":["Breadcrumbs.svelte"],"sourcesContent":["<script>\\r\\n  import { page } from '$app/stores';\\r\\n  import icons from '$lib/icons';\\r\\n\\r\\n  const root = {\\r\\n    href: '/',\\r\\n    text: 'borntofrappe',\\r\\n    icon: icons.rocket,\\r\\n  };\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n  <title\\r\\n    >{\`\${root.text}\${$page.path === '/' ? '' : $page.path}\`\\r\\n      .split('/')\\r\\n      .join(' / ')}</title\\r\\n  >\\r\\n</svelte:head>\\r\\n\\r\\n<nav aria-label=\\"Breadcrumb navigation\\">\\r\\n  <a href={root.href}>{root.text} {@html root.icon}</a>\\r\\n  {#if $page.path !== '/'}\\r\\n    {#each $page.path\\r\\n      .split('/')\\r\\n      .slice(1)\\r\\n      .reduce((acc, curr, i) => [...acc, { href: i === 0 ? \`/\${curr}\` : \`\${acc[i - 1].href}/\${curr}\`, text: \`/ \${curr}\`, icon: icons[curr] || '' }], []) as { href, text, icon }}\\r\\n      <a {href}>{text} {@html icon}</a>\\r\\n    {/each}\\r\\n  {/if}\\r\\n</nav>\\r\\n\\r\\n<style>\\r\\n  nav > * + * {\\r\\n    margin-left: 0.3em;\\r\\n  }\\r\\n\\r\\n  nav a {\\r\\n    text-decoration: none;\\r\\n    font-family: 'Maven Pro', sans-serif;\\r\\n    font-weight: 700;\\r\\n    padding: 0.25rem 0;\\r\\n    display: inline-flex;\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  nav a :global(svg) {\\r\\n    margin-left: 0.3rem;\\r\\n    width: 1.5em;\\r\\n    height: auto;\\r\\n  }\\r\\n\\r\\n  @media (prefers-color-scheme: dark) {\\r\\n    :global(html:not([data-preference]) nav a) {\\r\\n      font-weight: 600;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  :global(html[data-preference='dark'] nav a) {\\r\\n    font-weight: 600;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAgCE,iBAAG,CAAG,cAAC,CAAG,cAAE,CAAC,AACX,WAAW,CAAE,KAAK,AACpB,CAAC,AAED,iBAAG,CAAC,CAAC,4BAAC,CAAC,AACL,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,CACpC,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,OAAO,CAAC,CAAC,CAClB,OAAO,CAAE,WAAW,CACpB,WAAW,CAAE,MAAM,AACrB,CAAC,AAED,iBAAG,CAAC,eAAC,CAAC,AAAQ,GAAG,AAAE,CAAC,AAClB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,AACd,CAAC,AAED,MAAM,AAAC,uBAAuB,IAAI,CAAC,AAAC,CAAC,AAC3B,iCAAiC,AAAE,CAAC,AAC1C,WAAW,CAAE,GAAG,AAClB,CAAC,AACH,CAAC,AAEO,kCAAkC,AAAE,CAAC,AAC3C,WAAW,CAAE,GAAG,AAClB,CAAC"}`
};
var Breadcrumbs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const root = {
    href: "/",
    text: "borntofrappe",
    icon: icons.rocket
  };
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${escape2(`${root.text}${$page.path === "/" ? "" : $page.path}`.split("/").join(" / "))}</title>`, ""}`, ""}

<nav aria-label="${"Breadcrumb navigation"}" class="${"svelte-wal0qu"}"><a${add_attribute("href", root.href, 0)} class="${"svelte-wal0qu"}">${escape2(root.text)} ${root.icon}</a>
  ${$page.path !== "/" ? `${each($page.path.split("/").slice(1).reduce((acc, curr, i) => [
    ...acc,
    {
      href: i === 0 ? `/${curr}` : `${acc[i - 1].href}/${curr}`,
      text: `/ ${curr}`,
      icon: icons[curr] || ""
    }
  ], []), ({ href, text, icon }) => `<a${add_attribute("href", href, 0)} class="${"svelte-wal0qu"}">${escape2(text)} ${icon}</a>`)}` : ``}
</nav>`;
});
var css$1 = {
  code: `footer.svelte-n4ey2i.svelte-n4ey2i{--animation-duration:2s;--animation-timing-function:var(--ease-in-out-sine);text-align:center;padding:2.25rem 1rem 2rem;color:hsl(215, 10%, 98%);color:var(--frappe-grey-10);background:hsl(215, 22%, 5%);background:var(--frappe-grey-0);background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');background-size:20px;position:relative}footer.svelte-n4ey2i.svelte-n4ey2i::before{content:'';position:absolute;left:0%;bottom:100%;width:100%;height:20px;background:inherit;background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');background-size:20px;-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');-webkit-mask-size:100px 40px;mask-size:100px 40px;-webkit-mask-position:50% 0;mask-position:50% 0}footer.svelte-n4ey2i a.svelte-n4ey2i{padding:0.2rem 0;border:initial;text-decoration:none;font-family:'Maven Pro', sans-serif;font-weight:600;border-bottom:0.1rem solid hsl(340, 90%, 55%);border-bottom:0.1rem solid var(--primary-6);transition:color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:color 0.25s var(--ease-in-out-sine)}footer.svelte-n4ey2i a.svelte-n4ey2i:hover,footer.svelte-n4ey2i a.svelte-n4ey2i:focus{color:hsl(340, 90%, 55%);color:var(--primary-6)}footer.svelte-n4ey2i a.svelte-n4ey2i:focus{outline:none}footer.svelte-n4ey2i a.svelte-n4ey2i::before,footer.svelte-n4ey2i a.svelte-n4ey2i::after{content:'';position:absolute;top:0%;left:50%;transform:translate(-50%, -50%);margin-top:-8px}footer.svelte-n4ey2i a.svelte-n4ey2i::before{width:64px;height:64px;color:hsl(215, 22%, 5%);color:var(--grey-0);background:hsl(215, 10%, 98%);background:var(--grey-10);border:0.4rem solid currentColor;border-radius:50%;transition:color 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:color var(--transition-duration) var(--ease-in-out-sine)}footer.svelte-n4ey2i a.svelte-n4ey2i::after{transform:translate(-50%, -50%) scale(1);width:28px;height:28px;background:hsl(215, 22%, 5%);background:var(--grey-0);border-radius:50%;transition:background 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:background var(--transition-duration) var(--ease-in-out-sine)}@supports ((mask-image: url()) or (-webkit-mask-image: url())){footer.svelte-n4ey2i a.svelte-n4ey2i::after{border-radius:initial;mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"%3E%3Cpath d="M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0" /%3E%3C/g%3E%3C/svg%3E');-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"%3E%3Cpath d="M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0" /%3E%3C/g%3E%3C/svg%3E')}}footer.svelte-n4ey2i a.svelte-n4ey2i::after{animation:svelte-n4ey2i-heart-beat 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite\r
      paused;animation:svelte-n4ey2i-heart-beat var(--animation-duration)\r
      var(--animation-timing-function) infinite paused}@keyframes svelte-n4ey2i-heart-beat{10%,30%{transform:translate(-50%, -50%) scale(0.7)}0%,20%,40%{transform:translate(-50%, -50%) scale(1)}}footer.svelte-n4ey2i a.svelte-n4ey2i:hover::before,footer.svelte-n4ey2i a.svelte-n4ey2i:focus::before{color:hsl(340, 90%, 55%);color:var(--primary-6)}footer.svelte-n4ey2i a.svelte-n4ey2i:hover::after,footer.svelte-n4ey2i a.svelte-n4ey2i:focus::after{background:currentColor}@media(prefers-reduced-motion: no-preference){footer.svelte-n4ey2i a.svelte-n4ey2i:hover::after,footer.svelte-n4ey2i a.svelte-n4ey2i:focus::after{animation-play-state:running}}`,
  map: `{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<footer>\\r\\n  <a href=\\"https://twitter.com/borntofrappe\\">borntofrappe</a>\\r\\n</footer>\\r\\n\\r\\n<style>\\r\\n  footer {\\r\\n    --animation-duration: 2s;\\r\\n    --animation-timing-function: var(--ease-in-out-sine);\\r\\n    text-align: center;\\r\\n    padding: 2.25rem 1rem 2rem;\\r\\n    color: hsl(215, 10%, 98%);\\r\\n    color: var(--frappe-grey-10);\\r\\n    background: hsl(215, 22%, 5%);\\r\\n    background: var(--frappe-grey-0);\\r\\n    background-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg opacity=\\"0.5\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n    background-size: 20px;\\r\\n    position: relative;\\r\\n  }\\r\\n\\r\\n  footer::before {\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    left: 0%;\\r\\n    bottom: 100%;\\r\\n    width: 100%;\\r\\n    height: 20px;\\r\\n    background: inherit;\\r\\n    background-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg opacity=\\"0.5\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n    background-size: 20px;\\r\\n    -webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n    mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n    -webkit-mask-size: 100px 40px;\\r\\n    mask-size: 100px 40px;\\r\\n    -webkit-mask-position: 50% 0;\\r\\n    mask-position: 50% 0;\\r\\n  }\\r\\n\\r\\n  footer a {\\r\\n    padding: 0.2rem 0;\\r\\n    border: initial;\\r\\n    text-decoration: none;\\r\\n    font-family: 'Maven Pro', sans-serif;\\r\\n    font-weight: 600;\\r\\n    border-bottom: 0.1rem solid hsl(340, 90%, 55%);\\r\\n    border-bottom: 0.1rem solid var(--primary-6);\\r\\n    transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n    transition: color 0.25s var(--ease-in-out-sine);\\r\\n  }\\r\\n\\r\\n  footer a:hover,\\r\\n  footer a:focus {\\r\\n    color: hsl(340, 90%, 55%);\\r\\n    color: var(--primary-6);\\r\\n  }\\r\\n\\r\\n  footer a:focus {\\r\\n    outline: none;\\r\\n  }\\r\\n\\r\\n  footer a::before,\\r\\n  footer a::after {\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    top: 0%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n    margin-top: -8px;\\r\\n  }\\r\\n\\r\\n  footer a::before {\\r\\n    width: 64px;\\r\\n    height: 64px;\\r\\n    color: hsl(215, 22%, 5%);\\r\\n    color: var(--grey-0);\\r\\n    background: hsl(215, 10%, 98%);\\r\\n    background: var(--grey-10);\\r\\n    border: 0.4rem solid currentColor;\\r\\n    border-radius: 50%;\\r\\n    transition: color 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n    transition: color var(--transition-duration) var(--ease-in-out-sine);\\r\\n  }\\r\\n\\r\\n  footer a::after {\\r\\n    transform: translate(-50%, -50%) scale(1);\\r\\n    width: 28px;\\r\\n    height: 28px;\\r\\n    background: hsl(215, 22%, 5%);\\r\\n    background: var(--grey-0);\\r\\n    border-radius: 50%;\\r\\n    transition: background 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n    transition: background var(--transition-duration) var(--ease-in-out-sine);\\r\\n  }\\r\\n\\r\\n  @supports ((mask-image: url()) or (-webkit-mask-image: url())) {\\r\\n    footer a::after {\\r\\n      border-radius: initial;\\r\\n      mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"currentColor\\" stroke-width=\\"10\\" stroke-linejoin=\\"round\\" stroke-linecap=\\"round\\"%3E%3Cpath d=\\"M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n      -webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"currentColor\\" stroke-width=\\"10\\" stroke-linejoin=\\"round\\" stroke-linecap=\\"round\\"%3E%3Cpath d=\\"M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n    }\\r\\n  }\\r\\n\\r\\n  footer a::after {\\r\\n    animation: heart-beat 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite\\r\\n      paused;\\r\\n    animation: heart-beat var(--animation-duration)\\r\\n      var(--animation-timing-function) infinite paused;\\r\\n  }\\r\\n\\r\\n  @keyframes heart-beat {\\r\\n    10%,\\r\\n    30% {\\r\\n      transform: translate(-50%, -50%) scale(0.7);\\r\\n    }\\r\\n\\r\\n    0%,\\r\\n    20%,\\r\\n    40% {\\r\\n      transform: translate(-50%, -50%) scale(1);\\r\\n    }\\r\\n  }\\r\\n\\r\\n  footer a:hover::before,\\r\\n  footer a:focus::before {\\r\\n    color: hsl(340, 90%, 55%);\\r\\n    color: var(--primary-6);\\r\\n  }\\r\\n\\r\\n  footer a:hover::after,\\r\\n  footer a:focus::after {\\r\\n    background: currentColor;\\r\\n  }\\r\\n\\r\\n  @media (prefers-reduced-motion: no-preference) {\\r\\n    footer a:hover::after,\\r\\n    footer a:focus::after {\\r\\n      animation-play-state: running;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAKE,MAAM,4BAAC,CAAC,AACN,oBAAoB,CAAE,EAAE,CACxB,2BAA2B,CAAE,uBAAuB,CACpD,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,OAAO,CAAC,IAAI,CAAC,IAAI,CAC1B,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,KAAK,CAAE,IAAI,gBAAgB,CAAC,CAC5B,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAC7B,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,gBAAgB,CAAE,IAAI,oZAAoZ,CAAC,CAC3a,eAAe,CAAE,IAAI,CACrB,QAAQ,CAAE,QAAQ,AACpB,CAAC,AAED,kCAAM,QAAQ,AAAC,CAAC,AACd,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,EAAE,CACR,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,OAAO,CACnB,gBAAgB,CAAE,IAAI,oZAAoZ,CAAC,CAC3a,eAAe,CAAE,IAAI,CACrB,kBAAkB,CAAE,IAAI,2RAA2R,CAAC,CACpT,UAAU,CAAE,IAAI,2RAA2R,CAAC,CAC5S,iBAAiB,CAAE,KAAK,CAAC,IAAI,CAC7B,SAAS,CAAE,KAAK,CAAC,IAAI,CACrB,qBAAqB,CAAE,GAAG,CAAC,CAAC,CAC5B,aAAa,CAAE,GAAG,CAAC,CAAC,AACtB,CAAC,AAED,oBAAM,CAAC,CAAC,cAAC,CAAC,AACR,OAAO,CAAE,MAAM,CAAC,CAAC,CACjB,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,CACpC,WAAW,CAAE,GAAG,CAChB,aAAa,CAAE,MAAM,CAAC,KAAK,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9C,aAAa,CAAE,MAAM,CAAC,KAAK,CAAC,IAAI,WAAW,CAAC,CAC5C,UAAU,CAAE,KAAK,CAAC,KAAK,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAC7D,UAAU,CAAE,KAAK,CAAC,KAAK,CAAC,IAAI,kBAAkB,CAAC,AACjD,CAAC,AAED,oBAAM,CAAC,eAAC,MAAM,CACd,oBAAM,CAAC,eAAC,MAAM,AAAC,CAAC,AACd,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,KAAK,CAAE,IAAI,WAAW,CAAC,AACzB,CAAC,AAED,oBAAM,CAAC,eAAC,MAAM,AAAC,CAAC,AACd,OAAO,CAAE,IAAI,AACf,CAAC,AAED,oBAAM,CAAC,eAAC,QAAQ,CAChB,oBAAM,CAAC,eAAC,OAAO,AAAC,CAAC,AACf,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,EAAE,CACP,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,UAAU,CAAE,IAAI,AAClB,CAAC,AAED,oBAAM,CAAC,eAAC,QAAQ,AAAC,CAAC,AAChB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CACxB,KAAK,CAAE,IAAI,QAAQ,CAAC,CACpB,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9B,UAAU,CAAE,IAAI,SAAS,CAAC,CAC1B,MAAM,CAAE,MAAM,CAAC,KAAK,CAAC,YAAY,CACjC,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAC5D,UAAU,CAAE,KAAK,CAAC,IAAI,qBAAqB,CAAC,CAAC,IAAI,kBAAkB,CAAC,AACtE,CAAC,AAED,oBAAM,CAAC,eAAC,OAAO,AAAC,CAAC,AACf,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,CAAC,CAAC,CACzC,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAC7B,UAAU,CAAE,IAAI,QAAQ,CAAC,CACzB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,UAAU,CAAC,IAAI,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CACjE,UAAU,CAAE,UAAU,CAAC,IAAI,qBAAqB,CAAC,CAAC,IAAI,kBAAkB,CAAC,AAC3E,CAAC,AAED,UAAU,CAAC,CAAC,YAAY,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,oBAAoB,IAAI,CAAC,CAAC,CAAC,AAAC,CAAC,AAC9D,oBAAM,CAAC,eAAC,OAAO,AAAC,CAAC,AACf,aAAa,CAAE,OAAO,CACtB,UAAU,CAAE,IAAI,wUAAwU,CAAC,CACzV,kBAAkB,CAAE,IAAI,wUAAwU,CAAC,AACnW,CAAC,AACH,CAAC,AAED,oBAAM,CAAC,eAAC,OAAO,AAAC,CAAC,AACf,SAAS,CAAE,wBAAU,CAAC,EAAE,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,QAAQ;MACrE,MAAM,CACR,SAAS,CAAE,wBAAU,CAAC,IAAI,oBAAoB,CAAC;MAC7C,IAAI,2BAA2B,CAAC,CAAC,QAAQ,CAAC,MAAM,AACpD,CAAC,AAED,WAAW,wBAAW,CAAC,AACrB,GAAG,CACH,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,GAAG,CAAC,AAC7C,CAAC,AAED,EAAE,CACF,GAAG,CACH,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,CAAC,CAAC,AAC3C,CAAC,AACH,CAAC,AAED,oBAAM,CAAC,eAAC,MAAM,QAAQ,CACtB,oBAAM,CAAC,eAAC,MAAM,QAAQ,AAAC,CAAC,AACtB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,KAAK,CAAE,IAAI,WAAW,CAAC,AACzB,CAAC,AAED,oBAAM,CAAC,eAAC,MAAM,OAAO,CACrB,oBAAM,CAAC,eAAC,MAAM,OAAO,AAAC,CAAC,AACrB,UAAU,CAAE,YAAY,AAC1B,CAAC,AAED,MAAM,AAAC,yBAAyB,aAAa,CAAC,AAAC,CAAC,AAC9C,oBAAM,CAAC,eAAC,MAAM,OAAO,CACrB,oBAAM,CAAC,eAAC,MAAM,OAAO,AAAC,CAAC,AACrB,oBAAoB,CAAE,OAAO,AAC/B,CAAC,AACH,CAAC"}`
};
var Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-n4ey2i"}"><a href="${"https://twitter.com/borntofrappe"}" class="${"svelte-n4ey2i"}">borntofrappe</a>
</footer>`;
});
var css = {
  code: "div.svelte-1eqfirl{min-height:100vh;display:flex;flex-direction:column}div.svelte-1eqfirl nav,div.svelte-1eqfirl main{max-width:700px;width:90vw;margin-left:auto;margin-right:auto}div.svelte-1eqfirl footer{margin-top:auto}",
  map: `{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<script>\\r\\n  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';\\r\\n  import Footer from '$lib/components/Footer.svelte';\\r\\n\\r\\n  import '../app.css';\\r\\n<\/script>\\r\\n\\r\\n<div>\\r\\n  <Breadcrumbs />\\r\\n\\r\\n  <slot />\\r\\n\\r\\n  <Footer />\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  div {\\r\\n    min-height: 100vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  div :global(nav),\\r\\n  div :global(main) {\\r\\n    max-width: 700px;\\r\\n    width: 90vw;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n  }\\r\\n\\r\\n  div :global(footer) {\\r\\n    margin-top: auto;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAgBE,GAAG,eAAC,CAAC,AACH,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,AACxB,CAAC,AAED,kBAAG,CAAC,AAAQ,GAAG,AAAC,CAChB,kBAAG,CAAC,AAAQ,IAAI,AAAE,CAAC,AACjB,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAAI,AACpB,CAAC,AAED,kBAAG,CAAC,AAAQ,MAAM,AAAE,CAAC,AACnB,UAAU,CAAE,IAAI,AAClB,CAAC"}`
};
var _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"svelte-1eqfirl"}">${validate_component(Breadcrumbs, "Breadcrumbs").$$render($$result, {}, {}, {})}

  ${slots.default ? slots.default({}) : ``}

  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _layout
});
function load({ error: error2, status }) {
  return { props: { error: error2, status } };
}
var _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { error: error2 } = $$props;
  let { status } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
    $$bindings.error(error2);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  return `<main><h1>${escape2(status)}</h1>

  <p>Something bad happened. Here&#39;s the error message for context.</p>

  <pre><code>${escape2(error2.message)}</code></pre>

  <p>If you think this is a mistake I could fix, please consider filing an issue <a href="${"https://github.com/borntofrappe/borntofrappe/issues/new?title=Status%20code%20" + escape2(status) + "&labels=bug"}">on github</a>.
  </p>

  <p>If you need some guidance, <a class="${"relative"}" href="${"/"}">home</a> is always a
    good place to start.
  </p></main>`;
});
var __error = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _error,
  load
});
var Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><h1>Hello world!</h1>
  <p>I enjoy writing code</p>

  <p>Right now, I&#39;m enjoying creating this very website, and documenting the
    process
    <a href="${"https://github.com/borntofrappe/borntofrappe#readme"}">in the public repo</a>.
  </p>

  <p>There&#39;s a page for <a href="${"/blog"}">the blog</a>, but it&#39;s just a
    proof-of-concept for now.
  </p></main>`;
});
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes
});
var Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><h1>Blog</h1>
  <p>What&#39;s a blog without blog posts? In all honesty, I hope to write one before
    finding a quippy reply.
  </p></main>`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Blog
});

// .svelte-kit/netlify/entry.js
async function handler(event) {
  const { path, httpMethod, headers, rawQuery, body, isBase64Encoded } = event;
  const query = new URLSearchParams(rawQuery);
  const rawBody = headers["content-type"] === "application/octet-stream" ? new TextEncoder("base64").encode(body) : isBase64Encoded ? Buffer.from(body, "base64").toString() : body;
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
      headers: rendered.headers,
      body: rendered.body
    };
  }
  return {
    statusCode: 404,
    body: "Not found"
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
