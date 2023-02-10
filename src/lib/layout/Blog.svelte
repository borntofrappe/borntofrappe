<script>
	import site from '$lib/utils/site.js';
	import themes from '$lib/utils/themes.js';

	import Theme from '$lib/components/blog/Theme.svelte';

	export let title;
	export let description;

	let { timeOfDay, foreground, background } = themes[1];

	const handleChange = ({ detail }) => {
		if (detail.timeOfDay === timeOfDay) return;

		timeOfDay = detail.timeOfDay;
		foreground = detail.foreground;
		background = detail.background;
	};
</script>

<svelte:head>
	<title>
		{title} | {site.title}
	</title>
	<meta name="description" content={description} />
</svelte:head>

<svg aria-hidden="true" style:position="absolute" style:inline-size="0" style:block-size="0">
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

<div class="box stack {timeOfDay}">
	<header
		class="box"
		style:--padding="var(--step-space-300) var(--step-space-200) 0"
		style:color="#f7f7f7"
		style:background
	>
		<h1 style:text-align="center" style:filter="url(#filter-outline)">
			{title}
		</h1>
		<div class="center" style:--measure="40rem">
			<Theme on:change={handleChange} />
		</div>
	</header>
	<div class="box" style:padding="var(--step-space-200) var(--step-space-100)">
		<main id="content" class="center flow" style:--measure="60ch">
			<slot />
		</main>
	</div>
</div>

<style>
	.morning {
		--color: var(--grey-700);
		--background: var(--grey-100);

		--accent: var(--color-300);
		--shadow: var(--color-100);

		--selection-color: var(--grey-700);
		--selection-background: var(--color-200);
	}

	.day {
		--color: var(--grey-900);
		--background: var(--grey-000);

		--accent: var(--color-400);
		--shadow: var(--color-200);

		--selection-color: var(--grey-900);
		--selection-background: var(--color-300);
	}

	.night {
		--color: var(--grey-200);
		--background: var(--grey-900);

		--accent: var(--color-600);
		--shadow: var(--color-700);

		--selection-color: var(--grey-200);
		--selection-background: var(--color-800);
	}

	main :global(h2),
	main :global(h3) {
		--space: var(--step-space-400);
	}

	main :global(h2 + *),
	main :global(h3 + *) {
		--space: var(--step-space-200);
	}

	main :global(blockquote),
	main :global(blockquote + *),
	main :global(figure),
	main :global(figure + *) {
		--space: var(--step-space-300);
	}

	main :global(table),
	main :global(table + *) {
		--space: var(--step-space-300);
	}

	main :global(pre),
	main :global(pre + *) {
		--space: var(--step-space-300);
	}

	main :global(ul > * + *),
	main :global(ol > * + *) {
		margin-block-start: 0.75em;
	}

	main :global(code) {
		font-weight: 700;
	}

	main :global(table) {
		--padding: 1rem;
		--border-radius: 0.5rem;
		table-layout: fixed;
		width: 100%;
		border-spacing: 0;
	}

	main :global(table th) {
		text-align: start;
	}

	main :global(table th),
	main :global(table td) {
		color: var(--theme-color);
		background: var(--theme-background);
		padding: var(--padding);
	}

	main :global(table tbody > tr:nth-of-type(even) td) {
		background: var(--theme-background--1);
	}

	main :global(table tbody > tr:nth-of-type(odd) td) {
		background: var(--theme-background--2);
	}

	main :global(table thead > tr > th:first-of-type) {
		border-start-start-radius: var(--border-radius);
	}

	main :global(table thead > tr > th:last-of-type) {
		border-start-end-radius: var(--border-radius);
	}

	main :global(table tbody > tr:last-of-type > td:first-of-type) {
		border-end-start-radius: var(--border-radius);
	}

	main :global(tbody > tr:last-of-type > td:last-of-type) {
		border-end-end-radius: var(--border-radius);
	}

	main :global(blockquote) {
		max-inline-size: 50ch;
		margin-inline: auto;
		font-style: italic;
		font-weight: 700;
		padding: var(--step-space-200) var(--step-space-400);
		border-radius: 0.5rem;
	}

	@supports ((-webkit-mask-image: url()) or (mask-image: url())) {
		main :global(blockquote) {
			padding-block: 1.5em;
		}

		main :global(blockquote::before) {
			content: '';
			inline-size: 3em;
			block-size: 3em;
			background: var(--accent);
			float: left;
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

		@supports (float: inline-start) {
			main :global(blockquote::before) {
				float: inline-start;
			}
		}
	}
</style>
