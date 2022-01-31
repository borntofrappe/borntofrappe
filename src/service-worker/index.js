import { files, timestamp } from '$service-worker';

const cacheNameStatic = `cache-static-${timestamp}`;
const cacheNameDynamic = `cache-dynamic-${timestamp}`;

self.addEventListener('install', (event) => {
	event.waitUntil(caches.open(cacheNameStatic).then((cache) => cache.addAll(files)));
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) =>
				Promise.all(
					cacheNames
						.filter((cacheName) => cacheName !== cacheNameStatic && cacheName !== cacheNameDynamic)
						.map((cacheName) => caches.delete(cacheName))
				)
			)
	);
});

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then(
			(response) =>
				response ||
				fetch(event.request).then((fetchResponse) =>
					caches.open(cacheNameDynamic).then((cache) => {
						cache.put(event.request.url, fetchResponse.clone());
						return fetchResponse;
					})
				)
		)
	);
});
