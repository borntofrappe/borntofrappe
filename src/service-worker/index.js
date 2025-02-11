/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

const sw = /** @type {ServiceWorkerGlobalScope} */ (
  /** @type {unknown} */ (self)
);
import { files } from "$service-worker";

const CACHE = `cache-fonts`;
const ASSETS = files.filter((file) => file.endsWith(".woff2"));

sw.addEventListener("install", (event) => {
  const addFilesToCache = async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS);
  };

  event.waitUntil(addFilesToCache());
});

sw.addEventListener("activate", (event) => {
  const deleteOldCaches = async () => {
    const keys = await caches.keys();
    for (const key of keys) {
      if (key !== CACHE) {
        await caches.delete(key);
      }
    }
  };

  event.waitUntil(deleteOldCaches());
});

sw.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const respond = async () => {
    const { pathname } = new URL(event.request.url);

    if (ASSETS.includes(pathname)) {
      const cache = await caches.open(CACHE);
      const response = await cache.match(pathname);
      if (response) {
        return response;
      }
    }

    const response = await fetch(event.request);
    return response;
  };

  event.respondWith(respond());
});
