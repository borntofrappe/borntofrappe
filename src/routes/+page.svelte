<script>
	import Header from './Header.svelte';
	import Showcase from './Showcase.svelte';
	import icons from '$lib/utils/icons.js';
</script>

<svelte:head>
	<title>borntofrappe</title>
	<meta name="description" content="Let's keep smiling." />
</svelte:head>

<Header />
<Showcase />

<footer>
	<p>
		Updated <time datetime="2023-01-22T18:14:31">January 22nd 2023 {@html icons.calendar}</time>.<br
		/>Feel free to
		<a
			href="https://github.com/borntofrappe/borntofrappe/issues/new?title=Dated%20content&body=Please%20update%20the%20website"
			>file an issue</a
		> if the message becomes too old.
	</p>
</footer>
