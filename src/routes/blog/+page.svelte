<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import Heading from '$lib/components/Heading.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import site from '$lib/utils/site.js';
	import { format } from './utils.js';
	export let data;

	const { title, themes } = site;

	$: blog = data.blog;
	$: pages = +data.pages;
	$: page = +data.page;

	let [, timeOfDay] = themes;
	let showToggle = false;
	let showSelector = false;

	onMount(() => {
		const value = localStorage.getItem('timeOfDay');
		if (value) {
			timeOfDay = value;
		}

		showToggle = true;
	});

	const handleClick = () => {
		showSelector = !showSelector;
	};

	const handleChange = () => {
		document.documentElement.setAttribute('data-time-of-day', timeOfDay);
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

<div
	class="[ box ]"
	style="
		--box-color: var(--color);
		--box-background: var(--background);
		min-height: 100vh;
		z-index: 1;
		position: relative;
	"
>
	<div class="[ stack ]">
		<header
			class="[ box ]"
			style="
			--padding: var(--step-space-300) 0;
			--box-color: var(--theme-color);
			--box-background: var(--theme-background);
		"
		>
			<div class="[ center cluster ]" style="--justify: space-between; --align: center;">
				<Heading level="h1" stroke="var(--theme-foreground)" fill="var(--theme-color)">
					Blog
				</Heading>

				<button class="[ theme-toggle ]" data-show={showToggle} on:click={handleClick}>
					<span class="[ visually-hidden ]">Toggle theme selector</span>
					<svg viewBox="0 0 1 1">
						<use href="#blog-marker-{timeOfDay}" />
					</svg>
				</button>
			</div>
		</header>

		<div class="[ center ]">
			{#if showSelector}
				<fieldset on:change={handleChange} transition:slide class="[ switcher ] [ theme-selector ]">
					<legend class="[ visually-hidden ]">Time of day</legend>
					{#each themes as value}
						<label
							class="[ box ]"
							style="
							--padding: var(--step-space-200) var(--step-space-200);
							--box-color: #f7f7f7;
							--box-background: var(--background-{value});
						"
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
</div>

<div
	style="
		position: sticky;
		bottom: 0;
	"
>
	<Footer />
</div>

<style>
	.theme-toggle {
		inline-size: 3em;
		block-size: 3em;
		padding: 0;
		background: none;
		border: none;
		border-radius: 50%;
		border: 0.2em solid transparent;
	}

	.theme-toggle {
		opacity: 0;
		visibility: hidden;
	}

	.theme-toggle[data-show='true'] {
		opacity: 1;
		visibility: visible;
		transition: opacity 0.17s cubic-bezier(0.37, 0, 0.63, 1);
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
