import { files, timestamp } from '$service-worker';

const cacheTimestamp = `cache-${timestamp}`;

self.addEventListener('install', (event) => {
	event.waitUntil(caches.open(cacheTimestamp).then((cache) => cache.addAll(files)));
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) =>
				Promise.all(
					cacheNames
						.filter((cacheName) => cacheName !== cacheTimestamp)
						.map((cacheName) => caches.delete(cacheName))
				)
			)
	);
});

self.addEventListener('fetch', (event) => {
	if (event.request.mode === 'navigate') {
		event.respondWith(
			caches
				.match(event.request)
				.then(
					(response) => response || fetch(event.request).catch(() => caches.match('/offline.html'))
				)
		);
	}
});
