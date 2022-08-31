<script>
	import Intro from './Intro.svelte';
	import Showcase from './Showcase.svelte';
	import Outro from './Outro.svelte';
</script>

<svelte:head>
	<title>borntofrappe</title>
	<meta
		name="description"
		content="Personal website for one Gabriele Corti, built by one Gabriele Corti, coding online as borntofrappe."
	/>
</svelte:head>

<div
	style:background="inherit"
	style:min-height="100vh"
	style:z-index="1"
	style:position="relative"
>
	<Intro />
	<Showcase />
</div>
<div style:position="sticky" style:bottom="0">
	<Outro />
</div>
