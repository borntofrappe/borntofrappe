<main id="content">
	<slot />
</main>

<style>
	main {
		max-width: 42rem;
		margin: 1rem auto;
	}

	main > :global(* + *) {
		margin-top: 1em;
	}
</style>
