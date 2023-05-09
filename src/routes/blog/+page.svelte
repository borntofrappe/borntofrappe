<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import themes from '$lib/utils/themes.js';

	import site from '$lib/utils/site.js';
	import { format } from './utils.js';
	export let data;

	const { title } = site;

	$: blog = data.blog;
	$: pages = +data.pages;
	$: page = +data.page;

	let { timeOfDay, foreground, background } = themes[1];
	let showToggle = false;
	let showSelector = false;

	onMount(() => {
		const value = localStorage.getItem('timeOfDay');
		if (value) {
			timeOfDay = value;
			background = themes.find((d) => d.timeOfDay === timeOfDay).background;
		}

		showToggle = true;
	});

	const handleClick = () => {
		showSelector = !showSelector;
	};

	const handleChange = () => {
		background = themes.find((d) => d.timeOfDay === timeOfDay).background;
		localStorage.setItem('timeOfDay', timeOfDay);
	};
</script>

<svelte:head>
	<title>Blog | {title}</title>
	<meta name="description" content="Writing in prose and often with sense." />
	<link rel="icon" href="/icons/blog.svg" type="image/svg+xml" />
</svelte:head>

<svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
	<defs>
		{#each themes as { timeOfDay, foreground }}
			<filter id="blog-filter-{timeOfDay}">
				<feFlood flood-color={foreground} result="l1-color" />
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
		{/each}

		<symbol id="blog-marker-morning" viewBox="-7 -7 14 14">
			<circle r="7" fill="#838ac5" />
			<circle r="6" fill="#f7f7f7" stroke="#63616b" stroke-width="0.75" />
			<g fill="#f7f752" stroke="#e6ca31" stroke-width="0.3">
				<circle r="3" />
			</g>
		</symbol>
		<symbol id="blog-marker-day" viewBox="-7 -7 14 14">
			<circle r="7" fill="#639aef" />
			<circle r="6" fill="#f7f7f7" stroke="#63616b" stroke-width="0.75" />
			<g fill="#f7f752" stroke="#e6ca31" stroke-width="0.3">
				<circle r="3" />
				<path d="M 0 -3.5 h -1 l 1 -1 1 1z" />
				<path transform="rotate(45)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
				<path transform="rotate(90)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
				<path transform="rotate(135)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
				<path transform="rotate(180)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
				<path transform="rotate(225)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
				<path transform="rotate(270)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
				<path transform="rotate(315)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
			</g>
		</symbol>
		<symbol id="blog-marker-night" viewBox="-7 -7 14 14">
			<circle r="7" fill="#7369b5" />
			<circle r="6" fill="#f7f7f7" stroke="#63616b" stroke-width="0.75" />
			<g fill="#f7f752" stroke="#e6ca31" stroke-width="0.3">
				<path transform="rotate(-45)" d="M 0 -3 a 3 3 0 1 1 -3 3 2 2 0 0 0 3 -3z" />
			</g>
		</symbol>
	</defs>
</svg>

<div class="[ stack box ] [ {timeOfDay} ]">
	<header
		class="[ box ]"
		style:--padding="var(--step-space-400) 0"
		style:--box-color="#f7f7f7"
		style:--box-background={background}
	>
		<div class="[ center cluster ]" style="--justify: space-between;">
			<h1 style:filter="url(#blog-filter-{timeOfDay})">Blog</h1>

			{#if showToggle}
				<button class="[ theme-toggle ]" in:slide on:click={handleClick}>
					<span class="[ visually-hidden ]">Toggle theme selector</span>
					<svg viewBox="0 0 1 1">
						<use href="#blog-marker-{timeOfDay}" />
					</svg>
				</button>
			{/if}
		</div>
	</header>

	<div class="[ center ]">
		{#if showSelector}
			<fieldset on:change={handleChange} transition:slide class="[ switcher ] [ theme-selector ]">
				<legend class="[ visually-hidden ]">Time of day</legend>
				{#each themes as { timeOfDay: value }}
					<label
						class="[ box ]"
						style:--padding="var(--step-space-200) var(--step-space-200)"
						style:--box-color="#f7f7f7"
						style:--box-background={themes.find((d) => d.timeOfDay === value).background}
					>
						<input style="accent-color: #f7f7f7" type="radio" bind:group={timeOfDay} {value} />
						<span style="font-weight: 700; letter-spacing: 1px; text-transform: capitalize"
							>{value}</span
						>
					</label>
				{/each}
			</fieldset>
		{/if}

		<div class="[ grid ] [ blog ]" data-layout="50-50" style="--gutter: var(--step-space-300)">
			{#each blog as { title, date, description, slug }}
				<article class="[ flow ] [ blog__post ]" style="--space: var(--space-100)">
					<h2><a href={slug}>{title}</a></h2>
					<time class="[ font-size:small ]" style="display: inline-block;" datetime={date}
						>{format(new Date(date))}</time
					>
					<p>{description}</p>
				</article>
			{/each}
		</div>

		<div class="[ cluster ]">
			{#if page > 0}
				<a style="margin-inline-end: auto;" href="/blog?page={page - 1}">Newer posts</a>
			{/if}
			{#if page < pages}
				<a style="margin-inline-start: auto;" href="/blog?page={page + 1}">Older posts</a>
			{/if}
		</div>
	</div>
</div>

<style>
	.morning {
		--box-color: var(--grey-700);
		--box-background: var(--grey-100);

		--accent: var(--color-300);
		--shadow: var(--color-200);

		--selection-color: var(--grey-700);
		--selection-background: var(--color-100);
	}

	.day {
		--box-color: var(--grey-800);
		--box-background: var(--grey-000);

		--accent: var(--color-400);
		--shadow: var(--color-200);

		--selection-color: var(--grey-700);
		--selection-background: var(--color-200);
	}

	.night {
		--box-color: var(--grey-300);
		--box-background: var(--grey-900);

		--accent: var(--color-600);
		--shadow: var(--color-600);

		--selection-color: var(--grey-300);
		--selection-background: var(--grey-800);
	}

	.theme-toggle {
		inline-size: 3.25rem;
		block-size: 3.25rem;
		padding: 0;
		background: none;
		border: none;
		border-radius: 50%;
		border: 0.25rem solid transparent;
	}

	.theme-toggle:focus {
		border-color: hsl(0 0% 0% / 0.2);
		outline: none;
	}

	.theme-toggle:focus:not(:focus-visible) {
		border-color: transparent;
	}

	.theme-toggle > svg {
		display: block;
	}

	.theme-selector {
		padding: 0;
		border: none;
		margin-inline: 0;
	}

	.theme-selector label {
		border-radius: 0.25rem;
	}

	.blog__post {
		padding: var(--step-space-300) var(--step-space-200);
	}

	.blog__post time {
		display: inline-block;
	}
</style>
