<script context="module">
	export async function load({ status, error }) {
		return {
			props: { status, error }
		};
	}
</script>

<script>
	export let error;
	export let status;
	import icons from '$lib/_icons.js';

	import Meta from '$lib/Meta.svelte';

	const meta = {
		title: `borntofrappe / ${status}`,
		description: error.message,
		url: status === 404 ? status : '',
		image: status === 404 ? status : 'borntofrappe'
	};
</script>

<Meta {...meta} />

<header>
	{#if status === 404}
		<h1>Page not found</h1>
		<p>I've looked for it carefully. Promise.</p>
	{:else}
		<h1>{error.name}</h1>
		<p>Something entirely unexpected happened.</p>
	{/if}
</header>

<main id="content">
	<div class="code">
		<span aria-label="Language">{@html icons.editor} code</span>
		<pre><code>{error.stack}</code></pre>
	</div>

	<p>
		If you think this is a mistake, please consider
		<a href="https://github.com/borntofrappe/borntofrappe/issues">creating a new issue on Github</a
		>.
	</p>
	<p>
		If you need some guidance,
		<em>home is always a good place to start</em>.
	</p>
	<a href="/" class="relative">Go to home page</a>
</main>

<style>
	header {
		max-width: 40rem;
		width: 90vw;
		margin: 0rem auto;
		padding: 3rem 0 3.5rem;
		line-height: 1.75;
		color: hsl(215, 10%, 97%);
		color: var(--frappe-grey-10);
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
		background-position: 0 100%;
		position: relative;
		z-index: 5;
	}

	header > * + * {
		margin-top: 1em;
	}

	header::before {
		content: '';
		position: absolute;
		top: 0%;
		left: 50%;
		width: 100vw;
		height: 100%;
		transform: translateX(-50%);
		background: inherit;
		z-index: -5;
	}

	header::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		width: 100vw;
		height: 20px;
		transform: translateX(-50%) scaleY(-1);
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
		-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
		mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
		-webkit-mask-size: 100px 40px;
		mask-size: 100px 40px;
		-webkit-mask-position: 50% 0;
		mask-position: 50% 0;
		z-index: -5;
	}

	header h1 {
		color: inherit;
	}

	header p {
		position: relative;
	}

	header p::after {
		z-index: 20;
		position: absolute;
		top: 100%;
		right: 0%;
		width: 8rem;
		height: 8rem;
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -90 140 140"%3E%3Cg fill="none" stroke="hsl(215, 10%25, 97%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cg transform="translate(0 -80) scale(0.25)"%3E%3Cg transform="scale(0.75)"%3E%3Cg fill="none" stroke-width="16"%3E%3Cg transform="translate(0 13.5)"%3E%3Cpath d="M 34 0 h -68"/%3E%3Cpath transform="rotate(45)" d="M 40 0 h -80"/%3E%3Cpath transform="rotate(-45)" d="M 40 0 h -80"/%3E%3C/g%3E%3C/g%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke-width="8"%3E%3Cpath d="M -0 -46 a 17 17 0 0 1 17 17 h -34 a 17 17 0 0 1 17 -17" /%3E%3Cpath d="M -0 -10 h 25 v 25 a 25 25 0 0 1 -50 0 v -25 z" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke="none"%3E%3Cpath d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath transform="scale(-1 1)" d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3Cpath transform="scale(-1 1)" d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3C/g%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(215, 10%25, 97%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
	}

	@supports (display: grid) {
		body {
			overflow-x: initial;
		}

		header {
			width: 100%;
			max-width: initial;
			margin: initial;
			display: grid;
			grid-template-columns: 1fr minmax(auto, 40rem) 1fr;
			grid-column-gap: 5vw;
		}

		header > * {
			grid-column: 2;
		}

		header::before {
			display: none;
		}

		header::after {
			left: 0%;
			width: 100%;
			transform: scaleY(-1);
		}
	}

	main {
		max-width: 40rem;
		width: 90vw;
		margin: 4rem auto 5rem;
	}

	main > * + * {
		margin-top: 1.25em;
	}

	main > * + * {
		margin-top: 1.25em;
	}

	@media (min-width: 45rem) {
		main {
			margin: 5rem auto 6rem;
		}
		main a {
			font-size: 1.2rem;
			font-size: var(--size-500);
		}
	}

	main .code {
		line-height: initial;
	}

	main .code > span,
	main .code pre {
		border-radius: 0.4rem;
		padding: 0.8rem 1rem;
	}

	main .code > span {
		font-family: 'Maven Pro', sans-serif;
		font-weight: 500;
		color: hsl(215, 10%, 98%);
		color: var(--frappe-grey-10);
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
		transition: color var(--transition-duration) var(--ease-in-out-sine);
		display: flex;
		align-items: center;
	}

	main .code > span :global(svg) {
		width: 1.25em;
		height: auto;
		margin-right: 0.5rem;
	}

	main .code:hover > span {
		color: hsl(340, 90%, 55%);
		color: var(--primary-6);
	}

	main .code pre {
		font-size: 0.83rem;
		font-size: var(--size-300);
		margin: 0;
		color: hsl(214, 15%, 88%);
		color: var(--frappe-grey-9);
		background: hsl(229, 20%, 20%);
		background: var(--frappe-grey-1);
		line-height: 2;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	@media (min-width: 45rem) {
		main .code pre {
			font-size: 1rem;
			font-size: var(--size-400);
		}
	}

	main .code pre {
		overflow-x: auto;
	}

	main .code pre::-webkit-scrollbar {
		height: 0.4rem;
	}

	main .code pre::-webkit-scrollbar-track {
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
	}

	main .code pre::-webkit-scrollbar-thumb {
		background: hsl(340, 90%, 55%);
		background: var(--primary-6);
		border-radius: 0.2rem;
	}
</style>
