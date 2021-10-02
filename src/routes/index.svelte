<script>
	import Hero from '$lib/components/root/Hero.svelte';
	import GettingStarted from '$lib/components/root/GettingStarted.svelte';
	import About from '$lib/components/root/About.svelte';

	import Meta from '$lib/components/Meta.svelte';
</script>

<Meta
	description="Personal website for one Gabriele Corti, a web developer from norther Italy, among other things."
/>

<Hero />

<main id="content">
	<GettingStarted />
	<About />
</main>

<style>
	main {
		overflow-x: hidden;
		--section-whitespace: 5em;
	}

	main > :global(section) {
		width: 90vw;
		width: var(--width);
		max-width: 42rem;
		max-width: var(--max-width);
		margin: 5em auto;
		margin: var(--section-whitespace) auto;
	}

	main > :global(section p) {
		line-height: 1.75;
	}

	main > :global(section + section) {
		position: relative;
		padding-top: 5em;
		padding-top: var(--section-whitespace);
	}

	main > :global(section + section::before) {
		content: '';
		position: absolute;
		bottom: 100%;
		left: 50%;
		width: 100vw;
		height: 0.5em;
		transform: translate(-50%, 50%);
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
	}

	@supports ((-webkit-mask-image: url()) or (mask-image: url())) {
		main > :global(section + section::before) {
			height: 2em;
			-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
			mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
			-webkit-mask-size: auto 2em;
			mask-size: auto 2em;
			-webkit-mask-position: 50% 50%;
			mask-position: 50% 50%;
			-webkit-mask-repeat: repeat-x;
			mask-repeat: repeat-x;
		}
	}
</style>
