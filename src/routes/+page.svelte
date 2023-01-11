<script>
	import Ray from './mignon/Ray.svelte';
</script>

<svelte:head>
	<title>borntofrappe</title>
	<meta name="description" content="Let's keep smiling." />
</svelte:head>

<div class="container">
	<header>
		<h1>Hi there</h1>

		<div class="float">
			<Ray />
		</div>

		<p>
			Name's Gabriele Corti. <br />I'm the type of person who delights in writing code, be it for a
			data visualization, a 2D game or a full-fledged website. <br />I enjoy different technologies,
			and in this very moment I appreciate Svelte and
			<abbr title="Scalable Vector Graphics">SVG</abbr>
			the most.
		</p>

		<h2>Why Svelte?</h2>
		<p style:display="inline">Mainly for three reasons:</p>
		<ol style:display="inline">
			<li><abbr title="HyperText Markup Language">HTML</abbr></li>
			<li><abbr title="Cascading Style Sheets">CSS</abbr></li>
			<li>Javascript</li>
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
		margin-inline: auto;
	}

	header > * + * {
		margin-block-start: 0.8em;
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
