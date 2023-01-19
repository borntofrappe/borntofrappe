<script>
	import Heading from '$lib/components/Heading.svelte';
	import Ray from './mignon/Ray.svelte';
	import icons from '$lib/utils/icons.js';
</script>

<svelte:head>
	<title>borntofrappe</title>
	<meta name="description" content="Let's keep smiling." />
</svelte:head>

<header>
	<div style:display="inline-block" style:max-width="40ch" style:width="100%">
		<Heading level="h1" text="Hi there" />
	</div>

	<div class="float">
		<Ray />
	</div>

	<p>
		Name's Gabriele Corti. <br />I'm the type of person who delights in writing code, be it for a
		data visualization, a 2D game or a full-fledged website. <br />I enjoy different technologies,
		and in this very moment I appreciate Svelte {@html icons.svelte} and
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
	<p>I'm building an answer at this very moment. Come back soon for an intriguing reply.</p>
</header>

<footer>
	<p>
		Updated <time datetime="2023-01-19T21:42">January 19th 2023 {@html icons.calendar}</time>.<br
		/>Feel free to
		<a
			href="https://github.com/borntofrappe/borntofrappe/issues/new?title=Dated%20content&body=Please%20update%20the%20website"
			>file an issue</a
		> if the message becomes too old.
	</p>
</footer>

<style>
	header {
		max-width: 60rem;
		padding: 4rem 1rem;
		margin-inline: auto;
	}

	header > * + * {
		margin-block-start: 0.8em;
	}

	p {
		line-height: 2;
	}

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

	header > .float {
		float: right;
		shape-outside: circle();
		max-width: 24rem;
		width: 100%;
		margin-block-start: 0;
	}

	@media (max-width: 36rem) {
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
