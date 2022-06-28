<script>
	import Intro from './_Intro.svelte';
	import Showcase from './_Showcase.svelte';
	import Outro from './_Outro.svelte';
</script>

<svelte:head>
	<title>borntofrappe</title>
	<meta
		name="description"
		content="Personal website for one Gabriele Corti, built by one Gabriele Corti, coding online as borntofrappe."
	/>
</svelte:head>

<div>
	<section>
		<Intro />
		<Showcase />
	</section>
	<Outro />
</div>

<style>
	section {
		background: inherit;
		min-height: 100vh;
		z-index: 1;
		position: relative;
	}

	div > :global(footer) {
		position: sticky;
		bottom: 0;
	}
</style>
