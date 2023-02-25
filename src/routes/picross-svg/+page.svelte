<script>
	import site from '$lib/utils/site.js';
	import Picross from './Picross.svelte';
	import levels from './levels.js';
	import { scale } from 'svelte/transition';

	const { title } = site;

	const keys = Object.keys(levels);
	let [key] = keys;
</script>

<svelte:head>
	<title>Picross SVG | {title}</title>
	<meta
		name="description"
		content="Explore solved nonogram puzzles with crisp visuals and in multiple dimensions."
	/>
	<link rel="icon" href="/icons/picross-svg.svg" type="image/svg+xml" />
</svelte:head>

<header class="visually-hidden">
	<h1>Picross SVG</h1>
	<p>Explore solved nonogram puzzles with crisp visuals and in multiple dimensions.</p>
</header>

<main>
	<label>
		<span class="visually-hidden">Select level</span>

		<select bind:value={key}>
			{#each keys as key}
				<option value={key}>{levels[key].title}</option>
			{/each}
		</select>
	</label>

	{#key key}
		<div
			in:scale
			style:backface-visibility="hidden"
			style:inline-size="90vmin"
			style:max-inline-size="28rem"
		>
			<Picross {...levels[key]} />
		</div>
	{/key}
</main>

<style>
	main {
		color: hsl(210, 24%, 16%);
		background: hsl(216, 33%, 97%);
		--hint: hsl(211, 13%, 65%);
		padding: 1rem;
		display: flex;
		gap: 2rem;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
		background-image: url('data:image/svg+xml;utf8,<svg viewBox="-5 -5 10 10"\ xmlns="http://www.w3.org/2000/svg">\
	<circle r="0.5" fill="%23d2dbe0" />\
</svg>');
		background-size: 2rem;
	}

	main div {
		margin-block: auto;
	}

	select {
		--transition-duration: 0.2s;
		padding: 0.75rem 1rem;
		color: hsl(49, 100%, 96%);
		background: hsl(42, 63%, 48%);
		border-radius: 0;
		border: none;
		font-weight: 700;
		outline-offset: 0.2rem;
		text-shadow: -1px -1px var(--hint, hsl(41, 8%, 61%));
		box-shadow: 0.25rem 0.25rem 0 var(--hint, hsl(41, 8%, 61%));
		transition: outline var(--transition-duration, 0.25s) 0s cubic-bezier(0.37, 0, 0.63, 1),
			box-shadow var(--transition-duration, 0.25s) 0s cubic-bezier(0.37, 0, 0.63, 1);
	}

	select:focus {
		outline: 0.2rem solid var(--hint, hsl(41, 8%, 61%));
		box-shadow: 0rem 0rem 0 var(--hint, hsl(41, 8%, 61%));
		transition-delay: var(--transition-duration, 0.25s), 0s;
	}
</style>
