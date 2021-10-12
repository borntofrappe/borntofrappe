<script context="module">
	export async function load({ page, session }) {
		const { slug } = page.params;

		const match = session.posts.find((post) => post.slug === slug);

		if (match) {
			const posts = import.meta.glob('/src/blog/*.{md,svx}');
			const post = await posts[match.path]();

			const { default: Component, metadata } = post;

			return {
				props: {
					...metadata,
					Component
				}
			};
		}

		return {
			status: 404,
			error: new Error('Post not found')
		};
	}
</script>

<script>
	import Meta from '$lib/components/Meta.svelte';
	import Header from '$lib/components/blog/post/Header.svelte';

	export let title;
	export let brief;
	export let keywords;
	export let Component;
</script>

<Meta description="{title}, a blog post from borntofrappe. {brief}" image="blog" />

<Header {title} {keywords} />

<main id="content">
	<svelte:component this={Component} />
</main>

<style>
	main {
		width: 90vw;
		width: var(--width);
		max-width: 42rem;
		max-width: var(--max-width);
		margin: 2.5em auto 5em;
	}

	main > :global(* + *) {
		margin-top: 1em;
		margin-top: var(--vertical-rhythm, 1em);
	}

	main :global(h2),
	main :global(h3) {
		--vertical-rhythm: var(--size-800);
	}

	main :global(h2 + *),
	main :global(h3 + *) {
		--vertical-rhythm: var(--size-300);
	}

	main :global(blockquote),
	main :global(blockquote + *),
	main :global(figure),
	main :global(figure + *) {
		--vertical-rhythm: var(--size-800);
	}

	main :global(table),
	main :global(table + *) {
		--vertical-rhythm: var(--size-700);
		--vertical-rhythm: calc(var(--size-700) + 0.7rem);
	}

	main :global(.code),
	main :global(.code + *) {
		--vertical-rhythm: var(--size-600);
	}

	main :global(p > code) {
		font-family: inherit;
		font-weight: 700;
		padding: 0 0.2em;
		color: hsl(214, 15%, 88%);
		color: var(--grey-9);
		background: hsl(210, 20%, 12%);
		background: var(--grey-1);
		border-radius: 0.25em;
	}

	main :global(.code > span),
	main :global(.code pre) {
		border-radius: 0.4rem;
		padding: 0.8em;
	}

	main :global(.code > span) {
		font-weight: 700;
		color: hsl(215, 10%, 98%);
		color: var(--frappe-grey-10);
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
		transition: color var(--transition-duration) var(--ease-in-out-sine);
		display: flex;
		align-items: flex-end;
	}

	main :global(.code > span svg) {
		width: 1.25em;
		height: auto;
		margin-right: 0.4em;
	}

	main :global(.code:hover > span) {
		color: hsl(340, 90%, 55%);
		color: var(--primary-6);
	}

	main :global(.code pre) {
		tab-size: 2;
		margin-top: 0;
		line-height: 1.75;
		color: hsl(214, 15%, 88%);
		color: var(--frappe-grey-9);
		background: hsl(210, 20%, 12%);
		background: var(--frappe-grey-1);
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	main :global(.code pre) {
		overflow-x: auto;
	}

	main :global(.code pre::-webkit-scrollbar) {
		height: 0.4rem;
	}

	main :global(.code pre::-webkit-scrollbar-track) {
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
	}

	main :global(.code pre::-webkit-scrollbar-thumb) {
		background: hsl(340, 90%, 55%);
		background: var(--primary-6);
		border-radius: 0.2rem;
	}

	main :global(h2),
	main :global(h3) {
		display: flex;
		align-items: center;
	}

	main :global(h2 a),
	main :global(h3 a) {
		opacity: 0.3;
		margin-left: 0.5rem;
		width: 0.5em;
		height: 0.5em;
		transition-property: opacity, color;
		transition-duration: 0.25s;
		transition-duration: var(--transition-duration);
		transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
		transition-timing-function: var(--ease-in-out-sine);
		background: currentColor;
		border-radius: 50%;
	}

	@supports ((-webkit-mask-image: url()) or (mask-image: url())) {
		main :global(h2 a),
		main :global(h3 a) {
			border-radius: initial;
			background: initial;
			position: relative;
			width: 1em;
			height: 1em;
			z-index: 0;
		}

		main :global(h2 a::before),
		main :global(h3 a::before) {
			z-index: -5;
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: currentColor;
			-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg transform="rotate(-45)"%3E%3Cg fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"%3E%3Cpath stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /%3E%3Cpath transform="scale(-1 -1)" stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
			mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg transform="rotate(-45)"%3E%3Cg fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"%3E%3Cpath stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /%3E%3Cpath transform="scale(-1 -1)" stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
			-webkit-mask-repeat: no-repeat;
			mask-repeat: no-repeat;
		}
	}

	main :global(h2 a:focus),
	main :global(h3 a:focus) {
		opacity: 1;
	}

	main :global(h2 a:hover),
	main :global(h3 a:hover) {
		opacity: 1;
		color: hsl(340, 90%, 55%);
		color: var(--primary-6);
	}

	main :global(ul li::marker),
	main :global(ol li::marker) {
		color: hsl(340, 90%, 55%);
		color: var(--primary-6);
	}

	main :global(ol li::marker) {
		font-family: 'Josefin Sans', sans-serif;
		font-weight: 700;
	}

	main :global(ul ul),
	main :global(ol ol) {
		margin-top: 1em;
	}

	main :global(ul > * + *),
	main :global(ol > * + *) {
		margin-top: 0.5em;
	}

	main :global(li) {
		line-height: 1.5;
	}

	@supports ((-webkit-mask-image: url()) or (mask-image: url())) {
		main :global(ul),
		main :global(ol) {
			padding: 0;
		}

		main :global(ul) {
			--badge-size: 1.25em;
			list-style: none;
			margin-left: 1.25em;
			margin-left: var(--badge-size);
		}

		main :global(ul li) {
			position: relative;
			padding-left: 0.25em;
		}

		main :global(ul li::before) {
			content: '';
			position: absolute;
			top: 0.125em;
			right: 100%;
			width: 1.25em;
			width: var(--badge-size);
			height: 1.25em;
			height: var(--badge-size);
			background: hsl(340, 90%, 55%);
			background: var(--primary-6);
			-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="10" d="M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z" /%3E%3Cpath stroke-width="8" d="M -17 -0 l 12 12 21 -21" /%3E%3C/g%3E%3C/svg%3E');
			mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="10" d="M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z" /%3E%3Cpath stroke-width="8" d="M -17 -0 l 12 12 21 -21" /%3E%3C/g%3E%3C/svg%3E');
		}

		main :global(ol) {
			--badge-size: 1.25em;
			list-style: none;
			margin-left: 1.25em;
			margin-left: var(--badge-size);
			counter-reset: custom-counter;
		}

		main :global(ol li) {
			position: relative;
			padding-left: 0.25em;
		}

		main :global(ol li::before) {
			content: counter(custom-counter);
			counter-increment: custom-counter;
			font-family: 'Josefin Sans', sans-serif;
			font-weight: 700;
			color: hsl(340, 90%, 55%);
			color: var(--primary-6);
			position: absolute;
			top: 0.125em;
			right: 100%;
			width: 1.25em;
			width: var(--badge-size);
			height: 1.25em;
			height: var(--badge-size);
			text-align: center;
			transform: scale(0.8);
			transform-origin: 50% 80%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		main :global(ol li::after) {
			content: '';
			position: absolute;
			top: 0.125em;
			right: 100%;
			width: 1.25em;
			width: var(--badge-size);
			height: 1.25em;
			height: var(--badge-size);
			background: hsl(340, 90%, 55%);
			background: var(--primary-6);
			-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="10" d="M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z" /%3E%3C/g%3E%3C/svg%3E');
			mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="10" d="M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z" /%3E%3C/g%3E%3C/svg%3E');
		}
	}

	main :global(blockquote) {
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		width: max-content;
		max-width: 40ch;
		line-height: 2;
		padding: 0.8em 2em;
		border-radius: 0.4rem;
		background: hsl(335, 100%, 86%);
		background: var(--primary-9);
		color: hsl(350, 100%, 8%);
		color: var(--primary-0);
	}

	@supports ((-webkit-mask-image: url()) or (mask-image: url())) {
		main :global(blockquote) {
			position: relative;
		}

		main :global(blockquote::before),
		main :global(blockquote::after) {
			content: '';
			position: absolute;
			top: 50%;
			left: 0%;
			width: 3em;
			height: 3em;
			border-radius: 50%;
			transform: translate(-50%, -50%);
			background: hsl(340, 90%, 55%);
			background: var(--primary-6);
			-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" /%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-20 -20) scale(0.9)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(20 -25) scale(0.5)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(15 25) scale(0.8)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-15 20) scale(0.4)"/%3E%3C/g%3E%3C/svg%3E');
			mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" /%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-20 -20) scale(0.9)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(20 -25) scale(0.5)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(15 25) scale(0.8)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-15 20) scale(0.4)"/%3E%3C/g%3E%3C/svg%3E');
			pointer-events: none;
		}

		main :global(blockquote::after) {
			left: 100%;
			transform: translate(-50%, -50%) scaleX(-1);
		}
	}

	main :global(table) {
		line-height: 2;
		table-layout: fixed;
		width: 100%;
		border-collapse: collapse;
		border-radius: 0.4rem;
		color: hsl(214, 15%, 88%);
		color: var(--frappe-grey-9);
		background: hsl(210, 20%, 12%);
		background: var(--frappe-grey-1);
		font-feature-settings: 'tnum';
		position: relative;
	}

	main :global(table::before) {
		content: '';
		position: absolute;
		bottom: 100%;
		left: 0%;
		width: 100%;
		height: 0.7rem;
		border-radius: 0.4rem;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
		background-position: 0 100%;
	}

	main :global(table thead tr) {
		text-align: left;
		color: hsl(215, 10%, 98%);
		color: var(--frappe-grey-10);
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
	}

	main :global(table thead tr th) {
		font-weight: 700;
		padding: 0 1rem 0.7rem;
		transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
		transition: color var(--transition-duration) var(--ease-in-out-sine);
	}

	main :global(table thead tr th:hover) {
		color: hsl(340, 90%, 55%);
		color: var(--primary-6);
	}

	main :global(table tbody tr td) {
		font-size: 1rem;
		font-size: var(--size-400);
		padding: 0.5rem 1rem;
	}

	main :global(table tbody tr:nth-last-of-type(even) td) {
		background: hsl(210, 18%, 25%);
		background: var(--frappe-grey-2);
	}

	main :global(table [align='right']) {
		text-align: right;
	}

	main :global(table [align='center']) {
		text-align: center;
	}
</style>
