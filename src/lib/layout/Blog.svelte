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

<svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
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
		--shadow: var(--color-200);

		--selection-color: var(--grey-700);
		--selection-background: var(--color-100);
	}

	.day {
		--color: var(--grey-800);
		--background: var(--grey-000);

		--accent: var(--color-400);
		--shadow: var(--color-200);

		--selection-color: var(--grey-700);
		--selection-background: var(--color-200);
	}

	.night {
		--color: var(--grey-300);
		--background: var(--grey-900);

		--accent: var(--color-600);
		--shadow: var(--color-600);

		--selection-color: var(--grey-300);
		--selection-background: var(--grey-800);
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
		--space: var(--step-space-400);
	}

	main > :global(svg),
	main > :global(svg + *) {
		--space: var(--step-space-400);
	}

	main :global(pre),
	main :global(pre + *) {
		--space: var(--step-space-400);
	}

	main :global(table),
	main :global(table + *) {
		--space: var(--step-space-300);
	}

	main :global(ul > * + *),
	main :global(ol > * + *) {
		margin-block-start: 0.75em;
	}

	main :global(code) {
		font-weight: 700;
	}

	main :global(p > a) {
		text-decoration: none;
		background: linear-gradient(transparent 80%, var(--accent) 80%),
			linear-gradient(transparent 80%, var(--shadow) 90%);
		background-size: 0% 100%, 100% 100%;
		background-repeat: no-repeat;
		transition: background-size 0.25s cubic-bezier(0.37, 0, 0.63, 1);
	}

	main :global(p > a:hover) {
		background-size: 100% 100%, 100% 100%;
	}

	main :global(hr) {
		font-size: 2rem;
		--block-size: 1em;
		color: var(--accent, currentColor);
		border: none;
		border-bottom: 0.1em solid currentColor;
	}

	main :global(hr::before),
	main :global(hr::after) {
		display: block;
		content: '';
		aspect-ratio: 1;
		inline-size: var(--block-size, 1rem);
		block-size: var(--block-size, 1rem);
		background: currentColor;
	}

	main :global(hr::before),
	main :global(hr::after) {
		-webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -10 13 13">\
	<g fill="none" stroke-width="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">\
		<path transform="rotate(10)" d="M 0 -5 q -2 -1.5 0 -3 2 1.5 0 3" />\
		<path transform="rotate(80)" d="M 0 -5 q -2 -1.5 0 -3 2 1.5 0 3" />\
		<path d="M 0 0 l 0.5 -3 3 0 -0.5 3z" />\
		<path d="M 5 -5 l 0.25 -1.5 1.5 0 -0.25 1.5z" />\
	</g>\
</svg>');
		mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -10 13 13">\
	<g fill="none" stroke-width="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">\
		<path transform="rotate(10)" d="M 0 -5 q -2 -1.5 0 -3 2 1.5 0 3" />\
		<path transform="rotate(80)" d="M 0 -5 q -2 -1.5 0 -3 2 1.5 0 3" />\
		<path d="M 0 0 l 0.5 -3 3 0 -0.5 3z" />\
		<path d="M 5 -5 l 0.25 -1.5 1.5 0 -0.25 1.5z" />\
	</g>\
</svg>');
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
	}

	main :global(hr::before) {
		float: left;
	}

	main :global(hr::after) {
		transform: scale(-1, 1);
		float: right;
	}

	main :global(hr:nth-of-type(odd)) {
		border: none;
		border-top: 0.1em solid currentColor;
	}

	main :global(hr:nth-of-type(odd)::before) {
		transform: scale(1, -1);
	}

	main :global(hr:nth-of-type(odd)::after) {
		transform: scale(-1, -1);
	}

	main :global(figure figcaption) {
		font-weight: 700;
		text-align: center;
	}

	@supports ((-webkit-mask-image: url()) or (mask-image: url())) {
		main :global(figure figcaption) {
			display: flex;
			align-items: flex-end;
			--size: 2em;
		}

		main :global(figure figcaption::before),
		main :global(figure figcaption::after) {
			box-sizing: border-box;
			content: '';
			inline-size: var(--size, 2em);
			block-size: var(--size, 2em);
			background: var(--accent, currentColor);
			-webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -10 13 13">\
	<g fill="none" stroke-width="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">\
		<path transform="rotate(10)" d="M 0 -5 q -2 -1.5 0 -3 2 1.5 0 3" />\
		<path transform="rotate(80)" d="M 0 -5 q -2 -1.5 0 -3 2 1.5 0 3" />\
		<path d="M 0 0 l 0.5 -3 3 0 -0.5 3z" />\
		<path d="M 5 -5 l 0.25 -1.5 1.5 0 -0.25 1.5z" />\
	</g>\
</svg>');
			mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -10 13 13">\
	<g fill="none" stroke-width="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">\
		<path transform="rotate(10)" d="M 0 -5 q -2 -1.5 0 -3 2 1.5 0 3" />\
		<path transform="rotate(80)" d="M 0 -5 q -2 -1.5 0 -3 2 1.5 0 3" />\
		<path d="M 0 0 l 0.5 -3 3 0 -0.5 3z" />\
		<path d="M 5 -5 l 0.25 -1.5 1.5 0 -0.25 1.5z" />\
	</g>\
</svg>');
			-webkit-mask-repeat: no-repeat;
			mask-repeat: no-repeat;
			-webkit-mask-size: 100%;
			mask-size: 100%;
		}

		main :global(figure figcaption::before) {
			margin-inline-end: auto;
		}

		main :global(figure figcaption::after) {
			transform: scale(-1, 1);
			margin-inline-start: auto;
		}
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
			-webkit-mask-size: 100%;
			mask-size: 100%;
			-webkit-mask-repeat: no-repeat;
			mask-repeat: no-repeat;
		}

		@supports (float: inline-start) {
			main :global(blockquote::before) {
				float: inline-start;
			}
		}
	}

	main :global(.permalink) {
		display: flex;
		align-items: center;
		gap: 0 var(--step-space-100);
	}

	main :global(.permalink a) {
		inline-size: 1rem;
		block-size: 1rem;
		border-radius: 0.5rem;
		opacity: 0.3;
		background: currentColor;
		transition: opacity 0.25s cubic-bezier(0.37, 0, 0.63, 1);
	}

	main :global(.permalink a:focus) {
		opacity: 1;
	}

	@supports ((-webkit-mask-image: url()) or (mask-image: url())) {
		main :global(.permalink a) {
			inline-size: 1em;
			block-size: 1em;
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
			-webkit-mask-size: 100%;
			mask-size: 100%;
			-webkit-mask-repeat: no-repeat;
			mask-repeat: no-repeat;
		}
	}
</style>
