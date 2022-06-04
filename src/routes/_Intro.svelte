<script>
	import Sun from './playground/_Sun.svelte';
	import icons from '$lib/icons';
</script>

<div>
	<header>
		<h1>Hi there</h1>
		<Sun />
		<p>I'm a software developer focused on super-effective, delightful interactions.</p>
		<p>
			I take pride in almost everything I make, be it web apps with Svelte {@html icons.js}, or
			small 2D games with Love2D {@html icons.lua}.
		</p>
		<p>
			Welcome to my personal website, where I try to convince you of my skills and show the power of
			Scalable Vector Graphics {@html icons.svg}.
		</p>
	</header>
</div>

<style>
	div {
		color: hsl(44, 30%, 17%);
		background: hsl(41, 100%, 97%);
		min-height: 100vh;
		display: grid;
		place-items: center;
	}

	header {
		max-width: 48rem;
		padding: 1rem;
		margin-left: auto;
		margin-right: auto;
	}

	header > * + * {
		margin-top: 0.75em;
	}

	p {
		line-height: 2;
	}

	header > :global(svg) {
		float: right;
		shape-outside: circle();
		display: block;
		max-width: 22rem;
		width: 100%;
		height: auto;
	}
</style>
