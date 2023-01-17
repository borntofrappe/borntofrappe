<script>
	export let title;
	export let description;
</script>

<svelte:head>
	<title>
		borntofrappe | {title}
	</title>
	<meta name="description" content={description} />
</svelte:head>

<header>
	<h1>{title}</h1>
</header>

<main>
	<slot />
</main>

<style>
	header {
		padding: 3rem 1rem;
		text-align: center;
	}

	main {
		max-width: 60ch;
		margin-inline: auto;
		padding: 1rem;
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
		--vertical-rhythm: var(--size-700);
	}

	main :global(table),
	main :global(table + *) {
		--vertical-rhythm: var(--size-700);
	}

	main :global(pre),
	main :global(pre + *) {
		--vertical-rhythm: var(--size-600);
	}

	main :global(p > code) {
		margin-block: 0.2rem;
		border-block-end: 0.2rem solid var(--accent);
	}

	main :global(.code) {
		display: flex;
		flex-direction: column;
	}

	main :global(.code pre) {
		margin-block-start: 0;
		padding: 1.25rem;
		border-radius: 1rem;
		line-height: 1.75;
		tab-size: 2;
	}

	main :global(.code > span) {
		align-self: flex-end;
		display: inline-flex;
		align-items: center;
		gap: 0 0.5rem;
		transform: translateX(-1.5rem);
		border-start-start-radius: 0.5rem;
		border-start-end-radius: 0.5rem;
		padding: 0.4rem 1rem;
		color: var(--theme-color, #e0def4);
		background: var(--theme-background, #232136);
		font-weight: 700;
	}

	main :global(.code > span > svg) {
		display: block;
		width: 1em;
		height: auto;
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
</style>
