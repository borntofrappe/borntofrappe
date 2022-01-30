import { files } from '$service-worker';

const staticCache = 'static-cache-0';
const dynamicCache = 'dynamic-cache-0';

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
		caches
			.match(event.request)
			.then((response) => {
				return (
					response ||
					fetch(event.request).then((fetchResponse) => {
						if (!fetchResponse.ok) throw fetchResponse.statusText;

						caches.open(dynamicCache).then((cache) => {
							cache.put(event.request.url, fetchResponse.clone());
							return fetchResponse;
						});
					})
				);
			})
			.catch(() => {
				if (event.request.url.endsWith('.html')) {
					return caches.match('/offline.html');
				}
			})
	);
});
