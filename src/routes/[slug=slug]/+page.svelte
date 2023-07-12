<script>
	export let data;
</script>

<svelte:head>
	<link rel="icon" href="/icons/blog.svg" type="image/svg+xml" />
</svelte:head>

<svelte:component this={data.Component} />
