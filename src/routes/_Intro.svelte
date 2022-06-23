<script>
	import Ray from './showcase/mignon/_Ray.svelte';
	import icons from '$lib/icons';
</script>

<div>
	<header>
		<h1>Hi there</h1>
		<Ray />
		<p>
			Name's Gabriele Corti. <br />I'm a software developer focused on Svelte {@html icons.svelte} and
			<abbr title="Scalable Vector Graphics">SVG</abbr>
			{@html icons.svg}.
		</p>
		<h2>Why Svelte?</h2>
		<p style:display="inline">Mainly for three reasons:</p>
		<ol style:display="inline">
			<li><abbr title="HyperText Markup Language">HTML</abbr>{@html icons.html}</li>
			<li><abbr title="Cascading Style Sheets">CSS</abbr>{@html icons.css}</li>
			<li><span>Javascript</span>{@html icons.js}</li>
		</ol>
		<h2>Why SVG?</h2>
		<p>
			Take a look around this verty website and, fingers crossed, you'll find the answer in
			applications worth exploring.
		</p>
	</header>
</div>

<style>
	div {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	header {
		max-width: 56rem;
		padding: 4rem 1rem;
		margin-left: auto;
		margin-right: auto;
	}

	header > * + * {
		margin-top: 0.75em;
	}

	h2 {
		font-size: var(--size-500);
		margin-top: var(--size-600);
	}

	p {
		line-height: 2;
	}

	ol {
		padding: 0;
	}

	li {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
	}

	li::after {
		content: '.';
	}

	li:not(:last-of-type)::after {
		content: ',';
	}

	header > :global(svg) {
		float: right;
		shape-outside: circle();
		display: block;
		max-width: 22rem;
		width: 100%;
		height: auto;
	}

	@media screen and (max-width: 36rem) {
		header {
			display: flex;
			flex-direction: column;
		}

		header > :global(* + *) {
			margin-top: 0.75em;
		}

		header > :global(svg) {
			order: 1;
			align-self: center;
		}
	}
</style>
