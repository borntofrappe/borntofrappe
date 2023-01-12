import { files } from '$service-worker';

const CACHE = 'cache-woff2';
const ASSETS = files.filter((file) => file.endsWith('.woff2'));

self.addEventListener('install', (e) => {
	const addFilesToCache = async () => {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	};

	e.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (e) => {
	const deleteOldCaches = async () => {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	};

	e.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (e) => {
	const respond = async () => {
		if (e.request.method !== 'GET') return;

		const url = new URL(e.request.url);

		if (ASSETS.includes(url.pathname)) {
			const cache = await caches.open(CACHE);
			return cache.match(e.request);
		}

		const response = await fetch(e.request);
		return response;
	};

	e.respondWith(respond());
});
