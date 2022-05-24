<script>
	import Sun from './playground/_Sun.svelte';
	import icons from '$lib/icons';
</script>

<header>
	<div>
		<h1>Hi there</h1>
		<p>Welcome to my personal website, where I craft beautiful, delightful interactions.</p>
		<p>
			Most recently, with <span class="visually-hidden">Svelte</span>
			{@html icons.svelte} and
			<abbr class="visually-hidden" title="Scalable Vector Graphics">SVG</abbr>
			{@html icons.svg}.
		</p>
	</div>
	<Sun />
</header>

<style>
	header {
		min-height: 100vh;
		max-width: 64rem;
		padding: 1rem;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	div {
		max-width: 30rem;
	}

	div > * + * {
		margin-top: 0.75em;
	}

	p {
		line-height: 1.5;
	}

	header > :global(svg) {
		display: block;
		max-width: 24rem;
		width: 100%;
		height: auto;
	}
</style>
