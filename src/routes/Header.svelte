<script>
	import AnimatedHeading from '$lib/components/AnimatedHeading.svelte';
	import Heading from '$lib/components/Heading.svelte';

	import icons from '$lib/utils/icons.js';

	import Ray from './mignon/Ray.svelte';
</script>

<div class="centered">
	<header class="box floating" style="--padding: var(--step-space-700) var(--step-space-300);">
		<div
			style="
			display: inline-block;
			inline-size: 100%;
			max-inline-size: 34rem;
		"
		>
			<AnimatedHeading level="h1" text="Hi there" />
		</div>

		<div class="float end" style="--shape-outside: circle();">
			<Ray />
		</div>

		<p>Name's Gabriele Corti. I write delightful code.</p>

		<p>
			I dabble in different technologies, and in this very moment I appreciate Svelte {@html icons.svelte}
			and
			<abbr title="Scalable Vector Graphics">SVG</abbr>
			{@html icons.svg} the most.
		</p>

		<Heading level="h2" stroke="var(--color)" fill="var(--highlight)">Why Svelte?</Heading>

		<p style="display: inline-block;">Mainly for three reasons:</p>

		<ol>
			<li><abbr title="HyperText Markup Language">HTML</abbr>{@html icons.html}</li>
			<li><abbr title="Cascading Style Sheets">CSS</abbr>{@html icons.css}</li>
			<li>Javascript{@html icons.js}</li>
		</ol>

		<Heading level="h2" stroke="var(--color)" fill="var(--highlight)">Why SVG?</Heading>

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
