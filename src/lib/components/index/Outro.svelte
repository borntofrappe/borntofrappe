<script>
	import Tangram from '$lib/components/tangram/Tangram.svelte';
</script>

<footer>
	<p style:font-size="var(--size-400)">Designed with care, oft-time in pieces.</p>
	<Tangram shape="heart" padding={1} />
</footer>

<style>
	footer {
		text-align: center;
		color: hsl(216, 33%, 97%);
		background: hsl(210, 24%, 16%);
		padding: 2rem 0;
	}

	footer > :global(* + *) {
		margin-top: 0.75em;
	}

	footer > :global(svg) {
		display: inline-block;
		max-width: 8rem;
		width: 100%;
		height: auto;
	}
</style>
