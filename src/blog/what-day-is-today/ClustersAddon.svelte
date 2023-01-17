<script>
	const marks = [0, 1, 2, 3, 4];
	const addon = [0, 1];
</script>

<svg viewBox="-0.5 -0.5 11 6">
	<defs>
		<path id="clusters-addon-mark-0" d="M 1 1 v 4" />
		<path id="clusters-addon-mark-1" d="M 2 1 v 4" />
		<path id="clusters-addon-mark-2" d="M 3 1 v 4" />
		<path id="clusters-addon-mark-3" d="M 4 1 v 4" />
		<path id="clusters-addon-mark-4" d="M 0 3.5 l 5 -1" />
	</defs>
	<g stroke="currentColor" stroke-width="0.5">
		{#each marks as number}
			<use href="#clusters-addon-mark-{number}" />
		{/each}
		<g transform="translate(5 0)">
			{#each addon as number}
				<use href="#clusters-addon-mark-{number}" />
			{/each}
		</g>
	</g>
</svg>
