<script>
	import Heading from '$lib/components/Heading.svelte';
	import Ray from './mignon/Ray.svelte';
	import icons from '$lib/utils/icons.js';
</script>

<div class="centered">
	<header class="box floating" style:--padding="var(--step-space-700) var(--step-space-300)">
		<div style:display="inline-block" style:inline-size="100%" style:max-inline-size="34rem">
			<Heading level="h1" text="Hi there" />
		</div>

		<div class="float end" style:--shape-outside="circle()">
			<Ray />
		</div>

		<p>Name's Gabriele Corti.</p>

		<p>
			I'm the type of person who delights in writing code, be it for a data visualization, a 2D game
			or a full-fledged website.
		</p>

		<p>
			I enjoy different technologies, and in this very moment I appreciate Svelte {@html icons.svelte}
			and
			<abbr title="Scalable Vector Graphics">SVG</abbr>
			{@html icons.svg} the most.
		</p>

		<h2>Why Svelte?</h2>

		<p style:display="inline-block">Mainly for three reasons:</p>

		<ol>
			<li><abbr title="HyperText Markup Language">HTML</abbr>{@html icons.html}</li>
			<li><abbr title="Cascading Style Sheets">CSS</abbr>{@html icons.css}</li>
			<li>Javascript{@html icons.js}</li>
		</ol>

		<h2>Why SVG?</h2>

		<p>
			Take a look around this very website. You might find the answer in applications worth
			exploring.
		</p>
	</header>
</div>

<style>
	ol {
		display: inline;
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
</style>
