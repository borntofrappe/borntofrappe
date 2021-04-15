<script>
	import Meta from '$lib/Meta.svelte';
	import Article from '$lib/Article.svelte';
	import { session } from '$app/stores';

	const meta = {
		title: 'borntofrappe / blog',
		description:
			'Blog of borntofrappe, chronicling the journey of an aspiring developer.',
		url: '/blog',
		image: 'blog',
	};
	const posts = $session;
</script>

<Meta {...meta} />

<header>
	<h1>Jotting things down</h1>
	<p>I build, I learn, I write. Not necessarily in that order.</p>
</header>

<main id="content">
	{#if posts.length > 0}
		{#each posts as post}
			<Article {...post} />
		{/each}
	{/if}
</main>

<style>
	:global(body) {
		overflow-x: hidden;
	}

	header {
		max-width: 40rem;
		width: 90vw;
		margin: 0rem auto;
		padding: 3rem 0 3.5rem;
		line-height: 1.75;
		color: hsl(215, 10%, 97%);
		color: var(--frappe-grey-10);
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
		background-position: 0 100%;
		position: relative;
		z-index: 5;
	}

	header > * + * {
		margin-top: 1em;
	}

	header::before {
		content: '';
		position: absolute;
		top: 0%;
		left: 50%;
		width: 100vw;
		height: 100%;
		transform: translateX(-50%);
		background: inherit;
		z-index: -5;
	}

	header::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		width: 100vw;
		height: 20px;
		transform: translateX(-50%) scaleY(-1);
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
		-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
		mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
		-webkit-mask-size: 100px 40px;
		mask-size: 100px 40px;
		-webkit-mask-position: 50% 0;
		mask-position: 50% 0;
		z-index: -5;
	}

	header h1 {
		color: inherit;
	}

	header p {
		position: relative;
	}

	header p::after {
		z-index: 20;
		position: absolute;
		top: 100%;
		right: 0%;
		width: 8rem;
		height: 8rem;
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -90 140 140"%3E%3Cg fill="none" stroke="hsl(215, 10%25, 97%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cg transform="rotate(-40) translate(0 -75) rotate(40) scale(0.25)"%3E%3Cpath fill="hsl(215, 10%25, 97%25)" stroke="none" d="M-40.5-33v16h.5v.5h80v-16h-.5v-.5h-80zm8.5.5a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0A4.5 4.5 0 01-1.5-28 4.5 4.5 0 01-6-23.5a4.5 4.5 0 01-4.5-4.5A4.5 4.5 0 01-6-32.5z"/%3E%3Cg fill="none" stroke="hsl(215, 10%25, 97%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M-45-37.5h90v75h-90z" stroke-width="10"/%3E%3Cg stroke-width="8"%3E%3Cpath d="M5-4L-5 21M-18 0l-8 8 8 8M18 0l8 8-8 8"/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg transform="translate(0 -75)scale(0.25)"%3E%3Cpath stroke-width="8" d="M -10.5 12 a 21 21 0 1 1 21 0 v 5 a 4 4 0 0 1 -4 4 h -13 a 4 4 0 0 1 -4 -4 v -5"/%3E%3Cg stroke-width="7"%3E%3Cpath d="M -8 31 h 16"/%3E%3Cpath d="M -8 40.5 h 16"/%3E%3Cpath fill="hsl(215, 10%25, 97%25)" d="M -6 40.5 a 6 6 0 0 0 12 0"/%3E%3C/g%3E%3Cg transform="translate(0 -6)" stroke-width="6"%3E%3Cpath transform="rotate(0) translate(0 -34)" d="M 0 0 v -7" /%3E%3Cpath transform="rotate(45) translate(0 -34.5)" d="M 0 0 v -6.5" /%3E%3Cpath transform="rotate(-45) translate(0 -34.5)" d="M 0 0 v -6.5" /%3E%3Cpath transform="rotate(90) translate(0 -35)" d="M 0 0 v -6" /%3E%3Cpath transform="rotate(-90) translate(0 -35)" d="M 0 0 v -6" /%3E%3Cpath transform="rotate(135) translate(0 -35.5)" d="M 0 0 v -5.5" /%3E%3Cpath transform="rotate(-135) translate(0 -35.5)" d="M 0 0 v -5.5" /%3E%3C/g%3E%3C/g%3E%3Cg transform="rotate(40) translate(0 -75) rotate(-40) scale(0.25)"%3E%3Cg stroke-width="8"%3E%3Cpath d="M 16.5 -44 h -52.5 a 10 10 0 0 0 -10 10 v 68 a 10 10 0 0 0 10 10 h 54 a 10 10 0 0 0 10 -10 v -17.5"/%3E%3Cpath d="M 29 -37.5 l 17 17 -38 38 h -17 v -17 l 38 -38"/%3E%3C/g%3E%3Cg stroke-width="7"%3E%3Cpath d="M 20 -28.5 l 17 17"/%3E%3Cpath d="M -30 -22 h 25"/%3E%3Cpath d="M -30 -2 h 10"/%3E%3Cpath d="M -30 18 h 10"/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke="none"%3E%3Cpath d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath transform="scale(-1 1)" d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3Cpath transform="scale(-1 1)" d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3C/g%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(215, 10%25, 97%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
	}

	@supports (display: grid) {
		:global(body) {
			overflow-x: initial;
		}

		header {
			width: 100%;
			max-width: initial;
			margin: initial;
			display: grid;
			grid-template-columns: 1fr minmax(auto, 40rem) 1fr;
			grid-column-gap: 5vw;
		}

		header > * {
			grid-column: 2;
		}

		header::before {
			display: none;
		}

		header::after {
			left: 0%;
			width: 100%;
			transform: scaleY(-1);
		}
	}

	main {
		max-width: 40rem;
		width: 90vw;
		margin: 4rem auto 5rem;
	}

	main > :global(* + *) {
		margin-top: 1.25rem;
	}

	@supports ((mask-image: url()) or (-webkit-mask-image: url())) {
		main :global(article:first-of-type h2 a) {
			display: inline-flex;
			align-items: center;
		}

		main :global(article:first-of-type h2 a::after) {
			flex-shrink: 0;
			content: '';
			width: 1.5em;
			height: 1.5em;
			background: currentColor;
			mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" /%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-20 -20) scale(0.9)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(20 -25) scale(0.5)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(15 25) scale(0.8)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-15 20) scale(0.4)"/%3E%3C/g%3E%3C/svg%3E');
			-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" /%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-20 -20) scale(0.9)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(20 -25) scale(0.5)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(15 25) scale(0.8)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-15 20) scale(0.4)"/%3E%3C/g%3E%3C/svg%3E');
		}
	}

	@supports (display: grid) {
		main {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
			grid-gap: 1.5rem 1.75rem;
		}

		main > :global(* + *) {
			margin-top: initial;
		}

		main :global(article:first-of-type) {
			grid-column: 1/-1;
		}
	}

	@supports (grid-template-columns: subgrid) {
		main :global(article) {
			grid-gap: 0;
			display: grid;
			grid-row: span 3;
			grid-template-rows: subgrid;
			justify-items: start;
		}
	}
</style>