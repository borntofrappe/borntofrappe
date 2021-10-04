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
	import Header from '$lib/components/blog/post/Header.svelte';

	export let title;
	export let keywords;
	export let Component;
</script>

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
		margin: 3.5rem auto 5rem;
		display: flex;
		flex-direction: column;
	}

	main > :global(* + *) {
		margin-top: 1em;
		margin-top: var(--vertical-rhythm, 1em);
	}

	main :global(.code),
	main :global(.code + *) {
		--vertical-rhythm: var(--size-600);
	}

	main :global(h2),
	main :global(h3) {
		max-width: 20ch;
	}

	main :global(p > code) {
		padding: 0 0.2em;
		font-family: inherit;
		color: hsl(350, 100%, 8%);
		color: var(--primary-0);
		background: hsl(330, 100%, 92%);
		background: var(--primary-10);
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
		background: hsl(210, 20%, 12%) !important;
		background: var(--frappe-grey-1) !important;
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
</style>
