<script>
	import site from '$lib/utils/site.js';

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
	} else if (hours <= 18) {
		timeOfDay = 'day';
	} else {
		timeOfDay = 'night';
	}

	let { foreground, background } = colors[timeOfDay];

	const handleChange = (e) => {
		const { detail: change } = e;
		timeOfDay = change.timeOfDay;
		background = change.background;
		foreground = change.foreground;
	};
</script>

<svelte:head>
	<title>
		{title} | {site.title}
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

<a href="#content" class="skip-to-content visually-hidden">Skip to content</a>

<div class={timeOfDay}>
	<header style:background>
		<h1 style:filter="url(#filter-outline)">{title}</h1>
		<Theme {timeOfDay} {colors} on:change={handleChange} />
	</header>
	<main id="content">
		<slot />
	</main>
</div>

<style>
	div {
		min-height: 100vh;
	}

	div > :global(* + *) {
		margin-block-start: 1em;
	}

	.morning {
		color: var(--grey-700);
		background: var(--grey-100);
		--shadow: var(--color-100);
	}

	.day {
		color: var(--grey-900);
		background: var(--grey-000);
		--shadow: var(--color-200);
	}

	.night {
		color: var(--grey-200);
		background: var(--grey-900);
		--shadow: var(--color-900);
	}

	header {
		color: #f7f7f7;
		background: #838ace;
		padding: var(--step-space-400) var(--step-space-200) 0;
	}

	h1 {
		color: inherit;
		text-align: center;
	}

	header > :global(svg) {
		max-width: 36rem;
		margin-inline: auto;
	}

	main {
		max-width: 70ch;
		margin-inline: auto;
		padding: var(--step-space-200);
	}

	main > :global(* + *) {
		margin-block-start: 1em;
		margin-block-start: var(--vertical-rhythm, 1em);
	}

	main :global(ul > * + *),
	main :global(ol > * + *) {
		margin-block-start: 0.75em;
	}

	main :global(h2),
	main :global(h3) {
		--vertical-rhythm: var(--step-space-400);
	}

	main :global(h2 + *),
	main :global(h3 + *) {
		--vertical-rhythm: var(--step-space-100);
	}

	main :global(blockquote),
	main :global(blockquote + *),
	main :global(figure),
	main :global(figure + *) {
		--vertical-rhythm: var(--step-space-300);
	}

	main :global(table),
	main :global(table + *) {
		--vertical-rhythm: var(--step-space-300);
	}

	main :global(pre),
	main :global(pre + *) {
		--vertical-rhythm: var(--step-space-300);
	}

	main :global(blockquote) {
		max-width: 50ch;
		margin-inline: auto;
		font-style: italic;
		font-weight: 700;
		padding: var(--step-space-200) var(--step-space-400);
		background: var(--color-000);
		border-radius: 0.5rem;
	}

	main :global(p > code) {
		margin-block: var(--step-space-000);
		border-block-end: 0.2rem solid var(--shadow);
	}

	main :global(.code) {
		display: flex;
		flex-direction: column;
		font-size: var(--step-size-200);
	}

	main :global(.code pre) {
		margin-block-start: 0;
		padding: var(--step-space-300);
		border-radius: 1rem;
		line-height: 1.75;
		tab-size: 2;
	}

	main :global(.code pre),
	main :global(.code > span) {
		color: var(--theme-color, #e0def4);
		background: var(--theme-background, #232136);
	}

	main :global(.code > span) {
		align-self: flex-end;
		display: inline-flex;
		align-items: center;
		gap: 0 var(--step-space-100);
		border-start-start-radius: 0.5rem;
		border-start-end-radius: 0.5rem;
		margin-inline-end: var(--step-space-200);
		padding: var(--step-space-000) var(--step-space-200);
		font-weight: 700;
	}

	main :global(.code > span > svg) {
		display: block;
		height: 1em;
		width: auto;
	}

	main :global(.code pre) {
		overflow-x: auto;
	}

	main :global(.code pre::-webkit-scrollbar) {
		height: 0.4rem;
	}

	main :global(.code pre::-webkit-scrollbar-thumb) {
		background: var(--accent);
		border-radius: 0.2rem;
	}

	main :global(.permalink) {
		display: flex;
		align-items: center;
		gap: 0 var(--step-space-100);
	}

	main :global(.permalink a) {
		width: 1rem;
		height: 1rem;
		border-radius: 0.5rem;
		opacity: 0.3;
		background: currentColor;
		transition: opacity 0.25s cubic-bezier(0.37, 0, 0.63, 1);
	}

	main :global(.permalink a:focus) {
		opacity: 1;
	}

	@supports ((-webkit-mask-image: url()) or (mask-image: url())) {
		main :global(blockquote) {
			padding-block: 1.5em;
		}

		main :global(blockquote::before) {
			content: '';
			width: 3em;
			height: 3em;
			background: var(--accent);
			float: left;
			margin-inline-end: var(--step-space-100);
			mask-image: url('data:image/svg+xml,\
		  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">\
			<defs>\
			  <path id="star" d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" />\
			</defs>\
			<g fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">\
			  <use href="%23star" />\
			  <use href="%23star" transform="translate(-20 -20) scale(0.9)"/>\
			  <use href="%23star" transform="translate(20 -25) scale(0.5)"/>\
			  <use href="%23star" transform="translate(15 25) scale(0.8)"/>\
			  <use href="%23star" transform="translate(-15 20) scale(0.4)"/>\
			</g>\
		  </svg>');
			-webkit-mask-image: url('data:image/svg+xml,\
		  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">\
			<defs>\
			  <path id="star" d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" />\
			</defs>\
			<g fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">\
			  <use href="%23star" />\
			  <use href="%23star" transform="translate(-20 -20) scale(0.9)"/>\
			  <use href="%23star" transform="translate(20 -25) scale(0.5)"/>\
			  <use href="%23star" transform="translate(15 25) scale(0.8)"/>\
			  <use href="%23star" transform="translate(-15 20) scale(0.4)"/>\
			</g>\
		  </svg>');
		}

		main :global(.permalink a) {
			width: 1em;
			height: 1em;
			border-radius: initial;
			position: relative;
			-webkit-mask-image: url('data:image/svg+xml,\
			  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">\
				  <g transform="rotate(-45)">\
				  <g fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round">\
					  <path id="link" stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" />\
					  <use href="%23link" transform="scale(-1 -1)" />\
				  </g>\
				  </g>\
			  </svg>');
			mask-image: url('data:image/svg+xml,\
			  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">\
				  <g transform="rotate(-45)">\
				  <g fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round">\
					  <path id="link" stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" />\
					  <use href="%23link" transform="scale(-1 -1)" />\
				  </g>\
				  </g>\
			  </svg>');
		}
	}

	.skip-to-content {
		font-size: var(--size-200);
		color: var(--background);
		background: var(--color);
		padding: var(--space-100) var(--space-300);
		border-radius: 2rem;
		text-decoration: none;
		position: absolute;
		top: var(--step-space-100);
		left: 50%;
		transform: translateX(-50%);
		outline: none;
		z-index: 5;
	}

	@supports ((-webkit-mask-image: url()) or (mask-image: url())) {
		.skip-to-content {
			display: inline-flex;
			align-items: center;
			gap: 0 var(--step-space-100);
		}

		.skip-to-content::after {
			content: '';
			width: 1em;
			height: 1em;
			background: currentColor;
			mask-image: url('data:image/svg+xml,\
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">\
		  <g fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round">\
			<path d="M 3 -20 h 22 a 20 20 0 0 1 0 40 h -22 l 10 -10 -10 10 10 10" />\
			<path d="M -45 -20 h 28" />\
			<path d="M -45 0 h 28" />\
			<path d="M -45 20 h 28" />\
		  </g>\
		</svg>');
			-webkit-mask-image: url('data:image/svg+xml,\
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">\
		  <g fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round">\
			<path d="M 3 -20 h 22 a 20 20 0 0 1 0 40 h -22 l 10 -10 -10 10 10 10" />\
			<path d="M -45 -20 h 28" />\
			<path d="M -45 0 h 28" />\
			<path d="M -45 20 h 28" />\
		  </g>\
		</svg>');
		}
	}
</style>
