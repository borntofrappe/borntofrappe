import { files } from '$service-worker';

const cacheFontFiles = 'cache-font-files-figtree';
const fontFiles = files.filter((file) => file.endsWith('.woff2'));

self.addEventListener('install', (e) => {
	const addFilesToCache = async () => {
		const cache = await caches.open(cacheFontFiles);
		await cache.addAll(fontFiles);
	};

	e.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (e) => {
	const deleteOldCaches = async () => {
		const keys = await caches.keys();
		for (const key of keys) {
			if (key !== cacheFontFiles) {
				await caches.delete(key);
			}
		}
	};

	e.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (e) => {
	const respond = async () => {
		if (e.request.method !== 'GET') return;

		const { pathname } = new URL(e.request.url);

		if (fontFiles.includes(pathname)) {
			const cache = await caches.open(cacheFontFiles);
			return cache.match(e.request);
		}

		const response = await fetch(e.request);
		return response;
	};

	e.respondWith(respond());
});
