import { files, version } from '$service-worker';

const CACHE = `cache-${version}`;
const ASSETS = files.filter((file) => file.endsWith('.woff2'));

self.addEventListener('install', (event) => {
	const addFilesToCache = async () => {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	};

	event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
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

self.addEventListener('fetch', (event) => {
	if (event.request.method !== 'GET') return;

	const respond = async () => {
		const { pathname } = new URL(event.request.url);

		if (ASSETS.includes(pathname)) {
			const cache = await caches.open(CACHE);
			return cache.match(pathname);
		}

		const response = await fetch(event.request);
		return response;
	};

	event.respondWith(respond());
});
