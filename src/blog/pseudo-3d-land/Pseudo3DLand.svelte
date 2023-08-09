<script>
	import svg from './svg.js';
	import Pseudo3D from './Pseudo3D.svelte';
</script>

<div>
	{@html svg['2d']}

	<Pseudo3D />
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
	}

	div :global(> *) {
		flex-basis: 300px;
	}
</style>
