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
var dataUriToBuffer$1 = src;
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
var Blob$1 = fetchBlob;
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
var Response = class extends Body {
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
    return new Response(clone(this, this.highWaterMark), {
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
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response.prototype, {
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
            resolve2(fetch(new Request(locationURL, requestOptions)));
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
        response = new Response(body, responseOptions);
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
        response = new Response(body, responseOptions);
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
          response = new Response(body, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createBrotliDecompress(), (error2) => {
          reject(error2);
        });
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
						path: ${s$1(page2 && page2.path)},
						query: new URLSearchParams(${page2 ? s$1(page2.query.toString()) : ""}),
						params: ${page2 && s$1(page2.params)}
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
    let attributes = `type="application/json" data-type="svelte-data" data-url="${url}"`;
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
  context,
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
        const asset = options2.manifest.assets.find((d) => d.file === filename || d.file === filename_html);
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
            get(response2, key, receiver) {
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
                    json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":${escape$1(body)}}`
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
  if (!loaded) {
    throw new Error(`${node.entry} - load must return a value except for page fall through`);
  }
  return {
    node,
    loaded: normalize(loaded),
    context: loaded.context || context,
    fetched,
    set_cookie_headers,
    uses_credentials
  };
}
var escaped$2 = {
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
function escape$1(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$2) {
      result += escaped$2[char];
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
    context: {},
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
      context: loaded ? loaded.context : {},
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
      let context = {};
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        let loaded;
        if (node) {
          try {
            loaded = await load_node({
              ...opts,
              node,
              context,
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
                    context: node_loaded.context,
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
        if (loaded && loaded.loaded.context) {
          context = {
            ...context,
            ...loaded.loaded.context
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
  return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
function afterUpdate() {
}
var css$a = {
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
  $$result.css.add(css$a);
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
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
var template = ({ head, body }) => `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />

		<style>
			@font-face {
				font-family: Jost;
				src: url('fonts/jost-regular-webfont.woff2') format('woff2'),
					url('fonts/jost-regular-webfont.woff') format('woff');
				font-weight: 400;
				font-style: normal;
			}

			@font-face {
				font-family: JostItalic;
				src: url('fonts/jost-italic-webfont.woff2') format('woff2'),
					url('fonts/jost-italic-webfont.woff') format('woff');
				font-weight: 400;
				font-style: italic;
			}

			@font-face {
				font-family: JostBold;
				src: url('fonts/jost-bold-webfont.woff2') format('woff2'),
					url('fonts/jost-bold-webfont.woff') format('woff');
				font-weight: 700;
				font-style: normal;
			}

			@font-face {
				font-family: JostBoldItalic;
				src: url('fonts/jost-bolditalic-webfont.woff2') format('woff2'),
					url('fonts/jost-bolditalic-webfont.woff') format('woff');
				font-weight: 700;
				font-style: italic;
			}

			@font-face {
				font-family: JosefinsansBold;
				src: url('fonts/josefinsans-bold-webfont.woff2') format('woff2'),
					url('fonts/josefinsans-bold-webfont.woff') format('woff');
				font-weight: 700;
				font-style: normal;
			}

			body {
				font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
					helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
			}

			code {
				font-family: 'Inconsolata', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console,
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
      file: assets + "/_app/start-89c22282.js",
      css: [assets + "/_app/assets/start-61d1577b.css"],
      js: [assets + "/_app/start-89c22282.js", assets + "/_app/chunks/vendor-3a2901c4.js"]
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
var empty = () => ({});
var manifest = {
  assets: [{ "file": "fonts/josefinsans-bold-webfont.woff", "size": 25176, "type": "font/woff" }, { "file": "fonts/josefinsans-bold-webfont.woff2", "size": 18820, "type": "font/woff2" }, { "file": "fonts/jost-bold-webfont.woff", "size": 23824, "type": "font/woff" }, { "file": "fonts/jost-bold-webfont.woff2", "size": 18092, "type": "font/woff2" }, { "file": "fonts/jost-bolditalic-webfont.woff", "size": 26896, "type": "font/woff" }, { "file": "fonts/jost-bolditalic-webfont.woff2", "size": 20468, "type": "font/woff2" }, { "file": "fonts/jost-italic-webfont.woff", "size": 26748, "type": "font/woff" }, { "file": "fonts/jost-italic-webfont.woff2", "size": 20352, "type": "font/woff2" }, { "file": "fonts/jost-regular-webfont.woff", "size": 22624, "type": "font/woff" }, { "file": "fonts/jost-regular-webfont.woff2", "size": 17160, "type": "font/woff2" }, { "file": "icons/android-chrome-192x192.png", "size": 3655, "type": "image/png" }, { "file": "icons/android-chrome-512x512.png", "size": 8364, "type": "image/png" }, { "file": "icons/apple-touch-icon.png", "size": 3449, "type": "image/png" }, { "file": "icons/favicon.ico", "size": 15086, "type": "image/vnd.microsoft.icon" }, { "file": "icons/icon.svg", "size": 625, "type": "image/svg+xml" }, { "file": "images/borntofrappe.png", "size": 20194, "type": "image/png" }, { "file": "manifest.json", "size": 450, "type": "application/json" }],
  layout: "src/routes/__layout.svelte",
  error: "src/routes/__error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
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
    return index;
  })
};
var metadata_lookup = { "src/routes/__layout.svelte": { "entry": "pages/__layout.svelte-7a12c1e6.js", "css": ["assets/pages/__layout.svelte-34bacb2d.css"], "js": ["pages/__layout.svelte-7a12c1e6.js", "chunks/vendor-3a2901c4.js", "chunks/stores-f9b3fbab.js", "chunks/icons-dac75697.js"], "styles": [] }, "src/routes/__error.svelte": { "entry": "pages/__error.svelte-a0fa39af.js", "css": ["assets/pages/__error.svelte-f08345ec.css"], "js": ["pages/__error.svelte-a0fa39af.js", "chunks/vendor-3a2901c4.js", "chunks/Meta-195b69fe.js", "chunks/stores-f9b3fbab.js"], "styles": [] }, "src/routes/index.svelte": { "entry": "pages/index.svelte-5da48e2e.js", "css": ["assets/pages/index.svelte-e4da94ce.css"], "js": ["pages/index.svelte-5da48e2e.js", "chunks/vendor-3a2901c4.js", "chunks/icons-dac75697.js", "chunks/Meta-195b69fe.js", "chunks/stores-f9b3fbab.js"], "styles": [] } };
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
var css$9 = {
  code: "nav.svelte-3t3lpe ol.svelte-3t3lpe.svelte-3t3lpe.svelte-3t3lpe{list-style:none}nav.svelte-3t3lpe ol li.svelte-3t3lpe.svelte-3t3lpe.svelte-3t3lpe{display:inline-block}nav.svelte-3t3lpe ol.svelte-3t3lpe>li.svelte-3t3lpe+li.svelte-3t3lpe{margin-left:0.3rem}.webfonts nav.svelte-3t3lpe a.svelte-3t3lpe.svelte-3t3lpe.svelte-3t3lpe{font-family:JosefinSansBold, sans-serif}nav.svelte-3t3lpe a.svelte-3t3lpe.svelte-3t3lpe.svelte-3t3lpe{text-decoration:none;font-weight:700;padding:0.25rem 0;display:inline-flex;align-items:center}nav.svelte-3t3lpe a.svelte-3t3lpe svg{margin-left:0.3rem;width:1.5em;height:auto}",
  map: `{"version":3,"file":"Breadcrumbs.svelte","sources":["Breadcrumbs.svelte"],"sourcesContent":["<script>\\r\\n\\timport { page } from '$app/stores';\\r\\n\\timport icons from '$lib/icons.js';\\r\\n\\r\\n\\tconst root = {\\r\\n\\t\\thref: '/',\\r\\n\\t\\ttext: 'borntofrappe',\\r\\n\\t\\ticon: icons.rocket\\r\\n\\t};\\r\\n<\/script>\\r\\n\\r\\n<nav aria-label=\\"Breadcrumb navigation\\" id=\\"breadcrumb\\">\\r\\n\\t<ol>\\r\\n\\t\\t{#each $page.path\\r\\n\\t\\t\\t.split('/')\\r\\n\\t\\t\\t.filter((d) => d)\\r\\n\\t\\t\\t.reduce((acc, curr, i) => [...acc, { href: i === 0 ? \`/\${curr}\` : \`\${acc[acc.length - 1].href}/\${curr}\`, text: \`/ \${curr}\`, icon: icons[curr] || '' }], [root]) as { href, text, icon }}\\r\\n\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t<a {href}>{text} {@html icon}</a>\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t{/each}\\r\\n\\t</ol>\\r\\n</nav>\\r\\n\\r\\n<style>\\r\\n\\tnav ol {\\r\\n\\t\\tlist-style: none;\\r\\n\\t}\\r\\n\\r\\n\\tnav ol li {\\r\\n\\t\\tdisplay: inline-block;\\r\\n\\t}\\r\\n\\r\\n\\tnav ol > li + li {\\r\\n\\t\\tmargin-left: 0.3rem;\\r\\n\\t}\\r\\n\\r\\n\\t:global(.webfonts) nav a {\\r\\n\\t\\tfont-family: JosefinSansBold, sans-serif;\\r\\n\\t}\\r\\n\\r\\n\\tnav a {\\r\\n\\t\\ttext-decoration: none;\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t\\tpadding: 0.25rem 0;\\r\\n\\t\\tdisplay: inline-flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t}\\r\\n\\r\\n\\tnav a :global(svg) {\\r\\n\\t\\tmargin-left: 0.3rem;\\r\\n\\t\\twidth: 1.5em;\\r\\n\\t\\theight: auto;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAyBC,iBAAG,CAAC,EAAE,0CAAC,CAAC,AACP,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,iBAAG,CAAC,EAAE,CAAC,EAAE,0CAAC,CAAC,AACV,OAAO,CAAE,YAAY,AACtB,CAAC,AAED,iBAAG,CAAC,gBAAE,CAAG,gBAAE,CAAG,EAAE,cAAC,CAAC,AACjB,WAAW,CAAE,MAAM,AACpB,CAAC,AAEO,SAAS,AAAC,CAAC,iBAAG,CAAC,CAAC,0CAAC,CAAC,AACzB,WAAW,CAAE,eAAe,CAAC,CAAC,UAAU,AACzC,CAAC,AAED,iBAAG,CAAC,CAAC,0CAAC,CAAC,AACN,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,OAAO,CAAC,CAAC,CAClB,OAAO,CAAE,WAAW,CACpB,WAAW,CAAE,MAAM,AACpB,CAAC,AAED,iBAAG,CAAC,eAAC,CAAC,AAAQ,GAAG,AAAE,CAAC,AACnB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,AACb,CAAC"}`
};
var Breadcrumbs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const root = {
    href: "/",
    text: "borntofrappe",
    icon: icons.rocket
  };
  $$result.css.add(css$9);
  $$unsubscribe_page();
  return `<nav aria-label="${"Breadcrumb navigation"}" id="${"breadcrumb"}" class="${"svelte-3t3lpe"}"><ol class="${"svelte-3t3lpe"}">${each($page.path.split("/").filter((d) => d).reduce((acc, curr, i) => [
    ...acc,
    {
      href: i === 0 ? `/${curr}` : `${acc[acc.length - 1].href}/${curr}`,
      text: `/ ${curr}`,
      icon: icons[curr] || ""
    }
  ], [root]), ({ href, text, icon }) => `<li class="${"svelte-3t3lpe"}"><a${add_attribute("href", href, 0)} class="${"svelte-3t3lpe"}">${escape(text)} <!-- HTML_TAG_START -->${icon}<!-- HTML_TAG_END --></a>
			</li>`)}</ol>
</nav>`;
});
var css$8 = {
  code: "button.svelte-1m35tol.svelte-1m35tol{width:2rem;height:2rem;color:inherit;padding:0;background:none;border:none;transition:color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:color var(--transition-duration) var(--ease-in-out-sine)}button.svelte-1m35tol svg.svelte-1m35tol{display:block;width:100%;height:auto}button.svelte-1m35tol.svelte-1m35tol:not(:disabled):focus{outline:0.15rem dashed currentColor}button.svelte-1m35tol.svelte-1m35tol:not(:disabled):focus:not(:focus-visible){outline:none}button.svelte-1m35tol.svelte-1m35tol:not(:disabled):hover{color:hsl(340, 90%, 55%);color:var(--primary-6)}button.svelte-1m35tol svg .rotate.svelte-1m35tol{transition:transform 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:transform var(--transition-duration) var(--ease-in-out-sine)}button.svelte-1m35tol svg .scale.svelte-1m35tol{transition:transform 0.25s step-end;transition:transform var(--transition-duration) step-end}@media(prefers-color-scheme: dark){html:not([data-preference]) button.svelte-1m35tol svg .rotate.svelte-1m35tol{transform:rotate(180deg)}html:not([data-preference]) button.svelte-1m35tol svg .scale.svelte-1m35tol{transform:scaleX(-1)}}html[data-preference='dark'] button.svelte-1m35tol svg .rotate.svelte-1m35tol{transform:rotate(180deg)}html[data-preference='dark'] button.svelte-1m35tol svg .scale.svelte-1m35tol{transform:scaleX(-1)}",
  map: `{"version":3,"file":"ColorSchemeToggle.svelte","sources":["ColorSchemeToggle.svelte"],"sourcesContent":["<script>\\r\\n\\tlet button;\\r\\n\\t$: button && button.removeAttribute('disabled');\\r\\n\\r\\n\\tfunction setPreference(preference) {\\r\\n\\t\\tdocument.documentElement.setAttribute('data-preference', preference);\\r\\n\\t\\tlocalStorage.setItem('color-scheme', preference);\\r\\n\\t}\\r\\n\\r\\n\\tfunction handleClick() {\\r\\n\\t\\tsetPreference(localStorage.getItem('color-scheme') === 'dark' ? 'light' : 'dark');\\r\\n\\t}\\r\\n<\/script>\\r\\n\\r\\n<button bind:this={button} on:click={handleClick} disabled>\\r\\n\\t<span class=\\"visually-hidden\\">Toggle color scheme</span>\\r\\n\\r\\n\\t<svg\\r\\n\\t\\taria-hidden=\\"true\\"\\r\\n\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\r\\n\\t\\tviewBox=\\"-80 -80 160 160\\"\\r\\n\\t\\twidth=\\"1em\\"\\r\\n\\t\\theight=\\"1em\\"\\r\\n\\t>\\r\\n\\t\\t<defs>\\r\\n\\t\\t\\t<clipPath id=\\"clip-path-toggle\\">\\r\\n\\t\\t\\t\\t<circle r=\\"80\\" />\\r\\n\\t\\t\\t</clipPath>\\r\\n\\t\\t</defs>\\r\\n\\t\\t<circle fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"10\\" r=\\"75\\" />\\r\\n\\t\\t<g clip-path=\\"url(#clip-path-toggle)\\">\\r\\n\\t\\t\\t<g transform=\\"translate(0 80)\\">\\r\\n\\t\\t\\t\\t<g class=\\"scale\\">\\r\\n\\t\\t\\t\\t\\t<g class=\\"rotate\\">\\r\\n\\t\\t\\t\\t\\t\\t<g transform=\\"translate(0 -80)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<g transform=\\"scale(-1 1)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<g class=\\"rotate\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<g transform=\\"scale(-1 1)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<g fill=\\"currentColor\\" stroke=\\"none\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle r=\\"22\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle transform=\\"translate(0 41.2)\\" r=\\"8.8\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle transform=\\"rotate(45) translate(0 41.2)\\" r=\\"8.8\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle transform=\\"rotate(90) translate(0 41.2)\\" r=\\"8.8\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle transform=\\"rotate(135) translate(0 41.2)\\" r=\\"8.8\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle transform=\\"rotate(180) translate(0 41.2)\\" r=\\"8.8\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle transform=\\"rotate(225) translate(0 41.2)\\" r=\\"8.8\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle transform=\\"rotate(270) translate(0 41.2)\\" r=\\"8.8\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle transform=\\"rotate(315) translate(0 41.2)\\" r=\\"8.8\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t<g transform=\\"translate(0 80)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<g transform=\\"scale(-1 1)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<g class=\\"rotate\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<g transform=\\"scale(-1 1)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<g class=\\"scale\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<g fill=\\"currentColor\\" stroke=\\"none\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\td=\\"M-5.435-27.43A28 28 0 000 28.02 28 28 0 0027.435 5.45 28 28 0 0122 6.019a28 28 0 01-27.435-33.43z\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t</g>\\r\\n\\t\\t</g>\\r\\n\\t</svg>\\r\\n</button>\\r\\n\\r\\n<style>\\r\\n\\tbutton {\\r\\n\\t\\twidth: 2rem;\\r\\n\\t\\theight: 2rem;\\r\\n\\t\\tcolor: inherit;\\r\\n\\t\\tpadding: 0;\\r\\n\\t\\tbackground: none;\\r\\n\\t\\tborder: none;\\r\\n\\t\\ttransition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition: color var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t}\\r\\n\\r\\n\\tbutton svg {\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: auto;\\r\\n\\t}\\r\\n\\r\\n\\tbutton:not(:disabled):focus {\\r\\n\\t\\toutline: 0.15rem dashed currentColor;\\r\\n\\t}\\r\\n\\r\\n\\tbutton:not(:disabled):focus:not(:focus-visible) {\\r\\n\\t\\toutline: none;\\r\\n\\t}\\r\\n\\r\\n\\tbutton:not(:disabled):hover {\\r\\n\\t\\tcolor: hsl(340, 90%, 55%);\\r\\n\\t\\tcolor: var(--primary-6);\\r\\n\\t}\\r\\n\\r\\n\\tbutton svg .rotate {\\r\\n\\t\\ttransition: transform 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition: transform var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t}\\r\\n\\r\\n\\tbutton svg .scale {\\r\\n\\t\\ttransition: transform 0.25s step-end;\\r\\n\\t\\ttransition: transform var(--transition-duration) step-end;\\r\\n\\t}\\r\\n\\r\\n\\t@media (prefers-color-scheme: dark) {\\r\\n\\t\\t:global(html:not([data-preference])) button svg .rotate {\\r\\n\\t\\t\\ttransform: rotate(180deg);\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t:global(html:not([data-preference])) button svg .scale {\\r\\n\\t\\t\\ttransform: scaleX(-1);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t:global(html[data-preference='dark']) button svg .rotate {\\r\\n\\t\\ttransform: rotate(180deg);\\r\\n\\t}\\r\\n\\r\\n\\t:global(html[data-preference='dark']) button svg .scale {\\r\\n\\t\\ttransform: scaleX(-1);\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4EC,MAAM,8BAAC,CAAC,AACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CAAC,KAAK,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAC7D,UAAU,CAAE,KAAK,CAAC,IAAI,qBAAqB,CAAC,CAAC,IAAI,kBAAkB,CAAC,AACrE,CAAC,AAED,qBAAM,CAAC,GAAG,eAAC,CAAC,AACX,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AACb,CAAC,AAED,oCAAM,KAAK,SAAS,CAAC,MAAM,AAAC,CAAC,AAC5B,OAAO,CAAE,OAAO,CAAC,MAAM,CAAC,YAAY,AACrC,CAAC,AAED,oCAAM,KAAK,SAAS,CAAC,MAAM,KAAK,cAAc,CAAC,AAAC,CAAC,AAChD,OAAO,CAAE,IAAI,AACd,CAAC,AAED,oCAAM,KAAK,SAAS,CAAC,MAAM,AAAC,CAAC,AAC5B,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,KAAK,CAAE,IAAI,WAAW,CAAC,AACxB,CAAC,AAED,qBAAM,CAAC,GAAG,CAAC,OAAO,eAAC,CAAC,AACnB,UAAU,CAAE,SAAS,CAAC,KAAK,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CACjE,UAAU,CAAE,SAAS,CAAC,IAAI,qBAAqB,CAAC,CAAC,IAAI,kBAAkB,CAAC,AACzE,CAAC,AAED,qBAAM,CAAC,GAAG,CAAC,MAAM,eAAC,CAAC,AAClB,UAAU,CAAE,SAAS,CAAC,KAAK,CAAC,QAAQ,CACpC,UAAU,CAAE,SAAS,CAAC,IAAI,qBAAqB,CAAC,CAAC,QAAQ,AAC1D,CAAC,AAED,MAAM,AAAC,uBAAuB,IAAI,CAAC,AAAC,CAAC,AAC5B,2BAA2B,AAAC,CAAC,qBAAM,CAAC,GAAG,CAAC,OAAO,eAAC,CAAC,AACxD,SAAS,CAAE,OAAO,MAAM,CAAC,AAC1B,CAAC,AAEO,2BAA2B,AAAC,CAAC,qBAAM,CAAC,GAAG,CAAC,MAAM,eAAC,CAAC,AACvD,SAAS,CAAE,OAAO,EAAE,CAAC,AACtB,CAAC,AACF,CAAC,AAEO,4BAA4B,AAAC,CAAC,qBAAM,CAAC,GAAG,CAAC,OAAO,eAAC,CAAC,AACzD,SAAS,CAAE,OAAO,MAAM,CAAC,AAC1B,CAAC,AAEO,4BAA4B,AAAC,CAAC,qBAAM,CAAC,GAAG,CAAC,MAAM,eAAC,CAAC,AACxD,SAAS,CAAE,OAAO,EAAE,CAAC,AACtB,CAAC"}`
};
var ColorSchemeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let button;
  $$result.css.add(css$8);
  return `<button disabled class="${"svelte-1m35tol"}"${add_attribute("this", button, 0)}><span class="${"visually-hidden"}">Toggle color scheme</span>

	<svg aria-hidden="${"true"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"-80 -80 160 160"}" width="${"1em"}" height="${"1em"}" class="${"svelte-1m35tol"}"><defs><clipPath id="${"clip-path-toggle"}"><circle r="${"80"}"></circle></clipPath></defs><circle fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"10"}" r="${"75"}"></circle><g clip-path="${"url(#clip-path-toggle)"}"><g transform="${"translate(0 80)"}"><g class="${"scale svelte-1m35tol"}"><g class="${"rotate svelte-1m35tol"}"><g transform="${"translate(0 -80)"}"><g transform="${"scale(-1 1)"}"><g class="${"rotate svelte-1m35tol"}"><g transform="${"scale(-1 1)"}"><g fill="${"currentColor"}" stroke="${"none"}"><circle r="${"22"}"></circle><circle transform="${"translate(0 41.2)"}" r="${"8.8"}"></circle><circle transform="${"rotate(45) translate(0 41.2)"}" r="${"8.8"}"></circle><circle transform="${"rotate(90) translate(0 41.2)"}" r="${"8.8"}"></circle><circle transform="${"rotate(135) translate(0 41.2)"}" r="${"8.8"}"></circle><circle transform="${"rotate(180) translate(0 41.2)"}" r="${"8.8"}"></circle><circle transform="${"rotate(225) translate(0 41.2)"}" r="${"8.8"}"></circle><circle transform="${"rotate(270) translate(0 41.2)"}" r="${"8.8"}"></circle><circle transform="${"rotate(315) translate(0 41.2)"}" r="${"8.8"}"></circle></g></g></g></g></g><g transform="${"translate(0 80)"}"><g transform="${"scale(-1 1)"}"><g class="${"rotate svelte-1m35tol"}"><g transform="${"scale(-1 1)"}"><g class="${"scale svelte-1m35tol"}"><g fill="${"currentColor"}" stroke="${"none"}"><path d="${"M-5.435-27.43A28 28 0 000 28.02 28 28 0 0027.435 5.45 28 28 0 0122 6.019a28 28 0 01-27.435-33.43z"}"></path></g></g></g></g></g></g></g></g></g></g></svg>
</button>`;
});
var css$7 = {
  code: "div.svelte-10hhl8o{width:90vw;width:var(--width);max-width:42rem;max-width:var(--max-width);margin:0 auto;padding:0.5rem 0;display:flex;align-items:center}div.svelte-10hhl8o>:last-child{margin-left:auto;flex-shrink:0}",
  map: `{"version":3,"file":"Starter.svelte","sources":["Starter.svelte"],"sourcesContent":["<script>\\r\\n\\timport Breadcrumbs from '$lib/components/Breadcrumbs.svelte';\\r\\n\\timport ColorSchemeToggle from '$lib/components/ColorSchemeToggle.svelte';\\r\\n<\/script>\\r\\n\\r\\n<div>\\r\\n\\t<Breadcrumbs />\\r\\n\\t<ColorSchemeToggle />\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\tdiv {\\r\\n\\t\\twidth: 90vw;\\r\\n\\t\\twidth: var(--width);\\r\\n\\t\\tmax-width: 42rem;\\r\\n\\t\\tmax-width: var(--max-width);\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t\\tpadding: 0.5rem 0;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t}\\r\\n\\r\\n\\tdiv > :global(:last-child) {\\r\\n\\t\\tmargin-left: auto;\\r\\n\\t\\tflex-shrink: 0;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAWC,GAAG,eAAC,CAAC,AACJ,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,IAAI,WAAW,CAAC,CAC3B,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,MAAM,CAAC,CAAC,CACjB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,AACpB,CAAC,AAED,kBAAG,CAAW,WAAW,AAAE,CAAC,AAC3B,WAAW,CAAE,IAAI,CACjB,WAAW,CAAE,CAAC,AACf,CAAC"}`
};
var Starter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<div class="${"svelte-10hhl8o"}">${validate_component(Breadcrumbs, "Breadcrumbs").$$render($$result, {}, {}, {})}
	${validate_component(ColorSchemeToggle, "ColorSchemeToggle").$$render($$result, {}, {}, {})}
</div>`;
});
var css$6 = {
  code: `footer.svelte-1gjscek.svelte-1gjscek{--animation-duration:2s;--animation-timing-function:var(--ease-in-out-sine);text-align:center;padding:2rem 1rem 1rem;color:hsl(215, 10%, 98%);color:var(--frappe-grey-10);background:hsl(215, 22%, 5%);background:var(--frappe-grey-0);background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/svg%3E');background-size:20px;position:relative}footer.svelte-1gjscek.svelte-1gjscek::before{content:'';position:absolute;left:0%;bottom:100%;width:100%;height:20px;background:inherit;background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/svg%3E');background-size:20px;-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');-webkit-mask-size:100px 40px;mask-size:100px 40px;-webkit-mask-position:50% 0;mask-position:50% 0}.webfonts footer.svelte-1gjscek a.svelte-1gjscek{font-family:JosefinSansBold, sans-serif}footer.svelte-1gjscek a.svelte-1gjscek{padding:0.25rem 0;border:initial;text-decoration:none;font-weight:700;border-bottom:0.1rem solid hsl(340, 90%, 55%);border-bottom:0.1rem solid var(--primary-6);transition:color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:color var(--transition-duration) var(--ease-in-out-sine)}footer.svelte-1gjscek a.svelte-1gjscek:hover,footer.svelte-1gjscek a.svelte-1gjscek:focus{color:hsl(340, 90%, 55%);color:var(--primary-6)}footer.svelte-1gjscek a.svelte-1gjscek:focus{outline:none}footer.svelte-1gjscek a.svelte-1gjscek::before,footer.svelte-1gjscek a.svelte-1gjscek::after{content:'';position:absolute;top:0%;left:50%;transform:translate(-50%, -50%);margin-top:-8px}footer.svelte-1gjscek a.svelte-1gjscek::before{width:4rem;height:4rem;color:hsl(215, 22%, 5%);color:var(--frappe-grey-0);background:hsl(215, 10%, 98%);background:var(--frappe-grey-10);border:0.4rem solid currentColor;border-radius:50%;transition:color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:color var(--transition-duration) var(--ease-in-out-sine)}footer.svelte-1gjscek a.svelte-1gjscek::after{transform:translate(-50%, -50%) scale(1);width:1.8rem;height:1.8rem;background:hsl(340, 90%, 55%);background:var(--primary-6);border-radius:50%;transition:background 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:background var(--transition-duration) var(--ease-in-out-sine)}@supports ((-webkit-mask-image: url()) or (mask-image: url())){footer.svelte-1gjscek a.svelte-1gjscek::after{border-radius:initial;-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"%3E%3Cpath d="M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0" /%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"%3E%3Cpath d="M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0" /%3E%3C/g%3E%3C/svg%3E')}}footer.svelte-1gjscek a.svelte-1gjscek::after{animation:svelte-1gjscek-heart-beat 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;animation:svelte-1gjscek-heart-beat var(--animation-duration) var(--animation-timing-function) infinite;animation-play-state:paused}@keyframes svelte-1gjscek-heart-beat{10%,30%{transform:translate(-50%, -50%) scale(0.7)}0%,20%,40%{transform:translate(-50%, -50%) scale(1)}}footer.svelte-1gjscek a.svelte-1gjscek:hover::before,footer.svelte-1gjscek a.svelte-1gjscek:focus::before{color:hsl(340, 90%, 55%);color:var(--primary-6)}@media(prefers-reduced-motion: no-preference){footer.svelte-1gjscek a.svelte-1gjscek:hover::after,footer.svelte-1gjscek a.svelte-1gjscek:focus::after{animation-play-state:running}}`,
  map: `{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<footer>\\r\\n\\t<a href=\\"https://twitter.com/borntofrappe\\">borntofrappe</a>\\r\\n</footer>\\r\\n\\r\\n<style>\\r\\n\\tfooter {\\r\\n\\t\\t--animation-duration: 2s;\\r\\n\\t\\t--animation-timing-function: var(--ease-in-out-sine);\\r\\n\\t\\ttext-align: center;\\r\\n\\t\\tpadding: 2rem 1rem 1rem;\\r\\n\\t\\tcolor: hsl(215, 10%, 98%);\\r\\n\\t\\tcolor: var(--frappe-grey-10);\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t\\tposition: relative;\\r\\n\\t}\\r\\n\\r\\n\\tfooter::before {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tleft: 0%;\\r\\n\\t\\tbottom: 100%;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 20px;\\r\\n\\t\\tbackground: inherit;\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t-webkit-mask-size: 100px 40px;\\r\\n\\t\\tmask-size: 100px 40px;\\r\\n\\t\\t-webkit-mask-position: 50% 0;\\r\\n\\t\\tmask-position: 50% 0;\\r\\n\\t}\\r\\n\\r\\n\\t:global(.webfonts) footer a {\\r\\n\\t\\tfont-family: JosefinSansBold, sans-serif;\\r\\n\\t}\\r\\n\\r\\n\\tfooter a {\\r\\n\\t\\tpadding: 0.25rem 0;\\r\\n\\t\\tborder: initial;\\r\\n\\t\\ttext-decoration: none;\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t\\tborder-bottom: 0.1rem solid hsl(340, 90%, 55%);\\r\\n\\t\\tborder-bottom: 0.1rem solid var(--primary-6);\\r\\n\\t\\ttransition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition: color var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t}\\r\\n\\r\\n\\tfooter a:hover,\\r\\n\\tfooter a:focus {\\r\\n\\t\\tcolor: hsl(340, 90%, 55%);\\r\\n\\t\\tcolor: var(--primary-6);\\r\\n\\t}\\r\\n\\r\\n\\tfooter a:focus {\\r\\n\\t\\toutline: none;\\r\\n\\t}\\r\\n\\r\\n\\tfooter a::before,\\r\\n\\tfooter a::after {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 0%;\\r\\n\\t\\tleft: 50%;\\r\\n\\t\\ttransform: translate(-50%, -50%);\\r\\n\\t\\tmargin-top: -8px;\\r\\n\\t}\\r\\n\\r\\n\\tfooter a::before {\\r\\n\\t\\twidth: 4rem;\\r\\n\\t\\theight: 4rem;\\r\\n\\t\\tcolor: hsl(215, 22%, 5%);\\r\\n\\t\\tcolor: var(--frappe-grey-0);\\r\\n\\t\\tbackground: hsl(215, 10%, 98%);\\r\\n\\t\\tbackground: var(--frappe-grey-10);\\r\\n\\t\\tborder: 0.4rem solid currentColor;\\r\\n\\t\\tborder-radius: 50%;\\r\\n\\t\\ttransition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition: color var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t}\\r\\n\\r\\n\\tfooter a::after {\\r\\n\\t\\ttransform: translate(-50%, -50%) scale(1);\\r\\n\\t\\twidth: 1.8rem;\\r\\n\\t\\theight: 1.8rem;\\r\\n\\t\\tbackground: hsl(340, 90%, 55%);\\r\\n\\t\\tbackground: var(--primary-6);\\r\\n\\t\\tborder-radius: 50%;\\r\\n\\t\\ttransition: background 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition: background var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t}\\r\\n\\r\\n\\t@supports ((-webkit-mask-image: url()) or (mask-image: url())) {\\r\\n\\t\\tfooter a::after {\\r\\n\\t\\t\\tborder-radius: initial;\\r\\n\\t\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"currentColor\\" stroke-width=\\"10\\" stroke-linejoin=\\"round\\" stroke-linecap=\\"round\\"%3E%3Cpath d=\\"M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"currentColor\\" stroke-width=\\"10\\" stroke-linejoin=\\"round\\" stroke-linecap=\\"round\\"%3E%3Cpath d=\\"M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\tfooter a::after {\\r\\n\\t\\tanimation: heart-beat 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;\\r\\n\\t\\tanimation: heart-beat var(--animation-duration) var(--animation-timing-function) infinite;\\r\\n\\t\\tanimation-play-state: paused;\\r\\n\\t}\\r\\n\\r\\n\\t@keyframes heart-beat {\\r\\n\\t\\t10%,\\r\\n\\t\\t30% {\\r\\n\\t\\t\\ttransform: translate(-50%, -50%) scale(0.7);\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t0%,\\r\\n\\t\\t20%,\\r\\n\\t\\t40% {\\r\\n\\t\\t\\ttransform: translate(-50%, -50%) scale(1);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\tfooter a:hover::before,\\r\\n\\tfooter a:focus::before {\\r\\n\\t\\tcolor: hsl(340, 90%, 55%);\\r\\n\\t\\tcolor: var(--primary-6);\\r\\n\\t}\\r\\n\\r\\n\\t@media (prefers-reduced-motion: no-preference) {\\r\\n\\t\\tfooter a:hover::after,\\r\\n\\t\\tfooter a:focus::after {\\r\\n\\t\\t\\tanimation-play-state: running;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"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"}`
};
var Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<footer class="${"svelte-1gjscek"}"><a href="${"https://twitter.com/borntofrappe"}" class="${"svelte-1gjscek"}">borntofrappe</a>
</footer>`;
});
var css$5 = {
  code: "div.svelte-9u5b4y{min-height:100vh;display:flex;flex-direction:column}div.svelte-9u5b4y footer{margin-top:auto}",
  map: `{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<script>\\r\\n\\timport Starter from '$lib/components/Starter.svelte';\\r\\n\\timport Footer from '$lib/components/Footer.svelte';\\r\\n\\r\\n\\timport '../app.css';\\r\\n<\/script>\\r\\n\\r\\n<div>\\r\\n\\t<Starter />\\r\\n\\r\\n\\t<slot />\\r\\n\\r\\n\\t<Footer />\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\tdiv {\\r\\n\\t\\tmin-height: 100vh;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t}\\r\\n\\r\\n\\tdiv :global(footer) {\\r\\n\\t\\tmargin-top: auto;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAgBC,GAAG,cAAC,CAAC,AACJ,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,AACvB,CAAC,AAED,iBAAG,CAAC,AAAQ,MAAM,AAAE,CAAC,AACpB,UAAU,CAAE,IAAI,AACjB,CAAC"}`
};
var _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<div class="${"svelte-9u5b4y"}">${validate_component(Starter, "Starter").$$render($$result, {}, {}, {})}

	${slots.default ? slots.default({}) : ``}

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _layout
});
var Meta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { description } = $$props;
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  title = `borntofrappe${$page.path !== "/" ? $page.path.split("/").join(" / ") : ""}`;
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", description, 0)} data-svelte="svelte-dewtyh"><link rel="${"canonical"}" href="${escape($page.host) + escape($page.path)}" data-svelte="svelte-dewtyh"><meta property="${"og:title"}"${add_attribute("content", title, 0)} data-svelte="svelte-dewtyh"><meta property="${"og:description"}"${add_attribute("content", description, 0)} data-svelte="svelte-dewtyh"><meta property="${"og:url"}" content="${escape($page.host) + escape($page.path)}" data-svelte="svelte-dewtyh"><meta property="${"og:locale"}" content="${"en_US"}" data-svelte="svelte-dewtyh"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-dewtyh"><meta property="${"og:site_name"}" content="${"borntofrappe"}" data-svelte="svelte-dewtyh"><meta property="${"og:image"}" content="${escape($page.host) + "/images/borntofrappe.png"}" data-svelte="svelte-dewtyh"><meta property="${"og:image:alt"}"${add_attribute("content", description, 0)} data-svelte="svelte-dewtyh"><meta property="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-dewtyh"><meta property="${"twitter:title"}"${add_attribute("content", title, 0)} data-svelte="svelte-dewtyh"><meta property="${"twitter:description"}"${add_attribute("content", description, 0)} data-svelte="svelte-dewtyh"><meta property="${"twitter:site"}" content="${"@borntofrappe"}" data-svelte="svelte-dewtyh"><meta property="${"twitter:creator"}" content="${"@borntofrappe"}" data-svelte="svelte-dewtyh"><meta property="${"twitter:image"}" content="${escape($page.host) + "/images/borntofrappe.png"}" data-svelte="svelte-dewtyh"><meta property="${"twitter:image:alt"}"${add_attribute("content", description, 0)} data-svelte="svelte-dewtyh">`, ""}`;
});
var css$4 = {
  code: `header.svelte-ixy3tf.svelte-ixy3tf.svelte-ixy3tf{width:90vw;width:var(--width);max-width:42rem;max-width:var(--max-width);margin:0 auto 20px;padding:3rem 0;color:hsl(215, 10%, 98%);color:var(--frappe-grey-10);background:hsl(215, 22%, 5%);background:var(--frappe-grey-0);position:relative;z-index:5}header.svelte-ixy3tf>.svelte-ixy3tf+.svelte-ixy3tf{margin-top:0.75em}header.svelte-ixy3tf.svelte-ixy3tf.svelte-ixy3tf::before{content:'';position:absolute;top:0%;left:50%;width:100vw;height:100%;transform:translateX(-50%);background:inherit;background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');background-size:20px;background-position:0 100%;z-index:-5}header.svelte-ixy3tf.svelte-ixy3tf.svelte-ixy3tf::after{content:'';position:absolute;top:100%;left:50%;width:100vw;height:20px;transform:translateX(-50%) scaleY(-1);background:hsl(215, 22%, 5%);background:var(--frappe-grey-0);background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');background-size:20px;-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');-webkit-mask-size:100px 40px;mask-size:100px 40px;-webkit-mask-position:50% 0;mask-position:50% 0;z-index:-5}header.svelte-ixy3tf h1.svelte-ixy3tf.svelte-ixy3tf{color:inherit}@supports (display: grid){header.svelte-ixy3tf.svelte-ixy3tf.svelte-ixy3tf{width:100%;max-width:initial;margin:0 initial 20px;display:grid;grid-template-columns:1fr minmax(auto, 42rem) 1fr;grid-template-columns:1fr minmax(auto, var(--max-width)) 1fr;gap:0 5vw;background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');background-size:20px;background-position:0 100%}header.svelte-ixy3tf>.svelte-ixy3tf.svelte-ixy3tf{grid-column:2}header.svelte-ixy3tf.svelte-ixy3tf.svelte-ixy3tf::before{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -90 140 140"%3E%3Cg fill="none" stroke="hsl(215, 10%25, 97%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cg transform="translate(0 -80) scale(0.25)"%3E%3Cg transform="scale(0.75)"%3E%3Cg fill="none" stroke-width="16"%3E%3Cg transform="translate(0 13.5)"%3E%3Cpath d="M 34 0 h -68"/%3E%3Cpath transform="rotate(45)" d="M 40 0 h -80"/%3E%3Cpath transform="rotate(-45)" d="M 40 0 h -80"/%3E%3C/g%3E%3C/g%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke-width="8"%3E%3Cpath d="M -0 -46 a 17 17 0 0 1 17 17 h -34 a 17 17 0 0 1 17 -17" /%3E%3Cpath d="M -0 -10 h 25 v 25 a 25 25 0 0 1 -50 0 v -25 z" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke="none"%3E%3Cpath d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath transform="scale(-1 1)" d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3Cpath transform="scale(-1 1)" d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3C/g%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(215, 10%25, 97%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');top:initial;left:initial;background:initial;transform:initial;grid-column:2/3;grid-row:3;justify-self:end;width:6rem;height:6rem;z-index:5}header.svelte-ixy3tf.svelte-ixy3tf.svelte-ixy3tf::after{left:0%;width:100%;transform:scaleY(-1)}}main#content.svelte-ixy3tf.svelte-ixy3tf.svelte-ixy3tf{width:90vw;width:var(--width);max-width:42rem;max-width:var(--max-width);margin:0 auto;padding-top:2.5rem;padding-bottom:4rem}main#content.svelte-ixy3tf>.svelte-ixy3tf+.svelte-ixy3tf{margin-top:0.75em}.code.svelte-ixy3tf>span.svelte-ixy3tf.svelte-ixy3tf,.code.svelte-ixy3tf pre.svelte-ixy3tf.svelte-ixy3tf{border-radius:0.4rem;padding:0.8rem 1rem}.code.svelte-ixy3tf>span.svelte-ixy3tf.svelte-ixy3tf{font-weight:700;color:hsl(215, 10%, 98%);color:var(--frappe-grey-10);background:hsl(215, 22%, 5%);background:var(--frappe-grey-0);background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');background-size:20px;border-bottom-left-radius:0;border-bottom-right-radius:0;transition:color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:color var(--transition-duration) var(--ease-in-out-sine);display:flex;align-items:flex-end}.code.svelte-ixy3tf>span svg.svelte-ixy3tf.svelte-ixy3tf{width:1.25em;height:auto;margin-right:0.5rem}.code.svelte-ixy3tf:hover>span.svelte-ixy3tf.svelte-ixy3tf{color:hsl(340, 90%, 55%);color:var(--primary-6)}.code.svelte-ixy3tf pre.svelte-ixy3tf.svelte-ixy3tf{margin-top:0;line-height:1.75;color:hsl(214, 15%, 88%);color:var(--frappe-grey-9);background:hsl(210, 20%, 12%);background:var(--frappe-grey-1);border-top-left-radius:0;border-top-right-radius:0}.code.svelte-ixy3tf pre.svelte-ixy3tf.svelte-ixy3tf{overflow-x:auto}.code.svelte-ixy3tf pre.svelte-ixy3tf.svelte-ixy3tf::-webkit-scrollbar{height:0.4rem}.code.svelte-ixy3tf pre.svelte-ixy3tf.svelte-ixy3tf::-webkit-scrollbar-track{background:hsl(215, 22%, 5%);background:var(--frappe-grey-0)}.code.svelte-ixy3tf pre.svelte-ixy3tf.svelte-ixy3tf::-webkit-scrollbar-thumb{background:hsl(340, 90%, 55%);background:var(--primary-6);border-radius:0.2rem}@supports ((-webkit-mask-image: url()) or (mask-image: url())){.webfonts a.relative.svelte-ixy3tf.svelte-ixy3tf.svelte-ixy3tf{font-family:JosefinSansBold, sans-serif}a.relative.svelte-ixy3tf.svelte-ixy3tf.svelte-ixy3tf{--transition-duration:0.4s;font-weight:700;text-decoration:none;display:inline-block;position:relative;padding-bottom:0.5em;margin:0.8em 0 1.3em;z-index:5}a.relative.svelte-ixy3tf.svelte-ixy3tf.svelte-ixy3tf:focus{outline:none}a.relative.svelte-ixy3tf.svelte-ixy3tf.svelte-ixy3tf::before,a.relative.svelte-ixy3tf.svelte-ixy3tf.svelte-ixy3tf::after{content:'';position:absolute;top:100%;background:currentColor;transition:transform var(--transition-duration) var(--ease-in-out-sine);pointer-events:none;z-index:-5}a.relative.svelte-ixy3tf.svelte-ixy3tf.svelte-ixy3tf::before{left:0%;width:100%;height:2px;transform-origin:0% 50%;transform:translate(0%, -50%) scaleX(0)}a.relative.svelte-ixy3tf.svelte-ixy3tf.svelte-ixy3tf:hover::before,a.relative.svelte-ixy3tf.svelte-ixy3tf.svelte-ixy3tf:focus::before{transform:translate(0%, -50%) scaleX(1)}a.relative.svelte-ixy3tf.svelte-ixy3tf.svelte-ixy3tf::after{left:50%;width:100%;height:1.7em;transform:translate(-50%, -50%);-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"%3E%3Cg transform="scale(0.8) rotate(90)"%3E%3Cpath stroke-width="8" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" /%3E%3Cg stroke-width="7"%3E%3Cpath d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /%3E%3Cpath transform="scale(-1 1)" d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /%3E%3Cpath d="M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5" /%3E%3Ccircle r="9" cy="-11" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"%3E%3Cg transform="scale(0.8) rotate(90)"%3E%3Cpath stroke-width="8" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" /%3E%3Cg stroke-width="7"%3E%3Cpath d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /%3E%3Cpath transform="scale(-1 1)" d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /%3E%3Cpath d="M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5" /%3E%3Ccircle r="9" cy="-11" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}a.relative.svelte-ixy3tf.svelte-ixy3tf.svelte-ixy3tf:hover::after,a.relative.svelte-ixy3tf.svelte-ixy3tf.svelte-ixy3tf:focus::after{transform:translate(50%, -50%)}}`,
  map: `{"version":3,"file":"__error.svelte","sources":["__error.svelte"],"sourcesContent":["<script context=\\"module\\">\\r\\n\\texport function load({ error, status }) {\\r\\n\\t\\treturn {\\r\\n\\t\\t\\tprops: {\\r\\n\\t\\t\\t\\terror,\\r\\n\\t\\t\\t\\tstatus\\r\\n\\t\\t\\t}\\r\\n\\t\\t};\\r\\n\\t}\\r\\n<\/script>\\r\\n\\r\\n<script>\\r\\n\\timport Meta from '$lib/components/Meta.svelte';\\r\\n\\r\\n\\texport let error;\\r\\n\\texport let status;\\r\\n<\/script>\\r\\n\\r\\n<Meta description=\\"Error page with a status code {status}.\\" />\\r\\n\\r\\n<header>\\r\\n\\t<h1>{status}</h1>\\r\\n\\t<p>I tried my best, but something quite unexpected has happened.</p>\\r\\n</header>\\r\\n\\r\\n<main id=\\"content\\">\\r\\n\\t<p>Here's the error message for context.</p>\\r\\n\\r\\n\\t<div class=\\"code\\">\\r\\n\\t\\t<span>\\r\\n\\t\\t\\t<svg\\r\\n\\t\\t\\t\\taria-hidden=\\"true\\"\\r\\n\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\r\\n\\t\\t\\t\\tviewBox=\\"-50 -50 100 100\\"\\r\\n\\t\\t\\t\\twidth=\\"1em\\"\\r\\n\\t\\t\\t\\theight=\\"1em\\"\\r\\n\\t\\t\\t>\\r\\n\\t\\t\\t\\t<path\\r\\n\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\r\\n\\t\\t\\t\\t\\tstroke=\\"none\\"\\r\\n\\t\\t\\t\\t\\td=\\"M-40.5-33v16h.5v.5h80v-16h-.5v-.5h-80zm8.5.5a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0A4.5 4.5 0 01-1.5-28 4.5 4.5 0 01-6-23.5a4.5 4.5 0 01-4.5-4.5A4.5 4.5 0 01-6-32.5z\\"\\r\\n\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\">\\r\\n\\t\\t\\t\\t\\t<path d=\\"M-45-37.5h90v75h-90z\\" stroke-width=\\"10\\" />\\r\\n\\t\\t\\t\\t\\t<g stroke-width=\\"8\\">\\r\\n\\t\\t\\t\\t\\t\\t<path d=\\"M5-4L-5 21M-18 0l-8 8 8 8M18 0l8 8-8 8\\" />\\r\\n\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t</svg>\\r\\n\\t\\t</span>\\r\\n\\t\\t<pre><code>{error.message}</code></pre>\\r\\n\\t</div>\\r\\n\\r\\n\\t<p>\\r\\n\\t\\tIf you think this is a mistake I could fix, please consider filing an issue\\r\\n\\t\\t<a\\r\\n\\t\\t\\thref=\\"https://github.com/borntofrappe/borntofrappe/issues/new?title=Status%20code%20{status}&body={error.message}&labels=bug\\"\\r\\n\\t\\t\\t>on github</a\\r\\n\\t\\t>.\\r\\n\\t</p>\\r\\n\\r\\n\\t<p>\\r\\n\\t\\tIf you need some guidance,\\r\\n\\t\\t<em>home is always a good place to start.</em>\\r\\n\\t</p>\\r\\n\\r\\n\\t<a class=\\"relative\\" href=\\"/\\">Go to home page</a>\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n\\theader {\\r\\n\\t\\twidth: 90vw;\\r\\n\\t\\twidth: var(--width);\\r\\n\\t\\tmax-width: 42rem;\\r\\n\\t\\tmax-width: var(--max-width);\\r\\n\\t\\tmargin: 0 auto 20px;\\r\\n\\t\\tpadding: 3rem 0;\\r\\n\\t\\tcolor: hsl(215, 10%, 98%);\\r\\n\\t\\tcolor: var(--frappe-grey-10);\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tz-index: 5;\\r\\n\\t}\\r\\n\\r\\n\\theader > * + * {\\r\\n\\t\\tmargin-top: 0.75em;\\r\\n\\t}\\r\\n\\r\\n\\theader::before {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 0%;\\r\\n\\t\\tleft: 50%;\\r\\n\\t\\twidth: 100vw;\\r\\n\\t\\theight: 100%;\\r\\n\\t\\ttransform: translateX(-50%);\\r\\n\\t\\tbackground: inherit;\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg opacity=\\"0.5\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t\\tbackground-position: 0 100%;\\r\\n\\t\\tz-index: -5;\\r\\n\\t}\\r\\n\\r\\n\\theader::after {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 100%;\\r\\n\\t\\tleft: 50%;\\r\\n\\t\\twidth: 100vw;\\r\\n\\t\\theight: 20px;\\r\\n\\t\\ttransform: translateX(-50%) scaleY(-1);\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg opacity=\\"0.5\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t-webkit-mask-size: 100px 40px;\\r\\n\\t\\tmask-size: 100px 40px;\\r\\n\\t\\t-webkit-mask-position: 50% 0;\\r\\n\\t\\tmask-position: 50% 0;\\r\\n\\t\\tz-index: -5;\\r\\n\\t}\\r\\n\\r\\n\\theader h1 {\\r\\n\\t\\tcolor: inherit;\\r\\n\\t}\\r\\n\\r\\n\\t@supports (display: grid) {\\r\\n\\t\\tbody {\\r\\n\\t\\t\\toverflow-x: initial;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\theader {\\r\\n\\t\\t\\twidth: 100%;\\r\\n\\t\\t\\tmax-width: initial;\\r\\n\\t\\t\\tmargin: 0 initial 20px;\\r\\n\\t\\t\\tdisplay: grid;\\r\\n\\t\\t\\tgrid-template-columns: 1fr minmax(auto, 42rem) 1fr;\\r\\n\\t\\t\\tgrid-template-columns: 1fr minmax(auto, var(--max-width)) 1fr;\\r\\n\\t\\t\\tgap: 0 5vw;\\r\\n\\t\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg opacity=\\"0.5\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\tbackground-size: 20px;\\r\\n\\t\\t\\tbackground-position: 0 100%;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\theader > * {\\r\\n\\t\\t\\tgrid-column: 2;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\theader::before {\\r\\n\\t\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-70 -90 140 140\\"%3E%3Cg fill=\\"none\\" stroke=\\"hsl(215, 10%25, 97%25)\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cg transform=\\"translate(0 -80) scale(0.25)\\"%3E%3Cg transform=\\"scale(0.75)\\"%3E%3Cg fill=\\"none\\" stroke-width=\\"16\\"%3E%3Cg transform=\\"translate(0 13.5)\\"%3E%3Cpath d=\\"M 34 0 h -68\\"/%3E%3Cpath transform=\\"rotate(45)\\" d=\\"M 40 0 h -80\\"/%3E%3Cpath transform=\\"rotate(-45)\\" d=\\"M 40 0 h -80\\"/%3E%3C/g%3E%3C/g%3E%3Cg fill=\\"hsl(215, 10%25, 97%25)\\" stroke-width=\\"8\\"%3E%3Cpath d=\\"M -0 -46 a 17 17 0 0 1 17 17 h -34 a 17 17 0 0 1 17 -17\\" /%3E%3Cpath d=\\"M -0 -10 h 25 v 25 a 25 25 0 0 1 -50 0 v -25 z\\" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"%3E%3Cg fill=\\"hsl(215, 10%25, 97%25)\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10\\" /%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10\\" /%3E%3Cpath d=\\"M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5\\" /%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5\\" /%3E%3C/g%3E%3Cg stroke=\\"none\\"%3E%3Ccircle fill=\\"none\\" r=\\"25\\" cy=\\"-24\\"/%3E%3Cg fill=\\"hsl(215, 10%25, 97%25)\\"%3E%3Cpath d=\\"M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14\\"/%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14\\"/%3E%3Cpath d=\\"M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0\\" /%3E%3Cpath d=\\"M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0\\" /%3E%3Cpath d=\\"M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5\\" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\ttop: initial;\\r\\n\\t\\t\\tleft: initial;\\r\\n\\t\\t\\tbackground: initial;\\r\\n\\t\\t\\ttransform: initial;\\r\\n\\t\\t\\tgrid-column: 2/3;\\r\\n\\t\\t\\tgrid-row: 3;\\r\\n\\t\\t\\tjustify-self: end;\\r\\n\\t\\t\\twidth: 6rem;\\r\\n\\t\\t\\theight: 6rem;\\r\\n\\t\\t\\tz-index: 5;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\theader::after {\\r\\n\\t\\t\\tleft: 0%;\\r\\n\\t\\t\\twidth: 100%;\\r\\n\\t\\t\\ttransform: scaleY(-1);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\tmain#content {\\r\\n\\t\\twidth: 90vw;\\r\\n\\t\\twidth: var(--width);\\r\\n\\t\\tmax-width: 42rem;\\r\\n\\t\\tmax-width: var(--max-width);\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t\\tpadding-top: 2.5rem;\\r\\n\\t\\tpadding-bottom: 4rem;\\r\\n\\t}\\r\\n\\r\\n\\tmain#content > * + * {\\r\\n\\t\\tmargin-top: 0.75em;\\r\\n\\t}\\r\\n\\r\\n\\t/* components/code */\\r\\n\\t.code > span,\\r\\n\\t.code pre {\\r\\n\\t\\tborder-radius: 0.4rem;\\r\\n\\t\\tpadding: 0.8rem 1rem;\\r\\n\\t}\\r\\n\\r\\n\\t.code > span {\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t\\tcolor: hsl(215, 10%, 98%);\\r\\n\\t\\tcolor: var(--frappe-grey-10);\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg opacity=\\"0.5\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t\\tborder-bottom-left-radius: 0;\\r\\n\\t\\tborder-bottom-right-radius: 0;\\r\\n\\t\\ttransition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition: color var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: flex-end;\\r\\n\\t}\\r\\n\\r\\n\\t.code > span svg {\\r\\n\\t\\twidth: 1.25em;\\r\\n\\t\\theight: auto;\\r\\n\\t\\tmargin-right: 0.5rem;\\r\\n\\t}\\r\\n\\r\\n\\t.code:hover > span {\\r\\n\\t\\tcolor: hsl(340, 90%, 55%);\\r\\n\\t\\tcolor: var(--primary-6);\\r\\n\\t}\\r\\n\\r\\n\\t.code pre {\\r\\n\\t\\tmargin-top: 0;\\r\\n\\t\\tline-height: 1.75;\\r\\n\\t\\tcolor: hsl(214, 15%, 88%);\\r\\n\\t\\tcolor: var(--frappe-grey-9);\\r\\n\\t\\tbackground: hsl(210, 20%, 12%);\\r\\n\\t\\tbackground: var(--frappe-grey-1);\\r\\n\\t\\tborder-top-left-radius: 0;\\r\\n\\t\\tborder-top-right-radius: 0;\\r\\n\\t}\\r\\n\\r\\n\\t.code pre {\\r\\n\\t\\toverflow-x: auto;\\r\\n\\t}\\r\\n\\r\\n\\t.code pre::-webkit-scrollbar {\\r\\n\\t\\theight: 0.4rem;\\r\\n\\t}\\r\\n\\r\\n\\t.code pre::-webkit-scrollbar-track {\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t}\\r\\n\\r\\n\\t.code pre::-webkit-scrollbar-thumb {\\r\\n\\t\\tbackground: hsl(340, 90%, 55%);\\r\\n\\t\\tbackground: var(--primary-6);\\r\\n\\t\\tborder-radius: 0.2rem;\\r\\n\\t}\\r\\n\\r\\n\\t/* components/relative link */\\r\\n\\t@supports ((-webkit-mask-image: url()) or (mask-image: url())) {\\r\\n\\t\\t:global(.webfonts) a.relative {\\r\\n\\t\\t\\tfont-family: JosefinSansBold, sans-serif;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\ta.relative {\\r\\n\\t\\t\\t--transition-duration: 0.4s;\\r\\n\\t\\t\\tfont-weight: 700;\\r\\n\\t\\t\\ttext-decoration: none;\\r\\n\\t\\t\\tdisplay: inline-block;\\r\\n\\t\\t\\tposition: relative;\\r\\n\\t\\t\\tpadding-bottom: 0.5em;\\r\\n\\t\\t\\tmargin: 0.8em 0 1.3em;\\r\\n\\t\\t\\tz-index: 5;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\ta.relative:focus {\\r\\n\\t\\t\\toutline: none;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\ta.relative::before,\\r\\n\\t\\ta.relative::after {\\r\\n\\t\\t\\tcontent: '';\\r\\n\\t\\t\\tposition: absolute;\\r\\n\\t\\t\\ttop: 100%;\\r\\n\\t\\t\\tbackground: currentColor;\\r\\n\\t\\t\\ttransition: transform var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t\\t\\tpointer-events: none;\\r\\n\\t\\t\\tz-index: -5;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\ta.relative::before {\\r\\n\\t\\t\\tleft: 0%;\\r\\n\\t\\t\\twidth: 100%;\\r\\n\\t\\t\\theight: 2px;\\r\\n\\t\\t\\ttransform-origin: 0% 50%;\\r\\n\\t\\t\\ttransform: translate(0%, -50%) scaleX(0);\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\ta.relative:hover::before,\\r\\n\\t\\ta.relative:focus::before {\\r\\n\\t\\t\\ttransform: translate(0%, -50%) scaleX(1);\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\ta.relative::after {\\r\\n\\t\\t\\tleft: 50%;\\r\\n\\t\\t\\twidth: 100%;\\r\\n\\t\\t\\theight: 1.7em;\\r\\n\\t\\t\\ttransform: translate(-50%, -50%);\\r\\n\\t\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"none\\" stroke=\\"currentColor\\" stroke-linejoin=\\"round\\" stroke-linecap=\\"round\\"%3E%3Cg transform=\\"scale(0.8) rotate(90)\\"%3E%3Cpath stroke-width=\\"8\\" d=\\"M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52\\" /%3E%3Cg stroke-width=\\"7\\"%3E%3Cpath d=\\"M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21\\" /%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21\\" /%3E%3Cpath d=\\"M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5\\" /%3E%3Ccircle r=\\"9\\" cy=\\"-11\\" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"none\\" stroke=\\"currentColor\\" stroke-linejoin=\\"round\\" stroke-linecap=\\"round\\"%3E%3Cg transform=\\"scale(0.8) rotate(90)\\"%3E%3Cpath stroke-width=\\"8\\" d=\\"M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52\\" /%3E%3Cg stroke-width=\\"7\\"%3E%3Cpath d=\\"M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21\\" /%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21\\" /%3E%3Cpath d=\\"M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5\\" /%3E%3Ccircle r=\\"9\\" cy=\\"-11\\" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t\\t-webkit-mask-repeat: no-repeat;\\r\\n\\t\\t\\tmask-repeat: no-repeat;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\ta.relative:hover::after,\\r\\n\\t\\ta.relative:focus::after {\\r\\n\\t\\t\\ttransform: translate(50%, -50%);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAsEC,MAAM,0CAAC,CAAC,AACP,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,IAAI,WAAW,CAAC,CAC3B,MAAM,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CACnB,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,KAAK,CAAE,IAAI,gBAAgB,CAAC,CAC5B,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAC7B,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,AACX,CAAC,AAED,oBAAM,CAAG,cAAC,CAAG,cAAE,CAAC,AACf,UAAU,CAAE,MAAM,AACnB,CAAC,AAED,gDAAM,QAAQ,AAAC,CAAC,AACf,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,EAAE,CACP,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,UAAU,CAAE,OAAO,CACnB,gBAAgB,CAAE,IAAI,oZAAoZ,CAAC,CAC3a,eAAe,CAAE,IAAI,CACrB,mBAAmB,CAAE,CAAC,CAAC,IAAI,CAC3B,OAAO,CAAE,EAAE,AACZ,CAAC,AAED,gDAAM,OAAO,AAAC,CAAC,AACd,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,WAAW,IAAI,CAAC,CAAC,OAAO,EAAE,CAAC,CACtC,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAC7B,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,gBAAgB,CAAE,IAAI,oZAAoZ,CAAC,CAC3a,eAAe,CAAE,IAAI,CACrB,kBAAkB,CAAE,IAAI,2RAA2R,CAAC,CACpT,UAAU,CAAE,IAAI,2RAA2R,CAAC,CAC5S,iBAAiB,CAAE,KAAK,CAAC,IAAI,CAC7B,SAAS,CAAE,KAAK,CAAC,IAAI,CACrB,qBAAqB,CAAE,GAAG,CAAC,CAAC,CAC5B,aAAa,CAAE,GAAG,CAAC,CAAC,CACpB,OAAO,CAAE,EAAE,AACZ,CAAC,AAED,oBAAM,CAAC,EAAE,4BAAC,CAAC,AACV,KAAK,CAAE,OAAO,AACf,CAAC,AAED,UAAU,CAAC,SAAS,IAAI,CAAC,AAAC,CAAC,AAK1B,MAAM,0CAAC,CAAC,AACP,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,OAAO,CAClB,MAAM,CAAE,CAAC,CAAC,OAAO,CAAC,IAAI,CACtB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,OAAO,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,GAAG,CAClD,qBAAqB,CAAE,GAAG,CAAC,OAAO,IAAI,CAAC,CAAC,IAAI,WAAW,CAAC,CAAC,CAAC,GAAG,CAC7D,GAAG,CAAE,CAAC,CAAC,GAAG,CACV,gBAAgB,CAAE,IAAI,oZAAoZ,CAAC,CAC3a,eAAe,CAAE,IAAI,CACrB,mBAAmB,CAAE,CAAC,CAAC,IAAI,AAC5B,CAAC,AAED,oBAAM,CAAG,4BAAE,CAAC,AACX,WAAW,CAAE,CAAC,AACf,CAAC,AAED,gDAAM,QAAQ,AAAC,CAAC,AACf,OAAO,CAAE,IAAI,smDAAsmD,CAAC,CACpnD,GAAG,CAAE,OAAO,CACZ,IAAI,CAAE,OAAO,CACb,UAAU,CAAE,OAAO,CACnB,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,CAAC,CAAC,CAAC,CAChB,QAAQ,CAAE,CAAC,CACX,YAAY,CAAE,GAAG,CACjB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CAAC,AACX,CAAC,AAED,gDAAM,OAAO,AAAC,CAAC,AACd,IAAI,CAAE,EAAE,CACR,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,OAAO,EAAE,CAAC,AACtB,CAAC,AACF,CAAC,AAED,IAAI,QAAQ,0CAAC,CAAC,AACb,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,IAAI,WAAW,CAAC,CAC3B,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,IAAI,AACrB,CAAC,AAED,IAAI,sBAAQ,CAAG,cAAC,CAAG,cAAE,CAAC,AACrB,UAAU,CAAE,MAAM,AACnB,CAAC,AAGD,mBAAK,CAAG,gCAAI,CACZ,mBAAK,CAAC,GAAG,4BAAC,CAAC,AACV,aAAa,CAAE,MAAM,CACrB,OAAO,CAAE,MAAM,CAAC,IAAI,AACrB,CAAC,AAED,mBAAK,CAAG,IAAI,4BAAC,CAAC,AACb,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,KAAK,CAAE,IAAI,gBAAgB,CAAC,CAC5B,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAC7B,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,gBAAgB,CAAE,IAAI,oZAAoZ,CAAC,CAC3a,eAAe,CAAE,IAAI,CACrB,yBAAyB,CAAE,CAAC,CAC5B,0BAA0B,CAAE,CAAC,CAC7B,UAAU,CAAE,KAAK,CAAC,KAAK,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAC7D,UAAU,CAAE,KAAK,CAAC,IAAI,qBAAqB,CAAC,CAAC,IAAI,kBAAkB,CAAC,CACpE,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,QAAQ,AACtB,CAAC,AAED,mBAAK,CAAG,IAAI,CAAC,GAAG,4BAAC,CAAC,AACjB,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,MAAM,AACrB,CAAC,AAED,mBAAK,MAAM,CAAG,IAAI,4BAAC,CAAC,AACnB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,KAAK,CAAE,IAAI,WAAW,CAAC,AACxB,CAAC,AAED,mBAAK,CAAC,GAAG,4BAAC,CAAC,AACV,UAAU,CAAE,CAAC,CACb,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,KAAK,CAAE,IAAI,eAAe,CAAC,CAC3B,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9B,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,sBAAsB,CAAE,CAAC,CACzB,uBAAuB,CAAE,CAAC,AAC3B,CAAC,AAED,mBAAK,CAAC,GAAG,4BAAC,CAAC,AACV,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,mBAAK,CAAC,+BAAG,mBAAmB,AAAC,CAAC,AAC7B,MAAM,CAAE,MAAM,AACf,CAAC,AAED,mBAAK,CAAC,+BAAG,yBAAyB,AAAC,CAAC,AACnC,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAC7B,UAAU,CAAE,IAAI,eAAe,CAAC,AACjC,CAAC,AAED,mBAAK,CAAC,+BAAG,yBAAyB,AAAC,CAAC,AACnC,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9B,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,aAAa,CAAE,MAAM,AACtB,CAAC,AAGD,UAAU,CAAC,CAAC,oBAAoB,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,YAAY,IAAI,CAAC,CAAC,CAAC,AAAC,CAAC,AACvD,SAAS,AAAC,CAAC,CAAC,SAAS,0CAAC,CAAC,AAC9B,WAAW,CAAE,eAAe,CAAC,CAAC,UAAU,AACzC,CAAC,AAED,CAAC,SAAS,0CAAC,CAAC,AACX,qBAAqB,CAAE,IAAI,CAC3B,WAAW,CAAE,GAAG,CAChB,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,YAAY,CACrB,QAAQ,CAAE,QAAQ,CAClB,cAAc,CAAE,KAAK,CACrB,MAAM,CAAE,KAAK,CAAC,CAAC,CAAC,KAAK,CACrB,OAAO,CAAE,CAAC,AACX,CAAC,AAED,CAAC,mDAAS,MAAM,AAAC,CAAC,AACjB,OAAO,CAAE,IAAI,AACd,CAAC,AAED,CAAC,mDAAS,QAAQ,CAClB,CAAC,mDAAS,OAAO,AAAC,CAAC,AAClB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,UAAU,CAAE,YAAY,CACxB,UAAU,CAAE,SAAS,CAAC,IAAI,qBAAqB,CAAC,CAAC,IAAI,kBAAkB,CAAC,CACxE,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,EAAE,AACZ,CAAC,AAED,CAAC,mDAAS,QAAQ,AAAC,CAAC,AACnB,IAAI,CAAE,EAAE,CACR,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,EAAE,CAAC,GAAG,CACxB,SAAS,CAAE,UAAU,EAAE,CAAC,CAAC,IAAI,CAAC,CAAC,OAAO,CAAC,CAAC,AACzC,CAAC,AAED,CAAC,mDAAS,MAAM,QAAQ,CACxB,CAAC,mDAAS,MAAM,QAAQ,AAAC,CAAC,AACzB,SAAS,CAAE,UAAU,EAAE,CAAC,CAAC,IAAI,CAAC,CAAC,OAAO,CAAC,CAAC,AACzC,CAAC,AAED,CAAC,mDAAS,OAAO,AAAC,CAAC,AAClB,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,kBAAkB,CAAE,IAAI,goBAAgoB,CAAC,CACzpB,UAAU,CAAE,IAAI,goBAAgoB,CAAC,CACjpB,mBAAmB,CAAE,SAAS,CAC9B,WAAW,CAAE,SAAS,AACvB,CAAC,AAED,CAAC,mDAAS,MAAM,OAAO,CACvB,CAAC,mDAAS,MAAM,OAAO,AAAC,CAAC,AACxB,SAAS,CAAE,UAAU,GAAG,CAAC,CAAC,IAAI,CAAC,AAChC,CAAC,AACF,CAAC"}`
};
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
  $$result.css.add(css$4);
  return `${validate_component(Meta, "Meta").$$render($$result, {
    description: "Error page with a status code " + status + "."
  }, {}, {})}

<header class="${"svelte-ixy3tf"}"><h1 class="${"svelte-ixy3tf"}">${escape(status)}</h1>
	<p class="${"svelte-ixy3tf"}">I tried my best, but something quite unexpected has happened.</p></header>

<main id="${"content"}" class="${"svelte-ixy3tf"}"><p class="${"svelte-ixy3tf"}">Here&#39;s the error message for context.</p>

	<div class="${"code svelte-ixy3tf"}"><span class="${"svelte-ixy3tf"}"><svg aria-hidden="${"true"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"-50 -50 100 100"}" width="${"1em"}" height="${"1em"}" class="${"svelte-ixy3tf"}"><path fill="${"currentColor"}" stroke="${"none"}" d="${"M-40.5-33v16h.5v.5h80v-16h-.5v-.5h-80zm8.5.5a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0A4.5 4.5 0 01-1.5-28 4.5 4.5 0 01-6-23.5a4.5 4.5 0 01-4.5-4.5A4.5 4.5 0 01-6-32.5z"}"></path><g fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path d="${"M-45-37.5h90v75h-90z"}" stroke-width="${"10"}"></path><g stroke-width="${"8"}"><path d="${"M5-4L-5 21M-18 0l-8 8 8 8M18 0l8 8-8 8"}"></path></g></g></svg></span>
		<pre class="${"svelte-ixy3tf"}"><code>${escape(error2.message)}</code></pre></div>

	<p class="${"svelte-ixy3tf"}">If you think this is a mistake I could fix, please consider filing an issue
		<a href="${"https://github.com/borntofrappe/borntofrappe/issues/new?title=Status%20code%20" + escape(status) + "&body=" + escape(error2.message) + "&labels=bug"}">on github</a>.
	</p>

	<p class="${"svelte-ixy3tf"}">If you need some guidance,
		<em>home is always a good place to start.</em></p>

	<a class="${"relative svelte-ixy3tf"}" href="${"/"}">Go to home page</a>
</main>`;
});
var __error = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _error,
  load
});
var css$3 = {
  code: `header.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:0.5rem;padding:2.5rem 0;color:hsl(215, 10%, 98%);color:var(--frappe-grey-10);background:hsl(215, 22%, 5%);background:var(--frappe-grey-0);background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/svg%3E');background-size:20px;background-position:0 100%;position:relative;z-index:0;--animation-duration:12s}header.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6::after{content:'';position:absolute;top:100%;left:0%;width:100%;height:20px;transform:scaleY(-1);background:hsl(215, 22%, 5%);background:var(--frappe-grey-0);background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');background-size:20px;-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');-webkit-mask-size:100px 40px;mask-size:100px 40px;-webkit-mask-position:50% 0;mask-position:50% 0;z-index:-5}header.svelte-1hesuf6>.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6{width:90vw;width:var(--width);max-width:30rem}header.svelte-1hesuf6 nav.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6{--transition-duration:0.4s;order:-1;padding:0.5rem}header.svelte-1hesuf6 nav.svelte-1hesuf6>svg.svelte-1hesuf6.svelte-1hesuf6{width:100%;height:auto}header.svelte-1hesuf6 nav>svg #borntofrappe.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6{transition:transform 0.4s cubic-bezier(0.68, -0.5, 0.265, 1.55),\r
			color 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:transform var(--transition-duration) var(--ease-in-out-back),\r
			color var(--transition-duration) var(--ease-in-out-sine)}header.svelte-1hesuf6 nav>svg #borntofrappe.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6:hover{color:hsl(340, 90%, 55%);color:var(--primary-6);transform:scale(1.25) rotate(-10deg)}header.svelte-1hesuf6 nav>svg a.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6{transition:transform 0.4s cubic-bezier(0.68, -0.5, 0.265, 1.55),\r
			color 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:transform var(--transition-duration) var(--ease-in-out-back),\r
			color var(--transition-duration) var(--ease-in-out-sine);transform:scale(0.85)}header.svelte-1hesuf6 nav>svg a .text.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6{font-family:'Inconsolata', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;transform:scale(0);transition:transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);transition:transform var(--transition-duration) var(--ease-out-cubic)}header.svelte-1hesuf6 nav>svg a.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6:hover,header.svelte-1hesuf6 nav>svg a.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6:focus,header.svelte-1hesuf6 nav>svg a:hover .text.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6,header.svelte-1hesuf6 nav>svg a:focus .text.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6{transform:scale(1)}header.svelte-1hesuf6 nav>svg a.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6:focus{outline:none}header.svelte-1hesuf6 div.svelte-1hesuf6>.svelte-1hesuf6+.svelte-1hesuf6{margin-top:0.5em}header.svelte-1hesuf6>.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6:nth-last-child(2){position:relative}header.svelte-1hesuf6>.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6:nth-last-child(2)::after{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke="none"%3E%3Cpath d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath transform="scale(-1 1)" d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3Cpath transform="scale(-1 1)" d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3C/g%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(215, 10%25, 97%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');position:absolute;top:100%;left:50%;width:8em;height:8em;transform:translateX(-50%) rotate(45deg);animation:svelte-1hesuf6-rotate-astronaut 12s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;animation:svelte-1hesuf6-rotate-astronaut var(--animation-duration) var(--ease-in-out-sine) infinite;animation-play-state:paused}header.observed.svelte-1hesuf6>.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6:nth-last-child(2)::after{animation-play-state:running}@keyframes svelte-1hesuf6-rotate-astronaut{20%{transform:translateX(-50%) rotate(15deg)}40%,100%{transform:translateX(-50%) rotate(45deg)}}@media(prefers-reduced-motion: reduce){header.observed.svelte-1hesuf6>.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6:nth-last-child(2)::after{animation-play-state:paused}}header.svelte-1hesuf6 h1.svelte-1hesuf6.svelte-1hesuf6.svelte-1hesuf6{color:inherit}`,
  map: `{"version":3,"file":"Hero.svelte","sources":["Hero.svelte"],"sourcesContent":["<script>\\r\\n\\timport icons from '$lib/icons.js';\\r\\n\\r\\n\\tconst links = [\\r\\n\\t\\t{\\r\\n\\t\\t\\tname: 'codepen',\\r\\n\\t\\t\\thref: 'https://codepen.io/borntofrappe',\\r\\n\\t\\t\\tdesc: 'Marvel at the numerous demos I created on CodePen.'\\r\\n\\t\\t},\\r\\n\\t\\t{\\r\\n\\t\\t\\tname: 'freecodecamp',\\r\\n\\t\\t\\thref: 'https://www.freecodecamp.org/borntofrappe',\\r\\n\\t\\t\\tdesc: 'Double-check the certifications I earned on freeCodeCamp.'\\r\\n\\t\\t},\\r\\n\\t\\t{\\r\\n\\t\\t\\tname: 'github',\\r\\n\\t\\t\\thref: 'https://github.com/borntofrappe',\\r\\n\\t\\t\\tdesc: 'Review, fork, and improve the code I publish on Github.'\\r\\n\\t\\t},\\r\\n\\t\\t{\\r\\n\\t\\t\\tname: 'twitter',\\r\\n\\t\\t\\thref: 'https://twitter.com/borntofrappe',\\r\\n\\t\\t\\tdesc: 'Follow me @borntofrappe.'\\r\\n\\t\\t}\\r\\n\\t];\\r\\n<\/script>\\r\\n\\r\\n<header class:observed={false}>\\r\\n\\t<div>\\r\\n\\t\\t<h1>Hello, World!</h1>\\r\\n\\t\\t<p>I enjoy writing code.</p>\\r\\n\\t\\t<p>With this website, I try to convince you I might be good at it as well.</p>\\r\\n\\t</div>\\r\\n\\r\\n\\t<nav aria-label=\\"borntofrappe links\\">\\r\\n\\t\\t<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-225 -225 450 450\\" width=\\"500\\" height=\\"500\\">\\r\\n\\t\\t\\t<defs>\\r\\n\\t\\t\\t\\t<path id=\\"path\\" d=\\"M 0 -32 a 32 32 0 0 1 0 64 32 32 0 0 1 0 -64\\" />\\r\\n\\t\\t\\t\\t<path id=\\"path-c\\" d=\\"M 0 39 a 39 39 0 0 1 0 -78 39 39 0 0 1 0 78\\" />\\r\\n\\t\\t\\t\\t<path id=\\"path-cc\\" d=\\"M 0 47 a 47 47 0 0 0 0 -94 47 47 0 0 0 0 94\\" />\\r\\n\\r\\n\\t\\t\\t\\t<mask id=\\"mask-text\\">\\r\\n\\t\\t\\t\\t\\t<rect x=\\"-50\\" y=\\"-50\\" width=\\"100\\" height=\\"100\\" fill=\\"hsl(0, 0%, 100%)\\" />\\r\\n\\t\\t\\t\\t\\t<use href=\\"#path\\" fill=\\"hsl(0, 0%, 0%)\\" />\\r\\n\\t\\t\\t\\t</mask>\\r\\n\\t\\t\\t</defs>\\r\\n\\r\\n\\t\\t\\t<g id=\\"borntofrappe\\">\\r\\n\\t\\t\\t\\t<g\\r\\n\\t\\t\\t\\t\\tfill=\\"none\\"\\r\\n\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\r\\n\\t\\t\\t\\t\\tstroke-width=\\"8\\"\\r\\n\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\r\\n\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t<circle r=\\"46\\" />\\r\\n\\t\\t\\t\\t\\t<path\\r\\n\\t\\t\\t\\t\\t\\td=\\"M -10 -13 q 0 -8 -8 -10\\"\\r\\n\\t\\t\\t\\t\\t\\tstroke-dasharray=\\"14.01 18.5\\"\\r\\n\\t\\t\\t\\t\\t\\tstroke-dashoffset=\\"-4.5\\"\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t<path\\r\\n\\t\\t\\t\\t\\t\\td=\\"M -10 -13 h 15 a 8 8 0 0 1 0 16 h -4 h 4 a 10 10 0 0 1 0 20 h -15 v -36\\"\\r\\n\\t\\t\\t\\t\\t\\tstroke-dasharray=\\"114.2 146.28\\"\\r\\n\\t\\t\\t\\t\\t\\tstroke-dashoffset=\\"-9.145\\"\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t<circle r=\\"46\\" opacity=\\"0\\" />\\r\\n\\t\\t\\t</g>\\r\\n\\r\\n\\t\\t\\t{#each links as { name, desc, href }, i}\\r\\n\\t\\t\\t\\t<g\\r\\n\\t\\t\\t\\t\\ttransform=\\"rotate({(360 / links.length) * i}) translate(0 -150) rotate({(360 /\\r\\n\\t\\t\\t\\t\\t\\tlinks.length) *\\r\\n\\t\\t\\t\\t\\t\\ti *\\r\\n\\t\\t\\t\\t\\t\\t-1})\\"\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t<a {href} aria-labelledby=\\"title-{name}\\" aria-describedby=\\"desc-{name}\\">\\r\\n\\t\\t\\t\\t\\t\\t<title id=\\"title-{name}\\">{name}</title>\\r\\n\\t\\t\\t\\t\\t\\t<desc id=\\"desc-{name}\\">{desc}</desc>\\r\\n\\t\\t\\t\\t\\t\\t<g transform=\\"translate(-75 -75)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<svg viewBox=\\"-50 -50 100 100\\" width=\\"150\\" height=\\"150\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<use href=\\"#path\\" stroke=\\"currentColor\\" stroke-width=\\"6\\" fill=\\"none\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<g transform=\\"rotate({(360 / links.length) * i})\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<g mask=\\"url(#mask-text)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<g class=\\"text\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<text\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfont-weight=\\"bold\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tletter-spacing=\\"1\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttext-anchor=\\"middle\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfont-size=\\"12\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfont-family=\\"inherit\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<textPath\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\thref={(360 / links.length) * i <= 90 || (360 / links.length) * i >= 270\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? '#path-c'\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: '#path-cc'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstartOffset=\\"50%\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{name}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</textPath>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</text>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<g transform=\\"translate(-16 -16)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{@html icons[name].replace(\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/width=\\"[^\\"]+\\"\\\\sheight=\\"[^\\"]+\\"/,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t'width=\\"32\\" height=\\"32\\"'\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t)}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<circle r=\\"50\\" opacity=\\"0\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t</svg>\\r\\n\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t</a>\\r\\n\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</svg>\\r\\n\\t</nav>\\r\\n</header>\\r\\n\\r\\n<style>\\r\\n\\theader {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tflex-wrap: wrap;\\r\\n\\t\\tgap: 0.5rem;\\r\\n\\t\\tpadding: 2.5rem 0;\\r\\n\\t\\tcolor: hsl(215, 10%, 98%);\\r\\n\\t\\tcolor: var(--frappe-grey-10);\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t\\tbackground-position: 0 100%;\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tz-index: 0;\\r\\n\\t\\t--animation-duration: 12s;\\r\\n\\t}\\r\\n\\r\\n\\theader::after {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 100%;\\r\\n\\t\\tleft: 0%;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 20px;\\r\\n\\t\\ttransform: scaleY(-1);\\r\\n\\t\\tbackground: hsl(215, 22%, 5%);\\r\\n\\t\\tbackground: var(--frappe-grey-0);\\r\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg opacity=\\"0.5\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tbackground-size: 20px;\\r\\n\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t-webkit-mask-size: 100px 40px;\\r\\n\\t\\tmask-size: 100px 40px;\\r\\n\\t\\t-webkit-mask-position: 50% 0;\\r\\n\\t\\tmask-position: 50% 0;\\r\\n\\t\\tz-index: -5;\\r\\n\\t}\\r\\n\\r\\n\\theader > * {\\r\\n\\t\\twidth: 90vw;\\r\\n\\t\\twidth: var(--width);\\r\\n\\t\\tmax-width: 30rem;\\r\\n\\t}\\r\\n\\r\\n\\theader nav {\\r\\n\\t\\t--transition-duration: 0.4s;\\r\\n\\t\\torder: -1;\\r\\n\\t\\tpadding: 0.5rem;\\r\\n\\t}\\r\\n\\r\\n\\theader nav > svg {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: auto;\\r\\n\\t}\\r\\n\\r\\n\\theader nav > svg #borntofrappe {\\r\\n\\t\\ttransition: transform 0.4s cubic-bezier(0.68, -0.5, 0.265, 1.55),\\r\\n\\t\\t\\tcolor 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition: transform var(--transition-duration) var(--ease-in-out-back),\\r\\n\\t\\t\\tcolor var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t}\\r\\n\\r\\n\\theader nav > svg #borntofrappe:hover {\\r\\n\\t\\tcolor: hsl(340, 90%, 55%);\\r\\n\\t\\tcolor: var(--primary-6);\\r\\n\\t\\ttransform: scale(1.25) rotate(-10deg);\\r\\n\\t}\\r\\n\\r\\n\\theader nav > svg a {\\r\\n\\t\\ttransition: transform 0.4s cubic-bezier(0.68, -0.5, 0.265, 1.55),\\r\\n\\t\\t\\tcolor 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);\\r\\n\\t\\ttransition: transform var(--transition-duration) var(--ease-in-out-back),\\r\\n\\t\\t\\tcolor var(--transition-duration) var(--ease-in-out-sine);\\r\\n\\t\\ttransform: scale(0.85);\\r\\n\\t}\\r\\n\\r\\n\\theader nav > svg a .text {\\r\\n\\t\\tfont-family: 'Inconsolata', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;\\r\\n\\t\\ttransform: scale(0);\\r\\n\\t\\ttransition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\\r\\n\\t\\ttransition: transform var(--transition-duration) var(--ease-out-cubic);\\r\\n\\t}\\r\\n\\r\\n\\theader nav > svg a:hover,\\r\\n\\theader nav > svg a:focus,\\r\\n\\theader nav > svg a:hover .text,\\r\\n\\theader nav > svg a:focus .text {\\r\\n\\t\\ttransform: scale(1);\\r\\n\\t}\\r\\n\\r\\n\\theader nav > svg a:focus {\\r\\n\\t\\toutline: none;\\r\\n\\t}\\r\\n\\r\\n\\theader div > * + * {\\r\\n\\t\\tmargin-top: 0.5em;\\r\\n\\t}\\r\\n\\r\\n\\theader > *:nth-last-child(2) {\\r\\n\\t\\tposition: relative;\\r\\n\\t}\\r\\n\\r\\n\\theader > *:nth-last-child(2)::after {\\r\\n\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"%3E%3Cg fill=\\"hsl(215, 10%25, 97%25)\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10\\" /%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10\\" /%3E%3Cpath d=\\"M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5\\" /%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5\\" /%3E%3C/g%3E%3Cg stroke=\\"none\\"%3E%3Ccircle fill=\\"none\\" r=\\"25\\" cy=\\"-24\\"/%3E%3Cg fill=\\"hsl(215, 10%25, 97%25)\\"%3E%3Cpath d=\\"M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14\\"/%3E%3Cpath transform=\\"scale(-1 1)\\" d=\\"M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14\\"/%3E%3Cpath d=\\"M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0\\" /%3E%3Cpath d=\\"M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0\\" /%3E%3Cpath d=\\"M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5\\" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 100%;\\r\\n\\t\\tleft: 50%;\\r\\n\\t\\twidth: 8em;\\r\\n\\t\\theight: 8em;\\r\\n\\t\\ttransform: translateX(-50%) rotate(45deg);\\r\\n\\t\\tanimation: rotate-astronaut 12s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;\\r\\n\\t\\tanimation: rotate-astronaut var(--animation-duration) var(--ease-in-out-sine) infinite;\\r\\n\\t\\tanimation-play-state: paused;\\r\\n\\t}\\r\\n\\r\\n\\theader.observed > *:nth-last-child(2)::after {\\r\\n\\t\\tanimation-play-state: running;\\r\\n\\t}\\r\\n\\r\\n\\t@keyframes rotate-astronaut {\\r\\n\\t\\t20% {\\r\\n\\t\\t\\ttransform: translateX(-50%) rotate(15deg);\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t40%,\\r\\n\\t\\t100% {\\r\\n\\t\\t\\ttransform: translateX(-50%) rotate(45deg);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t@media (prefers-reduced-motion: reduce) {\\r\\n\\t\\theader.observed > *:nth-last-child(2)::after {\\r\\n\\t\\t\\tanimation-play-state: paused;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\theader h1 {\\r\\n\\t\\tcolor: inherit;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4HC,MAAM,4DAAC,CAAC,AACP,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,MAAM,CACX,OAAO,CAAE,MAAM,CAAC,CAAC,CACjB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,KAAK,CAAE,IAAI,gBAAgB,CAAC,CAC5B,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAC7B,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,gBAAgB,CAAE,IAAI,uXAAuX,CAAC,CAC9Y,eAAe,CAAE,IAAI,CACrB,mBAAmB,CAAE,CAAC,CAAC,IAAI,CAC3B,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,oBAAoB,CAAE,GAAG,AAC1B,CAAC,AAED,kEAAM,OAAO,AAAC,CAAC,AACd,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,EAAE,CACR,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,OAAO,EAAE,CAAC,CACrB,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAC7B,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,gBAAgB,CAAE,IAAI,oZAAoZ,CAAC,CAC3a,eAAe,CAAE,IAAI,CACrB,kBAAkB,CAAE,IAAI,2RAA2R,CAAC,CACpT,UAAU,CAAE,IAAI,2RAA2R,CAAC,CAC5S,iBAAiB,CAAE,KAAK,CAAC,IAAI,CAC7B,SAAS,CAAE,KAAK,CAAC,IAAI,CACrB,qBAAqB,CAAE,GAAG,CAAC,CAAC,CAC5B,aAAa,CAAE,GAAG,CAAC,CAAC,CACpB,OAAO,CAAE,EAAE,AACZ,CAAC,AAED,qBAAM,CAAG,6CAAE,CAAC,AACX,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,SAAS,CAAE,KAAK,AACjB,CAAC,AAED,qBAAM,CAAC,GAAG,6CAAC,CAAC,AACX,qBAAqB,CAAE,IAAI,CAC3B,KAAK,CAAE,EAAE,CACT,OAAO,CAAE,MAAM,AAChB,CAAC,AAED,qBAAM,CAAC,kBAAG,CAAG,GAAG,8BAAC,CAAC,AACjB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AACb,CAAC,AAED,qBAAM,CAAC,GAAG,CAAG,GAAG,CAAC,aAAa,6CAAC,CAAC,AAC/B,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC;GAChE,KAAK,CAAC,IAAI,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CACjD,UAAU,CAAE,SAAS,CAAC,IAAI,qBAAqB,CAAC,CAAC,IAAI,kBAAkB,CAAC,CAAC;GACxE,KAAK,CAAC,IAAI,qBAAqB,CAAC,CAAC,IAAI,kBAAkB,CAAC,AAC1D,CAAC,AAED,qBAAM,CAAC,GAAG,CAAG,GAAG,CAAC,0DAAa,MAAM,AAAC,CAAC,AACrC,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,SAAS,CAAE,MAAM,IAAI,CAAC,CAAC,OAAO,MAAM,CAAC,AACtC,CAAC,AAED,qBAAM,CAAC,GAAG,CAAG,GAAG,CAAC,CAAC,6CAAC,CAAC,AACnB,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC;GAChE,KAAK,CAAC,IAAI,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CACjD,UAAU,CAAE,SAAS,CAAC,IAAI,qBAAqB,CAAC,CAAC,IAAI,kBAAkB,CAAC,CAAC;GACxE,KAAK,CAAC,IAAI,qBAAqB,CAAC,CAAC,IAAI,kBAAkB,CAAC,CACzD,SAAS,CAAE,MAAM,IAAI,CAAC,AACvB,CAAC,AAED,qBAAM,CAAC,GAAG,CAAG,GAAG,CAAC,CAAC,CAAC,KAAK,6CAAC,CAAC,AACzB,WAAW,CAAE,aAAa,CAAC,CAAC,KAAK,CAAC,CAAC,QAAQ,CAAC,CAAC,MAAM,CAAC,CAAC,UAAU,CAAC,IAAI,CAAC,CAAC,MAAM,CAAC,OAAO,CAAC,CAAC,SAAS,CAC/F,SAAS,CAAE,MAAM,CAAC,CAAC,CACnB,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAC9D,UAAU,CAAE,SAAS,CAAC,IAAI,qBAAqB,CAAC,CAAC,IAAI,gBAAgB,CAAC,AACvE,CAAC,AAED,qBAAM,CAAC,GAAG,CAAG,GAAG,CAAC,8CAAC,MAAM,CACxB,qBAAM,CAAC,GAAG,CAAG,GAAG,CAAC,8CAAC,MAAM,CACxB,qBAAM,CAAC,GAAG,CAAG,GAAG,CAAC,CAAC,MAAM,CAAC,kDAAK,CAC9B,qBAAM,CAAC,GAAG,CAAG,GAAG,CAAC,CAAC,MAAM,CAAC,KAAK,6CAAC,CAAC,AAC/B,SAAS,CAAE,MAAM,CAAC,CAAC,AACpB,CAAC,AAED,qBAAM,CAAC,GAAG,CAAG,GAAG,CAAC,8CAAC,MAAM,AAAC,CAAC,AACzB,OAAO,CAAE,IAAI,AACd,CAAC,AAED,qBAAM,CAAC,kBAAG,CAAG,eAAC,CAAG,eAAE,CAAC,AACnB,UAAU,CAAE,KAAK,AAClB,CAAC,AAED,qBAAM,CAAG,6CAAC,gBAAgB,CAAC,CAAC,AAAC,CAAC,AAC7B,QAAQ,CAAE,QAAQ,AACnB,CAAC,AAED,qBAAM,CAAG,6CAAC,gBAAgB,CAAC,CAAC,OAAO,AAAC,CAAC,AACpC,OAAO,CAAE,IAAI,2/BAA2/B,CAAC,CACzgC,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,SAAS,CAAE,WAAW,IAAI,CAAC,CAAC,OAAO,KAAK,CAAC,CACzC,SAAS,CAAE,+BAAgB,CAAC,GAAG,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,QAAQ,CAC9E,SAAS,CAAE,+BAAgB,CAAC,IAAI,oBAAoB,CAAC,CAAC,IAAI,kBAAkB,CAAC,CAAC,QAAQ,CACtF,oBAAoB,CAAE,MAAM,AAC7B,CAAC,AAED,MAAM,wBAAS,CAAG,6CAAC,gBAAgB,CAAC,CAAC,OAAO,AAAC,CAAC,AAC7C,oBAAoB,CAAE,OAAO,AAC9B,CAAC,AAED,WAAW,+BAAiB,CAAC,AAC5B,GAAG,AAAC,CAAC,AACJ,SAAS,CAAE,WAAW,IAAI,CAAC,CAAC,OAAO,KAAK,CAAC,AAC1C,CAAC,AAED,GAAG,CACH,IAAI,AAAC,CAAC,AACL,SAAS,CAAE,WAAW,IAAI,CAAC,CAAC,OAAO,KAAK,CAAC,AAC1C,CAAC,AACF,CAAC,AAED,MAAM,AAAC,yBAAyB,MAAM,CAAC,AAAC,CAAC,AACxC,MAAM,wBAAS,CAAG,6CAAC,gBAAgB,CAAC,CAAC,OAAO,AAAC,CAAC,AAC7C,oBAAoB,CAAE,MAAM,AAC7B,CAAC,AACF,CAAC,AAED,qBAAM,CAAC,EAAE,6CAAC,CAAC,AACV,KAAK,CAAE,OAAO,AACf,CAAC"}`
};
var Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    {
      name: "codepen",
      href: "https://codepen.io/borntofrappe",
      desc: "Marvel at the numerous demos I created on CodePen."
    },
    {
      name: "freecodecamp",
      href: "https://www.freecodecamp.org/borntofrappe",
      desc: "Double-check the certifications I earned on freeCodeCamp."
    },
    {
      name: "github",
      href: "https://github.com/borntofrappe",
      desc: "Review, fork, and improve the code I publish on Github."
    },
    {
      name: "twitter",
      href: "https://twitter.com/borntofrappe",
      desc: "Follow me @borntofrappe."
    }
  ];
  $$result.css.add(css$3);
  return `<header class="${["svelte-1hesuf6", ""].join(" ").trim()}"><div class="${"svelte-1hesuf6"}"><h1 class="${"svelte-1hesuf6"}">Hello, World!</h1>
		<p class="${"svelte-1hesuf6"}">I enjoy writing code.</p>
		<p class="${"svelte-1hesuf6"}">With this website, I try to convince you I might be good at it as well.</p></div>

	<nav aria-label="${"borntofrappe links"}" class="${"svelte-1hesuf6"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"-225 -225 450 450"}" width="${"500"}" height="${"500"}" class="${"svelte-1hesuf6"}"><defs><path id="${"path"}" d="${"M 0 -32 a 32 32 0 0 1 0 64 32 32 0 0 1 0 -64"}"></path><path id="${"path-c"}" d="${"M 0 39 a 39 39 0 0 1 0 -78 39 39 0 0 1 0 78"}"></path><path id="${"path-cc"}" d="${"M 0 47 a 47 47 0 0 0 0 -94 47 47 0 0 0 0 94"}"></path><mask id="${"mask-text"}"><rect x="${"-50"}" y="${"-50"}" width="${"100"}" height="${"100"}" fill="${"hsl(0, 0%, 100%)"}"></rect><use href="${"#path"}" fill="${"hsl(0, 0%, 0%)"}"></use></mask></defs><g id="${"borntofrappe"}" class="${"svelte-1hesuf6"}"><g fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"8"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><circle r="${"46"}"></circle><path d="${"M -10 -13 q 0 -8 -8 -10"}" stroke-dasharray="${"14.01 18.5"}" stroke-dashoffset="${"-4.5"}"></path><path d="${"M -10 -13 h 15 a 8 8 0 0 1 0 16 h -4 h 4 a 10 10 0 0 1 0 20 h -15 v -36"}" stroke-dasharray="${"114.2 146.28"}" stroke-dashoffset="${"-9.145"}"></path></g><circle r="${"46"}" opacity="${"0"}"></circle></g>${each(links, ({ name, desc, href }, i) => `<g transform="${"rotate(" + escape(360 / links.length * i) + ") translate(0 -150) rotate(" + escape(360 / links.length * i * -1) + ")"}"><a${add_attribute("href", href, 0)} aria-labelledby="${"title-" + escape(name)}" aria-describedby="${"desc-" + escape(name)}" class="${"svelte-1hesuf6"}"><title id="${"title-" + escape(name)}" class="${"svelte-1hesuf6"}">${escape(name)}</title><desc id="${"desc-" + escape(name)}" class="${"svelte-1hesuf6"}">${escape(desc)}</desc><g transform="${"translate(-75 -75)"}"><svg viewBox="${"-50 -50 100 100"}" width="${"150"}" height="${"150"}"><use href="${"#path"}" stroke="${"currentColor"}" stroke-width="${"6"}" fill="${"none"}"></use><g transform="${"rotate(" + escape(360 / links.length * i) + ")"}"><g mask="${"url(#mask-text)"}"><g class="${"text svelte-1hesuf6"}"><text fill="${"currentColor"}" font-weight="${"bold"}" letter-spacing="${"1"}" text-anchor="${"middle"}" font-size="${"12"}" font-family="${"inherit"}"><textPath${add_attribute("href", 360 / links.length * i <= 90 || 360 / links.length * i >= 270 ? "#path-c" : "#path-cc", 0)} startOffset="${"50%"}">${escape(name)}</textPath></text></g></g></g><g transform="${"translate(-16 -16)"}"><!-- HTML_TAG_START -->${icons[name].replace(/width="[^"]+"\sheight="[^"]+"/, 'width="32" height="32"')}<!-- HTML_TAG_END --></g><circle r="${"50"}" opacity="${"0"}"></circle></svg></g></a></g>`)}</svg></nav>
</header>`;
});
var css$2 = {
  code: `section.svelte-18ebfr0.svelte-18ebfr0{position:relative;--telescope-size:6.5em;--animation-duration:8s}section.svelte-18ebfr0 p.svelte-18ebfr0{line-height:1.75}section.svelte-18ebfr0.svelte-18ebfr0::before,section.svelte-18ebfr0.svelte-18ebfr0::after{width:6.5em;width:var(--telescope-size);height:6.5em;height:var(--telescope-size)}section.svelte-18ebfr0.svelte-18ebfr0::before{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120"%3E%3Cg fill="hsl(339, 90%25, 67%25)" stroke="hsl(350, 100%25, 8%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-dasharray="84 20 84" d="M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36" /%3E%3Cpath d="M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24" /%3E%3Cpath d="M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16" /%3E%3C/g%3E%3C/svg%3E');float:left;shape-outside:circle()}section.svelte-18ebfr0.svelte-18ebfr0::after{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120"%3E%3Cg transform="translate(26 -17)"%3E%3Cg fill="hsl(336, 93%25, 77%25)" stroke="hsl(350, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="5" transform="translate(-63 0) scale(0.4)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3.6" transform="translate(-51 0) scale(0.55)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3" transform="translate(-37 0) scale(0.65)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="2.5" transform="translate(-20 0) scale(0.8)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cg stroke-width="2"%3E%3Cpath d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath d="M 12 -14 a 15 15 0 0 1 0 28" /%3E%3Cpath fill="none" stroke-width="3" stroke-dasharray="0 8 12 20" transform="translate(12 0) scale(0.65)" d="M 0 -14 a 15 15 0 0 1 0 28" /%3E%3Crect fill="hsl(339, 90%25, 67%25)" y="-17" width="12" height="34" rx="6" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');position:absolute;top:0;left:0;transform:rotate(-20deg);transform-origin:50% 33%}@media(prefers-color-scheme: dark){html:not([data-preference]) section.svelte-18ebfr0.svelte-18ebfr0::before{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120"%3E%3Cg fill="hsl(210, 90%25, 62%25)" stroke="hsl(220, 100%25, 8%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-dasharray="84 20 84" d="M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36" /%3E%3Cpath d="M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24" /%3E%3Cpath d="M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16" /%3E%3C/g%3E%3C/svg%3E')}html:not([data-preference]) section.svelte-18ebfr0.svelte-18ebfr0::after{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120"%3E%3Cg transform="translate(26 -17)"%3E%3Cg fill="hsl(208, 95%25, 75%25)" stroke="hsl(220, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="5" transform="translate(-63 0) scale(0.4)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3.6" transform="translate(-51 0) scale(0.55)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3" transform="translate(-37 0) scale(0.65)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="2.5" transform="translate(-20 0) scale(0.8)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cg stroke-width="2"%3E%3Cpath d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath d="M 12 -14 a 15 15 0 0 1 0 28" /%3E%3Cpath fill="none" stroke-width="3" stroke-dasharray="0 8 12 20" transform="translate(12 0) scale(0.65)" d="M 0 -14 a 15 15 0 0 1 0 28" /%3E%3Crect fill="hsl(210, 90%25, 62%25)" y="-17" width="12" height="34" rx="6" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E')}}html[data-preference='dark'] section.svelte-18ebfr0.svelte-18ebfr0::before{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120"%3E%3Cg fill="hsl(210, 90%25, 62%25)" stroke="hsl(220, 100%25, 8%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-dasharray="84 20 84" d="M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36" /%3E%3Cpath d="M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24" /%3E%3Cpath d="M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16" /%3E%3C/g%3E%3C/svg%3E')}html[data-preference='dark'] section.svelte-18ebfr0.svelte-18ebfr0::after{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120"%3E%3Cg transform="translate(26 -17)"%3E%3Cg fill="hsl(208, 95%25, 75%25)" stroke="hsl(220, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="5" transform="translate(-63 0) scale(0.4)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3.6" transform="translate(-51 0) scale(0.55)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3" transform="translate(-37 0) scale(0.65)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="2.5" transform="translate(-20 0) scale(0.8)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cg stroke-width="2"%3E%3Cpath d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath d="M 12 -14 a 15 15 0 0 1 0 28" /%3E%3Cpath fill="none" stroke-width="3" stroke-dasharray="0 8 12 20" transform="translate(12 0) scale(0.65)" d="M 0 -14 a 15 15 0 0 1 0 28" /%3E%3Crect fill="hsl(210, 90%25, 62%25)" y="-17" width="12" height="34" rx="6" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E')}section.svelte-18ebfr0.svelte-18ebfr0::after{animation:svelte-18ebfr0-tilt-telescope 8s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;animation:svelte-18ebfr0-tilt-telescope var(--animation-duration) var(--ease-in-out-sine) infinite alternate;animation-play-state:paused}@keyframes svelte-18ebfr0-tilt-telescope{20%,100%{transform:rotate(25deg)}}@media(prefers-reduced-motion: no-preference){section.observed.svelte-18ebfr0.svelte-18ebfr0::after{animation-play-state:running}}`,
  map: `{"version":3,"file":"GettingStarted.svelte","sources":["GettingStarted.svelte"],"sourcesContent":["<section class:observed={false}>\\r\\n\\t<h2 class=\\"visually-hidden\\">Getting started</h2>\\r\\n\\t<p>\\r\\n\\t\\tI'm building this website with\\r\\n\\t\\t<a href=\\"https://kit.svelte.dev/\\">SvelteKit</a>, one tentative step at a time, but I'm also in\\r\\n\\t\\tthe process of creating 2D games with Lua and Love2D. While I try setting up a blog and writing\\r\\n\\t\\ta good honest article, I hope to distract you with\\r\\n\\t\\t<a href=\\"https://github.com/borntofrappe/game-development/wiki/Practice\\">one of them</a>.\\r\\n\\t</p>\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n\\tsection {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\t--telescope-size: 6.5em;\\r\\n\\t\\t--animation-duration: 8s;\\r\\n\\t}\\r\\n\\r\\n\\tsection p {\\r\\n\\t\\tline-height: 1.75;\\r\\n\\t}\\r\\n\\r\\n\\tsection::before,\\r\\n\\tsection::after {\\r\\n\\t\\twidth: 6.5em;\\r\\n\\t\\twidth: var(--telescope-size);\\r\\n\\t\\theight: 6.5em;\\r\\n\\t\\theight: var(--telescope-size);\\r\\n\\t}\\r\\n\\r\\n\\tsection::before {\\r\\n\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-60 -60 120 120\\"%3E%3Cg fill=\\"hsl(339, 90%25, 67%25)\\" stroke=\\"hsl(350, 100%25, 8%25)\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath stroke-dasharray=\\"84 20 84\\" d=\\"M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36\\" /%3E%3Cpath d=\\"M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24\\" /%3E%3Cpath d=\\"M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tfloat: left;\\r\\n\\t\\tshape-outside: circle();\\r\\n\\t}\\r\\n\\r\\n\\tsection::after {\\r\\n\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-60 -60 120 120\\"%3E%3Cg transform=\\"translate(26 -17)\\"%3E%3Cg fill=\\"hsl(336, 93%25, 77%25)\\" stroke=\\"hsl(350, 100%25, 8%25)\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath stroke-width=\\"5\\" transform=\\"translate(-63 0) scale(0.4)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath stroke-width=\\"3.6\\" transform=\\"translate(-51 0) scale(0.55)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath stroke-width=\\"3\\" transform=\\"translate(-37 0) scale(0.65)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath stroke-width=\\"2.5\\" transform=\\"translate(-20 0) scale(0.8)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cg stroke-width=\\"2\\"%3E%3Cpath d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath d=\\"M 12 -14 a 15 15 0 0 1 0 28\\" /%3E%3Cpath fill=\\"none\\" stroke-width=\\"3\\" stroke-dasharray=\\"0 8 12 20\\" transform=\\"translate(12 0) scale(0.65)\\" d=\\"M 0 -14 a 15 15 0 0 1 0 28\\" /%3E%3Crect fill=\\"hsl(339, 90%25, 67%25)\\" y=\\"-17\\" width=\\"12\\" height=\\"34\\" rx=\\"6\\" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 0;\\r\\n\\t\\tleft: 0;\\r\\n\\t\\ttransform: rotate(-20deg);\\r\\n\\t\\ttransform-origin: 50% 33%;\\r\\n\\t}\\r\\n\\r\\n\\t@media (prefers-color-scheme: dark) {\\r\\n\\t\\t:global(html:not([data-preference])) section::before {\\r\\n\\t\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-60 -60 120 120\\"%3E%3Cg fill=\\"hsl(210, 90%25, 62%25)\\" stroke=\\"hsl(220, 100%25, 8%25)\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath stroke-dasharray=\\"84 20 84\\" d=\\"M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36\\" /%3E%3Cpath d=\\"M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24\\" /%3E%3Cpath d=\\"M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t}\\r\\n\\t\\t:global(html:not([data-preference])) section::after {\\r\\n\\t\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-60 -60 120 120\\"%3E%3Cg transform=\\"translate(26 -17)\\"%3E%3Cg fill=\\"hsl(208, 95%25, 75%25)\\" stroke=\\"hsl(220, 100%25, 8%25)\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath stroke-width=\\"5\\" transform=\\"translate(-63 0) scale(0.4)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath stroke-width=\\"3.6\\" transform=\\"translate(-51 0) scale(0.55)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath stroke-width=\\"3\\" transform=\\"translate(-37 0) scale(0.65)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath stroke-width=\\"2.5\\" transform=\\"translate(-20 0) scale(0.8)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cg stroke-width=\\"2\\"%3E%3Cpath d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath d=\\"M 12 -14 a 15 15 0 0 1 0 28\\" /%3E%3Cpath fill=\\"none\\" stroke-width=\\"3\\" stroke-dasharray=\\"0 8 12 20\\" transform=\\"translate(12 0) scale(0.65)\\" d=\\"M 0 -14 a 15 15 0 0 1 0 28\\" /%3E%3Crect fill=\\"hsl(210, 90%25, 62%25)\\" y=\\"-17\\" width=\\"12\\" height=\\"34\\" rx=\\"6\\" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t:global(html[data-preference='dark']) section::before {\\r\\n\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-60 -60 120 120\\"%3E%3Cg fill=\\"hsl(210, 90%25, 62%25)\\" stroke=\\"hsl(220, 100%25, 8%25)\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath stroke-dasharray=\\"84 20 84\\" d=\\"M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36\\" /%3E%3Cpath d=\\"M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24\\" /%3E%3Cpath d=\\"M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t}\\r\\n\\r\\n\\t:global(html[data-preference='dark']) section::after {\\r\\n\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-60 -60 120 120\\"%3E%3Cg transform=\\"translate(26 -17)\\"%3E%3Cg fill=\\"hsl(208, 95%25, 75%25)\\" stroke=\\"hsl(220, 100%25, 8%25)\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"%3E%3Cpath stroke-width=\\"5\\" transform=\\"translate(-63 0) scale(0.4)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath stroke-width=\\"3.6\\" transform=\\"translate(-51 0) scale(0.55)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath stroke-width=\\"3\\" transform=\\"translate(-37 0) scale(0.65)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath stroke-width=\\"2.5\\" transform=\\"translate(-20 0) scale(0.8)\\" d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cg stroke-width=\\"2\\"%3E%3Cpath d=\\"M 0 -13 l -20 1 v 24 l 20 1\\" /%3E%3Cpath d=\\"M 12 -14 a 15 15 0 0 1 0 28\\" /%3E%3Cpath fill=\\"none\\" stroke-width=\\"3\\" stroke-dasharray=\\"0 8 12 20\\" transform=\\"translate(12 0) scale(0.65)\\" d=\\"M 0 -14 a 15 15 0 0 1 0 28\\" /%3E%3Crect fill=\\"hsl(210, 90%25, 62%25)\\" y=\\"-17\\" width=\\"12\\" height=\\"34\\" rx=\\"6\\" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t}\\r\\n\\r\\n\\tsection::after {\\r\\n\\t\\tanimation: tilt-telescope 8s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;\\r\\n\\t\\tanimation: tilt-telescope var(--animation-duration) var(--ease-in-out-sine) infinite alternate;\\r\\n\\t\\tanimation-play-state: paused;\\r\\n\\t}\\r\\n\\r\\n\\t@keyframes tilt-telescope {\\r\\n\\t\\t20%,\\r\\n\\t\\t100% {\\r\\n\\t\\t\\ttransform: rotate(25deg);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t@media (prefers-reduced-motion: no-preference) {\\r\\n\\t\\tsection.observed::after {\\r\\n\\t\\t\\tanimation-play-state: running;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAYC,OAAO,8BAAC,CAAC,AACR,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CAAE,KAAK,CACvB,oBAAoB,CAAE,EAAE,AACzB,CAAC,AAED,sBAAO,CAAC,CAAC,eAAC,CAAC,AACV,WAAW,CAAE,IAAI,AAClB,CAAC,AAED,qCAAO,QAAQ,CACf,qCAAO,OAAO,AAAC,CAAC,AACf,KAAK,CAAE,KAAK,CACZ,KAAK,CAAE,IAAI,gBAAgB,CAAC,CAC5B,MAAM,CAAE,KAAK,CACb,MAAM,CAAE,IAAI,gBAAgB,CAAC,AAC9B,CAAC,AAED,qCAAO,QAAQ,AAAC,CAAC,AAChB,OAAO,CAAE,IAAI,0dAA0d,CAAC,CACxe,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,QAAQ,AACxB,CAAC,AAED,qCAAO,OAAO,AAAC,CAAC,AACf,OAAO,CAAE,IAAI,6/BAA6/B,CAAC,CAC3gC,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,SAAS,CAAE,OAAO,MAAM,CAAC,CACzB,gBAAgB,CAAE,GAAG,CAAC,GAAG,AAC1B,CAAC,AAED,MAAM,AAAC,uBAAuB,IAAI,CAAC,AAAC,CAAC,AAC5B,2BAA2B,AAAC,CAAC,qCAAO,QAAQ,AAAC,CAAC,AACrD,OAAO,CAAE,IAAI,0dAA0d,CAAC,AACze,CAAC,AACO,2BAA2B,AAAC,CAAC,qCAAO,OAAO,AAAC,CAAC,AACpD,OAAO,CAAE,IAAI,6/BAA6/B,CAAC,AAC5gC,CAAC,AACF,CAAC,AAEO,4BAA4B,AAAC,CAAC,qCAAO,QAAQ,AAAC,CAAC,AACtD,OAAO,CAAE,IAAI,0dAA0d,CAAC,AACze,CAAC,AAEO,4BAA4B,AAAC,CAAC,qCAAO,OAAO,AAAC,CAAC,AACrD,OAAO,CAAE,IAAI,6/BAA6/B,CAAC,AAC5gC,CAAC,AAED,qCAAO,OAAO,AAAC,CAAC,AACf,SAAS,CAAE,6BAAc,CAAC,EAAE,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,QAAQ,CAAC,SAAS,CACrF,SAAS,CAAE,6BAAc,CAAC,IAAI,oBAAoB,CAAC,CAAC,IAAI,kBAAkB,CAAC,CAAC,QAAQ,CAAC,SAAS,CAC9F,oBAAoB,CAAE,MAAM,AAC7B,CAAC,AAED,WAAW,6BAAe,CAAC,AAC1B,GAAG,CACH,IAAI,AAAC,CAAC,AACL,SAAS,CAAE,OAAO,KAAK,CAAC,AACzB,CAAC,AACF,CAAC,AAED,MAAM,AAAC,yBAAyB,aAAa,CAAC,AAAC,CAAC,AAC/C,OAAO,uCAAS,OAAO,AAAC,CAAC,AACxB,oBAAoB,CAAE,OAAO,AAC9B,CAAC,AACF,CAAC"}`
};
var GettingStarted = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="${["svelte-18ebfr0", ""].join(" ").trim()}"><h2 class="${"visually-hidden"}">Getting started</h2>
	<p class="${"svelte-18ebfr0"}">I&#39;m building this website with
		<a href="${"https://kit.svelte.dev/"}">SvelteKit</a>, one tentative step at a time, but I&#39;m also in
		the process of creating 2D games with Lua and Love2D. While I try setting up a blog and writing
		a good honest article, I hope to distract you with
		<a href="${"https://github.com/borntofrappe/game-development/wiki/Practice"}">one of them</a>.
	</p>
</section>`;
});
var css$1 = {
  code: `section.svelte-1szp9wt>.svelte-1szp9wt+.svelte-1szp9wt{margin-top:0.5em}section.svelte-1szp9wt h2.svelte-1szp9wt.svelte-1szp9wt{text-align:center}section.svelte-1szp9wt p.svelte-1szp9wt.svelte-1szp9wt{line-height:1.75}section.svelte-1szp9wt mark.svelte-1szp9wt.svelte-1szp9wt{--animation-duration:6s;--animation-timing-function:var(--ease-in-out-sine);--elevation:2.5em;display:inline-block;padding-top:2.5em;padding-top:var(--elevation);color:inherit;background:none;font-weight:700;position:relative;z-index:5}section.svelte-1szp9wt mark.svelte-1szp9wt.svelte-1szp9wt::after{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg stroke="hsl(350, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cellipse fill="hsl(339, 90%25, 67%25)" rx="45" ry="20" /%3E%3Cpath fill="hsl(336, 93%25, 77%25)" d="M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0" /%3E%3Cpath transform="scale(0.85)" stroke-width="2.5" fill="none" d="M -28 -5 a 28 28 0 0 1 56 0" stroke-dasharray="20 80" stroke-dashoffset="48" /%3E%3C/g%3E%3C/svg%3E');position:absolute;bottom:2.5em;bottom:var(--elevation);right:0;width:3em;height:3em;transform:translate(50%, 50%);z-index:-5}@media(prefers-color-scheme: dark){html:not([data-preference]) section.svelte-1szp9wt mark.svelte-1szp9wt.svelte-1szp9wt::after{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg stroke="hsl(220, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cellipse fill="hsl(210, 90%25, 62%25)" rx="45" ry="20" /%3E%3Cpath fill="hsl(208, 95%25, 75%25)" d="M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0" /%3E%3Cpath transform="scale(0.85)" stroke-width="2.5" fill="none" d="M -28 -5 a 28 28 0 0 1 56 0" stroke-dasharray="20 80" stroke-dashoffset="48" /%3E%3C/g%3E%3C/svg%3E')}}html[data-preference='dark'] section.svelte-1szp9wt mark.svelte-1szp9wt.svelte-1szp9wt::after{content:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg stroke="hsl(220, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cellipse fill="hsl(210, 90%25, 62%25)" rx="45" ry="20" /%3E%3Cpath fill="hsl(208, 95%25, 75%25)" d="M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0" /%3E%3Cpath transform="scale(0.85)" stroke-width="2.5" fill="none" d="M -28 -5 a 28 28 0 0 1 56 0" stroke-dasharray="20 80" stroke-dashoffset="48" /%3E%3C/g%3E%3C/svg%3E')}@supports (clip-path: polygon(100% 0%, 100% 100%, 100% 100%)){section.svelte-1szp9wt mark.svelte-1szp9wt.svelte-1szp9wt::before{content:'';position:absolute;bottom:0;right:0;width:2.5em;width:var(--elevation);height:2.5em;height:var(--elevation);background:hsl(330, 100%, 92%);background:var(--primary-10);z-index:-5}@media(prefers-color-scheme: dark){html:not([data-preference]) section.svelte-1szp9wt mark.svelte-1szp9wt.svelte-1szp9wt::before{opacity:0.25}}html[data-preference='dark'] section.svelte-1szp9wt mark.svelte-1szp9wt.svelte-1szp9wt::before{opacity:0.25}section.svelte-1szp9wt mark.svelte-1szp9wt.svelte-1szp9wt::before{clip-path:polygon(100% 0%, 100% 100%, 100% 100%);animation:svelte-1szp9wt-clip-polygon 6s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;animation:svelte-1szp9wt-clip-polygon var(--animation-duration) var(--animation-timing-function) infinite\r
				alternate;animation-play-state:paused}section.svelte-1szp9wt mark.svelte-1szp9wt.svelte-1szp9wt::after{transform:translate(50%, 50%) rotate(0deg);animation:svelte-1szp9wt-rotate-ufo 6s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;animation:svelte-1szp9wt-rotate-ufo var(--animation-duration) var(--animation-timing-function) infinite\r
				alternate;animation-play-state:paused}@keyframes svelte-1szp9wt-clip-polygon{15%{clip-path:polygon(100% 0%, 70% 100%, 0% 100%)}30%,100%{clip-path:polygon(100% 0%, 90% 100%, 10% 100%)}}@keyframes svelte-1szp9wt-rotate-ufo{15%{transform:translate(50%, 50%) rotate(30deg)}30%,100%{transform:translate(50%, 50%) rotate(20deg)}}@media(prefers-reduced-motion: no-preference){section.observed.svelte-1szp9wt mark.svelte-1szp9wt.svelte-1szp9wt::before,section.observed.svelte-1szp9wt mark.svelte-1szp9wt.svelte-1szp9wt::after{animation-play-state:running}}}section.svelte-1szp9wt>svg.svelte-1szp9wt.svelte-1szp9wt{margin-left:auto;margin-right:auto;color:hsl(340, 90%, 55%);color:var(--primary-6);max-width:27rem;width:90%;height:auto}section.svelte-1szp9wt>svg .rotate.svelte-1szp9wt.svelte-1szp9wt{animation:svelte-1szp9wt-rotate-orbit 200s linear infinite;animation-play-state:paused}section.observed.svelte-1szp9wt>svg .rotate.svelte-1szp9wt.svelte-1szp9wt{animation-play-state:running}@keyframes svelte-1szp9wt-rotate-orbit{to{transform:rotate(1turn)}}@media(prefers-reduced-motion: reduce){section.observed.svelte-1szp9wt>svg .rotate.svelte-1szp9wt.svelte-1szp9wt{animation-play-state:paused}}`,
  map: `{"version":3,"file":"About.svelte","sources":["About.svelte"],"sourcesContent":["<script>\\r\\n\\timport icons from '$lib/icons.js';\\r\\n\\r\\n\\tconst satellites = ['world', 'editor', 'running', 'flag', 'gaming'];\\r\\n\\r\\n\\tconst colors = [\\r\\n\\t\\t'hsl(350, 100%, 8%)',\\r\\n\\t\\t'hsl(347, 100%, 19%)',\\r\\n\\t\\t'hsl(345, 95%, 27%)',\\r\\n\\t\\t'hsl(345, 96%, 33%)',\\r\\n\\t\\t'hsl(342, 92%, 39%)',\\r\\n\\t\\t'hsl(340, 85%, 46%)',\\r\\n\\t\\t'hsl(340, 90%, 55%)',\\r\\n\\t\\t'hsl(339, 90%, 67%)',\\r\\n\\t\\t'hsl(336, 93%, 77%)',\\r\\n\\t\\t'hsl(335, 100%, 86%)',\\r\\n\\t\\t'hsl(330, 100%, 92%)'\\r\\n\\t];\\r\\n<\/script>\\r\\n\\r\\n<section class:observed={false}>\\r\\n\\t<h2>Almost forgot</h2>\\r\\n\\t<p>\\r\\n\\t\\tI'm <mark>Gabriele Corti</mark>, coming to you from Europe and a couple of hours after Greenwich\\r\\n\\t\\ttime.\\r\\n\\t</p>\\r\\n\\t<p>\\r\\n\\t\\tOutside of VSCode, you'll find me running, watching the highlight of an F1 race, or enjoying a\\r\\n\\t\\tdated video game. Depends on the season.\\r\\n\\t</p>\\r\\n\\r\\n\\t<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 50\\" width=\\"200\\" height=\\"100\\">\\r\\n\\t\\t<defs>\\r\\n\\t\\t\\t<clipPath id=\\"clip-planet\\">\\r\\n\\t\\t\\t\\t<circle r=\\"30\\" />\\r\\n\\t\\t\\t</clipPath>\\r\\n\\r\\n\\t\\t\\t<mask id=\\"mask-satellites\\">\\r\\n\\t\\t\\t\\t<rect x=\\"-50\\" y=\\"-50\\" width=\\"100\\" height=\\"100\\" fill=\\"hsl(0, 0%, 100%)\\" />\\r\\n\\t\\t\\t\\t<g fill=\\"hsl(0, 0%, 0%)\\">\\r\\n\\t\\t\\t\\t\\t<g class=\\"rotate\\">\\r\\n\\t\\t\\t\\t\\t\\t{#each satellites as _, i}\\r\\n\\t\\t\\t\\t\\t\\t\\t<g transform=\\"rotate({(360 / satellites.length) * i * -1}) translate(0 -42)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<circle r=\\"7.5\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t</mask>\\r\\n\\t\\t</defs>\\r\\n\\r\\n\\t\\t<g clip-path=\\"url(#clip-planet)\\">\\r\\n\\t\\t\\t<g transform=\\"translate(0 -70)\\">\\r\\n\\t\\t\\t\\t{#each colors as color, i}\\r\\n\\t\\t\\t\\t\\t<ellipse\\r\\n\\t\\t\\t\\t\\t\\tstyle=\\"color: {color}; color: var(--primary-{i});\\"\\r\\n\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\r\\n\\t\\t\\t\\t\\t\\tstroke=\\"none\\"\\r\\n\\t\\t\\t\\t\\t\\tcx=\\"0\\"\\r\\n\\t\\t\\t\\t\\t\\tcy=\\"70\\"\\r\\n\\t\\t\\t\\t\\t\\trx={35 + (15 / colors.length) * i}\\r\\n\\t\\t\\t\\t\\t\\try=\\"33\\"\\r\\n\\t\\t\\t\\t\\t\\ttransform=\\"scale({1 - (0.65 / colors.length) * i})\\"\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t</g>\\r\\n\\t\\t</g>\\r\\n\\r\\n\\t\\t<circle\\r\\n\\t\\t\\tr=\\"30\\"\\r\\n\\t\\t\\tstyle=\\"color: {colors[colors.length - 1]}; color: var(--grey-10);\\"\\r\\n\\t\\t\\tfill=\\"none\\"\\r\\n\\t\\t\\tstroke=\\"currentColor\\"\\r\\n\\t\\t\\tstroke-width=\\"0.2\\"\\r\\n\\t\\t/>\\r\\n\\r\\n\\t\\t<g mask=\\"url(#mask-satellites)\\">\\r\\n\\t\\t\\t<circle\\r\\n\\t\\t\\t\\tr=\\"42\\"\\r\\n\\t\\t\\t\\tstroke-dasharray=\\"1 2\\"\\r\\n\\t\\t\\t\\tstroke-linecap=\\"round\\"\\r\\n\\t\\t\\t\\tfill=\\"none\\"\\r\\n\\t\\t\\t\\tstroke=\\"currentColor\\"\\r\\n\\t\\t\\t\\tstroke-width=\\"0.5\\"\\r\\n\\t\\t\\t/>\\r\\n\\t\\t</g>\\r\\n\\r\\n\\t\\t<g class=\\"rotate\\">\\r\\n\\t\\t\\t{#each satellites as satellite, i}\\r\\n\\t\\t\\t\\t<g\\r\\n\\t\\t\\t\\t\\ttransform=\\"rotate({(360 / satellites.length) * i * -1}) translate(0 -42) rotate({(360 /\\r\\n\\t\\t\\t\\t\\t\\tsatellites.length) *\\r\\n\\t\\t\\t\\t\\t\\ti})\\"\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t<g transform=\\"scale(-1 1)\\">\\r\\n\\t\\t\\t\\t\\t\\t<g class=\\"rotate\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<g transform=\\"scale(-1 1)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<circle fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"1\\" r=\\"7.5\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<g transform=\\"translate(-4 -4)\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{@html icons[satellite].replace(\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/width=\\"[^\\"]+\\"\\\\sheight=\\"[^\\"]+\\"/,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t'width=\\"8\\" height=\\"8\\"'\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t)}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t\\t</g>\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</g>\\r\\n\\t</svg>\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n\\tsection > * + * {\\r\\n\\t\\tmargin-top: 0.5em;\\r\\n\\t}\\r\\n\\r\\n\\tsection h2 {\\r\\n\\t\\ttext-align: center;\\r\\n\\t}\\r\\n\\r\\n\\tsection p {\\r\\n\\t\\tline-height: 1.75;\\r\\n\\t}\\r\\n\\r\\n\\tsection mark {\\r\\n\\t\\t--animation-duration: 6s;\\r\\n\\t\\t--animation-timing-function: var(--ease-in-out-sine);\\r\\n\\t\\t--elevation: 2.5em;\\r\\n\\t\\tdisplay: inline-block;\\r\\n\\t\\tpadding-top: 2.5em;\\r\\n\\t\\tpadding-top: var(--elevation);\\r\\n\\t\\tcolor: inherit;\\r\\n\\t\\tbackground: none;\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tz-index: 5;\\r\\n\\t}\\r\\n\\r\\n\\tsection mark::after {\\r\\n\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg stroke=\\"hsl(350, 100%25, 8%25)\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"%3E%3Cellipse fill=\\"hsl(339, 90%25, 67%25)\\" rx=\\"45\\" ry=\\"20\\" /%3E%3Cpath fill=\\"hsl(336, 93%25, 77%25)\\" d=\\"M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0\\" /%3E%3Cpath transform=\\"scale(0.85)\\" stroke-width=\\"2.5\\" fill=\\"none\\" d=\\"M -28 -5 a 28 28 0 0 1 56 0\\" stroke-dasharray=\\"20 80\\" stroke-dashoffset=\\"48\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tbottom: 2.5em;\\r\\n\\t\\tbottom: var(--elevation);\\r\\n\\t\\tright: 0;\\r\\n\\t\\twidth: 3em;\\r\\n\\t\\theight: 3em;\\r\\n\\t\\ttransform: translate(50%, 50%);\\r\\n\\t\\tz-index: -5;\\r\\n\\t}\\r\\n\\r\\n\\t@media (prefers-color-scheme: dark) {\\r\\n\\t\\t:global(html:not([data-preference])) section mark::after {\\r\\n\\t\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg stroke=\\"hsl(220, 100%25, 8%25)\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"%3E%3Cellipse fill=\\"hsl(210, 90%25, 62%25)\\" rx=\\"45\\" ry=\\"20\\" /%3E%3Cpath fill=\\"hsl(208, 95%25, 75%25)\\" d=\\"M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0\\" /%3E%3Cpath transform=\\"scale(0.85)\\" stroke-width=\\"2.5\\" fill=\\"none\\" d=\\"M -28 -5 a 28 28 0 0 1 56 0\\" stroke-dasharray=\\"20 80\\" stroke-dashoffset=\\"48\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t:global(html[data-preference='dark']) section mark::after {\\r\\n\\t\\tcontent: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg stroke=\\"hsl(220, 100%25, 8%25)\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"%3E%3Cellipse fill=\\"hsl(210, 90%25, 62%25)\\" rx=\\"45\\" ry=\\"20\\" /%3E%3Cpath fill=\\"hsl(208, 95%25, 75%25)\\" d=\\"M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0\\" /%3E%3Cpath transform=\\"scale(0.85)\\" stroke-width=\\"2.5\\" fill=\\"none\\" d=\\"M -28 -5 a 28 28 0 0 1 56 0\\" stroke-dasharray=\\"20 80\\" stroke-dashoffset=\\"48\\" /%3E%3C/g%3E%3C/svg%3E');\\r\\n\\t}\\r\\n\\r\\n\\t@supports (clip-path: polygon(100% 0%, 100% 100%, 100% 100%)) {\\r\\n\\t\\tsection mark::before {\\r\\n\\t\\t\\tcontent: '';\\r\\n\\t\\t\\tposition: absolute;\\r\\n\\t\\t\\tbottom: 0;\\r\\n\\t\\t\\tright: 0;\\r\\n\\t\\t\\twidth: 2.5em;\\r\\n\\t\\t\\twidth: var(--elevation);\\r\\n\\t\\t\\theight: 2.5em;\\r\\n\\t\\t\\theight: var(--elevation);\\r\\n\\t\\t\\tbackground: hsl(330, 100%, 92%);\\r\\n\\t\\t\\tbackground: var(--primary-10);\\r\\n\\t\\t\\tz-index: -5;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t@media (prefers-color-scheme: dark) {\\r\\n\\t\\t\\t:global(html:not([data-preference])) section mark::before {\\r\\n\\t\\t\\t\\topacity: 0.25;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t:global(html[data-preference='dark']) section mark::before {\\r\\n\\t\\t\\topacity: 0.25;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tsection mark::before {\\r\\n\\t\\t\\tclip-path: polygon(100% 0%, 100% 100%, 100% 100%);\\r\\n\\t\\t\\tanimation: clip-polygon 6s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;\\r\\n\\t\\t\\tanimation: clip-polygon var(--animation-duration) var(--animation-timing-function) infinite\\r\\n\\t\\t\\t\\talternate;\\r\\n\\t\\t\\tanimation-play-state: paused;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tsection mark::after {\\r\\n\\t\\t\\ttransform: translate(50%, 50%) rotate(0deg);\\r\\n\\t\\t\\tanimation: rotate-ufo 6s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;\\r\\n\\t\\t\\tanimation: rotate-ufo var(--animation-duration) var(--animation-timing-function) infinite\\r\\n\\t\\t\\t\\talternate;\\r\\n\\t\\t\\tanimation-play-state: paused;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t@keyframes clip-polygon {\\r\\n\\t\\t\\t15% {\\r\\n\\t\\t\\t\\tclip-path: polygon(100% 0%, 70% 100%, 0% 100%);\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\t30%,\\r\\n\\t\\t\\t100% {\\r\\n\\t\\t\\t\\tclip-path: polygon(100% 0%, 90% 100%, 10% 100%);\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t@keyframes rotate-ufo {\\r\\n\\t\\t\\t15% {\\r\\n\\t\\t\\t\\ttransform: translate(50%, 50%) rotate(30deg);\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\t30%,\\r\\n\\t\\t\\t100% {\\r\\n\\t\\t\\t\\ttransform: translate(50%, 50%) rotate(20deg);\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t@media (prefers-reduced-motion: no-preference) {\\r\\n\\t\\t\\tsection.observed mark::before,\\r\\n\\t\\t\\tsection.observed mark::after {\\r\\n\\t\\t\\t\\tanimation-play-state: running;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\tsection > svg {\\r\\n\\t\\tmargin-left: auto;\\r\\n\\t\\tmargin-right: auto;\\r\\n\\t\\tcolor: hsl(340, 90%, 55%);\\r\\n\\t\\tcolor: var(--primary-6);\\r\\n\\t\\tmax-width: 27rem;\\r\\n\\t\\twidth: 90%;\\r\\n\\t\\theight: auto;\\r\\n\\t}\\r\\n\\r\\n\\tsection > svg .rotate {\\r\\n\\t\\tanimation: rotate-orbit 200s linear infinite;\\r\\n\\t\\tanimation-play-state: paused;\\r\\n\\t}\\r\\n\\r\\n\\tsection.observed > svg .rotate {\\r\\n\\t\\tanimation-play-state: running;\\r\\n\\t}\\r\\n\\r\\n\\t@keyframes rotate-orbit {\\r\\n\\t\\tto {\\r\\n\\t\\t\\ttransform: rotate(1turn);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t@media (prefers-reduced-motion: reduce) {\\r\\n\\t\\tsection.observed > svg .rotate {\\r\\n\\t\\t\\tanimation-play-state: paused;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"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"}`
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
  $$result.css.add(css$1);
  return `<section class="${["svelte-1szp9wt", ""].join(" ").trim()}"><h2 class="${"svelte-1szp9wt"}">Almost forgot</h2>
	<p class="${"svelte-1szp9wt"}">I&#39;m <mark class="${"svelte-1szp9wt"}">Gabriele Corti</mark>, coming to you from Europe and a couple of hours after Greenwich
		time.
	</p>
	<p class="${"svelte-1szp9wt"}">Outside of VSCode, you&#39;ll find me running, watching the highlight of an F1 race, or enjoying a
		dated video game. Depends on the season.
	</p>

	<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"-50 -50 100 50"}" width="${"200"}" height="${"100"}" class="${"svelte-1szp9wt"}"><defs><clipPath id="${"clip-planet"}"><circle r="${"30"}"></circle></clipPath><mask id="${"mask-satellites"}"><rect x="${"-50"}" y="${"-50"}" width="${"100"}" height="${"100"}" fill="${"hsl(0, 0%, 100%)"}"></rect><g fill="${"hsl(0, 0%, 0%)"}"><g class="${"rotate svelte-1szp9wt"}">${each(satellites, (_, i) => `<g transform="${"rotate(" + escape(360 / satellites.length * i * -1) + ") translate(0 -42)"}"><circle r="${"7.5"}"></circle></g>`)}</g></g></mask></defs><g clip-path="${"url(#clip-planet)"}"><g transform="${"translate(0 -70)"}">${each(colors, (color, i) => `<ellipse style="${"color: " + escape(color) + "; color: var(--primary-" + escape(i) + ");"}" fill="${"currentColor"}" stroke="${"none"}" cx="${"0"}" cy="${"70"}"${add_attribute("rx", 35 + 15 / colors.length * i, 0)} ry="${"33"}" transform="${"scale(" + escape(1 - 0.65 / colors.length * i) + ")"}"></ellipse>`)}</g></g><circle r="${"30"}" style="${"color: " + escape(colors[colors.length - 1]) + "; color: var(--grey-10);"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"0.2"}"></circle><g mask="${"url(#mask-satellites)"}"><circle r="${"42"}" stroke-dasharray="${"1 2"}" stroke-linecap="${"round"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"0.5"}"></circle></g><g class="${"rotate svelte-1szp9wt"}">${each(satellites, (satellite, i) => `<g transform="${"rotate(" + escape(360 / satellites.length * i * -1) + ") translate(0 -42) rotate(" + escape(360 / satellites.length * i) + ")"}"><g transform="${"scale(-1 1)"}"><g class="${"rotate svelte-1szp9wt"}"><g transform="${"scale(-1 1)"}"><circle fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1"}" r="${"7.5"}"></circle><g transform="${"translate(-4 -4)"}"><!-- HTML_TAG_START -->${icons[satellite].replace(/width="[^"]+"\sheight="[^"]+"/, 'width="8" height="8"')}<!-- HTML_TAG_END --></g></g></g></g></g>`)}</g></svg>
</section>`;
});
var css = {
  code: `main.svelte-rdvd26{overflow-x:hidden;margin-top:20px;--section-whitespace:6em}main.svelte-rdvd26>section{width:90vw;width:var(--width);max-width:42rem;max-width:var(--max-width);margin:6em auto;margin:var(--section-whitespace) auto}main.svelte-rdvd26>section:first-of-type{margin-top:3em;margin-top:calc(var(--section-whitespace) / 2)}main.svelte-rdvd26>section:last-of-type{margin-bottom:0}main.svelte-rdvd26>section + section{position:relative}main.svelte-rdvd26>section + section::before{position:relative;content:'';position:absolute;top:-3em;top:calc(var(--section-whitespace) / 2 * -1);left:50%;width:100vw;height:0.5rem;transform:translate(-50%, -50%);background:hsl(215, 22%, 5%);background:var(--frappe-grey-0);background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/svg%3E');background-size:20px}@supports ((-webkit-mask-image: url()) or (mask-image: url())){main.svelte-rdvd26>section + section::before{height:2em;-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');-webkit-mask-size:auto 100%;mask-size:auto 100%;-webkit-mask-position:50% 50%;mask-position:50% 50%;-webkit-mask-repeat:repeat-x;mask-repeat:repeat-x}main.svelte-rdvd26>:not(section:last-of-type){margin-bottom:calc(var(--section-whitespace) + 1em)}}`,
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script>\\n\\timport Hero from '$lib/components/root/Hero.svelte';\\n\\timport GettingStarted from '$lib/components/root/GettingStarted.svelte';\\n\\timport About from '$lib/components/root/About.svelte';\\n\\n\\timport Meta from '$lib/components/Meta.svelte';\\n<\/script>\\n\\n<Meta description=\\"Personal website for one Gabriele Corti\\" />\\n\\n<Hero />\\n\\n<main id=\\"content\\">\\n\\t<GettingStarted />\\n\\t<About />\\n</main>\\n\\n<style>\\n\\tmain {\\n\\t\\toverflow-x: hidden;\\n\\t\\tmargin-top: 20px;\\n\\t\\t--section-whitespace: 6em;\\n\\t}\\n\\n\\tmain > :global(section) {\\n\\t\\twidth: 90vw;\\n\\t\\twidth: var(--width);\\n\\t\\tmax-width: 42rem;\\n\\t\\tmax-width: var(--max-width);\\n\\t\\tmargin: 6em auto;\\n\\t\\tmargin: var(--section-whitespace) auto;\\n\\t}\\n\\n\\tmain > :global(section:first-of-type) {\\n\\t\\tmargin-top: 3em;\\n\\t\\tmargin-top: calc(var(--section-whitespace) / 2);\\n\\t}\\n\\n\\tmain > :global(section:last-of-type) {\\n\\t\\tmargin-bottom: 0;\\n\\t}\\n\\n\\tmain > :global(section + section) {\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\tmain > :global(section + section::before) {\\n\\t\\tposition: relative;\\n\\t\\tcontent: '';\\n\\t\\tposition: absolute;\\n\\t\\ttop: -3em;\\n\\t\\ttop: calc(var(--section-whitespace) / 2 * -1);\\n\\t\\tleft: 50%;\\n\\t\\twidth: 100vw;\\n\\t\\theight: 0.5rem;\\n\\t\\ttransform: translate(-50%, -50%);\\n\\t\\tbackground: hsl(215, 22%, 5%);\\n\\t\\tbackground: var(--frappe-grey-0);\\n\\t\\tbackground-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"-50 -50 100 100\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Ccircle r=\\"12\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 -50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 50)\\" /%3E%3Ccircle r=\\"12\\" transform=\\"translate(-50 -50)\\" /%3E%3C/g%3E%3C/svg%3E');\\n\\t\\tbackground-size: 20px;\\n\\t}\\n\\n\\t@supports ((-webkit-mask-image: url()) or (mask-image: url())) {\\n\\t\\tmain > :global(section + section::before) {\\n\\t\\t\\theight: 2em;\\n\\t\\t\\t-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\n\\t\\t\\tmask-image: url('data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"25 -20 100 40\\"%3E%3Cg fill=\\"currentColor\\" stroke=\\"none\\"%3E%3Cpath d=\\"M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0\\" /%3E%3C/g%3E%3C/svg%3E');\\n\\t\\t\\t-webkit-mask-size: auto 100%;\\n\\t\\t\\tmask-size: auto 100%;\\n\\t\\t\\t-webkit-mask-position: 50% 50%;\\n\\t\\t\\tmask-position: 50% 50%;\\n\\t\\t\\t-webkit-mask-repeat: repeat-x;\\n\\t\\t\\tmask-repeat: repeat-x;\\n\\t\\t}\\n\\n\\t\\tmain > :global(:not(section:last-of-type)) {\\n\\t\\t\\tmargin-bottom: calc(var(--section-whitespace) + 1em);\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAkBC,IAAI,cAAC,CAAC,AACL,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,IAAI,CAChB,oBAAoB,CAAE,GAAG,AAC1B,CAAC,AAED,kBAAI,CAAW,OAAO,AAAE,CAAC,AACxB,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,IAAI,WAAW,CAAC,CAC3B,MAAM,CAAE,GAAG,CAAC,IAAI,CAChB,MAAM,CAAE,IAAI,oBAAoB,CAAC,CAAC,IAAI,AACvC,CAAC,AAED,kBAAI,CAAW,qBAAqB,AAAE,CAAC,AACtC,UAAU,CAAE,GAAG,CACf,UAAU,CAAE,KAAK,IAAI,oBAAoB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAChD,CAAC,AAED,kBAAI,CAAW,oBAAoB,AAAE,CAAC,AACrC,aAAa,CAAE,CAAC,AACjB,CAAC,AAED,kBAAI,CAAW,iBAAiB,AAAE,CAAC,AAClC,QAAQ,CAAE,QAAQ,AACnB,CAAC,AAED,kBAAI,CAAW,yBAAyB,AAAE,CAAC,AAC1C,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,GAAG,CAAE,KAAK,IAAI,oBAAoB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAC7C,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,MAAM,CACd,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAC7B,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,gBAAgB,CAAE,IAAI,uXAAuX,CAAC,CAC9Y,eAAe,CAAE,IAAI,AACtB,CAAC,AAED,UAAU,CAAC,CAAC,oBAAoB,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,YAAY,IAAI,CAAC,CAAC,CAAC,AAAC,CAAC,AAC/D,kBAAI,CAAW,yBAAyB,AAAE,CAAC,AAC1C,MAAM,CAAE,GAAG,CACX,kBAAkB,CAAE,IAAI,2RAA2R,CAAC,CACpT,UAAU,CAAE,IAAI,2RAA2R,CAAC,CAC5S,iBAAiB,CAAE,IAAI,CAAC,IAAI,CAC5B,SAAS,CAAE,IAAI,CAAC,IAAI,CACpB,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,aAAa,CAAE,GAAG,CAAC,GAAG,CACtB,mBAAmB,CAAE,QAAQ,CAC7B,WAAW,CAAE,QAAQ,AACtB,CAAC,AAED,kBAAI,CAAW,0BAA0B,AAAE,CAAC,AAC3C,aAAa,CAAE,KAAK,IAAI,oBAAoB,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,AACrD,CAAC,AACF,CAAC"}`
};
var Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Meta, "Meta").$$render($$result, {
    description: "Personal website for one Gabriele Corti"
  }, {}, {})}

${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}

<main id="${"content"}" class="${"svelte-rdvd26"}">${validate_component(GettingStarted, "GettingStarted").$$render($$result, {}, {}, {})}
	${validate_component(About, "About").$$render($$result, {}, {}, {})}
</main>`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes
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
