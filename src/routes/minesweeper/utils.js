import { writable } from 'svelte/store';

export const createTimer = () => {
	const { subscribe, set } = writable(0);

	let interval;

	return {
		subscribe,
		start: () => {
			clearInterval(interval);
			set(0);
			const date = new Date();
			interval = setInterval(() => {
				set(Math.floor((new Date().valueOf() - date.valueOf()) / 1000));
			}, 1000);
		},
		stop: () => {
			clearInterval(interval);
		},
		reset: () => {
			clearInterval(interval);
			set(0);
		}
	};
};
