<script>
	import site from '$lib/utils/site.js';
	import Picross from './Picross.svelte';
	import levels from './levels.js';
	import { scale } from 'svelte/transition';

	const { title } = site;

	const entries = Object.entries(levels);
	let value = entries[0][0];
</script>

<svelte:head>
	<title>Picross | {title}</title>
	<meta
		name="description"
		content="Explore solved nonogram puzzles with crisp visuals and in multiple dimensions."
	/>
	<link rel="icon" href="/icons/picross.svg" type="image/svg+xml" />
</svelte:head>

<div class="[ visually-hidden ]">
	<h1>Picross</h1>
	<p>Explore solved nonogram puzzles with crisp visuals and in multiple dimensions.</p>
</div>

<main>
	<label>
		<span class="[ visually-hidden ]">Select level</span>

		<select bind:value>
			{#each entries as [key, level]}
				<option value={key}>{level.title}</option>
			{/each}
		</select>
	</label>

	{#key value}
		<div
			in:scale
			style="
				backface-visibility: hidden; 
				inline-size: 90vmin; 
				max-inline-size: 28rem;
			"
		>
			<Picross {...levels[value]} />
		</div>
	{/key}
</main>

<style>
	main {
		display: flex;
		gap: 2rem;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
		color: hsl(42, 15%, 13%);
		background: hsl(40, 23%, 97%);
		padding: var(--step-space-200);
		background-image: url('data:image/svg+xml;utf8,<svg viewBox="-5 -5 10 10"\ xmlns="http://www.w3.org/2000/svg">\
	<circle r="0.5" fill="hsl(43, 13%, 90%)" />\
</svg>');
		background-size: 2rem;
	}

	main div {
		margin-block: auto;
	}

	select {
		--transition-duration: 0.2s;
		--hint: hsl(41, 8%, 61%);
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
