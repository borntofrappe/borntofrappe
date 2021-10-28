<svelte:head>
	<title>borntofrappe</title>
</svelte:head>

<main>
	<h1>Hello world</h1>

	<p>
		My name is <b>Gabriele Corti</b>. <br />Welcome to my little place on the web, built with
		<a href="https://kit.svelte.de">SvelteKit</a>, deployed through
		<a href="https://www.netlify.com/">Netlify</a>.
	</p>
</main>

<style>
	main {
		width: 95vw;
		width: var(--width);
		max-width: 42rem;
		max-width: var(--max-width);
		margin: 1rem auto;
	}

	main > * + * {
		margin-top: 0.5em;
	}

	b {
		font-weight: 600;
	}
</style>
