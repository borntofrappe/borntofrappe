<script>
	import Header from './_Header.svelte';
	import Footer from './_Footer.svelte';
</script>

<svelte:head>
	<title>borntofrappe</title>
	<meta name="description" content="" />
</svelte:head>

<div>
	<Header />

	<Footer />
</div>

<style>
	div {
		color: hsl(44, 30%, 17%);
		background: hsl(41, 100%, 97%);
		min-height: 100vh;
	}

	div > :global(footer) {
		margin-top: auto;
	}
</style>
