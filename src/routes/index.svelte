<script>
	import Meta from '$lib/Meta.svelte';

	const meta = {
		title: 'borntofrappe',
		description: 'Personal website of one Gabriele Corti.',
		url: '',
		image: 'borntofrappe'
	};
</script>

<Meta {...meta} />

<main id="content">
	<h1>Hello World</h1>
	<p>This is meant to be my personal website, build with SvelteKit and deployed through Netlify.</p>
	<p>
		<strong>Be warned</strong>: I'm actively working on the website. Expect changes and error
		messages.
	</p>

	<p><a href="https://github.com/borntofrappe/borntofrappe">Link to repo</a></p>
	<p>
		<a sveltekit:prefetch href="/blog" class="relative">Link to blog</a> with hypothetical content
	</p>
</main>
