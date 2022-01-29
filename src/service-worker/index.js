import { files } from '$service-worker';

const staticCache = 'static-cache';
const dynamicCache = 'dynamic-cache';

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(staticCache).then((cache) => {
			cache.addAll(files);
		})
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((keys) => {
			return Promise.all(
				keys.filter((key) => key !== staticCache).map((key) => caches.delete(key))
			);
		})
	);
});

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then((cacheRes) => {
			return (
				cacheRes ||
				fetch(event.request).then((fetchRes) => {
					return caches.open(dynamicCache).then((cache) => {
						cache.put(event.request.url, fetchRes.clone());
						return fetchRes;
					});
				})
			);
		})
	);
});
