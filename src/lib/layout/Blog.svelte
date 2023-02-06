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
			<Theme {timeOfDay} {colors} on:change={handleChange} />
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
		--shadow: var(--color-100);
	}

	.day {
		--color: var(--grey-900);
		--background: var(--grey-000);
		--shadow: var(--color-200);
	}

	.night {
		--color: var(--grey-200);
		--background: var(--grey-900);
		--shadow: var(--color-900);
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

	main :global(blockquote) {
		max-inline-size: 50ch;
		margin-inline: auto;
		font-style: italic;
		font-weight: 700;
		padding: var(--step-space-200) var(--step-space-400);
		border-radius: 0.5rem;
	}

	main :global(p > code) {
		margin-block: var(--step-space-000);
		border-block-end: 0.2rem solid var(--shadow);
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
	}
</style>
