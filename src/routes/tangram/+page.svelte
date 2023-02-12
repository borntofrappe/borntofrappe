<script>
	import site from '$lib/utils/site.js';

	import Tangram from './Tangram.svelte';
	import styles from './styles.js';

	const { title } = site;

	const shapes = Object.keys(styles);

	let tangram = true;
	let [shape] = shapes;

	$: if (!tangram) {
		let newShape = '';
		do {
			newShape = shapes[Math.floor(Math.random() * shapes.length)];
		} while (newShape === shape);

		shape = newShape;
	}
</script>

<svelte:head>
	<title>Tangram | {title}</title>
	<meta
		name="description"
		content="Shuffle the pieces of a tangram puzzle to create interesting visuals."
	/>
	<link rel="icon" href="/icons/tangram.svg" type="image/svg+xml" />
</svelte:head>

<header class="visually-hidden">
	<h1>Tangram</h1>
	<p>Shuffle the pieces of a tangram puzzle to create interesting visuals.</p>
</header>

<main
	class="box centered"
	style:--color="hsl(216, 33%, 97%)"
	style:--background="hsl(210, 24%, 16%)"
	style:--selection-color="hsl(216, 33%, 97%)"
	style:--selection-background="hsl(212, 34%, 30%)"
>
	<label class:tangram>
		<span class="visually-hidden">
			{tangram ? 'Move the pieces to create a new shape.' : 'Move the pieces back together.'}
		</span>
		<input bind:checked={tangram} type="checkbox" />
		<Tangram {shape} />
	</label>
</main>

<style>
	label {
		--size: 99vmin;
		--max-size: 52rem;
		display: block;
		background: none;
		border: none;
		block-size: var(--size);
		inline-size: var(--size);
		max-block-size: var(--max-size);
		max-inline-size: var(--max-size);
		aspect-ratio: 1/1;
		position: relative;
	}

	label input {
		position: absolute;
		top: 0;
		left: 0;
		block-size: 100%;
		inline-size: 100%;
		opacity: 0;
	}

	label > :global(svg path) {
		transition: transform 0.75s cubic-bezier(0.49, 0.11, 0.1, 1.32);
	}

	label.tangram > :global(svg path:nth-of-type(1)) {
		transform: translate(0px, 0px) rotate(0deg) !important;
	}
	label.tangram > :global(svg path:nth-of-type(2)) {
		transform: translate(0px, 0px) rotate(0deg) !important;
	}
	label.tangram > :global(svg path:nth-of-type(3)) {
		transform: translate(3px, 1px) rotate(0deg) !important;
	}
	label.tangram > :global(svg path:nth-of-type(4)) {
		transform: translate(1px, 3px) rotate(0deg) !important;
	}
	label.tangram > :global(svg path:nth-of-type(5)) {
		transform: translate(2px, 4px) rotate(0deg) !important;
	}
	label.tangram > :global(svg path:nth-of-type(6)) {
		transform: translate(2px, 2px) rotate(0deg) !important;
	}
	label.tangram > :global(svg path:nth-of-type(7)) {
		transform: translate(0px, 4px) rotate(0deg) !important;
	}
</style>
