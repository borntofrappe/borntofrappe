<script>
	import Sun from './playground/_Sun.svelte';
	import Canvas from './canvas/index.svelte';
</script>

<main>
	<div>
		<h1>Hi there</h1>
		<p>Welcome to my personal website, where I craft beautiful, delightful interactions.</p>
		<p>
			I'm working to build something <em>fancy</em>. In the meantime, I hope you'll enjoy a blank
			canvas to release your innermost artist.
		</p>
	</div>

	<Sun />

	<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"
		><defs
			><linearGradient id="l" gradientTransform="rotate(90)"
				><stop stop-color="#d58141" offset="0.25" /><stop stop-color="#d7c44c" offset="0.25" /><stop
					stop-color="#d7c44c"
					offset="0.5"
				/><stop stop-color="#4fa9cc" offset="0.5" /><stop stop-color="#4fa9cc" offset="0.75" /><stop
					stop-color="#3f8d27"
					offset="0.75"
				/></linearGradient
			></defs
		><g fill="url(#l)" stroke-linecap="round"
			><path d="M -38 12 a 38 38 0 0 0 76 0 q 0 -28 -38 -62 -38 34 -38 62" /></g
		></svg
	>
</main>

<Canvas />

<style>
	main {
		color: hsl(44, 30%, 17%);
		background: hsl(41, 100%, 97%);
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
		position: relative;
	}

	main > * {
		flex: 1 1 18rem;
	}

	svg {
		width: 2em;
		height: auto;
		display: block;
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translate(-50%, -50%);
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

	main > :global(svg) {
		display: block;
		max-width: 24rem;
		width: 100%;
		height: auto;
	}
</style>
