<script>
	export let title;
	export let description;
</script>

<svelte:head>
	<title>
		borntofrappe | blog - {title}
	</title>
	<meta name="description" content={description} />
</svelte:head>

<main>
	<slot />
</main>
