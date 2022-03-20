<script context="module">
	export const prerender = true;
	export const hydrate = false;
</script>

<script>
	import Banner from '$lib/components/Banner.svelte';
</script>

<svelte:head>
	<title>FAQ | borntofrappe</title>
	<meta name="description" content="What is the deal with this website." />
</svelte:head>

<main>
	<Banner title="Questions? Answers!" />

	<dl>
		<dt>What is this?</dt>
		<dd>
			This is a silly page on what is supposed to by my personal website. <br />Signed,
			<em>Gabriele Corti</em>.
		</dd>

		<dt>How did you build it?</dt>
		<dd>
			<ul>
				<li><a href="https://kit.svelte.dev">kit.svelte.dev</a></li>
				<li><a href="https://www.netlify.com/">Netlify</a></li>
			</ul>
		</dd>

		<dt>Where to go from here?</dt>
		<dd>There's no place like <a href="/">home</a>.</dd>
	</dl>
</main>

<style>
	main {
		max-width: 40rem;
		margin: 1rem auto;
	}

	main > :global(* + *) {
		margin-top: 1em;
	}

	dl > * + * {
		margin-top: 0.75em;
	}

	dt {
		font-weight: bold;
	}
</style>
