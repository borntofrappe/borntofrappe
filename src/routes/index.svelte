<script>
	import Header from './_Header.svelte';
	import Footer from './_Footer.svelte';
</script>

<svelte:head>
	<title>borntofrappe</title>
	<meta
		name="description"
		content="Personal website for one Gabriele Corti, built by one Gabriele Corti, coding online as borntofrappe."
	/>
</svelte:head>

<div>
	<Header />
</div>

<style>
	div {
		color: hsl(44, 30%, 17%);
		background: hsl(41, 100%, 97%);
		min-height: 100vh;
	}
</style>
