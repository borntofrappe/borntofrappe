<script>
	import Sun from './playground/_Sun.svelte';
	import icons from '$lib/icons';
</script>

<div>
	<header>
		<h1>Hi there</h1>
		<Sun />
		<p>I'm a software developer who bakes super-effective interactions.</p>
		<p>
			I take pride in almost everything I make, mixed in web apps built with Svelte {@html icons.svelte}.
		</p>
		<p>Why Svelte? Mainly for three reasons:</p>
		<ol>
			<li><abbr title="HyperText Markup Language">HTML</abbr>{@html icons.html}</li>
			<li><abbr title="Cascading Style Sheets">CSS</abbr>{@html icons.css}</li>
			<li><span>Javascript</span>{@html icons.js}</li>
		</ol>
		<p>
			Welcome to my personal website, where I try to convince you of my skills and my focus on
			<abbr title="Scalable Vector Graphics">SVG</abbr>
			{@html icons.svg}.
		</p>
	</header>
</div>

<style>
	div {
		color: hsl(44, 30%, 17%);
		background: hsl(41, 100%, 97%);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	header {
		max-width: 56rem;
		padding: 1rem;
		margin-left: auto;
		margin-right: auto;
	}

	header > * + * {
		margin-top: 0.5em;
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
