<script>
	import Ray from '$lib/components/mignon/Ray.svelte';
	import icons from '$lib/utils/icons';
	import Heading from './Heading.svelte';
</script>

<div class="container">
	<header>
		<Heading text="Hi there" />

		<div class="float"><Ray /></div>

		<p>
			Name's Gabriele Corti. <br />I'm the type of person who delights in writing code, be it for a
			data visualization, a 2D game or a full-fledged website. <br />I enjoy different technologies,
			and in this very moment I appreciate Svelte {@html icons.svelte} and
			<abbr title="Scalable Vector Graphics">SVG</abbr>
			{@html icons.svg} the most.
		</p>

		<h2>Why Svelte?</h2>
		<p style:display="inline">Mainly for three reasons:</p>
		<ol style:display="inline">
			<li><abbr title="HyperText Markup Language">HTML</abbr>{@html icons.html}</li>
			<li><abbr title="Cascading Style Sheets">CSS</abbr>{@html icons.css}</li>
			<li>Javascript{@html icons.js}</li>
		</ol>

		<h2>Why SVG?</h2>
		<p>
			Take a look around this very website and, fingers crossed, you'll find the answer in
			applications worth exploring.
		</p>
	</header>
</div>

<style>
	.container {
		color: hsl(44, 30%, 17%);
		background: hsl(41, 100%, 97%);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	header {
		max-width: 60rem;
		padding: 4rem 1rem;
		margin-left: auto;
		margin-right: auto;
	}

	header > * + * {
		margin-top: 0.8em;
	}

	header > :global(svg) {
		max-width: 40ch;
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

	header > .float {
		float: right;
		shape-outside: circle();
		max-width: 24rem;
		width: 100%;
	}

	@media screen and (max-width: 36rem) {
		header {
			display: flex;
			flex-direction: column;
		}

		header > .float {
			order: 1;
			align-self: center;
		}
	}
</style>
