<script>
	export let title;
	export let description;
	export let datetime;

	$: date = new Date(
		...datetime.split(/[-T:]/).map((d, i) => (i === 1 ? parseInt(d, 10) - 1 : parseInt(d, 10)))
	);
</script>

<svelte:head>
	<title>
		borntofrappe | blog - {title}
	</title>
	<meta name="description" content={description} />
</svelte:head>

<header>
	<h1>{title}</h1>
	<time {datetime}>{date}</time>
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
		max-width: 42rem;
		width: 90vmin;
		width: calc(100vmin - 20px);
		margin-left: auto;
		margin-right: auto;
		padding: 1rem;
	}

	main > :global(* + *) {
		margin-top: 0.75em;
	}
</style>
