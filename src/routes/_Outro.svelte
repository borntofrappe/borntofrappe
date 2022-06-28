<script>
	import Tangram from './tangram/_Tangram.svelte';
</script>

<footer>
	<p style:font-size="var(--size-400)">Designed with care, oft-time in pieces.</p>
	<Tangram shape="heart" padding={1} />
</footer>

<style>
	footer {
		color: #f5f7fa;
		background: #1f2933;
		padding: 2rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	footer > :global(* + *) {
		margin-top: 0.75em;
	}

	footer > :global(svg) {
		max-width: 8rem;
		height: auto;
	}
</style>
