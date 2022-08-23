<script>
	import '$lib/styles/blog.css';
	import Theme from '$lib/components/blog/Theme.svelte';

	export let title;
	export let description;

	const colors = {
		morning: { foreground: '#838ac5', background: '#9cb2ce' },
		day: { foreground: '#639aef', background: '#73d2e6' },
		night: { foreground: '#7369b5', background: '#838ace' }
	};

	let timeOfDay;
	const hours = new Date().getHours();

	if (hours > 2 && hours < 10) {
		timeOfDay = 'morning';
	} else if (hours < 18) {
		timeOfDay = 'day';
	} else {
		timeOfDay = 'night';
	}

	let foreground = colors[timeOfDay].foreground;
	let background = colors[timeOfDay].background;

	const handleChange = (e) => {
		const { detail: change } = e;
		timeOfDay = change.timeOfDay;
		background = change.background;
		foreground = change.foreground;
	};
</script>

<svelte:head>
	<title>
		borntofrappe | {title}
	</title>
	<meta name="description" content={description} />
</svelte:head>

<svg aria-hidden="true" style:position="absolute" style:width="0" style:height="0">
	<defs>
		<filter id="filter-outline">
			<feFlood flood-color={foreground || 'currentColor'} result="l1-color" />
			<feFlood flood-color="#63616b" result="l2-color" />
			<feMorphology in="SourceAlpha" operator="dilate" radius="4" result="l1-outline" />
			<feMorphology in="SourceAlpha" operator="dilate" radius="2" result="l2-outline" />
			<feComposite in="l1-color" in2="l1-outline" operator="in" result="l1-color-outline" />
			<feComposite in="l2-color" in2="l2-outline" operator="in" result="l2-color-outline" />

			<feMerge>
				<feMergeNode in="l1-color-outline" />
				<feMergeNode in="l2-color-outline" />
				<feMergeNode in="SourceGraphic" />
			</feMerge>
		</filter>
	</defs>
</svg>

<div class={timeOfDay}>
	<header style:background>
		<h1>{title}</h1>
		<Theme {timeOfDay} {colors} on:change={handleChange} />
	</header>

	<main>
		<slot />
	</main>
</div>

<style>
	div {
		min-height: 100vh;
	}

	div > :global(* + *) {
		margin-top: 1em;
	}

	.morning {
		color: var(--warm-grey-700);
		background: var(--warm-grey-100);
	}

	.day {
		color: var(--warm-grey-900);
		background: var(--warm-grey-000);
	}

	.night {
		color: var(--warm-grey-200);
		background: var(--warm-grey-900);
	}

	header {
		padding: 2rem 1rem 0;
	}

	h1 {
		color: #f7f7f7;
		text-align: center;
		filter: url(#filter-outline);
	}

	header > :global(svg) {
		max-width: 36rem;
		margin-left: auto;
		margin-right: auto;
	}
</style>
