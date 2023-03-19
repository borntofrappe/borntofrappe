<script>
	import svg from './svg.js';
	import { animate } from './utils.js';

	const party = [
		{
			ref: 'hero',
			style: '--c0: #030f00; --c1: #070673; --c2: #eef2d9;'
		},
		{
			ref: 'edo',
			style: '--c0: #030f00; --c1: #00932d; --c2: #eef2d9;'
		},
		{
			ref: 'ripa',
			style: '--c0: #030f00; --c1: #1111c2; --c2: #eef2d9;'
		},
		{
			ref: 'icin',
			style: '--c0: #030f00; --c1: #db1051; --c2: #eef2d9;'
		}
	];
</script>

{@html svg['party']}

<svg use:animate style="display: block;" viewBox="0 0 {party.length} 1">
	{#each party as { ref, style }, x}
		<use {x} {style} href="#party-{ref}-0" width="1" height="1">
			<animate
				attributeName="href"
				values="#party-{ref}-0; #party-{ref}-1"
				dur="0.4s"
				begin="indefinite"
				repeatCount="indefinite"
			/>
		</use>
	{/each}
</svg>
