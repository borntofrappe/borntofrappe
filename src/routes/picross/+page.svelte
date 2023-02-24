<script>
	import site from '$lib/utils/site.js';
	import Picross from './Picross.svelte';
	import levels from './levels.js';

	const { title } = site;

	const keys = Object.keys(levels);
	let [, , key] = keys;
</script>

<svelte:head>
	<title>Picross | {title}</title>
	<meta
		name="description"
		content="Explore solved nonogram puzzles with crisp visuals and in multiple dimensions."
	/>
	<link rel="icon" href="/icons/picross.svg" type="image/svg+xml" />
</svelte:head>

<main>
	<label>
		<span class="visually-hidden">Select level</span>

		<select bind:value={key}>
			{#each keys as value}
				<option {value}>{value}</option>
			{/each}
		</select>
	</label>

	<div>
		<Picross {...levels[key]} />
	</div>
</main>

<style>
	main {
		min-block-size: 100vh;
		background: #fefefe;
		color: #1a3455;
		background-image: url('data:image/svg+xml;utf8,<svg viewBox="-5 -5 10 10"\ xmlns="http://www.w3.org/2000/svg">\
	<circle r="0.5" fill="%23d2dbe0" />\
</svg>');
		background-size: 2rem;
	}

	div {
		inline-size: 90vmin;
		max-inline-size: 28rem;
	}
</style>
