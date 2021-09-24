<script>
	import Hero from '$lib/components/root/Hero.svelte';
	import GettingStarted from '$lib/components/root/GettingStarted.svelte';
	import About from '$lib/components/root/About.svelte';
</script>

<svelte:head>
	<title>borntofrappe</title>
</svelte:head>

<Hero />

<main id="content">
	<GettingStarted />
	<About />
</main>

<style>
	main {
		overflow-x: hidden;
		margin-top: 20px;
		--section-whitespace: 6em;
	}

	main > :global(section) {
		width: 90vw;
		width: var(--width);
		max-width: 42rem;
		max-width: var(--max-width);
		margin: 6em auto;
		margin: var(--section-whitespace) auto;
	}

	main > :global(section:first-of-type) {
		margin-top: 3em;
		margin-top: calc(var(--section-whitespace) / 2);
	}

	main > :global(section:last-of-type) {
		margin-bottom: 0;
	}

	main > :global(section + section) {
		position: relative;
	}

	main > :global(section + section::before) {
		position: relative;
		content: '';
		position: absolute;
		top: -3em;
		top: calc(var(--section-whitespace) / 2 * -1);
		left: 50%;
		width: 100vw;
		height: 0.5rem;
		transform: translate(-50%, -50%);
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
			-webkit-mask-size: auto 100%;
			mask-size: auto 100%;
			-webkit-mask-position: 50% 50%;
			mask-position: 50% 50%;
			-webkit-mask-repeat: repeat-x;
			mask-repeat: repeat-x;
		}

		main > :global(:not(section:last-of-type)) {
			margin-bottom: calc(var(--section-whitespace) + 1em);
		}
	}
</style>
