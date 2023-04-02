<script>
	import svg from './svg.js';
	import { animate } from './utils.js';

	const party = [
		{
			id: 'party-hero',
			style: '--c0: #030f00; --c1: #070673; --c2: #eef2d9;'
		},
		{
			id: 'party-edo',
			style: '--c0: #030f00; --c1: #00932d; --c2: #eef2d9;'
		},
		{
			id: 'party-ripa',
			style: '--c0: #030f00; --c1: #1111c2; --c2: #eef2d9;'
		},
		{
			id: 'party-icin',
			style: '--c0: #030f00; --c1: #db1051; --c2: #eef2d9;'
		}
	];
</script>

{@html svg['party']}

<svg use:animate style="display: block;" viewBox="0 0 {party.length} 1">
	{#each party as { id, style }, x}
		<use {x} {style} href="#{id}-0" width="1" height="1">
			<animate
				attributeName="href"
				values="#{id}-0; #{id}-1"
				dur="0.4s"
				begin="indefinite"
				repeatCount="indefinite"
			/>
		</use>
	{/each}
</svg>
