<script>
	export let Component;
</script>

<article>
	<Component />
</article>

<style>
	article {
		width: 95vw;
		width: var(--width);
		max-width: 42rem;
		max-width: var(--max-width);
		margin: 2em auto 4em;
	}

	article > :global(* + *) {
		margin-top: 1em;
		margin-top: var(--vertical-rhythm, 1em);
	}

	article:global(h2),
	article:global(h3) {
		--vertical-rhythm: var(--size-800);
	}

	article:global(h2 + *),
	article:global(h3 + *) {
		--vertical-rhythm: var(--size-300);
	}

	article:global(blockquote),
	article:global(blockquote + *) {
		--vertical-rhythm: var(--size-800);
	}

	article:global(table),
	article:global(table + *) {
		--vertical-rhythm: var(--size-700);
	}

	article:global(pre),
	article:global(pre + *) {
		--vertical-rhythm: var(--size-600);
	}
</style>
