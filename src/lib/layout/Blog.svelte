<script>
	export let title;
	export let description;
</script>

<svelte:head>
	<title>
		borntofrappe | {title}
	</title>
	<meta name="description" content={description} />
</svelte:head>

<header>
	<h1>{title}</h1>
</header>

<main>
	<slot />
</main>

<style>
	header {
		padding: 3rem 1rem;
		text-align: center;
	}

	main {
		max-width: 60ch;
		margin-inline: auto;
		padding: 1rem;
	}

	main > :global(* + *) {
		margin-block-start: 1em;
	}
</style>
