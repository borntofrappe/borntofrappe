<script context="module">
	export const prerender = true;
	export const hydrate = false;
</script>

<script>
	import Banner from '$lib/components/Banner.svelte';
</script>

<svelte:head>
	<title>borntofrappe</title>
	<meta
		name="description"
		content="Personal website of one Gabriele Corti, software developer localized in Italy."
	/>
</svelte:head>

<Banner title="borntofrappe" />
<p>
	Welcome to the personal website of one <em>Gabriele Corti</em>, software developer localized in
	Italy.
</p>

<ul>
	<li>built with <a href="https://kit.svelte.dev">SvelteKit</a></li>
	<li>deployed through <a href="https://www.netlify.com">Netlify</a></li>
</ul>

<style>
	ul {
		padding: 0;
		display: flex;
	}
	ul li::marker {
		content: '';
	}
	ul li:first-of-type::first-letter {
		text-transform: capitalize;
	}
	ul li:not(:last-of-type)::after {
		content: ',';
	}
	ul li:last-of-type::after {
		content: '.';
	}
</style>
