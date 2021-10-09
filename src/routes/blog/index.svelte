<script context="module">
	export async function load({ session }) {
		const { posts } = session;

		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import Meta from '$lib/components/Meta.svelte';
	import Header from '$lib/components/routes/Header.svelte';
	import Post from '$lib/components/blog/Post.svelte';

	export let posts;
</script>

<Meta
	description="Blog for the personal website of Gabriele Corti, inline @borntofrappe. There are {posts.length} articles a changing number of subjects."
	image="blog.png"
/>

<Header
	title="Jotting things down"
	body="I build, I learn, I write. Not necessarily in that order."
	illustration={`url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -90 140 140"%3E%3Cg fill="none" stroke="hsl(215, 10%25, 97%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cg transform="rotate(-40) translate(0 -75) rotate(40) scale(0.25)"%3E%3Cpath fill="hsl(215, 10%25, 97%25)" stroke="none" d="M-40.5-33v16h.5v.5h80v-16h-.5v-.5h-80zm8.5.5a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0A4.5 4.5 0 01-1.5-28 4.5 4.5 0 01-6-23.5a4.5 4.5 0 01-4.5-4.5A4.5 4.5 0 01-6-32.5z"/%3E%3Cg fill="none" stroke="hsl(215, 10%25, 97%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M-45-37.5h90v75h-90z" stroke-width="10"/%3E%3Cg stroke-width="8"%3E%3Cpath d="M5-4L-5 21M-18 0l-8 8 8 8M18 0l8 8-8 8"/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg transform="translate(0 -75)scale(0.25)"%3E%3Cpath stroke-width="8" d="M -10.5 12 a 21 21 0 1 1 21 0 v 5 a 4 4 0 0 1 -4 4 h -13 a 4 4 0 0 1 -4 -4 v -5"/%3E%3Cg stroke-width="7"%3E%3Cpath d="M -8 31 h 16"/%3E%3Cpath d="M -8 40.5 h 16"/%3E%3Cpath fill="hsl(215, 10%25, 97%25)" d="M -6 40.5 a 6 6 0 0 0 12 0"/%3E%3C/g%3E%3Cg transform="translate(0 -6)" stroke-width="6"%3E%3Cpath transform="rotate(0) translate(0 -34)" d="M 0 0 v -7" /%3E%3Cpath transform="rotate(45) translate(0 -34.5)" d="M 0 0 v -6.5" /%3E%3Cpath transform="rotate(-45) translate(0 -34.5)" d="M 0 0 v -6.5" /%3E%3Cpath transform="rotate(90) translate(0 -35)" d="M 0 0 v -6" /%3E%3Cpath transform="rotate(-90) translate(0 -35)" d="M 0 0 v -6" /%3E%3Cpath transform="rotate(135) translate(0 -35.5)" d="M 0 0 v -5.5" /%3E%3Cpath transform="rotate(-135) translate(0 -35.5)" d="M 0 0 v -5.5" /%3E%3C/g%3E%3C/g%3E%3Cg transform="rotate(40) translate(0 -75) rotate(-40) scale(0.25)"%3E%3Cg stroke-width="8"%3E%3Cpath d="M 16.5 -44 h -52.5 a 10 10 0 0 0 -10 10 v 68 a 10 10 0 0 0 10 10 h 54 a 10 10 0 0 0 10 -10 v -17.5"/%3E%3Cpath d="M 29 -37.5 l 17 17 -38 38 h -17 v -17 l 38 -38"/%3E%3C/g%3E%3Cg stroke-width="7"%3E%3Cpath d="M 20 -28.5 l 17 17"/%3E%3Cpath d="M -30 -22 h 25"/%3E%3Cpath d="M -30 -2 h 10"/%3E%3Cpath d="M -30 18 h 10"/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke="none"%3E%3Cpath d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath transform="scale(-1 1)" d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3Cpath transform="scale(-1 1)" d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3C/g%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(215, 10%25, 97%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`}
/>

<main id="content">
	{#if posts.length > 0}
		{#each posts as post, i}
			<Post {...post} latest={i === 0} />
		{/each}
	{:else}
		<h2>... get writing!</h2>
	{/if}
</main>

<style>
	main {
		width: 90vw;
		width: var(--width);
		max-width: 42rem;
		max-width: var(--max-width);
		margin: 2em auto 5em;
	}

	main > :global(* + *) {
		margin-top: 1em;
	}

	main :global(article > * + *) {
		margin-top: 0.4em;
	}

	@supports (display: grid) {
		main {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
			gap: 1.75em 1em;
		}

		main > :global(* + *) {
			margin-top: initial;
		}

		main > :global(article:first-of-type) {
			grid-column: 1/-1;
		}
	}

	@supports (grid-template-columns: subgrid) {
		main > :global(article) {
			display: grid;
			grid-template-rows: subgrid;
			grid-row: span 3;
			justify-items: start;
			gap: 0;
		}
	}
</style>
