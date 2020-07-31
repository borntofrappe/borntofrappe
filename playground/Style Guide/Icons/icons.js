const icons = {
	abacus: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="8"><path d="M -42 30 h 84 a 4 4 0 0 1 0 8 h -84 a 4 4 0 0 1 0 -8" /><path d="M -38 30 v -64" /><path transform="scale(-1 1)" d="M -38 30 v -64" /></g><g stroke-width="6"><g><circle cx="-4" cy="-18" r="7" /><circle cx="17" cy="-18" r="7" /><path d="M -38 -18 h 25 m 18 0 h 3 m 18 0 h 10"/></g><g transform="translate(0 25) scale(-1 1)"><circle cx="-4" cy="-18" r="7" /><circle cx="17" cy="-18" r="7" /><path d="M -38 -18 h 25 m 18 0 h 3 m 18 0 h 10"/></g></g></g></svg>`,
	at: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-lienjoin="round"><path d="M 20 0 a 20 20 0 0 1 -40 0 20 20 0 0 1 40 0 v 5 a 12.5 12.5 0 0 0 25 0 v -5 a 45 45 0 0 0 -90 0 45 45 0 0 0 90 0" stroke-dasharray="404 46" /></g></svg>`,
	attach: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-lienjoin="round"><path d="M 16.5 -26.5 l -37.5 37.5 a 6.5 6.5 0 0 0 13 13 l 37.5 -37.5 a 13 13 0 0 0 -26 -26 l -37.5 37.5 a 14.5 14.5 0 0 0 39 39 l 37.5 -37.5" /></g></svg>`,
	backpack: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-width="8" d="M -33 0 a 33 33 0 0 1 66 0 v 38 a 8 8 0 0 1 -8 8 h -50 a 8 8 0 0 1 -8 -8 z" /><g stroke-width="7"><path d="M -11 -35.5 a 11 11 0 0 1 22 0" /><path d="M -17 -2 h 34 v 30 h -34 z m 0 18 h 30" /><path d="M -33 5 h -5 q -8 0 -8 20 a 8 8 0 0 0 8 8 h 5" /><path transform="scale(-1 1)" d="M -33 5 h -5 q -8 0 -8 20 a 8 8 0 0 0 8 8 h 5" /></g></g></svg>`,
	badge: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><path d="M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z" /><path d="M -17 -0 l 12 12 21 -21" /></g></svg>`,
	blog: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="8"><path d="M -26 -19 h -20 v -6 a 12 12 0 0 1 24 0 v 50 a 12 12 0 0 0 24 0 v -5 h 44 v 5 a 12 12 0 0 1 -12 12 h -44 a 12 12 0 0 1 -12 -12" /><path d="M -34 -37 h 44 a 12 12 0 0 1 12 12 v 45 h -20 v 5 a 12 12 0 0 1 -24 0 v -50 a 12 12 0 0 0 -12 -12" /></g><g stroke-width="6"><path d="M -10 -20 h 20" /><path d="M -10 -8 h 10" /><path d="M -10 4 h 15" /><path d="M -10 16 h 5" /></g></g></svg>`,
	branch: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><circle r="15" cx="-14" cy="-31" /><circle r="15" cx="-14" cy="31" /><circle stroke-width="7" r="12" cx="30" cy="-23" /><path d="M -14 16 V -16"/><path d="M -14 16 a 12 12 0 0 1 12 -12 h 18 a 14 14 0 0 0 14 -14"/></g></svg>`,
	briefcase: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"><path stroke-width="8" d="M -46 -20 a 8 8 0 0 1 8 -8 h 76 a 8 8 0 0 1 8 8 v 54 a 8 8 0 0 1 -8 8 h -76 a 8 8 0 0 1 -8 -8 z" /><g stroke-width="7"><path d="M -46 -8 a 80 80 0 0 0 92 0" /><path d="M -20 -28 v -8 a 8 8 0 0 1 8 -8 h 24 a 8 8 0 0 1 8 8 v 8" /><path d="M -8 4 h 16 v 16 h -16 z" /></g></g></svg>`,
	bug: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g stroke="currentColor"  stroke-linejoin="round" stroke-linecap="round"><g transform="scale(0.8)"><g fill="none" stroke-width="16"><g transform="translate(0 13.5)"><path d="M 34 0 h -68"/><path transform="rotate(45)" d="M 40 0 h -80"/><path transform="rotate(-45)" d="M 40 0 h -80"/></g></g><g fill="currentColor" stroke-width="8"><path  d="M -0 -46 a 17 17 0 0 1 17 17 h -34 a 17 17 0 0 1 17 -17" /><path  d="M -0 -10 h 25 v 25 a 25 25 0 0 1 -50 0 v -25 z" /></g></g></g></svg>`,
	certificate: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"><path stroke-width="8" d="M -46 -32 a 8 8 0 0 1 8 -8 h 76 a 8 8 0 0 1 8 8 v 54 a 8 8 0 0 1 -8 8 h -16 m -44 0 h -16 a 8 8 0 0 1 -8 -8 v -54" /><g stroke-width="7"><path d="M -25 -18 h 50" /><circle cx="0" cy="13" r="15" /><path d="M -10 26 v 16.5 l 10 -5 10 5 v -16.5"/></g></g><g fill="currentColor" stroke="none"><circle r="8" cx="-40" cy="-34"/><circle transform="scale(-1 1)" r="8" cx="-40" cy="-34"/><circle r="8" cx="-40" cy="24"/><circle transform="scale(-1 1)" r="8" cx="-40" cy="24"/></g></svg>`,
	codepen: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M 0 -40 l -46 25 46 25 46 -25 z" /><path d="M 0 -40 v 30" /><path transform="translate(0 50)" d="M 0 -40 v 30" /><path transform="translate(46 25)" d="M 0 -40 v 30" /><path transform="translate(-46 25)" d="M 0 -40 v 30" /><path transform="translate(0 30)" d="M 0 -40 l -46 25 46 25 46 -25 z" /></g></svg>`,
	comment: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke-width="8" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"><path d="M -9.5 25 a 35.5 35.5 0 0 1 0 -71 h 15 a 40 40 0 0 1 40 40 q 0 25 -54.5 52 v -20z" /></g></svg>`,
	css: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-40.002-50l5.005 85.002 35 15.002 35.001-15.002L40.01-50h-80.002zM-26-32.5h52.002l-3.25 55.263L0 32.516l-22.75-9.753-.651-11.05h11.05l.325 5.524 12.027 5.2 12.026-5.2.977-16.574h-37.049l-.646-11.05h38.358l.65-11.055h-39.643l-.65-11.05z"/></g></svg>`,
	d3: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-6.28-45A54.667 54.667 0 0111.8-25h10.7c4.261 0 7.5 3.239 7.5 7.5S26.761-10 22.5-10h-5.451C17.664-6.755 18-3.416 18 0s-.336 6.755-.951 10H22.5c4.261 0 7.5 3.239 7.5 7.5S26.761 25 22.5 25H11.8A54.599 54.599 0 01-6.28 45H22.5C37.57 45 50 32.57 50 17.5c0-6.656-2.521-12.72-6.527-17.5C47.48-4.783 50-10.84 50-17.5 50-32.57 37.57-45 22.5-45H-6.28z"/><path d="M-50-45v20h10c13.93 0 25 11.07 25 25s-11.07 25-25 25h-10v20h10C-15.27 45 5 24.73 5 0s-20.27-45-45-45z"/></g></svg>`,
	directMessage: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke-width="8" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"><path d="M -46 -27 a 8 8 0 0 1 8 -8 h 76 a 8 8 0 0 1 8 8 v 54 a 8 8 0 0 1 -8 8 h -76 a 8 8 0 0 1 -8 -8 z" /><path d="M -46 -20 l 46 23 46 -23" /></g></svg>`,
	editing: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="8"><path d="M 18 -44 h -54 a 10 10 0 0 0 -10 10 v 68 a 10 10 0 0 0 10 10 h 46 m 18 -54 v -24 a 10 10 0 0 0 -10 -10"/><path d="M 8 -11 l -17 17 38 38 h 17 v -17 l -38 -38"/></g><g stroke-width="7"><path d="M 17 -2 l -17 17"/><path d="M -30 -22 h 40"/><path d="M -30 -7 l 10 10 m -10 0 l 10 -10"/><path d="M -30 18 h 16"/></g></g></svg>`,
	editor: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><path fill="currentColor" stroke="none" d="M-40.5-33v16h.5v.5h80v-16h-.5v-.5h-80zm8.5.5a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0A4.5 4.5 0 01-1.5-28 4.5 4.5 0 01-6-23.5a4.5 4.5 0 01-4.5-4.5A4.5 4.5 0 01-6-32.5z"/><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M-45-37.5h90v75h-90z" stroke-width="10"/><g stroke-width="8"><path d="M5-4L-5 21M-18 0l-8 8 8 8M18 0l8 8-8 8"/></g></g></svg>`,
	freecodecamp: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"><path d="M 30 -35 c 21 20 21 50 0 70" /><path transform="scale(-1 1)" d="M 30 -35 c 21 20 21 50 0 70" /><g transform="translate(0 30)" stroke-linejoin="round"><path d="M 20 -20 a 20 20 0 0 1 -40 0 q 0 -10 10 -20 t 0 -20 q 15 17 12.5 35 q 10 0 12.5 -15 q 5 11.25 5 20" /></g></g></svg>`,
	gaming: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-27.916-32.012a5 5 0 00-.526.028 5 5 0 00-2.05.614c-5.334 1.568-9.465 6.062-11.282 11.877a5 5 0 00-.111.427l-6.998 32.001c-1.464 5.929-1.671 11.25 1.223 15.593 2.876 4.315 8.265 5.798 13.774 5.46 5.703-.052 9.108-3.662 12.086-6.143 3-2.5 5.576-3.84 5.8-3.84h32c.223 0 2.8 1.34 5.801 3.84 2.979 2.48 6.383 6.09 12.086 6.143 5.51.34 10.898-1.146 13.774-5.46 2.895-4.343 2.688-9.664 1.223-15.593l-.032-.144-6.967-31.858a5 5 0 00-.065-.27c-.983-3.538-2.434-6.595-4.786-8.947-2.351-2.352-5.714-3.717-9.036-3.717h-55.692a5 5 0 00-.213-.014zm7.914 15.013h5c.554 0 1 .445 1 1v8.5h8.5c.554 0 1 .445 1 1v5c0 .554-.446 1-1 1h-8.5V8c0 .554-.446 1-1 1h-5c-.554 0-1-.446-1-1V-.5h-8.5c-.554 0-1-.446-1-1v-5c0-.555.446-1 1-1h8.5V-16c0-.555.446-1 1-1zM17-17a5 5 0 015 5.005 5 5 0 01-5 5 5 5 0 01-5.005-5A5 5 0 0117-17zM24.997-.997a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5z"/></g></svg>`,
	git: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-.07-50a5 5 0 00-3.461 1.465l-11.55 11.55 12.49 12.49a7 7 0 012.604-.506 7 7 0 017 7 7 7 0 01-.51 2.6l8.906 8.906A7 7 0 0118.013-7a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 01.508-2.602L2.763-11.36v22.92a7 7 0 014.25 6.436 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 014.25-6.428v-23.14a7 7 0 01-4.25-6.436 7 7 0 01.508-2.602L-18.97-33.1-48.52-3.55a5 5 0 000 7.07l45 45a5 5 0 007.07 0l45-45a5 5 0 000-7.07l-45-45a5 5 0 00-3.61-1.465z"/></g></svg>`,
	github: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-width="8" d="M 0 11 h -17 a 18 18 0 0 1 -18 -18 q 0 -8 5 -16 q -6 -10 0 -18 q 12 0 18 6 a 24 24 0 0 1 24 0 q 6 -6 18 -6 q 6 8 0 18 q 5 8 5 16 a 18 18 0 0 1 -18 18 h -17" /><path stroke-width="6" d="M -12 11 q -10 0 -10 14 q 0 8 -8 14 q 20 0 20 -16 v 4 q 0 10 -6 16 q 16 0 16 -15 v -4 v 4 q 0 15 16 15 q -6 0 -6 -16 v -4 q 0 16 20 16 q -8 0 -8 -14 q 0 -14 -10 -14" /></g></svg>`,
	graduationHat: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"><path stroke-width="8" d="M 0 -26 l -46 16 46 16 46 -16 z" /><g stroke-width="7"><path d="M -26 -1 v 20 a 52 52 0 0 0 52 0 v -20" /><path fill="currentColor" d="M 40 -4 v 25 l 5 5 a 10 10 0 0 1 -10 0 l 5 -5" /></g></g></svg>`,
	heart: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"><path d="M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0" /></g></svg>`,
	html: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-40.002-50l5.004 85L.001 50.001l34.998-15.003L40.003-50h-80.007zm14.003 17.5h52l-.65 11.049h-39.649l.651 11.054H24.7L22.751 22.75 0 32.503l-22.75-9.752-.65-11.05h11.049l.325 5.525 12.026 5.2 12.026-5.2.977-16.574H-24.05L-25.998-32.5z"/></g></svg>`,
	hub: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="10"><path d="M 0 0 L 0 -32 Z L -34 34 Z L 34 34"  /></g><g fill="currentColor" stroke="none"><circle cy="-32" r="18" /><rect x="-50" y="18" width="32" height="32" rx="4" /><rect x="18" y="18" width="32" height="32" rx="4" /></g></svg>`,
	js: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-50-50V50.8h38.4c-8.88 0-16.08-7.2-16.08-16.08v-5.04h10.08v5.04c0 3.36 2.64 6 6 6s6-2.64 6-6V.88H4.48v33.84c0 8.88-7.2 16.08-16.08 16.08H9.52V40.72H24.64c2.88 0 5.04-2.208 5.04-5.04s-2.184-5.04-5.04-5.04c-8.4 0-15.12-6.72-15.12-15.12S16.24.4 24.64.4h13.2v10.08h-13.2c-2.88 0-5.04 2.208-5.04 5.04s2.184 5.04 5.04 5.04c8.4 0 15.12 6.72 15.12 15.12S33.04 50.8 24.64 50.8h24V-50h-100.8z"/></g></svg>`,
	json: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="10" ><path d="M -17.5 -45 a 20 20 0 0 0 -20 20 v 12.5 a 12.5 12.5 0 0 1 -12.5 12.5 12.5 12.5 0 0 1 12.5 12.5 v 12.5 a 20 20 0 0 0 20 20" /><path transform="scale(-1 1)" d="M -17.5 -45 a 20 20 0 0 0 -20 20 v 12.5 a 12.5 12.5 0 0 1 -12.5 12.5 12.5 12.5 0 0 1 12.5 12.5 v 12.5 a 20 20 0 0 0 20 20" /></g><g fill="currentColor" stroke="none"><circle r="4" /><circle cx="-16" r="4" /><circle cx="16" r="4" /></g></svg>`,
	lightBulb: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M -10.5 12 a 21 21 0 1 1 21 0 v 5 a 4 4 0 0 1 -4 4 h -13 a 4 4 0 0 1 -4 -4 v -5"/><g stroke-width="7"><path d="M -8 31 h 16"/><path d="M -8 40.5 h 16"/><path fill="currentColor" d="M -6 40.5 a 6 6 0 0 0 12 0"/></g><g transform="translate(0 -6)" stroke-width="6"><path transform="rotate(0) translate(0 -34)" d="M 0 0 v -7" /><path transform="rotate(45) translate(0 -34.5)" d="M 0 0 v -6.5" /><path transform="rotate(-45) translate(0 -34.5)" d="M 0 0 v -6.5" /><path transform="rotate(90) translate(0 -35)" d="M 0 0 v -6" /><path transform="rotate(-90) translate(0 -35)" d="M 0 0 v -6" /><path transform="rotate(135) translate(0 -35.5)" d="M 0 0 v -5.5" /><path transform="rotate(-135) translate(0 -35.5)" d="M 0 0 v -5.5" /></g></g></svg>`,
	moon: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><path d="M-5.435-27.43A28 28 0 000 28.02 28 28 0 0027.435 5.45 28 28 0 0122 6.019a28 28 0 01-27.435-33.43z"/></svg>`,
	node: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linejoin="round" stroke-linecap="round"><path d="M -25 33 l -18 -9 v -48 l 44 -22 44 22 v 48 l -44 22 -7 -3.5" /><path d="M -14 -19 v 42.5 a 10 10 0 0 1 -10 10" /><path d="M 24 -9 a 10 10 0 0 0 -20 0 10 10 0 0 0 10 10 10 10 0 0 1 10 10 10 10 0 0 1 -20 0" /></g></svg>`,
	notificationBell: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke-width="8" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"><path d="M 0 -46 a 30 30 0 0 1 30 30 v 20 a 13 13 0 0 1 0 25 h -60 a 13 13 0 0 1 0 -25 v -20 a 30 30 0 0 1 30 -30" /><path d="M 15 31 a 15 15 0 0 1 -30 0" /></g></svg>`,
	permalink: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g transform="rotate(-45)"><g fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"><path stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /><path transform="scale(-1 -1)" stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /></g></g></svg>`,
	publish: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="8"><path d="M 36 -44 h -54 a 10 10 0 0 0 -10 10 v 15 m 30 63 h 34 a 10 10 0 0 0 10 -10 v -68 a 10 10 0 0 0 -10 -10"/></g><g stroke-width="7"><path d="M -32.5 32 h -2 a 12 12 0 0 1 0 -24 a 17 17 0 0 1 34 0 h 2 a 12 12 0 0 1 0 24"/><path d="M -15.5 38 v -20 l -8 8 m 16 0 l -8 -8" /><path d="M -12 -22 h 40"/><path d="M 10 -2 h 18"/><path d="M 24 18 h 4"/></g></g></svg>`,
	pullRequest: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><circle r="15" cx="-24" cy="-31" /><circle r="15" cx="-24" cy="31" /><circle r="15" cx="24" cy="31" /><path d="M -24 16 V -16"/><path d="M 24 16 V -16 q 0 -15 -20 -20"/><path transform="translate(4 -36) rotate(-20)" d="M 0 0 h 18"/><path transform="translate(4 -36) rotate(70)" d="M 0 0 h 18"/></g></svg>`,
	puzzle: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g transform="scale(-1 1)"><g fill="currentColor" stroke="none"><path d="M -17 -30 h 12 a 2 2 0 0 0 2 -2 v -5 a 13 13 0 0 1 26 0 v 5 a 2 2 0 0 0 2 2 h 12 a 13 13 0 0 1 13 13 v 12 a 2 2 0 0 1 -2 2 h -5 a 13 13 0 0 0 0 26 h 5 a 2 2 0 0 1 2 2 v 12 a 13 13 0 0 1 -13 13 h -12 a 2 2 0 0 1 -2 -2 v -5 a 13 13 0 0 0 -26 0 v 5 a 2 2 0 0 1 -2 2  h -12 a 13 13 0 0 1 -13 -13 v -12 a 2 2 0 0 0 -2 -2 h -5 a 13 13 0 0 1 0 -26 h 5 a 2 2 0 0 0 2 -2 v -12 a 13 13 0 0 1 13 -13" /></g></g></svg>`,
	quote: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill='currentColor' stroke-width='10' stroke='currentColor' stroke-linejoin='round' stroke-linecap='round'><path d='M -23 -27 c -20 8 -37.5 72 0 72 a 16 16 0 0 0 0 -32 c -20 0 -15 -35 0 -40' /><path d='M 29 -45 c -20 8 -37.5 72 0 72 a 16 16 0 0 0 0 -32 c -20 0 -15 -35 0 -40' /></g></svg>`,
	react: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8"><ellipse transform="rotate(30)" rx="18" ry="46" /><ellipse transform="rotate(-30)" rx="18" ry="46" /><ellipse transform="rotate(90)" rx="18" ry="46" /></g><g fill="currentColor" stroke="none"><circle r="8" /></g></svg>`,
	reading: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="8"><path d="M 36 -44 h -27 m -37 63 v 15 a 10 10 0 0 0 10 10 h 54 a 10 10 0 0 0 10 -10 v -68 a 10 10 0 0 0 -10 -10"/><circle r="25" cx="-21" cy="-19" /><path  d="M 22 24 l -18 -18"/></g><path stroke-width="4" d="M 5 7 l -5 -5"/><g stroke-width="7"><path d="M -12 -22 h 4 m 24 0 h 12"/><path d="M 13 -2 h 15"/><path d="M -12 18 h 12"/></g></g></svg>`,
	repository: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M -30 -46 h 60 a 8 8 0 0 1 8 8 v 70 a 8 8 0 0 1 -8 8 h -21 m -27 0 h -12 a 8 8 0 0 1 -8 -8 v -70 a 8 8 0 0 1 8 -8 v 65 h 68"/><path d="M -15 -30 h 2"/><path d="M -15 -15 h 2"/><path d="M -15 0 h 2"/><path stroke-width="7" d="M -15 30 v 16.5 l 10 -5 10 5 v -16.5 z"/></g></svg>`,
	rocket: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"><g transform="rotate(45)"><path stroke-width="8" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" /><g stroke-width="7"><path d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /><path transform="scale(-1 1)" d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /><path d="M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5" /><circle r="9" cy="-11" /></g></g></g></svg>`,
	running: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8"  stroke-linejoin="round" stroke-linecap="round"><g transform="scale(-1 1) translate(-7 0) rotate(-35)"><path d="M 46 13.5 a 8 8 0 0 1 -8 8 h -76 a 8 8 0 0 1 -8 -8 v -4 q 0 -8 16 -16 l 34 -15 a 20 20 0 0 0 34 0 8 8 0 0 1 8 8 v 27" /><g stroke-width="6"><path d="M 46 12.5 h -92" /><path d="M -20.5 -5.5 l 10 10" /><path d="M -10.5 -11.5 l 10 10" /></g></g></g></svg>`,
	skip: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><path d="M 3 -20 h 22 a 20 20 0 0 1 0 40 h -22 l 10 -10 -10 10 10 10" /><path d="M -45 -20 h 28" /><path d="M -45 0 h 28" /><path d="M -45 20 h 28" /></g></svg>`,
	sparkles: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" /><path d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-20 -20) scale(0.9)"/><path d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(20 -25) scale(0.5)"/><path d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(15 25) scale(0.8)"/><path d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-15 20) scale(0.4)"/></g></svg>`,
	sun: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor"><circle r="22" /><circle transform="translate(0 41.2)" r="8.8" /><circle transform="rotate(45) translate(0 41.2)" r="8.8" /><circle transform="rotate(90) translate(0 41.2)" r="8.8" /><circle transform="rotate(135) translate(0 41.2)" r="8.8" /><circle transform="rotate(180) translate(0 41.2)" r="8.8" /><circle transform="rotate(225) translate(0 41.2)" r="8.8" /><circle transform="rotate(270) translate(0 41.2)" r="8.8" /><circle transform="rotate(315) translate(0 41.2)" r="8.8" /></g></svg>`,
	svelte: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g transform="rotate(-30)"><g fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"><path d="M 30 -10 h -30 h 8 a 21 21 0 0 1 0 42 h -37 a 21 21 0 0 1 0 -42" /><path transform="scale(-1 -1)" d="M 30 -10 h -30 h 8 a 21 21 0 0 1 0 42 h -37 a 21 21 0 0 1 0 -42" /></g></g></svg>`,
	svg: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="currentColor" stroke-width="8"><path d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /><path transform="rotate(45)" d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /><path transform="rotate(90)" d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /><path transform="rotate(135)" d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /></g></svg>`,
	tea: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g transform="scale(0.9)"><g fill="currentColor" stroke="none"><path d="M-22.023-45.028a2 2 0 00-.284.027h.614a2 2 0 00-.33-.027zm5 0a2 2 0 00-.284.027h.642a2 2 0 00-.358-.027zM-42-45.001a8 8 0 00-7.998 8.003v46a20 20 0 0020 20.001H7.005a20 20 0 0020-20V-1.995h2c11.526 0 21-9.474 21-21 0-11.527-9.474-21-21-21H22.87a8 8 0 00-3.864-1h-34.001v16.173l9.417 9.412a2 2 0 01.586 1.414V.007a2 2 0 01-2 2h-25a2 2 0 01-2-2v-18.003a2 2 0 01.586-1.414l9.412-9.412v-16.174h-18.003zm69.002 13.003h2c5.04 0 9.002 3.957 9.002 8.998 0 5.04-3.962 8.998-9.003 8.998h-2V-32z"/></g><g fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="square"><path d="M-45 40h67"/></g></g></svg>`,
	twitter: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-width="8" d="M -39 30.5 c 40 20 75 0 75 -48 l 8 -8 -12 -2 a 10 10 0 0 0 -32.5 12 q -20 5 -40 -15" /><path stroke-width="7" d="M -40.5 -30.5 q -5 20 14 26 -9 0 -18 -5 0 20 23 18 -10 4 -22 0 0 12 28 14 -10 6 -23.5 8" /></g></svg>`,
	world: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="12" stroke-linejoin="round" stroke-linecap="round"><circle r="44" /></g><g fill="currentColor" stroke="none"><path d="M -2 4 h 9 a 8 8 0 0 1 8 8 v 6 a 4 4 0 0 1 4 4 8 8 0 0 1 -8 8 v 6 a 9 9 0 0 1 -18 0 v -6 a 8 8 0 0 0 -4 -4 11 11 0 0 1 0 -22" /><path d="M -18 -26 a 3 3 0 0 1 3 3 v 4 a 3 3 0 0 1 -3 3 h -2 a 3 3 0 0 1 -3 -3 3 3 0 0 1 3 -3 v -1 a 3 3 0 0 1 3 -3" /><path d="M 1 -28 a 4 4 0 0 1 -4 4 a 8 8 0 0 0 -8 8 v 3 a 4 4 0 0 0 -4 4 a 6 6 0 0 0 12 0 a 2 2 0 0 1 4 0 v 5 a 5 5 0 0 0 10 0 v -5 a 2 2 0 0 1 4 0 a 4 4 0 0 0 4 4 v 4 a 10 10 0 0 0 20 0 c 0 -38 -38 -38 -38 -38 a 4 4 0 0 0 -4 4 4 4 0 0 0 -4 4 4 4 0 0 0 4 4 h 4" /></g></svg>`,
	writing: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="8"><path d="M 16.5 -44 h -52.5 a 10 10 0 0 0 -10 10 v 68 a 10 10 0 0 0 10 10 h 54 a 10 10 0 0 0 10 -10 v -17.5"/><path d="M 29 -37.5 l 17 17 -38 38 h -17 v -17 l 38 -38"/></g><g stroke-width="7"><path d="M 20 -28.5 l 17 17"/><path d="M -30 -22 h 25"/><path d="M -30 -2 h 10"/><path d="M -30 18 h 10"/></g></g></svg>`,
}