<script>
	import Footer from '$lib/components/Footer.svelte';

	export let data;
</script>

<svelte:head>
	<link rel="icon" href="/icons/slug.svg" type="image/svg+xml" />
</svelte:head>

<div
	class="[ box ]"
	style="
		--box-color: var(--color);
		--box-background: var(--background);
		min-height: 100lvb;
		z-index: 1;
		position: relative;
	"
>
	<svelte:component this={data.Component} />
</div>

<div
	style="
		position: sticky;
		inset-block-end: 0;
	"
>
	<Footer />
</div>
