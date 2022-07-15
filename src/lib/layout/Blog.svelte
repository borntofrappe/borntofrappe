<script>
	import Theme from '$lib/components/Theme.svelte';

	export let title;
	export let description;

	let timeOfDay;
	let background;
	let foreground;

	const handleChange = (e) => {
		const { detail: change } = e;
		timeOfDay = change.timeOfDay;
		background = change.background;
		foreground = change.foreground;
	};
</script>

<svelte:head>
	<title>
		borntofrappe | blog - {title}
	</title>
	<meta name="description" content={description} />
</svelte:head>

<svg aria-hidden="true" style:position="absolute" style:width="0" style:height="0">
	<defs>
		<filter id="filter-outline">
			<feFlood flood-color={foreground || 'currentColor'} result="ccolor" />
			<feFlood flood-color="#63616b" result="ocolor" />
			<feMorphology in="SourceAlpha" operator="dilate" radius="4" result="coutline" />
			<feMorphology in="SourceAlpha" operator="dilate" radius="2" result="ooutline" />
			<feComposite in="ccolor" in2="coutline" operator="in" result="ccolor-outline" />
			<feComposite in="ocolor" in2="ooutline" operator="in" result="ocolor-outline" />

			<feMerge>
				<feMergeNode in="ccolor-outline" />
				<feMergeNode in="ocolor-outline" />
				<feMergeNode in="SourceGraphic" />
			</feMerge>
		</filter>
	</defs>
</svg>

<div class={timeOfDay}>
	<header style:background>
		<h1>{title}</h1>
		<Theme {timeOfDay} on:change={handleChange} />
	</header>

	<main>
		<slot />
	</main>
</div>

<style>
	div > :global(* + *) {
		margin-top: 1em;
	}

	.morning {
		color: hsl(0, 0%, 23%);
		background: hsl(0, 0%, 93%);
	}

	.day {
		color: hsl(0, 0%, 12%);
		background: hsl(0, 0%, 97%);
	}

	.night {
		color: hsl(0, 0%, 93%);
		background: hsl(0, 0%, 12%);
	}

	header {
		padding: 2rem 1rem 0;
	}

	h1 {
		color: hsl(0, 0%, 97%);
		text-align: center;
		filter: url(#filter-outline);
	}

	header > :global(svg) {
		max-width: 36rem;
		margin-left: auto;
		margin-right: auto;
	}

	main {
		max-width: 42rem;
		width: 90vmin;
		width: calc(100vmin - 20px);
		margin-left: auto;
		margin-right: auto;
		padding: 1rem;
	}

	main > :global(* + *) {
		margin-top: 0.75em;
	}
</style>
